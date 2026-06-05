import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Conflict Resolution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Conflict</strong> happens when people have different needs or interests.
          <strong> Conflict resolution</strong> is working toward solutions that satisfy everyone.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Conflict can be healthy when resolved constructively.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Negotiation, Mediation, and Dialogue',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Negotiation</strong> is discussing to reach agreement. <strong>Mediation</strong> is using a neutral person to help.
          <strong> Respectful dialogue</strong> means listening and speaking honestly.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Negotiation</strong>
            <p className="text-slate-600">Direct discussion.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mediation</strong>
            <p className="text-slate-600">Third-party help.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Dialogue</strong>
            <p className="text-slate-600">Honest conversation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Leadership and Advocacy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Leadership</strong> means guiding others toward goals. <strong>Advocacy</strong> is working to address social problems.
          Young people can be powerful advocates for change.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Advocates do:</p>
          <p className="text-slate-600">Listen, plan, raise awareness, and take action for causes that matter.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What causes conflict?',
    options: ['Nothing', 'Different needs, interests, or values', 'Only at school', 'Easily avoided'],
    answer: 'Different needs, interests, or values',
    explanation: 'Conflict arises when people have competing interests or perspectives.',
  },
  {
    prompt: 'Is all conflict bad?',
    options: ['Yes, always', 'No, conflict can lead to growth if handled well', 'Only some conflict', 'Never productive'],
    answer: 'No, conflict can lead to growth if handled well',
    explanation: 'Constructive conflict resolution builds understanding and stronger relationships.',
  },
  {
    prompt: 'What is negotiation?',
    options: ['Giving in', 'Discussing to reach an agreement both parties can accept', 'Just arguing', 'Avoiding the problem'],
    answer: 'Discussing to reach an agreement both parties can accept',
    explanation: 'Negotiation seeks win-win or compromise solutions.',
  },
  {
    prompt: 'When is mediation helpful?',
    options: ['Never', 'When parties cannot resolve conflict themselves', 'Only in courts', 'Waste of time'],
    answer: 'When parties cannot resolve conflict themselves',
    explanation: 'A neutral mediator can help parties find common ground.',
  },
  {
    prompt: 'What makes dialogue respectful?',
    options: ['Winning the argument', 'Listening, honesty, and valuing the other person', 'Being louder', 'Interrupting'],
    answer: 'Listening, honesty, and valuing the other person',
    explanation: 'Respectful dialogue creates space for understanding.',
  },
  {
    prompt: 'What is leadership?',
    options: ['Being the boss', 'Guiding and inspiring others toward shared goals', 'Only for adults', 'Rare'],
    answer: 'Guiding and inspiring others toward shared goals',
    explanation: 'Leaders empower others and work toward common purpose.',
  },
  {
    prompt: 'What is advocacy?',
    options: ['Just talking', 'Working to address social problems and create change', 'Not needed', 'Only for politicians'],
    answer: 'Working to address social problems and create change',
    explanation: 'Advocates raise awareness and take action on issues.',
  },
  {
    prompt: 'How can young people be effective advocates?',
    options: ['They cannot', 'By learning issues, building support, and taking action', 'Only later', 'Not possible now'],
    answer: 'By learning issues, building support, and taking action',
    explanation: 'Youth advocacy is powerful and creates real change.',
  },
  {
    prompt: 'What is activism?',
    options: ['Just protesting', 'Taking sustained action to create social or political change', 'Wasteful', 'Not professional'],
    answer: 'Taking sustained action to create social or political change',
    explanation: 'Activism combines awareness, organization, and persistent action.',
  },
  {
    prompt: 'How do you handle conflict with a friend?',
    options: ['End the friendship', 'Talk calmly, listen, and try to find a solution together', 'Tell others', 'Avoid them'],
    answer: 'Talk calmly, listen, and try to find a solution together',
    explanation: 'Direct, respectful communication preserves and strengthens relationships.',
  },
];

const ConflictResolutionAdvocacy = () => (
  <CapsSubjectTopic
    title="Conflict Resolution and Advocacy"
    subtitle="Negotiation, mediation, and leadership for change"
    learnSteps={learnSteps}
    task="gr9-conflict-resolution-advocacy-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ConflictResolutionAdvocacy;
