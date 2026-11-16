// The leaderboard reads (docs/notes/leaderboard.md). Every function takes the SIGNED-IN learner's id and decides from the database what that learner may see:
// a class board only for a current member of an ACTIVE class, a school board only for a learner in an active class of that school (a school only ever
// comes from a teacher's verified class, never from the free-text school typed at sign-up), an area board only as schools. A refusal is `null` (the route
// answers 404, the same as "no such board"). Nothing returned holds an id, a real name, accuracy or a count of right answers.
//
// Cost: each board is ONE query over the cached weekly_points (class of 40 or school of 1,000: one round trip, rows read = members). The overview is one batch.
import { allBatch, type AdminDb } from '../admin/db';
import { consistency } from '../../shared/progressMeasures';
import { MIN_ACTIVE_LEARNERS, WEEK_MS, rankOf, schoolScore, sastDayOf, weekStartOf } from '../../shared/weeklyPoints';
import type { AreaResponse, AreaSchoolRow, BoardEntry, LeaderboardOverview, PeopleBoard } from '../../shared/leaderboardTypes';

export const CLASS_BOARD_SHOWN = 50;
export const SCHOOL_BOARD_SHOWN = 25;
export const AREA_BOARD_SHOWN = 20;
const ID = /^[0-9a-f-]{36}$/i;
const STREAK_LOOKBACK_DAYS = 120;

interface PersonRow { id: string; display_name: string; avatar: string | null; points: number }

/** Entries for a people board: everyone with points ranked (equal points share a rank), the learner's own row added at the end when they have none. Pure. */
export function boardFrom(rows: readonly PersonRow[], meId: string, shown: number, name: string, weekStart: number): PeopleBoard {
  const scored = rows.filter((r) => Number(r.points) > 0).sort((a, b) => Number(b.points) - Number(a.points) || a.display_name.localeCompare(b.display_name));
  const ranks = rankOf(scored, (r) => Number(r.points));
  const entries: BoardEntry[] = scored.map((r, i) => ({ rank: ranks[i], nickname: r.display_name, avatar: r.avatar ?? '', points: Number(r.points), isMe: r.id === meId }));
  const meIdx = entries.findIndex((e) => e.isMe);
  const top = entries.slice(0, shown);
  if (meIdx >= shown) top.push(entries[meIdx]);
  const me = rows.find((r) => r.id === meId);
  if (meIdx < 0 && me) top.push({ rank: 0, nickname: me.display_name, avatar: me.avatar ?? '', points: 0, isMe: true });
  return { name, weekStart, entries: top, size: rows.length, myRank: meIdx >= 0 ? entries[meIdx].rank : null, myPoints: meIdx >= 0 ? entries[meIdx].points : 0 };
}

/** The board of one class. null unless the learner is a current member of that ACTIVE class. */
export async function classBoard(db: AdminDb, studentId: string, classId: unknown, now: number): Promise<PeopleBoard | null> {
  if (typeof classId !== 'string' || !ID.test(classId)) return null;
  const weekStart = weekStartOf(now);
  const [rows] = await allBatch(db, [{
    sql: `SELECT st.id, st.display_name, st.avatar, COALESCE(wp.points, 0) AS points, c.name AS class_name
          FROM classes c JOIN class_members m ON m.class_id = c.id AND m.left_at IS NULL JOIN students st ON st.id = m.student_id
          LEFT JOIN weekly_points wp ON wp.student_id = m.student_id AND wp.week_start = ?
          WHERE c.id = ? AND c.status = 'active' LIMIT 200`,
    params: [weekStart, classId],
  }]);
  const people = rows as unknown as (PersonRow & { class_name: string })[];
  if (!people.some((r) => r.id === studentId)) return null;
  return boardFrom(people, studentId, CLASS_BOARD_SHOWN, people[0].class_name, weekStart);
}

/** The board of one school: the learners in its active classes. null unless the learner is in one of them. */
export async function schoolBoard(db: AdminDb, studentId: string, schoolId: unknown, now: number): Promise<PeopleBoard | null> {
  if (typeof schoolId !== 'string' || !ID.test(schoolId)) return null;
  const weekStart = weekStartOf(now);
  const [rows] = await allBatch(db, [{
    sql: `SELECT st.id, st.display_name, st.avatar, COALESCE(wp.points, 0) AS points, u.school_name
          FROM (SELECT DISTINCT m.student_id, s.name AS school_name FROM classes c JOIN schools s ON s.id = c.school_id
                JOIN class_members m ON m.class_id = c.id AND m.left_at IS NULL WHERE c.school_id = ? AND c.status = 'active') u
          JOIN students st ON st.id = u.student_id LEFT JOIN weekly_points wp ON wp.student_id = u.student_id AND wp.week_start = ?
          LIMIT 3000`,
    params: [schoolId, weekStart],
  }]);
  const people = rows as unknown as (PersonRow & { school_name: string })[];
  if (!people.some((r) => r.id === studentId)) return null;
  return boardFrom(people, studentId, SCHOOL_BOARD_SHOWN, people[0].school_name, weekStart);
}

interface SchoolAgg { id: string; name: string; active: number; total: number }

/** Ranks schools by average points per active learner; schools under the minimum do not appear. Pure. */
export function rankSchools(rows: readonly SchoolAgg[], mySchoolId: string): { list: AreaSchoolRow[]; mine: { name: string; activeLearners: number; score: number | null; rank: number | null } | null } {
  const scored = rows.map((r) => ({ r, score: schoolScore(Number(r.total), Number(r.active)) })).filter((x): x is { r: SchoolAgg; score: number } => x.score !== null)
    .sort((a, b) => b.score - a.score || a.r.name.localeCompare(b.r.name));
  const ranks = rankOf(scored, (x) => x.score);
  const all = scored.map((x, i) => ({ rank: ranks[i], name: x.r.name, activeLearners: Number(x.r.active), score: x.score, isMine: x.r.id === mySchoolId }));
  const myRow = all.find((x) => x.isMine);
  const myRaw = rows.find((r) => r.id === mySchoolId);
  const list = all.slice(0, AREA_BOARD_SHOWN);
  if (myRow && !list.includes(myRow)) list.push(myRow);
  return { list, mine: myRaw ? { name: myRaw.name, activeLearners: Number(myRaw.active), score: myRow?.score ?? null, rank: myRow?.rank ?? null } : null };
}

/**
 * A district or province board: SCHOOLS ranked, never a child. `schoolId` (optional) picks which of the learner's own schools; it must be one of them.
 * null when the learner is in no school, or `schoolId` is not theirs.
 */
export async function areaBoard(db: AdminDb, studentId: string, level: 'district' | 'province', schoolId: unknown, now: number): Promise<AreaResponse | null> {
  const weekStart = weekStartOf(now);
  const [mine] = await allBatch(db, [{
    sql: `SELECT DISTINCT s.id, s.name, s.province, s.district FROM class_members m JOIN classes c ON c.id = m.class_id AND c.status = 'active' JOIN schools s ON s.id = c.school_id
          WHERE m.student_id = ? AND m.left_at IS NULL ORDER BY s.name LIMIT 10`,
    params: [studentId],
  }]);
  const schools = mine as unknown as { id: string; name: string; province: string | null; district: string | null }[];
  if (schoolId !== undefined && schoolId !== null && schoolId !== '' && (typeof schoolId !== 'string' || !schools.some((s) => s.id === schoolId))) return null;
  const school = typeof schoolId === 'string' && schoolId ? schools.find((s) => s.id === schoolId) : schools[0];
  if (!school) return null;
  const area = level === 'district' ? school.district : school.province;
  if (!area || !area.trim()) return { available: false, reason: 'no-district' };
  const col = level === 'district' ? 'district' : 'province';
  const [rows] = await allBatch(db, [{
    sql: `SELECT sc.id, sc.name, COUNT(CASE WHEN COALESCE(wp.answered, 0) > 0 THEN 1 END) AS active, COALESCE(SUM(wp.points), 0) AS total
          FROM schools sc JOIN (SELECT DISTINCT c.school_id, m.student_id FROM classes c JOIN class_members m ON m.class_id = c.id AND m.left_at IS NULL WHERE c.status = 'active') u ON u.school_id = sc.id
          LEFT JOIN weekly_points wp ON wp.student_id = u.student_id AND wp.week_start = ?
          WHERE lower(sc.${col}) = lower(?) GROUP BY sc.id, sc.name LIMIT 1000`,
    params: [weekStart, area.trim()],
  }]);
  const { list, mine: m } = rankSchools(rows as unknown as SchoolAgg[], school.id);
  return { available: true, board: { level, area: area.trim(), weekStart, schools: list, mine: { name: m?.name ?? school.name, activeLearners: m?.activeLearners ?? 0, score: m?.score ?? null, rank: m?.rank ?? null, minActive: MIN_ACTIVE_LEARNERS } } };
}

/** What the trophy screen needs first: the learner's boards and personal bests. One batch of four reads. */
export async function overview(db: AdminDb, studentId: string, now: number): Promise<LeaderboardOverview> {
  const weekStart = weekStartOf(now);
  const [classes, bests, days, cur] = await allBatch(db, [
    {
      sql: `SELECT c.id, c.name, s.id AS school_id, s.name AS school_name, s.province, s.district FROM class_members m JOIN classes c ON c.id = m.class_id AND c.status = 'active' JOIN schools s ON s.id = c.school_id
            WHERE m.student_id = ? AND m.left_at IS NULL ORDER BY c.name LIMIT 20`,
      params: [studentId],
    },
    { sql: 'SELECT week_start, points FROM weekly_points WHERE student_id = ? ORDER BY points DESC LIMIT 1', params: [studentId] },
    { sql: "SELECT DISTINCT (created_at + 7200000) / 86400000 AS d FROM attempts WHERE student_id = ? AND created_at >= ? AND marked_by IS NOT 'client' LIMIT 200", params: [studentId, now - STREAK_LOOKBACK_DAYS * 86_400_000] },
    { sql: 'SELECT points FROM weekly_points WHERE student_id = ? AND week_start = ?', params: [studentId, weekStart] },
  ]);
  const weekPoints = Number(cur[0]?.points ?? 0);
  const schoolMap = new Map<string, { id: string; name: string; hasDistrict: boolean; hasProvince: boolean }>();
  for (const c of classes) schoolMap.set(String(c.school_id), { id: String(c.school_id), name: String(c.school_name), hasDistrict: !!String(c.district ?? '').trim(), hasProvince: !!String(c.province ?? '').trim() });
  return {
    weekStart, weekEnd: weekStart + WEEK_MS,
    classes: classes.map((c) => ({ id: String(c.id), name: String(c.name) })),
    schools: [...schoolMap.values()],
    personal: { weekPoints, bestWeekPoints: Math.max(weekPoints, Number(bests[0]?.points ?? 0)), streakDays: consistency(days.map((r) => Number(r.d)), sastDayOf(now)).streakDays },
  };
}
