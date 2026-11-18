import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a set of instructions",
    content: slide(
      <>
        <Rule>Instructions tell the reader how to do or make something. A set of instructions has a title that says what you will make, a list of materials or things that you need, and numbered steps in the correct order. A diagram or a warning can help the reader. Write for your reader, who must be able to follow the steps without asking you.</Rule>
        <KeyTable
          title={"Parts of instructions"}
          head={["Part", "What it does"]}
          aria={"Parts of instructions. title: names what you will make or do. materials: lists what you need. steps: numbered, in the correct order. warning or tip: keeps the reader safe."}
          rows={[["title", "names what you will make or do"], ["materials", "lists what you need"], ["steps", "numbered, in the correct order"], ["warning or tip", "keeps the reader safe"]]}
        />
        <Worked
          title={"Plan instructions"}
          steps={[
            <>Title: How to make a paper boat.</>,
            <>Materials: one sheet of paper. Steps: 1. Fold the paper in half.</>,
          ]}
        />
        <Mistake>Leaving out a material. The reader cannot follow the steps without it.</Mistake>
      </>,
    ),
  },
  {
    title: "Command verbs and sequence words",
    content: slide(
      <>
        <Rule>Start each step with a command verb, called an imperative: Fold, cut, mix, pour. Use sequence words such as first, next, then, after that and finally so that the order is clear. Write short, clear sentences in the present tense. Do not use I or we.</Rule>
        <KeyTable
          title={"Language of instructions"}
          head={["Feature", "Example"]}
          aria={"Language of instructions. command verb: Pour the water into the cup.. sequence words: First, then, next, finally. short sentences: Stir for one minute.. no I or we: Wash your hands.."}
          rows={[["command verb", "Pour the water into the cup."], ["sequence words", "First, then, next, finally"], ["short sentences", "Stir for one minute."], ["no I or we", "Wash your hands."]]}
        />
        <Worked
          title={"Rewrite a step"}
          steps={[
            <>Weak: You should perhaps mix the flour.</>,
            <>Better: Mix the flour.</>,
          ]}
        />
        <Mistake>Writing the steps as a story. Use command verbs and no past tense.</Mistake>
      </>,
    ),
  },
  {
    title: "Precise details",
    content: slide(
      <>
        <Rule>Be exact so that nobody makes a mistake. Give amounts and units: 250 ml of water, two spoons of sugar. Give the time: stir for two minutes. Say what to look for: until the mixture is smooth. Name the tools: use a wooden spoon. Add a warning where a step is dangerous: Ask an adult to help with the hot water.</Rule>
        <KeyTable
          title={"Be precise"}
          head={["Vague", "Precise"]}
          aria={"Be precise. some water: 250 ml of water. stir for a while: stir for two minutes. bake until done: bake for 20 minutes. use a spoon: use a wooden spoon."}
          rows={[["some water", "250 ml of water"], ["stir for a while", "stir for two minutes"], ["bake until done", "bake for 20 minutes"], ["use a spoon", "use a wooden spoon"]]}
        />
        <Worked
          title={"Add detail"}
          steps={[
            <>Vague: Add some sugar.</>,
            <>Precise: Add two spoons of sugar.</>,
          ]}
        />
        <Mistake>Using words such as some and a bit. Give exact amounts.</Mistake>
      </>,
    ),
  },
  {
    title: "Checking your instructions",
    content: slide(
      <>
        <Rule>Before you hand in your instructions, test them. Ask a friend to follow them without your help. Check that the steps are in order, that each one starts with a command verb, that nothing is missing, and that the spelling and punctuation are correct. Use numbers or bullets so that the steps are easy to follow.</Rule>
        <KeyTable
          title={"Test your instructions"}
          head={["Check", "Question"]}
          aria={"Test your instructions. order: are the steps in the correct order?. verbs: does each step begin with a command verb?. detail: are the amounts and times exact?. test: can a friend follow it?."}
          rows={[["order", "are the steps in the correct order?"], ["verbs", "does each step begin with a command verb?"], ["detail", "are the amounts and times exact?"], ["test", "can a friend follow it?"]]}
        />
        <Worked
          title={"Fix a mistake"}
          steps={[
            <>The friend could not find the glue in the list, so add glue to the materials.</>,
            <>The friend did not know when to stop stirring, so add the time.</>,
          ]}
        />
        <Mistake>Skipping the test. Your friend will find gaps that you cannot see.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How should each step begin?</>,
          <>Which sequence word means at the end?</>,
          <>What does the materials list show?</>,
          <>Are the steps written in the past tense?</>,
        ]}
        answers={[
          <>With a command verb.</>,
          <>Finally.</>,
          <>What you need.</>,
          <>No.</>,
        ]}
      />,
    ),
  },
];
