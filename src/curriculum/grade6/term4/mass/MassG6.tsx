import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import MeasureLadder from '../../../../components/diagrams/maths/MeasureLadder';
import { workedExample } from '../../../../components/diagrams/maths/mathsHelpers';

const learnSteps: LearnStep[] = [
    {
        title: 'Mass Units',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Mass tells us how heavy something is. We use <strong>grams</strong>, <strong>kilograms</strong> and <strong>tonnes</strong>.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-amber-50 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-amber-700">g</div>
                        <p className="text-slate-600">small masses, like a pencil</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-indigo-700">kg</div>
                        <p className="text-slate-600">everyday masses, like a school bag</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-emerald-700">t</div>
                        <p className="text-slate-600">very heavy masses, like a truck</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Converting Mass',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Use the conversion facts to move between units.</p>
                <MeasureLadder kind="mass" />
                <div className="flex flex-wrap justify-center gap-2 text-sm font-bold">
                    <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-amber-800">{workedExample('mass', 2, 'kg', 'g')}</span>
                    <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-sky-800">{workedExample('mass', 3000, 'g', 'kg')}</span>
                </div>
                <p className="text-slate-500">Multiply by 1 000 to change to a smaller unit. Divide by 1 000 to change to a larger unit.</p>
            </div>
        )
    },
    {
        title: 'Reading Scales',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Look carefully at the unit and the size of each mark on a scale.</p>
                <div className="bg-slate-50 p-6 rounded-xl max-w-lg mx-auto">
                    <div className="flex justify-between items-end text-sm text-slate-500 mb-2">
                        <span>0 kg</span>
                        <span>1 kg</span>
                        <span>2 kg</span>
                        <span>3 kg</span>
                    </div>
                    <div className="relative h-4 bg-slate-200 rounded-full">
                        <div className="absolute left-0 top-0 h-4 w-1/2 bg-indigo-500 rounded-full" />
                        <div className="absolute left-1/2 -top-2 w-1 h-8 bg-indigo-800 rounded" />
                    </div>
                    <p className="mt-6 text-slate-600">Halfway between 1 kg and 2 kg is <strong>1,5 kg</strong>, or <strong>1 500 g</strong>.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Solving Problems',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">For mass problems, convert first, then calculate.</p>
                <div className="bg-indigo-50 p-6 rounded-xl max-w-lg mx-auto text-left space-y-3">
                    <p className="font-semibold text-indigo-900">Example: 2 kg + 750 g</p>
                    <p className="text-slate-600">2 kg = 2 000 g</p>
                    <p className="text-slate-600">2 000 g + 750 g = <strong>2 750 g</strong></p>
                </div>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'How many grams are in 1 kilogram?',
        options: ['100 g', '1 000 g', '10 000 g', '100 000 g'],
        answer: '1 000 g',
        explanation: '1 kilogram = 1 000 grams.'
    },
    {
        prompt: 'How many kilograms are in 1 tonne?',
        options: ['100 kg', '1 000 kg', '10 000 kg', '100 kg'],
        answer: '1 000 kg',
        explanation: '1 tonne = 1 000 kilograms.'
    },
    {
        prompt: 'Convert 3.5 kg to grams.',
        options: ['350 g', '3 500 g', '35 000 g', '0.35 g'],
        answer: '3 500 g',
        explanation: '3.5 × 1 000 = 3 500 g.'
    },
    {
        prompt: 'Convert 500 g to kilograms.',
        options: ['0,05 kg', '0,5 kg', '5 kg', '50 kg'],
        answer: '0,5 kg',
        explanation: '500 ÷ 1 000 = 0,5 kg.'
    },
    {
        prompt: 'Which unit is best for measuring the mass of a car?',
        options: ['grams', 'kilograms', 'tonnes', 'milligrams'],
        answer: 'tonnes',
        explanation: 'A car has a very large mass, so tonnes is the most appropriate unit.'
    },
    {
        prompt: 'A scale shows 2 kg and 750 g. What is the total mass in grams?',
        options: ['2 075 g', '2 750 g', '27 500 g', '750 g'],
        answer: '2 750 g',
        explanation: '2 kg = 2 000 g, then 2 000 + 750 = 2 750 g.'
    },
    {
        prompt: 'A bag of flour has mass 2 kg. You use 750 g. How much is left?',
        options: ['750 g', '1 250 g', '1 750 g', '2 750 g'],
        answer: '1 250 g',
        explanation: '2 kg = 2 000 g; 2 000 − 750 = 1 250 g.'
    }
];

const MassG6 = () => (
    <CapsSubjectTopic
        title="Mass"
        subtitle="Grams, kilograms and tonnes"
        learnSteps={learnSteps}
        task="gr6-mass-t4"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default MassG6;
