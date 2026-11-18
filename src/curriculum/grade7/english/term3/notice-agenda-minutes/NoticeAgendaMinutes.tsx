import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a notice do?",
    options: ["Records the decisions of a meeting after it ends", "Lists items for a meeting", "Gives information to a group of people", "Tells a long story"],
    answer: "Gives information to a group of people",
    explanation: "A notice is short and gives the important facts.",
  },
  {
    prompt: "Which part must a notice include?",
    options: ["What, when and where", "A long story", "A poem", "A list of the marks of the learners"],
    answer: "What, when and where",
    explanation: "The reader needs the main facts.",
  },
  {
    prompt: "Which heading suits a notice for singers?",
    options: ["How I Spent My Holiday", "The Life of a Singer", "My Favourite Song", "Choir Practice"],
    answer: "Choir Practice",
    explanation: "A heading says what the notice is about.",
  },
  {
    prompt: "What is an agenda?",
    options: ["A record of what was decided at the meeting", "A list of items for a meeting", "A short notice", "A letter to a friend"],
    answer: "A list of items for a meeting",
    explanation: "An agenda sets out what the meeting will discuss.",
  },
  {
    prompt: "When is an agenda sent out?",
    options: ["After the meeting", "During the break", "Before the meeting", "Long after the meeting has ended"],
    answer: "Before the meeting",
    explanation: "People need it to prepare.",
  },
  {
    prompt: "Which item usually comes first on an agenda?",
    options: ["Welcome and apologies", "Closure", "Other business", "The vote of thanks to the chairperson"],
    answer: "Welcome and apologies",
    explanation: "A meeting opens with a welcome and a note of who is absent.",
  },
  {
    prompt: "What are minutes?",
    options: ["A list of items to discuss at the meeting", "A notice about a meeting", "A form to sign", "The official record of a meeting"],
    answer: "The official record of a meeting",
    explanation: "Minutes record what happened.",
  },
  {
    prompt: "When are minutes written?",
    options: ["Before the meeting", "After the meeting", "Instead of the meeting", "During the notice"],
    answer: "After the meeting",
    explanation: "They record what has already been discussed.",
  },
  {
    prompt: "Which tense do minutes use?",
    options: ["The future tense", "The present tense", "The past tense", "The imperative"],
    answer: "The past tense",
    explanation: "Minutes record what was said and decided.",
  },
  {
    prompt: "What must minutes record about each decision?",
    options: ["What was agreed and who acts", "Each word that was spoken by each speaker", "The colour of the table", "The weather"],
    answer: "What was agreed and who acts",
    explanation: "Decisions and actions are the key information.",
  },
  {
    prompt: "Which sentence could come from minutes?",
    options: ["Please come to the fete on 20 June at nine.", "The fete will be a lot of fun.", "How to organise a fete:", "It was decided that the fete is on 20 June."],
    answer: "It was decided that the fete is on 20 June.",
    explanation: "Minutes record decisions in the past tense.",
  },
  {
    prompt: "Which text announces a school tournament to many learners?",
    options: ["An agenda", "A notice", "Minutes", "A diary entry"],
    answer: "A notice",
    explanation: "A notice announces information to a group.",
  },
  {
    prompt: "Which text would you write to plan a committee meeting before it starts?",
    options: ["A notice", "Minutes", "An agenda", "A diary entry"],
    answer: "An agenda",
    explanation: "An agenda lists what the meeting will discuss.",
  },
  {
    prompt: "Which information is not needed on a notice?",
    options: ["A summary of the plot of a novel", "The name of the person who issued it", "The place where the event is held", "The date and the time of the event"],
    answer: "A summary of the plot of a novel",
    explanation: "A notice gives the key facts about an event.",
  },
];

const NoticeAgendaMinutes = () => (
  <CapsSubjectTopic
    title={"Notice, Agenda and Minutes"}
    subtitle={"The parts of a notice, an agenda and minutes, and choosing the right text for a purpose"}
    learnSteps={learnSteps}
    task={"gr7-notice-agenda-minutes-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default NoticeAgendaMinutes;
