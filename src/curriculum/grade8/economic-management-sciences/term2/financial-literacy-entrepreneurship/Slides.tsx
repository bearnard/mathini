import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, dailyProfit, ledgerSide } from '../../../../../components/diagrams/ems/emsHelpers';
import { FactorsOfProduction, JournalTable, LedgerAccount } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from emsHelpers.ts (tested in emsHelpers.test.ts and ems8Lessons.test.ts).
export const RECEIPTS = [
  { date: '3 Mar', details: 'Cash sales', amount: 850 },
  { date: '5 Mar', details: 'Cash sales', amount: 620 },
  { date: '9 Mar', details: 'Cash sales', amount: 1500 },
] as const;
const receipts = ledgerSide(RECEIPTS.map((r) => r.amount));
const sale = ledgerSide([2400]);
const SOLD = 20;
const SOLD_Q = 30;
const stall = dailyProfit(5, 2, SOLD); // vetkoek: sell at R5, cost R2 each
const q2 = ledgerSide([400, 300, 250]);
const q4 = dailyProfit(5, 2, SOLD_Q);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The accounting cycle',
    content: slide(
      <>
        <Rule>The accounting cycle is the set of steps a business repeats to organise its transactions and prepare reliable reports. It begins with the source documents.</Rule>
        <NumberedSteps
          label="The accounting cycle"
          heading="The accounting cycle"
          tone="blue"
          steps={[
            { lead: 'Analyse', text: ' the source documents.' },
            { lead: 'Record', text: ' in the journals.' },
            { lead: 'Post', text: ' to the ledger accounts.' },
            { lead: 'Summarise', text: ' in a trial balance.' },
            { lead: 'Report', text: ' in financial statements.' },
          ]}
        />
        <Worked
          title={`A customer pays ${rand(sale.total)} for goods`}
          steps={['Source document: the receipt copy.', 'Journal: the cash receipts journal.', 'Ledger: the Sales account.']}
        />
        <Mistake>Starting at the ledger or the statements. Without a source document there is no proof the transaction happened.</Mistake>
      </>,
    ),
  },
  {
    title: 'The cash receipts journal',
    content: slide(
      <>
        <Rule>The cash receipts journal records every amount of money received, in date order. Add the amount column to get the total.</Rule>
        <JournalTable
          title="Cash receipts journal, March"
          columns={['Date', 'Details', 'Amount']}
          rows={RECEIPTS.map((r) => [r.date, r.details, r.amount])}
          total={{ label: 'Total received', amount: receipts.total }}
          aria={`Cash receipts journal with three receipts of ${receipts.entries.map(rand).join(', ')}. The total received is ${rand(receipts.total)}.`}
        />
        <Worked
          title="Add the amount column"
          steps={[<>{receipts.entries.map(rand).join(' + ')}</>, <>= {rand(receipts.total)} received in March.</>]}
        />
        <Mistake>Writing money paid out here. Payments go in the cash payments journal. A sale on credit also waits until the customer pays.</Mistake>
      </>,
    ),
  },
  {
    title: 'The general ledger and posting',
    content: slide(
      <>
        <Rule>Posting copies each journal entry to its ledger account. The Sales account is on the credit side and gathers all the sales in one place.</Rule>
        <LedgerAccount
          name="Sales account"
          side="credit"
          entries={receipts.entries}
          total={receipts.total}
          aria={`A Sales ledger account. The credit side holds ${receipts.entries.map(rand).join(', ')}, which total ${rand(receipts.total)}.`}
        />
        <Worked
          title="Post the March receipts"
          steps={['Take each amount from the cash receipts journal.', 'Write it on the credit side of the Sales account.', <>Add the side: total sales are {rand(receipts.total)}.</>]}
        />
        <Mistake>Thinking posting changes the amounts. It only copies them, so the ledger total matches the journal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Factors of production',
    content: slide(
      <>
        <Rule>Four factors of production are combined to make goods and services: land, labour, capital and enterprise. Each earns a reward.</Rule>
        <FactorsOfProduction />
        <Worked
          title="Name the factors on a farm"
          steps={['Soil and water are land.', 'The workers are labour.', 'The tractor is capital.', 'The farmer who plans and takes the risk is enterprise.']}
        />
        <Mistake>Calling money the only capital. Capital also means machinery, tools and buildings used to produce.</Mistake>
      </>,
    ),
  },
  {
    title: 'Entrepreneurship',
    content: slide(
      <>
        <Rule>An entrepreneur spots a need, has an idea and takes the risk of organising the other factors. The idea and the willingness to take risks matter more than a large amount of capital.</Rule>
        <Worked
          title="Sipho sells vetkoek at the taxi rank"
          steps={[
            'He spots a need: commuters want a cheap snack.',
            <>He sells {SOLD} at {rand(5)} each and each costs {rand(2)} to make.</>,
            <>Money in {rand(stall.revenue)} − costs {rand(stall.costs)} = profit of {rand(stall.profit)}.</>,
          ]}
        />
        <Mistake>Waiting until you have a lot of money. Many businesses start small with a good idea and careful records.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which step starts the accounting cycle, before anything is recorded in a journal?</>,
          <>Add the cash receipts: {q2.entries.map(rand).join(', ')}.</>,
          <>Which factor of production earns wages?</>,
          <>Sipho sells {SOLD_Q} vetkoek at {rand(5)}, each costing {rand(2)}. What is his profit?</>,
        ]}
        answers={[
          <>Analyse the source documents.</>,
          <>{q2.entries.map(rand).join(' + ')} = {rand(q2.total)}.</>,
          <>Labour.</>,
          <>{rand(q4.revenue)} − {rand(q4.costs)} = {rand(q4.profit)}.</>,
        ]}
      />,
    ),
  },
];
