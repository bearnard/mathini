import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { AnnualRings, RootSection, StemSection } from '../../../../../components/diagrams/lifesci/PlantSections';
import * as p from '../../../../../components/diagrams/lifesci/plants10';

// Numbers come from plants10.ts (tested in plants10.test.ts and g10LsPlants.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Water and minerals enter the root',
    content: slide(
      <>
        <Rule>Root hairs give the root a large surface area. Water moves into the root hair cells by osmosis, because the soil water has a higher water potential than the cell sap. Mineral ions are taken in by active transport, which needs energy from respiration. The water and minerals cross the cortex and enter the xylem.</Rule>
        <InfoTable
          cols={[{ title: 'Substance', w: 26 }, { title: 'How it enters', w: 40 }, { title: 'Needs energy?', w: 34 }]}
          rows={[
            ['Water', 'osmosis into root hairs', 'no'],
            ['Mineral ions', 'active transport', 'yes (from respiration)'],
          ]}
          aria="A table of uptake in roots. Water enters root hairs by osmosis and needs no energy. Mineral ions enter by active transport, which needs energy from respiration."
        />
        <Worked
          title="Why root hairs help"
          steps={[
            'Many root hairs make a very large surface area in contact with the soil.',
            'A larger surface area means that more water and ions can enter every minute.',
            'Waterlogged soil with no air stops respiration, so mineral uptake by active transport slows down.',
          ]}
        />
        <Mistake>Saying that water enters the root by active transport. Water moves by osmosis; only the mineral ions need active transport.</Mistake>
      </>,
    ),
  },
  {
    title: 'Water moves up the xylem and out of the leaf',
    content: slide(
      <>
        <Rule>Water moves up the xylem to the leaves. It evaporates from the surface of the spongy mesophyll cells into the air spaces of the leaf and leaves through the stomata, which is called transpiration. This loss pulls more water up the xylem in a continuous column. The stomata are opened and closed by guard cells, and a waxy cuticle reduces water loss from the rest of the leaf.</Rule>
        <InfoTable
          cols={[{ title: 'Part of the leaf', w: 34 }, { title: 'Role in water loss', w: 66 }]}
          rows={[
            ['Cuticle', 'waxy layer that cuts water loss'],
            ['Stomata', 'pores where water vapour leaves'],
            ['Guard cells', 'open and close the stomata'],
            ['Spongy mesophyll', 'wet cell surfaces and air spaces'],
          ]}
          aria="A table of leaf structure and water loss. Cuticle: a waxy layer that reduces water loss. Stomata: pores where water vapour leaves. Guard cells: open and close the stomata. Spongy mesophyll: wet cell surfaces and air spaces."
        />
        <Worked
          title="Follow the water"
          steps={[
            'Root hair, cortex, xylem in the root and stem, xylem in the leaf vein.',
            'From the xylem to the mesophyll cell walls, then evaporation into the air spaces.',
            'Diffusion of water vapour out through the open stomata.',
          ]}
        />
        <Mistake>Believing that the plant pumps the water up like a heart. The loss of water from the leaves pulls the water up the xylem.</Mistake>
      </>,
    ),
  },
  {
    title: 'Factors that affect the rate of transpiration',
    content: slide(
      <>
        <Rule>Four factors affect the rate of transpiration. Higher temperature and higher light intensity increase it, because water evaporates faster and the stomata open wider. Wind increases it by blowing away the humid air around the leaf. High humidity decreases it, because there is less difference in water vapour between the leaf and the air. A potometer measures the rate by following a bubble in a tube.</Rule>
        <InfoTable
          cols={[{ title: 'Condition', w: 40 }, { title: 'Bubble (mm, 6 min)', w: 34 }, { title: 'Rate (mm/min)', w: 26 }]}
          rows={p.POTO.map((x) => [x.cond, String(x.mm), p.dec(p.ratePerMin(x.mm))])}
          aria={`A potometer investigation over ${p.MINUTES} minutes. ${p.POTO.map((x) => `${x.cond}: ${x.mm} millimetres, ${p.ratePerMin(x.mm)} millimetres per minute`).join('. ')}.`}
        />
        <Worked
          title="Compare the rates"
          steps={[
            `Still air: ${p.POTO[0].mm} mm ÷ ${p.MINUTES} min = ${p.dec(p.ratePerMin(p.POTO[0].mm))} mm/min.`,
            `With a fan: ${p.dec(p.ratePerMin(p.POTO[1].mm))} mm/min, a change of (${p.POTO[1].mm} − ${p.POTO[0].mm}) ÷ ${p.POTO[0].mm} × 100 = +${p.dec(p.percentChange(p.POTO[0].mm, p.POTO[1].mm))}%.`,
            `In humid air the rate falls to ${p.dec(p.ratePerMin(p.POTO[3].mm))} mm/min, a change of ${p.dec(p.percentChange(p.POTO[0].mm, p.POTO[3].mm))}%.`,
          ]}
        />
        <Mistake>Changing two conditions at once in the investigation. Change only one factor at a time and keep the others the same (control variables), or you cannot tell what caused the change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Wilting, guttation and the transport of food',
    content: slide(
      <>
        <Rule>Wilting happens when a plant loses water faster than the roots can take it up, so the cells lose turgor and the plant droops. Guttation is the loss of liquid water, not vapour, from the edges of leaves at night when the soil is wet and the air is humid. Translocation is the movement of manufactured food (sucrose) in the phloem from the leaves to the roots, fruits and growing tips.</Rule>
        <InfoTable
          cols={[{ title: 'Process', w: 26 }, { title: 'What happens', w: 48 }, { title: 'Tissue', w: 26 }]}
          rows={[
            ['Wilting', 'cells lose turgor, plant droops', 'parenchyma'],
            ['Guttation', 'water drops at leaf edges\nat night', 'xylem'],
            ['Translocation', 'sucrose moves from leaves\nto other parts', 'phloem'],
          ]}
          aria="A table of three processes. Wilting: cells lose turgor and the plant droops, in the parenchyma. Guttation: water drops form at leaf edges at night, from the xylem. Translocation: sucrose moves from the leaves to other parts, in the phloem."
        />
        <Worked
          title="Explain what you see"
          steps={[
            'A plant on a hot, windy day droops by noon: transpiration is faster than uptake, so it wilts.',
            'The same plant looks fresh the next morning after the cool night and watering, because turgor returns.',
            'Sugar made in the leaves travels down the phloem to the roots, where it is stored as starch.',
          ]}
        />
        <Mistake>Mixing up transpiration and translocation. Transpiration is the loss of water vapour through the stomata, and translocation is the movement of food in the phloem.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How do mineral ions enter root hairs?</>,
          <>Through which structures does water vapour leave the leaf?</>,
          <>Name two factors that increase the rate of transpiration.</>,
          <>A bubble moves 18 mm in 6 minutes. What is the rate?</>,
        ]}
        answers={[
          <>By active transport.</>,
          <>The stomata.</>,
          <>For example higher temperature and wind.</>,
          <>18 ÷ 6 = {18 / 6} mm per minute.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How does water enter the cells of a root hair?",
    options: ["By active transport", "By photosynthesis", "By osmosis", "By transpiration"],
    answer: "By osmosis",
    explanation: "Soil water has a higher water potential than the cell sap.",
  },
  {
    prompt: "How do mineral ions enter root hairs?",
    options: ["By active transport", "By osmosis only", "By transpiration", "By evaporation"],
    answer: "By active transport",
    explanation: "Active transport needs energy from respiration.",
  },
  {
    prompt: "Why does waterlogged soil slow down the uptake of minerals?",
    options: ["The soil has far too many minerals", "The roots grow far too fast", "The leaves make a lot less sugar", "Little air stops respiration and energy"],
    answer: "Little air stops respiration and energy",
    explanation: "Active transport needs energy.",
  },
  {
    prompt: "Why do root hairs help a plant?",
    options: ["They make the root green", "They give a large surface area for uptake", "They store large amounts of sugar", "They carry water to the leaves"],
    answer: "They give a large surface area for uptake",
    explanation: "More surface means more uptake each minute.",
  },
  {
    prompt: "What is transpiration?",
    options: ["The movement of sugar in the phloem", "The loss of water vapour from the leaves", "The uptake of ions by roots", "The growth of the root tip"],
    answer: "The loss of water vapour from the leaves",
    explanation: "Most water vapour leaves through the stomata.",
  },
  {
    prompt: "Through which structures does most water vapour leave a leaf?",
    options: ["The cuticle", "The root hairs", "The phloem", "The stomata"],
    answer: "The stomata",
    explanation: "Stomata are pores controlled by guard cells.",
  },
  {
    prompt: "What do the guard cells do?",
    options: ["Open and close the stomata", "Make sucrose", "Absorb minerals", "Strengthen the stem"],
    answer: "Open and close the stomata",
    explanation: "They control gas exchange and water loss.",
  },
  {
    prompt: "How does a waxy cuticle help a leaf?",
    options: ["It increases the water loss a lot", "It makes food for the plant", "It cuts water loss from the surface", "It absorbs water from the soil"],
    answer: "It cuts water loss from the surface",
    explanation: "The cuticle is waterproof.",
  },
  {
    prompt: "What pulls water up the xylem to the leaves?",
    options: ["A heart in the stem of it", "Sugar in the roots of it", "The cuticle of the leaf", "Water lost from the leaves"],
    answer: "Water lost from the leaves",
    explanation: "Transpiration pulls a continuous column of water upwards.",
  },
  {
    prompt: "Which condition increases the rate of transpiration?",
    options: ["High humidity", "Wind", "Darkness", "Cold, still air"],
    answer: "Wind",
    explanation: "Wind blows away the humid air at the leaf surface.",
  },
  {
    prompt: "Which condition decreases the rate of transpiration?",
    options: ["High humidity", "High temperature", "Wind", "Bright light"],
    answer: "High humidity",
    explanation: "There is less difference in water vapour between leaf and air.",
  },
  {
    prompt: "A potometer bubble moves 12 mm in 6 minutes. What is the rate?",
    options: ["6 mm per minute", "72 mm per minute", "2 mm per minute", "0,5 mm per minute"],
    answer: "2 mm per minute",
    explanation: "12 / 6 = 2 mm per minute.",
  },
  {
    prompt: "In still air the rate is 2 mm/min and with a fan it is 4 mm/min. What is the percentage change?",
    options: ["+50%", "+200%", "+100%", "-50%"],
    answer: "+100%",
    explanation: "(4 - 2) / 2 x 100 = +100%.",
  },
  {
    prompt: "What is translocation?",
    options: ["Food moving in the phloem", "The loss of water vapour from leaves", "The uptake of ions by the roots", "The splitting of cells in the cambium"],
    answer: "Food moving in the phloem",
    explanation: "Sucrose moves from the leaves to the roots, fruits and growing tips.",
  },
];

const PlantsWaterTranspiration = () => (
  <CapsSubjectTopic
    title="Support and Transport in Plants 2: Water Uptake and Transpiration"
    subtitle="Uptake of water and minerals, the path to the leaf, transpiration and its factors, wilting, guttation and translocation"
    learnSteps={learnSteps}
    task="gr10-plants-water-transpiration-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default PlantsWaterTranspiration;
