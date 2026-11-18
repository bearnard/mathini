import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade9: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'advertising-visual-design',
          title: 'Advertising and Visual Design',
          description: 'AIDA, emotive language, tone, target audience and persuasive techniques.',
          component: lazy(() => import('./term1/advertising-visual-design/AdvertisingVisualDesign')),
        },
        {
          id: 'essay-transactional-writing',
          title: 'Essay and Transactional Writing',
          description: 'Narrative, descriptive, reflective and argumentative essays; audience and purpose.',
          component: lazy(() => import('./term1/essay-transactional-writing/EssayTransactionalWriting')),
        },
        {
          id: 'grammar-revision-accuracy',
          title: 'Grammar Revision and Accuracy',
          description: 'Nouns, adjectives, verbs, punctuation, direct and indirect speech.',
          component: lazy(() => import('./term1/grammar-revision-accuracy/GrammarRevisionAccuracy')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'poetry-drama-study',
          title: 'Poetry and Drama Study',
          description: 'Literary devices, characterisation, theme, dialogue and textual evidence.',
          component: lazy(() => import('./term2/poetry-drama-study/PoetryDramaStudy')),
        },
        {
          id: 'letters-reviews',
          title: 'Letters and Reviews',
          description: 'Friendly and formal letters, register, review criteria and process writing.',
          component: lazy(() => import('./term2/letters-reviews/LettersReviews')),
        },
        {
          id: 'sentence-structure-cohesion',
          title: 'Sentence Structure and Cohesion',
          description: 'Pronouns, prepositions, conjunctions, sentence types and tense consistency.',
          component: lazy(() => import('./term2/sentence-structure-cohesion/SentenceStructureCohesion')),
        },
        {
          id: 'diary-entry',
          title: 'Writing a Diary Entry',
          description: 'Purpose, first person, events and evaluation, language and tone, and the writing process.',
          component: lazy(() => import('./term2/diary-entry/DiaryEntry')),
        },
        {
          id: 'constitution-and-policy',
          title: 'Writing a Constitution and a Policy',
          description: 'Features of the rules, the parts of a constitution, formal language, and how a policy differs.',
          component: lazy(() => import('./term2/constitution-and-policy/ConstitutionAndPolicy')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'oral-literature-narrative',
          title: 'Oral Literature and Narrative Traditions',
          description: 'Folktales, myths, oral presentation, interview and sequencing skills.',
          component: lazy(() => import('./term3/oral-literature-narrative/OralLiteratureNarrative')),
        },
        {
          id: 'advanced-language-context',
          title: 'Advanced Language in Context',
          description: 'Active and passive voice, reported speech, figurative language and complex sentences.',
          component: lazy(() => import('./term3/advanced-language-context/AdvancedLanguageContext')),
        },
        {
          id: 'will-and-testament',
          title: 'Reading and Writing a Will and Testament',
          description: 'Key words, the parts of a will, formal language, signing and witnesses, and writing one for a task.',
          component: lazy(() => import('./term3/will-and-testament/WillAndTestament')),
        },
        {
          id: 'cv-and-covering-letter',
          title: 'Writing a CV and a Covering Letter',
          description: 'What a CV provides, how to present it, and the layout and language of a covering letter.',
          component: lazy(() => import('./term3/cv-and-covering-letter/CvAndCoveringLetter')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'synoptic-revision',
          title: 'Synoptic Revision',
          description: 'All genres, comprehension strategies, summary skills and evidence selection.',
          component: lazy(() => import('./term4/synoptic-revision/SynopticRevision')),
        },
        {
          id: 'examination-writing-practice',
          title: 'Examination Writing Practice',
          description: 'Letters, essays, planning, editing, timed responses and format recall.',
          component: lazy(() => import('./term4/examination-writing-practice/ExaminationWritingPractice')),
        },
        {
          id: 'grammar-literature-consolidation',
          title: 'Grammar and Literature Consolidation',
          description: 'Integrated language revision, literary themes, vocabulary and contextual questions.',
          component: lazy(() => import('./term4/grammar-literature-consolidation/GrammarLiteratureConsolidation')),
        },
        {
          id: 'letter-of-application',
          title: 'Writing a Letter of Application',
          description: 'The layout of a formal letter, what goes in each paragraph, and formal language.',
          component: lazy(() => import('./term4/letter-of-application/LetterOfApplication')),
        },
        {
          id: 'email',
          title: 'Writing an E-mail',
          description: 'The parts of an e-mail, the address, formal and informal register, and the writing process.',
          component: lazy(() => import('./term4/email/Email')),
        },
      ],
    },
  ],
};
