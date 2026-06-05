import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaGrade12: Subject = {
  id: 'xho',
  title: 'isiXhosa FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-listening-speaking-t1',
          title: 'Listening & Speaking',
          description: 'Prepared speech, listening comprehension, critical discussion, and oral response to literature.',
          component: lazy(() => import('./term1/listening-speaking/ListeningSpeakingT1')),
        },
        {
          id: 'gr12-reading-viewing-t1',
          title: 'Reading & Viewing',
          description: 'Prescribed literature, summary writing, visual literacy, and comprehension strategies.',
          component: lazy(() => import('./term1/reading-viewing/ReadingViewingT1')),
        },
        {
          id: 'gr12-writing-presenting-t1',
          title: 'Writing & Presenting',
          description: 'Essay planning, TEEL paragraph structure, reflective writing, and formal letter format.',
          component: lazy(() => import('./term1/writing-presenting/WritingPresentingT1')),
        },
        {
          id: 'gr12-language-structures-t1',
          title: 'Language Structures',
          description: 'isiXhosa concord, punctuation, vocabulary in context, and editing for style.',
          component: lazy(() => import('./term1/language-structures/LanguageStructuresT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-listening-speaking-t2',
          title: 'Listening & Speaking',
          description: 'Interview techniques, oral presentations, listening for attitude and bias, and formal spoken responses.',
          component: lazy(() => import('./term2/listening-speaking/ListeningSpeakingT2')),
        },
        {
          id: 'gr12-reading-viewing-t2',
          title: 'Reading & Viewing',
          description: 'Novel and drama study, media text analysis, perspective, and critical literacy.',
          component: lazy(() => import('./term2/reading-viewing/ReadingViewingT2')),
        },
        {
          id: 'gr12-writing-presenting-t2',
          title: 'Writing & Presenting',
          description: 'Formal letter, newspaper article, review, and speech writing with transactional precision.',
          component: lazy(() => import('./term2/writing-presenting/WritingPresentingT2')),
        },
        {
          id: 'gr12-language-structures-t2',
          title: 'Language Structures',
          description: 'Connectors, active and passive voice, direct and indirect speech, and cohesion.',
          component: lazy(() => import('./term2/language-structures/LanguageStructuresT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-listening-speaking-t3',
          title: 'Listening & Speaking',
          description: 'Formal debate, persuasive language, seminar discussion, and oral exam preparation.',
          component: lazy(() => import('./term3/listening-speaking/ListeningSpeakingT3')),
        },
        {
          id: 'gr12-reading-viewing-t3',
          title: 'Reading & Viewing',
          description: 'Poetry devices and tone, drama contextual questions, short story techniques, and trial exam revision.',
          component: lazy(() => import('./term3/reading-viewing/ReadingViewingT3')),
        },
        {
          id: 'gr12-writing-presenting-t3',
          title: 'Writing & Presenting',
          description: 'Argumentative and discursive essays, formal article, portfolio evidence, and timed writing strategies.',
          component: lazy(() => import('./term3/writing-presenting/WritingPresentingT3')),
        },
        {
          id: 'gr12-language-structures-t3',
          title: 'Language Structures',
          description: 'Grammar error identification, style shifts, vocabulary refinement, and complex punctuation.',
          component: lazy(() => import('./term3/language-structures/LanguageStructuresT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-listening-speaking-t4',
          title: 'Listening & Speaking',
          description: 'Final oral evidence, listening comprehension revision, fluency, and register control.',
          component: lazy(() => import('./term4/listening-speaking/ListeningSpeakingT4')),
        },
        {
          id: 'gr12-reading-viewing-t4',
          title: 'Reading & Viewing',
          description: 'Final revision across literature, summary rules, comprehension, and visual text recall.',
          component: lazy(() => import('./term4/reading-viewing/ReadingViewingT4')),
        },
        {
          id: 'gr12-writing-presenting-t4',
          title: 'Writing & Presenting',
          description: 'Exam essay strategies, transactional format recall, proofreading routines, and time management.',
          component: lazy(() => import('./term4/writing-presenting/WritingPresentingT4')),
        },
        {
          id: 'gr12-language-structures-t4',
          title: 'Language Structures',
          description: 'Revision of concord, tenses, passive voice, speech conversion, punctuation, and sentence correction.',
          component: lazy(() => import('./term4/language-structures/LanguageStructuresT4')),
        },
      ],
    },
  ],
};
