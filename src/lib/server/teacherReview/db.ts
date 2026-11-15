// A tiny database interface for teacher review. It has the same shape as the admin one, but this folder imports nothing
// from the admin, learner or events code (see guard.test.ts), so the interface is declared here.

export type TrParam = string | number | null;

export interface TrStatement {
  sql: string;
  params?: TrParam[];
}

export interface TrDb {
  all<T = Record<string, unknown>>(sql: string, params?: TrParam[]): Promise<T[]>;
  /** Runs the statements atomically (a D1 batch, or a SQLite transaction in tests). */
  batch(statements: TrStatement[]): Promise<void>;
}

interface D1Like {
  prepare(sql: string): {
    bind(...v: unknown[]): { all<T>(): Promise<{ results: T[] }>; run(): Promise<unknown> };
  };
  batch(stmts: never[]): Promise<unknown>;
}

export function trDbOfD1(db: D1Like): TrDb {
  return {
    async all<T>(sql: string, params: TrParam[] = []) {
      const r = await db.prepare(sql).bind(...params).all<T>();
      return r.results ?? [];
    },
    async batch(statements) {
      await db.batch(statements.map((s) => db.prepare(s.sql).bind(...(s.params ?? []))) as never[]);
    },
  };
}
