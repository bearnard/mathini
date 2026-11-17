import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Selection sort and bubble sort",
    content: slide(
      <>
        <Rule>A sort puts the items of an array in order. Selection sort finds the smallest item in the unsorted part and swaps it into place. Bubble sort compares neighbours and swaps them when they are in the wrong order, so the biggest items move to the end.</Rule>
        <KeyTable
          title="Two sorting algorithms"
          head={["Sort", "How it works"]}
          aria="Two sorting algorithms. Selection sort: Find the smallest in the rest, swap it to the front. Bubble sort: Compare neighbours, swap if out of order, repeat. Both: Use loops, a swap and a temporary variable. Compare them: Count comparisons and swaps with a trace table."
          rows={[["Selection sort", "Find the smallest in the rest, swap it to the front"], ["Bubble sort", "Compare neighbours, swap if out of order, repeat"], ["Both", "Use loops, a swap and a temporary variable"], ["Compare them", "Count comparisons and swaps with a trace table"]]}
        />
        <Worked
          steps={[
            <>Selection sort on 5, 3, 8, 1: the smallest is 1, swap it with 5, so the array is 1, 3, 8, 5. Next the smallest of 3, 8, 5 is 3 (no swap). Then 5 is swapped with 8: 1, 3, 5, 8.</>,
            <>Bubble sort on 5, 3, 8, 1: first pass compares 5 and 3 (swap), 5 and 8 (no swap), 8 and 1 (swap), so the array is 3, 5, 1, 8, with the largest at the end.</>,
          ]}
        />
        <Mistake>Forgetting the temporary variable when swapping. Without it, one value is overwritten and lost.</Mistake>
      </>,
    ),
  },
  {
    title: "Parallel arrays",
    content: slide(
      <>
        <Rule>Parallel arrays are two or more arrays in which the same index belongs to the same record. They keep related data together without a record type.</Rule>
        <KeyTable
          title="Parallel arrays"
          head={["Index", "Names, Marks"]}
          aria="Parallel arrays. 1: Aisha, 72. 2: Ben, 55. 3: Chen, 90."
          rows={[["1", "Aisha, 72"], ["2", "Ben, 55"], ["3", "Chen, 90"]]}
        />
        <Worked
          steps={[
            <>names[2] is Ben and marks[2] is 55: the same index describes one learner.</>,
            <>When you sort one array, swap the matching items in the other too, or the pairs will be broken.</>,
          ]}
        />
        <Mistake>Sorting only one of the arrays. The names and marks no longer match.</Mistake>
      </>,
    ),
  },
  {
    title: "Dates, times and strings in Delphi",
    content: slide(
      <>
        <Rule>Delphi has date and time functions and string methods. DateToStr and TimeToStr turn a date or time into text. IsLeapYear tests for a leap year. String methods can find a length, a position, a substring, and insert or delete characters.</Rule>
        <KeyTable
          title="Useful functions"
          head={["Function", "What it does"]}
          aria="Useful functions. DateToStr: Turns a date into text. TimeToStr: Turns a time into text. IsLeapYear: True if the year is a leap year. Length: Number of characters in a string. Pos: Position of a character or substring. Insert, Delete: Add or remove characters in a string."
          rows={[["DateToStr", "Turns a date into text"], ["TimeToStr", "Turns a time into text"], ["IsLeapYear", "True if the year is a leap year"], ["Length", "Number of characters in a string"], ["Pos", "Position of a character or substring"], ["Insert, Delete", "Add or remove characters in a string"]]}
        />
        <Worked
          steps={[
            <>IsLeapYear(2024) is True, because 2024 is divisible by 4 and is not a century year that fails the 400 rule.</>,
            <>Pos('a', 'banana') gives 2, the first place where a is found.</>,
          ]}
        />
        <Mistake>Counting positions from 0. In a Delphi string the first character is at position 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How does selection sort work?</>,
          <>What are parallel arrays?</>,
          <>Which function tests for a leap year?</>,
          <>What does Pos return?</>,
        ]}
        answers={[
          <>It finds the smallest item in the unsorted part and swaps it into place.</>,
          <>Arrays in which the same index describes one record.</>,
          <>IsLeapYear.</>,
          <>The position of a character or substring in a string.</>,
        ]}
      />,
    ),
  },
];
