import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Counting Sides',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A <strong>2D shape</strong> is flat. Count its <strong>sides</strong> to name it.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {[['Triangle', 3], ['Quadrilateral', 4], ['Pentagon', 5], ['Hexagon', 6]].map(([name, sides]) => (
            <div key={name} className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
              <p className="font-bold text-slate-800">{name}</p>
              <p className="text-sm text-slate-500">{sides} sides</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'More Polygons',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Shapes with straight sides are called <strong>polygons</strong>.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[['Octagon', 8], ['Circle', 0], ['Rectangle', 4]].map(([name, sides]) => (
            <div key={name} className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-slate-800">{name}</p>
              <p className="text-sm text-slate-500">{(sides as number) > 0 ? `${sides} sides` : 'No straight sides'}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    answer: '6',
    explanation: 'Hex means six. A hexagon has 6 sides.',
  },
  {
    prompt: 'What is a polygon?',
    options: ['A shape with straight sides', 'A shape with curves', 'Any 3D object', 'A circle'],
    answer: 'A shape with straight sides',
    explanation: 'A polygon is a closed 2D shape made entirely of straight sides.',
  },
  {
    prompt: 'How many sides does a pentagon have?',
    options: ['4', '5', '6', '3'],
    answer: '5',
    explanation: 'Penta means five. A pentagon has 5 sides.',
  },
  {
    prompt: 'A quadrilateral always has how many sides?',
    options: ['3', '4', '5', '6'],
    answer: '4',
    explanation: 'Quad means four. Any quadrilateral (square, rectangle, rhombus, etc.) has exactly 4 sides.',
  },
  {
    prompt: 'Which shape has 8 sides?',
    options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'],
    answer: 'Octagon',
    explanation: 'Octa means eight. An octagon has 8 sides.',
  },
  {
    prompt: 'How many angles does a triangle have?',
    options: ['2', '3', '4', '6'],
    answer: '3',
    explanation: 'A triangle has 3 sides and 3 angles.',
  },
];

const Shapes2D = () => (
  <CapsSubjectTopic
    title="2D Shapes"
    subtitle="Learn to identify different shapes and their properties"
    learnSteps={learnSteps}
    task="gr6-shapes-2d-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Shapes2D;
