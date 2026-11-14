import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Parts of a circuit',
    image: { src: '/curriculum/grade6/nst/term3/electric-circuits/diagram.svg', alt: 'closed circuit with a cell, bulb, switch and wires' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A simple <strong>electric circuit</strong> has a cell or battery, connecting wires, a bulb and often a switch.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-slate-700">
          <span><strong>Cell or battery:</strong> supplies energy</span>
          <span><strong>Bulb:</strong> changes electrical energy to light</span>
          <span><strong>Wires:</strong> make a path for current</span>
          <span><strong>Switch:</strong> opens or closes the path</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy transfer in a circuit',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The cell stores <strong>chemical energy</strong>. When the circuit is closed, the energy is carried along the wires to the bulb.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Chemical energy (cell) → electrical energy (wires) → light and heat (bulb)
        </div>
        <p className="text-slate-500">A bulb also gets warm, so some of the energy becomes <strong>heat</strong>. That is why a bulb that has been on for a while can be too hot to touch.</p>
      </div>
    ),
  },
  {
    title: 'Closed and open circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electric current flows only when the circuit is <strong>complete</strong> or <strong>closed</strong>. Any gap stops it.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-700">Closed circuit → bulb lights</div>
          <div className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">Open circuit → bulb is off</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Series and parallel',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a <strong>series</strong> circuit there is only one path. In a <strong>parallel</strong> circuit there is more than one path.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
            <strong>Series:</strong> if one bulb breaks, the path is broken and all the bulbs go out.
          </div>
          <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
            <strong>Parallel:</strong> if one bulb breaks, the other path still works and the other bulbs stay on.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Brighter or dimmer?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">What you add to a series circuit changes how bright the bulbs are.</p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-700">More cells in series → brighter bulb</div>
          <div className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">More bulbs in series → dimmer bulbs</div>
        </div>
        <p className="text-slate-500">The energy from the cell is shared between the bulbs.</p>
      </div>
    ),
  },
  {
    title: 'Fix the circuit (troubleshooting)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">If a bulb will not light, check the circuit step by step:</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span>1. Is the switch closed?</span>
          <span>2. Are all the wires joined tightly, with no gaps?</span>
          <span>3. Is the bulb screwed in properly, and is its filament unbroken?</span>
          <span>4. Is the cell flat or turned the wrong way round?</span>
        </div>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What supplies the energy in a simple electric circuit?', options: ['A cell or battery', 'The connecting wires', 'The bulb', 'The switch'], answer: 'A cell or battery', explanation: 'Wires, switches and bulbs do not make energy. They carry it, control it or change it.' },
  { prompt: 'What does the bulb do with the electrical energy?', options: ['Changes it into light and heat', 'Stores it so it can be used later', 'Makes more of it for the cell', 'Sends it back to the cell again'], answer: 'Changes it into light and heat', explanation: 'The bulb changes electrical energy into light (and some heat).' },
  { prompt: 'What energy changes happen in a torch?', options: ['Chemical to electrical to light and heat', 'Light to electrical to chemical to heat', 'Heat to chemical to light and sound', 'Electrical to chemical to light and sound'], answer: 'Chemical to electrical to light and heat', explanation: 'The cell stores chemical energy, which becomes electrical energy in the wires and light and heat in the bulb.' },
  { prompt: 'A bulb is connected to a cell by two wires, but one wire has come loose at the cell. What will happen?', options: ['The bulb stays off because the circuit is open', 'The bulb glows dimly because one wire is still joined', 'The bulb glows brightly because there is less wire', 'The bulb flickers until the cell is flat'], answer: 'The bulb stays off because the circuit is open', explanation: 'Current needs a complete loop. One loose wire breaks the loop.' },
  { prompt: 'What does the switch do when it is open?', options: ['It leaves a gap so current cannot flow', 'It lets the current flow around faster', 'It stores the current until it is closed', 'It joins two cells together in a line'], answer: 'It leaves a gap so current cannot flow', explanation: 'An open switch is a gap in the circuit.' },
  { prompt: 'The switch is closed, the wires are joined, but the bulb is off. What should you check first?', options: ['Whether the cell is flat or the bulb is broken', 'Whether the room is too bright for the bulb to shine', 'Whether the wires are all exactly the same colour', 'Whether the switch is made of shiny silver metal'], answer: 'Whether the cell is flat or the bulb is broken', explanation: 'A flat cell or a broken filament are common faults once the switch and wires are fine.' },
  { prompt: 'Thandi adds a second identical cell in series to her circuit. What happens to the bulb?', options: ['It gets brighter', 'It gets dimmer', 'It stays exactly the same', 'It goes out'], answer: 'It gets brighter', explanation: 'More cells in series give more energy to the bulb.' },
  { prompt: 'Sipho adds a second identical bulb in series. What happens to the bulbs?', options: ['Both bulbs are dimmer than before', 'Both bulbs are brighter than before', 'The first bulb stays the same and the new one is dim', 'The first bulb goes out and the new one lights'], answer: 'Both bulbs are dimmer than before', explanation: 'The cell\u2019s energy is shared between the two bulbs.' },
  { prompt: 'Three bulbs are in series and one bulb breaks. What happens to the other two?', options: ['They go out', 'They get brighter', 'They stay lit', 'They get dimmer but stay lit'], answer: 'They go out', explanation: 'Series circuits have only one path, so a break stops everything.' },
  { prompt: 'Two bulbs are in parallel and one bulb breaks. What happens to the other?', options: ['It stays lit', 'It goes out', 'It gets dimmer', 'It becomes too hot'], answer: 'It stays lit', explanation: 'The other path is still complete, so current still flows through it.' },
  { prompt: 'Why are the lights in a house wired in parallel?', options: ['So one light can fail without the others going out', 'So that the lights use no electricity at all when on', 'So that all the lights in the house are a bit dimmer', 'So that only one light can be on at the same time'], answer: 'So one light can fail without the others going out', explanation: 'Each light has its own path, so a break in one path does not stop the others.' },
  { prompt: 'How many paths are there in a series circuit?', options: ['One', 'Two', 'Three', 'As many as there are bulbs'], answer: 'One', explanation: 'Components in series are joined one after another in a single loop.' },
  { prompt: 'Which circuit will make a bulb light?', options: ['A cell, a bulb and a closed switch in a full loop', 'A cell and a bulb joined by only one long wire', 'A bulb and a closed switch joined without any cell at all', 'A cell and a closed switch joined without any bulb at all'], answer: 'A cell, a bulb and a closed switch in a full loop', explanation: 'You need an energy source, a bulb and a complete loop.' },
  { prompt: 'A learner says a bulb gets warm because some electrical energy changes into heat. Is this correct?', options: ['Yes, bulbs give off light and heat', 'No, bulbs only give off light', 'No, the heat comes from the wires only', 'Yes, but only when the switch is open'], answer: 'Yes, bulbs give off light and heat', explanation: 'Some of the energy always becomes heat, which is why bulbs feel warm.' },
];

const ElectricCircuits = () => (
  <NstTopic title="Electric Circuits" subtitle="What makes a bulb light up" learnSteps={learnSteps} task="electric-circuits" bank={bank} />
);

export default ElectricCircuits;
