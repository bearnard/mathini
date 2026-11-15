import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Expect source-based finance questions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Paper 1 often includes documents such as payslips, bills, tables, adverts and bank information. The challenge is to read accurately before calculating, because the correct figure may be hidden in a label or note.</p>
        <Formula block>{String.raw`\text{Net salary} = \text{gross salary} - \text{deductions}`}</Formula>
        <Formula block>{String.raw`\text{VAT inclusive} = \text{exclusive} \times 1{,}15`}</Formula>
      </div>
    ),
  },
  {
    title: 'Choose the correct operation from the wording',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Words such as total, increase, excluding VAT, average and compare signal different operations. In exam conditions, pause long enough to translate the wording into the correct calculation.</p>
        <Formula block>{String.raw`\text{Markup \%} = \frac{\text{selling price} - \text{cost price}}{\text{cost price}} \times 100`}</Formula>
        <Formula block>{String.raw`\text{New price after inflation} = \text{current price} \times (1 + \text{rate})`}</Formula>
        <Formula block>{String.raw`I = P r n`}</Formula>
      </div>
    ),
  },
  {
    title: 'Check answers against the context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Paper 1 answers should make sense in practical life. A net salary cannot be more than a gross salary and a bank fee comparison must reflect the customer’s actual usage pattern.</p>
        <Formula block>{String.raw`\text{Mean} = \frac{\text{sum of values}}{\text{number of values}}`}</Formula>
        <Formula block>{String.raw`\text{Percentage} = \frac{\text{part}}{\text{whole}} \times 100`}</Formula>
      </div>
    ),
  },
  {
    title: 'Manage time by working steadily',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Do not spend too long on one difficult question while easy marks are waiting elsewhere. If a calculation seems stuck, mark it, move on and return after collecting other marks.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Show the formula before substituting values.</li>
          <li>Circle units and keywords in source-based questions.</li>
          <li>Leave a final sentence that answers the practical question asked.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "paper1-readiness-1",
    "question": "A payslip shows gross pay of R19 200 and total deductions of R4 650. What is the net pay?",
    "options": [
      "R14 550",
      "R15 650",
      "R23 850",
      "R4 650"
    ],
    "answer": 0,
    "explanation": "Net pay = R19 200 − R4 650 = R14 550."
  },
  {
    "id": "paper1-readiness-2",
    "question": "Plan A charges R30 per month plus R4 per transaction. Plan B charges R55 per month plus R2 per transaction. For 8 transactions, which plan is cheaper?",
    "options": [
      "Plan A",
      "Plan B",
      "They cost the same",
      "Neither can be compared"
    ],
    "answer": 0,
    "explanation": "Plan A = R30 + (R4 × 8) = R62 and Plan B = R55 + (R2 × 8) = R71, so Plan A is cheaper."
  },
  {
    "id": "paper1-readiness-3",
    "question": "A product costs R800 and inflation is 5%. What is the new price after inflation?",
    "options": [
      "R805",
      "R820",
      "R840",
      "R880"
    ],
    "answer": 2,
    "explanation": "R800 × 1,05 = R840."
  },
  {
    "id": "paper1-readiness-4",
    "question": "Which graph is most likely to mislead readers?",
    "options": ['A graph with labelled axes and a zero baseline for the vertical axis scale', 'A graph with a vertical axis starting at 95 to exaggerate differences', 'A graph with a clear title, units and a source acknowledged', 'A graph with equal intervals on the axes'],
    "answer": 1,
    "explanation": "A truncated axis can exaggerate differences and mislead the reader."
  },
  {
    "id": "paper1-readiness-5",
    "question": "An item costs R150 and is sold for R195. What is the markup in rand?",
    "options": [
      "R30",
      "R45",
      "R50",
      "R345"
    ],
    "answer": 1,
    "explanation": "Markup = selling price − cost price = R195 − R150 = R45."
  },
  {
    "id": "paper1-readiness-6",
    "question": "A price of R460 includes VAT. What is the VAT-exclusive price?",
    "options": [
      "R400",
      "R415",
      "R430",
      "R445"
    ],
    "answer": 0,
    "explanation": "R460 ÷ 1,15 = R400."
  },
  {
    "id": "paper1-readiness-7",
    "question": "What simple interest is earned on R3 000 at 9% per year for 2 years?",
    "options": [
      "R270",
      "R540",
      "R600",
      "R3 540"
    ],
    "answer": 1,
    "explanation": "Simple interest = 3 000 × 0,09 × 2 = R540."
  },
  {
    "id": "paper1-readiness-8",
    "question": "What is a useful first step when reading a long Paper 1 case study?",
    "options": [
      "Ignore the source and guess the answers",
      "Underline key facts, values and units",
      "Answer from memory only",
      "Start with the last question"
    ],
    "answer": 1,
    "explanation": "Underlining key facts helps you identify which data the question really needs."
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

const Paper1Readiness = () => (
  <CapsSubjectTopic
    title="Paper 1 Readiness"
    subtitle="Paper 1 finance, data and interpretation skills"
    learnSteps={topicLearnSteps}
    task="gr12-paper1-readiness-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default Paper1Readiness;
