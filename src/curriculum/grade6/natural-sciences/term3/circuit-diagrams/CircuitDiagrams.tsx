import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Why we use circuit diagrams',
    image: { src: '/curriculum/grade6/nst/term3/circuit-diagrams/diagram.svg', alt: 'chart of standard circuit symbols' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>circuit diagram</strong> uses simple symbols to show the parts of an electric circuit clearly.
        </p>
        <p className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Diagrams are quicker to draw than pictures of real cells, bulbs and switches. Everyone in the world reads the same symbols.
        </p>
      </div>
    ),
  },
  {
    title: 'Common circuit symbols',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn the symbol for each part: <strong>cell</strong>, <strong>battery</strong>, <strong>lamp</strong>, <strong>switch</strong> and <strong>wire</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">One long line and one short, thick line → cell</div>
          <div className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">Two or more cells together → battery</div>
          <div className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-700">Circle with a cross → lamp</div>
          <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">Straight lines → connecting wires</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Open and closed switches',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A switch symbol shows whether the path is joined or broken.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-700">Closed switch: the lever touches both dots, so current can flow</div>
          <div className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">Open switch: the lever lifts away, leaving a gap, so current stops</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Drawing a circuit diagram',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Draw neatly so anyone can read your diagram:</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span>• Use a ruler and a sharp pencil for straight wires.</span>
          <span>• Draw the wires as a complete loop with square corners.</span>
          <span>• Use the standard symbol for every part.</span>
          <span>• Do not draw the wires through the symbols.</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading a diagram: will the bulb light?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Trace the wires with your finger, starting at the cell. You must get all the way round to the other end of the cell.
        </p>
        <p className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-800">
          An unbroken loop with a cell and a closed switch → the lamp lights.
        </p>
        <p className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">
          A gap, an open switch or a missing cell → the lamp stays off.
        </p>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'Why do scientists use circuit diagrams instead of pictures of real parts?', options: ['Symbols are quick to draw and everyone can read them', 'Symbols are the only way to make a circuit actually work', 'Pictures of real parts use up much more electricity', 'Circuits only work if they have been drawn on paper first'], answer: 'Symbols are quick to draw and everyone can read them', explanation: 'Standard symbols are fast and clear, and are read the same way everywhere.' },
  { prompt: 'Which description matches the symbol for a single cell?', options: ['One long thin line and one short thick line', 'Two thin lines that are exactly the same length', 'A circle with a cross inside it, joined to wires', 'A zig-zag line with sharp corners in the middle'], answer: 'One long thin line and one short thick line', explanation: 'A cell has a long line and a short, thick line.' },
  { prompt: 'What does a battery symbol show?', options: ['Two or more cells joined together', 'One very large cell all on its own', 'A cell with a small bulb attached to it', 'A single cell and a closed switch together'], answer: 'Two or more cells joined together', explanation: 'A battery is made of two or more cells.' },
  { prompt: 'Which symbol is used for a lamp?', options: ['A circle with a cross inside', 'A circle with a dot in the middle', 'A square with a cross inside', 'A circle with a line through it'], answer: 'A circle with a cross inside', explanation: 'The lamp symbol is a circle with a cross.' },
  { prompt: 'What do the straight lines joining the symbols represent?', options: ['Connecting wires', 'The path of the light', 'Parts of the switch', 'The cell\u2019s energy'], answer: 'Connecting wires', explanation: 'Straight lines are the wires that carry current between the parts.' },
  { prompt: 'In a circuit diagram, what does an open switch look like?', options: ['The lever is lifted, leaving a gap', 'The lever touches both dots', 'The switch is drawn as a small circle', 'The switch is left out of the diagram'], answer: 'The lever is lifted, leaving a gap', explanation: 'An open switch leaves a gap, so current cannot flow.' },
  { prompt: 'In a circuit diagram, what does a closed switch look like?', options: ['The lever touches both dots', 'The lever is lifted well away from one dot', 'The lever is drawn as a short thick line', 'The lever points straight at the lamp'], answer: 'The lever touches both dots', explanation: 'A closed switch completes the path.' },
  { prompt: 'A diagram shows a cell, a lamp and a closed switch joined in a loop with no gaps. What will happen?', options: ['The lamp will light', 'The lamp will stay off', 'The lamp will flicker only', 'The cell will go flat at once'], answer: 'The lamp will light', explanation: 'The loop is complete and has an energy source.' },
  { prompt: 'A diagram shows a lamp and a closed switch in a loop, but there is no cell. Will the lamp light?', options: ['No, there is no energy source', 'Yes, the closed switch gives it energy', 'Yes, the wires supply the energy', 'Only if the lamp is drawn large'], answer: 'No, there is no energy source', explanation: 'Wires and switches carry current but cannot make it. You need a cell.' },
  { prompt: 'A diagram shows a cell, a lamp and an open switch in a loop. Will the lamp light?', options: ['No, the open switch breaks the circuit', 'Yes, the cell still pushes current through the lamp', 'Yes, but only very dimly because of the gap', 'Yes, as long as the cell is really a battery'], answer: 'No, the open switch breaks the circuit', explanation: 'An open switch is a gap, so no current flows.' },
  { prompt: 'Which diagram would NOT make a lamp light?', options: ['A cell and lamp where one wire stops short', 'A cell and lamp joined by two complete wires', 'A cell, lamp and closed switch in one loop', 'Two cells, a lamp and a closed switch in one loop'], answer: 'A cell and lamp where one wire stops short', explanation: 'A wire that stops short leaves a gap in the circuit.' },
  { prompt: 'Which is the best way to draw the wires in a circuit diagram?', options: ['Straight lines with a ruler, in a complete loop', 'Curly lines so that the parts look like real wires', 'Lines drawn straight through the middle of each symbol', 'Short lines with small gaps left between the parts'], answer: 'Straight lines with a ruler, in a complete loop', explanation: 'Neat, straight, joined wires make a diagram easy to read.' },
  { prompt: 'Why is it better to draw a circuit diagram before building a circuit?', options: ['You can check the plan first', 'The diagram itself supplies energy to the circuit', 'It stops the cell from going flat too quickly', 'It makes the bulbs in the circuit much brighter'], answer: 'You can check the plan first', explanation: 'Planning on paper helps you find mistakes early.' },
  { prompt: 'Zinhle draws a circuit with a battery of two cells and one lamp. How would she draw the battery?', options: ['Two cell symbols joined side by side', 'One cell symbol drawn twice as thick', 'A cell symbol with two lamp symbols', 'One long line with no short line'], answer: 'Two cell symbols joined side by side', explanation: 'A battery symbol is two or more cell symbols together.' },
];

const CircuitDiagrams = () => (
  <NstTopic title="Circuit Diagrams & Symbols" subtitle="Reading simple electrical symbols" learnSteps={learnSteps} task="circuit-diagrams" bank={bank} />
);

export default CircuitDiagrams;
