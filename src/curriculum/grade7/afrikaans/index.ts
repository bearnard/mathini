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
        {
          id: 'afr-informal-letter',
          title: 'Informele brief',
          description: 'The layout, what to write, friendly language and the closing.',
          component: lazy(() => import('./term1/informal-letter/InformalLetter')),
        },
        {
          id: 'afr-poem-dialogue',
          title: 'Gedig en dialoog',
          description: 'The parts of a poem, rhyming words, and the layout of a dialogue.',
          component: lazy(() => import('./term1/poem-dialogue/PoemDialogue')),
        },
        {
          id: 'afr-reading-aloud',
          title: 'Hardoplees',
          description: 'Reading aloud: preparing, voice, eye contact and practice.',
          component: lazy(() => import('./term1/reading-aloud/ReadingAloud')),
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
        {
          id: 'afr-instructions-directions',
          title: 'Instruksies en aanwysings',
          description: 'Commands, order words and giving directions.',
          component: lazy(() => import('./term2/instructions-directions/InstructionsDirections')),
        },
        {
          id: 'afr-advert-poster',
          title: 'Advertensie en plakkaat',
          description: 'The parts of an advertisement, words that persuade and the layout of a poster.',
          component: lazy(() => import('./term2/advert-poster/AdvertPoster')),
        },
        {
          id: 'afr-figures-poems',
          title: "Beeldspraak in gedigte",
          description: "Vergelyking, metafoor en personifikasie in 'n gedig.",
          component: lazy(() => import('./term2/figures-poems/FiguresPoems')),
        },
        {
          id: 'afr-listening-strategies',
          title: 'Luister met \'n doel',
          description: 'Listening with a purpose, notes and key words, fact, opinion and tone.',
          component: lazy(() => import('./term2/listening-strategies/ListeningStrategies')),
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
        {
          id: 'afr-forms-questionnaire',
          title: 'Vorms en vraelyste',
          description: 'Filling in a form, the commands on a form and answering a questionnaire.',
          component: lazy(() => import('./term3/forms-questionnaire/FormsQuestionnaire')),
        },
        {
          id: 'afr-notice-agenda-minutes',
          title: 'Kennisgewing, agenda en notule',
          description: 'A notice, an agenda and minutes.',
          component: lazy(() => import('./term3/notice-agenda-minutes/NoticeAgendaMinutes')),
        },
        {
          id: 'afr-newspaper-article-interview',
          title: 'Koerantberig en onderhoud',
          description: 'The parts of a newspaper report, the five questions and an interview.',
          component: lazy(() => import('./term3/newspaper-article-interview/NewspaperArticleInterview')),
        },
        {
          id: 'afr-sound-structure-poems',
          title: "Klank en struktuur in gedigte",
          description: "Rym, rymskema, alliterasie, herhaling, vers en refrein.",
          component: lazy(() => import('./term3/sound-structure-poems/SoundStructurePoems')),
        },
        {
          id: 'afr-debate',
          title: 'Debat',
          description: 'The motion, the two teams, building an argument, politeness and time.',
          component: lazy(() => import('./term3/debate/Debate')),
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
        {
          id: 'afr-diary-email-flyer',
          title: 'Dagboek, e-pos en strooibiljet',
          description: 'A diary entry, an e-mail and a flyer.',
          component: lazy(() => import('./term4/diary-email-flyer/DiaryEmailFlyer')),
        },
      ],
    },
  ],
};
