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
const m1 = a.netVat(a.MONTH1.sales, a.MONTH1.purchases);
const m2 = a.netVat(a.MONTH2.sales, a.MONTH2.purchases);

export const learnSteps: LearnStep[] = [
  {
    title: 'Adding and removing VAT',
    content: slide(
      <>
        <Rule>To add VAT, multiply the price excluding VAT by 115 ÷ 100, or find 15% and add it. To remove VAT from a price including VAT, divide by 115 and multiply by 100. The VAT in a price including VAT is the price including VAT less the price excluding VAT.</Rule>
        <InfoTable
          cols={[{ title: 'Excluding VAT', w: 30 }, { title: 'VAT 15%', w: 30 }, { title: 'Including VAT', w: 40 }]}
          rows={[
            [R(20000), R(a.vatOn(20000)), R(a.inclOf(20000))],
            [R(50000), R(a.vatOn(50000)), R(a.inclOf(50000))],
            [R(a.exclOf(57500)), R(a.vatIn(57500)), R(57500)],
          ]}
          aria={`A table of VAT calculations. ${R(20000)} excluding VAT has VAT of ${R(3000)} and costs ${R(23000)} including VAT. ${R(50000)} has VAT of ${R(7500)} and costs ${R(57500)}. A price of ${R(57500)} including VAT is ${R(50000)} excluding VAT with VAT of ${R(7500)}.`}
        />
        <Worked
          title="Work both ways"
          steps={[
            `Add VAT to ${R(50000)}: 15% is ${R(a.vatOn(50000))}, so the price is ${R(50000)} + ${R(a.vatOn(50000))} = ${R(a.inclOf(50000))}.`,
            `Remove VAT from ${R(57500)}: ${R(57500)} ÷ 115 × 100 = ${R(a.exclOf(57500))}.`,
            `The VAT is ${R(57500)} − ${R(50000)} = ${R(a.vatIn(57500))}.`,
          ]}
        />
        <Mistake>Taking 15% off the price including VAT. 15% of {R(57500)} is {R(8625)}, not the VAT of {R(a.vatIn(57500))}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Output VAT, input VAT and the amount owed to SARS',
    content: slide(
      <>
        <Rule>Each month a vendor adds up the output VAT on its VAT-able sales and the input VAT on its VAT-able purchases. Output VAT less input VAT is the net VAT. A positive answer is paid to SARS, and a negative answer is a refund from SARS. Amounts that are zero-rated give no output VAT, but the input VAT on the related purchases can be claimed.</Rule>
        <InfoTable
          cols={[{ title: 'Mth', w: 10 }, { title: 'Sales', w: 24 }, { title: 'Buys', w: 24 }, { title: 'Out', w: 21 }, { title: 'In', w: 21 }]}
          rows={[
            ['1', R(a.MONTH1.sales), R(a.MONTH1.purchases), R(a.vatOn(a.MONTH1.sales)), R(a.vatOn(a.MONTH1.purchases))],
            ['2', R(a.MONTH2.sales), R(a.MONTH2.purchases), R(a.vatOn(a.MONTH2.sales)), R(a.vatOn(a.MONTH2.purchases))],
          ]}
          aria={`A VAT summary. Month 1: sales ${R(a.MONTH1.sales)}, purchases ${R(a.MONTH1.purchases)}, output VAT ${R(a.vatOn(a.MONTH1.sales))} and input VAT ${R(a.vatOn(a.MONTH1.purchases))}, so ${R(m1)} is paid to SARS. Month 2: sales ${R(a.MONTH2.sales)}, purchases ${R(a.MONTH2.purchases)}, output VAT ${R(a.vatOn(a.MONTH2.sales))} and input VAT ${R(a.vatOn(a.MONTH2.purchases))}, so SARS refunds ${R(-m2)}.`}
        />
        <Worked
          title="Net VAT in two months"
          steps={[
            `Month 1: output ${R(a.vatOn(a.MONTH1.sales))} − input ${R(a.vatOn(a.MONTH1.purchases))} = ${R(m1)}, which is owed to SARS.`,
            `Month 2: output ${R(a.vatOn(a.MONTH2.sales))} − input ${R(a.vatOn(a.MONTH2.purchases))} = −${R(-m2)}: more input than output, so SARS owes the vendor ${R(-m2)}.`,
            'The vendor does not pay the input VAT twice: it is set off against the output VAT.',
          ]}
        />
        <Mistake>Subtracting the other way round. Always output VAT less input VAT: a positive answer is payable to SARS and a negative answer is a refund.</Mistake>
      </>,
    ),
  },
  {
    title: 'The VAT control account',
    content: slide(
      <>
        <Rule>VAT is recorded in a ledger account called the VAT Control account. Input VAT is debited when VAT-able goods and services are bought, and output VAT is credited when VAT-able sales are made. At the end of the period the balance is the amount owed to SARS (a credit balance) or owed by SARS (a debit balance). When the vendor pays SARS, the account is debited and the bank is credited.</Rule>
        <InfoTable
          cols={[{ title: 'Dr: input VAT', w: 50 }, { title: 'Cr: output VAT', w: 50 }]}
          rows={[
            [`Purchases: ${R(a.vatOn(a.MONTH1.purchases))}`, `Sales: ${R(a.vatOn(a.MONTH1.sales))}`],
            ['', `Balance owed to SARS: ${R(m1)}`],
          ]}
          aria={`The VAT Control account for month 1. Debit side: input VAT on purchases ${R(a.vatOn(a.MONTH1.purchases))}. Credit side: output VAT on sales ${R(a.vatOn(a.MONTH1.sales))}. The credit balance, ${R(m1)}, is owed to SARS.`}
        />
        <Worked
          title="Record and pay"
          steps={[
            `Debit VAT Control ${R(a.vatOn(a.MONTH1.purchases))} for input VAT, and credit VAT Control ${R(a.vatOn(a.MONTH1.sales))} for output VAT.`,
            `The balance on the credit side is ${R(a.vatOn(a.MONTH1.sales))} − ${R(a.vatOn(a.MONTH1.purchases))} = ${R(m1)}: a liability.`,
            `Paying SARS ${R(m1)}: debit VAT Control and credit Bank, so the account balances.`,
          ]}
        />
        <Mistake>Recording VAT in the Sales or Purchases account. The sales and purchases are recorded without VAT, and the VAT goes to the VAT Control account.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A price including VAT is R230. What is the price excluding VAT?</>,
          <>Output VAT is R12 000 and input VAT is R7 500. How much is paid to SARS?</>,
          <>Input VAT is more than output VAT. What does the vendor receive?</>,
          <>On which side of the VAT Control account is output VAT recorded?</>,
        ]}
        answers={[
          <>{R(a.exclOf(23000))}.</>,
          <>{R(a.vatOn(a.MONTH1.sales) - a.vatOn(a.MONTH1.purchases))}.</>,
          <>A refund from SARS.</>,
          <>The credit side.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A vendor sells goods for R50 000 excluding VAT. What is the price including VAT?",
    options: ["R50 750", "R57 000", "R57 500", "R65 000"],
    answer: "R57 500",
    explanation: "VAT is 15% of R50 000 = R7 500, so the price including VAT is R50 000 + R7 500 = R57 500.",
  },
  {
    prompt: "A price including VAT is R23 000. What is the price excluding VAT?",
    options: ["R20 000", "R19 550", "R22 850", "R26 450"],
    answer: "R20 000",
    explanation: "Divide by 115 and multiply by 100: R23 000 ÷ 115 × 100 = R20 000.",
  },
  {
    prompt: "A tax invoice total is R575 including VAT. How much of it is VAT?",
    options: ["R86,25", "R57,50", "R500", "R75"],
    answer: "R75",
    explanation: "R575 ÷ 115 × 100 = R500 excluding VAT, so the VAT is R575 − R500 = R75.",
  },
  {
    prompt: "Why is 15% of R575 not the VAT in a price including VAT?",
    options: ["The rate of VAT is not 15%", "The R575 is a price including VAT", "The R575 is a price with no VAT", "VAT is always a round number"],
    answer: "The R575 is a price including VAT",
    explanation: "The 15% applies to the price excluding VAT, so R86,25 is too much and the real VAT is R75.",
  },
  {
    prompt: "Output VAT is R12 000 and input VAT is R7 500. What is the net VAT?",
    options: ["R4 500 refundable by SARS", "R4 500 payable to SARS", "R19 500 payable to SARS", "R12 000 payable to SARS"],
    answer: "R4 500 payable to SARS",
    explanation: "Output less input = R12 000 − R7 500 = R4 500, and a positive answer is paid to SARS.",
  },
  {
    prompt: "A vendor's purchases excluding VAT are R40 000. How much input VAT is this?",
    options: ["R4 000", "R46 000", "R34 000", "R6 000"],
    answer: "R6 000",
    explanation: "Input VAT is 15% of the purchases: 0,15 × R40 000 = R6 000.",
  },
  {
    prompt: "Output VAT is R3 000 and input VAT is R6 000 for the month. What happens?",
    options: ["SARS refunds R3 000 to the vendor", "The vendor pays R3 000 to SARS", "The vendor pays R9 000 to SARS", "The vendor pays R3 000 less tax"],
    answer: "SARS refunds R3 000 to the vendor",
    explanation: "Output less input = R3 000 − R6 000 = −R3 000, so the input VAT is more and SARS pays the difference back.",
  },
  {
    prompt: "Sales are R80 000 and purchases R50 000, both excluding VAT. What is the net VAT payable?",
    options: ["R30 000", "R3 000", "R4 500", "R19 500"],
    answer: "R4 500",
    explanation: "Output is R12 000 and input is R7 500, so the net VAT is R12 000 − R7 500 = R4 500.",
  },
  {
    prompt: "Where is output VAT recorded in the ledger?",
    options: ["On the debit side of the VAT Control account", "On the debit side of the Sales account", "On the credit side of the Bank account", "On the credit side of the VAT Control account"],
    answer: "On the credit side of the VAT Control account",
    explanation: "Output VAT is a liability to SARS, so it is credited in the VAT Control account.",
  },
  {
    prompt: "Where is input VAT recorded in the ledger?",
    options: ["On the credit side of the VAT Control account", "On the debit side of the VAT Control account", "On the credit side of the Sales account", "On the debit side of the Drawings account"],
    answer: "On the debit side of the VAT Control account",
    explanation: "Input VAT is claimed back from SARS, so it is debited in the VAT Control account.",
  },
  {
    prompt: "The VAT Control account has a credit balance. What does it show?",
    options: ["An amount that the vendor owes SARS", "An amount that SARS owes the vendor", "An amount of profit that was earned", "An amount of stock that was bought"],
    answer: "An amount that the vendor owes SARS",
    explanation: "A credit balance means that the output VAT is more than the input VAT, so it is owed to SARS.",
  },
  {
    prompt: "How is a payment of the net VAT to SARS recorded?",
    options: ["Debit Bank, credit VAT Control", "Debit Sales, credit VAT Control", "Debit VAT Control, credit Bank", "Debit Bank, credit Sales"],
    answer: "Debit VAT Control, credit Bank",
    explanation: "Paying the liability clears the VAT Control account (debit) and reduces the bank balance (credit).",
  },
  {
    prompt: "A shop buys stock for R10 000 excluding VAT. What is debited to VAT Control?",
    options: ["R10 000", "R11 500", "R1 500", "R8 500"],
    answer: "R1 500",
    explanation: "The input VAT is 15% of R10 000 = R1 500, and the R10 000 goes to Purchases or Trading Stock.",
  },
  {
    prompt: "A sale is made for R11 500 including VAT. How is it split?",
    options: ["R10 000 sales and R1 500 VAT", "R11 500 sales and no VAT", "R9 775 sales and R1 725 VAT", "R10 000 sales and R150 VAT"],
    answer: "R10 000 sales and R1 500 VAT",
    explanation: "R11 500 ÷ 115 × 100 = R10 000, and the VAT is R11 500 − R10 000 = R1 500.",
  },
];

const VatCalculationsAccount = () => (
  <CapsSubjectTopic
    title="VAT Calculations: Input, Output and the VAT Account"
    subtitle="Adding and removing VAT, net VAT payable or refundable, and the VAT Control account"
    learnSteps={learnSteps}
    task="gr10-vat-calculations-account-t2"
    bank={bank}
    apiPath="/api/caps/acc"
    grade={10}
  />
);

export default VatCalculationsAccount;
