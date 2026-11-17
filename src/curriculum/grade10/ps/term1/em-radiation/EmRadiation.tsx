import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EmSpectrum, FactCards } from '../../../../../components/diagrams/waves10/Waves10';
import { C, H, SPECTRUM, frequencyOf, orderedByFrequency, photonEnergy, photonEnergyFromWavelength, sci, wavelengthOfEm } from '../../../../../components/diagrams/waves10/waves10Helpers';

// Every number below comes from waves10Helpers.ts (tested in waves10Helpers.test.ts and g10PsT1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const f500 = frequencyOf(500e-9);
const fRadio = frequencyOf(100);
const fFm = 1.0e8;
const lamFm = wavelengthOfEm(fFm);
const eVis = photonEnergy(f500);
const eX = photonEnergyFromWavelength(1e-10);
const e400 = photonEnergyFromWavelength(400e-9);
const e700 = photonEnergyFromWavelength(700e-9);

export const learnSteps: LearnStep[] = [
  {
    title: 'What an electromagnetic wave is',
    content: slide(
      <>
        <Rule>An electromagnetic (EM) wave is produced by an accelerating charge. An electric field that oscillates in one plane produces a magnetic field that oscillates in a plane at right angles to it, and these fields regenerate each other as the wave moves. EM waves do not need a medium and travel through a vacuum at a constant speed c = 3,00 × 10⁸ m·s⁻¹.</Rule>
        <FactCards
          cards={[
            { title: 'Source', line1: 'an accelerating', line2: 'electric charge' },
            { title: 'Fields', line1: 'electric and magnetic fields', line2: 'at right angles' },
            { title: 'Speed', line1: 'c = 3,00 × 10⁸ m·s⁻¹ in a', line2: 'vacuum: no medium needed' },
          ]}
          aria="The nature of electromagnetic radiation. The source is an accelerating electric charge. An oscillating electric field and an oscillating magnetic field are at right angles to each other. The speed in a vacuum is c, 3,00 times 10 to the power 8 metres per second, and no medium is needed."
        />
        <Worked
          title="Wave or particle?"
          steps={[
            'Some behaviour of EM radiation, such as interference, is best explained with a wave model.',
            'Other behaviour, such as light delivering energy in small packets, is best explained with a particle model. A packet of EM energy is called a photon.',
            'This is called the wave-particle duality of EM radiation.',
          ]}
        />
        <Mistake>Saying that EM waves need a medium, like sound. EM waves travel through empty space, which is how sunlight reaches the Earth.</Mistake>
      </>,
    ),
  },
  {
    title: 'The EM spectrum',
    content: slide(
      <>
        <Rule>The EM spectrum arranges the types of EM radiation by wavelength and frequency. From the highest frequency to the lowest: gamma rays, X-rays, ultraviolet, visible light, infrared, microwaves and radio waves. All travel at c in a vacuum, so c = fλ for each of them.</Rule>
        <EmSpectrum />
        <Worked
          title="Use c = fλ"
          steps={[
            `Visible light of wavelength 500 nm: f = c/λ = ${sci(C)} / ${sci(500e-9)} = ${sci(f500)} Hz.`,
            `A radio wave of wavelength 100 m: f = ${sci(C)} / 100 = ${sci(fRadio)} Hz.`,
            `An FM radio station of frequency 100 MHz (1,00 × 10⁸ Hz): λ = c/f = ${sci(C)} / ${sci(fFm)} = ${sci(lamFm, 2)} m.`,
            `In order of frequency: ${orderedByFrequency().join(', ')}.`,
          ]}
        />
        <Mistake>Mixing up wavelength and frequency in the order. The radiation with the shortest wavelength has the highest frequency.</Mistake>
      </>,
    ),
  },
  {
    title: 'The energy of a photon',
    content: slide(
      <>
        <Rule>The energy of a photon is E = hf = hc/λ, where h = 6,63 × 10⁻³⁴ J·s is Planck&apos;s constant. The higher the frequency (the shorter the wavelength), the more energy each photon has.</Rule>
        <FactCards
          cards={[
            { title: 'E = hf', line1: 'photon energy from the', line2: 'frequency in hertz' },
            { title: 'E = hc/λ', line1: 'photon energy from the', line2: 'wavelength in metres' },
            { title: 'Higher f', line1: 'means more energy per photon', line2: 'and more penetrating' },
          ]}
          aria="The energy of a photon. E equals h times f, from the frequency in hertz. E equals h times c divided by lambda, from the wavelength in metres. A higher frequency means more energy per photon and a more penetrating radiation."
        />
        <Worked
          title="Calculate the energy of one photon (h = 6,63 × 10⁻³⁴ J·s)"
          steps={[
            `Visible light with f = ${sci(f500)} Hz: E = hf = ${sci(H)} × ${sci(f500)} = ${sci(eVis)} J.`,
            `An X-ray with λ = 1,00 × 10⁻¹⁰ m: E = hc/λ = (${sci(H)})(${sci(C)}) / ${sci(1e-10)} = ${sci(eX)} J, about ${(Math.round(eX / eVis / 100) * 100).toLocaleString('en').replace(',', ' ')} times as much.`,
            `Violet light of 400 nm has E = ${sci(e400)} J and red light of 700 nm has E = ${sci(e700)} J, so violet photons carry more energy.`,
          ]}
        />
        <Mistake>Using the wavelength in nanometres in E = hc/λ. Change it to metres first: 400 nm = 4,00 × 10⁻⁷ m.</Mistake>
      </>,
    ),
  },
  {
    title: 'Uses and dangers',
    content: slide(
      <>
        <Rule>Every type of EM radiation has uses. Radiation with a higher frequency has more energy and is more penetrating, so gamma rays, X-rays and ultraviolet radiation can damage living cells. Gamma rays and X-rays are dangerous in large doses, and ultraviolet radiation from the Sun damages the skin.</Rule>
        <FactCards
          cards={SPECTRUM.slice(0, 4).map((e) => ({ title: e.name, line1: 'used for', line2: e.use }))}
          aria="Uses of four types of electromagnetic radiation. Gamma rays are used for treating cancer. X-rays are used for looking at bones. Ultraviolet is used for sterilising water. Visible light is used for seeing."
        />
        <Worked
          title="Choose the right radiation"
          steps={[
            'X-rays pass through soft tissue but not through bone, so they show the bones. Doses are kept as small as possible.',
            'Ultraviolet radiation damages skin cells, so use sunscreen and cover up in strong sun.',
            'Microwaves are used for cooking and cellphones. A microwave photon has much less energy than a photon of visible light, and people continue to study the effects of cellphone radiation on health.',
          ]}
        />
        <Mistake>Thinking that all EM radiation is equally harmful. The photons of radio waves and microwaves carry far less energy than those of X-rays and gamma rays.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What produces an electromagnetic wave?</>,
          <>Which has the higher frequency, X-rays or infrared?</>,
          <>A wave of wavelength 600 nm travels at 3,00 × 10⁸ m·s⁻¹. What is its frequency?</>,
          <>Why are X-rays and gamma rays more dangerous than radio waves?</>,
        ]}
        answers={[
          <>An accelerating charge.</>,
          <>X-rays.</>,
          <>f = c/λ = {sci(C)} / {sci(600e-9)} = {sci(frequencyOf(600e-9))} Hz.</>,
          <>Their photons have much more energy and can damage living cells.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What produces an electromagnetic wave?",
    options: ["A stationary electric charge", "A medium that is vibrating", "An accelerating electric charge", "A steady magnetic field only"],
    answer: "An accelerating electric charge",
    explanation: "An accelerating charge produces oscillating electric and magnetic fields that travel as an EM wave.",
  },
  {
    prompt: "Which statement about electromagnetic waves is correct?",
    options: ["They can travel through a vacuum", "They need air to travel through", "They need a solid medium to travel through", "They can only travel through water"],
    answer: "They can travel through a vacuum",
    explanation: "EM waves do not need a medium. Sunlight reaches the Earth through empty space.",
  },
  {
    prompt: "What is the speed of all electromagnetic waves in a vacuum?",
    options: ["3,40 × 10² m·s⁻¹", "3,00 × 10⁶ m·s⁻¹", "3,00 × 10¹⁰ m·s⁻¹", "3,00 × 10⁸ m·s⁻¹"],
    answer: "3,00 × 10⁸ m·s⁻¹",
    explanation: "c = 3,00 × 10⁸ m·s⁻¹ for all EM waves in a vacuum.",
  },
  {
    prompt: "Which of these types of EM radiation has the highest frequency?",
    options: ["Radio waves", "Gamma rays", "Microwaves", "Visible light"],
    answer: "Gamma rays",
    explanation: "Gamma rays have the shortest wavelength and the highest frequency.",
  },
  {
    prompt: "Which list is in order from the lowest to the highest frequency?",
    options: ["Ultraviolet, visible light, infrared, radio waves", "Radio waves, infrared, visible light, ultraviolet", "Infrared, radio waves, ultraviolet, visible light", "Visible light, radio waves, infrared, ultraviolet"],
    answer: "Radio waves, infrared, visible light, ultraviolet",
    explanation: "The frequency increases from radio waves to infrared, visible light and ultraviolet.",
  },
  {
    prompt: "Light has a wavelength of 600 nm. What is its frequency? Use c = 3,00 × 10⁸ m·s⁻¹.",
    options: ["1,80 × 10² Hz", "5,00 × 10⁵ Hz", "2,00 × 10⁻¹⁵ Hz", "5,00 × 10¹⁴ Hz"],
    answer: "5,00 × 10¹⁴ Hz",
    explanation: "f = c/λ = 3,00 × 10⁸ / 6,00 × 10⁻⁷ = 5,00 × 10¹⁴ Hz.",
  },
  {
    prompt: "An FM radio wave has a frequency of 1,00 × 10⁸ Hz. What is its wavelength? Use c = 3,00 × 10⁸ m·s⁻¹.",
    options: ["3,00 m", "0,33 m", "30000000000000000 m", "0,00 m"],
    answer: "3,00 m",
    explanation: "λ = c/f = 3,00 × 10⁸ / 1,00 × 10⁸ = 3,00 m.",
  },
  {
    prompt: "A photon has a frequency of 5,00 × 10¹⁴ Hz. What is its energy? Use h = 6,63 × 10⁻³⁴ J·s.",
    options: ["1,33 × 10⁻⁴⁸ J", "7,54 × 10⁴⁷ J", "3,32 × 10⁻¹⁹ J", "1,99 × 10⁻²⁵ J"],
    answer: "3,32 × 10⁻¹⁹ J",
    explanation: "E = hf = 6,63 × 10⁻³⁴ × 5,00 × 10¹⁴ = 3,32 × 10⁻¹⁹ J.",
  },
  {
    prompt: "A photon has a wavelength of 400 nm. What is its energy? Use h = 6,63 × 10⁻³⁴ J·s and c = 3,00 × 10⁸ m·s⁻¹.",
    options: ["4,97 × 10⁻²⁸ J", "8,84 × 10⁻⁴⁹ J", "1,66 × 10⁻²⁷ J", "4,97 × 10⁻¹⁹ J"],
    answer: "4,97 × 10⁻¹⁹ J",
    explanation: "E = hc/λ = (6,63 × 10⁻³⁴)(3,00 × 10⁸) / 4,00 × 10⁻⁷ = 4,97 × 10⁻¹⁹ J.",
  },
  {
    prompt: "Which photon has more energy: violet light (400 nm) or red light (700 nm)?",
    options: ["Red light, because it has the longer wavelength", "Violet light, because it has the shorter wavelength", "They have the same energy", "Neither has any energy"],
    answer: "Violet light, because it has the shorter wavelength",
    explanation: "E = hc/λ, so the shorter the wavelength, the larger the energy.",
  },
  {
    prompt: "Which type of EM radiation is used to look at broken bones?",
    options: ["X-rays", "Radio waves", "Infrared", "Microwaves"],
    answer: "X-rays",
    explanation: "X-rays pass through soft tissue but are absorbed by bone.",
  },
  {
    prompt: "Which type of EM radiation from the Sun damages the skin?",
    options: ["Radio waves", "Infrared radiation", "Ultraviolet radiation", "Visible light only"],
    answer: "Ultraviolet radiation",
    explanation: "Ultraviolet photons have enough energy to damage skin cells.",
  },
  {
    prompt: "Why are gamma rays more dangerous than radio waves?",
    options: ["Their photons have much less energy", "They travel more slowly than radio waves", "Their photons have much more energy", "They need a medium to travel through"],
    answer: "Their photons have much more energy",
    explanation: "A higher frequency means more energy per photon, and gamma rays can damage living cells.",
  },
  {
    prompt: "What does the wave-particle duality of EM radiation mean?",
    options: ["Some behaviour is best explained by waves and some by particles", "It is a wave in a vacuum and a particle in air", "It is only ever a wave", "It is only ever a stream of particles"],
    answer: "Some behaviour is best explained by waves and some by particles",
    explanation: "Interference is explained by waves, and the delivery of energy in packets by photons.",
  },
];

const EmRadiation = () => (
  <CapsSubjectTopic
    title="Electromagnetic Radiation"
    subtitle="The nature of EM waves, the spectrum, c = fλ, the energy of a photon, uses and dangers"
    learnSteps={learnSteps}
    task="gr10-em-radiation-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default EmRadiation;
