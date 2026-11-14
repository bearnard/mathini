import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Properties of 3D Objects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Classify solids by faces, edges, and vertices; understand spatial relationships.
        </p>
      </div>
    ),
  },
  {
    title: 'Nets and Unfolding',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Analyse nets of 3D objects and understand how they unfold into 2D representations.
        </p>
      </div>
    ),
  },
  {
    title: 'Spatial Reasoning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visualise 3D shapes, describe structural properties, and classify solids accurately.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'How many vertices does a cube have?',
    options: ['4', '6', '8', '12'],
    answer: '8',
    explanation: 'A cube has 8 corner points (vertices).',
  },
  {
    prompt: 'What is the relationship between faces (F), edges (E), and vertices (V) in a polyhedron?',
    options: ['F + V = E', 'F + V = E + 2', 'E + V = F + 2', 'F = E = V'],
    answer: 'F + V = E + 2',
    explanation: 'This is Euler\'s formula for polyhedra: F + V - E = 2.',
  },
  {
    prompt: 'How many faces does a triangular prism have?',
    options: ['3', '4', '5', '6'],
    answer: '5',
    explanation: 'A triangular prism has 2 triangular faces and 3 rectangular faces, totalling 5.',
  },
  {
    prompt: 'A rectangular prism has how many edges?',
    options: ['8', '10', '12', '14'],
    answer: '12',
    explanation: 'A rectangular prism has 12 edges: 4 on top, 4 on bottom, 4 connecting them.',
  },
  {
    prompt: 'Which solid has one circular face and one vertex (apex)?',
    options: ['Cylinder', 'Cone', 'Sphere', 'Cube'],
    answer: 'Cone',
    explanation: 'A cone has a circular base and one apex point where sides meet.',
  },
  {
    prompt: 'How many faces does a square pyramid have?',
    options: ['4', '5', '6', '8'],
    answer: '5',
    explanation: 'A square pyramid has 1 square base and 4 triangular faces, totalling 5.',
  },
  {
    prompt: 'A cylinder has:',
    options: ['1 circular face and 2 curved surfaces', '2 circular faces and 1 curved surface', '3 flat faces and no curved surface', '2 circular faces and 2 curved surfaces'],
    answer: '2 circular faces and 1 curved surface',
    explanation: 'A cylinder has 2 circular bases and 1 curved lateral surface.',
  },
  {
    prompt: 'Which shape is NOT a polyhedron?',
    options: ['Cube', 'Pyramid', 'Sphere', 'Prism'],
    answer: 'Sphere',
    explanation: 'A sphere has a curved surface, not flat faces, so it is not a polyhedron.',
  },
];

const Geometry3DObjects = () => (
  <CapsSubjectTopic
    title="Geometry of 3D Objects"
    subtitle="Properties, classification and spatial reasoning with solids"
    learnSteps={learnSteps}
    task="gr9-3d-objects-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Geometry3DObjects;
