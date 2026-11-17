import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const afrikaansFALGrade9: Subject = {
  id: 'afr',
  title: 'Afrikaans FAL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'afr-advertising-visual-persuasion',
          title: 'Advertensies & Visuele Oortuiging',
          description: 'Target audiences, persuasive language, tone, and visual design impact.',
          component: lazy(() => import('./term1/advertising-visual-persuasion/AdvertisingVisualPersuasion')),
        },
        {
          id: 'afr-transactional-writing',
          title: 'Transaksionele Skryfwerk',
          description: 'Agendas, minutes, reports, and formal text structure and sequencing.',
          component: lazy(() => import('./term1/transactional-writing/TransactionalWriting')),
        },
        {
          id: 'afr-language-structures',
          title: 'Taalstrukture in Konteks',
          description: 'Plurals, adjectives, tenses, punctuation in literature and composition.',
          component: lazy(() => import('./term1/language-structures/LanguageStructures')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'afr-journalism-media',
          title: 'Joernalistiek & Mediatekste',
          description: 'News reports, magazine articles, interviews, fact vs opinion, key information.',
          component: lazy(() => import('./term2/journalism-media/JournalismMedia')),
        },
        {
          id: 'afr-formal-correspondence',
          title: 'Formele Korrespondensie',
          description: 'Formal letters, register awareness, audience-purpose matching, layout conventions.',
          component: lazy(() => import('./term2/formal-correspondence/FormalCorrespondence')),
        },
        {
          id: 'afr-grammar-reporting',
          title: 'Grammatika vir Verslagdoening',
          description: 'Direct/indirect speech, conjunctions, language editing, coherence.',
          component: lazy(() => import('./term2/grammar-reporting/GrammarReporting')),
        },
        {
          id: 'afr-diary-entry',
          title: 'Dagboekinskrywing',
          description: 'The opening, time words, the past with het, and feelings.',
          component: lazy(() => import('./term2/diary-entry/DiaryEntry')),
        },
        {
          id: 'afr-constitution-policy',
          title: 'Grondwet en Beleid',
          description: 'The parts of a constitution, moet and mag, and how a policy differs.',
          component: lazy(() => import('./term2/constitution-policy/ConstitutionPolicy')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'afr-literature-study',
          title: 'Literatuurstudie & Respons',
          description: 'Prescribed texts, themes, characters, literary features, textual evidence.',
          component: lazy(() => import('./term3/literature-study/LiteratureStudy')),
        },
        {
          id: 'afr-creative-personal-writing',
          title: 'Kreatiewe & Persoonlike Skryfwerk',
          description: 'Narrative, descriptive, reflective essays, reviews, planning and drafting.',
          component: lazy(() => import('./term3/creative-personal-writing/CreativePersonalWriting')),
        },
        {
          id: 'afr-sentence-structure-voice',
          title: 'Sinstruktuur & Stem',
          description: 'Sentence patterns, active/passive voice, editing, grammatical accuracy.',
          component: lazy(() => import('./term3/sentence-structure-voice/SentenceStructureVoice')),
        },
        {
          id: 'afr-will-testament',
          title: 'Testament',
          description: 'Key words, bemaak sentences, the order of a will, and exact language.',
          component: lazy(() => import('./term3/will-testament/WillTestament')),
        },
        {
          id: 'afr-cv-covering-letter',
          title: 'CV en Dekbrief',
          description: 'CV headings, referees, and the key sentences, layout and closing of a covering letter.',
          component: lazy(() => import('./term3/cv-covering-letter/CvCoveringLetter')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'afr-synoptic-revision',
          title: 'Sinoptiese Hersiening',
          description: 'Full curriculum review, mixed-genre revision, comprehension strategies, summary.',
          component: lazy(() => import('./term4/synoptic-revision/SynopticRevision')),
        },
        {
          id: 'afr-exam-writing-practice',
          title: 'Eksamen Skryfwerk Praktyk',
          description: 'Final essays, transactional texts, planning, proofreading under timed conditions.',
          component: lazy(() => import('./term4/exam-writing-practice/ExamWritingPractice')),
        },
        {
          id: 'afr-grammar-consolidation',
          title: 'Taalkonsolidasie',
          description: 'Year-end grammar review, punctuation, vocabulary, FET preparation.',
          component: lazy(() => import('./term4/grammar-consolidation/GrammarConsolidation')),
        },
        {
          id: 'afr-application-letter',
          title: 'Aansoekbrief',
          description: 'The opening, experience and qualities, the ending, and the formal u.',
          component: lazy(() => import('./term4/application-letter/ApplicationLetter')),
        },
        {
          id: 'afr-email',
          title: 'E-pos',
          description: 'The parts of an e-mail, a formal and an informal message, and choosing the register.',
          component: lazy(() => import('./term4/email/Email')),
        },
      ],
    },
  ],
};
