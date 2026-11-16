// Tiny database interface for the admin queries, so the SAME SQL runs against
// D1 in production and against node:sqlite in unit tests.

export type Row = Record<string, unknown>;
export type Param = string | number | null;

export interface Statement {
  sql: string;
  params?: Param[];
}

export interface AdminDb {
  all<T = Row>(sql: string, params?: Param[]): Promise<T[]>;
  /** Runs statements atomically (D1 batch / a SQLite transaction). */
  batch(statements: Statement[]): Promise<void>;
  /** Several independent reads in ONE round trip (D1 batch); the results come back in order. Absent on adapters that cannot: use allBatch(). */
  batchAll?(statements: Statement[]): Promise<Row[][]>;
  /** Lets background work finish after the response is sent (waitUntil on the Worker). Absent: the work is simply awaited. */
  defer?(work: Promise<unknown>): void;
}

/** Independent reads in one round trip when the database can (D1), one after another when it cannot (tests). The order of the results is the order asked. */
export async function allBatch<T extends Row[][] = Row[][]>(db: AdminDb, statements: Statement[]): Promise<T> {
  if (statements.length === 0) return [] as unknown as T;
  if (db.batchAll) return (await db.batchAll(statements)) as T;
  const out: Row[][] = [];
  for (const s of statements) out.push(await db.all(s.sql, s.params));
  return out as T;
}

/** Runs `work` after the response when the database supports it, otherwise right now. A failure never reaches the caller either way. */
export async function runLater(db: AdminDb, work: () => Promise<unknown>): Promise<void> {
  const p = work().catch(() => undefined);
  if (db.defer) db.defer(p); else await p;
}

interface D1Like {
  prepare(sql: string): {
    bind(...v: unknown[]): { all<T>(): Promise<{ results: T[] }>; run(): Promise<unknown> };
  };
  batch(stmts: never[]): Promise<unknown>;
}

export function d1Adapter(db: D1Like, ctx?: { waitUntil(p: Promise<unknown>): void }): AdminDb {
  return {
    defer: ctx ? (p) => ctx.waitUntil(p) : undefined,
    async batchAll<T = Row>(statements: Statement[]) {
      const rs = (await db.batch(statements.map((s) => db.prepare(s.sql).bind(...(s.params ?? []))) as never[])) as { results?: T[] }[];
      return rs.map((r) => r.results ?? []) as unknown as Row[][];
    },
    async all<T = Row>(sql: string, params: Param[] = []) {
      const r = await db.prepare(sql).bind(...params).all<T>();
      return r.results ?? [];
    },
    async batch(statements) {
      await db.batch(statements.map((s) => db.prepare(s.sql).bind(...(s.params ?? []))) as never[]);
    },
  };
}
