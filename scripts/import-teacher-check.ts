// Turns audit/teacher-check.md into review packs (ADR 0004, part 5). DRY RUN ONLY: it writes SQL chunk files and a report; it never touches D1.
//
//   node --import tsx scripts/import-teacher-check.ts [--md ../audit/teacher-check.md] [--d1 ../audit/d1-serving] [--out DIR] [--size 40] [--now MS] [--include-repeated]
//
// --include-repeated also makes items for lesson text that occurs more than once in its file (context.repeated = true). Teachers can still check
// them, but apply-review-changes.ts will refuse to apply a change to them, so a person has to.
//
// Question items are resolved to D1 question ids from the D1 exports (questions.json, question_versions.json in --d1). Lesson items are resolved
// to {file, anchor_text}, verified to occur exactly once in the repo. Output in --out (default ./review-import): one `pack-NN-<key>.sql` per pack,
// and `report.md` listing every item that could not be resolved, with the reason. Exit code 0 even with unresolved items (they are a report, not an
// error); 2 for bad arguments or unreadable inputs.
import fs from 'node:fs';
import path from 'node:path';
import { extractCuratedBanks } from '../src/test-support/curatedBanks';
import { parseTeacherCheck } from '../src/lib/server/teacherReview/teacherCheckParse';
import { d1Key, packSql, planPacks, reportMarkdown, resolveItems, type D1Question, type ResolveEnv } from '../src/lib/server/teacherReview/teacherCheckResolve';

const args = process.argv.slice(2);
const val = (n: string, d: string) => { const i = args.indexOf(n); return i === -1 ? d : args[i + 1] ?? d; };
const known = new Set(['--md', '--d1', '--out', '--size', '--now']);
const flags = new Set(['--include-repeated']);
const stray = args.filter((a, i) => !(known.has(a) || flags.has(a) || known.has(args[i - 1])));
if (stray.length) { console.error(`unknown argument ${stray[0]}\nusage: import-teacher-check.ts [--md FILE] [--d1 DIR] [--out DIR] [--size N] [--now MS] [--include-repeated]`); process.exit(2); }

const mdPath = val('--md', '../audit/teacher-check.md');
const d1Dir = val('--d1', '../audit/d1-serving');
const outDir = val('--out', 'review-import');
const size = Number(val('--size', '40'));
const nowMs = Number(val('--now', String(Date.now())));
if (!Number.isInteger(size) || size < 10 || size > 60 || !Number.isFinite(nowMs)) { console.error('--size must be an integer from 10 to 60 and --now a number'); process.exit(2); }

const root = path.join(process.cwd(), 'src', 'curriculum');
const rows = (file: string): Record<string, unknown>[] => {
  const j = JSON.parse(fs.readFileSync(path.join(d1Dir, file), 'utf8'));
  return Array.isArray(j) ? (j[0]?.results ?? j) : j.results;
};
let md: string;
const d1 = new Map<string, D1Question[]>();
try {
  md = fs.readFileSync(mdPath, 'utf8');
  const versions = new Map<number, { prompt: string; answer: string }>();
  for (const v of rows('question_versions.json')) versions.set(Number(v.id), { prompt: String(v.prompt), answer: String(v.answer) });
  for (const qn of rows('questions.json')) {
    if (qn.status !== 'active' || qn.current_version_id == null) continue;
    const v = versions.get(Number(qn.current_version_id));
    if (!v) continue;
    const k = d1Key(v.prompt, v.answer);
    d1.set(k, [...(d1.get(k) ?? []), { id: String(qn.id), versionId: Number(qn.current_version_id) }]);
  }
} catch (e) {
  console.error(`cannot read inputs: ${(e as Error).message}`);
  process.exit(2);
}

const allFiles: string[] = [];
const walk = (dir: string) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(e.name) && !/\.test\./.test(e.name)) allFiles.push(path.relative(root, p).split(path.sep).join('/'));
  }
};
walk(root);

const env: ResolveEnv = {
  read: (rel) => { const p = path.join(root, rel); return p.startsWith(root + path.sep) && fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; },
  listDir: (rel) => allFiles.filter((f) => path.posix.dirname(f) === rel.replace(/\/$/, '')),
  findByBaseName: (base, grade, term) =>
    allFiles.filter((f) => path.posix.basename(f) === base && (!grade || f.startsWith(`grade${grade}/`)) && (!term || f.includes(`/term${term}/`))),
  banks: extractCuratedBanks(root),
  d1,
};

const raw = parseTeacherCheck(md);
const res = resolveItems(raw, env, { allowRepeated: args.includes('--include-repeated') });
const packs = planPacks(res.items, size);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^pack-\d+-.*\.sql$/.test(f)) fs.rmSync(path.join(outDir, f));
packs.forEach((p, i) => fs.writeFileSync(path.join(outDir, `pack-${String(i + 1).padStart(2, '0')}-${p.key}.sql`), packSql(p, nowMs)));
fs.writeFileSync(path.join(outDir, 'report.md'), reportMarkdown(res, packs));
console.log(`${raw.length} raw items -> ${res.items.length} resolved in ${packs.length} packs, ${res.unresolved.length} unresolved. Written to ${outDir}/ (dry run: nothing was executed).`);
