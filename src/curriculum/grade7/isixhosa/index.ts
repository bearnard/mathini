import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaSALGrade7: Subject = {
  id: 'xho',
  title: 'isiXhosa SAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'listening-speaking-t1',
          title: 'Listening & Speaking',
          description: 'Introductions, hobbies, daily routines, and asking for information.',
          component: lazy(() => import('./term1/listening-speaking/ListeningSpeakingT1')),
        },
        {
          id: 'reading-viewing-t1',
          title: 'Reading & Viewing',
          description: 'Stories, advertisements, notices, poems, and visual literacy.',
          component: lazy(() => import('./term1/reading-viewing/ReadingViewingT1')),
        },
        {
          id: 'writing-presenting-t1',
          title: 'Writing & Presenting',
          description: 'Friendly letters, dialogues, captions, and personal paragraphs.',
          component: lazy(() => import('./term1/writing-presenting/WritingPresentingT1')),
        },
        {
          id: 'language-structures-t1',
          title: 'Language Structures',
          description: 'Tenses, plurals, possessives, vocabulary, and punctuation.',
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
          description: 'Shopping, transport, service encounters, and directions.',
          component: lazy(() => import('./term2/listening-speaking/ListeningSpeakingT2')),
        },
        {
          id: 'reading-viewing-t2',
          title: 'Reading & Viewing',
          description: 'News snippets, folk stories, informational texts, timetables, and signs.',
          component: lazy(() => import('./term2/reading-viewing/ReadingViewingT2')),
        },
        {
          id: 'writing-presenting-t2',
          title: 'Writing & Presenting',
          description: 'Diary entries, short reports, dialogues, instructions, and messages.',
          component: lazy(() => import('./term2/writing-presenting/WritingPresentingT2')),
        },
        {
          id: 'language-structures-t2',
          title: 'Language Structures',
          description: 'Negatives, question forms, pronouns, concords, and adjectives.',
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
          description: 'Culture, environment, folktale retelling, interviews, and opinions.',
          component: lazy(() => import('./term3/listening-speaking/ListeningSpeakingT3')),
        },
        {
          id: 'reading-viewing-t3',
          title: 'Reading & Viewing',
          description: 'Poems, folktales, posters, factual texts, and picture sequences.',
          component: lazy(() => import('./term3/reading-viewing/ReadingViewingT3')),
        },
        {
          id: 'writing-presenting-t3',
          title: 'Writing & Presenting',
          description: 'Invitations, reports, directions, cultural paragraphs, and recounts.',
          component: lazy(() => import('./term3/writing-presenting/WritingPresentingT3')),
        },
        {
          id: 'language-structures-t3',
          title: 'Language Structures',
          description: 'Connectors, conjunctions, tense control, concords, and punctuation.',
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
          description: 'Health, feelings, future plans, and revision discussions.',
          component: lazy(() => import('./term4/listening-speaking/ListeningSpeakingT4')),
        },
        {
          id: 'reading-viewing-t4',
          title: 'Reading & Viewing',
          description: 'Revision passages, notices, stories, and summary-focused comprehension.',
          component: lazy(() => import('./term4/reading-viewing/ReadingViewingT4')),
        },
        {
          id: 'writing-presenting-t4',
          title: 'Writing & Presenting',
          description: 'Personal recounts, short reviews, messages, and revision paragraphs.',
          component: lazy(() => import('./term4/writing-presenting/WritingPresentingT4')),
        },
        {
          id: 'language-structures-t4',
          title: 'Language Structures',
          description: 'Revision of tenses, pronouns, questions, concords, and spelling.',
          component: lazy(() => import('./term4/language-structures/LanguageStructuresT4')),
        },
      ],
    },
  ],
};
