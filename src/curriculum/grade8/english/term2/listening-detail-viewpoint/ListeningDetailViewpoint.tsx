import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 8 English HL oral skills: listening for detail, summarising a spoken text, viewpoint and bias. No recordings.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Listening for detail",
    content: slide(
      <>
        <Rule>Listening for detail means catching the facts: who, what, where, when, why and how many. Before the text is read, read the questions if you have them, so that you know what to listen for. Note names, numbers, places and dates. Listen for linking words such as because, but and so, which show how ideas are connected.</Rule>
        <InfoTable
          cols={[{ title: "Question word", w: 30 }, { title: "Listen for", w: 70 }]}
          rows={[
            ["Who", "names of people"],
            ["Where", "places"],
            ["When", "dates, times, order words"],
            ["How many", "numbers and amounts"],
            ["Why", "reasons after because or so"],
          ]}
          aria={"A table of question words and what to listen for. Who: names of people. Where: places. When: dates, times and order words. How many: numbers and amounts. Why: reasons after because or so."}
        />
        <Worked
          title={`A passage of ${o.DETAIL8.words} words`}
          steps={[
            <>Read at {o.DETAIL8.wpm} words a minute, it lasts {o.DETAIL8.words} ÷ {o.DETAIL8.wpm} = {o.detailMinutes()} minutes.</>,
            <>Your notes can be about {o.DETAIL8.notesWords} words of key words.</>,
            <>That is far fewer than the passage, so choose carefully.</>,
          ]}
        />
        <Mistake>Writing down everything. Only note the facts that answer who, what, where, when, why and how many.</Mistake>
      </>,
    ),
  },
  {
    title: "Main idea and summary",
    content: slide(
      <>
        <Rule>The main idea is what the whole passage is about. Details support the main idea. To summarise what you heard, join your key words into a few short sentences in your own words. Leave out examples and repeated information. A summary is much shorter than the passage, and it keeps the main idea and the most important details.</Rule>
        <FlowSteps
          aria={"Steps to summarise a spoken text. Listen and note key words, find the main idea, join the key words into sentences, then check that it is shorter."}
          steps={[{ label: "Listen and note key words" }, { label: "Find the main idea" }, { label: "Join key words into sentences" }, { label: "Check: is it shorter?" }]}
        />
        <Worked
          title="From notes to summary"
          steps={[
            <>Notes: school garden, started in March, 12 learners, grows spinach, sells at the market.</>,
            <>Main idea: a school garden run by learners.</>,
            <>Summary: Twelve learners started a school garden in March and sell the spinach at the market.</>,
          ]}
        />
        <Mistake>Copying sentences from your notes in a long list. Write a short summary in your own words.</Mistake>
      </>,
    ),
  },
  {
    title: "Viewpoint, bias and tone",
    content: slide(
      <>
        <Rule>A speaker&apos;s viewpoint is how the speaker sees the topic. Bias is a one-sided view that leaves out other sides. Clues are emotive words (such as terrible or wonderful), leaving out facts that disagree, and a tone that shows strong feeling. A good listener asks: Who is speaking? What is the purpose? What is left out?</Rule>
        <InfoTable
          cols={[{ title: "Clue", w: 34 }, { title: "What it may show", w: 66 }]}
          rows={[
            ["Emotive words", "strong feeling, not only facts"],
            ["Only one side", "bias"],
            ["Facts left out", "an unfair picture"],
            ["Angry or joking tone", "the speaker's attitude"],
          ]}
          aria={"A table of clues to viewpoint. Emotive words show strong feeling, not only facts. Only one side shows bias. Facts left out give an unfair picture. An angry or joking tone shows the speaker's attitude."}
        />
        <Worked
          title="Spot the viewpoint"
          steps={[
            <>&quot;The new rule is a terrible punishment for everyone.&quot; The word terrible is emotive.</>,
            <>The speaker gives only one side, so the view may be biased.</>,
            <>A balanced speaker would also give the reasons for the rule.</>,
          ]}
        />
        <Mistake>Believing a speaker because the speaker sounds sure. Check the facts and ask what is left out.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which question word makes you listen for numbers?</>,
          <>How long does a 360-word passage take at 120 words a minute?</>,
          <>What is the main idea?</>,
          <>Name one clue that a speaker is biased.</>,
        ]}
        answers={[
          <><strong>How many</strong>.</>,
          <>360 ÷ 120 = <strong>{o.detailMinutes()} minutes</strong>.</>,
          <>What the whole passage is <strong>about</strong>.</>,
          <>For example, giving <strong>only one side</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does listening for detail mean?",
    options: ["Listening only to the title of the talk", "Catching facts such as names, places and numbers", "Listening to the loudest words of a speaker", "Listening without ever taking any notes"],
    answer: "Catching facts such as names, places and numbers",
    explanation: "Details answer who, what, where, when, why and how many.",
  },
  {
    prompt: "Why should you read the questions before a listening passage?",
    options: ["To avoid having to listen", "To change the passage", "To learn the answers by heart", "To know what to listen for"],
    answer: "To know what to listen for",
    explanation: "Questions guide your listening.",
  },
  {
    prompt: "Which kind of words show how ideas are connected?",
    options: ["Linking words such as because and but", "Names of people in the story", "Numbers and dates", "Words that rhyme"],
    answer: "Linking words such as because and but",
    explanation: "Linking words show reasons and contrast.",
  },
  {
    prompt: "A passage has 360 words and is read at 120 words a minute. How long is it?",
    options: ["2 minutes", "4 minutes", "3 minutes", "30 minutes"],
    answer: "3 minutes",
    explanation: "360 ÷ 120 = 3 minutes.",
  },
  {
    prompt: "A passage has 480 words and is read at 120 words a minute. How long is it?",
    options: ["3 minutes", "4 minutes", "5 minutes", "40 minutes"],
    answer: "4 minutes",
    explanation: "480 ÷ 120 = 4 minutes.",
  },
  {
    prompt: "What is the main idea of a passage?",
    options: ["The first word of the passage", "The longest sentence in it", "The name of the reader", "What the whole passage is about"],
    answer: "What the whole passage is about",
    explanation: "Details support the main idea.",
  },
  {
    prompt: "What do details do?",
    options: ["Support the main idea", "Replace the main idea", "Hide the main idea", "Repeat the title only"],
    answer: "Support the main idea",
    explanation: "Details give facts and examples.",
  },
  {
    prompt: "What should a summary of a spoken text be?",
    options: ["Longer than the passage itself", "A copy of every sentence you heard", "Shorter, in your own words, with the main idea", "A list of the speaker's mistakes"],
    answer: "Shorter, in your own words, with the main idea",
    explanation: "A summary is short and keeps the main idea.",
  },
  {
    prompt: "Which information should you leave out of a summary?",
    options: ["The main idea of the passage", "Repeated information and small examples", "The most important facts", "The names that matter"],
    answer: "Repeated information and small examples",
    explanation: "Summaries keep only what is important.",
  },
  {
    prompt: "What is a speaker's viewpoint?",
    options: ["The speaker's address", "The speaker's height", "The length of the talk", "How the speaker sees the topic"],
    answer: "How the speaker sees the topic",
    explanation: "Viewpoint is the speaker's position or opinion.",
  },
  {
    prompt: "What is bias?",
    options: ["A one-sided view that leaves out other sides", "A fair view that includes every side", "A list of correct facts about a topic", "A short summary of the notes you took"],
    answer: "A one-sided view that leaves out other sides",
    explanation: "A biased speaker is not balanced.",
  },
  {
    prompt: "Which word is emotive?",
    options: ["Tuesday", "Seven", "Terrible", "Classroom"],
    answer: "Terrible",
    explanation: "Emotive words show strong feeling.",
  },
  {
    prompt: "A speaker gives only the good points of an idea. What may this show?",
    options: ["A balanced talk", "Bias", "A set of facts", "A summary"],
    answer: "Bias",
    explanation: "Leaving out other sides is a sign of bias.",
  },
  {
    prompt: "Which question helps you to judge a speaker?",
    options: ["How tall is the speaker?", "What colour is the stage?", "How old is the microphone?", "What has the speaker left out?"],
    answer: "What has the speaker left out?",
    explanation: "Asking what is left out helps you to find bias.",
  },
];

const ListeningDetailViewpoint = () => (
  <CapsSubjectTopic
    title="Listening for Detail and Viewpoint"
    subtitle="Facts and key words, main idea and summary, viewpoint, bias and tone"
    learnSteps={learnSteps}
    task="gr8-listening-detail-viewpoint-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default ListeningDetailViewpoint;
