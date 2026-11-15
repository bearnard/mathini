import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, dailyProfit, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { MatchTable } from '../../../../../components/diagrams/ems/Ems9bPictures';
import { comma, minutesFor, minutesPerMark } from '../../../../../components/diagrams/ems/ems9b-helpers';

// Every figure below comes from emsHelpers.ts and ems9b-helpers.ts (tested in ems9b-lessons.test.ts).
export const SALES = [
  { when: 'Morning', details: '8 cars at R50', amount: 400 },
  { when: 'Midday', details: '7 cars at R50', amount: 350 },
  { when: 'Afternoon', details: '5 cars at R50', amount: 250 },
] as const;
const takings = sum(SALES.map((s) => s.amount));
const wash = dailyProfit(50, 12, 20); // 20 washes at R50, each costing R12
const perMark = minutesPerMark(60, 60);
const forTen = minutesFor(60, 60, 10);
const q4perMark = minutesPerMark(45, 90);
const q4for12 = minutesFor(45, 90, 12);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Read the case study first',
    content: slide(
      <>
        <Rule>Read the case study carefully before you write. Find the key question or problem it asks you to solve. Never start writing before you understand it.</Rule>
        <NumberedSteps
          label="How to attack a case study"
          heading="How to attack a case study"
          tone="blue"
          steps={[
            { lead: 'Read', text: ' the whole case.' },
            { lead: 'Underline', text: ' the key words.' },
            { lead: 'Find', text: ' the question and its marks.' },
            { lead: 'Answer', text: ' using the case.' },
          ]}
        />
        <Worked
          title="Thabo's car wash is losing customers. What is the problem?"
          steps={['Read the whole case, not just the first line.', 'Underline the clues: prices rose and customers say they are going elsewhere.', 'The key problem is customers leaving.']}
        />
        <Mistake>Looking for the answer without reading the case, or answering from your notes and ignoring the context.</Mistake>
      </>,
    ),
  },
  {
    title: 'Match clues to concepts',
    content: slide(
      <>
        <Rule>Look for keywords and business activities in the case, then match them to terms you learned. Not every term fits every case.</Rule>
        <MatchTable
          title="Matching clues"
          aria="A table matching clues in a case study to concepts: buys flour is purchasing, puts up a poster is promotion, shares profit 60:40 is a partnership."
          rows={[
            { clue: 'buys flour', concept: 'Purchasing' },
            { clue: 'puts up a poster', concept: 'Promotion' },
            { clue: 'shares profit 60:40', concept: 'Partnership' },
          ]}
        />
        <Mistake>Choosing the longest terms in your notes, or treating every term as equally relevant. Match the term to the clue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Structure your answer',
    content: slide(
      <>
        <Rule>For a decision question: state the decision, explain it using the right concepts, and justify it with specific examples or data from the case. A definition question asks for the meaning, with an example.</Rule>
        <NumberedSteps
          label="Structure of an answer"
          heading="Structure of an answer"
          tone="violet"
          steps={[
            { lead: 'State', text: ' the decision.' },
            { lead: 'Explain', text: ' with a concept.' },
            { lead: 'Justify', text: ' with evidence or a figure.' },
          ]}
        />
        <Worked
          title="Should Thabo cut his price?"
          steps={['Decision: no, not yet.', 'Concept: pricing must cover costs.', 'Evidence: each wash costs R12, so a very low price loses money.']}
        />
        <Mistake>Giving only your opinion, or listing facts with no analysis. Marks are for the concept and the evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Link topics together',
    content: slide(
      <>
        <Rule>Entrepreneurs must record sales accurately to manage cash and prove the business is viable. Linking topics shows you understand the whole subject.</Rule>
        <JournalTable
          title="Car wash sales, Saturday"
          columns={['Time', 'Details', 'Amount']}
          rows={SALES.map((s) => [s.when, s.details, s.amount])}
          total={{ label: 'Total takings', amount: takings }}
          aria={`A sales record for a car wash. Three amounts of ${SALES.map((s) => rand(s.amount)).join(', ')} give total takings of ${rand(takings)}.`}
        />
        <Worked
          title="Is it viable?"
          steps={[<>Takings: {SALES.map((s) => rand(s.amount)).join(' + ')} = {rand(takings)}.</>, <>Costs: {rand(12)} × 20 washes = {rand(wash.costs)}.</>, <>Profit: {rand(takings)} − {rand(wash.costs)} = {rand(wash.profit)}.</>]}
        />
        <Mistake>Calling topics unrelated. Records prove the profit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plan your time and your revision',
    content: slide(
      <>
        <Rule>Share exam time by marks. If you are stuck, move on and return later. Prepare by reviewing all topics, doing practice cases and timed tests, and fixing weak areas.</Rule>
        <Worked
          title="A 60-minute paper marked out of 60"
          steps={[<>{comma(perMark)} minute per mark.</>, <>A 10-mark question gets about {forTen} minutes.</>, 'Stuck? Move on and come back. Other questions may jog your memory.']}
        />
        <Mistake>Cramming the night before or revising only the topics you enjoy. Weak topics cost the most marks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What should you do first with a case study?</li>
            <li>A case says &ldquo;the owner buys flour&rdquo;. Which business function is that?</li>
            <li>Give the three parts of an answer to a decision question.</li>
            <li>A 45-minute paper has 90 marks. How many minutes for a 12-mark question?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Read it carefully and find the key question or problem.</li>
            <li>Purchasing.</li>
            <li>State the decision, explain with concepts and justify with evidence.</li>
            <li>{comma(q4perMark)} minute a mark, so {q4for12} minutes.</li>
          </ol>
        }
      />,
    ),
  },
];
