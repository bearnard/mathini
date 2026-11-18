import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 3: the Children's Charter of South Africa (1992) and children's rights and responsibilities. Facts to confirm: docs/notes/g6-history-t3-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The Children\'s Charter of 1992',
    content: slide(
      <>
        <Rule>In {h.CHILDRENS_CHARTER}, before the first democratic election, children in South Africa drew up the Children&apos;s Charter of South Africa. A charter is a written list of rights and wishes. In it, children asked for the things that they need to grow up safe, healthy and educated.</Rule>
        <FlowSteps
          aria="From the Children's Charter to democracy. In 1992 children drew up a charter of their rights. Two years later, in 1994, the first democratic election took place."
          steps={[
            { label: `${h.CHILDRENS_CHARTER}: children draw up a charter` },
            { label: `${h.CHARTER_TO_ELECTION} years later` },
            { label: '1994: first democratic election' },
          ]}
        />
        <Worked
          title="Children had a voice"
          steps={[
            <>Children wrote down what they needed, in their own words.</>,
            <>The charter was made {h.CHARTER_TO_ELECTION} years before the 1994 election.</>,
            <>It reminded leaders that a new South Africa must care for its children.</>,
          ]}
        />
        <Mistake>Thinking that only adults write about rights. Children took part by drawing up their own charter.</Mistake>
      </>,
    ),
  },
  {
    title: 'What children need',
    content: slide(
      <>
        <Rule>Children have rights because they are young and cannot always protect themselves. Their rights include a name, a family or care, food, shelter, education and play, and protection from abuse and neglect. In all matters about a child, the child&apos;s best interests come first.</Rule>
        <InfoTable
          cols={[{ title: 'A child has the right to', w: 55 }, { title: 'Example', w: 45 }]}
          rows={[
            ['A name and a\nnationality', 'a birth certificate'],
            ['Care and shelter', 'a safe home'],
            ['Food and health care', 'meals and a clinic'],
            ['Education and play', 'school and games'],
            ['Protection from harm', 'safety from abuse'],
          ]}
          aria="A table of children's rights. A name and a nationality, for example a birth certificate. Care and shelter, for example a safe home. Food and health care, for example meals and a clinic. Education and play, for example school and games. Protection from harm, for example safety from abuse."
        />
        <Worked
          title="Best interests first"
          steps={[
            <>When adults decide something that affects a child, they must think about what is best for that child.</>,
            <>A child&apos;s safety and health matter more than adult convenience.</>,
            <>This idea is part of the Bill of Rights in the Constitution.</>,
          ]}
        />
        <Mistake>Thinking that children&apos;s rights are only for some children. Every child in South Africa has these rights.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rights and responsibilities',
    content: slide(
      <>
        <Rule>Children&apos;s rights go together with responsibilities. A responsibility is something that you must do. Children can respect other people&apos;s rights, go to school, look after their things and help at home. Adults, schools and the government must protect children&apos;s rights.</Rule>
        <InfoTable
          cols={[{ title: 'Right', w: 50 }, { title: 'Matching responsibility', w: 50 }]}
          rows={[
            ['To an education', 'attend and try hard'],
            ['To be safe', 'treat others kindly'],
            ['To play', 'share and play fairly'],
            ['To be heard', 'listen to others too'],
          ]}
          aria="A table of rights and matching responsibilities. The right to an education goes with attending and trying hard. The right to be safe goes with treating others kindly. The right to play goes with sharing and playing fairly. The right to be heard goes with listening to others too."
        />
        <Worked
          title="Who protects children?"
          steps={[
            <>Parents and caregivers look after children at home.</>,
            <>Teachers and schools keep children safe and teach them.</>,
            <>The government makes laws and runs services such as schools and clinics.</>,
          ]}
        />
        <Mistake>Thinking that rights mean that you can do whatever you like. Your rights stop where they would harm another person&apos;s rights.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who drew up the Children&apos;s Charter of South Africa?</>,
          <>In which year was it drawn up?</>,
          <>Whose interests come first in decisions about a child?</>,
          <>Name one responsibility that goes with the right to education.</>,
        ]}
        answers={[
          <><strong>Children</strong>.</>,
          <><strong>{h.CHILDRENS_CHARTER}</strong>.</>,
          <>The <strong>child&apos;s best interests</strong>.</>,
          <>To <strong>attend school and try hard</strong>.</>,
        ]}
      />,
    ),
  },
];

// Literal bank (the bank test recomputes every year and span independently).
export const bank: HisItem[] = [
  { prompt: "What is a charter?", options: ["A small boat for fishing trips", "A written list of rights and wishes", "A type of tax that is paid", "A map of the old roads"], answer: "A written list of rights and wishes", explanation: "A charter writes down the rights or wishes of a group." },
  { prompt: "Which group of people wrote the Children's Charter?", options: ["Sailors", "Kings", "Traders", "Children"], answer: "Children", explanation: "Children wrote the charter in their own words." },
  { prompt: "In which year was the Children's Charter drawn up?", options: ["1992", "1948", "1976", "2000"], answer: "1992", explanation: "The Children's Charter dates from 1992." },
  { prompt: "How many years before the first democratic election (1994) was the charter drawn up?", options: ["12 years", "20 years", "2 years", "1 year"], answer: "2 years", explanation: "1994 − 1992 = 2 years." },
  { prompt: "Why do children have special rights?", options: ["They are allowed to ignore every rule", "They cannot always protect themselves", "They are the leaders of the country", "They pay the taxes of the nation"], answer: "They cannot always protect themselves", explanation: "Children are young and need care and protection." },
  { prompt: "Which of these is a right of every child?", options: ["To drive a car on the road", "To vote in every election", "To work all night in a mine", "To go to school and learn"], answer: "To go to school and learn", explanation: "Education is a right of every child." },
  { prompt: "What does \"the child's best interests come first\" mean?", options: ["Adults must do what is best for the child", "The child may do whatever is wanted", "The adult may do whatever is easy", "The child pays for all decisions"], answer: "Adults must do what is best for the child", explanation: "Decisions about a child must think of the child's good." },
  { prompt: "Which right does a birth certificate help a child to have?", options: ["A job at a large factory", "A seat in a Parliament", "A name and a nationality", "A place on a trading ship"], answer: "A name and a nationality", explanation: "A birth certificate proves a child's name and nationality." },
  { prompt: "Which is an example of protection from harm?", options: ["A holiday on a farm", "Safety from abuse and neglect", "A new pair of shoes", "A birthday party at home"], answer: "Safety from abuse and neglect", explanation: "Children have the right to be protected from abuse and neglect." },
  { prompt: "Which responsibility goes with the right to be safe?", options: ["Doing whatever one pleases", "Ignoring the school rules", "Keeping every toy to oneself", "Treating other people kindly"], answer: "Treating other people kindly", explanation: "Each right goes with a responsibility to others." },
  { prompt: "Which responsibility goes with the right to an education?", options: ["Attending school and trying hard", "Staying away from lessons", "Leaving homework undone", "Copying other learners' work"], answer: "Attending school and trying hard", explanation: "A learner uses the right to education by attending and trying." },
  { prompt: "Who must protect the rights of children?", options: ["Only the sailors on ships", "Only the tourists in the country", "Parents, schools and the government", "Only the friends of the child"], answer: "Parents, schools and the government", explanation: "Many people and institutions share this duty." },
  { prompt: "Where is the idea of children's rights part of the law of South Africa?", options: ["In a recipe book used at school", "In the Bill of Rights in the Constitution", "In the rules of a popular game", "In the road signs of a small town"], answer: "In the Bill of Rights in the Constitution", explanation: "The Bill of Rights in the Constitution protects children's rights." },
  { prompt: "Which statement about rights and responsibilities is correct?", options: ["Rights mean doing whatever you like", "Responsibilities are only for adults", "Rights are only for some children", "Rights stop where they harm others' rights"], answer: "Rights stop where they harm others' rights", explanation: "Everyone's rights must be respected, so rights come with responsibilities." },
];

const ChildrensCharterRights = () => (
  <HisTopic
    title="The Children's Charter and Children's Rights"
    subtitle="The Children's Charter of 1992, what children need and rights with responsibilities"
    learnSteps={learnSteps}
    task="gr6-childrens-charter-rights-t3"
    bank={bank}
  />
);

export default ChildrensCharterRights;
