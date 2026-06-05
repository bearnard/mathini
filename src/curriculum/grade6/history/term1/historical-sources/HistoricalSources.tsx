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
            {"date": "c. 3200 BCE", "title": "Writing begins in Mesopotamia", "description": "Some of the earliest written records were made in Mesopotamia. These tablets became important primary sources for studying ancient societies."},
            {"date": "c. 440 BCE", "title": "Herodotus uses many sources", "description": "Herodotus wrote about past events using stories, eyewitness accounts, and observations. His work shows how historians compare different kinds of evidence."},
            {"date": "c. 1450", "title": "Printing multiplies records", "description": "Gutenberg's printing press made books and pamphlets far easier to copy. This greatly increased the number of written sources and later secondary sources."},
            {"date": "1839", "title": "Photography becomes evidence", "description": "Practical photography was announced in France in 1839. Photographs soon became valuable visual sources for historians."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Sources are clues about the past',
    image: {
      src: '/curriculum/grade6/his/term1/historical-sources/diagram.svg',
      alt: 'icons showing written visual oral and object historical sources',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>historical source</strong> is anything that gives information about the past.
          Sources can be written, visual, oral, or objects that people made or used.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>written</span>
          <span className="text-slate-400">+</span>
          <span>visual</span>
          <span className="text-slate-400">+</span>
          <span>oral</span>
          <span className="text-slate-400">+</span>
          <span className="text-indigo-700">objects</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Primary and secondary sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>primary source</strong> comes from the time being studied, like a diary or photograph.
          A <strong> secondary source</strong> is made later, using primary sources, like a textbook.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Primary</strong><br />first-hand evidence from the time</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Secondary</strong><br />an explanation made later</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Check sources carefully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good historians ask who made a source, when it was made, why it was made, and whether other
          sources support it. This helps us decide how useful and reliable it is.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Who?</strong><br />creator</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>When?</strong><br />date or period</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Why?</strong><br />purpose</div>
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What is a historical source?', options: ['Something that gives information about the past', 'A machine that predicts the future', 'A type of cloud', 'A maths answer sheet'], answer: 'Something that gives information about the past', explanation: 'Sources are clues historians use to investigate the past.' },
  { prompt: 'Which is a written source?', options: ['A letter', 'A clay pot', 'A song recording', 'A painted portrait'], answer: 'A letter', explanation: 'Letters, diaries, newspapers, and reports are written sources.' },
  { prompt: 'Which is a visual source?', options: ['A photograph', 'An interview memory', 'A school bell', 'A spoken story'], answer: 'A photograph', explanation: 'Photographs, drawings, paintings, and maps can be visual sources.' },
  { prompt: 'Which is an oral source?', options: ['An elder telling a memory', 'A stone tool', 'A printed map', 'A museum display case'], answer: 'An elder telling a memory', explanation: 'Oral sources are spoken memories, interviews, songs, or stories.' },
  { prompt: 'Which is an object source?', options: ['An old cooking pot', 'A paragraph in a textbook', 'A radio interview', 'A timeline in a book'], answer: 'An old cooking pot', explanation: 'Objects or artefacts can show how people lived and worked.' },
  { prompt: 'What is a primary source?', options: ['Evidence from the time being studied', 'A summary written many years later only', 'A made-up story with no evidence', 'A list of quiz marks'], answer: 'Evidence from the time being studied', explanation: 'Primary sources are first-hand evidence from the period or event.' },
  { prompt: 'What is a secondary source?', options: ['A source made later using other evidence', 'An object buried underground', 'A person who saw the event directly', 'A letter written during the event'], answer: 'A source made later using other evidence', explanation: 'Textbooks and documentaries often explain the past using primary sources.' },
  { prompt: 'Why should we ask who made a source?', options: ['To understand its point of view and purpose', 'To make the source older', 'To turn it into an artefact', 'To remove all information from it'], answer: 'To understand its point of view and purpose', explanation: 'Knowing the creator helps us judge how useful and reliable a source may be.' },
  { prompt: 'Which pair is correctly matched?', options: ['Diary — written source', 'Pot — oral source', 'Interview — visual source', 'Photograph — object source'], answer: 'Diary — written source', explanation: 'A diary is a written record, often made close to the time being studied.' },
];

const HistoricalSources = () => (
  <HisTopic
    title="Historical Sources"
    subtitle="Using different kinds of evidence"
    learnSteps={learnSteps}
    task="historical-sources"
    bank={bank}
  />
);

export default HistoricalSources;
