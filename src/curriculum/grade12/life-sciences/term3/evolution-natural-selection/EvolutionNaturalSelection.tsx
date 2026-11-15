'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Evolution explains change in populations over time',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Evolution describes changes in inherited characteristics across generations in a population. Individual
          organisms do not evolve because they need to; populations change as some inherited traits become more common.
        </p>
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Population, not individual</p>
          <p className="text-slate-600 mt-1">
            Natural selection acts on individuals, but evolution is measured as a change in the population over time.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Darwin’s theory of natural selection is evidence-based',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Darwin explained evolution through heritable variation and differential survival. The environment selects for
          phenotypes that improve survival and reproduction.
        </p>
        <ProcessFlow
          title="Sequence of natural selection"
          steps={[
            {
              label: 'Variation exists',
              icon: '🧬',
              description: 'Individuals differ',
              detail: 'Members of a population show inherited differences in their traits.',
            },
            {
              label: 'Overproduction',
              icon: '🌱',
              description: 'More offspring are born than survive',
              detail: 'Populations produce more offspring than the environment can support.',
            },
            {
              label: 'Competition',
              icon: '⚔️',
              description: 'Resources are limited',
              detail: 'Individuals compete for food, shelter, mates and other resources.',
            },
            {
              label: 'Selection',
              icon: '🏅',
              description: 'Favourable phenotypes survive',
              detail: 'Individuals with advantageous inherited traits are more likely to survive and reproduce.',
            },
            {
              label: 'Evolution',
              icon: '📈',
              description: 'Trait frequency changes',
              detail: 'The favourable alleles become more common over many generations.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Lamarckism differs from natural selection',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          CAPS often asks learners to compare Lamarck’s explanation with Darwin’s. The key difference is whether the
          trait is acquired during life or selected because it is inherited.
        </p>
        <ClassificationTree
          title="Explaining giraffe neck evolution"
          root={{
            label: 'Two theories',
            children: [
              { label: 'Lamarckism', description: 'Giraffes stretched their necks and passed the acquired change to offspring.' },
              { label: 'Darwinism', description: 'Some giraffes were born with slightly longer necks, survived better and left more offspring.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Speciation and evidence support evolutionary theory',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Evolution is supported by several lines of evidence, and speciation explains how new species arise when gene
          flow is interrupted.
        </p>
        <ClassificationTree
          title="Evidence supporting evolution"
          root={{
            label: 'Evolutionary evidence',
            children: [
              { label: 'Fossil record', description: 'Shows organisms from the past and how forms changed over time.' },
              { label: 'Homologous structures', description: 'Reveal common ancestry through similar underlying anatomy.' },
              { label: 'Biogeography', description: 'Explains distribution patterns of organisms on Earth.' },
              { label: 'Molecular evidence', description: 'DNA and protein similarities support relatedness.' },
                          ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When explaining speciation, mention isolation, different selection pressures and the eventual inability to
            interbreed successfully.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Two models of how fast species change",
    content: (
      <div className="space-y-4">
        <GapRule>{"Gradualism sees species changing slowly and steadily. Punctuated equilibrium sees long calm periods broken by brief bursts of fast change, which fits the sudden jumps found in many fossil records."}</GapRule>
        <GapWorked title={"Compare"} steps={["Gradualism: smooth, slow change.", "Punctuated equilibrium: stasis, then a rapid burst.", "Fossil gaps may reflect the bursts."]} />
        <GapMistake>{"Calling a model a piece of evidence."}</GapMistake>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "evolution-natural-selection-1",
    "question": "Natural selection acts directly on an organism’s:",
    "options": [
      "Phenotype",
      "Age",
      "Habitat",
      "Chromosome number only"
    ],
    "answer": 0,
    "explanation": "Selection favours phenotypes that help survival and reproduction in a particular environment."
  },
  {
    "id": "evolution-natural-selection-2",
    "question": "A key idea in Darwin’s theory is that organisms in a population:",
    "options": [
      "Are identical to one another",
      "Show heritable variation",
      "Do not compete",
      "Always acquire useful traits during life"
    ],
    "answer": 1,
    "explanation": "Natural selection requires variation between individuals in a population."
  },
  {
    "id": "evolution-natural-selection-3",
    "question": "Lamarck suggested that giraffes evolved long necks because:",
    "options": ['Long-necked giraffes left more offspring in each generation', 'They stretched their necks and passed the acquired trait on', 'Mutations were directed by choice', 'They had no competition for food'],
    "answer": 1,
    "explanation": "Lamarck argued that use and disuse produced acquired characteristics that were inherited."
  },
  {
    "id": "evolution-natural-selection-4",
    "question": "Speciation is most likely when populations become:",
    "options": [
      "Genetically isolated",
      "Fully mixed in each generation",
      "Identical in their traits",
      "Unable to reproduce at all"
    ],
    "answer": 0,
    "explanation": "Isolation prevents gene flow and allows populations to diverge over time."
  },
  {
    "id": "evolution-natural-selection-5",
    "question": "Which is evidence for evolution?",
    "options": [
      "Astrology charts",
      "Fossil records",
      "Weather forecasts",
      "Daily timetables"
    ],
    "answer": 1,
    "explanation": "Fossils provide historical evidence of organisms that lived in the past and how forms changed."
  },
  {
    "id": "evolution-natural-selection-6",
    "question": "Punctuated equilibrium proposes that evolution often occurs as:",
    "options": ['A perfectly constant rate of change from one generation to the next one', 'Within one generation of organisms', 'Long periods of stability interrupted by short bursts of rapid change', 'No change over millions of years'],
    "answer": 2,
    "explanation": "Punctuated equilibrium suggests evolutionary change is not always gradual and steady."
  },
  {
    "id": "evolution-natural-selection-7",
    "question": "Antibiotic resistance in bacteria is a modern example of:",
    "options": [
      "Natural selection",
      "Photosynthesis",
      "Meiosis only",
      "Predation without inheritance"
    ],
    "answer": 0,
    "explanation": "Resistant bacteria survive treatment and reproduce, increasing resistance in the population."
  },
  {
    "id": "evolution-natural-selection-8",
    "question": "Homologous structures support evolution because they suggest:",
    "options": [
      "Common ancestry",
      "No genetic relationship",
      "Organisms are identical",
      "All species evolved recently"
    ],
    "answer": 0,
    "explanation": "Similar underlying structures in different organisms point to inheritance from a common ancestor."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const EvolutionNaturalSelection = () => (
  <CapsSubjectTopic
    title="Evolution by Natural Selection"
    subtitle="Darwinism, Lamarckism, variation, selection and speciation"
    learnSteps={learnSteps}
    task="gr12-evolution-natural-selection-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default EvolutionNaturalSelection;
