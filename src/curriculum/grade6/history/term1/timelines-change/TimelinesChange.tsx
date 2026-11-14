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
            {"date": "45 BCE", "title": "Julian calendar begins", "description": "Julius Caesar introduced the Julian calendar in Rome. It helped organise dates more clearly across years."},
            {"date": "525 CE", "title": "AD dating proposed", "description": "Dionysius Exiguus helped popularise numbering years from AD 1. This became important for timelines using BC and AD."},
            {"date": "1582", "title": "Gregorian calendar introduced", "description": "Pope Gregory XIII introduced a new calendar to correct errors in the Julian system. The Gregorian calendar later became the world's most widely used calendar."},
            {"date": "1949", "title": "Radiocarbon dating improves timelines", "description": "Willard Libby developed radiocarbon dating for ancient materials. It helped historians and archaeologists place past events more accurately in time."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Timelines put events in order',
    image: {
      src: '/curriculum/grade6/his/term1/timelines-change/diagram.svg',
      alt: 'horizontal timeline with dates and events in chronological order',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>timeline</strong> shows events in <strong>chronological order</strong>, from earliest to
          latest. It helps us see when events happened and how they connect.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>earliest</span>
          <span className="text-slate-400">→</span>
          <span>middle</span>
          <span className="text-slate-400">→</span>
          <span className="text-sky-700">latest</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Years, decades, and centuries',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Historians measure time using <strong>years</strong>, <strong>decades</strong>, and
          <strong> centuries</strong>. A decade is 10 years, and a century is 100 years.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Year</strong><br />12 months</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Decade</strong><br />10 years</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Century</strong><br />100 years</div>
        </div>
      </div>
    ),
  },
  {
    title: 'BC and AD on timelines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many timelines use <strong>BC</strong> for years before the year AD 1 and <strong>AD</strong> for
          years after that. In BC, bigger numbers are further back in the past.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4"><strong>BC</strong><br />before AD 1</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>AD</strong><br />after AD 1</div>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What does chronological order mean?', options: ['Events arranged from earliest to latest', 'Events arranged from tallest to shortest', 'Events arranged by favourite colour', 'Events arranged with no dates'], answer: 'Events arranged from earliest to latest', explanation: 'Chronological order follows time order.' },
  { prompt: 'What is a timeline?', options: ['A diagram that shows events in time order', 'A list of food groups', 'A map showing rainfall only', 'A tool for measuring mass'], answer: 'A diagram that shows events in time order', explanation: 'Timelines help us see when events happened.' },
  { prompt: 'How many years are in a decade?', options: ['10 years', '5 years', '50 years', '100 years'], answer: '10 years', explanation: 'A decade is a period of ten years.' },
  { prompt: 'How many years are in a century?', options: ['100 years', '10 years', '12 years', '1 000 years'], answer: '100 years', explanation: 'A century is a period of one hundred years.' },
  { prompt: 'Which date comes first in chronological order?', options: ['1905', '1910', '1948', '2001'], answer: '1905', explanation: 'When all dates are AD years, the smaller year happened earlier.' },
  { prompt: 'What does BC mean on many timelines?', options: ['Before the year AD 1', 'Behind the clock', 'Between centuries only', 'Best century'], answer: 'Before the year AD 1', explanation: 'BC is used for dates before AD 1.' },
  { prompt: 'What does AD mean on many timelines?', options: ['Years after AD 1', 'All dates before history', 'A decade of animals', 'Another diary'], answer: 'Years after AD 1', explanation: 'AD is used for years after AD 1 on many timelines.' },
  { prompt: 'Which BC date is further back in the past?', options: ['500 BC', '200 BC', '50 BC', '1 BC'], answer: '500 BC', explanation: 'In BC dates, bigger numbers are earlier and further from AD 1.' },
  { prompt: 'Why are timelines useful in history?', options: ['They show order and change over time', 'They replace all sources', 'They make dates unnecessary', 'They only show weather patterns'], answer: 'They show order and change over time', explanation: 'Timelines help us compare events and notice change.' },
];

const TimelinesChange = () => (
  <HisTopic
    title="Timelines & Change"
    subtitle="Ordering events and understanding time"
    learnSteps={learnSteps}
    task="timelines-change"
    bank={bank}
  />
);

export default TimelinesChange;
