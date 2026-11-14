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
            {"date": "1948", "title": "Apartheid government elected", "description": "The National Party won the election and began formal apartheid. Most South Africans were denied equal rights and voting power."},
            {"date": "1955", "title": "Freedom Charter demands rights", "description": "The Congress of the People adopted the Freedom Charter at Kliptown. It called for equal rights, democracy, and a fairer South Africa."},
            {"date": "1990", "title": "Mandela is released", "description": "Nelson Mandela was released from prison on 11 February 1990. His release became a powerful symbol of change and negotiation."},
            {"date": "1993", "title": "Interim Constitution signed", "description": "Political negotiations produced an Interim Constitution. It created the legal path to South Africa's first democratic election."},
            {"date": "27 Apr 1994", "title": "First democratic election", "description": "South Africans voted in the first democratic national election. Freedom Day remembers this moment, and Nelson Mandela became president."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Apartheid blocked democracy',
    image: {
      src: '/curriculum/grade6/his/term3/road-to-democracy/diagram.webp',
      alt: 'long hopeful queue of diverse South African people waiting to vote',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>road to democracy</strong> was difficult. Under apartheid, most South Africans,
          the majority of the population, were not allowed to vote in national elections.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>unfair laws</span>
          <span className="text-slate-400">→</span>
          <span>struggle</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">democracy</span>
        </div>
      </div>
    ),
  },
  {
    title: 'People worked for change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many people and organisations worked for a South Africa where all adult citizens
          could vote. The change came through courage, negotiation, and a shared hope for peace.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-purple-50 p-4"><strong>Courage</strong><br />standing up for fairness</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Negotiation</strong><br />talking to solve conflict</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Hope</strong><br />building a better future</div>
        </div>
      </div>
    ),
  },
  {
    title: 'The first democratic election',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On <strong>27 April 1994</strong>, South Africans voted in the first democratic election.
          This day is celebrated as <strong>Freedom Day</strong>. <strong>Nelson Mandela</strong> became
          the first democratically elected President of South Africa.
        </p>
        <div className="rounded-xl bg-emerald-50 p-5 text-slate-700">
          Long voting queues showed that many people were ready to take part as equal citizens.
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What was apartheid?', options: ['A system of unfair separation and unequal rights', 'A type of free and fair election', 'A public holiday in April', 'A level of local government'], answer: 'A system of unfair separation and unequal rights', explanation: 'Apartheid separated people by race and denied equal rights to the majority.' },
  { prompt: 'How did apartheid affect voting?', options: ['Most South Africans were not allowed to vote', 'Every child had two votes', 'All adults voted equally', 'Only tourists voted'], answer: 'Most South Africans were not allowed to vote', explanation: 'The majority of South Africans were excluded from national elections under apartheid.' },
  { prompt: 'What were many South Africans working towards before 1994?', options: ['A democracy with equal voting rights', 'A country with no schools', 'A government with no laws', 'A system where only one town voted'], answer: 'A democracy with equal voting rights', explanation: 'People struggled for a fair democracy where adult citizens could vote equally.' },
  { prompt: 'Which date marks South Africa’s first democratic election?', options: ['27 April 1994', '21 March 1960', '16 December 1838', '31 May 1910'], answer: '27 April 1994', explanation: 'South Africa’s first democratic election took place on 27 April 1994.' },
  { prompt: 'What is 27 April celebrated as in South Africa?', options: ['Freedom Day', 'Youth Day', 'Heritage Day', 'Human Rights Day'], answer: 'Freedom Day', explanation: 'Freedom Day celebrates the first democratic election.' },
  { prompt: 'Who became the first democratically elected President of South Africa?', options: ['Nelson Mandela', 'Jan van Riebeeck', 'Paul Kruger', 'Cecil Rhodes'], answer: 'Nelson Mandela', explanation: 'Nelson Mandela became President after the 1994 election.' },
  { prompt: 'Why were the 1994 voting queues important?', options: ['They showed many people taking part as equal citizens', 'They showed people buying train tickets', 'They were only for sports supporters', 'They meant the election was cancelled'], answer: 'They showed many people taking part as equal citizens', explanation: 'Many people voted for the first time as equal citizens in 1994.' },
  { prompt: 'Which phrase best describes the road to democracy?', options: ['A struggle for equal rights and voting', 'A short trip between two cities', 'A law that ended all responsibilities', 'A school sports competition'], answer: 'A struggle for equal rights and voting', explanation: 'The road to democracy included efforts to end apartheid and build equal citizenship.' },
  { prompt: 'What helped South Africa move towards democracy?', options: ['Courage, negotiation, and hope for peace', 'Stopping all elections forever', 'Keeping apartheid unchanged', 'Allowing only one person to decide'], answer: 'Courage, negotiation, and hope for peace', explanation: 'Change came through many people’s courage and negotiations for a peaceful future.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about the road to democracy in order, earliest first.', options: ['Apartheid government elected', 'Freedom Charter demands rights', 'Mandela is released', 'Interim Constitution signed', 'First democratic election'], answer: 'Apartheid government elected|Freedom Charter demands rights|Mandela is released|Interim Constitution signed|First democratic election', explanation: 'The dates are 1948, 1955, 1990, 1993 and 27 Apr 1994.' },
];

const RoadToDemocracy = () => (
  <HisTopic
    title="The Road to Democracy"
    subtitle="How South Africa moved from apartheid to equal voting rights"
    learnSteps={learnSteps}
    task="road-to-democracy"
    bank={bank}
  />
);

export default RoadToDemocracy;
