import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Regression guard: the four Grade 6 topic shells must record signed-in learners' answers, with the subject
// codes the leaderboard filter understands, and the mock tests must stay unrecorded.

const root = path.join(process.cwd(), 'src');
const read = (rel: string) => fs.readFileSync(path.join(root, rel), 'utf8');
const SHELLS = [
  { file: 'curriculum/grade6/natural-sciences/_shared/NstTopic.tsx', subject: 'nst', prompt: false },
  { file: 'curriculum/grade6/geography/_shared/GeoTopic.tsx', subject: 'geo', prompt: true },
  { file: 'curriculum/grade6/history/_shared/HisTopic.tsx', subject: 'his', prompt: true },
  { file: 'curriculum/grade6/afrikaans/_shared/AfrikaansTopic.tsx', subject: 'afr', prompt: true },
];
const block = (src: string, start: RegExp): string => {
  const m = start.exec(src);
  assert.ok(m, `cannot find ${start}`);
  const from = m!.index;
  const end = src.indexOf('\n  };', from);
  return src.slice(from, end);
};

// `prompt: false` for NstTopic only until mathini-graeme adds the 4th arg in their NstTopic rewrite; then flip it to true.
for (const { file, subject, prompt } of SHELLS) {
  test(`${path.basename(file)} records answers with subject "${subject}"`, () => {
    const src = read(file);
    assert.ok(src.includes(`useAttemptRecorder(task, '${subject}')`), 'uses the recorder with its own subject code and its task');
    assert.match(block(src, /const handleSelect = /), prompt
      ? /recordAttempt\(option === current\.answer, current\.section, current\.id, current\.prompt\)/
      : /recordAttempt\(option === current\.answer, current\.section, current\.id(, current\.prompt)?\)/);
    assert.match(block(src, /const handleReset = /), /resetStreak\(\)/);
    assert.match(src, /<BadgeUnlockModal badges=\{pendingBadges\} onDismiss=\{clearBadges\} \/>/);
    // recorded exactly once per answer: only handleSelect calls it
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

test('MOCK TESTS stay unrecorded: nothing in them imports the recorder or calls /api/attempts', () => {
  const files = [
    'curriculum/grade6/natural-sciences/_shared/NstMockTest.tsx',
    'curriculum/grade6/natural-sciences/_shared/mockTest.ts',
    'curriculum/grade6/natural-sciences/_shared/mockTestEvents.ts',
    'curriculum/grade6/natural-sciences/term3/mock-test/Term3MockTest.tsx',
    'curriculum/grade6/natural-sciences/term4/mock-test/Term4MockTest.tsx',
  ];
  for (const f of files) {
    const src = read(f);
    assert.ok(!/useAttemptRecorder|attemptRecorder|\/api\/attempts|recordAttempt/.test(src), `${f} must not record attempts`);
  }
});

test('the shared recorder still has the API Grade 5 relies on', () => {
  const src = read('lib/client/useAttemptRecorder.ts');
  for (const name of ['recordAttempt', 'pendingBadges', 'clearBadges', 'resetStreak']) assert.ok(src.includes(name), name);
});
