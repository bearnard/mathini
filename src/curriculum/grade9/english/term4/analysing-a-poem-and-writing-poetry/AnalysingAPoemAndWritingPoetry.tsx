import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g9-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A method for analysing a poem",
    content: slide(
      <>
        <Rule>{"Read the poem twice. Then work through the title, the speaker and the subject, the structure (lines, stanzas, rhyme, rhythm), the language (images, figures of speech, word choice), the sound, the tone and mood, and the message. Make short notes, with a quotation for each point."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "The school bag leans against the wall",
            "with half a day of homework in it.",
            "I tell myself I'll start in a minute,",
            "and the minute is long and bright and slow.",
            "",
            "Outside, a boy on a borrowed bike",
            "rides through the puddles with his arms out,",
            "and I put my pencil down",
            "and wish I knew his kind of flying.",
        ]} />
        <FactCards
          cards={[
            { title: "Title, speaker", line1: "who speaks, and about", line2: "what?" },
            { title: "Structure", line1: "stanzas, lines,", line2: "rhyme and rhythm" },
            { title: "Language", line1: "images, figures and", line2: "word choice" },
            { title: "Tone, message", line1: "attitude, mood and", line2: "the main idea" },
          ]}
          aria={"A method for analysing a poem. Look at the title, the speaker and the subject. Look at the structure: stanzas, lines, rhyme and rhythm. Look at the language: images, figures and word choice. Then look at the tone, the mood and the message."}
        />
        <Worked
          title={"Notes on Poem A"}
          steps={[
            "Subject and speaker: a young person avoiding homework and watching a boy ride a bike.",
            "Structure: two stanzas of four lines, free verse; the second stanza has a turn, \"Outside\".",
            "Language: \"wish I knew his kind of flying\" is a metaphor for the freedom of riding. Tone: wistful, a little humorous. Message: the longing for freedom and joy in the middle of duty.",
          ]}
        />
        <Mistake>{"Starting to write before reading the whole poem twice. The ending often changes how you read the beginning."}</Mistake>
      </>,
    ),
  },
  {
    title: "Answering contextual questions",
    content: slide(
      <>
        <Rule>{"Read the marks and the command word. A word-choice question asks what a word suggests, a tone question asks for the attitude with proof, and an evaluation question asks whether something is effective and why. A strong answer is point, evidence (a quotation), explanation, and it uses your own words."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "The school bag leans against the wall",
            "with half a day of homework in it.",
            "I tell myself I'll start in a minute,",
            "and the minute is long and bright and slow.",
            "",
            "Outside, a boy on a borrowed bike",
            "rides through the puddles with his arms out,",
            "and I put my pencil down",
            "and wish I knew his kind of flying.",
        ]} />
        <FactCards
          cards={[
            { title: "Point", line1: "answer the question", line2: "in a sentence" },
            { title: "Evidence", line1: "quote a few", line2: "exact words" },
            { title: "Explain", line1: "what it shows,", line2: "in your own words" },
            { title: "Marks", line1: "one point per", line2: "mark, as a guide" },
          ]}
          aria={"Answering contextual questions. Give a point, then evidence by quoting a few exact words, then an explanation in your own words. The marks are a guide to how many points are needed."}
        />
        <Worked
          title={"Model answers on Poem A"}
          steps={[
            "Q (2): \"What does the word 'long' suggest in line 4?\" A: It suggests that time passes slowly (1) while the speaker is bored and does not want to work (1).",
            "Q (2): \"Comment on the tone of the last stanza.\" A: The tone is wistful (1), shown in \"wish I knew his kind of flying\", where the speaker wants the boy's freedom (1).",
            "Q (3): \"Is the metaphor in the last line effective? Explain.\" A: Yes (1). \"Flying\" makes the boy's ride feel free and light (1), and it contrasts with the speaker's heavy homework (1).",
          ]}
        />
        <Mistake>{"Retelling the poem in your own words. The question asks what the words do, so answer with evidence and an explanation."}</Mistake>
      </>,
    ),
  },
  {
    title: "Writing your own poem",
    content: slide(
      <>
        <Rule>{"A poem for this grade has four to eight stanzas. Plan: choose one small subject, collect specific details from your senses, decide the tone and message. Draft: use images and one or two figures of speech, choose a form. Revise: cut weak words, read aloud, check line breaks, and add a title that adds meaning."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "The school bag leans against the wall",
            "with half a day of homework in it.",
            "I tell myself I'll start in a minute,",
            "and the minute is long and bright and slow.",
            "",
            "Outside, a boy on a borrowed bike",
            "rides through the puddles with his arms out,",
            "and I put my pencil down",
            "and wish I knew his kind of flying.",
        ]} />
        <FactCards
          cards={[
            { title: "Plan", line1: "one small subject,", line2: "specific details" },
            { title: "Draft", line1: "images, a figure,", line2: "a chosen form" },
            { title: "Revise", line1: "cut weak words,", line2: "read aloud" },
            { title: "Present", line1: "a title that adds", line2: "meaning" },
          ]}
          aria={"Writing your own poem. Plan with one small subject and specific details. Draft with images, a figure of speech and a chosen form. Revise by cutting weak words and reading aloud. Present with a title that adds meaning."}
        />
        <Worked
          title={"Learn from Poem A"}
          steps={[
            "Subject: one small afternoon, not \"freedom\" in general.",
            "Specific details: the school bag, the puddles, the borrowed bike.",
            "Form: free verse in two stanzas, with a turn in the second stanza; you could use four to eight stanzas for a longer idea.",
          ]}
        />
        <Mistake>{"Writing about a big idea in general words. Begin with one real moment and let the details carry the idea."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Name the parts of a method for analysing a poem.",
          "What three parts should a strong answer have?",
          "Why is retelling the poem not an answer?",
          "Name two stages of writing a poem.",
        ]}
        answers={[
          "Title, speaker and subject, structure, language, sound, tone and mood, message.",
          "A point, evidence (a quotation) and an explanation in your own words.",
          "The question asks what the words do, not what happens.",
          "For example: planning and revising.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What should you do before you answer questions on a poem?",
    options: ["Count the stanzas", "Copy the first line", "Read the poem twice", "Write the title in capitals"],
    answer: "Read the poem twice",
    explanation: "Careful reading comes first.",
  },
  {
    prompt: "Which part of a poem do you look at to find the rhyme scheme?",
    options: ["The structure", "The title only", "The speaker", "The page number"],
    answer: "The structure",
    explanation: "Rhyme belongs to the structure of the poem.",
  },
  {
    prompt: "A question for 3 marks asks about a metaphor. What should your answer have?",
    options: ["One word", "Just the poet's name", "A story about the setting", "Three points"],
    answer: "Three points",
    explanation: "Marks show how many points are needed.",
  },
  {
    prompt: "Which part of an answer proves the point?",
    options: ["The poet's name", "A quotation from the poem", "The number of lines", "Your opinion of the title"],
    answer: "A quotation from the poem",
    explanation: "The quotation is the evidence.",
  },
  {
    prompt: "What does a word-choice question ask?",
    options: ["How many words there are", "Which word rhymes with it", "What a word suggests", "Who wrote the poem"],
    answer: "What a word suggests",
    explanation: "It asks what a word suggests.",
  },
  {
    prompt: "Which answer to 'What is the tone?' is best?",
    options: ["Wistful: 'wish I knew his kind of flying'", "Wistful: because I like the poem a great deal", "Sad: because the poem is quite long to read", "Funny: because the title is short as well"],
    answer: "Wistful: 'wish I knew his kind of flying'",
    explanation: "The best answer names the tone and proves it.",
  },
  {
    prompt: "What is wrong with an answer that only retells the poem?",
    options: ["It has no title at the top of it", "It is too long", "It is a quotation", "It does not explain the words"],
    answer: "It does not explain the words",
    explanation: "The question asks about the effect of the words.",
  },
  {
    prompt: "Which is the best title for a poem about one afternoon watching a boy on a bike?",
    options: ["The Poem About a Boy", "Borrowed Wheels", "About Life and Time", "A Poem for School"],
    answer: "Borrowed Wheels",
    explanation: "A good title adds meaning and is specific.",
  },
  {
    prompt: "Which first step helps you to write a good poem?",
    options: ["Copy a famous poem", "Use as many long words as possible", "Choose one small subject you know", "Write about the universe"],
    answer: "Choose one small subject you know",
    explanation: "A small subject lets you use specific details.",
  },
  {
    prompt: "What does revising a poem include?",
    options: ["Cutting weak words", "Adding more rhymes to it", "Making the poem longer", "Changing the topic of it"],
    answer: "Cutting weak words",
    explanation: "Revising improves the words and the sound.",
  },
  {
    prompt: "Which line is more specific?",
    options: ["The thing made a noise", "Something was happening in the kitchen", "It was a normal day at home", "The kettle hissed on the blue gas ring"],
    answer: "The kettle hissed on the blue gas ring",
    explanation: "Specific details make the poem vivid.",
  },
  {
    prompt: "In an evaluation question, what must you do?",
    options: ["List the words in it", "Judge it and give a reason", "Repeat the whole poem", "Say who wrote the poem and when"],
    answer: "Judge it and give a reason",
    explanation: "Evaluation needs a judgement with a reason.",
  },
  {
    prompt: "Why should a poem written for this grade have four to eight stanzas?",
    options: ["Because the rhymes need eight lines to work", "Because titles need stanzas", "It gives space to develop an idea", "Because poems rhyme in each stanza"],
    answer: "It gives space to develop an idea",
    explanation: "A longer poem develops the idea; the CAPS gives four to eight stanzas for Grade 9.",
  },
  {
    prompt: "What should the title of your own poem do?",
    options: ["Add meaning", "Repeat the first line", "Name the author", "Tell the whole story"],
    answer: "Add meaning",
    explanation: "A good title adds meaning.",
  },
];

const AnalysingAPoemAndWritingPoetry = () => (
  <CapsSubjectTopic
    title={"Analysing a Poem and Writing Your Own"}
    subtitle={"A method for analysis, answering contextual questions with model answers, and writing a poem of four to eight stanzas"}
    learnSteps={learnSteps}
    task={"gr9-analysing-a-poem-and-writing-poetry-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default AnalysingAPoemAndWritingPoetry;
