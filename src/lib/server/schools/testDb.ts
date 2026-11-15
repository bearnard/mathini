// Test helper: migrations 0013 (adult accounts) and 0016 (schools) over node:sqlite, behind the AdminDb interface the code uses on D1.
import fs from 'node:fs';
import { openAuthDb } from '../adultAuth/testDb';

export const NOW = 1_800_000_000_000;

export async function openSchoolsDb() {
  const a = await openAuthDb();
  if (!a) return null;
  a.raw.exec(fs.readFileSync('migrations/0016_schools.sql', 'utf8'));
  return a;
}
export type SchoolsTestDb = NonNullable<Awaited<ReturnType<typeof openSchoolsDb>>>;

let n = 0;
const uuid = () => `00000000-0000-4000-8000-${String(++n).padStart(12, '0')}`;
export const newTestId = uuid;

export function addUser(t: SchoolsTestDb, email: string, roles: string[] = ['parent']): string {
  const id = uuid();
  t.raw.prepare('INSERT INTO users (id, email, created_at) VALUES (?, ?, ?)').run(id, email, NOW - 1000);
  for (const r of roles) t.raw.prepare("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, ?, 'self', ?)").run(id, r, NOW - 1000);
  return id;
}
