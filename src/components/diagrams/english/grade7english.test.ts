import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { keepsTense } from './tense';
import {
  ESSAY_PARTS, LEBO, LINKS, MUSA, PARAGRAPH, POEM, POSTER, REVIEW_PARTS, REVISED, SIPHO, SPEAKER, STORY, SVO, THANDI,
  beForm, changedTail, directSpeech, lastWord, linkSentence, pluralOf, poemLines, reportedSpeech, rhymeScheme, slotsText, stageHeights,
  stepBack, taggedText, toAdverb, unityFixed,
} from './grade7english';

const here = path.dirname(fileURLToPath(import.meta.url));
const english = path.join(here, '../../../curriculum/grade7/english');
const read = (rel: string) => fs.readFileSync(path.join(english, rel), 'utf8');
const lessons = {
  grammar: read('term1/foundational-grammar-context/FoundationalGrammarContext.tsx'),
  story: read('term1/novel-short-story-study/NovelShortStoryStudy.tsx'),
  essay: read('term1/review-essay-writing/ReviewEssayWriting.tsx'),
  cohesion: read('term2/grammar-cohesion/GrammarCohesion.tsx'),
  poetry: read('term2/poetry-prescribed-text-work/PoetryPrescribedTextWork.tsx'),
};
const slideTitles = (src: string) => [...src.slice(0, src.indexOf('const bank')).matchAll(/^\s{4}title: '([^']+)'/gm)].map((m) => m[1]);
const bankText = (src: string) => src.slice(src.indexOf('const bank'));

test('plurals follow the rules and the bank answer', () => {
  assert.equal(pluralOf('learner'), 'learners');
  assert.equal(pluralOf('class'), 'classes');
  assert.equal(pluralOf('story'), 'stories');
  assert.equal(pluralOf('day'), 'days');
  assert.equal(pluralOf('child'), 'children');
  assert.deepEqual(changedTail('story', 'stories'), { stem: 'stor', tail: 'ies' });
  assert.equal(beForm(false), 'is');
  assert.equal(beForm(true), 'are');
  assert.ok(bankText(lessons.grammar).includes("options: ['learners'"));
});

test('word order slots read as the bank sentence', () => {
  assert.equal(slotsText(SVO), 'The class read the poem carefully.');
  assert.ok(bankText(lessons.grammar).includes('The class read the poem carefully.'));
});

test('direct and reported speech match the bank and the lesson', () => {
  assert.equal(directSpeech(LEBO), 'Lebo said, “I am tired.”');
  assert.equal(reportedSpeech(LEBO), 'Lebo said that she was tired.');
  assert.ok(bankText(lessons.grammar).includes('Lebo said that she was tired.'));
  assert.equal(reportedSpeech(MUSA), 'Musa said that he would revise that night.');
  assert.ok(bankText(lessons.grammar).includes('Musa said that he would revise that night.'));
  assert.equal(reportedSpeech(THANDI), 'Thandi said that they were ready.');
  assert.equal(reportedSpeech(SIPHO), 'Sipho said that he could swim.');
  assert.equal(stepBack('will'), 'would');
  assert.equal(stepBack('am'), 'was');
});

test('tense slide: the mixed sentence breaks tense and the fixed one keeps it', () => {
  const wrong = [{ text: 'walked', tense: 'past' as const }, { text: 'play', tense: 'present' as const }];
  const right = [{ text: 'walked', tense: 'past' as const }, { text: 'played', tense: 'past' as const }];
  assert.equal(keepsTense(wrong), false);
  assert.equal(keepsTense(right), true);
  assert.ok(lessons.grammar.includes('Yesterday we walked to school and play soccer.'));
  assert.ok(lessons.grammar.includes('Last week Thabo cooked supper and washes the dishes.'));
});

test('adverbs and tagged sentences', () => {
  assert.equal(toAdverb('careful'), 'carefully');
  assert.equal(toAdverb('quick'), 'quickly');
  assert.equal(toAdverb('happy'), 'happily');
  assert.equal(toAdverb('gentle'), 'gently');
  assert.equal(toAdverb('good'), 'well');
  assert.equal(taggedText(POSTER), 'The bright poster caught our attention.');
  assert.equal(taggedText(SPEAKER), 'The speaker answered clearly.');
  assert.equal(taggedText(REVISED), 'We revised early because we wanted to feel ready.');
  assert.equal(POSTER.find((t) => t.role === 'adjective')?.text, 'bright');
  assert.equal(SPEAKER.find((t) => t.role === 'adverb')?.text, 'clearly.');
  const bank = bankText(lessons.cohesion);
  assert.ok(bank.includes('The bright poster caught our attention.'));
  assert.ok(bank.includes('The speaker answered clearly.'));
});

test('linking words build the bank sentences', () => {
  assert.equal(linkSentence(LINKS[0]), 'We revised early, because we wanted to feel ready.');
  assert.equal(linkSentence(LINKS[2]), 'The team practised daily. Therefore, their passing improved.');
  assert.ok(bankText(lessons.cohesion).includes('The team practised daily. Therefore, their passing improved.'));
  assert.deepEqual(LINKS.map((l) => l.relation), ['reason', 'contrast', 'result']);
});

test('story: five stages in order, the climax is the peak', () => {
  assert.deepEqual(STORY.map((s) => s.id), ['exposition', 'rising', 'climax', 'falling', 'resolution']);
  const h = stageHeights(STORY);
  assert.equal(Math.max(...h), h[2]);
  assert.ok(h[0] < h[1] && h[1] < h[2] && h[2] > h[3] && h[3] > h[4]);
  assert.ok(h.every((v) => v >= 0 && v <= 1));
});

test('writing frames and paragraph unity', () => {
  assert.deepEqual(REVIEW_PARTS.map((b) => b.label), ['Summary', 'Opinion with reasons', 'Recommendation']);
  assert.deepEqual(ESSAY_PARTS.map((b) => b.label), ['Introduction', 'Body paragraphs', 'Conclusion']);
  assert.equal(PARAGRAPH.filter((s) => s.off).length, 1);
  assert.ok(!unityFixed(PARAGRAPH).includes('bicycle'));
  assert.ok(unityFixed(PARAGRAPH).startsWith('Our school play was well planned.'));
});

test('poem: 2 stanzas of 4, lines end on their stated sound, scheme is ABAB CDCD', () => {
  assert.equal(POEM.stanzas.length, 2);
  assert.ok(POEM.stanzas.every((s) => s.length === 4));
  for (const l of poemLines()) assert.ok(lastWord(l.text).endsWith(l.end), `${l.text} should end in ${l.end}`);
  assert.deepEqual(rhymeScheme(poemLines()), ['A', 'B', 'A', 'B', 'C', 'D', 'C', 'D']);
  assert.equal(lastWord('And I walk beneath my heavy load.'), 'load');
});

test('every lesson has 4 to 6 slides and ends with Check yourself', () => {
  for (const [name, src] of Object.entries(lessons)) {
    const t = slideTitles(src);
    assert.ok(t.length >= 4 && t.length <= 6, `${name} has ${t.length} slides`);
    assert.equal(t[t.length - 1], 'Check yourself', name);
    assert.ok(!src.slice(0, src.indexOf('const bank')).includes('throw '), `${name} must not throw at load`);
  }
});

test('each lesson text covers what its bank asks', () => {
  const need: Record<keyof typeof lessons, string[]> = {
    grammar: ['plural', 'past', 'subject, verb, object', 'quotation marks', 'step the tense back', 'singular verb'],
    story: ['setting', 'plot', 'conflict', 'theme', 'Evidence', 'climax', 'generous', 'cause and effect'],
    essay: ['purpose', 'judgement supported by reasons', 'introduction', 'paragraph unity', 'reflective essay', 'conclusion', 'redrafting', 'audience'],
    cohesion: ['adjective', 'adverb', 'conjunction', 'because', 'therefore', 'flows'],
    poetry: ['stanza', 'Rhyme', 'Imagery', 'Tone', 'line reference', 'themes'],
  };
  for (const [name, words] of Object.entries(need)) {
    const head = lessons[name as keyof typeof lessons];
    const text = head.slice(0, head.indexOf('const bank')).toLowerCase();
    for (const w of words) assert.ok(text.includes(w.toLowerCase()), `${name} lesson should mention "${w}"`);
  }
});
