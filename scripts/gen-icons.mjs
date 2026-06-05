#!/usr/bin/env node
/**
 * Generate grade + subject icons with FLUX.2 (Klein 9B) via lemonade, into
 * public/icons/. Used by CurriculumSelector for the grade/subject cards.
 *
 *   public/icons/subject-<subject.id>.webp   (e.g. subject-math.webp)
 *   public/icons/grade-<n>.webp              (n = 5..12)
 *
 * Skips icons that already exist unless --force. Examples:
 *   node scripts/gen-icons.mjs --dry-run
 *   node scripts/gen-icons.mjs --only subject-math,grade-7
 *   node scripts/gen-icons.mjs --force
 */

import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.join(scriptDir, '..');
const iconsDir = path.join(repoRoot, 'public', 'icons');

// Distinct subject.id values used across the curriculum → iconography hint.
// (Aliases like geo/geography, his/history, lsk/life-skills, ml/mathematical-literacy
//  are listed separately so each subject.id the UI requests has its own file.)
const SUBJECTS = {
  math: 'mathematics — colourful geometric shapes, a ruler and compass, plus and equals symbols',
  ml: 'mathematical literacy — a calculator, a bar chart and stacked coins',
  'mathematical-literacy': 'mathematical literacy — a calculator, a bar chart and stacked coins',
  geo: 'geography — a globe and a folded map with a compass rose',
  geography: 'geography — a globe and a folded map with a compass rose',
  his: 'history — an ancient scroll, an hourglass and a classical column',
  history: 'history — an ancient scroll, an hourglass and a classical column',
  nst: 'natural sciences and technology — a green leaf, an atom and a gear',
  ns: 'natural sciences — a microscope, a green leaf and an atom',
  ps: 'physical sciences — an atom, a laboratory beaker and a lightning bolt',
  ls: 'life sciences — a DNA double helix, a green leaf and a heart',
  tech: 'technology — a gear, a wrench and a glowing lightbulb',
  afr: 'Afrikaans language learning — an open book and a friendly speech bubble',
  eng: 'English language learning — an open book and a friendly speech bubble',
  xho: 'isiXhosa language learning — an open book and a friendly speech bubble with African patterns',
  lsk: 'life skills — a heart, a running figure and art supplies',
  'life-skills': 'life skills — a heart, a running figure and art supplies',
  lo: 'life orientation — a compass, a heart and an active running figure',
  ca: 'creative arts — a paint palette, a music note and theatre masks',
  accounting: 'accounting — a ledger book, a calculator and stacked coins',
  'business-studies': 'business studies — a briefcase, a rising growth chart and a handshake',
  economics: 'economics — coins, a supply-and-demand line chart and a globe',
  ems: 'economic and management sciences — a piggy bank, coins and a bar chart',
  'computer-applications-technology': 'computer applications technology — a laptop showing a spreadsheet and a mouse cursor',
  it: 'information technology — a computer monitor showing code brackets and a circuit board',
};

const GRADES = [5, 6, 7, 8, 9, 10, 11, 12];

function subjectPrompt(hint) {
  return (
    `A single, simple, friendly flat-vector ICON of ${hint}. ` +
    'Centered composition, plain solid white background, bold saturated colours, thick clean rounded outlines, ' +
    'minimal modern app-icon / sticker style, soft and approachable. NO text, letters, words or numbers anywhere.'
  );
}

function gradePrompt(n) {
  return (
    `A single, simple, friendly flat-vector ICON representing a school grade: a neat stack of colourful textbooks ` +
    `with a graduation cap on top and a pencil. Centered, plain solid white background, bold saturated colours, ` +
    `thick clean rounded outlines, minimal modern app-icon style. NO text, letters, words or numbers anywhere.`
  );
}

const TARGETS = [
  ...Object.entries(SUBJECTS).map(([id, hint]) => ({ name: `subject-${id}`, prompt: subjectPrompt(hint) })),
  ...GRADES.map((n) => ({ name: `grade-${n}`, prompt: gradePrompt(n) })),
];

const { values } = parseArgs({
  options: {
    force: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    only: { type: 'string' },
    lemonade: { type: 'string', default: 'http://localhost:13305' },
    model: { type: 'string', default: 'Flux-2-Klein-9B-GGUF' },
    size: { type: 'string', default: '768' },
    out: { type: 'string', default: '256' },
    steps: { type: 'string', default: '6' },
    help: { type: 'boolean', default: false },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log('Usage: node scripts/gen-icons.mjs [--force] [--dry-run] [--only subject-math,grade-7] [--steps 6] [--size 768] [--out 256]');
  process.exit(0);
}

const GEN = parseInt(values.size, 10) || 768;
const OUT = parseInt(values.out, 10) || 256;
const STEPS = parseInt(values.steps, 10) || 6;
const only = values.only ? new Set(values.only.split(',').map((s) => s.trim())) : null;

main().catch((e) => {
  console.error('\n❌ Failed:', e.message ?? e);
  process.exit(1);
});

async function main() {
  await mkdir(iconsDir, { recursive: true });
  const todo = TARGETS.filter((t) => {
    if (only && !only.has(t.name)) return false;
    return values.force || !existsSync(path.join(iconsDir, `${t.name}.webp`));
  });

  console.log(`${TARGETS.length} icons defined — ${todo.length} to generate (${TARGETS.length - todo.length} present/skipped).`);
  if (values['dry-run']) {
    for (const t of todo) console.log(`✚ ${t.name}.webp`);
    return;
  }
  if (todo.length === 0) {
    console.log('Nothing to generate.');
    return;
  }

  let ok = 0;
  const failures = [];
  for (const t of todo) {
    try {
      const t0 = Date.now();
      const png = await generateImage(t.prompt);
      const outPath = path.join(iconsDir, `${t.name}.webp`);
      await sharp(png).resize({ width: OUT, height: OUT, fit: 'inside', withoutEnlargement: true }).webp({ quality: 88 }).toFile(outPath);
      ok += 1;
      console.log(`✓ icons/${t.name}.webp  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    } catch (e) {
      failures.push(t.name);
      console.warn(`✗ ${t.name} — ${e.message}`);
    }
  }
  console.log(`\nSummary\n  generated: ${ok}\n  failed:    ${failures.length}`);
  if (failures.length) {
    failures.forEach((n) => console.log(`  ✗ ${n}`));
    process.exitCode = 1;
  }
}

async function generateImage(prompt) {
  const res = await fetch(`${values.lemonade}/v1/images/generations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer lemonade' },
    body: JSON.stringify({ model: values.model, prompt, n: 1, size: `${GEN}x${GEN}`, width: GEN, height: GEN, steps: STEPS, cfg_scale: 1.0 }),
  });
  const textOrJson = await res.text();
  let json;
  try { json = JSON.parse(textOrJson); } catch { throw new Error(`lemonade ${res.status}: ${textOrJson.slice(0, 160)}`); }
  if (!res.ok || json.error) throw new Error(`lemonade ${res.status}: ${JSON.stringify(json.error ?? json).slice(0, 160)}`);
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error('no b64_json in response');
  return Buffer.from(b64, 'base64');
}
