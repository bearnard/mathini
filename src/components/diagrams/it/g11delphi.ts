/**
 * Expected results for the Grade 11 Delphi lessons (file handling, debugging, SQL through ADO, data processing and revision).
 * Every number, trace row and output a slide shows comes from here (g11delphi.test.ts), so a worked example can not be wrong.
 * Delphi strings are 1-based, so delphiPos/Copy/Delete/Insert follow that convention.
 */

// ---------- Delphi string routines (1-based) ----------

/** Pos(sub, s): index of the first match, or 0 when there is none. */
export const delphiPos = (sub: string, s: string): number => s.indexOf(sub) + 1;

/** Copy(s, start, count): `count` characters from position `start`. */
export const delphiCopy = (s: string, start: number, count: number): string => s.slice(Math.max(start - 1, 0), Math.max(start - 1, 0) + Math.max(count, 0));

/** Delete(s, start, count) (a procedure in Delphi; this returns the new string). */
export const delphiDelete = (s: string, start: number, count: number): string => s.slice(0, start - 1) + s.slice(start - 1 + count);

/** Insert(sub, s, index) (a procedure in Delphi; this returns the new string). */
export const delphiInsert = (sub: string, s: string, index: number): string => s.slice(0, index - 1) + sub + s.slice(index - 1);

/** Split "Thandi,78" at the first comma the Delphi way: p := Pos(',', line); name := Copy(line, 1, p - 1); value := Copy(line, p + 1, Length(line)). */
export const splitAtComma = (line: string): { p: number; name: string; value: string } => {
  const p = delphiPos(',', line);
  return { p, name: delphiCopy(line, 1, p - 1), value: delphiCopy(line, p + 1, line.length) };
};

// ---------- text files ----------

export type FileMode = 'Reset' | 'Rewrite' | 'Append';

/** What the file holds after a program opens it with `mode` and writes `written` lines (Reset opens for reading only, so nothing is written). */
export const fileAfter = (existing: readonly string[], mode: FileMode, written: readonly string[]): string[] =>
  mode === 'Append' ? [...existing, ...written] : mode === 'Rewrite' ? [...written] : [...existing];

/** `while not Eof(f) do begin ReadLn(f, line); ... end;` over a file: how many times the body runs, and the sum of the numeric lines. */
export const readLoop = (lines: readonly string[]) => {
  const numbers = lines.map((l) => Number(l));
  return { iterations: lines.length, total: numbers.reduce((a, b) => a + b, 0), lastLine: lines[lines.length - 1] ?? '' };
};

// ---------- trace tables ----------

export interface TraceRow { i: number; total: number }

/** for i := 1 to n do total := total + i * i; one row per pass, after the pass. */
export const traceSumOfSquares = (n: number): TraceRow[] => {
  const rows: TraceRow[] = [];
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
    rows.push({ i, total });
  }
  return rows;
};

/** result := 1; for i := 1 to n do result := result * x; the value after each pass. */
export const tracePower = (x: number, n: number): { i: number; result: number }[] => {
  const rows: { i: number; result: number }[] = [];
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
    rows.push({ i, result });
  }
  return rows;
};

/** while num >= 10 do begin num := num - 10; count := count + 1; end; rows hold (num, count) after each pass. */
export const traceWhileSubtract = (start: number): { num: number; count: number }[] => {
  const rows: { num: number; count: number }[] = [];
  let num = start;
  let count = 0;
  while (num >= 10) {
    num -= 10;
    count += 1;
    rows.push({ num, count });
  }
  return rows;
};

/** A loop whose counter only changes inside an IF that is never true leaves the counter at 0. */
export const countWhen = (values: readonly number[], test: (v: number) => boolean): number => values.filter(test).length;

// ---------- logic errors ----------

export const sum = (xs: readonly number[]): number => xs.reduce((a, b) => a + b, 0);
/** The right average (sum divided by how many). */
export const average = (xs: readonly number[]): number => sum(xs) / xs.length;
/** The logic error of leaving out the division: the "average" is the total. */
export const averageWithoutDividing = (xs: readonly number[]): number => sum(xs);
/** An off-by-one loop: `for i := 1 to High - 1` misses the last element. */
export const sumMissingLast = (xs: readonly number[]): number => sum(xs.slice(0, -1));
export const maxOf = (xs: readonly number[]): number => Math.max(...xs);

// ---------- test data ----------

export type TestKind = 'normal' | 'boundary' | 'invalid';
/** Classify a mark for a field whose valid range is lo..hi. */
export const classifyTestValue = (v: number, lo: number, hi: number): TestKind => (v < lo || v > hi ? 'invalid' : v === lo || v === hi ? 'boundary' : 'normal');

// ---------- validation ----------

export const presenceCheck = (s: string): boolean => s !== '';
/** TryStrToInt for an optional minus sign and digits only. */
export const tryStrToInt = (s: string): { ok: boolean; value: number } => (/^-?\d+$/.test(s) ? { ok: true, value: Number(s) } : { ok: false, value: 0 });
export const rangeCheck = (v: number, lo: number, hi: number): boolean => v >= lo && v <= hi;
export const lengthCheck = (s: string, n: number): boolean => s.length === n;
/** Pos('@', s) > 0 */
export const formatCheckAt = (s: string): boolean => delphiPos('@', s) > 0;

// ---------- SQL through ADO ----------

export interface StudentRow { id: number; name: string; mark: number }

/** SELECT * FROM Students WHERE Mark >= min ORDER BY Mark DESC (ties keep table order). */
export const selectMarkAtLeast = (rows: readonly StudentRow[], min: number): StudentRow[] =>
  rows.map((r, idx) => ({ r, idx })).filter(({ r }) => r.mark >= min).sort((a, b) => b.r.mark - a.r.mark || a.idx - b.idx).map(({ r }) => r);

/** UPDATE Students SET Mark = Mark + bump WHERE Mark < below; returns the table and the number of rows changed (what ExecSQL does). */
export const updateBump = (rows: readonly StudentRow[], below: number, bump: number) => {
  let changed = 0;
  const out = rows.map((r) => (r.mark < below ? (changed++, { ...r, mark: r.mark + bump }) : r));
  return { rows: out, changed };
};

/** SELECT COUNT(*), AVG(Mark) FROM Students (the average to one decimal place). */
export const countAndAverage = (rows: readonly StudentRow[]) => ({ count: rows.length, average: Math.round((sum(rows.map((r) => r.mark)) / rows.length) * 10) / 10 });

/** SELECT Grp, COUNT(*) AS Learners, AVG(Mark) AS Average FROM Results GROUP BY Grp ORDER BY Grp (the average to one decimal place). */
export const groupAverages = (rows: readonly { group: string; mark: number }[]) => {
  const groups = [...new Set(rows.map((r) => r.group))].sort();
  return groups.map((g) => {
    const marks = rows.filter((r) => r.group === g).map((r) => r.mark);
    return { group: g, count: marks.length, average: Math.round((sum(marks) / marks.length) * 10) / 10 };
  });
};

/** Total of the lines that are whole numbers; the others are skipped (what try..except on StrToInt does inside a loop). */
export const totalValidLines = (lines: readonly string[]): { total: number; skipped: number } => {
  let total = 0;
  let skipped = 0;
  for (const l of lines) {
    const t = tryStrToInt(l);
    if (t.ok) total += t.value;
    else skipped += 1;
  }
  return { total, skipped };
};
