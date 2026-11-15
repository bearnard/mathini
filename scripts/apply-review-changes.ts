// Applies accepted teacher-review lesson changes (ADR 0004, part 4).
//
//   node --import tsx scripts/apply-review-changes.ts QUEUE.json [--apply] [--root src/curriculum] [--report FILE] [--sql FILE] [--commit SHA] [--test]
//
// QUEUE.json is an export of the D1 table lesson_change_queue (rows with id, file, old_text, new_text, status). Accepted shapes: an array of
// rows, {results: [...]} or [{results: [...]}] (what `wrangler d1 execute --json` prints). Paths are relative to --root (default
// src/curriculum), or start with `src/` for a repo-relative path.
//
// DRY RUN BY DEFAULT: nothing is written unless --apply is given. Every change is checked first: `old_text` must occur exactly once in the
// file, must differ from `new_text`, and the file must have no uncommitted edits. A refused row is reported and skipped; the others still apply.
// The report (markdown) is always written. --sql writes UPDATE statements that mark rows applied/failed in D1; this script never touches the
// database. --test runs `npm test` after --apply. Exit code: 0 all fine, 1 some rows refused or tests failed, 2 bad arguments.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { applyChanges, parseQueueExport, reportMarkdown, statusSql, type QueueRow } from '../src/lib/server/teacherReview/applyChanges';

const usage = 'usage: apply-review-changes.ts QUEUE.json [--apply] [--root DIR] [--report FILE] [--sql FILE] [--commit SHA] [--test]';
const args = process.argv.slice(2);
const flag = (n: string) => args.includes(n);
const value = (n: string): string | undefined => {
  const i = args.indexOf(n);
  return i === -1 ? undefined : args[i + 1];
};
const valueFlags = new Set(['--root', '--report', '--sql', '--commit']);
const positional = args.filter((a, i) => !a.startsWith('--') && !valueFlags.has(args[i - 1]));
if (positional.length !== 1) {
  console.error(usage);
  process.exit(2);
}
for (const f of valueFlags) if (flag(f) && !value(f)) { console.error(`${f} needs a value\n${usage}`); process.exit(2); }

const apply = flag('--apply');
const cwd = process.cwd();
const root = path.resolve(cwd, value('--root') ?? 'src/curriculum');
const reportFile = value('--report') ?? 'review-changes-report.md';

let rows: QueueRow[];
try {
  rows = parseQueueExport(JSON.parse(fs.readFileSync(positional[0], 'utf8')));
} catch (e) {
  console.error(`cannot read the queue: ${(e as Error).message}`);
  process.exit(2);
}

/** Where a queue path lives on disk, or null if it would leave the allowed folders. */
const resolve = (file: string): string | null => {
  const abs = file.startsWith('src/') ? path.resolve(cwd, file) : path.resolve(root, file);
  const allowed = [root, path.resolve(cwd, 'src')];
  return allowed.some((a) => abs === a || abs.startsWith(a + path.sep)) ? abs : null;
};

const dirty = new Set<string>();
const isDirty = (abs: string): boolean => {
  try {
    return execFileSync('git', ['status', '--porcelain', '--', abs], { encoding: 'utf8' }).trim() !== '';
  } catch {
    return true; // cannot tell: be safe
  }
};

const { results, files } = applyChanges(rows, (file) => {
  const abs = resolve(file);
  if (!abs || !fs.existsSync(abs)) return null;
  return fs.readFileSync(abs, 'utf8');
});

if (apply) {
  for (const file of files.keys()) {
    const abs = resolve(file)!;
    if (isDirty(abs)) dirty.add(file);
  }
  if (dirty.size) {
    // A file with uncommitted edits is never touched: its changes are reported as refused.
    for (const r of results) {
      if (r.outcome === 'applied' && dirty.has(r.file)) {
        r.outcome = 'refused';
        r.reason = 'file has uncommitted changes: commit or discard them first';
      }
    }
  }
  for (const [file, text] of files) {
    if (dirty.has(file)) continue;
    fs.writeFileSync(resolve(file)!, text);
  }
}

const mode = apply ? 'apply' : 'dry-run';
fs.writeFileSync(reportFile, reportMarkdown(results, mode));
if (value('--sql')) fs.writeFileSync(value('--sql')!, statusSql(results, value('--commit') ?? null));

const count = (o: string) => results.filter((r) => r.outcome === o).length;
console.log(`${mode}: ${results.length} rows, ${count('applied')} ${apply ? 'applied' : 'would apply'}, ${count('refused')} refused, ${count('skipped')} skipped. Report: ${reportFile}`);
if (!apply) console.log('Nothing was written. Re-run with --apply to change the files.');

let code = count('refused') > 0 ? 1 : 0;
if (apply && flag('--test') && count('applied') > 0) {
  const t = spawnSync('npm', ['test'], { stdio: 'inherit' });
  if (t.status !== 0) code = 1;
}
process.exit(code);
