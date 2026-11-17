import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a sort do?",
    options: ["Deletes the items in it", "Copies the items in it", "Counts the items in it", "Orders the items"],
    answer: "Orders the items",
    explanation: "A sort arranges items, for example from small to large.",
  },
  {
    prompt: "What does selection sort find in each pass?",
    options: ["The smallest item left", "The largest item only", "A random item in the list", "The middle item of the list"],
    answer: "The smallest item left",
    explanation: "It selects the smallest and swaps it into place.",
  },
  {
    prompt: "What does bubble sort compare?",
    options: ["The first and last item", "Random items in the list", "Neighbouring items", "The middle item of a list"],
    answer: "Neighbouring items",
    explanation: "It swaps neighbours that are in the wrong order.",
  },
  {
    prompt: "Selection sort is applied to 5, 3, 8, 1. What is the array after the first swap?",
    options: ["1, 3, 8, 5", "1, 5, 3, 8", "3, 5, 8, 1", "5, 3, 1, 8"],
    answer: "1, 3, 8, 5",
    explanation: "The smallest, 1, is swapped with 5.",
  },
  {
    prompt: "Bubble sort is applied to 5, 3, 8, 1. What is the array after the first pass?",
    options: ["1, 3, 5, 8", "3, 5, 1, 8", "3, 5, 8, 1", "5, 3, 1, 8"],
    answer: "3, 5, 1, 8",
    explanation: "The largest item, 8, moves to the end.",
  },
  {
    prompt: "Why is a temporary variable needed in a swap?",
    options: ["To make the array larger", "To print the array out", "To close a file again", "So no value is lost"],
    answer: "So no value is lost",
    explanation: "The first value is saved while the second is moved.",
  },
  {
    prompt: "What are parallel arrays?",
    options: ["Arrays in two programs", "Arrays that are sorted twice", "Arrays that hold no data", "Arrays that share an index"],
    answer: "Arrays that share an index",
    explanation: "The same index belongs to the same record.",
  },
  {
    prompt: "In parallel arrays names[2] is Ben. What is marks[2]?",
    options: ["The first learner's mark", "The class average", "The highest mark", "Ben's mark"],
    answer: "Ben's mark",
    explanation: "The same index describes the same learner.",
  },
  {
    prompt: "What must you do when you sort one parallel array?",
    options: ["Delete the other arrays now", "Swap the others as well", "Sort only a single array", "Close the whole program"],
    answer: "Swap the others as well",
    explanation: "Otherwise the pairs are broken.",
  },
  {
    prompt: "Which function turns a date into text?",
    options: ["TimeToStr", "IsLeapYear", "DateToStr", "Pos"],
    answer: "DateToStr",
    explanation: "DateToStr converts a date to a string.",
  },
  {
    prompt: "Which function turns a time into text?",
    options: ["DateToStr", "Length", "Insert", "TimeToStr"],
    answer: "TimeToStr",
    explanation: "TimeToStr converts a time to a string.",
  },
  {
    prompt: "What does IsLeapYear return for 2024?",
    options: ["False", "0", "2024", "True"],
    answer: "True",
    explanation: "2024 is a leap year.",
  },
  {
    prompt: "What does Pos('a', 'banana') return?",
    options: ["2", "1", "3", "6"],
    answer: "2",
    explanation: "The first a is at position 2.",
  },
  {
    prompt: "What is the first position of a Delphi string?",
    options: ["1", "0", "2", "-1"],
    answer: "1",
    explanation: "Delphi strings start at position 1.",
  },
];

const SortingParallelArraysDates = () => (
  <CapsSubjectTopic
    title="Sorting, Parallel Arrays, Dates and Strings"
    subtitle="Selection sort and bubble sort, parallel arrays, Delphi date functions and string methods"
    learnSteps={learnSteps}
    task="gr11-sorting-parallel-arrays-dates-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default SortingParallelArraysDates;
