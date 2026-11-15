import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Regression guard: the four Grade 6 topic shells must record signed-in learners' answers, with the subject
// codes the leaderboard filter understands, and the mock tests must stay unrecorded.

const root = path.join(process.cwd(), 'src');
const read = (rel: string) => fs.readFileSync(path.join(root, rel), 'utf8');
const SHELLS = [
  // NST generalised handleSelect into handleResult(correct) so order and label items record the same way as mcq.
  { file: 'curriculum/grade6/natural-sciences/_shared/NstTopic.tsx', subject: 'nst', handler: /const handleResult = /, call: /recordAttempt\(correct, current\.section, current\.id, current\.prompt(?:, chosen)?\)/ },
  // History and Geography share the same handleResult (order and label items too).
  { file: 'curriculum/grade6/geography/_shared/GeoTopic.tsx', subject: 'geo', handler: /const handleResult = /, call: /recordAttempt\(correct, current\.section, current\.id, current\.prompt(?:, chosen)?\)/ },
  { file: 'curriculum/grade6/history/_shared/HisTopic.tsx', subject: 'his', handler: /const handleResult = /, call: /recordAttempt\(correct, current\.section, current\.id, current\.prompt(?:, chosen)?\)/ },
  { file: 'curriculum/grade6/afrikaans/_shared/AfrikaansTopic.tsx', subject: 'afr' },
];
const block = (src: string, start: RegExp): string => {
  const m = start.exec(src);
  assert.ok(m, `cannot find ${start}`);
  const from = m!.index;
  const end = src.indexOf('\n  };', from);
  return src.slice(from, end);
};

for (const { file, subject, handler, call } of SHELLS as { file: string; subject: string; handler?: RegExp; call?: RegExp }[]) {
  test(`${path.basename(file)} records answers with subject "${subject}" and the prompt`, () => {
    const src = read(file);
    assert.ok(src.includes(`useAttemptRecorder(task, '${subject}', { grade: 6, total, done, label: title })`), 'uses the recorder with its own subject code and its task, and follows the session as a run (ADR 0005)');
    assert.match(
      block(src, handler ?? /const handleSelect = /),
      call ?? /recordAttempt\(option === current\.answer, current\.section, current\.id, current\.prompt(?:, option)?\)/,
    );
    assert.match(block(src, /const handleReset = /), /resetStreak\(\)/);
    assert.match(src, /<BadgeUnlockModal badges=\{pendingBadges\} onDismiss=\{clearBadges\} \/>/);
    // recorded exactly once per answer: only the answer handler calls it
    assert.equal((src.match(/recordAttempt\(/g) ?? []).length, 1);
  });
  test(`${path.basename(file)}: the recorder subject matches the practice-tracking subject`, () => {
    const src = read(file);
    assert.ok(src.includes(`subject: '${subject}'`));
  });
}

test('the subject codes are exactly the ones the leaderboard Subject filter offers (so subject leaderboards work)', () => {
  const lb = read('components/leaderboard/LeaderboardView.tsx');
  const offered = [...lb.matchAll(/<option value="([a-z]+)">/g)].map((m) => m[1]);
  for (const { subject } of SHELLS) assert.ok(offered.includes(subject), `${subject} is not in the leaderboard filter`);
});

test('the four shells use four different subject codes (no merging of subjects)', () => {
  assert.equal(new Set(SHELLS.map((s) => s.subject)).size, 4);
});

test('MOCK TESTS record only as runs (ADR 0005): no recorder hook, no qkey (so they never feed the spaced-review schedule), no direct /api/attempts call', () => {
  const files = [
    'curriculum/grade6/natural-sciences/_shared/NstMockTest.tsx',
    'curriculum/grade6/natural-sciences/_shared/mockTest.ts',
    'curriculum/grade6/natural-sciences/_shared/mockTestEvents.ts',
    'curriculum/grade6/natural-sciences/term3/mock-test/Term3MockTest.tsx',
    'curriculum/grade6/natural-sciences/term4/mock-test/Term4MockTest.tsx',
    'curriculum/grade6/natural-sciences/exam/Terms34ExamPractice.tsx',
  ];
  for (const f of files) {
    const src = read(f);
    assert.ok(!/useAttemptRecorder|attemptRecorder|\/api\/attempts|recordAttempt|qkey|makeQkey/.test(src), `${f} must not use the recorder or send a qkey`);
  }
  const mock = read('curriculum/grade6/natural-sciences/_shared/NstMockTest.tsx');
  assert.match(mock, /tracker\.begin\(\{ kind: run\.kind/, 'a signed-in learner\'s first-attempt answers are tracked as a run');
  assert.match(mock, /if \(run\) void tracker\.finish\(\)/, 'the results screen finishes the run');
  for (const [f, kind] of [['term3/mock-test/Term3MockTest.tsx', 'mock_test'], ['term4/mock-test/Term4MockTest.tsx', 'mock_test'], ['exam/Terms34ExamPractice.tsx', 'exam_practice']]) {
    assert.ok(read(`curriculum/grade6/natural-sciences/${f}`).includes(`kind: '${kind}'`), `${f} is a ${kind} run`);
  }
});

test('the shared recorder still has the API Grade 5 relies on', () => {
  const src = read('lib/client/useAttemptRecorder.ts');
  for (const name of ['recordAttempt', 'pendingBadges', 'clearBadges', 'resetStreak']) assert.ok(src.includes(name), name);
});
