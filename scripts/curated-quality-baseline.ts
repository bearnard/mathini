// Records today's reject-level counts for the curated banks into src/test-support/curatedBaseline.json.
// Run after you FIX curated questions, to ratchet the baseline DOWN (the test fails if a count goes up):
//   node --import tsx scripts/curated-quality-baseline.ts
import fs from 'node:fs';
import { countRejects } from '../src/test-support/curatedQuality';

const { counts, checked } = countRejects();
const sorted = Object.fromEntries(Object.entries(counts).sort().map(([k, v]) => [k, Object.fromEntries(Object.entries(v).sort())]));
fs.writeFileSync('src/test-support/curatedBaseline.json', JSON.stringify({ checked, counts: sorted }, null, 2) + '\n');
console.log(`checked ${checked} curated MCQs`, JSON.stringify(sorted));
