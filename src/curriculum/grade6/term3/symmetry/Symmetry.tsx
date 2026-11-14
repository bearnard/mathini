import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
    {
        title: 'What is symmetry?',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A shape has <strong>line symmetry</strong> if one half is a mirror image of the other half.</p>
                <div className="relative bg-slate-50 p-6 rounded-xl inline-flex items-center justify-center min-w-56">
                    <div className="text-7xl font-bold text-indigo-600">♡</div>
                    <div className="absolute top-4 bottom-4 w-1 bg-indigo-400 rounded-full border border-indigo-200 border-dashed" />
                </div>
                <p className="text-slate-500">The dashed line shows where the heart can fold exactly in half.</p>
            </div>
        ),
    },
    {
        title: 'Counting lines',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">Some shapes have more than one line of symmetry. Count every different fold line that matches both sides.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-indigo-50 p-5 rounded-xl">
                        <div className="text-6xl text-indigo-600 mb-2">□</div>
                        <p className="font-bold text-indigo-900">Square</p>
                        <p className="text-indigo-700">4 lines</p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-xl">
                        <div className="text-6xl text-emerald-600 mb-2">▭</div>
                        <p className="font-bold text-emerald-900">Rectangle</p>
                        <p className="text-emerald-700">2 lines</p>
                    </div>
                    <div className="bg-amber-50 p-5 rounded-xl">
                        <div className="text-6xl text-amber-600 mb-2">△</div>
                        <p className="font-bold text-amber-900">Equilateral triangle</p>
                        <p className="text-amber-700">3 lines</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Reflections',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A <strong>reflection</strong> is a mirror image. It flips a shape over a mirror line without changing its size.</p>
                <div className="flex items-center justify-center gap-6 bg-slate-50 p-6 rounded-xl max-w-lg mx-auto">
                    <div className="text-6xl">🦋</div>
                    <div className="h-24 w-1 bg-slate-300 rounded-full" />
                    <div className="text-6xl scale-x-[-1]">🦋</div>
                </div>
                <p className="text-slate-500">The reflected image is the same distance from the mirror line on the opposite side.</p>
            </div>
        ),
    },
];

export const bank: CapsItem[] = [
    {
        prompt: 'A line of symmetry divides a shape into...',
        options: ['two equal areas', 'two mirror-image halves', 'four equal parts', 'two different halves'],
        answer: 'two mirror-image halves',
        explanation: 'A line of symmetry divides a shape so that each half is the mirror image of the other.',
    },
    {
        prompt: 'How many lines of symmetry does a square have?',
        options: ['1', '2', '4', '8'],
        answer: '4',
        explanation: 'A square has 4 lines of symmetry: 2 through opposite sides and 2 through opposite corners.',
    },
    {
        prompt: 'How many lines of symmetry does an equilateral triangle have?',
        options: ['1', '2', '3', '6'],
        answer: '3',
        explanation: 'An equilateral triangle has 3 lines of symmetry, one from each vertex to the midpoint of the opposite side.',
    },
    {
        prompt: 'A circle has how many lines of symmetry?',
        options: ['1', '4', '8', 'Infinite'],
        answer: 'Infinite',
        explanation: 'Any diameter of a circle is a line of symmetry, so a circle has infinitely many lines of symmetry.',
    },
    {
        prompt: 'When a shape is reflected, the image is...',
        options: ['larger than the original', 'the mirror image of the original', 'rotated 90°', 'the same as a translation'],
        answer: 'the mirror image of the original',
        explanation: 'A reflection flips the shape over the mirror line, producing the mirror image without changing size.',
    },
    {
        prompt: 'How many lines of symmetry does a regular hexagon have?',
        options: ['3', '4', '6', '8'],
        answer: '6',
        explanation: 'A regular hexagon has 6 lines of symmetry: 3 through opposite vertices and 3 through midpoints of opposite sides.',
    },
];

const Symmetry = () => (
    <CapsSubjectTopic
        title="Symmetry"
        subtitle="Lines of symmetry and reflections"
        learnSteps={learnSteps}
        task="gr6-symmetry-t3"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default Symmetry;
