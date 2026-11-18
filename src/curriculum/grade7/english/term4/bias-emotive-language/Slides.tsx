import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Bias and prejudice",
    content: slide(
      <>
        <Rule>Bias is a one-sided view that favours one person, group or idea and ignores other views. Prejudice is an unfair opinion formed without knowing the facts. A biased text shows only one side of an issue. When you read a text, ask who wrote it, who it is for and what has been left out.</Rule>
        <KeyTable
          title={"Spotting bias"}
          head={["Question", "What to look for"]}
          aria={"Spotting bias. who wrote it?: does the writer gain from it?. what is left out?: is another side missing?. which words are used?: are they fair or loaded?."}
          rows={[["who wrote it?", "does the writer gain from it?"], ["what is left out?", "is another side missing?"], ["which words are used?", "are they fair or loaded?"]]}
        />
        <Worked
          title={"Check for bias"}
          steps={[
            <>The school team is brilliant and the other team cheats shows only one side.</>,
            <>The school team won by two goals gives a fact.</>,
          ]}
        />
        <Mistake>Believing that everything in print is fair. Check for the other side.</Mistake>
      </>,
    ),
  },
  {
    title: "Stereotypes",
    content: slide(
      <>
        <Rule>A stereotype is a fixed, oversimplified idea about a group of people. It treats everyone in the group as the same. A stereotype is often unfair and untrue. Girls are bad at soccer is a stereotype, because many girls play soccer very well. Do not use a stereotype in your writing, and challenge it when you see one.</Rule>
        <KeyTable
          title={"Stereotype or fact"}
          head={["Statement", "Kind"]}
          aria={"Stereotype or fact. Boys are bad at dancing.: stereotype. The match starts at three.: fact. Teenagers are lazy.: stereotype. The shop closed at five.: fact."}
          rows={[["Boys are bad at dancing.", "stereotype"], ["The match starts at three.", "fact"], ["Teenagers are lazy.", "stereotype"], ["The shop closed at five.", "fact"]]}
        />
        <Worked
          title={"Test a statement"}
          steps={[
            <>Ask whether the statement treats a whole group as the same.</>,
            <>Teenagers are lazy does, so it is a stereotype.</>,
          ]}
        />
        <Mistake>Thinking that a stereotype is true because many people say it. A stereotype ignores individual people.</Mistake>
      </>,
    ),
  },
  {
    title: "Emotive and manipulative language",
    content: slide(
      <>
        <Rule>Emotive language uses words that make the reader feel something, such as anger, pity or fear. The heartless owner threw the helpless puppy into the cold uses emotive words. A neutral version is The owner gave the puppy away. Manipulative language pushes you to agree or buy: Only a fool would miss this sale!</Rule>
        <KeyTable
          title={"Emotive and neutral"}
          head={["Emotive", "Neutral"]}
          aria={"Emotive and neutral. catastrophe: loss. heartless owner: owner. outrageous price: high price. helpless puppy: puppy."}
          rows={[["catastrophe", "loss"], ["heartless owner", "owner"], ["outrageous price", "high price"], ["helpless puppy", "puppy"]]}
        />
        <Worked
          title={"Make it neutral"}
          steps={[
            <>Emotive: The disgraceful team lost a shameful match.</>,
            <>Neutral: The team lost the match.</>,
          ]}
        />
        <Mistake>Thinking that emotive language is always wrong. It is useful in a speech or a poem, but a news report should be neutral.</Mistake>
      </>,
    ),
  },
  {
    title: "Rhetorical questions and persuasion",
    content: slide(
      <>
        <Rule>A rhetorical question is asked for effect and not for an answer: Who would not want to save money? Writers use it to make you agree. Advertisers and speakers also use repetition, exaggeration and flattery. When you read, notice these techniques and decide whether the facts support the claim.</Rule>
        <KeyTable
          title={"Persuasive techniques"}
          head={["Technique", "Example"]}
          aria={"Persuasive techniques. rhetorical question: Who would not want to save money?. exaggeration: The best deal in the whole world!. flattery: Smart shoppers choose us.. repetition: Fast, fast, fast delivery.."}
          rows={[["rhetorical question", "Who would not want to save money?"], ["exaggeration", "The best deal in the whole world!"], ["flattery", "Smart shoppers choose us."], ["repetition", "Fast, fast, fast delivery."]]}
        />
        <Worked
          title={"Find the technique"}
          steps={[
            <>Who would not want a free gift? needs no answer, so it is a rhetorical question.</>,
            <>The best deal in the whole world is an exaggeration.</>,
          ]}
        />
        <Mistake>Answering a rhetorical question. A rhetorical question is meant to make you think.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is bias?</>,
          <>What is a stereotype?</>,
          <>What does emotive language make the reader do?</>,
          <>Is a rhetorical question asked to get an answer?</>,
        ]}
        answers={[
          <>A one-sided view.</>,
          <>A fixed, oversimplified idea about a group.</>,
          <>Feel something.</>,
          <>No.</>,
        ]}
      />,
    ),
  },
];
