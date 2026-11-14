import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Know the difference between buying and selling rates',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Banks use one rate when they buy foreign currency from you and another when they sell foreign currency to you. Read the table carefully to decide which rate applies in the question.</p>
        <p className="text-lg leading-8 text-slate-600">The rate is part of the financial context, so always link it to whether the customer is travelling, receiving money or converting leftover cash back to rand.</p>
      </div>
    ),
  },
  {
    title: 'Convert currencies in the correct direction',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">When converting from rand to a foreign currency, divide by the rand-per-unit rate if that rate is quoted per one foreign unit. When converting back to rand, multiply by the rate.</p>
        <Formula block>{String.raw`\text{Foreign currency} = \frac{\text{rand amount}}{\text{exchange rate}}`}</Formula>
        <Formula block>{String.raw`\text{Rand amount} = \text{foreign currency} \times \text{exchange rate}`}</Formula>
        <DataChart
          type="bar"
          xKey="currency"
          data={[
            { currency: 'USD', zar: 18.5 },
            { currency: 'EUR', zar: 20.2 },
            { currency: 'GBP', zar: 23.4 },
            { currency: 'AUD', zar: 12.1 },
            { currency: 'CNY', zar: 2.55 },
          ]}
          series={[{ key: 'zar', label: 'Rand per unit', color: '#7c3aed' }]}
          yLabel="ZAR"
          height={220}
        />
      </div>
    ),
  },
  {
    title: 'Interpret a stronger or weaker rand',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">If the rand weakens, more rand are needed to buy the same foreign currency, so imports and overseas travel become more expensive. If the rand strengthens, fewer rand are needed for the same amount of foreign currency.</p>
        <p className="text-lg leading-8 text-slate-600">State the effect in everyday language so that the calculation is connected to the real economic meaning.</p>
      </div>
    ),
  },
  {
    title: 'Include fees and real-world context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Exchange calculations may include commission or service fees. The final decision should consider the full cost, not only the exchange rate.</p>
        <Formula block>{String.raw`\text{Total paid} = \text{converted amount in rand} + \text{commission or fee}`}</Formula>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "exchange-rates-1",
    "question": "The bank selling rate is US$1 = R18.50. How many US dollars can be bought with R3 700?",
    "options": [
      "$180",
      "$185",
      "$200",
      "$370"
    ],
    "answer": 2,
    "explanation": "R3 700 ÷ R18.50 = $200."
  },
  {
    "id": "exchange-rates-2",
    "question": "The bank buying rate is €1 = R20.40. How many rand will you receive for €250?",
    "options": [
      "R4 100",
      "R5 000",
      "R5 100",
      "R5 400"
    ],
    "answer": 2,
    "explanation": "€250 × R20.40 = R5 100."
  },
  {
    "id": "exchange-rates-3",
    "question": "If the rand weakens from R18 per US dollar to R19 per US dollar, imported goods will usually become:",
    "options": [
      "cheaper",
      "more expensive",
      "free",
      "unchanged in price"
    ],
    "answer": 1,
    "explanation": "A weaker rand means more rand are needed for the same foreign amount."
  },
  {
    "id": "exchange-rates-4",
    "question": "A hotel room costs £120 and the exchange rate is £1 = R23. What is the cost in rand?",
    "options": [
      "R1 960",
      "R2 400",
      "R2 760",
      "R3 120"
    ],
    "answer": 2,
    "explanation": "£120 × R23 = R2 760."
  },
  {
    "id": "exchange-rates-5",
    "question": "A traveller needs A$400 at a rate of A$1 = R12.50 and must also pay a fee of R80. What is the total rand cost?",
    "options": [
      "R4 800",
      "R5 000",
      "R5 080",
      "R5 400"
    ],
    "answer": 2,
    "explanation": "A$400 × R12.50 = R5 000, then add R80 to get R5 080."
  },
  {
    "id": "exchange-rates-6",
    "question": "A bank selling rate tells you the rate used when the bank:",
    "options": [
      "sells foreign currency to the customer",
      "buys foreign currency from the customer",
      "sells shares on the JSE",
      "collects VAT from shops"
    ],
    "answer": 0,
    "explanation": "The selling rate applies when the bank sells the foreign currency to you."
  },
  {
    "id": "exchange-rates-7",
    "question": "If the euro rate changes from R20 per euro to R18 per euro, a traveller buying euros will need:",
    "options": [
      "more rand than before",
      "less rand than before",
      "exactly the same rand",
      "no rand at all"
    ],
    "answer": 1,
    "explanation": "At R18 per euro, each euro costs fewer rand than at R20 per euro."
  },
  {
    "id": "exchange-rates-8",
    "question": "An online item costs $50 and the exchange rate is $1 = R17.20. What is the rand price before fees?",
    "options": [
      "R760",
      "R810",
      "R860",
      "R1 220"
    ],
    "answer": 2,
    "explanation": "$50 × R17.20 = R860."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const ExchangeRates = () => (
  <CapsSubjectTopic
    title="Finance: Exchange Rates"
    subtitle="Currency conversion and interpreting rand movements"
    learnSteps={topicLearnSteps}
    task="gr12-exchange-rates-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default ExchangeRates;
