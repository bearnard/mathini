import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term2/change-crisis-management/diagram.webp", alt: "Change and Crisis Management" },
    title: 'Stress and its impact on business',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Stress</strong> is a natural response to pressure, but unmanaged stress reduces productivity and causes burnout. Businesses must manage both individual and organisational stress.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Causes of workplace stress</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1 text-sm">
              <li>Unrealistic deadlines and workload</li>
              <li>Poor management relationships</li>
              <li>Job insecurity and change</li>
              <li>Conflict with colleagues</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Stress management strategies</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1 text-sm">
              <li>Exercise and healthy lifestyle</li>
              <li>Time management and prioritising</li>
              <li>Employee assistance programmes (EAPs)</li>
              <li>Open communication with management</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Lewin\'s change management model',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Kurt Lewin's <strong>three-stage model</strong> is a classic framework for managing change in an organisation.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Stage 1: Unfreeze</strong>
            <p className="text-slate-600">Prepare people for change by explaining the need, reducing resistance, and building urgency.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Stage 2: Change</strong>
            <p className="text-slate-600">Implement the change — communicate clearly, train staff, and support them through the transition.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Stage 3: Refreeze</strong>
            <p className="text-slate-600">Embed the new way of working by updating policies, rewarding new behaviours, and stabilising the culture.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Why employees resist change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Resistance to change is normal. Understanding the reasons helps managers overcome it.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Fear of the unknown:</strong> uncertainty about what the change will mean for their job</li>
            <li><strong>Loss of security:</strong> concern about job losses or reduced status</li>
            <li><strong>Lack of communication:</strong> not being informed creates rumour and anxiety</li>
            <li><strong>Past failures:</strong> if previous changes went badly, employees distrust new ones</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">Managers reduce resistance by communicating early, involving staff in planning, and showing empathy.</p>
      </div>
    ),
  },
  {
    title: 'Crisis management — steps to respond',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>crisis</strong> is an unexpected, urgent event that threatens the business. Crisis management follows a structured response.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Crisis management steps:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li><strong>Identify</strong> the crisis and assess the scale of the damage</li>
            <li><strong>Activate</strong> the crisis management team and plan</li>
            <li><strong>Communicate</strong> honestly with stakeholders (staff, customers, media)</li>
            <li><strong>Contain</strong> the damage and restore operations</li>
            <li><strong>Review and learn</strong> — update the crisis plan based on lessons learnt</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'In Lewin\'s change model, which stage involves preparing employees to accept change?',
    options: ['Refreeze', 'Change', 'Unfreeze', 'Stabilise'],
    answer: 'Unfreeze',
    explanation: 'The Unfreeze stage prepares the organisation by creating awareness of the need for change, reducing complacency, and addressing resistance before the actual change begins.',
  },
  {
    prompt: 'After implementing a new process, management updates company policies and rewards staff who follow the new way of working. Which Lewin stage is this?',
    options: ['Unfreeze', 'Change', 'Refreeze', 'Transition'],
    answer: 'Refreeze',
    explanation: 'Refreezing embeds the change into the organisation\'s culture, systems and norms so that it becomes the new standard.',
  },
  {
    prompt: 'Which of the following is NOT a recommended strategy for managing workplace stress?',
    options: ['Taking regular exercise', 'Using good time management', 'Ignoring the problem and working longer hours', 'Using Employee Assistance Programmes'],
    answer: 'Ignoring the problem and working longer hours',
    explanation: 'Ignoring stress and overworking makes it worse. Effective strategies include healthy habits, support programmes, and open communication.',
  },
  {
    prompt: 'An employee resists a new digital system because they fear losing their job to automation. This resistance is caused by:',
    options: ['A lack of trust in their colleagues', 'Fear of the unknown and job insecurity', 'The change being introduced too quickly', 'Too much communication from management'],
    answer: 'Fear of the unknown and job insecurity',
    explanation: 'Employees often resist change when they fear the impact on their role or job security — a common psychological barrier to change.',
  },
  {
    prompt: 'A factory fire breaks out. The manager calls the crisis team, issues a statement to staff, and contacts the insurance company. Which crisis management step is this?',
    options: ['Identify the crisis', 'Activate the crisis team and communicate', 'Contain the damage and do nothing more', 'Review the crisis and learn from it'],
    answer: 'Activate the crisis team and communicate',
    explanation: 'Activating the crisis management team and communicating with stakeholders (staff, insurers) are core crisis response steps following initial identification.',
  },
  {
    prompt: 'Which term describes programmes offered by employers to support employees dealing with personal or work-related stress?',
    options: ['Performance management systems', 'Employee Assistance Programmes (EAPs)', 'Job enrichment schemes', 'Succession planning programmes'],
    answer: 'Employee Assistance Programmes (EAPs)',
    explanation: 'EAPs provide confidential counselling and support services to help employees cope with stress, mental health challenges, and personal issues.',
  },
  {
    prompt: 'What is the MAIN purpose of communicating early with employees during a change process?',
    options: ['To reduce rumours and build trust', 'To gather data for the financial plan', 'To delay the change process', 'To give employees a chance to resign'],
    answer: 'To reduce rumours and build trust',
    explanation: 'Early and honest communication reduces uncertainty, prevents rumours, and builds the trust needed for employees to accept and support change.',
  },
  {
    prompt: 'Which Lewin stage involves training staff and supporting them through the actual transition?',
    options: ['Unfreeze', 'Change', 'Refreeze', 'Evaluate'],
    answer: 'Change',
    explanation: 'The Change stage is where the actual transition happens — employees learn new ways of working and managers actively support them through it.',
  },
  {
    prompt: 'After a crisis is resolved, why is the "review and learn" step important?',
    options: ['To decide whether or not to close the business', 'To update the crisis plan and stop the crisis recurring', 'To punish the employees who caused the crisis', 'To report to the shareholders and no one else'],
    answer: 'To update the crisis plan and stop the crisis recurring',
    explanation: 'Reviewing lessons learnt allows the business to improve its crisis management plan so future crises are handled more effectively.',
  },
];

const ChangeCrisisManagement = () => (
  <CapsSubjectTopic
    title="Change and Crisis Management"
    subtitle="Managing stress, change and crises in the workplace"
    learnSteps={learnSteps}
    task="gr11-change-crisis-management-t2"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default ChangeCrisisManagement;
