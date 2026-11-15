// Moderator groups: the admin appoints and removes moderators; the approval rule reads the group's size. Server only.
import type { AdminDb } from '../admin/db';
import { MODERATOR_THRESHOLD, MODERATOR_ELIGIBLE_POINTS, splitGroupKey } from '../../shared/moderation';
import { allGroupKeys } from './topics';

const UUID = /^[0-9a-f-]{36}$/;

export const hasRole = async (db: AdminDb, userId: string, role: string): Promise<boolean> =>
  (await db.all('SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role = ?', [userId, role])).length > 0;

export const isTeacherOrModerator = async (db: AdminDb, userId: string): Promise<boolean> =>
  (await db.all("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role IN ('teacher', 'moderator')", [userId])).length > 0;

export const moderatorCount = async (db: AdminDb, groupKey: string): Promise<number> =>
  Number((await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM group_moderators WHERE group_key = ?', [groupKey]))[0]?.n ?? 0);

/** One moderator's approval is enough only once the group has MODERATOR_THRESHOLD moderators; before that the owner decides. */
export const groupIsSelfGoverning = (moderators: number): boolean => moderators >= MODERATOR_THRESHOLD;

export const isGroupModerator = async (db: AdminDb, userId: string, groupKey: string): Promise<boolean> =>
  (await db.all('SELECT 1 AS x FROM group_moderators WHERE user_id = ? AND group_key = ?', [userId, groupKey])).length > 0;

export const reputationOf = async (db: AdminDb, userId: string): Promise<number> =>
  Number((await db.all<{ p: number | null }>('SELECT SUM(points) AS p FROM reputation_events WHERE user_id = ?', [userId]))[0]?.p ?? 0);

export interface GroupRow { groupKey: string; subject: string; phase: string; moderators: { userId: string; email: string; appointedAt: number; points: number }[]; selfGoverning: boolean }

/** The admin's view: every subject-and-phase group, with who moderates it. (Adults only: no learner data.) */
export async function listGroups(db: AdminDb): Promise<GroupRow[]> {
  const rows = await db.all<{ group_key: string; user_id: string; email: string; appointed_at: number }>(
    'SELECT m.group_key, m.user_id, u.email, m.appointed_at FROM group_moderators m LEFT JOIN users u ON u.id = m.user_id ORDER BY m.appointed_at', []);
  const pts = new Map((await db.all<{ user_id: string; p: number }>('SELECT user_id, SUM(points) AS p FROM reputation_events GROUP BY user_id', [])).map((r) => [r.user_id, Number(r.p)]));
  const by = new Map<string, GroupRow['moderators']>();
  for (const r of rows) (by.get(r.group_key) ?? by.set(r.group_key, []).get(r.group_key)!).push({ userId: r.user_id, email: r.email ?? '', appointedAt: Number(r.appointed_at), points: pts.get(r.user_id) ?? 0 });
  return allGroupKeys().map((g) => { const m = by.get(g.groupKey) ?? []; return { ...g, moderators: m, selfGoverning: groupIsSelfGoverning(m.length) }; });
}

export type GroupResult = { ok: true } | { ok: false; status: 400 | 404 | 409; error: string };

/** Appoint an approved teacher to a group. Grants the moderator role; the admin can remove it again. */
export async function appointModerator(db: AdminDb, groupKey: string, userId: string, adminEmail: string, now: number): Promise<GroupResult> {
  const g = splitGroupKey(groupKey);
  if (!g || !allGroupKeys().some((k) => k.groupKey === groupKey)) return { ok: false, status: 404, error: 'Unknown group' };
  if (!UUID.test(userId)) return { ok: false, status: 404, error: 'Unknown teacher' };
  if (!(await hasRole(db, userId, 'teacher'))) return { ok: false, status: 400, error: 'Only an approved teacher can be appointed' };
  if (await isGroupModerator(db, userId, groupKey)) return { ok: false, status: 409, error: 'Already a moderator of this group' };
  await db.batch([
    { sql: 'INSERT OR IGNORE INTO moderator_groups (group_key, subject, phase, created_at) VALUES (?, ?, ?, ?)', params: [groupKey, g.subject, g.phase, now] },
    { sql: 'INSERT OR IGNORE INTO group_moderators (group_key, user_id, appointed_by, appointed_at) VALUES (?, ?, ?, ?)', params: [groupKey, userId, adminEmail, now] },
    { sql: "INSERT OR IGNORE INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, 'moderator', 'admin', ?)", params: [userId, now] },
  ]);
  return { ok: true };
}

export async function removeModerator(db: AdminDb, groupKey: string, userId: string): Promise<GroupResult> {
  if (!(await isGroupModerator(db, userId, groupKey))) return { ok: false, status: 404, error: 'Not a moderator of this group' };
  await db.batch([
    { sql: 'DELETE FROM group_moderators WHERE group_key = ? AND user_id = ?', params: [groupKey, userId] },
    // The role goes with the last group membership; teachers keep the teacher role.
    { sql: "DELETE FROM user_roles WHERE user_id = ? AND role = 'moderator' AND granted_by = 'admin' AND NOT EXISTS (SELECT 1 FROM group_moderators WHERE user_id = ?)", params: [userId, userId] },
  ]);
  return { ok: true };
}

/** Teachers the admin may appoint: approved teachers with their points (an indication only, the admin decides). */
export async function candidates(db: AdminDb): Promise<{ userId: string; email: string; points: number; eligible: boolean }[]> {
  const rows = await db.all<{ user_id: string; email: string; p: number | null }>(
    `SELECT r.user_id, u.email, (SELECT SUM(points) FROM reputation_events e WHERE e.user_id = r.user_id) AS p
     FROM user_roles r JOIN users u ON u.id = r.user_id WHERE r.role = 'teacher' ORDER BY p DESC, u.email LIMIT 200`, []);
  return rows.map((r) => ({ userId: r.user_id, email: r.email, points: Number(r.p ?? 0), eligible: Number(r.p ?? 0) >= MODERATOR_ELIGIBLE_POINTS }));
}
