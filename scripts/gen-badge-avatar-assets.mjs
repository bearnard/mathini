#!/usr/bin/env node
/**
 * Generate avatar and badge images using Qwen-Image-2512-GGUF via lemonade.
 *
 * Outputs:
 *   public/avatars/avatar-1.webp … avatar-8.webp
 *   public/badges/<badge-id>.webp
 *
 * Usage:
 *   node scripts/gen-badge-avatar-assets.mjs
 *   node scripts/gen-badge-avatar-assets.mjs --dry-run
 *   node scripts/gen-badge-avatar-assets.mjs --force
 *   node scripts/gen-badge-avatar-assets.mjs --only avatars
 *   node scripts/gen-badge-avatar-assets.mjs --only badges
 *   node scripts/gen-badge-avatar-assets.mjs --lemonade http://localhost:13305
 */

import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const { values } = parseArgs({
  options: {
    force:     { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    only:      { type: 'string' },           // 'avatars' | 'badges'
    lemonade:  { type: 'string', default: 'http://localhost:13305' },
    model:     { type: 'string', default: 'Qwen-Image-2512-GGUF' },
    steps:     { type: 'string', default: '20' },
    cfg:       { type: 'string', default: '2.5' },
    shift:     { type: 'string', default: '3.0' },
    size:      { type: 'string', default: '512' },
    help:      { type: 'boolean', default: false },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log('Usage: node scripts/gen-badge-avatar-assets.mjs [--dry-run] [--force] [--only avatars|badges] [--lemonade http://localhost:13305] [--model Qwen-Image-2512-GGUF] [--steps 20] [--cfg 2.5] [--shift 3.0] [--size 512]');
  process.exit(0);
}

const STEPS  = parseInt(values.steps, 10) || 20;
const CFG    = parseFloat(values.cfg)     || 2.5;
const SHIFT  = parseFloat(values.shift)   || 3.0;
const DIM    = parseInt(values.size, 10)  || 512;

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const publicRoot = path.join(scriptDir, '..', 'public');

const STYLE = (
  'Flat modern icon illustration on a plain white circular background; ' +
  'bold clean shapes; bright saturated colours; strong contrast; ' +
  'no text, no letters, no words, no labels; simple and iconic; ' +
  'suitable for a South African primary/high school educational app for children.'
);

// ── Asset definitions ────────────────────────────────────────────────────────

const AVATARS = [
  { id: 'avatar-1', prompt: 'Friendly cartoon lion cub mascot, bright orange mane, wearing a small school backpack, big warm smile, round face, simple flat vector style.' },
  { id: 'avatar-2', prompt: 'Cute cartoon elephant calf mascot, large floppy ears, wearing a cheerful school tie, warm grey tones, friendly expression, flat vector style.' },
  { id: 'avatar-3', prompt: 'Cheerful cartoon penguin mascot wearing a small graduation cap, holding a yellow pencil, black and white with a bright orange beak, flat vector style.' },
  { id: 'avatar-4', prompt: 'Wise cartoon owl mascot with large round amber eyes, wearing a small mortarboard hat, holding a tiny book, warm brown feathers, flat vector style.' },
  { id: 'avatar-5', prompt: 'Energetic cartoon cheetah cub mascot with bold black spots, holding a green notebook, bright yellow fur, playful expression, flat vector style.' },
  { id: 'avatar-6', prompt: 'Friendly cartoon zebra foal mascot with bold black and white stripes, big bright eyes, a warm smile, flat vector style.' },
  { id: 'avatar-7', prompt: 'Cute cartoon meerkat mascot standing upright, wearing tiny reading glasses, alert friendly expression, sandy brown fur, flat vector style.' },
  { id: 'avatar-8', prompt: 'Playful cartoon hippo calf mascot in a teal school uniform, round happy face, small ears, pale purple-grey skin, flat vector style.' },
];

const BADGES = [
  { id: 'first-correct',    prompt: 'Glowing golden star icon with a white checkmark in the centre, bright yellow radiant sparkles, on a warm gold circular badge background.' },
  { id: 'streak-3',         prompt: 'Small single warm orange flame icon on a dark amber circular badge, clean fire silhouette, orange and yellow glow.' },
  { id: 'streak-5',         prompt: 'Three rising orange flames grouped together on a red-amber circular badge, bright fire glow, energetic feel.' },
  { id: 'streak-10',        prompt: 'Large blazing fire with tall orange and red flames, intense glow, dramatic heat waves, on a deep red circular badge.' },
  { id: 'xp-500',           prompt: 'Shiny bronze medal icon with a red ribbon loop at the top, circular medal face, warm copper tones, clean and polished.' },
  { id: 'xp-2000',          prompt: 'Shiny silver medal icon with a blue ribbon loop at the top, bright metallic silver face, clean and polished.' },
  { id: 'xp-5000',          prompt: 'Gleaming gold trophy cup icon with two handles and a star on the base, bright gold colour, small sparkle highlights.' },
  { id: 'topic-complete-5', prompt: 'Open book icon with a bright green checkmark overlaid on the pages, flat bold style, teal and green colour palette.' },
  { id: 'topic-complete-20',prompt: 'Glowing open book icon with a gold star bookmark ribbon, radiant light emanating from the pages, rich blue and gold colours.' },
  { id: 'perfect-set-5',    prompt: 'Five bright yellow stars arranged in a tight circular cluster, each star crisp and bold, warm golden glow, flat icon style.' },
  { id: 'perfect-set-10',   prompt: 'Royal gold crown icon decorated with ten colourful gem jewels along the top, deep gold colour, regal and celebratory.' },
];

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const allItems = [];

  if (!values.only || values.only === 'avatars') {
    for (const a of AVATARS) {
      allItems.push({ ...a, outputPath: path.join(publicRoot, 'avatars', `${a.id}.webp`), outSize: 256 });
    }
  }
  if (!values.only || values.only === 'badges') {
    for (const b of BADGES) {
      allItems.push({ ...b, outputPath: path.join(publicRoot, 'badges', `${b.id}.webp`), outSize: 128 });
    }
  }

  const todo = values.force
    ? allItems
    : allItems.filter((item) => !existsSync(item.outputPath));

  const skipped = allItems.length - todo.length;

  console.log(`Assets: ${allItems.length} total — ${todo.length} to generate, ${skipped} already exist.`);

  if (values['dry-run']) {
    for (const item of todo) {
      console.log(`  would gen  ${path.relative(path.join(scriptDir, '..'), item.outputPath)}`);
      console.log(`    prompt: ${item.prompt.slice(0, 80)}…`);
    }
    return;
  }

  if (todo.length === 0) {
    console.log('Nothing to generate. Use --force to regenerate existing files.');
    return;
  }

  console.log(`\nGenerating with ${values.model} (${DIM}x${DIM}, ${STEPS} steps, cfg=${CFG}, shift=${SHIFT})…\n`);

  let generated = 0;
  const failures = [];

  for (const item of todo) {
    const t0 = Date.now();
    try {
      const buf = await generateImage(`${item.prompt}\n\n${STYLE}`);
      await mkdir(path.dirname(item.outputPath), { recursive: true });
      await convertToWebp(buf, item.outputPath, item.outSize);
      generated++;
      console.log(`✓  ${path.relative(path.join(scriptDir, '..'), item.outputPath)}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    } catch (err) {
      failures.push(item.id);
      console.warn(`✗  ${item.id} — ${err.message}`);
    }
  }

  console.log(`\nSummary  generated: ${generated}  failed: ${failures.length}`);
  if (failures.length > 0) {
    console.log('Failed:', failures.join(', '));
    process.exitCode = 1;
  }
}

async function generateImage(prompt) {
  const res = await fetch(`${values.lemonade}/v1/images/generations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer lemonade' },
    body: JSON.stringify({
      model: values.model,
      prompt,
      n: 1,
      size: `${DIM}x${DIM}`,
      width: DIM,
      height: DIM,
      steps: STEPS,
      cfg_scale: CFG,
      flow_shift: SHIFT,
      sampling_method: 'euler',
    }),
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`lemonade ${res.status}: ${text.slice(0, 300)}`);
  }
  if (!res.ok || json.error) {
    throw new Error(`lemonade ${res.status}: ${JSON.stringify(json.error ?? json).slice(0, 300)}`);
  }
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error('no b64_json in response');
  const buf = Buffer.from(b64, 'base64');
  if (buf.length === 0) throw new Error('empty image bytes');
  return buf;
}

async function convertToWebp(srcBuf, outputPath, size) {
  await sharp(srcBuf)
    .resize({ width: size, height: size, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outputPath);
}

main().catch((err) => {
  console.error('\nFatal:', err.message ?? err);
  process.exit(1);
});
