'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import PunnettSquare from '@/components/subjects/PunnettSquare';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'DNA stores coded biological information',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          DNA is built from nucleotides containing deoxyribose sugar, a phosphate group and a nitrogenous base.
          Genes are short sections of DNA that code for proteins, while chromosomes are long DNA molecules packaged
          with proteins inside the nucleus.
        </p>
        <ClassificationTree
          title="Organisation of genetic material"
          root={{
            label: 'Nucleus',
            children: [
              {
                label: 'Chromosome',
                description: 'A tightly coiled DNA molecule associated with proteins.',
                children: [
                  {
                    label: 'DNA',
                    description: 'A double helix made of paired nucleotides.',
                    children: [
                      {
                        label: 'Gene',
                        example: 'Codes for a protein',
                        description: 'A specific base sequence with biological information.',
                      },
                    ],
                  },
                ],
              },
            ],
          }}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Complementary base pairing</p>
          <p className="text-slate-600 mt-1">
            In DNA, adenine pairs with thymine and cytosine pairs with guanine. This pairing rule is essential for
            both replication and transcription.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'From Genes to Traits: Punnett Square',
    content: (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Drag the alleles to explore monohybrid crosses. Observe the 3:1 phenotype ratio and 1:2:1 genotype ratio for a heterozygous × heterozygous cross.
        </p>
        <PunnettSquare trait="Blood group trait" dominant="Pigmented" recessive="Albino" lockedParent1={['A','a']} lockedParent2={['A','a']} />
      </div>
    ),
  },
  {
    title: 'Replication copies DNA before cell division',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          DNA replication happens before mitosis and meiosis so that each daughter cell receives a full set of
          genetic information. Each original strand acts as a template for a new complementary strand.
        </p>
        <ProcessFlow
          title="Steps of DNA replication"
          steps={[
            {
              label: 'Unwinding',
              icon: '🔓',
              description: 'The double helix opens',
              detail: 'Hydrogen bonds between bases break and the two DNA strands separate, exposing the bases.',
            },
            {
              label: 'Base pairing',
              icon: '🧩',
              description: 'Free nucleotides align',
              detail: 'Each exposed base attracts its complementary DNA nucleotide: A with T and C with G.',
            },
            {
              label: 'Joining',
              icon: '🔗',
              description: 'Sugar-phosphate bonds form',
              detail: 'The new nucleotides are joined into a continuous strand alongside each original template.',
            },
            {
              label: 'Semi-conservative result',
              icon: '🧬',
              description: 'Two identical DNA molecules form',
              detail: 'Each daughter DNA molecule contains one original strand and one newly synthesised strand.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Transcription produces an RNA message',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          During transcription, a gene unwinds and one DNA strand is used to build a complementary messenger RNA
          molecule in the nucleus. RNA uses uracil instead of thymine.
        </p>
        <ProcessFlow
          title="How transcription works"
          steps={[
            {
              label: 'DNA unwinds',
              icon: '🧵',
              description: 'The target gene opens',
              detail: 'Only the section of DNA containing the required gene unwinds for copying.',
            },
            {
              label: 'mRNA forms',
              icon: '✍️',
              description: 'RNA nucleotides pair up',
              detail: 'RNA nucleotides pair with the DNA template strand using A-U and C-G pairing.',
            },
            {
              label: 'Message leaves nucleus',
              icon: '🚪',
              description: 'mRNA moves to a ribosome',
              detail: 'The completed mRNA strand detaches and travels through a nuclear pore to the cytoplasm.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Translation assembles a protein',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Translation happens at the ribosome, where the mRNA code is read in triplets called codons. Transfer RNA
          carries specific amino acids so that the correct polypeptide can be assembled.
        </p>
        <ClassificationTree
          title="RNA molecules used in protein synthesis"
          root={{
            label: 'RNA',
            children: [
              {
                label: 'mRNA',
                example: 'Carries codons',
                description: 'Transports the copied DNA message from the nucleus to the ribosome.',
              },
              {
                label: 'tRNA',
                example: 'Carries anticodons',
                description: 'Brings the correct amino acid to the ribosome for each codon.',
              },
              {
                label: 'rRNA',
                example: 'Forms part of ribosomes',
                description: 'Helps create the ribosome where translation takes place.',
              },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When a mutation changes a DNA base sequence, it can change the mRNA codons and therefore the order of
            amino acids in the final protein.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "dna-protein-synthesis-1",
    "question": "Which sugar is found in DNA?",
    "options": [
      "Ribose",
      "Glucose",
      "Deoxyribose",
      "Sucrose"
    ],
    "answer": 2,
    "explanation": "DNA nucleotides contain deoxyribose sugar, while RNA nucleotides contain ribose."
  },
  {
    "id": "dna-protein-synthesis-2",
    "question": "Which nitrogenous base pairs with cytosine in DNA?",
    "options": [
      "Adenine",
      "Guanine",
      "Uracil",
      "Thymine"
    ],
    "answer": 1,
    "explanation": "Complementary base pairing in DNA is C-G and A-T."
  },
  {
    "id": "dna-protein-synthesis-3",
    "question": "Why is DNA replication described as semi-conservative?",
    "options": [
      "Only half the DNA is copied",
      "Each new DNA molecule has one original strand and one new strand",
      "DNA replication happens only in some cells",
      "The DNA shortens during copying"
    ],
    "answer": 1,
    "explanation": "Semi-conservative replication means every new DNA molecule keeps one parental strand and adds one newly synthesised strand."
  },
  {
    "id": "dna-protein-synthesis-4",
    "question": "Which molecule carries the genetic message from the nucleus to the ribosome?",
    "options": [
      "DNA polymerase",
      "tRNA",
      "mRNA",
      "ATP"
    ],
    "answer": 2,
    "explanation": "Messenger RNA transports the copied genetic code from DNA to the ribosome."
  },
  {
    "id": "dna-protein-synthesis-5",
    "question": "Translation takes place at the:",
    "options": [
      "Golgi body",
      "Ribosome",
      "Lysosome",
      "Nucleus membrane"
    ],
    "answer": 1,
    "explanation": "Ribosomes read mRNA codons and join amino acids during translation."
  },
  {
    "id": "dna-protein-synthesis-6",
    "question": "What is the role of tRNA in protein synthesis?",
    "options": [
      "To store DNA in the nucleus",
      "To bring specific amino acids to the ribosome",
      "To unzip the DNA molecule",
      "To destroy unwanted proteins"
    ],
    "answer": 1,
    "explanation": "Transfer RNA carries amino acids and matches its anticodon to the correct mRNA codon."
  },
  {
    "id": "dna-protein-synthesis-7",
    "question": "A codon consists of:",
    "options": [
      "Two amino acids",
      "One phosphate group",
      "Three bases on mRNA",
      "Three chromosomes"
    ],
    "answer": 2,
    "explanation": "A codon is a triplet of bases on mRNA that codes for a specific amino acid."
  },
  {
    "id": "dna-protein-synthesis-8",
    "question": "A mutation in a gene may affect a protein because it can change the:",
    "options": [
      "Position of the ribosome only",
      "Order of amino acids in the polypeptide",
      "Number of organelles in the cell",
      "Amount of water in the cytoplasm"
    ],
    "answer": 1,
    "explanation": "Changing the DNA base sequence can alter mRNA codons and therefore the amino-acid sequence of the protein."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const DNAProteinSynthesis = () => (
  <CapsSubjectTopic
    title="DNA and Protein Synthesis"
    subtitle="DNA structure, replication, transcription and translation"
    learnSteps={learnSteps}
    task="gr12-dna-protein-synthesis-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default DNAProteinSynthesis;
