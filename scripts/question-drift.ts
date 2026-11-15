/**
 * Read-only drift report: code banks vs the questions that production holds (docs/notes/d1-serving-plan.md section 4.4).
 * It reads two wrangler JSON exports (no network, no database) and writes a markdown report. Nothing is written to D1.
 *
 *   node --import tsx scripts/question-drift.ts [--questions <json>] [--versions <json>] [--out <md>] [--json <file>] [--item-cache-rows <n>]
 *
 * Exports (rows in [0].results): SELECT * FROM questions; SELECT * FROM question_versions.
 * Grade 6 is compared exactly (the registry, the same items the seed was built from). Other grades are compared by
 * qkey where the file names its task slug, and counted otherwise.
 */
import fs from 'node:fs';
import path from 'node:path';
import { registerHooks } from 'node:module';
import { makeQkey } from '../src/lib/shared/qkey';
import { extractCuratedBanks } from '../src/test-support/curatedBanks';
import { checkQuestion } from '../src/lib/shared/questionQuality';

registerHooks({ resolve: (specifier, context, next) => (specifier.endsWith('.css') ? { url: 'data:text/javascript,export default {}', shortCircuit: true } : next(specifier, context)) });

// --- rows written per registration (docs/notes/d1-serving-plan.md section 5.2) ---
export const ROWS = { newCurated: 7, newAi: 8, newVersion: 4 } as const; // a new version: row + 2 indexes + the pointer update

export interface ProdQuestion { id: string; task: string; source: string; status: string; current_version_id: number | null; legacy_item_id?: number | null }
export interface ProdVersion { id: number | string; question_id: string; version_no: number | string; qkey: string; prompt: string; options: string; answer: string; explanation: string; extra: string; author: string }
export interface Content { prompt: string; options: string[]; answer: string; explanation: string; extra: string }
export interface CodeQuestion extends Content { task: string; id: string; grade: number }

const canonExtra = (v: unknown): string => {
  let o: Record<string, unknown> = {};
  try { o = typeof v === 'string' ? JSON.parse(v || '{}') : ((v as Record<string, unknown>) ?? {}); } catch { /* keep {} */ }
  return JSON.stringify(Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b))));
};
const sameOptions = (a: string[], b: string[]) => a.length === b.length && a.every((x, i) => x === b[i]);
export const words = (s: string) => new Set(s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean));
export const jaccard = (a: string, b: string): number => {
  const x = words(a), y = words(b);
  if (!x.size && !y.size) return 1;
  let i = 0;
  for (const w of x) if (y.has(w)) i++;
  return i / (x.size + y.size - i);
};

export type FieldChange = 'answer' | 'options' | 'explanation' | 'extra';
export const changedFields = (cur: Content, code: Content): FieldChange[] => {
  const out: FieldChange[] = [];
  if (cur.answer !== code.answer) out.push('answer');
  if (!sameOptions(cur.options, code.options)) out.push('options');
  if (cur.explanation !== code.explanation) out.push('explanation');
  if (cur.extra !== code.extra) out.push('extra');
  return out;
};

export interface Classified {
  identical: (CodeQuestion & { source: string })[];
  editedSamePrompt: { code: CodeQuestion; fields: FieldChange[]; source: string }[];
  conflict: { code: CodeQuestion; fields: FieldChange[] }[];
  reworded: { code: CodeQuestion; oldId: string; oldPrompt: string; how: 'answer+options' | 'similarity'; score: number; source: string }[];
  ambiguous: { code: CodeQuestion; candidates: { id: string; prompt: string; score: number }[] }[];
  newInCode: CodeQuestion[];
  goneFromCode: { id: string; task: string; prompt: string }[];
}

/** Classify the code questions of ONE grade's curated set against what production holds for the same tasks. */
export function classify(code: CodeQuestion[], prodCurated: Map<string, { q: ProdQuestion; cur: Content & { author: string } }>, tasks: Set<string>): Classified {
  const r: Classified = { identical: [], editedSamePrompt: [], conflict: [], reworded: [], ambiguous: [], newInCode: [], goneFromCode: [] };
  const matched = new Set<string>();
  const unmatchedCode: CodeQuestion[] = [];
  for (const c of code) {
    const p = prodCurated.get(c.id);
    if (!p) { unmatchedCode.push(c); continue; }
    matched.add(p.q.id);
    const fields = changedFields(p.cur, c);
    if (fields.length === 0) r.identical.push({ ...c, source: p.q.source });
    else if (p.cur.author === 'seed' || p.cur.author === 'ai') r.editedSamePrompt.push({ code: c, fields, source: p.q.source });
    else r.conflict.push({ code: c, fields });
  }
  // an alias (a reworded version's qkey) points at the same entry as the question id: count each question once
  const leftover = [...new Map([...prodCurated.values()].map((p) => [p.q.id, p])).values()].filter((p) => tasks.has(p.q.task) && !matched.has(p.q.id));
  const taken = new Set<string>();
  for (const c of unmatchedCode) {
    const pool = leftover.filter((p) => p.q.task === c.task && !taken.has(p.q.id));
    // exact: same answer and the same set of options
    const exact = pool.filter((p) => p.cur.answer === c.answer && sameOptions([...p.cur.options].sort(), [...c.options].sort()));
    if (exact.length === 1) { taken.add(exact[0].q.id); r.reworded.push({ code: c, oldId: exact[0].q.id, oldPrompt: exact[0].cur.prompt, how: 'answer+options', score: 1, source: exact[0].q.source }); continue; }
    const scored = pool.map((p) => ({ id: p.q.id, prompt: p.cur.prompt, score: jaccard(p.cur.prompt, c.prompt) })).sort((a, b) => b.score - a.score);
    const good = scored.filter((s) => s.score >= 0.8);
    if (good.length === 1 && (scored[1]?.score ?? 0) < 0.8) { taken.add(good[0].id); r.reworded.push({ code: c, oldId: good[0].id, oldPrompt: good[0].prompt, how: 'similarity', score: good[0].score, source: leftover.find((l) => l.q.id === good[0].id)!.q.source }); continue; }
    if (good.length > 1 || exact.length > 1) { r.ambiguous.push({ code: c, candidates: (exact.length > 1 ? exact.map((p) => ({ id: p.q.id, prompt: p.cur.prompt, score: 1 })) : good).slice(0, 3) }); continue; }
    r.newInCode.push(c);
  }
  for (const p of leftover) if (!taken.has(p.q.id) && p.q.source === 'curated') r.goneFromCode.push({ id: p.q.id, task: p.q.task, prompt: p.cur.prompt });
  return r;
}

export interface StaleRow { itemId: number; questionId: string; grade: number; task: string; kind: 'edited' | 'reworded-exact' | 'reworded-similar' | 'conflict'; oldPrompt: string; codePrompt: string; codeUsable: boolean }

/**
 * The item_cache rows (ids in item_cache, not question ids) that still serve OLD text for a question whose code wording now differs:
 * the production question matched to each edited / reworded / conflicting code question, when it is linked to a pool row
 * (questions.legacy_item_id). A reworded match by similarity is listed apart from the exact kinds so it can be spot-checked.
 */
export function staleRows(results: { grade: number; c: Classified }[], prod: Map<string, { q: ProdQuestion; cur: Content & { author: string } }>): StaleRow[] {
  const out: StaleRow[] = [];
  const add = (q: ProdQuestion | undefined, cur: Content | undefined, code: CodeQuestion, grade: number, kind: StaleRow['kind']) => {
    if (!q || q.legacy_item_id == null || !cur) return;
    const usable = checkQuestion({ prompt: code.prompt, options: code.options, answer: code.answer, explanation: code.explanation }).ok;
    out.push({ itemId: Number(q.legacy_item_id), questionId: q.id, grade, task: code.task, kind, oldPrompt: cur.prompt, codePrompt: code.prompt, codeUsable: usable });
  };
  for (const r of results) {
    for (const e of r.c.editedSamePrompt) { const p = prod.get(e.code.id); add(p?.q, p?.cur, e.code, r.grade, 'edited'); }
    for (const e of r.c.conflict) { const p = prod.get(e.code.id); add(p?.q, p?.cur, e.code, r.grade, 'conflict'); }
    for (const e of r.c.reworded) { const p = prod.get(e.oldId); add(p?.q, p?.cur, e.code, r.grade, e.how === 'answer+options' ? 'reworded-exact' : 'reworded-similar'); }
  }
  return out;
}

export interface Plan { night: string; what: string; questions: number; rows: number }

const fmt = (n: number) => n.toLocaleString('en-ZA').replace(/,/g, ' ');

export interface GradeResult {
  grade: number;
  code: number;
  unknownTask: number;
  c: Classified;
  fieldCounts: { meaning: number; wording: number; answer: number; options: number; explanation: number; extra: number };
}

const fieldStats = (c: Classified) => {
  const f = { meaning: 0, wording: 0, answer: 0, options: 0, explanation: 0, extra: 0 };
  for (const e of c.editedSamePrompt) {
    for (const x of e.fields) f[x]++;
    if (e.fields.includes('answer') || e.fields.includes('options')) f.meaning++; else f.wording++;
  }
  return f;
};

export type ProdMap = Map<string, { q: ProdQuestion; cur: Content & { author: string } }>;

/** The production questions with their current content, keyed by question id AND by every alias qkey of a reworded version. */
export function buildProdMap(prodQ: ProdQuestion[], prodV: ProdVersion[]) {
  const vById = new Map(prodV.map((v) => [Number(v.id), v]));
  const prod = new Map<string, { q: ProdQuestion; cur: Content & { author: string } }>();
  let ai = 0, cur = 0, retired = 0, noVersion = 0, edited = 0;
  for (const q of prodQ) {
    if (q.status === 'retired') retired++;
    if (q.source === 'ai') ai++; else cur++;
    const v = q.current_version_id == null ? undefined : vById.get(Number(q.current_version_id));
    if (!v) { noVersion++; continue; }
    prod.set(q.id, { q, cur: { prompt: v.prompt, options: JSON.parse(v.options) as string[], answer: v.answer, explanation: v.explanation ?? '', extra: canonExtra(v.extra), author: v.author } });
  }
  for (const v of prodV) if (Number(v.version_no) > 1) edited++;
  // A reworded version's qkey is an alias of its question: a code prompt that hashes to an alias belongs to that question (already synced), not to a new one.
  for (const v of prodV) {
    const own = prod.get(v.question_id);
    if (own && v.qkey !== v.question_id && !prod.has(v.qkey)) prod.set(v.qkey, own);
  }
  return { prod, ai, cur, retired, noVersion, edited };
}

export async function gather(qFile: string, vFile: string) {
  const prodQ = (JSON.parse(fs.readFileSync(qFile, 'utf8'))[0].results as ProdQuestion[]);
  const prodV = (JSON.parse(fs.readFileSync(vFile, 'utf8'))[0].results as ProdVersion[]);
  const { prod, ai, cur, retired, noVersion, edited } = buildProdMap(prodQ, prodV);
  const prodTasks = new Set([...prod.values()].map((p) => p.q.task));

  // Grade 6: the registry, exactly as the seed reads it.
  const { GRADE6_BANKS } = await import('../src/curriculum/grade6/reviewBanks');
  const code6: CodeQuestion[] = [];
  const dupes: string[] = [];
  const seen6 = new Set<string>();
  const tasks6 = Object.keys(GRADE6_BANKS).sort();
  for (const task of tasks6) {
    for (const item of await GRADE6_BANKS[task]()) {
      const extra: Record<string, unknown> = {};
      if (item.hotspots) extra.hotspots = item.hotspots;
      if (item.image) extra.image = item.image;
      if (item.marks !== undefined) extra.marks = item.marks;
      if (item.paper) extra.paper = true;
      if (item.Diagram) extra.diagram = true;
      const id = makeQkey(task, item.prompt);
      if (seen6.has(id)) { dupes.push(`${task}: ${item.prompt.slice(0, 50)}`); continue; }
      seen6.add(id);
      code6.push({ task, id, grade: 6, prompt: item.prompt, options: item.options, answer: item.answer, explanation: item.explanation ?? '', extra: canonExtra(extra) });
    }
  }

  // Other grades: the extractor; the task is the single slug named in the file.
  const curriculum = path.join(process.cwd(), 'src', 'curriculum');
  const taskOfFile = new Map<string, string | null>();
  const taskFor = (file: string): string | null => {
    if (taskOfFile.has(file)) return taskOfFile.get(file)!;
    const src = fs.readFileSync(path.join(curriculum, file), 'utf8');
    const set = new Set([...src.matchAll(/\btask\s*[=:]\s*[{]?\s*["'`]([a-z0-9-]+)["'`]/g)].map((m) => m[1]));
    const t = set.size === 1 ? [...set][0] : null;
    taskOfFile.set(file, t);
    return t;
  };
  const codeByGrade = new Map<number, CodeQuestion[]>([[6, code6]]);
  const unknown = new Map<number, number>();
  const seenO = new Set<string>();
  const mcqOnly = extractCuratedBanks().filter((q) => q.grade !== 6 && q.kind === 'mcq');
  for (const q of mcqOnly) {
    const t = taskFor(q.file);
    if (!t) { unknown.set(q.grade, (unknown.get(q.grade) ?? 0) + 1); continue; }
    const id = makeQkey(t, q.prompt);
    if (seenO.has(id)) continue;
    seenO.add(id);
    const l = codeByGrade.get(q.grade) ?? [];
    l.push({ task: t, id, grade: q.grade, prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '', extra: '{}' });
    codeByGrade.set(q.grade, l);
  }

  const results: GradeResult[] = [];
  for (const [grade, code] of [...codeByGrade.entries()].sort((a, b) => a[0] - b[0])) {
    const tasks = new Set(code.map((c) => c.task));
    const c = classify(code, prod, tasks);
    results.push({ grade, code: code.length, unknownTask: unknown.get(grade) ?? 0, c, fieldCounts: fieldStats(c) });
  }
  for (const [g, n] of unknown) if (!codeByGrade.has(g)) results.push({ grade: g, code: 0, unknownTask: n, c: classify([], prod, new Set()), fieldCounts: fieldStats(classify([], prod, new Set())) });
  results.sort((a, b) => a.grade - b.grade);
  return { prodQ, prodV, prod, ai, cur, retired, noVersion, edited, code6, tasks6, dupes, results, unknown, codeByGrade };
}

async function main() {
  const arg = (k: string, d: string) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
  const auditDir = process.env.D1_AUDIT_DIR ?? path.join(process.env.HOME ?? '', 'Source/private/mathini/audit/d1-serving');
  const qFile = arg('--questions', path.join(auditDir, 'questions.json'));
  const vFile = arg('--versions', path.join(auditDir, 'question_versions.json'));
  const out = arg('--out', path.join(auditDir, 'drift-report.md'));
  const jsonOut = arg('--json', '');
  const itemCacheRows = Number(arg('--item-cache-rows', '0')) || 0;
  const { prodQ, prod, ai, cur, retired, noVersion, edited, code6, tasks6, dupes, results } = await gather(qFile, vFile);

  const rowsOf = (r: GradeResult) => (r.c.editedSamePrompt.length + r.c.reworded.length) * ROWS.newVersion + (r.c.newInCode.length + r.unknownTask) * ROWS.newCurated;
  const qsOf = (r: GradeResult) => r.c.editedSamePrompt.length + r.c.reworded.length + r.c.newInCode.length + r.unknownTask;
  const pick = (gs: number[]) => results.filter((r) => gs.includes(r.grade));
  const aiRemaining = itemCacheRows ? Math.max(0, itemCacheRows - ai) : null;
  const plan: Plan[] = [
    { night: '0', what: 'Backup, additive schema, this report', questions: 0, rows: 0 },
    { night: '1', what: 'Grade 6: new versions for edits and rewords, new questions', questions: pick([6]).reduce((s, r) => s + qsOf(r), 0), rows: pick([6]).reduce((s, r) => s + rowsOf(r), 0) },
    { night: '2', what: 'Grades 7 to 9: new versions for the edits, new questions', questions: pick([7, 8, 9]).reduce((s, r) => s + qsOf(r), 0), rows: pick([7, 8, 9]).reduce((s, r) => s + rowsOf(r), 0) },
    { night: '3', what: 'Grades 5, 10, 11, 12: new versions for the edits, new questions', questions: pick([5, 10, 11, 12]).reduce((s, r) => s + qsOf(r), 0), rows: pick([5, 10, 11, 12]).reduce((s, r) => s + rowsOf(r), 0) },
  ];
  if (aiRemaining !== null) plan.push({ night: '4', what: `AI pool rows not yet registered (item_cache ${itemCacheRows} minus ${ai} registered)`, questions: aiRemaining, rows: aiRemaining * ROWS.newAi });
  const total = plan.reduce((s, p) => s + p.rows, 0);

  const CAP = 40000;
  const nights: { n: number; rows: number; parts: string[] }[] = [];
  let cn = { n: 1, rows: 0, parts: [] as string[] };
  for (const p of plan.filter((x) => x.rows > 0)) {
    let left = p.rows;
    while (left > 0) {
      const take = Math.min(CAP - cn.rows, left);
      cn.rows += take; left -= take; cn.parts.push(`${p.what.split(':')[0]}: ${fmt(take)}`);
      if (cn.rows >= CAP && left > 0) { nights.push(cn); cn = { n: cn.n + 1, rows: 0, parts: [] }; }
    }
  }
  if (cn.rows) nights.push(cn);

  const esc = (t: string) => t.slice(0, 80).replace(/\|/g, '/');
  const L: string[] = [];
  L.push('# D1 drift report: code banks vs production questions', '');
  L.push(`Generated by \`scripts/question-drift.ts\` from the read-only exports \`${path.basename(qFile)}\` and \`${path.basename(vFile)}\`. Nothing was written to any database. Re-run it any time with the same command.`, '');
  L.push('## What production holds', '', '| | Count |', '|---|---|', `| questions | ${fmt(prodQ.length)} |`, `| curated (Grade 6 seed) | ${fmt(cur)} |`, `| AI pool, registered | ${fmt(ai)} |`, `| retired | ${retired} |`, `| questions with no current version | ${noVersion} |`, `| versions beyond v1 (human edits so far) | ${edited} |`, `| authors of current versions | ${[...new Set([...prod.values()].map((v) => v.cur.author))].join(', ')} |`, '');
  L.push('Two things the plan assumed that production already settles:', '', `1. The Grade 6 seed (0008) **was applied** (${fmt(cur)} curated questions).`, `2. The AI pool is **already registered** (${fmt(ai)} AI questions): the backfill ran. The plan budgeted about 136 000 rows for it; that work is done.`, '');
  L.push('## Classes per grade', '', 'Each code question is compared with the question that production holds under the same id (qkey = task + prompt). A "stale" row is an **AI-pool row whose text differs from the code bank**: learners are served the pool row today, so they see the old text. (Most grade 7 to 12 bank questions were saved into the pool as seeds earlier.)', '');
  L.push('| Grade | in code | identical | edited, same prompt (curated rows) | edited, same prompt (stale AI-pool rows) | reworded (matched) | reworded (ambiguous) | new | conflict | gone | unknown task |', '|---|---|---|---|---|---|---|---|---|---|---|');
  for (const r of results) {
    const ed = r.c.editedSamePrompt;
    L.push(`| ${r.grade} | ${fmt(r.code + r.unknownTask)} | ${fmt(r.c.identical.length)} | ${fmt(ed.filter((e) => e.source === 'curated').length)} | ${fmt(ed.filter((e) => e.source === 'ai').length)} | ${fmt(r.c.reworded.length)} | ${fmt(r.c.ambiguous.length)} | ${fmt(r.c.newInCode.length)} | ${r.c.conflict.length} | ${r.c.goneFromCode.length} | ${r.unknownTask} |`);
  }
  const sum = (f: (r: GradeResult) => number) => results.reduce((s, r) => s + f(r), 0);
  L.push(`| **all** | ${fmt(sum((r) => r.code + r.unknownTask))} | ${fmt(sum((r) => r.c.identical.length))} | ${fmt(sum((r) => r.c.editedSamePrompt.filter((e) => e.source === 'curated').length))} | ${fmt(sum((r) => r.c.editedSamePrompt.filter((e) => e.source === 'ai').length))} | ${fmt(sum((r) => r.c.reworded.length))} | ${fmt(sum((r) => r.c.ambiguous.length))} | ${fmt(sum((r) => r.c.newInCode.length))} | ${sum((r) => r.c.conflict.length)} | ${sum((r) => r.c.goneFromCode.length)} | ${sum((r) => r.unknownTask)} |`, '');
  L.push(`Grade 6 code: ${fmt(code6.length)} questions in ${tasks6.length} tasks${dupes.length ? ` (${dupes.length} duplicate task+prompt pairs skipped, as the seed does)` : ''}. Only grade 6 has a registry, so for other grades the task is the single \`task\` slug named in the file; ${sum((r) => r.unknownTask)} questions sit in a file with none or several and are counted as new (an upper bound).`, '');
  L.push('### What the "edited, same prompt" changes touched (sizes decision D4: meaning edits reset review boxes)', '', '| Grade | edits | answer changed | options changed | explanation changed | extra changed | answer or options (meaning) | explanation/extra only (wording) |', '|---|---|---|---|---|---|---|---|');
  for (const r of results) { const f = r.fieldCounts; L.push(`| ${r.grade} | ${fmt(r.c.editedSamePrompt.length)} | ${f.answer} | ${f.options} | ${f.explanation} | ${f.extra} | ${f.meaning} | ${f.wording} |`); }
  L.push('', 'Review is Grade 6 only today, so only the grade 6 row can reset a review box.', '');
  L.push('### Per task with edits or rewords (top 25 by edits)', '', '| Grade | Task | edits | rewords | new |', '|---|---|---|---|---|');
  const perTask = new Map<string, { grade: number; edits: number; rewords: number; nw: number }>();
  for (const r of results) {
    const add = (t: string, k: 'edits' | 'rewords' | 'nw') => { const m = perTask.get(`${r.grade}|${t}`) ?? { grade: r.grade, edits: 0, rewords: 0, nw: 0 }; m[k]++; perTask.set(`${r.grade}|${t}`, m); };
    for (const e of r.c.editedSamePrompt) add(e.code.task, 'edits');
    for (const e of r.c.reworded) add(e.code.task, 'rewords');
    for (const e of r.c.newInCode) add(e.task, 'nw');
  }
  for (const [k, v] of [...perTask.entries()].sort((a, b) => b[1].edits + b[1].rewords - (a[1].edits + a[1].rewords)).slice(0, 25)) L.push(`| ${v.grade} | ${k.split('|')[1]} | ${v.edits} | ${v.rewords} | ${v.nw} |`);
  L.push('', `(${perTask.size} tasks have at least one edit, reword or new question.)`, '');
  {
    const ex = results.flatMap((r) => r.c.editedSamePrompt.slice(0, 2).map((e) => ({ g: r.grade, e })));
    L.push('### Examples of edits (production text vs code text)', '');
    for (const { g, e } of ex.slice(0, 10)) {
      const p = prod.get(e.code.id)!;
      L.push(`- **Grade ${g}, ${e.code.task}**: "${esc(e.code.prompt)}" (${e.source}, changed: ${e.fields.join(', ')})`, `  - production: key "${esc(p.cur.answer)}"; options ${p.cur.options.map((o) => `"${esc(o).slice(0, 40)}"`).join(' / ')}`, `  - code: key "${esc(e.code.answer)}"; options ${e.code.options.map((o) => `"${esc(o).slice(0, 40)}"`).join(' / ')}`);
    }
    L.push('');
  }
  const allReworded = results.flatMap((r) => r.c.reworded.map((x) => ({ g: r.grade, ...x })));
  if (allReworded.length) { L.push('### Reworded prompts matched automatically (first 25)', '', '| Grade | Task | Old prompt | New prompt | Match |', '|---|---|---|---|---|'); for (const x of allReworded.slice(0, 25)) L.push(`| ${x.g} | ${x.code.task} | ${esc(x.oldPrompt)} | ${esc(x.code.prompt)} | ${x.how} ${x.score.toFixed(2)} (${x.source}) |`); L.push(''); }
  const allAmb = results.flatMap((r) => r.c.ambiguous.map((x) => ({ g: r.grade, ...x })));
  if (allAmb.length) { L.push('### Ambiguous rewords: these need a line in the rename map (first 25)', '', '| Grade | Task | New prompt | Candidates |', '|---|---|---|---|'); for (const x of allAmb.slice(0, 25)) L.push(`| ${x.g} | ${x.code.task} | ${esc(x.code.prompt)} | ${x.candidates.map((c) => `${c.id} (${c.score.toFixed(2)})`).join(', ')} |`); L.push(''); }
  const allGone = results.flatMap((r) => r.c.goneFromCode);
  if (allGone.length) { L.push('### In production (curated) but not in the code', '', '| Task | Id | Prompt |', '|---|---|---|'); for (const x of allGone.slice(0, 25)) L.push(`| ${x.task} | ${x.id} | ${esc(x.prompt)} |`); L.push(''); }
  L.push('## Rows written (indexes included)', '', `Per registration (plan section 5.2): new question ${ROWS.newCurated} (curated), a new version on an existing question ${ROWS.newVersion} (version row + 2 indexes + the pointer update). A stale AI-pool row is brought up to date by a new version, not a new question.`, '');
  L.push('| Night | Work | Questions | Rows written |', '|---|---|---|---|');
  for (const p of plan) L.push(`| ${p.night} | ${p.what} | ${fmt(p.questions)} | ${fmt(p.rows)} |`);
  L.push(`| | **Total** | | **${fmt(total)}** |`, '');
  L.push(`### Packed into nights of at most ${fmt(CAP)} rows (the plan's migration cap)`, '', '| Night | Rows | Contents |', '|---|---|---|');
  for (const n of nights) L.push(`| ${n.n} | ${fmt(n.rows)} | ${n.parts.join('; ')} |`);
  L.push('', aiRemaining === null ? `Rows in \`item_cache\` were not supplied (\`--item-cache-rows <n>\`), so any AI rows still to register are not in the table. ${fmt(ai)} AI questions are registered.` : '', 'Stop rule from the plan: do not start a chunk if the day\'s rows written plus the chunk would pass 55 000.', '');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, L.join('\n') + '\n');
  {
    const stale = staleRows(results, prod);
    const ids = [...new Set(stale.map((x) => x.itemId))].sort((a, b) => a - b);
    fs.writeFileSync(path.join(path.dirname(out), 'stale-pool-retire_ids.txt'), ids.join('\n') + '\n');
    const csv = ['item_cache_id,question_id,grade,task,kind,code_version_passes_validator,old_prompt,code_prompt', ...stale.map((x) => [x.itemId, x.questionId, x.grade, x.task, x.kind, x.codeUsable, JSON.stringify(x.oldPrompt), JSON.stringify(x.codePrompt)].join(','))];
    fs.writeFileSync(path.join(path.dirname(out), 'stale-pool-retire_detail.csv'), csv.join('\n') + '\n');
    // Effect on a practice run: top-up only fills a pool that has fewer than MIN_PRACTICE_ITEMS (10) questions.
    const retiredSet = new Set(ids);
    const poolByTask = new Map<string, number>();
    for (const q of prodQ) if (q.source === 'ai' && q.status === 'active' && !(q.legacy_item_id != null && retiredSet.has(Number(q.legacy_item_id)))) poolByTask.set(q.task, (poolByTask.get(q.task) ?? 0) + 1);
    const tasksTouched = [...new Set(stale.map((x) => x.task))];
    const remaining = tasksTouched.map((t) => ({ task: t, remaining: poolByTask.get(t) ?? 0 }));
    const kinds = stale.reduce<Record<string, number>>((m, x) => ((m[x.kind] = (m[x.kind] ?? 0) + 1), m), {});
    const usable = stale.filter((x) => x.codeUsable).length;
    console.log(JSON.stringify({ staleItemIds: ids.length, kinds, codeVersionPassesValidator: usable, tasksTouched: tasksTouched.length, tasksLeftWithFewerThan10: remaining.filter((r) => r.remaining < 10).length, tasksWithNoPoolLeft: remaining.filter((r) => r.remaining === 0).length }));
    fs.writeFileSync(path.join(path.dirname(out), 'stale-pool-retire_summary.json'), JSON.stringify({ ids: ids.length, kinds, codeVersionPassesValidator: usable, byGrade: Object.fromEntries(results.map((r) => [r.grade, stale.filter((x) => x.grade === r.grade).length])), tasksTouched: tasksTouched.length, remainingPoolPerTouchedTask: remaining }, null, 2));
  }
  const summary = { prod: { questions: prodQ.length, curated: cur, ai, retired, humanEdits: edited }, grades: results.map((r) => ({ grade: r.grade, code: r.code, unknownTask: r.unknownTask, identical: r.c.identical.length, editedCurated: r.c.editedSamePrompt.filter((e) => e.source === 'curated').length, editedAi: r.c.editedSamePrompt.filter((e) => e.source === 'ai').length, reworded: r.c.reworded.length, ambiguous: r.c.ambiguous.length, new: r.c.newInCode.length, conflict: r.c.conflict.length, gone: r.c.goneFromCode.length, fieldCounts: r.fieldCounts })), plan, nights, totalRows: total };
  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(summary, null, 2));
  console.log(`wrote ${out}`);
  console.log(JSON.stringify({ grades: summary.grades.map((g) => [g.grade, g.code, g.identical, g.editedCurated + g.editedAi, g.reworded, g.ambiguous, g.new, g.conflict, g.gone]), totalRows: total }));
}

if (process.argv[1]?.endsWith('question-drift.ts')) await main();
