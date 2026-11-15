import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { AddAndSimplifyBars, AddBars, EquivalentBars, SimplifyBars } from '../../../../components/diagrams/maths/FractionScenes';

type Fraction = {
    numerator: number;
    denominator: number;
};

const FractionDisplay = ({ fraction, className = '' }: { fraction: Fraction; className?: string }) => (
    <span className={`inline-flex flex-col items-center justify-center align-middle font-mono font-bold leading-none ${className}`}>
        <span className="px-2 pb-1">{fraction.numerator}</span>
        <span className="w-full border-t-2 border-current" />
        <span className="px-2 pt-1">{fraction.denominator}</span>
    </span>
);

const learnSteps: LearnStep[] = [
    {
        title: "Equivalent Fractions",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Equivalent fractions name the <strong>same part</strong> of a whole.</p>
                <EquivalentBars />
                <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-4 text-indigo-700">
                    <FractionDisplay fraction={{ numerator: 1, denominator: 2 }} className="text-4xl" />
                    <span className="text-3xl font-bold text-slate-400">=</span>
                    <FractionDisplay fraction={{ numerator: 2, denominator: 4 }} className="text-4xl" />
                    <span className="text-3xl font-bold text-slate-400">=</span>
                    <FractionDisplay fraction={{ numerator: 4, denominator: 8 }} className="text-4xl" />
                </div>
                <p className="text-slate-500 text-sm">Multiply or divide the numerator and denominator by the same number.</p>
            </div>
        )
    },
    {
        title: "Simplify with the HCF",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">To simplify to lowest terms, divide by the <strong>highest common factor</strong> (HCF).</p>
                <SimplifyBars n={12} d={18} />
                <div className="grid grid-cols-3 gap-2 items-center max-w-lg mx-auto">
                    <div className="bg-amber-50 p-5 rounded-xl text-amber-700">
                        <FractionDisplay fraction={{ numerator: 12, denominator: 18 }} className="text-4xl" />
                    </div>
                    <div className="text-sm font-bold text-slate-500">÷ 6 top and bottom</div>
                    <div className="bg-emerald-50 p-5 rounded-xl text-emerald-700">
                        <FractionDisplay fraction={{ numerator: 2, denominator: 3 }} className="text-4xl" />
                    </div>
                </div>
                <p className="text-slate-500 text-sm">The HCF of 12 and 18 is 6, so the lowest terms are two thirds.</p>
            </div>
        )
    },
    {
        title: "Same Denominators",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">When denominators are the same, add or subtract the <strong>numerators only</strong>.</p>
                <AddBars n1={3} n2={2} d={8} />
                <div className="bg-indigo-50 p-6 rounded-xl inline-flex items-center gap-4 text-indigo-700">
                    <FractionDisplay fraction={{ numerator: 3, denominator: 8 }} className="text-4xl" />
                    <span className="text-3xl font-bold text-slate-400">+</span>
                    <FractionDisplay fraction={{ numerator: 2, denominator: 8 }} className="text-4xl" />
                    <span className="text-3xl font-bold text-slate-400">=</span>
                    <FractionDisplay fraction={{ numerator: 5, denominator: 8 }} className="text-4xl" />
                </div>
                <p className="text-slate-500 text-sm">The denominator stays as eighths because the pieces are the same size.</p>
            </div>
        )
    },
    {
        title: "Always Check Your Answer",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">After adding or subtracting, simplify the answer if you can.</p>
                <AddAndSimplifyBars n1={2} n2={1} d={6} />
                <div className="bg-slate-50 p-3 sm:p-6 rounded-xl inline-flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-4 text-slate-800">
                    <FractionDisplay fraction={{ numerator: 2, denominator: 6 }} className="text-xl min-[360px]:text-2xl sm:text-4xl" />
                    <span className="text-xl sm:text-3xl font-bold text-slate-400">+</span>
                    <FractionDisplay fraction={{ numerator: 1, denominator: 6 }} className="text-xl min-[360px]:text-2xl sm:text-4xl" />
                    <span className="text-xl sm:text-3xl font-bold text-slate-400">=</span>
                    <FractionDisplay fraction={{ numerator: 3, denominator: 6 }} className="text-xl min-[360px]:text-2xl sm:text-4xl" />
                    <span className="text-xl sm:text-3xl font-bold text-slate-400">=</span>
                    <FractionDisplay fraction={{ numerator: 1, denominator: 2 }} className="text-xl min-[360px]:text-2xl sm:text-4xl text-emerald-700" />
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'What is the HCF of 8 and 12?',
        options: ['2', '3', '4', '6'],
        answer: '4',
        explanation: 'The factors of 8 are 1, 2, 4, 8 and the factors of 12 are 1, 2, 3, 4, 6, 12. The highest common factor is 4.'
    },
    {
        prompt: 'Simplify 6/9.',
        options: ['1/3', '2/3', '3/4', '3/5'],
        answer: '2/3',
        explanation: 'The HCF of 6 and 9 is 3. Dividing top and bottom by 3 gives 2/3.'
    },
    {
        prompt: 'Which pair of fractions has the same denominator?',
        options: ['1/2 and 1/3', '2/5 and 3/4', '3/8 and 5/8', '1/6 and 1/4'],
        answer: '3/8 and 5/8',
        explanation: '3/8 and 5/8 both have a denominator of 8, so they share the same denominator.'
    },
    {
        prompt: 'What is 1/4 + 2/4?',
        options: ['3/8', '3/4', '2/4', '1/2'],
        answer: '3/4',
        explanation: 'The denominators are the same, so add the numerators: 1 + 2 = 3. The answer is 3/4.'
    },
    {
        prompt: 'What is 5/6 − 1/6?',
        options: ['4/12', '4/6', '6/6', '3/6'],
        answer: '4/6',
        explanation: 'The denominators are the same, so subtract the numerators: 5 − 1 = 4. The answer is 4/6.'
    },
    {
        prompt: 'To add 1/3 and 1/6, what common denominator should you use?',
        options: ['3', '6', '4', '5'],
        answer: '6',
        explanation: '6 is the lowest common multiple of 3 and 6. Convert 1/3 to 2/6, then add: 2/6 + 1/6 = 3/6.'
    },
    {
        prompt: 'Which fraction is equivalent to 3/4?',
        options: ['4/6', '5/8', '6/8', '3/6'],
        answer: '6/8',
        explanation: 'Multiply numerator and denominator by 2: 3 × 2 = 6 and 4 × 2 = 8, giving 6/8.'
    },
];

const CommonFractions = () => (
    <CapsSubjectTopic
        title="Common Fractions"
        subtitle="Simplify, compare and add fractions"
        learnSteps={learnSteps}
        task="gr6-common-fractions-t2"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default CommonFractions;
