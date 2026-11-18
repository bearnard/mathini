import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a dialogue is",
    content: slide(
      <>
        <Rule>A dialogue is a spoken exchange between two or more people. It sounds natural, so speakers take turns, react to each other and use language that suits who they are. In an oral task a dialogue usually lasts 6 to 8 minutes and shows that you can listen as well as speak.</Rule>
        <KeyTable
          title="Features of a dialogue"
          head={["Feature", "What it means"]}
          aria="Features of a dialogue. Turn-taking: Each speaker waits for the other to finish. Natural language: Short sentences, questions and reactions. Register: Suits the people, such as friends or a customer and a clerk. Response: You answer what was actually said. Length: About 6 to 8 minutes in an oral task."
          rows={[["Turn-taking", "Each speaker waits for the other to finish"], ["Natural language", "Short sentences, questions and reactions"], ["Register", "Suits the people, such as friends or a customer and a clerk"], ["Response", "You answer what was actually said"], ["Length", "About 6 to 8 minutes in an oral task"]]}
        />
        <Worked
          steps={[
            <>In a dialogue between a learner and a bus driver, each person asks and answers, and the driver is polite but brief.</>,
            <>The learner responds to the driver’s directions instead of repeating the first question.</>,
          ]}
        />
        <Mistake>Reciting two separate speeches one after the other. A dialogue needs each speaker to react to the other.</Mistake>
      </>,
    ),
  },
  {
    title: "The five phases of an interview",
    content: slide(
      <>
        <Rule>An interview is planned and has a goal. You prepare by finding background information and writing your questions in order. During the interview you move through five phases: introduction, rapport, questions, summary and closure.</Rule>
        <KeyTable
          title="Phases of an interview"
          head={["Phase", "What you do"]}
          aria="Phases of an interview. Introduction: Say who you are and why you are there. Rapport: Create an atmosphere of trust. Questions: Ask general questions first, then specific ones. Summary: Check your notes and sum up the answers. Closure: Thank the person and offer contact details."
          rows={[["Introduction", "Say who you are and why you are there"], ["Rapport", "Create an atmosphere of trust"], ["Questions", "Ask general questions first, then specific ones"], ["Summary", "Check your notes and sum up the answers"], ["Closure", "Thank the person and offer contact details"]]}
        />
        <Worked
          steps={[
            <>You interview the school librarian. You introduce yourself, ask about their day, then ask how many books are borrowed each week.</>,
            <>You end by summarising the main points and thanking them.</>,
          ]}
        />
        <Mistake>Starting with the hardest question. Begin with simple questions so the person relaxes.</Mistake>
      </>,
    ),
  },
  {
    title: "Questions and listening",
    content: slide(
      <>
        <Rule>Your questions decide how much you learn. Open questions that begin with why or how invite a full answer, while closed questions invite yes or no. Listen actively, take brief notes and ask a follow-up question when something interesting is said.</Rule>
        <KeyTable
          title="Asking good questions"
          head={["Skill", "Example idea"]}
          aria="Asking good questions. Open question: Why did you choose this career?. Closed question: Did you study at a university?. Follow-up: Can you tell me more about that?. Active listening: Nod, keep eye contact and note key words. Respect: Use polite, sensitive language."
          rows={[["Open question", "Why did you choose this career?"], ["Closed question", "Did you study at a university?"], ["Follow-up", "Can you tell me more about that?"], ["Active listening", "Nod, keep eye contact and note key words"], ["Respect", "Use polite, sensitive language"]]}
        />
        <Worked
          steps={[
            <>You ask an open question and your guest speaks for a minute, so you write three key words.</>,
            <>You then ask a follow-up about the second key word.</>,
          ]}
        />
        <Mistake>Interrupting the person or reading questions without listening. Listen first, and then choose your next question.</Mistake>
      </>,
    ),
  },
  {
    title: "Preparing and presenting",
    content: slide(
      <>
        <Rule>For an assessed interview or dialogue you plan the goal, write the questions in order and practise. Use a suitable register, and remember that the interviewer guides the conversation but the guest should do most of the talking. Keep to the time you are given, which is 10 to 15 minutes for an interview.</Rule>
        <KeyTable
          title="Interview and dialogue checklist"
          head={["Item", "Reminder"]}
          aria="Interview and dialogue checklist. Goal: Know what you want to find out. Background: Read about the person first. Question order: General first, then specific. Time: Interview: 10 to 15 minutes. Dialogue: 6 to 8. Register: Respectful and clear."
          rows={[["Goal", "Know what you want to find out"], ["Background", "Read about the person first"], ["Question order", "General first, then specific"], ["Time", "Interview: 10 to 15 minutes. Dialogue: 6 to 8"], ["Register", "Respectful and clear"]]}
        />
        <Worked
          steps={[
            <>You plan eight questions for a 10 minute interview and keep two spare in case the guest answers briefly.</>,
            <>You practise with a partner and time yourselves.</>,
          ]}
        />
        <Mistake>Asking only closed questions. You will get short answers and run out of things to say.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the five phases of an interview in order.</>,
          <>Which kind of question invites a full answer?</>,
          <>How long is an interview in an oral task?</>,
          <>What makes a dialogue sound natural?</>,
        ]}
        answers={[
          <>Introduction, rapport, questions, summary and closure.</>,
          <>An open question.</>,
          <>About 10 to 15 minutes.</>,
          <>Turn-taking and answering what was said.</>,
        ]}
      />,
    ),
  },
];
