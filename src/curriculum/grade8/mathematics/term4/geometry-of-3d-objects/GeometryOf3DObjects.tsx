import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Classify and analyse 3D objects',
    image: {
      src: '/curriculum/grade8/math/term4/geometry-of-3d-objects/diagram.webp',
      alt: 'Grade 8 learners identifying properties of 3D objects and matching nets',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Geometry of 3D objects focuses on faces, edges, vertices, and nets. Learners classify solids and compare
          their structural properties.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'How many faces does a cube have?',
    options: ['6', '8', '12', '4'],
    answer: '6',
    explanation: 'A cube has 6 square faces.',
  },
  {
    prompt: 'A prism has...',
    options: ['two parallel congruent bases', 'one curved face only', 'no vertices', 'all faces triangular'],
    answer: 'two parallel congruent bases',
    explanation: 'Prisms are defined by matching parallel bases.',
  },
  {
    prompt: 'How many edges does a sphere have?',
    options: ['0', '1', '2', '4'],
    answer: '0',
    explanation: 'A sphere has one curved surface and no edges.',
  },
  {
    prompt: 'For a cube, V - E + F equals...',
    options: ['2', '0', '1', '4'],
    answer: '2',
    explanation: '8 - 12 + 6 = 2, matching Euler’s rule.',
  },
  {
    prompt: 'A net is...',
    options: ['a 2D pattern that folds into a 3D object', 'a graph of data', 'a measurement tool', 'a line of symmetry'],
    answer: 'a 2D pattern that folds into a 3D object',
    explanation: 'Nets represent surfaces before folding.',
  },
  {
    prompt: 'A cylinder has...',
    options: ['2 circular faces and 1 curved surface', '6 square faces', 'only triangular faces', '8 vertices'],
    answer: '2 circular faces and 1 curved surface',
    explanation: 'That is the standard structure of a cylinder.',
  },
  {
    prompt: 'How many faces does a square-based pyramid have?',
    options: ['5', '4', '6', '8'],
    answer: '5',
    explanation: '1 square base + 4 triangular sides = 5 faces.',
  },
  {
    prompt: 'How many vertices does a triangular prism have?',
    options: ['6', '5', '8', '3'],
    answer: '6',
    explanation: 'Each triangular base has 3 vertices, so 3 + 3 = 6.',
  },
];

const GeometryOf3DObjects = () => (
  <CapsSubjectTopic
    title="Geometry of 3D Objects"
    subtitle="Classification, properties, and nets of common solids"
    learnSteps={learnSteps}
    task="gr8-geometry-of-3d-objects-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryOf3DObjects;
