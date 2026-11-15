/**
 * One-way sync: code banks -> D1 questions (docs/notes/d1-serving-plan.md section 4.4). Turns the drift classes into SQL chunk files you apply by hand.
 * NOTHING here touches a database: it reads two wrangler JSON exports and writes .sql files (only with --write; the default is a dry run).
 *
 *   node --import tsx scripts/question-sync.ts [--questions <json>] [--versions <json>] [--out <dir>] [--grades 6,7,...] [--reset-reviews] [--keep-source] [--renames <json>] [--tag <name>] [--write]
 *
 *   edited / reworded question  -> a new approved version (author 'seed', source_note 'sync from v<N>') + the pointer move + a question_edits row ('sync', admin 'sync')
 *   new in code                 -> registered like the seed does (curated, version 1)
 *   human-authored current version, retired question, or ambiguous reword -> skipped and listed
 *   Grade 6 changes to the answer or options ("meaning" edits) are HELD unless --reset-reviews, which applies them AND moves every active review
 *   row for that question back to box 1, due tomorrow. Without the flag no review box is touched.
 *   An edited AI-pool question becomes source 'curated' (it now holds the bank's wording, and the curated filter does not depend on the pool row's quality
 *   score, which the stale-copy retire set to 0); --keep-source leaves it 'ai'.
 *
 * Every statement is guarded by "the current version is still the one in the export", so applying a chunk twice does nothing, and a human edit made
 * after the export wins (the sync skips it).
 */
import fs from 'node:fs';
import path from 'node:path';
import { makeQkey } from '../src/lib/shared/qkey';
import { registerQuestionSql, sqlStr, type SeedQuestion } from '../src/lib/server/questions/sql';
import { gather, type CodeQuestion, type FieldChange } from './question-drift';

export const CHUNK_MAX = 1000;
export const NIGHT_CAP = 40000;
/** Rows written per operation, indexes included (docs/notes/d1-serving-plan.md 5.2): version row + qkey index + unique index = 3, pointer UPDATE = 1, audit row + index = 2. */
export const COST = { version: 3, pointer: 1, audit: 2, newQuestion: 7, ledger: 1, reviewRow: 2 } as const;
export const EDIT_COST = COST.version + COST.pointer + COST.audit;

const NOW = "CAST(strftime('%s', 'now') AS INTEGER) * 1000";
const TOMORROW_SAST = "CAST((strftime('%s', 'now') + 7200) / 86400 AS INTEGER) + 1";

export interface EditItem {
  kind: 'edit';
  grade: number;
  task: string;
  questionId: string;
  fromVersionId: number;
  source: string;
  code: CodeQuestion;
  fields: FieldChange[] | 'prompt';
  /** answer or options changed */
  meaning: boolean;
  reworded: boolean;
}
export interface NewItem { kind: 'new'; grade: number; code: CodeQuestion }
export type SyncItem = EditItem | NewItem;

export interface Held { grade: number; task: string; questionId: string; why: string }
export interface Options { resetReviews: boolean; keepSource: boolean }

export const marker = (fromVersionId: number): string => `sync from v${fromVersionId}`;

/** The statements for one edited or reworded question. Guarded and idempotent. */
export function editSql(it: EditItem, o: Options): string[] {
  const Q = sqlStr(it.questionId);
  const V = Math.trunc(it.fromVersionId);
  const M = sqlStr(marker(V));
  const qk = sqlStr(makeQkey(it.task, it.code.prompt));
  const c = it.code;
  const opts = JSON.stringify(c.options);
  const reason = `code bank wording applied by sync (${Array.isArray(it.fields) ? it.fields.join(', ') : 'reworded prompt'})`;
  const resetHere = o.resetReviews && it.grade === 6 && it.meaning;
  const out: string[] = [
    `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at) SELECT ${Q}, (SELECT COALESCE(MAX(version_no), 0) + 1 FROM question_versions WHERE question_id = ${Q}), ${qk}, ${sqlStr(c.prompt)}, ${sqlStr(opts)}, ${sqlStr(c.answer)}, ${sqlStr(c.explanation)}, ${sqlStr(c.extra)}, ${M}, 'seed', 'approved', ${NOW} WHERE EXISTS (SELECT 1 FROM questions WHERE id = ${Q} AND status = 'active' AND current_version_id = ${V}) AND NOT EXISTS (SELECT 1 FROM question_versions WHERE question_id = ${Q} AND source_note = ${M}) AND NOT EXISTS (SELECT 1 FROM questions WHERE id = ${qk} AND id <> ${Q}) AND NOT EXISTS (SELECT 1 FROM question_versions WHERE qkey = ${qk} AND question_id <> ${Q});`,
    `UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ${Q} AND source_note = ${M})${!o.keepSource && it.source === 'ai' ? ", source = 'curated'" : ''} WHERE id = ${Q} AND status = 'active' AND current_version_id = ${V} AND EXISTS (SELECT 1 FROM question_versions WHERE question_id = ${Q} AND source_note = ${M});`,
  ];
  const ours = `EXISTS (SELECT 1 FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ${Q} AND v.source_note = ${M}) AND NOT EXISTS (SELECT 1 FROM question_edits WHERE question_id = ${Q} AND from_version_id = ${V} AND change_kind = 'sync')`;
  if (resetHere) {
    out.push(`UPDATE review_items SET box = 1, due_day = ${TOMORROW_SAST}, streak_correct = 0, updated_at = ${NOW} WHERE qkey = ${Q} AND retired_at IS NULL AND ${ours};`);
  }
  out.push(`INSERT INTO question_edits (question_id, from_version_id, to_version_id, change_kind, reason, admin_email, findings, reviews_reset, created_at) SELECT ${Q}, ${V}, current_version_id, 'sync', ${sqlStr(reason)}, 'sync', NULL, ${resetHere ? '(SELECT changes())' : '0'}, ${NOW} FROM questions WHERE id = ${Q} AND ${ours};`);
  return out;
}

export const newSql = (c: CodeQuestion): string[] => {
  const q: SeedQuestion = { task: c.task, section: 'general', kind: 'mcq', source: 'curated', prompt: c.prompt, options: c.options, answer: c.answer, explanation: c.explanation, extra: JSON.parse(c.extra || '{}'), author: 'seed' };
  return registerQuestionSql(q);
};

export interface Chunk { name: string; grade: number; questions: number; edits: number; news: number; estimatedRows: number; sql: string }

/** Items to chunks: one grade per chunk, at most CHUNK_MAX questions each, each ending with its ledger row. */
export function buildChunks(items: SyncItem[], o: Options, tag = ''): Chunk[] {
  const sorted = [...items].sort((a, b) => a.grade - b.grade || (a.kind === 'edit' ? a.task : a.code.task).localeCompare(b.kind === 'edit' ? b.task : b.code.task) || (a.kind === 'edit' ? a.questionId : a.code.id).localeCompare(b.kind === 'edit' ? b.questionId : b.code.id));
  const byGrade = new Map<number, SyncItem[]>();
  for (const it of sorted) byGrade.set(it.grade, [...(byGrade.get(it.grade) ?? []), it]);
  const chunks: Chunk[] = [];
  for (const [grade, list] of [...byGrade.entries()].sort((a, b) => a[0] - b[0])) {
    for (let i = 0, n = 1; i < list.length; i += CHUNK_MAX, n++) {
      const part = list.slice(i, i + CHUNK_MAX);
      const name = `sync${tag ? `-${tag}` : ''}-g${String(grade).padStart(2, '0')}-${String(n).padStart(3, '0')}`;
      const edits = part.filter((p): p is EditItem => p.kind === 'edit');
      const news = part.filter((p): p is NewItem => p.kind === 'new');
      const rows = edits.length * EDIT_COST + news.length * COST.newQuestion + COST.ledger;
      const lines = [
        `-- ${name}: ${edits.length} edited/reworded + ${news.length} new questions. Estimated rows written: ${rows}${o.resetReviews && grade === 6 ? ` (+${COST.reviewRow} per active review row reset)` : ''}.`,
        '-- GENERATED by scripts/question-sync.ts. Every statement is guarded by the current version in the export, so running it twice does nothing.',
        ...part.flatMap((p) => (p.kind === 'edit' ? editSql(p, o) : newSql(p.code))),
        `INSERT INTO migration_ledger (step, rows_written, ran_at, note) SELECT ${sqlStr(name)}, ${rows}, ${NOW}, 'estimate from scripts/question-sync.ts; compare with meta.rows_written' WHERE NOT EXISTS (SELECT 1 FROM migration_ledger WHERE step = ${sqlStr(name)});`,
      ];
      chunks.push({ name, grade, questions: part.length, edits: edits.length, news: news.length, estimatedRows: rows, sql: lines.join('\n') + '\n' });
    }
  }
  return chunks;
}

export interface Plan { items: SyncItem[]; held: Held[]; skipped: { questionId: string; why: string; grade: number; task: string }[] }

/** Turn the drift results into sync items. Pure given the gathered data. */
export function planSync(
  results: { grade: number; c: import('./question-drift').Classified }[],
  prod: Map<string, { q: { id: string; status: string; current_version_id: number | null; source: string; task?: string }; cur: { author: string } }>,
  o: Options,
  renames: Record<string, string> = {},
  grades?: number[],
): Plan {
  const items: SyncItem[] = [];
  const held: Held[] = [];
  const skipped: Plan['skipped'] = [];
  for (const r of results) {
    if (grades && !grades.includes(r.grade)) continue;
    const add = (lookupId: string, code: CodeQuestion, fields: FieldChange[] | 'prompt', reworded: boolean) => {
      const p = prod.get(lookupId);
      const questionId = p ? p.q.id : lookupId; // an alias resolves to the canonical question id
      if (!p || p.q.current_version_id == null) { skipped.push({ questionId, why: 'no current version in the export', grade: r.grade, task: code.task }); return; }
      if (p.q.status !== 'active') { skipped.push({ questionId, why: 'retired in production', grade: r.grade, task: code.task }); return; }
      const meaning = fields !== 'prompt' && (fields.includes('answer') || fields.includes('options'));
      if (r.grade === 6 && meaning && !o.resetReviews) { held.push({ grade: 6, task: code.task, questionId, why: 'changes the answer or options: needs --reset-reviews' }); return; }
      items.push({ kind: 'edit', grade: r.grade, task: code.task, questionId, fromVersionId: Number(p.q.current_version_id), source: p.q.source, code, fields, meaning, reworded });
    };
    for (const e of r.c.editedSamePrompt) add(e.code.id, e.code, e.fields, false);
    for (const w of r.c.reworded) add(w.oldId, w.code, 'prompt', true);
    for (const a of r.c.ambiguous) {
      const hit = a.candidates.find((c) => renames[c.id] === a.code.prompt);
      if (hit) add(hit.id, a.code, 'prompt', true);
      else skipped.push({ questionId: a.code.id, why: 'ambiguous reword: add "<oldId>": "<new prompt>" to the rename map', grade: r.grade, task: a.code.task });
    }
    for (const c of r.c.conflict) skipped.push({ questionId: c.code.id, why: 'human-authored version differs from the code: human edit wins', grade: r.grade, task: c.code.task });
    for (const n of r.c.newInCode) {
      // A reword the matcher could not pair (a different wording AND different options) is settled by the rename map: "<oldQuestionId>": "<new prompt>".
      const oldId = Object.keys(renames).find((k) => renames[k] === n.prompt && prod.get(k)?.q.task === n.task);
      if (oldId) add(oldId, n, 'prompt', true);
      else items.push({ kind: 'new', grade: r.grade, code: n });
    }
  }
  return { items, held, skipped };
}

const fmt = (n: number) => n.toLocaleString('en-ZA').replace(/,/g, ' ');

async function main() {
  const arg = (k: string, d: string) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
  const flag = (k: string) => process.argv.includes(k);
  const auditDir = process.env.D1_AUDIT_DIR ?? path.join(process.env.HOME ?? '', 'Source/private/mathini/audit/d1-serving');
  const qFile = arg('--questions', path.join(auditDir, 'questions.json'));
  const vFile = arg('--versions', path.join(auditDir, 'question_versions.json'));
  const outDir = arg('--out', path.join(auditDir, 'sync'));
  const grades = arg('--grades', '') ? arg('--grades', '').split(',').map(Number) : undefined;
  const o: Options = { resetReviews: flag('--reset-reviews'), keepSource: flag('--keep-source') };
  // The committed, human-checked rename map is read by default (an explicit --renames replaces it).
  const renamesFile = arg('--renames', 'migrations/seeds/question-renames.json');
  const renames = fs.existsSync(renamesFile) ? (JSON.parse(fs.readFileSync(renamesFile, 'utf8')) as Record<string, string>) : {};
  const { results, prod, prodQ, prodV } = await gather(qFile, vFile);
  const plan = planSync(results, prod, o, renames, grades);
  const tag = arg('--tag', '');
  const chunks = buildChunks(plan.items, o, tag);
  const total = chunks.reduce((s, c) => s + c.estimatedRows, 0);
  const nights: { n: number; rows: number; names: string[] }[] = [];
  let cur = { n: 1, rows: 0, names: [] as string[] };
  for (const c of chunks) {
    if (cur.rows + c.estimatedRows > NIGHT_CAP && cur.names.length) { nights.push(cur); cur = { n: cur.n + 1, rows: 0, names: [] }; }
    cur.rows += c.estimatedRows; cur.names.push(c.name);
  }
  if (cur.names.length) nights.push(cur);

  const L: string[] = [];
  L.push('# Sync plan (code banks to D1)', '', `Inputs: \`${path.resolve(qFile)}\` (${fmt(prodQ.length)} questions), \`${path.resolve(vFile)}\` (${fmt(prodV.length)} versions, ${fmt(prodV.filter((v) => Number(v.version_no) > 1).length)} beyond v1). If these counts are not what production holds, the export is the wrong file.`, '', `Mode: **${flag('--write') ? 'WRITE' : 'DRY RUN (no files written; add --write)'}**. Options: reset-reviews ${o.resetReviews}, keep-source ${o.keepSource}. Built from \`${path.basename(qFile)}\` / \`${path.basename(vFile)}\`: **re-export both just before you apply**, the statements only act on the versions in that export.`, '');
  L.push('| Chunk | Grade | Questions | Edited/reworded | New | Estimated rows written |', '|---|---|---|---|---|---|');
  for (const c of chunks) L.push(`| ${c.name} | ${c.grade} | ${fmt(c.questions)} | ${fmt(c.edits)} | ${fmt(c.news)} | ${fmt(c.estimatedRows)} |`);
  L.push(`| **Total** | | ${fmt(chunks.reduce((s, c) => s + c.questions, 0))} | ${fmt(chunks.reduce((s, c) => s + c.edits, 0))} | ${fmt(chunks.reduce((s, c) => s + c.news, 0))} | **${fmt(total)}** |`, '');
  L.push(`Estimate per edited or reworded question: ${EDIT_COST} rows (version ${COST.version}, pointer ${COST.pointer}, audit ${COST.audit}); per new question ${COST.newQuestion}; ${COST.ledger} per chunk ledger row. Review resets add ${COST.reviewRow} per active review row. Calibrate on the first chunk with wrangler's meta.rows_written.`, '');
  L.push(`Nights at the ${fmt(NIGHT_CAP)}-row cap: ${nights.map((n) => `night ${n.n}: ${fmt(n.rows)} (${n.names.join(', ')})`).join('; ') || 'none'}.`, '');
  L.push('## Held, skipped', '', `- Held (Grade 6 answer/options changes, no --reset-reviews): **${plan.held.length}**`);
  const byWhy = new Map<string, number>();
  for (const s of plan.skipped) byWhy.set(s.why, (byWhy.get(s.why) ?? 0) + 1);
  for (const [w, n] of byWhy) L.push(`- Skipped: **${n}**, ${w}`);
  L.push('', '## Apply', '', '```', 'npx wrangler d1 export preppals --remote --output <backup>.sql     # first', ...chunks.map((c) => `npx wrangler d1 execute preppals --remote --file ${path.join(outDir, c.name + '.sql')} --json`), '```', '', 'Check after each: `SELECT step, rows_written FROM migration_ledger ORDER BY id DESC LIMIT 3` and the `meta.rows_written` wrangler printed. Stop if the day would pass 55 000.');
  const md = L.join('\n') + '\n';
  console.log(md);
  if (flag('--write')) {
    fs.mkdirSync(outDir, { recursive: true });
    for (const c of chunks) fs.writeFileSync(path.join(outDir, c.name + '.sql'), c.sql);
    fs.writeFileSync(path.join(outDir, 'sync-plan.md'), md);
    fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({ options: o, chunks: chunks.map(({ sql, ...rest }) => rest), held: plan.held, skipped: plan.skipped, nights }, null, 2));
    console.log(`wrote ${chunks.length} chunk file(s) to ${outDir}`);
  }
}

if (process.argv[1]?.endsWith('question-sync.ts')) await main();
