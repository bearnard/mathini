import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/it/term1/computer-systems-data-representation-algorithm-design/diagram.webp", alt: "Computer Systems, Data Representation and Algorithm Design" },
    title: 'Computer Architecture',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Core Components of a Computer</h3>
          <p className="text-slate-700 mb-4">
            A computer system consists of hardware and software working together. The main hardware components include:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li><strong>CPU (Central Processing Unit):</strong> The brain of the computer that executes instructions</li>
            <li><strong>RAM (Random Access Memory):</strong> Temporary storage for active programs and data</li>
            <li><strong>Storage Devices:</strong> Hard drives, SSDs for permanent data storage</li>
            <li><strong>Input Devices:</strong> Keyboard, mouse, scanner for data entry</li>
            <li><strong>Output Devices:</strong> Monitor, printer, speakers for displaying results</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Von Neumann Architecture</h4>
          <p className="text-slate-700">
            Most modern computers follow the Von Neumann architecture, where instructions and data share the same memory space. 
            The CPU fetches instructions from memory, decodes them, and executes them in a continuous cycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded">
            <h5 className="font-semibold text-purple-900">Input Processing Output</h5>
            <p className="text-sm text-slate-700 mt-2">Data flows through the system: Input → Processing → Output</p>
          </div>
          <div className="bg-orange-50 p-4 rounded">
            <h5 className="font-semibold text-orange-900">Storage Hierarchy</h5>
            <p className="text-sm text-slate-700 mt-2">Cache → RAM → SSD/HDD → Cloud (speed vs capacity)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Data Representation',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Number Systems</h3>
          <p className="text-slate-700 mb-3">
            Computers use different number systems to represent and process data:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border-2 border-blue-200 p-4 rounded shadow-sm">
            <h4 className="font-bold text-blue-700 mb-2">Binary (Base-2)</h4>
            <p className="text-sm text-slate-600 mb-2">Uses: 0, 1</p>
            <p className="text-xs text-slate-500">Example: 1011₂ = 11₁₀</p>
          </div>
          <div className="bg-white border-2 border-green-200 p-4 rounded shadow-sm">
            <h4 className="font-bold text-green-700 mb-2">Decimal (Base-10)</h4>
            <p className="text-sm text-slate-600 mb-2">Uses: 0-9</p>
            <p className="text-xs text-slate-500">Example: 42₁₀</p>
          </div>
          <div className="bg-white border-2 border-purple-200 p-4 rounded shadow-sm">
            <h4 className="font-bold text-purple-700 mb-2">Hexadecimal (Base-16)</h4>
            <p className="text-sm text-slate-600 mb-2">Uses: 0-9, A-F</p>
            <p className="text-xs text-slate-500">Example: 2A₁₆ = 42₁₀</p>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-2">Binary to Decimal Conversion</h4>
          <CodeBlock language="text" code={`Binary: 1 0 1 0
Powers: 2³ 2² 2¹ 2⁰
Values: 8  4  2  1
        ✓  ✗  ✓  ✗

Result: 8 + 0 + 2 + 0 = 10 in decimal`} />
        </div>
        <div className="bg-red-50 p-4 rounded">
          <h4 className="font-semibold text-red-900 mb-2">Character Encoding</h4>
          <p className="text-slate-700">
            <strong>ASCII:</strong> Uses 7-8 bits to represent characters (A=65, a=97)<br/>
            <strong>Unicode (UTF-8):</strong> Extended character set supporting multiple languages and emojis
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Algorithm Design',
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <h3 className="font-bold text-teal-900 mb-2">What is an Algorithm?</h3>
          <p className="text-slate-700 mb-3">
            An algorithm is a step-by-step procedure for solving a problem or completing a task. 
            Good algorithms are clear, unambiguous, and efficient.
          </p>
          <div className="bg-white p-3 rounded border border-teal-200">
            <h4 className="font-semibold text-teal-800 mb-2">Algorithm Characteristics:</h4>
            <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
              <li><strong>Input:</strong> Zero or more inputs</li>
              <li><strong>Output:</strong> At least one output</li>
              <li><strong>Definiteness:</strong> Each step is clear and unambiguous</li>
              <li><strong>Finiteness:</strong> Terminates after a finite number of steps</li>
              <li><strong>Effectiveness:</strong> Each operation is feasible</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded border border-gray-300">
          <h4 className="font-semibold text-gray-900 mb-3">Example: Algorithm to Find Maximum of Three Numbers</h4>
          <CodeBlock language="text" code={`Algorithm: FindMaximum
Input: Three numbers A, B, C
Output: The largest number

Steps:
1. Start
2. Read A, B, C
3. Set Max = A
4. If B > Max then
     Set Max = B
5. If C > Max then
     Set Max = C
6. Display Max
7. Stop`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">Pseudocode</h5>
            <p className="text-sm text-slate-700">
              Algorithm expressed in plain language with programming structure but without strict syntax
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Flowcharts</h5>
            <p className="text-sm text-slate-700">
              Visual representation using symbols: oval (start/end), rectangle (process), diamond (decision)
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Algorithm Efficiency',
    content: (
      <div className="space-y-6">
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
          <h3 className="font-bold text-rose-900 mb-2">Evaluating Algorithms</h3>
          <p className="text-slate-700 mb-3">
            Not all algorithms are created equal. We evaluate them based on:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li><strong>Time Complexity:</strong> How long the algorithm takes to complete</li>
            <li><strong>Space Complexity:</strong> How much memory the algorithm requires</li>
            <li><strong>Correctness:</strong> Does it produce the right output for all valid inputs?</li>
            <li><strong>Readability:</strong> Can others understand and maintain the code?</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-4 rounded border border-amber-300">
          <h4 className="font-semibold text-amber-900 mb-3">Linear Search vs Binary Search</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-amber-200">
              <p className="font-medium text-amber-800">Linear Search</p>
              <p className="text-sm text-slate-600">Check each element one by one → O(n) time</p>
            </div>
            <div className="bg-white p-3 rounded border border-amber-200">
              <p className="font-medium text-amber-800">Binary Search</p>
              <p className="text-sm text-slate-600">Divide and conquer on sorted data → O(log n) time (much faster!)</p>
            </div>
          </div>
        </div>
        <div className="bg-violet-50 p-4 rounded">
          <h4 className="font-semibold text-violet-900 mb-2">Problem-Solving Approach</h4>
          <ol className="list-decimal ml-6 space-y-2 text-slate-700">
            <li>Understand the problem clearly</li>
            <li>Identify inputs and desired outputs</li>
            <li>Design the algorithm (pseudocode/flowchart)</li>
            <li>Implement in a programming language</li>
            <li>Test with various inputs</li>
            <li>Optimize if needed</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the binary representation of the decimal number 10?',
    options: ['1010', '1100', '1001', '0101'],
    answer: '1010',
    explanation: 'Binary 1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10 in decimal.',
  },
  {
    prompt: 'Which of the following is a primary characteristic of an algorithm?',
    options: ['It is always graphical', 'It has well-defined steps', 'It only works for math', 'It never repeats'],
    answer: 'It has well-defined steps',
    explanation: 'An algorithm is a step-by-step procedure with a clear beginning and end.',
  },
  {
    prompt: 'What is the hexadecimal representation of decimal 255?',
    options: ['FF', '0F', 'F0', '99'],
    answer: 'FF',
    explanation: 'Hexadecimal FF = 15×16 + 15 = 240 + 15 = 255 in decimal.',
  },
  {
    prompt: 'Which component is known as the "brain" of the computer?',
    options: ['RAM', 'Hard Drive', 'CPU', 'Monitor'],
    answer: 'CPU',
    explanation: 'The CPU (Central Processing Unit) executes instructions and performs calculations.',
  },
];

const ComputerSystemsDataRepresentationAlgorithmDesign = () => (
  <CapsSubjectTopic
    title="Computer Systems, Data Representation and Algorithm Design"
    subtitle="Fundamentals of computing and problem-solving"
    learnSteps={learnSteps}
    task="gr10-computer-systems-data-representation-algorithm-design-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ComputerSystemsDataRepresentationAlgorithmDesign;
