'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import PunnettSquare from '@/components/subjects/PunnettSquare';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ls/term2/genetics-inheritance/diagram.webp", alt: "Key inheritance terms" },
    title: 'Genes and alleles determine inherited traits',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Inheritance questions begin with vocabulary. Learners must distinguish between the information carried in
          DNA and the way that information is expressed in the organism.
        </p>
        <ClassificationTree
          title="Key inheritance terms"
          root={{
            label: 'Inheritance language',
            children: [
              { label: 'Gene', description: 'A section of DNA that codes for a trait or protein.' },
              { label: 'Allele', description: 'Different forms of the same gene.' },
              { label: 'Genotype', description: 'The allele combination an organism has.' },
              { label: 'Phenotype', description: 'The observable expression of the genotype.' },
              { label: 'Homozygous / heterozygous', description: 'Describes whether the two alleles are the same or different.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Interactive Punnett Square',
    content: (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Drag the alleles to explore monohybrid crosses. Observe the 3:1 phenotype ratio and 1:2:1 genotype ratio for a heterozygous × heterozygous cross.
        </p>
        <PunnettSquare trait="Seed colour" dominant="Yellow" recessive="Green" />
      </div>
    ),
  },
  {
    title: 'Monohybrid crosses track one characteristic',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A monohybrid cross follows one trait at a time. CAPS learners must show parents, gametes, possible offspring
          and a clear conclusion about genotypes and phenotypes.
        </p>
        <ProcessFlow
          title="How to solve a monohybrid cross"
          steps={[
            {
              label: 'Choose symbols',
              icon: '🔤',
              description: 'Use clear allele letters',
              detail: 'Write a capital letter for the dominant allele and the corresponding lowercase letter for the recessive allele.',
            },
            {
              label: 'Write parent genotypes',
              icon: '👪',
              description: 'State each parent clearly',
              detail: 'Example: Tt × Tt for a heterozygous monohybrid cross.',
            },
            {
              label: 'Show gametes',
              icon: '🎲',
              description: 'One allele per gamete',
              detail: 'List the gametes each parent can produce after meiosis.',
            },
            {
              label: 'Complete Punnett square',
              icon: '⬜',
              description: 'Combine gametes',
              detail: 'Use the grid to identify all possible offspring genotypes and resulting phenotypes.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Ratios help interpret inheritance outcomes',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Expected ratios are probabilities, not guarantees for every small family. They become more reliable when the
          number of offspring is large.
        </p>
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Ratios for Aa × Aa</p>
          <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
            <li>Genotype ratio: 1 AA : 2 Aa : 1 aa</li>
            <li>Phenotype ratio: 3 dominant : 1 recessive</li>
            <li>These ratios describe probability, not certainty for a single family.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Not all inheritance is simple dominance',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Some traits require more than the simple dominant-recessive model. Learners should identify the pattern
          before deciding how to set up the genetic cross.
        </p>
        <ClassificationTree
          title="Beyond simple dominance"
          root={{
            label: 'Inheritance patterns',
            children: [
              { label: 'Complete dominance', description: 'One allele masks the effect of the other in the heterozygote.' },
              { label: 'Codominance', example: 'Blood group AB', description: 'Both alleles are fully expressed together.' },
              { label: 'Multiple alleles', example: 'ABO blood groups', description: 'More than two allele forms exist in the population.' },
              { label: 'Sex determination', example: 'XX and XY', description: 'The father’s sperm contributes either X or Y, determining the sex of the child.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Always identify whether the question is about complete dominance, codominance, multiple alleles or sex
            determination before drawing a Punnett square.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "genetics-inheritance-1",
    "question": "What is the term for two identical alleles for a characteristic?",
    "options": [
      "Heterozygous",
      "Homozygous",
      "Dominant",
      "Mutated"
    ],
    "answer": 1,
    "explanation": "Homozygous means the two alleles in the pair are the same."
  },
  {
    "id": "genetics-inheritance-2",
    "question": "An organism with the genotype Tt is:",
    "options": [
      "Homozygous dominant",
      "Homozygous recessive",
      "Heterozygous",
      "Asexual"
    ],
    "answer": 2,
    "explanation": "Tt has two different alleles, so the organism is heterozygous."
  },
  {
    "id": "genetics-inheritance-3",
    "question": "The observable characteristic of an organism is called its:",
    "options": [
      "Genotype",
      "Phenotype",
      "Chromosome",
      "Mutation"
    ],
    "answer": 1,
    "explanation": "The phenotype is the visible or measurable expression of the genotype."
  },
  {
    "id": "genetics-inheritance-4",
    "question": "When two heterozygous parents are crossed for a dominant-recessive trait, the expected phenotype ratio is usually:",
    "options": [
      "1:1",
      "3:1",
      "1:2:1",
      "9:3:3:1"
    ],
    "answer": 1,
    "explanation": "Aa × Aa usually gives a 3 dominant : 1 recessive phenotype ratio."
  },
  {
    "id": "genetics-inheritance-5",
    "question": "A monohybrid cross investigates:",
    "options": [
      "One characteristic",
      "Only sex-linked traits",
      "Only blood groups",
      "Two unrelated species"
    ],
    "answer": 0,
    "explanation": "Monohybrid crosses focus on the inheritance of one characteristic."
  },
  {
    "id": "genetics-inheritance-6",
    "question": "Which blood group demonstrates codominance?",
    "options": [
      "O",
      "A",
      "B",
      "AB"
    ],
    "answer": 3,
    "explanation": "In blood group AB, both A and B alleles are expressed together."
  },
  {
    "id": "genetics-inheritance-7",
    "question": "A mutation is best described as:",
    "options": [
      "Any normal cell division",
      "A permanent change in the DNA base sequence",
      "The pairing of homologous chromosomes only",
      "The exchange of gases"
    ],
    "answer": 1,
    "explanation": "Mutations are changes in DNA that can create new alleles."
  },
  {
    "id": "genetics-inheritance-8",
    "question": "In humans, the sex of the baby is determined by the:",
    "options": [
      "Mother only",
      "Father’s sperm cell",
      "Placenta",
      "Uterus lining"
    ],
    "answer": 1,
    "explanation": "The ovum always carries an X chromosome, while the sperm contributes either X or Y."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const GeneticsInheritance = () => (
  <CapsSubjectTopic
    title="Genetics and Inheritance"
    subtitle="Genes, alleles, monohybrid crosses and inheritance patterns"
    learnSteps={learnSteps}
    task="gr12-genetics-inheritance-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default GeneticsInheritance;
