import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a system?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>system</strong> is a group of parts that work together to do a job. Many systems have an <strong>input</strong>, a <strong>process</strong> and an <strong>output</strong>.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 font-semibold text-slate-700">
          Input (switch pressed) → Process (current flows along wires) → Output (bulb lights)
        </div>
        <p className="text-slate-500">A torch, a doorbell and a school bell are all systems that use an electric circuit.</p>
      </div>
    ),
  },
  {
    title: 'The design process',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Technologists solve problems in steps:</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span><strong>1. Investigate:</strong> find out about the problem and the need</span>
          <span><strong>2. Design:</strong> plan and draw solutions</span>
          <span><strong>3. Make:</strong> build the best solution</span>
          <span><strong>4. Evaluate:</strong> test it. Does it solve the problem?</span>
          <span><strong>5. Communicate:</strong> show and explain the solution</span>
        </div>
      </div>
    ),
  },
  {
    title: 'The design brief',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>design brief</strong> is a short statement of the problem and what you will make.
        </p>
        <p className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-800">
          Example: &ldquo;Gogo cannot see the passage at night. Design and make a circuit with a switch that lights a lamp.&rdquo;
        </p>
        <p className="text-slate-500"><strong>Specifications</strong> say what the solution must do. <strong>Constraints</strong> are limits, like the materials you have, the time and the cost.</p>
      </div>
    ),
  },
  {
    title: 'Design a circuit',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">When you design a circuit, decide:</p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-left text-slate-700">
          <span>• Which <strong>components</strong> you need (cell, wires, switch, bulb or buzzer)</span>
          <span>• How many cells give enough energy</span>
          <span>• Where the switch goes so it can open and close the circuit</span>
          <span>• Which materials are <strong>conductors</strong> for the circuit and which are <strong>insulators</strong> for a safe cover</span>
        </div>
        <p className="text-slate-500">Draw a circuit diagram with the correct symbols before you build.</p>
      </div>
    ),
  },
  {
    title: 'Test and improve',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Evaluate</strong> by testing: does it work, is it safe, is it strong enough, does it look right, and did it meet the brief?
        </p>
        <p className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-800">
          If it does not work, find the fault, change the design and test again.
        </p>
        <p className="text-slate-500">Then <strong>communicate</strong>: present your design to others with a drawing and a short explanation.</p>
      </div>
    ),
  },
];

export const bank: NstItem[] = [
  { prompt: 'In a torch, which part is the input of the system?', options: ['The switch being pressed', 'The bulb giving light', 'The cell inside the case', 'The plastic case'], answer: 'The switch being pressed', explanation: 'Pressing the switch starts the system. The bulb lighting is the output.' },
  { prompt: 'In a doorbell circuit, what is the output?', options: ['The ringing sound', 'Pressing the doorbell button', 'The wires behind the wall', 'The cell in the box that gives energy'], answer: 'The ringing sound', explanation: 'The output is what the system does: it makes a sound.' },
  { prompt: 'What does a technologist do first when solving a problem?', options: ['Investigate the problem and the need', 'Build the first idea that comes to mind', 'Test the finished product', 'Present the solution to the class'], answer: 'Investigate the problem and the need', explanation: 'You must understand the problem before you can design a solution.' },
  { prompt: 'Which list shows the steps of the design process in the right order?', options: ['Investigate, design, make, evaluate, communicate', 'Design, investigate, evaluate, make, communicate', 'Make, design, investigate, communicate, evaluate', 'Investigate, make, design, communicate, evaluate'], answer: 'Investigate, design, make, evaluate, communicate', explanation: 'You find out, plan, build, test, and then share.' },
  { prompt: 'What is a design brief?', options: ['A short statement of the problem and the task', 'A list of everything that went wrong when you tested it', 'A drawing of the finished product with no other writing', 'A shopping list of all the materials sold in the shop'], answer: 'A short statement of the problem and the task', explanation: 'The brief tells you the problem and the task.' },
  { prompt: 'A learner must make a night light using only one cell. This is an example of a:', options: ['Constraint', 'Specification', 'Evaluation', 'Output'], answer: 'Constraint', explanation: 'A constraint is a limit, like only having one cell. A specification says what the product must do.' },
  { prompt: 'A design brief says the lamp must switch on and off. This is a:', options: ['Specification', 'Constraint on materials', 'Conclusion', 'Prototype made of paper'], answer: 'Specification', explanation: 'A specification says what the product must do.' },
  { prompt: 'Why should you draw a circuit diagram before building?', options: ['To plan the parts and joins', 'To make the circuit work faster once it is built', 'To make all of the wires much shorter', 'To avoid needing a cell in the circuit'], answer: 'To plan the parts and joins', explanation: 'A diagram helps you check the design on paper first.' },
  { prompt: 'Where should the switch go in a night-light circuit so you can turn it on and off?', options: ['In line with the other parts', 'Next to the circuit but not joined to it at all', 'Only on the outside of the box, away from wires', 'Directly on the glass of the bulb itself'], answer: 'In line with the other parts', explanation: 'A switch only controls the circuit if it is part of the loop.' },
  { prompt: 'Which material is best for the outside cover of a hand-held circuit, to keep users safe?', options: ['Plastic', 'Copper', 'Aluminium foil', 'Steel'], answer: 'Plastic', explanation: 'Plastic is an insulator, so it will not carry electricity to your hand.' },
  { prompt: 'Which material should the connecting wires be made of?', options: ['Copper', 'Rubber', 'Dry wood', 'Plastic'], answer: 'Copper', explanation: 'Copper is a good conductor, so current flows easily.' },
  { prompt: 'Your night light does not switch on during testing. What should you do?', options: ['Find the fault, fix it and test again', 'Present it as it is, because you tried your best', 'Change the brief so that it no longer needs to work', 'Add more bulbs without checking the circuit first'], answer: 'Find the fault, fix it and test again', explanation: 'Evaluating means testing and improving.' },
  { prompt: 'Which question helps you EVALUATE a night light?', options: ['Did it meet the brief and is it safe?', 'Did it cost more than my friend’s one did?', 'Is it the biggest one in the whole class?', 'Did I use the most wires of anyone in class?'], answer: 'Did it meet the brief and is it safe?', explanation: 'Evaluation compares the finished product with the brief and checks safety.' },
  { prompt: 'What does communicate mean in the design process?', options: ['Show and explain your solution', 'Ask a friend to build it for you', 'Write the design brief all over again', 'Write a test report and keep it to yourself'], answer: 'Show and explain your solution', explanation: 'Technologists share their designs using drawings and explanations.' },
  { prompt: 'A buzzer circuit uses one cell but the sound is very quiet. What change is most likely to help?', options: ['Add another cell in series', 'Add a second buzzer in series', 'Use a longer wire only', 'Open the switch'], answer: 'Add another cell in series', explanation: 'More cells in series give more energy. A second buzzer in series would make each quieter.' },
  { kind: 'order', section: 'design-process', prompt: 'Put the five steps of the design process in order (IDMEC).', options: ['Investigate the problem and the need', 'Design a plan and draw it', 'Make the product', 'Evaluate it against the brief', 'Communicate and show your solution'], answer: 'Investigate the problem and the need|Design a plan and draw it|Make the product|Evaluate it against the brief|Communicate and show your solution', explanation: 'IDMEC: Investigate, Design, Make, Evaluate, Communicate.' },
  { kind: 'order', section: 'design-process', prompt: 'Put these actions for making a night light in the order you would do them.', options: ['Read the design brief and list what the night light must do', 'Draw a circuit diagram of your plan', 'Connect the cell, switch and bulb with wires', 'Test it and fix any fault', 'Show the finished night light and explain how it works'], answer: 'Read the design brief and list what the night light must do|Draw a circuit diagram of your plan|Connect the cell, switch and bulb with wires|Test it and fix any fault|Show the finished night light and explain how it works', explanation: 'Investigate the brief, design on paper, make it, evaluate by testing, then communicate.' },
];

const SystemsSolveProblems = () => (
  <NstTopic title="Systems to Solve Problems" subtitle="Design and make a circuit that solves a problem" learnSteps={learnSteps} task="systems-solve-problems" bank={bank} />
);

export default SystemsSolveProblems;
