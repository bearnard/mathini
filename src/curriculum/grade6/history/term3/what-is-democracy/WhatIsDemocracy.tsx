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
            {"date": "508/507 BCE", "title": "Athenian reforms widen participation", "description": "Cleisthenes introduced reforms in ancient Athens that gave more citizens a role in government. This is one of the earliest famous examples of democracy."},
            {"date": "1215", "title": "Magna Carta limits kings", "description": "England's Magna Carta said that even the king had to obey the law. It became an important step toward limiting government power."},
            {"date": "1948", "title": "Human rights declared", "description": "The Universal Declaration of Human Rights affirmed equality and basic freedoms for all people. These ideas are closely linked to modern democracy."},
            {"date": "27 Apr 1994", "title": "South Africa votes freely", "description": "South Africa held its first democratic election based on one person, one vote. It showed democracy in action through a free and fair national election."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Democracy means people have a voice',
    image: {
      src: '/curriculum/grade6/his/term3/what-is-democracy/diagram.webp',
      alt: 'person placing a ballot paper into a ballot box at a voting station',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Democracy</strong> means government by the people. In a democracy,
          adult citizens choose leaders by voting in <strong>free and fair elections</strong>.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>people</span>
          <span className="text-slate-400">→</span>
          <span>vote</span>
          <span className="text-slate-400">→</span>
          <span className="text-indigo-700">choose leaders</span>
        </div>
      </div>
    ),
  },
  {
    title: 'One person, one vote',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A key democratic idea is <strong>one person, one vote</strong>. Each adult citizen's
          vote has equal value, and people may vote without being bullied or forced.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Equal votes</strong><br />each adult citizen counts</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Free choice</strong><br />people choose for themselves</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Fair rules</strong><br />elections are checked carefully</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Democracy in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Under <strong>apartheid</strong>, most South Africans, the majority of the people,
          were not allowed to vote. South Africa's first democratic election was on
          <strong> 27 April 1994</strong>, now celebrated as <strong>Freedom Day</strong>.
        </p>
        <div className="rounded-xl bg-rose-50 p-5 text-slate-700">
          <strong>Remember:</strong> Nelson Mandela became South Africa's first democratically elected President.
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What does democracy mean?', options: ['Government by the people', 'Government by one king only', 'Government without elections', 'Government by soldiers only'], answer: 'Government by the people', explanation: 'In a democracy, people have a say in choosing their leaders.' },
  { prompt: 'Who votes in South African democratic elections?', options: ['Adult citizens', 'Only school principals', 'Only children', 'Only visitors from other countries'], answer: 'Adult citizens', explanation: 'Adult citizens have the right to vote in free and fair elections.' },
  { prompt: 'What does “one person, one vote” mean?', options: ['Each adult citizen has one equal vote', 'Each family gets one vote to share between members', 'Each political party gets one vote in Parliament', 'Each person may vote once in their whole life'], answer: 'Each adult citizen has one equal vote', explanation: 'Democracy treats each adult citizen’s vote as equal.' },
  { prompt: 'What should elections be in a democracy?', options: ['Free and fair', 'Secret and unfair', 'Only for wealthy people', 'Decided before voting starts'], answer: 'Free and fair', explanation: 'Free and fair elections let people choose without force and with proper rules.' },
  { prompt: 'Under apartheid, who was not allowed to vote in national elections?', options: ['Most South Africans, the majority', 'People who lived in the cities', 'People who did not pay any taxes', 'People who could not read or write'], answer: 'Most South Africans, the majority', explanation: 'Apartheid denied the vote to the majority of South Africans.' },
  { prompt: 'When was South Africa’s first democratic election?', options: ['27 April 1994', '16 June 1976', '1 January 2000', '24 September 1994'], answer: '27 April 1994', explanation: 'The first democratic election began on 27 April 1994.' },
  { prompt: 'What public holiday remembers 27 April 1994?', options: ['Freedom Day', 'Heritage Day', 'Youth Day', 'Workers’ Day'], answer: 'Freedom Day', explanation: 'Freedom Day celebrates South Africa’s first democratic election.' },
  { prompt: 'Who became South Africa’s first democratically elected President?', options: ['Nelson Mandela', 'Desmond Tutu', 'Oliver Tambo', 'Walter Sisulu'], answer: 'Nelson Mandela', explanation: 'Nelson Mandela became President after the 1994 democratic election.' },
  { prompt: 'Why is voting important in a democracy?', options: ['It gives citizens a say in government', 'It replaces all laws', 'It stops people from having rights', 'It means leaders never change'], answer: 'It gives citizens a say in government', explanation: 'Voting is one way citizens help choose the people who govern.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about democracy and human rights in order, earliest first.', options: ['Athenian reforms widen participation', 'Magna Carta limits kings', 'Human rights declared', 'South Africa votes freely'], answer: 'Athenian reforms widen participation|Magna Carta limits kings|Human rights declared|South Africa votes freely', explanation: 'The dates are 508/507 BCE, 1215, 1948 and 27 Apr 1994.' },
];

const WhatIsDemocracy = () => (
  <HisTopic
    title="What is Democracy?"
    subtitle="How citizens choose leaders in free and fair elections"
    learnSteps={learnSteps}
    task="what-is-democracy"
    bank={bank}
  />
);

export default WhatIsDemocracy;
