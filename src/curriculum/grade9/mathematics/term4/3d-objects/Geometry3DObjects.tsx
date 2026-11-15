import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import SolidsRow from '../../../../../components/diagrams/maths/Solids';
import { InfoTable, PrismAndPyramid, TriangularPrismNet } from '../../../../../components/diagrams/maths/Grade9SpaceData';
import { euler, POLYHEDRA, prismCounts, pyramidCounts } from '../../../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Every number in the slides below comes from these tested helpers (grade9SpaceDataHelpers.test.ts, lessonsMaths10.test.ts).
const cubeF = POLYHEDRA.cube;
const rect = POLYHEDRA['rectangular prism'];
const tri = POLYHEDRA['triangular prism'];
const pyr = POLYHEDRA['square pyramid'];
const fev = (p: { faces: number; edges: number; vertices: number }) => `${p.faces} F, ${p.edges} E, ${p.vertices} V`;
const eCube = euler(cubeF);
const eTri = euler(tri);
const ePyr = euler(pyr);

// "Check yourself"
const hex = prismCounts(6);
const tet = POLYHEDRA['triangular pyramid'];
const pent = pyramidCounts(5);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Faces, edges and vertices',
    content: slide(
      <>
        <Rule>A polyhedron is a solid with only flat faces. A face is a flat surface, an edge is where two faces meet, and a vertex is a corner where edges meet.</Rule>
        <SolidsRow names={['cube', 'rectangular prism']} />
        <Worked
          title="Count a cube"
          steps={[
            <>Faces: top, bottom and 4 sides = <strong>{cubeF.faces}</strong>.</>,
            <>Edges: 4 round the top, 4 round the bottom, 4 upright = <strong>{cubeF.edges}</strong>.</>,
            <>Vertices: 4 on top and 4 at the bottom = <strong>{cubeF.vertices}</strong>. A rectangular prism has the same counts: {fev(rect)}.</>,
          ]}
        />
        <Mistake>Counting only the edges you can see in a drawing. Hidden edges at the back count too: a cube has {cubeF.edges} edges, not 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prisms and pyramids',
    content: slide(
      <>
        <Rule>A prism has two identical, parallel bases joined by rectangles. A pyramid has one base and triangles that meet at one vertex, the apex. Each is named after its base.</Rule>
        <PrismAndPyramid prism={fev(tri)} pyramid={fev(pyr)} />
        <Worked
          steps={[
            <>Triangular prism: 2 triangles + 3 rectangles = <strong>{tri.faces} faces</strong>; 3 + 3 + 3 = {tri.edges} edges; 3 + 3 = {tri.vertices} vertices.</>,
            <>Square pyramid: 1 square + 4 triangles = <strong>{pyr.faces} faces</strong>; 4 + 4 = {pyr.edges} edges; 4 + 1 apex = {pyr.vertices} vertices.</>,
          ]}
        />
        <Mistake>Naming a prism by its side faces. A triangular prism has rectangles on its sides; it is called triangular because its two bases are triangles.</Mistake>
      </>,
    ),
  },
  {
    title: "Euler's formula: F + V = E + 2",
    content: slide(
      <>
        <Rule>For every polyhedron, the number of faces plus the number of vertices is two more than the number of edges: F + V = E + 2.</Rule>
        <InfoTable
          head={['Solid', 'F', 'V', 'E', 'F + V', 'E + 2']}
          rows={[
            ['Cube', cubeF.faces, cubeF.vertices, cubeF.edges, eCube.left, eCube.right],
            ['Tri. prism', tri.faces, tri.vertices, tri.edges, eTri.left, eTri.right],
            ['Sq. pyramid', pyr.faces, pyr.vertices, pyr.edges, ePyr.left, ePyr.right],
          ]}
          aria={`A table checking Euler's formula. Cube: ${cubeF.faces} + ${cubeF.vertices} = ${eCube.left} and ${cubeF.edges} + 2 = ${eCube.right}. Triangular prism: ${eTri.left} and ${eTri.right}. Square pyramid: ${ePyr.left} and ${ePyr.right}.`}
        />
        <Worked
          steps={[
            <>Cube: F + V = {cubeF.faces} + {cubeF.vertices} = {eCube.left}; E + 2 = {cubeF.edges} + 2 = {eCube.right}. Equal.</>,
            <>Find E for a solid with F = {tri.faces} and V = {tri.vertices}: E = F + V − 2 = {tri.faces} + {tri.vertices} − 2 = <strong>{tri.edges}</strong>.</>,
          ]}
        />
        <Mistake>Writing F + E = V + 2. It is faces plus vertices that is two more than the edges: {cubeF.faces} + {cubeF.edges} = {cubeF.faces + cubeF.edges} is not {cubeF.vertices} + 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solids with curved surfaces',
    content: slide(
      <>
        <Rule>Cylinders, cones and spheres have curved surfaces, so they are not polyhedra. A cylinder has 2 circular faces and 1 curved surface; a cone has 1 circular face, a curved surface and 1 apex; a sphere is one curved surface.</Rule>
        <SolidsRow names={['cylinder', 'cone', 'sphere']} flatAndCurved />
        <Worked
          steps={[
            <>One circular face and one vertex (apex): a <strong>cone</strong>.</>,
            <>Two circular faces and one curved surface: a <strong>cylinder</strong>.</>,
            <>Not a polyhedron: the <strong>sphere</strong>, because it has no flat faces.</>,
          ]}
        />
        <Mistake>Calling a cylinder a polyhedron because its two ends are flat. Its curved surface is not flat, so it is not a polyhedron, and Euler&apos;s formula does not apply to it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nets: fold flat faces into a solid',
    content: slide(
      <>
        <Rule>A net is the flat shape that folds into a solid. It has one shape for every face, joined edge to edge, and no faces overlap when it is folded.</Rule>
        <TriangularPrismNet />
        <Worked
          title="The net of a triangular prism"
          steps={[
            <>It has 2 triangles (the bases) and 3 rectangles (the sides): {tri.faces} shapes for {tri.faces} faces.</>,
            <>Fold the rectangles into a tube, then fold the triangles over the two open ends.</>,
          ]}
        />
        <Mistake>Putting both triangles on the same side of the strip. When you fold it, they overlap at one end and leave the other end open.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How many faces, edges and vertices does a hexagonal prism have?</li>
            <li>Check Euler&apos;s formula for a triangular pyramid (4 faces, 4 vertices, 6 edges).</li>
            <li>A pyramid has a pentagon (5 sides) as its base. How many faces does it have?</li>
            <li>Which solid has 2 circular faces and 1 curved surface?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{hex.faces} faces, {hex.edges} edges, {hex.vertices} vertices.</li>
            <li>F + V = {tet.faces} + {tet.vertices} = {euler(tet).left}; E + 2 = {tet.edges} + 2 = {euler(tet).right}. It holds.</li>
            <li>{pent.faces} faces: 1 pentagon + 5 triangles.</li>
            <li>A cylinder.</li>
          </ol>
        }
      />,
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
