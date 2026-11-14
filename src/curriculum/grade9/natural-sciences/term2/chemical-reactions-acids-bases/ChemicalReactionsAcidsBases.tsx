import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'What happens during a chemical reaction',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>chemical reaction</strong> happens when substances change into new substances. The
          starting substances are called <strong>reactants</strong> and the new substances are called
          <strong> products</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl">
          <p className="font-bold text-slate-800 mb-2">Signs a chemical reaction happened:</p>
          <div className="grid gap-2 md:grid-cols-2 text-left">
            <p className="text-slate-600">• Colour change</p>
            <p className="text-slate-600">• Gas bubbles form</p>
            <p className="text-slate-600">• Temperature change</p>
            <p className="text-slate-600">• Precipitate forms</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Acids, bases, and pH',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Acids taste sour and turn litmus paper red. Bases feel slippery and turn litmus paper blue.
          <strong> pH</strong> measures how acidic or basic a substance is.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Acids (pH &lt; 7)</strong>
            <p className="text-slate-600">Lemon juice, vinegar, stomach acid.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Neutral (pH = 7)</strong>
            <p className="text-slate-600">Pure water, salt solution.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Bases (pH &gt; 7)</strong>
            <p className="text-slate-600">Soap, ammonia, bleach.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Neutralisation and conservation of mass',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When an acid and base react, they <strong>neutralise</strong> each other to form a salt and
          water. No mass is lost or gained in a chemical reaction.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Key principle:</p>
          <p className="text-slate-600">Mass of reactants = Mass of products</p>
          <p className="text-sm text-slate-500 font-mono">Acid + Base → Salt + Water</p>
        </div>
      </div>
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
