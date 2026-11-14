import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand forces and structural stability',
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
    options: ['static forces are constant while dynamic forces change over time', 'static forces move parts; dynamic forces hold them still', 'static forces act only on tall structures; dynamic only on bridges', 'static forces come from wind; dynamic forces come from weight'],
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
    options: ['a twisting force applied to a structure', 'a pulling force that stretches a structure', 'a squeezing force that shortens a structure', 'a force that bends a beam sideways'],
    answer: 'a twisting force applied to a structure',
    explanation: 'Torsion occurs when opposing rotational forces twist a structure, like when a drill bit turns.',
  },
  {
    prompt: 'Why are wheelchair ramps important in accessible design?',
    options: ['they let wheelchair users enter buildings on their own', 'they let delivery trolleys move goods faster', 'they replace the need for any handrail', 'they make a short step look higher for walkers'],
    answer: 'they let wheelchair users enter buildings on their own',
    explanation: 'Accessible ramps meet gradient standards and allow independent access for wheelchair users and others with walking difficulties.',
  },
  {
    prompt: 'What is IDMEC in the context of accessible design?',
    options: ["Inclusive Design, Meeting Everyone's Capabilities (principles for universal accessibility)", 'Interior Decoration and Material Engineering Commission (a trade body for builders)', 'Industrial Design Materials Engineering Code (a rulebook for factory machines)', 'Internal Dimensions and Emergency Codes (rules for the sizes of fire exits)'],
    answer: "Inclusive Design, Meeting Everyone's Capabilities (principles for universal accessibility)",
    explanation: 'IDMEC guides designers to create environments and products that are usable by everyone, regardless of ability.',
  },
  {
    prompt: 'What should a design brief include?',
    options: ['aims, limits, and what makes the design a success', 'a finished drawing and the price list only', 'a list of the tools the learner owns', 'the name of the teacher who will mark the work'],
    answer: 'aims, limits, and what makes the design a success',
    explanation: 'A comprehensive brief ensures the design team understands the problem, limitations, and success criteria.',
  },
  {
    prompt: 'Why is building a scale model useful in structural design?',
    options: ['it lets you test ideas and find problems before building the real thing', 'it shows exactly how the real structure will look after painting', 'it proves the design will hold any real-life load', 'it lets you skip drawing the design on paper'],
    answer: 'it lets you test ideas and find problems before building the real thing',
    explanation: 'Scale models help validate assumptions, reveal design flaws, and save time and money before manufacturing.',
  },
  {
    prompt: 'How do material properties affect structural design decisions?',
    options: ['strength, flexibility and cost decide which material suits the job', 'colour and smell decide which material suits the job', 'the heaviest material is always the best choice', 'the cheapest material is always strong enough'],
    answer: 'strength, flexibility and cost decide which material suits the job',
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
