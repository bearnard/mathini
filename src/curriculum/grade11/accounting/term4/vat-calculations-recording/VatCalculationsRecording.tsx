import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import TAccount from '../../../../../components/subjects/TAccount';
import { VatFlow, VatPriceBar } from '../../../../../components/diagrams/accounting/VatDiagrams';
import { PRICE_EXAMPLE, VAT_EXAMPLE } from '../../../../../components/diagrams/accounting/vat';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is VAT and why does it exist?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Value Added Tax (VAT)</strong> is an indirect tax levied by the South African government on the consumption of goods and services. The standard rate in South Africa is <strong>15%</strong>.
        </p>
        <VatFlow input={VAT_EXAMPLE.input} output={VAT_EXAMPLE.output} />
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Input VAT</strong>
            <p className="text-slate-600">VAT paid by the business when it buys goods or services. It is a <strong>claim</strong> against SARS.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Output VAT</strong>
            <p className="text-slate-600">VAT collected by the business when it sells goods or services. It is an <strong>amount owed</strong> to SARS.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Net VAT payable = Output VAT − Input VAT. If input exceeds output, SARS owes the business a refund.</p>
      </div>
    ),
  },
  {
    title: 'Calculating VAT-inclusive and VAT-exclusive amounts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners must be able to move between VAT-inclusive and VAT-exclusive prices.
        </p>
        <VatPriceBar exclusive={PRICE_EXAMPLE.exclusive} />
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-3">
          <div>
            <p className="font-bold text-slate-700">Adding VAT (exclusive → inclusive):</p>
            <p className="font-mono text-blue-700">VAT-inclusive price = VAT-exclusive price × 1.15</p>
            <p className="text-slate-500 text-sm">Example: R200 + 15% VAT = R200 × 1.15 = <strong>R230</strong></p>
          </div>
          <div>
            <p className="font-bold text-slate-700">Extracting VAT (inclusive → exclusive):</p>
            <p className="font-mono text-green-700">VAT amount = VAT-inclusive price × 15/115</p>
            <p className="text-slate-500 text-sm">Example: VAT in R230 = R230 × 15/115 = <strong>R30</strong></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The VAT control account',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>VAT control account</strong> (or VAT account) accumulates input and output VAT. The balance shows what is owed to or refundable from SARS.
        </p>
        <TAccount
          title="VAT Control Account"
          debit={[
            { description: 'Input VAT on purchases', amount: 12000 },
          ]}
          credit={[
            { description: 'Output VAT on sales', amount: 18000 },
          ]}
        />
        <p className="text-sm text-slate-500">Because the credit side is greater than the debit side, the balance is <strong>R6 000 Cr</strong> — VAT payable to SARS.</p>
      </div>
    ),
  },
  {
    title: 'VAT and source documents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          VAT must be supported by valid <strong>tax invoices</strong>. Without a valid tax invoice, input VAT cannot be claimed.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-amber-700">A valid tax invoice must show:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>The words "Tax Invoice"</li>
            <li>The supplier's VAT registration number</li>
            <li>The buyer's VAT registration number (for invoices over R5 000)</li>
            <li>A unique invoice number and date</li>
            <li>Description, quantity, and price of goods or services</li>
            <li>VAT amount shown separately</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The standard VAT rate in South Africa is:',
    options: ['10%', '14%', '15%', '20%'],
    answer: '15%',
    explanation: 'South Africa\'s standard VAT rate was increased from 14% to 15% on 1 April 2018.',
  },
  {
    prompt: 'Input VAT refers to:',
    options: [
      'VAT collected from customers on sales',
      'VAT paid by the business on its purchases',
      'VAT owed to SARS',
      'The VAT rate applied to exports',
    ],
    answer: 'VAT paid by the business on its purchases',
    explanation: 'Input VAT is the tax a business pays when buying goods or services. It can be claimed back from SARS against output VAT.',
  },
  {
    prompt: 'Output VAT refers to:',
    options: ['VAT that the business pays to its suppliers', 'VAT that the business collects from customers on its sales', 'VAT that is refunded to the business by SARS', 'VAT that is paid on imported goods only'],
    answer: 'VAT that the business collects from customers on its sales',
    explanation: 'Output VAT is collected on behalf of SARS when the business sells goods or services to customers.',
  },
  {
    prompt: 'A product is sold for R460 (VAT inclusive at 15%). The VAT amount included in the price is:',
    options: ['R69', 'R60', 'R46', 'R75'],
    answer: 'R60',
    explanation: 'VAT = R460 × 15/115 = R60. The VAT-exclusive price is R400 and VAT is R60.',
  },
  {
    prompt: 'If a business charges R350 (VAT exclusive), the VAT-inclusive amount is:',
    options: ['R365', 'R367.50', 'R402.50', 'R385'],
    answer: 'R402.50',
    explanation: 'R350 × 1.15 = R402.50.',
  },
  {
    prompt: 'The VAT control account shows output VAT of R18 000 and input VAT of R12 000. The business must:',
    options: [
      'Claim a refund of R6 000 from SARS',
      'Pay R6 000 to SARS',
      'Pay R18 000 to SARS',
      'Claim a refund of R12 000',
    ],
    answer: 'Pay R6 000 to SARS',
    explanation: 'Net VAT payable = Output VAT − Input VAT = R18 000 − R12 000 = R6 000 owed to SARS.',
  },
  {
    prompt: 'When input VAT exceeds output VAT, the VAT control account has a:',
    options: [
      'Credit balance, meaning a liability to SARS',
      'Debit balance, meaning SARS owes the business a refund',
      'Zero balance',
      'No effect on the balance sheet',
    ],
    answer: 'Debit balance, meaning SARS owes the business a refund',
    explanation: 'A debit balance in the VAT control account indicates the business has overpaid VAT and is entitled to a refund from SARS.',
  },
  {
    prompt: 'To claim input VAT from SARS, a business must have a:',
    options: [
      'Delivery note from the supplier',
      'Valid tax invoice from the supplier',
      'Bank statement showing the payment',
      'Receipt from the post office',
    ],
    answer: 'Valid tax invoice from the supplier',
    explanation: 'SARS requires a valid tax invoice to substantiate any input VAT claim.',
  },
  {
    prompt: 'Purchases of R115 (VAT inclusive). How much input VAT can the business claim?',
    options: ['R15', 'R17.25', 'R14', 'R16.10'],
    answer: 'R15',
    explanation: 'Input VAT = R115 × 15/115 = R15. The VAT-exclusive price is R100 and the VAT is R15.',
  },
  {
    prompt: 'Zero-rated supplies are VAT transactions where:',
    options: ['No VAT registration is needed for the supplier', 'VAT is charged at 0%, but the transaction is still under VAT law', 'Input VAT cannot be claimed on the purchases', 'The business is exempt from all tax duties'],
    answer: 'VAT is charged at 0%, but the transaction is still under VAT law',
    explanation: 'Zero-rated items (e.g., basic foodstuffs) are taxed at 0%. The business can still claim input VAT on related purchases.',
  },
];

const VatCalculationsRecording = () => (
  <CapsSubjectTopic
    title="VAT Calculations and Recording"
    subtitle="Understanding input and output VAT, the VAT control account, and tax invoices"
    learnSteps={learnSteps}
    task="gr11-vat-calculations-recording-t4"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default VatCalculationsRecording;
