import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ElevationPicture, IsoscelesHeight, TwoElevations } from '../../../../../components/diagrams/maths/Grade10Maths';
import { cosD, dec, tanD } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts and grade10Helpers3.ts (their tests, g10MathsBankT3.test.ts).
const d1 = (n: number) => dec(n, 1);
const DEG = 180 / Math.PI;
const asinD = (x: number) => Math.asin(x) * DEG;
const acosD = (x: number) => Math.acos(x) * DEG;
const atanD = (x: number) => Math.atan(x) * DEG;

// slide 1: angle of elevation
const tower = 20 * tanD(35);
const ladder = 5 * cosD(70);
// slide 2: angle of depression
const boat = 30 / tanD(25);
const car = 12 / tanD(28);
// slide 3: two angles of elevation
const two = t.towerHeight(45, 30, 20);
// slide 4: finding an angle and isosceles triangles
const ramp = asinD(2 / 10);
const shadow = atanD(6 / 4);
const rectAngle = acosD(8 / 10);
const triAngle = atanD(8 / 6);
const isoH = t.isoscelesHeight(10, 40);
const isoApex = 180 - 2 * 65;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Angles of elevation',
    content: slide(
      <>
        <Rule>The angle of elevation is measured upwards from the horizontal to the line of sight. Draw a right-angled triangle, label the sides (opposite, adjacent, hypotenuse) and choose sin, cos or tan.</Rule>
        <ElevationPicture deg={35} mode="elevation" labels={{ horizontal: '20 m', vertical: 'h' }} />
        <Worked
          title="A tower and a ladder"
          steps={[
            <>You stand 20 m from the tower and the angle of elevation of its top is 35°. The tower is opposite, 20 m is adjacent: tan 35° = h ÷ 20.</>,
            <>h = 20 × tan 35° = <strong>{d1(tower)} m</strong>.</>,
            <>A 5 m ladder makes 70° with the ground. The foot is adjacent: cos 70° = x ÷ 5, so x = 5 × cos 70° = <strong>{d1(ladder)} m</strong>.</>,
            <>Set your calculator to degrees.</>,
          ]}
        />
        <Mistake>Measuring the angle from the vertical, or having the calculator in radians. The angle of elevation is from the horizontal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Angles of depression',
    content: slide(
      <>
        <Rule>The angle of depression is measured downwards from the horizontal. Because the horizontal lines are parallel, the angle of depression from A to B equals the angle of elevation from B to A.</Rule>
        <ElevationPicture deg={25} mode="depression" labels={{ horizontal: 'x', vertical: '30 m' }} />
        <Worked
          title="Cliff and building"
          steps={[
            <>From the top of a 30 m cliff the angle of depression of a boat is 25°. The angle inside the triangle at the boat is also 25° (alternate angles).</>,
            <>tan 25° = 30 ÷ x, so x = 30 ÷ tan 25° = <strong>{d1(boat)} m</strong>.</>,
            <>From the top of a 12 m building the angle of depression of a car is 28°: x = 12 ÷ tan 28° = <strong>{d1(car)} m</strong>.</>,
            <>The angle of elevation of B from A equals the angle of depression of A from B.</>,
          ]}
        />
        <Mistake>Using the angle of depression as an angle in the triangle at the top. The angle inside the triangle is at the bottom, and it equals the angle of depression.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two angles of elevation',
    content: slide(
      <>
        <Rule>When the top of a tower is seen from two points on the same line, make two right-angled triangles that share the height h. Write h in terms of x, form an equation and solve.</Rule>
        <TwoElevations near={45} far={30} gap={20} />
        <Worked
          title="From A the angle of elevation is 30°; from B, 20 m closer, it is 45°"
          steps={[
            <>From B: tan 45° = h ÷ x, so h = x (tan 45° = 1).</>,
            <>From A: tan 30° = h ÷ (x + 20), so h = (x + 20) × tan 30°.</>,
            <>x = (x + 20) × 0,577 gives x = 20 × tan 30° ÷ (tan 45° − tan 30°) = {d1(two.x)}.</>,
            <>The tower is <strong>{d1(two.h)} m</strong> high.</>,
          ]}
        />
        <Mistake>Using the distance from the first point only. The two triangles share h but have different bases: x and x + 20.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding angles and isosceles triangles',
    content: slide(
      <>
        <Rule>To find an angle use the inverse function: sin⁻¹, cos⁻¹ or tan⁻¹. In an isosceles triangle the base angles are equal, and the height from the apex bisects the base and the apex angle.</Rule>
        <IsoscelesHeight side={10} apex={40} />
        <Worked
          title="Angles and heights"
          steps={[
            <>A 10 m ramp rises 2 m: sin θ = 2 ÷ 10, θ = <strong>{d1(ramp)}°</strong>. A 6 m pole with a 4 m shadow: tan θ = 6 ÷ 4, θ = <strong>{d1(shadow)}°</strong>.</>,
            <>Rectangle with AB = 8 cm and AC = 10 cm: cos CAB = 8 ÷ 10, angle CAB = <strong>{d1(rectAngle)}°</strong>.</>,
            <>Isosceles triangle with equal sides 10 cm and apex angle 40°: height = 10 × cos 20° = <strong>{d1(isoH)} cm</strong>. If AB = AC and angle B = 65°, then A = 180° − 2 × 65° = <strong>{isoApex}°</strong>.</>,
            <>Right angle at B with AB = 6 and BC = 8: tan A = 8 ÷ 6, angle BAC = {d1(triAngle)}°.</>,
          ]}
        />
        <Mistake>Swapping the sides in the ratio, for example using adjacent ÷ opposite for tan. Label the sides from the angle you are working with.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>You stand 20 m from a tower and the angle of elevation of its top is 35°. How high is the tower (one decimal place)?</>,
            <>From the top of a 30 m cliff the angle of depression of a boat is 25°. How far is the boat from the foot of the cliff?</>,
            <>A 10 m ramp rises 2 m. What angle does it make with the ground?</>,
            <>In triangle ABC, AB = AC and angle B = 65°. How big is angle A?</>,
          ]}
          answers={[
            <>20 × tan 35° = <strong>{d1(tower)} m</strong>.</>,
            <>30 ÷ tan 25° = <strong>{d1(boat)} m</strong>.</>,
            <>sin⁻¹(2 ÷ 10) = <strong>{d1(ramp)}°</strong>.</>,
            <>180° − 2 × 65° = <strong>{isoApex}°</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "You stand 20 m from the foot of a tower and the angle of elevation of the top is 35°. How high is the tower (one decimal place)?",
    options: ["16,4 m", "14,0 m", "11,5 m", "28,6 m"],
    answer: "14,0 m",
    explanation: "Height is opposite the angle and 20 m is adjacent, so use tan: height = 20 tan 35° = 14,0 m.",
  },
  {
    prompt: "From the top of a 30 m cliff the angle of depression of a boat is 25°. How far is the boat from the foot of the cliff (one decimal place)?",
    options: ["64,3 m", "14,0 m", "12,7 m", "71,0 m"],
    answer: "64,3 m",
    explanation: "The angle of depression equals the angle of elevation of the top from the boat (alternate angles). tan 25° = 30 ÷ d, so d = 30 ÷ tan 25° = 64,3 m.",
  },
  {
    prompt: "A 5 m ladder makes an angle of 70° with the ground. How far is its foot from the wall (one decimal place)?",
    options: ["4,7 m", "13,7 m", "14,6 m", "1,7 m"],
    answer: "1,7 m",
    explanation: "The distance along the ground is adjacent to the 70° angle and the ladder is the hypotenuse: 5 cos 70° = 1,7 m.",
  },
  {
    prompt: "A 10 m ramp rises 2 m. What angle does it make with the ground (one decimal place)?",
    options: ["78,5°", "11,3°", "11,5°", "5,7°"],
    answer: "11,5°",
    explanation: "The rise is opposite the angle and the ramp is the hypotenuse: sin θ = 2/10 = 0,2, so θ = sin⁻¹(0,2) = 11,5°.",
  },
  {
    prompt: "From A the angle of elevation of the top of a tower is 30°. From B, 20 m closer to the tower, it is 45°. How high is the tower (one decimal place)?",
    options: ["11,5 m", "27,3 m", "20,0 m", "34,6 m"],
    answer: "27,3 m",
    explanation: "Let the distance from B to the tower be x. Then h = x tan 45° = x and h = (x + 20) tan 30°. So x = (x + 20)(0,577…), x = 27,3 and h = 27,3 m.",
  },
  {
    prompt: "ABCD is a rectangle with AB = 8 cm and diagonal AC = 10 cm. What is angle CAB (one decimal place)?",
    options: ["36,9°", "53,1°", "51,3°", "38,7°"],
    answer: "36,9°",
    explanation: "In right-angled triangle ABC the adjacent side AB = 8 and the hypotenuse AC = 10: cos A = 8/10, so A = cos⁻¹(0,8) = 36,9°.",
  },
  {
    prompt: "An isosceles triangle has two sides of 10 cm and an angle of 40° between them. How long is the perpendicular height from that apex to the base (one decimal place)?",
    options: ["3,4 cm", "7,7 cm", "6,4 cm", "9,4 cm"],
    answer: "9,4 cm",
    explanation: "The height bisects the 40° angle, giving a right-angled triangle with a 20° angle at the apex. The height is adjacent to 20°: 10 cos 20° = 9,4 cm.",
  },
  {
    prompt: "A 6 m pole casts a shadow 4 m long. What is the angle of elevation of the sun (one decimal place)?",
    options: ["33,7°", "41,8°", "56,3°", "48,2°"],
    answer: "56,3°",
    explanation: "Opposite = 6 (the pole) and adjacent = 4 (the shadow): tan θ = 6/4, so θ = tan⁻¹(1,5) = 56,3°.",
  },
  {
    prompt: "In triangle ABC, AB = AC and angle B = 65°. How big is angle A?",
    options: ["65°", "50°", "115°", "25°"],
    answer: "50°",
    explanation: "The base angles of an isosceles triangle are equal: C = 65°. Angle A = 180° − 65° − 65° = 50°.",
  },
  {
    prompt: "Triangle ABC has a right angle at B, with AB = 6 and BC = 8. What is angle BAC (one decimal place)?",
    options: ["53,1°", "36,9°", "41,4°", "48,6°"],
    answer: "53,1°",
    explanation: "BC is opposite angle A and AB is adjacent: tan A = 8/6, so A = tan⁻¹(1,333…) = 53,1°.",
  },
  {
    prompt: "From the top of a 12 m building the angle of depression of a car is 28°. How far is the car from the foot of the building (one decimal place)?",
    options: ["6,4 m", "5,6 m", "25,6 m", "22,6 m"],
    answer: "22,6 m",
    explanation: "tan 28° = 12 ÷ d, so d = 12 ÷ tan 28° = 22,6 m.",
  },
  {
    prompt: "Which statement about the angles of elevation and depression between two points A (low) and B (high) is true?",
    options: ["The angle of elevation is always larger than the angle of depression", "The two angles add up to 90° because they are complementary", "The angle of elevation of B from A equals the angle of depression of A from B", "The two angles add up to 180° because they lie on a line"],
    answer: "The angle of elevation of B from A equals the angle of depression of A from B",
    explanation: "The horizontal lines through A and B are parallel, so the two angles are alternate angles and are equal.",
  },
];
// BANK:END

const TrigGeometry = () => (
  <CapsSubjectTopic
    title="Trigonometry in Two Dimensions and Geometry Riders"
    subtitle="Angles of elevation and depression, finding angles and multi-step problems"
    learnSteps={learnSteps}
    task="gr10-trig-geometry-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TrigGeometry;
