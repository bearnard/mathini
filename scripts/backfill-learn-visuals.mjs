#!/usr/bin/env node
/**
 * Backfill Watch & Learn images across the curriculum.
 *
 * Phases (all idempotent — wired steps are skipped on re-run):
 *   A. wire-existing : step 1 lacks `image:` but a generated asset (or
 *      manifest entry) already exists for the topic → insert the image
 *      field into the TSX. (Grade 9 has 139 of these.)
 *   B. new-step1     : topics with no image anywhere and no asset →
 *      append a manifest entry AND wire step 1. The UI hides images
 *      until the file is generated, so wiring first is safe.
 *   C. per-step      : for visual subjects, steps 2+ that have neither
 *      an image nor visual JSX (svg/table/chart) get a manifest entry
 *      and an image field.
 *
 * New manifest entries go to scripts/asset-manifest/backfill-<grade>.json
 * (merged with any previous run). Both generators read every fragment in
 * that directory and skip files that already exist, so after --apply run
 * EITHER of:
 *
 *   node scripts/gen-assets-flux.mjs            # local lemonade + FLUX (preferred)
 *   npm run assets:gen                          # Gemini API
 *
 * Either also regenerates the broken refs (missing files) automatically.
 * Related: scripts/wire-topic-images.mjs does step-1 wiring for a single
 * grade+subject; this script is the cross-grade superset (adds per-step).
 *
 * Usage:
 *   node scripts/backfill-learn-visuals.mjs              # dry-run report
 *   node scripts/backfill-learn-visuals.mjs --apply      # write code + manifests
 *   node scripts/backfill-learn-visuals.mjs --grade grade9 --apply
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CURR = path.join(ROOT, 'src/curriculum');
const PUB = path.join(ROOT, 'public');
const MANIFEST_DIR = path.join(ROOT, 'scripts/asset-manifest');

// Subjects whose learn steps are mostly verbal — only step 1 gets an image.
// Everything else is treated as visual and gets per-step backfill (phase C).
const STEP1_ONLY_SUBJECTS = new Set([
  'afrikaans', 'english', 'isixhosa', 'eng', 'xho', 'afr',
  'life-orientation', 'lo', 'life-skills', 'lsk',
  'creative-arts', 'ca',
  'accounting', 'acc', 'business-studies', 'bus',
  'computer-applications-technology', 'cat', 'it', 'information-technology',
]);

// Map src/curriculum subject dir → public/curriculum path code, for areas
// that have no existing manifest entries to copy the code from.
const FALLBACK_SUBJECT_CODE = {
  afrikaans: 'afr', english: 'eng', isixhosa: 'xho', core: 'math',
  mathematics: 'math', 'mathematical-literacy': 'ml', history: 'his',
  geography: 'geo', 'natural-sciences': 'ns', 'natural-sciences-technology': 'nst',
  'life-sciences': 'ls', 'physical-sciences': 'ps', economics: 'econ',
  'economic-management-sciences': 'ems', 'life-orientation': 'lo',
  'life-skills': 'lsk', technology: 'tech', 'creative-arts': 'ca',
  accounting: 'acc', 'business-studies': 'bus',
  'computer-applications-technology': 'cat', 'information-technology': 'it',
};

const SUBJECT_HUMAN = {
  afr: 'Afrikaans', eng: 'English', xho: 'isiXhosa', math: 'Mathematics',
  ml: 'Mathematical Literacy', his: 'History', geo: 'Geography',
  ns: 'Natural Sciences', nst: 'Natural Sciences and Technology',
  ls: 'Life Sciences', ps: 'Physical Sciences', econ: 'Economics',
  ems: 'Economic and Management Sciences', lo: 'Life Orientation',
  lsk: 'Life Skills', tech: 'Technology', ca: 'Creative Arts',
  acc: 'Accounting', bus: 'Business Studies',
  cat: 'Computer Applications Technology', it: 'Information Technology',
};

const { values: args } = parseArgs({
  options: {
    apply: { type: 'boolean', default: false },
    grade: { type: 'string' },
  },
});

const humanize = (slug) =>
  slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (p.endsWith('.tsx')) yield p;
  }
}

// --- Parse learnSteps with char offsets so we can splice edits back in ---
function extractSteps(src) {
  const m = src.match(/const\s+learnSteps[^=]*=\s*\[/);
  if (!m) return null;
  let i = m.index + m[0].length;
  let depth = 1;
  const steps = [];
  let stepStart = -1, braceDepth = 0;
  for (; i < src.length && depth > 0; i++) {
    const c = src[i];
    if (c === '[' || c === '(') depth++;
    else if (c === ']' || c === ')') depth--;
    else if (c === '{') { if (depth === 1 && braceDepth === 0) stepStart = i; braceDepth++; }
    else if (c === '}') {
      braceDepth--;
      if (depth === 1 && braceDepth === 0 && stepStart >= 0) {
        steps.push({ start: stepStart, end: i + 1, text: src.slice(stepStart, i + 1) });
        stepStart = -1;
      }
    }
  }
  return steps;
}

// --- Index existing manifest entries and generated files ---
const manifestByKey = new Map(); // grade|term|topic → entry
for (const f of readdirSync(MANIFEST_DIR)) {
  if (!f.endsWith('.json') || f === '_example.json') continue;
  let entries;
  try { entries = JSON.parse(readFileSync(path.join(MANIFEST_DIR, f), 'utf8')); }
  catch { continue; }
  for (const e of entries) {
    if (!e.grade || !e.topic || !e.path) continue;
    const key = `${e.grade}|${e.term}|${e.topic}`;
    if (!manifestByKey.has(key)) manifestByKey.set(key, e);
  }
}

// subject code per (grade, srcSubject), learned from manifest paths
const subjectCode = new Map();

// --- Scan curriculum ---
const files = [];
for (const file of walk(CURR)) {
  const src = readFileSync(file, 'utf8');
  if (!src.includes('learnSteps')) continue;
  const steps = extractSteps(src);
  if (!steps || steps.length === 0) continue;
  const rel = path.relative(CURR, file);
  if (rel.includes('/_shared/')) continue;
  const parts = rel.split('/');
  const grade = parts[0];
  if (args.grade && grade !== args.grade) continue;
  let subject, term, topic;
  if (/^term/.test(parts[1])) { subject = 'core'; term = parts[1]; topic = parts[2]; }
  else { subject = parts[1]; term = parts[2]; topic = parts[3]; }
  if (!topic || topic.endsWith('.tsx')) continue; // file not nested in a topic dir
  files.push({ file, rel, src, grade, subject, term, topic, steps });

  const mEntry = manifestByKey.get(`${grade}|${term}|${topic}`);
  if (mEntry) {
    const code = mEntry.path.split('/')[1] === grade ? mEntry.path.split('/')[2] : null;
    if (code) subjectCode.set(`${grade}|${subject}`, code);
  }
}

// how many learnSteps files share a topic dir (affects file naming)
const filesPerTopicDir = new Map();
for (const f of files) {
  const dir = path.dirname(f.file);
  filesPerTopicDir.set(dir, (filesPerTopicDir.get(dir) ?? 0) + 1);
}

const codeFor = (grade, subject) =>
  subjectCode.get(`${grade}|${subject}`) ?? FALLBACK_SUBJECT_CODE[subject] ?? subject;

const stats = { wireExisting: 0, newStep1: 0, perStep: 0, skippedMultiFile: 0, broken: 0 };
const newManifest = new Map(); // grade → entries[]
const plannedEdits = []; // { file, insertAt, snippet, label }

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

function imageSnippet(stepText, srcPath, alt) {
  // Indentation: match the step's `title:` line.
  const tm = stepText.match(/(\n([ \t]*))title:/);
  const indent = tm ? tm[2] : '    ';
  return `\n${indent}image: {\n${indent}  src: '${srcPath}',\n${indent}  alt: '${esc(alt)}',\n${indent}},`;
}

// Escape-aware: handles titles like 'Ohm\'s law' and "the \"big\" idea".
const TITLE_RE = /title:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")\s*(,?)/;

function planInsert(f, step, srcPath, alt, label) {
  const tm = step.text.match(TITLE_RE);
  if (!tm) return false;
  const insertAt = step.start + tm.index + tm[0].length;
  // If the title had no trailing comma, the inserted property must supply it.
  const lead = tm[2] === ',' ? '' : ',';
  plannedEdits.push({ file: f.file, insertAt, snippet: lead + imageSnippet(step.text, srcPath, alt), label });
  return true;
}

function addManifestEntry(f, code, relPath, alt, title) {
  const gradeNum = f.grade.replace('grade', '');
  const subjHuman = SUBJECT_HUMAN[code] ?? humanize(f.subject);
  const entry = {
    grade: f.grade,
    subject: code,
    term: f.term,
    topic: f.topic,
    section: 'diagram',
    type: 'ai',
    path: relPath,
    alt,
    prompt:
      `Clear, single-subject, flat friendly educational illustration for Grade ${gradeNum} ` +
      `${subjHuman} learners about "${title}" (topic: ${humanize(f.topic)}). ` +
      `Simple bright shapes, white background, no text or labels in the image.`,
  };
  if (!newManifest.has(f.grade)) newManifest.set(f.grade, []);
  newManifest.get(f.grade).push(entry);
}

for (const f of files) {
  const code = codeFor(f.grade, f.subject);
  const multiFile = (filesPerTopicDir.get(path.dirname(f.file)) ?? 1) > 1;
  const fileSlug = path
    .basename(f.file, '.tsx')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
  const baseDir = `curriculum/${f.grade}/${code}/${f.term}/${f.topic}`;
  const perStepAllowed = !STEP1_ONLY_SUBJECTS.has(f.subject) && !STEP1_ONLY_SUBJECTS.has(code);

  f.steps.forEach((step, idx) => {
    const hasImage = /image:\s*\{/.test(step.text);
    if (hasImage) {
      const sm = step.text.match(/image:\s*\{\s*src:\s*['"]([^'"]+)['"]/);
      if (sm && !existsSync(path.join(PUB, sm[1].replace(/^\//, '')))) stats.broken++;
      return;
    }
    const rawTitle = (step.text.match(TITLE_RE) || [])[1];
    const title = rawTitle
      ? rawTitle.slice(1, -1).replace(/\\(['"\\])/g, '$1')
      : `${f.topic} step ${idx + 1}`;
    const alt = `${title} — ${humanize(f.topic)} illustration`;

    if (idx === 0) {
      // Phase A: an asset already exists for this topic (manifest or disk)?
      const existing = manifestByKey.get(`${f.grade}|${f.term}|${f.topic}`);
      const diskPath = `${baseDir}/diagram.webp`;
      const haveAsset = existing ?? (existsSync(path.join(PUB, diskPath)) ? { path: diskPath, alt } : null);
      if (haveAsset) {
        if (multiFile) { stats.skippedMultiFile++; return; } // same diagram in every sub-component looks broken
        if (planInsert(f, step, '/' + haveAsset.path, haveAsset.alt ?? alt, 'wire-existing')) stats.wireExisting++;
        return;
      }
      // Phase B: brand-new step-1 entry
      const relPath = multiFile ? `${baseDir}/${fileSlug}-step-1.webp` : diskPath;
      if (planInsert(f, step, '/' + relPath, alt, 'new-step1')) {
        addManifestEntry(f, code, relPath, alt, title);
        stats.newStep1++;
      }
      return;
    }

    // Phase C: per-step backfill for visual subjects, skip steps with visual JSX
    if (!perStepAllowed) return;
    if (/<svg|<img|<table|Chart|Mafs|Graph|SupplyDemand|<video/i.test(step.text)) return;
    const relPath = multiFile
      ? `${baseDir}/${fileSlug}-step-${idx + 1}.webp`
      : `${baseDir}/step-${idx + 1}.webp`;
    if (planInsert(f, step, '/' + relPath, alt, 'per-step')) {
      addManifestEntry(f, code, relPath, alt, title);
      stats.perStep++;
    }
  });
}

// --- Report ---
const byGradeLabel = {};
for (const e of plannedEdits) {
  const grade = path.relative(CURR, e.file).split('/')[0];
  const k = `${grade} ${e.label}`;
  byGradeLabel[k] = (byGradeLabel[k] ?? 0) + 1;
}
console.log('Planned image-field insertions by grade/phase:');
for (const [k, v] of Object.entries(byGradeLabel).sort()) console.log(`  ${k}: ${v}`);
console.log(`\nTotals: wire-existing=${stats.wireExisting}  new-step1=${stats.newStep1}  per-step=${stats.perStep}`);
console.log(`Existing broken image refs (need generation, no code change): ${stats.broken}`);
if (stats.skippedMultiFile) {
  console.log(`Skipped ${stats.skippedMultiFile} multi-file-topic step-1 wirings of a shared diagram (would duplicate the same image).`);
}
let newEntryCount = 0;
for (const v of newManifest.values()) newEntryCount += v.length;
console.log(`New manifest entries to write: ${newEntryCount}`);

if (!args.apply) {
  console.log('\nDry run — re-run with --apply to write code edits and manifest fragments.');
  process.exit(0);
}

// --- Apply: TSX edits (per file, descending offset so offsets stay valid) ---
const editsByFile = new Map();
for (const e of plannedEdits) {
  if (!editsByFile.has(e.file)) editsByFile.set(e.file, []);
  editsByFile.get(e.file).push(e);
}
for (const [file, edits] of editsByFile) {
  let src = readFileSync(file, 'utf8');
  edits.sort((a, b) => b.insertAt - a.insertAt);
  for (const e of edits) src = src.slice(0, e.insertAt) + e.snippet + src.slice(e.insertAt);
  writeFileSync(file, src);
}
console.log(`\nEdited ${editsByFile.size} TSX files.`);

// --- Apply: manifest fragments (merge with previous backfill runs by path) ---
for (const [grade, entries] of newManifest) {
  const out = path.join(MANIFEST_DIR, `backfill-${grade}.json`);
  let merged = entries;
  if (existsSync(out)) {
    const prev = JSON.parse(readFileSync(out, 'utf8'));
    const have = new Set(entries.map((e) => e.path));
    merged = [...prev.filter((e) => !have.has(e.path)), ...entries];
  }
  merged.sort((a, b) => a.path.localeCompare(b.path));
  writeFileSync(out, JSON.stringify(merged, null, 2) + '\n');
  console.log(`Wrote ${merged.length} entries → ${path.relative(ROOT, out)}`);
}

console.log(`
Next steps:
  1. Review/edit prompts in scripts/asset-manifest/backfill-*.json
  2. Generate locally (lemonade + FLUX; picks up new entries AND the ${stats.broken} broken refs,
     skips files that already exist, re-run to retry failures):
       node scripts/gen-assets-flux.mjs --dry-run     # see what it would do
       node scripts/gen-assets-flux.mjs               # or filter: --grade grade9
     (Gemini alternative: npm run assets:gen)
  3. npx tsc --noEmit && git diff   # sanity-check the code edits
`);
