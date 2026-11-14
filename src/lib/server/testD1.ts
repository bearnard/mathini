// Test helper: a D1Database look-alike over node:sqlite (built into Node), so the real SQL runs in unit tests.
// Only the surface this codebase uses: prepare().bind().all/first/run and batch(). Returns null if node:sqlite is missing.
import type { DatabaseSync } from 'node:sqlite';

type Param = string | number | null;

export interface TestD1 {
  db: D1Database;
  raw: DatabaseSync;
}

export async function openTestD1(): Promise<TestD1 | null> {
  let Ctor: typeof import('node:sqlite').DatabaseSync;
  try {
    ({ DatabaseSync: Ctor } = await import('node:sqlite'));
  } catch {
    return null;
  }
  const raw = new Ctor(':memory:');
  const stmt = (sql: string, params: Param[] = []) => {
    const s = {
      bind: (...p: Param[]) => stmt(sql, p),
      async all<T>() {
        const results = raw.prepare(sql).all(...params) as unknown as T[];
        return { results, success: true, meta: {} };
      },
      async first<T>(col?: string) {
        const row = raw.prepare(sql).get(...params) as Record<string, unknown> | undefined;
        if (!row) return null;
        return (col ? row[col] : row) as T;
      },
      async run() {
        const r = raw.prepare(sql).run(...params);
        return { results: [], success: true, meta: { changes: Number(r.changes), last_row_id: Number(r.lastInsertRowid) } };
      },
      exec: () => { raw.prepare(sql).run(...params); },
    };
    return s;
  };
  const db = {
    prepare: (sql: string) => stmt(sql),
    async batch(statements: ReturnType<typeof stmt>[]) {
      raw.exec('BEGIN');
      try {
        const out = [];
        for (const s of statements) out.push(await s.run());
        raw.exec('COMMIT');
        return out;
      } catch (e) {
        raw.exec('ROLLBACK');
        throw e;
      }
    },
  } as unknown as D1Database;
  return { db, raw };
}

/** item_cache as production has it before 0007 (0001, 0002 columns), then migration 0007 applied for real. */
export async function openPoolDb(): Promise<TestD1 | null> {
  const t = await openTestD1();
  if (!t) return null;
  const fs = await import('node:fs');
  t.raw.exec(`CREATE TABLE item_cache (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT NOT NULL, prompt TEXT NOT NULL, options TEXT NOT NULL, answer TEXT NOT NULL, explanation TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL, vector_id TEXT, section TEXT NOT NULL DEFAULT 'general')`);
  t.raw.exec('CREATE UNIQUE INDEX item_cache_task_prompt ON item_cache(task, prompt)');
  t.raw.exec(fs.readFileSync('migrations/0007_item_quality.sql', 'utf8'));
  return t;
}
