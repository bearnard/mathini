import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 8 English HL oral skills: prepared speech (structure, techniques, delivery, time arithmetic, rubric criteria). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Structure: opening, body and closing",
    content: slide(
      <>
        <Rule>A prepared speech is planned and practised before you give it. It has an opening that greets the audience and catches their attention, a body with your main points, and a closing that sums up and leaves a final thought. Know your purpose (to inform, to persuade or to entertain) and your audience before you write.</Rule>
        <FlowSteps
          aria={"The structure of a prepared speech. Opening: greet and catch attention. Body: three main points with examples. Closing: sum up and leave a final thought."}
          steps={[{ label: "Opening: greet and catch attention" }, { label: "Body: three main points with examples" }, { label: "Closing: sum up, final thought" }]}
        />
        <Worked
          title="Planning a {o.SPEECH8.minutes}-minute speech"
          steps={[
            <>At {o.SPEECH8.wpm} words a minute, {o.SPEECH8.minutes} minutes is {o.SPEECH8.minutes} × {o.SPEECH8.wpm} = {o.speech8Words()} words.</>,
            <>An opening of {o.SPEECH8.openingWords} words and a closing of {o.SPEECH8.closingWords} words leave {o.speech8Words()} − {o.SPEECH8.openingWords} − {o.SPEECH8.closingWords} = {o.speech8BodyWords()} words for the body.</>,
            <>With three points, that is a good length for each point and its example.</>,
          ]}
        />
        <Mistake>Writing the speech without thinking about the time. Work out how many words fit, then plan the parts.</Mistake>
      </>,
    ),
  },
  {
    title: "Techniques that hold attention",
    content: slide(
      <>
        <Rule>Speech techniques make a speech memorable. A rhetorical question is asked for effect and needs no answer. Repetition stresses an idea. The rule of three groups ideas in threes. A personal story or a surprising fact catches attention, and a call to action tells the audience what to do. Use these in moderation, so that they help your message.</Rule>
        <InfoTable
          cols={[{ title: "Technique", w: 34 }, { title: "Example", w: 66 }]}
          rows={[
            ["Rhetorical question", "Who wants a dirty school?"],
            ["Repetition", "We can. We must. We will."],
            ["Rule of three", "clean, safe and happy"],
            ["Call to action", "Start today: pick up one bag."],
          ]}
          aria={"A table of speech techniques. Rhetorical question, for example: who wants a dirty school? Repetition, for example: we can, we must, we will. Rule of three, for example: clean, safe and happy. Call to action, for example: start today, pick up one bag."}
        />
        <Worked
          title="Choose techniques for a purpose"
          steps={[
            <>To persuade: a rhetorical question and a call to action.</>,
            <>To inform: clear facts, with the rule of three to help people remember.</>,
            <>To entertain: a short personal story told with a lively voice.</>,
          ]}
        />
        <Mistake>Using every technique in one speech. Too many tricks hide the message.</Mistake>
      </>,
    ),
  },
  {
    title: "Delivery and rubric criteria",
    content: slide(
      <>
        <Rule>Delivery is how you give the speech. Stand straight, make eye contact, use your voice (pace, volume, pause, tone) and use gestures that match your words. Use cue cards with key words only, and do not read the speech word for word. Rubric criteria for a speech usually look at content, organisation, language, voice and body language, and time.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 30 }, { title: "What is judged", w: 70 }]}
          rows={[
            ["Content", "facts, ideas and examples"],
            ["Organisation", "opening, body and closing"],
            ["Language", "suitable words for the audience"],
            ["Delivery", "voice, eye contact, gestures"],
            ["Time", "within the time limit"],
          ]}
          aria={"A table of speech rubric criteria. Content: facts, ideas and examples. Organisation: opening, body and closing. Language: suitable words for the audience. Delivery: voice, eye contact and gestures. Time: within the time limit."}
        />
        <Worked
          title="Practise and time yourself"
          steps={[
            <>Say the speech aloud to a friend and a timer.</>,
            <>If it takes longer than {o.SPEECH8.minutes} minutes, cut an example.</>,
            <>If it is much shorter, add detail to one point.</>,
          ]}
        />
        <Mistake>Reading the whole speech from the paper. Use cue cards, so that you can look at the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the three parts of a prepared speech.</>,
          <>How many words fit in a 3-minute speech at 120 words a minute?</>,
          <>What should a cue card hold?</>,
          <>What does a call to action do?</>,
        ]}
        answers={[
          <><strong>Opening, body and closing</strong>.</>,
          <>3 × 120 = <strong>{o.speech8Words()} words</strong>.</>,
          <><strong>Key words</strong> only.</>,
          <>It tells the audience <strong>what to do</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a prepared speech?",
    options: ["A speech made up on the spot", "A speech that is planned and practised", "A speech that is read by a teacher", "A speech with no audience"],
    answer: "A speech that is planned and practised",
    explanation: "Preparation includes planning and practice.",
  },
  {
    prompt: "What does the opening of a speech do?",
    options: ["Lists all of the facts in one long go", "Says goodbye to the audience and sits down", "Thanks the people for waiting so long", "Greets the audience and catches attention"],
    answer: "Greets the audience and catches attention",
    explanation: "A good opening makes people want to listen.",
  },
  {
    prompt: "What belongs in the body of a speech?",
    options: ["The main points with examples", "Only a greeting to the audience", "Only the thank-you at the end", "A list of the audience's names"],
    answer: "The main points with examples",
    explanation: "The body develops the points.",
  },
  {
    prompt: "What does the closing of a speech do?",
    options: ["Starts a new topic for debate", "Repeats the greeting in full", "Sums up and leaves a final thought", "Asks the audience to leave"],
    answer: "Sums up and leaves a final thought",
    explanation: "A closing gives a strong ending.",
  },
  {
    prompt: "Which are three purposes of a speech?",
    options: ["To start, to stop and to wait", "To inform, to persuade and to entertain", "To read, to write and to spell", "To sing, to dance and to act"],
    answer: "To inform, to persuade and to entertain",
    explanation: "The purpose shapes the words that you choose.",
  },
  {
    prompt: "A speech lasts 3 minutes at 120 words a minute. How many words is that?",
    options: ["123 words", "240 words", "480 words", "360 words"],
    answer: "360 words",
    explanation: "3 × 120 = 360 words.",
  },
  {
    prompt: "The opening has 45 words and the closing has 45 words in a 360-word speech. How many words are left for the body?",
    options: ["270 words", "315 words", "225 words", "360 words"],
    answer: "270 words",
    explanation: "360 − 45 − 45 = 270 words.",
  },
  {
    prompt: "A 4-minute speech is given at 120 words a minute. How many words is that?",
    options: ["124 words", "360 words", "480 words", "600 words"],
    answer: "480 words",
    explanation: "4 × 120 = 480 words.",
  },
  {
    prompt: "Which sentence is a rhetorical question?",
    options: ["What time is the bell?", "Who would not want a safe school?", "Where is the hall?", "How many learners are in Grade 8?"],
    answer: "Who would not want a safe school?",
    explanation: "It is asked for effect and needs no answer.",
  },
  {
    prompt: "Which example uses the rule of three?",
    options: ["Clean and safe", "Cleaner than a clean thing", "Cleaning, cleaned", "Clean, safe and happy"],
    answer: "Clean, safe and happy",
    explanation: "Ideas are grouped in threes.",
  },
  {
    prompt: "Which technique stresses an idea by saying it again?",
    options: ["Repetition", "Rhetorical question", "Call to action", "Introduction"],
    answer: "Repetition",
    explanation: "Repetition makes an idea stay in the mind.",
  },
  {
    prompt: "What should you write on cue cards?",
    options: ["The whole speech word for word", "The names of the audience", "Key words that remind you of your points", "The marks you hope to get"],
    answer: "Key words that remind you of your points",
    explanation: "Cue cards help you to look at the audience.",
  },
  {
    prompt: "Which delivery habit helps a speaker?",
    options: ["Looking at the floor the whole time", "Making eye contact with the audience", "Turning your back to the audience", "Speaking as quietly as possible"],
    answer: "Making eye contact with the audience",
    explanation: "Eye contact keeps the audience interested.",
  },
  {
    prompt: "Your speech takes 5 minutes but the limit is 3 minutes. What should you do?",
    options: ["Speak much faster", "Leave out the closing", "Ignore the time limit", "Cut an example or a point"],
    answer: "Cut an example or a point",
    explanation: "A speech must keep to its time.",
  },
];

const PreparedSpeech = () => (
  <CapsSubjectTopic
    title="Prepared Speech: Structure, Delivery and Rubric"
    subtitle="Opening, body and closing, speech techniques, delivery and rubric criteria"
    learnSteps={learnSteps}
    task="gr8-prepared-speech-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default PreparedSpeech;
