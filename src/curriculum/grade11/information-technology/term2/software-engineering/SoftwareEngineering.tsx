import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term2/software-engineering/diagram.webp", alt: "Software Engineering" },
    title: 'The Software Development Life Cycle (SDLC)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>SDLC</strong> is a structured process for planning, creating, testing and maintaining software.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">1. Requirements Analysis</strong>
            <p className="text-slate-600">Understand what the client needs. Produce a requirements specification document.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">2. System Design</strong>
            <p className="text-slate-600">Plan the solution: data structures, algorithms, UI layout, module breakdown.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">3. Implementation</strong>
            <p className="text-slate-600">Write the actual code using the chosen programming language.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">4. Testing</strong>
            <p className="text-slate-600">Verify that the software works correctly and meets requirements.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">5. Deployment</strong>
            <p className="text-slate-600">Release the software to end users.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">6. Maintenance</strong>
            <p className="text-slate-600">Fix bugs, add features and adapt the software as needs change over time.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Modular design',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Modular design</strong> breaks a system into independent modules, each with a single, well-defined purpose (the <em>single responsibility principle</em>).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Benefits</strong>
            <p className="text-slate-600">Easier to develop in teams, test in isolation, maintain, and reuse in other projects.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Module coupling</strong>
            <p className="text-slate-600">Aim for <em>low coupling</em> (modules independent of each other) and <em>high cohesion</em> (related code grouped together).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of testing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Testing verifies that software behaves as expected. There are several levels:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Unit testing</strong>
            <p className="text-slate-600">Test individual methods or functions in isolation.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Integration testing</strong>
            <p className="text-slate-600">Test that modules work correctly when combined.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">System testing</strong>
            <p className="text-slate-600">Test the complete application against the original requirements.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Testing should include normal, boundary and invalid data inputs.</p>
      </div>
    ),
  },
  {
    title: 'Documentation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good documentation is essential at every SDLC phase.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Technical documentation</strong>
            <p className="text-slate-600">System architecture, data structures, module descriptions, algorithm explanations — for developers.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">User documentation</strong>
            <p className="text-slate-600">User manual with step-by-step instructions in plain language — for end users who may not be technical.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Version control (e.g. Git) tracks changes to code over time and enables collaboration.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'During which SDLC phase do developers write the actual program code?',
    options: ['Requirements Analysis', 'System Design', 'Implementation', 'Maintenance'],
    answer: 'Implementation',
    explanation: 'The Implementation phase is where developers translate the design into working code.',
  },
  {
    prompt: 'A client reports a bug two years after software was released. Fixing it falls under which SDLC phase?',
    options: ['Requirements Analysis', 'Testing', 'Deployment', 'Maintenance'],
    answer: 'Maintenance',
    explanation: 'Post-release bug fixes, updates and enhancements all fall under the Maintenance phase.',
  },
  {
    prompt: 'What does "low coupling" mean in modular software design?',
    options: [
      'Modules are tightly dependent on each other',
      'Modules are largely independent and changes in one do not force changes in others',
      'The software has very few modules',
      'All modules share the same variables',
    ],
    answer: 'Modules are largely independent and changes in one do not force changes in others',
    explanation: 'Low coupling reduces the ripple effect of changes and makes the system easier to maintain.',
  },
  {
    prompt: 'Which type of testing checks that individual functions work correctly in isolation?',
    options: ['System testing', 'Integration testing', 'Unit testing', 'Acceptance testing'],
    answer: 'Unit testing',
    explanation: 'Unit tests focus on the smallest testable unit (a single function or method) in isolation.',
  },
  {
    prompt: 'A test plan includes a test with input=−5 for a field that only accepts values 1–100. This is an example of:',
    options: [
      'Normal data testing',
      'Boundary data testing',
      'Invalid data testing',
      'Integration testing',
    ],
    answer: 'Invalid data testing',
    explanation: 'Invalid (erroneous) data lies completely outside the acceptable range. −5 is not in 1–100.',
  },
  {
    prompt: 'What is the main purpose of a requirements specification document?',
    options: [
      'To list all bugs found during testing',
      'To define what the software must do before development begins',
      'To describe the programming language to use',
      'To document the final user manual',
    ],
    answer: 'To define what the software must do before development begins',
    explanation: 'The requirements specification captures client needs as measurable, testable requirements guiding the entire SDLC.',
  },
  {
    prompt: 'Which SDLC phase involves releasing the completed software to end users?',
    options: ['Testing', 'Implementation', 'Deployment', 'Design'],
    answer: 'Deployment',
    explanation: 'Deployment (or release) is the phase where the product is made available to its intended users.',
  },
  {
    prompt: 'User documentation differs from technical documentation because it is written:',
    options: [
      'In code comments rather than prose',
      'For developers who understand the system architecture',
      'In plain language for end users who may not be technically skilled',
      'Only during the design phase',
    ],
    answer: 'In plain language for end users who may not be technically skilled',
    explanation: 'User documentation (e.g. a user manual) must be accessible to non-technical readers who just need to use the software.',
  },
  {
    prompt: 'What is the benefit of using version control (e.g. Git) during software development?',
    options: [
      'It automatically fixes bugs',
      'It tracks all changes to code, allowing rollbacks and team collaboration',
      'It compiles code faster',
      'It replaces the need for documentation',
    ],
    answer: 'It tracks all changes to code, allowing rollbacks and team collaboration',
    explanation: 'Version control records a full history of code changes. Teams can collaborate, compare versions, and revert mistakes.',
  },
  {
    prompt: 'A software team tests the complete application against the original requirements. This is called:',
    options: ['Unit testing', 'Integration testing', 'System testing', 'Code review'],
    answer: 'System testing',
    explanation: 'System testing evaluates the entire application end-to-end to verify it meets the requirements specification.',
  },
];

const SoftwareEngineering = () => (
  <CapsSubjectTopic
    title="Software Engineering"
    subtitle="Applying systematic approaches to software development"
    learnSteps={learnSteps}
    task="gr11-software-engineering-t2"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default SoftwareEngineering;
