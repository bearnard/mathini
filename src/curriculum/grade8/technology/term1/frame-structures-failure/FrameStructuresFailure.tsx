import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { TopplePicture, TrussPicture } from '../../../../../components/diagrams/tech8/Tech8';
import { FAILURES, SPANS, TRUSS_MEMBERS, forceIn, isRigid, rafterLength, toppleAngle } from '../../../../../components/diagrams/tech8/tech8Helpers';

// Every statement comes from tech8Helpers.ts (tested in tech8Helpers.test.ts and g8TechT1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');
const d1 = (x: number) => n(Math.round(x * 10) / 10);
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const learnSteps: LearnStep[] = [
  {
    title: 'Frame structures and roof trusses',
    content: slide(
      <>
        <Rule>A frame structure is made of structural members joined together to carry loads. The members of a wood or steel roof truss are the rafters, the tie beam, the king post (or two queen posts in a wider truss) and the struts. Each member carries a force: tension (pulling), compression (pushing), shear (sliding past), bending or torsion (twisting).</Rule>
        <TrussPicture />
        <Worked
          title="Name the force in each member"
          steps={[
            `The rafters push on each other at the apex: ${forceIn('rafter')}.`,
            `The tie beam stops the feet of the rafters spreading apart: ${forceIn('tie beam')}. The king post holds the middle of the tie beam up: ${forceIn('king post')}.`,
            `The struts brace the rafters: ${forceIn('strut')}. A truss with a span of 6 000 mm and a rise of 2 000 mm has rafters of ${big(Math.round(rafterLength(6000, 2000)))} mm.`,
          ]}
        />
        <Mistake>Saying that every member in a truss is in compression. Some members are pulled and are in tension.</Mistake>
      </>,
    ),
  },
  {
    title: 'Triangulation and pylons',
    content: slide(
      <>
        <Rule>A triangle is a rigid shape, so frames use triangulation: cross-bracing that divides a frame into triangles to give it stiffness. Electrical pylons are a case study: many different designs solve the same problem effectively, and they all use internal cross-bracing and triangulation to be stiff.</Rule>
        <FactCards
          cards={[
            { title: 'Triangle', line1: 'a rigid shape: it keeps its', line2: `shape (rigid: ${isRigid(3, false) ? 'yes' : 'no'})` },
            { title: 'Rectangle, no brace', line1: 'can collapse sideways', line2: `(rigid: ${isRigid(4, false) ? 'yes' : 'no'})` },
            { title: 'Rectangle with a brace', line1: 'a diagonal makes two', line2: `triangles (rigid: ${isRigid(4, true) ? 'yes' : 'no'})` },
          ]}
          aria="Triangulation. A triangle is a rigid shape that keeps its shape. A rectangle with no brace can collapse sideways. A rectangle with a diagonal brace is made of two triangles and is rigid."
        />
        <Worked
          title="Stiffen a gate"
          steps={[
            'A four-sided gate frame can lean over because the corners can change angle.',
            'A diagonal brace divides the rectangle into two triangles.',
            'The brace is in tension or compression, which stops the frame from leaning.',
          ]}
        />
        <Mistake>Thinking that thicker members alone make a frame stiff. The triangles do most of the work.</Mistake>
      </>,
    ),
  },
  {
    title: 'Structures that span space',
    content: slide(
      <>
        <Rule>Some structures span over space. Beams include steel I-beams (girders), concrete lintels and beam and column bridges. Alternative bridge supports are suspension bridges and cable-stayed bridges. Arches are used in buildings, bridges and dam walls. A cantilever is supported at one end only, such as a simple cantilever or a cable-stayed cantilever.</Rule>
        <FactCards
          cards={[
            { title: 'Beams', line1: SPANS.beam[0] + ', ' + SPANS.beam[1] + ',', line2: SPANS.beam[2] },
            { title: 'Bridge supports', line1: SPANS.bridge[0] + ' and', line2: SPANS.bridge[1] },
            { title: 'Arches', line1: 'in buildings, bridges and', line2: 'dam walls' },
            { title: 'Cantilevers', line1: 'a simple cantilever and a', line2: 'cable-stayed cantilever' },
          ]}
          aria="Structures that span space. Beams: steel I-beams or girders, concrete lintels and beam and column bridges. Bridge supports: suspension bridges and cable-stayed bridges. Arches in buildings, bridges and dam walls. Cantilevers: a simple cantilever and a cable-stayed cantilever."
        />
        <Worked
          title="Match the structure"
          steps={[
            'A concrete lintel above a door is a beam.',
            'A bridge hung from cables over tall towers is a suspension bridge.',
            'A diving board fixed at one end is a simple cantilever.',
          ]}
        />
        <Mistake>Calling any bridge a beam bridge. Suspension and cable-stayed bridges are held up by cables.</Mistake>
      </>,
    ),
  },
  {
    title: 'How structures fail',
    content: slide(
      <>
        <Rule>The three most likely ways structures fail are: {FAILURES[0].name} of a member, due to {FAILURES[0].cause}; {FAILURES[1].name}, due to {FAILURES[1].cause}; and {FAILURES[2].name} over, due to {FAILURES[2].cause}, which happens when a structure is top heavy and has a narrow base.</Rule>
        <TopplePicture narrow={20} wide={40} height={30} />
        <Worked
          title="Why does a tall narrow tower topple?"
          steps={[
            `A block with a base of 20 units and a centre of gravity at 30 units tilts ${d1(toppleAngle(20, 30))}° before it topples.`,
            `With a base of 40 units it can tilt ${d1(toppleAngle(40, 30))}° before it topples.`,
            'A wider base and a lower centre of gravity make a structure more stable.',
          ]}
        />
        <Mistake>Saying that fracture is caused by a lack of stability. Fracture is a lack of strength; toppling is a lack of stability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which force pulls on the bottom member of a king-post truss?</>,
          <>Why do frames use triangles?</>,
          <>Name two kinds of bridge held up by cables.</>,
          <>A top-heavy tower with a narrow base tips over. Name this failure.</>,
        ]}
        answers={[
          <>{forceIn('tie beam')[0].toUpperCase() + forceIn('tie beam').slice(1)}.</>,
          <>A triangle is rigid, so it gives stiffness.</>,
          <>Suspension and cable-stayed bridges.</>,
          <>Toppling (a lack of stability).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a frame structure?",
    options: ["A structure made of one solid piece", "A shell with no inside", "Structural members joined to carry loads", "A structure that can only be made of steel"],
    answer: "Structural members joined to carry loads",
    explanation: "A frame structure is made of structural members joined together.",
  },
  {
    prompt: "Which member of a roof truss is the horizontal bottom member?",
    options: ["The tie beam", "The rafter", "The strut", "The king post"],
    answer: "The tie beam",
    explanation: "The tie beam runs along the bottom of the truss.",
  },
  {
    prompt: "Which force do the rafters of a king-post truss carry?",
    options: ["Tension", "Shear", "Torsion", "Compression"],
    answer: "Compression",
    explanation: "The rafters push on each other and on the supports.",
  },
  {
    prompt: "Which force do the tie beam and the king post carry?",
    options: ["Compression", "Tension", "Torsion", "No force"],
    answer: "Tension",
    explanation: "The tie beam is pulled as it stops the rafters spreading.",
  },
  {
    prompt: "Which force is a twisting force?",
    options: ["Shear", "Torsion", "Tension", "Compression"],
    answer: "Torsion",
    explanation: "Torsion is twisting.",
  },
  {
    prompt: "Which force pushes the ends of a member together?",
    options: ["Tension", "Torsion", "Shear", "Compression"],
    answer: "Compression",
    explanation: "Compression pushes; tension pulls.",
  },
  {
    prompt: "Why is a triangle used in frame structures?",
    options: ["It is a rigid shape that keeps its form", "It uses the least material in total", "It is the heaviest shape", "It can change its angles easily"],
    answer: "It is a rigid shape that keeps its form",
    explanation: "A triangle cannot change its shape without changing the length of a side.",
  },
  {
    prompt: "What stops a rectangular gate frame from leaning sideways?",
    options: ["A thicker top bar", "A hinge", "A diagonal brace", "A longer bottom bar"],
    answer: "A diagonal brace",
    explanation: "A diagonal divides the frame into two triangles.",
  },
  {
    prompt: "What do electrical pylons use to be stiff?",
    options: ["Solid concrete walls", "A single very thick pole", "Hollow metal shells", "Triangulated cross-bracing"],
    answer: "Triangulated cross-bracing",
    explanation: "Pylon designs use internal cross-bracing and triangulation.",
  },
  {
    prompt: "Which of these is a beam?",
    options: ["A suspension bridge cable", "A concrete lintel", "A dam wall arch", "A diving board only"],
    answer: "A concrete lintel",
    explanation: "Beams include steel I-beams, concrete lintels and beam-and-column bridges.",
  },
  {
    prompt: "Which structure is supported at one end only?",
    options: ["A cantilever", "An arch", "A beam and column bridge", "A shell structure"],
    answer: "A cantilever",
    explanation: "A cantilever projects from a support at one end.",
  },
  {
    prompt: "What holds the deck of a suspension bridge?",
    options: ["A single arch", "Only the road itself", "Cables hung from towers", "Solid walls"],
    answer: "Cables hung from towers",
    explanation: "Suspension bridges are supported by cables.",
  },
  {
    prompt: "A structure breaks because it lacks strength. What type of failure is this?",
    options: ["Buckling", "Toppling", "Fracture", "Torsion"],
    answer: "Fracture",
    explanation: "Fracture of a member is due to a lack of strength.",
  },
  {
    prompt: "A tall, thin tower with a heavy top falls over. Which failure is this?",
    options: ["Toppling", "Fracture", "Buckling", "Shear"],
    answer: "Toppling",
    explanation: "Toppling is due to a lack of stability: a narrow base and a high centre of gravity.",
  },
];

const FrameStructuresFailure = () => (
  <CapsSubjectTopic
    title="Frame Structures and Structural Failure"
    subtitle="Roof trusses, forces, triangulation, spanning structures and failure"
    learnSteps={learnSteps}
    task="gr8-frame-structures-failure-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default FrameStructuresFailure;
