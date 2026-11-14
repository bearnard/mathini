import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
    {
        title: "Number Sentences",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A <strong>number sentence</strong> uses numbers, signs and an equals sign to show a maths idea.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                    <p className="text-4xl font-mono font-bold text-indigo-600">7 + □ = 12</p>
                    <p className="text-slate-500">The box is an <strong>unknown</strong> number.</p>
                </div>
            </div>
        )
    },
    {
        title: "The Equals Sign Balances",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">The equals sign means <strong>both sides have the same value</strong>.</p>
                <div className="grid grid-cols-3 gap-2 items-center max-w-lg mx-auto">
                    <div className="bg-emerald-50 p-5 rounded-xl text-2xl font-mono font-bold text-emerald-700">8 + 4</div>
                    <div className="text-3xl font-bold text-slate-400">=</div>
                    <div className="bg-amber-50 p-5 rounded-xl text-2xl font-mono font-bold text-amber-700">12</div>
                </div>
                <p className="text-slate-500 text-sm mt-4">If one side is 12, the other side must also be 12.</p>
            </div>
        )
    },
    {
        title: "From Words to Equations",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Look for the important numbers and the action in the word problem.</p>
                <div className="bg-indigo-50 p-6 rounded-xl max-w-xl mx-auto space-y-4">
                    <p className="text-slate-700">Naledi has 9 marbles. She gets some more and now has 15.</p>
                    <p className="text-3xl font-mono font-bold text-indigo-700">9 + □ = 15</p>
                    <p className="text-slate-500">The unknown is the number of marbles she got.</p>
                </div>
            </div>
        )
    },
    {
        title: "Solve the Unknown",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Choose the number that makes the sentence true.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block space-y-3">
                    <p className="text-4xl font-mono font-bold text-slate-800">3 × □ = 18</p>
                    <p className="text-slate-500">Because <strong>3 × 6 = 18</strong>, the unknown is <strong>6</strong>.</p>
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'Tom has 24 apples. He gives some away and has 9 left. Which number sentence shows this?',
        options: ['24 + n = 9', '24 − n = 9', 'n − 24 = 9', '24 × n = 9'],
        answer: '24 − n = 9',
        explanation: 'Tom starts with 24, gives n away, and 9 remain. This is written as 24 − n = 9.'
    },
    {
        prompt: 'In 15 + n = 23, what is n?',
        options: ['7', '8', '38', '15'],
        answer: '8',
        explanation: 'Subtract 15 from both sides: n = 23 − 15 = 8. Check: 15 + 8 = 23.'
    },
    {
        prompt: 'In 4 × n = 36, what is n?',
        options: ['8', '9', '32', '40'],
        answer: '9',
        explanation: 'Divide both sides by 4: n = 36 ÷ 4 = 9. Check: 4 × 9 = 36.'
    },
    {
        prompt: 'The equation is 7 + n = 15. What is n?',
        options: ['6', '7', '8', '22'],
        answer: '8',
        explanation: 'Subtract 7 from both sides: n = 15 − 7 = 8. Check: 7 + 8 = 15.'
    },
    {
        prompt: "Which number sentence matches 'Five times a number equals thirty'?",
        options: ['5 + n = 30', 'n − 5 = 30', '5 × n = 30', '30 ÷ n = 5'],
        answer: '5 × n = 30',
        explanation: "'Five times a number' means 5 × n. 'Equals thirty' means = 30. So the sentence is 5 × n = 30."
    },
    {
        prompt: 'What is the unknown in 48 ÷ n = 6?',
        options: ['6', '7', '8', '42'],
        answer: '8',
        explanation: 'Rearrange: n = 48 ÷ 6 = 8. Check: 48 ÷ 8 = 6.'
    },
    {
        prompt: 'What does the equals sign (=) mean in a number sentence?',
        options: ['Add the numbers', 'Both sides have the same value', 'The answer is on the right', 'Multiply the numbers'],
        answer: 'Both sides have the same value',
        explanation: 'The equals sign means both sides of the number sentence balance — they represent the same value.'
    },
];

const NumberSentences = () => (
    <CapsSubjectTopic
        title="Number Sentences"
        subtitle="Write equations from words and solve for unknowns"
        learnSteps={learnSteps}
        task="gr6-number-sentences-t2"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default NumberSentences;
