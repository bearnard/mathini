import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/lo/term3/democratic-structures-participation/diagram.webp", alt: "Democratic Structures and Participation" },
    title: 'Branches of Government',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa's democracy separates power into <strong>legislative</strong>, <strong>executive</strong>, and <strong>judicial</strong> branches to prevent abuse and strengthen accountability.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Legislature</strong>
            <p className="text-slate-600">Makes laws. Includes Parliament nationally and municipal councils locally.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Executive</strong>
            <p className="text-slate-600">Implements laws and policies. Includes the President, Cabinet, premiers, and mayors.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Judiciary</strong>
            <p className="text-slate-600">Interprets the law and resolves disputes through independent courts.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'National, Provincial and Local Structures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Government works at different levels so that national priorities and local service delivery can both be addressed.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">National government</strong> deals with matters such as defence, national policy, and large-scale budgeting.</p>
          <p><strong className="text-slate-800">Provincial government</strong> supports functions such as education and health within provinces.</p>
          <p><strong className="text-slate-800">Local government</strong> focuses on services like water, sanitation, roads, refuse removal, and local planning.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Elections, Participation and Accountability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Citizens participate in democracy not only by voting, but also by using structures that hold leaders accountable.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Proportional representation</strong>
            <p className="text-sm text-slate-600">Parties receive seats according to the share of votes they win, helping different voices gain representation.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Participation tools</strong>
            <p className="text-sm text-slate-600">Public hearings, ward committees, petitions, protests, submissions, and contacting representatives.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Rule of Law and the Judiciary',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>rule of law</strong> means everyone, including leaders and state institutions, must obey the law and can be challenged in court if they act unlawfully.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Why the judiciary matters:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Protects constitutional rights</li>
            <li>Reviews unlawful decisions by government</li>
            <li>Resolves disputes fairly and independently</li>
            <li>Strengthens trust in democracy</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which branch of government makes laws?',
    options: ['Executive', 'Judiciary', 'Legislature', 'Cabinet'],
    answer: 'Legislature',
    explanation: 'The legislative branch, including Parliament, is responsible for making laws.',
  },
  {
    prompt: 'What is the main function of the executive branch?',
    options: [
      'To interpret the Constitution in court cases',
      'To implement laws and government policy',
      'To run elections independently',
      'To rewrite the Bill of Rights',
    ],
    answer: 'To implement laws and government policy',
    explanation: 'The executive carries out laws and manages the day-to-day running of government.',
  },
  {
    prompt: 'Which government sphere is most directly responsible for services like refuse removal and sanitation?',
    options: ['Local government', 'Provincial government', 'Judiciary', 'Parliament'],
    answer: 'Local government',
    explanation: 'Municipalities handle many local service delivery functions.',
  },
  {
    prompt: 'What does proportional representation aim to do in elections?',
    options: [
      'Give all seats to the largest party',
      'Allocate seats according to the percentage of votes won',
      'Allow judges to choose representatives',
      'Prevent citizens from voting for parties',
    ],
    answer: 'Allocate seats according to the percentage of votes won',
    explanation: 'Proportional representation links seat numbers to the share of votes each party receives.',
  },
  {
    prompt: 'Which of the following is a valid form of democratic participation besides voting?',
    options: ['Spreading rumours online', 'Joining a ward committee meeting', 'Ignoring public issues', 'Threatening officials'],
    answer: 'Joining a ward committee meeting',
    explanation: 'Citizens can participate through forums, hearings, petitions, and other lawful democratic processes.',
  },
  {
    prompt: 'What does the rule of law mean?',
    options: [
      'Only citizens must obey the law',
      'The ruling party is above the law',
      'Everyone is subject to the law, including leaders and state bodies',
      'Courts may ignore the Constitution',
    ],
    answer: 'Everyone is subject to the law, including leaders and state bodies',
    explanation: 'The rule of law requires equal legal accountability and lawful government action.',
  },
  {
    prompt: 'Why is an independent judiciary important in a democracy?',
    options: [
      'It helps political parties win elections',
      'It protects rights and reviews whether laws and actions are constitutional',
      'It replaces Parliament',
      'It controls the media',
    ],
    answer: 'It protects rights and reviews whether laws and actions are constitutional',
    explanation: 'Independent courts can check abuse of power and defend constitutional rights.',
  },
  {
    prompt: 'A community petitions the municipality about unsafe roads and poor street lighting. This is an example of:',
    options: ['Judicial review', 'Public participation and accountability', 'Propaganda', 'Private business activity'],
    answer: 'Public participation and accountability',
    explanation: 'Petitions are a lawful way for citizens to raise concerns and hold local government accountable.',
  },
];

const DemocraticStructuresParticipation = () => (
  <CapsSubjectTopic
    title="Democratic Structures and Participation"
    subtitle="Branches of government, elections, public participation, accountability and the rule of law"
    learnSteps={learnSteps}
    task="gr11-democratic-structures-participation-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DemocraticStructuresParticipation;
