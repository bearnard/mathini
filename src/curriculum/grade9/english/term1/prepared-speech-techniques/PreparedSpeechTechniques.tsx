import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 9 English HL oral skills: prepared speech and presentation (persuasion, appeals, devices, delivery, rubric criteria, time arithmetic). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Planning a persuasive speech",
    content: slide(
      <>
        <Rule>In Grade 9 a prepared speech often tries to persuade. Know your audience and your purpose, then plan: an opening that hooks the audience, a body with a few strong points, each backed by a fact, an example or a reason, and a closing with a call to action. Use formal but lively language and keep to the time limit.</Rule>
        <FlowSteps
          aria={"Planning a persuasive speech. Know the audience and purpose, hook in the opening, make strong points with proof, and close with a call to action."}
          steps={[{ label: "Audience and purpose" }, { label: "Hook in the opening" }, { label: "Strong points with proof" }, { label: "Closing with call to action" }]}
        />
        <Worked
          title="Words for a {o.SPEECH9.minutes}-minute speech"
          steps={[
            <>At {o.SPEECH9.wpm} words a minute, {o.SPEECH9.minutes} minutes is {o.SPEECH9.minutes} × {o.SPEECH9.wpm} = {o.speech9Words()} words.</>,
            <>With {o.SPEECH9.cards} cue cards, you speak about {o.speech9Words()} ÷ {o.SPEECH9.cards} = {o.speech9WordsPerCard()} words from each card.</>,
            <>Each card holds only key words, not the whole {o.speech9WordsPerCard()} words.</>,
          ]}
        />
        <Mistake>Making many weak points. A few strong points with proof persuade better.</Mistake>
      </>,
    ),
  },
  {
    title: "Rhetorical devices and appeals",
    content: slide(
      <>
        <Rule>Persuasive speakers use devices. A rhetorical question needs no answer. Repetition and the rule of three give rhythm. Contrast sets two ideas against each other. An appeal to reason uses facts, an appeal to emotion uses feeling and stories, and an appeal to credibility shows that the speaker can be trusted. Use appeals fairly, without lying or frightening people.</Rule>
        <InfoTable
          cols={[{ title: "Appeal", w: 28 }, { title: "How it works", w: 72 }]}
          rows={[
            ["Reason", "facts, figures and logic"],
            ["Emotion", "stories and feelings"],
            ["Credibility", "shows trust and experience"],
          ]}
          aria={"A table of appeals. Reason uses facts, figures and logic. Emotion uses stories and feelings. Credibility shows trust and experience."}
        />
        <Worked
          title="Three appeals on one topic"
          steps={[
            <>Reason: &quot;Recycling one tin saves enough energy to power a small light for hours.&quot;</>,
            <>Emotion: a short story of a clean river that a community saved.</>,
            <>Credibility: &quot;I have run our school recycling team for two years.&quot;</>,
          ]}
        />
        <Mistake>Using only emotion with no facts. Combine reason, emotion and credibility.</Mistake>
      </>,
    ),
  },
  {
    title: "Delivery, timing and a rubric",
    content: slide(
      <>
        <Rule>Delivery includes voice (pace, volume, pause, tone), eye contact, posture and gestures. Pause before an important point. Speak to the whole room, and do not read from the cue cards. Practise aloud with a timer. A speech rubric usually looks at content, structure, language and devices, delivery, and time. Learn from the feedback of the teacher and your peers.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 30 }, { title: "What is judged", w: 70 }]}
          rows={[
            ["Content", "accurate, relevant points"],
            ["Structure", "opening, body and closing"],
            ["Language", "devices and suitable register"],
            ["Delivery", "voice, eye contact, posture"],
            ["Time", "within the limit"],
          ]}
          aria={"A table of rubric criteria. Content: accurate and relevant points. Structure: opening, body and closing. Language: devices and a suitable register. Delivery: voice, eye contact and posture. Time: within the limit."}
        />
        <Worked
          title="Using feedback"
          steps={[
            <>A peer says that you spoke too fast in the middle.</>,
            <>Mark two places on your cue cards to pause.</>,
            <>Practise again and ask the peer to listen for the pauses.</>,
          ]}
        />
        <Mistake>Ignoring feedback. Use it to choose one thing to improve at a time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the purpose of a call to action?</>,
          <>How many words fit in a 4-minute speech at 130 words a minute?</>,
          <>Name the three appeals.</>,
          <>Why use a pause before an important point?</>,
        ]}
        answers={[
          <>To tell the audience <strong>what to do</strong>.</>,
          <>4 × 130 = <strong>{o.speech9Words()} words</strong>.</>,
          <><strong>Reason, emotion and credibility</strong>.</>,
          <>It makes the point <strong>stand out</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does a persuasive speech try to do?",
    options: ["Teach the audience a song", "Convince the audience to agree or act", "List a set of names", "Entertain with a story only"],
    answer: "Convince the audience to agree or act",
    explanation: "Persuasion aims to change a view or an action.",
  },
  {
    prompt: "What should each strong point in a persuasive speech have?",
    options: ["A long list of words", "A joke only", "Nothing more than an opinion", "A fact, an example or a reason"],
    answer: "A fact, an example or a reason",
    explanation: "Proof makes the point convincing.",
  },
  {
    prompt: "What does the opening of a persuasive speech do?",
    options: ["Hooks the audience", "Ends the speech", "Lists the references", "Thanks the examiners"],
    answer: "Hooks the audience",
    explanation: "A hook makes people want to listen.",
  },
  {
    prompt: "A 4-minute speech is given at 130 words a minute. How many words is that?",
    options: ["134 words", "260 words", "520 words", "780 words"],
    answer: "520 words",
    explanation: "4 × 130 = 520 words.",
  },
  {
    prompt: "A 3-minute speech is given at 130 words a minute. How many words is that?",
    options: ["133 words", "390 words", "260 words", "520 words"],
    answer: "390 words",
    explanation: "3 × 130 = 390 words.",
  },
  {
    prompt: "A 520-word speech is spoken from 5 cue cards. About how many words come from each card?",
    options: ["26 words", "52 words", "520 words", "104 words"],
    answer: "104 words",
    explanation: "520 ÷ 5 = 104 words.",
  },
  {
    prompt: "Which is an appeal to reason?",
    options: ["Using facts and figures", "Telling a sad story", "Saying that you are trustworthy", "Shouting at the audience"],
    answer: "Using facts and figures",
    explanation: "Reason uses facts and logic.",
  },
  {
    prompt: "Which is an appeal to emotion?",
    options: ["Giving a table of figures", "Quoting a government list", "Telling a short moving story", "Listing the dates of a law"],
    answer: "Telling a short moving story",
    explanation: "Emotion works on feelings.",
  },
  {
    prompt: "Which is an appeal to credibility?",
    options: ["Giving a rhetorical question", "Showing your experience and honesty", "Repeating the last word", "Using a rule of three"],
    answer: "Showing your experience and honesty",
    explanation: "Credibility makes the audience trust the speaker.",
  },
  {
    prompt: "Which device sets two opposite ideas against each other?",
    options: ["Repetition", "Rule of three", "Greeting", "Contrast"],
    answer: "Contrast",
    explanation: "Contrast shows the difference between two ideas.",
  },
  {
    prompt: "Which device groups ideas in threes?",
    options: ["The rule of three", "Contrast", "A pause", "An agenda"],
    answer: "The rule of three",
    explanation: "Threes give rhythm and are easy to remember.",
  },
  {
    prompt: "Which is an unfair way to persuade?",
    options: ["Giving true facts", "Telling a true story", "Frightening people with lies", "Using a rhetorical question"],
    answer: "Frightening people with lies",
    explanation: "Persuasion must be honest and fair.",
  },
  {
    prompt: "Why do you pause before an important point?",
    options: ["To forget the rest", "To make the point stand out", "To end the speech early", "To read the cards aloud"],
    answer: "To make the point stand out",
    explanation: "A pause gives the point weight.",
  },
  {
    prompt: "What is a sensible use of peer feedback?",
    options: ["Ignore all of it", "Change the whole speech at once", "Argue with each comment", "Choose one thing to improve and practise it"],
    answer: "Choose one thing to improve and practise it",
    explanation: "Focus makes the practice effective.",
  },
];

const PreparedSpeechTechniques = () => (
  <CapsSubjectTopic
    title="Prepared Speech and Presentation Techniques"
    subtitle="Planning a persuasive speech, rhetorical devices and appeals, delivery and rubric criteria"
    learnSteps={learnSteps}
    task="gr9-prepared-speech-techniques-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default PreparedSpeechTechniques;
