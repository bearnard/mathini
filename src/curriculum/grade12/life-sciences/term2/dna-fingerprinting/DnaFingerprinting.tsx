'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DnaGel } from '../../../../../components/diagrams/lifesci/DnaGel';
import { MtLine } from '../../../../../components/diagrams/lifesci/LifeFlows';
import * as d from '../../../../../components/diagrams/lifesci/dnaProfile';

// CAPS Grade 12 Term 2: "Mention mitochondrial DNA and the tracing of genetic links. Paternity testing and DNA fingerprinting (forensics)."
// Every profile below comes from dnaProfile.ts (dnaProfile.test.ts and g12LifeSciencesBank.test.ts check the worked results).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

const mother = [2, 5, 7, 10];
const child = [2, 4, 7, 9];
const man1 = [1, 4, 6, 9];
const man2 = [3, 4, 8, 10];
const paternal = d.paternalBands(mother, child);
const scene = [1, 4, 5, 8];
const suspects: Record<string, d.Profile> = { 'Suspect P': [1, 4, 5, 9], 'Suspect Q': [1, 4, 5, 8], 'Suspect R': [2, 4, 5, 8] };
const guilty = d.suspectsMatching(scene, suspects);

export const learnSteps: LearnStep[] = [
  {
    title: 'What a DNA profile is',
    content: slide(
      <>
        <Rule>A DNA profile (DNA fingerprint) is a pattern of bands that is different for each person, except identical twins. The DNA is cut into fragments of different sizes, which are separated by gel electrophoresis: the smaller the fragment, the further it travels down the gel.</Rule>
        <DnaGel lanes={[{ label: 'Person 1', bands: [1, 3, 6, 9] }, { label: 'Person 2', bands: [2, 3, 7, 8] }, { label: 'Person 3', bands: [1, 4, 6, 10] }]} />
        <Worked
          title="Reading a gel"
          steps={[
            <>Each lane is one person. The wells are at the top, and the biggest fragments stay closest to the wells.</>,
            <>Person 1 has bands at positions 1, 3, 6 and 9. Person 2 has a different pattern, so it is a different person.</>,
            <>Unrelated people almost never have the same pattern, because each person has a different combination of repeating DNA sequences.</>,
          ]}
        />
        <Mistake>Thinking that a DNA profile shows the whole sequence of a person&apos;s genes. It only shows a pattern of bands that can be compared with another profile.</Mistake>
      </>,
    ),
  },
  {
    title: 'Paternity testing',
    content: slide(
      <>
        <Rule>A child inherits half of the DNA from the mother and half from the father, so every band in the child&apos;s profile must come from one of them. The bands that the mother does not have must come from the father.</Rule>
        <DnaGel lanes={[{ label: 'Mother', bands: mother }, { label: 'Child', bands: child }, { label: 'Man 1', bands: man1 }, { label: 'Man 2', bands: man2 }]} highlight={paternal} />
        <Worked
          title="Which man could be the father?"
          steps={[
            <>The child has bands at {child.join(', ')} and the mother has bands at {mother.join(', ')}.</>,
            <>The mother has {d.sharedBands(child, mother).join(' and ')}, so the bands the father must supply are <strong>{paternal.join(' and ')}</strong> (in red).</>,
            <>Man 1 has bands {man1.join(', ')}: he has both {paternal.join(' and ')}, so he <strong>can be</strong> the father.</>,
            <>Man 2 has bands {man2.join(', ')}: he does not have band {d.missingFromMan(mother, child, man2).join(' and ')}, so he is <strong>excluded</strong>.</>,
          ]}
        />
        <Mistake>Excluding a man because he lacks a band that the mother already has. Only the bands that the mother does not have need to come from the father.</Mistake>
      </>,
    ),
  },
  {
    title: 'DNA fingerprinting in forensics',
    content: slide(
      <>
        <Rule>In forensics, DNA from the scene of a crime, such as blood, saliva or hair roots, is made into a profile and compared with the profiles of suspects. A suspect whose bands do not all match is excluded. A match shows that the sample could have come from that person.</Rule>
        <DnaGel lanes={[{ label: 'Scene', bands: scene }, ...Object.entries(suspects).map(([label, bands]) => ({ label: label.replace('Suspect ', ''), bands }))]} />
        <p className="text-sm text-slate-500">Lanes: the scene sample, then Suspect P, Suspect Q and Suspect R.</p>
        <Worked
          title="Matching a sample to a suspect"
          steps={[
            <>The scene sample has bands at {scene.join(', ')}.</>,
            <>Suspect P has band 9 where the sample has band 8, and Suspect R has band 2 instead of band 1, so both are excluded.</>,
            <>Only <strong>{guilty.join(' and ')}</strong> has exactly the same bands as the sample, so the sample could have come from this person.</>,
            <>DNA evidence is used together with other evidence: it can also free a person who was wrongly suspected.</>,
          ]}
        />
        <Mistake>Saying that a DNA match proves the person is guilty. It shows that the DNA could be theirs, and the court weighs it with the rest of the evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mitochondrial DNA',
    content: slide(
      <>
        <Rule>Mitochondrial DNA (mtDNA) is the small piece of DNA in the mitochondria. It is passed from the mother to her children, because the egg cell provides the cytoplasm with its mitochondria. It changes only by mutation, so it can be used to trace maternal lineages.</Rule>
        <MtLine aria="A family in three generations. The mother, her son and her daughter all carry the mother's mtDNA. The daughter's child carries it too, but the son's child does not, because that child gets mtDNA from its own mother." />
        <Worked
          title="Tracing a maternal line"
          steps={[
            <>A woman, her son and her daughter all have the same mtDNA, which came from the woman&apos;s own mother.</>,
            <>The daughter passes this mtDNA to her children. The son does not: his children get mtDNA from their own mother.</>,
            <>Because mtDNA changes slowly by mutation, scientists compare it between people to work out how closely they are related.</>,
            <>This genetic evidence supports an African origin for all modern humans, as in the Out of Africa hypothesis.</>,
          ]}
        />
        <Mistake>Thinking that mtDNA comes from both parents. The father&apos;s mitochondria do not pass on to the embryo, so mtDNA follows the mother&apos;s line only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A child has bands at 1, 4 and 6. The mother has bands at 1 and 6. Which band must come from the father?</>,
            <>A man lacks that band. Can he be the father?</>,
            <>Why is a DNA profile from a scene compared band by band with a suspect&apos;s profile?</>,
            <>From whom do you inherit your mtDNA?</>,
          ]}
          answers={[
            <>Band <strong>{d.paternalBands([1, 6], [1, 4, 6]).join('')}</strong>, because the mother does not have it.</>,
            <>No: he is <strong>excluded</strong>, because he does not have a band the father must supply.</>,
            <>Only an identical pattern is a match; a single different band excludes the suspect.</>,
            <>From your <strong>mother</strong> only.</>,
          ]}
        />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  { prompt: 'What does a DNA profile show?', options: ['A pattern of bands that is different for each person', 'The sequence of every gene in a person', 'The blood group of a person', 'The number of chromosomes in a cell'], answer: 'A pattern of bands that is different for each person', explanation: 'A DNA profile is a pattern of bands that differs between people, apart from identical twins.' },
  { prompt: 'Which process separates DNA fragments by size to make a DNA profile?', options: ['Photosynthesis', 'Gel electrophoresis', 'Fermentation', 'Dialysis'], answer: 'Gel electrophoresis', explanation: 'In gel electrophoresis, smaller DNA fragments travel further through the gel than bigger ones.' },
  { prompt: 'Where do the biggest DNA fragments end up on a gel?', options: ['Furthest from the wells', 'At the very bottom of the gel', 'Closest to the wells at the top', 'Spread evenly in all the lanes'], answer: 'Closest to the wells at the top', explanation: 'Big fragments move slowly, so they stay near the wells. Small fragments travel further.' },
  { prompt: 'A child has bands at positions 2, 4, 7 and 9. The mother has bands at 2, 5, 7 and 10. Which bands must come from the father?', options: ['4 and 9', '2 and 7', '5 and 10', '7 and 9'], answer: '4 and 9', explanation: 'The mother has bands 2 and 7, so the bands 4 and 9 must come from the father.' },
  { prompt: 'Man 1 has bands at 1, 4, 6 and 9. For the child above, can he be the father?', options: ['Yes, he has both bands 4 and 9', 'No, he lacks band 2', 'No, he lacks band 5', 'Yes, because he has band 1'], answer: 'Yes, he has both bands 4 and 9', explanation: 'The father must supply bands 4 and 9, and Man 1 has both, so he cannot be excluded.' },
  { prompt: 'Man 2 has bands at 3, 4, 8 and 10. Why is he excluded as the father of the same child?', options: ['He lacks band 9', 'He has band 10', 'He has band 4', 'He has band 3'], answer: 'He lacks band 9', explanation: 'The father must supply bands 4 and 9. Man 2 has band 4 but not band 9, so he is excluded.' },
  { prompt: 'A child has bands at 1, 3, 6 and 8. The mother has bands at 1, 4, 6 and 9. List the bands that came from the father.', options: ['3 and 8', '1 and 6', '4 and 9', '3 and 4'], answer: '3 and 8', explanation: 'The mother has bands 1 and 6, so bands 3 and 8 must come from the father.' },
  { prompt: 'DNA from a crime scene has bands at 1, 4, 5 and 8. Suspect P has 1, 4, 5 and 9. Suspect Q has 1, 4, 5 and 8. Suspect R has 2, 4, 5 and 8. Whose DNA matches?', options: ['Suspect P', 'Suspect Q', 'Suspect R', 'None of the suspects'], answer: 'Suspect Q', explanation: 'Only Suspect Q has exactly the same bands as the sample. P and R each differ in one band.' },
  { prompt: 'A DNA match between a scene sample and a suspect shows that', options: ['The sample could have come from the suspect', 'The suspect must be guilty of the crime', 'The sample came from a relative of the suspect', 'The suspect was arrested before'], answer: 'The sample could have come from the suspect', explanation: 'A match shows that the DNA could be the suspect\'s. The court weighs it together with other evidence.' },
  { prompt: 'Why are two unrelated people very unlikely to have the same DNA profile?', options: ['Everyone has a different number of chromosomes in their cells', 'Only blood groups differ between people', 'Each person has a different combination of repeating DNA sequences', 'Their DNA changes completely every day'], answer: 'Each person has a different combination of repeating DNA sequences', explanation: 'The band pattern comes from repeating DNA sequences that differ in combination from person to person.' },
  { prompt: 'From which parent do you inherit your mitochondrial DNA?', options: ['The mother only', 'The father only', 'Both parents equally', 'A grandfather only'], answer: 'The mother only', explanation: 'The egg cell provides the cytoplasm and mitochondria, so mtDNA comes from the mother.' },
  { prompt: 'Why does mitochondrial DNA come from the mother?', options: ['The sperm cell carries no DNA into the egg cell', 'Mitochondria are all destroyed inside the egg cell', 'The egg cell provides the cytoplasm with its mitochondria', 'Fathers have no mitochondria in any of their cells'], answer: 'The egg cell provides the cytoplasm with its mitochondria', explanation: 'The embryo gets its mitochondria from the egg cytoplasm, not from the sperm.' },
  { prompt: 'Why is mtDNA used to trace human ancestry?', options: ['It is the same in all living things', 'It changes completely each generation', 'It passes from mother to child with few changes', 'It is found only in the nucleus'], answer: 'It passes from mother to child with few changes', explanation: 'Because mtDNA is inherited from the mother and changes slowly by mutation, it can be compared to trace maternal lineages.' },
  { prompt: 'A woman has a son and a daughter. Which of them will pass the woman\'s mtDNA to the next generation?', options: ['Her son', 'Her son and her daughter', 'Her husband', 'Her daughter'], answer: 'Her daughter', explanation: 'The daughter passes her mtDNA to her children. The son\'s children get their mtDNA from their own mother.' },
];

const DnaFingerprinting = () => (
  <CapsSubjectTopic
    title="DNA Fingerprinting, Paternity and mtDNA"
    subtitle="DNA profiles, paternity testing, forensics and mitochondrial DNA"
    learnSteps={learnSteps}
    task="gr12-dna-fingerprinting-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default DnaFingerprinting;
