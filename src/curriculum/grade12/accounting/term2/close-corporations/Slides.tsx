import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { rand } from '../../../../../components/diagrams/accounting/rand';
import { DUBE_KHAN as C, TERMS, ccStatements } from '../../../../../components/diagrams/accounting/closeCorporation';
import { StatementTable } from '../../../../../components/diagrams/accounting/StatementTable';

// Every amount comes from closeCorporation.ts (tested in closeCorporation.test.ts and g12AccCcControl.test.ts).
export const s = ccStatements(C);
const TermsTable = () => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label={`Terms: ${TERMS.map((t) => `${t.company} becomes ${t.cc}`).join('; ')}.`} className="w-full border-collapse text-[12px] text-slate-100">
      <thead>
        <tr className="text-[11px] uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Company</th>
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Close corporation</th>
        </tr>
      </thead>
      <tbody>
        {TERMS.map((t) => (
          <tr key={t.company} className="border-t border-slate-700">
            <td className="px-2 py-1.5">{t.company}</td>
            <td className="px-2 py-1.5 font-semibold text-emerald-300">{t.cc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a close corporation?',
    content: slide(
      <>
        <Rule>A close corporation (CC) is a small business that is registered as a separate legal entity under the Close Corporations Act of 1984. It is owned by its members, not by shareholders, and the members usually manage it.</Rule>
        <Worked
          title="The key ideas"
          steps={[
            <>The CC is registered with a <strong>founding statement</strong>, which sets out its name, its business and its members.</>,
            <>Each member has a <strong>members&rsquo; interest</strong> in the CC. A CC has no shares.</>,
            <>The CC has its own legal identity: it can own assets, owe money and sue or be sued in its own name.</>,
            <>Its name ends with &ldquo;CC&rdquo;.</>,
            <>Since the Companies Act of 2008 took effect on 1 May 2011, no <strong>new</strong> close corporations can be registered. Existing CCs carry on, which is why you still learn about them.</>,
          ]}
        />
        <Mistake>Calling the owners of a CC shareholders. They are members, and what they own is called the members&rsquo; interest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Terminology: company and close corporation',
    content: slide(
      <>
        <Rule>The financial statements of a company and of a close corporation have the same shape, but several terms differ. Learn the pairs.</Rule>
        <TermsTable />
        <Worked
          steps={TERMS.slice(0, 5).map((t) => <>A company has <strong>{t.company}</strong>. A close corporation has <strong>{t.cc}</strong>.</>)}
        />
        <Mistake>Using dividends for a CC. Profit is shared among members as a distribution to members.</Mistake>
      </>,
    ),
  },
  {
    title: 'Loans to and from members',
    content: slide(
      <>
        <Rule>A member may lend money to the CC, or the CC may lend money to a member. A loan from a member is a liability of the CC. A loan to a member is an asset of the CC. Interest on either loan goes in the income statement.</Rule>
        <Worked
          title="Dube and Khan Traders CC (invented)"
          steps={[
            <>Mr Dube lent the CC {rand(C.loanFromMember)} at 10%. The CC owes this, so it is a <strong>loan from a member</strong> (a liability). Interest paid: {rand(C.loanFromMember)} × 10% = {rand(C.interestOnLoanFromMember)}.</>,
            <>The CC lent Ms Khan {rand(C.loanToMember)} at 8%. She owes the CC this, so it is a <strong>loan to a member</strong> (an asset). Interest earned: {rand(C.loanToMember)} × 8% = {rand(C.interestOnLoanToMember)}.</>,
          ]}
        />
        <Mistake>Putting a loan from a member in equity. It is not the member&rsquo;s contribution. It must be repaid, so it is a liability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Income statement and distribution to members',
    content: slide(
      <>
        <Rule>The income statement works out the net profit. The appropriation of profit then shows the distribution to members and the retained income that stays in the CC.</Rule>
        <StatementTable title="Income statement" lines={s.incomeStatement} aria={`Income statement of Dube and Khan Traders CC. Gross profit ${rand(s.grossProfit)}, operating profit ${rand(s.operatingProfit)}, net profit before tax ${rand(s.netProfitBeforeTax)} and net profit after tax ${rand(s.netProfitAfterTax)}.`} />
        <StatementTable title="Appropriation of profit" lines={s.appropriation} aria={`Appropriation of profit: retained income at the start ${rand(C.openingRetainedIncome)}, plus net profit ${rand(s.netProfitAfterTax)}, less the distribution to members ${rand(C.distributionToMembers)}, gives retained income at the end of ${rand(s.retainedIncomeEnd)}.`} />
        <Worked
          steps={[
            `Net profit after tax: ${rand(s.netProfitBeforeTax)} − ${rand(C.incomeTax)} = ${rand(s.netProfitAfterTax)}.`,
            `Retained income at the end: ${rand(C.openingRetainedIncome)} + ${rand(s.netProfitAfterTax)} − ${rand(C.distributionToMembers)} = ${rand(s.retainedIncomeEnd)}.`,
          ]}
        />
        <Mistake>Deducting the distribution to members in the income statement. It is a share of profit, not an expense, so it goes in the appropriation of profit.</Mistake>
      </>,
    ),
  },
  {
    title: 'The balance sheet',
    content: slide(
      <>
        <Rule>In the balance sheet the equity is called the members&rsquo; interest: the members&rsquo; contributions plus the retained income. The balance sheet must balance: total assets equal members&rsquo; interest plus liabilities.</Rule>
        <StatementTable title="Equity and liabilities" lines={s.balanceSheet.equityAndLiabilities} aria={`Equity and liabilities: members' interest ${rand(s.membersInterest)}, loan from member ${rand(C.loanFromMember)}, trade creditors ${rand(C.creditors)} and income tax payable ${rand(s.taxPayable)}, a total of ${rand(s.totalEquityAndLiabilities)}.`} />
        <StatementTable title="Assets" lines={s.balanceSheet.assets} aria={`Assets: fixed assets ${rand(C.fixedAssetsCarryingValue)}, loan to member ${rand(C.loanToMember)}, inventory ${rand(C.inventory)}, trade debtors ${rand(C.debtors)} and bank ${rand(C.bank)}, a total of ${rand(s.totalAssets)}.`} />
        <Worked
          steps={[
            `Members' interest: ${rand(C.membersContributions)} + ${rand(s.retainedIncomeEnd)} = ${rand(s.membersInterest)}.`,
            `Income tax payable: ${rand(C.incomeTax)} charged − ${rand(C.taxPaid)} paid = ${rand(s.taxPayable)}.`,
            `Both totals are ${rand(s.totalAssets)}, so the balance sheet balances.`,
          ]}
        />
        <Mistake>Showing the loan to a member as part of the members&rsquo; interest. It is an amount that the member owes the CC, so it is an asset.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a close corporation call its owners, and what is their interest called?</>,
          <>A CC lends a member R10 000 at 8%. Is this an asset or a liability, and what interest is earned in a year?</>,
          <>Retained income at the start is R20 000, net profit after tax is R50 000 and R30 000 is distributed to members. What is the retained income at the end?</>,
          <>Which term replaces &ldquo;dividends&rdquo; in a close corporation?</>,
        ]}
        answers={[
          <>Members; the members&rsquo; interest.</>,
          <>An asset (a loan to a member). Interest: R10 000 × 8% = <strong>R800</strong>.</>,
          <>20 000 + 50 000 − 30 000 = <strong>R40 000</strong>.</>,
          <>Distribution to members.</>,
        ]}
      />,
    ),
  },
];
