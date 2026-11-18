import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as p from '@/components/diagrams/english/paper1';

// Numbers come from paper1.ts (tested in paper1.test.ts and g12EngPaper1.test.ts). Every passage and sentence is an original teaching text.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
import { SummaryShrink } from '@/components/diagrams/english/EnglishPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'What the summary section asks',
    content: slide(
      <>
        <Rule>Section B of Paper 1 is worth {p.PAPER1.summary} marks. You read a passage of about {p.PAPER1.summaryPassage} words and write a summary of {p.PAPER1.summaryWords.min} to {p.PAPER1.summaryWords.max} words. The summary uses {p.PAPER1.points} points, normally in continuous prose, and it must be in your own words. The summary passage is not the comprehension text, so read it as a fresh text.</Rule>
        <SummaryShrink passage={p.PAPER1.summaryPassage} summary={p.MODEL_WORDS} />
        <Worked
          title="How the numbers fit"
          steps={[
            `Seven points in ${p.PAPER1.summaryWords.min} to ${p.PAPER1.summaryWords.max} words leaves about ${p.wordsPerPoint(84)} words for each point (7 × 12 = 84).`,
            `A summary of 84 words is about ${Math.round((84 / p.PAPER1.summaryPassage) * 100)}% of the ${p.PAPER1.summaryPassage}-word passage.`,
            'A summary under 80 or over 90 words breaks the limit, and the marks can be affected.',
          ]}
        />
        <Mistake>Treating the summary as a short essay. It is a condensed version of the passage, and it must contain only the ideas of the passage and no opinion of your own.</Mistake>
      </>,
    ),
  },
  {
    title: 'Selecting the main points',
    content: slide(
      <>
        <Rule>Read the passage and the instruction first, then underline the main idea of each paragraph. A main point is a fact or idea that the passage needs; examples, repeated ideas, quotations and small details are left out. Number your points in the margin, and check that you have seven.</Rule>
        <InfoTable
          cols={[{ title: 'Keep', w: 50 }, { title: 'Leave out', w: 50 }]}
          rows={[
            ['The main idea of each paragraph', 'Examples and illustrations'],
            ['Causes, results and facts', 'Repetition of the same idea'],
            ['Information that answers the topic', 'Quotations and speech'],
            ['One idea in each point', 'Your own opinion'],
          ]}
          aria="A table of what to keep and what to leave out of a summary. Keep: the main idea of each paragraph, causes, results and facts, information that answers the topic, one idea in each point. Leave out: examples and illustrations, repetition, quotations and speech, and your own opinion."
        />
        <Worked
          title="Choose the point"
          steps={[
            'Paragraph: "The garden feeds the pupils. For example, last Tuesday, a grade 5 class ate spinach." The point is that the garden feeds the pupils; the example is left out.',
            'Two paragraphs make the same point about saving money: use the idea once.',
            'Check that the seven points answer the topic, in the order of the passage.',
          ]}
        />
        <Mistake>Including an example because it is interesting. Examples carry no mark in a summary, and they use words that you need for another point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing in your own words',
    content: slide(
      <>
        <Rule>Use your own words for the ideas, and keep technical words that cannot be changed. Join your points in sentences, use the present tense or the tense of the passage, and combine ideas with linking words so that the summary reads smoothly. Do not copy whole sentences from the passage; lifted phrases do not show that you understand.</Rule>
        <InfoTable
          cols={[{ title: 'Passage says', w: 46 }, { title: 'Summary says', w: 54 }]}
          rows={[
            ['Pupils who might otherwise go\nhungry are fed from the garden.', 'The garden feeds hungry pupils.'],
            ['Kitchen scraps are turned into\ncompost for the beds.', 'Scraps become compost.'],
            ['Learners work together to\nweed and water.', 'Learners learn teamwork.'],
          ]}
          aria="A table comparing the passage and the summary. The passage says that pupils who might otherwise go hungry are fed from the garden; the summary says the garden feeds hungry pupils. The passage says kitchen scraps are turned into compost for the beds; the summary says scraps become compost. The passage says learners work together to weed and water; the summary says learners learn teamwork."
        />
        <Worked
          title="Shorten a sentence"
          steps={[
            'Passage: "The school has saved a great deal of money because it no longer needs to buy so many vegetables." (20 words)',
            'Summary: "The garden saves the school money on vegetables." (8 words)',
            'The idea is the same, but the wording is shorter and different.',
          ]}
        />
        <Mistake>Changing one or two words and keeping the passage sentence. A sentence that is mostly copied is treated as lifted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Counting words and checking your summary',
    content: slide(
      <>
        <Rule>Count the words of your summary before you hand it in. Each word counts once, and a hyphenated word and a contraction each count as one word. Check that the total is between {p.PAPER1.summaryWords.min} and {p.PAPER1.summaryWords.max}, that you have seven points, that no point is repeated, and that there is no quotation. Write the number of words at the end if the instruction asks for it.</Rule>
        <InfoTable
          cols={[{ title: 'Check', w: 50 }, { title: 'Target', w: 50 }]}
          rows={[
            ['Number of points', `${p.PAPER1.points}`],
            ['Number of words', `${p.PAPER1.summaryWords.min} to ${p.PAPER1.summaryWords.max}`],
            ['Your own words', 'No copied sentences'],
            ['Style', 'Continuous prose, no opinion'],
          ]}
          aria={`A checklist for the summary. Number of points: ${p.PAPER1.points}. Number of words: ${p.PAPER1.summaryWords.min} to ${p.PAPER1.summaryWords.max}. Your own words: no copied sentences. Style: continuous prose, no opinion.`}
        />
        <Worked
          title="Count a model summary"
          steps={[
            <>The model summary on a school food garden has {p.MODEL_WORDS} words, which is between {p.PAPER1.summaryWords.min} and {p.PAPER1.summaryWords.max}: correct.</>,
            `Seven points of about 12 words each give 7 × 12 = ${7 * 12} words.`,
            `If you count 74 words, you need about ${p.PAPER1.summaryWords.min - 74} more words, or another point.`,
          ]}
        />
        <Mistake>Counting the title or the numbers of your points as words, or counting a hyphenated word as two. Count the words of the summary itself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many points must a Paper 1 summary contain?</>,
          <>What is the word limit of the summary?</>,
          <>Name one thing that you leave out of a summary.</>,
          <>Your summary has 76 words. What must you do?</>,
        ]}
        answers={[
          <>{p.PAPER1.points}.</>,
          <>{p.PAPER1.summaryWords.min} to {p.PAPER1.summaryWords.max} words.</>,
          <>For example examples, repetition, quotations or your own opinion.</>,
          <>Add information so that it reaches 80 to 90 words, without repeating a point.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many marks is the summary section of Paper 1 worth?",
    options: ["30", "7", "10", "70"],
    answer: "10",
    explanation: "Section B is a ten-mark summary.",
  },
  {
    prompt: "How many points should a Paper 1 summary normally have?",
    options: ["7", "5", "10", "3"],
    answer: "7",
    explanation: "The summary is usually built from seven points.",
  },
  {
    prompt: "What is the usual length limit of the summary?",
    options: ["30 to 40 words", "200 to 250 words", "350 words", "80 to 90 words"],
    answer: "80 to 90 words",
    explanation: "The summary is a short text.",
  },
  {
    prompt: "A summary of 84 words is based on a 350-word passage. What fraction of the passage is it, as a percentage?",
    options: ["42%", "24%", "8,4%", "84%"],
    answer: "24%",
    explanation: "84 / 350 x 100 = 24%.",
  },
  {
    prompt: "Seven points are spread evenly over 84 words. How many words does each point have?",
    options: ["8 words", "12 words", "14 words", "7 words"],
    answer: "12 words",
    explanation: "Divide the 84 words by the seven points: 84 / 7 = 12 words for each.",
  },
  {
    prompt: "Which of these should you leave out of a summary?",
    options: ["The main idea of a paragraph", "A cause or a result", "A fact that answers the topic", "An example given to illustrate a point"],
    answer: "An example given to illustrate a point",
    explanation: "Examples carry no mark.",
  },
  {
    prompt: "Which of these must a summary contain?",
    options: ["Only ideas from the passage", "Your own opinion", "Quotations from the writer", "A new example"],
    answer: "Only ideas from the passage",
    explanation: "Add nothing that is not in the passage.",
  },
  {
    prompt: "In which words should a summary be written?",
    options: ["The writer's exact sentences", "The words of a friend", "Your own words", "Words copied from the title"],
    answer: "Your own words",
    explanation: "Own words show understanding.",
  },
  {
    prompt: "How are the points of a summary usually written?",
    options: ["As a list of numbers", "As a table", "As a poem", "In continuous prose"],
    answer: "In continuous prose",
    explanation: "Unless the instruction says otherwise, use sentences.",
  },
  {
    prompt: "Which is a good first step before writing a summary?",
    options: ["Write the conclusion first of all", "Underline each paragraph's main idea", "Count the pages of the booklet", "Copy the first sentence of it"],
    answer: "Underline each paragraph's main idea",
    explanation: "Selecting points comes before writing.",
  },
  {
    prompt: "A student's summary has 76 words. What should the student do?",
    options: ["Add points to reach 80 to 90", "Hand it in just as it is", "Remove one of the points", "Add a long quotation at the end"],
    answer: "Add points to reach 80 to 90",
    explanation: "76 words is below the limit.",
  },
  {
    prompt: "A summary has 98 words. What should the student do?",
    options: ["Hand it in just as it is", "Add several more points", "Cut it down to 90 or fewer", "Add a title only to it"],
    answer: "Cut it down to 90 or fewer",
    explanation: "The limit is 90 words.",
  },
  {
    prompt: "How many words are in: \"The well-known teacher didn't arrive.\"",
    options: ["4", "6", "5", "7"],
    answer: "5",
    explanation: "A hyphenated word and a contraction each count as one.",
  },
  {
    prompt: "Why are lifted sentences a problem in a summary?",
    options: ["They do not show that you understand", "They are always wrong facts", "They are too short", "They need a title"],
    answer: "They do not show that you understand",
    explanation: "Own words show that you have understood.",
  },
];

const P1SummaryWriting = () => (
  <CapsSubjectTopic
    title="Summary Writing: Points, Own Words and Word Count"
    subtitle="Selecting the seven points, writing in your own words and counting the words"
    learnSteps={learnSteps}
    task="gr12-p1-summary-writing-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default P1SummaryWriting;
