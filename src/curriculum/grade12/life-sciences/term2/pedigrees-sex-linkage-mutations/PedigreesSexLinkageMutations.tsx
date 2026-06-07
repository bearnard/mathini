'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import PunnettSquare from '@/components/subjects/PunnettSquare';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ls/term2/pedigrees-sex-linkage-mutations/diagram.webp", alt: "Basic pedigree conventions" },
    title: 'Pedigrees show inheritance across generations',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Pedigree diagrams use standard symbols to show how a trait appears in a family. A careful reading of the
          diagram helps learners decide whether a trait is dominant, recessive or sex-linked.
        </p>
        <ClassificationTree
          title="Basic pedigree conventions"
          root={{
            label: 'Pedigree symbols',
            children: [
              { label: 'Square', example: 'Male', description: 'Represents a male individual.' },
              { label: 'Circle', example: 'Female', description: 'Represents a female individual.' },
              { label: 'Shaded symbol', description: 'Shows an affected individual expressing the trait.' },
              { label: 'Half-shaded / noted carrier', description: 'May show a carrier in some diagrams.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Monohybrid Cross Explorer',
    content: (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Drag the alleles to explore monohybrid crosses. Observe the 3:1 phenotype ratio and 1:2:1 genotype ratio for a heterozygous × heterozygous cross.
        </p>
        <PunnettSquare trait="Autosomal trait" dominant="Unaffected" recessive="Affected" lockedParent1={['A','a']} lockedParent2={['A','a']} />
      </div>
    ),
  },
  {
    title: 'Sex-linked traits are often found on the X chromosome',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Because the X chromosome carries many more genes than the Y chromosome, many sex-linked conditions are
          X-linked. Males are more likely to show recessive X-linked traits because they have only one X chromosome.
        </p>
        <ClassificationTree
          title="Patterns in X-linked inheritance"
          root={{
            label: 'X-linked recessive traits',
            children: [
              { label: 'Male (XY)', description: 'A single recessive allele on the X chromosome is expressed.' },
              { label: 'Female carrier (XᴴXʰ)', description: 'Carries one affected allele but usually does not show the disorder.' },
              { label: 'Affected female (XʰXʰ)', description: 'Needs two recessive affected alleles to express the trait.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Carriers and probabilities matter in pedigree questions',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Solving pedigree questions means moving from the diagram to possible genotypes and then to probabilities for
          future children.
        </p>
        <ProcessFlow
          title="How to analyse a pedigree"
          steps={[
            {
              label: 'Identify affected people',
              icon: '👀',
              description: 'Look for the pattern',
              detail: 'Check which generations and which sexes show the trait.',
            },
            {
              label: 'Decide the inheritance type',
              icon: '🧩',
              description: 'Dominant, recessive or sex-linked',
              detail: 'Use the pattern to infer which inheritance model best fits the pedigree.',
            },
            {
              label: 'Assign genotypes',
              icon: '🔤',
              description: 'Label each family member',
              detail: 'Use known affected individuals to work out possible genotypes for parents and offspring.',
            },
            {
              label: 'Calculate probability',
              icon: '📊',
              description: 'Predict the next generation',
              detail: 'Use the parental genotypes to work out the chance of affected sons, daughters or carriers.',
            },
          ]}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Carrier</p>
          <p className="text-slate-600 mt-1">
            A carrier has the allele for a recessive disorder but does not show the condition because a dominant normal
            allele masks it.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Mutations create new alleles and possible disorders',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Mutations are permanent changes in DNA. They may happen spontaneously or be caused by mutagens such as
          radiation and some chemicals.
        </p>
        <ProcessFlow
          title="Why inherited mutations matter"
          steps={[
            {
              label: 'DNA changes',
              icon: '🧬',
              description: 'A mutation occurs',
              detail: 'A base sequence changes, creating a new allele.',
            },
            {
              label: 'Gamete affected',
              icon: '🥚',
              description: 'The change enters the germ line',
              detail: 'Only mutations in gametes or gamete-forming cells can be passed to offspring.',
            },
            {
              label: 'Offspring inherit',
              icon: '👶',
              description: 'The allele appears in a family',
              detail: 'The new allele may then show up in pedigrees and influence phenotype.',
            },
          ]}
        />
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "pedigrees-sex-linkage-mutations-1",
    "question": "In a pedigree diagram, a circle represents a:",
    "options": [
      "Male",
      "Female",
      "Carrier only",
      "Mutation"
    ],
    "answer": 1,
    "explanation": "Pedigree conventions use circles for females and squares for males."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-2",
    "question": "Haemophilia is commonly used as an example of a:",
    "options": [
      "Y-linked dominant trait",
      "X-linked recessive trait",
      "Polygenic trait",
      "Mitochondrial trait"
    ],
    "answer": 1,
    "explanation": "In CAPS Life Sciences, haemophilia is treated as an X-linked recessive disorder."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-3",
    "question": "Why are males more likely to show an X-linked recessive disorder?",
    "options": [
      "They have two X chromosomes",
      "They inherit only a Y chromosome",
      "They have only one X chromosome",
      "They cannot inherit recessive alleles"
    ],
    "answer": 2,
    "explanation": "A male has one X chromosome, so a recessive allele on that X is expressed."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-4",
    "question": "A female who has one normal allele and one recessive haemophilia allele is described as a:",
    "options": [
      "Mutant only",
      "Carrier",
      "Homozygous dominant",
      "Normal male"
    ],
    "answer": 1,
    "explanation": "She can pass the affected allele on even if she does not show the disorder herself."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-5",
    "question": "If a carrier mother and a normal father have sons, what is the probability that a son will inherit the affected X chromosome?",
    "options": [
      "0%",
      "25%",
      "50%",
      "100%"
    ],
    "answer": 2,
    "explanation": "A carrier mother has a 50% chance of passing the affected X chromosome to any child."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-6",
    "question": "A mutation can be inherited only if it occurs in a:",
    "options": [
      "Skin cell",
      "Gamete or gamete-forming cell",
      "Muscle cell",
      "Red blood cell"
    ],
    "answer": 1,
    "explanation": "Only mutations in the germ line can be passed to offspring."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-7",
    "question": "The main purpose of a pedigree diagram is to:",
    "options": [
      "Show the stages of meiosis",
      "Track the inheritance of a trait through a family",
      "Compare ecosystems",
      "Explain protein synthesis"
    ],
    "answer": 1,
    "explanation": "Pedigrees help biologists trace how characteristics are inherited across generations."
  },
  {
    "id": "pedigrees-sex-linkage-mutations-8",
    "question": "Mutagens are agents that can:",
    "options": [
      "Slow down digestion only",
      "Cause changes in DNA",
      "Prevent fertilisation completely",
      "Destroy all chromosomes"
    ],
    "answer": 1,
    "explanation": "Mutagens such as radiation and some chemicals can increase the rate of mutation."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PedigreesSexLinkageMutations = () => (
  <CapsSubjectTopic
    title="Pedigrees, Sex Linkage and Mutations"
    subtitle="Pedigree analysis, X-linked inheritance and mutation effects"
    learnSteps={learnSteps}
    task="gr12-pedigrees-sex-linkage-mutations-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default PedigreesSexLinkageMutations;
