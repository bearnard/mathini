import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term2/creative-thinking-problem-solving/diagram.webp", alt: "Creative Thinking and Problem Solving" },
    title: 'What is creative thinking?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Creative thinking</strong> means generating new, useful ideas by looking at problems from different angles — a key skill for business managers and entrepreneurs.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Brainstorming</strong>
            <p className="text-slate-600">Generate as many ideas as possible without criticism. Quantity before quality.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mind mapping</strong>
            <p className="text-slate-600">Start with a central idea and branch out with related concepts in a visual web.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Lateral thinking</strong>
            <p className="text-slate-600">Deliberately challenge assumptions to find unexpected solutions (Edward de Bono's concept).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The problem-solving cycle',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Businesses follow a structured <strong>problem-solving cycle</strong> to move from identifying a problem to implementing a solution.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li><strong>Identify and define</strong> the problem clearly</li>
            <li><strong>Gather information</strong> relevant to the problem</li>
            <li><strong>Analyse</strong> the information and causes</li>
            <li><strong>Generate solutions</strong> (use brainstorming, mind mapping, etc.)</li>
            <li><strong>Select</strong> the best solution</li>
            <li><strong>Implement</strong> the chosen solution</li>
            <li><strong>Evaluate</strong> whether the solution worked</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Obstacles to creative thinking',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Several barriers prevent people and businesses from thinking creatively.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Fear of failure</strong>
            <p className="text-slate-600">Employees avoid new ideas if they fear punishment for mistakes.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Fixed mindset</strong>
            <p className="text-slate-600">Believing "we've always done it this way" blocks innovation.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Lack of resources</strong>
            <p className="text-slate-600">No time, money or support to explore and test new ideas.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Autocratic leadership</strong>
            <p className="text-slate-600">Top-down management that does not welcome input or suggestions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Applying creative thinking in business scenarios',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In exam questions you may be asked to <strong>apply</strong> a problem-solving technique or <strong>recommend</strong> a creative approach for a given business problem.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Example approach:</p>
          <p className="text-slate-700">A bakery is losing sales to a new competitor. Using <strong>brainstorming</strong>, staff suggest: adding delivery services, expanding the product range, offering loyalty cards, opening earlier. The team then uses the problem-solving cycle to select and implement the best idea.</p>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'During a brainstorming session, the rule is that no idea should be:',
    options: ['Written down', 'Shared with others', 'Criticised or dismissed immediately', 'Related to the topic'],
    answer: 'Criticised or dismissed immediately',
    explanation: 'Brainstorming works by generating as many ideas as possible without judgment — criticism blocks creativity and discourages participation.',
  },
  {
    prompt: 'Which creative thinking technique was developed by Edward de Bono?',
    options: ['Brainstorming', 'Mind mapping', 'Lateral thinking', 'SWOT analysis'],
    answer: 'Lateral thinking',
    explanation: 'Edward de Bono developed lateral thinking — deliberately breaking patterns and challenging assumptions to reach creative solutions.',
  },
  {
    prompt: 'What is the CORRECT first step in the problem-solving cycle?',
    options: ['Generate solutions', 'Implement the solution', 'Identify and define the problem', 'Evaluate the outcome'],
    answer: 'Identify and define the problem',
    explanation: 'You cannot solve a problem effectively without first clearly identifying and defining exactly what the problem is.',
  },
  {
    prompt: 'A manager asks each team member to contribute ideas about reducing costs, starting from a central concept. Which technique is being used?',
    options: ['Lateral thinking', 'Mind mapping', 'Brainstorming', 'PESTLE analysis'],
    answer: 'Mind mapping',
    explanation: 'Mind mapping starts from a central concept and branches out into related ideas — it visually organises thinking around a core topic.',
  },
  {
    prompt: 'Which obstacle to creative thinking occurs when employees fear being punished for suggesting unusual ideas?',
    options: ['Lack of resources', 'Fixed mindset', 'Fear of failure', 'Autocratic leadership'],
    answer: 'Fear of failure',
    explanation: 'Fear of failure stops employees from sharing creative ideas because they worry their suggestions will be ridiculed or lead to negative consequences.',
  },
  {
    prompt: 'After selecting the best solution in the problem-solving cycle, the NEXT step is to:',
    options: ['Gather more information', 'Identify the problem again', 'Implement the solution', 'Evaluate whether it worked'],
    answer: 'Implement the solution',
    explanation: 'The cycle flows from selecting the best solution directly to implementing it — then evaluation follows.',
  },
  {
    prompt: 'A business manager challenges the team to find a completely new way to deliver customer service, ignoring all existing processes. This is an example of:',
    options: ['Brainstorming', 'Lateral thinking', 'Mind mapping', 'Cost-benefit analysis'],
    answer: 'Lateral thinking',
    explanation: 'Lateral thinking involves deliberately setting aside existing assumptions and processes to discover truly novel solutions.',
  },
  {
    prompt: 'Which type of leadership style is MOST likely to block creative thinking in a team?',
    options: ['Democratic leadership', 'Laissez-faire leadership', 'Autocratic leadership', 'Transformational leadership'],
    answer: 'Autocratic leadership',
    explanation: 'Autocratic leaders make all decisions themselves and rarely invite input from staff, which discourages creative thinking and innovation.',
  },
  {
    prompt: 'In the problem-solving cycle, what happens AFTER implementing the solution?',
    options: ['Generate more solutions', 'Identify the problem again', 'Evaluate whether the solution worked', 'Gather information'],
    answer: 'Evaluate whether the solution worked',
    explanation: 'Evaluation is the final step — the business checks whether the implemented solution actually solved the problem, and learns from the process.',
  },
];

const CreativeThinkingProblemSolving = () => (
  <CapsSubjectTopic
    title="Creative Thinking and Problem Solving"
    subtitle="Tools and techniques for generating solutions in business"
    learnSteps={learnSteps}
    task="gr11-creative-thinking-problem-solving-t2"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default CreativeThinkingProblemSolving;
