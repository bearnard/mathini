import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { norm, parseTeacherCheck, quotedStrings, segments } from './teacherCheckParse';
import { checkPath } from './applyChanges';
import { SCOPE_FILE, d1Key, packOf, packSql, planPacks, reportMarkdown, resolveItems, type BankQuestion, type Item, type ResolveEnv } from './teacherCheckResolve';

const MD = [
  '# Items for a teacher to check',
  '',
  '## A. Grade 6 isiXhosa: answer-key audit (2)',
  '',
  '| # | File:line | Question | Current answer | The doubt |',
  '|---|---|---|---|---|',
  '| A1 | `grade6/isixhosa/term2/x-t2/X.tsx:10` | Which word means morning? | `Ekuseni` | Is it right? |',
  '| A2 | `grade6/isixhosa/term2/x-t2/X.tsx:20` | Lesson text: `Molo, titshala. Molweni, bantwana.` | (lesson text, no key) | Singular with plural. |',
  '',
  '## E. Grade 6 Natural Sciences: exam scope',
  '',
  '| Item | Current assumption | The doubt |',
  '|---|---|---|',
  '| Which NST terms the exam covers | Terms 3-4 (assumed) | Confirm with the school. |',
  '',
  '## H. Grade 6 Afrikaans lesson rewrites (batch 1)',
  '',
  'Branch `feat/lessons-afrikaans-1`. Paths under `src/curriculum/grade6/afrikaans/`.',
  '',
  '**`term3/toekomende-tyd/Toekomst.tsx`**',
  '- Rule claims: sal + plain verb for the future.',
  '- Sentences: Ek sal sokker speel; Ons sal aandete eet; Sy sal die boek lees; sal',
  '- Check "Ek sal tee maak." and "Ek sal nooit kom…".',
  '',
  '## W. Grade 6 Afrikaans examples replaced',
  '- term4/voorsetsels: "Die koppie staan op die rak." / "Die vis swem in die water."',
  '- G8 grammar: "Karla sê sy gaan môre oefen" has no file.',
  '',
  '## Lines by file',
  '',
  '### src/curriculum/grade7/isixhosa/term1/lang/LanguageStructuresT1.data.ts',
  '- Ndiyafunda. — I am reading.',
].join('\n');

test('norm folds curly quotes, case and spaces', () => {
  assert.equal(norm('  ’n  Diere‘boek '), "'n diere'boek");
  assert.equal(norm('“Hi”'), '"hi"');
});

test('quotedStrings keeps real text and skips paths, short strings and code bits', () => {
  assert.deepEqual(quotedStrings('see `grade6/a/b/C.tsx:4`, "Ek sal speel", `-ya-`, `term3/x/Y.tsx` and “Die hond slaap”'), ['Ek sal speel', 'Die hond slaap']);
});

test('segments splits on ; and " / ", drops labels, one-word bits and glosses', () => {
  assert.deepEqual(segments('Sentences: Ek sal sokker speel (I will play); Ons sal aandete eet; gelukkig / Sy lees die boek'), ['Ek sal sokker speel', 'Ons sal aandete eet', 'Sy lees die boek']);
});

test('parseTeacherCheck reads table rows, lesson-text rows, the scope row, file blocks, folder bullets and line bullets', () => {
  const raw = parseTeacherCheck(MD);
  const row = raw.find((r) => r.kind === 'row')!;
  assert.deepEqual([row.file, row.text, row.answer, row.doubt, row.mdLine], ['grade6/isixhosa/term2/x-t2/X.tsx', 'Which word means morning?', 'Ekuseni', 'Is it right?', 7]);
  assert.ok(raw.some((r) => r.kind === 'quoted' && r.text === 'Molo, titshala. Molweni, bantwana.' && r.section === 'A'));
  assert.equal(raw.find((r) => r.kind === 'scope')!.text, 'Which NST terms the exam covers: Terms 3-4 (assumed)');
  const h = raw.filter((r) => r.section === 'H');
  assert.ok(h.every((r) => r.file === 'grade6/afrikaans/term3/toekomende-tyd/Toekomst.tsx'));
  assert.ok(h.some((r) => r.kind === 'segment' && r.text === 'Ons sal aandete eet'));
  assert.ok(h.some((r) => r.kind === 'quoted' && r.text === 'Ek sal tee maak.'));
  assert.match(h[0].doubt, /Rule claims: sal \+ plain verb/);
  const w = raw.filter((r) => r.section === 'W');
  assert.ok(w.some((r) => r.file === 'grade6/afrikaans/term4/voorsetsels' && r.text === 'Die vis swem in die water.'), 'base comes from the section title');
  assert.ok(w.some((r) => r.file === null && /Karla/.test(r.text)), 'a bullet with no path keeps file null');
  const line = raw.find((r) => r.kind === 'line')!;
  assert.deepEqual([line.file, line.text], ['grade7/isixhosa/term1/lang/LanguageStructuresT1.data.ts', 'Ndiyafunda.']);
});

// ---- resolver ----
const SRC = {
  'grade6/isixhosa/term2/x-t2/X.tsx': 'title: "Greetings",\n<Xh>Molo, titshala. Molweni, bantwana.</Xh> more\nconst bank = [\n{ prompt: "Which word means morning?", answer: "Ekuseni" }];',
  'grade6/afrikaans/term3/toekomende-tyd/Toekomst.tsx': "title: 'Future',\n<Af>Ek sal sokker speel</Af> <Af>Ons sal aandete eet</Af>\n<Af>Ons sal aandete eet</Af>\n<Af>Sy sal die boek lees</Af>\nconst bank = [\n{ prompt: 'Ek sal tee maak.', answer: 'x' }];",
  'grade6/afrikaans/term4/voorsetsels/Voorsetsels.tsx': "title: 'Where',\n<Af>Die koppie staan op die rak.</Af>\n<Af>Die vis swem in die water.</Af>",
  'grade7/isixhosa/term1/lang/LanguageStructuresT1.data.ts': 'export const x = ["Ndiyafunda."];',
} as Record<string, string>;
const bq = (file: string, prompt: string, answer: string): BankQuestion => ({ file, prompt, answer, options: [answer, 'b', 'c', 'd'], explanation: null });
const banks: BankQuestion[] = [
  bq('grade6/isixhosa/term2/x-t2/X.tsx', 'Which word means morning?', 'Ekuseni'),
  bq('grade6/afrikaans/term3/toekomende-tyd/Toekomst.tsx', 'Ek sal tee maak.', 'x'),
];
const env = (extra: Partial<ResolveEnv> = {}): ResolveEnv => ({
  read: (f) => SRC[f] ?? null,
  listDir: (d) => Object.keys(SRC).filter((f) => f.startsWith(d + '/') && !f.slice(d.length + 1).includes('/')),
  findByBaseName: (b) => Object.keys(SRC).filter((f) => f.endsWith('/' + b)),
  banks,
  d1: new Map([[d1Key('Which word means morning?', 'Ekuseni'), [{ id: 'q1', versionId: 7 }]], [d1Key('Ek sal tee maak.', 'x'), [{ id: 'q2', versionId: 9 }, { id: 'q3', versionId: 10 }]]]),
  ...extra,
});

test('resolveItems: question to D1 id, unique lesson anchor with context, folder file, base-name file', () => {
  const res = resolveItems(parseTeacherCheck(MD), env());
  const q = res.items.find((i) => i.kind === 'question') as Extract<Item, { kind: 'question' }>;
  assert.deepEqual([q.questionId, q.versionId, q.pack], ['q1', 7, 'isixhosa-g6']);
  const line = res.items.find((i) => i.kind === 'lesson_line' && i.anchor === 'Molo, titshala. Molweni, bantwana.') as Extract<Item, { kind: 'lesson_line' }>;
  assert.equal(line.context.slide_title, 'Greetings');
  assert.ok(res.items.some((i) => i.kind === 'lesson_line' && i.anchor === 'Die vis swem in die water.' && i.file === 'grade6/afrikaans/term4/voorsetsels/Voorsetsels.tsx'));
  assert.ok(res.items.some((i) => i.kind === 'lesson_line' && i.anchor === 'Ndiyafunda.' && i.pack === 'isixhosa-g7'));
  assert.ok(res.items.some((i) => i.kind === 'scope' && i.pack === 'nst-exam-scope'));
});

test('resolveItems: repeated text, bank-only text, ellipsis, no file and ambiguous D1 ids are reported, not guessed', () => {
  const res = resolveItems(parseTeacherCheck(MD), env());
  const why = (t: string) => res.unresolved.filter((u) => u.text.includes(t)).map((u) => u.reason).join(' | ');
  assert.match(why('Ons sal aandete eet'), /occurs 2 times/);
  assert.match(why('Ek sal nooit kom'), /ellipsis/);
  assert.match(why('Karla'), /names no file/);
  assert.match(why('Ek sal tee maak'), /matches 2 D1 ids \(same prompt and key; ids q2, q3\)/);
  assert.match(reportMarkdown(res, []), /Duplicate questions in D1[^]*ids q2, q3/); // a bank prompt quoted in the note, but D1 holds it twice
  assert.ok(!res.items.some((i) => i.kind === 'lesson_line' && i.anchor === 'Ons sal aandete eet'));
  const withRepeated = resolveItems(parseTeacherCheck(MD), env(), { allowRepeated: true });
  const rep = withRepeated.items.find((i) => i.kind === 'lesson_line' && i.anchor === 'Ons sal aandete eet') as Extract<Item, { kind: 'lesson_line' }>;
  assert.deepEqual([rep.context.repeated, rep.context.occurrences], [true, 2]);
});

test('resolveItems: text that is only in the question bank is not a lesson anchor', () => {
  const raw = [{ kind: 'quoted' as const, section: 'X', mdLine: 1, file: 'grade6/isixhosa/term2/x-t2/X.tsx', text: 'Ekuseni', doubt: 'd' }];
  const res = resolveItems(raw, env({ banks: [] }));
  assert.match(res.unresolved[0].reason, /only in the question bank/);
});

test('resolveItems: bankrange makes items 7+ of each G9 bank and adds the "look at first" hint', () => {
  const g9 = (n: number) => bq('grade9/afrikaans/term1/t/T.tsx', `Vraag ${n}?`, `Antwoord ${n}`);
  const bank9 = Array.from({ length: 8 }, (_, i) => g9(i + 1));
  const d1 = new Map(bank9.map((b, i) => [d1Key(b.prompt, b.answer), [{ id: `g${i + 1}`, versionId: i + 1 }]]));
  const res = resolveItems([{ kind: 'bankrange', section: 'T', mdLine: 1, file: 'grade9/afrikaans', text: '', doubt: 'New.', hints: ['Antwoord 8'] }], env({ banks: bank9, d1 }));
  assert.deepEqual(res.items.map((i) => (i as { questionId: string }).questionId), ['g7', 'g8']);
  assert.ok(res.items.every((i) => i.pack === 'afrikaans-g9-new-questions'));
  assert.match(res.items[1].doubt, /Look at: Antwoord 8/);
  assert.doesNotMatch(res.items[0].doubt, /Look at/);
});

test('packOf names the pack from the file path', () => {
  assert.equal(packOf('grade7/isixhosa/term1/a/B.tsx'), 'isixhosa-g7');
  assert.equal(packOf('grade9/afrikaans/term1/a/B.tsx'), 'afrikaans-g9');
  assert.equal(packOf(null), 'nst-exam-scope');
  assert.equal(packOf('grade6/maths/a/B.tsx'), 'other');
});

const lessonItem = (i: number, pack = 'afrikaans-g6'): Item => ({ kind: 'lesson_line', pack, file: 'grade6/afrikaans/a/A.tsx', anchor: `Sin ${i}'s`, context: { slide_title: 'T' }, doubt: "it's", sources: [i], sections: ['H'] });

test('planPacks chunks by size and merges a tail of fewer than 10 into the previous pack', () => {
  const items = Array.from({ length: 45 }, (_, i) => lessonItem(i));
  const packs = planPacks(items, 20);
  assert.deepEqual(packs.map((p) => p.items.length), [20, 25]);
  assert.deepEqual(packs.map((p) => p.title), ['Afrikaans Grade 6 (1/2)', 'Afrikaans Grade 6 (2/2)']);
  assert.equal(planPacks([lessonItem(1, 'isixhosa-g7')], 20)[0].title, 'isiXhosa Grade 7');
});

test('packSql runs against the real migration 0012, escapes quotes, and running it twice adds nothing', () => {
  const db = new DatabaseSync(':memory:');
  db.exec(fs.readFileSync('migrations/0012_review.sql', 'utf8'));
  const pack = planPacks([lessonItem(1), lessonItem(2), { kind: 'question', pack: 'afrikaans-g6', file: 'grade6/afrikaans/a/A.tsx', questionId: 'q1', versionId: 3, prompt: "Wat's dit?", doubt: 'd', sources: [3], sections: ['D'] }, { kind: 'scope', pack: 'afrikaans-g6', text: 'scope', doubt: 'd', sources: [4], sections: ['E'] }], 40)[0];
  const sql = packSql(pack, 1000);
  db.exec(sql);
  db.exec(sql);
  const packRow = db.prepare('SELECT title, created_by, created_at, status FROM review_packs').all() as Record<string, unknown>[];
  assert.deepEqual(packRow.map((r) => ({ ...r })), [{ title: 'Afrikaans Grade 6', created_by: 'import-teacher-check', created_at: 1000, status: 'draft' }]);
  const items = db.prepare('SELECT kind, question_id, version_id, file, anchor_text, doubt, sort FROM review_pack_items ORDER BY sort').all() as Record<string, unknown>[];
  assert.equal(items.length, 4);
  const by = (k: string) => items.find((x) => x.kind === k)!;
  assert.deepEqual([items.find((x) => x.anchor_text === "Sin 1's")!.doubt, items.map((x) => x.sort)], ["it's", [1, 2, 3, 4]]);
  assert.deepEqual([by('question').question_id, by('question').version_id], ['q1', 3]);
  assert.equal(items.find((x) => x.anchor_text === 'scope')!.file, SCOPE_FILE, 'the scope item needs a file value: the table requires one for a lesson_line');
  assert.equal(checkPath(SCOPE_FILE) === null, false, 'apply-review-changes must never treat the scope item as a file');
  assert.match(sql, /DRY RUN/);
});

test('reportMarkdown lists the counts and every unresolved item with its reason', () => {
  const md = reportMarkdown({ items: [lessonItem(1)], unresolved: [{ mdLine: 5, section: 'H', kind: 'quoted', file: 'a/B.tsx', text: 'x | y', reason: 'text not found in the file' }] }, planPacks([lessonItem(1)]));
  assert.match(md, /1 items resolved \(0 questions, 1 lesson lines, 0 scope\), in 1 packs. 1 unresolved/);
  assert.match(md, /\| 5 \| H \| quoted \| `a\/B.tsx` \| x \\\| y \| text not found in the file \|/);
});
