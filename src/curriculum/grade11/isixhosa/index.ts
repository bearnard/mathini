import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaGrade11: Subject = {
  id: 'xho',
  title: 'isiXhosa FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-xho-listening-t1',
          title: 'Listening & Speaking',
          description: 'Prepared speeches, critical discussions, listening comprehension, and oral response to literature.',
          component: lazy(() => import('./term1/listening-speaking/ListeningSpeakingT1')),
        },
        {
          id: 'gr11-xho-reading-t1',
          title: 'Reading & Viewing',
          description: 'Novel, drama, poetry, media texts, theme, character, and tone analysis.',
          component: lazy(() => import('./term1/reading-viewing/ReadingViewingT1')),
        },
        {
          id: 'gr11-xho-writing-t1',
          title: 'Writing & Presenting',
          description: 'Reflective essay, descriptive essay, friendly and formal texts, planning and drafting.',
          component: lazy(() => import('./term1/writing-presenting/WritingPresentingT1')),
        },
        {
          id: 'gr11-xho-language-t1',
          title: 'Language Structures',
          description: 'Concord, punctuation, vocabulary in context, editing and style.',
          component: lazy(() => import('./term1/language-structures/LanguageStructuresT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-xho-listening-t2',
          title: 'Listening & Speaking',
          description: 'Interviews, panel discussions, oral summaries, and listening for attitude and bias.',
          component: lazy(() => import('./term2/listening-speaking/ListeningSpeakingT2')),
        },
        {
          id: 'gr11-xho-reading-t2',
          title: 'Reading & Viewing',
          description: 'Prose study, media texts, visual literacy, social themes, and perspective.',
          component: lazy(() => import('./term2/reading-viewing/ReadingViewingT2')),
        },
        {
          id: 'gr11-xho-writing-t2',
          title: 'Writing & Presenting',
          description: 'Review, report, email, speech writing, and transactional text control.',
          component: lazy(() => import('./term2/writing-presenting/WritingPresentingT2')),
        },
        {
          id: 'gr11-xho-language-t2',
          title: 'Language Structures',
          description: 'Direct and indirect speech, connectors, passive voice, editing, and cohesion.',
          component: lazy(() => import('./term2/language-structures/LanguageStructuresT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-xho-listening-t3',
          title: 'Listening & Speaking',
          description: 'Debate, prepared speech, seminar discussion, and oral response to social and literary issues.',
          component: lazy(() => import('./term3/listening-speaking/ListeningSpeakingT3')),
        },
        {
          id: 'gr11-xho-reading-t3',
          title: 'Reading & Viewing',
          description: 'Drama, poetry, short stories, critical reading, and contextual analysis.',
          component: lazy(() => import('./term3/reading-viewing/ReadingViewingT3')),
        },
        {
          id: 'gr11-xho-writing-t3',
          title: 'Writing & Presenting',
          description: 'Argumentative and discursive essay, formal letter, article, and project presentation.',
          component: lazy(() => import('./term3/writing-presenting/WritingPresentingT3')),
        },
        {
          id: 'gr11-xho-language-t3',
          title: 'Language Structures',
          description: 'Complex sentences, style choices, punctuation mastery, and vocabulary refinement.',
          component: lazy(() => import('./term3/language-structures/LanguageStructuresT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-xho-listening-t4',
          title: 'Listening & Speaking',
          description: 'Revision of speeches, listening comprehension strategies, reading fluency, and presentation review.',
          component: lazy(() => import('./term4/listening-speaking/ListeningSpeakingT4')),
        },
        {
          id: 'gr11-xho-reading-t4',
          title: 'Reading & Viewing',
          description: 'Literature revision, comprehension skills, visual text analysis, and summary writing.',
          component: lazy(() => import('./term4/reading-viewing/ReadingViewingT4')),
        },
        {
          id: 'gr11-xho-writing-t4',
          title: 'Writing & Presenting',
          description: 'Exam essays, transactional text recall, report and review revision, and proofreading.',
          component: lazy(() => import('./term4/writing-presenting/WritingPresentingT4')),
        },
        {
          id: 'gr11-xho-language-t4',
          title: 'Language Structures',
          description: 'Revision of concord, tenses, passive voice, sentence control, editing, and punctuation.',
          component: lazy(() => import('./term4/language-structures/LanguageStructuresT4')),
        },
      ],
    },
  ],
};
