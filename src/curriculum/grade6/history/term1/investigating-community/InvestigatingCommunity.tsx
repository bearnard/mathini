import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import ScaleTimeline from '@/components/diagrams/ScaleTimeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <ScaleTimeline
          events={[
            {"date": "1683", "title": "Public museums open", "description": "The Ashmolean Museum opened in Oxford as one of the first public museums. Museums became important places for preserving community objects and stories."},
            {"date": "1839", "title": "Photography records communities", "description": "The invention of practical photography allowed streets, buildings, and families to be recorded visually. Old photographs later became useful local history evidence."},
            {"date": "1948", "title": "Recorded interviews spread", "description": "Oral history projects increasingly used recording technology after World War II. This made it easier to preserve elders' memories as oral sources."},
            {"date": "1994", "title": "District Six Museum opens", "description": "The District Six Museum opened in Cape Town to preserve memories of a community damaged by forced removals. It is a strong example of local history being collected and shared."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Local history starts with questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>local history project</strong> investigates the history of your community. You can ask
          how people lived, worked, travelled, learned, celebrated, and solved problems in the past.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>ask</span>
          <span className="text-slate-400">→</span>
          <span>collect</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">share</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Interviews can be oral sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Interviewing elders and community members can give <strong>oral evidence</strong>. Prepare polite
          questions, listen carefully, ask permission to record, and write down important details.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Prepare</strong><br />clear questions</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Respect</strong><br />ask permission</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Record</strong><br />notes or audio</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Museums and archives protect sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Museums</strong> keep objects and displays. <strong>Archives</strong> keep records such as
          letters, photographs, maps, and newspapers. These places help communities remember their past.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4"><strong>Museum</strong><br />objects and exhibitions</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Archive</strong><br />documents and records</div>
        </div>
      <div className="space-y-2">
  <p className="text-slate-600">{"A good interview question is open, so the person answers with a story or a description, for example 'How did you get to school in those days?' rather than a question that only needs yes or no."}</p>
</div>
</div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What does a local history project investigate?', options: ['The history of a community', 'Only the history of planets', 'Only future weather', 'The rules of multiplication'], answer: 'The history of a community', explanation: 'Local history focuses on the people, places, and events in a community.' },
  { prompt: 'Who could you interview for a local history project?', options: ['An elder who remembers community events', 'A stranger who has never lived there', 'A friend who dislikes history lessons', 'A newcomer who arrived in the town last week'], answer: 'An elder who remembers community events', explanation: 'Elders and community members can share useful oral evidence.' },
  { prompt: 'What should you do before recording an interview?', options: ['Ask permission politely', 'Hide the recorder', 'Interrupt every answer', 'Change the person’s words'], answer: 'Ask permission politely', explanation: 'Respect and permission are important when interviewing people.' },
  { prompt: 'Which is a good interview question?', options: ['What was this area like when you were young?', 'Can you give me the answer without thinking?', 'Why is my opinion always correct?', 'Can I ignore your memories?'], answer: 'What was this area like when you were young?', explanation: 'Open questions encourage people to explain their memories in detail.' },
  { prompt: 'What does a museum often keep?', options: ['Objects and displays from the past', 'Only tomorrow’s newspapers', 'Clouds in bottles', 'Secret maths answers'], answer: 'Objects and displays from the past', explanation: 'Museums collect, protect, and explain objects and exhibitions.' },
  { prompt: 'What does an archive often keep?', options: ['Documents, photographs, and records', 'Sports equipment, uniforms, and trophies', 'New books that are for sale to the public', 'Tools, furniture, and household objects'], answer: 'Documents, photographs, and records', explanation: 'Archives protect written and visual records for research.' },
  { prompt: 'Why should you take notes during an interview?', options: ['To remember important details accurately', 'To make the interview shorter without listening', 'To hide the source from others', 'To change the story completely'], answer: 'To remember important details accurately', explanation: 'Notes help you check names, dates, places, and main ideas later.' },
  { prompt: 'Which source could show how a street looked long ago?', options: ['An old photograph of the street', 'A new empty envelope', 'A fresh glass of water', 'A shoe bought today'], answer: 'An old photograph of the street', explanation: 'Old photographs are visual evidence of places and changes.' },
  { prompt: 'Why compare interview evidence with other sources?', options: ['To check and add to the information', 'To prove all memories are useless', 'To remove dates from the project', 'To avoid learning from objects'], answer: 'To check and add to the information', explanation: 'Comparing sources can confirm details and show different points of view.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about recording community history in order, earliest first.', options: ['Public museums open', 'Photography records communities', 'Recorded interviews spread', 'District Six Museum opens'], answer: 'Public museums open|Photography records communities|Recorded interviews spread|District Six Museum opens', explanation: 'The dates are 1683, 1839, 1948 and 1994.' },
];

const InvestigatingCommunity = () => (
  <HisTopic
    title="Investigating Local History"
    subtitle="Researching the history of your community"
    learnSteps={learnSteps}
    task="investigating-community"
    bank={bank}
  />
);

export default InvestigatingCommunity;
