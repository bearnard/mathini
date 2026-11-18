import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 8 English HL oral skills: interview (roles, open and closed questions, follow-ups, courtesy, timing). General criteria; no marks. The written interview is a separate lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an interview is",
    content: slide(
      <>
        <Rule>An interview is a planned conversation in which an interviewer asks questions and an interviewee answers them. People are interviewed for many reasons: to get information for a report, to learn about a person, or for a job. Choose a person who knows the topic, ask permission, and agree on a time and place.</Rule>
        <InfoTable
          cols={[{ title: "Role", w: 30 }, { title: "What the person does", w: 70 }]}
          rows={[
            ["Interviewer", "plans and asks the questions"],
            ["Interviewee", "answers and gives information"],
            ["Both", "listen and are polite"],
          ]}
          aria={"A table of interview roles. Interviewer: plans and asks the questions. Interviewee: answers and gives information. Both listen and are polite."}
        />
        <Worked
          title="Planning the time"
          steps={[
            <>An interview of {o.INTERVIEW8.questions} questions at {o.INTERVIEW8.minutesEach} minute each takes {o.INTERVIEW8.questions} × {o.INTERVIEW8.minutesEach} = {o.INTERVIEW8.questions * o.INTERVIEW8.minutesEach} minutes.</>,
            <>Add {o.INTERVIEW8.introMinutes} minutes to introduce yourself and thank the person.</>,
            <>The whole interview is {o.interviewMinutes()} minutes.</>,
          ]}
        />
        <Mistake>Going to an interview without a plan. Prepare your questions before you meet the person.</Mistake>
      </>,
    ),
  },
  {
    title: "Asking good questions",
    content: slide(
      <>
        <Rule>A closed question has a short answer, such as yes, no or a name. An open question starts with words such as why, how or what, and it invites a longer answer. Plan mostly open questions, in a logical order, and start with an easy one. A follow-up question asks for more detail about something that the person has just said.</Rule>
        <InfoTable
          cols={[{ title: "Kind", w: 26 }, { title: "Example", w: 44 }, { title: "Answer", w: 30 }]}
          rows={[
            ["Closed", "Do you like your job?", "yes or no"],
            ["Open", "Why do you like your job?", "a full answer"],
            ["Follow-up", "Can you give an example?", "more detail"],
          ]}
          aria={"A table of kinds of question. A closed question, for example: do you like your job? gets a yes or no. An open question, for example: why do you like your job? gets a full answer. A follow-up question, for example: can you give an example? gets more detail."}
        />
        <Worked
          title="Change closed to open"
          steps={[
            <>Closed: &quot;Did you enjoy the match?&quot;</>,
            <>Open: &quot;What did you enjoy most about the match?&quot;</>,
            <>The open question gets a fuller answer that you can use.</>,
          ]}
        />
        <Mistake>Asking only closed questions. You will get one-word answers and have little to report.</Mistake>
      </>,
    ),
  },
  {
    title: "Courtesy, listening and answering",
    content: slide(
      <>
        <Rule>The interviewer greets the person, explains the purpose, listens carefully and does not interrupt. Make eye contact, take brief notes and say thank you at the end. The interviewee answers clearly and honestly, in full sentences, and asks if a question is not clear. Both speak in a polite and suitable register.</Rule>
        <FlowSteps
          aria={"The stages of an interview. Greet and explain the purpose, ask, listen and note, follow up for detail, then thank the person."}
          steps={[{ label: "Greet and explain the purpose" }, { label: "Ask, listen and note" }, { label: "Follow up for detail" }, { label: "Thank the person" }]}
        />
        <Worked
          title="A short opening and closing"
          steps={[
            <>Opening: &quot;Good morning. Thank you for seeing me. I am writing about the school garden.&quot;</>,
            <>Closing: &quot;Thank you for your time. May I check your answers with you?&quot;</>,
            <>Both are short, polite and clear.</>,
          ]}
        />
        <Mistake>Talking more than the interviewee. The interviewer asks and listens.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the interviewer do?</>,
          <>Is &quot;Why do you like it?&quot; an open or a closed question?</>,
          <>How long is an interview of 10 questions of 1 minute each, with a 2-minute introduction?</>,
          <>What should you say at the end?</>,
        ]}
        answers={[
          <><strong>Plans and asks the questions</strong>.</>,
          <>An <strong>open</strong> question.</>,
          <>10 × 1 + 2 = <strong>{o.interviewMinutes()} minutes</strong>.</>,
          <><strong>Thank you</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an interview?",
    options: ["A speech that is given with no audience", "A planned conversation with questions and answers", "A poem that is read out in a group", "A letter that is written to a friend"],
    answer: "A planned conversation with questions and answers",
    explanation: "The interviewer asks and the interviewee answers.",
  },
  {
    prompt: "Who asks the questions in an interview?",
    options: ["The interviewee", "The audience", "The timekeeper", "The interviewer"],
    answer: "The interviewer",
    explanation: "The interviewer plans and asks the questions.",
  },
  {
    prompt: "What should you do before an interview?",
    options: ["Prepare your questions", "Wait to think of questions later", "Ask someone else to speak", "Arrive without a plan"],
    answer: "Prepare your questions",
    explanation: "Preparation helps the interview go well.",
  },
  {
    prompt: "Which question is open?",
    options: ["Did you start a business?", "Is your business large?", "How did you start your business?", "Do you work every day?"],
    answer: "How did you start your business?",
    explanation: "An open question starts with how, why or what.",
  },
  {
    prompt: "Which question is closed?",
    options: ["Why do you like your job?", "Do you like your job?", "How do you like your job?", "What do you like about it?"],
    answer: "Do you like your job?",
    explanation: "A closed question has a yes or no answer.",
  },
  {
    prompt: "Why should you plan mostly open questions?",
    options: ["They are shorter to say", "They need no listening", "They have yes or no answers", "They give longer, fuller answers"],
    answer: "They give longer, fuller answers",
    explanation: "Open questions give you more to report.",
  },
  {
    prompt: "What is a follow-up question?",
    options: ["A question that asks for more detail", "A question about the weather", "The first question of the day", "A question that ends the talk"],
    answer: "A question that asks for more detail",
    explanation: "A follow-up builds on what was just said.",
  },
  {
    prompt: "An interview has 10 questions of 1 minute each. How long do the questions take?",
    options: ["1 minute", "11 minutes", "10 minutes", "100 minutes"],
    answer: "10 minutes",
    explanation: "10 × 1 = 10 minutes.",
  },
  {
    prompt: "An interview has 10 questions of 1 minute each and a 2-minute introduction. How long is it?",
    options: ["10 minutes", "12 minutes", "8 minutes", "20 minutes"],
    answer: "12 minutes",
    explanation: "10 + 2 = 12 minutes.",
  },
  {
    prompt: "An interview has 8 questions of 2 minutes each. How long do the questions take?",
    options: ["10 minutes", "6 minutes", "28 minutes", "16 minutes"],
    answer: "16 minutes",
    explanation: "8 × 2 = 16 minutes.",
  },
  {
    prompt: "Which opening is polite and suitable?",
    options: ["Good morning. Thank you for seeing me.", "Hey, you. Talk now.", "I have no time, so be quick.", "Why are you late?"],
    answer: "Good morning. Thank you for seeing me.",
    explanation: "A polite register suits an interview.",
  },
  {
    prompt: "What should the interviewer do while the person answers?",
    options: ["Talk over the answer to save some time", "Look at the phone and sigh a lot", "Listen, make notes and not interrupt", "Answer the question on the person's behalf"],
    answer: "Listen, make notes and not interrupt",
    explanation: "Good listening shows respect.",
  },
  {
    prompt: "What should the interviewee do if a question is not clear?",
    options: ["Walk out of the room in a hurry", "Ask politely for it to be explained", "Guess an answer without thinking at all", "Refuse to answer any of the questions"],
    answer: "Ask politely for it to be explained",
    explanation: "Asking is better than answering a different question.",
  },
  {
    prompt: "What should you say at the end of an interview?",
    options: ["Goodbye, you were not much help to me", "That was a waste of my time, really", "Please do not call me back again", "Thank you for your time"],
    answer: "Thank you for your time",
    explanation: "Thanking the person is polite.",
  },
];

const InterviewSkills = () => (
  <CapsSubjectTopic
    title="Interview Skills: Planning, Asking and Answering"
    subtitle="Open and closed questions, follow-ups, roles, courtesy and timing"
    learnSteps={learnSteps}
    task="gr8-interview-skills-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default InterviewSkills;
