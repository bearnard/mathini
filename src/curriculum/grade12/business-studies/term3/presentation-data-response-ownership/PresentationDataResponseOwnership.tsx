import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Choose the correct presentation method',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Line graph</strong><p className="text-slate-600 mt-1">Best for trends over time.</p></div>
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Bar graph</strong><p className="text-slate-600 mt-1">Best for comparing categories.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Pie chart</strong><p className="text-slate-600 mt-1">Best for showing percentage shares of a whole.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Report or table</strong><p className="text-slate-600 mt-1">Best for detailed facts and explanation.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Answer data-response questions carefully',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Read the source, extract the evidence, then interpret it. Do not jump to the conclusion before using the data.</p>
        </div>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600">
          <li>Identify the relevant figure, trend or statement.</li>
          <li>Refer directly to that evidence in your answer.</li>
          <li>Explain what it means for the business.</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'Know the forms of ownership',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Sole proprietorship</strong>
            <p className="text-slate-600 mt-1">Easy to start, but the owner has unlimited liability.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Private company</strong>
            <p className="text-slate-600 mt-1">Separate legal personality with limited liability; its shares are not offered to the public.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Co-operative</strong>
            <p className="text-slate-600 mt-1">Formed to serve members' shared needs.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Non-profit company</strong>
            <p className="text-slate-600 mt-1">Focuses on a social objective instead of profit distribution.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Compare and justify ownership choices',
    content: (
      <div className="space-y-6">
        <SwotMatrix
          title="SWOT Analysis: Choosing Ownership for a Community Bakery"
          strengths={['Strong local support', 'Clear social purpose', 'Skilled founder']}
          weaknesses={['Limited start-up capital', 'Small management team', 'Little legal experience']}
          opportunities={['Partner investors', 'Community co-operative support', 'Retail contracts']}
          threats={['Unlimited liability risk', 'Cash-flow pressure', 'Competition from chains']}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">CAPS focus</p>
          <p className="text-slate-600 mt-1">Justify the recommendation with liability, capital needs, control and continuity instead of listing facts only.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Comparing forms of ownership",
    content: (
      <div className="space-y-4">
        <GapRule>{"Forms of ownership differ mainly in who is liable for debts and how easily they can raise money. A partnership has two or more owners. A (Pty) Ltd cannot sell its shares to the general public, whereas a public company (Ltd) can. A co-operative is owned by its users, who run it together."}</GapRule>
        <GapWorked title={"Choose a form"} steps={["Sole proprietor: simple, but unlimited liability and limited capital.", "Partnership: more capital and skills, but partners can be liable for the debts.", "Private company: separate legal personality and limited liability; the Companies Act 71 of 2008 sets no 50-shareholder limit.", "Public company: can raise large capital from the public, with stricter disclosure.", "Co-operative: owned and used by members for their shared needs."]} />
        <GapMistake>{"Thinking a company's owners are never liable for anything."}</GapMistake>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "presentation-data-response-ownership-1",
    "question": "Which visual is usually BEST for showing changes in sales over several months?",
    "options": [
      "Line graph",
      "Pie chart",
      "Photograph",
      "Logo"
    ],
    "answer": 0,
    "explanation": "A line graph shows trends and movement over time clearly."
  },
  {
    "id": "presentation-data-response-ownership-2",
    "question": "Which presentation method is best for showing percentage shares of a whole?",
    "options": [
      "Pie chart",
      "Line graph",
      "Memo",
      "Flow chart only"
    ],
    "answer": 0,
    "explanation": "A pie chart is designed to show percentages or parts of a whole."
  },
  {
    "id": "presentation-data-response-ownership-3",
    "question": "In a data-response question, the learner should first:",
    "options": ['Ignore the source and guess an answer from memory of the topic', 'Read the source carefully and identify relevant evidence', 'Write a conclusion before reading', 'Skip the figures in the source'],
    "answer": 1,
    "explanation": "Good data responses start by extracting the relevant facts from the source."
  },
  {
    "id": "presentation-data-response-ownership-4",
    "question": "Which form of ownership has unlimited liability for one owner?",
    "options": [
      "Private company",
      "Sole proprietorship",
      "Public company",
      "Non-profit company"
    ],
    "answer": 1,
    "explanation": "A sole proprietor and the business are not separate legal persons, so liability is unlimited."
  },
  {
    "id": "presentation-data-response-ownership-5",
    "question": "Shares in a private company are generally:",
    "options": [
      "Traded freely on the JSE",
      "Offered to the general public without restriction",
      "Not offered freely to the public",
      "The same as a co-operative membership"
    ],
    "answer": 2,
    "explanation": "Private company shares are not freely offered to the general public."
  },
  {
    "id": "presentation-data-response-ownership-6",
    "question": "A co-operative is formed mainly to:",
    "options": [
      "Maximise only one owner's control",
      "Meet the common needs of members",
      "Avoid all rules",
      "Trade shares publicly"
    ],
    "answer": 1,
    "explanation": "Co-operatives exist to serve the shared economic interests of their members."
  },
  {
    "id": "presentation-data-response-ownership-7",
    "question": "Which ownership form is most suitable if the main purpose is community service rather than profit distribution?",
    "options": [
      "Sole proprietorship",
      "Non-profit company",
      "Partnership",
      "Public company"
    ],
    "answer": 1,
    "explanation": "A non-profit company focuses on a public or social objective rather than distributing profits to owners."
  },
  {
    "id": "presentation-data-response-ownership-8",
    "question": "When comparing ownership forms, which factor is MOST relevant?",
    "options": [
      "Favourite colour of the owner",
      "Liability and ability to raise capital",
      "Office music choice",
      "Uniform size"
    ],
    "answer": 1,
    "explanation": "Liability, capital, control and continuity are key comparison factors in ownership questions."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const PresentationDataResponseOwnership = () => (
  <CapsSubjectTopic
    title="Presentation, Data Response and Forms of Ownership"
    subtitle="Business information, source-based questions and ownership comparisons"
    learnSteps={learnSteps}
    task="gr12-presentation-data-response-ownership-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default PresentationDataResponseOwnership;
