import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import SolidsRow from '../../../../../components/diagrams/maths/Solids';
import { NetPair, PrismAndPyramid } from '../../../../../components/diagrams/maths/Grade8Space';
import { SOLID_FACTS, euler, prismCounts, pyramidCounts } from '../../../../../components/diagrams/maths/grade8SpaceHelpers';

// Every number in the slides below comes from these tested helpers (grade8SpaceHelpers) and
// lessonsMaths7.test.ts checks that the rendered slides show them.
const cube = SOLID_FACTS.cube;
const tri = SOLID_FACTS['triangular prism'];
const pyr = SOLID_FACTS['square pyramid'];
const cyl = SOLID_FACTS.cylinder;
const sph = SOLID_FACTS.sphere;
const cone = SOLID_FACTS.cone;
const hex = prismCounts(6);
const eCube = euler(cube.vertices, cube.edges, cube.flat);
const eTri = euler(tri.vertices, tri.edges, tri.flat);
const ePyr = euler(pyr.vertices, pyr.edges, pyr.flat);
const eulerRows = [
  { name: 'cube', ...cube, r: eCube },
  { name: 'triangular prism', ...tri, r: eTri },
  { name: 'square pyramid', ...pyr, r: ePyr },
];

// "Check yourself", answers computed from the same helpers
const c1 = prismCounts(6);
const c2 = pyramidCounts(3);
const c3 = euler(c1.vertices, c1.edges, c1.faces);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Faces, edges and vertices',
    content: slide(
      <>
        <Rule>A face is a flat surface, an edge is a line where two faces meet, and a vertex is a corner where edges meet. Count the hidden ones at the back too.</Rule>
        <SolidsRow names={['cube', 'square pyramid']} />
        <Worked
          steps={[
            <>Cube: top and bottom, front and back, left and right: <strong>{cube.flat} faces</strong>. 4 edges on top, 4 at the bottom, 4 upright: {cube.edges} edges. 4 + 4 = {cube.vertices} vertices.</>,
            <>Square pyramid: 1 square base and 4 triangles: <strong>{pyr.flat} faces</strong>, {pyr.edges} edges, {pyr.vertices} vertices.</>,
          ]}
        />
        <Mistake>Counting only what you can see. A drawing of a cube shows 3 faces, but a cube has {cube.flat}; the dashed lines are edges at the back.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prisms and pyramids',
    content: slide(
      <>
        <Rule>A prism has two parallel, congruent bases joined by rectangles. A pyramid has one base and triangles that meet at one vertex. Both are named after the shape of the base.</Rule>
        <PrismAndPyramid />
        <Worked
          title="Triangular prism"
          steps={[
            <>Two triangular bases + 3 rectangles = <strong>{tri.flat} faces</strong>.</>,
            <>3 vertices on each base: 3 + 3 = <strong>{tri.vertices} vertices</strong>.</>,
            <>3 edges on each base and 3 joining them: 3 + 3 + 3 = {tri.edges} edges. A hexagonal prism, in the same way, has {hex.faces} faces, {hex.edges} edges and {hex.vertices} vertices.</>,
          ]}
        />
        <Mistake>Calling a square pyramid a prism. A prism needs two parallel bases; a pyramid has one base and comes to a point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solids with curved surfaces',
    content: slide(
      <>
        <Rule>A cylinder, a cone and a sphere have curved surfaces. An edge is where two surfaces meet; a sphere has one curved surface, so it has no edges and no vertices.</Rule>
        <SolidsRow names={['cylinder', 'cone', 'sphere']} flatAndCurved />
        <Worked
          steps={[
            <>Cylinder: <strong>{cyl.flat} circular faces and {cyl.curved} curved surface</strong>, {cyl.edges} circular edges, {cyl.vertices} vertices.</>,
            <>Cone: {cone.flat} circular face, {cone.curved} curved surface, {cone.edges} edge and {cone.vertices} vertex (the tip).</>,
            <>Sphere: {sph.curved} curved surface, <strong>{sph.edges} edges</strong> and {sph.vertices} vertices.</>,
          ]}
        />
        <Mistake>Saying a cylinder is a prism. Its bases are parallel circles, but they are joined by a curved surface, not by rectangles, so it is not a polyhedron.</Mistake>
      </>,
    ),
  },
  {
    title: "Euler's formula: V − E + F = 2",
    content: slide(
      <>
        <Rule>For every polyhedron (a solid with only flat faces), vertices − edges + faces = 2. Use it to check a count.</Rule>
        <div role="table" aria-label={`A table of vertices, edges and faces. ${eulerRows.map((r) => `${r.name}: V = ${r.vertices}, E = ${r.edges}, F = ${r.flat}, V − E + F = ${r.r}`).join('. ')}.`} className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-sm text-slate-100">
          <div role="row" className="grid grid-cols-[1.6fr_repeat(4,1fr)] gap-1 bg-slate-800 px-3 py-2 font-bold text-slate-300">
            <span role="columnheader">Solid</span>
            <span role="columnheader" className="text-center text-rose-300">V</span>
            <span role="columnheader" className="text-center text-amber-300">E</span>
            <span role="columnheader" className="text-center text-emerald-300">F</span>
            <span role="columnheader" className="text-center">V − E + F</span>
          </div>
          {eulerRows.map((r) => (
            <div role="row" key={r.name} className="grid grid-cols-[1.6fr_repeat(4,1fr)] gap-1 px-3 py-2">
              <span role="cell">{r.name}</span>
              <span role="cell" className="text-center">{r.vertices}</span>
              <span role="cell" className="text-center">{r.edges}</span>
              <span role="cell" className="text-center">{r.flat}</span>
              <span role="cell" className="text-center font-bold text-indigo-300">{r.r}</span>
            </div>
          ))}
        </div>
        <Worked
          steps={[
            <>Cube: {cube.vertices} − {cube.edges} + {cube.flat} = <strong>{eCube}</strong>.</>,
            <>Triangular prism: {tri.vertices} − {tri.edges} + {tri.flat} = <strong>{eTri}</strong>.</>,
            <>If a count of a polyhedron does not give 2, recount.</>,
          ]}
        />
        <Mistake>Adding E and F first: 8 − (12 + 6) = −10. Work from left to right: 8 − 12 = −4, then −4 + 6 = {eCube}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nets: flat patterns that fold into solids',
    content: slide(
      <>
        <Rule>A net is a 2D pattern that folds into a 3D object. It has one shape for every face of the solid, joined edge to edge.</Rule>
        <NetPair />
        <Worked
          steps={[
            <>Cube net: {cube.flat} squares, one for each face. The cross shape folds up into a cube.</>,
            <>Square pyramid net: 1 square base and 4 triangles: {pyr.flat} shapes for {pyr.flat} faces.</>,
            <>Triangular prism net: 2 triangles and 3 rectangles ({tri.flat} faces).</>,
          ]}
        />
        <Mistake>Thinking any 6 squares make a cube net. Six squares in a straight row fold round in a loop, with two faces on top of each other and no top or bottom.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Count the faces, edges and vertices of a hexagonal prism.</>,
          <>Count the faces of a triangular pyramid.</>,
          <>Check your answer to question 1 with Euler&apos;s formula.</>,
          <>Which solid has 2 circular faces and 1 curved surface?</>,
        ]}
        answers={[
          <>{c1.faces} faces (2 hexagons, 6 rectangles), {c1.edges} edges, {c1.vertices} vertices.</>,
          <>{c2.faces} faces (1 triangular base and 3 triangles).</>,
          <>{c1.vertices} − {c1.edges} + {c1.faces} = {c3} ✓.</>,
          <>A cylinder.</>,
        ]}
      />,
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
    options: ['a 2D pattern that folds into a 3D object', 'a graph that shows a set of data', 'a tool that is used for measuring', 'a line along which a shape is symmetrical'],
    answer: 'a 2D pattern that folds into a 3D object',
    explanation: 'Nets represent surfaces before folding.',
  },
  {
    prompt: 'A cylinder has...',
    options: ['2 circular faces and 1 curved surface', '6 square faces and no curved surface', 'only triangular faces, with no circles', '8 vertices, one at each corner'],
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
