import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan and manage a longer language project',
    image: {
      src: '/curriculum/grade7/eng/term3/project-language-refinement/diagram.webp',
      alt: 'learner planning a writing project and editing voice, punctuation and clauses',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 projects require sustained writing. Learners plan tasks, organise timelines, and draft sections before
          revising for language accuracy.
        </p>
      </div>
    ),
  },
  {
    title: 'Refine voice, punctuation and clauses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Editing includes active/passive voice control, punctuation correction, and clearer clause structure for more
          effective communication.
        </p>
      </div>
    ),
  },
  {
    title: 'Use checklists for deliberate editing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A focused checklist helps identify weak sentences, missing punctuation, and inconsistent grammar before final
          submission.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action is best at the start of a project-writing task?',
    options: ['Create a clear plan with steps and deadlines', 'Write the conclusion first and stop', 'Skip planning completely', 'Copy unrelated notes'],
    answer: 'Create a clear plan with steps and deadlines',
    explanation: 'Planning makes longer projects manageable.',
  },
  {
    prompt: 'Which sentence is in active voice?',
    options: [
      'The learners completed the poster project.',
      'The poster project was completed by the learners.',
      'The project was being completed.',
      'The project had been completed.',
    ],
    answer: 'The learners completed the poster project.',
    explanation: 'In active voice, the subject performs the action directly.',
  },
  {
    prompt: 'Which sentence is in passive voice?',
    options: [
      'The speech was prepared by the class.',
      'The class prepared the speech.',
      'The class prepares the speech.',
      'The class will prepare the speech.',
    ],
    answer: 'The speech was prepared by the class.',
    explanation: 'Passive voice places the object first and uses "by".',
  },
  {
    prompt: 'Choose the correctly punctuated sentence.',
    options: [
      'After editing, we checked every paragraph carefully.',
      'After editing we checked every paragraph carefully',
      'After editing we checked, every paragraph carefully',
      'After editing; we checked every paragraph carefully.',
    ],
    answer: 'After editing, we checked every paragraph carefully.',
    explanation: 'A comma after the introductory phrase is correct here.',
  },
  {
    prompt: 'A clause is best described as...',
    options: [
      'a group of words with a subject and a verb',
      'a single punctuation symbol',
      'a list of page numbers',
      'a heading at the top of an essay',
    ],
    answer: 'a group of words with a subject and a verb',
    explanation: 'Clauses contain core sentence elements.',
  },
  {
    prompt: 'Which edit improves sentence clarity?',
    options: [
      'Use one main idea per sentence and remove extra repetition.',
      'Add the same word many times in each line.',
      'Avoid punctuation throughout the paragraph.',
      'Mix unrelated tenses in one sentence.',
    ],
    answer: 'Use one main idea per sentence and remove extra repetition.',
    explanation: 'Clear sentence focus strengthens communication.',
  },
  {
    prompt: 'Why is a revision checklist useful?',
    options: [
      'It helps you check grammar, punctuation, and organisation systematically',
      'It guarantees marks without editing',
      'It replaces teacher feedback completely',
      'It shortens all writing tasks automatically',
    ],
    answer: 'It helps you check grammar, punctuation, and organisation systematically',
    explanation: 'Checklists support deliberate, complete editing.',
  },
  {
    prompt: 'Which sentence shows correct use of a subordinate clause?',
    options: [
      'Because we planned early, the project ran smoothly.',
      'Because we planned early the project ran smoothly because.',
      'Because planning early.',
      'Project ran smoothly because.',
    ],
    answer: 'Because we planned early, the project ran smoothly.',
    explanation: 'The subordinate clause is complete and linked correctly.',
  },
];

const ProjectLanguageRefinement = () => (
  <CapsSubjectTopic
    title="Project and Language Refinement"
    subtitle="Project planning with active-passive voice, punctuation and clause editing"
    learnSteps={learnSteps}
    task="gr7-project-language-refinement-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ProjectLanguageRefinement;
