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
    options: ['Read carefully and identify the key question or problem presented', 'Start writing at once, so that no time is lost on reading', 'Look for the answer without reading the case study first', 'Ignore the context and answer from the notes you learned'],
    answer: 'Read carefully and identify the key question or problem presented',
    explanation: 'Understanding the question is the foundation of a good answer.',
  },
  {
    prompt: 'How should you structure an answer about business decisions?',
    options: ['State the decision, explain using relevant concepts and justify with evidence', 'Give your opinions only, since the marker wants your view', 'List facts without analysis, so that all the points are covered', 'Describe the people involved and skip the concepts learned'],
    answer: 'State the decision, explain using relevant concepts and justify with evidence',
    explanation: 'Structured analysis shows deep understanding.',
  },
  {
    prompt: 'What type of question requires you to define a term?',
    options: ['Definition questions ask for the meaning of a term, with examples', 'Any question that begins with the word "why" or "how"', 'A question that asks you to work out a sum or a figure', 'A question that asks you to give an opinion on a case study'],
    answer: 'Definition questions ask for the meaning of a term, with examples',
    explanation: 'Good definitions show conceptual understanding.',
  },
  {
    prompt: 'How can you connect entrepreneurship to financial recording in an exam answer?',
    options: ['Show that entrepreneurs must record sales accurately to manage cash and prove viability', 'Keep them separate, since each belongs to a different subject', 'Ignore the connection, as exam answers should be short', 'Say they are unrelated, as record-keeping only concerns the tax office'],
    answer: 'Show that entrepreneurs must record sales accurately to manage cash and prove viability',
    explanation: 'Integration shows comprehensive understanding.',
  },
  {
    prompt: 'What should you do if you do not know an answer immediately?',
    options: ['Move on and come back later; other questions may jog your memory', 'Panic and give up, since there is no time to think about it', 'Leave it blank and never come back to the question again', 'Guess a long answer at once and hope some of it earns marks'],
    answer: 'Move on and come back later; other questions may jog your memory',
    explanation: 'Strategic test-taking saves time and points.',
  },
  {
    prompt: 'How do you identify relevant concepts in a case study?',
    options: ['Look for keywords and business activities, then match them to terms learned', 'Choose the longest terms in your notes, as they score best', 'Use only the topics learned recently, and skip the older ones', 'Treat any term as equally relevant to every case study'],
    answer: 'Look for keywords and business activities, then match them to terms learned',
    explanation: 'Matching concepts to context shows analytical skill.',
  },
  {
    prompt: 'What exam skill involves supporting your answer with examples?',
    options: ['Providing specific instances or data that demonstrate your understanding of the concept', 'Filling the page with extra words so that the answer looks long', 'Repeating the question in different words at the start', 'Quoting facts from other subjects that do not fit the question'],
    answer: 'Providing specific instances or data that demonstrate your understanding of the concept',
    explanation: 'Examples make abstract concepts concrete and convincing.',
  },
  {
    prompt: 'How should you prepare for year-end assessment?',
    options: ['Review all topics, do practice cases and timed tests, and fix weak areas', 'Cram the night before, since the work is fresh then', 'Study only the topics you enjoy, and skip the weak areas', 'Skip the practice tests and read the notes again instead'],
    answer: 'Review all topics, do practice cases and timed tests, and fix weak areas',
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
