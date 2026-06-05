'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Hormones coordinate slower but longer-lasting responses',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The endocrine system uses hormones carried in the bloodstream. Its effects are slower than nervous control,
          but they usually last longer and influence many body functions.
        </p>
        <ClassificationTree
          title="Major endocrine control points"
          root={{
            label: 'Endocrine system',
            children: [
              { label: 'Pituitary gland', description: 'Controls several other glands and is often called the master gland.' },
              { label: 'Pancreas', description: 'Releases insulin and glucagon to regulate blood glucose.' },
              { label: 'Thyroid gland', description: 'Produces thyroxine to influence metabolic rate.' },
              { label: 'Adrenal glands', description: 'Release hormones such as adrenaline in stress responses.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Homeostasis keeps internal conditions stable',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Homeostasis means keeping the internal environment within suitable limits. Negative feedback reverses a
          change so that the body returns toward the set point.
        </p>
        <ProcessFlow
          title="General pattern of negative feedback"
          steps={[
            {
              label: 'Stimulus',
              icon: '📈',
              description: 'A condition changes',
              detail: 'For example, body temperature or blood glucose moves away from the normal range.',
            },
            {
              label: 'Detection',
              icon: '🧠',
              description: 'Receptors or glands respond',
              detail: 'The change is detected and information reaches a control centre or endocrine gland.',
            },
            {
              label: 'Corrective action',
              icon: '⚙️',
              description: 'Effectors or hormones act',
              detail: 'A response such as sweating, shivering, insulin release or glucagon release is triggered.',
            },
            {
              label: 'Restoration',
              icon: '✅',
              description: 'Conditions move back to normal',
              detail: 'The response reduces the original stimulus and helps restore balance.',
            },
          ]}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">Key Concept: Negative feedback</p>
          <p className="text-slate-600 mt-1">
            A response that reduces the original stimulus to restore homeostasis.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Blood glucose and temperature are tightly regulated',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Blood sugar and body temperature are classic Grade 12 examples of homeostatic control. Learners should be
          able to describe both the trigger and the corrective response.
        </p>
        <ProcessFlow
          title="Blood glucose regulation"
          steps={[
            {
              label: 'Glucose rises',
              icon: '🍞',
              description: 'After a meal',
              detail: 'The pancreas detects the increase and releases insulin.',
            },
            {
              label: 'Insulin acts',
              icon: '💉',
              description: 'Cells take up glucose',
              detail: 'Cells absorb more glucose and the liver stores some as glycogen, lowering blood glucose.',
            },
            {
              label: 'Glucose falls',
              icon: '⏬',
              description: 'During fasting or exercise',
              detail: 'The pancreas releases glucagon when glucose levels drop below normal.',
            },
            {
              label: 'Glucagon acts',
              icon: '🧪',
              description: 'Glycogen breaks down',
              detail: 'Stored glycogen is converted to glucose so the blood level rises again.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Plants also respond to stimuli',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Plant hormones such as auxins control growth responses called tropisms. The direction of growth depends on
          how auxin is distributed in the plant organ.
        </p>
        <ClassificationTree
          title="Common plant tropisms"
          root={{
            label: 'Plant responses',
            children: [
              { label: 'Phototropism', description: 'Growth in response to light; shoots usually grow toward light.' },
              { label: 'Geotropism', description: 'Growth in response to gravity; roots grow toward gravity while shoots grow away.' },
              { label: 'Auxin action', description: 'Auxin causes greater cell elongation on one side, producing bending.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            In phototropism, explain both the stimulus and the unequal growth. It is the faster elongation on one side
            that makes the shoot bend.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "endocrine-homeostasis-plant-responses-1",
    "question": "Which hormone lowers blood glucose concentration?",
    "options": [
      "Adrenaline",
      "Insulin",
      "Thyroxine",
      "Progesterone"
    ],
    "answer": 1,
    "explanation": "Insulin promotes glucose uptake by cells and storage as glycogen, lowering blood glucose."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-2",
    "question": "Homeostasis is the maintenance of a:",
    "options": [
      "Completely unchanging body",
      "Stable internal environment",
      "Permanent high temperature",
      "Single hormone level only"
    ],
    "answer": 1,
    "explanation": "Homeostasis keeps internal conditions within suitable limits despite changes outside the body."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-3",
    "question": "Negative feedback works by:",
    "options": [
      "Increasing a change indefinitely",
      "Reversing a deviation from the norm",
      "Stopping all hormone secretion",
      "Preventing all stimuli"
    ],
    "answer": 1,
    "explanation": "Negative feedback counteracts a change and moves the system back toward the set point."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-4",
    "question": "Which gland is often called the master gland?",
    "options": [
      "Pancreas",
      "Pituitary gland",
      "Adrenal gland",
      "Thyroid gland"
    ],
    "answer": 1,
    "explanation": "The pituitary gland controls several other endocrine glands through its hormones."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-5",
    "question": "Sweating helps regulate body temperature because it:",
    "options": [
      "Increases body heat rapidly",
      "Causes heat loss by evaporation",
      "Prevents blood flow to the skin",
      "Raises blood glucose"
    ],
    "answer": 1,
    "explanation": "As sweat evaporates, it removes heat from the body surface."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-6",
    "question": "Phototropism is a growth response to:",
    "options": [
      "Water",
      "Gravity",
      "Touch",
      "Light"
    ],
    "answer": 3,
    "explanation": "Phototropism is directional growth in response to light."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-7",
    "question": "Auxins are important because they:",
    "options": [
      "Carry oxygen in plants",
      "Control growth responses",
      "Digest stored starch",
      "Produce pollen grains"
    ],
    "answer": 1,
    "explanation": "Auxins are plant hormones that influence growth and tropic responses."
  },
  {
    "id": "endocrine-homeostasis-plant-responses-8",
    "question": "Roots usually show positive geotropism, which means they grow:",
    "options": [
      "Away from gravity",
      "Towards gravity",
      "Towards the moon",
      "Away from water"
    ],
    "answer": 1,
    "explanation": "Positive geotropism means growth in the direction of gravity."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const EndocrineHomeostasisPlantResponses = () => (
  <CapsSubjectTopic
    title="Endocrine System, Homeostasis and Plant Responses"
    subtitle="Hormones, negative feedback, blood glucose, thermoregulation and tropisms"
    learnSteps={learnSteps}
    task="gr12-endocrine-homeostasis-plant-responses-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default EndocrineHomeostasisPlantResponses;
