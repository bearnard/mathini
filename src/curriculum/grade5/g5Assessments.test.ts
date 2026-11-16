import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildSeed, OUT } from '../../../scripts/gen-g5-assessment-seed';
import { makeQkey } from '../../lib/shared/qkey';
import { identifyAttempt } from '../../lib/server/questions/store';
import { markAttempt } from '../../lib/server/marking';
import { openQuestionsDb, adminDbOf } from '../../lib/server/questions/testQuestionsDb';

const read = (f: string) => fs.readFileSync(f, 'utf8');

test('the Grade 5 final assessments are registered as curated questions: the seed on disk is current, every answer is one of its options, no prompt repeats within a task', async () => {
  const { sql, questions } = await buildSeed();
  assert.equal(read(OUT), sql, 'run node --import tsx scripts/gen-g5-assessment-seed.ts');
  assert.ok(questions >= 60);
  const mods = [
    (await import('./term5/life-skills/LifeSkillsAssessment')).ASSESSMENT,
    (await import('./term5/history/FinalAssessment')).ASSESSMENT,
    (await import('./term5/geography/GeographyAssessment')).ASSESSMENT,
  ];
  assert.deepEqual(mods.map((m) => m.task), ['gr5-life-skills-final-t5', 'gr5-history-final-t5', 'gr5-geography-final-t5']);
  for (const m of mods) {
    const seen = new Set<string>();
    for (const q of m.questions) {
      assert.ok(q.options[q.correctAnswer] !== undefined && new Set(q.options).size === q.options.length, `${m.task} #${q.id}`);
      assert.ok(!seen.has(q.text), `${m.task}: a repeated prompt (${q.text})`);
      seen.add(q.text);
    }
  }
});

test('applied to the database, the server finds each assessment question from its prompt and marks the learner\'s tap itself (right, wrong, and never the browser\'s word)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(read(OUT));
  t.raw.exec(read(OUT)); // idempotent
  const db = adminDbOf(t);
  const n = Number((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n);
  assert.equal(n, (await buildSeed()).questions);
  const m = (await import('./term5/geography/GeographyAssessment')).ASSESSMENT;
  for (const q of m.questions.slice(0, 5)) {
    const qkey = makeQkey(m.task, q.text);
    const ident = await identifyAttempt(t.db, { task: m.task, qkey, itemId: null, clientVersionId: null, now: 1 });
    assert.ok(ident.versionId !== null, `the server finds "${q.text}" by its prompt`);
    const right = await markAttempt(db, { versionId: ident.versionId, chosen: q.options[q.correctAnswer], clientCorrect: false });
    assert.deepEqual([right.credited, right.isCorrect], [true, true]);
    const wrongOption = q.options.find((_, i) => i !== q.correctAnswer)!;
    const wrong = await markAttempt(db, { versionId: ident.versionId, chosen: wrongOption, clientCorrect: true });
    assert.deepEqual([wrong.credited, wrong.isCorrect], [true, false], 'the browser said right; the server says wrong');
  }
});

test('the three assessments send the prompt and the tapped option with every answer, so the server can mark them', () => {
  for (const [f, tapped] of [
    ['src/curriculum/grade5/term5/life-skills/LifeSkillsAssessment.tsx', 'questions[currentQuestion].options[selectedOption]'],
    ['src/curriculum/grade5/term5/history/FinalAssessment.tsx', 'questions[currentQuestion].options[selectedOption]'],
    ['src/curriculum/grade5/term5/geography/GeographyAssessment.tsx', 'questions[currentQuestion].options[selectedAnswer]'],
  ]) {
    const src = read(f);
    assert.ok(src.includes('questions[currentQuestion].text, ' + tapped), f);
  }
});
