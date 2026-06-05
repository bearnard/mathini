import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Von Neumann architecture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Von Neumann architecture</strong> is the foundation of modern computers. It stores both program instructions and data in the same memory unit.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">CPU (Central Processing Unit)</strong>
            <p className="text-slate-600">The "brain" — fetches, decodes and executes instructions. Contains the ALU, Control Unit and registers.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Memory (RAM)</strong>
            <p className="text-slate-600">Stores both instructions and data currently in use. Volatile — lost when power is removed.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Input devices</strong>
            <p className="text-slate-600">Feed raw data into the computer (keyboard, mouse, scanner, microphone).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Output devices</strong>
            <p className="text-slate-600">Display or transmit processed results (monitor, printer, speakers).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Inside the CPU',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The CPU has three key internal components:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">ALU</strong>
            <p className="text-slate-600">Arithmetic Logic Unit — performs calculations (+, −, ×, ÷) and logical comparisons (AND, OR, NOT, compare).</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Control Unit (CU)</strong>
            <p className="text-slate-600">Directs the flow of data between CPU components; fetches and decodes instructions.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Registers</strong>
            <p className="text-slate-600">Ultra-fast, tiny storage inside the CPU. Key registers: Program Counter (PC), Instruction Register (IR), Accumulator (ACC).</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Clock speed (GHz) measures how many fetch-decode-execute cycles the CPU completes per second.</p>
      </div>
    ),
  },
  {
    title: 'The three buses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Components communicate via three <strong>buses</strong> — sets of parallel electrical pathways:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Data bus</strong>
            <p className="text-slate-600">Carries the actual <em>data</em> between CPU, memory and I/O. Width (8/16/32/64-bit) affects how much data moves at once.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Address bus</strong>
            <p className="text-slate-600">Carries the <em>memory address</em> the CPU wants to read from or write to. Unidirectional (CPU → memory only).</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Control bus</strong>
            <p className="text-slate-600">Carries <em>control signals</em> (read/write, interrupt, clock) to coordinate all components.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fetch–Decode–Execute cycle',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The CPU continually repeats the <strong>fetch–decode–execute (FDE) cycle</strong> to process instructions:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <ol className="list-decimal list-inside text-slate-700 space-y-2">
            <li><strong>Fetch:</strong> CU reads next instruction from RAM into the Instruction Register; PC increments.</li>
            <li><strong>Decode:</strong> CU interprets the instruction to determine what operation is needed.</li>
            <li><strong>Execute:</strong> ALU or other component carries out the instruction.</li>
          </ol>
        </div>
        <p className="text-sm text-slate-600">This cycle repeats billions of times per second on modern CPUs.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'Which component of the CPU performs arithmetic calculations and logical comparisons?',
    options: ['Control Unit', 'Program Counter', 'Arithmetic Logic Unit (ALU)', 'Cache memory'],
    answer: 'Arithmetic Logic Unit (ALU)',
    explanation: 'The ALU handles all maths operations and logical comparisons (e.g. AND, OR, greater than).',
  },
  {
    prompt: 'What is the role of the Program Counter (PC) register?',
    options: [
      'Store the result of the last calculation',
      'Hold the address of the next instruction to be fetched',
      'Control the speed of the CPU clock',
      'Cache recently used data',
    ],
    answer: 'Hold the address of the next instruction to be fetched',
    explanation: 'The PC stores the memory address of the next instruction. After each fetch it increments to point to the following instruction.',
  },
  {
    prompt: 'Which bus carries the actual data being transferred between the CPU and memory?',
    options: ['Address bus', 'Control bus', 'Data bus', 'System bus'],
    answer: 'Data bus',
    explanation: 'The data bus transfers the actual data values; the address bus carries memory addresses; the control bus carries signals.',
  },
  {
    prompt: 'Why is the address bus described as unidirectional?',
    options: [
      'Data flows both ways on it',
      'Only the CPU sends addresses to memory, not the other way round',
      'It only carries control signals',
      'It connects only input devices',
    ],
    answer: 'Only the CPU sends addresses to memory, not the other way round',
    explanation: 'The CPU specifies which memory location to access; memory does not send addresses back to the CPU.',
  },
  {
    prompt: 'What is the correct order of the fetch–decode–execute cycle?',
    options: [
      'Execute → Fetch → Decode',
      'Decode → Execute → Fetch',
      'Fetch → Decode → Execute',
      'Fetch → Execute → Decode',
    ],
    answer: 'Fetch → Decode → Execute',
    explanation: 'The CPU first fetches the instruction from RAM, decodes it to understand what to do, then executes the operation.',
  },
  {
    prompt: 'What does RAM stand for, and what is its key characteristic?',
    options: [
      'Read-Access Memory — it is permanent',
      'Random-Access Memory — it is volatile (data lost without power)',
      'Rapid-Action Memory — it is the fastest storage',
      'Read-And-Modify memory — it is write-protected',
    ],
    answer: 'Random-Access Memory — it is volatile (data lost without power)',
    explanation: 'RAM stores data currently in use and is volatile — its contents are erased when the computer is switched off.',
  },
  {
    prompt: 'A wider data bus (e.g. 64-bit vs 32-bit) means:',
    options: [
      'The CPU runs at a higher clock speed',
      'More data can be transferred in each bus cycle',
      'Less RAM is required',
      'The address space is halved',
    ],
    answer: 'More data can be transferred in each bus cycle',
    explanation: 'A 64-bit data bus transfers twice as many bits per cycle as a 32-bit bus, improving throughput.',
  },
  {
    prompt: 'Which component is responsible for fetching and decoding instructions?',
    options: ['ALU', 'Control Unit (CU)', 'Accumulator', 'Hard disk'],
    answer: 'Control Unit (CU)',
    explanation: 'The Control Unit manages the FDE cycle — it fetches instructions from memory and decodes them.',
  },
  {
    prompt: 'Where in the memory hierarchy does cache memory sit?',
    options: [
      'Between secondary storage and RAM',
      'Between the CPU registers and RAM',
      'Below the hard disk',
      'Outside the CPU chip',
    ],
    answer: 'Between the CPU registers and RAM',
    explanation: 'Cache is faster than RAM but smaller. It sits between CPU registers (fastest) and main memory (RAM), buffering frequently used data.',
  },
  {
    prompt: 'What does the Instruction Register (IR) hold?',
    options: [
      'The result of the most recent calculation',
      'The current instruction being decoded and executed',
      'The address of the next instruction',
      'The number of instructions executed so far',
    ],
    answer: 'The current instruction being decoded and executed',
    explanation: 'After fetching, the instruction is placed in the IR so the Control Unit can decode and act on it.',
  },
];

const ComputerArchitecture = () => (
  <CapsSubjectTopic
    title="Computer Architecture"
    subtitle="Understanding how hardware components work together"
    learnSteps={learnSteps}
    task="gr11-computer-architecture-t2"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default ComputerArchitecture;
