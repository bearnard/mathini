import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EarthMagnet, FactCards, MagnetField, PoleForces } from '../../../../../components/diagrams/magnet10/Magnet10';
import { MAGNETIC, NOT_MAGNETIC, compassPointsTo, force, poleNearGeographicNorth } from '../../../../../components/diagrams/magnet10/magnet10Helpers';

// Every rule below comes from magnet10Helpers.ts (tested in magnet10Helpers.test.ts and g10PsT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Poles: attraction and repulsion',
    content: slide(
      <>
        <Rule>A permanent magnet has two poles, a north pole (N) and a south pole (S). Like poles repel each other and unlike poles attract each other. The poles of a magnet cannot be separated: if a magnet is cut in two, each piece is a magnet with two poles.</Rule>
        <PoleForces />
        <Worked
          title="Predict the force"
          steps={[
            `N and N face each other: they ${force('N', 'N')}.`,
            `N and S face each other: they ${force('N', 'S')}.`,
            'A bar magnet is broken into two pieces. Each piece has its own N and S pole: you cannot get a single pole on its own.',
          ]}
        />
        <Mistake>Saying that unlike poles repel. Like poles repel and unlike poles attract.</Mistake>
      </>,
    ),
  },
  {
    title: 'The magnetic field and field lines',
    content: slide(
      <>
        <Rule>A magnetic field is the region around a magnet in which another magnet or a magnetic material feels a force. We draw it with field lines. Outside the magnet the lines go from the north pole to the south pole. The field is stronger where the lines are closer together, and field lines never cross.</Rule>
        <MagnetField />
        <Worked
          title="Read the field with a compass"
          steps={[
            'A small compass needle lines itself up with the field. The north end of the needle points in the direction of the field.',
            'Near the north pole of the magnet the needle points away from the pole. Near the south pole it points towards the pole.',
            'The needles near the poles feel the strongest force, and the field gets much weaker further away.',
          ]}
        />
        <Mistake>Drawing field lines that cross, or lines that start and stop in the air. Field lines are continuous and do not cross.</Mistake>
      </>,
    ),
  },
  {
    title: "The Earth's magnetic field and the compass",
    content: slide(
      <>
        <Rule>The Earth has a magnetic field like that of a giant bar magnet. The north end of a compass needle points to geographic north, because it is attracted to the Earth&apos;s magnetic south pole, which is near the geographic North Pole.</Rule>
        <EarthMagnet />
        <Worked
          title="Which pole is where?"
          steps={[
            `The pole of the Earth's magnet that is near the geographic North Pole is a magnetic ${poleNearGeographicNorth()} pole.`,
            `The north end of a compass needle is attracted to it, so a compass points to ${compassPointsTo()}.`,
            'Unlike poles attract, so the needle&apos;s north end must be pulled towards a south pole.'.replace('&apos;', "'"),
          ]}
        />
        <Mistake>Saying that the Earth&apos;s magnetic north pole is near the geographic North Pole. The magnetic pole there is a south pole, which is why a compass needle points north.</Mistake>
      </>,
    ),
  },
  {
    title: 'Magnetic and non-magnetic materials',
    content: slide(
      <>
        <Rule>A magnetic material is attracted by a magnet. Iron, cobalt and nickel (and steel, which contains iron) are magnetic. Most other materials, such as copper, aluminium, gold, plastic and wood, are not. Only repulsion proves that something is a magnet.</Rule>
        <FactCards
          cards={[
            { title: 'Magnetic', line1: `${MAGNETIC.join(', ')}:`, line2: 'attracted by a magnet' },
            { title: 'Not magnetic', line1: `${NOT_MAGNETIC.join(', ')}:`, line2: 'not attracted' },
            { title: 'Test for a magnet', line1: 'if it repels a known pole,', line2: 'it is a magnet' },
          ]}
          aria="Magnetic and non-magnetic materials. Iron, cobalt, nickel and steel are magnetic and are attracted by a magnet. Copper, aluminium, gold, plastic and wood are not magnetic. To test whether something is a magnet, see whether it repels a known pole, because a piece of iron is also attracted."
        />
        <Worked
          title="Is it a magnet or just iron?"
          steps={[
            'An iron nail is attracted to the north pole of a magnet. It is also attracted to the south pole.',
            'A magnet that is brought near a magnet with the same pole facing it is repelled.',
            'So only repulsion shows that the object is itself a magnet: attraction can also mean that the object is just iron.',
          ]}
        />
        <Mistake>Thinking that attraction proves that an object is a magnet. A magnet attracts both a magnet and a piece of iron.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What happens when the north poles of two magnets are brought close together?</>,
          <>Which way do magnetic field lines point outside a bar magnet?</>,
          <>Why does the north end of a compass needle point north?</>,
          <>Name one metal that is not attracted by a magnet.</>,
        ]}
        answers={[
          <>They repel.</>,
          <>From the north pole to the south pole.</>,
          <>It is attracted to the Earth&apos;s magnetic south pole, which is near the geographic North Pole.</>,
          <>Any of copper, aluminium or gold.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What happens when two north poles of magnets are brought close together?",
    options: ["They attract", "They have no effect on each other", "They repel", "They become south poles"],
    answer: "They repel",
    explanation: "Like poles repel each other.",
  },
  {
    prompt: "What happens when a north pole and a south pole are brought close together?",
    options: ["They attract", "They repel", "They cancel each other", "They have no effect on each other"],
    answer: "They attract",
    explanation: "Unlike poles attract each other.",
  },
  {
    prompt: "A bar magnet is cut in half. What do you get?",
    options: ["One north pole and one south pole separated", "Two pieces of non-magnetic iron", "One magnet and one piece with no poles", "Two magnets, each with a north and a south pole"],
    answer: "Two magnets, each with a north and a south pole",
    explanation: "The poles of a magnet cannot be separated. Each piece has its own two poles.",
  },
  {
    prompt: "What is a magnetic field?",
    options: ["The piece of metal that is inside a magnet", "The region around a magnet where a force acts", "The outer surface of any permanent magnet", "The total mass of the material in a magnet"],
    answer: "The region around a magnet where a force acts",
    explanation: "A magnetic field is the region in which another magnet or magnetic material feels a force.",
  },
  {
    prompt: "In which direction do magnetic field lines go outside a bar magnet?",
    options: ["From the south pole to the north pole", "From the north pole to the south pole", "From one side of the magnet to the other side", "They go in circles around the north pole only"],
    answer: "From the north pole to the south pole",
    explanation: "Outside the magnet the lines leave the north pole and enter the south pole.",
  },
  {
    prompt: "Where is the magnetic field of a bar magnet the strongest?",
    options: ["In the middle of the magnet's side", "Far away from the magnet", "Everywhere in the same strength", "Close to the poles"],
    answer: "Close to the poles",
    explanation: "The field lines are closest together near the poles, which shows where the field is strongest.",
  },
  {
    prompt: "What can be said about magnetic field lines?",
    options: ["They never cross each other", "They cross each other near the poles", "They start at the north pole and end in the air", "They are always straight lines"],
    answer: "They never cross each other",
    explanation: "Two field lines would give two directions at one point, so they cannot cross.",
  },
  {
    prompt: "A small compass needle is placed near the north pole of a bar magnet. Which way does the north end of the needle point?",
    options: ["Towards the north pole of the magnet", "At right angles to the magnet", "Away from the north pole of the magnet", "Towards the south pole of the Earth"],
    answer: "Away from the north pole of the magnet",
    explanation: "The field points away from a north pole, and the north end of a compass needle points along the field.",
  },
  {
    prompt: "What does the north end of a compass needle point to?",
    options: ["Geographic south", "The Earth's magnetic north pole", "The centre of the Earth only", "Geographic north"],
    answer: "Geographic north",
    explanation: "A compass needle's north end points to geographic north.",
  },
  {
    prompt: "Which magnetic pole of the Earth is near the geographic North Pole?",
    options: ["A magnetic north pole", "A magnetic south pole", "No magnetic pole", "Both poles together"],
    answer: "A magnetic south pole",
    explanation: "The needle's north end is attracted to a south pole, so the Earth's magnetic south pole is in the north.",
  },
  {
    prompt: "Which of these metals is attracted by a magnet?",
    options: ["Iron", "Copper", "Aluminium", "Gold"],
    answer: "Iron",
    explanation: "Iron, cobalt and nickel are magnetic.",
  },
  {
    prompt: "Which of these materials is not attracted by a magnet?",
    options: ["Nickel", "Cobalt", "Plastic", "Steel"],
    answer: "Plastic",
    explanation: "Plastic is not a magnetic material. Steel contains iron and is attracted.",
  },
  {
    prompt: "How can you show that an object is a magnet and not just a piece of iron?",
    options: ["It attracts one pole of another magnet", "It attracts both poles of another magnet", "It repels a known pole of another magnet", "It is heavy for its size"],
    answer: "It repels a known pole of another magnet",
    explanation: "Only repulsion shows that it is a magnet, because iron is attracted by both poles.",
  },
  {
    prompt: "An iron nail is attracted to both ends of a magnet. What does this show?",
    options: ["The nail is a magnetic material, not necessarily a magnet", "The nail is a permanent magnet", "The nail is not made of iron", "The ends of the magnet are both north poles"],
    answer: "The nail is a magnetic material, not necessarily a magnet",
    explanation: "A magnetic material is attracted to either pole. It does not have to be a magnet itself.",
  },
];

const Magnetism = () => (
  <CapsSubjectTopic
    title="Magnetism"
    subtitle="Poles, magnetic fields, field lines, the Earth's field, the compass and magnetic materials"
    learnSteps={learnSteps}
    task="gr10-magnetism-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Magnetism;
