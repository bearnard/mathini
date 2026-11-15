import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow, Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { joinList, shareDays } from '../../../../../components/diagrams/lo/lo6Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The days in the compromise example come from this tested helper (lo6Helpers.test.ts).
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const share = shareDays(days, ['Group A', 'Group B']);

export const learnSteps: LearnStep[] = [
  {
    title: 'Active listening',
    content: slide(
      <>
        <Rule>Active listening means giving the speaker your full attention and checking that you understand, by saying back what you heard.</Rule>
        <Hub centre="Listening" spokes={['Eyes on speaker', 'No interrupting', 'Say it back', 'Ask questions']} aria="A circle labelled Listening with four habits around it: eyes on the speaker, no interrupting, say it back, ask questions." />
        <Worked
          title="Lerato says: “You never listen to me”"
          steps={[<>Put your phone down and look at her.</>, <>Do not interrupt until she has finished.</>, <>Say it back: “You feel ignored when I check my phone while you talk. Is that right?”</>, <>Ask: “What would help?”</>]}
        />
        <Mistake>Waiting for a gap to interrupt, or planning your reply while the other person talks. If you are not listening, the misunderstanding grows.</Mistake>
      </>,
    ),
  },
  {
    title: 'Assertive, not passive or aggressive',
    content: slide(
      <>
        <Rule>Being assertive means stating your needs clearly and respectfully. It is honest without being rude. Silence and threats both fail.</Rule>
        <Zones zones={[{ title: 'Passive', line: 'Stays silent when hurt' }, { title: 'Assertive', line: 'Says needs clearly and politely' }, { title: 'Aggressive', line: 'Threatens or insults' }]} aria="Three styles side by side: passive stays silent when hurt, assertive says needs clearly and politely, aggressive threatens or insults." />
        <Worked
          title="A classmate keeps taking your pens"
          steps={[<>Say what happens: “You take my pens without asking.”</>, <>Say how you feel: “I feel annoyed.”</>, <>Say what you need: “Please ask me first.”</>]}
        />
        <Mistake>Staying silent while you are hurt, or posting angry messages online. Insulting the person also fails. Talk about the behaviour, not about the person.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mediation and compromise',
    content: slide(
      <>
        <Rule>Mediation means a neutral person helps both sides reach an agreement. The mediator does not take sides or force an answer. In a compromise, both sides adjust to find a workable middle ground.</Rule>
        <StepFlow steps={['Each side explains its view.', 'The mediator sums up both views.', 'Both sides suggest solutions.', 'They agree on next steps.']} aria="Four steps of mediation in order: each side explains, the mediator sums up, both sides suggest solutions, they agree on next steps." />
        <Worked
          title="Two groups both want the field at break"
          steps={[<>The mediator hears both groups.</>, <>Compromise: share the {days.length} days by turns.</>, <>{share[0].group}: {joinList(share[0].days)}.</>, <>{share[1].group}: {joinList(share[1].days)}. Each group gets {share[0].days.length} of the {days.length} days.</>]}
        />
        <Mistake>Thinking a mediator decides who wins, or that a compromise means only one side gives in. In a fair compromise both sides adjust.</Mistake>
      </>,
    ),
  },
  {
    title: 'Calm down, then solve the problem',
    content: slide(
      <>
        <Rule>When a disagreement gets heated, pause and calm down first. Then restate the issue respectfully and follow problem-solving steps. Success means both people feel heard and agree on next steps.</Rule>
        <StepFlow steps={['Pause and calm down.', 'Find the cause of the problem.', 'List fair solutions.', 'Choose one together.', 'Agree on next steps.']} aria="Five steps for solving a conflict in order: pause and calm down, find the cause, list fair solutions, choose one together, agree on next steps." />
        <Worked
          title="An argument about who does the group work"
          steps={[<>Pause and breathe.</>, <>Cause: the jobs were never shared out.</>, <>Solutions: draw up a list, or take turns.</>, <>Choose the list and agree to check it on Friday.</>]}
        />
        <Mistake>Raising your voice, mocking someone in front of others or spreading rumours. Personal attacks damage trust, and the same conflict returns.</Mistake>
      <div className="space-y-2">
  <p className="text-slate-600">{"Relationships suffer when people shout or name-call. They are protected when each person describes the behaviour calmly, uses 'I feel' statements and listens before replying."}</p>
</div>
</>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is active listening, and what is one thing you do to show it?" answer="Paying attention and checking you understand. For example, say back what you heard before you reply." />
        <Check question="Which is the assertive reply to someone who keeps taking your things: staying silent, shouting a threat, or “Please ask me first”?" answer="“Please ask me first.” It states your need clearly and respectfully." />
        <Check question="What does a mediator do, and what is a compromise?" answer="A mediator is a neutral person who helps both sides find agreement. In a compromise both sides adjust to reach a workable middle ground." />
        <Check question="A disagreement becomes heated. What should happen first?" answer="Pause, calm down and restate the issue with respect. Then use problem-solving steps." />
      </>,
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
