import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Describe transformations and classify 3D objects',
    image: {
      src: '/curriculum/grade7/math/term3/transformation-geometry-and-3d-objects/diagram.webp',
      alt: 'Grade 7 learners identifying translations, reflections, rotations, and properties of 3D solids',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transformation geometry includes translations, reflections, rotations, and enlargements. Learners also
          identify solids by faces, edges, and vertices.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A transformation that slides a shape without turning it is called...',
    options: ['translation', 'rotation', 'reflection', 'enlargement'],
    answer: 'translation',
    explanation: 'Translation moves every point the same distance and direction.',
  },
  {
    prompt: 'A reflection maps a shape...',
    options: [
      'across a mirror line',
      'around a fixed point',
      'to a larger size only',
      'by sliding straight up',
    ],
    answer: 'across a mirror line',
    explanation: 'Reflections produce a mirror image over a line.',
  },
  {
    prompt: 'A rotation turns a shape...',
    options: ['around a fixed point', 'along a straight line only', 'into a different shape', 'into a 3D object'],
    answer: 'around a fixed point',
    explanation: 'Rotations happen about a centre of rotation.',
  },
  {
    prompt: 'An enlargement changes...',
    options: ['size but keeps shape', 'shape but not size', 'colour only', 'position only'],
    answer: 'size but keeps shape',
    explanation: 'Enlarged figures are similar shapes.',
  },
  {
    prompt: 'How many vertices does a cube have?',
    options: ['8', '6', '10', '12'],
    answer: '8',
    explanation: 'A cube has 8 corners (vertices).',
  },
  {
    prompt: 'How many faces does a triangular prism have?',
    options: ['5', '6', '4', '8'],
    answer: '5',
    explanation: 'It has 2 triangular and 3 rectangular faces.',
  },
  {
    prompt: 'A net is...',
    options: [
      'a flat pattern that folds into a 3D object',
      'a graph of points',
      'a mirror line in geometry',
      'a type of fraction model',
    ],
    answer: 'a flat pattern that folds into a 3D object',
    explanation: 'Nets represent the faces of a solid before folding.',
  },
  {
    prompt: 'Congruent shapes have...',
    options: [
      'the same shape and size',
      'the same area only',
      'the same perimeter only',
      'different orientations and different sizes',
    ],
    answer: 'the same shape and size',
    explanation: 'Congruent figures match exactly when superimposed.',
  },
];

const TransformationGeometryAnd3DObjects = () => (
  <CapsSubjectTopic
    title="Transformation Geometry and 3D Objects"
    subtitle="Translations, reflections, rotations, enlargements, and solid properties"
    learnSteps={learnSteps}
    task="gr7-transformation-geometry-and-3d-objects-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometryAnd3DObjects;
