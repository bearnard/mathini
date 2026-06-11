#!/usr/bin/env node
/**
 * Generate image assets for new features (badges, onboarding, avatars, medals)
 * with Qwen-Image-2512-GGUF via lemonade, into public/{badges,avatars,leaderboard,onboarding}/.
 *
 *   public/badges/<badge-id>.webp       — one illustration per badge
 *   public/avatars/avatar-<n>.webp      — student avatars
 *   public/leaderboard/rank-{1,2,3}.webp — podium/medal art
 *   public/onboarding/welcome.webp       — hero illustration
 *
 * Skips images that already exist unless --force. Examples:
 *   node scripts/gen-feature-assets.mjs --dry-run
 *   node scripts/gen-feature-assets.mjs --force
 *   node scripts/gen-feature-assets.mjs --only badge-streak-10,avatar-1
 *   node scripts/gen-feature-assets.mjs --only leaderboard
 */

import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.join(scriptDir, '..');

// Style suffix reused across all asset types for visual consistency
const STYLE_SUFFIX =
  'Centered composition, plain solid white background, bold saturated colours, ' +
  'thick clean rounded outlines, minimal modern sticker style, soft and approachable.';

// ============================================================
// Badge illustrations
// ============================================================
const BADGE_DEFS = {
  'first-correct': 'a shining golden star with sparkles, celebrating a first achievement',
  'streak-3': 'a small flame icon, warm orange and red tones, three small fire sparks',
  'streak-5': 'a roaring fire icon with five flame tendrils, vibrant orange and yellow',
  'streak-10': 'a legendary crown of fire with ten flame rays, gold and crimson',
  'xp-500': 'a rising rocket with five stars, blue and white, upward motion lines',
  'xp-2000': 'a scholar\'s laurel wreath with open books, deep blue and gold',
  'xp-5000': 'a master\'s phoenix rising from knowledge flames, majestic gold and amber',
  'topic-complete-5': 'a small cluster of five colourful puzzle pieces forming a shape',
  'topic-complete-20': 'a large completed jigsaw puzzle with a trophy on top',
  'perfect-set-5': 'five perfectly aligned glowing gems in a row, soft glow',
  'perfect-set-10': 'ten radiant perfect gems in a golden arc, brilliant light',
};

function badgePrompt(id) {
  return (
    `A single, simple, friendly flat-vector ICON representing the badge "${id}": ` +
    `${BADGE_DEFS[id] || 'a unique achievement symbol'}. ` +
    `${STYLE_SUFFIX} NO text, letters, words or numbers anywhere.`
  );
}

// ============================================================
// Avatars — 6 friendly characters
// ============================================================
const AVATAR_DEFS = [
  'a cute cartoon tiger cub wearing a backpack, smiling, flat vector',
  'a cute cartoon panda wearing glasses, smiling, flat vector',
  'a cute cartoon owl wearing a graduation cap, smiling, flat vector',
  'a cute cartoon fox holding a book, smiling, flat vector',
  'a cute cartoon rabbit holding a pencil, smiling, flat vector',
  'a cute cartoon cat wearing a crown, smiling, flat vector',
];

// ============================================================
// Leaderboard medals
// ============================================================
const MEDAL_DEFS = {
  'rank-1': 'a large shiny gold trophy cup on a podium, with first place ribbon, celebratory',
  'rank-2': 'a silver medal on a ribbon, with second place star, elegant',
  'rank-3': 'a bronze medal on a ribbon, with third place star, warm tones',
};

function medalPrompt(id) {
  return (
    `A single illustration of "${id}" — ${MEDAL_DEFS[id]}. ` +
    `${STYLE_SUFFIX} NO text, letters, words or numbers anywhere.`
  );
}

// ============================================================
// Onboarding hero
// ============================================================
const WELCOME_PROMPT =
  `A welcoming illustration for children: a group of diverse friendly cartoon animals (tiger, panda, owl, fox) ` +
  `standing together behind a colorful school desk with books, a globe, and a laptop. ` +
  `They are smiling and waving. ` +
  `${STYLE_SUFFIX} NO text, letters, words or numbers anywhere.`;

// ============================================================
// Targets
// ============================================================
const TARGETS = [
  // Badges
  ...Object.entries(BADGE_DEFS).map(([id, desc]) => ({
    dir: 'badges',
    name: `badge-${id}`,
    prompt: badgePrompt(id),
  })),
  // Avatars
  ...AVATAR_DEFS.map((desc, i) => ({
    dir: 'avatars',
    name: `avatar-${i + 1}`,
    prompt: `${desc}, plain white background, front-facing portrait, flat vector style, vibrant colors. NO text, letters, words or numbers.`,
  })),
  // Medals
  ...Object.entries(MEDAL_DEFS).map(([id, desc]) => ({
    dir: 'leaderboard',
    name: id,
    prompt: medalPrompt(id),
  })),
  // Welcome
  {
    dir: 'onboarding',
    name: 'welcome',
    prompt: WELCOME_PROMPT,
  },
];

const { values } = parseArgs({
  options: {
    force: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    only: { type: 'string' },
    lemonade: { type: 'string', default: 'http://localhost:13305' },
    model: { type: 'string', default: 'Qwen-Image-2512-GGUF' },
    size: { type: 'string', default: '768' },
    out: { type: 'string', default: '256' },
    steps: { type: 'string', default: '8' },
    help: { type: 'boolean', default: false },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log('Usage: node scripts/gen-feature-assets.mjs [--force] [--dry-run] [--only badge-first-correct,avatar-1] [--steps 8] [--size 768] [--out 256]');
  process.exit(0);
}

const GEN = parseInt(values.size, 10) || 768;
const OUT = parseInt(values.out, 10) || 256;
const STEPS = parseInt(values.steps, 10) || 8;
const only = values.only ? new Set(values.only.split(',').map((s) => s.trim())) : null;

main().catch((e) => {
  console.error('\n❌ Failed:', e.message ?? e);
  process.exit(1);
});

async function main() {
  const dirs = ['badges', 'avatars', 'leaderboard', 'onboarding'];
  for (const d of dirs) {
    await mkdir(path.join(repoRoot, 'public', d), { recursive: true });
  }

  const todo = TARGETS.filter((t) => {
    if (only && !only.has(t.name) && !t.name.startsWith(only.values().next().value + '-')) return false;
    return values.force || !existsSync(path.join(repoRoot, 'public', t.dir, `${t.name}.webp`));
  });

  console.log(`${TARGETS.length} assets defined — ${todo.length} to generate (${TARGETS.length - todo.length} present/skipped).`);
  if (values['dry-run']) {
    for (const t of todo) console.log(`✚ ${t.dir}/${t.name}.webp`);
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
      const outPath = path.join(repoRoot, 'public', t.dir, `${t.name}.webp`);
      await sharp(png)
        .resize({ width: OUT, height: OUT, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 88 })
        .toFile(outPath);
      ok += 1;
      console.log(`✓ ${t.dir}/${t.name}.webp  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
    } catch (e) {
      failures.push(t.name);
      console.warn(`✗ ${t.dir}/${t.name} — ${e.message}`);
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
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer lemonade',
    },
    body: JSON.stringify({
      model: values.model,
      prompt,
      n: 1,
      size: `${GEN}x${GEN}`,
      width: GEN,
      height: GEN,
      steps: STEPS,
      cfg_scale: 1.0,
    }),
  });
  const textOrJson = await res.text();
  let json;
  try {
    json = JSON.parse(textOrJson);
  } catch {
    throw new Error(`lemonade ${res.status}: ${textOrJson.slice(0, 160)}`);
  }
  if (!res.ok || json.error) {
    throw new Error(`lemonade ${res.status}: ${JSON.stringify(json.error ?? json).slice(0, 160)}`);
  }
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error('no b64_json in response');
  return Buffer.from(b64, 'base64');
}
