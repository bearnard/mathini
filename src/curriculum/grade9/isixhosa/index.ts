import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaFALGrade9: Subject = {
  id: 'xho',
  title: 'isiXhosa FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'listening-speaking-t1',
          title: 'Listening & Speaking',
          description: 'Speeches, discussions, listening comprehension, interviews, and fluency development.',
          component: lazy(() => import('./term1/listening-speaking/ListeningSpeakingT1')),
        },
        {
          id: 'reading-viewing-t1',
          title: 'Reading & Viewing',
          description: 'Short stories, visual texts, poetry, theme, conflict, and setting analysis.',
          component: lazy(() => import('./term1/reading-viewing/ReadingViewingT1')),
        },
        {
          id: 'writing-presenting-t1',
          title: 'Writing & Presenting',
          description: 'Narrative and descriptive essays, personal reflection, friendly letters, and planning.',
          component: lazy(() => import('./term1/writing-presenting/WritingPresentingT1')),
        },
        {
          id: 'language-structures-t1',
          title: 'Language Structures',
          description: 'Tenses, idiomatic vocabulary, concords, direct and indirect speech, and punctuation.',
          component: lazy(() => import('./term1/language-structures/LanguageStructuresT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'listening-speaking-t2',
          title: 'Listening & Speaking',
          description: 'Prepared talks, interviews, summarising, group discussion, and role play.',
          component: lazy(() => import('./term2/listening-speaking/ListeningSpeakingT2')),
        },
        {
          id: 'reading-viewing-t2',
          title: 'Reading & Viewing',
          description: 'Novel or folklore study, media texts, characterisation, message, and visual literacy.',
          component: lazy(() => import('./term2/reading-viewing/ReadingViewingT2')),
        },
        {
          id: 'writing-presenting-t2',
          title: 'Writing & Presenting',
          description: 'Formal email, review, report, dialogue, and transactional writing.',
          component: lazy(() => import('./term2/writing-presenting/WritingPresentingT2')),
        },
        {
          id: 'language-structures-t2',
          title: 'Language Structures',
          description: 'Connectors, passive voice, pronouns, question tags, and concord.',
          component: lazy(() => import('./term2/language-structures/LanguageStructuresT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'listening-speaking-t3',
          title: 'Listening & Speaking',
          description: 'Debate, prepared speech, oral response to literature, and panel discussion.',
          component: lazy(() => import('./term3/listening-speaking/ListeningSpeakingT3')),
        },
        {
          id: 'reading-viewing-t3',
          title: 'Reading & Viewing',
          description: 'Drama, poetry, short stories, message, tone, and character motivation.',
          component: lazy(() => import('./term3/reading-viewing/ReadingViewingT3')),
        },
        {
          id: 'writing-presenting-t3',
          title: 'Writing & Presenting',
          description: 'Discursive paragraph, formal letter, article, project writing, and presentation.',
          component: lazy(() => import('./term3/writing-presenting/WritingPresentingT3')),
        },
        {
          id: 'language-structures-t3',
          title: 'Language Structures',
          description: 'Complex sentences, conjunctions, punctuation, editing, and vocabulary refinement.',
          component: lazy(() => import('./term3/language-structures/LanguageStructuresT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'listening-speaking-t4',
          title: 'Listening & Speaking',
          description: 'Revision of speeches, listening practice, oral feedback, and fluency consolidation.',
          component: lazy(() => import('./term4/listening-speaking/ListeningSpeakingT4')),
        },
        {
          id: 'reading-viewing-t4',
          title: 'Reading & Viewing',
          description: 'Revision across literature, visual texts, comprehension, and summary skills.',
          component: lazy(() => import('./term4/reading-viewing/ReadingViewingT4')),
        },
        {
          id: 'writing-presenting-t4',
          title: 'Writing & Presenting',
          description: 'Report, review, summary, exam essays, and proofreading skills.',
          component: lazy(() => import('./term4/writing-presenting/WritingPresentingT4')),
        },
        {
          id: 'language-structures-t4',
          title: 'Language Structures',
          description: 'Revision of all major grammar, punctuation, and sentence control.',
          component: lazy(() => import('./term4/language-structures/LanguageStructuresT4')),
        },
      ],
    },
  ],
};
