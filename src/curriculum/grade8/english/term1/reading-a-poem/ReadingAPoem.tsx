import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g8-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a poem is made of",
    content: slide(
      <>
        <Rule>{"A poem is written in lines, and the lines are grouped into stanzas (also called verses). The speaker is the voice that talks in the poem, and it is not always the poet. The title often gives a hint about the subject."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Public domain: Alfred, Lord Tennyson, \"The Eagle\", 1851."} lines={[
            "He clasps the crag with crooked hands;",
            "Close to the sun in lonely lands,",
            "Ring'd with the azure world, he stands.",
            "",
            "The wrinkled sea beneath him crawls;",
            "He watches from his mountain walls,",
            "And like a thunderbolt he falls.",
        ]} />
        <FactCards
          cards={[
            { title: "Line", line1: "one row of words", line2: "in the poem" },
            { title: "Stanza", line1: "a group of lines,", line2: "a verse" },
            { title: "Speaker", line1: "the voice that", line2: "talks in the poem" },
            { title: "Title", line1: "often hints at", line2: "the subject" },
          ]}
          aria={"The parts of a poem. A line is one row of words. A stanza is a group of lines, also called a verse. The speaker is the voice that talks in the poem. The title often hints at the subject."}
        />
        <Worked
          title={"Look at Poem A"}
          steps={[
            "Poem A has 6 lines, in 2 stanzas of 3 lines each.",
            "The title is \"The Eagle\", and the subject is an eagle on a high rock above the sea.",
            "The speaker describes the eagle from outside, in the third person: \"he clasps\", \"he watches\".",
          ]}
        />
        <Mistake>{"Saying that the speaker is always the poet. The speaker is the voice in the poem, and it can be a child, an animal, a stranger or the poet."}</Mistake>
      </>,
    ),
  },
  {
    title: "Layout and reading aloud",
    content: slide(
      <>
        <Rule>{"The way a poem is laid out on the page is called its typography. Line breaks, spaces between stanzas, capital letters and punctuation all help you to read it. Pause at a comma, stop at a full stop, and carry on to the next line when the line ends without punctuation."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Public domain: Christina Rossetti, \"Who Has Seen the Wind?\", 1872."} lines={[
            "Who has seen the wind?",
            "Neither I nor you:",
            "But when the leaves hang trembling,",
            "The wind is passing through.",
            "",
            "Who has seen the wind?",
            "Neither you nor I:",
            "But when the trees bow down their heads,",
            "The wind is passing by.",
        ]} />
        <FactCards
          cards={[
            { title: "Line break", line1: "a short pause,", line2: "not always a stop" },
            { title: "Stanza gap", line1: "a longer pause", line2: "for a new thought" },
            { title: "Punctuation", line1: "shows where to", line2: "pause or stop" },
            { title: "Repeated line", line1: "the same words", line2: "begin each stanza" },
          ]}
          aria={"Layout and reading aloud. A line break means a short pause, not always a stop. A gap between stanzas means a longer pause for a new thought. Punctuation shows where to pause or stop. A repeated line may begin each stanza."}
        />
        <Worked
          title={"Look at Poem B"}
          steps={[
            "Poem B has 2 stanzas of 4 lines, and the first line of each stanza is the same question.",
            "Line 3, \"But when the leaves hang trembling,\" ends with a comma, so you pause briefly and carry on to line 4.",
            "The colon at the end of line 2 shows that the answer to the question follows.",
          ]}
        />
        <Mistake>{"Reading a poem as prose and stopping at every line end. Follow the punctuation: when a line ends without a stop, read on."}</Mistake>
      </>,
    ),
  },
  {
    title: "Literal and figurative meaning",
    content: slide(
      <>
        <Rule>{"The literal meaning is what the words say in a plain way. The figurative meaning is what the words suggest beyond the plain meaning, using comparison and other figures of speech. To find it, ask: what is being compared, and what does it make me see or feel?"}</Rule>
        <PoemBox label={"Poem C"} provenance={"Original poem written for this lesson."} lines={[
            "Mama's kettle sings before the sun,",
            "the street is a river of cold.",
            "My school bag leans on the door like a friend",
            "who has waited all night to go.",
        ]} />
        <FactCards
          cards={[
            { title: "Literal", line1: "what the words", line2: "plainly say" },
            { title: "Figurative", line1: "what the words", line2: "suggest or compare" },
            { title: "Ask", line1: "what is being", line2: "compared?" },
            { title: "Then ask", line1: "what does it make", line2: "me see or feel?" },
          ]}
          aria={"Literal and figurative meaning. Literal is what the words plainly say. Figurative is what the words suggest or compare. Ask what is being compared, and then ask what it makes you see or feel."}
        />
        <Worked
          title={"Look at Poem C"}
          steps={[
            "Literal: the kettle makes a whistling sound before the sun rises.",
            "Figurative: \"the kettle sings\" suggests that the sound is cheerful and warm, like a person singing.",
            "Figurative: \"the street is a river of cold\" suggests that the cold flows through the street and surrounds the speaker.",
          ]}
        />
        <Mistake>{"Taking a figurative line literally. The street is not really a river; the poet means that the cold seems to flow along it."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is a stanza?",
          "What is typography in a poem?",
          "What does it mean if a line ends with no punctuation?",
          "What is the difference between literal and figurative meaning?",
        ]}
        answers={[
          "A group of lines in a poem, also called a verse.",
          "The way the poem is laid out on the page.",
          "You read on to the next line without a full stop pause.",
          "Literal means what the words plainly say; figurative means what the words suggest beyond that.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many lines does this poem have? (A / marks the end of a line.) 'The moon hangs low / over the sleeping town. / A dog barks once / and then is still.'",
    options: ["2", "3", "4", "6"],
    answer: "4",
    explanation: "Count the lines: four.",
  },
  {
    prompt: "How many stanzas does this poem have? (A / marks the end of a line and // the end of a stanza.) 'Sun on the hill, / wind in the grass. // Dust on the road / where the lorries pass. // Night on the town, / stars on the glass.'",
    options: ["3", "2", "6", "4"],
    answer: "3",
    explanation: "Two lines in each stanza make three stanzas.",
  },
  {
    prompt: "What is a stanza?",
    options: ["A single word in a poem", "The voice that speaks", "The title of a poem", "A group of lines"],
    answer: "A group of lines",
    explanation: "A stanza is also called a verse.",
  },
  {
    prompt: "What is the speaker of a poem?",
    options: ["The person who printed the poem", "The voice in the poem", "The last line of the poem", "A group of lines in a stanza"],
    answer: "The voice in the poem",
    explanation: "The speaker may or may not be the poet.",
  },
  {
    prompt: "Which part of a poem often hints at its subject?",
    options: ["The page number", "The last word", "The title", "The margin"],
    answer: "The title",
    explanation: "The title often points to the subject.",
  },
  {
    prompt: "Who is the speaker in this poem? 'I dried the dishes for my gran, / and she told me of the farm.'",
    options: ["A child helping their gran", "The gran talking about her farm", "A farmer talking to a dog", "A teacher talking to a class"],
    answer: "A child helping their gran",
    explanation: "The speaker dries dishes for their gran.",
  },
  {
    prompt: "Which of these lines is figurative?",
    options: ["The classroom was on the second floor of the school", "The bell rang at ten o'clock", "Twenty learners sat down at their desks", "The classroom was a beehive of noise"],
    answer: "The classroom was a beehive of noise",
    explanation: "A classroom cannot literally be a beehive, so it is a comparison.",
  },
  {
    prompt: "What does the line 'her smile was sunshine' suggest?",
    options: ["Her smile was made of light from the Sun", "Her smile made others feel warm and happy", "She smiled when the sun came out", "Her teeth shone in the sunlight on sunny days"],
    answer: "Her smile made others feel warm and happy",
    explanation: "The comparison suggests warmth and happiness.",
  },
  {
    prompt: "What is typography in a poem?",
    options: ["The sounds of the words", "The story the poem tells", "The layout on the page", "The meaning of the title"],
    answer: "The layout on the page",
    explanation: "Typography is the layout of the poem.",
  },
  {
    prompt: "Why do many poems start each line with a capital letter?",
    options: ["It is a convention marking new lines", "Each line must be a full sentence", "Capital letters make words rhyme", "It makes the poem longer and neater to read"],
    answer: "It is a convention marking new lines",
    explanation: "It is a convention, and not every poem follows it.",
  },
  {
    prompt: "How should you read a line that ends without punctuation?",
    options: ["Stop completely and take a long breath as at a full stop", "Read it twice before going on", "Skip it and read the next stanza", "Carry on to the next line without a full stop pause"],
    answer: "Carry on to the next line without a full stop pause",
    explanation: "Read on when the sense continues.",
  },
  {
    prompt: "The line 'The wind bit my face' is figurative. What does it mean?",
    options: ["An animal bit my face and ran off", "The cold wind stung my face", "The wind was warm and soft", "The wind came from the sea"],
    answer: "The cold wind stung my face",
    explanation: "The wind did not bite; it hurt like a bite.",
  },
  {
    prompt: "Which word names one row of words in a poem?",
    options: ["Stanza", "Title", "Line", "Speaker"],
    answer: "Line",
    explanation: "A line is a single row of words.",
  },
  {
    prompt: "What is the subject of this poem? 'Slowly, slowly, the snail / carries his house across the path, / unhurried by the rain.'",
    options: ["A snail crossing a path", "A house in the rain", "A child walking to school", "A path built by workers"],
    answer: "A snail crossing a path",
    explanation: "The poem describes a snail carrying its shell across a path.",
  },
];

const ReadingAPoem = () => (
  <CapsSubjectTopic
    title={"Reading a Poem: What It Says and How"}
    subtitle={"Lines, stanzas, the speaker, layout, and literal and figurative meaning"}
    learnSteps={learnSteps}
    task={"gr8-reading-a-poem-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ReadingAPoem;
