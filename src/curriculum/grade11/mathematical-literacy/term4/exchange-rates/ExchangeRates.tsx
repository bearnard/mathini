import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  { title: 'What is an exchange rate?', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">An <strong>exchange rate</strong> is the price at which one currency is exchanged for another. It changes daily based on supply and demand.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-indigo-800">Example exchange rates (illustrative):</p><table className="text-sm border-collapse w-full"><thead><tr className="bg-indigo-100"><th className="border border-indigo-200 px-3 py-1">Currency</th><th className="border border-indigo-200 px-3 py-1">Buy (bank buys from you)</th><th className="border border-indigo-200 px-3 py-1">Sell (bank sells to you)</th></tr></thead><tbody><tr><td className="border border-indigo-200 px-3 py-1">USD (US Dollar)</td><td className="border border-indigo-200 px-3 py-1">R18,20</td><td className="border border-indigo-200 px-3 py-1">R18,80</td></tr><tr><td className="border border-indigo-200 px-3 py-1">EUR (Euro)</td><td className="border border-indigo-200 px-3 py-1">R19,50</td><td className="border border-indigo-200 px-3 py-1">R20,10</td></tr><tr><td className="border border-indigo-200 px-3 py-1">GBP (Pound)</td><td className="border border-indigo-200 px-3 py-1">R22,40</td><td className="border border-indigo-200 px-3 py-1">R23,00</td></tr><tr><td className="border border-indigo-200 px-3 py-1">AUD (Australian Dollar)</td><td className="border border-indigo-200 px-3 py-1">R11,90</td><td className="border border-indigo-200 px-3 py-1">R12,40</td></tr></tbody></table></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Different currencies cost different amounts in rand.</p><DataChart type="bar" xKey="currency" data={[{ currency: 'USD', rate: 18.8 },{ currency: 'EUR', rate: 20.1 },{ currency: 'GBP', rate: 23.0 },{ currency: 'AUD', rate: 12.4 }]} series={[{ key: 'rate', label: 'Sell rate (R)', color: '#6366f1' }]} yLabel="Rand per unit" height={220} /></div></div>) },
  { title: 'Buying and selling rates', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Banks make a profit by buying foreign currency at a lower rate and selling it at a higher rate.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4 space-y-2"><strong className="text-blue-700">Buying rate</strong><p className="text-slate-600 text-sm">The rate at which the bank buys foreign currency FROM you. Used when converting foreign currency back to ZAR.</p><Formula block>{String.raw`\text{ZAR received} = \text{foreign currency} \times \text{buying rate}`}</Formula></div><div className="rounded-xl bg-green-50 p-4 space-y-2"><strong className="text-green-700">Selling rate</strong><p className="text-slate-600 text-sm">The rate at which the bank sells foreign currency TO you. Used when converting ZAR to foreign currency.</p><Formula block>{String.raw`\text{Foreign currency} = \frac{\text{ZAR}}{\text{selling rate}}`}</Formula></div></div></div>) },
  { title: 'Converting between currencies', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">To convert currencies, multiply or divide by the exchange rate depending on the direction of conversion.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3"><p className="font-bold text-yellow-800">Converting ZAR to foreign currency:</p><Formula block>{String.raw`\text{Foreign amount} = \frac{\text{ZAR amount}}{\text{selling rate}}`}</Formula><Formula block>{String.raw`\frac{5000}{18{,}8} \approx 265{,}96\text{ USD}`}</Formula><p className="font-bold text-yellow-800 mt-3">Converting foreign currency to ZAR:</p><Formula block>{String.raw`\text{ZAR amount} = \text{foreign amount} \times \text{buying rate}`}</Formula><Formula block>{String.raw`300 \times 18{,}2 = 5460`}</Formula></div></div>) },
  { title: 'Impact of a changing rand', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">When the rand <strong>weakens</strong> (depreciates), the exchange rate increases — foreign goods become more expensive. When the rand <strong>strengthens</strong> (appreciates), the exchange rate decreases — foreign goods become cheaper.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-red-50 p-4"><strong className="text-red-700">Weak rand (bad for imports)</strong><p className="text-slate-600 text-sm">Rate rises: R18,80 → R21,00. You pay more ZAR for the same dollars. Petrol prices go up.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Strong rand (good for imports)</strong><p className="text-slate-600 text-sm">Rate falls: R18,80 → R16,50. You pay fewer ZAR for the same dollars. Imported goods are cheaper.</p></div></div></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'Using a selling rate of R18,50/USD, how much does it cost in ZAR to buy $250?',
    options: ['R4 500', 'R4 625', 'R4 575', 'R4 700'],
    answer: 'R4 625',
    explanation: 'ZAR = $250 × R18,50 = R4 625. Use the selling rate when the bank sells USD to you.',
  },
  {
    prompt: 'A tourist returns from the USA with $180. The buying rate is R18,20/USD. How many rand will they receive?',
    options: ['R3 276', 'R3 384', 'R3 240', 'R3 420'],
    answer: 'R3 276',
    explanation: 'ZAR = $180 × R18,20 = R3 276. Use the buying rate when the bank buys USD from you.',
  },
  {
    prompt: 'The USD/ZAR rate rises from R18,00 to R20,00. What does this mean for South African importers?',
    options: ['Imports become cheaper', 'Imports become more expensive', 'The rand has strengthened', 'There is no effect'],
    answer: 'Imports become more expensive',
    explanation: 'A higher exchange rate means you need more rand to buy the same amount of foreign currency — imports cost more.',
  },
  {
    prompt: 'A laptop costs $850 in the USA. The selling rate is R19,20/USD. What is the rand price?',
    options: ['R16 320', 'R15 800', 'R16 360', 'R16 000'],
    answer: 'R16 320',
    explanation: 'R = $850 × R19,20 = R16 320.',
  },
  {
    prompt: 'The EUR/ZAR buying rate is R20,10. A traveller has €600. How many rand will they get?',
    options: ['R12 000', 'R12 060', 'R12 600', 'R13 000'],
    answer: 'R12 060',
    explanation: 'ZAR = €600 × R20,10 = R12 060.',
  },
  {
    prompt: 'Which rate does the bank use when a South African buys foreign currency for a holiday abroad?',
    options: ['Buying rate', 'Selling rate', 'Middle rate', 'Inflation rate'],
    answer: 'Selling rate',
    explanation: 'When you buy foreign currency from the bank, the bank sells it to you at the selling rate.',
  },
  {
    prompt: 'R9 400 is converted to US dollars at R18,80/USD. How many dollars does the traveller receive?',
    options: ['$450', '$500', '$480', '$540'],
    answer: '$500',
    explanation: 'USD = R9 400 ÷ R18,80 = $500.',
  },
  {
    prompt: 'An item costs £120 in the UK. The pound sells at R23,00/GBP. What is the rand cost?',
    options: ['R2 640', 'R2 760', 'R2 880', 'R3 000'],
    answer: 'R2 760',
    explanation: 'R = £120 × R23,00 = R2 760.',
  },
  {
    prompt: 'The rand strengthens and the USD rate falls from R19,00 to R17,50. What happens to the cost of a $200 item for a South African buyer?',
    options: ['It becomes more expensive', 'It stays the same', 'It becomes cheaper', 'The item disappears from the market'],
    answer: 'It becomes cheaper',
    explanation: 'Old cost: \\$200 × R19 = R3 800. New cost: \\$200 × R17,50 = R3 500. The item is R300 cheaper.',
  },
];

const ExchangeRates = () => (
  <CapsSubjectTopic
    title="Finance: Exchange Rates"
    subtitle="Converting currencies, buying and selling rates, and the impact of rand movements"
    learnSteps={learnSteps}
    task="gr11-ml-exchange-rates-t4"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default ExchangeRates;
