import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Polya's four steps",
    content: slide(
      <>
        <Rule>Problem solving is finding a way to reach a goal. George Polya set out four steps: understand the problem, devise a plan, carry out the plan, and look back.</Rule>
        <KeyTable
          title="The four steps"
          head={["Step", "What to do"]}
          aria="The four steps. 1. Understand: State the problem in your own words; what is given and what is missing. 2. Devise a plan: Look for patterns; try a simpler case; make a table or diagram; break it into smaller tasks. 3. Carry out the plan: Write the algorithm as a flow chart or pseudo code, then the code. 4. Look back: Test the result with a trace table; is it right; is there a better way."
          rows={[["1. Understand", "State the problem in your own words; what is given and what is missing"], ["2. Devise a plan", "Look for patterns; try a simpler case; make a table or diagram; break it into smaller tasks"], ["3. Carry out the plan", "Write the algorithm as a flow chart or pseudo code, then the code"], ["4. Look back", "Test the result with a trace table; is it right; is there a better way"]]}
        />
        <Worked
          steps={[
            <>Problem: find the smaller of two numbers. Understand: two inputs, one output. Plan: compare them. Carry out: if a &lt; b then a else b. Look back: test with 7 and 3, then with 4 and 4.</>,
            <>A good test includes unusual cases, such as two equal numbers.</>,
          ]}
        />
        <Mistake>Skipping straight to the code. Without a plan, errors are harder to find.</Mistake>
      </>,
    ),
  },
  {
    title: "User stories",
    content: slide(
      <>
        <Rule>A user story is a short description, written from the client's point of view, of something the program must do. It names who, what and why, and it gives the requirements.</Rule>
        <KeyTable
          title="A user story"
          head={["Part", "Example"]}
          aria="A user story. Who: As a shop owner. What: I want the program to add VAT to a price. Why: So that I can show the customer the total. Limitation: Only for prices above R0."
          rows={[["Who", "As a shop owner"], ["What", "I want the program to add VAT to a price"], ["Why", "So that I can show the customer the total"], ["Limitation", "Only for prices above R0"]]}
        />
        <Worked
          steps={[
            <>&ldquo;As a teacher, I want to enter a mark and see a symbol, so that I can report to parents.&rdquo; This is one story.</>,
            <>Each user story can be turned into a small task for the program.</>,
          ]}
        />
        <Mistake>Writing a story that says how to build it. A story says what the user needs, not how it is coded.</Mistake>
      </>,
    ),
  },
  {
    title: "Noun-verb analysis and acceptance tests",
    content: slide(
      <>
        <Rule>In a noun-verb analysis you underline the nouns and verbs in the user stories. The nouns suggest the objects and their state (data). The verbs suggest the behaviour (actions). An acceptance test checks whether the program meets the requirements.</Rule>
        <KeyTable
          title="From a story to a design"
          head={["Part of speech", "Suggests"]}
          aria="From a story to a design. Nouns (teacher, mark, symbol): Objects and the data they hold. Verbs (enter, see, report): Behaviour: what the program does. Acceptance test: A check that the program does what the story asks."
          rows={[["Nouns (teacher, mark, symbol)", "Objects and the data they hold"], ["Verbs (enter, see, report)", "Behaviour: what the program does"], ["Acceptance test", "A check that the program does what the story asks"]]}
        />
        <Worked
          steps={[
            <>In &ldquo;a teacher enters a mark and sees a symbol&rdquo;, the nouns are teacher, mark and symbol, and the verbs are enters and sees.</>,
            <>An acceptance test: enter 75 and check that the program shows the symbol for 75.</>,
          ]}
        />
        <Mistake>Treating every noun as an object. Some nouns are only details, so choose those that matter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name Polya's four steps.</>,
          <>What is a user story?</>,
          <>What do nouns suggest in a noun-verb analysis?</>,
          <>What is an acceptance test?</>,
        ]}
        answers={[
          <>Understand the problem, devise a plan, carry out the plan, look back.</>,
          <>A short description of what the user needs, from the user's view.</>,
          <>Objects and their data.</>,
          <>A check that the program meets the requirements.</>,
        ]}
      />,
    ),
  },
];
