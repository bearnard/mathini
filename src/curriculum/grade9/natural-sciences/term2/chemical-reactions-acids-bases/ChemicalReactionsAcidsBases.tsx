import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { PhBar } from '../../../../../components/diagrams/science/SciencePictures';
import { FlowDiagram, NeutralisationBeakers } from '../../../../../components/diagrams/science/SciencePictures4';
import { MassBars } from '../../../../../components/diagrams/science/SciencePictures9';
import { litmus, phZone } from '../../../../../components/diagrams/science/scienceHelpers';
import { massTotal } from '../../../../../components/diagrams/science/science9Helpers';

// Litmus colours, pH zones and the masses come from tested helpers (scienceHelpers.test.ts, science9.test.ts).
const redInAcid = litmus('blue', phZone(2));
const blueInBase = litmus('red', phZone(11));
const total = massTotal([10, 15]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Reactants, products and signs of a reaction',
    content: slide(
      <>
        <Rule>
          In a chemical reaction the starting substances, the reactants, change into new substances, the products. Signs include a colour change or a gas given off.
        </Rule>
        <FlowDiagram
          id="rx"
          title="A chemical reaction"
          desc="The reactants, the starting substances, change into the products, the new substances."
          nodes={[
            { id: 'r', label: 'reactants', x: 34, y: 54, color: '#7dd3fc' },
            { id: 'p', label: 'products', x: 126, y: 54, color: '#6ee7b7' },
          ]}
          edges={[{ from: 'r', to: 'p', label: 'chemical reaction', bend: 0, lx: 80, ly: 46 }]}
        />
        <Terms
          rows={[
            ['Colour change', 'a new colour appears'],
            ['Gas bubbles', 'a gas is given off'],
            ['Temperature change', 'the mixture gets hotter or colder'],
            ['Solid forms', 'a precipitate appears in a clear solution'],
          ]}
        />
        <Worked
          title="Vinegar and baking soda"
          steps={[<>The reactants are vinegar and baking soda.</>, <>Bubbles of gas appear: a sign of a reaction.</>, <>New substances, the products, have formed, including the gas.</>]}
        />
        <Mistake>Mixing up the two sides. Reactants are the starting substances, products are what they form.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acids and bases',
    content: slide(
      <>
        <Rule>
          Acids turn litmus paper red and bases turn it blue. Common acids taste sour and common bases feel slippery and taste bitter, but never taste or touch unknown chemicals: use an indicator.
        </Rule>
        <Terms
          rows={[
            ['Acids', 'lemon juice (it contains citric acid), vinegar, stomach acid'],
            ['Bases', 'soap, ammonia, bleach: alkaline substances that turn litmus blue'],
          ]}
        />
        <Worked
          title="Test two solutions with litmus paper"
          steps={[<>Solution A turns blue litmus {redInAcid}: it is an acid.</>, <>Solution B turns red litmus {blueInBase}: it is a base.</>, <>Lemon juice is acidic, while soap is a base.</>]}
        />
        <Mistake>Tasting a liquid to find out whether it is an acid. Many acids and bases burn. Use litmus paper or another indicator.</Mistake>
      </>,
    ),
  },
  {
    title: 'The pH scale',
    content: slide(
      <>
        <Rule>
          pH is a scale that measures how acidic or basic a thing is. Acids have pH below 7, bases above 7, and pure water has a pH of 7: it is neutral.
        </Rule>
        <PhBar />
        <Worked
          title="Place the substances"
          steps={[<>Lemon juice has a pH of about 2, which is below 7: an {phZone(2)}.</>, <>Pure water: exactly 7 ({phZone(7)}).</>, <>Soap has a pH above 7, for example 10: a {phZone(10)}.</>]}
        />
        <Mistake>Thinking pH 7 is acidic or that a bigger pH means more acid. Below 7 is acidic, above 7 is basic, and the lower the number the more acidic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Neutralisation',
    content: slide(
      <>
        <Rule>
          When an acid and a base react they neutralise each other, forming a salt and water. Acid + Base → Salt + Water.
        </Rule>
        <NeutralisationBeakers acidPh={2} basePh={12} />
        <Worked
          title="Neutralise stomach acid"
          steps={[<>Too much stomach acid causes heartburn.</>, <>An antacid tablet contains a base that reacts with the acid.</>, <>They neutralise each other and form a salt and water, so the acid is used up.</>]}
        />
        <Mistake>Thinking neutralisation makes the acid vanish. The acid and base react to make new substances, a salt and water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conservation of mass',
    content: slide(
      <>
        <Rule>
          The law of conservation of mass: the mass of the reactants equals the mass of the products. No mass is lost or gained in a chemical reaction in a closed system.
        </Rule>
        <MassBars reactants={[10, 15]} />
        <Worked
          title="10 g of one reactant and 15 g of another"
          steps={[<>Total mass of the reactants = 10 + 15 = {total} g.</>, <>In a closed system the products have the same mass: {total} g.</>, <>If a gas escapes from an open container, the mass you measure drops, but the gas still has mass.</>]}
        />
        <Mistake>Believing that mass disappears when something burns or fizzes. The atoms are rearranged, and a gas that escapes carries its mass away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What do we call the starting substances in a reaction? Name one sign that a reaction has happened.</li>
            <li>Blue litmus paper is dipped in an acid: what colour does it become? Describe a base.</li>
            <li>What does the pH scale measure? What pH does pure water have?</li>
            <li>What do an acid and a base form when they react? State the law of conservation of mass. Name one acid and one base found at home.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The reactants. A colour change or a gas given off.</li>
            <li>Red. A substance that feels slippery and tastes bitter (it turns litmus blue).</li>
            <li>A scale that measures how acidic or basic a thing is. 7.</li>
            <li>They neutralise each other, forming a salt and water. The mass of the reactants equals the mass of the products. Lemon juice is an acid; soap is a base.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are reactants in a chemical reaction?',
    options: ['The new substances formed', 'The starting substances', 'The temperature change', 'The container used'],
    answer: 'The starting substances',
    explanation: 'Reactants are the substances that react together; products are what they form.',
  },
  {
    prompt: 'Which is a sign that a chemical reaction has occurred?',
    options: ['Water vapour forms on the cold glass of a jar', 'Two clear liquids are mixed and stay clear and unchanged', 'A substance is heated and then it melts', 'A colour change or a gas given off'],
    answer: 'A colour change or a gas given off',
    explanation: 'Signs include colour change, gas bubbles, temperature change, or solid forming.',
  },
  {
    prompt: 'What does an acid turn litmus paper?',
    options: ['Blue', 'Red', 'Green', 'Yellow'],
    answer: 'Red',
    explanation: 'Acids turn litmus paper red; bases turn it blue.',
  },
  {
    prompt: 'What is pH?',
    options: ['A scale that measures how fast a reaction takes place', 'A scale that measures how acidic or basic a thing is', 'A scale that tells which salt is in a solution', 'A scale that shows the colour of a liquid'],
    answer: 'A scale that measures how acidic or basic a thing is',
    explanation: 'pH measures how acidic (pH < 7) or basic (pH > 7) a substance is.',
  },
  {
    prompt: 'What is the pH of pure water?',
    options: ['Less than 7', '7', 'Greater than 7', '14'],
    answer: '7',
    explanation: 'Pure water is neutral and has a pH of exactly 7.',
  },
  {
    prompt: 'What is a base?',
    options: ['A substance that tastes sour and turns litmus red', 'A substance that feels slippery and tastes bitter', 'A substance that is always found as a gas in the air', 'A substance that is found only in salt water'],
    answer: 'A substance that feels slippery and tastes bitter',
    explanation: 'Bases are alkaline substances that feel slippery and turn litmus blue.',
  },
  {
    prompt: 'What happens when an acid and base react?',
    options: ['They stop reacting and no new substance forms', 'The acid is used up and a base is left over', 'They neutralise each other, forming a salt and water', 'The base burns away and the acid turns to a gas'],
    answer: 'They neutralise each other, forming a salt and water',
    explanation: 'Neutralisation: Acid + Base → Salt + Water',
  },
  {
    prompt: 'What is the law of conservation of mass in chemical reactions?',
    options: ['Matter is made from nothing during a reaction', 'The mass of the reactants equals the mass of the products', 'Only the energy in a reaction is kept the same', 'The mass of the products is always less than the reactants'],
    answer: 'The mass of the reactants equals the mass of the products',
    explanation: 'No mass is lost or gained in a chemical reaction.',
  },
  {
    prompt: 'Which is an example of an acid?',
    options: ['Soap', 'Ammonia', 'Lemon juice', 'Bleach'],
    answer: 'Lemon juice',
    explanation: 'Lemon juice is acidic (contains citric acid).',
  },
  {
    prompt: 'Which is an example of a base?',
    options: ['Vinegar', 'Soap', 'Orange juice', 'Stomach acid'],
    answer: 'Soap',
    explanation: 'Soap is a base; the others are acids or mixtures of acids.',
  },
];

const ChemicalReactionsAcidsBases = () => (
  <CapsSubjectTopic
    title="Chemical Reactions, Acids, Bases and Salts"
    subtitle="Understanding chemical change and matter interactions"
    learnSteps={learnSteps}
    task="gr9-chemical-reactions-acids-bases-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ChemicalReactionsAcidsBases;
