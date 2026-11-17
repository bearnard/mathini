import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "How many marks is Paper 4 (Orals) worth?",
    options: ["50 marks", "30 marks", "100 marks", "70 marks"],
    answer: "50 marks",
    explanation: "Paper 4 is worth 50 of the 300 marks of the end-of-year external assessment.",
  },
  {
    prompt: "What fraction of the 300 end-of-year marks is Paper 4?",
    options: ["One sixth", "One half", "One tenth", "One third"],
    answer: "One sixth",
    explanation: "50 ÷ 300 is one sixth, about 16,7%.",
  },
  {
    prompt: "How are the Paper 4 oral tasks set and assessed?",
    options: ["School sets and marks with moderation", "Set and marked by an outside examiner", "The learner sets it and friends mark it", "The school sets it but does not mark it"],
    answer: "School sets and marks with moderation",
    explanation: "Orals are internally set, internally assessed and externally moderated.",
  },
  {
    prompt: "How many marks does the unprepared speech carry?",
    options: ["10", "15", "20", "25"],
    answer: "15",
    explanation: "The unprepared speech is marked out of 15.",
  },
  {
    prompt: "How many marks does listening for comprehension carry?",
    options: ["5", "15", "10", "20"],
    answer: "15",
    explanation: "Listening for comprehension is marked out of 15.",
  },
  {
    prompt: "Two prepared speeches are each marked out of 10. What are they worth together?",
    options: ["10 marks", "20 marks", "30 marks", "15 marks"],
    answer: "20 marks",
    explanation: "2 × 10 = 20 marks.",
  },
  {
    prompt: "Which sum gives the Paper 4 total?",
    options: ["10 + 15 + 15", "20 + 10 + 15", "20 + 15 + 15", "20 + 15 + 20"],
    answer: "20 + 15 + 15",
    explanation: "Prepared speeches 20, unprepared speech 15 and listening 15 make 50.",
  },
  {
    prompt: "Which task is assessed for research skills and the use of aids?",
    options: ["The unprepared speech", "The listening task", "The prepared speech", "The class discussion"],
    answer: "The prepared speech",
    explanation: "Only the prepared speech assesses research and audio or visual aids.",
  },
  {
    prompt: "What does the listening task assess?",
    options: ["How well a learner listens critically", "Skill in reading a poem aloud to class", "The speed of a learner's handwriting", "Neatness of the learner's notes in a book"],
    answer: "How well a learner listens critically",
    explanation: "The listening task assesses critical listening for comprehension, information and evaluation.",
  },
  {
    prompt: "In which term is the prepared speech that introduces a speaker and offers a vote of thanks set?",
    options: ["Term 1", "Term 3", "Term 2", "Term 4"],
    answer: "Term 3",
    explanation: "Task 9 in Term 3 is the prepared speech introducing a speaker or a vote of thanks.",
  },
  {
    prompt: "In which term are the orals moderated?",
    options: ["Term 4", "Term 1", "Term 2", "Term 3"],
    answer: "Term 4",
    explanation: "Term 4 is for the moderation of the orals.",
  },
  {
    prompt: "Which oral text has the longest suggested time?",
    options: ["An interview with a guest speaker", "A prepared speech in the class", "An unprepared speech task today", "A debate or panel discussion"],
    answer: "A debate or panel discussion",
    explanation: "CAPS suggests 20 to 30 minutes for debates and panel discussions, longer than the other texts.",
  },
  {
    prompt: "A learner plans a talk of 4 to 5 minutes. Which oral text is this?",
    options: ["A prepared speech", "An unprepared speech", "A long debate", "An interview"],
    answer: "A prepared speech",
    explanation: "CAPS suggests 4 to 5 minutes for a prepared speech.",
  },
  {
    prompt: "A learner scores 12 for listening, 8 and 9 for the prepared speeches and 11 for the unprepared speech. What is the Paper 4 total?",
    options: ["40 out of 50", "31 out of 50", "48 out of 50", "20 out of 50"],
    answer: "40 out of 50",
    explanation: "12 + 8 + 9 + 11 = 40.",
  },
];

const OralPaper4Tasks = () => (
  <CapsSubjectTopic
    title="Paper 4 Orals: The Tasks and the 50 Marks"
    subtitle="What Paper 4 is, what each oral task assesses, when the tasks happen, and how the marks add up"
    learnSteps={learnSteps}
    task="gr12-oral-paper4-tasks-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default OralPaper4Tasks;
