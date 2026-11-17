import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BikeLever, CleatPicture, DiscBrake, RatchetPawl } from '../../../../../components/diagrams/g9tech/G9Tech';
import { cableForce, clickAngle, clicksPerTurn, leverMA, outputForce, pressure } from '../../../../../components/diagrams/g9tech/controlHelpers';

// Every number below comes from controlHelpers.ts (tested in controlHelpers.test.ts and g9TechControl.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const RATCHET = { teeth: 12, spannerTeeth: 24 };
export const BRAKE = { force: 100, masterArea: 2, slaveArea: 6 };
export const LEVER = { hand: 20, effortDist: 8, loadDist: 2 };
const slaveForce = outputForce(BRAKE.force, BRAKE.masterArea, BRAKE.slaveArea);
const cable = cableForce(LEVER.hand, LEVER.effortDist, LEVER.loadDist);

export const learnSteps: LearnStep[] = [
  {
    title: 'Ratchet and pawl',
    content: slide(
      <>
        <Rule>A ratchet and pawl lets a wheel turn in one direction only. The saw-shaped teeth let the pawl slide over them one way, and the pawl locks against a tooth if the wheel tries to turn back.</Rule>
        <RatchetPawl teeth={RATCHET.teeth} />
        <Worked
          title="How far does one click turn the wheel?"
          steps={[
            `The wheel has ${RATCHET.teeth} teeth, so one full turn gives ${clicksPerTurn(RATCHET.teeth)} clicks.`,
            `One click turns the wheel 360° ÷ ${RATCHET.teeth} = ${clickAngle(RATCHET.teeth)}°.`,
            `A ratchet spanner with ${RATCHET.spannerTeeth} teeth turns 360° ÷ ${RATCHET.spannerTeeth} = ${clickAngle(RATCHET.spannerTeeth)}° per click, so it works in a tight space.`,
            'Other uses: winches, ratchet straps and car handbrakes.',
          ]}
        />
        <Mistake>Thinking that the pawl turns the wheel. The pawl only stops the wheel from going backwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Disc brake',
    content: slide(
      <>
        <Rule>A disc brake squeezes brake pads on both sides of a disc that turns with the wheel. Friction slows the wheel and changes its movement energy into heat.</Rule>
        <DiscBrake master={BRAKE.force} masterArea={BRAKE.masterArea} slaveArea={BRAKE.slaveArea} slave={slaveForce} />
        <Worked
          title={`${BRAKE.force} N is pushed on a piston of ${BRAKE.masterArea} cm²`}
          steps={[
            `Pressure = force ÷ area = ${BRAKE.force} ÷ ${BRAKE.masterArea} = ${pressure(BRAKE.force, BRAKE.masterArea)} N/cm².`,
            'Brake fluid is a liquid, so it cannot be squashed. By Pascal\'s principle it carries the same pressure to the larger pistons.',
            `Force on a pad: ${pressure(BRAKE.force, BRAKE.masterArea)} × ${BRAKE.slaveArea} = ${slaveForce} N.`,
          ]}
        />
        <Mistake>Thinking that the brake takes the energy away. The energy of movement is changed into heat, which is why brakes get hot.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bicycle brake',
    content: slide(
      <>
        <Rule>On a bicycle you squeeze a brake lever. The lever pulls a cable, and the cable pulls the brake pads against the wheel rim. Friction slows the wheel.</Rule>
        <BikeLever effort={LEVER.hand} effortDist={LEVER.effortDist} loadDist={LEVER.loadDist} load={cable} />
        <Worked
          title="How much does the lever multiply your force?"
          steps={[
            `Your fingers pull ${LEVER.effortDist} cm from the pivot. The cable is ${LEVER.loadDist} cm from the pivot.`,
            `Mechanical advantage = ${LEVER.effortDist} ÷ ${LEVER.loadDist} = ${leverMA(LEVER.effortDist, LEVER.loadDist)}.`,
            `A hand force of ${LEVER.hand} N gives ${LEVER.hand} × ${leverMA(LEVER.effortDist, LEVER.loadDist)} = ${cable} N on the cable.`,
          ]}
        />
        <Mistake>Mixing it up with a disc brake. A cable rim brake uses a lever and a cable, while a hydraulic disc brake uses brake fluid.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cleat',
    content: slide(
      <>
        <Rule>A cleat holds a rope that is under tension. The rope is wrapped round the cleat and locked with a hitch, and it can be released again quickly.</Rule>
        <CleatPicture />
        <Worked
          title="Fasten a rope to a cleat"
          steps={[
            'Take the rope once round the base of the cleat.',
            'Cross it over the top in a figure of eight round the two horns.',
            'Finish with a locking hitch, where the end turns under itself so that the rope holds.',
            'To release, undo the hitch. Cleats are used on boats and on flagpoles.',
          ]}
        />
        <Mistake>Tying a permanent knot. A cleat hitch is meant to hold firmly and still be easy to undo.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a ratchet and pawl allow, and what does it stop?</>,
          <>A ratchet wheel has 18 teeth. How many degrees is one click?</>,
          <>A force of {150} N pushes a piston of {3} cm² in a brake. The pads' pistons have {9} cm². What force is on each pad?</>,
          <>A brake lever has the cable {2} cm and the fingers {6} cm from the pivot. What is the mechanical advantage?</>,
        ]}
        answers={[
          <>It allows turning one way and stops it turning back.</>,
          <>360 ÷ 18 = {clickAngle(18)}°.</>,
          <>Pressure = {150} ÷ {3} = {pressure(150, 3)} N/cm², so force = {pressure(150, 3)} × {9} = {outputForce(150, 3, 9)} N.</>,
          <>{6} ÷ {2} = {leverMA(6, 2)}.</>,
        ]}
      />,
    ),
  },
];
