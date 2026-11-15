'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import ProcessFlow from '@/components/subjects/ProcessFlow';
import ClassificationTree from '@/components/subjects/ClassificationTree';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Trial revision must connect topics across papers',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Strong revision links molecular biology, physiology, genetics and evolution instead of studying each topic in
          isolation. Trial examinations often test whether learners can move between these ideas quickly.
        </p>
        <ClassificationTree
          title="Grade 12 Life Sciences revision map"
          root={{
            label: 'Trial exam content',
            children: [
              { label: 'Molecular biology', example: 'DNA, protein synthesis, meiosis', description: 'Paper 2 foundations.' },
              { label: 'Physiology', example: 'Reproduction, homeostasis, nervous control', description: 'Main Paper 1 focus.' },
              { label: 'Genetics', example: 'Inheritance, pedigrees, mutations', description: 'Links Paper 2 problem-solving topics.' },
              { label: 'Evolution', example: 'Natural selection and human evolution', description: 'Requires evidence-based explanation.' },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Use diagrams, tables and graphs actively',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Revision is not only about recall. Learners must practise extracting evidence from diagrams, tables, graphs
          and data-response material.
        </p>
        <ProcessFlow
          title="How to read a data-response question"
          steps={[
            {
              label: 'Read the heading',
              icon: '📰',
              description: 'Identify the topic',
              detail: 'Start by working out what the data set or diagram is about.',
            },
            {
              label: 'Check labels and axes',
              icon: '📐',
              description: 'Know what is being measured',
              detail: 'Units, axis labels and keys tell you how to interpret the information correctly.',
            },
            {
              label: 'Look for trends',
              icon: '📈',
              description: 'Compare values carefully',
              detail: 'Identify increases, decreases, peaks, similarities or differences before answering.',
            },
            {
              label: 'Use evidence in the answer',
              icon: '✍️',
              description: 'Quote or compare data',
              detail: 'Support your conclusion with specific values or observations from the source.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Structured answers need clear biological reasoning',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Paragraph questions reward logical cause-and-effect thinking. Good answers use scientific vocabulary and show
          why each event leads to the next.
        </p>
        <ProcessFlow
          title="Building a strong paragraph answer"
          steps={[
            {
              label: 'Identify the command word',
              icon: '🧭',
              description: 'Explain, describe or compare?',
              detail: 'The command word determines how much reasoning is needed.',
            },
            {
              label: 'Sequence the biology',
              icon: '1️⃣',
              description: 'Put events in order',
              detail: 'Arrange the main points so the explanation follows a clear biological sequence.',
            },
            {
              label: 'Use correct terminology',
              icon: '📚',
              description: 'Name structures and processes',
              detail: 'Terms such as allele, codon, endometrium and homeostasis carry marks.',
            },
            {
              label: 'Link cause and effect',
              icon: '🔗',
              description: 'Show why each step matters',
              detail: 'Avoid listing facts; explain how one event causes the next.',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Exam technique improves marks under pressure',
    content: (
      <div className="space-y-6 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Good content knowledge must be paired with smart exam habits. Time management and careful reading can save
          marks in trial papers.
        </p>
        <ClassificationTree
          title="Command words to recognise"
          root={{
            label: 'Exam language',
            children: [
              { label: 'Identify / name', description: 'Give the correct term only.' },
              { label: 'Describe', description: 'State what happens or what is seen.' },
              { label: 'Explain', description: 'Give reasons or cause-and-effect links.' },
              { label: 'Compare', description: 'Show similarities and differences.' },
              { label: 'Calculate', description: 'Use data and show working where needed.' },
            ],
          }}
        />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Answer what is asked, not everything you know. Trial papers reward precision as much as knowledge.
          </p>
        </div>
      </div>
    ),
  },
];

const items: LifeSciencesItem[] = [
  {
    "id": "revision-trial-examinations-1",
    "question": "Which process produces genetic variation through crossing over and independent assortment?",
    "options": [
      "Mitosis",
      "Meiosis",
      "Diffusion",
      "Photosynthesis"
    ],
    "answer": 1,
    "explanation": "Meiosis creates variation through chromosome behaviour in meiosis I and random fertilisation."
  },
  {
    "id": "revision-trial-examinations-2",
    "question": "Which hormone lowers blood glucose after a meal?",
    "options": [
      "Adrenaline",
      "Insulin",
      "Progesterone",
      "FSH"
    ],
    "answer": 1,
    "explanation": "Insulin helps return blood glucose to the normal range after it rises."
  },
  {
    "id": "revision-trial-examinations-3",
    "question": "A codon on mRNA contains:",
    "options": [
      "One base",
      "Two bases",
      "Three bases",
      "Four bases"
    ],
    "answer": 2,
    "explanation": "Protein synthesis uses triplets of bases called codons."
  },
  {
    "id": "revision-trial-examinations-4",
    "question": "The placenta is important because it:",
    "options": ['Produces sperm for fertilisation in the uterus', 'Allows exchange between mother and foetus', 'Stores urine for the foetus', 'Controls hearing in the foetus'],
    "answer": 1,
    "explanation": "The placenta enables exchange of oxygen, nutrients and wastes during pregnancy."
  },
  {
    "id": "revision-trial-examinations-5",
    "question": "Natural selection acts on inherited variation in a:",
    "options": [
      "Population",
      "Single chromosome only",
      "Food chain only",
      "Laboratory diagram only"
    ],
    "answer": 0,
    "explanation": "Selection changes the frequency of inherited traits in populations over time."
  },
  {
    "id": "revision-trial-examinations-6",
    "question": "A pedigree diagram is used to study:",
    "options": [
      "The digestive system",
      "Inheritance through generations",
      "Protein synthesis only",
      "Plant tropisms only"
    ],
    "answer": 1,
    "explanation": "Pedigrees track how a trait appears in families over generations."
  },
  {
    "id": "revision-trial-examinations-7",
    "question": "Homeostasis relies mainly on:",
    "options": [
      "Negative feedback",
      "Random mutation",
      "Fertilisation only",
      "Uncontrolled cell division"
    ],
    "answer": 0,
    "explanation": "Negative feedback helps restore internal conditions to normal ranges."
  },
  {
    "id": "revision-trial-examinations-8",
    "question": "Which source gives direct evidence of human evolution?",
    "options": [
      "Timetables",
      "Fossils",
      "Cloud cover",
      "Music recordings"
    ],
    "answer": 1,
    "explanation": "Fossils provide direct anatomical evidence from past hominids."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const RevisionTrialExaminations = () => (
  <CapsSubjectTopic
    title="Revision and Trial Examinations"
    subtitle="Integrating Paper 1 and Paper 2 content for trial exams"
    learnSteps={learnSteps}
    task="gr12-revision-trial-examinations-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default RevisionTrialExaminations;
