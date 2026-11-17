import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, GBars, InverseSquareBars } from '../../../../../components/diagrams/ps11/Ps11';
import { EARTH, G, MOON, forceFactor, gField, gravForce, sci, weightN } from '../../../../../components/diagrams/ps11/ps11Helpers';

// Every number below comes from ps11Helpers.ts (tested in ps11Helpers.test.ts and g11PsT1.test.ts).
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const r2 = (n: number) => Math.round(n * 100) / 100;
const F1 = gravForce(2, 3, 0.5);
const gE = gField(EARTH.mass, EARTH.radius);
const gM = gField(MOON.mass, MOON.radius);
const rHigh = EARTH.radius + 4.0e5;
const gHigh = gField(EARTH.mass, rHigh);

export const learnSteps: LearnStep[] = [
  {
    title: "Newton's law of universal gravitation",
    content: slide(
      <>
        <Rule>Every body in the universe attracts every other body with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres: F = G m{sub(1)}m{sub(2)} / r². G = 6,67 × 10⁻¹¹ N·m²·kg⁻².</Rule>
        <FactCards
          cards={[
            { title: 'F', line1: 'the force on each body,', line2: 'in newtons (N)' },
            { title: 'm₁ and m₂', line1: 'the two masses,', line2: 'in kilograms (kg)' },
            { title: 'r', line1: 'distance between centres,', line2: 'in metres (m)' },
          ]}
          aria="The quantities in Newton's law of gravitation. F is the force on each body in newtons. m1 and m2 are the two masses in kilograms. r is the distance between the centres in metres."
        />
        <Worked
          title="Two masses of 2,0 kg and 3,0 kg are 0,50 m apart. Find the force."
          steps={[
            'F = G m₁m₂ / r²',
            `F = (6,67 × 10⁻¹¹)(2,0)(3,0) / (0,50)²`,
            `F = ${sci(F1)} N, and the same size of force acts on each mass.`,
          ]}
        />
        <Mistake>Forgetting to square the distance. The force depends on r², not on r.</Mistake>
      </>,
    ),
  },
  {
    title: 'The inverse square law',
    content: slide(
      <>
        <Rule>The gravitational force is inversely proportional to the square of the distance. Double the distance and the force becomes a quarter. Double one mass and the force doubles.</Rule>
        <InverseSquareBars items={[{ label: 'r', value: 1 }, { label: '2r', value: forceFactor(2) }, { label: '3r', value: forceFactor(3) }]} />
        <Worked
          title="How does the force change?"
          steps={[
            `Distance × 2: force × 1/2² = ${dc(forceFactor(2), 2)}, a quarter of the original.`,
            `Distance × 3: force × 1/3² = ${dc(forceFactor(3), 3)}, a ninth of the original.`,
            'Distance × ½: force × 1/(½)² = 4, so the force becomes four times as big.',
            'Double both masses and double the distance: F × (2 × 2) / 2² = F × 1, so the force is unchanged.',
          ]}
        />
        <Mistake>Saying that doubling the distance halves the force. It is the square of the distance, so the force becomes a quarter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Weight and g on the Earth',
    content: slide(
      <>
        <Rule>Weight is the gravitational force that the Earth exerts on an object: w = mg. The field strength at the surface of a planet is g = GM/r², where r is measured from the centre of the planet.</Rule>
        <GBars items={[{ label: 'Earth surface', g: gE }, { label: '400 km above', g: gHigh }]} />
        <Worked
          title="Use M = 5,98 × 10²⁴ kg and r = 6,38 × 10⁶ m for the Earth"
          steps={[
            `g = GM/r² = (6,67 × 10⁻¹¹)(5,98 × 10²⁴) / (6,38 × 10⁶)² = ${dc(gE)} m·s⁻².`,
            `A 70 kg person weighs w = mg = 70 × ${dc(gE)} = ${dc(weightN(70, r2(gE)), 0)} N.`,
            `At 400 km above the surface r = 6,38 × 10⁶ + 4,0 × 10⁵ = ${sci(rHigh)} m, so g = ${dc(gHigh)} m·s⁻².`,
          ]}
        />
        <Mistake>Using the height above the ground as r. The distance is measured to the centre of the Earth, so add the radius.</Mistake>
      </>,
    ),
  },
  {
    title: 'Weight on other planets',
    content: slide(
      <>
        <Rule>Mass stays the same everywhere, but weight changes with g. On a body with a smaller g you weigh less, although your mass has not changed.</Rule>
        <GBars items={[{ label: 'Earth', g: gE }, { label: 'Moon', g: gM }]} />
        <Worked
          title="The Moon has M = 7,35 × 10²² kg and r = 1,74 × 10⁶ m"
          steps={[
            `g = GM/r² = (6,67 × 10⁻¹¹)(7,35 × 10²²) / (1,74 × 10⁶)² = ${dc(gM)} m·s⁻².`,
            `A 60 kg astronaut weighs ${dc(weightN(60, r2(gM)), 1)} N on the Moon and ${dc(weightN(60, r2(gE)), 0)} N on the Earth.`,
            'The mass of the astronaut is 60 kg in both places.',
          ]}
        />
        <Mistake>Saying that mass changes on the Moon. Mass is the amount of matter and stays the same. Only the weight changes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What happens to the force between two masses when the distance between them is halved?</>,
          <>Why must the radius of the Earth be added when you work out g at a height above the ground?</>,
          <>A 50 kg learner stands on the Earth where g = {dc(gE)} m·s⁻². What is the weight?</>,
          <>The same learner is on the Moon where g = {dc(gM)} m·s⁻². What is the mass?</>,
        ]}
        answers={[
          <>The force becomes four times as big.</>,
          <>Because r is measured to the centre of the Earth.</>,
          <>w = mg = 50 × {dc(gE)} = {dc(weightN(50, r2(gE)), 0)} N.</>,
          <>50 kg: mass does not change.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Two masses of 2,0 kg and 3,0 kg are 0,50 m apart. Use G = 6,67 × 10⁻¹¹ N·m²·kg⁻². What is the gravitational force between them?",
    options: ["8,00 × 10⁻¹⁰ N", "1,00 × 10⁻¹⁰ N", "1,60 × 10⁻⁹ N", "1,60 × 10⁻⁸ N"],
    answer: "1,60 × 10⁻⁹ N",
    explanation: "F = G m₁m₂ / r² = (6,67 × 10⁻¹¹)(2,0)(3,0) / (0,50)² = 1,60 × 10⁻⁹ N.",
  },
  {
    prompt: "The distance between the centres of two bodies is doubled. By what factor does the gravitational force between them change?",
    options: ["It is multiplied by one quarter", "It is multiplied by one half", "It is multiplied by two", "It is multiplied by four"],
    answer: "It is multiplied by one quarter",
    explanation: "F is inversely proportional to r², so doubling r divides F by 2² = 4.",
  },
  {
    prompt: "The distance between two masses is cut to half of its value. How does the gravitational force between them change?",
    options: ["It becomes twice as big", "It becomes half as big", "It stays the same", "It becomes four times as big"],
    answer: "It becomes four times as big",
    explanation: "F ∝ 1/r². With r × ½ the force is multiplied by 1/(½)² = 4.",
  },
  {
    prompt: "One of two masses is doubled and the distance between them stays the same. What happens to the force?",
    options: ["It becomes four times as big", "It doubles", "It becomes half as big", "It stays the same"],
    answer: "It doubles",
    explanation: "F is directly proportional to each mass, so doubling one mass doubles the force.",
  },
  {
    prompt: "Both masses are doubled and the distance between them is also doubled. What happens to the gravitational force?",
    options: ["It doubles", "It stays the same", "It becomes four times as big", "It becomes a quarter as big"],
    answer: "It stays the same",
    explanation: "F ∝ m₁m₂/r², so F × (2 × 2)/2² = F × 1.",
  },
  {
    prompt: "Use G = 6,67 × 10⁻¹¹ N·m²·kg⁻², M = 5,98 × 10²⁴ kg and r = 6,38 × 10⁶ m for the Earth. What is g at the surface of the Earth?",
    options: ["6,25 × 10⁷ m·s⁻²", "0,98 m·s⁻²", "19,6 m·s⁻²", "9,80 m·s⁻²"],
    answer: "9,80 m·s⁻²",
    explanation: "g = GM/r² = (6,67 × 10⁻¹¹)(5,98 × 10²⁴)/(6,38 × 10⁶)² = 9,80 m·s⁻².",
  },
  {
    prompt: "Use the same data for the Earth. What is g at a height of 400 km above the surface of the Earth? (Remember that r is measured from the centre of the Earth.)",
    options: ["8,68 m·s⁻²", "9,80 m·s⁻²", "11,15 m·s⁻²", "2,49 × 10³ m·s⁻²"],
    answer: "8,68 m·s⁻²",
    explanation: "r = 6,38 × 10⁶ + 4,0 × 10⁵ = 6,78 × 10⁶ m, so g = GM/r² = 8,68 m·s⁻².",
  },
  {
    prompt: "Take g = 9,80 m·s⁻² on the Earth. What is the weight of a 70 kg person?",
    options: ["7,14 N", "68,6 N", "686 N", "70 N"],
    answer: "686 N",
    explanation: "w = mg = 70 × 9,80 = 686 N.",
  },
  {
    prompt: "Take g = 9,80 m·s⁻² on the Earth. The gravitational force that the Earth exerts on a 5,0 kg bag is:",
    options: ["0,51 N", "490 N", "5,0 N", "49,0 N"],
    answer: "49,0 N",
    explanation: "The force is the weight: w = mg = 5,0 × 9,80 = 49,0 N.",
  },
  {
    prompt: "The Moon has a mass of 7,35 × 10²² kg and a radius of 1,74 × 10⁶ m. Use G = 6,67 × 10⁻¹¹ N·m²·kg⁻². What is g at the surface of the Moon?",
    options: ["4,90 m·s⁻²", "1,62 m·s⁻²", "0,162 m·s⁻²", "16,2 m·s⁻²"],
    answer: "1,62 m·s⁻²",
    explanation: "g = GM/r² = (6,67 × 10⁻¹¹)(7,35 × 10²²)/(1,74 × 10⁶)² = 1,62 m·s⁻².",
  },
  {
    prompt: "Take g = 1,62 m·s⁻² on the Moon. What does a 60 kg astronaut weigh on the Moon?",
    options: ["97,2 N", "588 N", "37,0 N", "60 N"],
    answer: "97,2 N",
    explanation: "w = mg = 60 × 1,62 = 97,2 N.",
  },
  {
    prompt: "A 60 kg astronaut travels from the Earth to the Moon. What happens to the mass of the astronaut?",
    options: ["It becomes about 10 kg", "It becomes about 97 kg", "It stays 60 kg", "It becomes zero"],
    answer: "It stays 60 kg",
    explanation: "Mass is the amount of matter and does not change. Only the weight changes.",
  },
  {
    prompt: "In Newton's law of gravitation, the distance r is measured between:",
    options: ["the surfaces of the two bodies", "the heavier body and the ground", "the centres of the two bodies", "the lighter body and the ground"],
    answer: "the centres of the two bodies",
    explanation: "r is the distance between the centres of the bodies, which is why the radius of a planet is added to a height above its surface.",
  },
  {
    prompt: "In which unit is weight measured?",
    options: ["newton (N)", "kilogram (kg)", "metre per second squared (m·s⁻²)", "joule (J)"],
    answer: "newton (N)",
    explanation: "Weight is a force, so it is measured in newtons. Mass is measured in kilograms.",
  },
];

const Gravitation = () => (
  <CapsSubjectTopic
    title="Newton's Law of Universal Gravitation"
    subtitle="Newton's law of gravitation, the inverse square law, weight and g"
    learnSteps={learnSteps}
    task="gr11-gravitation-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Gravitation;
