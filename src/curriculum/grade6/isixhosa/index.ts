import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const isiXhosaSAL: Subject = {
  id: 'xho',
  title: 'isiXhosa SAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        { id: 'listening-speaking-t1', title: 'Listening and Speaking', description: 'Oral routines, greetings, discussions and pronunciation skills.', component: lazy(() => import('./term1/listening-speaking-t1/ListeningSpeakingT1')) },
        { id: 'reading-viewing-t1', title: 'Reading and Viewing', description: 'Short texts, visual clues and foundational comprehension strategies.', component: lazy(() => import('./term1/reading-viewing-t1/ReadingViewingT1')) },
        { id: 'writing-presenting-t1', title: 'Writing and Presenting', description: 'Sentence building, short paragraphs and clear oral presentation.', component: lazy(() => import('./term1/writing-presenting-t1/WritingPresentingT1')) },
        { id: 'language-structures-t1', title: 'Language Structures and Conventions', description: 'Pronouns, concords, tense basics, punctuation and spelling.', component: lazy(() => import('./term1/language-structures-t1/LanguageStructuresT1')) },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        { id: 'listening-speaking-t2', title: 'Listening and Speaking', description: 'Listening to instructions, dialogues and short prepared talks.', component: lazy(() => import('./term2/listening-speaking-t2/ListeningSpeakingT2')) },
        { id: 'reading-viewing-t2', title: 'Reading and Viewing', description: 'Reading fluency, text meaning and visual literacy responses.', component: lazy(() => import('./term2/reading-viewing-t2/ReadingViewingT2')) },
        { id: 'writing-presenting-t2', title: 'Writing and Presenting', description: 'Guided paragraphs, transactional writing and oral sharing.', component: lazy(() => import('./term2/writing-presenting-t2/WritingPresentingT2')) },
        { id: 'language-structures-t2', title: 'Language Structures and Conventions', description: 'Word classes, sentence patterns, punctuation and vocabulary growth.', component: lazy(() => import('./term2/language-structures-t2/LanguageStructuresT2')) },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        { id: 'listening-speaking-t3', title: 'Listening and Speaking', description: 'Storytelling, oral reports, questioning and turn-taking skills.', component: lazy(() => import('./term3/listening-speaking-t3/ListeningSpeakingT3')) },
        { id: 'reading-viewing-t3', title: 'Reading and Viewing', description: 'Comprehension, inference, sequencing and text response practice.', component: lazy(() => import('./term3/reading-viewing-t3/ReadingViewingT3')) },
        { id: 'writing-presenting-t3', title: 'Writing and Presenting', description: 'Process writing, editing, creative tasks and oral presentations.', component: lazy(() => import('./term3/writing-presenting-t3/WritingPresentingT3')) },
        { id: 'language-structures-t3', title: 'Language Structures and Conventions', description: 'Grammar consolidation, tense control and accurate language use.', component: lazy(() => import('./term3/language-structures-t3/LanguageStructuresT3')) },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        { id: 'listening-speaking-t4', title: 'Listening and Speaking', description: 'Revision of oral communication, discussion and presentation skills.', component: lazy(() => import('./term4/listening-speaking-t4/ListeningSpeakingT4')) },
        { id: 'reading-viewing-t4', title: 'Reading and Viewing', description: 'Integrated reading tasks, comprehension revision and visual analysis.', component: lazy(() => import('./term4/reading-viewing-t4/ReadingViewingT4')) },
        { id: 'writing-presenting-t4', title: 'Writing and Presenting', description: 'Final writing cycle, editing accuracy and presentation confidence.', component: lazy(() => import('./term4/writing-presenting-t4/WritingPresentingT4')) },
        { id: 'language-structures-t4', title: 'Language Structures and Conventions', description: 'Year-end grammar, spelling and punctuation consolidation.', component: lazy(() => import('./term4/language-structures-t4/LanguageStructuresT4')) },
      ],
    },
  ],
};
