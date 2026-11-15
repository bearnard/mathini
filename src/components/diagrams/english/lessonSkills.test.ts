import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  POEM, POEM_KEYS, classify, endMark, genreOfClue, letterFraming, lineRef, rhymeScheme, simpleFuture, strategyFor, wordCount, wordsOfClass,
} from './lessonSkills';
import { BrochureLayout, ClueCards, LetterLayout, PoemLines, WordChips } from './LessonPictures';
import { learnSteps as g7Revision } from '../../../curriculum/grade7/english/term4/revision-all-genres/RevisionAllGenresSlides';
import { learnSteps as brochures } from '../../../curriculum/grade8/english/term1/brochures-visual-literacy/BrochuresVisualLiteracySlides';
import { learnSteps as language } from '../../../curriculum/grade8/english/term1/language-structures-bias/LanguageStructuresBiasSlides';
import { learnSteps as poetry } from '../../../curriculum/grade8/english/term1/poetry-close-reading/PoetryCloseReadingSlides';
import { learnSteps as letters } from '../../../curriculum/grade8/english/term2/formal-correspondence-reviews/FormalCorrespondenceReviewsSlides';

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');
const html = (n: unknown) => renderToStaticMarkup(n as never);
const text = (h: string) => h.replace(/<[^>]+>/g, ' ').replace(/&quot;|&#x27;|&amp;/g, ' ').replace(/\s+/g, ' ');

test('reading strategies and genres', () => {
  assert.equal(strategyFor('gist'), 'skim');
  assert.equal(strategyFor('detail'), 'scan');
  assert.equal(strategyFor('implied'), 'infer');
  assert.equal(genreOfClue('speaker names'), 'drama');
  assert.equal(genreOfClue('stanzas'), 'poetry');
  assert.equal(genreOfClue('banana'), null);
  assert.equal(wordCount('The class garden grew spinach, and selling it paid for new seeds.'), 12);
});

test('letters: greeting and closing match', () => {
  assert.deepEqual(letterFraming(), { salutation: 'Dear Sir or Madam,', closing: 'Yours faithfully,' });
  assert.deepEqual(letterFraming('Dlamini'), { salutation: 'Dear Mr Dlamini,', closing: 'Yours sincerely,' });
  assert.equal(endMark('question'), '?');
  assert.equal(endMark('statement'), '.');
});

test('word classes in the lesson sentences', () => {
  const s = 'The confident speaker explained clearly.';
  assert.deepEqual(wordsOfClass(s, 'adverb'), ['clearly']);
  assert.deepEqual(wordsOfClass(s, 'adjective'), ['confident']);
  assert.deepEqual(wordsOfClass(s, 'noun'), ['speaker']);
  assert.deepEqual(wordsOfClass(s, 'verb'), ['explained']);
  assert.deepEqual(wordsOfClass('The learners read quietly', 'adverb'), ['quietly']);
  assert.equal(classify('They will present the report tomorrow.').length, 6);
  assert.equal(simpleFuture('present'), 'will present');
});

test('poem: shape, rhyme and line references', () => {
  assert.equal(POEM.length, 2);
  POEM.forEach((st, i) => assert.equal(st.length, POEM_KEYS[i].length));
  // every line really ends in the marked rhyme sound
  POEM.forEach((st, i) => st.forEach((line, j) => assert.ok(line.replace(/[.,;]$/, '').endsWith(POEM_KEYS[i][j]), line)));
  assert.equal(rhymeScheme(POEM_KEYS[0]), 'ABAB');
  assert.equal(lineRef(2, 2).quote, 'The puddles flash like coins');
  assert.equal(lineRef(1, 1).ref, 'stanza 1, line 1');
});

test('pictures render with an aria description', () => {
  const pics = [
    createElement(ClueCards, { cards: [{ title: 'A', clue: 'b', color: '#fff' }], aria: 'cards' }),
    createElement(WordChips, { sentence: 'The confident speaker explained clearly.', aria: 'chips' }),
    createElement(PoemLines, { stanzas: POEM, aria: 'poem' }),
    createElement(BrochureLayout, { aria: 'brochure' }),
    createElement(LetterLayout, { aria: 'letter' }),
  ];
  pics.forEach((p) => assert.match(html(p), /aria-label="/));
});

const LESSONS: [string, ReturnType<typeof Array.prototype.slice>, string[], string, string[]][] = [
  ['revision', g7Revision, ['Four genres, four ways of reading', 'Skim, scan and infer', 'Evidence and inference', 'Summaries and revision habits', 'Check yourself'],
    'grade7/english/term4/revision-all-genres/RevisionAllGenresSlides.tsx',
    ['novel', 'poetry', 'drama', 'media', 'skim', 'scan', 'infer', 'summary', 'evidence', 'practise varied question types', 'stage directions']],
  ['brochures', brochures, ['Purpose and audience', 'Layout: headings, visuals and white space', 'Skim, scan and infer', 'Match language and images to the audience', 'Check yourself'],
    'grade8/english/term1/brochures-visual-literacy/BrochuresVisualLiteracySlides.tsx',
    ['inform or persuade', 'headings', 'white space', 'gist', 'specific detail', 'practical language', 'inference', 'visuals']],
  ['language', language, ['Word classes in a sentence', 'Tense and end punctuation', 'Stereotypes, bias and prejudice', 'Loaded language and fair editing', 'Check yourself'],
    'grade8/english/term1/language-structures-bias/LanguageStructuresBiasSlides.tsx',
    ['noun', 'adverb', 'future tense', 'question mark', 'oversimplified', 'always lazy', 'distort meaning', 'evidence-based']],
  ['poetry', poetry, ['Stanzas, lines and rhyme', 'Imagery and repetition', 'Tone and tone shifts', 'Theme: the central idea', 'Support answers with the text', 'Check yourself'],
    'grade8/english/term1/poetry-close-reading/PoetryCloseReadingSlides.tsx',
    ['grouped section of lines', 'sensory', 'attitude or feeling', 'key emotional idea', 'quotes a line', 'tone change', 'central message', 'line references']],
  ['letters', letters, ['Choose the format for the audience', 'Parts of a formal letter', 'Register: choose the right style', 'Email subject lines', 'Writing a balanced review', 'Check yourself'],
    'grade8/english/term2/formal-correspondence-reviews/FormalCorrespondenceReviewsSlides.tsx',
    ['Dear Sir or Madam', 'formal letter', 'evaluates', 'at your earliest convenience', 'subject line', 'Yours faithfully', 'specific examples', 'audience']],
];

for (const [name, steps, titles, file, needs] of LESSONS) {
  test(`${name}: renders every slide, ends with Check yourself, covers the bank`, () => {
    assert.deepEqual(steps.map((s: { title: string }) => s.title), titles);
    assert.ok(steps.length >= 4 && steps.length <= 6);
    const rendered = steps.map((s: { content: unknown }) => html(s.content));
    rendered.forEach((h: string) => assert.ok(h.length > 200));
    assert.match(rendered[rendered.length - 1], /Check yourself/);
    rendered.slice(0, -1).forEach((h: string) => assert.match(h, /Worked example/));
    rendered.slice(0, -1).forEach((h: string) => assert.match(h, /Common mistake/));
    const all = text(rendered.join(' ')).toLowerCase();
    for (const n of needs) assert.ok(all.includes(n.toLowerCase()), `${name} lacks "${n}"`);
    assert.ok(read(file).includes('export const learnSteps'));
  });
}
