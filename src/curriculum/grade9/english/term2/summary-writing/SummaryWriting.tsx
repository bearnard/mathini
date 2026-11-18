import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/g9eng';

// Grade 9 English HL: summary writing (original sentences; limit and word-count arithmetic from g9eng.ts). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a summary is",
    content: slide(
      <>
        <Rule>A summary is a short version of a text. It keeps the main points and leaves out examples, repetition and small details. Write it in your own words, in full sentences or in point form, as the question asks, and keep to the word limit. A summary of a text of {o.SUMMARY.passageWords} words may be one third as long, so {o.SUMMARY.passageWords} ÷ {o.SUMMARY.fractionDen} = {o.summaryLimit()} words.</Rule>
        <FlowSteps
          aria={"The steps of summary writing. Read the text twice, mark the main points, write them in your own words, then count the words and check."}
          steps={[{ label: "Read the text twice" }, { label: "Mark the main points" }, { label: "Write them in your own words" }, { label: "Count the words and check" }]}
        />
        <Worked
          title="A limit worked out"
          steps={[
            <>The passage has {o.SUMMARY.passageWords} words.</>,
            <>One third of {o.SUMMARY.passageWords} is {o.summaryLimit()} words, so that is the limit.</>,
            <>With {o.SUMMARY.points} points, each point has about {o.summaryLimit()} ÷ {o.SUMMARY.points} = {o.wordsPerPoint()} words.</>,
          ]}
        />
        <Mistake>Copying whole sentences from the text. A summary must be in your own words.</Mistake>
      </>,
    ),
  },
  {
    title: "Finding main points and key words",
    content: slide(
      <>
        <Rule>Each paragraph usually has one main point, often in its first or last sentence. The rest is support: examples, details and repeated ideas. Underline the key words, the words that carry the main idea. Leave out examples, numbers that are not needed, quotations and long descriptions.</Rule>
        <InfoTable
          cols={[{ title: "Keep", w: 50 }, { title: "Leave out", w: 50 }]}
          rows={[
            ["the main point", "examples"],
            ["key words", "repeated ideas"],
            ["a cause or result", "quotations"],
            ["a needed number", "small details"],
          ]}
          aria={"A table of what to keep and what to leave out in a summary. Keep the main point, key words, a cause or result, and a needed number. Leave out examples, repeated ideas, quotations and small details."}
        />
        <Worked
          title="From a paragraph to a point"
          steps={[
            <>Text: the school started a recycling project in March to reduce waste, with bins in every classroom and a weekly prize for the cleanest class.</>,
            <>Main point: the school started recycling to reduce waste.</>,
            <>The bins and the prize are details, so they are left out.</>,
          ]}
        />
        <Mistake>Keeping every detail because it seems interesting. Keep only what the question needs.</Mistake>
      </>,
    ),
  },
  {
    title: "Own words and word count",
    content: slide(
      <>
        <Rule>To use your own words, replace phrases with shorter ones and join ideas in one sentence. Do not change the meaning. Count your words and cross out filler such as very, really and in order to. A short sentence saves words and is clearer.</Rule>
        <InfoTable
          cols={[{ title: "Long", w: 54 }, { title: "Short", w: 46 }]}
          rows={[
            ["in order to", "to"],
            ["a large number of", "many"],
            ["at this point in time", "now"],
            ["due to the fact that", "because"],
          ]}
          aria={"A table of long phrases and short replacements. In order to becomes to. A large number of becomes many. At this point in time becomes now. Due to the fact that becomes because."}
        />
        <Worked
          title="Save words"
          steps={[
            <>Long: &quot;{o.LONG_SENTENCE}&quot; has {o.countWords(o.LONG_SENTENCE)} words.</>,
            <>Short: &quot;{o.SHORT_SENTENCE}&quot; has {o.countWords(o.SHORT_SENTENCE)} words.</>,
            <>The short version saves {o.countWords(o.LONG_SENTENCE)} − {o.countWords(o.SHORT_SENTENCE)} = {o.wordsSaved()} words and keeps the meaning.</>,
          ]}
        />
        <Mistake>Cutting so much that the meaning is lost. Check that every main point is still there.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a summary leave out?</>,
          <>A text has 240 words. What is a limit of one third?</>,
          <>Main ideas often sit where?</>,
          <>Why count your words?</>,
        ]}
        answers={[
          <><strong>Examples, repetition and small details</strong>.</>,
          <>240 ÷ 3 = <strong>{o.summaryLimit()} words</strong>.</>,
          <>In the <strong>first or last sentence</strong>.</>,
          <>To <strong>keep to the limit</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a summary?",
    options: ["A longer version with more detail", "A short version that keeps the main points", "A copy of the first paragraph", "A list of the hard words"],
    answer: "A short version that keeps the main points",
    explanation: "A summary shortens a text.",
  },
  {
    prompt: "Which should a summary keep?",
    options: ["All of the examples", "Every small detail", "The quoted speech", "The main points"],
    answer: "The main points",
    explanation: "The main points are the heart of the text.",
  },
  {
    prompt: "Which should a summary leave out?",
    options: ["Examples and repeated ideas", "The main point of each paragraph", "The key words of the text", "A cause that matters"],
    answer: "Examples and repeated ideas",
    explanation: "Examples and repetition only support the point.",
  },
  {
    prompt: "In which words should you write a summary?",
    options: ["The exact words of the text", "The words of a friend", "Your own words", "Words from a dictionary only"],
    answer: "Your own words",
    explanation: "Copying the text does not show understanding.",
  },
  {
    prompt: "A passage has 240 words and a summary may be one third as long. What is the limit?",
    options: ["60 words", "80 words", "120 words", "720 words"],
    answer: "80 words",
    explanation: "240 ÷ 3 = 80 words.",
  },
  {
    prompt: "A passage has 300 words and a summary may be one third as long. What is the limit?",
    options: ["75 words", "150 words", "900 words", "100 words"],
    answer: "100 words",
    explanation: "300 ÷ 3 = 100 words.",
  },
  {
    prompt: "A summary has an 80-word limit and 5 points. About how many words may each point use?",
    options: ["16 words", "8 words", "20 words", "75 words"],
    answer: "16 words",
    explanation: "80 ÷ 5 = 16 words.",
  },
  {
    prompt: "Main ideas often sit where?",
    options: ["In the middle of a long example", "In the title of the book", "At the opening or closing line", "In the page number"],
    answer: "At the opening or closing line",
    explanation: "Writers often state the point at the start or the end.",
  },
  {
    prompt: "What are key words?",
    options: ["Words that open a door", "Words that carry the main idea", "Words that are always long", "Words in a bubble"],
    answer: "Words that carry the main idea",
    explanation: "Underlining key words helps to find the main point.",
  },
  {
    prompt: "Which phrase is the best short replacement for \"in order to\"?",
    options: ["with a view to", "for the purpose of", "so as to be able to", "to"],
    answer: "to",
    explanation: "A shorter phrase saves words.",
  },
  {
    prompt: "Which short word replaces \"due to the fact that\"?",
    options: ["because", "although", "unless", "until"],
    answer: "because",
    explanation: "'Because' means the same and is shorter.",
  },
  {
    prompt: "A sentence has 11 words and the short version has 6 words. How many words are saved?",
    options: ["4 words", "6 words", "5 words", "17 words"],
    answer: "5 words",
    explanation: "11 − 6 = 5 words.",
  },
  {
    prompt: "Which step should come last when you write a summary?",
    options: ["Read the text for the first time", "Count the words and check the limit", "Underline the first sentence", "Copy the title down"],
    answer: "Count the words and check the limit",
    explanation: "The count checks that you keep to the limit.",
  },
  {
    prompt: "What is the danger of cutting too much?",
    options: ["The summary may be too long", "The text may be returned", "The word count may grow", "The meaning may be lost"],
    answer: "The meaning may be lost",
    explanation: "All main points must stay.",
  },
];

const SummaryWriting = () => (
  <CapsSubjectTopic
    title="Summary Writing"
    subtitle="Main points and key words, writing in your own words and keeping to the word limit"
    learnSteps={learnSteps}
    task="gr9-summary-writing-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default SummaryWriting;
