import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 3: Pius Langa (born Bushbuckridge 1939, died 2013; Constitutional Court 1994, Chief Justice 2005 to 2009). Facts to confirm: docs/notes/g6-history-t3-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Who was Pius Langa?',
    content: slide(
      <>
        <Rule>Pius Langa was a South African lawyer and judge. He was born in Bushbuckridge in 1939 and died in 2013. A judge listens to both sides in a court case and decides what the law says. He worked for fairness before and after 1994.</Rule>
        <FlowSteps
          aria="Pius Langa's career. He grew up in Bushbuckridge, became a lawyer who worked for fairness under apartheid, became a judge of the Constitutional Court in 1994, and was Chief Justice from 2005 to 2009."
          steps={[
            { label: 'Grew up in Bushbuckridge' },
            { label: 'A lawyer in the apartheid years' },
            { label: `${h.LANGA_CONCOURT_JUDGE}: Constitutional Court judge` },
            { label: `${h.LANGA_CHIEF_JUSTICE.from} to ${h.LANGA_CHIEF_JUSTICE.to}: Chief Justice` },
          ]}
        />
        <Worked
          title="A lawyer for fairness"
          steps={[
            <>Under apartheid, black South Africans met many barriers when they wanted to study and work as lawyers.</>,
            <>Pius Langa became a lawyer in spite of these barriers.</>,
            <>He used the law to defend people and to work for justice.</>,
          ]}
        />
        <Mistake>Thinking that a judge makes up the law. A judge applies the law and the Constitution fairly in a court case.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Constitutional Court',
    content: slide(
      <>
        <Rule>The Constitutional Court is the highest court for questions about the Constitution. It checks that laws and actions of the government follow the Constitution and the Bill of Rights. In {h.LANGA_CONCOURT_JUDGE} the first judges were appointed, and Pius Langa was one of them.</Rule>
        <InfoTable
          cols={[{ title: 'The Court', w: 45 }, { title: 'What it does', w: 55 }]}
          rows={[
            ['Highest on the\nConstitution', 'has the final word'],
            ['Checks laws', 'they must follow the Constitution'],
            ['Protects rights', 'everyone is treated fairly'],
            ['Open to all', 'even the government must obey'],
          ]}
          aria="A table about the Constitutional Court. It is highest on the Constitution and has the final word. It checks laws, which must follow the Constitution. It protects rights so that everyone is treated fairly. It is open to all, and even the government must obey."
        />
        <Worked
          title="No one is above the law"
          steps={[
            <>In a democracy, the government must also obey the Constitution.</>,
            <>If a law breaks the Bill of Rights, the Court can say so.</>,
            <>This protects the rights of ordinary people.</>,
          ]}
        />
        <Mistake>Thinking that the government can do anything it likes. The Constitution and the courts limit what it may do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Chief Justice Langa',
    content: slide(
      <>
        <Rule>The Chief Justice is the head of the courts. Pius Langa was the Chief Justice from {h.LANGA_CHIEF_JUSTICE.from} to {h.LANGA_CHIEF_JUSTICE.to}, which was {h.langaChiefJusticeYears()} years. He is remembered for his belief in the Constitution, in human dignity and in fair treatment for everyone.</Rule>
        <InfoTable
          cols={[{ title: 'Year', w: 25 }, { title: 'What happened', w: 75 }]}
          rows={[
            [`${h.LANGA_CONCOURT_JUDGE}`, 'Judge of the Constitutional Court'],
            [`${h.LANGA_CHIEF_JUSTICE.from}`, 'Becomes Chief Justice'],
            [`${h.LANGA_CHIEF_JUSTICE.to}`, 'Leaves the office of Chief Justice'],
          ]}
          aria={`A timeline table. ${h.LANGA_CONCOURT_JUDGE}: judge of the Constitutional Court. ${h.LANGA_CHIEF_JUSTICE.from}: becomes Chief Justice. ${h.LANGA_CHIEF_JUSTICE.to}: leaves the office of Chief Justice.`}
        />
        <Worked
          title="What dignity means"
          steps={[
            <>Human dignity means that every person has value and must be treated with respect.</>,
            <>Human dignity is one of the founding values of the Constitution.</>,
            <>A judge such as Pius Langa protects dignity by applying the law fairly.</>,
          ]}
        />
        <Mistake>Mixing up the years. He joined the Constitutional Court in {h.LANGA_CONCOURT_JUDGE} and was Chief Justice from {h.LANGA_CHIEF_JUSTICE.from}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which year did Pius Langa become a Constitutional Court judge?</>,
          <>What does a judge do?</>,
          <>For how many years was he Chief Justice (2005 to 2009)?</>,
          <>What does human dignity mean?</>,
        ]}
        answers={[
          <><strong>{h.LANGA_CONCOURT_JUDGE}</strong>.</>,
          <>Decides what the <strong>law says</strong> in a case.</>,
          <>2009 − 2005 = <strong>{h.langaChiefJusticeYears()} years</strong>.</>,
          <>Every person has <strong>value and deserves respect</strong>.</>,
        ]}
      />,
    ),
  },
];

// Literal bank (the bank test recomputes every year and span independently).
export const bank: HisItem[] = [
  { prompt: "What was Pius Langa's profession?", options: ["A sailor and explorer", "A lawyer and judge", "A farmer and trader", "A doctor and surgeon"], answer: "A lawyer and judge", explanation: "Pius Langa was a lawyer and later a judge." },
  { prompt: "Where was Pius Langa born?", options: ["Mossel Bay", "Soweto", "Kimberley", "Bushbuckridge"], answer: "Bushbuckridge", explanation: "He was born in Bushbuckridge in 1939." },
  { prompt: "What does a judge do?", options: ["Decides what the law says in a case", "Makes laws for the whole country", "Collects the taxes of citizens", "Leads the army of the nation"], answer: "Decides what the law says in a case", explanation: "A judge applies the law fairly." },
  { prompt: "Which court has the final word on the Constitution?", options: ["A local traffic court", "A school disciplinary hearing", "The Constitutional Court", "A magistrate's small court"], answer: "The Constitutional Court", explanation: "The Constitutional Court has the final word on the Constitution." },
  { prompt: "Pius Langa joined the Constitutional Court in which year?", options: ["1948", "1994", "1976", "2005"], answer: "1994", explanation: "He was one of the first judges of the Court in 1994." },
  { prompt: "In which year did Pius Langa become Chief Justice?", options: ["1994", "2000", "2009", "2005"], answer: "2005", explanation: "He was Chief Justice from 2005 to 2009." },
  { prompt: "For how many years was Pius Langa Chief Justice?", options: ["4 years", "14 years", "40 years", "9 years"], answer: "4 years", explanation: "2009 − 2005 = 4 years." },
  { prompt: "What is the Chief Justice?", options: ["The leader of the army", "The head of the police", "The head of the courts", "The ruler of a province"], answer: "The head of the courts", explanation: "The Chief Justice leads the judges and the courts." },
  { prompt: "What does the Constitutional Court check?", options: ["That shops charge fair prices", "That laws follow the Constitution", "That farmers plant enough seed", "That ships arrive on time"], answer: "That laws follow the Constitution", explanation: "The Court checks laws and government actions against the Constitution." },
  { prompt: "Why can the Constitutional Court protect ordinary people?", options: ["The government can ignore every court", "Only judges have any rights at all", "The Court sets the price of food", "Even the government must obey the Constitution"], answer: "Even the government must obey the Constitution", explanation: "No one is above the law in a democracy." },
  { prompt: "What does human dignity mean?", options: ["Every person has value and deserves respect", "Only leaders deserve any respect", "Respect is given only for money", "Dignity is the name of a law"], answer: "Every person has value and deserves respect", explanation: "Human dignity is a value in the Constitution." },
  { prompt: "Under apartheid, which barriers did black South Africans meet?", options: ["Free schools in every single town", "Equal jobs for every single person", "Unfair laws that limited their study and work", "A vote in every general election"], answer: "Unfair laws that limited their study and work", explanation: "Pius Langa became a lawyer in spite of these barriers." },
  { prompt: "Which belief is Pius Langa remembered for?", options: ["Rule by one king for life", "Fair treatment under the Constitution", "Trade without any laws", "Rights for only some people"], answer: "Fair treatment under the Constitution", explanation: "He believed in the Constitution and in dignity for all." },
  { prompt: "Why is the law the same for the government and for citizens in a democracy?", options: ["The government makes no mistakes", "Only citizens must obey the law", "Laws apply only on weekdays", "No one is above the law"], answer: "No one is above the law", explanation: "The courts hold everyone to the Constitution." },
];

const PiusLanga = () => (
  <HisTopic
    title="Pius Langa"
    subtitle="A lawyer who became a Constitutional Court judge and Chief Justice"
    learnSteps={learnSteps}
    task="gr6-pius-langa-t3"
    bank={bank}
  />
);

export default PiusLanga;
