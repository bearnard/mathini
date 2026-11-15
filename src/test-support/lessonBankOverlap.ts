// Shared by src/lessonBankOverlap.test.ts and scripts/lesson-bank-overlap-baseline.ts: finds practice-question prompts that a lesson repeats.
import fs from 'node:fs';
import path from 'node:path';
import { extractCuratedBanks } from './curatedBanks';

export const THRESHOLD = 0.8;
export const MIN_TOKENS = 6;
const root = path.join(process.cwd(), 'src', 'curriculum');

export const tokens = (s: string): string[] =>
  s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);

/** Length of the longest common subsequence of two token lists (order matters, gaps allowed). */
const lcs = (a: string[], b: string[]): number => {
  const prev = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    let diag = 0;
    for (let j = 1; j <= b.length; j++) {
      const up = prev[j];
      prev[j] = a[i - 1] === b[j - 1] ? diag + 1 : Math.max(prev[j], prev[j - 1]);
      diag = up;
    }
  }
  return prev[b.length];
};

/**
 * The best match of a prompt in the lesson: the share of the prompt's tokens that appear IN ORDER in one sentence of the lesson (or in two
 * neighbouring sentences). 1 is the prompt word for word. Order matters, so a lesson that merely uses the same common words scores low.
 */
export const bestOverlap = (promptTokens: string[], lessonSentences: string[]): number => {
  let best = 0;
  const toks = lessonSentences.map(tokens);
  for (let i = 0; i < toks.length; i++) {
    for (const cand of [toks[i], i + 1 < toks.length ? [...toks[i], ...toks[i + 1]] : null]) {
      if (!cand) continue;
      best = Math.max(best, lcs(promptTokens, cand) / promptTokens.length);
      if (best === 1) return 1;
    }
  }
  return best;
};


/** The lesson text of a topic folder as sentences: every non-test .ts/.tsx file up to its question bank, tags removed, split at sentence ends and line breaks. */
export const folderSentences = (dir: string): string[] => {
  let t = '';
  for (const f of fs.readdirSync(dir)) {
    if (!/\.tsx?$/.test(f) || /\.test\./.test(f)) continue;
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const i = src.search(/^(export )?const (bank|items)\b/m);
    t += '\n' + (i === -1 ? src : src.slice(0, i));
  }
  return t
    .replace(/^import .*$/gm, ' ')
    .replace(/<[^>]*>/g, '\n')
    .split(/(?<=[.!?])\s+|\n+/)
    .map((x) => x.trim())
    .filter((x) => x.length > 12);
};

export interface Overlap { file: string; overlap: number; prompt: string }

/** Every Grade 6-9 bank prompt (6+ words) that a lesson in the same topic folder repeats at 80% token overlap or more. */
export const findOverlaps = (): Overlap[] => {
  const cache = new Map<string, string[]>();
  const out: Overlap[] = [];
  for (const q of extractCuratedBanks()) {
    if (q.grade < 6 || q.grade > 9) continue;
    const pt = tokens(q.prompt);
    if (pt.length < MIN_TOKENS) continue;
    const dir = path.join(root, path.dirname(q.file));
    if (!cache.has(dir)) cache.set(dir, folderSentences(dir));
    const o = bestOverlap(pt, cache.get(dir)!);
    if (o >= THRESHOLD) out.push({ file: q.file, overlap: Math.round(o * 100), prompt: q.prompt });
  }
  return out;
};

export const overlapKey = (o: Overlap): string => `${o.file}::${o.prompt}`;
