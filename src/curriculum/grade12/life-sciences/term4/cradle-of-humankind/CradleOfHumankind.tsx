'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { BrainBars } from '../../../../../components/diagrams/lifesci/BrainBars';
import * as c from '../../../../../components/diagrams/lifesci/cradle';

// CAPS Grade 12 Term 4 (Human Evolution continued): "Importance of the Cradle of Humankind: main fossil sites in South Africa ... evidence and
// evolutionary trends from these sites (refer to dating of fossils Grade 10). At least two examples should be studied. Mention scientists such as Dart,
// Broom, Tobias, Brain, Ron Clarke, Berger, Keyser." Ages are approximate textbook values (docs/notes/g12-life-sciences-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const [taung, mrsPles, littleFoot, kromdraai, swartkrans, malapa] = c.SITES;
const ratio = c.brainRatio(450, 1350);

export const learnSteps: LearnStep[] = [
  {
    title: 'The Cradle of Humankind',
    content: slide(
      <>
        <Rule>The Cradle of Humankind is a World Heritage Site in Gauteng and North West, north-west of Johannesburg. Its limestone caves have preserved the bones of many early hominins, as well as other animals, for millions of years. It is important because it holds such a large number of hominin fossils.</Rule>
        <InfoTable
          cols={[{ title: 'Where', w: 32 }, { title: 'What it shows', w: 68 }]}
          rows={[
            ['Cradle of\nHumankind', 'Many caves with early hominin\nfossils: Sterkfontein, Kromdraai,\nSwartkrans, Malapa, Gladysvale'],
            ['Taung', 'The first Australopithecus fossil,\nfound in 1924 (North West)'],
            ['Blombos, Border\nCave, Florisbad', 'Later sites with early modern\nhumans (outside the Cradle)'],
          ]}
          aria="A table of South African fossil sites: the Cradle of Humankind has many caves with early hominin fossils such as Sterkfontein, Kromdraai, Swartkrans, Malapa and Gladysvale; Taung in North West gave the first Australopithecus fossil in 1924; Blombos, Border Cave and Florisbad are later sites with early modern humans."
        />
        <Worked
          title="Why so many fossils in caves?"
          steps={[
            <>Bones of animals and hominins fell, or were washed, into caves in the limestone.</>,
            <>Minerals in the water cemented the bones into hard rock called breccia, which kept them for millions of years.</>,
            <>Scientists date the rock layers around a fossil. Carbon-14 works only for young fossils, so for older ones the rocks are dated with other radioactive isotopes.</>,
          ]}
        />
        <Mistake>Thinking that the whole of South African human evolution is found in the Cradle only. Taung, Florisbad, Border Cave and Blombos are outside it, and each adds evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Key sites, fossils and scientists',
    content: slide(
      <>
        <Rule>Each famous fossil is linked to a site and a scientist. Know at least two examples well, with the evidence they give. The ages are approximate, so write &quot;about&quot; in front of them.</Rule>
        <InfoTable
          cols={[{ title: 'Site', w: 22 }, { title: 'Fossil', w: 44 }, { title: 'Scientist', w: 34 }]}
          rows={[
            ['Taung', 'A. africanus (the\nTaung Child), about\n2,5 million years', 'Raymond Dart,\n1924'],
            ['Sterkfontein', '"Mrs Ples", about\n2,1 million years;\n"Little Foot", about\n3,67 million years', 'Robert Broom\n(Mrs Ples);\nRon Clarke\n(Little Foot)'],
            ['Kromdraai', 'Paranthropus\nrobustus', 'Robert Broom,\n1938'],
            ['Swartkrans', 'Paranthropus robustus\nand early Homo', 'C.K. Brain'],
            ['Malapa', 'A. sediba, about\n2 million years', 'Lee Berger,\n2008'],
          ]}
          aria="A table of fossil sites. Taung: Australopithecus africanus, the Taung Child, about 2,5 million years, found by Raymond Dart in 1924. Sterkfontein: Mrs Ples, about 2,1 million years, found by Robert Broom, and Little Foot, about 3,67 million years, found by Ron Clarke. Kromdraai: Paranthropus robustus, Robert Broom, 1938. Swartkrans: Paranthropus robustus and early Homo, C.K. Brain. Malapa: Australopithecus sediba, about 2 million years, Lee Berger, 2008."
        />
        <Worked
          title="Two examples in detail"
          steps={[
            <><strong>Taung:</strong> Raymond Dart described the skull of a child in 1924 and named it Australopithecus africanus. It showed that early hominins lived in Africa.</>,
            <><strong>Sterkfontein:</strong> Robert Broom found &quot;Mrs Ples&quot;, an adult A. africanus. Ron Clarke later found &quot;Little Foot&quot;, a nearly complete skeleton. Phillip Tobias studied these fossils and early Homo.</>,
            <><strong>Malapa:</strong> Lee Berger&apos;s team found Australopithecus sediba, with some ape-like and some human-like features.</>,
          ]}
        />
        <Mistake>Mixing up the people and the places. Dart is Taung, Broom is Sterkfontein and Kromdraai, Brain is Swartkrans, Clarke is Little Foot and Berger is Malapa.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evolutionary trends',
    content: slide(
      <>
        <Rule>Comparing fossils from the older Australopithecus to Homo shows trends: a bigger brain, walking upright, smaller teeth and jaws, and a flatter face with less of a protruding jaw (prognathism). The fossils show gradual change, not one jump.</Rule>
        <BrainBars />
        <Worked
          title="Reading the trends"
          steps={[
            <>Brain size: about {c.BRAIN_CM3[0].cm3} cm³ in Australopithecus africanus and about {c.BRAIN_CM3[2].cm3} cm³ in Homo sapiens, which is {ratio} times as large.</>,
            <>Bipedalism: the pelvis becomes short and wide and the spine curves in an S shape, so the body balances over two legs.</>,
            <>Teeth and face: the teeth and jaws become smaller, and the face flatter.</>,
            <>Australopithecus sediba had a mixture of features: it is evidence of change over time, not a missing link to a single ancestor.</>,
          ]}
        />
        <Mistake>Saying that humans evolved from the apes alive today. Humans and apes share a common ancestor, and the fossils show branches of hominins that changed over time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Later sites: Florisbad, Border Cave and Blombos',
    content: slide(
      <>
        <Rule>Some South African sites show early modern humans, Homo sapiens, and what they did. Florisbad in the Free State and Border Cave on the KwaZulu-Natal border have fossils of early modern humans. Blombos Cave in the Western Cape has evidence of symbolic thinking.</Rule>
        <InfoTable
          cols={[{ title: 'Site', w: 26 }, { title: 'Province', w: 30 }, { title: 'Evidence', w: 44 }]}
          rows={[
            ['Florisbad', 'Free State', 'Skull of an early\nmodern human'],
            ['Border Cave', 'KwaZulu-Natal', 'Fossils of early\nmodern humans'],
            ['Blombos Cave', 'Western Cape', 'Engraved ochre and\nshell beads: symbolic\nthinking'],
          ]}
          aria="A table of later sites. Florisbad, Free State: skull of an early modern human. Border Cave, KwaZulu-Natal: fossils of early modern humans. Blombos Cave, Western Cape: engraved ochre and shell beads, which show symbolic thinking."
        />
        <Worked
          title="What these sites add"
          steps={[
            <>Florisbad and Border Cave support the Out of Africa idea: early modern humans lived in Southern Africa.</>,
            <>Blombos has engraved ochre and shell beads. These show that early modern humans thought in symbols and made ornaments.</>,
            <>Together with the Cradle of Humankind, they give a long record of human evolution in one country.</>,
          ]}
        />
        <Mistake>Saying that fossils prove everything on their own. Scientists use fossils, dating of the rocks, DNA and cultural remains such as tools together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Which scientist is linked to the Taung Child, and in which year?</>,
            <>Name two trends from Australopithecus to Homo.</>,
            <>Which site gave Australopithecus sediba, and who led the team?</>,
            <>What do the engraved ochre and shell beads from Blombos Cave show?</>,
          ]}
          answers={[
            <><strong>Raymond Dart</strong>, in <strong>1924</strong>.</>,
            <>For example a <strong>bigger brain</strong> and <strong>smaller teeth and jaws</strong> (or upright walking).</>,
            <><strong>Malapa</strong>, with <strong>Lee Berger</strong>.</>,
            <>That early modern humans had <strong>symbolic thinking</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  { prompt: 'Which scientist described the Taung Child in 1924?', options: ['Raymond Dart', 'Robert Broom', 'Lee Berger', 'Phillip Tobias'], answer: 'Raymond Dart', explanation: 'Dart described the skull of the Taung Child in 1924 and named it Australopithecus africanus.' },
  { prompt: 'The Taung Child belongs to which species?', options: ['Homo erectus', 'Paranthropus robustus', 'Australopithecus africanus', 'Australopithecus sediba'], answer: 'Australopithecus africanus', explanation: 'Dart named the Taung Child Australopithecus africanus.' },
  { prompt: 'At which site was the adult skull "Mrs Ples" found?', options: ['Taung', 'Sterkfontein', 'Malapa', 'Kromdraai'], answer: 'Sterkfontein', explanation: '"Mrs Ples" was found at Sterkfontein by Robert Broom.' },
  { prompt: 'Which scientist is linked to the nearly complete skeleton called Little Foot?', options: ['Raymond Dart', 'Lee Berger', 'Ron Clarke', 'C.K. Brain'], answer: 'Ron Clarke', explanation: 'Ron Clarke found and excavated Little Foot at Sterkfontein.' },
  { prompt: 'Australopithecus sediba was found at Malapa. Which scientist led the team that described it?', options: ['Phillip Tobias', 'Robert Broom', 'Ron Clarke', 'Lee Berger'], answer: 'Lee Berger', explanation: 'Lee Berger\'s team described Australopithecus sediba from Malapa in 2008.' },
  { prompt: 'Paranthropus robustus was first found at which site?', options: ['Taung', 'Malapa', 'Border Cave', 'Kromdraai'], answer: 'Kromdraai', explanation: 'Robert Broom described Paranthropus robustus from Kromdraai in 1938.' },
  { prompt: 'In which two provinces is the Cradle of Humankind?', options: ['Limpopo and Mpumalanga', 'Gauteng and North West', 'KwaZulu-Natal and Eastern Cape', 'Western Cape and Northern Cape'], answer: 'Gauteng and North West', explanation: 'The Cradle of Humankind is in Gauteng and North West, north-west of Johannesburg.' },
  { prompt: 'Why have so many hominin fossils been preserved in the Cradle of Humankind?', options: ['Hominins buried their dead in deep, protected graves', 'Bones fell into limestone caves and became rock', 'Volcanoes covered the whole area with thick ash', 'Rivers carried the bones out to the sea quickly'], answer: 'Bones fell into limestone caves and became rock', explanation: 'Bones fell or washed into limestone caves, and minerals cemented them into hard rock that kept them for millions of years.' },
  { prompt: 'Which change is seen from Australopithecus to Homo?', options: ['Larger brain size', 'Smaller brain size', 'Longer canine teeth', 'Walking on the knuckles'], answer: 'Larger brain size', explanation: 'Brain size increases from about 450 cm³ in Australopithecus africanus to about 1 350 cm³ in Homo sapiens.' },
  { prompt: 'Which feature of the fossil skeleton shows that a hominin walked upright?', options: ['A short, wide pelvis and an S-shaped spine', 'Long, curved fingers for climbing', 'A large crest on top of the skull', 'Very large canine teeth'], answer: 'A short, wide pelvis and an S-shaped spine', explanation: 'The pelvis and the spine show bipedalism: the body balances over two legs.' },
  { prompt: 'Australopithecus sediba shows some ape-like and some human-like features. What does this suggest?', options: ['It is the same as a modern human', 'It had no features like humans', 'It is evidence of change over time', 'It was a modern chimpanzee'], answer: 'It is evidence of change over time', explanation: 'A mixture of features is what is expected as one form changes gradually into another.' },
  { prompt: 'Engraved ochre and shell beads from Blombos Cave are evidence of what?', options: ['The first use of fire by early humans', 'Walking upright on two legs for the first time', 'Symbolic thinking in early modern humans', 'The hunting of large animals with spears'], answer: 'Symbolic thinking in early modern humans', explanation: 'Engravings and beads are symbols and ornaments, which show symbolic thinking.' },
  { prompt: 'Carbon-14 dating works only for young fossils. How are much older fossils dated?', options: ['By counting the growth rings inside the bones', 'By measuring the length of the whole skull', 'By dating the rock around them with other isotopes', 'By comparing their colour with young fossils'], answer: 'By dating the rock around them with other isotopes', explanation: 'Older fossils are dated by dating the rock layers around them with other radioactive isotopes.' },
  { prompt: 'Florisbad in the Free State and Border Cave in KwaZulu-Natal are important because they have', options: ['The oldest Australopithecus fossils', 'Fossils of early modern humans', 'The only stone tools in Africa', 'No fossils at all'], answer: 'Fossils of early modern humans', explanation: 'Florisbad and Border Cave have fossils of early Homo sapiens, which supports the Out of Africa idea.' },
];

const CradleOfHumankind = () => (
  <CapsSubjectTopic
    title="The Cradle of Humankind"
    subtitle="South African fossil sites, scientists and evolutionary trends"
    learnSteps={learnSteps}
    task="gr12-cradle-of-humankind-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default CradleOfHumankind;
