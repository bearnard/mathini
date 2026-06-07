import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term4/induction-salary-benefits/diagram.webp", alt: "Induction, Salary and Benefits" },
    title: 'The induction process',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Induction</strong> is the process of welcoming and orienting a new employee so they become productive quickly and feel part of the organisation.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Induction steps:</p>
          <ol className="list-decimal list-inside text-slate-700 space-y-1">
            <li>Welcome and introductions — meet the team and management</li>
            <li>Orientation tour — show the workplace layout and facilities</li>
            <li>Policies and procedures — explain company rules, code of conduct and safety</li>
            <li>Role-specific training — job duties, systems and tools</li>
            <li>Mentorship — assign a buddy or mentor for ongoing support</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'How salaries are determined',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Businesses use several methods to determine <strong>fair and competitive salaries</strong> for employees.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Job grading / evaluation</strong>
            <p className="text-slate-600">Jobs are scored based on skills, responsibility, effort and working conditions — higher grade = higher pay.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Market / salary surveys</strong>
            <p className="text-slate-600">Compare what similar roles pay in the industry to stay competitive and attract talent.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">BCEA minimums</strong>
            <p className="text-slate-600">The National Minimum Wage Act sets a floor — no employee may be paid below this amount.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Collective bargaining</strong>
            <p className="text-slate-600">Trade unions negotiate wages with employers — bargaining council agreements set sector-wide rates.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Employee benefits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Benefits</strong> are non-wage rewards that form part of a total remuneration package, improving staff attraction and retention.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Medical aid</strong>
            <p className="text-slate-600">Employer contributes to the employee's healthcare costs.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Pension / provident fund</strong>
            <p className="text-slate-600">Retirement savings contributions — often matched by the employer.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Annual bonus</strong>
            <p className="text-slate-600">Performance or 13th cheque bonus to reward good work.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Leave benefits</strong>
            <p className="text-slate-600">Annual, sick, maternity and family responsibility leave.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Transport allowance</strong>
            <p className="text-slate-600">Subsidy to help employees with commuting costs.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Training and development</strong>
            <p className="text-slate-600">Funded courses and skills development to grow the employee's career.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Why remuneration matters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A fair and competitive <strong>remuneration package</strong> (salary + benefits) is critical for attracting, motivating and retaining talented employees.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Why it matters:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Attracts the right calibre of candidates during recruitment</li>
            <li>Motivates employees to perform at their best</li>
            <li>Reduces staff turnover and the costly cycle of rehiring</li>
            <li>Ensures compliance with the National Minimum Wage Act and BCEA</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">Total remuneration = basic salary + benefits + incentives (bonuses, commission).</p>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'What is the PRIMARY purpose of an induction programme?',
    options: [
      'To assess whether the employee deserves a salary increase',
      'To help a new employee settle in, understand the organisation and become productive quickly',
      'To evaluate the employee\'s performance after 6 months',
      'To train the employee for promotion',
    ],
    answer: 'To help a new employee settle in, understand the organisation and become productive quickly',
    explanation: 'Induction introduces new staff to the workplace culture, procedures, colleagues and role-specific requirements so they feel welcome and can contribute sooner.',
  },
  {
    prompt: 'Thabo\'s job is evaluated based on the level of skill, responsibility and effort required. His salary is then set accordingly. Which salary determination method is this?',
    options: ['Collective bargaining', 'Market survey', 'Job grading / evaluation', 'National Minimum Wage'],
    answer: 'Job grading / evaluation',
    explanation: 'Job grading evaluates each position based on factors like skill, effort and responsibility, then assigns a salary band to that grade.',
  },
  {
    prompt: 'A trade union negotiates a wage increase for its members with the employer. Which salary determination method is this?',
    options: ['Job grading', 'Market survey', 'Collective bargaining', 'Incentive pay'],
    answer: 'Collective bargaining',
    explanation: 'Collective bargaining is the negotiation process between trade unions and employers to agree on wages, benefits and working conditions for a group of employees.',
  },
  {
    prompt: 'Which benefit involves the employer contributing towards an employee\'s medical costs?',
    options: ['Pension fund', 'Annual bonus', 'Medical aid', 'Transport allowance'],
    answer: 'Medical aid',
    explanation: 'Medical aid is a benefit where the employer partially or fully pays the employee\'s medical scheme contributions.',
  },
  {
    prompt: 'Which step during induction involves explaining the company\'s code of conduct and safety procedures to a new employee?',
    options: ['Welcome and introductions', 'Orientation tour', 'Policies and procedures', 'Role-specific training'],
    answer: 'Policies and procedures',
    explanation: 'The policies and procedures step covers the rules, code of conduct, disciplinary process and health and safety requirements the new employee must follow.',
  },
  {
    prompt: 'What is the National Minimum Wage\'s role in salary determination?',
    options: [
      'It sets the maximum salary for all workers',
      'It establishes the lowest wage any employer may legally pay',
      'It determines performance bonuses',
      'It replaces collective bargaining agreements',
    ],
    answer: 'It establishes the lowest wage any employer may legally pay',
    explanation: 'The National Minimum Wage Act sets a floor wage — no South African employer may pay a worker less than this amount per hour.',
  },
  {
    prompt: 'Assigning a more experienced colleague to guide a new employee for the first month is an example of:',
    options: ['Job evaluation', 'Arbitration', 'Mentorship during induction', 'Performance management'],
    answer: 'Mentorship during induction',
    explanation: 'Mentorship is a key induction tool where a buddy or mentor provides ongoing support, answers questions and helps the new employee integrate into the team.',
  },
  {
    prompt: 'Why do businesses offer benefits such as pension funds and medical aid rather than simply paying a higher salary?',
    options: [
      'Benefits are not taxable for the business',
      'They attract and retain employees by providing long-term financial security and wellbeing',
      'It is illegal to pay high salaries in South Africa',
      'Benefits are cheaper than salary increases',
    ],
    answer: 'They attract and retain employees by providing long-term financial security and wellbeing',
    explanation: 'Benefits like retirement savings and healthcare address employees\' long-term needs, increasing loyalty and reducing staff turnover beyond what salary alone achieves.',
  },
  {
    prompt: 'A market salary survey compares a business\'s pay rates to those of similar roles in the industry. The PURPOSE of this exercise is to:',
    options: [
      'Identify which employees to retrench',
      'Ensure the business\'s salaries are competitive to attract and retain talent',
      'Set the National Minimum Wage',
      'Determine the induction programme',
    ],
    answer: 'Ensure the business\'s salaries are competitive to attract and retain talent',
    explanation: 'Salary surveys help businesses benchmark their pay against market rates — underpaying leads to high staff turnover while overpaying increases costs unnecessarily.',
  },
];

const InductionSalaryBenefits = () => (
  <CapsSubjectTopic
    title="Induction, Salary and Benefits"
    subtitle="Onboarding new staff and determining fair compensation"
    learnSteps={learnSteps}
    task="gr11-induction-salary-benefits-t4"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default InductionSalaryBenefits;
