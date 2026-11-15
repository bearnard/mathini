'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The nervous system coordinates rapid responses',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The nervous system detects stimuli, processes information and sends fast impulses to effectors. Learners
          should know how the central and peripheral nervous systems work together.
        </p>
        <ClassificationTree
          title="Organisation of the nervous system"
          root={{
            label: 'Nervous system',
            children: [
              {
                label: 'Central nervous system',
                children: [
                  { label: 'Brain', description: 'Integrates information and coordinates responses.' },
                  { label: 'Spinal cord', description: 'Relays impulses and controls many reflexes.' },
                ],
              },
              {
                label: 'Peripheral nervous system',
                children: [
                  { label: 'Sensory neurons', description: 'Carry impulses from receptors to the CNS.' },
                  { label: 'Motor neurons', description: 'Carry impulses from the CNS to effectors.' },
                ],
              },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'A reflex arc protects the body quickly',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Reflex actions are rapid and automatic. They reduce reaction time because the response is coordinated through
          the spinal cord before the brain fully processes the event.
        </p>
        <ProcessFlow
          title="Pathway of a reflex arc"
          steps={[
            {
              label: 'Stimulus',
              icon: '🔥',
              description: 'A receptor detects danger',
              detail: 'A receptor in the skin detects a sudden harmful stimulus such as heat.',
            },
            {
              label: 'Sensory neuron',
              icon: '📨',
              description: 'Impulse travels to the CNS',
              detail: 'The sensory neuron carries the impulse to the spinal cord.',
            },
            {
              label: 'Interneuron',
              icon: '🧠',
              description: 'Impulse is relayed',
              detail: 'An interneuron in the CNS connects the sensory and motor pathways.',
            },
            {
              label: 'Motor neuron',
              icon: '⚡',
              description: 'Command leaves the CNS',
              detail: 'The motor neuron carries the response impulse to the effector.',
            },
            {
              label: 'Effector responds',
              icon: '💪',
              description: 'The body withdraws',
              detail: 'A muscle contracts or a gland secretes to protect the body quickly.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The eye is adapted for light reception and focusing',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The eye controls the amount of light entering and changes lens shape so that images from near and far can
          be focused sharply on the retina.
        </p>
        <ProcessFlow
          title="Accommodation for a near object"
          steps={[
            {
              label: 'Ciliary muscles contract',
              icon: '🔄',
              description: 'Tension changes',
              detail: 'The suspensory ligaments become less taut when the ciliary muscles contract.',
            },
            {
              label: 'Lens thickens',
              icon: '👁️',
              description: 'More refraction occurs',
              detail: 'The lens becomes more convex so that light is bent more strongly.',
            },
            {
              label: 'Image focuses',
              icon: '🎯',
              description: 'Retina receives a sharp image',
              detail: 'The refracted rays are focused on the retina where receptor cells detect the light.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The ear enables hearing and balance',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The inner ear contains different structures for hearing and balance. CAPS questions often require learners to
          compare these functions clearly.
        </p>
        <ClassificationTree
          title="Functions of the inner ear"
          root={{
            label: 'Inner ear',
            children: [
              { label: 'Cochlea', description: 'Contains receptor cells that convert vibrations into nerve impulses for hearing.' },
              { label: 'Semicircular canals', description: 'Detect movement of the head and help maintain balance.' },
              { label: 'Auditory nerve', description: 'Carries impulses from the ear to the brain.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Do not confuse the cochlea, which is for hearing, with the semicircular canals, which help with balance.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "nervous-system-sense-organs-1",
    "question": "Which neuron carries impulses from a receptor to the central nervous system?",
    "options": [
      "Motor neuron",
      "Relay neuron",
      "Sensory neuron",
      "Interneuron only"
    ],
    "answer": 2,
    "explanation": "Sensory neurons carry impulses from receptors to the CNS."
  },
  {
    "id": "nervous-system-sense-organs-2",
    "question": "A reflex action is best described as:",
    "options": [
      "A slow learned response",
      "A rapid automatic response",
      "A purely hormonal response",
      "A response that needs no receptor"
    ],
    "answer": 1,
    "explanation": "Reflexes are quick, automatic responses that help protect the body."
  },
  {
    "id": "nervous-system-sense-organs-3",
    "question": "Which part of the eye controls the size of the pupil?",
    "options": [
      "Retina",
      "Iris",
      "Cornea",
      "Optic nerve"
    ],
    "answer": 1,
    "explanation": "The iris contains circular and radial muscles that adjust pupil size."
  },
  {
    "id": "nervous-system-sense-organs-4",
    "question": "Accommodation in the eye refers to the ability of the lens to:",
    "options": [
      "Produce tears",
      "Change shape to focus light",
      "Detect colour only",
      "Move the eyeball in its socket"
    ],
    "answer": 1,
    "explanation": "The lens becomes thicker or thinner so that images focus on the retina."
  },
  {
    "id": "nervous-system-sense-organs-5",
    "question": "The part of the ear responsible for hearing is the:",
    "options": [
      "Semicircular canals",
      "Cochlea",
      "Eustachian tube",
      "Pinna only"
    ],
    "answer": 1,
    "explanation": "The cochlea contains receptor cells that convert vibrations into nerve impulses for hearing."
  },
  {
    "id": "nervous-system-sense-organs-6",
    "question": "Which structure helps with balance?",
    "options": [
      "Cochlea",
      "Semicircular canals",
      "Auditory nerve only",
      "Ear lobe"
    ],
    "answer": 1,
    "explanation": "The semicircular canals detect head movement and assist with balance."
  },
  {
    "id": "nervous-system-sense-organs-7",
    "question": "The central nervous system consists of the:",
    "options": [
      "Brain and spinal cord",
      "Brain and nerves",
      "Receptors and effectors",
      "Spinal cord and muscles"
    ],
    "answer": 0,
    "explanation": "The CNS is made up of the brain and spinal cord."
  },
  {
    "id": "nervous-system-sense-organs-8",
    "question": "The tiny gap between two neurons is called a:",
    "options": [
      "Reflex arc",
      "Synapse",
      "Lens",
      "Node"
    ],
    "answer": 1,
    "explanation": "Neurons communicate across a synapse using neurotransmitters."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NervousSystemSenseOrgans = () => (
  <CapsSubjectTopic
    title="Nervous System and Sense Organs"
    subtitle="Neurons, reflexes, coordination, the eye and the ear"
    learnSteps={learnSteps}
    task="gr12-nervous-system-sense-organs-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default NervousSystemSenseOrgans;
