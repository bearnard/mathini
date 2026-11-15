import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import BarModel from '../../../../components/diagrams/maths/BarModel';
import { changeOf, formatRand } from '../../../../components/diagrams/maths/mathsHelpers';

// One shopping problem used on all three slides. Every amount is whole cents and the
// arithmetic lines below are built from these numbers, not typed.
const PAID = 5000;
const PARTS = [
    { name: 'book', cents: 1850 },
    { name: 'pen', cents: 1200 },
];
const SUM = changeOf(PAID, PARTS.map((p) => p.cents));

const learnSteps: LearnStep[] = [
    {
        title: "Read Carefully",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Word problems often hide the maths inside a story. Read the whole question first.</p>
                <p className="mx-auto max-w-md rounded-xl bg-slate-50 p-5 text-left text-slate-700 leading-relaxed">
                    Thandi buys a book for <mark className="rounded bg-amber-200 px-1 font-bold">{formatRand(PARTS[0].cents)}</mark> and a pen for <mark className="rounded bg-amber-200 px-1 font-bold">{formatRand(PARTS[1].cents)}</mark>. She pays with <mark className="rounded bg-amber-200 px-1 font-bold">{formatRand(PAID)}</mark>. <mark className="rounded bg-rose-200 px-1 font-bold">How much change does she get?</mark>
                </p>
                <p className="text-sm text-slate-500"><span className="rounded bg-amber-200 px-1 font-bold">given numbers</span> <span className="rounded bg-rose-200 px-1 font-bold">what to find</span></p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block text-left space-y-3">
                    <p className="font-bold text-slate-800">Ask yourself:</p>
                    <p className="text-slate-500">What numbers are given?</p>
                    <p className="text-slate-500">What is the question asking me to find?</p>
                    <p className="text-slate-500">Are the units rands, kilometres, hours, or something else?</p>
                </div>
            </div>
        )
    },
    {
        title: "Plan the Steps",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Most Grade 6 problems need more than one operation. Decide the order before you calculate.</p>
                <BarModel paid={PAID} parts={PARTS} unknown="change" />
                <p className="text-sm text-slate-500">Draw the bar: the whole, the parts you know, and the part you must find.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                    <div className="bg-indigo-50 p-4 rounded-xl text-indigo-800 font-bold">1. Total</div>
                    <div className="bg-emerald-50 p-4 rounded-xl text-emerald-800 font-bold">2. Calculate each step</div>
                    <div className="bg-amber-50 p-4 rounded-xl text-amber-800 font-bold">3. Answer</div>
                </div>
                <p className="text-slate-500">For shopping: find each cost (multiply if you buy several of one item), add the costs, then subtract the total from the money paid to find the change. Sharing equally means divide.</p>
            </div>
        )
    },
    {
        title: "Calculate and Check",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Write each step clearly, then check whether your answer is reasonable.</p>
                <BarModel paid={PAID} parts={PARTS} unknown="change" solved />
                <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-2">
                    <p className="text-slate-500">{formatRand(PARTS[0].cents)} + {formatRand(PARTS[1].cents)} = <strong>{formatRand(SUM.spent)}</strong></p>
                    <p className="text-slate-500">{formatRand(PAID)} − {formatRand(SUM.spent)} = <strong>{formatRand(SUM.change)} change</strong></p>
                    <p className="text-indigo-600 font-bold">Check: {formatRand(SUM.spent)} + {formatRand(SUM.change)} = {formatRand(SUM.spent + SUM.change)}</p>
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'Sarah has 45 sweets. She shares them equally among 9 friends. How many does each friend get?',
        options: ['4', '5', '6', '9'],
        answer: '5',
        explanation: '45 ÷ 9 = 5 sweets each.'
    },
    {
        prompt: 'A school has 6 classes with 32 learners each. How many learners are there in total?',
        options: ['38', '186', '192', '210'],
        answer: '192',
        explanation: '6 × 32 = 192 learners.'
    },
    {
        prompt: 'Themba earns R120 per day. He works 5 days. He spends R350. How much does he have left?',
        options: ['R230', 'R250', 'R350', 'R600'],
        answer: 'R250',
        explanation: '120 × 5 = R600; R600 − R350 = R250.'
    },
    {
        prompt: 'A bottle holds 250 ml. How many bottles are needed to hold 2 litres?',
        options: ['4', '6', '8', '10'],
        answer: '8',
        explanation: '2 litres = 2 000 ml; 2 000 ÷ 250 = 8 bottles.'
    },
    {
        prompt: 'Tickets cost R35 each. A family of 4 adults and 2 children buys tickets. Adults pay full price; children pay half. What is the total cost?',
        options: ['R140', 'R175', 'R210', 'R245'],
        answer: 'R175',
        explanation: '4 × R35 = R140 for adults; 2 × R17,50 = R35 for children; R140 + R35 = R175.'
    },
    {
        prompt: 'What is the FIRST step when solving a word problem?',
        options: ['Write the answer straight away', 'Draw a diagram at once, before reading', 'Read the problem and find what is asked', 'Do the easiest calculation first'],
        answer: 'Read the problem and find what is asked',
        explanation: 'Always read the whole problem first so you understand what is being asked before you start calculating.'
    }
];

const ProblemSolving = () => (
    <CapsSubjectTopic
        title="Problem Solving"
        subtitle="Multi-step word problems"
        learnSteps={learnSteps}
        task="gr6-problem-solving-t4"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default ProblemSolving;
