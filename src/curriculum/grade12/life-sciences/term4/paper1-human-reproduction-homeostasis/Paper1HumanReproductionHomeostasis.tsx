'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise the sequence of human reproduction',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Paper 1 frequently tests whether learners can place reproductive events in the correct order from gamete
          production to pregnancy.
        </p>
        <ProcessFlow
          title="Core sequence in human reproduction"
          steps={[
            {
              label: 'Gametes form',
              icon: '🧫',
              description: 'Sperm and ova are produced',
              detail: 'The testes produce sperm and the ovaries produce ova.',
            },
            {
              label: 'Ovulation',
              icon: '🌕',
              description: 'An ovum is released',
              detail: 'A mature ovum is released from the ovary into the oviduct.',
            },
            {
              label: 'Fertilisation',
              icon: '🔬',
              description: 'A zygote forms',
              detail: 'One sperm nucleus fuses with the ovum nucleus in the oviduct.',
            },
            {
              label: 'Implantation',
              icon: '📍',
              description: 'The embryo embeds',
              detail: 'The embryo attaches to the endometrium in the uterus.',
            },
            {
              label: 'Gestation',
              icon: '🤰',
              description: 'Foetal development continues',
              detail: 'The foetus develops in the uterus with support from the placenta.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Link hormones to reproductive events',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Menstrual-cycle questions often require learners to match a hormone to its main reproductive effect.
        </p>
        <ClassificationTree
          title="Hormones and their main roles"
          root={{
            label: 'Reproductive hormones',
            children: [
              { label: 'FSH', description: 'Stimulates follicle development in the ovary.' },
              { label: 'LH', description: 'Triggers ovulation.' },
              { label: 'Oestrogen', description: 'Repairs and thickens the endometrium.' },
              { label: 'Progesterone', description: 'Maintains the uterine lining after ovulation.' },
            ],
          }}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Hormone graphs</p>
          <p className="text-slate-600 mt-1">
            Read the graph shape carefully: the LH surge is short and sharp, while progesterone stays high after
            ovulation if the corpus luteum is active.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Homeostasis questions focus on feedback loops',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Blood glucose regulation and thermoregulation are favourites because they test whether learners can explain a
          complete negative-feedback loop.
        </p>
        <ProcessFlow
          title="Negative feedback in homeostasis"
          steps={[
            {
              label: 'Condition changes',
              icon: '📉',
              description: 'A variable moves from normal',
              detail: 'Blood glucose falls or body temperature rises above the set point.',
            },
            {
              label: 'Control centre responds',
              icon: '🧠',
              description: 'Detection occurs',
              detail: 'The pancreas or hypothalamus detects the change and activates a response.',
            },
            {
              label: 'Corrective action',
              icon: '⚙️',
              description: 'Hormones or effectors act',
              detail: 'Examples include glucagon release, sweating, vasodilation or shivering.',
            },
            {
              label: 'Balance returns',
              icon: '✅',
              description: 'The stimulus is reduced',
              detail: 'The original change is reversed and internal conditions move back toward normal.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Use applied physiology to answer scenarios',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Scenario questions ask learners to apply knowledge to diabetes, fever, infertility or pregnancy care.
          Successful answers identify the disrupted process and then explain the biological correction.
        </p>
        <ClassificationTree
          title="Scenario-based revision checklist"
          root={{
            label: 'Applied physiology',
            children: [
              { label: 'Diabetes', description: 'Link symptoms to blood-glucose control and insulin.' },
              { label: 'Fever or heat', description: 'Explain sweating, vasodilation and heat loss.' },
              { label: 'Infertility', description: 'Connect structures, hormones and fertilisation.' },
              { label: 'Pregnancy care', description: 'Use the placenta, amnion and hormonal support in explanations.' },
            ],
          }}
        />
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "paper1-human-reproduction-homeostasis-1",
    "question": "Which hormone triggers ovulation?",
    "options": [
      "Insulin",
      "LH",
      "Adrenaline",
      "Glucagon"
    ],
    "answer": 1,
    "explanation": "A surge in luteinising hormone (LH) causes ovulation."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-2",
    "question": "Fertilisation forms a:",
    "options": [
      "Foetus",
      "Placenta",
      "Zygote",
      "Follicle"
    ],
    "answer": 2,
    "explanation": "Fertilisation is the fusion of gamete nuclei to form a zygote."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-3",
    "question": "What happens during implantation?",
    "options": [
      "The sperm enters the ovary",
      "The embryo embeds in the endometrium",
      "The ovum is released from the ovary",
      "The placenta detaches"
    ],
    "answer": 1,
    "explanation": "Implantation is the attachment of the embryo to the uterine lining."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-4",
    "question": "Which organ releases insulin?",
    "options": [
      "Liver",
      "Pancreas",
      "Pituitary gland",
      "Kidney"
    ],
    "answer": 1,
    "explanation": "The pancreas secretes insulin when blood glucose rises."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-5",
    "question": "Shivering helps to:",
    "options": [
      "Lower blood glucose",
      "Increase heat production",
      "Cause ovulation",
      "Reduce breathing rate"
    ],
    "answer": 1,
    "explanation": "Shivering is rapid muscle contraction that generates heat when the body is cold."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-6",
    "question": "The placenta does NOT normally:",
    "options": [
      "Allow nutrient exchange",
      "Connect to the foetus through the umbilical cord",
      "Mix maternal and foetal blood directly",
      "Remove foetal wastes"
    ],
    "answer": 2,
    "explanation": "The placenta enables exchange without the direct mixing of maternal and foetal blood."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-7",
    "question": "If blood glucose falls below normal, the hormone that helps raise it is:",
    "options": [
      "Progesterone",
      "Glucagon",
      "Oestrogen",
      "Thyroxine"
    ],
    "answer": 1,
    "explanation": "Glucagon stimulates the conversion of glycogen to glucose, raising blood sugar."
  },
  {
    "id": "paper1-human-reproduction-homeostasis-8",
    "question": "Menstrual-cycle questions usually require learners to connect hormones with the condition of the:",
    "options": [
      "Retina",
      "Endometrium",
      "Cochlea",
      "Alveolus"
    ],
    "answer": 1,
    "explanation": "Hormones control the building and breakdown of the endometrium during the menstrual cycle."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Paper1HumanReproductionHomeostasis = () => (
  <CapsSubjectTopic
    title="Paper 1 — Human Reproduction and Homeostasis"
    subtitle="Revising reproduction, pregnancy, hormonal control and internal balance"
    learnSteps={learnSteps}
    task="gr12-paper1-human-reproduction-homeostasis-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default Paper1HumanReproductionHomeostasis;
