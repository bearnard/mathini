import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Conductors and insulators',
    image: { src: '/curriculum/grade6/nst/term3/conductors-insulators/diagram.svg', alt: 'test circuit showing a material gap and examples of conductors and insulators' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>conductor</strong> lets electricity pass through it. An <strong>insulator</strong> does not let electricity pass through easily.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-slate-700">
          <span><strong>Conductors:</strong> most metals, such as copper, iron, steel and aluminium</span>
          <span><strong>Insulators:</strong> plastic, rubber, dry wood, glass and dry cloth</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing materials',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          To test a material, place it in a <strong>gap</strong> in a simple circuit. If the bulb lights, the material conducts electricity.
        </p>
        <p className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">
          Bulb lights = conductor. Bulb stays off = insulator.
        </p>
        <p className="text-slate-500">For a <strong>fair test</strong>, use the same cell, bulb and wires each time, and change only the material.</p>
      </div>
    ),
  },
  {
    title: 'Appearance can fool you',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">You cannot tell a conductor from an insulator by looking at it.</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span>• Shiny things are not always conductors (a glass bead is shiny).</span>
          <span>• Heavy things are not always conductors (a brick is heavy).</span>
          <span>• Some dull things conduct (the pencil lead called <strong>graphite</strong>).</span>
        </div>
        <p className="text-slate-500">Always test it in a circuit.</p>
      </div>
    ),
  },
  {
    title: 'Safety with insulators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electric wires are metal inside because metal conducts electricity. They are coated with <strong>plastic</strong> because plastic is an insulator.
        </p>
        <p className="text-slate-500">The plastic coating keeps the current in the wire and helps protect people from electric shock.</p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">Plugs are plastic outside and metal inside for the same reason.</p>
      </div>
    ),
  },
  {
    title: 'Water and your body',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Tap water has dissolved minerals in it, and it <strong>conducts</strong> electricity. Wet hands and wet wood are not safe near electricity.
        </p>
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Your body conducts electricity too. That is why mains electricity can give you a shock.
        </p>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'What is an electrical conductor?', options: ['A material that lets electricity pass through', 'A material that stores electricity inside it', 'A material that makes electricity from heat', 'A material that is hot when electricity is on'], answer: 'A material that lets electricity pass through', explanation: 'Conductors allow electric current to move through them.' },
  { prompt: 'What is an electrical insulator?', options: ['A material that does not let electricity pass easily', 'A material that keeps things warm, but not cold, and is a poor choice for circuits', 'A material that cannot be used in a circuit at all', 'A material that gets rid of any extra electricity'], answer: 'A material that does not let electricity pass easily', explanation: 'Insulators resist the flow of electric current.' },
  { prompt: 'Which group contains only conductors?', options: ['Copper, iron and aluminium', 'Copper, rubber and stainless steel', 'Iron, glass and aluminium foil', 'Steel, plastic and copper wire'], answer: 'Copper, iron and aluminium', explanation: 'All three are metals, and metals usually conduct.' },
  { prompt: 'Which group contains only insulators?', options: ['Plastic, rubber and glass', 'Plastic, steel and glass', 'Rubber, copper and glass', 'Glass, aluminium and rubber'], answer: 'Plastic, rubber and glass', explanation: 'Plastic, rubber and glass do not let electricity pass easily.' },
  { prompt: 'Why are electric wires covered in plastic?', options: ['Plastic is an insulator, so it keeps us safe', 'Plastic helps the current flow along the wire faster', 'Plastic stops the metal inside from getting too hot', 'Plastic gives the wire the energy it needs'], answer: 'Plastic is an insulator, so it keeps us safe', explanation: 'The plastic coating keeps current in the wire and stops shocks.' },
  { prompt: 'Why is the inside of a wire made of metal?', options: ['Metal is a conductor', 'Metal is stronger than plastic', 'Metal does not let heat out', 'Metal is a shiny insulator'], answer: 'Metal is a conductor', explanation: 'Metal gives the current an easy path to flow through.' },
  { prompt: 'How can you test whether a material conducts electricity?', options: ['Put it in a gap in a simple circuit', 'Hold it and see if it feels cold', 'Drop it and listen to the sound it makes', 'Check how shiny it looks in the light'], answer: 'Put it in a gap in a simple circuit', explanation: 'If the bulb lights, the material completes the circuit and conducts.' },
  { prompt: 'In a test circuit the bulb stays off when a plastic ruler is in the gap. What does this show?', options: ['The ruler is an insulator', 'The ruler is a conductor', 'The cell must be completely flat', 'The bulb is the wrong colour for the cell'], answer: 'The ruler is an insulator', explanation: 'If current cannot pass through the material, the bulb stays off. (Check that the cell and bulb work first.)' },
  { prompt: 'Which is a fair test of three materials?', options: ['Use the same cell, bulb and wires each time', 'Use a different cell and bulb for each material', 'Use a bigger bulb for the metal one only', 'Test the plastic one for much longer than the others'], answer: 'Use the same cell, bulb and wires each time', explanation: 'Only the material should change. Everything else stays the same.' },
  { prompt: 'A learner says a shiny glass bead must be a conductor because it is shiny. Is this right?', options: ['No, shiny things can still be insulators', 'Yes, all shiny things are conductors of electricity', 'Yes, but only if the bead is also quite heavy', 'No, because conductors are never shiny at all'], answer: 'No, shiny things can still be insulators', explanation: 'Glass is shiny but it is an insulator. You must test it in a circuit.' },
  { prompt: 'Which of these usually conducts electricity, even though it is not a metal?', options: ['Graphite (pencil lead)', 'Dry wood from a tree branch', 'A thick rubber band', 'A clear glass marble'], answer: 'Graphite (pencil lead)', explanation: 'Graphite is a form of carbon that conducts electricity. It is an exception.' },
  { prompt: 'Why is it dangerous to touch an electrical switch with wet hands?', options: ['Water conducts electricity', 'Water makes the switch too heavy', 'Water is an insulator and traps current', 'Water stops the switch from clicking'], answer: 'Water conducts electricity', explanation: 'Tap water has minerals in it and carries current, so you can get a shock.' },
  { prompt: 'A plug has a plastic case and metal pins. Why?', options: ['The pins conduct and the case insulates', 'The pins insulate and the case conducts', 'Both parts conduct, but the case is cheaper', 'Plastic is only used to make plugs lighter'], answer: 'The pins conduct and the case insulates', explanation: 'Metal pins carry current. The plastic case protects your hands.' },
  { prompt: 'An electrician wears rubber gloves and boots. Why?', options: ['Rubber is an insulator that protects against shock', 'Rubber is a conductor that carries electricity away', 'Rubber keeps the electrician\u2019s hands warm', 'Rubber makes the wires easier to grip'], answer: 'Rubber is an insulator that protects against shock', explanation: 'Rubber does not let current pass easily, so it helps protect the person.' },
  { kind: 'explain', section: 'insulators', prompt: 'Explain why insulators are important in electrical circuits. Give an example of an insulator used in household wiring.', options: ['Insulators do not let electricity flow through them, so they keep the current in the wire and protect people from electric shock', 'An example: plastic (the coating on wires) or rubber'], answer: 'Insulators do not let electricity flow through them, so they keep the current in the wire and protect people from electric shock|An example: plastic (the coating on wires) or rubber', explanation: 'Wires are metal inside because metal conducts. The plastic coating is an insulator that keeps the current in the wire and keeps people safe.' },

];

const ConductorsInsulators = () => (
  <NstTopic title="Conductors & Insulators" subtitle="Materials that let electricity pass or stop it" learnSteps={learnSteps} task="conductors-insulators" bank={bank} />
);

export default ConductorsInsulators;
