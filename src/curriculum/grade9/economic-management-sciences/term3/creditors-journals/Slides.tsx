import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { randNb as rand, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { DebitCredit, TAccount, TrialBalanceTable } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { creditorsLedger, creditorsPostings, partyAccount, postTransactions, reconciles, trialBalance, type Entry } from '../../../../../components/diagrams/ems/ems9c-helpers';

// Every amount below comes from ems9c-helpers.ts (tested in ems9c-helpers.test.ts and g9EmsLedgers.test.ts).
const e = (date: string, name: string, ref: string, amount: number): Entry => ({ date, name, ref, amount });
export const CJ = [e('3 Mar', 'Mokoena Wholesalers', 'S101', 2400), e('8 Mar', 'Fresh Farms', 'S102', 900), e('15 Mar', 'Naidoo Packaging', 'S103', 750)];
export const CAJ = [e('11 Mar', 'Mokoena Wholesalers', 'CN7', 100)];
export const CPJ = [e('25 Mar', 'Mokoena Wholesalers', 'EFT1', 2000), e('28 Mar', 'Fresh Farms', 'EFT2', 900)];

const ledger = creditorsLedger(CJ, CAJ, CPJ);
const posts = creditorsPostings(CJ, CAJ, CPJ);
const gl = postTransactions(posts);
const tb = trialBalance(gl);
const control = gl.find((a) => a.name === 'Creditors control')!;
const mokoena = partyAccount(ledger.find((a) => a.name === 'Mokoena Wholesalers')!, 'creditor');
const totalCJ = sum(CJ.map((x) => x.amount));
const totalCAJ = sum(CAJ.map((x) => x.amount));
const totalCPJ = sum(CPJ.map((x) => x.amount));
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Buying on credit',
    content: slide(
      <>
        <Rule>A credit purchase gives the business the goods now and lets it pay the supplier later. The supplier becomes a creditor: someone the business owes. The supplier&rsquo;s invoice is the source document.</Rule>
        <DebitCredit debit="Purchases" credit="Creditors control" amount={2400} aria={`A credit purchase of ${rand(2400)}. Debit Purchases ${rand(2400)} and credit Creditors control ${rand(2400)}.`} />
        <Worked
          title={`Bought goods of ${rand(2400)} from Mokoena Wholesalers on credit`}
          steps={[
            'No money leaves the bank yet, so Bank is not used.',
            'The goods are an expense of the business, so debit Purchases.',
            'The business now owes money, so credit Creditors control (a liability).',
          ]}
        />
        <Mistake>Crediting Bank for a credit purchase. Cash only goes out when the creditor is paid later.</Mistake>
      </>,
    ),
  },
  {
    title: 'The creditors journal (CJ)',
    content: slide(
      <>
        <Rule>The creditors journal (CJ) lists every credit purchase from the suppliers&rsquo; invoices. The total is posted to the general ledger, and each invoice to that creditor&rsquo;s own account.</Rule>
        <JournalTable
          title="Creditors journal (CJ), March"
          columns={['Date', 'Creditor', 'Amount']}
          rows={CJ.map((x) => [x.date, `${x.name} (${x.ref})`, x.amount])}
          total={{ label: 'Total credit purchases', amount: totalCJ }}
          aria={`Creditors journal with three credit purchases, from Mokoena Wholesalers, Fresh Farms and Naidoo Packaging, a total of ${rand(totalCJ)}.`}
        />
        <Worked
          steps={[
            `Add the amounts: ${CJ.map((x) => rand(x.amount)).join(' + ')} = ${rand(totalCJ)}.`,
            `General ledger: debit Purchases ${rand(totalCJ)}, credit Creditors control ${rand(totalCJ)}.`,
            'Each invoice is posted to the credit side of that creditor\'s own account.',
          ]}
        />
        <Mistake>Posting each invoice to Creditors control. The control account gets only the total; the individual amounts go to the creditors&rsquo; own accounts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Allowances (CAJ) and payments (CPJ)',
    content: slide(
      <>
        <Rule>A credit note from a supplier is recorded in the creditors allowances journal (CAJ) and reduces what is owed. A payment to a creditor is recorded in the cash payments journal (CPJ). Both are debited to Creditors control.</Rule>
        <TAccount account={control} aria={`The Creditors control account. Debit side ${control.debits.map(rand).join(' and ')}; credit side ${control.credits.map(rand).join('')}. The balance is ${rand(control.balance)} on the credit side.`} />
        <Worked
          steps={[
            `CAJ: Mokoena sends a credit note of ${rand(totalCAJ)}. Debit Creditors control, credit Creditors allowances ${rand(totalCAJ)}. No cash moves.`,
            `CPJ: payments of ${CPJ.map((x) => `${x.name} ${rand(x.amount)}`).join(' and ')}, ${rand(totalCPJ)} in total. Debit Creditors control, credit Bank.`,
            `Creditors control: ${rand(totalCJ)} − ${rand(totalCAJ)} − ${rand(totalCPJ)} = ${rand(control.balance)} still owed.`,
          ]}
        />
        <Mistake>Debiting Purchases for a payment. The purchase was recorded when the goods were bought; the payment reduces the amount owed, so Creditors control is debited.</Mistake>
      </>,
    ),
  },
  {
    title: 'The creditors ledger and the general ledger',
    content: slide(
      <>
        <Rule>A creditor&rsquo;s own account has purchases on the credit side. Credit notes and payments are debited. The balances of all the creditors must add up to the balance of Creditors control.</Rule>
        <TAccount account={mokoena} aria={`The account of Mokoena Wholesalers. Debit side ${mokoena.debits.map(rand).join(' and ')}; credit side ${mokoena.credits.map(rand).join('')}. The balance is ${rand(mokoena.balance)} on the credit side.`} />
        <Worked
          steps={[
            `Mokoena: ${rand(2400)} − ${rand(100)} − ${rand(2000)} = ${rand(mokoena.balance)} owed. ${ledger.filter((a) => a.name !== 'Mokoena Wholesalers').map((a) => `${a.name} ${rand(a.balance)}`).join(', ')}.`,
            `The creditors list totals ${rand(sum(ledger.map((a) => a.balance)))}, and Creditors control is ${rand(control.balance)}: they ${reconciles(ledger, control.balance) ? 'agree' : 'do not agree'}.`,
          ]}
        />
        <TrialBalanceTable rows={tb.rows} totalDebit={tb.totalDebit} totalCredit={tb.totalCredit} aria={`Trial balance from the creditors journals: Purchases ${rand(totalCJ)} debit, Creditors control ${rand(control.balance)} credit, Creditors allowances ${rand(totalCAJ)} credit and Bank ${rand(totalCPJ)} credit. Both columns total ${rand(tb.totalDebit)}.`} />
        <Mistake>Forgetting that a creditor&rsquo;s balance is a credit balance. The business owes this money, so it is a liability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which journal records a credit purchase of goods for resale?</>,
          <>A supplier sends a credit note of R200. Which accounts are debited and credited?</>,
          <>A creditor was owed R1 000, sent a credit note for R100 and was paid R600. How much is still owed?</>,
        ]}
        answers={[
          <>The creditors journal (CJ).</>,
          <>Debit Creditors control R200 and credit Creditors allowances R200.</>,
          <>1 000 − 100 − 600 = <strong>R300</strong>.</>,
        ]}
      />,
    ),
  },
];
