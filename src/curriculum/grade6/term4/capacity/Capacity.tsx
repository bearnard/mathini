import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import MeasuringJug from '../../../../components/diagrams/maths/MeasuringJug';
import MeasureLadder from '../../../../components/diagrams/maths/MeasureLadder';
import { workedExample } from '../../../../components/diagrams/maths/mathsHelpers';

const learnSteps: LearnStep[] = [
    {
        title: "Capacity and Volume",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600"><strong>Capacity</strong> is how much a container can hold. <strong>Volume</strong> is how much space the liquid or object takes up.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                    <div className="bg-indigo-50 p-5 rounded-xl">
                        <div className="text-4xl mb-2">🧃</div>
                        <p className="font-bold text-indigo-800">Carton capacity</p>
                        <p className="text-slate-500">It can hold 1 l.</p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-xl">
                        <div className="text-4xl mb-2">💧</div>
                        <p className="font-bold text-emerald-800">Juice volume</p>
                        <p className="text-slate-500">It has 750 ml inside now.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Metric Units",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">We measure capacity in millilitres, litres and kilolitres.</p>
                <div className="grid grid-cols-3 gap-2 text-center max-w-lg mx-auto">
                    <div className="bg-amber-100 p-2 rounded-t-lg text-amber-800 font-bold text-sm">ml</div>
                    <div className="bg-indigo-100 p-2 rounded-t-lg text-indigo-800 font-bold text-sm">l</div>
                    <div className="bg-emerald-100 p-2 rounded-t-lg text-emerald-800 font-bold text-sm">kl</div>

                    <div className="min-w-0 break-words bg-amber-50 px-2 py-3 md:p-4 rounded-b-lg text-sm sm:text-base md:text-lg font-bold text-amber-900">medicine spoon</div>
                    <div className="min-w-0 break-words bg-indigo-50 px-2 py-3 md:p-4 rounded-b-lg text-sm sm:text-base md:text-lg font-bold text-indigo-900">milk bottle</div>
                    <div className="min-w-0 break-words bg-emerald-50 px-2 py-3 md:p-4 rounded-b-lg text-sm sm:text-base md:text-lg font-bold text-emerald-900">water tank</div>
                </div>
                <MeasureLadder kind="capacity" />
                <div className="flex flex-wrap justify-center gap-2 text-sm font-bold">
                    <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-amber-800">{workedExample('capacity', 4, 'l', 'ml')}</span>
                    <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-sky-800">{workedExample('capacity', 3000, 'ml', 'l')}</span>
                </div>
            </div>
        )
    },
    {
        title: "Reading a Measuring Jug",
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Check the size of each interval before reading the water level.</p>
                <MeasuringJug ml={500} />
                <p className="text-slate-500">This jug reads <strong>500 ml</strong>, which is half a litre. Each mark is 250 ml.</p>
            </div>
        )
    }
];

export const bank: CapsItem[] = [
    {
        prompt: 'How many millilitres are in 1 litre?',
        options: ['100 ml', '1 000 ml', '10 000 ml', '500 ml'],
        answer: '1 000 ml',
        explanation: '1 litre = 1 000 millilitres.'
    },
    {
        prompt: 'Convert 2,5 litres to millilitres.',
        options: ['250 ml', '2 500 ml', '25 000 ml', '0,25 ml'],
        answer: '2 500 ml',
        explanation: '2,5 × 1 000 = 2 500 ml.'
    },
    {
        prompt: 'Convert 750 ml to litres.',
        options: ['0,075 l', '0,75 l', '7,5 l', '75 l'],
        answer: '0,75 l',
        explanation: '750 ÷ 1 000 = 0,75 l.'
    },
    {
        prompt: 'A bottle holds 500 ml. How many bottles are needed to fill a 2-litre container?',
        options: ['2', '4', '5', '10'],
        answer: '4',
        explanation: '2 000 ÷ 500 = 4 bottles.'
    },
    {
        prompt: 'Which unit is best for measuring the amount of water in a swimming pool?',
        options: ['millilitres', 'teaspoons', 'kilolitres', 'centimetres'],
        answer: 'kilolitres',
        explanation: 'Swimming pools hold very large amounts of water, so kilolitres is the most appropriate unit.'
    },
    {
        prompt: 'A jug is marked at 250 ml, 500 ml, 750 ml, 1 000 ml. Water reaches the third mark. How much is in the jug?',
        options: ['500 ml', '750 ml', '1 000 ml', '250 ml'],
        answer: '750 ml',
        explanation: 'The third mark from the bottom is 750 ml.'
    }
];

const Capacity = () => (
    <CapsSubjectTopic
        title="Capacity"
        subtitle="Millilitres, litres and how much it holds"
        learnSteps={learnSteps}
        task="gr6-capacity-t4"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default Capacity;
