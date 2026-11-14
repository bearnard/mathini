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
}

interface D1Like {
  prepare(sql: string): {
    bind(...v: unknown[]): { all<T>(): Promise<{ results: T[] }>; run(): Promise<unknown> };
  };
  batch(stmts: never[]): Promise<unknown>;
}

export function d1Adapter(db: D1Like): AdminDb {
  return {
    async all<T = Row>(sql: string, params: Param[] = []) {
      const r = await db.prepare(sql).bind(...params).all<T>();
      return r.results ?? [];
    },
    async batch(statements) {
      await db.batch(statements.map((s) => db.prepare(s.sql).bind(...(s.params ?? []))) as never[]);
    },
  };
}
