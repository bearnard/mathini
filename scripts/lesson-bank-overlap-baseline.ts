// Records the Grade 6-9 bank prompts that a lesson still repeats (80% token overlap) into src/test-support/lessonBankOverlapBaseline.json.
// Run after rewriting lesson text so the ratchet only ever goes DOWN:   node --import tsx scripts/lesson-bank-overlap-baseline.ts
import fs from 'node:fs';
import { findOverlaps, overlapKey } from '../src/test-support/lessonBankOverlap';

const keys = findOverlaps().map(overlapKey).sort();
fs.writeFileSync('src/test-support/lessonBankOverlapBaseline.json', JSON.stringify({ repeated: keys }, null, 1) + '\n');
console.log(`${keys.length} repeated prompts recorded`);
