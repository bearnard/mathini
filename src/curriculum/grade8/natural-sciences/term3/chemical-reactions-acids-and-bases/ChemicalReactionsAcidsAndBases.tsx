import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Identify chemical change, acids, bases, and neutralisation',
    image: {
      src: '/curriculum/grade8/ns/term3/chemical-reactions-acids-and-bases/diagram.webp',
      alt: 'Grade 8 learners testing acids and bases with indicators and observing reaction evidence',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Chemical reactions make new substances and can be identified by signs such as gas production, colour
          change, or temperature change. Indicators help identify <strong>acids</strong> and <strong>bases</strong>,
          and neutralisation happens when an acid reacts with a base.
        </p>
      </div>
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
    options: ['Whether a substance is acidic, neutral, or basic', 'The mass of a substance', 'The boiling point only', 'The number of atoms in a sample'],
    answer: 'Whether a substance is acidic, neutral, or basic',
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
    options: ['It helps identify whether a solution is acid or base', 'It proves the liquid is safe to drink', 'It always means no reaction occurred', 'It measures density directly'],
    answer: 'It helps identify whether a solution is acid or base',
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
