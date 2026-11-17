import CapsSubjectTopic, { type CapsItem, type LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ForcePair, MagnetPair } from '../../../../../components/diagrams/science/Ns9Pictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as e from '../../../../../components/diagrams/science/ns9Energy';

// CAPS Natural Sciences Grade 9 Term 3 (Energy and Change): forces (contact and field), mass and weight, magnetic and electrostatic force, lightning.
// Numbers come from ns9Energy.ts (ns9Energy.test.ts). g is taken as 10 N/kg, a rounding of 9,8.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');

const m = 60;
const moon = Math.round(e.weight(m, e.moonG()));
const check = { w: e.weight(45), mass: e.massFromWeight(300) };

export const learnSteps: LearnStep[] = [
  {
    title: 'What a force is',
    content: slide(
      <>
        <Rule>A force is a push, a pull or a twist on an object. Force is measured in newtons (N). A force can change the shape, direction or speed of an object. Forces that two objects exert on each other always act in pairs.</Rule>
        <ForcePair newtons={5} />
        <Worked
          title="Forces in a pair"
          steps={[
            <>When you push a wall with 5 N, the wall pushes back on you with 5 N. These two forces make a pair.</>,
            <>A pull on a spring can change its <strong>shape</strong>. A kick changes the <strong>speed</strong> and the <strong>direction</strong> of a ball.</>,
            <>Forces are measured with a spring balance calibrated in newtons.</>,
          ]}
        />
        <Mistake>Measuring force in kilograms. Kilograms measure mass. Force is measured in newtons (N).</Mistake>
      </>,
    ),
  },
  {
    title: 'Contact forces and field forces',
    content: slide(
      <>
        <Rule>All forces fall into two groups. A contact force acts when two objects touch. A field force, also called a non-contact force, acts at a distance, without the objects touching.</Rule>
        <InfoTable
          cols={[{ title: 'Group', w: 30 }, { title: 'Examples', w: 70 }]}
          rows={[
            ['Contact forces', 'Friction, tension in a rope,\ncompression of a spring'],
            ['Field forces', 'Gravitational, magnetic and\nelectrostatic forces'],
          ]}
          aria="A table of the two groups of force. Contact forces: friction, tension in a rope and compression of a spring. Field forces, which act at a distance: gravitational, magnetic and electrostatic forces."
        />
        <Worked
          title="Which group?"
          steps={[
            <>Friction between a shoe and the floor needs the surfaces to touch, so it is a <strong>contact force</strong>.</>,
            <>A magnet pulls a nail from a distance, so magnetic force is a <strong>field force</strong>.</>,
            <>Gravity pulls a falling object towards the centre of the Earth without touching it: a <strong>field force</strong>.</>,
          ]}
        />
        <Mistake>Calling a force a contact force because it feels as if things touch. If the force acts across a gap, as magnets do, it is a field force.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gravity, mass and weight',
    content: slide(
      <>
        <Rule>Gravity is the force of attraction between objects because of their mass. The weight of an object is the gravitational force on it, measured in newtons. Mass is the amount of matter and is measured in kilograms. Mass stays the same everywhere, but weight changes with the gravity.</Rule>
        <InfoTable
          cols={[{ title: '', w: 22 }, { title: 'Mass', w: 39 }, { title: 'Weight', w: 39 }]}
          rows={[
            ['Unit', 'kilogram (kg)', 'newton (N)'],
            ['Earth', `${m} kg`, `${e.weight(m)} N`],
            ['Moon', `${m} kg`, `about ${moon} N`],
          ]}
          aria={`A table comparing mass and weight. A mass of ${m} kilograms is measured in kilograms. Its weight on Earth is ${e.weight(m)} newtons and on the Moon about ${moon} newtons. The mass stays the same, the weight changes.`}
        />
        <Worked
          title="Weight from mass"
          steps={[
            <>Weight = mass × g. On Earth g is about {e.G_EARTH} N/kg (a rounding of 9,8).</>,
            <>A mass of {m} kg weighs {m} × {e.G_EARTH} = <strong>{e.weight(m)} N</strong>.</>,
            <>On the Moon gravity is about one sixth of Earth&apos;s, so the weight is about {e.weight(m)} ÷ 6 = <strong>{moon} N</strong>. The mass is still {m} kg.</>,
            <>The bigger the mass, the bigger the pull of gravity. The force falls as the distance between the objects grows.</>,
          ]}
        />
        <Mistake>Saying that an astronaut&apos;s mass is smaller on the Moon. The astronaut weighs less there, but the mass is the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Magnetic and electrostatic forces, and lightning',
    content: slide(
      <>
        <Rule>A magnet has a north and a south pole. Unlike poles attract and like poles repel. Magnets attract magnetic substances such as iron, steel, cobalt and nickel. Rubbing some materials together moves electrons from one to the other, and charged objects attract or repel: like charges repel and unlike charges attract.</Rule>
        <MagnetPair attract={false} />
        <Worked
          title="Poles, charge and lightning"
          steps={[
            <>Two north poles facing each other <strong>repel</strong>. A north pole facing a south pole <strong>attracts</strong>. The Earth also has a magnetic field with north and south poles.</>,
            <>Rubbing a plastic ruler with a cloth moves <strong>electrons</strong> only. The protons cannot move. The ruler gains a negative charge and the cloth a positive charge.</>,
            <>A thunder cloud becomes charged by air and water particles rubbing together. A lightning strike is a massive <strong>discharge</strong> of that charge between the cloud and the ground.</>,
            <>In a thunderstorm stay inside a building or a car with a hard roof, and keep away from open ground, tall trees and water.</>,
          ]}
        />
        <Mistake>Thinking that protons move when objects are rubbed. Only the electrons move, so a charged object has gained or lost electrons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A learner has a mass of 45 kg. What is the weight on Earth, with g = 10 N/kg?</>,
            <>A bag weighs 300 N on Earth. What is its mass?</>,
            <>Name one contact force and one field force.</>,
            <>Two like poles of magnets are brought close together. What happens?</>,
          ]}
          answers={[
            <>45 × 10 = <strong>{check.w} N</strong>.</>,
            <>300 ÷ 10 = <strong>{check.mass} kg</strong>.</>,
            <>Contact: <strong>friction</strong> (or tension). Field: <strong>gravity</strong> (or magnetic or electrostatic force).</>,
            <>They <strong>repel</strong> each other.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "In which unit is force measured?", options: ["Newtons (N)","Joules (J)","Watts (W)","Kilograms (kg)"], answer: "Newtons (N)", explanation: "Force is measured in newtons. Kilograms measure mass." },
  { prompt: "Which of these is a contact force?", options: ["Gravity","Friction","Magnetic force","Electrostatic force"], answer: "Friction", explanation: "Friction acts when two surfaces touch, so it is a contact force." },
  { prompt: "Which of these is a field (non-contact) force?", options: ["Friction","Tension in a rope","Gravitational force","Compression of a spring"], answer: "Gravitational force", explanation: "Gravity acts at a distance without the objects touching." },
  { prompt: "Which of these can a force change?", options: ["The mass of an object","The colour of an object","The volume of the air","The speed of an object"], answer: "The speed of an object", explanation: "A force can change the shape, direction or speed of an object." },
  { prompt: "What is true of the forces that two objects exert on each other?", options: ["They always act in pairs","They act on one of the objects only","They cancel and disappear","They depend on the colour of the objects"], answer: "They always act in pairs", explanation: "Forces that two objects exert on each other always act in pairs." },
  { prompt: "Which statement about mass and weight is correct?", options: ["Weight stays the same on the Moon, but mass changes","Mass stays the same on the Moon, but weight changes","Mass and weight are both measured in newtons","Mass and weight are the same thing"], answer: "Mass stays the same on the Moon, but weight changes", explanation: "Mass is the amount of matter and does not change. Weight depends on gravity, so it changes on the Moon." },
  { prompt: "A learner has a mass of 50 kg. Taking g as 10 N/kg, what is the weight on Earth?", options: ["50 N","5 000 N","500 N","5 N"], answer: "500 N", explanation: "Weight = mass × g = 50 × 10 = 500 N." },
  { prompt: "A box weighs 80 N on Earth. Taking g as 10 N/kg, what is its mass?", options: ["800 kg","80 kg","0,8 kg","8 kg"], answer: "8 kg", explanation: "Mass = weight ÷ g = 80 ÷ 10 = 8 kg." },
  { prompt: "An astronaut weighs 600 N on Earth. About what does the astronaut weigh on the Moon, where gravity is about one sixth of the Earth's?", options: ["100 N","3 600 N","600 N","6 N"], answer: "100 N", explanation: "The weight on the Moon is about 600 ÷ 6 = 100 N." },
  { prompt: "Which quantity is measured with a spring balance calibrated in newtons?", options: ["Mass","Weight","Volume","Temperature"], answer: "Weight", explanation: "A spring balance measures the pull of gravity on an object, which is its weight." },
  { prompt: "Two bar magnets are placed so that their north poles face each other. What happens?", options: ["They attract","Nothing happens","They repel","They melt together"], answer: "They repel", explanation: "Like poles repel each other." },
  { prompt: "Which substances are attracted by a magnet?", options: ["Wood and paper","Plastic and rubber","Glass and cloth","Iron and steel"], answer: "Iron and steel", explanation: "Magnets attract magnetic substances, which include iron, steel, cobalt and nickel." },
  { prompt: "A plastic ruler is rubbed with a cloth and becomes charged. What moves from one material to the other?", options: ["Electrons","Protons","Neutrons","Whole atoms"], answer: "Electrons", explanation: "Only electrons can move when objects are rubbed. Protons stay in the nuclei." },
  { prompt: "What is lightning?", options: ["The Sun heating the clouds directly","A discharge of built-up charge","Clouds crashing into each other","Strong wind blowing over the sea"], answer: "A discharge of built-up charge", explanation: "A thunder cloud becomes charged, and lightning is a massive discharge of charge between the cloud and the ground." },
];

const Forces = () => (
  <CapsSubjectTopic
    title="Forces"
    subtitle="Contact and field forces, mass and weight, magnets, static electricity and lightning"
    learnSteps={learnSteps}
    task="gr9-forces-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default Forces;
