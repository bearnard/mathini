import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade11: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-prescribed-prose-poetry-t1',
          title: 'Prescribed Prose and Poetry',
          description: 'Engage with prescribed texts using mature literary terminology, device identification, theme support and contextual responses.',
          component: lazy(() => import('./term1/prescribed-prose-poetry/PrescribedProsePoetry')),
        },
        {
          id: 'gr11-literary-devices-theme-t1',
          title: 'Literary Devices and Theme',
          description: 'Identify, explain and analyse literary devices — metaphor, simile, irony, allusion, enjambment — and track theme across texts.',
          component: lazy(() => import('./term1/literary-devices-theme/LiteraryDevicesTheme')),
        },
        {
          id: 'gr11-process-writing-fet-genres-t1',
          title: 'Process Writing for FET Genres',
          description: 'Narrative, descriptive, argumentative, reflective and discursive essays; formal letters, CVs and covering letters; process writing stages.',
          component: lazy(() => import('./term1/process-writing-fet-genres/ProcessWritingFetGenres')),
        },
        {
          id: 'gr11-listening-language-context-t1',
          title: 'Listening and Language in Context',
          description: 'Listening comprehension strategies, grammar and editing, unprepared speech, inference and critical response.',
          component: lazy(() => import('./term1/listening-language-context/ListeningLanguageContext')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-prose-poetry-visual-literacy-t2',
          title: 'Prose, Poetry and Visual Literacy',
          description: 'Seen and unseen poetry comparison, prose analysis, visual text interpretation and evidence-based comparative responses.',
          component: lazy(() => import('./term2/prose-poetry-visual-literacy/ProsePoetryVisualLiteracy')),
        },
        {
          id: 'gr11-advanced-essay-functional-writing-t2',
          title: 'Advanced Essay and Functional Writing',
          description: 'Discursive and reflective essays, agendas, minutes, formal reports, magazine articles and reviews; register control.',
          component: lazy(() => import('./term2/advanced-essay-functional-writing/AdvancedEssayFunctionalWriting')),
        },
        {
          id: 'gr11-summary-writing-technique-t2',
          title: 'Summary Writing Technique',
          description: 'Identifying main ideas, paraphrasing in own words, keeping to word limits, and writing summaries in continuous prose.',
          component: lazy(() => import('./term2/summary-writing-technique/SummaryWritingTechnique')),
        },
        {
          id: 'gr11-midyear-exam-preparation-t2',
          title: 'Mid-Year Exam Preparation',
          description: 'Paper 1, 2 and 3 structure and strategies, time management, timed writing practice and exam technique.',
          component: lazy(() => import('./term2/midyear-exam-preparation/MidyearExamPreparation')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-drama-poetry-comparison-t3',
          title: 'Drama and Poetry Comparison',
          description: 'Prescribed drama, stagecraft, dramatic devices, comparative poetry analysis and analytical literature responses.',
          component: lazy(() => import('./term3/drama-poetry-comparison/DramaPoetryComparison')),
        },
        {
          id: 'gr11-literary-transactional-responses-t3',
          title: 'Literary and Transactional Responses',
          description: 'Literary essay writing, review structure, formal interviews and reports, audience and register in transactional writing.',
          component: lazy(() => import('./term3/literary-transactional-responses/LiteraryTransactionalResponses')),
        },
        {
          id: 'gr11-language-consolidation-editing-t3',
          title: 'Language Consolidation and Editing',
          description: 'Editing for accuracy, active and passive voice, direct and indirect speech, parallel structure and prepared oral delivery.',
          component: lazy(() => import('./term3/language-consolidation-editing/LanguageConsolidationEditing')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-literature-revision-t4',
          title: 'Comprehensive Literature Revision',
          description: 'Revision across novel, drama and poetry — thematic revision, quotation recall, integrated questions and embedded evidence.',
          component: lazy(() => import('./term4/literature-revision/LiteratureRevision')),
        },
        {
          id: 'gr11-writing-consolidation-t4',
          title: 'Writing Consolidation',
          description: 'Essay and transactional format revision, editing under time pressure and selecting the most suitable exam topic.',
          component: lazy(() => import('./term4/writing-consolidation/WritingConsolidation')),
        },
        {
          id: 'gr11-exam-readiness-t4',
          title: 'Exam Readiness',
          description: 'Paper 1, 2 and 3 strategies, time management, common exam traps and approaching all three papers with confidence.',
          component: lazy(() => import('./term4/exam-readiness/ExamReadiness')),
        },
      ],
    },
  ],
};
