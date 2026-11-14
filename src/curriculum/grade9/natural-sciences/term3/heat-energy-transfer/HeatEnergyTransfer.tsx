import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Three ways heat moves: Conduction, convection, and radiation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Heat is <strong>energy that moves from hot to cold places</strong>. It can move in three ways:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Conduction</strong>
            <p className="text-slate-600">Heat travels through a material without the material moving (e.g., heat up a metal spoon in a fire).</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Convection</strong>
            <p className="text-slate-600">Heat travels by moving fluids (hot air or water rises, cold sinks).</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Radiation</strong>
            <p className="text-slate-600">Heat travels as waves without needing a medium (e.g., heat from the sun).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Insulation and energy conservation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Insulators</strong> slow down heat transfer. Good insulators help save energy by
          keeping heat in (or out) of buildings.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Good insulators:</strong>
            <p className="text-slate-600">Plastic, wood, wool, foam, air gaps.</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <strong className="text-gray-700">Poor insulators (Conductors):</strong>
            <p className="text-slate-600">Metals, glass, water.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy in chemical reactions and temperature change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Chemical reactions can <strong>release heat</strong> (exothermic) or <strong>absorb heat</strong>
          (endothermic). Temperature measures how fast particles move.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Exothermic</strong>
            <p className="text-slate-600">Reaction releases heat (e.g., combustion, neutralisation).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Endothermic</strong>
            <p className="text-slate-600">Reaction absorbs heat from surroundings.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is conduction?',
    options: ['Heat moving through a gas or a liquid as it flows', 'Heat moving through a solid from particle to particle', 'Heat moving through space as waves of energy', 'Heat being measured with a thermometer in a liquid'],
    answer: 'Heat moving through a solid from particle to particle',
    explanation: 'Conduction is heat transfer through a solid without the material moving.',
  },
  {
    prompt: 'Which is an example of convection?',
    options: ['A heated spoon', 'Hot air rising in a room', 'Sunlight warming you', 'Boiling water'],
    answer: 'Hot air rising in a room',
    explanation: 'Convection is heat transfer by moving fluids (air or water).',
  },
  {
    prompt: 'How does heat from the sun reach Earth?',
    options: ['Conduction', 'Convection', 'Radiation', 'None of the above'],
    answer: 'Radiation',
    explanation: 'Heat from the sun travels as electromagnetic waves without needing a medium.',
  },
  {
    prompt: 'What is an insulator?',
    options: ['Something that speeds up heat', 'Something that slows down heat transfer', 'A type of metal', 'A heat source'],
    answer: 'Something that slows down heat transfer',
    explanation: 'Insulators prevent or slow heat transfer.',
  },
  {
    prompt: 'Which is a good insulator?',
    options: ['Copper wire', 'Wool', 'Glass', 'Aluminum'],
    answer: 'Wool',
    explanation: 'Wool is a good insulator; metals conduct heat well.',
  },
  {
    prompt: 'What does an exothermic reaction do?',
    options: ['Absorbs heat', 'Releases heat', 'Creates light only', 'Changes colour'],
    answer: 'Releases heat',
    explanation: 'Exothermic reactions release energy as heat.',
  },
  {
    prompt: 'Is combustion exothermic or endothermic?',
    options: ['Endothermic', 'Exothermic', 'Neither', 'Depends on the fuel'],
    answer: 'Exothermic',
    explanation: 'Combustion (burning) is exothermic and releases a lot of heat.',
  },
  {
    prompt: 'Why do we use insulation in buildings?',
    options: ['To let heat escape in winter so the house feels cooler', 'To keep heat in during winter and out in summer', 'To change the colour of the walls of the building', 'To make the walls of the house look neater'],
    answer: 'To keep heat in during winter and out in summer',
    explanation: 'Insulation saves energy by reducing heat transfer through walls and roofs.',
  },
  {
    prompt: 'What does temperature measure?',
    options: ['Total heat energy', 'How fast particles move', 'The insulation of a material', 'The type of material'],
    answer: 'How fast particles move',
    explanation: 'Temperature is a measure of particle motion; higher temperature = faster motion.',
  },
  {
    prompt: 'What is the difference between heat and temperature?',
    options: ['Heat is the same as temperature, but with a different unit', 'Heat is total energy; temperature shows how fast the particles move', 'Heat is how cold a thing is; temperature is how hot it is', 'Temperature is the total energy; heat is how fast particles move'],
    answer: 'Heat is total energy; temperature shows how fast the particles move',
    explanation: 'Heat is energy transfer; temperature measures how energetic particles are.',
  },
];

const HeatEnergyTransfer = () => (
  <CapsSubjectTopic
    title="Heat and Energy Transfer"
    subtitle="How energy moves and transforms in our world"
    learnSteps={learnSteps}
    task="gr9-heat-energy-transfer-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default HeatEnergyTransfer;
