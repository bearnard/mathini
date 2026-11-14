import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term1/algorithms/diagram.webp", alt: "Advanced Algorithms" },
    title: 'Algorithm design for complex problems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>algorithm</strong> is a finite, step-by-step sequence of instructions that solves a problem. At Grade 11, algorithms become more complex, involving nested structures and multiple conditions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Procedural decomposition</strong>
            <p className="text-slate-600">Break large problems into smaller, manageable subproblems (subroutines / functions).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Nested structures</strong>
            <p className="text-slate-600">Loops inside loops, conditions inside loops — used for 2D data, pattern matching, etc.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Bubble sort',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Bubble sort</strong> repeatedly compares adjacent elements and swaps them if they are in the wrong order. It "bubbles" the largest unsorted value to the end each pass.
        </p>
        <CodeBlock language="pascal" code={`for i := 0 to n-2 do
  for j := 0 to n-2-i do
    if arr[j] > arr[j+1] then
      swap arr[j] and arr[j+1]`} />
        <p className="text-sm text-slate-600">Worst-case: O(n²) comparisons. Suitable for small arrays or nearly sorted data.</p>
      </div>
    ),
  },
  {
    title: 'Linear and binary search',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Searching algorithms locate a target value in a collection.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Linear (sequential) search</strong>
            <p className="text-slate-600">Check each element one by one. Works on <em>unsorted</em> data. O(n) worst case.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Binary search</strong>
            <p className="text-slate-600">Requires a <em>sorted</em> array. Halves the search space each step. O(log n) worst case — much faster for large arrays.</p>
          </div>
        </div>
        <CodeBlock language="pascal" code={`Binary search steps:
1. low=0, high=n-1
2. mid = (low+high) div 2
3. if arr[mid]=target → found
4. if target < arr[mid] → high=mid-1
5. else → low=mid+1
6. repeat until low > high`} />
      </div>
    ),
  },
  {
    title: 'Procedural decomposition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Procedural decomposition</strong> divides a large problem into smaller subproblems, each solved by a separate subroutine (function or procedure).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Benefits</strong>
            <p className="text-slate-600">Easier to read, test, reuse and debug. Each subroutine does one thing well (single responsibility).</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Design approach</strong>
            <p className="text-slate-600">Top-down design: start with the main problem and decompose it into sub-tasks before writing code.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'After one full pass of bubble sort on [5, 3, 8, 1], which element is guaranteed to be in its final position?',
    options: ['5', '3', '8', '1'],
    answer: '8',
    explanation: 'One pass of bubble sort moves the largest element to the last position. 8 is the largest in this array.',
  },
  {
    prompt: 'What is the minimum requirement for binary search to work correctly?',
    options: [
      'The array must contain only integers',
      'The array must be sorted in ascending order',
      'The array must have an odd number of elements',
      'The array must not contain duplicates',
    ],
    answer: 'The array must be sorted in ascending order',
    explanation: 'Binary search relies on sorted order to determine which half to discard at each step.',
  },
  {
    prompt: 'How many comparisons does binary search need to find a value in a sorted array of 16 elements (worst case)?',
    options: ['16', '8', '4', '2'],
    answer: '4',
    explanation: 'Binary search is O(log₂ n). log₂(16) = 4, so at most 4 comparisons are needed.',
  },
  {
    prompt: 'Which searching algorithm works on both sorted and unsorted arrays?',
    options: ['Binary search', 'Interpolation search', 'Linear (sequential) search', 'Jump search'],
    answer: 'Linear (sequential) search',
    explanation: 'Linear search checks each element in order, so it does not require the array to be sorted.',
  },
  {
    prompt: 'What is procedural decomposition?',
    options: ['Converting a program into machine code before it runs', 'Splitting a big problem into smaller subroutines', 'A way of sorting the data that is in a list', 'Removing the unused variables from the program code'],
    answer: 'Splitting a big problem into smaller subroutines',
    explanation: 'Procedural decomposition (top-down design) improves readability, reuse, and testing by isolating concerns.',
  },
  {
    prompt: 'During bubble sort, how many passes are needed in the worst case for an array of n elements?',
    options: ['n', 'n − 1', 'n / 2', 'log n'],
    answer: 'n − 1',
    explanation: 'In the worst case (reversed array), n − 1 passes are required to fully sort n elements.',
  },
  {
    prompt: 'In binary search, if target < arr[mid], what happens next?',
    options: [
      'low is set to mid + 1',
      'high is set to mid − 1',
      'The algorithm stops immediately',
      'mid is doubled',
    ],
    answer: 'high is set to mid − 1',
    explanation: 'If the target is less than the middle element, the right half is discarded by moving high down.',
  },
  {
    prompt: 'What is the main advantage of breaking code into subroutines?',
    options: [
      'It makes the program run faster on hardware',
      'It makes code easier to read, test, debug and reuse',
      'It reduces the number of variables needed',
      'It allows the program to use less RAM',
    ],
    answer: 'It makes code easier to read, test, debug and reuse',
    explanation: 'Subroutines encapsulate logic into named units, making maintenance and testing far simpler.',
  },
  {
    prompt: 'A nested loop has an outer loop running 5 times and an inner loop running 4 times. How many total iterations of the inner loop body occur?',
    options: ['5', '4', '9', '20'],
    answer: '20',
    explanation: 'Nested loop total iterations = outer iterations × inner iterations = 5 × 4 = 20.',
  },
  {
    prompt: 'Which algorithm is faster for searching a sorted array of 1 000 000 elements?',
    options: [
      'Linear search — it is simpler',
      'Binary search — it only needs about 20 comparisons',
      'Bubble sort — it rearranges elements first',
      'Both are equally fast',
    ],
    answer: 'Binary search — it only needs about 20 comparisons',
    explanation: 'log₂(1 000 000) ≈ 20. Binary search is O(log n) vs linear search O(n) = 1 000 000 comparisons in the worst case.',
  },
];

const Algorithms = () => (
  <CapsSubjectTopic
    title="Advanced Algorithms"
    subtitle="Sorting, searching and problem-solving with algorithms"
    learnSteps={learnSteps}
    task="gr11-algorithms-t1"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default Algorithms;
