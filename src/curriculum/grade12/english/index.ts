import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const englishHLGrade12: Subject = {
  id: 'eng',
  title: 'English HL',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-prescribed-texts-orientation-t1',
          title: 'Prescribed Texts and Exam Orientation',
          description:
            'Start Grade 12 literature with prescribed-text expectations, exam terminology, quotation routines and paper awareness.',
          component: lazy(() => import('./term1/prescribed-texts-orientation/PrescribedTextsOrientation')),
        },
        {
          id: 'gr12-literary-essay-contextual-skills-t1',
          title: 'Literary Essay and Contextual Skills',
          description:
            'Develop thesis-driven literary essays and precise contextual responses using evidence, explanation and exam wording.',
          component: lazy(() => import('./term1/literary-essay-contextual-skills/LiteraryEssayContextualSkills')),
        },
        {
          id: 'gr12-paper3-essay-writing-t1',
          title: 'Paper 3 Essay Writing',
          description:
            'Prepare for narrative, discursive, reflective and argumentative essays through planning, structure and style choices.',
          component: lazy(() => import('./term1/paper3-essay-writing/Paper3EssayWriting')),
        },
        {
          id: 'gr12-paper1-language-practice-t1',
          title: 'Paper 1 Language Practice',
          description:
            'Strengthen comprehension, summary, visual literacy, editing and oral preparation for Paper 1 routines.',
          component: lazy(() => import('./term1/paper1-language-practice/Paper1LanguagePractice')),
        },
        {
          id: 'gr12-oral-paper4-tasks-t1',
          title: 'Paper 4 Orals: The Tasks and the 50 Marks',
          description:
            'What Paper 4 is, what each oral task assesses, when the tasks happen, and how the 50 marks add up.',
          component: lazy(() => import('./term1/oral-paper4-tasks/OralPaper4Tasks')),
        },
        {
          id: 'gr12-listening-comprehension-t1',
          title: 'Listening for Comprehension',
          description:
            'The listening process, kinds of listening, listening critically, and making notes.',
          component: lazy(() => import('./term1/listening-comprehension/ListeningComprehension')),
        },
        {
          id: 'gr12-prepared-unprepared-speeches-t1',
          title: 'Prepared and Unprepared Speeches',
          description:
            'Planning, structure and evidence, delivery, and the unprepared speech.',
          component: lazy(() => import('./term1/prepared-unprepared-speeches/PreparedUnpreparedSpeeches')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-prescribed-works-comparison-t2',
          title: 'Prescribed Works Comparison',
          description:
            'Compare themes, characters and techniques across drama, novel and poetry for deeper Paper 2 responses.',
          component: lazy(() => import('./term2/prescribed-works-comparison/PrescribedWorksComparison')),
        },
        {
          id: 'gr12-unseen-poetry-interpretation-t2',
          title: 'Unseen Poetry Interpretation',
          description:
            'Read unseen poems through speaker, tone, imagery, structure and comparison with confidence.',
          component: lazy(() => import('./term2/unseen-poetry-interpretation/UnseenPoetryInterpretation')),
        },
        {
          id: 'gr12-formal-persuasive-writing-t2',
          title: 'Formal and Persuasive Writing',
          description:
            'Write persuasive essays and transactional texts with audience awareness, structure, format and register control.',
          component: lazy(() => import('./term2/formal-persuasive-writing/FormalPersuasiveWriting')),
        },
        {
          id: 'gr12-midyear-exam-preparation-t2',
          title: 'Mid-Year Exam Preparation',
          description:
            'Prepare across Papers 1, 2 and 3 with timed routines, revision plans and exam-management strategies.',
          component: lazy(() => import('./term2/midyear-exam-preparation/MidyearExamPreparation')),
        },
        {
          id: 'gr12-interview-dialogue-t2',
          title: 'Interviews and Dialogues',
          description:
            'Planning an interview, the five phases, asking questions and listening, and dialogue.',
          component: lazy(() => import('./term2/interview-dialogue/InterviewDialogue')),
        },
        {
          id: 'gr12-discussion-debate-panel-t2',
          title: 'Discussions, Debates and Panels',
          description:
            'Informal discussion, debate terms and procedure, panel discussions and the chairperson.',
          component: lazy(() => import('./term2/discussion-debate-panel/DiscussionDebatePanel')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-literature-revision-synthesis-t3',
          title: 'Literature Revision and Synthesis',
          description:
            'Prepare for prelims by synthesising themes, quotations, essays and contextual knowledge across texts.',
          component: lazy(() => import('./term3/literature-revision-synthesis/LiteratureRevisionSynthesis')),
        },
        {
          id: 'gr12-advanced-writing-editing-t3',
          title: 'Advanced Writing and Editing',
          description:
            'Refine style, paragraph cohesion, tone, register and editing choices for high-level Paper 3 performance.',
          component: lazy(() => import('./term3/advanced-writing-editing/AdvancedWritingEditing')),
        },
        {
          id: 'gr12-oral-trial-preparation-t3',
          title: 'Oral Completion and Trial Preparation',
          description:
            'Complete SBA oral work while preparing strategically for listening tasks, speaking and trial exams.',
          component: lazy(() => import('./term3/oral-trial-preparation/OralTrialPreparation')),
        },
        {
          id: 'gr12-introducing-speaker-vote-of-thanks-t3',
          title: 'Introducing a Speaker and a Vote of Thanks',
          description:
            'Researching and introducing a speaker, a model introduction, and offering a vote of thanks.',
          component: lazy(() => import('./term3/introducing-speaker-vote-of-thanks/IntroducingSpeakerVoteOfThanks')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-final-nsc-paper-strategy-t4',
          title: 'Final NSC Paper Strategy',
          description:
            'Revise Paper 1, Paper 2 and Paper 3 demands with timing, routines and final-exam confidence.',
          component: lazy(() => import('./term4/final-nsc-paper-strategy/FinalNscPaperStrategy')),
        },
        {
          id: 'gr12-literature-consolidation-t4',
          title: 'Literature Consolidation',
          description:
            'Consolidate drama, novel and poetry through themes, quotations, unseen practice and integrated recall.',
          component: lazy(() => import('./term4/literature-consolidation/LiteratureConsolidation')),
        },
        {
          id: 'gr12-writing-recall-proofreading-t4',
          title: 'Writing Recall and Proofreading',
          description:
            'Secure essay and transactional format recall with editing checklists, proofreading and final writing control.',
          component: lazy(() => import('./term4/writing-recall-proofreading/WritingRecallProofreading')),
        },
      ],
    },
  ],
};
