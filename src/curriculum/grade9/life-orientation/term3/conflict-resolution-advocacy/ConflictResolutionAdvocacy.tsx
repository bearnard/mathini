import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Mediation } from '../../../../../components/diagrams/lo/Lo10Pictures';
import { splitEvenly } from '../../../../../components/diagrams/lo/lo10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The break time split in the worked example comes from this helper (lo10Helpers.test.ts).
const BREAK_MINUTES = 20;
const each = splitEvenly(BREAK_MINUTES, 2) ?? 0;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why conflict happens',
    content: slide(
      <>
        <Rule>Conflict arises when people have different needs, interests or values. It is not always bad. Handled well, it leads to growth and stronger relationships.</Rule>
        <Hub centre="Conflict" spokes={['Needs', 'Interests', 'Values']} aria="A circle labelled Conflict with three causes around it: different needs, different interests and different values." />
        <Worked
          title="Two friends both want the field at break"
          steps={[<>One wants to play soccer. The other wants to play netball. Their interests differ.</>, <>Both really need time to play.</>, <>They decide to talk calmly instead of fighting.</>]}
        />
        <Mistake>Thinking all conflict is bad, or that a disagreement ends a friendship. Talking calmly and listening can make the friendship stronger.</Mistake>
      </>,
    ),
  },
  {
    title: 'Negotiation and respectful dialogue',
    content: slide(
      <>
        <Rule>Negotiation is talking to reach a deal both sides can accept. Respectful dialogue means listening, being honest and valuing the other person.</Rule>
        <StepFlow steps={['Each side says what it needs.', 'Listen without interrupting.', 'Suggest options that suit both.', 'Agree on a deal both accept.']} aria="Four steps of negotiation in order: each side says what it needs, listen without interrupting, suggest options that suit both, agree on a deal both accept." />
        <Worked
          title="Sharing the field"
          steps={[<>Break is {BREAK_MINUTES} minutes and there are 2 games.</>, <>Share it equally: {BREAK_MINUTES} ÷ 2 = {each} minutes each.</>, <>Soccer first for {each} minutes, then netball for {each} minutes.</>, <>Both sides accept, so it is a win-win deal.</>]}
        />
        <Mistake>Shouting to win, or giving in without saying what you need. Negotiation looks for a win-win or a compromise.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mediation: a neutral helper',
    content: slide(
      <>
        <Rule>Mediation helps when the sides cannot settle a conflict themselves. A neutral mediator helps them find common ground, but the sides still make the deal.</Rule>
        <Mediation left="Side A" right="Side B" mediator="Mediator" aria="Two sides with a neutral mediator between them. A neutral person helps both sides, and the sides still make the deal." />
        <Worked
          title="Two learners still argue after trying to talk"
          steps={[<>First try to negotiate with each other.</>, <>If that fails, ask a neutral person, such as a trusted teacher.</>, <>Each side speaks while the mediator listens.</>, <>The mediator helps them find common ground.</>]}
        />
        <Mistake>Choosing a mediator who takes a side, or expecting the mediator to pick a winner. A mediator stays neutral.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leadership, advocacy and activism',
    content: slide(
      <>
        <Rule>Leadership is guiding and inspiring others towards shared goals. Advocacy is working to address social problems and bring about change. Activism is taking sustained action for change.</Rule>
        <StepFlow steps={['Learn the issue.', 'Build support.', 'Take action.', 'Keep going and reflect.']} aria="Four steps for young advocates in order: learn the issue, build support, take action, keep going and reflect." />
        <Worked
          title="Litter at school"
          steps={[<>Learn the issue: where is the litter, and why?</>, <>Build support with the learner council and teachers.</>, <>Take action: organise a clean-up and ask for more bins.</>, <>Keep going: check again next month.</>]}
        />
        <Mistake>Thinking one loud protest is enough. Effective advocacy and activism are informed and sustained.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What causes conflict, and is all conflict bad?" answer="Different needs, interests or values. No: handled well, conflict can lead to growth." />
        <Check question="What is negotiation, and what makes dialogue respectful?" answer="Talking to reach a deal both sides can accept. Dialogue is respectful when it has listening, honesty and valuing the other person." />
        <Check question="When is mediation helpful?" answer="When the sides cannot settle the conflict themselves. A neutral mediator helps them find common ground." />
        <Check question="How can young people be effective advocates?" answer="By learning the issues, building support and taking action." />
      </>,
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
    options: ['Yes, all conflict is bad and does harm', 'No, conflict can lead to growth if handled well', 'No, conflict always strengthens relationships, however it is handled', 'Conflict is never useful, even when it is handled well'],
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
