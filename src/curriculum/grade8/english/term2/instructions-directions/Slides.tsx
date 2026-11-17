import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Writing instructions",
    content: slide(
      <>
        <Rule>An instruction text tells the reader how to do or make something. It has a goal, a list of what is needed, and numbered steps in the correct order. The steps use command verbs and are short and clear.</Rule>
        <KeyTable
          title="Parts of an instruction text"
          head={["Part", "What it contains"]}
          aria="Parts of an instruction text. Title: Says what you will make or do. Materials: A list of what is needed. Steps: Numbered, one action in each. Command verbs: Mix, pour, cut, press. Sequence words: First, next, then, finally."
          rows={[["Title", "Says what you will make or do"], ["Materials", "A list of what is needed"], ["Steps", "Numbered, one action in each"], ["Command verbs", "Mix, pour, cut, press"], ["Sequence words", "First, next, then, finally"]]}
        />
        <ModelText label="Model instructions" note="An original model written for this lesson.">
          <p>How to make a paper boat</p>
          <p>You need: one sheet of A4 paper.</p>
          <p>1. Fold the paper in half, short side to short side.</p>
          <p>2. Fold the top corners down to meet in the middle.</p>
          <p>3. Fold the bottom strip up on both sides.</p>
          <p>4. Open the paper and flatten it into a diamond.</p>
          <p>5. Fold the bottom corners up, then open to make the boat.</p>
        </ModelText>
        <Worked
          steps={[
            <>Each step begins with a command verb: fold, fold, fold, open, fold.</>,
            <>The numbers show the order, so the reader cannot do it in the wrong order.</>,
          ]}
        />
        <Mistake>Putting two actions in one step. Give each action its own step.</Mistake>
      </>,
    ),
  },
  {
    title: "Language of instructions",
    content: slide(
      <>
        <Rule>Use the imperative (the command form). Write short sentences and use words that tell the order. Be exact about amounts, times and measurements, and say what the result should look like.</Rule>
        <KeyTable
          title="Features"
          head={["Feature", "Example"]}
          aria="Features. Imperative: Add two cups of flour.. Sequence words: First, then, after that, finally. Exact amounts: 200 ml, five minutes, 10 cm. Result: The dough should feel soft. Warnings: Be careful: the oven is hot."
          rows={[["Imperative", "Add two cups of flour."], ["Sequence words", "First, then, after that, finally"], ["Exact amounts", "200 ml, five minutes, 10 cm"], ["Result", "The dough should feel soft"], ["Warnings", "Be careful: the oven is hot"]]}
        />
        <Worked
          steps={[
            <>Weak: You could maybe put some flour in. Better: Add two cups of flour.</>,
            <>A warning helps the reader to stay safe.</>,
          ]}
        />
        <Mistake>Using vague words such as some or a bit. Give exact amounts.</Mistake>
      </>,
    ),
  },
  {
    title: "Giving directions",
    content: slide(
      <>
        <Rule>Directions tell a person how to get from one place to another. Start with where the person is, give the steps in order, name landmarks, and say how far or how long. Use words for turns and positions.</Rule>
        <KeyTable
          title="Words for directions"
          head={["Words", "Use"]}
          aria="Words for directions. Turn left, turn right, go straight: Movement. Past, next to, opposite, behind: Position. The post office, the church, the traffic light: Landmarks. after 200 metres, for two blocks: Distance."
          rows={[["Turn left, turn right, go straight", "Movement"], ["Past, next to, opposite, behind", "Position"], ["The post office, the church, the traffic light", "Landmarks"], ["after 200 metres, for two blocks", "Distance"]]}
        />
        <Worked
          steps={[
            <>From the school gate, turn right and walk 200 metres, past the church. The clinic is on your left, opposite the bakery.</>,
            <>Landmarks help, because people recognise them.</>,
          ]}
        />
        <Mistake>Giving directions with no landmarks or distances. The listener may get lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do numbered steps show?</>,
          <>Which verb form is used in instructions?</>,
          <>Name a sequence word.</>,
          <>Why use landmarks in directions?</>,
        ]}
        answers={[
          <>The order of the actions.</>,
          <>The imperative (command form).</>,
          <>First, next, then or finally.</>,
          <>They help people to recognise the place.</>,
        ]}
      />,
    ),
  },
];
