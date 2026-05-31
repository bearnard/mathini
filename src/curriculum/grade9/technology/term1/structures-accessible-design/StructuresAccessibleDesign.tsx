import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand forces and structural stability',
    image: {
      src: '/curriculum/grade9/technology/term1/structures-accessible-design/image1.jpg',
      alt: 'learner analyzing forces acting on a structure including static and dynamic forces, bending and torsion',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Structures experience static forces (weight, pressure) and dynamic forces (wind, vibration). Understanding 
          bending, torsion, and compression helps engineers choose materials and shapes that resist these forces.
        </p>
      </div>
    ),
  },
  {
    title: 'Design with accessibility and safety in mind',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Inclusive design considers users with different abilities. Features like wheelchair ramps, handrails, and 
          step dimensions must meet safety standards and accessibility guidelines (IDMEC principles). These design choices 
          improve usability for everyone.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop and test structural designs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A clear design brief outlines objectives, constraints, and acceptance criteria. Building scale models and 
          evaluating them against criteria helps test assumptions before full-scale production.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the difference between static and dynamic forces in structural design?',
    options: ['static forces are constant while dynamic forces change over time', 'static and dynamic are the same thing', 'only dynamic forces matter', 'static forces do not affect structures'],
    answer: 'static forces are constant while dynamic forces change over time',
    explanation: 'Static forces like weight act continuously, while dynamic forces like wind or earthquakes vary and can cause vibration.',
  },
  {
    prompt: 'What is bending in structural analysis?',
    options: ['when a material curves or flexes under load', 'when something breaks immediately', 'when a material is painted', 'when a building is moved'],
    answer: 'when a material curves or flexes under load',
    explanation: 'Bending occurs when perpendicular forces cause materials to curve. Understanding bending helps engineers prevent failure.',
  },
  {
    prompt: 'What is torsion in structural design?',
    options: ['twisting force applied to a structure', 'compressive force only', 'a type of paint', 'an electrical term'],
    answer: 'twisting force applied to a structure',
    explanation: 'Torsion occurs when opposing rotational forces twist a structure, like when a drill bit turns.',
  },
  {
    prompt: 'Why are wheelchair ramps important in accessible design?',
    options: ['they allow people with mobility challenges to access buildings independently', 'they are decorative', 'they add cost', 'they take up too much space'],
    answer: 'they allow people with mobility challenges to access buildings independently',
    explanation: 'Accessible ramps meet gradient standards and allow independent access for wheelchair users and others with walking difficulties.',
  },
  {
    prompt: 'What is IDMEC in the context of accessible design?',
    options: ['Inclusive Design, Meeting Everyone\'s Capabilities (principles for universal accessibility)', 'Interior Decoration and Material Engineering Commission', 'Industrial Design Materials Engineering Code', 'Internal Dimensions and Emergency Codes'],
    answer: 'Inclusive Design, Meeting Everyone\'s Capabilities (principles for universal accessibility)',
    explanation: 'IDMEC guides designers to create environments and products that are usable by everyone, regardless of ability.',
  },
  {
    prompt: 'What should a design brief include?',
    options: ['objectives, constraints, acceptance criteria, and design requirements', 'only the final answer', 'no requirements at all', 'purely aesthetic choices'],
    answer: 'objectives, constraints, acceptance criteria, and design requirements',
    explanation: 'A comprehensive brief ensures the design team understands the problem, limitations, and success criteria.',
  },
  {
    prompt: 'Why is building a scale model useful in structural design?',
    options: ['it allows testing of concepts and identification of issues before full-scale production', 'scale models are exact replicas', 'they are only for decoration', 'they serve no practical purpose'],
    answer: 'it allows testing of concepts and identification of issues before full-scale production',
    explanation: 'Scale models help validate assumptions, reveal design flaws, and save time and money before manufacturing.',
  },
  {
    prompt: 'How do material properties affect structural design decisions?',
    options: ['material strength, flexibility, and cost determine suitability for specific applications', 'all materials perform identically', 'materials do not matter', 'appearance is the only consideration'],
    answer: 'material strength, flexibility, and cost determine suitability for specific applications',
    explanation: 'Choosing the right material involves balancing performance requirements, budget, and availability.',
  },
];

const StructuresAccessibleDesign = () => (
  <CapsSubjectTopic
    title="Structures and Accessible Design"
    subtitle="Static and dynamic forces, bending, torsion, material properties, stairs, ramps, IDMEC principles"
    learnSteps={learnSteps}
    task="gr9-structures-accessible-design-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default StructuresAccessibleDesign;
