import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SouthernCross, TelescopeTypes } from '../../../../../components/diagrams/ns8/Space8';
import { GOOD_CONDITIONS, TELESCOPES, telescopeFor } from '../../../../../components/diagrams/ns8/space8Helpers';

// Every statement comes from space8Helpers.ts (tested in space8Helpers.test.ts and g8NsT4.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Early viewing of space',
    content: slide(
      <>
        <Rule>People can see planets and stars in the night sky without any instruments. Stars can be arranged into visible patterns called constellations, such as the Southern Cross and Orion. Different cultures have identified and named certain constellations, and some constellations have stories linked to them.</Rule>
        <SouthernCross />
        <Worked
          title="Use a star map"
          steps={[
            'Use a star map of the southern sky to find easily recognisable constellations such as the Southern Cross and Orion.',
            'Planets are seen as bright points that move against the background of stars.',
            'View the Southern Cross at least three times during September and October and compare its appearance.',
          ]}
        />
        <Mistake>Thinking that the stars in a constellation are close together in space. They only look grouped when seen from the Earth.</Mistake>
      </>,
    ),
  },
  {
    title: 'Telescopes',
    content: slide(
      <>
        <Rule>People can see more detail in the sky with a telescope. A telescope forms an image of the object and magnifies it (makes it look bigger). Optical telescopes receive light and focus it by refraction, using lenses, or by reflection, using mirrors, such as SALT (the Southern African Large Telescope) and the Hubble Space Telescope. Radio telescopes receive radio waves and focus them by reflection, usually with a metal receiving dish, such as the SKA (Square Kilometre Array).</Rule>
        <TelescopeTypes />
        <Worked
          title="Sort the telescopes"
          steps={[
            `SALT and Hubble gather ${TELESCOPES.optical.gathers}: they are ${telescopeFor('light')} telescopes.`,
            `The SKA gathers ${TELESCOPES.radio.gathers}: it is a ${telescopeFor('radio waves')} telescope with a metal dish.`,
            'A lens focuses light by refraction and a mirror focuses it by reflection.',
          ]}
        />
        <Mistake>Saying that a telescope makes the stars brighter by giving out light. It collects and focuses the light or radio waves that arrive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where to look into space',
    content: slide(
      <>
        <Rule>Good conditions for looking into space include {GOOD_CONDITIONS.join(', ')}. South Africa has many locations that meet these requirements, which is why telescopes such as SALT and the SKA are built here.</Rule>
        <FactCards
          cards={[
            { title: 'Cloudless skies', line1: 'clouds block the light', line2: 'from the stars' },
            { title: 'Limited light pollution', line1: 'street lights make the', line2: 'night sky bright' },
            { title: 'Limited air pollution', line1: 'dust and smoke spoil', line2: 'the view of space' },
          ]}
          aria="Good conditions for looking into space: cloudless skies, because clouds block the light from the stars; limited light pollution, because street lights make the night sky bright; and limited air pollution, because dust and smoke spoil the view of space."
        />
        <Worked
          title="Choose a site for a telescope"
          steps={[
            'A dry, high place with few clouds is better than a cloudy coast.',
            'A site far from a city has less light pollution.',
            'South Africa has many such places, so there are opportunities for careers in astronomy.',
          ]}
        />
        <Mistake>Building a telescope in the middle of a bright city. The lights would drown out faint objects.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name a constellation of the southern sky.</>,
          <>Describe what a telescope does to the view of an object.</>,
          <>Is the SKA an optical telescope or a radio telescope?</>,
          <>Name two good conditions for looking into space.</>,
        ]}
        answers={[
          <>The Southern Cross (or Orion).</>,
          <>It forms an image and magnifies it.</>,
          <>A radio telescope.</>,
          <>For example cloudless skies and limited light pollution.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a constellation?",
    options: ["A very large single star", "A cluster of planets", "A pattern of stars in the sky", "A group of galaxies"],
    answer: "A pattern of stars in the sky",
    explanation: "Stars can be arranged into visible patterns called constellations.",
  },
  {
    prompt: "Which of these is a constellation of the southern sky?",
    options: ["The Southern Cross", "The Milky Way", "Alpha Centauri", "The Sun"],
    answer: "The Southern Cross",
    explanation: "The Southern Cross and Orion are easily recognised constellations.",
  },
  {
    prompt: "Why do cultures name constellations and tell stories about them?",
    options: ["Because constellations are made of living things", "Because they are close to the Earth", "Because they give out sound", "To recognise and remember patterns in the night sky"],
    answer: "To recognise and remember patterns in the night sky",
    explanation: "Different cultures have identified and named constellations and linked stories to them.",
  },
  {
    prompt: "What can people see in the night sky without a telescope?",
    options: ["Distant galaxies in detail", "Planets and stars", "The surface of the Sun", "Radio waves"],
    answer: "Planets and stars",
    explanation: "Planets and stars can be seen by eye.",
  },
  {
    prompt: "Which job does a telescope do for an observer?",
    options: ["It makes the object give out more light", "It forms an image and magnifies it", "It moves the object closer", "It makes the object smaller"],
    answer: "It forms an image and magnifies it",
    explanation: "A telescope forms an image of the object and makes it look bigger.",
  },
  {
    prompt: "How does an optical telescope with a lens focus light?",
    options: ["By reflection", "By absorption", "By radiation", "By refraction"],
    answer: "By refraction",
    explanation: "Lenses focus light by refraction.",
  },
  {
    prompt: "How does an optical telescope with a mirror focus light?",
    options: ["By reflection", "By refraction", "By absorption", "By conduction"],
    answer: "By reflection",
    explanation: "Mirrors focus light by reflection.",
  },
  {
    prompt: "What does SALT stand for?",
    options: ["South African Light Telescope", "Space and Light Telescope", "Southern African Large Telescope", "Southern Astronomy Lens Tool"],
    answer: "Southern African Large Telescope",
    explanation: "SALT is the Southern African Large Telescope, an optical telescope.",
  },
  {
    prompt: "Which of these is a space telescope?",
    options: ["SALT", "The SKA", "A pair of binoculars", "The Hubble telescope"],
    answer: "The Hubble telescope",
    explanation: "The Hubble Space Telescope is an optical telescope in space.",
  },
  {
    prompt: "Which kind of waves does a radio telescope collect?",
    options: ["Visible light only", "Radio waves", "Sound waves", "X-rays from the Earth"],
    answer: "Radio waves",
    explanation: "Radio telescopes receive radio waves and focus them by reflection.",
  },
  {
    prompt: "What does SKA stand for?",
    options: ["Square Kilometre Array", "Southern Kilometre Antenna", "Star and Kite Array", "Square Knowledge Alliance"],
    answer: "Square Kilometre Array",
    explanation: "The SKA is a radio telescope.",
  },
  {
    prompt: "What is typically used to focus radio waves in a radio telescope?",
    options: ["A glass lens", "A prism", "A metal receiving dish", "A mirror of water"],
    answer: "A metal receiving dish",
    explanation: "Radio waves are focused by reflection, typically with a metal dish.",
  },
  {
    prompt: "Which is a good condition for looking into space?",
    options: ["A bright city", "A smoky sky", "A cloudless sky", "A full day of cloud"],
    answer: "A cloudless sky",
    explanation: "Good conditions include cloudless skies with limited light and air pollution.",
  },
  {
    prompt: "Why is South Africa a good place for telescopes?",
    options: ["It has many places with clear skies and little light pollution", "It has no clouds anywhere", "It is closer to the stars", "It has more stars overhead than anywhere else"],
    answer: "It has many places with clear skies and little light pollution",
    explanation: "South Africa has many locations that meet the requirements for looking into space.",
  },
];

const LookingIntoSpace = () => (
  <CapsSubjectTopic
    title="Looking into Space"
    subtitle="Constellations, telescopes and good places to look into space"
    learnSteps={learnSteps}
    task="gr8-looking-into-space-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default LookingIntoSpace;
