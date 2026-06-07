import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term3/data-processing/diagram.webp", alt: "Data Processing and Validation" },
    title: 'Input validation techniques',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Validation</strong> ensures that data entered into a program is correct, complete, and reasonable <em>before</em> processing or storing it.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Presence check</strong>
            <p className="text-slate-600">Ensures a required field is not left empty. E.g. name cannot be blank.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Type check</strong>
            <p className="text-slate-600">Confirms the value is the expected data type. E.g. age must be an integer.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Range check</strong>
            <p className="text-slate-600">Verifies the value is within acceptable limits. E.g. mark must be 0–100.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Format check</strong>
            <p className="text-slate-600">Validates the pattern of input. E.g. SA ID number has 13 digits; email contains "@".</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exception handling',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Exception handling</strong> gracefully manages runtime errors instead of crashing the program.
        </p>
        <CodeBlock language="python" code={`# Python try-except
try:
    age = int(input("Enter age: "))
    print(100 / age)
except ValueError:
    print("Age must be a whole number.")
except ZeroDivisionError:
    print("Age cannot be zero.")
finally:
    print("Done.")`} />
        <p className="text-sm text-slate-600"><code>finally</code> always runs — used for cleanup like closing files.</p>
      </div>
    ),
  },
  {
    title: 'Processing arrays',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Arrays store multiple values under one name, accessed by index. Common processing patterns:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Traversal</strong>
            <p className="text-slate-600">Visit every element using a for loop to print, validate or transform values.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Accumulator</strong>
            <p className="text-slate-600">Add each element to a running total (sum) or count matching elements.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Search</strong>
            <p className="text-slate-600">Use linear search to find a value or check if it exists in the array.</p>
          </div>
        </div>
        <CodeBlock language="python" code={`marks = [72, 45, 88, 90, 55]
total = sum(marks)
avg   = total / len(marks)
print(f"Average: {avg:.1f}")`} />
      </div>
    ),
  },
  {
    title: 'Combining files and arrays',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A common pattern is to <strong>read data from a file into an array</strong>, process the array, and write results back to a file.
        </p>
        <CodeBlock language="python" code={`marks = []
with open("marks.txt", "r") as f:
    for line in f:
        marks.append(int(line.strip()))

above_pass = [m for m in marks if m >= 50]
print(f"Passed: {len(above_pass)}")`} />
        <p className="text-sm text-slate-600">Validate each value when reading from file — the file may contain unexpected data.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'A program accepts a percentage mark and checks: if mark < 0 or mark > 100: error. Which validation is this?',
    options: ['Presence check', 'Type check', 'Range check', 'Format check'],
    answer: 'Range check',
    explanation: 'A range check verifies the value falls between a minimum and maximum (0–100 for a percentage mark).',
  },
  {
    prompt: 'The user enters "abc" into an integer field. Which exception would Python raise when converting it?',
    options: ['IndexError', 'ZeroDivisionError', 'ValueError', 'TypeError'],
    answer: 'ValueError',
    explanation: 'int("abc") raises a ValueError because "abc" cannot be converted to an integer.',
  },
  {
    prompt: 'What does the "finally" block in a try-except structure do?',
    options: [
      'Only runs if no exception occurs',
      'Only runs if an exception occurs',
      'Always runs regardless of whether an exception occurred',
      'Raises a new exception',
    ],
    answer: 'Always runs regardless of whether an exception occurred',
    explanation: 'The finally block is used for cleanup code (e.g. closing files) that must execute no matter what.',
  },
  {
    prompt: 'Which array operation calculates the running total of all elements?',
    options: ['Traversal', 'Accumulator', 'Search', 'Sorting'],
    answer: 'Accumulator',
    explanation: 'An accumulator pattern initialises a total variable to 0 and adds each element to it as the array is traversed.',
  },
  {
    prompt: 'Given marks = [55, 78, 43, 90], what does sum(marks) return?',
    options: ['90', '266', '65.5', '4'],
    answer: '266',
    explanation: '55 + 78 + 43 + 90 = 266. sum() adds all elements of a list.',
  },
  {
    prompt: 'A program checks: if email.contains("@") — which validation type is this?',
    options: ['Presence check', 'Range check', 'Format check', 'Type check'],
    answer: 'Format check',
    explanation: 'Checking for the "@" character verifies the format/pattern of the email address.',
  },
  {
    prompt: 'What is the index of the FIRST element in a Python list?',
    options: ['1', '0', '-1', 'It depends on the list'],
    answer: '0',
    explanation: 'Python (and most languages) use zero-based indexing — the first element is at index 0.',
  },
  {
    prompt: 'A program reads integers from a file but the file contains a blank line. What is the safest approach?',
    options: [
      'Assume the file is always correct',
      'Use exception handling (try-except) to catch conversion errors on each line',
      'Open the file in binary mode',
      'Only read the first 10 lines',
    ],
    answer: 'Use exception handling (try-except) to catch conversion errors on each line',
    explanation: 'Wrapping the int() conversion in a try-except prevents a crash when a blank or non-numeric line is encountered.',
  },
  {
    prompt: 'Which Python construct reads all lines from a file into a list in one call?',
    options: ['file.readline()', 'file.read()', 'file.readlines()', 'file.getlines()'],
    answer: 'file.readlines()',
    explanation: 'readlines() reads the entire file and returns each line as an element in a list.',
  },
];

const DataProcessing = () => (
  <CapsSubjectTopic
    title="Data Processing and Validation"
    subtitle="Validating input, processing arrays and handling exceptions"
    learnSteps={learnSteps}
    task="gr11-data-processing-t3"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default DataProcessing;
