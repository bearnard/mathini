import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 9 English HL oral skills: debate and panel discussion (evidence, rebuttal, fallacies, chair, time arithmetic). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Debate and panel discussion",
    content: slide(
      <>
        <Rule>A debate has two sides arguing a motion. A panel discussion has several speakers, often with different views, who talk about a topic with a chairperson, and then the audience asks questions. In both, the chairperson keeps order, gives turns and keeps the time. Speakers use evidence and respect the other speakers.</Rule>
        <InfoTable
          cols={[{ title: "Kind", w: 26 }, { title: "Who speaks", w: 40 }, { title: "Aim", w: 34 }]}
          rows={[
            ["Debate", "two teams, for and against", "win with arguments"],
            ["Panel", "several speakers, one chair", "share views and information"],
          ]}
          aria={"A table comparing a debate and a panel discussion. A debate has two teams, for and against, and aims to win with arguments. A panel has several speakers and one chair, and aims to share views and information."}
        />
        <Worked
          title="Time for a panel"
          steps={[
            <>{o.PANEL9.speakers} speakers of {o.PANEL9.minutesEach} minutes take {o.PANEL9.speakers} × {o.PANEL9.minutesEach} = {o.PANEL9.speakers * o.PANEL9.minutesEach} minutes.</>,
            <>Add {o.PANEL9.chairMinutes} minutes for the chair and {o.PANEL9.questionMinutes} minutes for questions.</>,
            <>The panel lasts {o.panelMinutes()} minutes.</>,
          ]}
        />
        <Mistake>Treating a panel as a fight. A panel shares views and information with respect.</Mistake>
      </>,
    ),
  },
  {
    title: "Evidence, rebuttal and questions",
    content: slide(
      <>
        <Rule>Strong speakers back up points with evidence: facts, figures, examples and the words of experts. Name the source when you can. In a rebuttal, answer the other speaker&apos;s argument by finding a gap, a weak example or a missing fact. In a panel, answer audience questions briefly and honestly, and say so if you do not know. Do not use fallacies, such as attacking the person or making up facts.</Rule>
        <FlowSteps
          aria={"A strong contribution. Make a claim, give evidence such as a fact, figure or expert, link it by explaining why it matters, and rebut the other side."}
          steps={[{ label: "Claim: say your point" }, { label: "Evidence: fact, figure or expert" }, { label: "Link: explain why it matters" }, { label: "Rebuttal: answer the other side" }]}
        />
        <Worked
          title="Weak and strong"
          steps={[
            <>Weak: &quot;Everybody knows that uniforms are bad.&quot;</>,
            <>Strong: &quot;A survey of 100 learners found that 60 want a choice of uniform.&quot;</>,
            <>The strong one gives evidence that can be checked.</>,
          ]}
        />
        <Mistake>Attacking the speaker instead of the argument. That is a fallacy and it weakens your case.</Mistake>
      </>,
    ),
  },
  {
    title: "The chairperson and the rubric",
    content: slide(
      <>
        <Rule>The chairperson introduces the topic and the speakers, gives each speaker a turn, keeps to the time, stops interruptions and thanks everyone. Speakers listen, take notes and respond to what was said. A rubric for a debate or panel usually looks at content and evidence, argument and rebuttal, delivery, courtesy and listening, and the chair&apos;s control.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 32 }, { title: "What is judged", w: 68 }]}
          rows={[
            ["Evidence", "facts, figures, sources"],
            ["Argument", "logic and rebuttal"],
            ["Delivery", "voice, eye contact, language"],
            ["Courtesy", "turn-taking and respect"],
            ["Chair", "order, fairness and time"],
          ]}
          aria={"A table of debate and panel criteria. Evidence: facts, figures and sources. Argument: logic and rebuttal. Delivery: voice, eye contact and language. Courtesy: turn-taking and respect. Chair: order, fairness and time."}
        />
        <Worked
          title="A chair keeps order"
          steps={[
            <>Chair: &quot;Thank you. Now we will hear from the next speaker.&quot;</>,
            <>If two people talk at once: &quot;One speaker at a time, please.&quot;</>,
            <>At the end: &quot;Thank you to all the speakers and to the audience.&quot;</>,
          ]}
        />
        <Mistake>A chair who takes a side. The chair stays fair to every speaker.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How is a panel different from a debate?</>,
          <>A panel has 4 speakers of 3 minutes each. How long do they speak?</>,
          <>What should a strong point have?</>,
          <>What does a fair chair do?</>,
        ]}
        answers={[
          <>Several speakers <strong>share views</strong> with a chair.</>,
          <>4 × 3 = <strong>{o.PANEL9.speakers * o.PANEL9.minutesEach} minutes</strong>.</>,
          <><strong>Evidence</strong> that can be checked.</>,
          <>Gives <strong>every speaker a turn</strong> and keeps order.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a panel discussion?",
    options: ["Two teams argue a motion for and against", "Several speakers talk about a topic with a chair", "One person reads out a long prepared speech", "A written test on a topic that is set"],
    answer: "Several speakers talk about a topic with a chair",
    explanation: "A panel shares views and information.",
  },
  {
    prompt: "What is the aim of a debate?",
    options: ["To share only views", "To read a text aloud", "To take minutes of a meeting", "To win with strong arguments"],
    answer: "To win with strong arguments",
    explanation: "The sides try to convince the judges and the audience.",
  },
  {
    prompt: "Who keeps the time and order in a panel?",
    options: ["The chairperson", "Each speaker alone", "The audience", "The first speaker only"],
    answer: "The chairperson",
    explanation: "The chair gives turns and keeps the time.",
  },
  {
    prompt: "Four panellists speak for 3 minutes each. What is the total speaking time?",
    options: ["7 minutes", "10 minutes", "12 minutes", "24 minutes"],
    answer: "12 minutes",
    explanation: "4 × 3 = 12 minutes.",
  },
  {
    prompt: "The speakers talk for 12 minutes, the chair 2 minutes and questions 10 minutes. How long is the panel?",
    options: ["22 minutes", "24 minutes", "14 minutes", "36 minutes"],
    answer: "24 minutes",
    explanation: "12 + 2 + 10 = 24 minutes.",
  },
  {
    prompt: "Three panellists speak for 5 minutes each. What is their total speaking time?",
    options: ["8 minutes", "35 minutes", "20 minutes", "15 minutes"],
    answer: "15 minutes",
    explanation: "3 × 5 = 15 minutes.",
  },
  {
    prompt: "What is evidence in a debate?",
    options: ["A fact, figure or example that supports a point", "An opinion that has no proof to back it up", "A joke that is told to relax the audience", "A list of the names of all the speakers"],
    answer: "A fact, figure or example that supports a point",
    explanation: "Evidence makes a point convincing.",
  },
  {
    prompt: "Which statement has evidence?",
    options: ["Everybody knows very well that it is wrong.", "I just feel in my heart that it is silly.", "A survey of 100 learners found that 60 want a choice.", "It was always done that way in the past."],
    answer: "A survey of 100 learners found that 60 want a choice.",
    explanation: "A survey result can be checked.",
  },
  {
    prompt: "What is a rebuttal?",
    options: ["A greeting that is made to the audience", "An answer that shows the other side's point is weak", "A thank you that is said to the chair", "A list of your own points for the debate"],
    answer: "An answer that shows the other side's point is weak",
    explanation: "A rebuttal answers the opposing argument.",
  },
  {
    prompt: "Which is a fallacy?",
    options: ["Using a fact and giving its source clearly", "Answering a point with some real evidence", "Asking a polite question about the topic", "Attacking the speaker instead of the argument"],
    answer: "Attacking the speaker instead of the argument",
    explanation: "Attacking the person ignores the real argument.",
  },
  {
    prompt: "What should you say if you do not know the answer to a question?",
    options: ["Say honestly that you do not know", "Make up an answer that sounds good", "Refuse to speak again for the evening", "Change the topic and hope for the best"],
    answer: "Say honestly that you do not know",
    explanation: "Honesty is important for credibility.",
  },
  {
    prompt: "What does the chairperson do at the start of a panel?",
    options: ["Argues for one of the sides", "Reads out the minutes", "Introduces the topic and the speakers", "Takes a vote on the rules"],
    answer: "Introduces the topic and the speakers",
    explanation: "The chair opens the discussion.",
  },
  {
    prompt: "What should a chairperson do if two people talk at once?",
    options: ["Join in the argument", "Ask for one speaker at a time", "End the panel at once", "Choose the louder speaker"],
    answer: "Ask for one speaker at a time",
    explanation: "The chair keeps order.",
  },
  {
    prompt: "Which action is courteous at a panel discussion?",
    options: ["Interrupting with your own point", "Laughing at the other speakers", "Whispering to your neighbour", "Waiting for your turn and listening"],
    answer: "Waiting for your turn and listening",
    explanation: "Courtesy keeps the discussion fair.",
  },
];

const DebatePanelDiscussion = () => (
  <CapsSubjectTopic
    title="Debate and Panel Discussion"
    subtitle="Debate and panel formats, evidence, rebuttal, fallacies, the chair and rubric criteria"
    learnSteps={learnSteps}
    task="gr9-debate-panel-discussion-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default DebatePanelDiscussion;
