import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 7 English HL oral skills: debate (motion, roles, argument, rebuttal, courtesy, rubric criteria). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What is a debate?",
    content: slide(
      <>
        <Rule>A debate is a structured discussion about a motion. The motion is a statement that two teams argue about, such as: This house believes that school uniforms should be compulsory. The proposition (for) team supports the motion, and the opposition (against) team argues against it. A chairperson keeps order, and a timekeeper keeps the time.</Rule>
        <InfoTable
          cols={[{ title: "Role", w: 32 }, { title: "What the person does", w: 68 }]}
          rows={[
            ["Proposition", "argues for the motion"],
            ["Opposition", "argues against the motion"],
            ["Chairperson", "keeps order, gives turns"],
            ["Timekeeper", "signals the time"],
          ]}
          aria={"A table of debate roles. Proposition: argues for the motion. Opposition: argues against the motion. Chairperson: keeps order and gives turns. Timekeeper: signals the time."}
        />
        <Worked
          title="Time in a classroom debate"
          steps={[
            <>Each team has {o.DEBATE7.speakersPerSide} speakers of {o.DEBATE7.minutesEach} minutes each.</>,
            <>One team speaks for {o.DEBATE7.speakersPerSide} × {o.DEBATE7.minutesEach} = {o.sideMinutes()} minutes.</>,
            <>Two teams and a one-minute rebuttal each: 2 × {o.sideMinutes()} + 2 × {o.DEBATE7.rebuttalMinutes} = {o.debateMinutes()} minutes.</>,
          ]}
        />
        <Mistake>Thinking that the team must believe the motion. You argue the side that you are given, using good reasons.</Mistake>
      </>,
    ),
  },
  {
    title: "Building an argument",
    content: slide(
      <>
        <Rule>A strong argument has a point, a reason and an example. Make your point clearly, say why it is true, and give a fact or an example. Plan three points in order, with the strongest last. Use linking words such as firstly, in addition and finally. A rebuttal answers the other team&apos;s points by showing that they are weak, wrong or not enough.</Rule>
        <FlowSteps
          aria={"How to build an argument. The point says what you believe. The reason says why it is true. The example gives a fact or a case."}
          steps={[{ label: "Point: say what you believe" }, { label: "Reason: say why it is true" }, { label: "Example: give a fact or case" }]}
        />
        <Worked
          title="One argument about uniforms"
          steps={[
            <>Point: uniforms save families money on clothes.</>,
            <>Reason: everyone wears the same, so no one needs many outfits.</>,
            <>Example: a family with two children buys two sets instead of many different outfits.</>,
          ]}
        />
        <Mistake>Making a point without a reason. A point such as &quot;Uniforms are good&quot; needs a reason and an example.</Mistake>
      </>,
    ),
  },
  {
    title: "Courtesy, voice and rubric",
    content: slide(
      <>
        <Rule>Debate with respect. Attack the argument, not the person. Do not interrupt, and speak when the chairperson gives you the turn. Address the chairperson and the audience. Use a firm voice and eye contact, and keep notes on cue cards. A debate rubric usually looks at content, argument, rebuttal, voice and teamwork.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 30 }, { title: "What is judged", w: 70 }]}
          rows={[
            ["Content", "facts, reasons and examples"],
            ["Argument", "clear points in order"],
            ["Rebuttal", "answers the other team"],
            ["Delivery", "voice, eye contact, courtesy"],
          ]}
          aria={"A table of debate criteria. Content: facts, reasons and examples. Argument: clear points in order. Rebuttal: answers the other team. Delivery: voice, eye contact and courtesy."}
        />
        <Worked
          title="A polite rebuttal"
          steps={[
            <>Say: &quot;The opposition said that uniforms are costly.&quot;</>,
            <>Answer: &quot;But a second-hand uniform costs less than many outfits.&quot;</>,
            <>Notice that you answer the point and do not insult the speaker.</>,
          ]}
        />
        <Mistake>Shouting or insulting the other team. A good debater is firm and polite.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which team argues against the motion?</>,
          <>What are the three parts of a strong argument?</>,
          <>Two teams of 3 speakers speak 2 minutes each. How long do they speak in all?</>,
          <>Why must you not interrupt another speaker?</>,
        ]}
        answers={[
          <>The <strong>opposition</strong> team.</>,
          <>A <strong>point, a reason and an example</strong>.</>,
          <>2 × 3 × 2 = <strong>12 minutes</strong>.</>,
          <>It is <strong>discourteous</strong>, and the chairperson gives the turns.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a debate?",
    options: ["A song that two groups sing", "A structured discussion on a motion", "A play with only one actor", "A written test on grammar"],
    answer: "A structured discussion on a motion",
    explanation: "Two sides argue for and against a motion.",
  },
  {
    prompt: "What is a motion?",
    options: ["A speed that a speaker keeps", "A list of speakers' names", "A note that is passed along", "A statement that the teams argue about"],
    answer: "A statement that the teams argue about",
    explanation: "The motion is the topic of the debate.",
  },
  {
    prompt: "Which team supports the motion?",
    options: ["The proposition", "The opposition", "The audience", "The timekeeper"],
    answer: "The proposition",
    explanation: "Proposition means for the motion.",
  },
  {
    prompt: "What does the chairperson do?",
    options: ["Argues for one of the teams", "Writes the speeches for them", "Keeps order and gives the speakers turns", "Votes for the best team alone"],
    answer: "Keeps order and gives the speakers turns",
    explanation: "The chairperson controls the debate.",
  },
  {
    prompt: "What does the timekeeper do?",
    options: ["Decides who wins the debate", "Signals how much time is left", "Speaks first for the proposition", "Reads out the motion again"],
    answer: "Signals how much time is left",
    explanation: "Speeches have time limits.",
  },
  {
    prompt: "A strong argument is made of which three parts?",
    options: ["A title, a date and a name", "A rhyme, a verse and a chorus", "A greeting, a closing and a sign", "A point, a reason and an example"],
    answer: "A point, a reason and an example",
    explanation: "Each point needs support.",
  },
  {
    prompt: "Which is the best order for three points in a debate?",
    options: ["The strongest point last", "The weakest point only", "All the points mixed together", "The strongest point left out"],
    answer: "The strongest point last",
    explanation: "A strong ending leaves an impression.",
  },
  {
    prompt: "What is a rebuttal?",
    options: ["A greeting that is made to the audience", "A thank you that is said to the chair", "An answer to the other team's points", "A list of your own points for the debate"],
    answer: "An answer to the other team's points",
    explanation: "A rebuttal shows that the other points are weak or wrong.",
  },
  {
    prompt: "Which linking words help a speaker to order the points?",
    options: ["Maybe, perhaps and possibly", "Firstly, in addition and finally", "Yes, no and thank you", "Good, bad and ugly"],
    answer: "Firstly, in addition and finally",
    explanation: "Linking words signal the order of ideas.",
  },
  {
    prompt: "Each team has 3 speakers of 2 minutes each. How long does one team speak?",
    options: ["5 minutes", "8 minutes", "12 minutes", "6 minutes"],
    answer: "6 minutes",
    explanation: "3 × 2 = 6 minutes.",
  },
  {
    prompt: "Two teams speak 6 minutes each, and each has a 1-minute rebuttal. How long is the debate?",
    options: ["14 minutes", "12 minutes", "13 minutes", "16 minutes"],
    answer: "14 minutes",
    explanation: "6 + 6 + 1 + 1 = 14 minutes.",
  },
  {
    prompt: "Which behaviour is courteous in a debate?",
    options: ["Interrupting the speaker when you disagree", "Insulting the other team to win a point", "Waiting for the chairperson to give you the turn", "Talking while the other speakers are on"],
    answer: "Waiting for the chairperson to give you the turn",
    explanation: "Respect makes a debate fair.",
  },
  {
    prompt: "Which statement attacks the argument and not the person?",
    options: ["You are a silly person to say so.", "That point is weak because it has no example.", "Nobody listens to someone like you.", "You always talk nonsense."],
    answer: "That point is weak because it has no example.",
    explanation: "Good debaters criticise the argument.",
  },
  {
    prompt: "What can you use cue cards for in a debate?",
    options: ["To write the whole speech word for word", "To hide from the audience", "To pass messages to friends", "To keep key points and examples"],
    answer: "To keep key points and examples",
    explanation: "Cue cards help you to speak without reading.",
  },
];

const DebateSkills = () => (
  <CapsSubjectTopic
    title="Debate Skills"
    subtitle="The motion, the two teams, building an argument, rebuttal and courtesy"
    learnSteps={learnSteps}
    task="gr7-debate-skills-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={7}
  />
);

export default DebateSkills;
