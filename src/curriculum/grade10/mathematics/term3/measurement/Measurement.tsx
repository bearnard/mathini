import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SolidPicture } from '../../../../../components/diagrams/maths/Grade10Maths';
import { dec } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';

// Every number in the slides below comes from the tested helpers in grade10Helpers3.ts (grade10Helpers3.test.ts, g10MathsBankT3.test.ts).
const d1 = (n: number) => dec(n, 1);

// slide 1: sphere and hemisphere
const sphereV = t.sphereVolume(3);
const sphereA = t.sphereArea(5);
const hemi = t.hemisphereArea(2);
// slide 2: cone
const slant = t.coneSlant(3, 4);
const coneV = t.coneVolume(3, 4);
const coneC = t.coneCurvedArea(3, 4);
const coneT = t.coneTotalArea(3, 4);
// slide 3: pyramid, prism and cylinder
const pyrV = t.pyramidVolume(6, 10);
const pyrA = t.pyramidArea(6, 5);
const prism = t.prismVolume(12, 5);
const cylV = t.cylinderVolume(2, 7);
const cylA = t.cylinderArea(2, 7);
// slide 4: composite solids and units
const hemiV = t.sphereVolume(2) / 2;
const combined = cylV + hemiV;
const tankCm3 = 50 * 40 * 30;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Spheres and hemispheres',
    content: slide(
      <>
        <Rule>Sphere: volume = (4/3)πr³ and surface area = 4πr². A solid hemisphere is half a sphere plus the flat circle: total surface area = 2πr² + πr² = 3πr².</Rule>
        <SolidPicture kind="sphere" labels={{ r: 'r = 3 cm' }} />
        <Worked
          title="Sphere and hemisphere"
          steps={[
            <>Volume, r = 3 cm: (4/3) × π × 3³ = <strong>{d1(sphereV)} cm³</strong>.</>,
            <>Surface area, r = 5 cm: 4 × π × 5² = <strong>{d1(sphereA)} cm²</strong>.</>,
            <>Solid hemisphere, r = 2 cm: 3 × π × 2² = <strong>{d1(hemi)} cm²</strong> (curved part 2πr² plus the flat circle πr²).</>,
            <>Use the π key on your calculator and round only at the end.</>,
          ]}
        />
        <Mistake>Forgetting that r is cubed in the volume but squared in the area. Using 3,14 early also makes the final rounding wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cones',
    content: slide(
      <>
        <Rule>Cone: slant height s = √(r² + h²). Volume = (1/3)πr²h. Curved surface area = πrs. Total surface area = πr² + πrs.</Rule>
        <SolidPicture kind="cone" labels={{ r: '3 cm', h: '4 cm', s: `${slant} cm` }} />
        <Worked
          title="A cone with r = 3 cm and h = 4 cm"
          steps={[
            <>Slant height: s = √(3² + 4²) = √25 = <strong>{slant} cm</strong>.</>,
            <>Volume: (1/3) × π × 3² × 4 = <strong>{d1(coneV)} cm³</strong>.</>,
            <>Curved area: π × 3 × {slant} = <strong>{d1(coneC)} cm²</strong>.</>,
            <>Total area: π × 3² + {d1(coneC)} = <strong>{d1(coneT)} cm²</strong>.</>,
          ]}
        />
        <Mistake>Using the height h instead of the slant height s in πrs, or forgetting the 1/3 in the volume.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pyramids, prisms and cylinders',
    content: slide(
      <>
        <Rule>Pyramid: volume = (1/3) × base area × perpendicular height. Prism: volume = base area × length. Cylinder: volume = πr²h and total surface area = 2πr² + 2πrh.</Rule>
        <SolidPicture kind="pyramid" labels={{ b: '6 cm', h: '10 cm', s: '5 cm' }} />
        <Worked
          title="Three solids"
          steps={[
            <>Square-based pyramid, base 6 cm, height 10 cm: (1/3) × 6² × 10 = <strong>{pyrV} cm³</strong>.</>,
            <>Same base, slant height 5 cm: area = 6² + 4 × (½ × 6 × 5) = 36 + 60 = <strong>{pyrA} cm²</strong>.</>,
            <>Triangular prism: end area 12 cm², length 5 cm: 12 × 5 = <strong>{prism} cm³</strong>.</>,
            <>Cylinder, r = 2 cm, h = 7 cm: volume <strong>{d1(cylV)} cm³</strong>, closed total area <strong>{d1(cylA)} cm²</strong>.</>,
          ]}
        />
        <Mistake>Using the slant height for the volume of a pyramid. The volume needs the perpendicular height.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composite solids and units',
    content: slide(
      <>
        <Rule>For a composite solid, split it into simple solids, find each volume or area, and add them. Take care with units: 1 000 cm³ = 1 ℓ.</Rule>
        <SolidPicture kind="cylinder" labels={{ r: '2 cm', h: '7 cm' }} />
        <Worked
          title="A cylinder with a hemisphere on top"
          steps={[
            <>Cylinder (r = 2, h = 7): {d1(cylV)} cm³.</>,
            <>Hemisphere (r = 2): ½ × (4/3)π × 2³ = {d1(hemiV)} cm³.</>,
            <>Total volume: {d1(cylV)} + {d1(hemiV)} = <strong>{d1(combined)} cm³</strong>.</>,
            <>A fish tank 50 cm × 40 cm × 30 cm holds {tankCm3.toLocaleString('en').replace(/,/g, ' ')} cm³ = <strong>{t.cm3ToLitres(tankCm3)} ℓ</strong>.</>,
          ]}
        />
        <Mistake>Adding the two surface areas without removing the faces that are joined together. Volumes just add, but joined faces are not on the outside.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A cone has r = 3 cm and h = 4 cm. What is its slant height?</>,
            <>A sphere has radius 3 cm. What is its volume (one decimal place)?</>,
            <>A square-based pyramid has base 6 cm and height 10 cm. What is its volume?</>,
            <>A fish tank is 50 cm × 40 cm × 30 cm. How many litres does it hold?</>,
          ]}
          answers={[
            <>√(3² + 4²) = <strong>{slant} cm</strong>.</>,
            <><strong>{d1(sphereV)} cm³</strong>.</>,
            <><strong>{pyrV} cm³</strong>.</>,
            <><strong>{t.cm3ToLitres(tankCm3)} ℓ</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "A sphere has a radius of 3 cm. What is its volume (one decimal place)?",
    options: ["84,8 cm³", "113,1 cm³", "37,7 cm³", "339,3 cm³"],
    answer: "113,1 cm³",
    explanation: "V = (4/3)πr³ = (4/3) × π × 27 = 36π ≈ 113,1 cm³.",
  },
  {
    prompt: "A sphere has a radius of 5 cm. What is its surface area (one decimal place)?",
    options: ["314,2 cm²", "523,6 cm²", "78,5 cm²", "157,1 cm²"],
    answer: "314,2 cm²",
    explanation: "Surface area = 4πr² = 4 × π × 25 = 100π ≈ 314,2 cm².",
  },
  {
    prompt: "A cone has a base radius of 3 cm and a height of 4 cm. What is its slant height?",
    options: ["7 cm", "25 cm", "2,6 cm", "5 cm"],
    answer: "5 cm",
    explanation: "The slant height is the hypotenuse of the right-angled triangle with sides r and h: s = √(3² + 4²) = √25 = 5 cm.",
  },
  {
    prompt: "A solid metal cone has a base radius of 3 cm and a height of 4 cm. What is its volume (one decimal place)?",
    options: ["113,1 cm³", "47,1 cm³", "37,7 cm³", "12,6 cm³"],
    answer: "37,7 cm³",
    explanation: "V = (1/3)πr²h = (1/3) × π × 9 × 4 = 12π ≈ 37,7 cm³.",
  },
  {
    prompt: "A paper party hat is a cone with a base radius of 3 cm and a height of 4 cm. What is the area of its curved surface (one decimal place)?",
    options: ["37,7 cm²", "47,1 cm²", "75,4 cm²", "113,1 cm²"],
    answer: "47,1 cm²",
    explanation: "Curved surface area = πrs, with slant height s = 5: π × 3 × 5 = 15π ≈ 47,1 cm².",
  },
  {
    prompt: "A cone is painted all over, including its base. Its base radius is 3 cm and its height is 4 cm. What is its total surface area (one decimal place)?",
    options: ["75,4 cm²", "47,1 cm²", "28,3 cm²", "113,1 cm²"],
    answer: "75,4 cm²",
    explanation: "Total = the base circle plus the curved surface: πr² + πrs = 9π + 15π = 24π ≈ 75,4 cm².",
  },
  {
    prompt: "A square-based pyramid has a base of 6 cm and a perpendicular height of 10 cm. What is its volume?",
    options: ["360 cm³", "60 cm³", "100 cm³", "120 cm³"],
    answer: "120 cm³",
    explanation: "V = (1/3) × base area × height = (1/3) × 36 × 10 = 120 cm³.",
  },
  {
    prompt: "A square-based pyramid has a base of 6 cm and each triangular face has a slant height of 5 cm. What is its total surface area?",
    options: ["66 cm²", "60 cm²", "96 cm²", "36 cm²"],
    answer: "96 cm²",
    explanation: "The base is 6 × 6 = 36. Each of the four triangles is ½ × 6 × 5 = 15, so 60 altogether. Total = 36 + 60 = 96 cm².",
  },
  {
    prompt: "A cylinder has a radius of 2 cm and a height of 7 cm. What is its volume (one decimal place)?",
    options: ["44,0 cm³", "88,0 cm³", "175,9 cm³", "29,3 cm³"],
    answer: "88,0 cm³",
    explanation: "V = πr²h = π × 4 × 7 = 28π ≈ 88,0 cm³.",
  },
  {
    prompt: "A closed cylinder has a radius of 2 cm and a height of 7 cm. What is its total surface area (one decimal place)?",
    options: ["113,1 cm²", "88,0 cm²", "25,1 cm²", "175,9 cm²"],
    answer: "113,1 cm²",
    explanation: "Total = two circles + the curved surface = 2πr² + 2πrh = 8π + 28π = 36π ≈ 113,1 cm².",
  },
  {
    prompt: "A fish tank is 50 cm long, 40 cm wide and 30 cm high. How many litres of water fill it?",
    options: ["6 ℓ", "600 ℓ", "60 000 ℓ", "60 ℓ"],
    answer: "60 ℓ",
    explanation: "V = 50 × 40 × 30 = 60 000 cm³. Since 1 000 cm³ = 1 ℓ, that is 60 ℓ.",
  },
  {
    prompt: "What is the total surface area of a solid hemisphere of radius 2 cm (one decimal place)?",
    options: ["25,1 cm²", "50,3 cm²", "37,7 cm²", "12,6 cm²"],
    answer: "37,7 cm²",
    explanation: "The curved part is half a sphere: 2πr² = 8π. The flat circle is πr² = 4π. Total = 12π ≈ 37,7 cm².",
  },
  {
    prompt: "A triangular prism has a triangular end of area 12 cm² and is 5 cm long. What is its volume?",
    options: ["120 cm³", "60 cm³", "30 cm³", "15 cm³"],
    answer: "60 cm³",
    explanation: "Volume of a prism = area of the end × length = 12 × 5 = 60 cm³.",
  },
  {
    prompt: "A cylinder with radius 2 cm and height 7 cm has a hemisphere of radius 2 cm fixed on top. What is the total volume (one decimal place)?",
    options: ["104,7 cm³", "121,5 cm³", "88,0 cm³", "16,8 cm³"],
    answer: "104,7 cm³",
    explanation: "Cylinder: π × 4 × 7 = 28π. Hemisphere: ½ × (4/3)π × 8 = 16π/3. Total = 28π + 16π/3 = 100π/3 ≈ 104,7 cm³.",
  },
];
// BANK:END

const Measurement = () => (
  <CapsSubjectTopic
    title="Measurement"
    subtitle="Surface area and volume of spheres, cones, pyramids, prisms and composite solids"
    learnSteps={learnSteps}
    task="gr10-measurement-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Measurement;
