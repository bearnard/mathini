import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term4/recruitment-selection-contracts/diagram.webp", alt: "Recruitment, Selection and Contracts" },
    title: 'Internal vs external recruitment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When a vacancy arises, HR must decide whether to <strong>recruit internally</strong> (from within) or <strong>externally</strong> (from outside the business).
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Internal recruitment</strong>
            <p className="text-slate-600 mb-1">Promotion, transfers or redeployment of existing staff.</p>
            <p className="text-green-700 text-sm">✓ Cheaper, motivates staff, preserves culture</p>
            <p className="text-red-700 text-sm">✗ Limited new ideas, creates another vacancy</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">External recruitment</strong>
            <p className="text-slate-600 mb-1">Job adverts, recruitment agencies, career fairs, social media.</p>
            <p className="text-green-700 text-sm">✓ Fresh talent and new ideas</p>
            <p className="text-red-700 text-sm">✗ Costly, time-consuming, cultural fit risk</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The selection process',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Selection is the process of choosing the <strong>best candidate</strong> from those who applied.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Selection steps:</p>
          <ol className="list-decimal list-inside text-slate-700 space-y-1">
            <li>Receive and sort applications</li>
            <li>Shortlist candidates who meet the minimum requirements</li>
            <li>Conduct tests (aptitude, psychometric, practical)</li>
            <li>Interview shortlisted candidates</li>
            <li>Check references and verify qualifications</li>
            <li>Appoint the most suitable candidate</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of employment contracts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South African labour law recognises several <strong>types of employment contracts</strong>, each suited to different business needs.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Permanent contract</strong>
            <p className="text-slate-600">No fixed end date. Continuous employment with all BCEA rights and benefits.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Fixed-term contract</strong>
            <p className="text-slate-600">Ends on a specified date or when a project is complete. Common in project-based industries.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Part-time contract</strong>
            <p className="text-slate-600">Fewer hours than full-time. Proportional benefits apply under the BCEA.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Labour law and fair HR practices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South African HR must comply with key <strong>labour legislation</strong> to ensure fair treatment of employees.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Key legislation to know:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Labour Relations Act (LRA):</strong> governs collective bargaining, dismissal and disputes</li>
            <li><strong>Basic Conditions of Employment Act (BCEA):</strong> sets minimum standards for working hours, leave, and pay</li>
            <li><strong>Employment Equity Act (EEA):</strong> promotes diversity and prohibits unfair discrimination</li>
            <li><strong>Skills Development Act (SDA):</strong> requires employers to invest in staff training</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'A company promotes its warehouse supervisor to floor manager to fill a vacancy. This is an example of:',
    options: ['External recruitment', 'Internal recruitment', 'Fixed-term appointment', 'Outsourcing'],
    answer: 'Internal recruitment',
    explanation: 'Promoting an existing employee to fill a vacancy is internal recruitment — it costs less and motivates staff but may create another vacancy below.',
  },
  {
    prompt: 'Which of the following is a DISADVANTAGE of internal recruitment?',
    options: [
      'Expensive advertising costs',
      'Cultural fit is uncertain',
      'It limits the pool to existing staff and creates another vacancy',
      'Training time is very long',
    ],
    answer: 'It limits the pool to existing staff and creates another vacancy',
    explanation: 'Internal recruitment restricts the talent pool to current employees and often creates a lower-level vacancy that also needs to be filled.',
  },
  {
    prompt: 'What is the purpose of checking references during the selection process?',
    options: [
      'To determine the salary',
      'To verify a candidate\'s qualifications and work history',
      'To conduct a psychometric test',
      'To negotiate the contract terms',
    ],
    answer: 'To verify a candidate\'s qualifications and work history',
    explanation: 'Reference checks confirm that the candidate\'s claimed qualifications and previous work experience are accurate and genuine.',
  },
  {
    prompt: 'An employee is hired to work for a specific 6-month project. Which contract type applies?',
    options: ['Permanent contract', 'Part-time contract', 'Fixed-term contract', 'Casual contract'],
    answer: 'Fixed-term contract',
    explanation: 'A fixed-term contract specifies an end date or completion event — ideal for project-based, seasonal or temporary work.',
  },
  {
    prompt: 'Which South African law sets the MINIMUM standards for working hours, overtime, and annual leave?',
    options: ['Labour Relations Act', 'Employment Equity Act', 'Basic Conditions of Employment Act', 'Skills Development Act'],
    answer: 'Basic Conditions of Employment Act',
    explanation: 'The BCEA establishes minimum employment conditions including working hours (max 45 per week), leave entitlements, and overtime pay rules.',
  },
  {
    prompt: 'Shortlisting candidates means:',
    options: [
      'Advertising the job to all candidates',
      'Selecting only those who meet minimum requirements for further consideration',
      'Making the final appointment',
      'Conducting reference checks',
    ],
    answer: 'Selecting only those who meet minimum requirements for further consideration',
    explanation: 'Shortlisting filters the applications down to candidates who meet the essential criteria, making the interview and selection process manageable.',
  },
  {
    prompt: 'The Employment Equity Act PRIMARILY aims to:',
    options: [
      'Set minimum wages for all workers',
      'Regulate trade unions and strikes',
      'Promote diversity and eliminate unfair discrimination in the workplace',
      'Define working hours and leave',
    ],
    answer: 'Promote diversity and eliminate unfair discrimination in the workplace',
    explanation: 'The EEA requires employers to implement affirmative action measures and prohibits discrimination on grounds of race, gender, disability and other listed characteristics.',
  },
  {
    prompt: 'A part-time cashier works 20 hours a week. Under the BCEA, she is entitled to:',
    options: [
      'No leave benefits',
      'Full-time benefits only',
      'Proportional leave and other benefits relative to her working hours',
      'Benefits only after 5 years of service',
    ],
    answer: 'Proportional leave and other benefits relative to her working hours',
    explanation: 'Part-time employees are entitled to the same rights as full-time workers but on a proportional basis — fewer hours means proportionally fewer leave days.',
  },
  {
    prompt: 'Which step in the selection process DIRECTLY follows shortlisting?',
    options: ['Receiving applications', 'Advertising the vacancy', 'Conducting tests and interviews', 'Signing the employment contract'],
    answer: 'Conducting tests and interviews',
    explanation: 'After shortlisting, candidates are invited to complete tests and attend interviews to assess their suitability in more depth.',
  },
];

const RecruitmentSelectionContracts = () => (
  <CapsSubjectTopic
    title="Recruitment, Selection and Contracts"
    subtitle="HR processes for finding and appointing the right people"
    learnSteps={learnSteps}
    task="gr11-recruitment-selection-contracts-t4"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default RecruitmentSelectionContracts;
