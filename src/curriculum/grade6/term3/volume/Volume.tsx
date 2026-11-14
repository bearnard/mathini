import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import CubeStack from '../../../../components/diagrams/maths/CubeStack';

const learnSteps: LearnStep[] = [
    {
        title: 'What is volume?',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Volume tells us how much <strong>space</strong> a solid object takes up.</p>
                <CubeStack length={4} breadth={3} height={1} showCount />
                <div className="bg-slate-50 p-4 rounded-xl inline-block">
                    <p className="text-slate-500">Count the unit cubes to find the volume.</p>
                    <p className="text-slate-500">This model has <strong>12 cubic units</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Cubic centimetres',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A cube that is 1 cm long, 1 cm wide and 1 cm high has a volume of <strong>1 cm³</strong>.</p>
                <CubeStack length={1} breadth={1} height={1} showDims caption="1 cm³" />
                <p className="text-slate-500 text-sm">We use cubic units such as cm³ because volume fills three dimensions.</p>
            </div>
        ),
    },
    {
        title: 'Length × breadth × height',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">For a rectangular prism, multiply the three dimensions.</p>
                <CubeStack length={4} breadth={3} height={2} showDims showSum />
                <div className="bg-indigo-50 p-6 rounded-xl max-w-md mx-auto">
                    <p className="text-xl font-bold text-indigo-900 mb-4">Volume = length × breadth × height</p>
                    <p className="text-slate-600">Example: 4 cm × 3 cm × 2 cm</p>
                    <p className="text-3xl font-bold text-indigo-700 mt-2">= 24 cm³</p>
                </div>
                <p className="text-slate-500 text-sm">This is the same as counting 24 unit cubes.</p>
            </div>
        ),
    },
];

export const bank: CapsItem[] = [
    {
        prompt: 'Volume is...',
        options: ['the area of its faces', 'the distance around it', 'the amount of space a 3D object takes up', 'its total surface area'],
        answer: 'the amount of space a 3D object takes up',
        explanation: 'Volume measures how much three-dimensional space a solid object occupies.',
    },
    {
        prompt: 'What is the formula for the volume of a rectangular prism?',
        options: ['length + breadth + height', 'length × breadth + height', '2 × (length + breadth + height)', 'length × breadth × height'],
        answer: 'length × breadth × height',
        explanation: 'Volume of a rectangular prism = length × breadth × height.',
    },
    {
        prompt: 'A box is 4 cm long, 3 cm wide and 2 cm high. What is its volume?',
        options: ['9 cm³', '18 cm³', '24 cm³', '48 cm³'],
        answer: '24 cm³',
        explanation: '4 × 3 × 2 = 24 cm³.',
    },
    {
        prompt: 'A cube has side length 3 cm. What is its volume?',
        options: ['9 cm³', '18 cm³', '27 cm³', '81 cm³'],
        answer: '27 cm³',
        explanation: '3 × 3 × 3 = 27 cm³.',
    },
    {
        prompt: 'What unit do we use for volume?',
        options: ['cm or m', 'cm² or m²', 'cm³ or m³ (cubic units)', 'just numbers'],
        answer: 'cm³ or m³ (cubic units)',
        explanation: 'Volume fills three dimensions, so we use cubic units such as cm³ or m³.',
    },
    {
        prompt: 'A rectangular prism has volume 60 cm³. Its length is 5 cm and breadth is 4 cm. What is its height?',
        options: ['2 cm', '3 cm', '4 cm', '12 cm'],
        answer: '3 cm',
        explanation: 'height = 60 ÷ (5 × 4) = 60 ÷ 20 = 3 cm.',
    },
    {
        prompt: 'How many unit cubes fit in a box 2 cm × 3 cm × 4 cm?',
        options: ['9', '18', '24', '36'],
        answer: '24',
        explanation: '2 × 3 × 4 = 24 unit cubes.',
    },
];

const Volume = () => (
    <CapsSubjectTopic
        title="Volume"
        subtitle="Counting cubes and measuring space"
        learnSteps={learnSteps}
        task="gr6-volume-t3"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default Volume;
