import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import MeasureLadder from '../../../../components/diagrams/maths/MeasureLadder';
import { workedExample } from '../../../../components/diagrams/maths/mathsHelpers';

const learnSteps: LearnStep[] = [
    {
        title: 'Meet the Units',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Length tells us how long, wide, tall or far something is.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-indigo-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-indigo-700">mm</div>
                        <p className="text-sm text-slate-500">tiny lengths</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-700">cm</div>
                        <p className="text-sm text-slate-500">rulers and books</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-amber-700">m</div>
                        <p className="text-sm text-slate-500">rooms and people</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-rose-700">km</div>
                        <p className="text-sm text-slate-500">long distances</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Conversion Facts',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Use these facts to change from one unit to another.</p>
                <MeasureLadder kind="length" />
                <div className="flex flex-wrap justify-center gap-2 text-sm font-bold">
                    <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-amber-800">{workedExample('length', 3, 'm', 'cm')}</span>
                    <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-sky-800">{workedExample('length', 2000, 'm', 'km')}</span>
                </div>
                <p className="text-slate-500">To change to a smaller unit, multiply. To change to a larger unit, divide.</p>
            </div>
        ),
    },
    {
        title: 'Choose Sensible Units',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Good measuring starts by choosing a unit that makes sense.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                    <div className="bg-white border border-slate-200 p-4 rounded-xl">
                        <p className="font-bold text-slate-800">Pencil tip</p>
                        <p className="text-indigo-600">millimetres</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-xl">
                        <p className="font-bold text-slate-800">Classroom door</p>
                        <p className="text-indigo-600">metres</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-xl">
                        <p className="font-bold text-slate-800">Trip to town</p>
                        <p className="text-indigo-600">kilometres</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export const bank: CapsItem[] = [
    {
        prompt: 'How many centimetres are in 1 metre?',
        options: ['10', '100', '1 000', '10 000'],
        answer: '100',
        explanation: 'One metre is made up of 100 centimetres, so 1 m = 100 cm.',
    },
    {
        prompt: 'How many metres are in 1 kilometre?',
        options: ['100', '1 000', '10 000', '100 000'],
        answer: '1 000',
        explanation: '1 km = 1 000 m.',
    },
    {
        prompt: 'Convert 3,5 m to centimetres.',
        options: ['35 cm', '350 cm', '3 500 cm', '3,5 cm'],
        answer: '350 cm',
        explanation: '3,5 × 100 = 350 cm.',
    },
    {
        prompt: 'Convert 4 000 m to kilometres.',
        options: ['0,4 km', '4 km', '40 km', '400 km'],
        answer: '4 km',
        explanation: '4 000 ÷ 1 000 = 4 km.',
    },
    {
        prompt: 'Which unit is best for measuring the length of a pencil?',
        options: ['millimetres', 'centimetres', 'metres', 'kilometres'],
        answer: 'centimetres',
        explanation: 'A pencil is roughly 15–20 cm long, so centimetres is the most sensible unit.',
    },
    {
        prompt: 'How many millimetres are in 1 centimetre?',
        options: ['1', '10', '100', '1 000'],
        answer: '10',
        explanation: 'One centimetre is made up of 10 millimetres, so 1 cm = 10 mm.',
    },
    {
        prompt: 'A road is 2,5 km long. How many metres is that?',
        options: ['250 m', '2 500 m', '25 000 m', '0,25 m'],
        answer: '2 500 m',
        explanation: '2,5 × 1 000 = 2 500 m.',
    },
];

const Length = () => (
    <CapsSubjectTopic
        title="Length"
        subtitle="Units, conversions and measuring"
        learnSteps={learnSteps}
        task="gr6-length-t3"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default Length;
