import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const afrikaansFALGrade8: Subject = {
  id: 'afr',
  title: 'Afrikaans FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'afr-visual-literacy-advertisements',
          title: 'Visuele Geletterdheid & Advertensies',
          description: 'Visual-text analysis with audience, layout and persuasive language.',
          component: lazy(() => import('./term1/visual-literacy-advertisements/VisualLiteracyAdvertisements')),
        },
        {
          id: 'afr-poetry-early-literature-study',
          title: 'Poësie & Vroeë Literatuurstudie',
          description: 'Poetry structure, imagery, tone and introductory literary interpretation.',
          component: lazy(() => import('./term1/poetry-early-literature-study/PoetryEarlyLiteratureStudy')),
        },
        {
          id: 'afr-narrative-writing-grammar',
          title: 'Narratiewe Skryfwerk & Grammatika',
          description: 'Narrative technique, tense control, punctuation and editing in context.',
          component: lazy(() => import('./term1/narrative-writing-grammar/NarrativeWritingGrammar')),
        },
        {
          id: 'afr-friendly-letter',
          title: 'Vriendskaplike brief',
          description: "The layout, the greeting and closing, and short sentences about your news.",
          component: lazy(() => import('./term1/friendly-letter/FriendlyLetter')),
        },
        {
          id: 'afr-investigative-report',
          title: 'Ondersoekende verslag en vraelys',
          description: "The question, the questionnaire, the findings and the conclusion.",
          component: lazy(() => import('./term1/investigative-report/InvestigativeReport')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'afr-electronic-communication-reviews',
          title: 'Elektroniese Kommunikasie & Resensies',
          description: 'Email conventions, review tone and audience-aware register choices.',
          component: lazy(() => import('./term2/electronic-communication-reviews/ElectronicCommunicationReviews')),
        },
        {
          id: 'afr-folklore-youth-novel-study',
          title: 'Volksverhale & Jeugromanstudie',
          description: 'Character, conflict and plot evidence in longer prose texts.',
          component: lazy(() => import('./term2/folklore-youth-novel-study/FolkloreYouthNovelStudy')),
        },
        {
          id: 'afr-grammar-reporting-coherence',
          title: 'Grammatika vir Verslagdoening & Samehang',
          description: 'Direct/indirect speech, pronouns, concord and cohesive sentence flow.',
          component: lazy(() => import('./term2/grammar-reporting-coherence/GrammarReportingCoherence')),
        },
        {
          id: 'afr-instructions-directions',
          title: 'Aanwysings en instruksies',
          description: "Steps in order, the command form, and giving directions.",
          component: lazy(() => import('./term2/instructions-directions/InstructionsDirections')),
        },
        {
          id: 'afr-dialogue-interview',
          title: 'Dialoog en onderhoud',
          description: "The layout of a dialogue, and questions and answers in an interview.",
          component: lazy(() => import('./term2/dialogue-interview/DialogueInterview')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'afr-creative-writing-project',
          title: 'Kreatiewe Skryfprojek',
          description: 'Project planning, drafting, revision and presentation skills.',
          component: lazy(() => import('./term3/creative-writing-project/CreativeWritingProject')),
        },
        {
          id: 'afr-short-stories-drama',
          title: 'Kortverhale & Drama',
          description: 'Literary response to short stories, scenes, conflict and theme.',
          component: lazy(() => import('./term3/short-stories-drama/ShortStoriesDrama')),
        },
        {
          id: 'afr-transactional-writing-language-refinement',
          title: 'Transaksionele Skryfwerk & Taalverfyning',
          description: 'Formal formats plus conjunction, punctuation and reporting accuracy.',
          component: lazy(() => import('./term3/transactional-writing-language-refinement/TransactionalWritingLanguageRefinement')),
        },
        {
          id: 'afr-letter-to-the-press',
          title: 'Brief aan die pers',
          description: "Writing to the editor: the greeting, your view with reasons, and a polite request.",
          component: lazy(() => import('./term3/letter-to-the-press/LetterToThePress')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'afr-revision-exam-preparation',
          title: 'Hersiening & Eksamenvoorbereiding',
          description: 'Exam-style comprehension, summary and strategy-focused revision.',
          component: lazy(() => import('./term4/revision-exam-preparation/RevisionExamPreparation')),
        },
        {
          id: 'afr-review-report-writing',
          title: 'Resensie- en Verslagskryfwerk',
          description: 'Controlled report and review writing with concise, relevant detail.',
          component: lazy(() => import('./term4/review-report-writing/ReviewReportWriting')),
        },
        {
          id: 'afr-language-consolidation',
          title: 'Taalkonsolidasie',
          description: 'Comprehensive year-end grammar and sentence-control revision.',
          component: lazy(() => import('./term4/language-consolidation/LanguageConsolidation')),
        },
        {
          id: 'afr-newspaper-article',
          title: 'Koerantberig en tydskrifartikel',
          description: "The headline, the first paragraph with the main facts, and a quotation.",
          component: lazy(() => import('./term4/newspaper-article/NewspaperArticle')),
        },
        {
          id: 'afr-diary-entry',
          title: 'Dagboekinskrywing',
          description: "The opening, time words, the past with het, and feelings.",
          component: lazy(() => import('./term4/diary-entry/DiaryEntry')),
        },
        {
          id: 'afr-news-report',
          title: 'Joernalistieke verslag',
          description: "Facts first, named sources, the past tense, and no opinion.",
          component: lazy(() => import('./term4/news-report/NewsReport')),
        },
      ],
    },
  ],
};
