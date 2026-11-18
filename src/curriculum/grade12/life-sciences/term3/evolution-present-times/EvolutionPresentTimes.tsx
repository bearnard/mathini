'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as g from '../../../../../components/diagrams/lifesci/gaps12';

// Numbers come from gaps12.ts (tested in gaps12.test.ts and g12LsGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const s0 = g.pct(g.resistantShare(0.005, 0.05, 0));
const s1 = g.pct(g.resistantShare(0.005, 0.05, 1));
const s2 = g.pct(g.resistantShare(0.005, 0.05, 2));
const s3 = g.pct(g.resistantShare(0.005, 0.05, 3));

export const learnSteps: LearnStep[] = [
  {
    title: 'Resistance to insecticides',
    content: slide(
      <>
        <Rule>Evolution is happening now. A few insects in a population may carry an allele that makes them resistant to an insecticide. When the insecticide is sprayed, most susceptible insects die and the resistant ones survive and reproduce. Their offspring inherit the allele, so the share of resistant insects rises with every spray.</Rule>
        <InfoTable
          cols={[{ title: 'Stage', w: 34 }, { title: 'Resistant insects (%)', w: 66 }]}
          rows={[
            ['Before any spray', g.dec(s0)],
            ['After spray 1', g.dec(s1)],
            ['After spray 2', g.dec(s2)],
            ['After spray 3', g.dec(s3)],
          ]}
          aria={`A table of the share of resistant insects: ${s0} percent before spraying, ${s1} percent after one spray, ${s2} percent after two sprays and ${s3} percent after three sprays, in an imaginary model in which 95 percent of susceptible insects die each time.`}
        />
        <Worked
          title="One round of selection (imaginary model)"
          steps={[
            'Start: 5 resistant insects in 1 000, which is 0,5%.',
            'A spray kills 95% of the susceptible ones, so 995 × 0,05 = about 50 survive, plus the 5 resistant ones: 5 of about 55, which is about 9%.',
            'After three sprays the survivors are almost all resistant: about 98%.',
          ]}
        />
        <Mistake>Saying that the insects choose to become resistant. The allele was already there; the insecticide only selected the insects that carried it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistance to antibiotics and antiretrovirals',
    content: slide(
      <>
        <Rule>Bacteria and viruses also evolve. Some bacteria that cause TB have alleles for resistance to an antibiotic. If a patient stops treatment early, the susceptible bacteria die and the resistant ones survive and multiply. HIV can become resistant to antiretroviral medicine if doses are missed. This is why patients must take the full course and take every dose at the right time.</Rule>
        <InfoTable
          cols={[{ title: 'Organism', w: 26 }, { title: 'What helps resistance to spread', w: 46 }, { title: 'How to prevent it', w: 28 }]}
          rows={[
            ['TB bacteria', 'Treatment stopped early,\nso resistant bacteria survive', 'Finish the course'],
            ['HIV', 'Doses are missed, so resistant\nvirus survives', 'Take every dose'],
          ]}
          aria="A table of medicine resistance. TB bacteria: treatment stopped early, so resistant bacteria survive; prevention is to finish the course. HIV: doses are missed, so resistant virus survives; prevention is to take every dose."
        />
        <Worked
          title="Explain with natural selection"
          steps={[
            'There is variation: a few bacteria are resistant.',
            'The antibiotic is a selection pressure: the susceptible bacteria die and the resistant ones survive.',
            'The survivors reproduce, so the next generation is mostly resistant. The patient must be treated with different medicines.',
          ]}
        />
        <Mistake>Believing that the patient’s body becomes resistant. It is the bacteria or the virus that become resistant.</Mistake>
      </>,
    ),
  },
  {
    title: 'Galapagos finches: beak size changes',
    content: slide(
      <>
        <Rule>On the Galapagos Islands, researchers measured the beaks of finches over many years. During a drought the small, soft seeds were eaten first, and the finches with deeper beaks could crack the large, hard seeds that were left, so they survived better. In the next generation the average beak was deeper. This is natural selection that can be measured within a few years.</Rule>
        <InfoTable
          cols={[{ title: 'Time', w: 40 }, { title: 'Mean beak depth (mm)', w: 60 }]}
          rows={[
            ['Before the drought', g.dec(g.BEAK.before)],
            ['After the drought', g.dec(g.BEAK.after)],
            ['Change', `+${g.dec(g.change(g.BEAK.before, g.BEAK.after))} mm`],
          ]}
          aria={`A table of mean beak depth of a finch population: ${g.BEAK.before} millimetres before the drought and ${g.BEAK.after} millimetres after, a change of ${g.change(g.BEAK.before, g.BEAK.after)} millimetres. The values are approximate.`}
        />
        <Worked
          title="Calculate the change (values are approximate)"
          steps={[
            `Change = ${g.dec(g.BEAK.after)} − ${g.dec(g.BEAK.before)} = ${g.dec(g.change(g.BEAK.before, g.BEAK.after))} mm.`,
            `Percentage change = ${g.dec(g.change(g.BEAK.before, g.BEAK.after))} ÷ ${g.dec(g.BEAK.before)} × 100 = ${g.dec(g.percentChange(g.BEAK.before, g.BEAK.after))}%.`,
            'The environment (the drought) selected the finches with deeper beaks, and the next generation inherited the feature.',
          ]}
        />
        <Mistake>Saying that the finches grew deeper beaks because they needed them. Variation in beak depth was already present, and the drought selected the deeper beaks.</Mistake>
      </>,
    ),
  },
  {
    title: 'An example of speciation by geographic isolation',
    content: slide(
      <>
        <Rule>Speciation by geographic isolation is shown by baobab trees: the African baobab and the baobabs of Madagascar descend from common ancestors, but they are separated by the sea and they became different species. The Galapagos finches are another example: finches from the mainland reached the islands, spread to different islands, and formed several species that differ in their beaks.</Rule>
        <InfoTable
          cols={[{ title: 'Example', w: 30 }, { title: 'Barrier', w: 28 }, { title: 'Result', w: 42 }]}
          rows={[
            ['Baobabs', 'The sea between Africa\nand Madagascar', 'Different baobab species'],
            ['Galapagos finches', 'Water between islands', 'Several finch species with\ndifferent beaks'],
          ]}
          aria="A table of two examples of speciation by geographic isolation. Baobabs: the sea between Africa and Madagascar, resulting in different baobab species. Galapagos finches: water between the islands, resulting in several finch species with different beaks."
        />
        <Worked
          title="Describe an example in an answer"
          steps={[
            'Name the example: baobab trees in Africa and Madagascar.',
            'Name the barrier: the sea separated the populations.',
            'State the result: over a long time they changed separately and formed different species.',
          ]}
        />
        <Mistake>Naming an example without the barrier. A full answer says what separated the populations and what the result was.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why does the share of resistant insects rise after each spray?</>,
          <>Why must a TB patient finish the full course of treatment?</>,
          <>What selected the finches with deeper beaks?</>,
          <>Give one example of speciation by geographic isolation.</>,
        ]}
        answers={[
          <>The susceptible insects die, and the resistant ones survive and reproduce.</>,
          <>Otherwise resistant bacteria survive and multiply.</>,
          <>The drought, which left only large, hard seeds.</>,
          <>For example baobabs in Africa and Madagascar, or Galapagos finches.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why does the share of resistant insects rise after each spray of an insecticide?",
    options: ["The insects choose to become resistant", "The insecticide changes their genes on purpose", "Susceptible insects die and resistant ones reproduce", "Resistant insects are killed first"],
    answer: "Susceptible insects die and resistant ones reproduce",
    explanation: "The insecticide is a selection pressure.",
  },
  {
    prompt: "Before any spray, 5 of 1 000 insects are resistant. What percentage is this?",
    options: ["0,5%", "5%", "50%", "0,05%"],
    answer: "0,5%",
    explanation: "5 / 1 000 x 100 = 0,5%.",
  },
  {
    prompt: "In the model, about how many resistant insects are present after one spray, out of roughly 55 survivors?",
    options: ["About 0,5%", "About 50%", "About 98%", "About 9%"],
    answer: "About 9%",
    explanation: "5 / 55 is about 9%.",
  },
  {
    prompt: "Where did the resistance allele in an insect population come from?",
    options: ["It was made by the insecticide", "It was already present in a few insects", "It was learned", "It was copied from the plants"],
    answer: "It was already present in a few insects",
    explanation: "Mutations gave variation before the spray.",
  },
  {
    prompt: "Why does a TB patient have to finish the whole course of treatment?",
    options: ["The medicine tastes bad", "Resistant bacteria could survive and multiply", "The bacteria need the medicine", "It makes the patient immune for life"],
    answer: "Resistant bacteria could survive and multiply",
    explanation: "Stopping early selects for resistant bacteria.",
  },
  {
    prompt: "What becomes resistant to an antibiotic?",
    options: ["The patient's body", "The medicine", "The doctor", "The bacteria"],
    answer: "The bacteria",
    explanation: "Bacteria with the resistance allele survive and reproduce.",
  },
  {
    prompt: "Why can missed doses of antiretroviral treatment be dangerous?",
    options: ["Resistant HIV can survive and spread", "They make the virus weaker", "They make the patient immune", "They cure the infection"],
    answer: "Resistant HIV can survive and spread",
    explanation: "Missed doses allow resistant virus to multiply.",
  },
  {
    prompt: "During a drought, which finches survived better on the Galapagos Islands?",
    options: ["Those with shallow beaks", "Those with the smallest bodies", "Those with deeper beaks", "Those without beaks"],
    answer: "Those with deeper beaks",
    explanation: "Only the large, hard seeds were left, and deep beaks could crack them.",
  },
  {
    prompt: "The mean beak depth rose from 9,2 mm to 9,7 mm. What is the change?",
    options: ["18,9 mm", "9,2 mm", "4,5 mm", "0,5 mm"],
    answer: "0,5 mm",
    explanation: "9,7 - 9,2 = 0,5 mm.",
  },
  {
    prompt: "What is the percentage change in beak depth from 9,2 mm to 9,7 mm, to two decimal places?",
    options: ["0,5%", "5,43%", "5,15%", "18,9%"],
    answer: "5,43%",
    explanation: "0,5 / 9,2 x 100 = 5,43%.",
  },
  {
    prompt: "What caused the change in average beak depth?",
    options: ["The drought selected the deeper beaks", "The finches grew deeper beaks because they wanted to", "The finches left the island", "The seeds changed colour"],
    answer: "The drought selected the deeper beaks",
    explanation: "The environment selected, and the next generation inherited the feature.",
  },
  {
    prompt: "Which example shows speciation by geographic isolation?",
    options: ["Dogs of different breeds", "Maize and teosinte", "Baobabs in Africa and Madagascar", "Moths on trees"],
    answer: "Baobabs in Africa and Madagascar",
    explanation: "The sea separated the populations.",
  },
  {
    prompt: "What separated the baobab populations of Africa and Madagascar?",
    options: ["A mountain range", "A desert", "The sea", "A road"],
    answer: "The sea",
    explanation: "The populations changed separately and formed different species.",
  },
  {
    prompt: "What do all the examples of present-day evolution have in common?",
    options: ["Variation, selection and inheritance", "There is no variation in them", "The organism chooses to change", "Changes within one lifetime only"],
    answer: "Variation, selection and inheritance",
    explanation: "These are the steps of natural selection.",
  },
];

const EvolutionPresentTimes = () => (
  <CapsSubjectTopic
    title="Evolution in Present Times"
    subtitle="Resistance to insecticides, antibiotics and antiretrovirals, Galapagos finch beaks and speciation by geographic isolation"
    learnSteps={learnSteps}
    task="gr12-evolution-present-times-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default EvolutionPresentTimes;
