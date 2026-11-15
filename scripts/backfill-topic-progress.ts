// One-off backfill of topic_progress from attempts that happened before migration 0014 (ADR 0005 part 2). DRY RUN ONLY: it never touches D1; it reads an
// export of attempts and writes SQL chunk files plus a report. The files are idempotent upserts (running one twice leaves the same rows), so apply them one
// at a time with wrangler, after a backup, like the question sync (docs/notes/d1-sync.md).
//
//   npx wrangler d1 execute preppals --remote --json --command "SELECT id, student_id, task, grade, subject, topic, is_correct, created_at FROM attempts ORDER BY id" > attempts.json
//   node --import tsx scripts/backfill-topic-progress.ts attempts.json [--out DIR] [--now MS] [--chunk 400]
//
// New activity is kept fresh by the refresh on every finished run and by the nightly job, so this is only for history. Run it AFTER migration 0014 is applied.
import fs from 'node:fs';
import path from 'node:path';
import { rowsFromAttempts, statementToSql, upsertStatement, type AttemptExportRow } from '../src/lib/server/progress/topicProgress';

const args = process.argv.slice(2);
const val = (n: string, d: string) => { const i = args.indexOf(n); return i === -1 ? d : args[i + 1] ?? d; };
const valueFlags = new Set(['--out', '--now', '--chunk']);
const files = args.filter((a, i) => !a.startsWith('--') && !valueFlags.has(args[i - 1]));
if (files.length !== 1 || args.some((a) => a.startsWith('--') && !valueFlags.has(a))) {
  console.error('usage: backfill-topic-progress.ts ATTEMPTS.json [--out DIR] [--now MS] [--chunk N]');
  process.exit(2);
}
const outDir = val('--out', 'topic-progress-backfill');
const now = Number(val('--now', String(Date.now())));
const chunk = Number(val('--chunk', '400'));
if (!Number.isFinite(now) || !Number.isInteger(chunk) || chunk < 1 || chunk > 1000) { console.error('--now must be a number and --chunk an integer from 1 to 1000'); process.exit(2); }

let rows: AttemptExportRow[];
try {
  const j = JSON.parse(fs.readFileSync(files[0], 'utf8'));
  rows = (Array.isArray(j) ? (j[0]?.results ?? j) : j.results) as AttemptExportRow[];
  if (!Array.isArray(rows)) throw new Error('no rows');
} catch (e) {
  console.error(`cannot read the attempts export: ${(e as Error).message}`);
  process.exit(2);
}

const progress = rowsFromAttempts(rows);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^backfill-\d+\.sql$/.test(f)) fs.rmSync(path.join(outDir, f));
let n = 0;
for (let i = 0; i < progress.length; i += chunk) {
  const slice = progress.slice(i, i + chunk);
  fs.writeFileSync(path.join(outDir, `backfill-${String(++n).padStart(3, '0')}.sql`), `-- topic_progress backfill, chunk ${n} (${slice.length} rows). Idempotent upserts.\n` + slice.map((r) => statementToSql(upsertStatement(r, now))).join('\n') + '\n');
}
const students = new Set(progress.map((r) => r.studentId)).size;
fs.writeFileSync(path.join(outDir, 'report.md'), `# topic_progress backfill (dry run)\n\n${rows.length} attempts -> ${progress.length} learner-and-task rows for ${students} learners, in ${n} chunk file(s) of at most ${chunk} rows.\n\nApply with: npx wrangler d1 execute preppals --remote --file ${outDir}/backfill-001.sql (one file at a time, after a backup). Rows written: ${progress.length} (one per row; free-plan budget 100,000 per day).\n`);
console.log(`${rows.length} attempts -> ${progress.length} rows, ${n} chunk(s) in ${outDir}/ (dry run: nothing was executed)`);
