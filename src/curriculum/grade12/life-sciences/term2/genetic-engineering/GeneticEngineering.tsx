'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps, StemTree } from '../../../../../components/diagrams/lifesci/LifeFlows';

// CAPS Grade 12 Term 2 (Genetics and Inheritance): "Genetic engineering: stem cell research, genetically modified organisms, biotechnology and cloning."
// Facts kept to what a Grade 12 learner is examined on; ethical views are stated as views people hold (docs/notes/g12-life-sciences-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Genetic engineering and biotechnology',
    content: slide(
      <>
        <Rule>Genetic engineering is changing an organism&apos;s DNA by adding, removing or changing genes. Biotechnology is using living organisms or parts of them to make useful products, such as medicines, food and fuel. Genetic engineering is one kind of biotechnology.</Rule>
        <FlowSteps
          aria="Five steps for making human insulin in bacteria: a restriction enzyme cuts the insulin gene out of human DNA, the same enzyme opens a bacterial plasmid, DNA ligase joins the gene into the plasmid, the plasmid goes into a bacterium, and the bacteria divide and make human insulin."
          steps={[
            { label: 'Cut the gene out', sub: 'restriction enzyme, human DNA' },
            { label: 'Open the plasmid', sub: 'the same restriction enzyme' },
            { label: 'Join gene and plasmid', sub: 'DNA ligase' },
            { label: 'Put the plasmid in a bacterium' },
            { label: 'Bacteria divide, make insulin' },
          ]}
        />
        <Worked
          title="From gene to insulin"
          steps={[
            <>A restriction enzyme cuts DNA at one particular base sequence, so the gene and the plasmid get matching ends.</>,
            <>DNA ligase joins the ends. A plasmid is a small ring of DNA that carries the new gene into the bacterium.</>,
            <>Bacteria divide quickly, so one engineered bacterium gives a large population that makes insulin for people with diabetes.</>,
          ]}
        />
        <Mistake>Mixing up genetic engineering with selective breeding. Selective breeding chooses parents with the features wanted. Genetic engineering changes the genes directly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Genetically modified organisms (GMOs)',
    content: slide(
      <>
        <Rule>A genetically modified organism (GMO) is an organism whose DNA has been changed by adding a gene, often from another species. Crops are the best known examples, and South Africa grows GM maize, soya and cotton.</Rule>
        <FlowSteps
          aria="How Bt maize is made: the toxin gene of the bacterium Bacillus thuringiensis is put into a maize cell, the maize plant grows from that cell, and the plant makes a protein that is toxic to certain insect pests."
          steps={[
            { label: 'Bt gene from the bacterium', sub: 'Bacillus thuringiensis' },
            { label: 'Put into a maize cell' },
            { label: 'Bt maize makes the protein', sub: 'toxic to certain insect pests' },
          ]}
        />
        <Worked
          title="Examples and what people say"
          steps={[
            <><strong>Bt maize and Bt cotton:</strong> a gene from the bacterium Bacillus thuringiensis makes a protein that is toxic to certain insect pests, so less insecticide is sprayed.</>,
            <><strong>Golden rice:</strong> modified to make beta-carotene, which the body changes into vitamin A.</>,
            <><strong>Benefits people give:</strong> higher yields, less pesticide, extra nutrients.</>,
            <><strong>Concerns people raise:</strong> the new genes may spread to related wild plants, effects on other organisms, allergies, and farmers depending on seed companies.</>,
          ]}
        />
        <Mistake>Believing that eating GM food changes your own DNA. Digestion breaks DNA down like any other food, so the eater&apos;s genes are not rewritten.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stem cells',
    content: slide(
      <>
        <Rule>A stem cell is an unspecialised cell that can divide and develop into specialised cells. Embryonic stem cells, taken from an early embryo, can form many more types of cell than adult stem cells, such as those in bone marrow.</Rule>
        <StemTree
          root="Stem cell"
          kids={['Blood cell', 'Nerve cell', 'Muscle cell']}
          aria="A stem cell is unspecialised and can divide and develop into specialised cells such as blood cells, nerve cells and muscle cells."
        />
        <Worked
          title="Uses of stem cells"
          steps={[
            <>A patient with leukaemia can receive a bone marrow transplant. The marrow contains stem cells that make new blood cells.</>,
            <>Stem cell research aims to repair damaged tissue, for example after brain or spinal injuries, and to grow tissue for study.</>,
            <>Ethical issue: using embryonic stem cells means an embryo is destroyed, so some people object, while others point to the lives that treatments could save.</>,
          ]}
        />
        <Mistake>Thinking that stem cells come only from embryos. Adults have stem cells too, in bone marrow for example, but they give fewer types of specialised cell.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cloning',
    content: slide(
      <>
        <Rule>Cloning produces organisms that are genetically identical to the original. Plants are cloned from cuttings or tissue culture: the new plants grow from the cells of one plant by mitosis. Animals can be cloned by nuclear transfer.</Rule>
        <FlowSteps
          aria="How Dolly was cloned: the nucleus of an udder cell is put into an egg cell whose nucleus was removed, the egg develops into an embryo without fertilisation, the embryo is placed in a surrogate mother, and Dolly is born with the DNA of the udder cell."
          steps={[
            { label: 'Udder cell nucleus', sub: 'put into an egg with no nucleus' },
            { label: 'The egg divides', sub: 'no sperm, no fertilisation' },
            { label: 'Embryo goes into a surrogate' },
            { label: 'Dolly: same DNA as the donor' },
          ]}
        />
        <Worked
          title="Dolly the sheep (1996)"
          steps={[
            <>The nucleus of a body cell from the udder of an adult sheep was removed.</>,
            <>It was placed into an egg cell whose own nucleus had been taken out, and the egg started to divide without fertilisation.</>,
            <>The embryo was put into a surrogate mother and Dolly was born with the same DNA as the sheep that gave the udder cell.</>,
            <>Cloning has a low success rate and many ethical questions, especially if it were used on humans.</>,
          ]}
        />
        <Mistake>Saying a clone is made by fertilisation. A clone has the DNA of one parent only, because no sperm and egg join.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Which enzyme cuts a gene out of DNA, and which joins it into a plasmid?</>,
            <>What does Bt maize gain from the gene of Bacillus thuringiensis?</>,
            <>Give one use of stem cells.</>,
            <>Why does a cloned sheep have the same DNA as the sheep that gave the cell?</>,
          ]}
          answers={[
            <>A <strong>restriction enzyme</strong> cuts, and <strong>DNA ligase</strong> joins.</>,
            <>A protein that is <strong>toxic to certain insect pests</strong>.</>,
            <>For example, bone marrow stem cells make new blood cells for a patient with leukaemia.</>,
            <>Its nucleus came from one body cell and no sperm and egg joined, so all its DNA is from one parent.</>,
          ]}
        />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  { prompt: 'What is genetic engineering?', options: ["Changing an organism's DNA by adding, removing or changing genes", 'Choosing the largest plants to breed each season', 'Growing cells in a dish without changing their genes', 'Sorting organisms into groups by their features'], answer: "Changing an organism's DNA by adding, removing or changing genes", explanation: 'Genetic engineering changes the genes of an organism directly. Choosing parents with wanted features is selective breeding.' },
  { prompt: 'Which enzyme cuts a gene out of DNA at a particular base sequence?', options: ['DNA ligase', 'Restriction enzyme', 'DNA polymerase', 'Amylase'], answer: 'Restriction enzyme', explanation: 'A restriction enzyme cuts DNA at a specific base sequence, so the gene and the plasmid get matching ends.' },
  { prompt: 'Which enzyme joins the new gene into the plasmid?', options: ['Restriction enzyme', 'Lipase', 'DNA ligase', 'Helicase'], answer: 'DNA ligase', explanation: 'DNA ligase joins the cut ends of the gene and the plasmid.' },
  { prompt: 'What does a plasmid do in genetic engineering?', options: ['It cuts the gene out of human DNA', 'It makes protein inside the nucleus', 'It carries the new gene into a bacterium', 'It joins DNA fragments together'], answer: 'It carries the new gene into a bacterium', explanation: 'A plasmid is a small ring of DNA that carries the new gene into the bacterium.' },
  { prompt: 'Bacteria that contain the human insulin gene are used to make which product?', options: ['Chlorophyll for plants', 'Haemoglobin for blood transfusions', 'Insulin for people with diabetes', 'Adrenaline for emergencies'], answer: 'Insulin for people with diabetes', explanation: 'The bacteria make human insulin, which is used to treat diabetes.' },
  { prompt: 'A gene from Bacillus thuringiensis is put into maize. What does this give the maize?', options: ['A protein that is toxic to certain insect pests', 'Resistance to frost damage in cold winters', 'Larger cobs through faster photosynthesis', 'The ability to fix nitrogen from the air'], answer: 'A protein that is toxic to certain insect pests', explanation: 'Bt maize makes a protein that harms certain insect pests, so less insecticide is needed.' },
  { prompt: 'Golden rice is modified to make which substance that the body changes into vitamin A?', options: ['Vitamin C', 'Keratin', 'Beta-carotene', 'Chlorophyll'], answer: 'Beta-carotene', explanation: 'Golden rice makes beta-carotene, which the body can change into vitamin A.' },
  { prompt: 'Which of these is a concern that people raise about GM crops?', options: ['GM food rewrites the DNA of the person who eats it', 'The new genes may spread to related wild plants', 'GM plants stop being able to photosynthesise', 'GM crops need no soil minerals'], answer: 'The new genes may spread to related wild plants', explanation: 'Pollen can carry modified genes to wild relatives. Digested DNA does not change the eater\'s own genes.' },
  { prompt: 'What is a stem cell?', options: ['An unspecialised cell that can divide and become specialised cells', 'A fully specialised cell that can only copy itself without change', 'A cell without a nucleus that carries oxygen in the blood', 'A cell that has permanently stopped dividing in an adult'], answer: 'An unspecialised cell that can divide and become specialised cells', explanation: 'Stem cells are unspecialised and can become specialised cells.' },
  { prompt: 'Compared with adult stem cells, embryonic stem cells can form', options: ['Fewer types of specialised cell', 'More types of specialised cell', 'Blood cells and nothing else', 'Nerve cells and nothing else'], answer: 'More types of specialised cell', explanation: 'Embryonic stem cells can develop into many more cell types than adult stem cells.' },
  { prompt: 'A patient with leukaemia receives a bone marrow transplant. Which cells in the marrow make the treatment work?', options: ['Red blood cells that carry oxygen', 'Neurons that repair the spinal cord', 'Stem cells that make new blood cells', 'Platelets that help blood to clot'], answer: 'Stem cells that make new blood cells', explanation: 'Bone marrow contains stem cells that make new blood cells.' },
  { prompt: 'Dolly the sheep was cloned using which part of an adult sheep?', options: ['A sperm cell taken from a male sheep', 'An egg cell fertilised by a sperm cell', 'Stem cells taken from the bone marrow', 'The nucleus of a body cell from the udder'], answer: 'The nucleus of a body cell from the udder', explanation: 'The nucleus of an udder cell was put into an egg cell with its own nucleus removed. No fertilisation took place.' },
  { prompt: 'How does a clone compare with the organism it was copied from?', options: ['It has the same DNA as the original', 'It has half of the DNA of the original', 'It has DNA from two different parents', 'It has DNA that is mostly unlike the original'], answer: 'It has the same DNA as the original', explanation: 'A clone is genetically identical to the original because its DNA comes from one organism.' },
  { prompt: 'A farmer grows many plants from cuttings of one plant. Why are they genetically identical?', options: ['They were all fertilised by pollen from the same plant', 'They were all watered by the same rain at the same time', 'They were all produced by meiosis in the parent plant', 'They all grow from the cells of one plant by mitosis'], answer: 'They all grow from the cells of one plant by mitosis', explanation: 'Cuttings grow from the cells of one plant by mitosis, so every new plant has the same DNA.' },
];

const GeneticEngineering = () => (
  <CapsSubjectTopic
    title="Genetic Engineering"
    subtitle="Biotechnology, GMOs, stem cells and cloning"
    learnSteps={learnSteps}
    task="gr12-genetic-engineering-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default GeneticEngineering;
