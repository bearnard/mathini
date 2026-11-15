import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { AreaGrid, PerimeterGrid, ShapePair } from '../../../../components/diagrams/maths/AreaPerimeter';

const learnSteps: LearnStep[] = [
    {
        title: 'Perimeter',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Perimeter is the distance around the outside boundary of a shape.</p>
                <PerimeterGrid length={6} breadth={4} />
                <div className="bg-slate-50 p-4 rounded-xl inline-block">
                    <p className="text-slate-500 mt-6">For a rectangle: <strong>P = 2 × (l + b)</strong></p>
                    <p className="text-slate-500">Perimeter is a length, so it is measured in units such as <strong>cm</strong> or <strong>m</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Area',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Area is the space covered inside a flat shape.</p>
                <AreaGrid length={6} breadth={4} />
                <div className="bg-emerald-50 p-4 rounded-xl inline-block">
                    <p className="text-slate-500 mt-6">For a rectangle: <strong>A = l × b</strong></p>
                    <p className="text-slate-500">Area is measured in square units such as <strong>cm²</strong> or <strong>m²</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Squares and Rectangles',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A square is a special rectangle with all sides equal.</p>
                <ShapePair />
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
        options: ['cm or m (length units)', 'cm² or m² (square units)', 'cm³ or m³ (cubic units)', 'just plain numbers'],
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
