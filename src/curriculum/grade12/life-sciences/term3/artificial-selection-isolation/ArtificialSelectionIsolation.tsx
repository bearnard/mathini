'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as g from '../../../../../components/diagrams/lifesci/gaps12';

// Numbers come from gaps12.ts (tested in gaps12.test.ts and g12LsGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Artificial selection',
    content: slide(
      <>
        <Rule>In artificial selection people choose which organisms breed, so that a wanted feature becomes more common. It works only because there is variation and the feature is inherited. Examples are a domesticated animal, dairy cattle bred for a high milk yield, and a crop plant, maize, whose cobs became much larger than those of its wild relative, teosinte.</Rule>
        <InfoTable
          cols={[{ title: 'Generation', w: 30 }, { title: 'Mean milk yield (litres a day)', w: 70 }]}
          rows={g.HERD.map((v, i) => [String(i + 1), g.dec(v)])}
          aria="A table of the mean milk yield of selected dairy cows in four generations: 12, 13,5, 15 and 16,5 litres a day, so the yield rises with every generation of selection."
        />
        <Worked
          title="Selecting for milk yield (imaginary data)"
          steps={[
            `A farmer breeds only the best milkers: the mean yield rises from ${g.dec(g.HERD[0])} to ${g.dec(g.HERD[3])} litres a day in four generations.`,
            `That is an increase of ${g.dec(g.HERD[3] - g.HERD[0])} litres, or ${g.dec(g.percentChange(g.HERD[0], g.HERD[3]))}%.`,
            'The farmer, not the environment, chose the survivors. That is the difference from natural selection.',
          ]}
        />
        <Mistake>Saying that cows evolve to produce more milk because they need it. The farmer selects the high yielders and the genes for high yield become more common.</Mistake>
      </>,
    ),
  },
  {
    title: 'Natural and artificial selection compared',
    content: slide(
      <>
        <Rule>In natural selection the environment decides which individuals survive and reproduce, and the selected feature helps survival. In artificial selection people decide, and the selected feature helps people, not necessarily the organism. Both depend on variation, inheritance and differences in reproduction.</Rule>
        <InfoTable
          cols={[{ title: '', w: 24 }, { title: 'Natural selection', w: 38 }, { title: 'Artificial selection', w: 38 }]}
          rows={[
            ['Who selects?', 'The environment', 'People'],
            ['Which feature wins?', 'One that helps survival', 'One that people want'],
            ['Speed', 'Usually slow', 'Can be fast'],
            ['Needs', 'Variation, inheritance', 'Variation, inheritance'],
          ]}
          aria="A table comparing natural and artificial selection. Who selects: the environment, or people. Which feature wins: one that helps survival, or one that people want. Speed: usually slow, or can be fast. Both need variation and inheritance."
        />
        <Worked
          title="Which kind?"
          steps={[
            'Moths with dark wings survive better on dark tree trunks: natural selection.',
            'A farmer plants seed from the tallest, highest-yielding maize plants each year: artificial selection.',
            'Both changes happen because some individuals leave more offspring than others.',
          ]}
        />
        <Mistake>Thinking that artificial selection creates new variation. It chooses from variation that already exists in the population.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mechanisms of reproductive isolation',
    content: slide(
      <>
        <Rule>Reproductive isolation stops two populations from producing fertile offspring together. Mechanisms include breeding at different times of the year, species-specific courtship behaviour, adaptation to different pollinators in plants, prevention of fertilisation, and infertile hybrids of different species, such as the mule, from a horse and a donkey.</Rule>
        <InfoTable
          cols={[{ title: 'Mechanism', w: 36 }, { title: 'Example', w: 64 }]}
          rows={[
            ['Different breeding times', 'Two frog species breed in\ndifferent months'],
            ['Courtship behaviour', 'Each bird species has its own\nsong and display'],
            ['Different pollinators', 'One flower suits bees, another\nsuits sunbirds'],
            ['Prevention of fertilisation', 'Sperm and egg of the two\nspecies do not fuse'],
            ['Infertile hybrids', 'A mule cannot produce\nits own offspring'],
          ]}
          aria="A table of reproductive isolation mechanisms. Different breeding times: two frog species breed in different months. Courtship behaviour: each bird species has its own song and display. Different pollinators: one flower suits bees and another suits sunbirds. Prevention of fertilisation: sperm and egg of two species do not fuse. Infertile hybrids: a mule cannot produce its own offspring."
        />
        <Worked
          title="Name the mechanism"
          steps={[
            'Two plant species flower in the same place, but one is pollinated by bees and the other by sunbirds: different pollinators.',
            'A horse and a donkey mate and have a mule that is infertile: infertile hybrid.',
            'Males of two bird species respond only to their own song: courtship behaviour.',
          ]}
        />
        <Mistake>Thinking that an infertile hybrid proves that the parents are the same species. A mule shows that horses and donkeys are separate species, because the hybrid is infertile.</Mistake>
      </>,
    ),
  },
  {
    title: 'How isolation leads to a new species',
    content: slide(
      <>
        <Rule>A species is a group of organisms that can interbreed to produce fertile offspring (the biological species concept). If a population is split by geographic isolation, for example by water or mountains, natural selection and chance change each part in different ways. If, after a long time, the parts can no longer interbreed, reproductive isolation has formed and there are now two species.</Rule>
        <InfoTable
          cols={[{ title: 'Step', w: 12 }, { title: 'What happens', w: 88 }]}
          rows={[
            ['1', 'One population is split by a barrier'],
            ['2', 'Each part meets different conditions and changes'],
            ['3', 'After a long time they cannot interbreed'],
            ['4', 'There are now two species'],
          ]}
          aria="Four steps of speciation by geographic isolation. 1: one population is split by a barrier. 2: each part meets different conditions and changes. 3: after a long time they cannot interbreed. 4: there are now two species."
        />
        <Worked
          title="Apply the steps"
          steps={[
            'A group of finches reaches an island and is cut off from the mainland birds.',
            'Over many generations the island birds adapt to local food and change.',
            'If island and mainland birds can no longer produce fertile offspring, they are separate species.',
          ]}
        />
        <Mistake>Saying that isolation alone makes a new species. The populations must also change, and become unable to interbreed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who selects the parents in artificial selection?</>,
          <>Name two mechanisms of reproductive isolation.</>,
          <>Why is a mule infertile an example of reproductive isolation?</>,
          <>What does geographic isolation do to a population?</>,
        ]}
        answers={[
          <>People.</>,
          <>For example breeding at different times and different courtship behaviour.</>,
          <>The hybrid cannot reproduce, so genes do not pass between the two species.</>,
          <>It splits it into parts that can change separately.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Who chooses the parents in artificial selection?",
    options: ["The environment", "The offspring", "People", "Predators"],
    answer: "People",
    explanation: "People select organisms with wanted features.",
  },
  {
    prompt: "Which example is artificial selection?",
    options: ["A farmer sows seed from the best maize each year", "Dark moths surviving on dark trunks", "Bacteria that resist an antibiotic", "Finches that survive a drought"],
    answer: "A farmer sows seed from the best maize each year",
    explanation: "The farmer decides which plants reproduce.",
  },
  {
    prompt: "What must be present for artificial selection to work?",
    options: ["No variation", "Only identical individuals", "Mutations that are never inherited", "Variation that is inherited"],
    answer: "Variation that is inherited",
    explanation: "Selection works on existing, inherited variation.",
  },
  {
    prompt: "A dairy herd's mean yield rises from 12 to 16,5 litres a day. What is the increase?",
    options: ["28,5 litres a day", "4,5 litres a day", "1,5 litres a day", "12 litres a day"],
    answer: "4,5 litres a day",
    explanation: "16,5 - 12 = 4,5.",
  },
  {
    prompt: "What is the percentage increase in milk yield from 12 to 16,5 litres a day?",
    options: ["27,3%", "37,5%", "4,5%", "137,5%"],
    answer: "37,5%",
    explanation: "4,5 / 12 x 100 = 37,5%.",
  },
  {
    prompt: "How does artificial selection differ from natural selection?",
    options: ["It needs no variation at all", "It never changes a population", "It happens only in the wild", "People choose the survivors"],
    answer: "People choose the survivors",
    explanation: "The selected feature helps people, not necessarily the organism.",
  },
  {
    prompt: "Which crop plant has been selected to have a much larger cob than its wild relative, teosinte?",
    options: ["Maize", "Aloe", "Baobab", "Acacia"],
    answer: "Maize",
    explanation: "Maize cobs became larger by artificial selection.",
  },
  {
    prompt: "What is reproductive isolation?",
    options: ["A long migration to a brand new area", "A kind of mutation of the genes", "A block to fertile offspring between groups", "A change of colour in a bird species"],
    answer: "A block to fertile offspring between groups",
    explanation: "It keeps the gene pools of two species separate.",
  },
  {
    prompt: "Two frog species breed in different months. Which mechanism is this?",
    options: ["Infertile hybrids", "Prevention of fertilisation", "Different pollinators", "Breeding at different times"],
    answer: "Breeding at different times",
    explanation: "They never meet to mate.",
  },
  {
    prompt: "Males of a bird species respond only to their own song. Which mechanism is this?",
    options: ["Breeding at different times of year", "Species-specific courtship behaviour", "Infertile hybrids that cannot breed", "Adaptation to different pollinators"],
    answer: "Species-specific courtship behaviour",
    explanation: "Courtship signals identify members of one species.",
  },
  {
    prompt: "Which mechanism applies when two flower species are visited by different pollinators, such as bees and sunbirds?",
    options: ["Adaptation to different pollinators", "Infertile hybrids that cannot breed", "Breeding at different times of year", "Species-specific courtship behaviour"],
    answer: "Adaptation to different pollinators",
    explanation: "Pollen is not transferred between the two plant species.",
  },
  {
    prompt: "A mule is the offspring of a horse and a donkey. Why is a mule an example of reproductive isolation?",
    options: ["It can breed with any horse", "It is a brand new species", "It is infertile, so genes stop there", "It is an exact clone of a horse"],
    answer: "It is infertile, so genes stop there",
    explanation: "An infertile hybrid shows that the parents are separate species.",
  },
  {
    prompt: "What is a species under the biological species concept?",
    options: ["Organisms that look exactly the same", "Organisms that live in a single place", "Organisms that interbreed to give fertile young", "Organisms that have the same colour"],
    answer: "Organisms that interbreed to give fertile young",
    explanation: "Fertile offspring is the test.",
  },
  {
    prompt: "What can split a population into two groups that then change separately?",
    options: ["A barrier like water or mountains", "A common ancestor of the group", "A shared diet in the group", "A single mutation in the group"],
    answer: "A barrier like water or mountains",
    explanation: "This is geographic isolation.",
  },
];

const ArtificialSelectionIsolation = () => (
  <CapsSubjectTopic
    title="Artificial Selection and Reproductive Isolation"
    subtitle="Artificial selection, comparing it with natural selection, mechanisms of reproductive isolation and how isolation leads to new species"
    learnSteps={learnSteps}
    task="gr12-artificial-selection-isolation-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default ArtificialSelectionIsolation;
