'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import PunnettSquare from '@/components/subjects/PunnettSquare';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Paper 2 starts with strong molecular foundations',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Learners need secure knowledge of DNA structure, replication, transcription and translation before tackling
          genetics and evolution questions that build on these ideas.
        </p>
        <ProcessFlow
          title="From DNA to protein"
          steps={[
            {
              label: 'DNA stores the code',
              icon: '🧬',
              description: 'Genes hold information',
              detail: 'The base sequence in DNA determines the genetic instructions for proteins.',
            },
            {
              label: 'Replication copies DNA',
              icon: '🔁',
              description: 'Needed before cell division',
              detail: 'Semi-conservative replication ensures each daughter cell receives the same information.',
            },
            {
              label: 'Transcription makes mRNA',
              icon: '✍️',
              description: 'A gene is copied',
              detail: 'An mRNA message is produced from a DNA template strand.',
            },
            {
              label: 'Translation builds protein',
              icon: '🏗️',
              description: 'Codons guide amino-acid order',
              detail: 'The ribosome reads mRNA codons and joins amino acids into a polypeptide.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Meiosis and genetics are tightly connected',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Meiosis explains why gametes are haploid and why allele combinations vary. It provides the biological basis
          for the ratios seen in genetic crosses.
        </p>
        <ProcessFlow
          title="Linking meiosis to inheritance"
          steps={[
            {
              label: 'Homologous pairs separate',
              icon: '↔️',
              description: 'Alleles segregate',
              detail: 'During meiosis I, homologous chromosomes move apart so each gamete gets one allele of each gene pair.',
            },
            {
              label: 'Independent assortment',
              icon: '🎲',
              description: 'Different combinations form',
              detail: 'The arrangement of pairs at metaphase I creates varied gamete combinations.',
            },
            {
              label: 'Crossing over',
              icon: '🔀',
              description: 'Chromatids exchange segments',
              detail: 'Crossing over produces new allele combinations on chromosomes.',
            },
            {
              label: 'Fertilisation',
              icon: '🔬',
              description: 'Gametes combine randomly',
              detail: 'Random union of gametes produces many possible offspring genotypes.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Evolution questions require evidence and reasoning',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Paper 2 evolution questions reward explanations that combine theory with evidence. Learners should connect
          natural selection, speciation and human evolution to specific supporting evidence.
        </p>
        <ClassificationTree
          title="Paper 2 evolution toolkit"
          root={{
            label: 'Evolution revision',
            children: [
              { label: 'Natural selection', description: 'Explain how advantageous inherited traits become more common.' },
              { label: 'Speciation', description: 'Use isolation and divergence to explain formation of new species.' },
              { label: 'Evidence', example: 'Fossils, homologous structures, DNA', description: 'Support claims with scientific evidence.' },
              { label: 'Human evolution', description: 'Use fossils, bipedal features and Out of Africa evidence.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Genetics Revision: Punnett Square',
    content: (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Drag the alleles to explore monohybrid crosses. Observe the 3:1 phenotype ratio and 1:2:1 genotype ratio for a heterozygous × heterozygous cross.
        </p>
        <PunnettSquare trait="Flower colour" dominant="Purple" recessive="White" />
      </div>
    ),
  },
  {
    title: 'Write full Paper 2 answers with scientific language',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Scientific vocabulary matters because Paper 2 often rewards precise terminology in paragraph and process
          questions.
        </p>
        <ClassificationTree
          title="Vocabulary that often earns marks"
          root={{
            label: 'High-value terms',
            children: [
              { label: 'Homologous chromosomes', description: 'Paired chromosomes carrying the same genes.' },
              { label: 'Codon', description: 'A triplet of bases on mRNA coding for one amino acid.' },
              { label: 'Phenotype', description: 'The observable expression of a genotype.' },
              { label: 'Mutation', description: 'A permanent change in the DNA base sequence.' },
              { label: 'Common ancestor', description: 'An ancestral population shared by related species.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When asked to explain a process, write in sequence. Terms earn marks only when they are used accurately in
            the correct biological order.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "paper2-genetics-evolution-consolidation-1",
    "question": "Which base occurs in RNA instead of thymine?",
    "options": [
      "Adenine",
      "Guanine",
      "Uracil",
      "Cytosine"
    ],
    "answer": 2,
    "explanation": "RNA contains uracil (U) instead of thymine (T)."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-2",
    "question": "Crossing over occurs during:",
    "options": [
      "Prophase I of meiosis",
      "Metaphase II of meiosis",
      "Mitosis cytokinesis",
      "Fertilisation"
    ],
    "answer": 0,
    "explanation": "Crossing over takes place when homologous chromosomes pair in prophase I."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-3",
    "question": "A heterozygous genotype contains:",
    "options": [
      "Two identical alleles",
      "Two different alleles",
      "No chromosomes",
      "Only dominant alleles"
    ],
    "answer": 1,
    "explanation": "Heterozygous means an individual has two different alleles for a gene."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-4",
    "question": "A pedigree is especially useful for studying:",
    "options": [
      "Cell organelles",
      "Family inheritance patterns",
      "Ecosystem energy flow",
      "Muscle contraction"
    ],
    "answer": 1,
    "explanation": "Pedigree diagrams trace how traits are inherited through families."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-5",
    "question": "Natural selection leads to evolution because advantageous traits are:",
    "options": ['Destroyed before reproduction can take place in the population', 'Passed on more often through successful reproduction', 'Ignored by the environment', 'Acquired after birth through effort'],
    "answer": 1,
    "explanation": "Individuals with favourable inherited traits tend to leave more offspring, increasing those traits over time."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-6",
    "question": "The Out of Africa hypothesis relates to the origin of:",
    "options": [
      "All reptiles",
      "Modern humans",
      "All flowering plants",
      "Bacteria only"
    ],
    "answer": 1,
    "explanation": "It proposes that modern Homo sapiens evolved in Africa before spreading elsewhere."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-7",
    "question": "A mutation that changes a DNA base sequence may create a new:",
    "options": [
      "Organ system",
      "Allele",
      "Ecosystem",
      "Hormone gland"
    ],
    "answer": 1,
    "explanation": "A mutation can produce a new version of a gene, known as an allele."
  },
  {
    "id": "paper2-genetics-evolution-consolidation-8",
    "question": "The structure on mRNA that determines one amino acid during translation is a:",
    "options": [
      "Codon",
      "Centromere",
      "Chromatid",
      "Follicle"
    ],
    "answer": 0,
    "explanation": "A codon is a triplet of bases on mRNA that codes for one amino acid."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Paper2GeneticsEvolutionConsolidation = () => (
  <CapsSubjectTopic
    title="Paper 2 — Genetics and Evolution Consolidation"
    subtitle="DNA, meiosis, genetics, evolution and human evolution revision"
    learnSteps={learnSteps}
    task="gr12-paper2-genetics-evolution-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default Paper2GeneticsEvolutionConsolidation;
