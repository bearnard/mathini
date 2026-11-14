import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "c. 440 BCE", "title": "Herodotus writes Histories", "description": "Herodotus wrote about wars and peoples of the past. He is often called the 'Father of History' because he tried to explain events using evidence."},
            {"date": "1377", "title": "Ibn Khaldun studies causes", "description": "Ibn Khaldun wrote the Muqaddimah and explained that historians should think carefully about causes and evidence. His work showed that history is more than just telling stories."},
            {"date": "1791", "title": "France creates national archives", "description": "During the French Revolution, France created a national archives system. This helped preserve records so historians could study the past more carefully."},
            {"date": "1948", "title": "Oral history grows", "description": "Modern oral history projects began recording interviews in a more organised way. This showed that memories and spoken testimony are also important historical evidence."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'History is the study of the past',
    image: {
      src: '/curriculum/grade6/his/term1/what-is-history/diagram.webp',
      alt: 'learners exploring old photographs and books to discover the past',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>History</strong> is the study of people, places, and events from the past. It helps us
          understand how life changed and why communities are the way they are today.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>past</span>
          <span className="text-slate-400">→</span>
          <span>evidence</span>
          <span className="text-slate-400">→</span>
          <span className="text-amber-700">understanding</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Historians ask questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Historians investigate the past by asking questions such as <strong>who</strong> was involved,
          <strong> what</strong> happened, <strong>where</strong> it happened, and <strong>why</strong> it mattered.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Who?</strong><br />people and groups</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>What?</strong><br />events and actions</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Why?</strong><br />causes and effects</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Evidence helps us build a story',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          We cannot visit most events from long ago, so we use <strong>evidence</strong> like photographs,
          letters, memories, maps, and objects. Different evidence can show different points of view.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-orange-50 p-4"><strong>Evidence</strong><br />clues from the past</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Context</strong><br />where and when</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Story</strong><br />what we explain</div>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What is history?', options: ['The study of the past', 'The study of weather today', 'The study of plant roots', 'The study of sums only'], answer: 'The study of the past', explanation: 'History helps us learn about people, places, and events from the past.' },
  { prompt: 'Why do we study history?', options: ['To understand how life changed over time', 'To predict tomorrow’s exact temperature', 'To make all stories the same', 'To avoid using evidence'], answer: 'To understand how life changed over time', explanation: 'History helps us understand change and how the past affects today.' },
  { prompt: 'Which question would a historian ask?', options: ['Who was involved in this event?', 'How many sides does a triangle have?', 'What is the boiling point of water?', 'Which planet is closest to the Sun?'], answer: 'Who was involved in this event?', explanation: 'Historians ask questions about people, events, places, causes, and effects.' },
  { prompt: 'What is historical evidence?', options: ['Clues that help us learn about the past', 'A guess with no support', 'A brand-new toy', 'A weather report for tomorrow'], answer: 'Clues that help us learn about the past', explanation: 'Evidence includes sources such as letters, photographs, memories, and objects.' },
  { prompt: 'Which item could help you learn about a family’s past?', options: ['An old photograph album', 'A blank page', 'A calculator with no records', 'A fresh loaf of bread'], answer: 'An old photograph album', explanation: 'Photographs can show people, places, clothing, and activities from the past.' },
  { prompt: 'What does “change over time” mean in history?', options: ['How things became different from the past to now', 'How to change a school timetable', 'How quickly a runner moves', 'How to swap answers in a quiz'], answer: 'How things became different from the past to now', explanation: 'Historians look at what stayed the same and what changed.' },
  { prompt: 'Why should historians use more than one source?', options: ['Different sources can give different information', 'One source is always perfect', 'Sources should never be compared', 'It makes evidence disappear'], answer: 'Different sources can give different information', explanation: 'Comparing sources helps us build a clearer and fairer picture.' },
  { prompt: 'What is a point of view in history?', options: ['A person’s way of seeing or explaining an event', 'The height of a mountain', 'A type of ruler used in maths', 'A direction on a compass only'], answer: 'A person’s way of seeing or explaining an event', explanation: 'People may remember or explain the same event in different ways.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about how historians study the past in order, earliest first.', options: ['Herodotus writes Histories', 'Ibn Khaldun studies causes', 'France creates national archives', 'Oral history grows'], answer: 'Herodotus writes Histories|Ibn Khaldun studies causes|France creates national archives|Oral history grows', explanation: 'The dates are c. 440 BCE, 1377, 1791 and 1948.' },
];

const WhatIsHistory = () => (
  <HisTopic
    title="What is History?"
    subtitle="Using evidence to understand the past"
    learnSteps={learnSteps}
    task="what-is-history"
    bank={bank}
  />
);

export default WhatIsHistory;
