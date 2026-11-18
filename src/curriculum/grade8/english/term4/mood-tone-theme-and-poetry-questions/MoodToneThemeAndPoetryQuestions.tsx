import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g8-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Mood, tone and theme",
    content: slide(
      <>
        <Rule>{"The mood is the feeling that a poem creates in the reader. The tone is the attitude of the speaker, such as gentle, angry, funny or sad. The theme is the main idea or message of the poem. Look at word choice, images and sounds to work them out."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "Tomorrow the bell will call my name,",
            "the bag stands packed beside the door.",
            "I count the hours like coins that drop",
            "and wish that there were many more.",
        ]} />
        <FactCards
          cards={[
            { title: "Mood", line1: "the feeling the poem", line2: "creates in the reader" },
            { title: "Tone", line1: "the speaker's", line2: "attitude" },
            { title: "Theme", line1: "the main idea", line2: "or message" },
            { title: "Clues", line1: "word choice, images,", line2: "and sound" },
          ]}
          aria={"Mood, tone and theme. Mood is the feeling the poem creates in the reader. Tone is the speaker's attitude. Theme is the main idea or message. Clues come from word choice, images and sound."}
        />
        <Worked
          title={"Look at Poem A"}
          steps={[
            "Mood: the packed bag, the bell and \"wish there were many more\" create a wistful, slightly sad feeling.",
            "Tone: the speaker sounds gentle and a little reluctant, as in \"count the hours like coins that drop\".",
            "Theme: the time of enjoyable holidays passes too quickly.",
          ]}
        />
        <Mistake>{"Confusing mood and tone. Mood is what the reader feels; tone is how the speaker sounds, so a poem can have a funny tone and a sad mood."}</Mistake>
      </>,
    ),
  },
  {
    title: "Answering contextual poetry questions",
    content: slide(
      <>
        <Rule>{"A contextual question asks about a poem printed in the paper. Read the poem twice, read the question and the marks, answer the question that is asked, quote the words that prove your answer, and explain in your own words. A question for 2 marks usually needs two points."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "Tomorrow the bell will call my name,",
            "the bag stands packed beside the door.",
            "I count the hours like coins that drop",
            "and wish that there were many more.",
        ]} />
        <FactCards
          cards={[
            { title: "Read", line1: "the poem twice", line2: "then the question" },
            { title: "Marks", line1: "2 marks, 2 points", line2: "usually" },
            { title: "Quote", line1: "use exact words", line2: "from the poem" },
            { title: "Explain", line1: "say what it shows", line2: "in your own words" },
          ]}
          aria={"Answering contextual questions. Read the poem twice and then the question. Check the marks, since two marks usually needs two points. Quote the exact words and explain them in your own words."}
        />
        <Worked
          title={"Model answers on Poem A"}
          steps={[
            "Question: \"Which figure of speech is used in line 3? Explain its effect.\" (2 marks)",
            "Answer: \"I count the hours like coins that drop\" is a simile (1). It compares the hours to coins, which shows that every hour is precious and they are running out (1).",
            "Question: \"What is the mood of the poem?\" Answer: wistful, because the speaker wishes that there were many more hours of holiday.",
          ]}
        />
        <Mistake>{"Writing only your opinion. An answer needs words from the poem as proof, followed by an explanation."}</Mistake>
      </>,
    ),
  },
  {
    title: "Writing your own poem",
    content: slide(
      <>
        <Rule>{"A poem for this grade usually has three to four stanzas. Choose a subject you know well, use your senses, add one or two figures of speech, think about rhyme or rhythm, choose a layout, and revise. Read it aloud and change any line that does not sound right."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Original poem written for this lesson, as a model for your own."} lines={[
            "Gogo's hands are warm brown bread,",
            "her laughter is a kettle's song.",
            "At night she tells the stars to sleep",
            "and the dark is not so long.",
        ]} />
        <FactCards
          cards={[
            { title: "Subject", line1: "choose something you", line2: "know and care about" },
            { title: "Senses", line1: "what you see, hear,", line2: "smell, touch, taste" },
            { title: "Figures", line1: "a simile or a", line2: "metaphor or two" },
            { title: "Revise", line1: "read aloud and", line2: "change weak lines" },
          ]}
          aria={"Writing your own poem. Choose a subject you know and care about. Use your senses. Add a simile or a metaphor or two. Revise by reading the poem aloud and changing weak lines."}
        />
        <Worked
          title={"Study the model, Poem B"}
          steps={[
            "Subject: a grandmother, written about with love.",
            "Figures: \"hands are warm brown bread\" is a metaphor, and \"her laughter is a kettle's song\" is a metaphor too.",
            "Sound: the second and fourth lines rhyme (song and long): ABCB.",
          ]}
        />
        <Mistake>{"Choosing a big idea such as \"love\" or \"life\" and writing in general words. Start with one small thing, such as one person, one place or one afternoon, and use specific details."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is the difference between mood and tone?",
          "What is a theme?",
          "What should you do before answering a contextual question?",
          "Name two things that help you write a good poem.",
        ]}
        answers={[
          "Mood is what the reader feels; tone is the speaker's attitude.",
          "The main idea or message of a poem.",
          "Read the poem twice, then read the question and the marks.",
          "For example: using your senses, and reading it aloud to revise.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the mood of a poem?",
    options: ["The attitude of the speaker", "The main message", "The feeling it creates", "The pattern of rhymes"],
    answer: "The feeling it creates",
    explanation: "Mood is the feeling the poem creates.",
  },
  {
    prompt: "What is the tone of a poem?",
    options: ["The speaker's attitude", "The feeling of the reader", "The number of stanzas", "The title of the poem"],
    answer: "The speaker's attitude",
    explanation: "Tone is the attitude of the speaker.",
  },
  {
    prompt: "What is the theme of a poem?",
    options: ["Its number of lines", "Its rhyme scheme", "Its title", "Its main idea"],
    answer: "Its main idea",
    explanation: "The theme is the big idea.",
  },
  {
    prompt: "The poem 'Dusty roads and dying fires / and empty rooms where music played' creates which mood?",
    options: ["Excited and joyful", "Lonely and sad", "Angry and loud", "Proud and cheerful"],
    answer: "Lonely and sad",
    explanation: "Empty rooms and dying fires suggest loneliness.",
  },
  {
    prompt: "Which words in 'The wind pushed me, shouted at me, slammed the door' suggest an angry tone?",
    options: ["The words wind, me and door", "The words me and at", "Pushed, shouted, slammed", "The wind and the door"],
    answer: "Pushed, shouted, slammed",
    explanation: "The harsh verbs show anger.",
  },
  {
    prompt: "The speaker says 'My brother thinks he's a king / when he wears his father's hat.' What is the tone?",
    options: ["Gently humorous", "Angry and bitter", "Fearful", "Formal and cold"],
    answer: "Gently humorous",
    explanation: "The speaker smiles at the brother's pretending.",
  },
  {
    prompt: "What is the theme of this poem? 'The seed is small, the rain is slow, / but green things grow where patient people wait.'",
    options: ["Seeds are small", "Rain is bad for plants", "People should move away", "Patience brings results"],
    answer: "Patience brings results",
    explanation: "The poem says that green things grow for patient people.",
  },
  {
    prompt: "What should you do first with a contextual poetry question?",
    options: ["Write the answer at once", "Read the poem twice", "Count the stanzas only", "Copy the first line"],
    answer: "Read the poem twice",
    explanation: "Read the poem carefully before answering.",
  },
  {
    prompt: "A question is worth 2 marks. What should your answer usually contain?",
    options: ["One word", "Just the poet's name", "Two points", "A long story about your life"],
    answer: "Two points",
    explanation: "Marks show how many points are needed.",
  },
  {
    prompt: "Which answer to 'What is the mood?' is best?",
    options: ["Sad, as 'the room is empty'", "Sad, because I like happy poems more than sad poems", "I think that it is sad", "The poem is long and the night is long"],
    answer: "Sad, as 'the room is empty'",
    explanation: "The best answer gives the mood and quotes the proof.",
  },
  {
    prompt: "Why should you quote words from the poem in your answer?",
    options: ["They make the answer longer", "They replace the explanation", "They are the only answer needed", "They prove your answer"],
    answer: "They prove your answer",
    explanation: "Quotations are evidence for your answer.",
  },
  {
    prompt: "Which is a good way to start writing a poem?",
    options: ["Copy a famous poem word for word", "Choose a small subject you know", "Write about the whole world at once", "Use long, difficult words"],
    answer: "Choose a small subject you know",
    explanation: "A small, known subject lets you use specific details.",
  },
  {
    prompt: "Why should you read your poem aloud?",
    options: ["To make it longer", "To change the title", "To hear weak lines", "To check the page number"],
    answer: "To hear weak lines",
    explanation: "Reading aloud shows weak rhythm and sound.",
  },
  {
    prompt: "Which line gives a specific detail instead of a general idea?",
    options: ["The bus smelled of oranges and wet coats", "Life is full of things that happen to people", "The day was a day like any other day", "Everything felt like something to me"],
    answer: "The bus smelled of oranges and wet coats",
    explanation: "Specific details show what the speaker sees and smells.",
  },
];

const MoodToneThemeAndPoetryQuestions = () => (
  <CapsSubjectTopic
    title={"Mood, Tone, Theme and Answering Poetry Questions"}
    subtitle={"What a poem makes us feel, the poet's attitude, the big idea, how to answer contextual questions and how to write a poem"}
    learnSteps={learnSteps}
    task={"gr8-mood-tone-theme-and-poetry-questions-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MoodToneThemeAndPoetryQuestions;
