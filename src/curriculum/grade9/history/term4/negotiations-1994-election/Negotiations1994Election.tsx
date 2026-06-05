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
            {"date": "1990", "title": "Talks to end apartheid begin", "description": "The government, ANC, and other groups began negotiations on a democratic future. The process was tense, but both sides knew permanent change was unavoidable."},
            {"date": "20–21 Dec 1991", "title": "CODESA opens", "description": "The Convention for a Democratic South Africa brought many parties together for formal negotiations. It became a major forum for debating the shape of a new state."},
            {"date": "18 Nov 1993", "title": "Interim Constitution adopted", "description": "Negotiators agreed on an interim constitution and a framework for democratic elections. It protected rights and prepared the way for universal suffrage."},
            {"date": "27 Apr 1994", "title": "First democratic election", "description": "For the first time, South Africans of all races voted in a national election. The day became known as Freedom Day because apartheid's political system had ended."},
            {"date": "10 May 1994", "title": "Mandela becomes president", "description": "Nelson Mandela was inaugurated as president of democratic South Africa. His government symbolized a new era of equality and reconciliation."},
            {"date": "1995", "title": "TRC is established", "description": "The Truth and Reconciliation Commission was created to hear testimony from victims and perpetrators of apartheid abuses. It aimed to promote truth, accountability, and healing."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Multi-party negotiations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Between 1990 and 1994, the government, ANC, and other organizations negotiated the end of apartheid. 
          These <strong>Multi-Party Negotiations</strong> were difficult—there were disagreements about power-sharing, 
          rights protection, and land. Despite violence and obstacles, negotiators persisted, believing democracy 
          was worth the effort.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Process:</strong> 1990–1994; Multiple parties; Difficult compromises
        </div>
      </div>
    ),
  },
  {
    title: 'The Constitution and Bill of Rights',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A new <strong>Constitution</strong> was drafted to replace apartheid laws. The <strong>Bill of Rights</strong> 
          guaranteed equality, freedom, and dignity for all. The Constitution created a democracy with universal adult 
          suffrage (everyone over 18 could vote). It was one of the world's most progressive constitutions.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>New framework:</strong> Democratic constitution; Bill of Rights; Equal citizenship
        </div>
      </div>
    ),
  },
  {
    title: 'The 1994 Election: Freedom Day',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On April 27, 1994, South Africa held its first democratic elections where all adults could vote regardless 
          of race. This was <strong>Freedom Day</strong>—a turning point in world history. Nelson Mandela was elected 
          president. Millions voted peacefully, celebrating the end of apartheid and the birth of democratic South Africa.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Victory:</strong> April 27, 1994; Universal suffrage; Mandela president
        </div>
      </div>
    ),
  },
  {
    title: 'Reconciliation and healing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After apartheid, South Africa faced the challenge of healing. The <strong>Truth and Reconciliation Commission</strong> 
          (TRC) allowed victims and perpetrators to share stories and seek forgiveness. This unique approach aimed for 
          truth, accountability, and reconciliation rather than revenge. South Africa showed the world that nations could 
          move past violence toward justice and healing.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Healing:</strong> Truth and Reconciliation; Stories shared; Moving forward
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'When were multi-party negotiations held in South Africa?', options: ['1990–1994', '1988–1990', '1994–1996', '1985–1990'], answer: '1990–1994', explanation: 'Multi-party talks occurred from Mandela\'s release until the first democratic election.' },
  { prompt: 'What was negotiated during multi-party talks?', options: ['How to end apartheid and create a new democratic system', 'Military strategy', 'Economic trade', 'Sports rules'], answer: 'How to end apartheid and create a new democratic system', explanation: 'Negotiators worked on the new constitution, government structure, and rights protection.' },
  { prompt: 'What was the main achievement of the new South African Constitution?', options: ['It guaranteed equality, freedom, and rights for all people', 'It continued apartheid', 'It limited voting rights', 'It was never adopted'], answer: 'It guaranteed equality, freedom, and rights for all people', explanation: 'The new Constitution created a framework for democracy and equal citizenship.' },
  { prompt: 'When was the first democratic election in South Africa?', options: ['April 27, 1994', 'June 1994', 'March 1994', 'May 1994'], answer: 'April 27, 1994', explanation: 'The first one-person-one-vote election was held on April 27, 1994, now called Freedom Day.' },
  { prompt: 'Who was elected president in the 1994 election?', options: ['Nelson Mandela', 'F. W. de Klerk', 'Oliver Tambo', 'Thabo Mbeki'], answer: 'Nelson Mandela', explanation: 'Mandela was elected president in the historic 1994 election.' },
  { prompt: 'What made the 1994 election historic?', options: ['All adults could vote regardless of race for the first time', 'Only white people voted', 'The vote was limited', 'It was the first election ever'], answer: 'All adults could vote regardless of race for the first time', explanation: 'Universal adult suffrage ended apartheid and established genuine democracy.' },
  { prompt: 'What was the Truth and Reconciliation Commission (TRC)?', options: ['A process where victims and perpetrators shared stories to heal and seek forgiveness', 'A military tribunal', 'A political party', 'An international court'], answer: 'A process where victims and perpetrators shared stories to heal and seek forgiveness', explanation: 'The TRC was South Africa\'s unique approach to post-apartheid healing and accountability.' },
  { prompt: 'How did South Africa approach post-apartheid justice?', options: ['Through truth, reconciliation, and healing rather than revenge alone', 'With harsh punishment only', 'By ignoring the past', 'With international military intervention'], answer: 'Through truth, reconciliation, and healing rather than revenge alone', explanation: 'South Africa\'s TRC sought accountability and healing, offering a model for post-conflict societies.' },
];

const Negotiations1994Election = () => (
  <HisTopic
    title="Negotiations and 1994 Election"
    subtitle="Constitution, Freedom Day, and Truth and Reconciliation"
    learnSteps={learnSteps}
    task="gr9-negotiations-1994-election-t4"
    bank={bank}
  />
);

export default Negotiations1994Election;
