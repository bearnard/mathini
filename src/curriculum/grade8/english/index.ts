import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade8: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'brochures-visual-literacy',
          title: 'Brochures and Visual Literacy',
          description: 'Brochure format, audience, purpose, layout, skimming, scanning and inference.',
          component: lazy(() => import('./term1/brochures-visual-literacy/BrochuresVisualLiteracy')),
        },
        {
          id: 'poetry-close-reading',
          title: 'Poetry and Close Reading',
          description: 'Stanza, rhyme, imagery, tone, theme and close text interpretation.',
          component: lazy(() => import('./term1/poetry-close-reading/PoetryCloseReading')),
        },
        {
          id: 'language-structures-bias',
          title: 'Language Structures and Bias',
          description: 'Grammar-in-context with bias, prejudice and stereotype awareness.',
          component: lazy(() => import('./term1/language-structures-bias/LanguageStructuresBias')),
        },
        {
          id: 'gr8-friendly-letter-t1',
          title: 'Writing a Friendly Letter',
          description: "Purpose, layout, informal language, and writing a letter from a picture or other visual stimulus.",
          component: lazy(() => import('./term1/friendly-letter/FriendlyLetter')),
        },
        {
          id: 'gr8-investigative-report-t1',
          title: 'Writing an Investigative Report',
          description: "Asking a question, using a questionnaire, presenting findings, and writing a conclusion and recommendation.",
          component: lazy(() => import('./term1/investigative-report/InvestigativeReport')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'media-literary-texts',
          title: 'Media and Literary Texts',
          description: 'Compare reports, articles, folklore and drama through conflict and theme.',
          component: lazy(() => import('./term2/media-literary-texts/MediaLiteraryTexts')),
        },
        {
          id: 'formal-correspondence-reviews',
          title: 'Formal Correspondence and Reviews',
          description: 'Formal and informal letters, emails, reviews, register and audience.',
          component: lazy(() => import('./term2/formal-correspondence-reviews/FormalCorrespondenceReviews')),
        },
        {
          id: 'language-report-dialogue',
          title: 'Language for Report and Dialogue',
          description: 'Perfect and future tense, conjunctions, speech conversion and voice.',
          component: lazy(() => import('./term2/language-report-dialogue/LanguageReportDialogue')),
        },
        {
          id: 'gr8-instructions-directions-t2',
          title: 'Instruction Texts and Giving Directions',
          description: "Writing clear instructions with numbered steps, and giving directions with landmarks.",
          component: lazy(() => import('./term2/instructions-directions/InstructionsDirections')),
        },
        {
          id: 'gr8-dialogue-and-interview-t2',
          title: 'Writing a Dialogue and a Written Interview',
          description: "The format of a dialogue, how to use stage directions, and the questions and answers of a written interview.",
          component: lazy(() => import('./term2/dialogue-and-interview/DialogueAndInterview')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'creative-writing-project',
          title: 'Creative Writing Project',
          description: 'Research, drafting, peer review, revision and presentation.',
          component: lazy(() => import('./term3/creative-writing-project/CreativeWritingProject')),
        },
        {
          id: 'short-stories-narrative-technique',
          title: 'Short Stories and Narrative Technique',
          description: 'Narrator, sequencing, conflict, climax and characterisation.',
          component: lazy(
            () => import('./term3/short-stories-narrative-technique/ShortStoriesNarrativeTechnique'),
          ),
        },
        {
          id: 'essay-writing-style',
          title: 'Essay Writing and Style',
          description: 'Narrative and reflective essays, coherence, style and editing.',
          component: lazy(() => import('./term3/essay-writing-style/EssayWritingStyle')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'revision-oral-completion',
          title: 'Revision and Oral Completion',
          description: 'Mixed-genre revision, oral reflection and exam strategy.',
          component: lazy(() => import('./term4/revision-oral-completion/RevisionOralCompletion')),
        },
        {
          id: 'examination-writing',
          title: 'Examination Writing',
          description: 'Timed essay and transactional writing with planning and editing.',
          component: lazy(() => import('./term4/examination-writing/ExaminationWriting')),
        },
        {
          id: 'language-literature-consolidation',
          title: 'Language and Literature Consolidation',
          description: 'Integrated comprehension, literature response, grammar and summary.',
          component: lazy(
            () => import('./term4/language-literature-consolidation/LanguageLiteratureConsolidation'),
          ),
        },
      ],
    },
  ],
};
