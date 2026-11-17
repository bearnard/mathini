import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an algorithm is",
    content: slide(
      <>
        <Rule>An algorithm is a clear, step-by-step set of instructions that solves a problem. The steps must be in the right order and be precise, so that anyone who follows them gets the same result.</Rule>
        <KeyTable
          title="Algorithms in everyday life"
          head={["Task", "Algorithm"]}
          aria="Algorithms in everyday life. Baking a cake: The recipe. Folding a paper jet: The folding instructions. Drawing a kite: The drawing steps. Computer program: An algorithm written in a programming language."
          rows={[["Baking a cake", "The recipe"], ["Folding a paper jet", "The folding instructions"], ["Drawing a kite", "The drawing steps"], ["Computer program", "An algorithm written in a programming language"]]}
        />
        <Worked
          steps={[
            <>Making tea: boil water, put a teabag in a cup, pour in the water, wait, remove the bag. If the steps are out of order, the tea does not work.</>,
            <>A good algorithm is accurate, well tested and efficient.</>,
          ]}
        />
        <Mistake>Writing steps that are vague, such as &ldquo;make it nice&rdquo;. Each step must be precise.</Mistake>
      </>,
    ),
  },
  {
    title: "IPO tables and flow charts",
    content: slide(
      <>
        <Rule>An IPO table lists the Input, the Processing and the Output of an algorithm. A flow chart draws the steps as shapes joined by arrows, so that the order can be seen.</Rule>
        <KeyTable
          title="IPO table for the area of a rectangle"
          head={["Part", "Content"]}
          aria="IPO table for the area of a rectangle. Input: length, width. Processing: area = length x width. Output: area. Flow chart shapes: Oval: start and stop. Rectangle: process. Parallelogram: input and output. Diamond: decision."
          rows={[["Input", "length, width"], ["Processing", "area = length x width"], ["Output", "area"], ["Flow chart shapes", "Oval: start and stop. Rectangle: process. Parallelogram: input and output. Diamond: decision"]]}
        />
        <Worked
          steps={[
            <>For the area of a rectangle the IPO table is: input length and width, process length x width, output the area.</>,
            <>In a flow chart, a diamond asks a question such as &ldquo;is the number even?&rdquo; and has a yes arrow and a no arrow.</>,
          ]}
        />
        <Mistake>Using a rectangle for a decision. A decision is a diamond.</Mistake>
      </>,
    ),
  },
  {
    title: "Trace tables",
    content: slide(
      <>
        <Rule>A trace table follows an algorithm step by step and records the value of each variable. It lets you test an algorithm on paper and find mistakes.</Rule>
        <KeyTable
          title="Trace table for: sum = 0, then add 4, then add 6"
          head={["Step", "Value of sum"]}
          aria="Trace table for: sum = 0, then add 4, then add 6. Start: 0. After adding 4: 4. After adding 6: 10. Result: 10."
          rows={[["Start", "0"], ["After adding 4", "4"], ["After adding 6", "10"], ["Result", "10"]]}
        />
        <Worked
          steps={[
            <>To find the smaller of 7 and 3, a trace table shows a = 7, b = 3, and the test a &lt; b is false, so the answer is b, which is 3.</>,
            <>Swapping two values needs a temporary variable: temp = a, a = b, b = temp.</>,
          ]}
        />
        <Mistake>Swapping with just a = b and b = a. After a = b both variables hold the same value.</Mistake>
      </>,
    ),
  },
  {
    title: "Simple algorithms",
    content: slide(
      <>
        <Rule>Many problems use the same simple algorithms: find the smallest or largest of values, swap values, find an aggregate such as a sum or an average, test whether a number is even or a factor of another, and basic calculations such as VAT.</Rule>
        <KeyTable
          title="Examples"
          head={["Problem", "Method"]}
          aria="Examples. Smallest of three numbers: Compare, keeping the smallest so far. Is a number even?: The remainder when divided by 2 is 0. Is a a factor of b?: The remainder of b divided by a is 0. Average: Sum divided by how many. VAT at 15% on R200: 200 x 15 / 100 = R30; total R230."
          rows={[["Smallest of three numbers", "Compare, keeping the smallest so far"], ["Is a number even?", "The remainder when divided by 2 is 0"], ["Is a a factor of b?", "The remainder of b divided by a is 0"], ["Average", "Sum divided by how many"], ["VAT at 15% on R200", "200 x 15 / 100 = R30; total R230"]]}
        />
        <Worked
          steps={[
            <>Is 12 a factor of 36? 36 divided by 12 leaves remainder 0, so yes.</>,
            <>The average of 4, 6 and 8 is (4 + 6 + 8) / 3 = 6.</>,
          ]}
        />
        <Mistake>Dividing by the wrong number for an average. Divide by how many values there are.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an algorithm?</>,
          <>What does IPO stand for?</>,
          <>What is a trace table for?</>,
          <>How can you test whether a number is even?</>,
        ]}
        answers={[
          <>A clear, step-by-step set of instructions that solves a problem.</>,
          <>Input, processing, output.</>,
          <>Following an algorithm step by step to check its values.</>,
          <>Its remainder when divided by 2 is 0.</>,
        ]}
      />,
    ),
  },
];
