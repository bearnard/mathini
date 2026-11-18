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
        {
          id: 'gr7-adjectives-comparison-t1',
          title: 'Adjectives and Degrees of Comparison',
          description: 'Attributive and predicative adjectives, positive, comparative and superlative, and irregular forms.',
          component: lazy(() => import('./term1/adjectives-comparison/AdjectivesComparison')),
        },
        {
          id: 'gr7-prefixes-suffixes-roots-t1',
          title: 'Prefixes, Suffixes and Roots',
          description: 'Roots, common prefixes and suffixes, and four Latin and Greek roots.',
          component: lazy(() => import('./term1/prefixes-suffixes-roots/PrefixesSuffixesRoots')),
        },
        {
          id: 'gr7-sentence-parts-clauses-t1',
          title: 'Sentence Parts and Clauses',
          description: 'Subject and predicate, main and dependent clauses, conjunctions and agreement.',
          component: lazy(() => import('./term1/sentence-parts-clauses/SentencePartsClauses')),
        },
        {
          id: 'gr7-multiple-meanings-t1',
          title: 'Words with More Than One Meaning',
          description: 'Homophones, homonyms, polysemy, literal and figurative meaning, and riddles.',
          component: lazy(() => import('./term1/multiple-meanings/MultipleMeanings')),
        },
        {
          id: 'gr7-spelling-dictionary-t1',
          title: 'Spelling Patterns, Rules and Dictionary Use',
          description: 'Plurals, adding endings, silent letters, South African spelling and using a dictionary.',
          component: lazy(() => import('./term1/spelling-dictionary/SpellingDictionary')),
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
        {
          id: 'gr7-active-passive-voice-t2',
          title: 'Active and Passive Voice',
          description: 'Transitive and intransitive verbs, the passive in three tenses and the present progressive passive.',
          component: lazy(() => import('./term2/active-passive-voice/ActivePassiveVoice')),
        },
        {
          id: 'gr7-prepositions-adverbs-t2',
          title: 'Prepositions and Adverbs',
          description: 'Prepositional phrases, fixed prepositions, the forms of adverbs and the words hard, hardly, late and lately.',
          component: lazy(() => import('./term2/prepositions-adverbs/PrepositionsAdverbs')),
        },
        {
          id: 'gr7-direct-reported-speech-t2',
          title: 'Direct and Reported Speech',
          description: 'Reported statements, questions and commands, and the changes of tense, time and pronoun.',
          component: lazy(() => import('./term2/direct-reported-speech/DirectReportedSpeech')),
        },
        {
          id: 'gr7-apostrophe-hyphen-quotation-t2',
          title: 'Apostrophe, Hyphen and Quotation Marks',
          description: 'The apostrophe of possession, contractions, the hyphen and quotation marks.',
          component: lazy(() => import('./term2/apostrophe-hyphen-quotation/ApostropheHyphenQuotation')),
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
        {
          id: 'gr7-clauses-t3',
          title: 'Noun, Adjectival, Adverbial and Relative Clauses',
          description: 'The three kinds of dependent clause, relative pronouns and adverbial conjunctions.',
          component: lazy(() => import('./term3/clauses/Clauses')),
        },
        {
          id: 'gr7-pronouns-t3',
          title: 'Pronouns',
          description: 'Personal, possessive, reflexive, demonstrative, interrogative, indefinite and relative pronouns.',
          component: lazy(() => import('./term3/pronouns/Pronouns')),
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
        {
          id: 'gr7-verbs-gerunds-t4',
          title: 'Verbs: Auxiliary, Finite and Non-finite, Gerunds',
          description: 'Finite and non-finite verbs, auxiliary verbs, participles and gerunds.',
          component: lazy(() => import('./term4/verbs-gerunds/VerbsGerunds')),
        },
        {
          id: 'gr7-bias-emotive-language-t4',
          title: 'Bias, Stereotypes and Emotive Language',
          description: 'Bias and prejudice, stereotypes, emotive and manipulative language and rhetorical questions.',
          component: lazy(() => import('./term4/bias-emotive-language/BiasEmotiveLanguage')),
        },
      ],
    },
  ],
};

