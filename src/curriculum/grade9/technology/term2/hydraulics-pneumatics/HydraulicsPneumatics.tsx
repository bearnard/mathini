import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore hydraulic and pneumatic systems',
    image: {
      src: '/curriculum/grade9/technology/term2/hydraulics-pneumatics/image1.jpg',
      alt: 'learner comparing hydraulic fluid systems and pneumatic air systems with syringes and pistons',
    },
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
    options: ['hydraulic uses fluid; pneumatic uses compressed air', 'both use the same medium', 'hydraulic is for heating only', 'pneumatic systems are stronger'],
    answer: 'hydraulic uses fluid; pneumatic uses compressed air',
    explanation: 'Hydraulic systems use incompressible liquids for greater force, while pneumatic systems use compressible air.',
  },
  {
    prompt: 'What is Pascal\'s principle?',
    options: ['pressure applied to a confined fluid is transmitted uniformly in all directions', 'air always rises', 'water always falls', 'pressure only works downward'],
    answer: 'pressure applied to a confined fluid is transmitted uniformly in all directions',
    explanation: 'Pascal\'s principle is fundamental to how hydraulic and pneumatic systems transmit and multiply force.',
  },
  {
    prompt: 'How do syringes demonstrate hydraulic and pneumatic principles?',
    options: ['pushing one syringe transmits force through connected fluid or air to another syringe', 'syringes are only for medicine', 'syringes cannot transmit force', 'syringe size does not matter'],
    answer: 'pushing one syringe transmits force through connected fluid or air to another syringe',
    explanation: 'Two connected syringes show how pressure is transmitted and force can be multiplied.',
  },
  {
    prompt: 'What is force multiplication in a hydraulic system?',
    options: ['using different piston sizes to increase output force beyond input force', 'making fluid stronger', 'reducing pressure', 'ignoring Pascal\'s principle'],
    answer: 'using different piston sizes to increase output force beyond input force',
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
    options: ['they provide consistent, strong force and can be precisely controlled', 'they are cheaper', 'they are lighter', 'they require no valves'],
    answer: 'they provide consistent, strong force and can be precisely controlled',
    explanation: 'Hydraulic systems excel in applications requiring high force, precision control, and reliability.',
  },
  {
    prompt: 'What is the advantage of pneumatic systems over hydraulic systems?',
    options: ['pneumatic systems are cleaner, safer (no fluid spills), and simpler to maintain', 'pneumatic is always stronger', 'pneumatic needs more power', 'there is no advantage'],
    answer: 'pneumatic systems are cleaner, safer (no fluid spills), and simpler to maintain',
    explanation: 'Air systems are environmentally friendly and have lower maintenance costs than fluid systems.',
  },
  {
    prompt: 'How is pressure measured in hydraulic and pneumatic systems?',
    options: ['in Pascals (Pa) or bars; it represents force per unit area', 'in kilograms only', 'pressure cannot be measured', 'in litres per second'],
    answer: 'in Pascals (Pa) or bars; it represents force per unit area',
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
