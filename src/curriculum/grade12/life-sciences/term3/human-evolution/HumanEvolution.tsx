'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Humans share ancestry with other primates',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Humans and other primates share many anatomical and genetic similarities because they descend from a common
          ancestor. Human evolution does not mean modern humans evolved from modern chimpanzees.
        </p>
        <ClassificationTree
          title="Common ancestry in primates"
          root={{
            label: 'Ancestral primate populations',
            children: [
              { label: 'Human lineage', example: 'Hominins', description: 'Led to modern Homo sapiens.' },
              { label: 'Chimpanzee lineage', description: 'Led to modern chimpanzees and bonobos.' },
              { label: 'Other primate lineages', example: 'Gorillas and orangutans', description: 'Share broader primate ancestry.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Fossils reveal major hominid trends',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Fossils provide evidence of how hominids changed over time. Scientists use skulls, teeth, pelvises, limb
          bones and footprints to infer posture, diet and brain size.
        </p>
        <ClassificationTree
          title="Important trends seen in fossils"
          root={{
            label: 'Hominid trends',
            children: [
              { label: 'Larger cranial capacity', description: 'Brain size generally increased over time.' },
              { label: 'Flatter face', description: 'The jaw projected less forward than in earlier forms.' },
              { label: 'Reduced brow ridges', description: 'Heavy brow ridges became less prominent.' },
              { label: 'Improved bipedal features', description: 'The skeleton became better adapted for upright walking.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Bipedalism was a key adaptation',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Bipedalism means upright walking on two legs. It is recognised from several skeletal clues and offered major
          adaptive advantages.
        </p>
        <ProcessFlow
          title="Evidence and advantages of bipedalism"
          steps={[
            {
              label: 'Foramen magnum shifts',
              icon: '💀',
              description: 'More central under the skull',
              detail: 'This position supports the head on an upright vertebral column.',
            },
            {
              label: 'Pelvis changes',
              icon: '🦴',
              description: 'Bowl-shaped pelvis develops',
              detail: 'The pelvis becomes better suited to carrying body weight in an upright posture.',
            },
            {
              label: 'Leg alignment improves',
              icon: '🚶',
              description: 'Femur angles inward',
              detail: 'This helps keep body weight over the feet while walking.',
            },
            {
              label: 'Hands are freed',
              icon: '🛠️',
              description: 'Carrying and tool use improve',
              detail: 'Upright walking leaves the hands available for carrying, gathering and tool use.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Modern humans likely spread from Africa',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The Out of Africa hypothesis proposes that modern Homo sapiens evolved in Africa and then migrated to other
          parts of the world. Fossil and genetic evidence strongly supports this idea.
        </p>
        <ProcessFlow
          title="Out of Africa in outline"
          steps={[
            {
              label: 'African origin',
              icon: '🌍',
              description: 'Modern humans evolve in Africa',
              detail: 'The earliest evidence for Homo sapiens points to an African origin.',
            },
            {
              label: 'Migration begins',
              icon: '🧭',
              description: 'Populations spread outward',
              detail: 'Groups of modern humans moved into other continents over time.',
            },
            {
              label: 'Global distribution',
              icon: '🗺️',
              description: 'Humans occupy many environments',
              detail: 'Modern humans established populations in a wide range of habitats across the world.',
            },
          ]}
        />
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="font-semibold text-green-800">South African significance</p>
          <p className="text-slate-600 mt-1">
            South African fossil sites are especially important because they provide rich evidence for studying early
            hominid evolution.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Where the fossils are and where we began",
    content: (
      <div className="space-y-4">
        <GapRule>{"The Out of Africa idea holds that our species arose in Africa and later spread across the world. South Africa has famous hominin sites, most in the Cradle of Humankind in Gauteng."}</GapRule>
        <GapWorked title={"Match fossil and place"} steps={["Taung Child: Australopithecus africanus found at Taung (North West) in 1924.", "Mrs Ples: A. africanus from Sterkfontein.", "Australopithecus sediba from Malapa; Homo naledi from the Rising Star cave (described 2015)."]} />
        <GapMistake>{"Placing our origin in Europe or Asia."}</GapMistake>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "human-evolution-1",
    "question": "The study of human evolution is based strongly on:",
    "options": [
      "Fossil evidence",
      "Myths only",
      "Weather patterns",
      "Plant hormones"
    ],
    "answer": 0,
    "explanation": "Fossils provide direct evidence of past hominids and their anatomical features."
  },
  {
    "id": "human-evolution-2",
    "question": "Bipedalism means:",
    "options": [
      "Flying with two wings",
      "Walking upright on two legs",
      "Using tools to hunt",
      "Living in trees only"
    ],
    "answer": 1,
    "explanation": "Bipedal organisms move on two legs in an upright posture."
  },
  {
    "id": "human-evolution-3",
    "question": "In a bipedal skull, the foramen magnum is usually positioned:",
    "options": [
      "At the front of the face",
      "Under the skull",
      "At the back edge only",
      "Inside the jaw"
    ],
    "answer": 1,
    "explanation": "A more central position under the skull supports upright posture."
  },
  {
    "id": "human-evolution-4",
    "question": "A general trend in hominid evolution is an increase in:",
    "options": [
      "Tail length",
      "Cranial capacity",
      "Number of toes",
      "Body hair density"
    ],
    "answer": 1,
    "explanation": "Over time, many hominid lineages show increasing brain size."
  },
  {
    "id": "human-evolution-5",
    "question": "The Out of Africa hypothesis states that modern humans:",
    "options": [
      "Evolved in South America first",
      "Evolved in Africa and then spread elsewhere",
      "Evolved independently on every continent",
      "Did not share common ancestry"
    ],
    "answer": 1,
    "explanation": "This hypothesis proposes an African origin for modern Homo sapiens followed by migration."
  },
  {
    "id": "human-evolution-6",
    "question": "Humans did not evolve from modern chimpanzees; instead humans and chimpanzees:",
    "options": [
      "Are unrelated",
      "Share a common ancestor",
      "Evolved from dinosaurs",
      "Have identical DNA"
    ],
    "answer": 1,
    "explanation": "Both lineages diverged from ancestral populations in the past."
  },
  {
    "id": "human-evolution-7",
    "question": "An advantage of bipedalism is that it:",
    "options": ['Stops natural selection from acting on a population', 'Frees the hands for carrying and tool use', 'Prevents attacks by predators', 'Removes competition for food'],
    "answer": 1,
    "explanation": "Walking upright leaves the hands available for other functions."
  },
  {
    "id": "human-evolution-8",
    "question": "Which type of evidence supports the relatedness of humans and other primates?",
    "options": [
      "Only body temperature",
      "Genetic similarities",
      "Different diets only",
      "Different habitats only"
    ],
    "answer": 1,
    "explanation": "DNA and protein similarities strongly support common ancestry."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const HumanEvolution = () => (
  <CapsSubjectTopic
    title="Human Evolution"
    subtitle="Hominid fossils, common ancestry and the Out of Africa hypothesis"
    learnSteps={learnSteps}
    task="gr12-human-evolution-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default HumanEvolution;
