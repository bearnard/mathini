import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Obligations of a VAT vendor',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A business that is registered as a <strong>VAT vendor</strong> has legal and ethical obligations it must fulfil. Acting with integrity in VAT matters protects the business and contributes to government revenue that funds public services.
        </p>
        <div className="bg-blue-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-blue-700">Key obligations:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>Register with SARS once taxable turnover exceeds the threshold (R1 million per year)</li>
            <li>Issue valid tax invoices for all taxable supplies</li>
            <li>Keep accurate records for at least 5 years</li>
            <li>Submit VAT returns (VAT201) and pay on time (generally every 2 months)</li>
            <li>Charge the correct VAT rate and disclose VAT separately</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Consequences of VAT non-compliance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Failing to comply with VAT legislation carries serious consequences for the business and its owners.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Financial penalties:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Understatement penalties (up to 200%)</li>
              <li>Late payment interest charged by SARS</li>
              <li>Administrative penalties for late returns</li>
            </ul>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Criminal consequences:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Prosecution for tax fraud</li>
              <li>Imprisonment for deliberate evasion</li>
              <li>SARS audit and seizure of records</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Unethical VAT practices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          VAT fraud is not just a legal issue — it is an <strong>ethical failure</strong> that shifts the tax burden onto honest citizens and reduces funding for essential government services.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-amber-700">Examples of unethical VAT conduct:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>Charging customers VAT without being registered as a vendor</li>
            <li>Claiming input VAT on personal (non-business) expenses</li>
            <li>Creating false tax invoices to inflate input VAT claims</li>
            <li>Under-declaring output VAT on the VAT201 return</li>
            <li>Not declaring cash sales to hide output VAT</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Internal controls over VAT',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong <strong>internal controls</strong> ensure the business complies with VAT legislation and reduces the risk of errors or fraud.
        </p>
        <TAccount
          title="VAT Control Account before review"
          debit={[
            { description: 'Input VAT on valid purchases', amount: 20300 },
          ]}
          credit={[
            { description: 'Output VAT on sales', amount: 24600 },
            { description: 'Correction: private fuel slip disallowed', amount: 1500 },
          ]}
        />
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Preventive controls:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Only authorised staff may capture VAT transactions</li>
              <li>All purchases require a valid tax invoice before input VAT is claimed</li>
              <li>VAT calculations are checked by a senior employee</li>
            </ul>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Detective controls:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Monthly reconciliation of the VAT control account</li>
              <li>Regular internal audits of VAT records</li>
              <li>Cross-checking VAT returns to source documents</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-slate-500">The correction entry shows how detective controls pick up invalid input VAT claims before the VAT201 return is submitted.</p>
      </div>
    ),
  },
  {
    title: "VAT and registration",
    content: (
      <div className="space-y-4">
        <GapRule>{"Only a registered vendor may add VAT to prices, because only a vendor can pay that money over to SARS. A shop that is not registered but still adds 15% is taking money it has no legal claim to."}</GapRule>
        <GapWorked title={"Spot the offence"} steps={["A small tuck shop has not registered but prices say 'incl. VAT'.", "Customers pay 15% extra that never reaches SARS.", "That is dishonest and against the law."]} />
        <GapMistake>{"Adding VAT to prices because competitors do."}</GapMistake>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'A business must register as a VAT vendor when its taxable turnover reaches:',
    options: ['R500 000 per year', 'R750 000 per year', 'R1 000 000 per year', 'R2 000 000 per year'],
    answer: 'R1 000 000 per year',
    explanation: 'The compulsory VAT registration threshold in South Africa is R1 million in taxable turnover in any consecutive 12-month period.',
  },
  {
    prompt: 'Charging customers VAT while not being registered as a VAT vendor is:',
    options: ['Acceptable if the business plans to register', 'Unethical and illegal; no right to collect VAT for SARS', 'Allowed during the first year of trading', 'Penalised only if SARS happens to detect it'],
    answer: 'Unethical and illegal; no right to collect VAT for SARS',
    explanation: 'Only registered vendors may charge VAT. Collecting VAT without being registered is fraud.',
  },
  {
    prompt: 'Claiming input VAT on personal grocery purchases is an example of:',
    options: ['Acceptable tax planning for the owner of a firm', 'A normal VAT refund claim made to SARS', 'Fraudulent inflation of input VAT; only business VAT counts', 'Zero-rated VAT treatment of a purchase'],
    answer: 'Fraudulent inflation of input VAT; only business VAT counts',
    explanation: 'Input VAT may only be claimed on goods and services used for business purposes. Personal expenses are excluded.',
  },
  {
    prompt: 'What happens if a business submits its VAT return late?',
    options: [
      'SARS sends a friendly reminder with no financial consequence',
      'The business faces administrative penalties and interest charges',
      'VAT is automatically waived',
      'The business is allowed one late submission per year without penalty',
    ],
    answer: 'The business faces administrative penalties and interest charges',
    explanation: 'SARS imposes penalties for late submission and charges interest on outstanding VAT amounts.',
  },
  {
    prompt: 'Why is hiding cash sales to reduce output VAT unethical?',
    options: ['It is only unethical if the amounts are large', 'It denies government revenue and shifts the tax burden to honest payers', 'It is unethical only if rivals do not do the same', 'It is not unethical when the business is struggling'],
    answer: 'It denies government revenue and shifts the tax burden to honest payers',
    explanation: 'VAT fraud reduces funding for education, healthcare, and infrastructure, and is fundamentally dishonest regardless of the business\'s financial situation.',
  },
  {
    prompt: 'How long must a VAT vendor keep its records?',
    options: ['1 year', '3 years', '5 years', '10 years'],
    answer: '5 years',
    explanation: 'SARS requires VAT vendors to keep all relevant records for at least 5 years for inspection purposes.',
  },
  {
    prompt: 'A strong internal control over input VAT is:',
    options: [
      'Paying all suppliers in cash to avoid paper trails',
      'Requiring a valid tax invoice for every purchase before claiming input VAT',
      'Estimating input VAT without keeping source documents',
      'Combining all VAT into one payment at year-end',
    ],
    answer: 'Requiring a valid tax invoice for every purchase before claiming input VAT',
    explanation: 'Requiring tax invoices is a preventive control that ensures only legitimate input VAT claims are made.',
  },
  {
    prompt: 'The VAT201 return is submitted to:',
    options: ['The municipality', 'The Department of Trade and Industry', 'SARS', 'The bank'],
    answer: 'SARS',
    explanation: 'VAT returns (VAT201) are submitted to the South African Revenue Service (SARS) on a regular cycle.',
  },
  {
    prompt: 'Creating a false tax invoice to claim input VAT is:',
    options: [
      'Acceptable if the purchase actually occurred',
      'Tax fraud — it is both illegal and deeply unethical',
      'Only illegal for large businesses',
      'A recognised accounting adjustment',
    ],
    answer: 'Tax fraud — it is both illegal and deeply unethical',
    explanation: 'Fabricating tax invoices is criminal conduct under the Tax Administration Act and constitutes fraud.',
  },
  {
    prompt: 'Which control detects VAT errors after they have occurred?',
    options: [
      'Only authorised staff may capture VAT transactions',
      'Monthly reconciliation of the VAT control account to source documents',
      'Requiring a valid tax invoice before claiming input VAT',
      'Restricting access to the VAT ledger',
    ],
    answer: 'Monthly reconciliation of the VAT control account to source documents',
    explanation: 'Monthly reconciliation is a detective control — it identifies VAT errors after the transactions have been recorded, allowing corrections to be made.',
  },
];

const VatEthicsCompliance = () => (
  <CapsSubjectTopic
    title="VAT Ethics and Compliance"
    subtitle="Understanding legal obligations, unethical practices, and internal controls for VAT"
    learnSteps={learnSteps}
    task="gr11-vat-ethics-compliance-t4"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default VatEthicsCompliance;
