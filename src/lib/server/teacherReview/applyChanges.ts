// Pure logic for scripts/apply-review-changes.ts (ADR 0004, part 4). No file or network access here, so it can be unit-tested.
//
// A teacher-accepted lesson-line change is stored in D1 as a `lesson_change_queue` row: {id, file, old_text, new_text, item_id, status}.
// This module turns an exported queue into exact string replacements and refuses any change that is not safe:
//   - `old` must occur EXACTLY once in the file as it stands at that moment (so a stale or ambiguous anchor never edits the wrong place),
//   - `new` must differ from `old`,
//   - the path must stay inside the allowed folder (no `..`, no absolute path, only .ts/.tsx),
//   - only `pending` rows are processed.
// Changes to one file are applied in queue order (ascending id), each against the result of the one before.

export interface QueueRow {
  id: number | string;
  file: string;
  old_text: string;
  new_text: string;
  item_id?: number | string | null;
  status?: string | null;
}

export type Outcome = 'applied' | 'refused' | 'skipped';

export interface ChangeResult {
  id: number | string;
  file: string;
  outcome: Outcome;
  reason: string; // 'ok' for applied
}

export interface ApplyResult {
  results: ChangeResult[];
  /** New content for each file that has at least one applied change. */
  files: Map<string, string>;
}

/** Accepts a plain array of rows, `{results: [...]}` (wrangler d1 --json shape) or `[{results: [...]}]`. */
export const parseQueueExport = (raw: unknown): QueueRow[] => {
  let rows: unknown = raw;
  if (Array.isArray(rows) && rows.length > 0 && rows.every((r) => r && typeof r === 'object' && Array.isArray((r as { results?: unknown }).results))) {
    rows = (rows as { results: unknown[] }[]).flatMap((r) => r.results);
  } else if (rows && typeof rows === 'object' && !Array.isArray(rows) && Array.isArray((rows as { results?: unknown }).results)) {
    rows = (rows as { results: unknown[] }).results;
  }
  if (!Array.isArray(rows)) throw new Error('queue export must be an array of rows, {results: [...]} or [{results: [...]}]');
  return rows.map((r, i) => {
    const o = r as Record<string, unknown>;
    if (!o || typeof o !== 'object') throw new Error(`row ${i} is not an object`);
    for (const k of ['id', 'file', 'old_text', 'new_text']) {
      if (o[k] === undefined || o[k] === null) throw new Error(`row ${i} is missing "${k}"`);
    }
    if (typeof o.file !== 'string' || typeof o.old_text !== 'string' || typeof o.new_text !== 'string') {
      throw new Error(`row ${i}: file, old_text and new_text must be strings`);
    }
    return {
      id: o.id as number | string,
      file: o.file,
      old_text: o.old_text,
      new_text: o.new_text,
      item_id: (o.item_id ?? null) as number | string | null,
      status: (o.status ?? 'pending') as string,
    };
  });
};

/** A queue path is allowed when it is relative, has no `..` or empty segment, no backslash or NUL, and ends in .ts or .tsx. */
export const checkPath = (file: string): string | null => {
  if (!file) return 'empty path';
  if (file.includes('\0') || file.includes('\\')) return 'path contains a NUL or backslash';
  if (file.startsWith('/') || /^[A-Za-z]:/.test(file)) return 'absolute path';
  const parts = file.split('/');
  if (parts.some((p) => p === '..' || p === '' || p === '.')) return 'path has a "..", "." or empty segment';
  if (!/\.tsx?$/.test(file)) return 'only .ts and .tsx files can be changed';
  if (/\.test\.tsx?$/.test(file)) return 'test files cannot be changed';
  return null;
};

export const countOccurrences = (haystack: string, needle: string): number => {
  if (!needle) return 0;
  let n = 0;
  for (let i = haystack.indexOf(needle); i !== -1; i = haystack.indexOf(needle, i + needle.length)) n++;
  return n;
};

/**
 * Applies the queue. `read(file)` returns the current text of a file or null if it does not exist.
 * Sorted by numeric id where possible so the order never depends on how the export was sorted.
 */
export const applyChanges = (rows: QueueRow[], read: (file: string) => string | null): ApplyResult => {
  const ordered = [...rows].sort((a, b) => Number(a.id) - Number(b.id) || String(a.id).localeCompare(String(b.id)));
  const current = new Map<string, string | null>();
  const changed = new Set<string>();
  const results: ChangeResult[] = [];
  const done = (r: QueueRow, outcome: Outcome, reason: string) => results.push({ id: r.id, file: r.file, outcome, reason });

  for (const r of ordered) {
    if ((r.status ?? 'pending') !== 'pending') {
      done(r, 'skipped', `status is "${r.status}", not pending`);
      continue;
    }
    const bad = checkPath(r.file);
    if (bad) {
      done(r, 'refused', bad);
      continue;
    }
    if (!r.old_text) {
      done(r, 'refused', 'old text is empty');
      continue;
    }
    if (r.old_text === r.new_text) {
      done(r, 'refused', 'old and new text are the same');
      continue;
    }
    if (!current.has(r.file)) current.set(r.file, read(r.file));
    const text = current.get(r.file);
    if (text === null || text === undefined) {
      done(r, 'refused', 'file not found');
      continue;
    }
    const n = countOccurrences(text, r.old_text);
    if (n !== 1) {
      done(r, 'refused', n === 0 ? 'old text not found' : `old text occurs ${n} times (must be exactly once)`);
      continue;
    }
    // Replace by index, not by String.replace, so "$&" and similar sequences in the new text stay literal.
    const i = text.indexOf(r.old_text);
    current.set(r.file, text.slice(0, i) + r.new_text + text.slice(i + r.old_text.length));
    changed.add(r.file);
    done(r, 'applied', 'ok');
  }

  const files = new Map<string, string>();
  for (const f of changed) files.set(f, current.get(f) as string);
  return { results, files };
};

const sqlStr = (s: string) => `'${s.replace(/'/g, "''")}'`;

/** SQL that records the outcome in D1 (dry-run output only: the script never touches the database). */
export const statusSql = (results: ChangeResult[], appliedCommit: string | null): string => {
  const lines: string[] = ['-- Generated by scripts/apply-review-changes.ts. Review, then run with wrangler d1 execute --local (or the owner runs it remotely).'];
  for (const r of results) {
    if (r.outcome === 'skipped' || !/^\d+$/.test(String(r.id))) continue;
    if (r.outcome === 'applied') {
      lines.push(`UPDATE lesson_change_queue SET status = 'applied', applied_commit = ${appliedCommit ? sqlStr(appliedCommit) : 'NULL'} WHERE id = ${r.id} AND status = 'pending';`);
    } else {
      lines.push(`UPDATE lesson_change_queue SET status = 'failed' WHERE id = ${r.id} AND status = 'pending'; -- ${r.reason.replace(/[\r\n]/g, ' ')}`);
    }
  }
  return lines.join('\n') + '\n';
};

export const reportMarkdown = (results: ChangeResult[], mode: 'dry-run' | 'apply'): string => {
  const n = (o: Outcome) => results.filter((r) => r.outcome === o).length;
  const out = [
    `# Review change report (${mode})`,
    '',
    `${results.length} queue rows: ${n('applied')} ${mode === 'apply' ? 'applied' : 'would apply'}, ${n('refused')} refused, ${n('skipped')} skipped.`,
    '',
    '| Queue id | File | Outcome | Reason |',
    '|---|---|---|---|',
    ...results.map((r) => `| ${r.id} | \`${r.file}\` | ${r.outcome} | ${r.reason.replace(/\|/g, '\\|')} |`),
    '',
  ];
  return out.join('\n');
};
