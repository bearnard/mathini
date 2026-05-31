import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade7: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'novel-short-story-study',
          title: 'Novel or Short Story Study',
          description: 'Character, plot, conflict, setting, theme, and literary response.',
          component: lazy(() => import('./term1/novel-short-story-study/NovelShortStoryStudy')),
        },
        {
          id: 'review-essay-writing',
          title: 'Review and Essay Writing',
          description: 'Review format, narrative and reflective essays, planning and drafting.',
          component: lazy(() => import('./term1/review-essay-writing/ReviewEssayWriting')),
        },
        {
          id: 'foundational-grammar-context',
          title: 'Foundational Grammar in Context',
          description: 'Singular-plural forms, tenses, word order, and direct-indirect speech.',
          component: lazy(() => import('./term1/foundational-grammar-context/FoundationalGrammarContext')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'poetry-prescribed-text-work',
          title: 'Poetry and Prescribed Text Work',
          description: 'Stanza, rhyme, imagery, tone, and line-reference interpretation.',
          component: lazy(() => import('./term2/poetry-prescribed-text-work/PoetryPrescribedTextWork')),
        },
        {
          id: 'formal-functional-writing',
          title: 'Formal and Functional Writing',
          description: 'Formal letters, emails, dialogue, descriptive writing, and register.',
          component: lazy(() => import('./term2/formal-functional-writing/FormalFunctionalWriting')),
        },
        {
          id: 'grammar-cohesion',
          title: 'Grammar for Cohesion',
          description: 'Adjectives, adverbs, conjunctions, and sentence links for flow.',
          component: lazy(() => import('./term2/grammar-cohesion/GrammarCohesion')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'visual-literacy-persuasive-texts',
          title: 'Visual Literacy and Persuasive Texts',
          description: 'Advertisements, posters, persuasive language, audience and layout.',
          component: lazy(
            () => import('./term3/visual-literacy-persuasive-texts/VisualLiteracyPersuasiveTexts'),
          ),
        },
        {
          id: 'drama-continued-novel-study',
          title: 'Drama or Continued Novel Study',
          description: 'Dialogue, stage action, conflict, theme, and character response.',
          component: lazy(() => import('./term3/drama-continued-novel-study/DramaContinuedNovelStudy')),
        },
        {
          id: 'project-language-refinement',
          title: 'Project and Language Refinement',
          description: 'Project writing, active-passive voice, punctuation, and clauses.',
          component: lazy(() => import('./term3/project-language-refinement/ProjectLanguageRefinement')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'revision-all-genres',
          title: 'Revision of All Genres',
          description: 'Integrated revision across novel, poetry, drama, and media texts.',
          component: lazy(() => import('./term4/revision-all-genres/RevisionAllGenres')),
        },
        {
          id: 'exam-writing-practice',
          title: 'Exam Writing Practice',
          description: 'Essay and transactional writing under timed exam conditions.',
          component: lazy(() => import('./term4/exam-writing-practice/ExamWritingPractice')),
        },
        {
          id: 'grammar-consolidation',
          title: 'Grammar Consolidation',
          description: 'Tenses, clauses, punctuation, vocabulary, and language in context.',
          component: lazy(() => import('./term4/grammar-consolidation/GrammarConsolidation')),
        },
      ],
    },
  ],
};

