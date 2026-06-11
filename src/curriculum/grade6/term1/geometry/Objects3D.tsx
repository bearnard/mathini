import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Faces, Edges and Vertices',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A 3D object has <strong>faces</strong> (flat sides), <strong>edges</strong> (where faces meet) and <strong>vertices</strong> (corners).</p>
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
            <p className="font-bold text-slate-800">Square Pyramid</p>
            <p className="text-sm text-slate-500">5 faces, 8 edges, 5 vertices</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'More 3D Objects',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Different 3D objects have different numbers of faces, edges, and vertices.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-rose-50 p-5 rounded-xl border border-rose-100">
            <div className="text-5xl mb-3">🍦</div>
            <p className="font-bold text-slate-800">Cone</p>
            <p className="text-sm text-slate-500">2 faces, 1 edge, 1 vertex</p>
          </div>
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <div className="text-5xl mb-3">⚽</div>
            <p className="font-bold text-slate-800">Sphere</p>
            <p className="text-sm text-slate-500">1 face, 0 edges, 0 vertices</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <div className="text-5xl mb-3">📦</div>
            <p className="font-bold text-slate-800">Rectangular Prism</p>
            <p className="text-sm text-slate-500">6 faces, 12 edges, 8 vertices</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'How many faces does a cube have?',
    options: ['4', '5', '6', '8'],
    answer: '6',
    explanation: 'A cube has 6 square faces: top, bottom, front, back, left, right.',
  },
  {
    prompt: 'How many edges does a cone have?',
    options: ['0', '1', '2', '3'],
    answer: '1',
    explanation: 'A cone has 1 curved edge — the circle at its base.',
  },
  {
    prompt: 'How many vertices does a sphere have?',
    options: ['0', '1', '2', '4'],
    answer: '0',
    explanation: 'A sphere is perfectly round with no corners or edges, so it has 0 vertices.',
  },
  {
    prompt: 'A square pyramid has how many faces?',
    options: ['4', '5', '6', '8'],
    answer: '5',
    explanation: 'A square pyramid has 1 square base and 4 triangular sides = 5 faces in total.',
  },
  {
    prompt: 'Which 3D object has 3 faces, 2 edges, and 0 vertices?',
    options: ['Cube', 'Cone', 'Cylinder', 'Sphere'],
    answer: 'Cylinder',
    explanation: 'A cylinder has 2 circular flat faces and 1 curved face (3 faces), 2 circular edges, and 0 vertices.',
  },
  {
    prompt: 'How many edges does a rectangular prism have?',
    options: ['6', '8', '10', '12'],
    answer: '12',
    explanation: 'A rectangular prism has 12 edges: 4 along the top, 4 along the bottom, and 4 vertical edges.',
  },
];

const Objects3D = () => (
  <CapsSubjectTopic
    title="3D Objects"
    subtitle="Explore 3D shapes and their properties"
    learnSteps={learnSteps}
    task="gr6-objects-3d-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Objects3D;
