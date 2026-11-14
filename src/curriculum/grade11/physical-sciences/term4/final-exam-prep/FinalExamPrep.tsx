import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ps/term4/final-exam-prep/diagram.webp", alt: "Final Examination Preparation" },
    title: 'Paper 1 — Physics Exam Structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Paper 1</strong> (Physics) covers all Grade 11 physics topics. It typically consists of Section A (multiple-choice and short questions) and Section B (longer calculation questions).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Paper 1 Topics</strong>
            <p className="text-slate-600">Vectors and forces, Newton's laws, work/energy/power, momentum and impulse, vertical projectile motion, electrostatics, and electric circuits.</p>
            <div className="mt-3 space-y-2">
              <Formula block>{String.raw`F_{\text{net}} = ma`}</Formula>
              <Formula block>{String.raw`p = mv`}</Formula>
              <Formula block>{String.raw`V = IR`}</Formula>
            </div>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Section A Tips</strong>
            <p className="text-slate-600">Eliminate wrong options, show working even for short questions, and check units and significant figures.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 2 — Chemistry Exam Structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Paper 2</strong> (Chemistry) covers all Grade 11 chemistry topics. Questions range from definitions and drawings to full explanations and calculations.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Paper 2 Topics</strong>
            <p className="text-slate-600">Organic chemistry, intermolecular forces, redox reactions, and electrochemical cells.</p>
            <Formula block>{String.raw`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}`}</Formula>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Common Question Types</strong>
            <p className="text-slate-600">Draw structural formulae, name compounds, explain property differences, assign oxidation numbers, label cell diagrams, and calculate EMF.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Avoiding Common Calculation Errors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many marks are lost to avoidable errors. Recognise and eliminate these in your exam practice.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Physics Errors</strong>
            <p className="text-slate-600">Forgetting vector direction, using the wrong sign for gravity, not converting units, or mixing up series and parallel formulas.</p>
            <div className="mt-3 space-y-2">
              <Formula block>{String.raw`g = -9.8\text{ m·s}^{-2}`}</Formula>
              <Formula block>{String.raw`1\text{ mA} = 10^{-3}\text{ A}`}</Formula>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Chemistry Errors</strong>
            <p className="text-slate-600">Do not confuse anode and cathode polarity, oxidation-number exceptions, or the meanings of oxidising and reducing agents.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Time Management and Exam Strategy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective time management under exam conditions is a skill that must be practised.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Key Strategies:</p>
          <Formula block>{String.raw`90\text{ min} \div 100\text{ marks} \approx 0.9\text{ min/mark}`}</Formula>
          <p className="text-slate-600">• Attempt all questions — never leave blanks.</p>
          <p className="text-slate-600">• Do Section A first for quick marks; save longer calculations for later.</p>
          <p className="text-slate-600">• Always write the formula, then substitute, then calculate.</p>
          <p className="text-slate-600">• Check that your answer is physically reasonable.</p>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'What does CAPS stand for in the South African curriculum?',
    options: [
      'Curriculum and Assessment Policy Statement',
      'Core Academic Programme Standards',
      'Curriculum and Assessment Performance Standards',
      'Content and Assessment Policy Standards',
    ],
    answer: 'Curriculum and Assessment Policy Statement',
    explanation: 'CAPS stands for Curriculum and Assessment Policy Statement — the national curriculum framework for South African schools.',
  },
  {
    prompt: 'Which Paper covers organic chemistry in the Grade 11 Physical Sciences final exam?',
    options: ['Paper 1', 'Paper 2', 'Paper 3', 'Paper 1 and Paper 2'],
    answer: 'Paper 2',
    explanation: 'Paper 2 covers chemistry: organic chemistry, intermolecular forces, redox reactions, and electrochemical cells.',
  },
  {
    prompt: 'How should you always present a calculation in the exam?',
    options: ['Write only the final answer in the space', 'Formula, substitution, calculation, answer with units', 'Write only the formula and then the answer', 'Draw only a diagram of the situation'],
    answer: 'Formula, substitution, calculation, answer with units',
    explanation: 'Showing all working (formula, substitution, calculation, final answer with units) allows for method marks even if the final answer is wrong.',
  },
  {
    prompt: 'In a physics exam, you calculate a velocity of −15 m/s. This means:',
    options: ['The answer is wrong, as speed cannot be negative', 'The speed of the object is negative', 'The object moves in the chosen negative direction', 'The object is at rest at that moment'],
    answer: 'The object moves in the chosen negative direction',
    explanation: 'Negative velocity means the object moves in the direction defined as negative (e.g., downward if upward is positive). The speed is still 15 m/s.',
  },
  {
    prompt: 'You have 1.5 hours for a 100-mark paper. How much time should you allow per mark (approximately)?',
    options: ['0.5 minutes', '1 minute', '1.5 minutes', '2 minutes'],
    answer: '1 minute',
    explanation: '1.5 hours = 90 minutes for 100 marks → 90/100 = 0.9 minutes per mark ≈ about 1 minute per mark, leaving some time to review.',
  },
  {
    prompt: 'A kinetic energy calculation gives KE = −200 J. What should you conclude?',
    options: ['The object is moving backward', 'The answer is correct and must be left as it is', 'An error was made: kinetic energy cannot be negative', 'The object is slowing down'],
    answer: 'An error was made: kinetic energy cannot be negative',
    explanation: 'KE = ½mv² is always ≥ 0 because it involves v². A negative result indicates a calculation error — recheck your working.',
  },
  {
    prompt: 'Which of the following is covered in Paper 1 (Physics)?',
    options: ['IUPAC naming of organic compounds', 'Redox reactions', 'Electric circuits and Ohm\'s law', 'Intermolecular forces'],
    answer: 'Electric circuits and Ohm\'s law',
    explanation: 'Paper 1 covers physics topics including electric circuits, Ohm\'s law, electrostatics, mechanics, and projectile motion.',
  },
  {
    prompt: 'In an exam, you are unsure of a question. The best approach is to:',
    options: ['Skip the question completely', 'Write something: partial marks are given for correct steps', 'Guess and move on without showing any working', 'Leave it blank and return to it right at the end'],
    answer: 'Write something: partial marks are given for correct steps',
    explanation: 'In structured questions, method marks are awarded for correct steps. Never leave a blank — write the formula, attempt substitution, and show your reasoning.',
  },
];

const FinalExamPrep = () => (
  <CapsSubjectTopic
    title="Final Examination Preparation"
    subtitle="Paper structure, exam strategies and integrated Grade 11 practice"
    learnSteps={learnSteps}
    task="gr11-final-exam-prep-t4"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default FinalExamPrep;
