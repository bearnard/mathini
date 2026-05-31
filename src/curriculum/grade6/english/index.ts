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
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        { id: 'literary-genres', title: 'Literary Genres', description: 'Novels, plays, and poetry compared.', component: lazy(() => import('./term2/literary-genres/LiteraryGenres')) },
        { id: 'creative-transactional-writing', title: 'Creative & Transactional Writing', description: 'Poems, dialogues, play scripts, the writing process.', component: lazy(() => import('./term2/creative-transactional-writing/CreativeTransactionalWriting')) },
        { id: 'language-extension', title: 'Language Extension', description: 'Synonyms, antonyms, idioms, tense and punctuation.', component: lazy(() => import('./term2/language-extension/LanguageExtension')) },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        { id: 'deeper-literature-response', title: 'Deeper Literature Response', description: 'Theme, mood, character motivation and book response.', component: lazy(() => import('./term3/deeper-literature-response/DeeperLiteratureResponse')) },
        { id: 'extended-writing-speaking', title: 'Extended Writing & Speaking', description: 'Book reviews, essays, oral responses.', component: lazy(() => import('./term3/extended-writing-speaking/ExtendedWritingSpeaking')) },
        { id: 'complex-sentence-work', title: 'Complex Sentence Work', description: 'Phrases, clauses, conjunctions, complex sentences.', component: lazy(() => import('./term3/complex-sentence-work/ComplexSentenceWork')) },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        { id: 'integrated-revision', title: 'Integrated Revision', description: 'Poetry, fiction, media texts and comprehension revision.', component: lazy(() => import('./term4/integrated-revision/IntegratedRevision')) },
        { id: 'exam-writing-practice', title: 'Exam Writing Practice', description: 'Essay planning, transactional texts, editing.', component: lazy(() => import('./term4/exam-writing-practice/ExamWritingPractice')) },
        { id: 'language-consolidation', title: 'Language Consolidation', description: 'Parts of speech, tense, direct speech, spelling.', component: lazy(() => import('./term4/language-consolidation/LanguageConsolidation')) },
      ],
    },
  ],
};
