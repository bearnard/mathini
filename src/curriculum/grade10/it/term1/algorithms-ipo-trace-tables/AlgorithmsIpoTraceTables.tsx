import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is an algorithm?",
    options: ["A kind of computer chip in a lab", "A type of data file on a system", "Steps that solve a problem", "A kind of virus code at a school"],
    answer: "Steps that solve a problem",
    explanation: "The steps must be precise and in order.",
  },
  {
    prompt: "Which is an everyday algorithm?",
    options: ["A paper plate", "A cooking pot", "A television", "A recipe"],
    answer: "A recipe",
    explanation: "A recipe is a list of steps.",
  },
  {
    prompt: "What must the steps of an algorithm be?",
    options: ["Vague and mixed up", "Random and hidden", "Precise and in order", "Secret and very long"],
    answer: "Precise and in order",
    explanation: "Anyone should get the same result.",
  },
  {
    prompt: "What does IPO stand for?",
    options: ["Input, processing, output", "Internet, program, online", "Index, page, order", "Image, print, open"],
    answer: "Input, processing, output",
    explanation: "The three parts of an algorithm.",
  },
  {
    prompt: "In an IPO table for the area of a rectangle, what is the processing?",
    options: ["the length and the width", "the area as printed", "the unit of the area", "area = length x width"],
    answer: "area = length x width",
    explanation: "The calculation is the processing.",
  },
  {
    prompt: "Which flow chart shape shows a decision?",
    options: ["A diamond", "A rectangle", "An oval", "A parallelogram"],
    answer: "A diamond",
    explanation: "A decision has a yes and a no arrow.",
  },
  {
    prompt: "Which flow chart shape shows input and output?",
    options: ["A parallelogram", "A diamond shape", "An oval shape", "A round circle"],
    answer: "A parallelogram",
    explanation: "Input and output use a parallelogram.",
  },
  {
    prompt: "What is a trace table?",
    options: ["Variable values by step", "A table of file names on a system", "A table of the costs at a school", "A table of passwords for a task"],
    answer: "Variable values by step",
    explanation: "It lets you test an algorithm on paper.",
  },
  {
    prompt: "What does a trace table help you do?",
    options: ["Find errors in steps", "Print a document page", "Store a file on disk", "Send an email message"],
    answer: "Find errors in steps",
    explanation: "Tracing shows where values go wrong.",
  },
  {
    prompt: "Why is a temporary variable needed to swap two values?",
    options: ["To make the program faster", "To print a message", "One value would be lost", "To save a file"],
    answer: "One value would be lost",
    explanation: "The first value is kept while the second is moved.",
  },
  {
    prompt: "How do you test that a number is even?",
    options: ["Remainder is 0 after div by 2", "It ends in the digit 5 at work in a lab", "It is larger than ten in a file on a system", "It is a prime number for a user at a school"],
    answer: "Remainder is 0 after div by 2",
    explanation: "Even numbers leave no remainder.",
  },
  {
    prompt: "Which number is a factor of 36?",
    options: ["10", "12", "7", "5"],
    answer: "12",
    explanation: "36 divided by 12 leaves remainder 0, so 12 is a factor.",
  },
  {
    prompt: "What is the average of 4, 6 and 8?",
    options: ["18", "8", "6", "4"],
    answer: "6",
    explanation: "(4 + 6 + 8) / 3 = 6.",
  },
  {
    prompt: "What is the total with 15% VAT on R200?",
    options: ["R215", "R235", "R30", "R230"],
    answer: "R230",
    explanation: "200 x 15 / 100 = 30, then 200 + 30 = 230.",
  },
];

const AlgorithmsIpoTraceTables = () => (
  <CapsSubjectTopic
    title="Algorithms, IPO Tables and Trace Tables"
    subtitle="What an algorithm is, IPO tables and flow charts, trace tables, and simple algorithms such as swapping, smallest, aggregates and VAT"
    learnSteps={learnSteps}
    task="gr10-algorithms-ipo-trace-tables-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default AlgorithmsIpoTraceTables;
