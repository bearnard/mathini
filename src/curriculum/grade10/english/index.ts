import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade10: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-literary-genres-text-features-t1',
          title: 'Literary Genres and Text Features',
          description: 'The novel, drama and poetry; the parts of a book; plot, setting, conflict, theme, mood and tone; terms for drama and poetry.',
          component: lazy(() => import('./term1/literary-genres-text-features/LiteraryGenresTextFeatures')),
        },
        {
          id: 'gr10-language-structures-conventions-t1',
          title: 'Register, Word Choice and Sentence Structure',
          description: 'Formal and informal register, denotation and connotation, clauses and sentence types, paragraphs and linking words, apostrophes and other punctuation.',
          component: lazy(() => import('./term1/language-structures-conventions/LanguageStructuresConventions')),
        },
        {
          id: 'gr10-essay-writing-process-t1',
          title: 'Writing an Essay: Narrative, Descriptive and Argumentative',
          description: 'The writing process from plan to presentation, narrative, descriptive and argumentative essays, and how the Grade 10 essay is marked.',
          component: lazy(() => import('./term1/essay-writing-process/EssayWritingProcess')),
        },
        {
          id: 'gr10-letters-cv-agenda-minutes-t1',
          title: 'Transactional Texts: Letters, CV, Agenda, Minutes and Obituary',
          description: 'Friendly and formal letters, curriculum vitae and covering letter, agenda and minutes of a meeting, and the obituary.',
          component: lazy(() => import('./term1/letters-cv-agenda-minutes/LettersCvAgendaMinutes')),
        },
        {
          id: 'gr10-comprehension-summary-t1',
          title: 'Comprehension and Summary',
          description: 'Reading strategies, inference, fact and opinion, writing a summary in your own words, and language structures in context.',
          component: lazy(() => import('./term1/comprehension-summary/ComprehensionSummary')),
        },
      ],
    },
  ],
};
