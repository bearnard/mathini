import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'PAT phases and requirements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The CAPS IT <strong>Practical Assessment Task (PAT)</strong> is completed across the year in three phases. Each phase has specific deliverables.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Phase 1: Analysis & Design</strong>
            <p className="text-slate-600">Requirements document, system specification, data structure design, pseudocode or flowcharts, UI wireframes.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Phase 2: Development</strong>
            <p className="text-slate-600">Working coded solution built from the Phase 1 design. Regular progress screenshots recommended.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Phase 3: Testing & Documentation</strong>
            <p className="text-slate-600">Completed test plan with evidence, user manual, technical documentation, and final submission.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'User interface and usability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A good PAT solution includes a well-designed <strong>user interface (UI)</strong> that is easy and intuitive to use.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Usability principles</strong>
            <p className="text-slate-600">Clear labels, logical tab order, helpful error messages, consistent layout, and appropriate use of buttons, text boxes and menus.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Validation in UI</strong>
            <p className="text-slate-600">Input fields should validate data immediately and show user-friendly error messages — not raw error codes.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing your PAT solution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>test plan</strong> documents how each function was tested and whether it passed. Testing uses three categories of test data:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Normal data</strong>
            <p className="text-slate-600">Typical valid inputs. The program should process them correctly.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Boundary data</strong>
            <p className="text-slate-600">Values at the exact edge of the acceptable range (e.g. 0 and 100 for a percentage).</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Invalid data</strong>
            <p className="text-slate-600">Values outside the range or wrong type. The program should reject these gracefully.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Documentation standards',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A complete PAT submission includes thorough <strong>documentation</strong> that proves your solution is professional and well-considered.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">User manual</strong>
            <p className="text-slate-600">Step-by-step instructions with screenshots. Written in plain language for a non-technical user. Covers installation, main features, and troubleshooting.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Technical documentation</strong>
            <p className="text-slate-600">Class diagrams, data dictionary, module descriptions, algorithm explanations — for a developer who might maintain the system.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'In which PAT phase does a learner write the actual program code?',
    options: ['Phase 1: Analysis and Design', 'Phase 2: Development', 'Phase 3: Testing and Documentation', 'Phase 4: Deployment'],
    answer: 'Phase 2: Development',
    explanation: 'Phase 2 is the coding/development phase where the design from Phase 1 is implemented as a working program.',
  },
  {
    prompt: 'A learner tests their program using the input value 100 for a mark field that accepts 0–100. This is:',
    options: ['Normal data', 'Boundary data', 'Invalid data', 'Redundant data'],
    answer: 'Boundary data',
    explanation: 'Boundary data tests the exact edges of the acceptable range. 100 is the upper boundary for 0–100.',
  },
  {
    prompt: 'Which document provides step-by-step instructions written for a non-technical end user?',
    options: ['Technical specification', 'Class diagram', 'User manual', 'Test plan'],
    answer: 'User manual',
    explanation: 'The user manual guides non-technical users through the program\'s features using plain language and screenshots.',
  },
  {
    prompt: 'What should a test plan record for each test case?',
    options: [
      'Only the input values used',
      'The test number, input, expected output, actual output, and pass/fail result',
      'Only whether the test passed or failed',
      'The programmer\'s comments about the test',
    ],
    answer: 'The test number, input, expected output, actual output, and pass/fail result',
    explanation: 'A formal test plan documents each test fully so that results can be verified and repeated.',
  },
  {
    prompt: 'Which PAT phase requires a requirements document, pseudocode and UI wireframes?',
    options: ['Phase 2: Development', 'Phase 3: Testing', 'Phase 1: Analysis and Design', 'There is no such phase'],
    answer: 'Phase 1: Analysis and Design',
    explanation: 'Phase 1 covers analysis (understanding the problem) and design (planning the solution) before any code is written.',
  },
  {
    prompt: 'A form shows the error message "Exception: System.FormatException" when invalid data is entered. How could this be improved?',
    options: [
      'Remove all validation from the form',
      'Replace the raw error with a friendly, user-readable message like "Please enter a number"',
      'Disable the input field',
      'Only allow the program to be used by developers',
    ],
    answer: 'Replace the raw error with a friendly, user-readable message like "Please enter a number"',
    explanation: 'Good UI design shows clear, helpful error messages — not internal exception details that confuse non-technical users.',
  },
  {
    prompt: 'Why is it important to include screenshots as testing evidence in the PAT?',
    options: [
      'Screenshots increase the file size of the submission',
      'They provide visual proof that specific tests were run and show actual outputs',
      'They are required for marks only in Phase 1',
      'Screenshots replace the need for a test plan',
    ],
    answer: 'They provide visual proof that specific tests were run and show actual outputs',
    explanation: 'Screenshots confirm that tests were actually executed and allow the moderator to verify claimed results.',
  },
  {
    prompt: 'Technical documentation in the PAT is primarily written for:',
    options: [
      'The end user who will operate the system',
      'A developer who might need to understand, maintain or extend the system',
      'The school principal',
      'The Department of Basic Education',
    ],
    answer: 'A developer who might need to understand, maintain or extend the system',
    explanation: 'Technical docs (class diagrams, data dictionaries, module descriptions) target developers — not everyday users.',
  },
];

const PatCompletion = () => (
  <CapsSubjectTopic
    title="PAT Completion"
    subtitle="Completing the Practical Assessment Task with clean documentation"
    learnSteps={learnSteps}
    task="gr11-pat-completion-t4"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default PatCompletion;
