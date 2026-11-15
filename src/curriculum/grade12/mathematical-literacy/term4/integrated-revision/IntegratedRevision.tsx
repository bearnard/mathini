import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Read sources before reaching for a method',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Integrated revision is about recognising which topic or combination of topics is being tested. Start by underlining important values, units and instruction words before choosing a method.</p>
        <Formula block>{String.raw`\text{Percentage change} = \frac{\text{new} - \text{old}}{\text{old}} \times 100`}</Formula>
      </div>
    ),
  },
  {
    title: 'Link topics in realistic contexts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A single case study can include tariffs, VAT, maps, data and probability in one setting. Strong learners identify each small task inside the bigger context and then apply the correct formula to each part.</p>
        <Formula block>{String.raw`\text{VAT inclusive} = \text{exclusive} \times 1{,}15`}</Formula>
        <Formula block>{String.raw`\text{Actual distance} = \text{map distance} \times \text{scale factor}`}</Formula>
        <Formula block>{String.raw`P(A) = \frac{n(A)}{n(S)}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Show clear working and units',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Revision should reinforce the habit of writing down steps, units and final statements. Even in multiple-choice practice, learners should check the working that leads to the selected answer.</p>
        <Formula block>{String.raw`\text{Mean} = \frac{\text{sum of values}}{\text{number of values}}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Use mistakes to guide final preparation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">When revising for the NSC exam, patterns in mistakes matter. If a learner keeps confusing VAT-inclusive and VAT-exclusive prices or reverses the exchange-rate process, that is the exact skill that must be practised again.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Group mistakes by topic instead of only by question number.</li>
          <li>Rework the formula and the units for each common error.</li>
          <li>Use final revision to strengthen weak links between topics.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "integrated-revision-1",
    "question": "Tariff A costs R40 plus R6 per trip. Tariff B costs R25 plus R8 per trip. For 5 trips, which is cheaper?",
    "options": [
      "Tariff A",
      "Tariff B",
      "They cost the same",
      "Neither can be compared"
    ],
    "answer": 1,
    "explanation": "Tariff A = R40 + (R6 × 5) = R70 and Tariff B = R25 + (R8 × 5) = R65, so Tariff B is cheaper."
  },
  {
    "id": "integrated-revision-2",
    "question": "How many minutes are in 2,5 hours?",
    "options": [
      "120",
      "150",
      "180",
      "250"
    ],
    "answer": 1,
    "explanation": "2,5 × 60 = 150 minutes."
  },
  {
    "id": "integrated-revision-3",
    "question": "On a map with scale 1:100 000, a route measures 4,2 cm. What is the actual distance?",
    "options": [
      "420 m",
      "4,2 km",
      "42 km",
      "420 km"
    ],
    "answer": 1,
    "explanation": "4,2 cm × 100 000 = 420 000 cm = 4,2 km."
  },
  {
    "id": "integrated-revision-4",
    "question": "What is the mean of 6, 8, 10 and 12?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "The total is 36, and 36 ÷ 4 = 9."
  },
  {
    "id": "integrated-revision-5",
    "question": "What is the VAT amount on a VAT-exclusive price of R360?",
    "options": [
      "R36",
      "R45",
      "R54",
      "R414"
    ],
    "answer": 2,
    "explanation": "15% of R360 is R54."
  },
  {
    "id": "integrated-revision-6",
    "question": "What is the probability of choosing a vowel from the letters A, B, C, D, E?",
    "options": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    "answer": 1,
    "explanation": "The vowels are A and E, so 2 out of 5 letters are favourable."
  },
  {
    "id": "integrated-revision-7",
    "question": "A household budget has income of R9 000 and expenses of R8 350. What is the result?",
    "options": [
      "A surplus of R650",
      "A shortfall of R650",
      "A surplus of R1 350",
      "A shortfall of R1 350"
    ],
    "answer": 0,
    "explanation": "R9 000 − R8 350 = R650 surplus."
  },
  {
    "id": "integrated-revision-8",
    "question": "If the rand strengthens against the dollar, imported goods usually become:",
    "options": [
      "cheaper",
      "more expensive",
      "tax-free",
      "unavailable"
    ],
    "answer": 0,
    "explanation": "A stronger rand means fewer rand are needed to buy the same foreign currency."
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

const IntegratedRevision = () => (
  <CapsSubjectTopic
    title="Integrated Revision"
    subtitle="Integrated revision across the full Grade 12 syllabus"
    learnSteps={topicLearnSteps}
    task="gr12-integrated-revision-t4"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default IntegratedRevision;
