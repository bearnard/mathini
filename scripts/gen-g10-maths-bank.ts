/**
 * Writes the Grade 10 Mathematics question banks into the topic files from their specs (src/curriculum/grade10/mathematics/_shared/specs*.ts).
 *   node --import tsx scripts/gen-g10-maths-bank.ts          # rewrite the `const bank` literal in every topic file
 *   node --import tsx scripts/gen-g10-maths-bank.ts --check  # exit 1 when a file is out of date
 * The bank sits between the markers  // BANK:START  and  // BANK:END  in each topic file.
 */
import fs from 'node:fs';
import path from 'node:path';
import { compose } from '../src/curriculum/grade10/mathematics/_shared/bank';
import { ALL_SPECS } from '../src/curriculum/grade10/mathematics/_shared/specs';

const root = path.resolve(import.meta.dirname, '..');
const START = '// BANK:START';
const END = '// BANK:END';

export const renderBank = (items: ReturnType<typeof compose>): string =>
  `${START}\nconst bank: MathematicsItem[] = [\n${items
    .map((it) => `  {\n    prompt: ${JSON.stringify(it.prompt)},\n    options: [${it.options.map((o) => JSON.stringify(o)).join(', ')}],\n    answer: ${JSON.stringify(it.answer)},\n    explanation: ${JSON.stringify(it.explanation)},\n  },`)
    .join('\n')}\n];\n${END}`;

export function renderFile(file: string, items: ReturnType<typeof compose>): { path: string; before: string; after: string } {
  const p = path.join(root, file);
  const before = fs.readFileSync(p, 'utf8');
  const a = before.indexOf(START);
  const b = before.indexOf(END);
  if (a < 0 || b < 0) throw new Error(`${file}: no BANK markers`);
  return { path: p, before, after: before.slice(0, a) + renderBank(items) + before.slice(b + END.length) };
}

if (process.argv[1] && import.meta.filename === path.resolve(process.argv[1])) {
  const check = process.argv.includes('--check');
  let stale = 0;
  for (const s of ALL_SPECS) {
    if (!fs.existsSync(path.join(root, s.file))) continue;
    const r = renderFile(s.file, compose(s.questions));
    if (r.before !== r.after) {
      stale++;
      if (!check) fs.writeFileSync(r.path, r.after);
    }
  }
  console.log(check ? `${stale} file(s) out of date` : `rewrote ${stale} file(s)`);
  if (check && stale) process.exit(1);
}
