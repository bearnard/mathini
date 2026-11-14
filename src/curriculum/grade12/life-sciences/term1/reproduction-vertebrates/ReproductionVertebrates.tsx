'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Vertebrates use different fertilisation strategies',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Vertebrates reproduce in ways that suit their habitats. Water-dwelling groups often release gametes into
          the environment, while land vertebrates usually protect gametes through internal fertilisation.
        </p>
        <ClassificationTree
          title="Fertilisation strategies in vertebrates"
          root={{
            label: 'Vertebrate reproduction',
            children: [
              {
                label: 'External fertilisation',
                children: [
                  { label: 'Fish', description: 'Gametes are released into water.' },
                  { label: 'Amphibians', description: 'Usually need moist environments for successful fertilisation.' },
                ],
              },
              {
                label: 'Internal fertilisation',
                children: [
                  { label: 'Reptiles', description: 'Gametes unite inside the female body.' },
                  { label: 'Birds', description: 'Internal fertilisation protects gametes on land.' },
                  { label: 'Mammals', description: 'Internal fertilisation supports development in a stable environment.' },
                ],
              },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Egg-laying and live-bearing each have advantages',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Embryos may develop outside the mother, inside retained eggs or directly inside the mother’s body. These
          strategies affect protection, nourishment and survival chances.
        </p>
        <ClassificationTree
          title="Patterns of embryo development"
          root={{
            label: 'Development types',
            children: [
              { label: 'Ovipary', example: 'Most birds and many reptiles', description: 'Eggs are laid and the embryo develops outside the mother.' },
              { label: 'Ovovivipary', example: 'Some sharks and reptiles', description: 'Eggs are retained inside the mother and hatch there.' },
              { label: 'Vivipary', example: 'Most mammals', description: 'The embryo develops inside the mother and is born alive.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Protective structures improve embryo survival',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Moving reproduction onto land required adaptations that prevent dehydration and protect the embryo from
          injury.
        </p>
        <ProcessFlow
          title="How land adaptations improve survival"
          steps={[
            {
              label: 'Internal fertilisation',
              icon: '🛡️',
              description: 'Gametes are protected',
              detail: 'Sperm and ova are less likely to dry out when fertilisation happens inside the body.',
            },
            {
              label: 'Amniotic egg',
              icon: '🥚',
              description: 'Membranes protect the embryo',
              detail: 'The shell and membranes reduce water loss and cushion the embryo.',
            },
            {
              label: 'Uterine development',
              icon: '🤰',
              description: 'Stable internal conditions',
              detail: 'In mammals, embryos develop in the uterus where temperature and water balance are controlled.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Parental care increases offspring survival',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Species differ in how much energy they invest in each offspring. There is usually a trade-off between the
          number of offspring and the amount of parental care.
        </p>
        <ProcessFlow
          title="The parental investment trade-off"
          steps={[
            {
              label: 'Many offspring',
              icon: '🐟',
              description: 'Often little care',
              detail: 'Fish may produce many eggs because each individual offspring has a low chance of survival.',
            },
            {
              label: 'Moderate care',
              icon: '🐦',
              description: 'Protection after hatching',
              detail: 'Birds often lay fewer eggs and guard nests, feed chicks and defend young.',
            },
            {
              label: 'Fewer offspring',
              icon: '🐘',
              description: 'High care and survival',
              detail: 'Mammals usually produce fewer young but invest heavily in feeding, protection and learning.',
            },
          ]}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When comparing strategies, always link the habitat, embryo protection and parental care to survival.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "reproduction-vertebrates-1",
    "question": "External fertilisation is most successful in animals that reproduce in:",
    "options": [
      "Very dry air",
      "Water",
      "Underground burrows only",
      "Cold mountain caves only"
    ],
    "answer": 1,
    "explanation": "Water helps sperm to swim to the egg and prevents gametes from drying out."
  },
  {
    "id": "reproduction-vertebrates-2",
    "question": "Which group generally uses internal fertilisation?",
    "options": [
      "Most birds and mammals",
      "Most mosses",
      "Most algae",
      "Most bacteria"
    ],
    "answer": 0,
    "explanation": "Birds and mammals are vertebrates that usually reproduce by internal fertilisation."
  },
  {
    "id": "reproduction-vertebrates-3",
    "question": "In ovipary, the embryo develops:",
    "options": [
      "Inside the placenta only",
      "Inside an egg outside the mother’s body",
      "By binary fission",
      "Without a food supply"
    ],
    "answer": 1,
    "explanation": "Oviparous animals lay eggs and the embryo develops outside the mother."
  },
  {
    "id": "reproduction-vertebrates-4",
    "question": "Vivipary means that the young are:",
    "options": [
      "Produced from spores",
      "Developed inside the mother and born alive",
      "Always hatched from shelled eggs",
      "Formed without fertilisation"
    ],
    "answer": 1,
    "explanation": "Viviparous animals retain the embryo in the mother and give birth to live young."
  },
  {
    "id": "reproduction-vertebrates-5",
    "question": "An important advantage of internal fertilisation on land is that it:",
    "options": [
      "Prevents all mutations",
      "Protects gametes from drying out",
      "Removes the need for gametes",
      "Always produces twins"
    ],
    "answer": 1,
    "explanation": "Internal fertilisation reduces water loss and increases the chance of successful gamete union."
  },
  {
    "id": "reproduction-vertebrates-6",
    "question": "Why do many fish produce a very large number of eggs?",
    "options": [
      "Because each egg is fertilised internally",
      "Because little parental care means many offspring will not survive",
      "Because fish embryos always develop in a uterus",
      "Because fish do not produce sperm"
    ],
    "answer": 1,
    "explanation": "Where survival is low and parental care is limited, producing many eggs increases the chance that some offspring survive."
  },
  {
    "id": "reproduction-vertebrates-7",
    "question": "The amniotic egg is especially important for vertebrates living on land because it:",
    "options": [
      "Allows photosynthesis",
      "Protects the embryo from dehydration",
      "Makes fertilisation external",
      "Stops cell division"
    ],
    "answer": 1,
    "explanation": "The amniotic egg contains membranes and often a shell that protect the embryo and reduce water loss."
  },
  {
    "id": "reproduction-vertebrates-8",
    "question": "Greater parental care usually results in:",
    "options": [
      "Fewer offspring with a higher survival rate",
      "Many more offspring with no energy cost",
      "Offspring developing without fertilisation",
      "Complete absence of competition"
    ],
    "answer": 0,
    "explanation": "Species that invest more in each offspring usually produce fewer young but improve their chances of survival."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ReproductionVertebrates = () => (
  <CapsSubjectTopic
    title="Reproduction in Vertebrates"
    subtitle="Fertilisation strategies, ovipary, vivipary and parental care"
    learnSteps={learnSteps}
    task="gr12-reproduction-vertebrates-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default ReproductionVertebrates;
