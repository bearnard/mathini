import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CRISIS_STEPS, DB_CONNECTION_STEPS, HR_SELECTION_STEPS, PROBLEM_SOLVING_STEPS, SELECTION_STEPS, START_UP_STEPS, numberSteps, stepText } from './steps';

const here = path.dirname(fileURLToPath(import.meta.url));
const lessonDir = path.join(here, '../../../curriculum/grade11/business-studies');
const read = (p: string) => fs.readFileSync(path.join(lessonDir, p), 'utf8');

test('numbering is always 1..n, ascending, with no repeats or gaps, and one first and one last', () => {
  for (const steps of [START_UP_STEPS, SELECTION_STEPS, PROBLEM_SOLVING_STEPS, CRISIS_STEPS]) {
    const n = numberSteps(steps);
    assert.deepEqual(n.map((s) => s.n), Array.from({ length: steps.length }, (_, i) => i + 1));
    assert.equal(n.filter((s) => s.first).length, 1);
    assert.equal(n.filter((s) => s.last).length, 1);
    assert.equal(n[0].first, true);
    assert.equal(n[n.length - 1].last, true);
  }
  assert.deepEqual(numberSteps([]).map((s) => s.n), []);
});

test('the sequences keep the lessons\' own steps and order (a guard against dropped or reordered steps)', () => {
  assert.equal(START_UP_STEPS.length, 7);
  assert.deepEqual(START_UP_STEPS.map((s) => s.text), ['Identify a viable opportunity', 'Write a business plan', 'Choose a form of ownership', 'Register the business', 'Secure funding', 'Set up operations', 'Launch and market']);
  assert.equal(SELECTION_STEPS.length, 6);
  assert.equal(SELECTION_STEPS[0].text, 'Receive and sort applications');
  assert.equal(SELECTION_STEPS[5].text, 'Appoint the most suitable candidate');
  assert.equal(PROBLEM_SOLVING_STEPS.length, 7);
  assert.equal(stepText(PROBLEM_SOLVING_STEPS[0]), 'Identify and define the problem clearly');
  assert.equal(stepText(PROBLEM_SOLVING_STEPS[6]), 'Evaluate whether the solution worked');
  assert.equal(CRISIS_STEPS.length, 5);
  assert.equal(stepText(CRISIS_STEPS[0]), 'Identify the crisis and assess the scale of the damage');
  assert.equal(stepText(CRISIS_STEPS[4]), 'Review and learn — update the crisis plan based on lessons learnt');
});

test('every step reads as a plain sentence for screen readers', () => {
  assert.equal(stepText({ text: 'Secure funding' }), 'Secure funding');
  assert.equal(stepText({ lead: 'Select', text: ' the best solution' }), 'Select the best solution');
  assert.equal(stepText({ lead: 'Contain', text: ' the damage and restore operations' }), 'Contain the damage and restore operations');
});

test('each lesson uses its sequence, so the picture is what the learner sees', () => {
  assert.ok(read('term3/starting-implementing-venture/StartingImplementingVenture.tsx').includes('START_UP_STEPS'));
  assert.ok(read('term4/recruitment-selection-contracts/RecruitmentSelectionContracts.tsx').includes('SELECTION_STEPS'));
  assert.ok(read('term2/creative-thinking-problem-solving/CreativeThinkingProblemSolving.tsx').includes('PROBLEM_SOLVING_STEPS'));
  assert.ok(read('term2/change-crisis-management/ChangeCrisisManagement.tsx').includes('CRISIS_STEPS'));
});

const curriculum = path.join(here, '../../../curriculum');
const readCurriculum = (p: string) => fs.readFileSync(path.join(curriculum, p), 'utf8');

test('the G12 selection steps are the four the lesson gave, word for word, and the lesson uses them', () => {
  assert.deepEqual(HR_SELECTION_STEPS.map((s) => s.text), [
    'Screen applications against the job specification.',
    'Shortlist the strongest candidates.',
    'Interview, test and check references fairly.',
    'Make the appointment using objective evidence.',
  ]);
  const lesson = readCurriculum('grade12/business-studies/term1/human-resources-processes/HumanResourcesProcesses.tsx');
  assert.ok(lesson.includes('HR_SELECTION_STEPS'));
  assert.ok(!lesson.includes('<li>Screen applications'), 'the old plain list is gone');
});

test('the G11 database steps keep the lesson\'s order, and the arrow sentence is gone', () => {
  assert.deepEqual(DB_CONNECTION_STEPS.map((s) => s.text.toLowerCase()), ['connect', 'query', 'process results', 'close connection']);
  const lesson = readCurriculum('grade11/information-technology/term2/sql-integration/SqlIntegration.tsx');
  assert.ok(lesson.includes('DB_CONNECTION_STEPS'));
  assert.ok(!lesson.includes('connect → query'));
});
