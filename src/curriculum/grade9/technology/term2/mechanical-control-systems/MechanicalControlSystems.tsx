import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What does a ratchet and pawl system allow a wheel to do?",
    options: ["Turn freely in both directions", "Turn only when it is wet", "Turn faster than the driver", "Turn freely in one direction only"],
    answer: "Turn freely in one direction only",
    explanation: "The pawl lets the wheel turn one way and locks against the teeth if it tries to turn back.",
  },
  {
    prompt: "Which part of a ratchet system stops the wheel from turning backwards?",
    options: ["The axle", "The pawl", "The spoke", "The belt"],
    answer: "The pawl",
    explanation: "The pawl drops against a tooth and locks the wheel in the one direction.",
  },
  {
    prompt: "A ratchet wheel has 12 teeth. Through how many degrees does it turn at each click?",
    options: ["30°", "12°", "60°", "15°"],
    answer: "30°",
    explanation: "360° ÷ 12 = 30° per click.",
  },
  {
    prompt: "A ratchet spanner has 24 teeth. How many degrees is the smallest turn it can make?",
    options: ["24°", "30°", "15°", "10°"],
    answer: "15°",
    explanation: "360° ÷ 24 = 15°, so it can work with a small swing in a tight space.",
  },
  {
    prompt: "Which everyday tool uses a ratchet and pawl?",
    options: ["A ratchet spanner", "A kitchen scale", "A hand saw", "A water tap"],
    answer: "A ratchet spanner",
    explanation: "A ratchet spanner turns a nut in one direction and clicks freely in the other.",
  },
  {
    prompt: "What presses against the disc in a disc brake?",
    options: ["Gear teeth", "Ball bearings", "Brake pads", "Rubber bands"],
    answer: "Brake pads",
    explanation: "A caliper squeezes the brake pads on both sides of the disc.",
  },
  {
    prompt: "What force slows a wheel when a disc brake is used?",
    options: ["Gravity", "Friction", "Magnetism", "Buoyancy"],
    answer: "Friction",
    explanation: "Friction between the pads and the disc slows the wheel and changes movement energy into heat.",
  },
  {
    prompt: "Why do hydraulic brakes use a liquid instead of air in the pipes?",
    options: ["A liquid is lighter than air, so the pipes are easier to lift", "Air is too expensive to use inside the pipes", "A liquid makes the disc spin faster", "A liquid cannot be compressed, so the pressure passes on at once"],
    answer: "A liquid cannot be compressed, so the pressure passes on at once",
    explanation: "Liquids are incompressible, so by Pascal's principle the pressure is passed on without loss.",
  },
  {
    prompt: "A force of 100 N pushes a piston of 2 cm² in a brake. The pistons at the pads are 6 cm². What force is on each pad?",
    options: ["50 N", "600 N", "300 N", "200 N"],
    answer: "300 N",
    explanation: "Pressure = 100 ÷ 2 = 50 N/cm². Force = 50 × 6 = 300 N.",
  },
  {
    prompt: "How does the brake lever on a bicycle make the brake pads press on the rim?",
    options: ["It pulls a cable that pulls the pads against the rim", "It pumps air into the tyre to slow it down", "It turns a gear that locks the pedals", "It pushes a spring that lifts the wheel"],
    answer: "It pulls a cable that pulls the pads against the rim",
    explanation: "Squeezing the lever pulls the cable, which closes the brake arms with the pads on the rim.",
  },
  {
    prompt: "A brake lever has the cable 2 cm from the pivot and the fingers 8 cm from the pivot. What is its mechanical advantage?",
    options: ["16", "6", "0,25", "4"],
    answer: "4",
    explanation: "Mechanical advantage = 8 ÷ 2 = 4.",
  },
  {
    prompt: "The mechanical advantage of a brake lever is 4. A hand force of 20 N gives what force on the cable?",
    options: ["5 N", "80 N", "24 N", "16 N"],
    answer: "80 N",
    explanation: "Force on the cable = 20 × 4 = 80 N.",
  },
  {
    prompt: "What is a cleat used for?",
    options: ["Cutting a rope into equal parts", "Holding a rope that is under tension", "Making a rope longer", "Lifting a heavy load in a straight line"],
    answer: "Holding a rope that is under tension",
    explanation: "A cleat holds a rope firmly by wrapping and a locking hitch, and the rope can be released quickly.",
  },
  {
    prompt: "Where would you usually find a cleat?",
    options: ["On a sailing boat or a flagpole", "Inside the engine of a motor car", "On the handle of a kitchen tap", "Inside an electric wall plug"],
    answer: "On a sailing boat or a flagpole",
    explanation: "Cleats hold ropes on boats and flagpoles.",
  },
];

const MechanicalControlSystems = () => (
  <CapsSubjectTopic
    title="Mechanical Control Systems"
    subtitle="Ratchet and pawl, disc brake, bicycle brake and cleat"
    learnSteps={learnSteps}
    task="gr9-mechanical-control-systems-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default MechanicalControlSystems;
