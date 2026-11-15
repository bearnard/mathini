// ADR 0004, part 5: resolves what teacher-check.md lists into review-pack items, and writes dry-run SQL. Pure: all file and D1 data comes in
// through `ResolveEnv`, so the logic is unit-tested without the repo or a database.
//
//   question items -> a D1 question id + current version id (found by prompt and key, from the D1 export)
//   lesson items   -> {file, anchor_text}, checked to occur EXACTLY ONCE in the file (the same rule scripts/apply-review-changes.ts enforces)
//   scope items    -> no file (the NST exam scope question)
// Anything that cannot be resolved goes to the report with a reason; nothing is guessed.
import { norm, type RawItem } from './teacherCheckParse';
import { countOccurrences } from './applyChanges';

export interface BankQuestion { file: string; prompt: string; options: string[]; answer: string; explanation: string | null }
export interface D1Question { id: string; versionId: number; task?: string }

export interface ResolveEnv {
  read(rel: string): string | null; // path under src/curriculum
  listDir(rel: string): string[]; // non-test .ts/.tsx files directly in the folder, as paths under src/curriculum
  findByBaseName(base: string, grade?: number, term?: number): string[];
  banks: BankQuestion[];
  d1: Map<string, D1Question[]>; // keyed by d1Key(prompt, answer)
}

export const d1Key = (prompt: string, answer: string) => `${norm(prompt)}\u0001${norm(answer)}`;

/**
 * The same prompt and key can exist in two grades' topics (a question reused on purpose). D1 keeps them as separate questions with a `task`
 * (the topic): `gr9-grammar-reporting-t2` for Grade 7 and up, a plain slug such as `begripstoets` for Grade 6. The bank file says which one is meant
 * (grade, term, topic folder), so candidates are narrowed in tiers, and the first tier that is not empty wins:
 *   1. the task the file name gives: `gr{grade}-{topic}-t{term}`, or `{topic}` for Grade 6
 *   2. a task for that grade (`gr{grade}-` prefix) that contains the topic folder name
 *   3. any task for that grade
 * If that leaves more than one question, the match is ambiguous and is reported with the tasks.
 */
export const narrowByTask = (cands: D1Question[], file: string): D1Question[] => {
  const m = file.match(/^grade(\d+)\/[^/]+\/term(\d)\/([^/]+)\//);
  if (!m || cands.every((c) => !c.task)) return cands;
  const [, grade, term, topic] = m;
  const exact = new Set([`gr${grade}-${topic}-t${term}`, ...(grade === '6' ? [topic] : [])]);
  const tiers: ((t: string) => boolean)[] = [(t) => exact.has(t), (t) => t.startsWith(`gr${grade}-`) && t.includes(topic), (t) => t.startsWith(`gr${grade}-`)];
  for (const ok of tiers) {
    const hit = cands.filter((c) => c.task && ok(c.task));
    if (hit.length) return hit;
  }
  return cands;
};

export type Item =
  | { kind: 'question'; pack: string; file: string; questionId: string; versionId: number; prompt: string; doubt: string; sources: number[]; sections: string[] }
  | { kind: 'lesson_line'; pack: string; file: string; anchor: string; context: Record<string, unknown>; doubt: string; sources: number[]; sections: string[] }
  | { kind: 'scope'; pack: string; text: string; doubt: string; sources: number[]; sections: string[] };

export interface Unresolved { mdLine: number; section: string; kind: string; file: string | null; text: string; reason: string }
export interface Resolution { items: Item[]; unresolved: Unresolved[] }

const BANK_START = /^(export )?const (bank|items)\b/m;
const APOS = (s: string) => [s, s.replace(/’/g, "'"), s.replace(/'/g, '’')];

/** The pack an item belongs to, from its file path. */
export const packOf = (file: string | null, newQuestions = false): string => {
  if (!file) return 'nst-exam-scope';
  const m = file.match(/^grade(\d+)\/(afrikaans|isixhosa)\b/);
  if (!m) return 'other';
  if (newQuestions) return `afrikaans-g${m[1]}-new-questions`;
  return `${m[2]}-g${m[1]}`;
};

const stripTags = (s: string) => s.replace(/<[^>]*>/g, ' ').replace(/\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim();

const contextAround = (src: string, idx: number, len: number, section: string): Record<string, unknown> => {
  let title: string | null = null;
  const re = /title:\s*(['"`])(.+?)\1/g;
  for (let m = re.exec(src); m && m.index < idx; m = re.exec(src)) title = m[2];
  return {
    slide_title: title,
    before: stripTags(src.slice(Math.max(0, idx - 300), idx)).slice(-160),
    after: stripTags(src.slice(idx + len, idx + len + 300)).slice(0, 160),
    section,
  };
};

interface Hit { file: string; idx: number; text: string; inBank: boolean }

const findHits = (env: ResolveEnv, files: string[], anchor: string): Hit[] => {
  const hits: Hit[] = [];
  for (const f of files) {
    const src = env.read(f);
    if (src === null) continue;
    const bankAt = src.search(BANK_START);
    for (const v of new Set(APOS(anchor))) {
      const n = countOccurrences(src, v);
      if (n === 0) continue;
      for (let i = src.indexOf(v); i !== -1; i = src.indexOf(v, i + v.length)) hits.push({ file: f, idx: i, text: v, inBank: bankAt !== -1 && i > bankAt });
      break; // the first spelling that matches
    }
  }
  return hits;
};

const resolveFiles = (env: ResolveEnv, r: RawItem): { files: string[]; reason?: string } => {
  if (r.baseName) {
    const c = env.findByBaseName(r.baseName, r.grade, r.term);
    if (c.length === 0) return { files: [], reason: `no file named ${r.baseName}${r.grade ? ` in grade ${r.grade}` : ''}${r.term ? ` term ${r.term}` : ''}` };
    if (c.length > 1) return { files: [], reason: `${r.baseName} is in ${c.length} places (${c.slice(0, 3).join(', ')}…): grade or term unknown` };
    return { files: c };
  }
  if (!r.file) return { files: [], reason: 'the note names no file' };
  if (/\.tsx?$/.test(r.file)) return env.read(r.file) === null ? { files: [], reason: `file not found: ${r.file}` } : { files: [r.file] };
  const d = env.listDir(r.file);
  return d.length ? { files: d } : { files: [], reason: `folder not found or empty: ${r.file}` };
};

export interface ResolveOptions {
  /** Also make items for lesson text that occurs more than once in its file (marked context.repeated). apply-review-changes.ts will refuse to apply such a change. */
  allowRepeated?: boolean;
}

export const resolveItems = (raw: RawItem[], env: ResolveEnv, opts: ResolveOptions = {}): Resolution => {
  const items = new Map<string, Item>();
  const unresolved: Unresolved[] = [];
  const bad = (r: RawItem, reason: string) => unresolved.push({ mdLine: r.mdLine, section: r.section, kind: r.kind, file: r.file ?? r.baseName ?? null, text: r.text, reason });

  const add = (key: string, item: Item) => {
    const old = items.get(key);
    if (!old) { items.set(key, item); return; }
    old.sources.push(...item.sources);
    old.sections.push(...item.sections);
    if (!old.doubt.includes(item.doubt)) old.doubt = (old.doubt + ' | ' + item.doubt).slice(0, 900);
  };

  const addQuestion = (r: RawItem, b: BankQuestion, newQ = false) => {
    const hits = env.d1.get(d1Key(b.prompt, b.answer)) ?? [];
    if (hits.length === 0) return bad(r, `question not in the D1 export: ${b.prompt.slice(0, 70)}`);
    const narrowed = narrowByTask(hits, b.file);
    const ids = new Set(narrowed.map((h) => h.id));
    if (ids.size > 1) return bad(r, `question matches ${ids.size} D1 ids (same prompt and key; ${narrowed.map((h) => `${h.id} in ${h.task ?? '?'}`).join(', ')}): ${b.prompt.slice(0, 70)}`);
    const h = narrowed[0];
    add(`q:${h.id}`, { kind: 'question', pack: packOf(b.file, newQ), file: b.file, questionId: h.id, versionId: h.versionId, prompt: b.prompt, doubt: r.doubt, sources: [r.mdLine], sections: [r.section] });
  };

  for (const r of raw) {
    if (r.kind === 'scope') {
      add(`s:${r.text}`, { kind: 'scope', pack: 'nst-exam-scope', text: r.text, doubt: r.doubt, sources: [r.mdLine], sections: [r.section] });
      continue;
    }
    if (r.kind === 'bankrange') {
      const byFile = new Map<string, BankQuestion[]>();
      for (const b of env.banks) if (b.file.startsWith(`${r.file}/`)) byFile.set(b.file, [...(byFile.get(b.file) ?? []), b]);
      for (const qs of byFile.values()) {
        for (const b of qs.slice(6)) {
          const hay = norm([b.prompt, ...b.options, b.answer].join(' '));
          const look = (r.hints ?? []).filter((h) => hay.includes(norm(h)));
          addQuestion({ ...r, text: b.prompt, doubt: look.length ? `${r.doubt} Look at: ${look.join('; ')}.` : r.doubt }, b, true);
        }
      }
      continue;
    }
    const where = resolveFiles(env, r);
    if (where.reason) { if (r.kind !== 'segment') bad(r, where.reason); continue; }

    if (r.kind === 'row') {
      const qs = env.banks.filter((b) => where.files.includes(b.file));
      let b = qs.find((x) => norm(x.prompt) === norm(r.text));
      if (!b && r.answer) {
        const byAns = qs.filter((x) => norm(x.answer) === norm(r.answer!));
        if (byAns.length === 1) b = byAns[0];
        else if (byAns.length > 1) { bad(r, `${byAns.length} questions in the file have this answer and the prompt text does not match exactly`); continue; }
      }
      if (!b) { bad(r, 'no bank question in the file matches the prompt or the answer'); continue; }
      addQuestion(r, b);
      continue;
    }

    // quoted / segment / line: a question prompt, or a lesson anchor
    const text = r.text.trim();
    if (/…|\.\.\./.test(text)) { if (r.kind !== 'segment') bad(r, 'the text contains an ellipsis, so it is not a literal anchor'); continue; }
    const asPrompt = env.banks.find((b) => where.files.includes(b.file) && norm(b.prompt) === norm(text));
    if (asPrompt) { addQuestion(r, asPrompt); continue; }
    const hits = findHits(env, where.files, text);
    const lessonHits = hits.filter((h) => !h.inBank);
    if (hits.length === 0) { if (r.kind !== 'segment') bad(r, 'text not found in the file'); continue; }
    if (lessonHits.length === 0) { if (r.kind !== 'segment') bad(r, 'text is only in the question bank, not in the lesson'); continue; }
    const repeated = hits.length > 1;
    if (repeated && !opts.allowRepeated) { bad(r, `text occurs ${hits.length} times in the file (${lessonHits.length} in the lesson): an anchor must occur exactly once`); continue; }
    const h = lessonHits[0];
    const src = env.read(h.file)!;
    const context = { ...contextAround(src, h.idx, h.text.length, r.section), ...(repeated ? { repeated: true, occurrences: hits.length } : {}) };
    add(`l:${h.file}\u0001${h.text}`, { kind: 'lesson_line', pack: packOf(h.file), file: h.file, anchor: h.text, context, doubt: r.doubt, sources: [r.mdLine], sections: [r.section] });
  }
  const seen = new Set<string>();
  const uniq = unresolved.filter((u) => { const k = `${u.file}\u0001${u.text}\u0001${u.reason}`; if (seen.has(k)) return false; seen.add(k); return true; });
  return { items: [...items.values()], unresolved: uniq };
};

// ---------- packs and SQL ----------

export interface Pack { title: string; key: string; items: Item[] }

const PACK_TITLES: Record<string, string> = { 'nst-exam-scope': 'NST exam scope (Grade 6)' };
const packTitle = (key: string): string => {
  if (PACK_TITLES[key]) return PACK_TITLES[key];
  const m = key.match(/^(afrikaans|isixhosa)-g(\d+)(-new-questions)?$/);
  if (!m) return key;
  const lang = m[1] === 'afrikaans' ? 'Afrikaans' : 'isiXhosa';
  return `${lang} Grade ${m[2]}${m[3] ? ' new questions' : ''}`;
};

/** Groups items into packs of at most `size` items (the ADR suggests 10-60). Small tails are merged into the previous pack. */
export const planPacks = (items: Item[], size = 40): Pack[] => {
  const by = new Map<string, Item[]>();
  for (const it of items) by.set(it.pack, [...(by.get(it.pack) ?? []), it]);
  const packs: Pack[] = [];
  for (const [key, list] of [...by.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const sorted = [...list].sort((a, b) => {
      const fa = 'file' in a ? a.file : '', fb = 'file' in b ? b.file : '';
      return fa.localeCompare(fb) || a.sources[0] - b.sources[0];
    });
    const chunks: Item[][] = [];
    for (let i = 0; i < sorted.length; i += size) chunks.push(sorted.slice(i, i + size));
    if (chunks.length > 1 && chunks[chunks.length - 1].length < 10) chunks[chunks.length - 2].push(...(chunks.pop() as Item[]));
    chunks.forEach((c, i) => packs.push({ key, items: c, title: `${packTitle(key)}${chunks.length > 1 ? ` (${i + 1}/${chunks.length})` : ''}` }));
  }
  return packs;
};

const q = (s: string) => `'${s.replace(/'/g, "''")}'`;
const CREATED_BY = 'import-teacher-check';
/** Not a path apply-review-changes.ts will touch (no .ts/.tsx extension): the scope item is a question for the school, not lesson text. */
export const SCOPE_FILE = 'scope:nst-exam-scope';

/** Idempotent SQL for one pack: re-running it adds nothing (the pack is found by title, each item by its sort number). */
export const packSql = (pack: Pack, nowMs: number): string => {
  const lines = [
    `-- Pack: ${pack.title} (${pack.items.length} items). Generated by scripts/import-teacher-check.ts. DRY RUN: review before running.`,
    `INSERT INTO review_packs (title, created_by, created_at, status) SELECT ${q(pack.title)}, ${q(CREATED_BY)}, ${nowMs}, 'open' WHERE NOT EXISTS (SELECT 1 FROM review_packs WHERE title = ${q(pack.title)} AND created_by = ${q(CREATED_BY)});`,
  ];
  pack.items.forEach((it, i) => {
    const sort = i + 1;
    let cols: string;
    if (it.kind === 'question') cols = `'question', ${q(it.questionId)}, ${it.versionId}, NULL, NULL, ${q(JSON.stringify({ file: it.file, prompt: it.prompt }))}`;
    else if (it.kind === 'lesson_line') cols = `'lesson_line', NULL, NULL, ${q(it.file)}, ${q(it.anchor)}, ${q(JSON.stringify(it.context))}`;
    else cols = `'lesson_line', NULL, NULL, ${q(SCOPE_FILE)}, ${q(it.text)}, ${q(JSON.stringify({ scope: true }))}`; // migration 0012 requires file and anchor_text for a lesson_line
    lines.push(
      `INSERT INTO review_pack_items (pack_id, kind, question_id, version_id, file, anchor_text, context, doubt, sort) SELECT p.id, ${cols}, ${q(it.doubt)}, ${sort} FROM review_packs p WHERE p.title = ${q(pack.title)} AND p.created_by = ${q(CREATED_BY)} AND NOT EXISTS (SELECT 1 FROM review_pack_items x WHERE x.pack_id = p.id AND x.sort = ${sort});`,
    );
  });
  return lines.join('\n') + '\n';
};

export const reportMarkdown = (res: Resolution, packs: Pack[]): string => {
  const out: string[] = ['# Import of teacher-check.md: report', ''];
  const n = (f: (i: Item) => boolean) => res.items.filter(f).length;
  out.push(`${res.items.length} items resolved (${n((i) => i.kind === 'question')} questions, ${n((i) => i.kind === 'lesson_line')} lesson lines, ${n((i) => i.kind === 'scope')} scope), in ${packs.length} packs. ${res.unresolved.length} unresolved.`, '', '## Packs', '', '| Pack | Items |', '|---|---:|');
  for (const p of packs) out.push(`| ${p.title} | ${p.items.length} |`);
  const dups = res.unresolved.filter((u) => /D1 ids/.test(u.reason));
  if (dups.length) {
    out.push('', '## Duplicate questions in D1 (same prompt and key; one of each pair can be retired)', '');
    for (const u of dups) out.push(`- ${u.reason.replace(/^question matches \d+ D1 ids \(same prompt and key; /, '').replace(/\):/, ':')}`);
  }
  out.push('', '## Unresolved', '');
  const byReason = new Map<string, Unresolved[]>();
  for (const u of res.unresolved) {
    const k = u.reason.replace(/\d+/g, 'N').replace(/:.*$/, '').slice(0, 80);
    byReason.set(k, [...(byReason.get(k) ?? []), u]);
  }
  out.push('| Reason | Count |', '|---|---:|');
  for (const [k, v] of [...byReason].sort((a, b) => b[1].length - a[1].length)) out.push(`| ${k} | ${v.length} |`);
  out.push('', '| teacher-check.md line | Section | Kind | File | Text | Reason |', '|---|---|---|---|---|---|');
  for (const u of res.unresolved) out.push(`| ${u.mdLine} | ${u.section} | ${u.kind} | ${u.file ? `\`${u.file}\`` : ''} | ${u.text.slice(0, 80).replace(/\|/g, '\\|').replace(/\n/g, ' ')} | ${u.reason.replace(/\|/g, '\\|')} |`);
  out.push('');
  return out.join('\n');
};
