import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Order words",
    content: slide(
      <>
        <Rule>To describe a process, use order words: <Af>eerste</Af> <En>first</En>, <Af>dan</Af> <En>then</En>, <Af>daarna</Af> <En>after that</En> and <Af>laastens</Af> <En>finally</En>.</Rule>
        <OrderTiles tiles={["eerste", "dan", "daarna", "laastens"]} aria="The steps in order: eerste, dan, daarna, laastens." />
        <Worked
          title="Put the steps in order"
          steps={[
            <><Af>Eerste</Af> <En>first</En> is the start.</>,
            <><Af>Laastens</Af> <En>finally</En> is the last step.</>,
          ]}
        />
        <Mistake>Mixing up the order. The steps must follow each other.</Mistake>
      </>,
    ),
  },
  {
    title: "The words you need",
    content: slide(
      <>
        <Rule>To make a sandwich you need <Af>brood</Af> <En>bread</En> and <Af>botter</Af> <En>butter</En>. You <Af>sny</Af> <En>cut</En> and <Af>smeer</Af> <En>spread</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["brood", "bread"], ["botter", "butter"], ["smeer", "spread"]]} aria="Afrikaans words with their English meaning: brood is bread, botter is butter, smeer is spread." />
        <Worked
          title="Match the words"
          steps={[
            <><Af>Die brood is op die bord.</Af> <En>The bread is on the plate.</En></>,
            <><Af>Die botter is in die yskas.</Af> <En>The butter is in the fridge.</En></>,
          ]}
        />
        <Mistake>Using the wrong word for the action. You smeer butter, you sny bread.</Mistake>
      </>,
    ),
  },
  {
    title: "Write the steps",
    content: slide(
      <>
        <Rule>After <Af>eerste</Af> the verb comes second: <Af>Eerste sny ek die brood.</Af> <En>First I cut the bread.</En></Rule>
        <WordBoxes words={["Eerste", "sny", "ek", "die", "brood."]} hot={[0, 1]} aria="The sentence in boxes: Eerste sny ek die brood.." />
        <Worked
          title="Write the first steps"
          steps={[
            <><Af>Eerste sny ek die brood.</Af> <En>First I cut the bread.</En></>,
            <><Af>Dan smeer ek botter op die brood.</Af> <En>Then I spread butter on the bread.</En></>,
          ]}
        />
        <Mistake>Putting ek before the verb. Say Eerste sny ek, not Eerste ek sny.</Mistake>
      </>,
    ),
  },
  {
    title: "Finish the steps",
    content: slide(
      <>
        <Rule>Add the next steps with <Af>daarna</Af> <En>after that</En> and end with <Af>laastens</Af> <En>finally</En>.</Rule>
        <OrderTiles tiles={["eerste", "dan", "daarna", "laastens"]} aria="The steps in order: eerste, dan, daarna, laastens." />
        <Worked
          title="Write the last steps"
          steps={[
            <><Af>Daarna sit ek kaas op die brood.</Af> <En>After that I put cheese on the bread.</En></>,
            <><Af>Laastens eet ek die toebroodjie.</Af> <En>Finally I eat the sandwich.</En></>,
            <><Af>Dit is lekker.</Af> <En>It is tasty.</En></>,
          ]}
        />
        <Mistake>Forgetting the last step. A process ends with laastens.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>first</En>?</>} answer={<><Af>Eerste</Af>.</>} />
        <Check question={<>Which word means <En>finally</En>?</>} answer={<><Af>Laastens</Af>.</>} />
        <Check question={<>Which word means <En>bread</En>?</>} answer={<><Af>Brood</Af>.</>} />
        <Check question={<>Where does the verb go after eerste?</>} answer={<>Second: Eerste sny ek.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'first'?",
    options: ["eerste", "dan", "brood", "laastens"],
    answer: "eerste",
    explanation: "'Eerste' means 'first'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'then'?",
    options: ["brood", "dan", "daarna", "laastens"],
    answer: "dan",
    explanation: "'Dan' means 'then'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'after that'?",
    options: ["eerste", "laastens", "daarna", "brood"],
    answer: "daarna",
    explanation: "'Daarna' means 'after that'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'finally'?",
    options: ["leerders", "eerste", "brood", "laastens"],
    answer: "laastens",
    explanation: "'Laastens' means 'finally'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'bread'?",
    options: ["brood", "daarna", "dan", "eerste"],
    answer: "brood",
    explanation: "'Brood' means 'bread'.",
  },
  {
    prompt: "Watter sin sê 'First I cut the bread'?",
    options: ["Daarna sit ek kaas op die brood.", "Eerste sny ek die brood.", "Laastens eet ek die toebroodjie.", "Die botter is in die yskas."],
    answer: "Eerste sny ek die brood.",
    explanation: "'Eerste sny ek die brood.' means 'First I cut the bread'.",
  },
  {
    prompt: "Watter sin sê 'Then I spread butter on the bread'?",
    options: ["Die botter is in die yskas. for a user", "Die brood is op die bord. in a lab for a task", "Dan smeer ek botter op die brood.", "Dit is lekker. on a system in a program"],
    answer: "Dan smeer ek botter op die brood.",
    explanation: "'Dan smeer ek botter op die brood.' means 'Then I spread butter on the bread'.",
  },
  {
    prompt: "Watter sin sê 'After that I put cheese on the bread'?",
    options: ["Laastens eet ek die toebroodjie.", "Dit is lekker.", "Eerste sny ek die brood.", "Daarna sit ek kaas op die brood."],
    answer: "Daarna sit ek kaas op die brood.",
    explanation: "'Daarna sit ek kaas op die brood.' means 'After that I put cheese on the bread'.",
  },
  {
    prompt: "Watter sin sê 'Finally I eat the sandwich'?",
    options: ["Laastens eet ek die toebroodjie.", "Dan smeer ek botter op die brood.", "Eerste sny ek die brood.", "Dit is lekker."],
    answer: "Laastens eet ek die toebroodjie.",
    explanation: "'Laastens eet ek die toebroodjie.' means 'Finally I eat the sandwich'.",
  },
  {
    prompt: "Watter sin sê 'The bread is on the plate'?",
    options: ["Dan smeer ek botter op die brood.", "Die brood is op die bord.", "Die botter is in die yskas.", "Eerste sny ek die brood."],
    answer: "Die brood is op die bord.",
    explanation: "'Die brood is op die bord.' means 'The bread is on the plate'.",
  },
  {
    prompt: "Watter sin sê 'The butter is in the fridge'?",
    options: ["Dan smeer ek botter op die brood.", "Laastens eet ek die toebroodjie.", "Die botter is in die yskas.", "Die brood is op die bord."],
    answer: "Die botter is in die yskas.",
    explanation: "'Die botter is in die yskas.' means 'The butter is in the fridge'.",
  },
  {
    prompt: "Watter sin sê 'It is tasty'?",
    options: ["Die brood is op die bord.", "Daarna sit ek kaas op die brood.", "Laastens eet ek die toebroodjie.", "Dit is lekker."],
    answer: "Dit is lekker.",
    explanation: "'Dit is lekker.' means 'It is tasty'.",
  },
];

const DescribeProcess = () => (
  <AfrikaansTopic
    title="Beskryf ’n Proses"
    subtitle="Order words and the steps of a simple process, such as making a sandwich"
    learnSteps={learnSteps}
    task="afr6-describe-process-t1"
    bank={bank}
    speak="options"
  />
);

export default DescribeProcess;
