import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { EquationBalance, JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { JournalColumns } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { CRJ_ENTRIES, crjColumn, crjEffectOnEquation, crjTotal } from '../../../../../components/diagrams/ems/ems8b-helpers';

// Every amount comes from ems8b-helpers.ts (tested in ems8b-helpers.test.ts and g8EmsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const eff = crjEffectOnEquation();

export const learnSteps: LearnStep[] = [
  {
    title: 'The Cash Receipts Journal',
    content: slide(
      <>
        <Rule>The Cash Receipts Journal (CRJ) is the book in which a business records all the money it receives. It has a date column, a document number column (the receipt number), a details column, a Bank column and analysis columns that show where the money came from, for example Fees earned and Capital. Each entry is made from a source document, such as a receipt or a deposit slip.</Rule>
        <JournalColumns bank={crjTotal()} parts={[{ label: 'Capital', amount: crjColumn('Capital') }, { label: 'Fees earned', amount: crjColumn('Fees earned') }]} bankLabel="Bank" />
        <Worked
          title="Why two kinds of column?"
          steps={[
            'The Bank column shows how much money came into the bank account.',
            'The analysis columns show the reason: the owner put in capital, or the business earned fees.',
            `Every receipt is entered once in the Bank column and once in an analysis column, so the two must agree (${randNb(crjTotal())}).`,
          ]}
        />
        <Mistake>Entering a payment in the Cash Receipts Journal. Money paid out goes in the Cash Payments Journal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Entering and closing off',
    content: slide(
      <>
        <Rule>Each receipt is entered in date order, with its document number and details. The journal is closed off by adding up each column. The Bank column total must equal the total of the analysis columns (cross-casting). The totals are underlined twice to show that the journal is closed.</Rule>
        <JournalColumns bank={crjTotal()} parts={[{ label: 'Capital', amount: crjColumn('Capital') }, { label: 'Fees earned', amount: crjColumn('Fees earned') }]} bankLabel="Bank" />
        <JournalTable
          title="Cash Receipts Journal of Thandi's Tutoring, March"
          columns={['Date', 'Doc and details', 'Bank']}
          rows={CRJ_ENTRIES.map((e) => [e.date, `${e.doc} ${e.details}`, e.amount])}
          total={{ label: 'Total (Bank column)', amount: crjTotal() }}
          aria="The Cash Receipts Journal for March. Capital R10 000 on 1 March, fees R4 500 on 5 March and fees R2 500 on 19 March. The Bank column total is R17 000."
        />
        <Worked
          title="Close off the journal"
          steps={[
            `Bank column: ${CRJ_ENTRIES.map((e) => randNb(e.amount)).join(' + ')} = ${randNb(crjTotal())}.`,
            `Analysis columns: capital ${randNb(crjColumn('Capital'))} + fees earned ${randNb(crjColumn('Fees earned'))} = ${randNb(crjColumn('Capital') + crjColumn('Fees earned'))}.`,
            'The two totals are equal, so the journal cross-casts and can be closed.',
          ]}
        />
        <Mistake>Closing the journal without checking the cross-cast. If the totals differ there is an error to find first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Effect on the accounting equation',
    content: slide(
      <>
        <Rule>Each cash receipt changes the accounting equation. Money received increases the bank, which is an asset. Capital increases owner's equity. Fees earned are income, which also increases owner's equity. So for these receipts assets and owner's equity increase by the same amount and the equation stays in balance.</Rule>
        <EquationBalance assets={eff.assets} liabilities={eff.liabilities} equity={eff.equity} aria="The effect of the three receipts: assets increase by R17 000 and owner's equity increases by R17 000, with no change in liabilities." />
        <Worked
          title="The effect of each receipt"
          steps={[
            `Capital ${randNb(10000)}: assets (bank) and owner's equity both increase by ${randNb(10000)}.`,
            `Fees ${randNb(4500)} and ${randNb(2500)}: assets and owner's equity both increase by ${randNb(7000)}.`,
            `In total assets ${randNb(eff.assets)} = liabilities ${randNb(eff.liabilities)} + owner's equity ${randNb(eff.equity)}.`,
          ]}
        />
        <Mistake>Saying that fees earned increase liabilities. Income increases owner's equity, not liabilities.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>State what the Cash Receipts Journal records.</>,
          <>Capital R10 000 and fees R7 000 are received. What is the total of the Bank column?</>,
          <>What do we call checking that the Bank column equals the analysis columns?</>,
          <>What happens to owner's equity when fees are received?</>,
        ]}
        answers={[
          <>All the money received.</>,
          <>{randNb(crjTotal())}.</>,
          <>Cross-casting.</>,
          <>It increases.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which transactions are entered in the Cash Receipts Journal?",
    options: ["All the money the business pays out", "The goods the business buys", "All the money that the business receives", "The wages of the workers"],
    answer: "All the money that the business receives",
    explanation: "The CRJ records cash received.",
  },
  {
    prompt: "Which source document is used to enter a receipt of money in the CRJ?",
    options: ["A receipt or a deposit slip", "A cheque counterfoil", "A trial balance", "An income statement"],
    answer: "A receipt or a deposit slip",
    explanation: "Receipts and deposit slips show that money came in.",
  },
  {
    prompt: "Which column of the CRJ shows how much money came into the bank?",
    options: ["The Details column", "The Date column", "The Document column", "The Bank column"],
    answer: "The Bank column",
    explanation: "The Bank column totals the money banked.",
  },
  {
    prompt: "What do the analysis columns of the CRJ show?",
    options: ["Who owns the bank", "Where the money came from", "When the money was spent", "How much tax is due"],
    answer: "Where the money came from",
    explanation: "Columns such as Fees earned and Capital show the source of the money.",
  },
  {
    prompt: "The owner puts R10 000 into the business bank account. In which analysis column is it entered?",
    options: ["Fees earned", "Capital", "Rent expense", "Equipment"],
    answer: "Capital",
    explanation: "Money put in by the owner is capital.",
  },
  {
    prompt: "The business receives R4 500 for tutoring. In which analysis column is it entered?",
    options: ["Capital", "Salaries expense", "Bank", "Fees earned"],
    answer: "Fees earned",
    explanation: "Fees for services are income.",
  },
  {
    prompt: "The CRJ has entries of R10 000, R4 500 and R2 500. What is the Bank column total?",
    options: ["R17 000", "R7 000", "R12 500", "R14 500"],
    answer: "R17 000",
    explanation: "10 000 + 4 500 + 2 500 = 17 000.",
  },
  {
    prompt: "The CRJ has capital of R10 000 and fees earned of R7 000. What should the Bank column total be?",
    options: ["R3 000", "R10 000", "R17 000", "R70 000"],
    answer: "R17 000",
    explanation: "The Bank column equals the sum of the analysis columns.",
  },
  {
    prompt: "What is it called when the Bank column is checked against the analysis columns?",
    options: ["Posting", "Balancing the trial balance", "Reconciling the till", "Cross-casting"],
    answer: "Cross-casting",
    explanation: "Cross-casting checks that the totals agree.",
  },
  {
    prompt: "When is a journal closed off?",
    options: ["Before the first entry is made", "After the columns are cross-cast", "When the owner is away on leave", "Only at the end of the year"],
    answer: "After the columns are cross-cast",
    explanation: "The columns are totalled and cross-cast before the journal is closed.",
  },
  {
    prompt: "A receipt of money increases which item of the accounting equation?",
    options: ["Assets", "Liabilities only", "Nothing", "Expenses"],
    answer: "Assets",
    explanation: "The bank is an asset.",
  },
  {
    prompt: "The business receives fees of R7 000 in the bank. What happens to owner's equity?",
    options: ["It decreases by R7 000", "It does not change", "It increases by R7 000", "It increases by R14 000"],
    answer: "It increases by R7 000",
    explanation: "Income increases owner's equity.",
  },
  {
    prompt: "The CRJ total of R17 000 is received. What is the effect on assets and owner's equity?",
    options: ["Assets increase and equity decreases", "Both decrease by R17 000", "Both increase by R17 000", "Liabilities increase by R17 000"],
    answer: "Both increase by R17 000",
    explanation: "Bank (asset) and owner's equity both increase.",
  },
  {
    prompt: "Which kind of business does the CRJ in Grade 8 deal with?",
    options: ["A service business", "A manufacturing business only", "A government department", "A bank only"],
    answer: "A service business",
    explanation: "The Grade 8 CAPS uses a service business.",
  },
];

const CashReceiptsJournal = () => (
  <CapsSubjectTopic
    title="Cash Receipts Journal"
    subtitle="Recording and closing off cash received by a service business and its effect on the equation"
    learnSteps={learnSteps}
    task="gr8-cash-receipts-journal-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default CashReceiptsJournal;
