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
    title: 'Why plants need defences',
    content: slide(
      <>
        <Rule>A plant cannot run away from an animal that wants to eat it. Plants therefore defend themselves in two main ways: with physical structures, such as thorns and spines, and with chemicals that make them bitter, poisonous or hard to digest. Defences protect the leaves, shoots and fruits that the plant needs to grow and reproduce.</Rule>
        <InfoTable
          cols={[{ title: 'Kind of defence', w: 32 }, { title: 'How it works', w: 68 }]}
          rows={[
            ['Physical', 'Thorns, spines, hairs and tough leaves\nmake eating difficult or painful'],
            ['Chemical', 'Bitter or poisonous chemicals make\nthe plant taste bad or cause harm'],
          ]}
          aria="A table of plant defences. Physical defences: thorns, spines, hairs and tough leaves make eating difficult or painful. Chemical defences: bitter or poisonous chemicals make the plant taste bad or cause harm."
        />
        <Worked
          title="Why defence matters"
          steps={[
            'A seedling that is eaten cannot grow.',
            'A plant with thorns or bitter leaves is eaten less often.',
            'So it is more likely to survive and reproduce, and its defences are passed on.',
          ]}
        />
        <Mistake>Saying that plants grow thorns because they need to protect themselves. Plants with variations that protected them survived and reproduced more, which is natural selection.</Mistake>
      </>,
    ),
  },
  {
    title: 'Physical defences: thorns and other structures',
    content: slide(
      <>
        <Rule>Thorns and spines are sharp structures that hurt a browsing animal. Acacia (Vachellia) trees in the savanna have thorns on their branches. Some plants have hairs that irritate the mouth, and some have tough, waxy or leathery leaves that are hard to chew. Cactus spines protect the fleshy stem that stores water.</Rule>
        <InfoTable
          cols={[{ title: 'Structure', w: 26 }, { title: 'Example', w: 34 }, { title: 'Effect on animals', w: 40 }]}
          rows={[
            ['Thorns', 'Acacia (Vachellia)\ntrees', 'Pain when browsing, so\nless is eaten'],
            ['Spines', 'Cactus, prickly pear', 'Protect the water-storing\nstem'],
            ['Hairs', 'Stinging nettle', 'Irritate the mouth and skin'],
            ['Tough leaves', 'Many shrubs', 'Hard to chew and digest'],
          ]}
          aria="A table of physical plant defences. Thorns of acacia trees cause pain when browsing. Spines of cactus and prickly pear protect the water-storing stem. Hairs of stinging nettle irritate the mouth and skin. Tough leaves of many shrubs are hard to chew and digest."
        />
        <Worked
          title="Link the structure to its purpose"
          steps={[
            'Long thorns on an acacia branch make it hard for a kudu to reach the leaves.',
            'A giraffe has a long tongue and tough lips to feed between thorns.',
            'Both the plant defence and the animal feeding adaptation have been shaped by natural selection.',
          ]}
        />
        <Mistake>Calling a thorn a leaf. A thorn is a sharp modified branch or leaf that is used for defence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Chemical defences',
    content: slide(
      <>
        <Rule>Many plants make chemicals that protect them. Some chemicals taste bitter, as in aloes, some are poisonous, as in oleander, and some, such as tannins, make leaves hard to digest. The milky latex of euphorbias irritates the mouth and eyes. Some plants make more of their defensive chemicals after they have been damaged by browsing. People use some of these plant chemicals as medicine.</Rule>
        <InfoTable
          cols={[{ title: 'Chemical', w: 24 }, { title: 'Effect on animals', w: 44 }, { title: 'Example', w: 32 }]}
          rows={[
            ['Bitter', 'Animals avoid the taste', 'Aloe'],
            ['Poison', 'Harms or kills the animal', 'Oleander'],
            ['Tannins', 'Leaves are hard to digest', 'Many acacias'],
            ['Latex', 'Irritates mouth and eyes', 'Euphorbia'],
          ]}
          aria="A table of chemical plant defences. Bitter chemicals make animals avoid the taste, as in aloe. Poison harms or kills the animal, as in oleander. Tannins make leaves hard to digest, as in many acacias. Latex irritates the mouth and eyes, as in euphorbia."
        />
        <Worked
          title="Explain a chemical defence"
          steps={[
            'An aloe leaf tastes very bitter, so animals avoid it.',
            'Tannins in acacia leaves make digestion harder, so a browser eats less of one tree.',
            'Never eat or touch an unknown wild plant: many protect themselves with poisons.',
          ]}
        />
        <Mistake>Believing that all plant poisons are harmful to humans in the same way. Some chemicals are harmful, some are useful medicines, and the amount and the plant matter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two physical defences of plants.</>,
          <>Name two chemical defences of plants.</>,
          <>Why can a plant not simply run away from a browser?</>,
          <>How do plant defences become more common in a population?</>,
        ]}
        answers={[
          <>For example thorns and spines.</>,
          <>For example bitter chemicals and poison, or tannins and latex.</>,
          <>It is rooted in the soil.</>,
          <>Plants with defences survive and reproduce more, so natural selection favours them.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why can a plant not run away from a browsing animal?",
    options: ["It has no cells in the leaves", "It has no energy to move", "Its roots fix it in the soil", "It is always too small to run"],
    answer: "Its roots fix it in the soil",
    explanation: "Plants therefore rely on defences.",
  },
  {
    prompt: "Which of these is a physical defence of a plant?",
    options: ["Thorns", "Bitter chemicals", "Poison in the sap", "Tannins in the leaves"],
    answer: "Thorns",
    explanation: "Thorns and spines are physical structures.",
  },
  {
    prompt: "Which of these is a chemical defence?",
    options: ["Sharp thorns", "Cactus spines", "Tough leaves", "Poison in the leaves"],
    answer: "Poison in the leaves",
    explanation: "Chemicals can make a plant bitter or poisonous.",
  },
  {
    prompt: "What is the function of cactus spines?",
    options: ["To make seeds", "To protect the water-storing stem", "To absorb water", "To make food by photosynthesis"],
    answer: "To protect the water-storing stem",
    explanation: "Spines discourage animals that want the water in the stem.",
  },
  {
    prompt: "What do hairs on a stinging nettle do?",
    options: ["Attract many bees to the plant", "Irritate the mouth and skin", "Absorb sunlight for the plant", "Store water for a dry season"],
    answer: "Irritate the mouth and skin",
    explanation: "The hairs act as a physical and chemical defence.",
  },
  {
    prompt: "Why do aloe leaves protect the plant?",
    options: ["They are sweet", "They have no cells", "They have thorns on the roots", "They taste bitter"],
    answer: "They taste bitter",
    explanation: "A bitter taste makes browsers avoid the plant.",
  },
  {
    prompt: "What is the effect of tannins in acacia leaves?",
    options: ["They make leaves hard to digest", "They make leaves sweeter", "They attract more browsers", "They make roots grow"],
    answer: "They make leaves hard to digest",
    explanation: "Browsers eat less from a tree with a lot of tannins.",
  },
  {
    prompt: "What does the latex of an euphorbia do?",
    options: ["Feeds animals", "Waters the plant", "Irritates the mouth and eyes", "Attracts pollinators"],
    answer: "Irritates the mouth and eyes",
    explanation: "Latex is a milky chemical defence.",
  },
  {
    prompt: "Which statement about plant poisons is correct?",
    options: ["All of them are harmless to people", "All of them are good to eat", "All of them are made by animals", "Some harm and some are medicines"],
    answer: "Some harm and some are medicines",
    explanation: "The plant and the amount matter, so never eat an unknown wild plant.",
  },
  {
    prompt: "How are plant defences explained in terms of evolution?",
    options: ["Plants grew thorns because they needed them", "Plants with defences survived and reproduced more", "Plants chose their own thorns", "Thorns appear only after being eaten"],
    answer: "Plants with defences survived and reproduced more",
    explanation: "Natural selection favoured plants with defences.",
  },
  {
    prompt: "What is a thorn?",
    options: ["A sharp modified branch or leaf", "A kind of flower of a plant", "A coat around a seed", "A hair on the root of a plant"],
    answer: "A sharp modified branch or leaf",
    explanation: "Thorns are used for defence.",
  },
  {
    prompt: "What adaptation helps a giraffe to feed on a thorny acacia?",
    options: ["Wings for flying up", "Thorns of its own", "A long tongue and tough lips", "A very short neck"],
    answer: "A long tongue and tough lips",
    explanation: "Both the plant and the animal show adaptations.",
  },
  {
    prompt: "Why are defences important for a seedling?",
    options: ["Seedlings need no defence", "Seedlings are never eaten", "An eaten seedling cannot grow", "Seedlings make animals"],
    answer: "An eaten seedling cannot grow",
    explanation: "Defences protect the shoots and leaves needed for growth.",
  },
  {
    prompt: "Which defence works by causing pain or injury when an animal browses?",
    options: ["Thorns and spines", "Bitter taste", "Tannins", "Waxy cuticle"],
    answer: "Thorns and spines",
    explanation: "They are physical defences.",
  },
];

const PlantDefence = () => (
  <CapsSubjectTopic
    title="Plant Defence Mechanisms"
    subtitle="Physical defences such as thorns and spines, and chemical defences such as bitter chemicals, poisons, tannins and latex"
    learnSteps={learnSteps}
    task="gr12-plant-defence-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default PlantDefence;
