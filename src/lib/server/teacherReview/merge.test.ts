import { test } from 'node:test';
import assert from 'node:assert/strict';
import { AI_UNAVAILABLE_TEXT, ALL_AGREE_TEXT, buildMergePrompt, suggestMerge, type MergeInput, type MergeResponse, type QuestionContent } from './merge';

const original: QuestionContent = {
  prompt: 'Wat beteken "Kusasa" in isiXhosa?',
  options: ['Gister', 'Môre', 'Vandag', 'Nou'],
  answer: 'Gister',
  explanation: 'Kusasa is die woord vir die dag voor vandag.',
};
const fixed: QuestionContent = { ...original, answer: 'Môre', explanation: 'Kusasa beteken môre: die dag ná vandag.' };
const fixedOther: QuestionContent = { ...fixed, explanation: 'Kusasa is môre.' };

const resp = (r: Partial<MergeResponse> & { verdict: MergeResponse['verdict'] }): MergeResponse => ({ confidence: 'sure', reason: null, ...r });
const base = (responses: MergeResponse[]): MergeInput => ({ kind: 'question', original, responses, subject: 'isiXhosa', grade: 6 });

// A fake Gemini: records every prompt it is asked.
const fake = (reply: unknown | (() => never)) => {
  const calls: { prompt: string; schema: object }[] = [];
  return { calls, generateJson: async (prompt: string, schema: object) => { calls.push({ prompt, schema }); return typeof reply === 'function' ? (reply as () => never)() : reply; } };
};

const aiReply = { merged: fixed, rationale: 'Two reviewers say the key is Môre; B also fixed the explanation.', disagreements: ['Reviewer A keeps the old explanation, Reviewer B rewrites it.'] };

test('no change response: nothing to merge, null, and the AI is not called', async () => {
  const g = fake(aiReply);
  assert.equal(await suggestMerge(base([resp({ verdict: 'correct' }), resp({ verdict: 'unsure', reason: 'not sure' })]), g), null);
  assert.equal(await suggestMerge(base([]), g), null);
  assert.equal(g.calls.length, 0);
});

test('a "change" that equals the original, or has no usable proposal, is nothing to merge', async () => {
  const g = fake(aiReply);
  assert.equal(await suggestMerge(base([resp({ verdict: 'change', proposal: original }), resp({ verdict: 'change', proposal: null })]), g), null);
  assert.equal(g.calls.length, 0);
});

test('agreement: identical changes are returned as they are, rationale "all reviewers agree", no AI call', async () => {
  const g = fake(aiReply);
  const out = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'change', proposal: { ...fixed, prompt: `  ${fixed.prompt} ` } }), resp({ verdict: 'unsure' })]), g);
  assert.ok(out);
  assert.equal(out.source, 'agreement');
  assert.equal(out.rationale, ALL_AGREE_TEXT);
  assert.deepEqual(out.merged, fixed);
  assert.deepEqual(out.disagreements, []);
  assert.equal(g.calls.length, 0);
});

test('a proposal may leave out fields: they keep the original value', async () => {
  const g = fake(aiReply);
  const out = await suggestMerge(base([resp({ verdict: 'change', proposal: { answer: 'Môre' } })]), g);
  assert.deepEqual(out?.merged, { ...original, answer: 'Môre' });
  assert.equal(g.calls.length, 0);
});

test('disagreement: different changes go to Gemini; the result carries merged, rationale and disagreements', async () => {
  const g = fake(aiReply);
  const out = await suggestMerge(
    base([resp({ verdict: 'change', proposal: fixed, reason: 'Kusasa is tomorrow' }), resp({ verdict: 'change', proposal: fixedOther, confidence: 'fairly_sure' }), resp({ verdict: 'correct' })]),
    g,
  );
  assert.ok(out);
  assert.equal(out.source, 'ai');
  assert.deepEqual(out.merged, fixed);
  assert.equal(out.rationale, aiReply.rationale);
  assert.deepEqual(out.disagreements, aiReply.disagreements);
  assert.equal(g.calls.length, 1);
  const { prompt, schema } = g.calls[0];
  assert.match(prompt, /Reviewer A/);
  assert.match(prompt, /Reviewer C: verdict = correct/);
  assert.match(prompt, /Kusasa is tomorrow/);
  assert.match(prompt, /Subject: isiXhosa\. Grade: 6/);
  assert.deepEqual((schema as { required: string[] }).required, ['merged', 'rationale', 'disagreements']);
});

test('one reviewer says "correct" while others change it: that is a disagreement, so the AI is asked', async () => {
  const g = fake(aiReply);
  const out = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'correct' })]), g);
  assert.equal(out?.source, 'ai');
  assert.equal(g.calls.length, 1);
});

test('privacy: names and contact notes never reach the prompt, even as extra properties', async () => {
  const g = fake(aiReply);
  const dirty = [
    { ...resp({ verdict: 'change', proposal: fixed }), displayName: 'Ms Naidoo', reviewerName: 'Ms Naidoo', contact_note: '082 555 0100' },
    { ...resp({ verdict: 'change', proposal: fixedOther }), display_name: 'Mr Dlamini', email: 'dlamini@school.example' },
  ] as unknown as MergeResponse[];
  await suggestMerge(base(dirty), g);
  const sent = g.calls[0].prompt;
  for (const secret of ['Naidoo', 'Dlamini', '082 555', 'school.example']) assert.ok(!sent.includes(secret), `${secret} leaked`);
  assert.equal(buildMergePrompt(base(dirty), original).includes('Naidoo'), false);
});

test('malformed AI output falls back to "AI unavailable, decide manually" (never throws, nothing merged)', async () => {
  const bad: unknown[] = [
    null,
    'plain text',
    {},
    { merged: { prompt: 'x' }, rationale: 'r', disagreements: [] },
    { merged: { ...fixed, answer: 'Not an option' }, rationale: 'r', disagreements: [] },
    { merged: { ...fixed, options: ['only one'] }, rationale: 'r', disagreements: [] },
    { merged: fixed, rationale: '   ', disagreements: [] },
    { merged: fixed, rationale: 'r', disagreements: 'none' },
    { merged: fixed, rationale: 'r', disagreements: [1, 2] },
    { merged: { ...fixed, prompt: 'x'.repeat(5000) }, rationale: 'r', disagreements: [] },
  ];
  for (const reply of bad) {
    const out = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'change', proposal: fixedOther })]), fake(reply));
    assert.ok(out, JSON.stringify(reply));
    assert.equal(out.source, 'unavailable');
    assert.equal(out.merged, null);
    assert.equal(out.rationale, AI_UNAVAILABLE_TEXT);
    assert.deepEqual(out.disagreements, []);
    assert.deepEqual(out.findings, []);
  }
});

test('network error, bad status or a timeout: the fallback, with a short error', async () => {
  for (const msg of ['fetch failed', 'Gemini error: 503', 'The operation was aborted due to timeout']) {
    const out = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'change', proposal: fixedOther })]), fake(() => { throw new Error(msg); }));
    assert.equal(out?.source, 'unavailable');
    assert.equal(out?.rationale, AI_UNAVAILABLE_TEXT);
    assert.equal(out?.merged, null);
    assert.equal(out?.error, msg);
  }
});

test('questions: the merged proposal goes through checkQuestion and its findings are returned (agreement and AI paths)', async () => {
  const dirty = { ...fixed, prompt: `Wat beteken\tKusasa?` }; // a control character: the quality checker rejects it
  const agreed = await suggestMerge(base([resp({ verdict: 'change', proposal: dirty })]), fake(null));
  assert.ok(agreed?.findings.some((f) => f.code === 'latex_control_char' && f.severity === 'reject'));
  const viaAi = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed }), resp({ verdict: 'change', proposal: fixedOther })]), fake({ ...aiReply, merged: dirty }));
  assert.equal(viaAi?.source, 'ai');
  assert.ok(viaAi?.findings.some((f) => f.code === 'latex_control_char'));
  const clean = await suggestMerge(base([resp({ verdict: 'change', proposal: fixed })]), fake(null));
  assert.equal(clean?.findings.some((f) => f.severity === 'reject'), false);
});

test('lesson lines: text in, text out, no quality findings', async () => {
  const input: MergeInput = {
    kind: 'lesson_line', original: { text: 'Ek het gister geloop.' }, subject: 'Afrikaans', grade: 7,
    responses: [resp({ verdict: 'change', proposal: { text: 'Ek het gister gestap.' } }), resp({ verdict: 'change', proposal: { text: 'Ek het gister hardloop.' } })],
  };
  const g = fake({ merged: { text: 'Ek het gister gestap.' }, rationale: 'A is the usual verb.', disagreements: ['A says gestap, B says hardloop.'] });
  const out = await suggestMerge(input, g);
  assert.deepEqual(out?.merged, { text: 'Ek het gister gestap.' });
  assert.deepEqual(out?.findings, []);
  assert.equal(g.calls.length, 1);
  const same = await suggestMerge({ ...input, responses: [resp({ verdict: 'change', proposal: { text: 'Ek het gister gestap.' } }), resp({ verdict: 'change', proposal: 'Ek het gister gestap.' as unknown as { text: string } })] }, fake(null));
  assert.equal(same?.rationale, ALL_AGREE_TEXT);
});

test('a malformed original is a caller bug: it throws', async () => {
  await assert.rejects(suggestMerge({ ...base([]), original: { prompt: '' } as unknown as QuestionContent }), TypeError);
});
