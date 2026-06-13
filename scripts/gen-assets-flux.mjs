#!/usr/bin/env node
/**
 * Generate image assets with a local lemonade image model (FLUX.2 Klein by
 * default, or e.g. --model Qwen-Image-2512-GGUF), then write them into
 * public/<entry.path>. Tuning params (steps/cfg/flow-shift/sampler) default
 * to the model's own image_defaults on the server.
 *
 * Sibling of generate-assets.mjs (same manifest fragments, same --grade/--subject/…
 * filters, same skip-existing + --dry-run behaviour). FLUX takes a plain-text
 * prompt — no structured caption / captioner step — so each entry is just:
 *
 *   POST {lemonade}/v1/images/generations { prompt = entry.prompt + STYLE_SUFFIX }
 *     → b64_json PNG → sharp (resize/encode) → public/<entry.path>
 *
 * Examples:
 *   node scripts/gen-assets-flux.mjs --dry-run
 *   node scripts/gen-assets-flux.mjs --grade grade6 --subject xho --limit 5
 *   node scripts/gen-assets-flux.mjs --grade grade8 --steps 8
 */

import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Audience scales with grade (Grade N ≈ age N+5: gr6≈11, gr12≈17).
function audienceFor(grade) {
  const n = parseInt(String(grade).replace(/\D/g, ''), 10);
  if (!Number.isFinite(n)) return 'a school learner';
  return `a Grade ${n} learner (about ${n + 5} years old)`;
}

function styleSuffix(grade, hasNegative) {
  // With a negative prompt, keep the positive side minimal: enumerating
  // unwanted things in the positive prompt (e.g. the anatomy sentence below)
  // verifiably makes negation-weak models like Qwen-Image RENDER them.
  // The unwanted-thing vocabulary belongs in --negative only.
  if (hasNegative) {
    return (
      'Flat, modern style; clean plain/white background; bright colours; bold clean shapes; ' +
      'strong contrast; one clear subject; purely pictorial with no text anywhere.'
    );
  }
  return (
    `Flat, modern, age-appropriate educational illustration for ${audienceFor(grade)}; clean plain/white background; ` +
    'bright colours; bold clean shapes; strong contrast; one clear subject; ' +
    'NO text/letters/words/labels in the image. ' +
    'Correct natural anatomy: every person has exactly two arms, two legs and two hands with five well-formed ' +
    'fingers each; no extra, missing, duplicated or distorted limbs, hands or fingers; clean, simple poses.'
  );
}

// Manifest prompts open with boilerplate like "Clear educational SVG diagram
// for Grade 11 learners showing …" — Qwen-Image reads that as a poster brief
// and typesets the topic as a title. In negative mode, rewrite the opener to
// a wordless framing (the audience/age context is re-added by styleSuffix).
function neutralizeTitleBait(prompt) {
  // `… depicting "Topic Name": rest` — the quoted title gets typeset verbatim
  // by Qwen-Image. Drop it; the description after the colon carries the content.
  const depicting = /^\s*an?\s+clear\s+educational\s+illustration\s+depicting\s+"[^"]*"\s*:?\s*/i;
  if (depicting.test(prompt)) return prompt.replace(depicting, 'Wordless pictorial illustration: ');
  const opener = /^\s*(?:create\s+a\s+)?clear[^.]*?educational\s+(?:svg\s+diagram|illustration)[^.]*?/i;
  const withVerb = new RegExp(opener.source + String.raw`\b(?:showing|of|about)\s+`, 'i');
  if (withVerb.test(prompt)) return prompt.replace(withVerb, 'Wordless pictorial illustration: ');
  const bare = new RegExp(opener.source + String.raw`\.\s*`, 'i');
  if (bare.test(prompt)) return prompt.replace(bare, 'Wordless pictorial illustration. ');
  return prompt;
}

// Used for `--negative auto`.
const NEGATIVE_AUTO =
  'text, words, letters, numbers, labels, captions, title, heading, typography, font, ' +
  'watermark, signature, photo, photorealistic, extra limbs, extra fingers, deformed hands, distorted anatomy';

const FILTER_FIELDS = ['grade', 'subject', 'term', 'topic', 'section'];

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.join(scriptDir, '..');
const publicRoot = path.join(repoRoot, 'public');

const { values } = parseArgs({
  options: {
    grade: { type: 'string' },
    subject: { type: 'string' },
    term: { type: 'string' },
    topic: { type: 'string' },
    section: { type: 'string' },
    force: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    limit: { type: 'string' },
    lemonade: { type: 'string', default: 'http://localhost:13305' },
    model: { type: 'string', default: 'Flux-2-Klein-9B-GGUF' },
    // 512 is plenty (the learn UI caps images at 288px tall) and generates
    // ~2.5x faster than the previous 768 default.
    width: { type: 'string', default: '512' },
    height: { type: 'string', default: '512' },
    // steps/cfg/flow-shift/sampler are only sent when given, so each model's
    // own image_defaults apply (Flux: 4 steps cfg 1.0; Qwen-Image: 20 steps
    // cfg 2.5 euler flow_shift 3.0). Pass --steps 6 to restore the old Flux
    // behaviour.
    steps: { type: 'string' },
    cfg: { type: 'string' },
    'flow-shift': { type: 'string' },
    sampler: { type: 'string' },
    // 'auto' uses the built-in NEGATIVE_AUTO list. When set, the anatomy/no-text
    // constraints move out of the positive prompt (better for Qwen-Image).
    negative: { type: 'string' },
    help: { type: 'boolean', default: false },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log(
    'Usage: node scripts/gen-assets-flux.mjs [--grade grade6] [--subject xho] [--term term1] [--topic …] [--section diagram] [--force] [--dry-run] [--limit N] [--width 1024] [--height 1024] [--steps N] [--cfg N] [--flow-shift N] [--sampler euler] [--lemonade http://localhost:13305] [--model Qwen-Image-2512-GGUF]\n' +
      'steps/cfg/flow-shift/sampler default to the model\'s own image_defaults on the lemonade server.',
  );
  process.exit(0);
}

const WIDTH = parseInt(values.width, 10) || 1024;
const HEIGHT = parseInt(values.height, 10) || 1024;
const STEPS = values.steps !== undefined ? parseInt(values.steps, 10) : undefined;
const CFG = values.cfg !== undefined ? parseFloat(values.cfg) : undefined;
const FLOW_SHIFT = values['flow-shift'] !== undefined ? parseFloat(values['flow-shift']) : undefined;
const SAMPLER = values.sampler;
const NEGATIVE = values.negative === 'auto' ? NEGATIVE_AUTO : values.negative;

main().catch((error) => {
  console.error('\n❌ Failed:', error.message ?? error);
  process.exit(1);
});

async function main() {
  const filters = Object.fromEntries(FILTER_FIELDS.filter((f) => values[f]).map((f) => [f, values[f]]));
  const entries = (await loadEntries()).filter((e) => e.type === 'ai' && matchesFilters(e, filters));

  const todo = [];
  let exist = 0;
  for (const entry of entries) {
    const outputPath = path.join(publicRoot, entry.path);
    if (existsSync(outputPath) && !values.force) {
      exist += 1;
      continue;
    }
    todo.push({ entry, outputPath });
  }

  const limit = values.limit ? parseInt(values.limit, 10) : 0;
  if (limit > 0 && todo.length > limit) {
    console.log(`Limiting to ${limit} of ${todo.length} pending (--limit).`);
    todo.length = limit;
  }

  console.log(`Matched ${entries.length} AI entries — ${todo.length} to generate, ${exist} already exist.`);

  if (values['dry-run']) {
    for (const { entry, outputPath } of todo) {
      console.log(`✚ would gen   ${entryLabel(entry)} -> ${path.relative(repoRoot, outputPath)}`);
    }
    console.log(`\nSummary (dry run)\n  to generate (new): ${todo.length}\n  already exist:     ${exist}`);
    return;
  }

  if (todo.length === 0) {
    console.log('Nothing to generate.');
    return;
  }

  const tuning = [
    STEPS !== undefined ? `${STEPS} steps` : 'model-default steps',
    CFG !== undefined ? `cfg ${CFG}` : null,
    SAMPLER ?? null,
  ].filter(Boolean).join(', ');
  console.log(`\nGenerating ${todo.length} image(s) with ${values.model} via lemonade (${WIDTH}x${HEIGHT}, ${tuning})…\n`);
  let generated = 0;
  const failures = [];
  for (const { entry, outputPath } of todo) {
    try {
      const t0 = Date.now();
      const basePrompt = NEGATIVE !== undefined ? neutralizeTitleBait(entry.prompt.trim()) : entry.prompt.trim();
      const png = await generateImage(`${basePrompt}\n\n${styleSuffix(entry.grade, NEGATIVE !== undefined)}`);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await convert(png, outputPath);
      generated += 1;
      console.log(`✓ ${entryLabel(entry)} -> ${path.relative(repoRoot, outputPath)}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    } catch (e) {
      failures.push(entry);
      console.warn(`✗ ${entryLabel(entry)} — ${e.message}`);
    }
  }

  console.log(`\nSummary\n  generated: ${generated}\n  failed:    ${failures.length}`);
  if (failures.length > 0) {
    console.log('Failed (re-run to retry — succeeded ones are skipped):');
    for (const entry of failures) console.log(`  ✗ ${entryLabel(entry)}`);
    process.exitCode = 1;
  }
}

async function generateImage(prompt) {
  const body = {
    model: values.model,
    prompt,
    n: 1,
    size: `${WIDTH}x${HEIGHT}`,
    width: WIDTH,
    height: HEIGHT,
  };
  // Omitted params fall back to the model's image_defaults server-side.
  if (STEPS !== undefined) body.steps = STEPS;
  if (CFG !== undefined) body.cfg_scale = CFG;
  if (FLOW_SHIFT !== undefined) body.flow_shift = FLOW_SHIFT;
  if (SAMPLER !== undefined) body.sampling_method = SAMPLER;
  if (NEGATIVE !== undefined) body.negative_prompt = NEGATIVE;
  if (process.env.PRINT_BODY) { console.log(JSON.stringify(body, null, 2)); process.exit(0); }
  const res = await fetch(`${values.lemonade}/v1/images/generations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer lemonade' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`lemonade ${res.status}: ${text.slice(0, 200)}`);
  }
  if (!res.ok || json.error) throw new Error(`lemonade ${res.status}: ${JSON.stringify(json.error ?? json).slice(0, 200)}`);
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error('no b64_json image in response');
  const buf = Buffer.from(b64, 'base64');
  if (buf.length === 0) throw new Error('empty image bytes');
  return buf;
}

async function convert(srcPng, outputPath) {
  const ext = path.extname(outputPath).toLowerCase();
  let img = sharp(srcPng).resize({ width: 768, height: 768, fit: 'inside', withoutEnlargement: true });
  if (ext === '.webp') img = img.webp({ quality: 82 });
  else if (ext === '.jpg' || ext === '.jpeg') img = img.jpeg({ quality: 82 });
  else if (ext === '.png') img = img.png();
  else throw new Error(`Unsupported output extension for ${outputPath}`);
  await img.toFile(outputPath);
}

async function loadEntries() {
  const dir = path.join(repoRoot, 'scripts', 'asset-manifest');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json') && f !== '_example.json');
  const all = [];
  for (const file of files) {
    const parsed = JSON.parse(await readFile(path.join(dir, file), 'utf8'));
    const entries = Array.isArray(parsed) ? parsed : parsed.entries;
    if (!Array.isArray(entries)) throw new Error(`Manifest ${file} must be an array or { "entries": [...] }`);
    all.push(...entries);
  }
  return all;
}

function matchesFilters(entry, filters) {
  return Object.entries(filters).every(([field, value]) => entry[field] === value);
}

function entryLabel(entry) {
  return `${entry.grade}/${entry.subject}/${entry.term}/${entry.topic}/${entry.section}`;
}
