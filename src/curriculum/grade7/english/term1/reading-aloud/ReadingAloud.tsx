import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 7 English HL oral skills: reading aloud (pace, volume, pause, tone, expression, eye contact, rubric criteria). General CAPS-level criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Why reading aloud is a skill",
    content: slide(
      <>
        <Rule>Reading aloud means saying a written text out loud so that listeners understand and enjoy it. A good reader is accurate (says each word correctly), fluent (reads smoothly, not word by word) and expressive (the voice shows the meaning and the feeling). Read the text silently first, so that you know the meaning and the hard words before you read it to others.</Rule>
        <FlowSteps
          aria={"The steps of preparing to read aloud. Read the text silently first, mark pauses and hard words, practise it aloud, then read it to the listeners."}
          steps={[{ label: "Read it silently first" }, { label: "Mark pauses and hard words" }, { label: "Practise it aloud" }, { label: "Read it to the listeners" }]}
        />
        <Worked
          title="A passage of {o.READ.words} words"
          steps={[
            <>At a steady {o.READ.wpm} words a minute, {o.READ.words} words take {o.READ.words} ÷ {o.READ.wpm} = {o.readMinutes()} minutes.</>,
            <>If you read much faster, listeners cannot follow every word.</>,
            <>So practise with a timer and keep a steady pace.</>,
          ]}
        />
        <Mistake>Thinking that the fastest reader is the best reader. Listeners need time to understand, so a clear, steady pace is better.</Mistake>
      </>,
    ),
  },
  {
    title: "Voice: pace, volume, pause and tone",
    content: slide(
      <>
        <Rule>Four parts of the voice make reading aloud clear. Pace is how fast you read. Volume is how loud you are, and it must reach the back of the room. A pause is a short stop that gives listeners time to think, and it usually comes at a comma or a full stop. Tone is the feeling in the voice, such as excited, sad or serious.</Rule>
        <InfoTable
          cols={[{ title: "Voice skill", w: 38 }, { title: "What to do", w: 62 }]}
          rows={[
            ["Pace", "steady, slower for hard parts"],
            ["Volume", "loud enough for the back row"],
            ["Pause", "stop at commas and full stops"],
            ["Tone", "match the mood of the text"],
          ]}
          aria={"A table of voice skills. Pace: steady, slower for hard parts. Volume: loud enough for the back row. Pause: stop at commas and full stops. Tone: match the mood of the text."}
        />
        <Worked
          title="Match the voice to the text"
          steps={[
            <>An exciting chase: a quicker pace and a rising tone.</>,
            <>A sad ending: a slower pace, a softer volume and a lower tone.</>,
            <>A list of facts: a clear voice with a short pause after each item.</>,
          ]}
        />
        <Mistake>Reading everything in the same flat voice. Change your pace and tone to match the meaning of the text.</Mistake>
      </>,
    ),
  },
  {
    title: "Expression, eye contact and a rubric",
    content: slide(
      <>
        <Rule>Expression means showing the meaning with your voice and your face. Look up from the page now and then, so that you make eye contact with listeners. Stand straight and hold the page still. A rubric is a table of criteria that tells you how your reading will be judged, and it usually looks at accuracy, fluency, expression, voice and eye contact.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 34 }, { title: "A strong reader", w: 66 }]}
          rows={[
            ["Accuracy", "says the words correctly"],
            ["Fluency", "reads smoothly in phrases"],
            ["Expression", "voice shows the feeling"],
            ["Eye contact", "looks up at the listeners"],
          ]}
          aria={"A table of rubric criteria for reading aloud. Accuracy: says the words correctly. Fluency: reads smoothly in phrases. Expression: the voice shows the feeling. Eye contact: looks up at the listeners."}
        />
        <Worked
          title="Using a rubric to improve"
          steps={[
            <>Read the rubric before you practise, so that you know what is judged.</>,
            <>Practise one criterion at a time, such as pauses or eye contact.</>,
            <>Ask a friend to listen and say what was clear and what was not.</>,
          ]}
        />
        <Mistake>Staring at the page the whole time. Look up often, so that the listeners feel that you are speaking to them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What are the four steps of preparing to read aloud?</>,
          <>A passage has 240 words and you read 120 words a minute. How long does it take?</>,
          <>Why do you pause at a full stop?</>,
          <>Name two criteria on a reading-aloud rubric.</>,
        ]}
        answers={[
          <>Read silently, mark the text, practise aloud, then read to the listeners.</>,
          <>240 ÷ 120 = <strong>{o.readMinutes()} minutes</strong>.</>,
          <>To give the <strong>listeners time to think</strong>.</>,
          <>For example <strong>fluency</strong> and <strong>eye contact</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does a good reader of a text aloud do?",
    options: ["Reads as quickly as possible each time", "Reads accurately, smoothly and with feeling", "Reads in a whisper from start to end", "Reads only the hard words in the text"],
    answer: "Reads accurately, smoothly and with feeling",
    explanation: "A good reader is accurate, fluent and expressive.",
  },
  {
    prompt: "Why should you read a text silently before you read it aloud?",
    options: ["To avoid having to practise at all", "To memorise it for the whole class", "To make the text a lot shorter", "To learn its meaning and the hard words"],
    answer: "To learn its meaning and the hard words",
    explanation: "Knowing the meaning helps you read with the right feeling.",
  },
  {
    prompt: "What does \"fluent\" mean in reading aloud?",
    options: ["Reading smoothly, not word by word", "Reading the loudest of all", "Reading with long gaps in the lines", "Reading only the first line"],
    answer: "Reading smoothly, not word by word",
    explanation: "Fluent reading flows in phrases.",
  },
  {
    prompt: "What is pace?",
    options: ["How loud you read", "How tall you stand", "How fast you read", "How long the text is"],
    answer: "How fast you read",
    explanation: "Pace is the speed of reading.",
  },
  {
    prompt: "Who must be able to hear you when you read aloud?",
    options: ["Only the teacher at the front", "Everyone, including the back row", "Only the friends beside you", "Nobody, if the text is short"],
    answer: "Everyone, including the back row",
    explanation: "Volume must reach the whole room.",
  },
  {
    prompt: "Where do you usually pause when you read aloud?",
    options: ["In the middle of every word", "Only at the end of a page", "After every single letter", "At commas and full stops"],
    answer: "At commas and full stops",
    explanation: "Pauses follow the punctuation.",
  },
  {
    prompt: "A text describes a sad ending. How should the tone of your voice sound?",
    options: ["Softer and slower", "Louder and faster", "Excited and joking", "Rude and sharp"],
    answer: "Softer and slower",
    explanation: "The tone must match the mood.",
  },
  {
    prompt: "You read 120 words a minute. How many minutes does a 240-word passage need?",
    options: ["1 minute", "4 minutes", "2 minutes", "20 minutes"],
    answer: "2 minutes",
    explanation: "240 ÷ 120 = 2 minutes.",
  },
  {
    prompt: "A passage of 360 words is read at 120 words a minute. How many minutes will it take?",
    options: ["2 minutes", "3 minutes", "4 minutes", "30 minutes"],
    answer: "3 minutes",
    explanation: "360 ÷ 120 = 3 minutes.",
  },
  {
    prompt: "What is eye contact when you read aloud?",
    options: ["Closing your eyes while you speak", "Staring at one word on the page", "Looking at the floor throughout", "Looking up at the listeners from time to time"],
    answer: "Looking up at the listeners from time to time",
    explanation: "Eye contact keeps the listeners engaged.",
  },
  {
    prompt: "What is a rubric?",
    options: ["A table of criteria for judging your work", "A list of the rules of a school game", "A type of poem with a fixed rhyme", "A cue card with a few key words"],
    answer: "A table of criteria for judging your work",
    explanation: "A rubric shows what is assessed and how.",
  },
  {
    prompt: "Which habit makes a reading difficult to follow?",
    options: ["Using pauses at the end of sentences", "Reading at a steady pace", "Racing through the words without pauses", "Looking up from the page"],
    answer: "Racing through the words without pauses",
    explanation: "Without pauses, listeners cannot follow the meaning.",
  },
  {
    prompt: "Which is the best way to practise reading aloud?",
    options: ["Read it silently one single time only", "Read it aloud several times and listen to yourself", "Read only the first line of it aloud", "Ask a friend to read it out for you"],
    answer: "Read it aloud several times and listen to yourself",
    explanation: "Practice builds accuracy and fluency.",
  },
  {
    prompt: "What can you do when you find a hard word while practising?",
    options: ["Skip it every single time", "Replace it with any other word", "Cross out the whole sentence", "Look up its meaning and say it slowly"],
    answer: "Look up its meaning and say it slowly",
    explanation: "Checking hard words helps you to read accurately.",
  },
];

const ReadingAloud = () => (
  <CapsSubjectTopic
    title="Reading Aloud"
    subtitle="Preparing, voice skills, expression and what a reading-aloud rubric looks at"
    learnSteps={learnSteps}
    task="gr7-reading-aloud-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={7}
  />
);

export default ReadingAloud;
