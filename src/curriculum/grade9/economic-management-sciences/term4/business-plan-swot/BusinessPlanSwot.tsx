import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BreakEvenChart, SwotGrid } from '../../../../../components/diagrams/ems/Ems9PlanPictures';
import { PLAN_SECTIONS } from '../../../../../components/diagrams/ems/ems9-plan';

// Functions, plan parts and formulas follow the Grade 9 EMS plan; numbers come from ems9-plan.ts (docs/notes/g9-ems-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a business plan is",
    content: slide(
      <>
        <Rule>A business plan is a written document that describes the business idea, how the business will work and how it will make money. The owner uses it to plan and to check progress, and banks and investors read it to decide whether to lend or invest. A good plan is clear, realistic and well organised.</Rule>
        <FactCards
          cards={[
            { title: "The owner", line1: "plans and checks progress" },
            { title: "A bank", line1: "decides whether to lend money" },
            { title: "An investor", line1: "decides whether to put money in" },
          ]}
          aria="The owner: plans and checks progress. A bank: decides whether to lend money. An investor: decides whether to put money in."
        />
        <Worked
          title="Why write a plan for a candle stall"
          steps={[
            "Lerato wants to start a stall that sells hand-made candles.",
            "She writes down what she sells, to whom, how she makes them and what it costs.",
            "She shows the plan to a lender to ask for a small loan.",
          ]}
        />
        <Mistake>Treating the plan as a one-time exercise to please a bank. The owner should keep using it to plan and check progress.</Mistake>
      </>,
    ),
  },
  {
    title: "The format of a business plan",
    content: slide(
      <>
        <Rule>A business plan follows a set format: the front cover, the table of contents, a description of the product or service, the goals of the business, the business owner, the production plan, the marketing plan, the management plan, the SWOT analysis and the conclusion. The financial plan with the costs is added as a section of the plan.</Rule>
        <FactCards
          cards={[
            { title: "Start", line1: "front cover and table of contents" },
            { title: "Middle", line1: "description, goals, owner and the three plans" },
            { title: "End", line1: "SWOT analysis and conclusion" },
          ]}
          aria="Start: front cover and table of contents. Middle: description, goals, owner and the three plans. End: SWOT analysis and conclusion."
        />
        <NumberedSteps steps={PLAN_SECTIONS.map((text) => ({ text }))} tone="violet" label="The ten parts of a business plan in order" />
        <Worked
          title="Put the parts in order"
          steps={[
            "The front cover comes first and the table of contents second.",
            "The description, goals and owner come before the three plans for production, marketing and management.",
            "The SWOT analysis comes near the end, and the conclusion closes the plan.",
          ]}
        />
        <Mistake>Starting with the conclusion. A reader needs the cover and the contents before the detail.</Mistake>
      </>,
    ),
  },
  {
    title: "SWOT analysis",
    content: slide(
      <>
        <Rule>A SWOT analysis looks at the business in four ways. Strengths are inside the business and helpful. Weaknesses are inside the business and harmful. Opportunities are outside the business and helpful. Threats are outside the business and harmful. Use the analysis to build on the strengths, fix the weaknesses, take the opportunities and prepare for the threats.</Rule>
        <SwotGrid aria="A grid of four boxes. Strengths are inside the business and helpful. Weaknesses are inside the business and harmful. Opportunities are outside the business and helpful. Threats are outside the business and harmful." />
        <Worked
          title="Sort four statements for a candle stall"
          steps={[
            "Lerato is skilled at making candles: a strength, because it is inside and helpful.",
            "She has no money for advertising: a weakness, because it is inside and harmful.",
            "A new market opens near her home: an opportunity, because it is outside and helpful. A rival opens a bigger stall: a threat, because it is outside and harmful.",
          ]}
        />
        <Mistake>Calling an outside problem a weakness. Weaknesses are inside the business, and outside problems are threats.</Mistake>
      </>,
    ),
  },
  {
    title: "The goals, owner and three plans",
    content: slide(
      <>
        <Rule>The goals say what the business wants to achieve, in a clear and measurable way. The owner section tells the reader about the skills and experience of the owner. The production plan explains how the product is made, with the materials, equipment and workers. The marketing plan says who the customers are and how the product will be priced, sold and promoted. The management plan says who runs the business and what each person does.</Rule>
        <FactCards
          cards={[
            { title: "Goals", line1: "clear and measurable aims" },
            { title: "Owner", line1: "skills and experience" },
            { title: "Production plan", line1: "materials, equipment, workers" },
            { title: "Marketing plan", line1: "customers, price, promotion" },
            { title: "Management plan", line1: "who does what" },
          ]}
          aria="Goals: clear and measurable aims. Owner: skills and experience. Production plan: materials, equipment, workers. Marketing plan: customers, price, promotion. Management plan: who does what."
        />
        <Worked
          title="Write one line for each part"
          steps={[
            "Goal: sell 200 candles a month within six months.",
            "Production plan: wax, wicks and moulds bought each week, made by Lerato and one helper.",
            "Marketing plan: sell at the Saturday market and promote on a community page.",
          ]}
        />
        <Mistake>Writing goals such as to do well. A goal must be clear and measurable so that you can check it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which part of a business plan comes first?</>,
          <>What does S stand for in SWOT?</>,
          <>A rival opens nearby: is this a weakness or a threat?</>,
          <>Which plan explains who the customers are?</>,
        ]}
        answers={[
          <>The front cover.</>,
          <>Strengths.</>,
          <>A threat.</>,
          <>The marketing plan.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is a business plan?",
    options: ["A list of the daily sales kept", "A bank statement for the owner", "A written plan for the business", "A contract with the workers"],
    answer: "A written plan for the business",
    explanation: "A business plan describes the idea, how it works and how it will make money.",
  },
  {
    prompt: "Who may read a business plan to decide whether to lend money?",
    options: ["A bank", "A supplier of bread", "A passing customer", "A school teacher"],
    answer: "A bank",
    explanation: "Banks and investors read plans before they lend or invest.",
  },
  {
    prompt: "A reader opens a business plan at its first page. What do they see?",
    options: ["The conclusion", "The SWOT analysis", "The production plan", "The front cover"],
    answer: "The front cover",
    explanation: "The front cover comes first and the table of contents second.",
  },
  {
    prompt: "Which part of a business plan comes directly after the front cover?",
    options: ["The goals", "The table of contents", "The marketing plan", "The conclusion"],
    answer: "The table of contents",
    explanation: "The table of contents helps the reader to find each part.",
  },
  {
    prompt: "Which part closes the business plan?",
    options: ["The front cover", "The business owner", "The conclusion", "The management plan"],
    answer: "The conclusion",
    explanation: "The conclusion is the last part of the plan.",
  },
  {
    prompt: "Lerato lists the wax, wicks and moulds she will buy and who will make the candles. Which part of her plan is this?",
    options: ["The production plan", "The marketing plan", "The management plan", "The goals"],
    answer: "The production plan",
    explanation: "The production plan covers materials, equipment and workers.",
  },
  {
    prompt: "Which part of the plan says who the customers are and how the product is promoted?",
    options: ["The production plan", "The business owner", "The conclusion", "The marketing plan"],
    answer: "The marketing plan",
    explanation: "The marketing plan covers customers, price, place and promotion.",
  },
  {
    prompt: "What does the S in SWOT stand for?",
    options: ["Sales", "Strengths", "Suppliers", "Savings"],
    answer: "Strengths",
    explanation: "SWOT stands for strengths, weaknesses, opportunities and threats.",
  },
  {
    prompt: "A baker is very skilled and has a loyal group of customers. How should this be classified in a SWOT analysis?",
    options: ["A weakness", "An opportunity", "A strength", "A threat"],
    answer: "A strength",
    explanation: "It is inside the business and helpful.",
  },
  {
    prompt: "A business has no money for advertising. How should this be classified?",
    options: ["A weakness", "A strength", "An opportunity", "A threat"],
    answer: "A weakness",
    explanation: "It is inside the business and harmful.",
  },
  {
    prompt: "A new shopping centre opens near your stall. How should this be classified?",
    options: ["A strength", "A weakness", "A threat", "An opportunity"],
    answer: "An opportunity",
    explanation: "It is outside the business and helpful.",
  },
  {
    prompt: "A rival opens a bigger shop next door. How should this be classified?",
    options: ["A strength", "A threat", "A weakness", "An opportunity"],
    answer: "A threat",
    explanation: "It is outside the business and harmful.",
  },
  {
    prompt: "Which statement about strengths and weaknesses is correct?",
    options: ["They are outside the business", "They come from the government", "They are inside the business", "They come from competitors"],
    answer: "They are inside the business",
    explanation: "Strengths and weaknesses are inside the business, and opportunities and threats are outside it.",
  },
  {
    prompt: "Which goal is clear and measurable?",
    options: ["Sell 200 candles each month", "Do well in business this year", "Be a nice stall everyone likes", "Make people happy in some way"],
    answer: "Sell 200 candles each month",
    explanation: "A clear and measurable goal can be checked.",
  },
];

const BusinessPlanSwot = () => (
  <CapsSubjectTopic
    title="The Business Plan: Format and SWOT"
    subtitle="What a business plan is, its ten parts, the production, marketing and management plans, and a SWOT analysis"
    learnSteps={learnSteps}
    task="gr9-business-plan-swot-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default BusinessPlanSwot;
