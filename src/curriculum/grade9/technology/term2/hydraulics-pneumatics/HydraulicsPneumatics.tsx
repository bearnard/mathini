import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore hydraulic and pneumatic systems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Hydraulic systems use incompressible fluids (like oil) to transmit force, while pneumatic systems use 
          compressed air. Both can multiply force and transfer power over distances using tubes and valves.
        </p>
      </div>
    ),
  },
  {
    title: 'Understand Pascal\'s principle and pressure transfer',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Pascal's principle states that pressure applied to a confined fluid is transmitted uniformly in all directions. 
          This allows simple devices like syringes to multiply force and perform work in hydraulic and pneumatic systems.
        </p>
      </div>
    ),
  },
  {
    title: 'Calculate mechanical advantage',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Using different piston sizes, you can calculate how much force is multiplied in hydraulic systems. 
          Understanding force multiplication helps predict system behaviour and design efficient machines.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the key difference between hydraulic and pneumatic systems?',
    options: ['hydraulic systems use liquid; pneumatic systems use compressed air', 'hydraulic systems use compressed air; pneumatic systems use liquid', 'hydraulic systems use steam; pneumatic systems use oil', 'hydraulic systems use springs; pneumatic systems use fluid'],
    answer: 'hydraulic systems use liquid; pneumatic systems use compressed air',
    explanation: 'Hydraulic systems use incompressible liquids for greater force, while pneumatic systems use compressible air.',
  },
  {
    prompt: 'What is Pascal\'s principle?',
    options: ['pressure on a trapped fluid is passed on equally in all directions', 'pressure on a trapped fluid is felt only below the piston', 'pressure on a gas rises as its container is made larger', 'pressure on a fluid falls as the force on it increases'],
    answer: 'pressure on a trapped fluid is passed on equally in all directions',
    explanation: 'Pascal\'s principle is fundamental to how hydraulic and pneumatic systems transmit and multiply force.',
  },
  {
    prompt: 'How do syringes demonstrate hydraulic and pneumatic principles?',
    options: ['pushing one syringe moves the fluid or air and so pushes the other', 'pulling one syringe makes the other stay still for ever', 'squeezing one syringe makes the other one turn round', 'one syringe pushes the other only if they touch'],
    answer: 'pushing one syringe moves the fluid or air and so pushes the other',
    explanation: 'Two connected syringes show how pressure is transmitted and force can be multiplied.',
  },
  {
    prompt: 'What is force multiplication in a hydraulic system?',
    options: ['different piston sizes make the output force bigger than the input', 'equal piston sizes make the output bigger than the input', 'a thicker fluid makes the output bigger than the input', 'a longer tube makes the output bigger than the input'],
    answer: 'different piston sizes make the output force bigger than the input',
    explanation: 'A small piston applies pressure to a large piston, multiplying the force applied.',
  },
  {
    prompt: 'In a hydraulic system, if pressure is constant and the output piston is twice the area of the input piston, what happens to force?',
    options: ['output force is doubled', 'output force is halved', 'force stays the same', 'force is random'],
    answer: 'output force is doubled',
    explanation: 'Force = Pressure × Area, so doubling the area doubles the output force when pressure is constant.',
  },
  {
    prompt: 'Why are hydraulic systems preferred in heavy machinery?',
    options: ['they give strong force and can be controlled very exactly', 'they move at the highest speeds of any system', 'they work with air that is free to use', 'they are the lightest system to fit to a machine'],
    answer: 'they give strong force and can be controlled very exactly',
    explanation: 'Hydraulic systems excel in applications requiring high force, precision control, and reliability.',
  },
  {
    prompt: 'What is the advantage of pneumatic systems over hydraulic systems?',
    options: ['pneumatic systems are cleaner, with no fluid leaks to clean up', 'pneumatic systems always lift much heavier loads', 'pneumatic systems give a more exact control of force', 'pneumatic systems never need any air pipes at all'],
    answer: 'pneumatic systems are cleaner, with no fluid leaks to clean up',
    explanation: 'Air systems are environmentally friendly and have lower maintenance costs than fluid systems.',
  },
  {
    prompt: 'How is pressure measured in hydraulic and pneumatic systems?',
    options: ['in pascals (Pa) or bars; it is force per unit area', 'in newtons only; it is the force with no area', 'in litres (L); it is the volume of the fluid', 'in metres per second; it is the speed of flow'],
    answer: 'in pascals (Pa) or bars; it is force per unit area',
    explanation: 'Pressure = Force ÷ Area, measured in standard units across both system types.',
  },
];

const HydraulicsPneumatics = () => (
  <CapsSubjectTopic
    title="Hydraulics, Pneumatics and Pascal\'s Principle"
    subtitle="Fluid pressure, syringes, pneumatic systems, hydraulic systems, force multiplication, Pascal\'s principle"
    learnSteps={learnSteps}
    task="gr9-hydraulics-pneumatics-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default HydraulicsPneumatics;
