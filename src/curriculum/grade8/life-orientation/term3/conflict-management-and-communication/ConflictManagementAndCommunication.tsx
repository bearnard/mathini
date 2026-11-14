import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Resolve conflict constructively',
    image: {
      src: '/curriculum/grade8/lo/term3/conflict-management-and-communication/diagram.webp',
      alt: 'grade 8 learners using mediation listening and compromise to resolve conflict',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conflict management and communication includes active listening, assertiveness, mediation, compromise, and
          problem-solving.
        </p>
      </div>
    ),
  },
  {
    title: 'Protect relationships while solving problems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners can disagree respectfully by focusing on solutions, not insults, and by understanding each
          viewpoint.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is active listening?',
    options: ['Paying attention and checking you understand', 'Waiting for a chance to interrupt quickly', 'Ignoring the speaker for the whole time', 'Planning insults while others are talking'],
    answer: 'Paying attention and checking you understand',
    explanation: 'Active listening reduces misunderstanding and conflict escalation.',
  },
  {
    prompt: 'Which response is assertive?',
    options: [
      'Expressing needs clearly without disrespect',
      'Staying silent even when hurt',
      'Threatening others to get your way',
      'Posting angry messages online',
    ],
    answer: 'Expressing needs clearly without disrespect',
    explanation: 'Assertiveness balances honesty with respect.',
  },
  {
    prompt: 'What is mediation?',
    options: [
      'A neutral person helping both sides find agreement',
      'One person forcing a final answer',
      'Avoiding the conflict forever',
      'Punishing both sides without discussion',
    ],
    answer: 'A neutral person helping both sides find agreement',
    explanation: 'Mediation supports fair and calm conflict resolution.',
  },
  {
    prompt: 'Which action best shows compromise?',
    options: ['Both sides adjust to find a workable middle ground', 'Only one side wins every time', 'No one is allowed to speak at all', 'The conflict is ignored and left alone'],
    answer: 'Both sides adjust to find a workable middle ground',
    explanation: 'Compromise means shared adjustment toward a practical solution.',
  },
  {
    prompt: 'A disagreement becomes heated. What should happen first?',
    options: ['Pause, calm down and restate the issue with respect', 'Raise your voice straight away', 'Gather others to mock one of the sides', 'Walk away and spread rumours about it'],
    answer: 'Pause, calm down and restate the issue with respect',
    explanation: 'Calming and clarifying the issue prevents escalation.',
  },
  {
    prompt: 'Why use problem-solving steps in conflict?',
    options: [
      'They help identify causes and choose fair solutions',
      'They make conflict worse automatically',
      'They remove all emotions permanently',
      'They are only for adults',
    ],
    answer: 'They help identify causes and choose fair solutions',
    explanation: 'Structured steps improve decision quality during conflict.',
  },
  {
    prompt: 'Which communication habit harms relationships?',
    options: ['Using insults instead of discussing the behaviour', 'Asking questions to make things clear', 'Listening to both points of view', 'Using a respectful tone of voice'],
    answer: 'Using insults instead of discussing the behaviour',
    explanation: 'Personal attacks damage trust and block solutions.',
  },
  {
    prompt: 'What is a strong sign of conflict resolution success?',
    options: [
      'Both parties feel heard and agree on next steps',
      'One side is silenced completely',
      'The same conflict repeats immediately',
      'No rules are followed afterward',
    ],
    answer: 'Both parties feel heard and agree on next steps',
    explanation: 'Sustainable outcomes require clarity, fairness, and follow-through.',
  },
];

const ConflictManagementAndCommunication = () => (
  <CapsSubjectTopic
    title="Conflict Management and Communication"
    subtitle="Listening, assertiveness, mediation, compromise, and problem-solving"
    learnSteps={learnSteps}
    task="gr8-conflict-management-and-communication-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ConflictManagementAndCommunication;
