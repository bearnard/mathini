import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaFALGrade8: Subject = {
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
          description: 'Introductions, daily life discussions, prepared reading, and listening comprehension.',
          component: lazy(() => import('./term1/listening-speaking/ListeningSpeakingT1')),
        },
        {
          id: 'reading-viewing-t1',
          title: 'Reading & Viewing',
          description: 'Visual texts, advertisements, short stories, poems, and comprehension skills.',
          component: lazy(() => import('./term1/reading-viewing/ReadingViewingT1')),
        },
        {
          id: 'writing-presenting-t1',
          title: 'Writing & Presenting',
          description: 'Narrative and descriptive writing, friendly letters, dialogues, and drafting.',
          component: lazy(() => import('./term1/writing-presenting/WritingPresentingT1')),
        },
        {
          id: 'language-structures-t1',
          title: 'Language Structures',
          description: 'Nouns, concords, adjectives, simple tenses, punctuation, and spelling.',
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
          description: 'Oral presentations, interviews, everyday transactions, and spoken summaries.',
          component: lazy(() => import('./term2/listening-speaking/ListeningSpeakingT2')),
        },
        {
          id: 'reading-viewing-t2',
          title: 'Reading & Viewing',
          description: 'Folklore, youth prose, media texts, and theme and character analysis.',
          component: lazy(() => import('./term2/reading-viewing/ReadingViewingT2')),
        },
        {
          id: 'writing-presenting-t2',
          title: 'Writing & Presenting',
          description: 'Emails, reviews, reports, informal paragraphs, and process writing.',
          component: lazy(() => import('./term2/writing-presenting/WritingPresentingT2')),
        },
        {
          id: 'language-structures-t2',
          title: 'Language Structures',
          description: 'Pronouns, speech forms, question forms, conjunctions, and concord.',
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
          description: 'Prepared speeches, discussions, role play, and oral literary responses.',
          component: lazy(() => import('./term3/listening-speaking/ListeningSpeakingT3')),
        },
        {
          id: 'reading-viewing-t3',
          title: 'Reading & Viewing',
          description: 'Drama scenes, short stories, poetry, visual support, and literary response.',
          component: lazy(() => import('./term3/reading-viewing/ReadingViewingT3')),
        },
        {
          id: 'writing-presenting-t3',
          title: 'Writing & Presenting',
          description: 'Descriptive and narrative writing, formal letters, project writing, and presentation.',
          component: lazy(() => import('./term3/writing-presenting/WritingPresentingT3')),
        },
        {
          id: 'language-structures-t3',
          title: 'Language Structures',
          description: 'Adverbs, prepositions, clauses, punctuation, editing, and vocabulary.',
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
          description: 'Oral revision, listening comprehension, prepared responses, and fluency.',
          component: lazy(() => import('./term4/listening-speaking/ListeningSpeakingT4')),
        },
        {
          id: 'reading-viewing-t4',
          title: 'Reading & Viewing',
          description: 'Revision across stories, poems, media texts, comprehension, and summary.',
          component: lazy(() => import('./term4/reading-viewing/ReadingViewingT4')),
        },
        {
          id: 'writing-presenting-t4',
          title: 'Writing & Presenting',
          description: 'Summaries, reports, reviews, exam writing, and proofreading.',
          component: lazy(() => import('./term4/writing-presenting/WritingPresentingT4')),
        },
        {
          id: 'language-structures-t4',
          title: 'Language Structures',
          description: 'Revision of grammar, concords, tenses, punctuation, and spelling.',
          component: lazy(() => import('./term4/language-structures/LanguageStructuresT4')),
        },
      ],
    },
  ],
};
