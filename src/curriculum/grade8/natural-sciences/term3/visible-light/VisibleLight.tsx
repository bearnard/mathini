import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { RayReflection, RayRefraction, SpectrumBar } from '../../../../../components/diagrams/ns8/Ns8b';
import { SPECTRUM, SPEED_OF_LIGHT_KM_PER_S, SUN_EARTH_KM, highestFrequency, lightTravelSeconds, lowestFrequency, minutesAndSeconds, reflectionAngle, refractionBend } from '../../../../../components/diagrams/ns8/ns8bHelpers';

// Every number comes from ns8bHelpers.ts (tested in ns8bHelpers.test.ts and g8NsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const secs = lightTravelSeconds(SUN_EARTH_KM);

export const learnSteps: LearnStep[] = [
  {
    title: 'Light travels in straight lines',
    content: slide(
      <>
        <Rule>Light is emitted by luminous objects such as the Sun and light bulbs, and it is transferred by radiation. Light travels in straight lines. In empty space it travels at a speed of 300 000 kilometres per second, which is why shadows have sharp edges and a pinhole camera forms an upside-down image.</Rule>
        <FactCards
          cards={[
            { title: 'Luminous objects', line1: 'give out their own light:', line2: 'the Sun, a light bulb' },
            { title: 'Straight lines', line1: 'light travels in straight lines', line2: 'and by radiation' },
            { title: 'Speed of light', line1: `${big(SPEED_OF_LIGHT_KM_PER_S)} km per second in`, line2: 'empty space' },
          ]}
          aria="Light. Luminous objects such as the Sun and a light bulb give out their own light. Light travels in straight lines and is transferred by radiation. The speed of light in empty space is 300 000 kilometres per second."
        />
        <Worked
          title="How long does sunlight take to reach Earth?"
          steps={[
            `The distance from the Sun to the Earth is about ${big(SUN_EARTH_KM)} km.`,
            `Time = distance ÷ speed = ${big(SUN_EARTH_KM)} ÷ ${big(SPEED_OF_LIGHT_KM_PER_S)} = ${secs} s.`,
            `That is ${minutesAndSeconds(secs)}.`,
          ]}
        />
        <Mistake>Saying that the Moon is luminous. It reflects light from the Sun.</Mistake>
      </>,
    ),
  },
  {
    title: 'The spectrum of visible light',
    content: slide(
      <>
        <Rule>White light is made of a spectrum of colours: violet, indigo, blue, green, yellow, orange and red. A triangular prism refracts and disperses white light into these colours, and a rainbow forms when sunlight is refracted and dispersed by water droplets in the air. Violet light has the highest frequency and the shortest wavelength, and red light has the lowest frequency and the longest wavelength.</Rule>
        <SpectrumBar />
        <Worked
          title="Read the spectrum"
          steps={[
            `There are ${SPECTRUM.length} colours in the visible spectrum, from ${SPECTRUM[0]} to ${SPECTRUM[SPECTRUM.length - 1]}.`,
            `The highest frequency is ${highestFrequency()} and the lowest frequency is ${lowestFrequency()}.`,
            'Raindrops act like tiny prisms, so a rainbow shows the colours in the same order.',
          ]}
        />
        <Mistake>Saying that red light has the shortest wavelength. Violet has the shortest wavelength.</Mistake>
      </>,
    ),
  },
  {
    title: 'Opaque, transparent and colour',
    content: slide(
      <>
        <Rule>Light cannot pass through opaque substances such as metal, clay, bricks and cardboard, so they cast a shadow on the side facing away from the light. Light passes through transparent substances such as glass, clear plastic and clean water. A material has colour because it absorbs some of the colours of the spectrum and reflects the others. A red object reflects red light and absorbs the other colours, a black object absorbs all the colours, and a white object reflects all the colours.</Rule>
        <FactCards
          cards={[
            { title: 'Opaque', line1: 'blocks light: casts a shadow', line2: 'metal, brick, cardboard' },
            { title: 'Transparent', line1: 'lets most light pass through', line2: 'glass, clean water' },
            { title: 'Red object', line1: 'reflects red, absorbs', line2: 'violet, blue and green' },
            { title: 'Black and white', line1: 'black absorbs all colours;', line2: 'white reflects all colours' },
          ]}
          aria="Opaque and transparent substances and colour. An opaque substance blocks light, so it casts a shadow: metal, brick, cardboard. A transparent substance lets most of the light pass: glass, clean water. A red object reflects red and absorbs the other colours. A black object absorbs all colours and a white object reflects all colours."
        />
        <Worked
          title="Why is a black pot hot in the sun?"
          steps={[
            'A black pot absorbs all of the colours that fall on it.',
            'None of the light is reflected to the eye, so the pot looks black.',
            'The absorbed light energy heats the pot, which is why matt black surfaces get hot.',
          ]}
        />
        <Mistake>Saying that a red object gives out red light. It reflects red light and absorbs the rest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection of light',
    content: slide(
      <>
        <Rule>Light is reflected off most surfaces, including mirrors. In reflection the angle of incidence and the angle of reflection are equal, and both are measured from the normal, a line at right angles to the surface. On smooth surfaces all the light is reflected in the same direction. On rough surfaces the reflected light is scattered in different directions.</Rule>
        <RayReflection incidence={35} />
        <Worked
          title="Reflect a ray"
          steps={[
            `A ray hits a mirror at an angle of incidence of 35° from the normal.`,
            `The angle of reflection is the same: ${reflectionAngle(35)}°.`,
            'On crumpled aluminium foil the surface is rough, so the light is scattered in many directions.',
          ]}
        />
        <Mistake>Measuring the angles from the surface of the mirror. They are measured from the normal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Seeing light and refraction',
    content: slide(
      <>
        <Rule>We see an object when light reflected from it enters the eye. Specialised cells in the retina are stimulated by different colours, and the light energy is converted to electrical nerve impulses that travel to the brain. Light can also be refracted by transparent substances: when it enters glass or water at an angle it changes direction towards the normal, and when it leaves the glass or water it changes direction away from the normal.</Rule>
        <RayRefraction />
        <Worked
          title="Explain what you see"
          steps={[
            'A blue car looks blue because it reflects blue light into the eye and absorbs the other colours.',
            'Leaves look green because they reflect green light.',
            `A pencil in a glass of water looks bent because of refraction: on entering the water the light bends ${refractionBend(true)}, and on leaving it bends ${refractionBend(false)}.`,
          ]}
        />
        <Mistake>Thinking that the eye sends out light to see. The eye receives light that is reflected from objects.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which colour of the spectrum has the highest frequency?</>,
          <>A ray hits a mirror at 35° from the normal. At what angle is it reflected?</>,
          <>What happens to the colours that fall on a black object?</>,
          <>Light enters glass at an angle. Which way does it bend?</>,
        ]}
        answers={[
          <>{highestFrequency()[0].toUpperCase() + highestFrequency().slice(1)}.</>,
          <>{reflectionAngle(35)}°.</>,
          <>They are all absorbed.</>,
          <>{refractionBend(true)[0].toUpperCase() + refractionBend(true).slice(1)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a luminous object?",
    options: ["The Moon", "A mirror", "The Sun", "A white wall"],
    answer: "The Sun",
    explanation: "Luminous objects give out their own light.",
  },
  {
    prompt: "How does light travel?",
    options: ["In straight lines", "In curves", "In zigzags", "Only in water"],
    answer: "In straight lines",
    explanation: "Light travels in straight lines.",
  },
  {
    prompt: "What is the speed of light in empty space, as given in the CAPS?",
    options: ["300 km per second", "3 000 km per second", "30 000 000 km per second", "300 000 km per second"],
    answer: "300 000 km per second",
    explanation: "Light travels at 300 000 kilometres per second.",
  },
  {
    prompt: "Sunlight travels about 150 million km to the Earth at 300 000 km per second. How long does it take?",
    options: ["50 s", "500 s", "5 000 s", "0,002 s"],
    answer: "500 s",
    explanation: "Time = 150 000 000 ÷ 300 000 = 500 s, which is 8 minutes 20 seconds.",
  },
  {
    prompt: "Which colour of visible light has the highest frequency?",
    options: ["Red", "Violet", "Green", "Yellow"],
    answer: "Violet",
    explanation: "Violet has the highest frequency and the shortest wavelength.",
  },
  {
    prompt: "Which colour of visible light has the longest wavelength?",
    options: ["Violet", "Blue", "Green", "Red"],
    answer: "Red",
    explanation: "Red has the lowest frequency and the longest wavelength.",
  },
  {
    prompt: "How many colours are in the visible spectrum?",
    options: ["Seven", "Three", "Five", "Twelve"],
    answer: "Seven",
    explanation: "The spectrum is violet, indigo, blue, green, yellow, orange and red.",
  },
  {
    prompt: "What forms a rainbow?",
    options: ["Clouds reflecting the sunlight", "Rain absorbing the colours", "Water droplets splitting sunlight", "The rain making its own light"],
    answer: "Water droplets splitting sunlight",
    explanation: "Droplets refract and disperse the light into the colours of the spectrum.",
  },
  {
    prompt: "What does a triangular prism do to white light?",
    options: ["It absorbs it completely", "It turns it into heat", "It makes it travel faster", "It splits it into colours"],
    answer: "It splits it into colours",
    explanation: "A prism refracts and disperses white light.",
  },
  {
    prompt: "Which of these is an opaque substance?",
    options: ["Clean water", "Cardboard", "Glass", "Clear plastic"],
    answer: "Cardboard",
    explanation: "Cardboard blocks light, so it casts a shadow.",
  },
  {
    prompt: "Why does a red object look red in white light?",
    options: ["It reflects red and absorbs the rest", "It gives out red light", "It absorbs red light only", "It reflects all the colours"],
    answer: "It reflects red and absorbs the rest",
    explanation: "An object has the colour of the light that it reflects.",
  },
  {
    prompt: "Why does a black pot look black?",
    options: ["It reflects all the colours", "It gives out black light", "It absorbs all the colours", "It reflects only red"],
    answer: "It absorbs all the colours",
    explanation: "A black object absorbs all the colours, so no light reaches the eye.",
  },
  {
    prompt: "A ray of light hits a mirror at an angle of incidence of 35°. What is the angle of reflection?",
    options: ["55°", "70°", "35°", "145°"],
    answer: "35°",
    explanation: "The angle of reflection equals the angle of incidence.",
  },
  {
    prompt: "A ray enters a glass block at an angle. In which way does it bend?",
    options: ["Towards the normal", "Away from the normal", "It does not bend", "Along the surface"],
    answer: "Towards the normal",
    explanation: "Light entering a transparent medium at an angle changes direction towards the normal.",
  },
];

const VisibleLight = () => (
  <CapsSubjectTopic
    title="Visible Light"
    subtitle="Light, the spectrum, colour, reflection and refraction"
    learnSteps={learnSteps}
    task="gr8-visible-light-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default VisibleLight;
