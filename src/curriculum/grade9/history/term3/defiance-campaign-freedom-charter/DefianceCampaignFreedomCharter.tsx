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
            {"date": "26 Jun 1952", "title": "Defiance Campaign launched", "description": "The ANC and its allies began a mass campaign of non-violent civil disobedience against apartheid laws. Volunteers deliberately entered restricted spaces and broke pass regulations."},
            {"date": "1952", "title": "Thousands accept arrest", "description": "As the campaign spread, more than 8,000 protesters were arrested for defying unjust laws. Their disciplined action showed the scale of organized resistance."},
            {"date": "25–26 Jun 1955", "title": "Congress of the People meets", "description": "Delegates gathered in Kliptown to discuss a democratic future for South Africa. The meeting brought together people from different communities and political groups."},
            {"date": "26 Jun 1955", "title": "Freedom Charter adopted", "description": "The Freedom Charter declared that South Africa belongs to all who live in it. It set out demands for equality, rights, and democratic government."},
            {"date": "5 Dec 1956", "title": "Treason Trial begins", "description": "Many anti-apartheid leaders linked to the Congress movement were arrested and charged with treason. The long trial failed to break the movement's commitment to the Charter."},
            {"date": "1960", "title": "Global pressure intensifies", "description": "After years of resistance and especially after Sharpeville, international condemnation of apartheid grew sharply. External solidarity became an important part of the struggle."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Defiance Campaign 1952',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Defiance Campaign</strong> of 1952 was a major act of non-violent resistance organized by the ANC. 
          Protesters deliberately broke unjust apartheid laws—riding in "whites only" buses, entering "whites only" areas 
          without passes—and allowed themselves to be arrested. It showed organized, courageous resistance.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Campaign:</strong> 1952; Civil disobedience; Thousands arrested; Inspired others
        </div>
      </div>
    ),
  },
  {
    title: 'The Freedom Charter 1955',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Freedom Charter</strong>, adopted at the Congress of the People in 1955, was a founding document 
          of the anti-apartheid movement. It proclaimed that "South Africa belongs to all who live in it" and outlined 
          rights to equality, freedom, and dignity. It became the vision that drove the struggle against apartheid.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Charter:</strong> 1955; "South Africa belongs to all"; Equal rights for all
        </div>
      </div>
    ),
  },
  {
    title: 'Key leaders of the movement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Leaders like <strong>Nelson Mandela</strong>, <strong>Oliver Tambo</strong>, <strong>Albert Luthuli</strong>, 
          and others guided the ANC's resistance. They combined peaceful protest with readiness for armed struggle. 
          These leaders faced arrest, torture, and imprisonment but never abandoned their commitment to freedom and justice.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Leaders:</strong> Mandela, Tambo, Luthuli, Hani; Dedicated; Imprisoned
        </div>
      </div>
    ),
  },
  {
    title: 'Growing international pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          As the 1950s ended and 1960s began, international condemnation of apartheid grew. Countries, churches, 
          and organizations worldwide supported the anti-apartheid cause. Exiles and activists took the struggle global. 
          This international pressure would become crucial in eventually defeating apartheid.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>International:</strong> Condemnation; Sanctions; Global solidarity building
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was the Defiance Campaign?', options: ['A non-violent civil disobedience campaign in 1952 where protesters broke unjust laws', 'A violent uprising', 'A political party', 'A government program'], answer: 'A non-violent civil disobedience campaign in 1952 where protesters broke unjust laws', explanation: 'The Defiance Campaign involved deliberately breaking apartheid laws to expose their injustice.' },
  { prompt: 'How did Defiance Campaign protesters respond when arrested?', options: ['They accepted arrest peacefully to show commitment', 'They fought back', 'They fled the country', 'They paid fines'], answer: 'They accepted arrest peacefully to show commitment', explanation: 'Protesters allowed themselves to be arrested, filling jails and demonstrating moral courage.' },
  { prompt: 'What was the Freedom Charter?', options: ['A 1955 document stating "South Africa belongs to all who live in it" and outlining equal rights', 'A government law', 'An international treaty', 'A peace agreement'], answer: 'A 1955 document stating "South Africa belongs to all who live in it" and outlining equal rights', explanation: 'The Freedom Charter was adopted at the Congress of the People and became the anti-apartheid movement\'s vision.' },
  { prompt: 'When was the Congress of the People held?', options: ['1955', '1952', '1960', '1948'], answer: '1955', explanation: 'The Congress of the People met in 1955 to adopt the Freedom Charter.' },
  { prompt: 'Who were key leaders of the anti-apartheid struggle?', options: ['Nelson Mandela, Oliver Tambo, Albert Luthuli, Chris Hani', 'Only Mandela', 'No leaders emerged', 'Only international leaders'], answer: 'Nelson Mandela, Oliver Tambo, Albert Luthuli, Chris Hani', explanation: 'These leaders guided the ANC\'s resistance against apartheid for decades.' },
  { prompt: 'What happened to anti-apartheid leaders?', options: ['Many were arrested, imprisoned, and tortured', 'They were welcomed by the government', 'No consequences occurred', 'They won office peacefully'], answer: 'Many were arrested, imprisoned, and tortured', explanation: 'The apartheid state brutally suppressed anti-apartheid activity and imprisoned activists.' },
  { prompt: 'Did the international community support anti-apartheid efforts?', options: ['Yes, growing international condemnation and support for the struggle', 'No one cared', 'Only enemies supported it', 'The UN supported apartheid'], answer: 'Yes, growing international condemnation and support for the struggle', explanation: 'By the 1960s, international organizations and countries increasingly opposed apartheid and supported liberation.' },
  { prompt: 'What was the aim of the anti-apartheid movement?', options: ['To end racial discrimination and establish equal rights for all South Africans', 'To maintain apartheid', 'To isolate South Africa', 'To change government only'], answer: 'To end racial discrimination and establish equal rights for all South Africans', explanation: 'The movement\'s fundamental goal was freedom, equality, and justice for all.' },
];

const DefianceCampaignFreedomCharter = () => (
  <HisTopic
    title="Defiance Campaign and Freedom Charter"
    subtitle="Civil disobedience, the vision of freedom, and resistance leadership"
    learnSteps={learnSteps}
    task="gr9-defiance-campaign-freedom-charter-t3"
    bank={bank}
  />
);

export default DefianceCampaignFreedomCharter;
