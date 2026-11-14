import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
    {
        title: 'Perimeter',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Perimeter is the distance around the outside boundary of a shape.</p>
                <div className="bg-slate-50 p-6 rounded-xl inline-block">
                    <div className="relative mx-auto h-32 w-56 border-4 border-indigo-500 rounded-lg bg-indigo-50">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-indigo-700">length</div>
                        <div className="absolute top-1/2 -left-16 -translate-y-1/2 font-bold text-indigo-700">breadth</div>
                    </div>
                    <p className="text-slate-500 mt-6">For a rectangle: <strong>P = 2 × (l + b)</strong></p>
                    <p className="text-slate-500">Perimeter is measured in <strong>cm</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Area',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Area is the space covered inside a flat shape.</p>
                <div className="bg-emerald-50 p-6 rounded-xl inline-block">
                    <div className="grid grid-cols-5 gap-1">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className="h-8 w-8 rounded bg-emerald-200 border border-emerald-300" />
                        ))}
                    </div>
                    <p className="text-slate-500 mt-6">For a rectangle: <strong>A = l × b</strong></p>
                    <p className="text-slate-500">Area is measured in <strong>cm²</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Squares and Rectangles',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A square is a special rectangle with all sides equal.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                    <div className="bg-amber-50 p-5 rounded-xl">
                        <div className="h-28 w-28 mx-auto bg-amber-200 border-4 border-amber-500 rounded-lg" />
                        <p className="mt-4 font-bold text-amber-800">Square: 6 cm by 6 cm</p>
                        <p className="text-slate-600">Area = 36 cm²</p>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-xl">
                        <div className="h-24 w-40 mx-auto bg-indigo-200 border-4 border-indigo-500 rounded-lg" />
                        <p className="mt-4 font-bold text-indigo-800">Rectangle: 8 cm by 5 cm</p>
                        <p className="text-slate-600">Perimeter = 26 cm</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export const bank: CapsItem[] = [
    {
        prompt: 'The perimeter of a shape is...',
        options: ['the space inside it', 'the total length of its boundary', 'its height times its width', 'half its area'],
        answer: 'the total length of its boundary',
        explanation: 'Perimeter is the total distance around the outside boundary of a shape.',
    },
    {
        prompt: 'A rectangle is 6 cm long and 4 cm wide. What is its perimeter?',
        options: ['10 cm', '20 cm', '24 cm', '48 cm'],
        answer: '20 cm',
        explanation: 'P = 2 × (6 + 4) = 2 × 10 = 20 cm.',
    },
    {
        prompt: 'A rectangle is 8 cm long and 3 cm wide. What is its area?',
        options: ['11 cm²', '22 cm²', '24 cm²', '48 cm²'],
        answer: '24 cm²',
        explanation: 'A = 8 × 3 = 24 cm².',
    },
    {
        prompt: 'A square has side length 5 cm. What is its area?',
        options: ['10 cm²', '20 cm²', '25 cm²', '50 cm²'],
        answer: '25 cm²',
        explanation: 'A = 5 × 5 = 25 cm².',
    },
    {
        prompt: 'A square has side length 7 m. What is its perimeter?',
        options: ['14 m', '21 m', '28 m', '49 m'],
        answer: '28 m',
        explanation: 'P = 4 × 7 = 28 m.',
    },
    {
        prompt: 'What units do we use for area?',
        options: ['cm or m', 'cm² or m² (square units)', 'cm³ or m³', 'just numbers'],
        answer: 'cm² or m² (square units)',
        explanation: 'Area is measured in square units such as cm² or m² because it covers two dimensions.',
    },
    {
        prompt: 'A rectangle has perimeter 18 cm and width 3 cm. What is its length?',
        options: ['5 cm', '6 cm', '9 cm', '15 cm'],
        answer: '6 cm',
        explanation: '2l + 2 × 3 = 18 → 2l = 12 → l = 6 cm.',
    },
];

const AreaPerimeter = () => (
    <CapsSubjectTopic
        title="Area and Perimeter"
        subtitle="Measure the space and the boundary"
        learnSteps={learnSteps}
        task="gr6-area-perimeter-t3"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default AreaPerimeter;
