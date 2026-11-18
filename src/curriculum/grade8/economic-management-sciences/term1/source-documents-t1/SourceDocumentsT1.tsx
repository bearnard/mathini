import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { InvoiceBars, StatementBars } from '../../../../../components/diagrams/ems/Ems8aPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { DENOMINATIONS, DOCUMENTS, depositTotal, documentFor, invoiceTotal, statementBalance } from '../../../../../components/diagrams/ems/ems8a-helpers';

// Every amount comes from ems8a-helpers.ts (tested in ems8a-helpers.test.ts and g8EmsT1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const counts = [2, 3, 1, 4, 5];
const dep = depositTotal(counts);
const inv = invoiceTotal(4, 50);
const bal = statementBalance(1000, [500, 250], [300, 100]);

export const learnSteps: LearnStep[] = [
  {
    title: 'What source documents are',
    content: slide(
      <>
        <Rule>A source document is the first record of a transaction. It is the proof that a transaction took place, and it is used to enter the transaction in the books. The source documents in this term are receipts, deposit slips, cash register (till) slips, cheques, cheque counterfoils, bank statements and cash invoices.</Rule>
        <FactCards
          cards={[
            { title: 'Receipt', line1: 'proof that money was received,', line2: 'given to the person who paid' },
            { title: 'Cash register (till) slip', line1: 'proof of a cash sale', line2: 'printed by the till' },
            { title: 'Cash invoice', line1: 'shows what was sold and the', line2: 'amount paid in cash' },
            { title: 'Cheque counterfoil', line1: 'the stub kept as a record of', line2: 'the cheque you wrote' },
          ]}
          aria="Source documents. A receipt is proof that money was received, given to the person who paid. A cash register or till slip is proof of a cash sale printed by the till. A cash invoice shows what was sold and the amount paid in cash. A cheque counterfoil is the stub kept as a record of the cheque you wrote."
        />
        <Worked
          title="Which document?"
          steps={[
            `Money paid into the bank: a ${documentFor('money paid into the bank')}.`,
            `A cash sale at the till: a ${documentFor('cash sale at the till')}.`,
            `A payment made by cheque: the ${documentFor('a payment made by cheque')} is the record.`,
          ]}
        />
        <Mistake>Entering a transaction without a source document. The document is the proof that it happened.</Mistake>
      </>,
    ),
  },
  {
    title: 'Deposit slips, cheques and bank statements',
    content: slide(
      <>
        <Rule>A deposit slip lists the notes, coins and cheques that are paid into the bank account. A cheque is an instruction to the bank to pay money from the account, and the cheque counterfoil is kept as a record. A bank statement is the bank's record of all the money paid in and out, and it shows the balance.</Rule>
        <StatementBars opening={1000} deposits={750} payments={400} closing={bal} />
        <JournalTable
          title="Deposit slip: notes paid in"
          columns={['Notes', 'Number', 'Amount']}
          rows={DENOMINATIONS.map((d, i) => [`R${d}`, String(counts[i]), d * counts[i]])}
          total={{ label: 'Total deposit', amount: dep }}
          aria="A deposit slip. Two R200 notes, three R100 notes, one R50 note, four R20 notes and five R10 notes make a total deposit of R880."
        />
        <Worked
          title="Check the deposit and the statement"
          steps={[
            `The deposit is 2 × 200 + 3 × 100 + 1 × 50 + 4 × 20 + 5 × 10 = ${randNb(dep)}.`,
            `A bank statement opens with R1 000, shows deposits of R500 and R250 and payments of R300 and R100: closing balance = 1 000 + 750 − 400 = ${randNb(bal)}.`,
            'The statement is compared with the cheque counterfoils and the deposit slips to check that the records agree.',
          ]}
        />
        <Mistake>Forgetting to subtract the payments when finding the bank balance. Closing balance = opening + deposits − payments.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cash invoices',
    content: slide(
      <>
        <Rule>A cash invoice shows the goods or services sold, the quantity, the price, the VAT and the total paid in cash. The amount before VAT is quantity × price. VAT of 15% (the rate used here) is added to give the total.</Rule>
        <InvoiceBars excl={inv.excl} vat={inv.vat} total={inv.total} vatPercent={15} />
        <JournalTable
          title="Cash invoice: 4 tyres"
          columns={['Item', 'Amount']}
          rows={[['4 tyres at R50 each', inv.excl], ['VAT at 15%', inv.vat]]}
          total={{ label: 'Total paid in cash', amount: inv.total }}
          aria="A cash invoice for 4 tyres at R50 each is R200, VAT at 15 percent is R30, and the total paid in cash is R230."
        />
        <Worked
          title="Work out the invoice"
          steps={[
            `Quantity × price = 4 × R50 = ${randNb(inv.excl)}.`,
            `VAT = 15% of ${randNb(inv.excl)} = ${randNb(inv.vat)}.`,
            `Total = ${randNb(inv.excl)} + ${randNb(inv.vat)} = ${randNb(inv.total)}.`,
          ]}
        />
        <Mistake>Calculating the VAT on the total instead of on the price before VAT.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which document lists the notes and cheques paid into the bank?</>,
          <>What does a bank statement show?</>,
          <>What is the total of a deposit of 2 × R200 and 3 × R100?</>,
          <>Name the document that the till prints for a sale.</>,
        ]}
        answers={[
          <>A deposit slip.</>,
          <>All the money paid in and out and the balance.</>,
          <>{randNb(2 * 200 + 3 * 100)}.</>,
          <>A cash register (till) slip.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a source document?",
    options: ["A summary of the profit", "A list of all customers", "Proof of a transaction", "A budget for next year"],
    answer: "Proof of a transaction",
    explanation: "Source documents prove that transactions took place.",
  },
  {
    prompt: "Which document is proof that money was received and is given to the person who paid?",
    options: ["A receipt", "A cheque", "A bank statement", "A deposit slip"],
    answer: "A receipt",
    explanation: "A receipt is given to the payer as proof.",
  },
  {
    prompt: "On which document are the notes and cheques paid into a bank listed?",
    options: ["A till slip", "A cheque counterfoil", "A cash invoice", "A deposit slip"],
    answer: "A deposit slip",
    explanation: "A deposit slip is filled in when money is paid into the bank.",
  },
  {
    prompt: "Which slip does a till print as proof of a cash sale?",
    options: ["A deposit slip", "A cash register slip", "A bank statement", "A cheque book"],
    answer: "A cash register slip",
    explanation: "The till prints a slip as proof of the sale.",
  },
  {
    prompt: "What is a cheque?",
    options: ["Proof that goods were sold", "An instruction to the bank to pay", "A list of deposits made", "A bank's monthly record"],
    answer: "An instruction to the bank to pay",
    explanation: "A cheque tells the bank to pay.",
  },
  {
    prompt: "What is a cheque counterfoil?",
    options: ["The cheque that was paid in", "A bank's monthly record", "A type of till receipt", "The stub kept in the cheque book"],
    answer: "The stub kept in the cheque book",
    explanation: "The counterfoil stays in the cheque book.",
  },
  {
    prompt: "Which document is the bank's record of all money paid in and out of the account?",
    options: ["A bank statement", "A deposit slip", "A till slip", "A cheque counterfoil"],
    answer: "A bank statement",
    explanation: "The bank statement shows every deposit and payment and the balance.",
  },
  {
    prompt: "Which document records a sale paid for in cash, with VAT and the total?",
    options: ["A bank statement", "A cheque counterfoil", "A cash invoice", "A deposit slip"],
    answer: "A cash invoice",
    explanation: "A cash invoice records a cash sale.",
  },
  {
    prompt: "Paying in two R200, three R100, one R50, four R20 and five R10 notes gives what total?",
    options: ["R800", "R660", "R1 000", "R880"],
    answer: "R880",
    explanation: "2 × 200 + 3 × 100 + 1 × 50 + 4 × 20 + 5 × 10 = 880.",
  },
  {
    prompt: "Paying in three R200 notes and two R50 notes gives what total?",
    options: ["R350", "R700", "R650", "R800"],
    answer: "R700",
    explanation: "3 × 200 + 2 × 50 = 700.",
  },
  {
    prompt: "A bank account opens with R1 000. Deposits of R500 and R250 are made and R300 and R100 are paid out. What is the closing balance?",
    options: ["R1 350", "R1 150", "R2 150", "R1 750"],
    answer: "R1 350",
    explanation: "1 000 + 750 − 400 = 1 350.",
  },
  {
    prompt: "A cash invoice is for 4 tyres at R50 each, before VAT. What is the amount before VAT?",
    options: ["R230", "R54", "R200", "R50"],
    answer: "R200",
    explanation: "4 × R50 = R200.",
  },
  {
    prompt: "VAT of 15% (the rate used here) is added to a R200 invoice. What is the total paid in cash?",
    options: ["R215", "R30", "R230", "R200"],
    answer: "R230",
    explanation: "R200 + R30 = R230.",
  },
  {
    prompt: "A business pays a supplier by cheque. Which record does it keep?",
    options: ["The cheque counterfoil", "A deposit slip", "A till slip", "A bank statement of another business"],
    answer: "The cheque counterfoil",
    explanation: "The counterfoil is the record of the cheque written.",
  },
];

const SourceDocumentsT1 = () => (
  <CapsSubjectTopic
    title="Source Documents"
    subtitle="Receipts, deposit slips, till slips, cheques, counterfoils, bank statements and cash invoices"
    learnSteps={learnSteps}
    task="gr8-source-documents-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default SourceDocumentsT1;
