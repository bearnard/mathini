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
            {"date": "1948", "title": "Apartheid starts", "description": "The National Party came to power and built apartheid into law. These unfair laws later made a strong Constitution and Bill of Rights especially important."},
            {"date": "1955", "title": "Freedom Charter adopted", "description": "The Freedom Charter declared that South Africa belongs to all who live in it. It called for equality and rights that later influenced constitutional ideas."},
            {"date": "1993", "title": "Interim Constitution approved", "description": "South Africa adopted an Interim Constitution during the move to democracy. It prepared the way for a new legal order based on equal rights."},
            {"date": "1994", "title": "South Africans vote equally", "description": "The first democratic election gave all adult citizens the right to vote. This was a major step toward constitutional democracy."},
            {"date": "1997", "title": "Final Constitution takes effect", "description": "South Africa's final Constitution came into force on 4 February 1997. It included the Bill of Rights and became the highest law of the country."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Constitution is the highest law',
    image: {
      src: '/curriculum/grade6/his/term3/constitution-bill-rights/diagram.svg',
      alt: 'constitution document with bill of rights shield and list',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa's <strong>Constitution</strong> is the <strong>highest law</strong> of the country.
          All other laws and government actions must follow it.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>Constitution</span>
          <span className="text-slate-400">guides</span>
          <span className="text-indigo-700">laws and government</span>
        </div>
      </div>
    ),
  },
  {
    title: 'The Bill of Rights protects everyone',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Bill of Rights</strong> is part of the Constitution. It protects
          everyone's rights, including <strong>equality</strong>, <strong>dignity</strong>,
          <strong> education</strong>, <strong>safety</strong>, and <strong>freedom</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-5">
          <div className="rounded-xl bg-purple-50 p-4"><strong>Equality</strong></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Dignity</strong></div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Education</strong></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Safety</strong></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Freedom</strong></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Rights help democracy work',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rights belong to <strong>everyone</strong>. They help people live with respect and take
          part in democracy, but people must also respect the rights of others.
        </p>
        <div className="rounded-xl bg-emerald-50 p-5 text-slate-700">
          A strong democracy protects people and expects fair, responsible behaviour.
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What is the Constitution?', options: ['The highest law of South Africa', 'A school timetable', 'A voting box', 'A sports rule book'], answer: 'The highest law of South Africa', explanation: 'The Constitution is the highest law and guides all other laws.' },
  { prompt: 'What must other laws in South Africa follow?', options: ['The Constitution', 'A classroom poster', 'A TV advert', 'A private diary'], answer: 'The Constitution', explanation: 'No law or government action may go against the Constitution.' },
  { prompt: 'What is the Bill of Rights?', options: ['The part of the Constitution that protects people’s rights', 'A list of shopping prices', 'A map of provinces', 'A set of sports teams'], answer: 'The part of the Constitution that protects people’s rights', explanation: 'The Bill of Rights lists and protects important rights for everyone.' },
  { prompt: 'Who is protected by the Bill of Rights?', options: ['Everyone', 'Only presidents', 'Only adults with cars', 'Only one province'], answer: 'Everyone', explanation: 'The Bill of Rights protects everyone in South Africa.' },
  { prompt: 'Which of these is a right protected by the Bill of Rights?', options: ['Equality', 'Owning every road', 'Never following rules', 'Choosing all judges alone'], answer: 'Equality', explanation: 'Equality is one of the important rights protected by the Bill of Rights.' },
  { prompt: 'Which right means people should be treated with human worth?', options: ['Dignity', 'Secrecy', 'Speed', 'Silence'], answer: 'Dignity', explanation: 'Dignity means each person has worth and should be treated with respect.' },
  { prompt: 'Why is the Constitution important for democracy?', options: ['It sets rules that protect people and limit government power', 'It lets leaders ignore citizens', 'It cancels all elections', 'It gives rights to only one group'], answer: 'It sets rules that protect people and limit government power', explanation: 'The Constitution helps keep government fair and protects people’s rights.' },
  { prompt: 'What should citizens do with other people’s rights?', options: ['Respect them', 'Hide them', 'Trade them for money', 'Ignore them completely'], answer: 'Respect them', explanation: 'Rights work best when everyone respects the rights of others.' },
  { prompt: 'Which set lists examples of rights?', options: ['Education, safety, and freedom', 'Thunder, rain, and wind', 'Gold, coal, and diamonds', 'Triangles, squares, and circles'], answer: 'Education, safety, and freedom', explanation: 'Education, safety, and freedom are examples of rights protected in South Africa.' },
];

const ConstitutionBillRights = () => (
  <HisTopic
    title="Constitution & Bill of Rights"
    subtitle="The highest law and the rights it protects"
    learnSteps={learnSteps}
    task="constitution-bill-rights"
    bank={bank}
  />
);

export default ConstitutionBillRights;
