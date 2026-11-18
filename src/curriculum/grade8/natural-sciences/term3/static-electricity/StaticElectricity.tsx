import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ChargePairs } from '../../../../../components/diagrams/charge10/Charge10';
import { RubTransfer } from '../../../../../components/diagrams/ns8/Ns8b';
import { afterRubbing, chargeAfter, force } from '../../../../../components/diagrams/ns8/ns8bHelpers';

// Every statement comes from ns8bHelpers.ts (tested in ns8bHelpers.test.ts and g8NsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const rub = afterRubbing('wool', 'plastic');

export const learnSteps: LearnStep[] = [
  {
    title: 'Charging by friction',
    content: slide(
      <>
        <Rule>When two different materials such as plastic, perspex, glass, nylon, wool and silk are rubbed together, electrons move from the atoms of one material to the atoms of the other. The material that loses electrons gets a positive charge on its surface and the one that gains electrons gets a negative charge. Only the electrons move: the protons and neutrons stay where they are.</Rule>
        <RubTransfer />
        <Worked
          title="Rub a plastic ruler with wool"
          steps={[
            'Electrons move from the wool to the plastic ruler.',
            `The ruler gains electrons, so it is ${rub.plastic}. The wool loses electrons, so it is ${rub.wool}.`,
            `An atom with 8 protons and 9 electrons is ${chargeAfter(8, 9)}, and one with 8 protons and 7 electrons is ${chargeAfter(8, 7)}.`,
          ]}
        />
        <Mistake>Saying that protons move from one material to the other. Only electrons are transferred.</Mistake>
      </>,
    ),
  },
  {
    title: 'Like and unlike charges',
    content: slide(
      <>
        <Rule>Objects with the same (like) charge repel each other, and objects with opposite (unlike) charges attract each other. This is why a charged ruler picks up small pieces of paper: the charges in the paper are attracted or repelled by the ruler.</Rule>
        <ChargePairs pairs={[[1, 1], [-1, -1], [1, -1]]} />
        <Worked
          title="Predict the force"
          steps={[
            `Two positively charged balloons: they ${force('positive', 'positive')}.`,
            `A positively charged rod and a negatively charged rod: they ${force('positive', 'negative')}.`,
            'A charged ruler brought close to tiny pieces of paper attracts them, so you can see the effect of the charge.',
          ]}
        />
        <Mistake>Saying that opposite charges repel. Opposite charges attract.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sparks and shocks',
    content: slide(
      <>
        <Rule>When the extra electrons on a charged object move away suddenly, this is a discharge. A discharge of electrons causes the spark or shock of static electricity, especially when the air is dry. Lightning is a very large discharge.</Rule>
        <FactCards
          cards={[
            { title: 'Charge builds up', line1: 'friction moves electrons', line2: 'from one surface to another' },
            { title: 'Discharge', line1: 'the electrons move away', line2: 'in a spark or a small shock' },
            { title: 'Dry air', line1: 'makes static electricity', line2: 'more likely to build up' },
          ]}
          aria="Sparks and shocks. Charge builds up when friction moves electrons from one surface to another. A discharge is when the electrons move away in a spark or a small shock. Dry air makes static electricity more likely to build up."
        />
        <Worked
          title="A shock from a car door"
          steps={[
            'Sliding over the car seat moves electrons between your clothes and the seat.',
            'You carry a charge, and touching the metal door lets the electrons move away.',
            'This discharge is felt as a small shock or seen as a spark.',
          ]}
        />
        <Mistake>Thinking that static electricity is made by the air. It comes from the transfer of electrons between materials.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which particles move when a ruler is rubbed with wool?</>,
          <>A ruler gains electrons. What charge does it have?</>,
          <>What happens between two objects with the same charge?</>,
          <>What causes the spark of static electricity?</>,
        ]}
        answers={[
          <>Electrons.</>,
          <>{rub.plastic[0].toUpperCase() + rub.plastic.slice(1)}.</>,
          <>They {force('negative', 'negative')} each other.</>,
          <>A discharge of electrons.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "When a plastic ruler is rubbed with wool, which particles are transferred between them?",
    options: ["Protons", "Neutrons", "Electrons", "Atoms"],
    answer: "Electrons",
    explanation: "Only electrons move; protons and neutrons stay where they are.",
  },
  {
    prompt: "A surface gains extra electrons after being rubbed. How is it charged?",
    options: ["Negatively", "Positively", "Not at all charged", "Both ways at once"],
    answer: "Negatively",
    explanation: "Extra electrons make a surface negatively charged.",
  },
  {
    prompt: "After rubbing, a surface has lost some of its electrons. How is it charged?",
    options: ["Negatively", "Not at all charged", "Both ways at once", "Positively"],
    answer: "Positively",
    explanation: "Losing electrons leaves more positive than negative charge.",
  },
  {
    prompt: "Two objects both have a positive charge. What happens between them?",
    options: ["They attract each other", "They repel each other", "Nothing happens", "They exchange protons"],
    answer: "They repel each other",
    explanation: "Like charges repel.",
  },
  {
    prompt: "A positively charged object and a negatively charged object are brought close together. What happens?",
    options: ["They repel each other", "They attract each other", "Nothing happens", "They exchange neutrons"],
    answer: "They attract each other",
    explanation: "Unlike charges attract.",
  },
  {
    prompt: "Tiny bits of paper jump up to a charged ruler. Why?",
    options: ["The ruler is magnetic all over", "The paper has no electrons", "Air currents lift the paper", "The ruler attracts the paper"],
    answer: "The ruler attracts the paper",
    explanation: "The charged ruler attracts the paper.",
  },
  {
    prompt: "What is the cause of the spark or shock of static electricity?",
    options: ["A discharge of electrons", "A flow of protons", "A change in the air pressure", "A chemical reaction in the cell"],
    answer: "A discharge of electrons",
    explanation: "The electrons move away suddenly in a discharge.",
  },
  {
    prompt: "When is a static shock more likely?",
    options: ["When the air is wet", "Only at night", "When the air is dry", "Only in a metal room"],
    answer: "When the air is dry",
    explanation: "Dry air makes static electricity more likely to build up.",
  },
  {
    prompt: "An atom has 8 protons and 9 electrons. What is its charge?",
    options: ["Positive", "Neutral", "It depends on the neutrons", "Negative"],
    answer: "Negative",
    explanation: "There is one more electron than protons.",
  },
  {
    prompt: "An atom has 8 protons and 7 electrons. What is its charge?",
    options: ["Negative", "Positive", "Neutral", "It has no charge at all"],
    answer: "Positive",
    explanation: "There is one more proton than electrons.",
  },
  {
    prompt: "A plastic ruler becomes negative when it is rubbed with wool. What charge does the wool get?",
    options: ["Positive", "Negative", "Neutral", "The same as the ruler"],
    answer: "Positive",
    explanation: "The wool lost the electrons that the ruler gained.",
  },
  {
    prompt: "Which of these materials can be rubbed to make static electricity?",
    options: ["Water and air", "Only metals", "Plastic and wool", "Only glass and water"],
    answer: "Plastic and wool",
    explanation: "Friction between materials such as plastic, perspex, glass, nylon, wool and silk transfers electrons.",
  },
  {
    prompt: "Lightning is an example of what?",
    options: ["A flow of protons", "A reaction in a cell", "A huge static discharge", "A spark from a bulb"],
    answer: "A huge static discharge",
    explanation: "Lightning is a huge electron discharge.",
  },
  {
    prompt: "What do you observe when a charged ruler is held near tiny pieces of tissue paper?",
    options: ["The paper is attracted to the ruler", "The paper is pushed away from the ruler", "The paper burns", "Nothing happens to the paper"],
    answer: "The paper is attracted to the ruler",
    explanation: "The charges in the paper are attracted by the ruler.",
  },
];

const StaticElectricity = () => (
  <CapsSubjectTopic
    title="Static Electricity"
    subtitle="Charging by friction, like and unlike charges, and discharge"
    learnSteps={learnSteps}
    task="gr8-static-electricity-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default StaticElectricity;
