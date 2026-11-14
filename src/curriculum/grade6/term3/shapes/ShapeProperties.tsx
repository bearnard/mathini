import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const shapeFacts = [
    { name: 'triangle', emoji: '🔺', properties: { sides: 3, angles: 3 } },
    { name: 'quadrilateral', emoji: '⬛', properties: { sides: 4, angles: 4 } },
    { name: 'pentagon', emoji: '⬟', properties: { sides: 5, angles: 5 } },
    { name: 'hexagon', emoji: '⬢', properties: { sides: 6, angles: 6 } },
];

const learnSteps: LearnStep[] = [
    {
        title: '2D Shapes',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A 2D shape is flat. Count its <strong>sides</strong> and <strong>angles</strong>.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                    {shapeFacts.map(fact => (
                        <div key={fact.name} className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                            <div className="text-4xl mb-2">{fact.emoji}</div>
                            <p className="font-bold text-slate-800 capitalize">{fact.name}</p>
                            <p className="text-sm text-slate-500">{fact.properties.sides} sides</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: 'Polygons Have Angles',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">For these polygons, the number of sides is the same as the number of angles.</p>
                <div className="bg-emerald-50 p-6 rounded-xl inline-block border border-emerald-100">
                    <svg viewBox="0 0 160 140" className="w-56 h-44 mx-auto" aria-label="Hexagon with six corners">
                        <polygon points="80,12 134,43 134,97 80,128 26,97 26,43" fill="#d1fae5" stroke="#059669" strokeWidth="6" />
                        {[['80', '12'], ['134', '43'], ['134', '97'], ['80', '128'], ['26', '97'], ['26', '43']].map(([cx, cy]) => (
                            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#4f46e5" />
                        ))}
                    </svg>
                    <p className="text-slate-600">A hexagon has <strong>6 sides</strong> and <strong>6 angles</strong>.</p>
                </div>
            </div>
        ),
    },
    {
        title: '3D Objects',
        content: (
            <div className="space-y-6 text-center">
                <p className="text-lg text-slate-600">A 3D object has <strong>faces</strong>, <strong>edges</strong> and <strong>vertices</strong>.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                        <div className="text-5xl mb-3">🎲</div>
                        <p className="font-bold text-slate-800">Cube</p>
                        <p className="text-sm text-slate-500">6 faces, 12 edges, 8 vertices</p>
                    </div>
                    <div className="bg-sky-50 p-5 rounded-xl border border-sky-100">
                        <div className="text-5xl mb-3">🥫</div>
                        <p className="font-bold text-slate-800">Cylinder</p>
                        <p className="text-sm text-slate-500">3 faces, 2 edges, 0 vertices</p>
                    </div>
                    <div className="bg-fuchsia-50 p-5 rounded-xl border border-fuchsia-100">
                        <div className="text-5xl mb-3">🔶</div>
                        <p className="font-bold text-slate-800">Square pyramid</p>
                        <p className="text-sm text-slate-500">5 faces, 8 edges, 5 vertices</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export const bank: CapsItem[] = [
    {
        prompt: 'How many sides does a pentagon have?',
        options: ['4', '5', '6', '8'],
        answer: '5',
        explanation: 'A pentagon has 5 sides.',
    },
    {
        prompt: 'A hexagon has how many angles?',
        options: ['5', '6', '7', '8'],
        answer: '6',
        explanation: 'A hexagon has 6 sides and 6 angles.',
    },
    {
        prompt: 'How many faces does a cube have?',
        options: ['4', '6', '8', '12'],
        answer: '6',
        explanation: 'A cube has 6 faces (top, bottom, front, back, left, right).',
    },
    {
        prompt: 'How many edges does a cone have?',
        options: ['0', '1', '2', '3'],
        answer: '1',
        explanation: 'A cone has 1 curved edge at the base.',
    },
    {
        prompt: 'A square pyramid has how many vertices?',
        options: ['4', '5', '6', '8'],
        answer: '5',
        explanation: 'A square pyramid has 4 base vertices plus 1 apex = 5 vertices.',
    },
    {
        prompt: 'For a polygon, the number of sides equals the number of...',
        options: ['faces', 'edges', 'vertices', 'angles'],
        answer: 'angles',
        explanation: 'In any polygon, every side meets another side at an angle, so sides = angles.',
    },
    {
        prompt: 'How many edges does a triangular prism have?',
        options: ['6', '8', '9', '12'],
        answer: '9',
        explanation: 'A triangular prism has 9 edges: 3 on each triangular face and 3 connecting them.',
    },
];

const ShapeProperties = () => (
    <CapsSubjectTopic
        title="2D Shapes & 3D Objects"
        subtitle="Sides, angles, faces, edges and vertices"
        learnSteps={learnSteps}
        task="gr6-shapes-t3"
        bank={bank}
        apiPath="/api/caps/grade6"
    />
);

export default ShapeProperties;
