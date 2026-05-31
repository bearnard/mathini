import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const afrikaansFALGrade7: Subject = {
  id: 'afr',
  title: 'Afrikaans FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'afr-short-stories-reviews',
          title: 'Kortverhale & Resensies',
          description: 'Short stories, literary elements and simple reviews.',
          component: lazy(() => import('./term1/short-stories-reviews/ShortStoriesReviews')),
        },
        {
          id: 'afr-extended-responses',
          title: 'Uitgebreide Antwoorde',
          description: 'Planning and structuring developed written responses.',
          component: lazy(() => import('./term1/extended-responses/ExtendedResponses')),
        },
        {
          id: 'afr-word-sentence-grammar',
          title: 'Woord- en Sinvlak Grammatika',
          description: 'Grammar, tenses, plurals, idioms and sentence-level control.',
          component: lazy(() => import('./term1/word-sentence-grammar/WordSentenceGrammar')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'afr-poetry-text-study',
          title: 'Poësie & Teksstudie',
          description: 'Poetry analysis, imagery, mood and line-reference responses.',
          component: lazy(() => import('./term2/poetry-text-study/PoetryTextStudy')),
        },
        {
          id: 'afr-formal-correspondence-essays',
          title: 'Formele Korrespondensie & Opstelle',
          description: 'Formal letters, register choices and essay writing conventions.',
          component: lazy(() => import('./term2/formal-correspondence-essays/FormalCorrespondenceEssays')),
        },
        {
          id: 'afr-assessment-language-practice',
          title: 'Assesseringsgerigte Taalpraktyk',
          description: 'Comprehension, visual literacy and language-use preparation.',
          component: lazy(() => import('./term2/assessment-language-practice/AssessmentLanguagePractice')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'afr-visual-literacy-persuasion',
          title: 'Visuele Geletterdheid & Oorreding',
          description: 'Advertisements, audience, AIDA and persuasive devices.',
          component: lazy(() => import('./term3/visual-literacy-persuasion/VisualLiteracyPersuasion')),
        },
        {
          id: 'afr-creative-writing-project',
          title: 'Kreatiewe Skryfprojek',
          description: 'Long-form process writing with drafting, revising and presentation.',
          component: lazy(() => import('./term3/creative-writing-project/CreativeWritingProject')),
        },
        {
          id: 'afr-language-reinforcement',
          title: 'Taalversterking',
          description: 'Language accuracy through editing, punctuation and vocabulary.',
          component: lazy(() => import('./term3/language-reinforcement/LanguageReinforcement')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'afr-revision-genres-skills',
          title: 'Hersiening van Genres en Vaardighede',
          description: 'Integrated revision of Grade 7 genres and response skills.',
          component: lazy(() => import('./term4/revision-genres-skills/RevisionGenresSkills')),
        },
        {
          id: 'afr-exam-writing-practice',
          title: 'Eksamen-skryf Oefening',
          description: 'Timed writing, format recall and editing under pressure.',
          component: lazy(() => import('./term4/exam-writing-practice/ExamWritingPractice')),
        },
        {
          id: 'afr-language-consolidation',
          title: 'Taalkonsolidasie',
          description: 'Year-end grammar, punctuation and sentence-structure consolidation.',
          component: lazy(() => import('./term4/language-consolidation/LanguageConsolidation')),
        },
      ],
    },
  ],
};
