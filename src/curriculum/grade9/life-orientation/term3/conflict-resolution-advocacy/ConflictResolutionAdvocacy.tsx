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
    options: ['Nothing, as people only argue by accident', 'Different needs, interests or values', 'Conflict happens at school only, not elsewhere', 'Conflict is easily avoided if people try'],
    answer: 'Different needs, interests or values',
    explanation: 'Conflict arises when people have competing interests or perspectives.',
  },
  {
    prompt: 'Is all conflict bad?',
    options: ['Yes, all conflict is bad and does harm', 'No, conflict can lead to growth if handled well', 'Only some conflict is bad; the rest is harmless', 'Conflict is never useful, even when it is handled well'],
    answer: 'No, conflict can lead to growth if handled well',
    explanation: 'Constructive conflict resolution builds understanding and stronger relationships.',
  },
  {
    prompt: 'What is negotiation?',
    options: ['Giving in to the other side so that it ends', 'Talking to reach a deal both sides can accept', 'Arguing until one side gives up and agrees', 'Avoiding the problem until it goes away by itself'],
    answer: 'Talking to reach a deal both sides can accept',
    explanation: 'Negotiation seeks win-win or compromise solutions.',
  },
  {
    prompt: 'When is mediation helpful?',
    options: ['Never, as outside help makes conflicts worse', 'When the sides cannot settle the conflict themselves', 'Only in a court of law with a judge present', 'It wastes time, since both sides know the answer'],
    answer: 'When the sides cannot settle the conflict themselves',
    explanation: 'A neutral mediator can help parties find common ground.',
  },
  {
    prompt: 'What makes dialogue respectful?',
    options: ['Winning the argument by using the best facts', 'Listening, honesty and valuing the other person', 'Speaking louder so that your point is heard', 'Interrupting to correct the mistakes of the other side'],
    answer: 'Listening, honesty and valuing the other person',
    explanation: 'Respectful dialogue creates space for understanding.',
  },
  {
    prompt: 'What is leadership?',
    options: ['Being the boss and giving orders that others obey', 'Guiding and inspiring others towards shared goals', 'A role that is held by adults and never by learners', 'A rare gift that only a few born leaders have'],
    answer: 'Guiding and inspiring others towards shared goals',
    explanation: 'Leaders empower others and work toward common purpose.',
  },
  {
    prompt: 'What is advocacy?',
    options: ['Talking about problems without trying to solve them', 'Working to address social problems and bring about change', 'A task that is not needed in a free country', 'Work that is done by politicians and no one else'],
    answer: 'Working to address social problems and bring about change',
    explanation: 'Advocates raise awareness and take action on issues.',
  },
  {
    prompt: 'How can young people be effective advocates?',
    options: ['They cannot, as they are too young to make a difference', 'By learning the issues, building support and taking action', 'They can only begin once they are old enough to vote', 'It is not possible until they have finished school'],
    answer: 'By learning the issues, building support and taking action',
    explanation: 'Youth advocacy is powerful and creates real change.',
  },
  {
    prompt: 'What is activism?',
    options: ['Joining one protest and then going back to normal life', 'Taking sustained action to bring about social or political change', 'A waste of effort that seldom has any real result', 'A way of acting that is not professional or serious'],
    answer: 'Taking sustained action to bring about social or political change',
    explanation: 'Activism combines awareness, organization, and persistent action.',
  },
  {
    prompt: 'How do you handle conflict with a friend?',
    options: ['End the friendship so that the problem goes away', 'Talk calmly, listen and look for a solution together', 'Tell other friends what happened and ask for their side', 'Avoid your friend until the problem is forgotten'],
    answer: 'Talk calmly, listen and look for a solution together',
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
