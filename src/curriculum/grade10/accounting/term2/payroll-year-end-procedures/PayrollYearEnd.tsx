import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/acc/term2/payroll-year-end-procedures/diagram.webp", alt: "Salaries and Wages Control" },
    title: 'Gross pay, deductions and net pay',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Payroll starts with the employee’s <strong>gross salary or wage</strong>. Statutory and agreed deductions are then subtracted to calculate the <strong>net pay</strong> transferred to staff.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Gross earnings</h3>
            <p className="mt-2 text-slate-600">Basic salary, overtime, bonus and any regular earning before deductions.</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-5">
            <h3 className="font-semibold text-rose-700">Employee deductions</h3>
            <p className="mt-2 text-slate-600">PAYE, UIF, pension, medical aid and union fees reduce the amount paid to the employee.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-700">Net pay</h3>
            <p className="mt-2 text-slate-600">The final amount actually paid into the employee’s bank account.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Recording payroll in the journals',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The Salaries Journal and Wages Journal separate earnings, deductions and employer contributions so that control accounts can be updated accurately.
        </p>
        <TAccount
          title="Salaries and Wages Control"
          debit={[
            { description: 'Gross salaries', amount: 48600 },
            { description: 'Employer UIF contribution', amount: 486 },
            { description: 'SDL contribution', amount: 486 },
          ]}
          credit={[
            { description: 'PAYE payable', amount: 7200 },
            { description: 'UIF payable', amount: 972 },
            { description: 'Medical aid payable', amount: 2500 },
            { description: 'Bank (net salaries paid)', amount: 38900 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Employer responsibilities and internal control',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The employer must calculate and pay over statutory deductions on time, while also protecting payroll from fraud and ghost employees.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Employer obligations</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Pay PAYE, UIF and SDL to SARS on time.</li>
              <li>Keep accurate employee records and payslips.</li>
              <li>Match payroll totals to attendance and contracts.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Control measures</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Different people should authorise, prepare and pay payroll.</li>
              <li>Clock cards or registers should support wage calculations.</li>
              <li>Unclaimed wages should be investigated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Year-end adjustments and final reporting',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          At year-end, unpaid salaries, deductions still owing and prepaid expenses must be adjusted before the final accounts are prepared.
        </p>
        <FinancialStatement
          title="Post-adjustment Trial Balance Extract"
          period="28 February 2025"
          sections={[
            {
              heading: 'Expenses',
              lines: [
                { label: 'Salaries and wages', amount: 586200 },
                { label: 'Employer UIF and SDL', amount: 11940 },
                { label: 'Total payroll-related expenses', amount: 598140, isSubtotal: true },
              ],
            },
            {
              heading: 'Current liabilities',
              lines: [
                { label: 'Salaries owing', amount: 12400 },
                { label: 'PAYE payable', amount: 7200 },
                { label: 'UIF payable', amount: 1940 },
                { label: 'Medical aid payable', amount: 2500 },
                { label: 'Total payroll liabilities', amount: 24040, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Net salary is calculated as:',
    options: ['Gross salary + deductions', 'Gross salary - deductions', 'Gross salary - drawings', 'Gross salary + PAYE'],
    answer: 'Gross salary - deductions',
    explanation: 'Employee deductions such as PAYE and UIF are subtracted from gross pay to find net salary.',
  },
  {
    prompt: 'PAYE deducted from employees is paid over to:',
    options: ['The owner', 'SARS', 'The bank', 'Trade creditors'],
    answer: 'SARS',
    explanation: 'PAYE is a tax collected by the employer on behalf of SARS.',
  },
  {
    prompt: 'Which of the following is an employer contribution?',
    options: ['Employee drawings', 'Employer UIF contribution', 'Discount allowed', 'Bad debts'],
    answer: 'Employer UIF contribution',
    explanation: 'The employer contributes its own UIF amount in addition to the employee deduction.',
  },
  {
    prompt: 'An unpaid salary at year-end is classified as a:',
    options: ['Current asset', 'Current liability', 'Non-current asset', 'Capital item'],
    answer: 'Current liability',
    explanation: 'It is an expense already incurred but not yet paid, so it is owing by the business.',
  },
  {
    prompt: 'Which journal is commonly used to record payroll totals?',
    options: ['Debtors Journal', 'Salaries Journal or Wages Journal', 'Creditors Allowances Journal', 'Cash Receipts Journal only'],
    answer: 'Salaries Journal or Wages Journal',
    explanation: 'Payroll is first analysed in the Salaries Journal or Wages Journal before posting to the ledger.',
  },
  {
    prompt: 'Why should payroll duties be separated?',
    options: ['To increase salaries', 'To prevent fraud and unauthorised payments', 'To reduce UIF', 'To avoid using source documents'],
    answer: 'To prevent fraud and unauthorised payments',
    explanation: 'Separation of duties reduces the risk of ghost employees and unauthorised changes.',
  },
  {
    prompt: 'Medical aid deducted from an employee but not yet paid over is shown as a:',
    options: ['Liability', 'Fixed asset', 'Revenue item', 'Drawings item'],
    answer: 'Liability',
    explanation: 'The business owes the deducted amount to the medical aid fund.',
  },
  {
    prompt: 'A payslip mainly helps an employee to see:',
    options: ['The sales that were made during the month', 'How gross pay, deductions and net pay were worked out', 'The cost of the trading stock that was bought', 'The bank reconciliation of the business'],
    answer: 'How gross pay, deductions and net pay were worked out',
    explanation: 'The payslip summarises the payroll calculation for the employee.',
  },
];

const PayrollYearEnd = () => (
  <CapsSubjectTopic
    title="Payroll and Year-end Procedures"
    subtitle="Calculating payroll, updating control accounts and preparing year-end salary adjustments"
    learnSteps={learnSteps}
    task="gr10-payroll-year-end-procedures"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default PayrollYearEnd;
