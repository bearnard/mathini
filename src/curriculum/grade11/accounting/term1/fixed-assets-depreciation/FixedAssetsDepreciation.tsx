import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a fixed asset register?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>fixed asset register</strong> is a detailed record of every tangible (physical) non-current asset owned by a business.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">What it records per asset</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Description and serial number</li>
              <li>Date of purchase and cost</li>
              <li>Depreciation method and rate</li>
              <li>Accumulated depreciation and carrying value</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Why it matters</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Supports the balance sheet figures</li>
              <li>Helps with insurance and asset control</li>
              <li>Enables calculation of depreciation</li>
              <li>Deters theft and misappropriation</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Depreciation: straight-line method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Under the <strong>straight-line method</strong>, the same depreciation amount is charged every year over the asset's useful life.
        </p>
        <FinancialStatement
          title="Equipment Depreciation Schedule"
          period="Straight-line over 4 years"
          sections={[
            {
              heading: 'Cost and residual value',
              lines: [
                { label: 'Equipment at cost', amount: 45000 },
                { label: 'Residual value', amount: 5000 },
                { label: 'Depreciable amount', amount: 40000, isSubtotal: true },
              ],
            },
            {
              heading: 'Annual charge',
              lines: [
                { label: 'Annual depreciation', amount: 10000 },
              ],
            },
            {
              heading: 'Carrying value',
              lines: [
                { label: 'End of Year 1', amount: 35000 },
                { label: 'End of Year 2', amount: 25000 },
                { label: 'End of Year 4', amount: 5000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-600">Annual depreciation = (R45 000 − R5 000) ÷ 4 = <strong>R10 000</strong>. Carrying value = Cost − Accumulated depreciation.</p>
      </div>
    ),
  },
  {
    title: 'Depreciation: diminishing balance method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Under the <strong>diminishing balance method</strong>, depreciation is calculated as a fixed percentage of the <em>carrying value</em> each year — so the amount decreases over time.
        </p>
        <FinancialStatement
          title="Diminishing Balance Example"
          period="20% per year on carrying value"
          sections={[
            {
              heading: 'Year 1',
              lines: [
                { label: 'Opening carrying value', amount: 40000 },
                { label: 'Depreciation (20%)', amount: -8000, indent: 1 },
                { label: 'Closing carrying value', amount: 32000, isSubtotal: true },
              ],
            },
            {
              heading: 'Year 2',
              lines: [
                { label: 'Opening carrying value', amount: 32000 },
                { label: 'Depreciation (20%)', amount: -6400, indent: 1 },
                { label: 'Closing carrying value', amount: 25600, isSubtotal: true },
              ],
            },
            {
              heading: 'Year 3',
              lines: [
                { label: 'Opening carrying value', amount: 25600 },
                { label: 'Depreciation (20%)', amount: -5120, indent: 1 },
                { label: 'Closing carrying value', amount: 20480, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">Higher depreciation is recognised in the early years because the calculation is based on the reducing carrying value, not the original cost.</p>
      </div>
    ),
  },
  {
    title: 'Asset disposal and internal controls',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When a fixed asset is sold or scrapped, its cost and accumulated depreciation are removed and a <strong>profit or loss on disposal</strong> is recognised.
        </p>
        <TAccount
          title="Asset Disposal Account"
          debit={[
            { description: 'Equipment cost transferred', amount: 60000 },
          ]}
          credit={[
            { description: 'Accumulated depreciation transferred', amount: 24000 },
            { description: 'Bank (sale proceeds)', amount: 28000 },
          ]}
        />
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Profit on disposal</strong>
            <p className="text-slate-600">Selling price exceeds carrying value at date of disposal.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Loss on disposal</strong>
            <p className="text-slate-600">Here the balance is <strong>R8 000 Dr</strong>, showing a loss because proceeds are below carrying value.</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl text-left">
          <p className="font-bold text-amber-700">Internal controls over fixed assets:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1 mt-1">
            <li>Physical verification (assets tagged and counted regularly)</li>
            <li>Written authorisation required before disposal</li>
            <li>Register reconciled to general ledger periodically</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'What is the main purpose of maintaining a fixed asset register?',
    options: ['To work out the gross profit of the business', 'A detailed record of each asset: cost, depreciation, carrying value', 'To record the daily cash transactions of the business', 'To track the amounts owed by the debtors'],
    answer: 'A detailed record of each asset: cost, depreciation, carrying value',
    explanation: 'The fixed asset register supports internal control and provides the detail needed for balance sheet figures.',
  },
  {
    prompt: 'A vehicle costs R120 000, has a residual value of R20 000, and a useful life of 5 years. Using the straight-line method, the annual depreciation is:',
    options: ['R24 000', 'R20 000', 'R100 000', 'R12 000'],
    answer: 'R20 000',
    explanation: '(R120 000 − R20 000) ÷ 5 = R100 000 ÷ 5 = R20 000 per year.',
  },
  {
    prompt: 'Under the diminishing balance method at 20% p.a., an asset with a carrying value of R60 000 has an annual depreciation charge of:',
    options: ['R12 000', 'R15 000', 'R6 000', 'R20 000'],
    answer: 'R12 000',
    explanation: 'R60 000 × 20% = R12 000.',
  },
  {
    prompt: 'The carrying value of an asset is:',
    options: [
      'The original cost of the asset',
      'The market value of the asset',
      'Cost minus accumulated depreciation',
      'The residual value of the asset',
    ],
    answer: 'Cost minus accumulated depreciation',
    explanation: 'Carrying value (book value) = Cost − Accumulated depreciation. It represents the net amount still to be written off.',
  },
  {
    prompt: 'Residual value is best described as:',
    options: [
      'The total depreciation charged over the asset\'s life',
      'The estimated value of the asset at the end of its useful life',
      'The original purchase price of the asset',
      'The amount the asset is insured for',
    ],
    answer: 'The estimated value of the asset at the end of its useful life',
    explanation: 'Residual value (scrap value) is what the business expects to receive when the asset is eventually sold or scrapped.',
  },
  {
    prompt: 'An asset with a carrying value of R15 000 is sold for R18 000. The business will record a:',
    options: ['Loss on disposal of R3 000', 'Profit on disposal of R3 000', 'Profit on disposal of R18 000', 'Loss on disposal of R15 000'],
    answer: 'Profit on disposal of R3 000',
    explanation: 'Selling price (R18 000) − Carrying value (R15 000) = R3 000 profit on disposal.',
  },
  {
    prompt: 'Which depreciation method results in an equal depreciation charge each year?',
    options: ['Diminishing balance method', 'Units of production method', 'Straight-line method', 'Accelerated method'],
    answer: 'Straight-line method',
    explanation: 'The straight-line method spreads the depreciable amount evenly over the useful life of the asset.',
  },
  {
    prompt: 'The journal entry to record annual depreciation is:',
    options: [
      'Debit: Asset account; Credit: Depreciation expense',
      'Debit: Depreciation expense; Credit: Accumulated depreciation',
      'Debit: Accumulated depreciation; Credit: Asset account',
      'Debit: Bank; Credit: Depreciation expense',
    ],
    answer: 'Debit: Depreciation expense; Credit: Accumulated depreciation',
    explanation: 'Depreciation is an expense (debit) and it builds up in the accumulated depreciation account (credit) which is a contra-asset.',
  },
  {
    prompt: 'Which internal control helps prevent theft of fixed assets?',
    options: ['Preparing a bank reconciliation every month', 'Tagging assets with unique numbers and checking them physically', 'Issuing invoices to the customers without delay', 'Reconciling the debtors control account every month'],
    answer: 'Tagging assets with unique numbers and checking them physically',
    explanation: 'Asset tagging and physical counts ensure every asset on the register actually exists and is on the premises.',
  },
  {
    prompt: 'Why must the fixed asset register be reconciled to the general ledger?',
    options: ['To work out the net profit for the year', 'To make sure the register agrees with the ledger control account', 'To prepare the cashbook of the business', 'To find the outstanding deposits on the statement'],
    answer: 'To make sure the register agrees with the ledger control account',
    explanation: 'Reconciling the register to the ledger detects errors or omissions and ensures the balance sheet is accurate.',
  },
];

const FixedAssetsDepreciation = () => (
  <CapsSubjectTopic
    title="Fixed Assets and Depreciation"
    subtitle="Recording, calculating, and controlling tangible assets"
    learnSteps={learnSteps}
    task="gr11-fixed-assets-depreciation-t1"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default FixedAssetsDepreciation;
