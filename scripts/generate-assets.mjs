#!/usr/bin/env node
/**
 * Generate local static image assets from JSON manifest fragments.
 *
 * Manifest fragments: scripts/asset-manifest/*.json
 * Output files: public/<entry.path>, served by Next.js at /<entry.path>
 *
 * Examples:
 *   npm run assets:gen -- --dry-run
 *   npm run assets:gen -- --subject nst
 *   npm run assets:gen -- --topic photosynthesis --force
 *   npm run assets:gen -- --type svg --concurrency 5
 *   npm run assets:gen -- --manifest "scripts/asset-manifest/*.json" --section hero
 *
 * AI notes:
 *   Uses the Gemini REST generateContent endpoint. Model availability and request
 *   validation were checked against the local key; generation may still fail if
 *   the key has no image quota or billing entitlement.
 */

import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { optimize } from 'svgo';

// Listed by the Gemini models API as "Nano Banana" and supporting generateContent.
// REST request shape verified: POST /v1beta/models/<model>:generateContent with
// generationConfig.responseModalities=["IMAGE"]. Image bytes are returned as
// candidates[0].content.parts[].inlineData.data when quota is available.
const AI_MODEL = 'gemini-2.5-flash-image';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent`;
const STYLE_SUFFIX = 'Flat, friendly, modern educational illustration for an 11-12 year-old; clean plain/white background; bright but not garish; NO text/letters/words/labels in the image; simple, clear, single clear subject.';
const DEFAULT_MANIFEST_GLOB = 'scripts/asset-manifest/*.json';
const DEFAULT_CONCURRENCY = 3;
const FILTER_FIELDS = ['grade', 'subject', 'term', 'topic', 'section', 'type'];
const repoRoot = process.cwd();
const publicRoot = path.join(repoRoot, 'public');

const { values } = parseArgs({
  options: {
    grade: { type: 'string' },
    subject: { type: 'string' },
    term: { type: 'string' },
    topic: { type: 'string' },
    section: { type: 'string' },
    type: { type: 'string' },
    force: { type: 'boolean', default: false },
    manifest: { type: 'string', default: DEFAULT_MANIFEST_GLOB },
    'dry-run': { type: 'boolean', default: false },
    concurrency: { type: 'string', default: String(DEFAULT_CONCURRENCY) },
    help: { type: 'boolean', default: false },
  },
  allowPositionals: false,
});

if (values.help) {
  console.log('Usage: npm run assets:gen -- [--grade grade6] [--subject nst] [--term term1] [--topic photosynthesis] [--section hero] [--type ai|svg] [--force] [--dry-run] [--manifest "scripts/asset-manifest/*.json"] [--concurrency 3]');
  process.exit(0);
}

const concurrency = Number.parseInt(values.concurrency, 10);
if (!Number.isInteger(concurrency) || concurrency < 1) {
  console.error('✗ --concurrency must be a positive integer');
  process.exit(1);
}
if (values.type && !['ai', 'svg'].includes(values.type)) {
  console.error('✗ --type must be "ai" or "svg"');
  process.exit(1);
}

const filters = Object.fromEntries(
  FILTER_FIELDS.filter((field) => values[field]).map((field) => [field, values[field]]),
);

async function main() {
  const manifestFiles = await findFilesByGlob(values.manifest);
  if (manifestFiles.length === 0) {
    console.log(`No manifest files matched ${values.manifest}`);
    printSummary({ generated: 0, skipped: 0, failures: [] });
    return;
  }

  const entries = await loadEntries(manifestFiles);
  const filteredEntries = entries.filter((entry) => matchesFilters(entry, filters));

  console.log(`Manifest files: ${manifestFiles.length}`);
  console.log(`Entries: ${entries.length}; matched: ${filteredEntries.length}`);
  if (values['dry-run']) console.log('Dry run: no API calls or file writes will be performed.');

  const summary = { generated: 0, skipped: 0, failures: [] };
  await runPool(filteredEntries, concurrency, async (entry, index) => {
    try {
      const result = await processEntry(entry, index);
      summary[result] += 1;
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      summary.failures.push({ entry, reason });
      console.error(`✗ ${entryLabel(entry)} — ${reason}`);
    }
  });

  printSummary(summary);
  if (summary.failures.length > 0) process.exitCode = 1;
}

async function loadEntries(files) {
  const all = [];
  for (const file of files) {
    let parsed;
    try {
      parsed = JSON.parse(await readFile(file, 'utf8'));
    } catch (error) {
      throw new Error(`Could not parse manifest ${path.relative(repoRoot, file)}: ${error.message}`);
    }
    const entries = Array.isArray(parsed) ? parsed : parsed.entries;
    if (!Array.isArray(entries)) {
      throw new Error(`Manifest ${path.relative(repoRoot, file)} must be an array or { "entries": [...] }`);
    }
    entries.forEach((entry, i) => all.push({ ...entry, _manifestFile: file, _manifestIndex: i }));
  }
  return all;
}

function matchesFilters(entry, selectedFilters) {
  return Object.entries(selectedFilters).every(([field, value]) => entry[field] === value);
}

async function processEntry(entry, index) {
  validateEntry(entry);
  const outputPath = outputPathFor(entry.path);
  const exists = existsSync(outputPath);
  const relPath = path.relative(repoRoot, outputPath);

  if (values['dry-run']) {
    if (exists && !values.force) {
      console.log(`↷ exists      ${entryLabel(entry)}`);
      return 'skipped';
    }
    console.log(`✚ would gen   ${entryLabel(entry)} -> ${relPath}${exists ? ' (overwrite, --force)' : ''}`);
    return 'generated';
  }

  if (!values.force && exists) {
    console.log(`↷ ${entryLabel(entry)} exists`);
    return 'skipped';
  }

  await mkdir(path.dirname(outputPath), { recursive: true });
  if (entry.type === 'ai') {
    await generateAiAsset(entry, outputPath);
  } else {
    await generateSvgAsset(entry, outputPath);
  }
  console.log(`✓ ${entryLabel(entry)} -> ${path.relative(repoRoot, outputPath)}`);
  return 'generated';
}

function validateEntry(entry) {
  for (const field of ['grade', 'subject', 'term', 'topic', 'section', 'type', 'path', 'alt']) {
    if (!entry[field] || typeof entry[field] !== 'string') throw new Error(`Missing required string field "${field}"`);
  }
  if (!['ai', 'svg'].includes(entry.type)) throw new Error(`Unsupported type "${entry.type}"`);
  if (entry.type === 'ai' && (!entry.prompt || typeof entry.prompt !== 'string')) {
    throw new Error('AI entry requires string field "prompt"');
  }
  if (entry.type === 'svg' && (!entry.svgSource || typeof entry.svgSource !== 'string')) {
    throw new Error('SVG entry requires string field "svgSource"');
  }
}

async function generateAiAsset(entry, outputPath) {
  const key = await readGeminiApiKey();
  const prompt = `${entry.prompt.trim()}\n\nStyle requirements: ${STYLE_SUFFIX}`;
  const response = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['IMAGE'] },
    }),
  });

  const text = await response.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = null;
  }

  if (!response.ok) {
    const message = json?.error?.message ?? text.slice(0, 500);
    throw new Error(`Gemini API ${response.status}: ${message}`);
  }

  const inlineData = json?.candidates?.[0]?.content?.parts?.find((part) => part.inlineData?.data)?.inlineData;
  if (!inlineData?.data) throw new Error('Gemini response did not include inlineData image bytes');

  const source = Buffer.from(inlineData.data, 'base64');
  if (source.length === 0) throw new Error('Gemini returned empty image bytes');

  const webp = await sharp(source)
    .resize({ width: 768, height: 768, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  await writeFile(outputPath, webp);
}

async function generateSvgAsset(entry, outputPath) {
  const sourcePath = repoPathFor(entry.svgSource);
  let svg;
  try {
    svg = await readFile(sourcePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error(`svgSource not found: ${entry.svgSource}`);
    throw error;
  }
  const result = optimize(svg, {
    path: sourcePath,
    multipass: true,
    plugins: [{ name: 'preset-default' }, { name: 'removeViewBox', active: false }],
  });
  if (result.error) throw new Error(`SVGO failed: ${result.error}`);
  await writeFile(outputPath, result.data);
}

async function readGeminiApiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const devVarsPath = path.join(repoRoot, '.dev.vars');
  try {
    const file = await readFile(devVarsPath, 'utf8');
    for (const line of file.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const match = trimmed.match(/^GEMINI_API_KEY\s*=\s*(.*)$/);
      if (match) return stripQuotes(match[1].trim());
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  throw new Error('Missing GEMINI_API_KEY in environment or .dev.vars');
}

function stripQuotes(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function outputPathFor(relativePath) {
  if (path.isAbsolute(relativePath)) throw new Error(`Output path must be relative to public/: ${relativePath}`);
  if (relativePath.split(/[\\/]/).includes('..')) throw new Error(`Output path cannot contain '..': ${relativePath}`);
  return path.join(publicRoot, relativePath);
}

function repoPathFor(relativePath) {
  if (path.isAbsolute(relativePath)) throw new Error(`Path must be relative to repo root: ${relativePath}`);
  if (relativePath.split(/[\\/]/).includes('..')) throw new Error(`Path cannot contain '..': ${relativePath}`);
  return path.join(repoRoot, relativePath);
}

function entryLabel(entry) {
  return `${entry.type}:${entry.grade}/${entry.subject}/${entry.term}/${entry.topic}/${entry.section}`;
}

async function runPool(items, limit, worker) {
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const current = next;
      next += 1;
      await worker(items[current], current);
    }
  });
  await Promise.all(workers);
}

function printSummary(summary) {
  const dry = values['dry-run'];
  console.log('\nSummary' + (dry ? ' (dry run)' : ''));
  console.log(`  ${dry ? 'to generate (new):' : 'generated:'} ${summary.generated}`);
  console.log(`  ${dry ? 'already exist:    ' : 'skipped:  '} ${summary.skipped}`);
  if (!dry) console.log(`  failed:    ${summary.failures.length}`);
  else if (summary.failures.length) console.log(`  invalid:   ${summary.failures.length}`);
  if (summary.failures.length > 0) {
    console.log('\nFailures:');
    for (const failure of summary.failures) {
      console.log(`  ✗ ${entryLabel(failure.entry)} — ${failure.reason}`);
    }
  }
}

async function findFilesByGlob(globPattern) {
  const normalized = globPattern.replaceAll('\\', '/');
  const firstWildcard = normalized.search(/[*?[]/);
  const basePart = firstWildcard === -1 ? normalized : normalized.slice(0, firstWildcard);
  const baseDir = basePart.includes('/') ? basePart.slice(0, basePart.lastIndexOf('/')) : '.';
  const searchRoot = repoPathFor(baseDir || '.');
  const matcher = globToRegExp(normalized);
  const files = [];

  async function walk(dir) {
    let children;
    try {
      children = await readdir(dir);
    } catch (error) {
      if (error.code === 'ENOENT') return;
      throw error;
    }
    await Promise.all(children.map(async (child) => {
      if (child === 'node_modules' || child === '.git' || child === '.next' || child === '.open-next') return;
      const fullPath = path.join(dir, child);
      const info = await stat(fullPath);
      if (info.isDirectory()) {
        await walk(fullPath);
      } else {
        const relative = path.relative(repoRoot, fullPath).replaceAll(path.sep, '/');
        if (matcher.test(relative)) files.push(fullPath);
      }
    }));
  }

  await walk(searchRoot);
  return files.sort();
}

function globToRegExp(globPattern) {
  let source = '^';
  for (let i = 0; i < globPattern.length; i += 1) {
    const char = globPattern[i];
    const next = globPattern[i + 1];
    if (char === '*') {
      if (next === '*') {
        source += '.*';
        i += 1;
      } else {
        source += '[^/]*';
      }
    } else if (char === '?') {
      source += '[^/]';
    } else {
      source += escapeRegExp(char);
    }
  }
  source += '$';
  return new RegExp(source);
}

function escapeRegExp(value) {
  return value.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

main().catch((error) => {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
