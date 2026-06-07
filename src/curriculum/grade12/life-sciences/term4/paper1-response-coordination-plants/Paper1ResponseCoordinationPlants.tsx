'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/ls/term4/paper1-response-coordination-plants/diagram.webp", alt: "Systems of response coordination" },
    title: 'Coordinate the nervous and endocrine systems',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Paper 1 often asks learners to compare rapid nervous control with slower endocrine control and then apply the
          right system to a specific example.
        </p>
        <ClassificationTree
          title="Systems of response coordination"
          root={{
            label: 'Response coordination',
            children: [
              { label: 'Nervous system', description: 'Uses electrical impulses for rapid, short-lived responses.' },
              { label: 'Endocrine system', description: 'Uses hormones in the blood for slower, longer-lasting responses.' },
              { label: 'Plant hormones', description: 'Control growth responses such as phototropism and geotropism.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Focus on pathways in reflexes and sense organs',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Many questions test pathways: from receptor to coordinator to effector. Clear sequencing helps learners avoid
          mixing up structures and functions.
        </p>
        <ProcessFlow
          title="Reflex arc revision pathway"
          steps={[
            {
              label: 'Receptor detects',
              icon: '👂',
              description: 'A stimulus is received',
              detail: 'A receptor such as pain or temperature receptor detects the change.',
            },
            {
              label: 'Sensory neuron carries',
              icon: '📨',
              description: 'Impulse travels inward',
              detail: 'The impulse moves toward the CNS.',
            },
            {
              label: 'Coordinator processes',
              icon: '🧠',
              description: 'CNS integration',
              detail: 'The spinal cord or brain interprets the impulse and plans a response.',
            },
            {
              label: 'Motor neuron carries',
              icon: '⚡',
              description: 'Impulse travels outward',
              detail: 'The response impulse moves to the effector.',
            },
            {
              label: 'Effector acts',
              icon: '💪',
              description: 'A response happens',
              detail: 'A muscle contracts or a gland secretes.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Negative feedback is central to Paper 1 physiology',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Learners should be able to explain how negative feedback restores internal balance using body temperature or
          blood glucose as examples.
        </p>
        <ProcessFlow
          title="Thermoregulation in outline"
          steps={[
            {
              label: 'Body gets too hot',
              icon: '☀️',
              description: 'Temperature rises',
              detail: 'The hypothalamus detects the increase in body temperature.',
            },
            {
              label: 'Cooling responses',
              icon: '💧',
              description: 'Sweating and vasodilation',
              detail: 'Sweat evaporates and more blood flows near the skin for heat loss.',
            },
            {
              label: 'Body gets too cold',
              icon: '❄️',
              description: 'Temperature falls',
              detail: 'The hypothalamus detects the drop in body temperature.',
            },
            {
              label: 'Warming responses',
              icon: '🔥',
              description: 'Shivering and vasoconstriction',
              detail: 'Muscle activity increases heat production and blood flow near the skin is reduced.',
            },
          ]}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Homeostasis</p>
          <p className="text-slate-600 mt-1">
            The body does not keep conditions completely fixed; it keeps them within a suitable range around a set point.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Plant responses need experimental interpretation',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Plant-response questions often use simple experiments. Learners must explain how auxin distribution produces
          unequal growth and therefore bending.
        </p>
        <ProcessFlow
          title="Phototropism in a shoot"
          steps={[
            {
              label: 'Light comes from one side',
              icon: '💡',
              description: 'Stimulus is directional',
              detail: 'Only one side of the shoot is directly illuminated.',
            },
            {
              label: 'Auxin redistributes',
              icon: '🌿',
              description: 'More auxin moves to the shaded side',
              detail: 'Auxin accumulates away from the light source.',
            },
            {
              label: 'Cells elongate faster',
              icon: '📏',
              description: 'Growth differs across the shoot',
              detail: 'Cells on the shaded side grow longer than cells on the lit side.',
            },
            {
              label: 'Shoot bends',
              icon: '↗️',
              description: 'Positive phototropism',
              detail: 'The shoot curves toward the light because of unequal growth.',
            },
          ]}
        />
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "paper1-response-coordination-plants-1",
    "question": "Which system uses electrical impulses for rapid communication?",
    "options": [
      "Endocrine system",
      "Nervous system",
      "Digestive system",
      "Circulatory system only"
    ],
    "answer": 1,
    "explanation": "The nervous system sends rapid impulses along neurons."
  },
  {
    "id": "paper1-response-coordination-plants-2",
    "question": "In a reflex arc, the organ that carries out the response is the:",
    "options": [
      "Receptor",
      "Effector",
      "Stimulus",
      "Hormone"
    ],
    "answer": 1,
    "explanation": "The effector, such as a muscle or gland, performs the response."
  },
  {
    "id": "paper1-response-coordination-plants-3",
    "question": "The retina contains:",
    "options": [
      "Hormone glands",
      "Light receptors",
      "Air sacs",
      "Bone cells"
    ],
    "answer": 1,
    "explanation": "The retina contains receptor cells that detect light."
  },
  {
    "id": "paper1-response-coordination-plants-4",
    "question": "Which structure of the ear is responsible for balance?",
    "options": [
      "Cochlea",
      "Semicircular canals",
      "Pinna",
      "Eardrum"
    ],
    "answer": 1,
    "explanation": "The semicircular canals help detect movement and maintain balance."
  },
  {
    "id": "paper1-response-coordination-plants-5",
    "question": "Hormones are transported mainly by the:",
    "options": [
      "Bloodstream",
      "Skin",
      "Air in the lungs",
      "Synaptic cleft only"
    ],
    "answer": 0,
    "explanation": "Endocrine glands release hormones into the blood for transport to target organs."
  },
  {
    "id": "paper1-response-coordination-plants-6",
    "question": "A shoot bending towards light is an example of:",
    "options": [
      "Positive phototropism",
      "Negative geotropism only",
      "Negative phototropism",
      "Random movement"
    ],
    "answer": 0,
    "explanation": "Growth towards light is called positive phototropism."
  },
  {
    "id": "paper1-response-coordination-plants-7",
    "question": "Unequal distribution of auxin in a shoot causes cells on one side to:",
    "options": [
      "Stop dividing completely",
      "Elongate more than the other side",
      "Lose all water",
      "Become roots"
    ],
    "answer": 1,
    "explanation": "Greater cell elongation on one side of the shoot causes bending."
  },
  {
    "id": "paper1-response-coordination-plants-8",
    "question": "The main function of negative feedback in physiology is to:",
    "options": [
      "Create larger deviations",
      "Restore conditions toward normal",
      "Prevent all hormone action",
      "Stop receptor activity"
    ],
    "answer": 1,
    "explanation": "Negative feedback reverses a change and helps maintain homeostasis."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Paper1ResponseCoordinationPlants = () => (
  <CapsSubjectTopic
    title="Paper 1 — Response Coordination and Plant Responses"
    subtitle="Nervous coordination, endocrine control, receptors and tropisms"
    learnSteps={learnSteps}
    task="gr12-paper1-response-coordination-plants-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default Paper1ResponseCoordinationPlants;
