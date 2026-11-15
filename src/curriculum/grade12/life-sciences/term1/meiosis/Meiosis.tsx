'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import PunnettSquare from '@/components/subjects/PunnettSquare';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Meiosis halves the chromosome number',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Meiosis is a reduction division that produces haploid gametes from a diploid parent cell. This matters
          because fertilisation restores the diploid chromosome number in the zygote.
        </p>
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Reduction division</p>
          <p className="text-slate-600 mt-1">
            If chromosome number were not halved before fertilisation, the chromosome number would double in every
            generation.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Meiosis I separates homologous chromosomes',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The first meiotic division separates homologous pairs. Each daughter cell becomes haploid, although every
          chromosome still consists of two chromatids.
        </p>
        <ProcessFlow
          title="Stages of meiosis I"
          direction="vertical"
          steps={[
            {
              label: 'Prophase I',
              icon: '🧬',
              description: 'Pairing and crossing over',
              detail: 'Homologous chromosomes pair up and crossing over may exchange DNA between chromatids.',
            },
            {
              label: 'Metaphase I',
              icon: '📏',
              description: 'Pairs line up',
              detail: 'Homologous chromosome pairs line up at the equator of the cell.',
            },
            {
              label: 'Anaphase I',
              icon: '↔️',
              description: 'Homologues separate',
              detail: 'One chromosome from each pair moves to each pole while sister chromatids stay joined.',
            },
            {
              label: 'Telophase I',
              icon: '🧫',
              description: 'Two haploid cells form',
              detail: 'Cytokinesis produces two cells with half the original chromosome number.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Meiosis II separates sister chromatids',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The second division is similar to mitosis because sister chromatids finally separate. The final result is
          four genetically different haploid cells.
        </p>
        <ProcessFlow
          title="Stages of meiosis II"
          direction="vertical"
          steps={[
            {
              label: 'Prophase II',
              icon: '🔄',
              description: 'Spindle reforms',
              detail: 'The spindle apparatus forms again in each haploid cell.',
            },
            {
              label: 'Metaphase II',
              icon: '📍',
              description: 'Chromosomes line up singly',
              detail: 'Chromosomes arrange at the equator one by one, not in homologous pairs.',
            },
            {
              label: 'Anaphase II',
              icon: '➡️',
              description: 'Chromatids separate',
              detail: 'Centromeres split and sister chromatids move to opposite poles.',
            },
            {
              label: 'Telophase II',
              icon: '🎯',
              description: 'Four gametes result',
              detail: 'Cytokinesis produces four haploid daughter cells that are usually genetically different.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Genetic Variation: Punnett Square',
    content: (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Drag the alleles to explore monohybrid crosses. Observe the 3:1 phenotype ratio and 1:2:1 genotype ratio for a heterozygous × heterozygous cross.
        </p>
        <PunnettSquare trait="Eye colour" dominant="Brown" recessive="Blue" />
      </div>
    ),
  },
  {
    title: 'Meiosis creates variation and can go wrong',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Meiosis increases variation and explains why offspring are genetically different. It can also produce errors
          if chromosomes fail to separate correctly.
        </p>
        <ClassificationTree
          title="Important outcomes of meiosis"
          root={{
            label: 'Meiosis outcomes',
            children: [
              {
                label: 'Genetic variation',
                children: [
                  { label: 'Crossing over', description: 'Exchanges DNA between homologous chromatids in prophase I.' },
                  { label: 'Independent assortment', description: 'Different combinations of maternal and paternal chromosomes enter gametes.' },
                  { label: 'Random fertilisation', description: 'Any sperm can fuse with any ovum, increasing combinations further.' },
                ],
              },
              {
                label: 'Possible errors',
                children: [
                  { label: 'Non-disjunction', description: 'Chromosomes or chromatids fail to separate, creating abnormal chromosome numbers.' },
                ],
              },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Be precise about what separates: homologous chromosomes in anaphase I, sister chromatids in anaphase II.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "meiosis-1",
    "question": "The chromosome number is halved during meiosis so that:",
    "options": [
      "All body cells remain diploid",
      "Fertilisation can restore the diploid number",
      "DNA replication is avoided completely",
      "Proteins can be made faster"
    ],
    "answer": 1,
    "explanation": "Gametes must be haploid so that fertilisation restores the normal diploid chromosome number."
  },
  {
    "id": "meiosis-2",
    "question": "Crossing over usually occurs during:",
    "options": [
      "Prophase I",
      "Metaphase II",
      "Anaphase II",
      "Telophase I"
    ],
    "answer": 0,
    "explanation": "Homologous chromosomes pair up in prophase I, allowing crossing over between chromatids."
  },
  {
    "id": "meiosis-3",
    "question": "Which structures separate during anaphase I?",
    "options": [
      "Sister chromatids",
      "Homologous chromosomes",
      "Genes",
      "Centrioles"
    ],
    "answer": 1,
    "explanation": "In meiosis I, homologous chromosomes move to opposite poles while sister chromatids stay together."
  },
  {
    "id": "meiosis-4",
    "question": "Which structures separate during anaphase II?",
    "options": [
      "Homologous chromosomes",
      "Entire nuclei",
      "Sister chromatids",
      "Cell walls"
    ],
    "answer": 2,
    "explanation": "Meiosis II separates the sister chromatids of each chromosome."
  },
  {
    "id": "meiosis-5",
    "question": "How many haploid cells are produced from one diploid cell after meiosis?",
    "options": [
      "Two identical cells",
      "Two different cells",
      "Four different cells",
      "Four identical cells"
    ],
    "answer": 2,
    "explanation": "Meiosis produces four haploid daughter cells that are usually genetically different."
  },
  {
    "id": "meiosis-6",
    "question": "Which process in meiosis increases genetic variation?",
    "options": ['Binary fission of the parent cell into two cells', 'Independent assortment of homologous chromosomes', 'Budding from the parent organism', 'Diffusion across the cell membrane'],
    "answer": 1,
    "explanation": "Independent assortment changes the combinations of maternal and paternal chromosomes that enter gametes."
  },
  {
    "id": "meiosis-7",
    "question": "Non-disjunction refers to:",
    "options": ['Chromosomes failing to separate correctly', 'DNA being copied twice in the cell before division', 'A gamete fusing with a zygote', 'The loss of the cell membrane'],
    "answer": 0,
    "explanation": "Non-disjunction happens when chromosomes or chromatids fail to move to opposite poles."
  },
  {
    "id": "meiosis-8",
    "question": "A key difference between meiosis and mitosis is that meiosis:",
    "options": [
      "Occurs only in bacteria",
      "Produces gametes and genetic variation",
      "Produces two identical diploid cells only",
      "Never involves DNA replication"
    ],
    "answer": 1,
    "explanation": "Meiosis forms haploid gametes and generates variation, whereas mitosis usually makes identical body cells."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Meiosis = () => (
  <CapsSubjectTopic
    title="Meiosis"
    subtitle="Reduction division, chromosome behaviour and genetic variation"
    learnSteps={learnSteps}
    task="gr12-meiosis-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default Meiosis;
