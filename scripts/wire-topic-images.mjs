#!/usr/bin/env node
/**
 * Wire topic diagram images for a grade+subject: ensure each pool-mode topic has
 *   (1) an asset-manifest entry (created if missing — existing prompts kept), and
 *   (2) an `image: { src, alt }` on its first learnStep so CapsSubjectTopic shows it.
 *
 * Image path convention (matches grades 6-9):
 *   /curriculum/grade<N>/<code>/<term>/<topicDir>/diagram.webp
 * where <code> is the component's apiPath code and <term>/<topicDir> come from
 * the file path. After wiring, run: node scripts/gen-assets-flux.mjs --grade gradeN --subject <code>
 *
 * Usage:
 *   node scripts/wire-topic-images.mjs --grade grade11 --subject acc [--dry-run]
 */
import { parseArgs } from 'node:util';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.join(scriptDir, '..');
const manifestDir = path.join(repoRoot, 'scripts', 'asset-manifest');

const { values } = parseArgs({
  options: {
    grade: { type: 'string' },
    subject: { type: 'string' }, // apiPath code, e.g. acc, it, geo
    'dry-run': { type: 'boolean', default: false },
  },
});
if (!values.grade || !values.subject) {
  console.error('Required: --grade gradeN --subject <code>');
  process.exit(1);
}
const GRADE = values.grade; // "grade11"
const CODE = values.subject; // "acc"
const gradeNum = GRADE.replace(/\D/g, '');

function attr(src, name) {
  const m = src.match(new RegExp(`${name}=\\{?["'\`]([^"'\`]+)["'\`]`));
  return m ? m[1] : null;
}

function topicPrompt(title, subtitle) {
  const t = title || 'this topic';
  return subtitle
    ? `A clear educational illustration depicting "${t}": ${subtitle}.`
    : `A clear educational illustration depicting the topic "${t}".`;
}

// Inject `image: {src, alt}` into the FIRST learnStep object, if absent.
function injectImage(src, imgSrc, alt) {
  const re = /(const\s+learnSteps\s*:\s*LearnStep\[\]\s*=\s*\[\s*)\{/;
  if (!re.test(src)) return null; // unexpected structure — skip
  // already has an image on the first step?
  const firstObj = src.slice(src.search(re));
  if (/^\s*const[\s\S]*?\{\s*image\s*:/.test(firstObj.slice(0, 120))) return src; // already imaged
  const inject = `{\n    image: { src: ${JSON.stringify(imgSrc)}, alt: ${JSON.stringify(alt)} },`;
  return src.replace(re, `$1${inject}`);
}

async function main() {
  const files = (await glob(`src/curriculum/${GRADE}/**/*.tsx`, { cwd: repoRoot })).map((f) => path.join(repoRoot, f));
  const manifests = new Map(); // fragment file -> entries array

  let wired = 0, manifestAdded = 0, skipped = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const code = (src.match(/apiPath="\/api\/caps\/([a-z0-9]+)"/) || [])[1];
    const task = attr(src, 'task');
    if (code !== CODE || !task) continue; // not this subject / not pool-mode

    const rel = path.relative(path.join(repoRoot, 'src/curriculum', GRADE), file); // subjectDir/term/topicDir/File.tsx
    const parts = rel.split(path.sep);
    const term = parts.find((p) => /^term\d+$/.test(p));
    const topicDir = parts[parts.length - 2];
    if (!term || !topicDir) { skipped.push(`${rel} (no term/topic dir)`); continue; }

    const title = attr(src, 'title');
    const subtitle = attr(src, 'subtitle');
    const relPath = `curriculum/${GRADE}/${CODE}/${term}/${topicDir}/diagram.webp`;
    const imgSrc = `/${relPath}`;

    // (1) manifest entry
    const fragFile = path.join(manifestDir, `${CODE}-gr${gradeNum}-${term}.json`);
    if (!manifests.has(fragFile)) {
      let arr = [];
      if (existsSync(fragFile)) {
        const j = JSON.parse(readFileSync(fragFile, 'utf8'));
        arr = Array.isArray(j) ? j : j.entries || [];
      }
      manifests.set(fragFile, arr);
    }
    const arr = manifests.get(fragFile);
    if (!arr.some((e) => e.path === relPath)) {
      arr.push({
        grade: GRADE, subject: CODE, term, topic: topicDir, section: 'diagram', type: 'ai',
        path: relPath, alt: title || topicDir, prompt: topicPrompt(title, subtitle),
      });
      manifestAdded += 1;
    }

    // (2) component wiring
    const next = injectImage(src, imgSrc, title || subtitle || topicDir);
    if (next === null) { skipped.push(`${rel} (no learnSteps array)`); continue; }
    if (next !== src) {
      if (!values['dry-run']) writeFileSync(file, next);
      wired += 1;
    }
  }

  if (!values['dry-run']) {
    for (const [frag, arr] of manifests) writeFileSync(frag, JSON.stringify(arr, null, 2) + '\n');
  }

  console.log(`${GRADE}/${CODE}: ${wired} components wired, ${manifestAdded} manifest entries added, ${skipped.length} skipped${values['dry-run'] ? ' [DRY RUN]' : ''}`);
  skipped.slice(0, 10).forEach((s) => console.log('   ⚠️  ' + s));
  console.log(`\nNext: node scripts/gen-assets-flux.mjs --grade ${GRADE} --subject ${CODE}`);
}
main().catch((e) => { console.error('❌', e.message); process.exit(1); });
