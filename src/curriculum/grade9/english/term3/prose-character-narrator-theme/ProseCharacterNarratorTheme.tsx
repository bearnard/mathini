import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/g9eng';

// Grade 9 English HL prose: character, narrator and theme. The passage is original (g9eng.ts CHARACTER). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Character and characterisation",
    content: slide(
      <>
        <Rule>A character is a person in a story. Direct characterisation tells you outright what a character is like. Indirect characterisation shows it through actions, speech, thoughts and what others say. A round character is complex and can change; a flat character has one main trait and does not change. Look at what a character does as well as what is said.</Rule>
        <InfoTable
          cols={[{ title: "Kind", w: 32 }, { title: "How it shows", w: 68 }]}
          rows={[
            ["Direct", "the writer states the trait"],
            ["Indirect", "actions, speech, thoughts"],
            ["Round", "complex, may change"],
            ["Flat", "one trait, no change"],
          ]}
          aria={"A table of characterisation. Direct: the writer states the trait. Indirect: shown through actions, speech and thoughts. Round: complex and may change. Flat: one trait and no change."}
        />
        <Worked
          title={`A passage of ${o.characterWords()} words`}
          steps={[
            <>{o.CHARACTER[0]} {o.CHARACTER[1]}</>,
            <>{o.CHARACTER[2]} {o.CHARACTER[3]}</>,
            <>These actions show indirectly that Thabo is hard-working and modest.</>,
          ]}
        />
        <Mistake>Thinking that a trait must be stated. Most traits are shown by actions.</Mistake>
      </>,
    ),
  },
  {
    title: "The narrator and point of view",
    content: slide(
      <>
        <Rule>The narrator is the voice that tells the story. In the first person the narrator is a character and says I and we, so you know only what that person knows. In the third person the narrator stands outside and says he, she and they. An omniscient narrator knows the thoughts of every character. Point of view changes what the reader learns.</Rule>
        <InfoTable
          cols={[{ title: "Narrator", w: 30 }, { title: "Clue words", w: 30 }, { title: "Reader learns", w: 40 }]}
          rows={[
            ["First person", "I, we", "one character's view"],
            ["Third person", "he, she, they", "an outside view"],
            ["Omniscient", "he, she, thoughts", "every character's mind"],
          ]}
          aria={"A table of narrators. First person uses I and we and gives one character's view. Third person uses he, she and they and gives an outside view. Omniscient uses he and she and shows every character's mind."}
        />
        <Worked
          title="Change the narrator"
          steps={[
            <>Third person: &quot;Thabo stitched his bag and said nothing.&quot;</>,
            <>First person: &quot;I stitched my bag and said nothing.&quot;</>,
            <>In the first person, we know how Thabo feels only if he tells us.</>,
          ]}
        />
        <Mistake>Confusing the narrator with the writer. The narrator is the voice the writer chooses.</Mistake>
      </>,
    ),
  },
  {
    title: "Theme and message",
    content: slide(
      <>
        <Rule>The topic is what the story is about in a word or two, such as effort. The theme is the idea about life that the story suggests, written as a full sentence: Quiet effort matters even when nobody is watching. Find the theme by asking what the main character learns and what the ending shows. A theme is not a moral that is only told: it is shown by events.</Rule>
        <InfoTable
          cols={[{ title: "Topic", w: 34 }, { title: "Theme", w: 66 }]}
          rows={[
            ["effort", "quiet effort matters when nobody watches"],
            ["courage", "courage grows when we face our fear"],
            ["kindness", "small kindness can change a day"],
          ]}
          aria={"A table of topics and themes. Topic effort, theme: quiet effort matters when nobody watches. Topic courage, theme: courage grows when we face our fear. Topic kindness, theme: small kindness can change a day."}
        />
        <Worked
          title="From topic to theme"
          steps={[
            <>Topic: effort.</>,
            <>Evidence: Thabo sweeps the corners that nobody checks, and the teacher notices.</>,
            <>Theme: quiet effort matters even when nobody is watching.</>,
          ]}
        />
        <Mistake>Giving a one-word theme. A theme is a full sentence about life.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is indirect characterisation?</>,
          <>Which pronouns tell you that a story is told in the first person?</>,
          <>What is the topic of the Thabo passage?</>,
          <>Is a theme one word or a full sentence?</>,
        ]}
        answers={[
          <>Showing a trait through <strong>actions and speech</strong>.</>,
          <><strong>I and we</strong>.</>,
          <><strong>Effort</strong>.</>,
          <>A <strong>full sentence</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is direct characterisation?",
    options: ["The reader guesses from the title", "The writer states what a character is like", "The character shows it by actions", "Other readers explain it"],
    answer: "The writer states what a character is like",
    explanation: "Direct characterisation tells the reader outright.",
  },
  {
    prompt: "What is indirect characterisation?",
    options: ["A trait stated by the writer in one line", "A trait that is never described", "A trait that only the narrator knows", "A trait shown through actions, speech and thoughts"],
    answer: "A trait shown through actions, speech and thoughts",
    explanation: "Indirect characterisation shows rather than tells.",
  },
  {
    prompt: "Thabo stitches his old bag and says nothing. Which trait does this show?",
    options: ["Modesty and patience", "Anger and cruelty", "Greed and laziness", "Fear of the dark"],
    answer: "Modesty and patience",
    explanation: "He does not complain and he mends it quietly.",
  },
  {
    prompt: "Thabo sweeps corners that nobody will check. Which trait does this show?",
    options: ["He is careless and lazy", "He is jealous of others", "He is hard-working and honest", "He is afraid of the judges"],
    answer: "He is hard-working and honest",
    explanation: "He does the work well even when it is not seen.",
  },
  {
    prompt: "What is a round character?",
    options: ["A character with only one trait", "A complex character who may change", "A character who never speaks", "A character with no name"],
    answer: "A complex character who may change",
    explanation: "Round characters have depth.",
  },
  {
    prompt: "What is a flat character?",
    options: ["A complex character who grows and changes", "A character who tells the whole story", "A character whose name is in the title", "A character with one main trait who does not change"],
    answer: "A character with one main trait who does not change",
    explanation: "Flat characters are simple.",
  },
  {
    prompt: "What is the narrator?",
    options: ["The voice that tells the story", "The writer of the book", "The main character always", "The reader of the story"],
    answer: "The voice that tells the story",
    explanation: "The narrator is chosen by the writer.",
  },
  {
    prompt: "A story says: \"I opened the door and we ran.\" Which narrator is used?",
    options: ["Third person", "Omniscient narrator", "First person", "No narrator at all"],
    answer: "First person",
    explanation: "I and we show a narrator who is a character.",
  },
  {
    prompt: "A story says: \"She opened the door and they ran.\" Which narrator is used?",
    options: ["First person", "Third person", "Direct speech", "No narrator at all"],
    answer: "Third person",
    explanation: "She and they show a narrator who stands outside the story.",
  },
  {
    prompt: "What does an omniscient narrator know?",
    options: ["Only the narrator's own thoughts", "Only the ending of the story", "Nothing about the characters", "The thoughts of every character"],
    answer: "The thoughts of every character",
    explanation: "Omniscient means all-knowing.",
  },
  {
    prompt: "How would you describe the topic of a story?",
    options: ["What it is about in a word or two", "The idea about life in a full sentence", "The first line of the story", "The setting of the story"],
    answer: "What it is about in a word or two",
    explanation: "The topic is general, such as effort.",
  },
  {
    prompt: "What is the theme of a story?",
    options: ["The name that the main character is given", "The place where the whole story is set", "The idea about life that the story suggests", "The number of events in the plot"],
    answer: "The idea about life that the story suggests",
    explanation: "The theme is a message in a sentence.",
  },
  {
    prompt: "Which sentence is a theme?",
    options: ["Effort at school and at home", "Quiet effort matters even when nobody is watching.", "A boy with an old bag at a school", "The school cleaning competition of the year"],
    answer: "Quiet effort matters even when nobody is watching.",
    explanation: "A theme is a full sentence about life.",
  },
  {
    prompt: "How do you find the theme of a story?",
    options: ["Count the sentences that the whole story has", "Look at the length of the title of the story", "Read only the first line of the whole story", "Ask what the main character learns and what the end shows"],
    answer: "Ask what the main character learns and what the end shows",
    explanation: "The ending and the change in a character point to the theme.",
  },
];

const ProseCharacterNarratorTheme = () => (
  <CapsSubjectTopic
    title="Prose: Character, Narrator and Theme"
    subtitle="Characterisation, the narrator and point of view, and finding the theme, with an original passage"
    learnSteps={learnSteps}
    task="gr9-prose-character-narrator-theme-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default ProseCharacterNarratorTheme;
