import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/g9eng';

// Grade 9 English HL prose: answering contextual questions on an original extract (g9eng.ts EXTRACT). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Read the extract first",
    content: slide(
      <>
        <Rule>A contextual question is a question on an extract, a short part of a longer text. First read the whole extract carefully and say in one sentence what is happening. Then read the question twice. Underline the key words in it: the command word (such as state, explain or quote) and what it asks about. The answer is in the extract or follows from it.</Rule>
        <FlowSteps
          aria={"Steps for a contextual question. Read the extract, read the question twice, underline the command word, then find the evidence."}
          steps={[{ label: "Read the extract" }, { label: "Read the question twice" }, { label: "Underline the command word" }, { label: "Find the evidence" }]}
        />
        <Worked
          title={`An extract of ${o.extractWords()} words`}
          steps={[
            <>{o.EXTRACT[0]} {o.EXTRACT[1]}</>,
            <>{o.EXTRACT[2]}</>,
            <>In one sentence: Lindiwe is nervous about giving the letter to her mother.</>,
          ]}
        />
        <Mistake>Starting to answer before reading the whole extract. You may miss the point.</Mistake>
      </>,
    ),
  },
  {
    title: "Command words and evidence",
    content: slide(
      <>
        <Rule>Command words tell you what to do. State or name: give a short answer. Quote: copy the exact words, in inverted commas. Explain: give a reason. Describe: say what it is like. Use short quotations as evidence and keep them to the few words that prove your point. Do not copy the whole sentence if two words are enough.</Rule>
        <InfoTable
          cols={[{ title: "Command word", w: 32 }, { title: "What to do", w: 68 }]}
          rows={[
            ["State", "a short, direct answer"],
            ["Quote", "copy exact words in inverted commas"],
            ["Explain", "give a reason"],
            ["Describe", "say what it is like"],
          ]}
          aria={"A table of command words. State: a short, direct answer. Quote: copy exact words in inverted commas. Explain: give a reason. Describe: say what it is like."}
        />
        <Worked
          title="Answer three questions"
          steps={[
            <>Quote the words that show that she is nervous: &quot;Twice she took it out, and twice she put it back.&quot;</>,
            <>State what she does at lunch: she gives the letter to her mother.</>,
            <>Explain why she says nothing: she is too nervous to speak.</>,
          ]}
        />
        <Mistake>Writing your opinion when the question says quote. Copy the exact words.</Mistake>
      </>,
    ),
  },
  {
    title: "Inference and a full answer",
    content: slide(
      <>
        <Rule>An inference is something you work out from clues, not something the text states. Use the pattern point, evidence, explanation: make the point, quote or refer to the extract, and explain how it proves the point. Allow more words for questions that carry more marks: more marks mean more points. Check your answer against the question.</Rule>
        <FlowSteps
          aria={"The pattern for a full answer. Point: say what you think. Evidence: quote a few words. Explain how it proves the point."}
          steps={[{ label: "Point: say what you think" }, { label: "Evidence: quote a few words" }, { label: "Explain: how it proves it" }]}
        />
        <Worked
          title="Point, evidence, explanation"
          steps={[
            <>Point: Lindiwe is nervous.</>,
            <>Evidence: &quot;Twice she took it out, and twice she put it back.&quot;</>,
            <>Explanation: the repeated action shows that she keeps changing her mind.</>,
          ]}
        />
        <Mistake>Stating a point with no evidence. Always prove it from the extract.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What should you read first in a contextual question?</>,
          <>What does the command word quote ask you to do?</>,
          <>What is an inference?</>,
          <>What is the pattern of a full answer?</>,
        ]}
        answers={[
          <>The <strong>whole extract</strong>.</>,
          <>Copy the <strong>exact words</strong>.</>,
          <>Something worked out from <strong>clues</strong>.</>,
          <><strong>Point, evidence and explanation</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a contextual question?",
    options: ["A question about the weather", "A question on an extract from a longer text", "A question that has no text", "A question about grammar rules only"],
    answer: "A question on an extract from a longer text",
    explanation: "The extract gives the context.",
  },
  {
    prompt: "What should you do first with an extract?",
    options: ["Read only the last line", "Skip to the questions", "Count the words", "Read the whole extract carefully"],
    answer: "Read the whole extract carefully",
    explanation: "You must understand what is happening first.",
  },
  {
    prompt: "Why do you read the question twice?",
    options: ["To be sure what it asks", "To make it shorter", "To find the writer's name", "To pass the time"],
    answer: "To be sure what it asks",
    explanation: "Reading twice prevents mistakes.",
  },
  {
    prompt: "What is a command word?",
    options: ["A word in the title of the extract", "A word that rhymes with the next one", "A word that tells you what to do", "A word that is written in a bubble"],
    answer: "A word that tells you what to do",
    explanation: "State, quote and explain are command words.",
  },
  {
    prompt: "The command word \"state\" tells you to do what?",
    options: ["Write a long essay", "Give a short, direct answer", "Copy a paragraph", "Draw a picture"],
    answer: "Give a short, direct answer",
    explanation: "State asks for a brief answer.",
  },
  {
    prompt: "Which command word asks you to copy exact words from the text?",
    options: ["State", "Explain", "Describe", "Quote"],
    answer: "Quote",
    explanation: "Quote means copying the exact words, in inverted commas.",
  },
  {
    prompt: "The command word \"explain\" tells you to do what?",
    options: ["Give a reason", "Copy a sentence", "Draw a map", "Name a character"],
    answer: "Give a reason",
    explanation: "Explain asks why or how.",
  },
  {
    prompt: "How long should a quotation be?",
    options: ["The whole page", "Every sentence of the extract", "Only the few words that prove the point", "None at all"],
    answer: "Only the few words that prove the point",
    explanation: "Short quotations are clearer.",
  },
  {
    prompt: "What is an inference?",
    options: ["Something the text states outright", "Something worked out from clues", "A word from the title", "A copied sentence"],
    answer: "Something worked out from clues",
    explanation: "The reader reasons from the evidence.",
  },
  {
    prompt: "Which pattern gives a full answer?",
    options: ["Title, date and place", "Opening, body and closing", "Question, copy and stop", "Point, evidence and explanation"],
    answer: "Point, evidence and explanation",
    explanation: "Each part supports the next.",
  },
  {
    prompt: "Lindiwe takes a letter out twice and puts it back twice. What may you infer?",
    options: ["She is nervous or unsure", "She is very angry", "She has lost the letter", "She is bored"],
    answer: "She is nervous or unsure",
    explanation: "The repeated action shows her hesitation.",
  },
  {
    prompt: "Which answer has evidence?",
    options: ["She is nervous because I think that she is nervous.", "She is nervous and that is all there is to say.", "She is nervous: \"Twice she took it out, and twice she put it back.\"", "She is a girl who has a letter to give her mother."],
    answer: "She is nervous: \"Twice she took it out, and twice she put it back.\"",
    explanation: "A quotation proves the point.",
  },
  {
    prompt: "A question carries more marks than another. What should you do?",
    options: ["Write the same as for a short one", "Give more points in your answer", "Leave out the evidence", "Write only one word"],
    answer: "Give more points in your answer",
    explanation: "More marks mean more points.",
  },
  {
    prompt: "What should you do when your answer is finished?",
    options: ["Hand it in at once", "Cross out the evidence", "Rewrite the extract", "Check it against the question"],
    answer: "Check it against the question",
    explanation: "Checking helps you to avoid missing the command word.",
  },
];

const ProseContextualQuestions = () => (
  <CapsSubjectTopic
    title="Answering Contextual Questions on Prose"
    subtitle="Reading an extract, command words and evidence, inference and a full answer"
    learnSteps={learnSteps}
    task="gr9-prose-contextual-questions-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default ProseContextualQuestions;
