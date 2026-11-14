
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const monetaryData = [
  { year: '2019', repo: 6.5, inflation: 4.1, prime: 10.0 },
  { year: '2020', repo: 3.5, inflation: 3.3, prime: 7.0 },
  { year: '2021', repo: 3.75, inflation: 4.5, prime: 7.25 },
  { year: '2022', repo: 6.25, inflation: 6.9, prime: 9.75 },
  { year: '2023', repo: 8.25, inflation: 5.9, prime: 11.75 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Functions and Forms of Money',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Money is anything generally accepted as payment. Its core functions are to act as a medium of exchange, store of value, unit of account and standard of deferred payment.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Medium of exchange</p>
            <p className="mt-1 text-slate-600">Money removes the need for barter.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Store of value</p>
            <p className="mt-1 text-slate-600">Money can keep value over time, although inflation reduces purchasing power.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Unit of account</p>
            <p className="mt-1 text-slate-600">Prices are expressed in a common unit such as rand.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Deferred payment</p>
            <p className="mt-1 text-slate-600">Loans can be agreed today and repaid later in money terms.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Commercial Banks and Credit Creation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Commercial banks collect deposits, lend money and create credit through fractional reserve banking.
        </p>
        <SupplyDemand title="Loanable Funds Market" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Key idea</p>
          <p className="mt-1 text-slate-600">When banks have more deposits, the supply of loanable funds rises and credit becomes easier to access.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The South African Reserve Bank (SARB)',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The SARB is the central bank. It issues money, acts as banker to government and commercial banks, and aims to keep inflation within the 3–6% target band.
        </p>
        <DataChart
          data={monetaryData}
          series={[
            { key: 'repo', label: 'Repo rate (%)', color: '#6366f1' },
            { key: 'prime', label: 'Prime rate (%)', color: '#10b981' },
            { key: 'inflation', label: 'Inflation (%)', color: '#ef4444' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
      </div>
    ),
  },
  {
    title: 'The Repo Rate and Monetary Policy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The repo rate is the price commercial banks pay when borrowing from the SARB. Higher repo rates slow borrowing and spending; lower repo rates stimulate them.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Contractionary policy</p>
            <p className="mt-1 text-slate-600">Higher rates cool demand and help bring inflation down.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Expansionary policy</p>
            <p className="mt-1 text-slate-600">Lower rates encourage borrowing, investment and spending during weak growth.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Which function of money eliminates the need for barter?',
    options: ['Store of value', 'Unit of account', 'Medium of exchange', 'Standard of deferred payment'],
    answer: 'Medium of exchange',
    explanation: 'Money as a medium of exchange means everyone accepts it for goods and services, removing the double coincidence of wants required by barter.',
  },
  {
    prompt: 'When inflation is high, money performs poorly as a:',
    options: ['Medium of exchange', 'Store of value', 'Unit of account', 'Standard of deferred payment'],
    answer: 'Store of value',
    explanation: 'Inflation erodes purchasing power — money held loses value over time, making it a poor store of value during high inflation.',
  },
  {
    prompt: "The South African Reserve Bank's primary mandate is:",
    options: ['Maximising employment', 'Providing home loans to low-income households', 'Maintaining price stability through inflation targeting', 'Financing government budget deficits'],
    answer: 'Maintaining price stability through inflation targeting',
    explanation: "The SARB's primary constitutional mandate is price stability. It targets inflation within the 3–6% band.",
  },
  {
    prompt: "SA's inflation target band set by the SARB is:",
    options: ['1–3%', '3–6%', '5–8%', '0–2%'],
    answer: '3–6%',
    explanation: "The SARB's Monetary Policy Committee aims to keep CPI inflation within the 3–6% target range.",
  },
  {
    prompt: 'The repo rate is the interest rate at which:',
    options: ['Government borrows from the public', 'Commercial banks lend to consumers', 'The SARB lends money to commercial banks', 'The SARB charges on home loans'],
    answer: 'The SARB lends money to commercial banks',
    explanation: 'The repo (repurchase) rate is the rate the SARB charges commercial banks when they borrow overnight liquidity.',
  },
  {
    prompt: 'If the SARB increases the repo rate, the expected effect on inflation is:',
    options: ['Inflation rises, because borrowing becomes cheaper', 'Inflation is not affected by the repo rate', 'Inflation falls, as higher rates reduce borrowing and spending', 'Inflation rises, because the money supply grows'],
    answer: 'Inflation falls, as higher rates reduce borrowing and spending',
    explanation: 'Higher repo rate → higher prime rate → dearer credit → less borrowing and spending → lower demand → inflation pressure falls.',
  },
  {
    prompt: "SA's prime lending rate is calculated as:",
    options: ['Repo rate + 1.5%', 'Repo rate + 3.5%', 'Inflation rate + repo rate', 'Repo rate − 2%'],
    answer: 'Repo rate + 3.5%',
    explanation: 'The prime rate is conventionally set 3.5 percentage points above the repo rate in South Africa.',
  },
  {
    prompt: 'Fractional reserve banking means commercial banks:',
    options: ['Hold all of their deposits as cash reserves', 'Cannot make any loans to their customers', 'Lend out most deposits and keep a fraction as reserves', 'Are owned and run by the SARB'],
    answer: 'Lend out most deposits and keep a fraction as reserves',
    explanation: 'Banks keep a fraction of deposits as required reserves and lend the rest, effectively creating new money in the economy.',
  },
  {
    prompt: 'The SARB acts as "lender of last resort" by:',
    options: ['Providing home loans to poor households', 'Selling government bonds to the commercial banks', 'Providing emergency liquidity to banks to prevent a collapse', 'Setting the interest rates for the whole economy'],
    answer: 'Providing emergency liquidity to banks to prevent a collapse',
    explanation: 'As lender of last resort, the SARB stands ready to provide liquidity to solvent banks that face short-term cash crises, preventing bank runs.',
  },
  {
    prompt: 'During a recession, the SARB would most likely:',
    options: ['Raise the repo rate to cool the economy down', 'Keep the repo rate unchanged for an unlimited time', 'Cut the repo rate to stimulate borrowing and activity', 'Raise the band of the inflation target'],
    answer: 'Cut the repo rate to stimulate borrowing and activity',
    explanation: 'An expansionary monetary policy (lower repo rate) makes credit cheaper, encouraging borrowing, investment and spending to revive a recessionary economy.',
  },
];

const MoneyBanking = () => (
  <CapsSubjectTopic
    title="Money, Banking and the Central Bank"
    subtitle="Functions of money, commercial banks, SARB and the repo rate"
    learnSteps={learnSteps}
    task="gr11-money-banking-t3"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default MoneyBanking;
