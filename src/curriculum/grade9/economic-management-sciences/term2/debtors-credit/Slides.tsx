import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { randNb as rand, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { DebitCredit, TAccount } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { debtorsLedger, debtorsPostings, postTransactions, type Entry } from '../../../../../components/diagrams/ems/ems9c-helpers';

// Every amount below comes from ems9c-helpers.ts (tested in ems9c-helpers.test.ts and g9EmsCredit.test.ts).
const e = (date: string, name: string, ref: string, amount: number): Entry => ({ date, name, ref, amount });
export const DJ = [e('2 Mar', 'Dlamini', 'INV01', 1200), e('5 Mar', 'Naidoo', 'INV02', 850), e('9 Mar', 'Dlamini', 'INV03', 400), e('12 Mar', 'Pillay', 'INV04', 1500)];
export const DAJ = [e('10 Mar', 'Naidoo', 'CN01', 50)];
export const CRJ = [e('20 Mar', 'Dlamini', 'R01', 1000), e('22 Mar', 'Naidoo', 'R02', 800)];

const ledger = debtorsLedger(DJ, DAJ, CRJ);
const posts = debtorsPostings(DJ, DAJ, CRJ);
const control = postTransactions(posts).find((a) => a.name === 'Debtors control')!;
const owed = (n: string) => ledger.find((a) => a.name === n)!.balance;
const totalDJ = sum(DJ.map((x) => x.amount));
const totalDAJ = sum(DAJ.map((x) => x.amount));
const totalCRJ = sum(CRJ.map((x) => x.amount));
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Selling on credit',
    content: slide(
      <>
        <Rule>A credit sale gives the customer the goods now and lets them pay later. The customer becomes a debtor: a person who owes the business money. A sales invoice is the source document.</Rule>
        <DebitCredit debit="Debtors control" credit="Sales" amount={1200} aria={`A credit sale of ${rand(1200)}. Debit Debtors control ${rand(1200)} and credit Sales ${rand(1200)}.`} />
        <Worked
          title={`Sold goods of ${rand(1200)} to Dlamini on credit`}
          steps={[
            'No money has come in yet, so Bank is not used.',
            'The business is now owed money, so debit Debtors control (an asset).',
            'Income is earned when the goods are sold, so credit Sales.',
            'The National Credit Act aims to protect people who buy on credit, so the terms must be clear and the buyer must be able to afford to pay.',
          ]}
        />
        <Mistake>Debiting Bank for a credit sale. Cash only comes in when the debtor pays later.</Mistake>
      </>,
    ),
  },
  {
    title: 'The debtors journal (DJ)',
    content: slide(
      <>
        <Rule>The debtors journal lists every credit sale from the invoices, in date order. At the end of the month the total is posted to the general ledger, and each invoice to its debtor's account.</Rule>
        <JournalTable
          title="Debtors journal (DJ), March"
          columns={['Date', 'Debtor', 'Amount']}
          rows={DJ.map((x) => [x.date, `${x.name} (${x.ref})`, x.amount])}
          total={{ label: 'Total credit sales', amount: totalDJ }}
          aria={`Debtors journal with four credit sales to Dlamini, Naidoo, Dlamini and Pillay, a total of ${rand(totalDJ)}.`}
        />
        <Worked
          steps={[
            `Add the amounts: ${DJ.map((x) => rand(x.amount)).join(' + ')} = ${rand(totalDJ)}.`,
            `Post the total to the general ledger: debit Debtors control ${rand(totalDJ)}, credit Sales ${rand(totalDJ)}.`,
            'Post each invoice to the debit side of that debtor\'s own account.',
          ]}
        />
        <Mistake>Posting each invoice and the total to Debtors control. The control account gets the total only; the individual amounts go to the debtors' own accounts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Debtors allowances (DAJ)',
    content: slide(
      <>
        <Rule>When a debtor returns goods or is given a price reduction, the business sends a credit note. The debtors allowances journal records it. It reduces what the debtor owes, and no cash moves.</Rule>
        <JournalTable
          title="Debtors allowances journal (DAJ), March"
          columns={['Date', 'Debtor', 'Amount']}
          rows={DAJ.map((x) => [x.date, `${x.name} (${x.ref})`, x.amount])}
          total={{ label: 'Total allowances', amount: totalDAJ }}
          aria={`Debtors allowances journal with one credit note of ${rand(totalDAJ)} to Naidoo.`}
        />
        <Worked
          steps={[
            `Naidoo returns damaged goods worth ${rand(totalDAJ)}: a credit note CN01 is issued.`,
            `General ledger: debit Debtors allowances ${rand(totalDAJ)} (it reduces sales), credit Debtors control ${rand(totalDAJ)}.`,
            `Naidoo's account is credited with ${rand(totalDAJ)}: his R850 invoice becomes ${rand(850 - totalDAJ)} owing.`,
          ]}
        />
        <Mistake>Treating an allowance as a payment and debiting Bank. No money was received, so the entry is Debtors allowances against Debtors control.</Mistake>
      </>,
    ),
  },
  {
    title: 'Receipts from debtors',
    content: slide(
      <>
        <Rule>When a debtor pays, the money is entered in the cash receipts journal (CRJ). Bank is debited and Debtors control is credited, and the debtor's own account is credited too.</Rule>
        <TAccount account={control} aria={`The Debtors control account. Debit side ${control.debits.map(rand).join(', ')}; credit side ${control.credits.map(rand).join(' and ')}. The balance is ${rand(control.balance)} on the debit side.`} />
        <Worked
          steps={[
            `Receipts: ${CRJ.map((x) => `${x.name} ${rand(x.amount)}`).join(' and ')}, a total of ${rand(totalCRJ)}. General ledger: debit Bank, credit Debtors control.`,
            `Dlamini owes ${rand(1200)} + ${rand(400)} − ${rand(1000)} = ${rand(owed('Dlamini'))}.`,
            `Naidoo owes ${rand(850)} − ${rand(50)} − ${rand(800)} = ${rand(owed('Naidoo'))}. Pillay owes ${rand(owed('Pillay'))}.`,
            `The debtors add up to ${rand(sum(ledger.map((a) => a.balance)))}, the same as the balance on the control account.`,
          ]}
        />
        <Mistake>Crediting Sales when a debtor pays. The sale was recorded when the goods were sold; the payment only turns the debtor's debt into cash.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which journal records a credit sale of R2 000 to a customer?</>,
          <>A customer returns goods worth R300 and gets a credit note. Which accounts are debited and credited in the general ledger?</>,
          <>A debtor owes R1 500, receives a R100 credit note and then pays R900. How much does the debtor still owe?</>,
        ]}
        answers={[
          <>The debtors journal (DJ).</>,
          <>Debit Debtors allowances R300 and credit Debtors control R300.</>,
          <>1 500 − 100 − 900 = <strong>R500</strong>.</>,
        ]}
      />,
    ),
  },
];
