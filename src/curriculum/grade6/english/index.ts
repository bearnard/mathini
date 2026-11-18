import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHL: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        { id: 'current-issues-media', title: 'Media Texts', description: 'Newspaper articles, fact vs opinion, inference.', component: lazy(() => import('./term1/current-issues-media/CurrentIssuesMedia')) },
        { id: 'fiction-visual-literacy', title: 'Fiction & Visual Literacy', description: 'Speculative fiction, adverts, skimming and scanning.', component: lazy(() => import('./term1/fiction-visual-literacy/FictionVisualLiteracy')) },
        { id: 'process-writing-grammar', title: 'Process Writing & Grammar', description: 'Drafting essays, friendly letters, grammar essentials.', component: lazy(() => import('./term1/process-writing-grammar/ProcessWritingGrammar')) },
        { id: "eng6-newspaper-article", title: "Writing a Newspaper Article", description: "Headline, by-line, the lead paragraph, the five Ws and writing in the third person.", component: lazy(() => import('./term1/newspaper-article/NewspaperArticle')) },
        { id: "eng6-folklore-myth-legend", title: "Folklore: Myths and Legends", description: "What a myth and a legend are, their features, and how to write a short folklore story.", component: lazy(() => import('./term1/folklore-myth-legend/FolkloreMythLegend')) },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        { id: 'literary-genres', title: 'Literary Genres', description: 'Novels, plays, and poetry compared.', component: lazy(() => import('./term2/literary-genres/LiteraryGenres')) },
        { id: 'creative-transactional-writing', title: 'Creative & Transactional Writing', description: 'Poems, dialogues, play scripts, the writing process.', component: lazy(() => import('./term2/creative-transactional-writing/CreativeTransactionalWriting')) },
        { id: 'language-extension', title: 'Language Extension', description: 'Synonyms, antonyms, idioms, tense and punctuation.', component: lazy(() => import('./term2/language-extension/LanguageExtension')) },
        { id: "eng6-instructional-text", title: "Instructional Texts: Recipes and Directions", description: "Recipes and directions: what you need, steps in order, command verbs and sequence words.", component: lazy(() => import('./term2/instructional-text/InstructionalText')) },
        { id: "eng6-information-text-weather", title: "Information Texts: Weather Reports and Charts", description: "Reading and writing a weather report and chart, with the correct units and tense.", component: lazy(() => import('./term2/information-text-weather/InformationTextWeather')) },
        { id: "eng6-story-writing-plot", title: "Writing a Story with a Plot", description: "Characters, setting, the plot on a flow chart, a problem and an ending.", component: lazy(() => import('./term2/story-writing-plot/StoryWritingPlot')) },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        { id: 'deeper-literature-response', title: 'Deeper Literature Response', description: 'Theme, mood, character motivation and book response.', component: lazy(() => import('./term3/deeper-literature-response/DeeperLiteratureResponse')) },
        { id: 'extended-writing-speaking', title: 'Extended Writing & Speaking', description: 'Book reviews, essays, oral responses.', component: lazy(() => import('./term3/extended-writing-speaking/ExtendedWritingSpeaking')) },
        { id: 'complex-sentence-work', title: 'Complex Sentence Work', description: 'Phrases, clauses, conjunctions, complex sentences.', component: lazy(() => import('./term3/complex-sentence-work/ComplexSentenceWork')) },
        { id: "eng6-character-sketch", title: "Writing a Character Sketch", description: "Choosing a character, describing looks and personality, and showing what a person does.", component: lazy(() => import('./term3/character-sketch/CharacterSketch')) },
        { id: "eng6-diary-entry", title: "Writing a Diary Entry", description: "The date, the first person, the past tense, feelings and a plan for tomorrow.", component: lazy(() => import('./term3/diary-entry/DiaryEntry')) },
        { id: "eng6-comic-strip-script", title: "Comic Strips and Writing a Comic Script", description: "Panels, speech bubbles, captions, sound words and a script that tells a story in pictures.", component: lazy(() => import('./term3/comic-strip-script/ComicStripScript')) },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        { id: 'integrated-revision', title: 'Integrated Revision', description: 'Poetry, fiction, media texts and comprehension revision.', component: lazy(() => import('./term4/integrated-revision/IntegratedRevision')) },
        { id: 'exam-writing-practice', title: 'Exam Writing Practice', description: 'Essay planning, transactional texts, editing.', component: lazy(() => import('./term4/exam-writing-practice/ExamWritingPractice')) },
        { id: 'language-consolidation', title: 'Language Consolidation', description: 'Parts of speech, tense, direct speech, spelling.', component: lazy(() => import('./term4/language-consolidation/LanguageConsolidation')) },
        { id: "eng6-descriptive-paragraph", title: "Writing a Descriptive Paragraph", description: "Topic sentence, the five senses, exact adjectives and similes, and organising your description.", component: lazy(() => import('./term4/descriptive-paragraph/DescriptiveParagraph')) },
      ],
    },
  ],
};
