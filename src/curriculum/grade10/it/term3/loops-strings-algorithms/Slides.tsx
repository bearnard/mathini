import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Loops: for, while and repeat",
    content: slide(
      <>
        <Rule>A loop repeats code. A for loop repeats a fixed number of times. A while loop tests the condition before each pass (pre-conditional) and may run zero times. A repeat-until loop tests after each pass (post-conditional), so it runs at least once.</Rule>
        <KeyTable
          title="Three loops"
          head={["Loop", "Behaviour"]}
          aria="Three loops. for i := 1 to 5 do: Fixed number of passes (5). while condition do: Tests first; may never run. repeat ... until condition: Runs once, then tests; stops when true."
          rows={[["for i := 1 to 5 do", "Fixed number of passes (5)"], ["while condition do", "Tests first; may never run"], ["repeat ... until condition", "Runs once, then tests; stops when true"]]}
        />
        <Worked
          steps={[
            <>for i := 1 to 5 do iSum := iSum + i; adds 1 + 2 + 3 + 4 + 5 = 15. A trace table shows iSum as 1, 3, 6, 10, 15.</>,
            <>A repeat loop that asks for a password at least once is a good fit, because you must ask once before you can check.</>,
          ]}
        />
        <Mistake>Forgetting to change the variable inside a while loop. The condition never changes and the loop never stops.</Mistake>
      </>,
    ),
  },
  {
    title: "String handling from first principles",
    content: slide(
      <>
        <Rule>A string is a list of characters. In Delphi the first character is at position 1. You can work through a string with a loop and the Length function, handling one character at a time, to count, find, remove, replace, add or extract characters.</Rule>
        <KeyTable
          title="String tasks with a loop"
          head={["Task", "Idea"]}
          aria="String tasks with a loop. Count a character: Loop through the string; add 1 each time it matches. Find the position of a character: Loop; note the first index where it matches. Remove a character: Build a new string without the matching ones. Replace a character: Build a new string, using the new character for each match. Extract part of a string: Copy the characters between two positions."
          rows={[["Count a character", "Loop through the string; add 1 each time it matches"], ["Find the position of a character", "Loop; note the first index where it matches"], ["Remove a character", "Build a new string without the matching ones"], ["Replace a character", "Build a new string, using the new character for each match"], ["Extract part of a string", "Copy the characters between two positions"]]}
        />
        <Worked
          steps={[
            <>To count the letter a in banana: loop from 1 to Length; each time sWord[i] = a add 1. The count is 3.</>,
            <>To remove the a's, add to a new string every character that is not a, giving bnn.</>,
          ]}
        />
        <Mistake>Starting a loop at 0. A Delphi string starts at position 1.</Mistake>
      </>,
    ),
  },
  {
    title: "Delphi string methods",
    content: slide(
      <>
        <Rule>Delphi has ready-made string methods. Use them when you do not have to work from first principles. Know what each does.</Rule>
        <KeyTable
          title="Useful string methods"
          head={["Method", "Purpose"]}
          aria="Useful string methods. Length(s): Number of characters. Pos(sub, s): Position of a substring; 0 if not found. Copy(s, start, count): Part of a string. Delete(s, start, count): Removes part of a string. Insert(sub, s, pos): Adds text at a position. Trim(s): Removes spaces at both ends. UpperCase(s): Capital letters."
          rows={[["Length(s)", "Number of characters"], ["Pos(sub, s)", "Position of a substring; 0 if not found"], ["Copy(s, start, count)", "Part of a string"], ["Delete(s, start, count)", "Removes part of a string"], ["Insert(sub, s, pos)", "Adds text at a position"], ["Trim(s)", "Removes spaces at both ends"], ["UpperCase(s)", "Capital letters"]]}
        />
        <Worked
          steps={[
            <>Pos('an', 'banana') is 2, the position where an first appears.</>,
            <>Copy('banana', 1, 3) is ban. Delete changes the string in place.</>,
          ]}
        />
        <Mistake>Expecting Pos to return 1 for the first letter when the text is not found. It returns 0 when not found.</Mistake>
      </>,
    ),
  },
  {
    title: "Prime numbers, GCD and LCM",
    content: slide(
      <>
        <Rule>A prime number has exactly two factors: 1 and itself. To test whether n is prime, try dividing by 2, 3, 4 and so on up to n div 2 (or the square root). The greatest common divisor (GCD) of two numbers is the largest number that divides both. The lowest common multiple (LCM) is the smallest number that both divide into.</Rule>
        <KeyTable
          title="Algorithms"
          head={["Problem", "Method and result"]}
          aria="Algorithms. Is 13 prime?: No divisor from 2 to 6 gives remainder 0; so 13 is prime. Is 15 prime?: 15 mod 3 = 0, so 15 is not prime. GCD of 12 and 18: Largest number dividing both: 6. LCM of 4 and 6: Smallest number both divide into: 12. Link: LCM = (a x b) div GCD."
          rows={[["Is 13 prime?", "No divisor from 2 to 6 gives remainder 0; so 13 is prime"], ["Is 15 prime?", "15 mod 3 = 0, so 15 is not prime"], ["GCD of 12 and 18", "Largest number dividing both: 6"], ["LCM of 4 and 6", "Smallest number both divide into: 12"], ["Link", "LCM = (a x b) div GCD"]]}
        />
        <Worked
          steps={[
            <>GCD with a loop: start at the smaller number and count down until a number divides both with remainder 0. For 12 and 18 it stops at 6.</>,
            <>LCM of 4 and 6 is (4 x 6) div 2 = 12.</>,
          ]}
        />
        <Mistake>Treating 1 as a prime. A prime has two different factors, and 1 has only one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which loop always runs at least once?</>,
          <>What position does a Delphi string start at?</>,
          <>Is 15 a prime number? Why?</>,
          <>What is the GCD of 12 and 18?</>,
        ]}
        answers={[
          <>The repeat-until loop.</>,
          <>Position 1.</>,
          <>No. It divides by 3 with no remainder.</>,
          <>6.</>,
        ]}
      />,
    ),
  },
];
