import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an instructional text is",
    content: slide(
      <>
        <Rule>An instructional text tells the reader how to make or do something. A recipe shows how to cook, and directions show how to get to a place. It has a title, a list of what is needed, and steps in the correct order. Each step is short and starts with a command verb.</Rule>
        <KeyTable
          title="Parts of a recipe"
          head={["Part", "What it does"]}
          aria="Parts of a recipe. Title: Names what you are making. What you need: A list of the items. Steps: Numbered, in the right order. Command verbs: Start each step: mix, pour, bake. A picture or note: Can help the reader."
          rows={[["Title", "Names what you are making"], ["What you need", "A list of the items"], ["Steps", "Numbered, in the right order"], ["Command verbs", "Start each step: mix, pour, bake"], ["A picture or note", "Can help the reader"]]}
        />
        <Worked
          steps={[
            <>A recipe for pancakes lists flour, milk and an egg, then gives numbered steps that begin with mix, pour and fry.</>,
            <>Each step tells the reader exactly what to do.</>,
          ]}
        />
        <Mistake>Writing the steps in the wrong order. A reader who follows them would make a mistake.</Mistake>
      </>,
    ),
  },
  {
    title: "Command verbs and sequence words",
    content: slide(
      <>
        <Rule>Instructions use commands, which are verbs at the start of a sentence, such as wash, cut and stir. Sequence words show the order: first, next, then, after that and finally. Numbers or bullet points also help the reader to follow the order.</Rule>
        <KeyTable
          title="Useful words"
          head={["Type", "Examples"]}
          aria="Useful words. Command verbs: Wash, cut, mix, pour, stir, bake. Sequence words: First, next, then, after that, finally. Measurements: Two cups, 250 millilitres, 10 minutes. Warnings: Be careful: the pot is hot. Time words: For five minutes, until it is brown."
          rows={[["Command verbs", "Wash, cut, mix, pour, stir, bake"], ["Sequence words", "First, next, then, after that, finally"], ["Measurements", "Two cups, 250 millilitres, 10 minutes"], ["Warnings", "Be careful: the pot is hot"], ["Time words", "For five minutes, until it is brown"]]}
        />
        <ModelText label="A short model recipe" note="An original model written for this lesson.">
          <p>How to Make Pancakes</p>
          <p>You need: 1 cup of flour, 1 cup of milk, 1 egg and a little oil.</p>
          <p>1. First, wash your hands.</p>
          <p>2. Next, mix the flour, the milk and the egg in a bowl.</p>
          <p>3. Then heat a little oil in a pan and pour in some batter.</p>
          <p>4. After that, cook for two minutes until it is golden, and turn it over.</p>
          <p>5. Finally, serve the pancake warm. Be careful: the pan is hot.</p>
        </ModelText>
        <Worked
          steps={[
            <>Step 1: First, wash your hands. Step 2: Next, mix the flour and the milk.</>,
            <>Step 3: Then pour a little batter into the pan.</>,
          ]}
        />
        <Mistake>Using long sentences with many steps in one. Give one action in each step.</Mistake>
      </>,
    ),
  },
  {
    title: "Giving directions",
    content: slide(
      <>
        <Rule>Directions tell a person how to walk or drive from one place to another. Use command verbs such as turn, walk and cross, and use landmarks such as a school or a shop. Say left or right, name the streets and give a rough distance. Always start from the place where the person is.</Rule>
        <KeyTable
          title="Parts of directions"
          head={["Part", "Example"]}
          aria="Parts of directions. Starting point: From the school gate. Command verb: Walk, turn, cross, stop. Direction word: Left, right, straight on. Landmark: The shop, the church, the robot. End point: The library is on your right."
          rows={[["Starting point", "From the school gate"], ["Command verb", "Walk, turn, cross, stop"], ["Direction word", "Left, right, straight on"], ["Landmark", "The shop, the church, the robot"], ["End point", "The library is on your right"]]}
        />
        <Worked
          steps={[
            <>From the school gate, walk straight on for two blocks. Turn left at the shop, and the library is on your right.</>,
            <>The directions use landmarks that are easy to see.</>,
          ]}
        />
        <Mistake>Giving directions with no landmarks. Landmarks help a person know that they are on the right road.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your instructions",
    content: slide(
      <>
        <Rule>Before you finish, ask someone to follow your instructions. Check that every step is in order, that nothing is missing and that each step begins with a command verb. Check measurements and spelling, and keep your sentences short. For directions, make sure that left and right are correct.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why it matters"]}
          aria="Checklist. Order: The steps must follow each other. Nothing missing: The reader needs every item. Command verbs: Each step starts with an action. Measurements: They must be clear and correct. Left and right: A mistake sends the reader the wrong way."
          rows={[["Order", "The steps must follow each other"], ["Nothing missing", "The reader needs every item"], ["Command verbs", "Each step starts with an action"], ["Measurements", "They must be clear and correct"], ["Left and right", "A mistake sends the reader the wrong way"]]}
        />
        <Worked
          steps={[
            <>A friend follows your recipe and finds that you forgot to say when to turn the pancake. You add the step.</>,
            <>You check your directions by walking the route.</>,
          ]}
        />
        <Mistake>Skipping a step because it seems obvious. The reader may not know it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do instructions start with?</>,
          <>Name two sequence words.</>,
          <>What do directions use to help the reader?</>,
          <>Why should you test your instructions?</>,
        ]}
        answers={[
          <>A command verb.</>,
          <>First and next, or then and finally.</>,
          <>Landmarks.</>,
          <>To check that they can be followed.</>,
        ]}
      />,
    ),
  },
];
