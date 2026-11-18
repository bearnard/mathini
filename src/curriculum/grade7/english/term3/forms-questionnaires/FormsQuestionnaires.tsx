import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What should you do before you start to fill in a form?",
    options: ["Sign the form at the bottom of the page", "Hand it in", "Read all the instructions", "Tick the first boxes you see"],
    answer: "Read all the instructions",
    explanation: "The instructions tell you how to complete the form.",
  },
  {
    prompt: "A form asks for your surname in block letters. How do you write Mokoena?",
    options: ["MOKOENA", "Mokoena", "mokoena", "M. Mokoena"],
    answer: "MOKOENA",
    explanation: "Block letters are capital letters.",
  },
  {
    prompt: "A form asks for the date of birth as dd/mm/yyyy. How do you write 5 March 2012?",
    options: ["03/05/2012", "2012/03/05", "5 March", "05/03/2012"],
    answer: "05/03/2012",
    explanation: "The day comes first, then the month, then the year.",
  },
  {
    prompt: "The form says to tick one box. What should you do?",
    options: ["Tick all the boxes", "Tick only one box", "Tick no boxes", "Tick two boxes"],
    answer: "Tick only one box",
    explanation: "Follow the instruction on the form.",
  },
  {
    prompt: "Which name should you write on a form?",
    options: ["A nickname", "Your friend's name", "Your full name", "Your teacher's name"],
    answer: "Your full name",
    explanation: "A form needs your full, official name.",
  },
  {
    prompt: "Why must the contact number on a form be correct?",
    options: ["So that the reader can reach you", "So that the form looks longer and neater", "So that the page is full", "So that the title is clear"],
    answer: "So that the reader can reach you",
    explanation: "A wrong number means that nobody can contact you.",
  },
  {
    prompt: "What is a questionnaire?",
    options: ["A story about a person told in the past tense", "A letter to a friend", "A set of instructions", "A list of questions that collects information"],
    answer: "A list of questions that collects information",
    explanation: "A questionnaire asks people questions.",
  },
  {
    prompt: "Which is a closed question?",
    options: ["What would you change at school?", "Do you walk to school? Yes or No", "Describe your best day.", "Tell us how you feel."],
    answer: "Do you walk to school? Yes or No",
    explanation: "A closed question has set answers.",
  },
  {
    prompt: "Which is an open question?",
    options: ["Do you buy lunch at the canteen? Yes or No", "Rate the canteen from 1 to 5", "What would you change at the canteen?", "Tick your age group"],
    answer: "What would you change at the canteen?",
    explanation: "An open question lets people answer in their own words.",
  },
  {
    prompt: "Which question is clear and asks one thing?",
    options: ["How would you rate the canteen food from 1 to 5?", "What about the canteen and the library?", "Canteen?", "Is the canteen good or what do you want to change?"],
    answer: "How would you rate the canteen food from 1 to 5?",
    explanation: "A good question asks about one thing.",
  },
  {
    prompt: "What is a declaration on a form?",
    options: ["A list of the questions in the form", "The title of the form", "The date of issue", "A statement that the facts are true"],
    answer: "A statement that the facts are true",
    explanation: "You sign it to show that the information is true.",
  },
  {
    prompt: "What does your signature on a form show?",
    options: ["That you printed the form yourself", "That you agree with the form", "That you read the title", "That you wrote the questions"],
    answer: "That you agree with the form",
    explanation: "A signature shows agreement.",
  },
  {
    prompt: "Who may need to sign a form for a young person?",
    options: ["A passer-by", "A shop assistant", "A parent or guardian", "A friend of the family who is a child"],
    answer: "A parent or guardian",
    explanation: "Young people often need a parent or guardian to sign.",
  },
  {
    prompt: "You have finished a form. What is the last job before you give it to the clerk?",
    options: ["Check every section once more", "Tear off the corner of the first page", "Write the date twice", "Fold it in four"],
    answer: "Check every section once more",
    explanation: "A final check finds missing or wrong information.",
  },
];

const FormsQuestionnaires = () => (
  <CapsSubjectTopic
    title={"Forms and Questionnaires"}
    subtitle={"Reading and filling in a form, dates and tick boxes, questionnaires, and the signature and declaration"}
    learnSteps={learnSteps}
    task={"gr7-forms-questionnaires-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FormsQuestionnaires;
