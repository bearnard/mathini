import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CriticalRays, RayAtBoundary } from '../../../../../components/diagrams/optics11/Optics11';
import { C, criticalAngle, isTotallyReflected, nOf, refractAngle, sci, speedIn, wavelengthIn } from '../../../../../components/diagrams/optics11/optics11Helpers';

// Every number below comes from optics11Helpers.ts (tested in optics11Helpers.test.ts and g11PsOptics.test.ts).
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const nAir = nOf('air'), nWater = nOf('water'), nGlass = nOf('glass'), nDiamond = nOf('diamond');
const t1 = refractAngle(nAir, nGlass, 40)!;
const t2 = refractAngle(nWater, nAir, 20)!;
const tcGlass = criticalAngle(nGlass, nAir);
const tcWater = criticalAngle(nWater, nAir);
const tcDiamond = criticalAngle(nDiamond, nAir);
const core = 1.5, clad = 1.45;
const tcFibre = criticalAngle(core, clad);

export const learnSteps: LearnStep[] = [
  {
    title: 'Refraction and the refractive index',
    content: slide(
      <>
        <Rule>Refraction is the change in direction of light when it passes from one medium into another, because its speed changes. The refractive index of a medium is n = c/v, where c = 3,00 × 10⁸ m·s⁻¹ is the speed of light in a vacuum. The frequency does not change, so the wavelength changes.</Rule>
        <RayAtBoundary n1={nAir} n2={nGlass} theta1={40} name1="air" name2="glass" />
        <Worked
          title="Light enters glass with n = 1,50"
          steps={[
            `Speed in glass: v = c/n = ${sci(C)} / ${dc(nGlass, 2)} = ${sci(speedIn(nGlass))} m·s⁻¹.`,
            `The frequency stays the same, so a wavelength of 600 nm in air becomes 600 / ${dc(nGlass, 2)} = ${dc(wavelengthIn(600, nGlass), 0)} nm in glass.`,
            'The medium with the bigger refractive index is optically denser: light travels slower in it.',
          ]}
        />
        <Mistake>Saying that the frequency of light changes in glass. The speed and the wavelength change, but the frequency stays constant.</Mistake>
      </>,
    ),
  },
  {
    title: "Snell's law",
    content: slide(
      <>
        <Rule>Snell&apos;s law: n₁ sin θ₁ = n₂ sin θ₂. The angles are measured from the normal, the line at 90° to the boundary. Light bends towards the normal when it enters a medium with a larger refractive index, and away from the normal when it enters one with a smaller index.</Rule>
        <RayAtBoundary n1={nWater} n2={nAir} theta1={20} name1="water" name2="air" />
        <Worked
          title="A ray goes from water (n = 1,33) into air (n = 1,00) at 20° to the normal"
          steps={[
            `n₁ sin θ₁ = n₂ sin θ₂, so ${dc(nWater, 2)} × sin 20° = ${dc(nAir, 2)} × sin θ₂.`,
            `sin θ₂ = ${dc(nWater, 2)} × sin 20° / ${dc(nAir, 2)} = ${dc((nWater * Math.sin((20 * Math.PI) / 180)) / nAir, 3)}.`,
            `θ₂ = ${dc(t2)}°, which is bigger than 20°, so the ray bends away from the normal.`,
            `Air to glass at 40°: sin θ₂ = sin 40° / ${dc(nGlass, 2)}, so θ₂ = ${dc(t1)}° and the ray bends towards the normal.`,
          ]}
        />
        <Mistake>Measuring the angles from the surface. Snell&apos;s law uses the angle between the ray and the normal.</Mistake>
      </>,
    ),
  },
  {
    title: 'The critical angle',
    content: slide(
      <>
        <Rule>When light goes from a medium with a bigger refractive index into one with a smaller index, the refracted ray bends away from the normal. The critical angle θc is the angle of incidence for which the angle of refraction is 90°. sin θc = n₂ / n₁.</Rule>
        <CriticalRays n1={nGlass} n2={nAir} name1="glass" name2="air" />
        <Worked
          title="Critical angles for light going into air (n = 1,00)"
          steps={[
            `Glass: sin θc = ${dc(nAir, 2)} / ${dc(nGlass, 2)}, so θc = ${dc(tcGlass)}°.`,
            `Water: sin θc = ${dc(nAir, 2)} / ${dc(nWater, 2)}, so θc = ${dc(tcWater)}°.`,
            `Diamond (n = 2,42): sin θc = ${dc(nAir, 2)} / ${dc(nDiamond, 2)}, so θc = ${dc(tcDiamond)}°.`,
            'The denser the medium, the smaller the critical angle.',
          ]}
        />
        <Mistake>Looking for a critical angle when light enters a denser medium. A critical angle only exists when the light goes into a medium with a smaller refractive index.</Mistake>
      </>,
    ),
  },
  {
    title: 'Total internal reflection and optical fibres',
    content: slide(
      <>
        <Rule>Total internal reflection happens when light travels in the medium with the larger refractive index and the angle of incidence is greater than the critical angle. All of the light is then reflected back. Optical fibres use this to carry light signals, and endoscopes use bundles of fibres to look inside the body.</Rule>
        <RayAtBoundary n1={nGlass} n2={nAir} theta1={50} name1="glass" name2="air" />
        <Worked
          title="A fibre with a core of n = 1,50 and a cladding of n = 1,45"
          steps={[
            `Critical angle: sin θc = ${dc(clad, 2)} / ${dc(core, 2)}, so θc = ${dc(tcFibre)}°.`,
            `A ray that hits the wall of the core at 80° is bigger than ${dc(tcFibre)}°, so it is totally internally reflected (${isTotallyReflected(core, clad, 80) ? 'yes' : 'no'}).`,
            `A ray at 70° is smaller than ${dc(tcFibre)}°, so some light escapes (${isTotallyReflected(core, clad, 70) ? 'reflected' : 'it leaks out'}).`,
            'In glass at 50° (above 41,8°) there is no refracted ray at all, as the picture shows.',
          ]}
        />
        <Mistake>Saying that total internal reflection can happen from air into glass. It needs the light to start in the denser medium.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Light enters diamond (n = 2,42). What is its speed in diamond? Use c = 3,00 × 10⁸ m·s⁻¹.</>,
          <>Light goes from air into glass (n = 1,50) at 40°. Is the angle of refraction bigger or smaller than 40°?</>,
          <>What is the critical angle for light going from water (n = 1,33) into air?</>,
          <>Name two conditions for total internal reflection.</>,
        ]}
        answers={[
          <>v = c/n = {sci(C)} / 2,42 = {sci(speedIn(nDiamond))} m·s⁻¹.</>,
          <>Smaller ({dc(t1)}°): it bends towards the normal.</>,
          <>sin θc = 1,00 / 1,33, so θc = {dc(tcWater)}°.</>,
          <>The light travels from a medium with a bigger n to one with a smaller n, and the angle of incidence is bigger than the critical angle.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the refractive index of a medium tell you?",
    options: ["How much brighter the light looks inside the medium", "How much of the light the medium absorbs as heat", "How much slower light travels in it than in a vacuum", "How long the medium takes to warm up in sunlight"],
    answer: "How much slower light travels in it than in a vacuum",
    explanation: "n = c/v: the bigger the refractive index, the slower the light travels.",
  },
  {
    prompt: "The speed of light in glass is 2,00 × 10⁸ m·s⁻¹. Use c = 3,00 × 10⁸ m·s⁻¹. What is the refractive index of the glass?",
    options: ["1,50", "0,67", "5,00", "1,00"],
    answer: "1,50",
    explanation: "n = c/v = 3,00 × 10⁸ / 2,00 × 10⁸ = 1,50.",
  },
  {
    prompt: "Light enters water with n = 1,33. Use c = 3,00 × 10⁸ m·s⁻¹. What is its speed in the water?",
    options: ["3,99 × 10⁸ m·s⁻¹", "3,00 × 10⁸ m·s⁻¹", "1,70 × 10⁸ m·s⁻¹", "2,26 × 10⁸ m·s⁻¹"],
    answer: "2,26 × 10⁸ m·s⁻¹",
    explanation: "v = c/n = 3,00 × 10⁸ / 1,33 = 2,26 × 10⁸ m·s⁻¹.",
  },
  {
    prompt: "When red light passes from air into glass, which of its properties stays the same?",
    options: ["Its speed", "Its frequency", "Its wavelength", "Its direction"],
    answer: "Its frequency",
    explanation: "The frequency of a wave is set by its source and does not change when it enters another medium.",
  },
  {
    prompt: "Light of wavelength 600 nm in air enters glass with n = 1,50. What is its wavelength in the glass?",
    options: ["900 nm", "400 nm", "600 nm", "250 nm"],
    answer: "400 nm",
    explanation: "The frequency stays constant and v = fλ, so λ = 600 / 1,50 = 400 nm.",
  },
  {
    prompt: "A ray travels from air (n = 1,00) into glass (n = 1,50) at an angle of incidence of 40°. What is the angle of refraction?",
    options: ["40,0°", "74,6°", "26,6°", "25,4°"],
    answer: "25,4°",
    explanation: "sin θ₂ = (1,00 × sin 40°)/1,50 = 0,428, so θ₂ = 25,4°.",
  },
  {
    prompt: "A ray travels from air (n = 1,00) into water (n = 1,33) at an angle of incidence of 30°. What is the angle of refraction?",
    options: ["22,1°", "30,0°", "41,7°", "14,5°"],
    answer: "22,1°",
    explanation: "sin θ₂ = (1,00 × sin 30°)/1,33 = 0,376, so θ₂ = 22,1°.",
  },
  {
    prompt: "A ray goes from water (n = 1,33) into air (n = 1,00) at an angle of incidence of 20°. What is the angle of refraction?",
    options: ["20,0°", "14,9°", "27,1°", "15,0°"],
    answer: "27,1°",
    explanation: "sin θ₂ = 1,33 × sin 20° = 0,455, so θ₂ = 27,1°. The ray bends away from the normal.",
  },
  {
    prompt: "Light goes from air into glass. How does the ray bend?",
    options: ["Away from the normal", "It does not bend", "Along the boundary", "Towards the normal"],
    answer: "Towards the normal",
    explanation: "Glass has a larger refractive index than air, so the ray bends towards the normal.",
  },
  {
    prompt: "What is the critical angle for light going from glass (n = 1,50) into air (n = 1,00)?",
    options: ["38,3°", "41,8°", "48,2°", "30,0°"],
    answer: "41,8°",
    explanation: "sin θc = n₂/n₁ = 1,00/1,50, so θc = 41,8°.",
  },
  {
    prompt: "What is the critical angle for light going from water (n = 1,33) into air (n = 1,00)?",
    options: ["48,8°", "41,8°", "41,2°", "24,4°"],
    answer: "48,8°",
    explanation: "sin θc = 1,00/1,33, so θc = 48,8°.",
  },
  {
    prompt: "What is the critical angle for light going from diamond (n = 2,42) into air (n = 1,00)?",
    options: ["41,8°", "65,6°", "24,4°", "48,8°"],
    answer: "24,4°",
    explanation: "sin θc = 1,00/2,42, so θc = 24,4°.",
  },
  {
    prompt: "Which pair of conditions is needed for total internal reflection?",
    options: ["Going from a smaller n to a bigger n, at more than θc", "Going from a bigger n to a smaller n, at less than θc", "Going from a bigger n to a smaller n, at more than θc", "Going from a smaller n to a bigger n, at less than θc"],
    answer: "Going from a bigger n to a smaller n, at more than θc",
    explanation: "Both conditions must be met: a denser to a less dense medium, and an angle of incidence bigger than θc.",
  },
  {
    prompt: "A fibre has a core of n = 1,50 and a cladding of n = 1,45. What is the critical angle at the boundary of the core?",
    options: ["75,2°", "36,8°", "14,8°", "41,8°"],
    answer: "75,2°",
    explanation: "sin θc = 1,45/1,50, so θc = 75,2°. Light hitting the wall at a bigger angle is totally reflected.",
  },
];

const RefractionSnell = () => (
  <CapsSubjectTopic
    title="Refraction and Snell's Law"
    subtitle="Refractive index, Snell's law, critical angle, total internal reflection and optical fibres"
    learnSteps={learnSteps}
    task="gr11-refraction-snell-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default RefractionSnell;
