import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade10: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-literary-genres-text-features-t1',
          title: 'Literary Genres and Text Features',
          description: 'The novel, drama and poetry; the parts of a book; plot, setting, conflict, theme, mood and tone; terms for drama and poetry.',
          component: lazy(() => import('./term1/literary-genres-text-features/LiteraryGenresTextFeatures')),
        },
        {
          id: 'gr10-language-structures-conventions-t1',
          title: 'Register, Word Choice and Sentence Structure',
          description: 'Formal and informal register, denotation and connotation, clauses and sentence types, paragraphs and linking words, apostrophes and other punctuation.',
          component: lazy(() => import('./term1/language-structures-conventions/LanguageStructuresConventions')),
        },
        {
          id: 'gr10-essay-writing-process-t1',
          title: 'Writing an Essay: Narrative, Descriptive and Argumentative',
          description: 'The writing process from plan to presentation, narrative, descriptive and argumentative essays, and how the Grade 10 essay is marked.',
          component: lazy(() => import('./term1/essay-writing-process/EssayWritingProcess')),
        },
        {
          id: 'gr10-letters-cv-agenda-minutes-t1',
          title: 'Transactional Texts: Letters, CV, Agenda, Minutes and Obituary',
          description: 'Friendly and formal letters, curriculum vitae and covering letter, agenda and minutes of a meeting, and the obituary.',
          component: lazy(() => import('./term1/letters-cv-agenda-minutes/LettersCvAgendaMinutes')),
        },
        {
          id: 'gr10-comprehension-summary-t1',
          title: 'Comprehension and Summary',
          description: 'Reading strategies, inference, fact and opinion, writing a summary in your own words, and language structures in context.',
          component: lazy(() => import('./term1/comprehension-summary/ComprehensionSummary')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-novel-drama-study-t2',
          title: 'Studying a Novel or Drama',
          description: 'Plot structure, characterisation, stage directions, writing about literature with evidence, and the contextual question and literary essay.',
          component: lazy(() => import('./term2/novel-drama-study/NovelDramaStudy')),
        },
        {
          id: 'gr10-argument-formal-speech-t2',
          title: 'Argument and Formal Speech',
          description: 'Building an argument, persuasive devices, planning and delivering a speech, dialogue and interview, prepared and unprepared speech.',
          component: lazy(() => import('./term2/argument-formal-speech/ArgumentFormalSpeech')),
        },
        {
          id: 'gr10-visual-media-texts-t2',
          title: 'Visual and Media Texts, Reports and Reviews',
          description: 'Reading adverts and cartoons, fonts, headings and captions, and writing reports, reviews and newspaper and magazine articles.',
          component: lazy(() => import('./term2/visual-media-texts/VisualMediaTexts')),
        },
        {
          id: 'gr10-midyear-exam-preparation-t2',
          title: 'Mid-Year Examination Preparation',
          description: 'The three papers, their marks and time plans, how to choose questions in Paper 2, and the mistakes that cost marks.',
          component: lazy(() => import('./term2/midyear-exam-preparation/MidyearExamPreparation')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-poetry-seen-unseen-t3',
          title: 'Reading Poetry: Seen and Unseen',
          description: 'Imagery, figures of speech, sound devices, tone, mood and theme, how to approach an unseen poem, and how to answer poetry questions.',
          component: lazy(() => import('./term3/poetry-seen-unseen/PoetrySeenUnseen')),
        },
        {
          id: 'gr10-oral-communication-t3',
          title: 'Oral Communication: Speeches, Meetings and Discussion',
          description: 'Listening for comprehension, delivering a speech, debates, panels and discussions, meeting procedure, storytelling and introducing a speaker.',
          component: lazy(() => import('./term3/oral-communication/OralCommunication')),
        },
        {
          id: 'gr10-imaginative-transactional-t3',
          title: 'Imaginative and Transactional Writing',
          description: 'Choosing the right text, register, person and tense, a model formal letter, imaginative writing that shows, and planning, counting and editing.',
          component: lazy(() => import('./term3/imaginative-transactional/ImaginativeTransactional')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-paper1-revision-t4',
          title: 'Revision: Paper 1, Language in Context',
          description: 'Comprehension, summary and language structures in exam style, with the marks shown and time per mark.',
          component: lazy(() => import('./term4/paper1-revision/Paper1Revision')),
        },
        {
          id: 'gr10-paper2-literature-revision-t4',
          title: 'Revision: Paper 2, Literature',
          description: 'Seen and unseen poetry, a contextual question on a drama, and the literary essay, with the marks shown.',
          component: lazy(() => import('./term4/paper2-literature-revision/Paper2LiteratureRevision')),
        },
        {
          id: 'gr10-paper3-paper4-revision-t4',
          title: 'Revision: Paper 3 Writing and Paper 4 Oral',
          description: 'Choosing the essay, the signals of each transactional text, time plans and the oral tasks, with the marks shown.',
          component: lazy(() => import('./term4/paper3-paper4-revision/Paper3Paper4Revision')),
        },
      ],
    },
  ],
};
