import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a method?",
    options: ["A kind of network cable", "A type of display screen", "A file on a disk drive", "A named block of code"],
    answer: "A named block of code",
    explanation: "A method does one task and can be reused.",
  },
  {
    prompt: "Why use a method?",
    options: ["To use more memory", "To avoid names", "To slow a program", "To reuse code"],
    answer: "To reuse code",
    explanation: "One method can be called many times.",
  },
  {
    prompt: "What does a procedure do?",
    options: ["A task with no value back", "Returns one value to the caller", "Draws a form on the screen", "Stores a file on a drive"],
    answer: "A task with no value back",
    explanation: "A procedure does not return a value.",
  },
  {
    prompt: "What does a function do?",
    options: ["Gives back no value at all", "Deletes a file on a drive", "Prints a page on a printer", "Gives back one value"],
    answer: "Gives back one value",
    explanation: "A function gives back a value.",
  },
  {
    prompt: "Which line calls a function?",
    options: ["procedure CalcVAT(r: real);", "rVAT := CalcVAT(200);", "var rVAT: real;", "begin"],
    answer: "rVAT := CalcVAT(200);",
    explanation: "A function is used in an expression.",
  },
  {
    prompt: "What is a signature?",
    options: ["The author's name on it", "The size of the file", "The name and parameters", "The colour of the form"],
    answer: "The name and parameters",
    explanation: "It identifies the method.",
  },
  {
    prompt: "What is a parameter?",
    options: ["A name in the heading", "A value in the call itself", "A kind of loop in a program", "A file kept on a disk"],
    answer: "A name in the heading",
    explanation: "The parameter receives the passed value.",
  },
  {
    prompt: "What is an argument?",
    options: ["A name in the heading", "A value sent in a call", "A quarrel between users", "A comment in the code"],
    answer: "A value sent in a call",
    explanation: "The argument is what you send.",
  },
  {
    prompt: "In CalcVAT(200), what is 200?",
    options: ["The parameter", "The argument", "The function name", "The result type"],
    answer: "The argument",
    explanation: "200 is the value passed.",
  },
  {
    prompt: "What does a value parameter receive?",
    options: ["The original variable itself", "A blank value only", "A copy of the argument", "A new file name"],
    answer: "A copy of the argument",
    explanation: "The original is not changed.",
  },
  {
    prompt: "A method changes its value parameter. What happens to the original?",
    options: ["It changes as well", "It is deleted", "It stays the same", "It is hidden"],
    answer: "It stays the same",
    explanation: "A value parameter holds a copy.",
  },
  {
    prompt: "What does a trace table show?",
    options: ["Variables as code runs", "The size of a file on disk", "The speed of a disk drive", "The cost of a method call"],
    answer: "Variables as code runs",
    explanation: "It helps to find errors.",
  },
  {
    prompt: "What is a benefit of dividing a problem into methods?",
    options: ["The program has no code", "The program has no output", "Parts are easy to test", "The program needs no names"],
    answer: "Parts are easy to test",
    explanation: "You can test each part on its own.",
  },
  {
    prompt: "Why check input before a method uses it?",
    options: ["To make it much slower", "To print it on paper", "To delete it for good", "To avoid wrong results"],
    answer: "To avoid wrong results",
    explanation: "Validation stops bad data.",
  },
];

const UserDefinedMethods = () => (
  <CapsSubjectTopic
    title="User-Defined Methods: Procedures and Functions"
    subtitle="Why use methods, procedures and functions, arguments and parameters, value parameters, and tracing"
    learnSteps={learnSteps}
    task="gr11-user-defined-methods-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default UserDefinedMethods;
