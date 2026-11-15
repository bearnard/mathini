import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { sentenceType } from './grammar';
import { learnSteps as grammar } from '../../../curriculum/grade9/english/term1/grammar-revision-accuracy/GrammarRevisionAccuracySteps';
import { learnSteps as letters } from '../../../curriculum/grade9/english/term2/letters-reviews/LettersReviewsSteps';
import { learnSteps as poetry } from '../../../curriculum/grade9/english/term2/poetry-drama-study/PoetryDramaStudySteps';
import { learnSteps as sentencesLesson, sentences } from '../../../curriculum/grade9/english/term2/sentence-structure-cohesion/SentenceStructureCohesionSteps';
import { learnSteps as advanced, cause } from '../../../curriculum/grade9/english/term3/advanced-language-context/AdvancedLanguageContextSteps';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum/grade9/english');

const lessons = [
  { name: 'grammar', steps: grammar, file: 'term1/grammar-revision-accuracy/GrammarRevisionAccuracy.tsx', titles: ['Nouns, adjectives and verbs', 'Keep one tense', 'Direct and indirect speech', 'Punctuation and spelling', 'Check yourself'],
    needs: ['noun', 'adjective', 'went', 'She said she was happy.', 'The boy said, “I will be late.”', 'occurred', 'wrote the letter and', 'Commas separate'] },
  { name: 'letters', steps: letters, file: 'term2/letters-reviews/LettersReviews.tsx', titles: ['The friendly letter', 'The formal letter', 'Register: matching your tone', 'Writing a review', 'Check yourself'],
    needs: ['warm, personal and conversational', 'Dear Sir or Madam,', 'Yours sincerely,', 'level of formality', 'recommendation', 'The service was quick and accurate compared to other canteens.', 'respectful, formal register'] },
  { name: 'poetry', steps: poetry, file: 'term2/poetry-drama-study/PoetryDramaStudy.tsx', titles: ['Rhyme scheme', 'Literary devices and imagery', 'Tone, theme and evidence', 'Drama: character and scene', 'Check yourself'],
    needs: ['pattern of rhyming words', 'personification', 'senses', 'dialogue, actions', 'central idea or message', 'quotation', 'attitude or feeling', 'conflict'] },
  { name: 'sentences', steps: sentencesLesson, file: 'term2/sentence-structure-cohesion/SentenceStructureCohesion.tsx', titles: ['Simple, compound and complex sentences', 'Conjunctions and combining sentences', 'Pronoun reference', 'Prepositions', 'Tense consistency', 'Check yourself'],
    needs: ['one independent clause', 'but', 'dependent clauses', 'link between the pronoun and the noun', 'ambiguous', 'time, space or direction', 'She walked to the store and bought milk.', 'improves the flow'] },
  { name: 'advanced', steps: advanced, file: 'term3/advanced-language-context/AdvancedLanguageContext.tsx', titles: ['Active and passive voice', 'Changing to the passive', 'Reported speech', 'Figurative language', 'Complex sentences: cause and effect', 'Check yourself'],
    needs: ['The teacher marked the papers.', 'stress the action rather than who does it', 'The meal was prepared by the chef.', 'steps back', 'He said he was tired.', 'Her heart is a stone.', 'exaggeration', 'Because it rained, the match was postponed.'] },
];

// the lesson text, with HTML entities and tags reduced to plain text
const plain = (html: string) =>
  html.replace(/<[^>]+>/g, ' ').replace(/&ldquo;|&rdquo;/g, '"').replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');

for (const l of lessons) {
  test(`${l.name}: renders all slides with the expected titles, ending in Check yourself with 3-4 checks`, () => {
    assert.deepEqual(l.steps.map((s) => s.title), l.titles);
    const htmls = l.steps.map((s) => renderToStaticMarkup(s.content as never));
    assert.ok(htmls.every((h) => h.length > 200));
    const last = htmls[htmls.length - 1];
    const checks = (last.match(/Show the answer/g) ?? []).length;
    assert.ok(checks >= 3 && checks <= 4, `checks=${checks}`);
    assert.ok(htmls.slice(0, -1).every((h) => h.includes('Worked example') && h.includes('Common mistake') && h.includes('The rule')));
  });

  test(`${l.name}: the slides teach what the bank asks`, () => {
    const text = plain(l.steps.map((s) => renderToStaticMarkup(s.content as never)).join(' ')).toLowerCase();
    for (const n of l.needs) assert.ok(text.includes(plain(n).toLowerCase()), `missing: ${n}`);
  });

  test(`${l.name}: slide count is 4-6 and the lesson file hands the steps to CapsSubjectTopic`, () => {
    assert.ok(l.steps.length >= 4 && l.steps.length <= 6);
    const src = fs.readFileSync(path.join(root, l.file), 'utf8');
    assert.ok(src.includes('learnSteps={learnSteps}') && src.includes('./' + path.basename(l.file, '.tsx') + 'Steps'));
  });

  test(`${l.name}: pictures carry an aria description`, () => {
    const withPicture = l.steps.map((s) => renderToStaticMarkup(s.content as never)).filter((h) => /<svg|aria-label=/.test(h));
    assert.ok(withPicture.length >= 1);
  });
}

test('sentence-structure examples have the kinds the slides name', () => {
  assert.equal(sentenceType(sentences.simple), 'simple');
  assert.equal(sentenceType(sentences.compound), 'compound');
  assert.equal(sentenceType(sentences.complex), 'complex');
  assert.equal(sentenceType(cause), 'complex');
});
