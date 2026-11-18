import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Parts of a newspaper article",
    content: slide(
      <>
        <Rule>A newspaper article tells readers about a real event. It has a headline that names the story, a by-line that shows who wrote it, a first paragraph called the lead that gives the main facts, and the body that adds the details. You write it in the third person and in the past tense, because you report what happened.</Rule>
        <KeyTable
          title="Parts of an article"
          head={["Part", "What it does"]}
          aria="Parts of an article. Headline: Short and clear, names the story. By-line: Shows who wrote the article. Lead paragraph: Gives the main facts at once. Body: Adds details in order of importance. Quotation: Gives the words of someone who was there."
          rows={[["Headline", "Short and clear, names the story"], ["By-line", "Shows who wrote the article"], ["Lead paragraph", "Gives the main facts at once"], ["Body", "Adds details in order of importance"], ["Quotation", "Gives the words of someone who was there"]]}
        />
        <Worked
          steps={[
            <>Headline: Library Gets New Books. By-line: By Thandi Nkosi. The lead says what happened, where and when.</>,
            <>The body then tells how many books arrived and who donated them.</>,
          ]}
        />
        <Mistake>Writing a long story and putting the facts at the end. Put the main facts in the lead paragraph.</Mistake>
      </>,
    ),
  },
  {
    title: "The five Ws and H",
    content: slide(
      <>
        <Rule>A good lead answers who, what, where, when and why, and often how. Reporters call these the five Ws. If you check that your first paragraph answers them, readers will know the main story at once.</Rule>
        <KeyTable
          title="Questions for the lead"
          head={["Question", "Example answer"]}
          aria="Questions for the lead. Who?: Learners of Ward 12 Primary. What?: Planted twenty trees. Where?: At the school sports field. When?: On Friday morning. Why?: To make the field cooler and greener."
          rows={[["Who?", "Learners of Ward 12 Primary"], ["What?", "Planted twenty trees"], ["Where?", "At the school sports field"], ["When?", "On Friday morning"], ["Why?", "To make the field cooler and greener"]]}
        />
        <ModelText label="A short model article" note="An original model, with invented names, written for this lesson.">
          <p>Learners Plant Trees at School</p>
          <p>By Thandi Nkosi</p>
          <p>Learners of Ward 12 Primary planted twenty trees on the school sports field on Friday morning to make the field cooler and greener.</p>
          <p>The principal, Mr Dlamini, said the trees would give shade during sports days. “We want our learners to enjoy playing outside,” he said.</p>
          <p>The trees were donated by a local garden shop. Each class will take care of one tree.</p>
        </ModelText>
        <Worked
          steps={[
            <>Lead: Learners of Ward 12 Primary planted twenty trees on the sports field on Friday morning to make it cooler and greener.</>,
            <>The sentence answers all five questions in one go.</>,
          ]}
        />
        <Mistake>Leaving out when or where. A reader must know exactly what happened and at what time and place.</Mistake>
      </>,
    ),
  },
  {
    title: "Facts, quotations and tone",
    content: slide(
      <>
        <Rule>A news article gives facts, not opinions. Use exact names, numbers and dates. A quotation puts the exact words of a person in inverted commas and says who spoke. Keep your tone neutral and your sentences short. Avoid words such as best or terrible unless someone is quoted saying them.</Rule>
        <KeyTable
          title="Facts and opinion"
          head={["Fact (use in news)", "Opinion (avoid in news)"]}
          aria="Facts and opinion. Twenty trees were planted: The trees are the best thing ever. The event started at 9:00: It was a wonderful morning. The principal said the trees give shade: The principal is the nicest in town. Each class will care for one tree: Everyone should love trees. The shop donated the trees: The shop is very generous."
          rows={[["Twenty trees were planted", "The trees are the best thing ever"], ["The event started at 9:00", "It was a wonderful morning"], ["The principal said the trees give shade", "The principal is the nicest in town"], ["Each class will care for one tree", "Everyone should love trees"], ["The shop donated the trees", "The shop is very generous"]]}
        />
        <Worked
          steps={[
            <>You write The principal said the trees would give shade, instead of The trees are wonderful.</>,
            <>You put the principal’s own words in inverted commas.</>,
          ]}
        />
        <Mistake>Adding your own opinion. A reporter tells what happened and lets readers decide what they think.</Mistake>
      </>,
    ),
  },
  {
    title: "Plan, write and check",
    content: slide(
      <>
        <Rule>Plan before you write. Note the five Ws, then choose a headline, write the lead, add the body in order of importance and check your facts, spelling and punctuation. Read it aloud to be sure it is clear and that every sentence is in the past tense.</Rule>
        <KeyTable
          title="Writing steps"
          head={["Step", "What you do"]}
          aria="Writing steps. Plan: List the five Ws and any quotations. Headline: Write a short, clear headline. Lead: Answer the five Ws in the first paragraph. Body: Add details, most important first. Check: Spelling, punctuation, tense and facts."
          rows={[["Plan", "List the five Ws and any quotations"], ["Headline", "Write a short, clear headline"], ["Lead", "Answer the five Ws in the first paragraph"], ["Body", "Add details, most important first"], ["Check", "Spelling, punctuation, tense and facts"]]}
        />
        <Worked
          steps={[
            <>You list the facts about a school clean-up, write a headline and then the lead.</>,
            <>You check that the names and numbers match your notes.</>,
          ]}
        />
        <Mistake>Skipping the check. Mistakes in names or numbers make the article unreliable.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a by-line show?</>,
          <>What does the lead paragraph give?</>,
          <>Name the five Ws.</>,
          <>In which tense do you report an event?</>,
        ]}
        answers={[
          <>Who wrote the article.</>,
          <>The main facts at once.</>,
          <>Who, what, where, when and why.</>,
          <>The past tense.</>,
        ]}
      />,
    ),
  },
];
