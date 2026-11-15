// Which Grade 10-12 bank answers can NOT be answered from their lesson? Borrowed from the bearn lessons' `uncoveredAnswers`
// (src/components/diagrams/science/scienceHelpers.ts): the content words (4+ letters) of each correct answer must appear in the
// lesson text. The lesson text is every non-test .tsx file in the topic folder, up to the question bank.
//   node --import tsx scripts/g10-12-coverage.ts [out.md]
import fs from 'node:fs';
import path from 'node:path';
import { extractCuratedBanks } from '../src/test-support/curatedBanks';
import { answerWords } from '../src/components/diagrams/science/scienceHelpers';

const root = path.join(process.cwd(), 'src', 'curriculum');
const lessonText = (dir: string): string => {
  let t = '';
  for (const f of fs.readdirSync(dir)) {
    if (!/\.tsx?$/.test(f) || /\.test\./.test(f)) continue;
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const i = src.search(/^(export )?const (bank|items)\b/m);
    t += '\n' + (i === -1 ? src : src.slice(0, i));
  }
  return t.toLowerCase();
};

export interface Gap { file: string; subject: string; grade: number; prompt: string; answer: string; missing: string[]; strong: string[] }

// Words that say nothing about whether a concept was taught.
const STOP = new Set(`that this these those with from they them their there then than when what which while where whether would could should have been being were does done into only also more most much many some such very each other both over under between because about after before again against through during without within upon onto your yours will just like make made keep kept used uses using give gives given take takes taken help helps allow allows cause causes lead leads show shows shown main best good well high lower less least still same another every often usually always never any all one two three four first second third last next own can may might must need needs not are was for the and its itself self who whom whose how why use`.split(' '));
// A short stem, so that "qualified" in the lesson covers "qualifications" in the answer.
const stem = (w: string): string => (w.length >= 7 ? w.slice(0, 6) : w.length >= 6 ? w.slice(0, 5) : w.length >= 5 ? w.slice(0, 4) : w);

export const findGaps = (): { gaps: Gap[]; checked: number } => {
  const cache = new Map<string, string>();
  const gaps: Gap[] = [];
  let checked = 0;
  for (const q of extractCuratedBanks()) {
    if (q.grade < 10 || q.grade > 12) continue;
    const dir = path.join(root, path.dirname(q.file));
    if (!cache.has(dir)) cache.set(dir, lessonText(dir));
    const text = cache.get(dir)!;
    if (!text.includes('learnsteps')) continue; // topic has no lesson slides
    checked++;
    const words = answerWords(q.answer).filter((w) => !/^[0-9-]+$/.test(w));
    const missing = words.filter((w) => !text.includes(w));
    const inPrompt = new Set(q.prompt.toLowerCase().match(/[a-z]{4,}/g) ?? []);
    const strong = missing.filter((w) => !STOP.has(w) && !inPrompt.has(w) && !text.includes(stem(w)));
    if (missing.length) gaps.push({ file: q.file, subject: q.subject, grade: q.grade, prompt: q.prompt, answer: q.answer, missing, strong });
  }
  return { gaps, checked };
};

if (process.argv[1]?.endsWith('g10-12-coverage.ts')) {
  const { gaps, checked } = findGaps();
  const by: Record<string, number> = {};
  for (const g of gaps) by[g.subject] = (by[g.subject] ?? 0) + 1;
  const n = (k: number) => gaps.filter((g) => g.strong.length >= k).length;
  console.log(`checked ${checked} bank answers, ${gaps.length} not covered (exact words), ${n(1)} with a key word missing even as a stem, ${n(2)} with 2+, ${n(3)} with 3+`, JSON.stringify(by));
  if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(gaps, null, 1));
}
