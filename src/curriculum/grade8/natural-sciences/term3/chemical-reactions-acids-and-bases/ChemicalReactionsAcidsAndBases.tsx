import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FiltrationSetup, PhBar } from '../../../../../components/diagrams/science/SciencePictures';
import { NeutralisationBeakers } from '../../../../../components/diagrams/science/SciencePictures4';
import { litmus, phZone } from '../../../../../components/diagrams/science/scienceHelpers';

// Litmus results come from a tested helper (scienceHelpers.test.ts).
const blueInAcid = litmus('blue', phZone(3));
const redInBase = litmus('red', phZone(11));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Chemical change',
    content: slide(
      <>
        <Rule>
          In a chemical change new substances are formed, with new properties. Signs are gas bubbles forming, a colour change or a temperature change.
        </Rule>
        <Worked
          title="Which observation is evidence of a chemical reaction?"
          steps={[
            <>Gas bubbles forming when you add vinegar to baking soda: a new gas is made, so this is evidence of a reaction.</>,
            <>Iron going from grey to a red-brown rust: a new substance, so a colour change that shows a reaction.</>,
            <>A reaction that makes the test tube hot or cold shows a temperature change.</>,
          ]}
        />
        <Mistake>Taking any change as a chemical change. Only a change that makes new substances counts. Check for new properties, not just for a change in appearance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Physical change and separating mixtures',
    content: slide(
      <>
        <Rule>
          In a physical change no new substance is made. Melting wax is usually a physical change. Filtration separates an insoluble solid from a liquid.
        </Rule>
        <FiltrationSetup />
        <Worked
          title="Melting wax and sand in water"
          steps={[
            <>Melting wax changes its state from solid to liquid, but it is still wax. Cool it and it goes hard again: a physical change.</>,
            <>Sand does not dissolve in water. Pour the mixture through filter paper.</>,
            <>The paper traps the sand and the water passes through. Filtration is the best method for sand and water.</>,
          ]}
        />
        <Mistake>Using filtration to remove something that has dissolved. Dissolved particles pass through the paper.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acids, bases and indicators',
    content: slide(
      <>
        <Rule>
          Indicators show whether a solution is an acid or a base. Universal indicator shows whether a substance is acidic, neutral or basic, on the pH scale from 0 to 14. Blue litmus turns red in an acid.
        </Rule>
        <PhBar />
        <Worked
          title="Read the indicators"
          steps={[
            <>Blue litmus turns {blueInAcid}: the solution is acidic (pH below 7).</>,
            <>Red litmus turns {redInBase}: the solution is basic (pH above 7).</>,
            <>Indicators help in experiments, because their colour shows whether a solution is an acid or a base.</>,
          ]}
        />
        <Mistake>Thinking pH 7 is acidic. pH 7 is neutral. Below 7 is acidic and above 7 is basic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Neutralisation',
    content: slide(
      <>
        <Rule>
          A neutralisation reaction is between an acid and a base. It generally forms a salt and water, and the pH moves towards 7.
        </Rule>
        <NeutralisationBeakers acidPh={2} basePh={12} />
        <Worked
          title="Acid meets base"
          steps={[
            <>Start with an acid (pH 2, red) and a base (pH 12, purple-blue).</>,
            <>Add them together in the right amounts: the acid and the base react.</>,
            <>They form a salt and water. The mixture is neutral, pH 7, and universal indicator turns green.</>,
          ]}
        />
        <Mistake>Believing that neutralisation makes the acid disappear. The acid reacts with the base to make a salt and water, which are new substances.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which sign shows that a chemical reaction has happened? What is true about chemical change?</li>
            <li>Which is a physical change: melting wax or burning wax? Which method separates sand from water?</li>
            <li>What does universal indicator show? Blue litmus paper turns red in a solution. What kind of solution is it?</li>
            <li>Which two kinds of substance react in neutralisation?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Gas bubbles forming. New substances are formed.</li>
            <li>Melting wax. Filtration.</li>
            <li>Whether a substance is acidic, neutral or basic. Acidic.</li>
            <li>An acid and a base.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which observation is evidence of a chemical reaction?',
    options: ['Gas bubbles forming', 'Ice melting in a glass', 'Water evaporating from a dish', 'Sugar dissolving in tea'],
    answer: 'Gas bubbles forming',
    explanation: 'Gas formation is a common sign that new substances are produced.',
  },
  {
    prompt: 'What does a universal indicator mainly show?',
    options: ['Whether a substance is acidic, neutral or basic', 'The mass of the substance being tested', 'The boiling point of the substance only', 'The number of atoms in the sample'],
    answer: 'Whether a substance is acidic, neutral or basic',
    explanation: 'Indicator colour changes give information about pH.',
  },
  {
    prompt: 'A neutralisation reaction is between...',
    options: ['an acid and a base', 'two acids only', 'two metals only', 'a gas and a metal only'],
    answer: 'an acid and a base',
    explanation: 'Acid-base neutralisation generally forms salt and water.',
  },
  {
    prompt: 'Which process is usually a physical change?',
    options: ['Melting wax', 'Burning paper', 'Rusting iron', 'Cooking an egg'],
    answer: 'Melting wax',
    explanation: 'Melting changes state but does not create a new substance.',
  },
  {
    prompt: 'If blue litmus turns red, the tested solution is likely...',
    options: ['acidic', 'basic', 'neutral only', 'a pure metal'],
    answer: 'acidic',
    explanation: 'Acids turn blue litmus red.',
  },
  {
    prompt: 'Which method is best for separating sand from water?',
    options: ['Filtration', 'Magnetism', 'Chromatography', 'Crystallisation only'],
    answer: 'Filtration',
    explanation: 'Filtration separates an insoluble solid from a liquid.',
  },
  {
    prompt: 'Why is colour change with an indicator useful in experiments?',
    options: ['It shows whether a solution is an acid or a base', 'It proves that the liquid is safe to drink', 'It always means that no reaction took place', 'It measures the density of the liquid directly'],
    answer: 'It shows whether a solution is an acid or a base',
    explanation: 'Indicators provide visible evidence about acidity or alkalinity.',
  },
  {
    prompt: 'Which statement about chemical change is correct?',
    options: ['New substances are formed', 'Particles disappear completely', 'The process is always reversible', 'Only state changes occur'],
    answer: 'New substances are formed',
    explanation: 'Chemical changes produce substances with new properties.',
  },
];

const ChemicalReactionsAcidsAndBases = () => (
  <CapsSubjectTopic
    title="Chemical Reactions, Acids and Bases"
    subtitle="Reaction evidence, indicators, neutralisation, and separation methods"
    learnSteps={learnSteps}
    task="gr8-chemical-reactions-acids-and-bases-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ChemicalReactionsAcidsAndBases;
