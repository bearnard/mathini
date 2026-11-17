import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which loop repeats a fixed number of times?",
    options: ["while", "for", "repeat", "if"],
    answer: "for",
    explanation: "A for loop counts.",
  },
  {
    prompt: "Which loop tests the condition before each pass?",
    options: ["repeat-until", "for", "case", "while"],
    answer: "while",
    explanation: "A while loop is pre-conditional.",
  },
  {
    prompt: "Which loop always runs at least once?",
    options: ["while loop", "for loop", "case statement", "repeat-until"],
    answer: "repeat-until",
    explanation: "The test comes after the first pass.",
  },
  {
    prompt: "for i := 1 to 5 do iSum := iSum + i; What is iSum at the end (starting from 0)?",
    options: ["5", "15", "10", "20"],
    answer: "15",
    explanation: "1 + 2 + 3 + 4 + 5 = 15.",
  },
  {
    prompt: "What must change inside a while loop?",
    options: ["Something in the condition", "The name of the program in use", "The colour of the form at work", "The title in a file on a system"],
    answer: "Something in the condition",
    explanation: "Otherwise it never stops.",
  },
  {
    prompt: "At what position does a Delphi string start?",
    options: ["1", "0", "2", "-1"],
    answer: "1",
    explanation: "Delphi strings are 1-based.",
  },
  {
    prompt: "How many times does the letter a appear in banana?",
    options: ["2", "3", "1", "4"],
    answer: "3",
    explanation: "b-a-n-a-n-a has three a's.",
  },
  {
    prompt: "What does Length('banana') return?",
    options: ["5", "7", "6", "3"],
    answer: "6",
    explanation: "There are six characters.",
  },
  {
    prompt: "What does Pos('an', 'banana') return?",
    options: ["2", "1", "3", "0"],
    answer: "2",
    explanation: "The first an starts at position 2.",
  },
  {
    prompt: "What does Copy('banana', 1, 3) return?",
    options: ["ban", "ana", "nan", "bana"],
    answer: "ban",
    explanation: "It copies three characters from position 1.",
  },
  {
    prompt: "What does Pos return when the text is not found?",
    options: ["1", "0", "-1", "An error"],
    answer: "0",
    explanation: "0 means not found.",
  },
  {
    prompt: "Which number is prime?",
    options: ["13", "15", "9", "21"],
    answer: "13",
    explanation: "13 has only the factors 1 and 13.",
  },
  {
    prompt: "Why is 15 not prime?",
    options: ["It is odd for a user at a school", "It divides by 3 with no remainder", "It is large in a lab for a task", "It ends in 5 only on a system in a program"],
    answer: "It divides by 3 with no remainder",
    explanation: "15 = 3 x 5, so it has more than two factors.",
  },
  {
    prompt: "What is the GCD of 12 and 18?",
    options: ["3", "36", "6", "12"],
    answer: "6",
    explanation: "6 is the largest number that divides both.",
  },
];

const LoopsStringsAlgorithms = () => (
  <CapsSubjectTopic
    title="Loops, Strings, Prime Numbers and GCD"
    subtitle="For, while and repeat loops, string handling from first principles and with Delphi methods, and algorithms for prime numbers, GCD and LCM"
    learnSteps={learnSteps}
    task="gr10-loops-strings-algorithms-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default LoopsStringsAlgorithms;
