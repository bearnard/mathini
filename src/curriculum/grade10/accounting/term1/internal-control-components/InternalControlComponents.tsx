import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as a from '../../../../../components/diagrams/accounting/acc10';

// Every amount comes from acc10.ts (whole cents, exact arithmetic; tested in acc10.test.ts and g10AccGaps.test.ts). All data are imaginary teaching data.
const R = (c: number): string => formatRand(c).replace(/,00$/, '');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Why a business needs internal control',
    content: slide(
      <>
        <Rule>Internal control is the set of methods a business uses to protect its assets, prevent fraud and errors, keep accurate records and make sure that rules are followed. It has five components: the control environment, risk assessment, control activities, information and communication, and monitoring.</Rule>
        <InfoTable
          cols={[{ title: 'Component', w: 36 }, { title: 'In plain words', w: 64 }]}
          rows={[
            ['1 Control environment', 'honest, ethical culture set by owners'],
            ['2 Risk assessment', 'find what could go wrong'],
            ['3 Control activities', 'policies and procedures that stop it'],
            ['4 Information', 'records and communication'],
            ['5 Monitoring', 'check that controls work'],
          ]}
          aria="A table of the five components of internal control. 1 Control environment: an honest, ethical culture set by the owners. 2 Risk assessment: find what could go wrong. 3 Control activities: policies and procedures that stop it. 4 Information: records and communication. 5 Monitoring: check that the controls work."
        />
        <Worked
          title="One example, five components"
          steps={[
            'Environment: the owner insists on honesty and gives a good example.',
            'Risk: cash in the till and stock on the shelves could be stolen.',
            'Control activity: count the cash and stock, and let two people handle the money.',
            'Information: record every sale on a till roll. Monitoring: the owner checks the counts each month.',
          ]}
        />
        <Mistake>Thinking that internal control is only locks and cameras. It starts with the culture and the people, and it is checked again and again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Control activities: policies and procedures',
    content: slide(
      <>
        <Rule>A policy says what the business must do, and a procedure says how it is done step by step. Control activities include separating duties (one person orders, another receives and another pays), authorisation by a manager, safe storage of assets, numbered documents and regular counts and reconciliations.</Rule>
        <InfoTable
          cols={[{ title: 'Control activity', w: 44 }, { title: 'It prevents', w: 56 }]}
          rows={[
            ['Separate duties', 'one person hiding a fraud'],
            ['Authorise payments', 'unapproved spending'],
            ['Numbered documents', 'lost or false invoices'],
            ['Count stock and cash', 'theft and errors going unseen'],
          ]}
          aria="A table of control activities. Separate duties prevents one person hiding a fraud. Authorise payments prevents unapproved spending. Numbered documents prevents lost or false invoices. Count stock and cash prevents theft and errors going unseen."
        />
        <Worked
          title="Count and compare"
          steps={[
            `Stock records show ${a.STOCK.system} units. The count finds ${a.STOCK.counted} units.`,
            `Shortage = ${a.STOCK.system} − ${a.STOCK.counted} = ${a.stockShortage()} units.`,
            `At ${R(a.STOCK.cost)} each, the loss is ${a.stockShortage()} × ${R(a.STOCK.cost)} = ${R(a.stockLoss())}.`,
            `Cash: till roll ${R(a.CASH.tillRoll)}, counted ${R(a.CASH.counted)}, so the shortage is ${R(a.cashShortage())}.`,
          ]}
        />
        <Mistake>Letting one person order, receive, record and pay. With no separation of duties, a fraud can stay hidden.</Mistake>
      </>,
    ),
  },
  {
    title: 'Information, communication and monitoring',
    content: slide(
      <>
        <Rule>Good information means accurate and timely records (receipts, invoices, till rolls, journals) that reach the people who need them. Communication means that staff know their duties and who to report problems to. Monitoring means that managers and the owner review the records, compare actual and counted amounts, look at the differences and correct the weaknesses that they find.</Rule>
        <InfoTable
          cols={[{ title: 'Question', w: 46 }, { title: 'Component', w: 54 }]}
          rows={[
            ['Are records correct and on time?', 'information'],
            ['Do staff know who to report to?', 'communication'],
            ['Did we compare count and records?', 'monitoring'],
            ['Is the owner honest and ethical?', 'control environment'],
          ]}
          aria="A table matching questions to components. Are records correct and on time: information. Do staff know who to report to: communication. Did we compare the count and the records: monitoring. Is the owner honest and ethical: control environment."
        />
        <Worked
          title="Follow up the difference"
          steps={[
            `The cash shortage is ${R(a.cashShortage())}: this is found by monitoring.`,
            'The cashier is asked to explain and the till roll is re-checked: a correction of the weakness.',
            'The owner changes the procedure so that two people count the cash: a stronger control activity.',
          ]}
        />
        <Mistake>Finding a difference and doing nothing. Monitoring is only useful when the weakness is corrected.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the five components of internal control.</>,
          <>Which component checks that the controls are working?</>,
          <>Stock records show 200 units and the count finds 188. How many units are short?</>,
          <>Why should the person who handles cash not also keep the records?</>,
        ]}
        answers={[
          <>Control environment, risk assessment, control activities, information and communication, and monitoring.</>,
          <>Monitoring.</>,
          <>{a.stockShortage()} units.</>,
          <>One person could hide a fraud or error, so the duties must be separated.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is internal control?",
    options: ["Rules that decide the selling prices", "Plans that set the tax of the owner", "Methods that protect assets and records", "Reports that go to the customers"],
    answer: "Methods that protect assets and records",
    explanation: "Internal control helps to prevent fraud and errors and to keep records accurate.",
  },
  {
    prompt: "How many components does internal control have in this course?",
    options: ["Five", "Three", "Four", "Seven"],
    answer: "Five",
    explanation: "They are the control environment, risk assessment, control activities, information and communication, and monitoring.",
  },
  {
    prompt: "Which component sets an honest and ethical tone in the business?",
    options: ["The monitoring of records", "The risk assessment of assets", "The control of the stock", "The control environment"],
    answer: "The control environment",
    explanation: "The attitude of the owners and managers shapes the culture of honesty in the whole business.",
  },
  {
    prompt: "Which component asks what could go wrong with assets?",
    options: ["Control environment", "Risk assessment", "Monitoring performance", "Communication of duties"],
    answer: "Risk assessment",
    explanation: "Risk assessment identifies threats such as theft, errors and loss, before controls are chosen.",
  },
  {
    prompt: "What is the difference between a policy and a procedure?",
    options: ["A policy says how, a procedure says what", "A policy says what, a procedure says how", "They mean exactly the same thing", "A policy is only for the auditors"],
    answer: "A policy says what, a procedure says how",
    explanation: "A procedure gives the steps for carrying out the policy.",
  },
  {
    prompt: "Which of these is a control activity?",
    options: ["Hoping that no errors are ever made", "Letting one clerk do all the tasks", "Throwing away every old receipt", "Separating the duties of ordering and paying"],
    answer: "Separating the duties of ordering and paying",
    explanation: "Separation of duties means that no one person can hide a fraud.",
  },
  {
    prompt: "Why are invoices and receipts numbered in order?",
    options: ["To show whether any are lost or missing", "To make the paper cost much less", "To hide the amounts from the staff", "To avoid the need of any records"],
    answer: "To show whether any are lost or missing",
    explanation: "A gap in the numbers is a warning that a document is missing or was misused.",
  },
  {
    prompt: "Why should a manager authorise large payments?",
    options: ["To make every payment slower", "To remove the need of the bank", "To stop spending that is not approved", "To let the cashier decide alone"],
    answer: "To stop spending that is not approved",
    explanation: "Authorisation makes sure that the payment is real and approved.",
  },
  {
    prompt: "Which component involves accurate records that reach the right people on time?",
    options: ["Risk assessment", "Control environment", "Monitoring performance", "Information and communication"],
    answer: "Information and communication",
    explanation: "Staff need correct records and clear instructions about their duties and who to report to.",
  },
  {
    prompt: "The stock records show 200 units but the count finds 188. How many units are missing?",
    options: ["188 units", "12 units", "388 units", "22 units"],
    answer: "12 units",
    explanation: "The shortage is the records less the count: 200 − 188 = 12 units.",
  },
  {
    prompt: "The 12 missing units cost R45 each. What is the value of the shortage?",
    options: ["R540", "R450", "R5 400", "R2 256"],
    answer: "R540",
    explanation: "12 units × R45 = R540, and this loss is found by counting the stock.",
  },
  {
    prompt: "The till roll shows R12 400 but the cash counted is R12 250. What is the cash shortage?",
    options: ["R24 650", "R1 500", "R150", "R12 250"],
    answer: "R150",
    explanation: "The shortage is the till roll less the cash counted: R12 400 − R12 250 = R150.",
  },
  {
    prompt: "Which component is used when the owner compares the counts with the records each month?",
    options: ["Risk assessment", "Control environment", "Monitoring", "Communication"],
    answer: "Monitoring",
    explanation: "Monitoring checks that the controls work and finds the differences that must be followed up.",
  },
  {
    prompt: "A difference is found but nobody follows it up. Which component has failed?",
    options: ["Monitoring, because weaknesses are not corrected", "Risk assessment, because no risk exists", "The records, because they were typed", "The bank, because it kept the cash"],
    answer: "Monitoring, because weaknesses are not corrected",
    explanation: "Monitoring includes correcting the weakness after a difference is found.",
  },
];

const InternalControlComponents = () => (
  <CapsSubjectTopic
    title="Internal Control: the Five Components"
    subtitle="Control environment, risk assessment, control activities, information and communication, and monitoring"
    learnSteps={learnSteps}
    task="gr10-internal-control-components-t1"
    bank={bank}
    apiPath="/api/caps/acc"
    grade={10}
  />
);

export default InternalControlComponents;
