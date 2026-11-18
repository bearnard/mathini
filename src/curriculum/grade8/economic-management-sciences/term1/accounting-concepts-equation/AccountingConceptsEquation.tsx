import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { EquationBalance } from '../../../../../components/diagrams/ems/EmsPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { TRANSACTIONS, finalEquation, profitOrLoss, trail } from '../../../../../components/diagrams/ems/ems8a-helpers';

// Every amount comes from ems8a-helpers.ts (tested in ems8a-helpers.test.ts and g8EmsT1.test.ts): each step of the equation balances.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const t = trail();
const end = finalEquation();
const pl = profitOrLoss(3000, 1000);

export const learnSteps: LearnStep[] = [
  {
    title: 'Accounting concepts',
    content: slide(
      <>
        <Rule>A sole trader is a business owned and run by one person. Accounting records the business's transactions. The key concepts are: assets (what the business owns), liabilities (what it owes), owner's equity (the owner's share), capital (what the owner puts in), income, expenses, profit and loss. Debit and credit are the two sides of an account.</Rule>
        <FactCards
          cards={[
            { title: 'Asset', line1: 'something of value that', line2: 'the business owns' },
            { title: 'Liability', line1: 'an amount that the', line2: 'business owes' },
            { title: "Owner's equity", line1: "the owner's share:", line2: 'assets minus liabilities' },
            { title: 'Capital', line1: 'money or assets the owner', line2: 'puts into the business' },
          ]}
          aria="Accounting concepts. Asset: something of value that the business owns. Liability: an amount that the business owes. Owner's equity: the owner's share of the business, assets minus liabilities. Capital: money or assets that the owner puts into the business."
        />
        <Worked
          title="Name the concept"
          steps={[
            'A computer that the business owns is an asset.',
            'R2 000 that the business owes a supplier is a liability.',
            `Income of R3 000 and expenses of R1 000 give a ${pl.kind} of ${randNb(pl.amount)}.`,
          ]}
        />
        <Mistake>Mixing up assets and liabilities. An asset is owned by the business; a liability is owed by it.</Mistake>
      </>,
    ),
  },
  {
    title: 'The accounting equation',
    content: slide(
      <>
        <Rule>The accounting equation is Assets = Owner's equity + Liabilities (A = OE + L). It must balance after every transaction. Each transaction changes at least two items, so the equation stays in balance. Capital and profit increase owner's equity; expenses and losses decrease it.</Rule>
        <EquationBalance assets={t[1].assets} liabilities={t[1].liabilities} equity={t[1].equity} aria="The accounting equation after the owner puts in R20 000 and the business buys equipment of R5 000 on credit: assets R25 000 equal liabilities R5 000 plus owner's equity R20 000." />
        <Worked
          title="Two transactions"
          steps={[
            `${TRANSACTIONS[0].text} Assets ${randNb(t[0].assets)} = liabilities ${randNb(t[0].liabilities)} + equity ${randNb(t[0].equity)}.`,
            `${TRANSACTIONS[1].text} Assets ${randNb(t[1].assets)} = liabilities ${randNb(t[1].liabilities)} + equity ${randNb(t[1].equity)}.`,
            'In each case the two sides are equal, so the equation balances.',
          ]}
        />
        <Mistake>Changing only one side of the equation. A transaction changes at least two items, so the equation stays balanced.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transactions and the equation',
    content: slide(
      <>
        <Rule>To find the effect of a transaction, decide which items increase or decrease: assets, liabilities or owner's equity. Earning service fees increases an asset (bank) and owner's equity. Paying an expense decreases an asset and owner's equity. Repaying a loan decreases an asset and a liability.</Rule>
        <EquationBalance assets={end.assets} liabilities={end.liabilities} equity={end.equity} aria="The accounting equation after all five transactions: assets R25 000 equal liabilities R3 000 plus owner's equity R22 000." />
        <Worked
          title="The last three transactions"
          steps={[
            `${TRANSACTIONS[2].text} Assets ${randNb(t[2].assets)} = ${randNb(t[2].liabilities)} + ${randNb(t[2].equity)}.`,
            `${TRANSACTIONS[3].text} Assets ${randNb(t[3].assets)} = ${randNb(t[3].liabilities)} + ${randNb(t[3].equity)}.`,
            `${TRANSACTIONS[4].text} Assets ${randNb(end.assets)} = ${randNb(end.liabilities)} + ${randNb(end.equity)}.`,
          ]}
        />
        <Mistake>Treating repaying a loan as an expense. It reduces an asset and a liability and does not change owner's equity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Write the accounting equation.</>,
          <>The owner puts R20 000 into the business. What happens to assets and equity?</>,
          <>The business pays R1 000 for rent. What happens to assets and equity?</>,
          <>Find owner's equity if assets are R25 000 and liabilities R3 000.</>,
        ]}
        answers={[
          <>A = OE + L.</>,
          <>Both increase by R20 000.</>,
          <>Both decrease by R1 000.</>,
          <>{randNb(end.equity)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a sole trader?",
    options: ["A business owned by many shareholders", "A government department", "A business owned and run by one person", "A bank"],
    answer: "A business owned and run by one person",
    explanation: "A sole trader is a one-person business.",
  },
  {
    prompt: "What is an asset?",
    options: ["Something of value that the business owns", "An amount that the business owes", "Money earned from services", "A cost of running the business"],
    answer: "Something of value that the business owns",
    explanation: "Assets are owned by the business.",
  },
  {
    prompt: "What is a liability?",
    options: ["Something the business owns", "The owner's share", "Money earned from services", "An amount that the business owes"],
    answer: "An amount that the business owes",
    explanation: "Liabilities are owed by the business.",
  },
  {
    prompt: "What is capital?",
    options: ["Money borrowed from a bank", "What the owner puts in", "A cost of running the business", "The profit for the year"],
    answer: "What the owner puts in",
    explanation: "Capital is the owner's investment.",
  },
  {
    prompt: "What is the accounting equation?",
    options: ["Assets = Income + Expenses", "Assets = Owner's equity + Liabilities", "Liabilities = Assets + Equity", "Profit = Assets − Capital"],
    answer: "Assets = Owner's equity + Liabilities",
    explanation: "The accounting equation is A = OE + L: the assets equal the owner's equity plus the liabilities, and it must balance.",
  },
  {
    prompt: "A business has assets of R25 000 and liabilities of R3 000. What is its owner's equity?",
    options: ["R28 000", "R3 000", "R25 000", "R22 000"],
    answer: "R22 000",
    explanation: "OE = A − L = 25 000 − 3 000 = 22 000.",
  },
  {
    prompt: "Owner's equity is R20 000 and liabilities are R5 000. What are the assets?",
    options: ["R25 000", "R15 000", "R20 000", "R5 000"],
    answer: "R25 000",
    explanation: "A = OE + L = 20 000 + 5 000 = 25 000.",
  },
  {
    prompt: "Capital of R20 000 is paid into the business bank account. What is the effect?",
    options: ["Assets increase and liabilities increase", "Only liabilities increase", "Assets and owner's equity both increase by R20 000", "Assets decrease and equity increases"],
    answer: "Assets and owner's equity both increase by R20 000",
    explanation: "Capital increases the bank (an asset) and owner's equity.",
  },
  {
    prompt: "The business buys equipment for R5 000 on credit. What happens?",
    options: ["Assets and equity both increase", "Assets decrease by R5 000", "Equity decreases by R5 000", "Assets and liabilities increase"],
    answer: "Assets and liabilities increase",
    explanation: "The equipment is an asset and the amount owed is a liability.",
  },
  {
    prompt: "The business earns R3 000 in fees paid into the bank. What happens?",
    options: ["Assets and liabilities both increase", "Assets and owner's equity both increase by R3 000", "Liabilities decrease", "Only assets increase"],
    answer: "Assets and owner's equity both increase by R3 000",
    explanation: "Income increases the bank and owner's equity.",
  },
  {
    prompt: "The business pays R1 000 for rent from the bank. What happens?",
    options: ["Assets and owner's equity both decrease by R1 000", "Assets and liabilities both decrease", "Only equity decreases", "Assets increase"],
    answer: "Assets and owner's equity both decrease by R1 000",
    explanation: "An expense decreases the bank and owner's equity.",
  },
  {
    prompt: "The business repays R2 000 of the amount it owes. What happens?",
    options: ["Assets and equity both decrease", "Only assets decrease", "Assets and liabilities decrease", "Liabilities increase"],
    answer: "Assets and liabilities decrease",
    explanation: "Repaying a debt reduces the bank and the liability, and equity does not change.",
  },
  {
    prompt: "Fees earned are R3 000 and costs paid are R1 000. What is the result?",
    options: ["A loss of R2 000", "A profit of R4 000", "A profit of R2 000", "A loss of R4 000"],
    answer: "A profit of R2 000",
    explanation: "Income minus expenses = 2 000, so there is a profit.",
  },
  {
    prompt: "Income is R1 000 and expenses are R3 000. What is this?",
    options: ["A loss of R2 000", "A profit of R2 000", "A loss of R4 000", "A profit of R4 000"],
    answer: "A loss of R2 000",
    explanation: "Expenses are more than income, so there is a loss.",
  },
];

const AccountingConceptsEquation = () => (
  <CapsSubjectTopic
    title="Accounting Concepts and the Accounting Equation"
    subtitle="Assets, liabilities, owner equity, profit and the effect of transactions on A = OE + L"
    learnSteps={learnSteps}
    task="gr8-accounting-concepts-equation-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default AccountingConceptsEquation;
