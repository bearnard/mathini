import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Master case study analysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Case studies present real-world scenarios requiring you to apply EMS concepts. Read carefully, identify 
          relevant concepts, support answers with evidence and justify decisions using economic principles.
        </p>
      </div>
    ),
  },
  {
    title: 'Review core concepts across all terms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Economic systems, financial recording, entrepreneurship, business planning, marketing, and responsibility 
          form an integrated whole. Year-end assessment tests your ability to connect these areas.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop exam strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Manage time effectively, read questions thoroughly, define key terms, support answers with examples and 
          show your reasoning. Practice under timed conditions to build confidence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'When analyzing a case study, what should you do first?',
    options: ['Read carefully and identify the key question or problem presented', 'Start writing immediately', 'Look for the answer without reading', 'Ignore context'],
    answer: 'Read carefully and identify the key question or problem presented',
    explanation: 'Understanding the question is the foundation of a good answer.',
  },
  {
    prompt: 'How should you structure an answer about business decisions?',
    options: ['State the decision, explain using relevant concepts and justify with evidence', 'Give opinions only', 'List facts without analysis', 'Ignore stakeholder impacts'],
    answer: 'State the decision, explain using relevant concepts and justify with evidence',
    explanation: 'Structured analysis shows deep understanding.',
  },
  {
    prompt: 'What type of question requires you to define a term?',
    options: ['Definition questions ask for meaning and context; answer with accuracy and examples', 'Any question word', 'Skip definition questions', 'Only use the textbook definition'],
    answer: 'Definition questions ask for meaning and context; answer with accuracy and examples',
    explanation: 'Good definitions show conceptual understanding.',
  },
  {
    prompt: 'How can you connect entrepreneurship to financial recording in an exam answer?',
    options: ['Explain that entrepreneurs must record transactions accurately to manage cash flow and prove viability', 'Keep them separate', 'Ignore the connection', 'They are unrelated'],
    answer: 'Explain that entrepreneurs must record transactions accurately to manage cash flow and prove viability',
    explanation: 'Integration shows comprehensive understanding.',
  },
  {
    prompt: 'What should you do if you do not know an answer immediately?',
    options: ['Move on and return later; often other questions trigger your memory', 'Panic and give up', 'Leave it blank', 'Guess without thinking'],
    answer: 'Move on and return later; often other questions trigger your memory',
    explanation: 'Strategic test-taking saves time and points.',
  },
  {
    prompt: 'How do you identify relevant concepts in a case study?',
    options: ['Look for keywords, business activities and economic decisions; match them to terms learned', 'Randomly select concepts', 'Use only recent topics', 'Any term is equally relevant'],
    answer: 'Look for keywords, business activities and economic decisions; match them to terms learned',
    explanation: 'Matching concepts to context shows analytical skill.',
  },
  {
    prompt: 'What exam skill involves supporting your answer with examples?',
    options: ['Providing specific instances or data that demonstrate your understanding of the concept', 'Filling space with words', 'Repeating the question', 'Using unrelated information'],
    answer: 'Providing specific instances or data that demonstrate your understanding of the concept',
    explanation: 'Examples make abstract concepts concrete and convincing.',
  },
  {
    prompt: 'How should you prepare for year-end assessment?',
    options: ['Review all topics, practice case studies, do timed tests and identify weak areas for focus', 'Cram the night before', 'Only study what you like', 'Skip practice tests'],
    answer: 'Review all topics, practice case studies, do timed tests and identify weak areas for focus',
    explanation: 'Strategic preparation builds confidence and performance.',
  },
];

const ExamRevisionPreparation = () => (
  <CapsSubjectTopic
    title="Exam Revision and Preparation"
    subtitle="Case study analysis, concept integration, exam strategies and timed practice"
    learnSteps={learnSteps}
    task="gr9-exam-revision-preparation-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default ExamRevisionPreparation;
