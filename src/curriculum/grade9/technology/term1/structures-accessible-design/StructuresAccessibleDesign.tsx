import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { BracedFrame } from '../../../../../components/diagrams/science/SciencePictures';
import { BendingTorsion } from '../../../../../components/diagrams/science/SciencePictures7';
import { IDMEC_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Static and dynamic forces',
    content: slide(
      <>
        <Rule>
          Static forces are constant while dynamic forces change over time. Structures carry both.
        </Rule>
        <Compare
          left={{ title: 'Static forces', tone: 'sky', rows: ['constant: they act continuously', 'example: the weight of the structure', 'example: the pressure of water on a dam wall'] }}
          right={{ title: 'Dynamic forces', tone: 'amber', rows: ['change over time', 'example: wind gusts', 'example: vibration and earthquakes'] }}
        />
        <Worked
          title="Sort the forces on a tall mast"
          steps={[<>The weight of the mast pulls down all the time: a static force.</>, <>Wind gusts change from moment to moment: a dynamic force.</>, <>Dynamic forces such as wind or earthquakes vary and can cause vibration.</>]}
        />
        <Mistake>Thinking dynamic forces only matter for moving structures. A building that stands still still feels wind and vibration.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bending and torsion',
    content: slide(
      <>
        <Rule>
          Bending is when a material curves or flexes under load. Torsion is a twisting force applied to a structure.
        </Rule>
        <BendingTorsion />
        <Worked
          title="Name the effect"
          steps={[<>A diving board with a person standing at the end curves down: bending. Perpendicular forces cause the material to curve.</>, <>A drill bit turning in a hole is twisted by opposing rotational forces: torsion.</>, <>Understanding bending and torsion helps engineers prevent failure.</>]}
        />
        <Mistake>Confusing torsion with tension. Tension pulls along the length; torsion twists around it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Accessible design',
    content: slide(
      <>
        <Rule>
          Accessible design lets everyone use a place. Wheelchair ramps let wheelchair users enter buildings on their own.
        </Rule>
        <Worked
          title="Design a ramp for a school entrance"
          steps={[
            <>The entrance has steps, which a wheelchair cannot climb.</>,
            <>A ramp is built to a standard gradient, so it is gentle enough to use. This gives independent access for wheelchair users and others with walking difficulties.</>,
            <>A longer, gentler ramp needs less effort than a steep one, as with any inclined plane.</>,
          ]}
        />
        <Mistake>Treating a ramp as an extra for a few people. Accessible ramps also help people with prams, trolleys and walking difficulties.</Mistake>
      </>,
    ),
  },
  {
    title: 'The design brief and scale models',
    content: slide(
      <>
        <Rule>
          IDMEC stands for Investigate, Design, Make, Evaluate, Communicate. A design brief should include aims, limits and what makes the design a success. A scale model lets you test ideas and find problems before building the real thing.
        </Rule>
        <NumberedSteps steps={IDMEC_STEPS} tone="blue" label="The IDMEC process" />
        <Terms
          rows={[
            ['Aims', 'what the design must do'],
            ['Limits', 'size, cost, materials and time'],
            ['Success', 'how you will judge that the design works'],
          ]}
        />
        <Worked
          title="A footbridge model"
          steps={[<>Build a small scale model of the footbridge from card.</>, <>Load it to test the ideas. It bends too much at the middle.</>, <>You found the problem on the model, which saves time and money compared to finding it on the real bridge.</>]}
        />
        <Mistake>Writing a brief that only says what to make. It must also give the limits and the success criteria.</Mistake>
      </>,
    ),
  },
  {
    title: 'Materials and stability',
    content: slide(
      <>
        <Rule>
          Strength, flexibility and cost decide which material suits the job. Choosing a material means balancing performance, budget and availability.
        </Rule>
        <BracedFrame />
        <Worked
          title="Choose a material"
          steps={[<>A bridge beam needs strength to carry loads.</>, <>A pole for a flag must be flexible enough to bend in the wind and not snap.</>, <>If two materials do the job, the cheaper one may be the better choice. Triangles in a frame also add rigidity.</>]}
        />
        <Mistake>Choosing the strongest material every time. It may cost too much or be too heavy, so balance strength, flexibility and cost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the difference between static and dynamic forces? What is bending?</li>
            <li>Which force twists a structure, such as a door twisting on its hinges? Why do accessible buildings need wheelchair ramps?</li>
            <li>What do the letters IDMEC stand for? What belongs in a design brief?</li>
            <li>What can you learn from building a scale model? Why do the properties of a material matter when designing a structure?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Static forces are constant while dynamic forces change over time. When a material curves or flexes under load.</li>
            <li>Torsion. They let wheelchair users enter buildings on their own.</li>
            <li>Investigate, Design, Make, Evaluate, Communicate. Aims, limits and what makes the design a success.</li>
            <li>It lets you test ideas and find problems before building the real thing. Strength, flexibility and cost decide which material suits the job.</li>
          </ol>
        }
      />,
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
    prompt: 'What does IDMEC stand for in the CAPS Technology design process?',
    options: ['Investigate, Design, Make, Evaluate, Communicate', 'Identify, Draw, Measure, Estimate, Correct', 'Imagine, Develop, Manufacture, Examine, Complete', 'Investigate, Develop, Market, Evaluate, Conclude'],
    answer: 'Investigate, Design, Make, Evaluate, Communicate',
    explanation: 'IDMEC is the design process used in Technology: Investigate the need, Design a solution, Make it, Evaluate it against the brief, and Communicate the result. Applying it to accessible design helps learners create products and spaces that everyone can use.',
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
    subtitle="Static and dynamic forces, bending, torsion, material properties, stairs, ramps, the IDMEC design process"
    learnSteps={learnSteps}
    task="gr9-structures-accessible-design-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default StructuresAccessibleDesign;
