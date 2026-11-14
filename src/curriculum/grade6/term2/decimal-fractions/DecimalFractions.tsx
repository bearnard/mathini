import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
    {
        title: "Tenths and Hundredths",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Digits after the decimal comma or point show parts smaller than one whole.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block">
                    <div className="flex justify-center gap-1 text-4xl font-mono font-bold mb-2">
                        <span className="text-slate-400">2</span>
                        <span className="text-slate-500">.</span>
                        <span className="text-indigo-600">4</span>
                        <span className="text-emerald-600">7</span>
                    </div>
                    <p className="text-slate-500">The 4 is in the <strong>tenths</strong> place.</p>
                    <p className="text-slate-500">The 7 is in the <strong>hundredths</strong> place.</p>
                </div>
            </div>
        )
    },
    {
        title: "Fractions to Decimals",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Tenths and hundredths can be written as decimal fractions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="bg-indigo-50 p-5 rounded-xl">
                        <p className="text-3xl font-bold text-indigo-700">3/10 = 0.3</p>
                        <p className="text-sm text-slate-500 mt-2">Three tenths</p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-xl">
                        <p className="text-3xl font-bold text-emerald-700">7/100 = 0.07</p>
                        <p className="text-sm text-slate-500 mt-2">Seven hundredths</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Adding and Subtracting",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Line up the decimal points, then add or subtract each place value.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block font-mono text-3xl font-bold text-slate-800">
                    <div className="text-right">0.45</div>
                    <div className="text-right text-indigo-600">+ 0.30</div>
                    <div className="border-t-2 border-slate-300 mt-2 pt-2 text-right text-emerald-600">0.75</div>
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'Write 3/10 as a decimal.',
        options: ['0,03', '0,3', '3,0', '30'],
        answer: '0,3',
        explanation: '3/10 means 3 tenths. The tenths digit goes one place after the decimal comma, so 3/10 = 0,3.'
    },
    {
        prompt: 'Write 7/100 as a decimal.',
        options: ['0,7', '0,07', '7,0', '0,007'],
        answer: '0,07',
        explanation: '7/100 means 7 hundredths. The hundredths digit goes two places after the decimal comma, so 7/100 = 0,07.'
    },
    {
        prompt: 'What is 0.4 + 0.3?',
        options: ['0.07', '0.7', '7', '0.12'],
        answer: '0.7',
        explanation: 'Line up the decimal points and add the tenths: 4 + 3 = 7 tenths, so the answer is 0.7.'
    },
    {
        prompt: 'What is 0.85 − 0.3?',
        options: ['0.25', '0.45', '0.55', '0.65'],
        answer: '0.55',
        explanation: 'Write 0.3 as 0.30, then subtract: 0.85 − 0.30 = 0.55.'
    },
    {
        prompt: 'Which decimal is between 0.4 and 0.6?',
        options: ['0.3', '0.5', '0.7', '0.04'],
        answer: '0.5',
        explanation: '0.5 is exactly halfway between 0.4 and 0.6. The others are outside that range.'
    },
    {
        prompt: 'Write 0.25 as a fraction in its simplest form.',
        options: ['25/10', '1/4', '2/5', '1/2'],
        answer: '1/4',
        explanation: '0.25 = 25/100. The HCF of 25 and 100 is 25, so 25/100 = 1/4.'
    },
    {
        prompt: 'What is 1.3 + 0.7?',
        options: ['1.0', '1.37', '2.0', '20'],
        answer: '2.0',
        explanation: 'Line up the decimal points: 1.3 + 0.7. The tenths add up to 10, which carries over to give 2.0.'
    },
];

const DecimalFractions = () => (
    <CapsSubjectTopic
        title="Decimal Fractions"
        subtitle="Tenths, hundredths and decimal arithmetic"
        learnSteps={learnSteps}
        task="gr6-decimal-fractions-t2"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default DecimalFractions;
