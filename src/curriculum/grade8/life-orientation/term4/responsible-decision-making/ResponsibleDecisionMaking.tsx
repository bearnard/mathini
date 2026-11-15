import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What makes a decision responsible?',
    content: slide(
      <>
        <Rule>A responsible decision is made after thinking about the consequences. Look at the short-term and the long-term results before you choose.</Rule>
        <Branches
          problem="A friend asks you to skip class"
          options={[
            { choice: 'Skip with them', outcome: 'You miss lessons and may get into trouble.' },
            { choice: 'Say no and go to class', outcome: 'You keep up and keep trust.' },
          ]}
          aria="A decision tree. A friend asks you to skip class. Choice one: skip with them, and you miss lessons and may get into trouble. Choice two: say no and go to class, and you keep up and keep trust."
        />
        <Worked
          title="Skipping revision to play games"
          steps={[<>Short term: it is fun.</>, <>Long term: weaker marks and more stress.</>, <>Compare: a little fun now, or better results later.</>]}
        />
        <Mistake>Thinking consequence thinking guarantees perfect outcomes, or that you only need it in emergencies. It helps you predict results, every day.</Mistake>
      </>,
    ),
  },
  {
    title: 'A simple decision process',
    content: slide(
      <>
        <Rule>Define the problem first. Then gather facts, list options, predict outcomes, choose, and do a final check: is it safe, respectful and in line with my goals?</Rule>
        <StepFlow steps={['Define the problem.', 'Gather the facts.', 'List your options.', 'Predict the outcomes.', 'Choose and check: safe, respectful, fits my goals.']} aria="Five steps of a decision process in order: define the problem, gather the facts, list your options, predict the outcomes, choose and check that it is safe, respectful and fits your goals." />
        <Worked
          title="The choir practice and the study group are at the same time"
          steps={[<>Define: I cannot do both on Tuesday.</>, <>Facts and options: go to choir, go to study, or ask to move one.</>, <>Predict: asking to move one keeps both.</>, <>Check: it is safe and respectful, and it fits my goals.</>]}
        />
        <Mistake>Acting immediately without thinking, following the loudest opinion, or asking only whether a choice will be popular or impress friends.</Mistake>
      </>,
    ),
  },
  {
    title: 'Goals and outside influence',
    content: slide(
      <>
        <Rule>Your goals guide your choices towards what matters most. When a friend encourages harmful behaviour, say no, choose safety and get support if you need it.</Rule>
        <Worked
          title="Your goal is to pass Maths and a friend urges you to try a harmful substance"
          steps={[<>Say no clearly.</>, <>Choose safety and leave the situation.</>, <>Tell a trusted adult if you need support.</>, <>Remember your goal: a clear head helps you pass.</>]}
        />
        <Mistake>Joining in to avoid feeling left out, hiding the risk from the adults around you, or pretending there will be no consequences.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resilience and healthy routines',
    content: slide(
      <>
        <Rule>Resilience means recovering from mistakes and choosing better next time. Regular sleep, planning and reflection give you the focus and self-control to decide well.</Rule>
        <StepFlow steps={['Admit the mistake.', 'Learn from it.', 'Make a new plan.', 'Try again.']} aria="Four steps of resilience in order: admit the mistake, learn from it, make a new plan, try again." />
        <Worked
          title="You fail a test because you started revising the night before"
          steps={[<>Admit it: I left it too late.</>, <>Learn: short daily blocks work better.</>, <>Plan: revise a little every day and sleep well.</>, <>Try again at the next test.</>]}
        />
        <Mistake>Never admitting that you made an error, blaming other people for everything, or repeating the same harmful choice again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a responsible decision?" answer="A choice made after considering the consequences." />
        <Check question="What is the first step of a decision process?" answer="Define the problem clearly." />
        <Check question="A friend encourages harmful behaviour. What is the best response?" answer="Say no, choose safety and seek support if needed." />
        <Check question="What is resilience?" answer="Recovering from mistakes and choosing better next time." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a responsible decision?',
    options: [
      'A choice made after considering consequences',
      'A random choice with no reflection',
      'A choice based only on pressure',
      'A choice that ignores safety',
    ],
    answer: 'A choice made after considering consequences',
    explanation: 'Responsible decisions balance values, risks, and long-term impact.',
  },
  {
    prompt: 'Which step should come first in decision-making?',
    options: [
      'Define the problem clearly',
      'Act immediately without thinking',
      'Follow the loudest opinion',
      'Ignore available information',
    ],
    answer: 'Define the problem clearly',
    explanation: 'Clear problem definition improves the quality of choices.',
  },
  {
    prompt: 'How do goals help decision-making?',
    options: [
      'They guide choices toward what matters most',
      'They remove all difficult situations',
      'They make consequences irrelevant',
      'They are unrelated to behaviour',
    ],
    answer: 'They guide choices toward what matters most',
    explanation: 'Goals provide direction when facing competing options.',
  },
  {
    prompt: 'A friend encourages harmful behaviour. What is the best response?',
    options: ['Say no, choose safety and seek support if needed', 'Join in to avoid feeling left out', 'Hide the risk from the adults around you', 'Pretend that there will be no consequences'],
    answer: 'Say no, choose safety and seek support if needed',
    explanation: 'Safe boundaries and support protect your wellbeing.',
  },
  {
    prompt: 'Why is consequence thinking important?',
    options: [
      'It helps predict short- and long-term results',
      'It makes planning unnecessary',
      'It guarantees perfect outcomes',
      'It is only needed for major emergencies',
    ],
    answer: 'It helps predict short- and long-term results',
    explanation: 'Good decisions depend on understanding likely outcomes.',
  },
  {
    prompt: 'Which routine supports better daily choices?',
    options: [
      'Regular sleep, planning, and reflection',
      'No structure and no rest',
      'Ignoring deadlines and responsibilities',
      'Taking risks for attention',
    ],
    answer: 'Regular sleep, planning, and reflection',
    explanation: 'Healthy routines improve focus and self-control.',
  },
  {
    prompt: 'What is resilience in decision-making?',
    options: ['Recovering from mistakes and choosing better', 'Never admitting that you made any errors', 'Repeating the same harmful choices again', 'Blaming other people for everything that happens'],
    answer: 'Recovering from mistakes and choosing better',
    explanation: 'Resilience supports growth after setbacks.',
  },
  {
    prompt: 'Which final check improves a decision?',
    options: ['Ask if it is safe, respectful and in line with goals', 'Ask if it looks popular on social media', 'Ask if it will get you out of any effort', 'Ask if it will impress your friends the most'],
    answer: 'Ask if it is safe, respectful and in line with goals',
    explanation: 'A values-based check keeps decisions responsible.',
  },
];

const ResponsibleDecisionMaking = () => (
  <CapsSubjectTopic
    title="Responsible Decision-making"
    subtitle="Goals, consequences, influence, resilience, and healthy routines"
    learnSteps={learnSteps}
    task="gr8-responsible-decision-making-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ResponsibleDecisionMaking;
