'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Male and female organs have specific reproductive roles',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Human reproduction depends on specialised male and female organs. Each structure has a role in producing
          gametes, transporting them or supporting fertilisation and development.
        </p>
        <ClassificationTree
          title="Human reproductive structures"
          root={{
            label: 'Human reproduction',
            children: [
              {
                label: 'Male system',
                children: [
                  { label: 'Testes', description: 'Produce sperm cells and testosterone.' },
                  { label: 'Sperm ducts', description: 'Transport sperm away from the testes.' },
                  { label: 'Accessory glands', example: 'Prostate and seminal vesicles', description: 'Add fluid that nourishes and protects sperm.' },
                ],
              },
              {
                label: 'Female system',
                children: [
                  { label: 'Ovaries', description: 'Produce ova, oestrogen and progesterone.' },
                  { label: 'Oviducts', description: 'Usually the site of fertilisation.' },
                  { label: 'Uterus', description: 'Supports implantation and foetal development.' },
                ],
              },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'The menstrual cycle is controlled by hormones',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Hormones coordinate follicle development, ovulation and the condition of the endometrium. CAPS questions
          often ask learners to link each hormone to its main effect.
        </p>
        <ProcessFlow
          title="Hormonal control of the menstrual cycle"
          steps={[
            {
              label: 'FSH rises',
              icon: '🌱',
              description: 'Follicle matures',
              detail: 'FSH stimulates the development of an ovarian follicle and encourages oestrogen production.',
            },
            {
              label: 'Oestrogen increases',
              icon: '🩸',
              description: 'Endometrium rebuilds',
              detail: 'Oestrogen repairs and thickens the uterine lining after menstruation.',
            },
            {
              label: 'LH surge',
              icon: '💥',
              description: 'Ovulation occurs',
              detail: 'A high LH level triggers the release of a mature ovum from the ovary.',
            },
            {
              label: 'Progesterone acts',
              icon: '🛡️',
              description: 'Lining is maintained',
              detail: 'Progesterone keeps the endometrium thick and ready for implantation after ovulation.',
            },
          ]}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Ovulation</p>
          <p className="text-slate-600 mt-1">
            Ovulation is the release of a mature ovum from the ovary, usually around the middle of the cycle after
            an LH surge.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Fertilisation and implantation begin pregnancy',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Pregnancy starts when a sperm nucleus fuses with an ovum nucleus in the oviduct. The new zygote divides by
          mitosis while moving to the uterus.
        </p>
        <ProcessFlow
          title="From fertilisation to implantation"
          steps={[
            {
              label: 'Fertilisation',
              icon: '🔬',
              description: 'Gamete nuclei fuse',
              detail: 'One sperm cell fuses with the ovum to form a diploid zygote.',
            },
            {
              label: 'Cleavage',
              icon: '➗',
              description: 'The zygote divides',
              detail: 'Repeated mitosis produces a ball of cells while the embryo travels toward the uterus.',
            },
            {
              label: 'Embryo forms',
              icon: '🧫',
              description: 'Cells begin to specialise',
              detail: 'The developing embryo becomes ready to attach to the uterine lining.',
            },
            {
              label: 'Implantation',
              icon: '📍',
              description: 'Embryo embeds',
              detail: 'The embryo implants in the thickened endometrium of the uterus.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The placenta supports the developing foetus',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          During gestation, the foetus depends on support structures that protect it and allow exchange with the
          mother without direct mixing of blood.
        </p>
        <ClassificationTree
          title="Pregnancy support structures"
          root={{
            label: 'Foetal support',
            children: [
              { label: 'Placenta', description: 'Allows exchange of oxygen, nutrients and wastes.' },
              { label: 'Umbilical cord', description: 'Connects the foetus to the placenta.' },
              { label: 'Amniotic fluid', description: 'Cushions the foetus and helps maintain stable conditions.' },
              { label: 'Amnion', description: 'Membrane surrounding the amniotic fluid.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When asked about the placenta, mention exchange, protection and the fact that maternal and foetal blood
            do not normally mix directly.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "human-reproduction-1",
    "question": "Which organ produces sperm in human males?",
    "options": [
      "Prostate gland",
      "Scrotum",
      "Testes",
      "Urethra"
    ],
    "answer": 2,
    "explanation": "The testes are the male gonads that produce sperm cells and testosterone."
  },
  {
    "id": "human-reproduction-2",
    "question": "Ovulation normally occurs when:",
    "options": [
      "The embryo implants in the uterus",
      "An ovum is released from the ovary",
      "Menstruation starts",
      "Sperm are produced in the testes"
    ],
    "answer": 1,
    "explanation": "Ovulation is the release of a mature ovum from the ovary."
  },
  {
    "id": "human-reproduction-3",
    "question": "Fertilisation in humans usually takes place in the:",
    "options": [
      "Uterus",
      "Oviduct",
      "Cervix",
      "Placenta"
    ],
    "answer": 1,
    "explanation": "The sperm usually meets the ovum in the oviduct (fallopian tube)."
  },
  {
    "id": "human-reproduction-4",
    "question": "Which hormone helps maintain the uterine lining after ovulation?",
    "options": [
      "Adrenaline",
      "Insulin",
      "Progesterone",
      "Growth hormone"
    ],
    "answer": 2,
    "explanation": "Progesterone keeps the endometrium thick and ready for implantation."
  },
  {
    "id": "human-reproduction-5",
    "question": "Implantation refers to:",
    "options": [
      "The release of an ovum from the ovary",
      "The embryo embedding in the uterine lining",
      "The fusion of sperm and egg nuclei",
      "The start of labour"
    ],
    "answer": 1,
    "explanation": "Implantation occurs when the developing embryo attaches to the endometrium."
  },
  {
    "id": "human-reproduction-6",
    "question": "A major function of the placenta is to:",
    "options": [
      "Produce sperm",
      "Allow exchange of nutrients and wastes between mother and foetus",
      "Digest food for the foetus",
      "Pump blood through the foetus"
    ],
    "answer": 1,
    "explanation": "The placenta is the exchange organ between the mother and the developing foetus."
  },
  {
    "id": "human-reproduction-7",
    "question": "Menstruation occurs if:",
    "options": [
      "Fertilisation definitely takes place",
      "The endometrium breaks down when pregnancy does not occur",
      "The placenta enlarges rapidly",
      "All ovarian follicles are destroyed"
    ],
    "answer": 1,
    "explanation": "If there is no implantation, hormone levels fall and the thickened endometrium is shed."
  },
  {
    "id": "human-reproduction-8",
    "question": "The umbilical cord connects the foetus to the:",
    "options": [
      "Ovary",
      "Placenta",
      "Cervix",
      "Fallopian tube"
    ],
    "answer": 1,
    "explanation": "The umbilical cord links the foetus to the placenta for transport of substances."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const HumanReproduction = () => (
  <CapsSubjectTopic
    title="Human Reproduction"
    subtitle="Reproductive systems, menstrual cycle, fertilisation and pregnancy"
    learnSteps={learnSteps}
    task="gr12-human-reproduction-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default HumanReproduction;
