import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Transitive and intransitive verbs",
    content: slide(
      <>
        <Rule>A transitive verb needs an object to complete its meaning: The learners cleaned the classroom (the classroom is the object). An intransitive verb does not take an object: The baby slept. Only transitive verbs can be changed into the passive voice. Some verbs can be both, depending on the sentence.</Rule>
        <KeyTable
          title={"Two kinds of verb"}
          head={["Kind", "Example"]}
          aria={"Two kinds of verb. transitive (takes an object): Thabo kicked the ball.. intransitive (no object): The sun rose.. transitive: She wrote a letter.. intransitive: We arrived early.."}
          rows={[["transitive (takes an object)", "Thabo kicked the ball."], ["intransitive (no object)", "The sun rose."], ["transitive", "She wrote a letter."], ["intransitive", "We arrived early."]]}
        />
        <Worked
          title={"Test the verb"}
          steps={[
            <>Ask what? after the verb: Thabo kicked what? The ball.</>,
            <>The sun rose what? There is no answer, so rose is intransitive.</>,
          ]}
        />
        <Mistake>Trying to make a passive from an intransitive verb. The sun rose has no passive form.</Mistake>
      </>,
    ),
  },
  {
    title: "Forming the passive",
    content: slide(
      <>
        <Rule>The passive uses a form of be plus the past participle. The simple present uses am, is or are: The meal is cooked by the chef. The simple past uses was or were: The meal was cooked. The future uses will be: The meal will be cooked. The object of the active sentence becomes the subject of the passive sentence.</Rule>
        <KeyTable
          title={"Passive forms"}
          head={["Tense", "Example"]}
          aria={"Passive forms. present: The meal is cooked.. past: The meal was cooked.. future: The meal will be cooked.."}
          rows={[["present", "The meal is cooked."], ["past", "The meal was cooked."], ["future", "The meal will be cooked."]]}
        />
        <Worked
          title={"Change the voice"}
          steps={[
            <>Active: The chef cooks the meal.</>,
            <>Passive: The meal is cooked by the chef.</>,
          ]}
        />
        <Mistake>Changing the tense. The passive keeps the tense of the active verb.</Mistake>
      </>,
    ),
  },
  {
    title: "The present progressive passive",
    content: slide(
      <>
        <Rule>The present progressive passive shows that something is happening now. It uses am, is or are being plus the past participle. The chef is cooking the meal becomes The meal is being cooked by the chef. The road is being repaired means that the repair is happening now.</Rule>
        <KeyTable
          title={"Progressive passive"}
          head={["Active", "Passive"]}
          aria={"Progressive passive. The chef is cooking the meal.: The meal is being cooked.. They are repairing the road.: The road is being repaired.. The learners are painting the wall.: The wall is being painted.."}
          rows={[["The chef is cooking the meal.", "The meal is being cooked."], ["They are repairing the road.", "The road is being repaired."], ["The learners are painting the wall.", "The wall is being painted."]]}
        />
        <Worked
          title={"Use being"}
          steps={[
            <>Take They are repairing the road.</>,
            <>The road becomes the subject: The road is being repaired.</>,
          ]}
        />
        <Mistake>Forgetting being. The road is repaired is the simple present, not the present progressive.</Mistake>
      </>,
    ),
  },
  {
    title: "Using the passive in writing",
    content: slide(
      <>
        <Rule>The passive is useful in instructions, reports and science writing, where the doer is not important or not known: The water is heated to 100 degrees. A window was broken last night. Use the active voice when you want to say clearly who did something.</Rule>
        <KeyTable
          title={"Choosing the voice"}
          head={["Situation", "Voice"]}
          aria={"Choosing the voice. instructions and reports: passive: The mixture is stirred.. the doer is unknown: passive: A window was broken.. the doer matters: active: Thabo broke the window.."}
          rows={[["instructions and reports", "passive: The mixture is stirred."], ["the doer is unknown", "passive: A window was broken."], ["the doer matters", "active: Thabo broke the window."]]}
        />
        <Worked
          title={"Choose the voice"}
          steps={[
            <>A report on an experiment: The water was heated.</>,
            <>A story about a person: Thandi heated the water.</>,
          ]}
        />
        <Mistake>Using the passive when the doer is important. Use the active to give credit or blame.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of verb can become passive?</>,
          <>What does the present progressive passive use?</>,
          <>Is The sun rose transitive or intransitive?</>,
          <>Which tense does the passive keep?</>,
        ]}
        answers={[
          <>A transitive verb.</>,
          <>Am, is or are being plus the past participle.</>,
          <>Intransitive.</>,
          <>The tense of the active verb.</>,
        ]}
      />,
    ),
  },
];
