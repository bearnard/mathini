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
            {"date": "1950", "title": "Group Areas Act threatens Sophiatown", "description": "The apartheid government used the Group Areas Act to target mixed neighborhoods like Sophiatown. Its multiracial character directly challenged apartheid ideology."},
            {"date": "1954", "title": "Removals legally prepared", "description": "The Natives Resettlement Act gave the state added power to remove Black residents from areas such as Sophiatown. It paved the way for forced relocation."},
            {"date": "9 Feb 1955", "title": "Sophiatown removals begin", "description": "Police and trucks arrived before dawn to move residents out by force. Families were taken to townships like Meadowlands, and homes were later demolished."},
            {"date": "1955–1960", "title": "Community resistance continues", "description": "Residents, churches, and anti-apartheid groups protested the destruction of Sophiatown. Their resistance made the removals a powerful symbol of apartheid cruelty."},
            {"date": "1959", "title": "Bantustan policy formalized", "description": "The Promotion of Bantu Self-Government Act expanded the homeland system. It aimed to separate Black South Africans from citizenship in white-ruled South Africa."},
            {"date": "1970", "title": "Homeland citizenship imposed", "description": "The Bantu Homelands Citizenship Act made Black South Africans citizens of Bantustans instead of South Africa. This deepened political exclusion and territorial control."},
            {"date": "1976", "title": "Transkei declared independent", "description": "Transkei became the first Bantustan declared 'independent' by the apartheid government. Most of the world rejected this as a strategy to legitimize apartheid."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Sophiatown: A mixed community',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sophiatown</strong> was a vibrant, multiracial neighbourhood in Johannesburg where Black, Coloured, 
          and Indian people lived together, creating a rich cultural and political hub. It contradicted apartheid ideology. 
          Despite being originally designated for white settlement, Black communities had built thriving lives there by the 1950s.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Sophiatown:</strong> Mixed community; cultural hub; threatened by apartheid laws
        </div>
      </div>
    ),
  },
  {
    title: 'Forced removal from Sophiatown',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the 1950s, the apartheid government forcibly removed the residents of Sophiatown to make it a white suburb. 
          Bulldozers destroyed homes. Families were relocated to townships far from the city centre. This displacement 
          destroyed a vibrant community and became a symbol of apartheid cruelty.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Removal:</strong> Destruction of a thriving mixed community; families displaced
        </div>
      </div>
    ),
  },
  {
    title: 'Bantustans: Separate territories',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The government created <strong>Bantustans</strong> (Black homelands)—small, impoverished territories where 
          Black people were supposed to live and govern themselves. This allowed the apartheid state to declare that 
          Black people were not citizens of South Africa but of these "independent" homelands. The plan was to separate 
          and control Black populations.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Bantustans:</strong> Poor, overcrowded territories; control and separation strategy
        </div>
      </div>
    ),
  },
  {
    title: 'Resistance to forced removals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People resisted forced removals. Communities protested through marches, stay-aways, and petitions. 
          The ANC and other organizations opposed the Bantustan system. Though the government used force to carry out 
          removals, resistance continued and strengthened the anti-apartheid movement.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Resistance:</strong> Marches, stay-aways, civil disobedience, community action
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was Sophiatown?', options: ['A vibrant multiracial neighbourhood in Johannesburg', 'A white suburb', 'A township', 'A capital city'], answer: 'A vibrant multiracial neighbourhood in Johannesburg', explanation: 'Sophiatown was a thriving mixed community that contradicted apartheid ideology.' },
  { prompt: 'Why did the apartheid government target Sophiatown?', options: ['It was a multiracial community that contradicted apartheid separation', 'It was poor', 'It was far from the city', 'It had no economic value'], answer: 'It was a multiracial community that contradicted apartheid separation', explanation: 'Sophiatown\'s existence as a mixed community directly challenged the apartheid system.' },
  { prompt: 'What happened to the residents of Sophiatown?', options: ['They were forcibly removed; homes were destroyed', 'They were allowed to stay', 'They voluntarily left', 'They became a wealthy community'], answer: 'They were forcibly removed; homes were destroyed', explanation: 'Bulldozers destroyed homes, and families were relocated to distant townships.' },
  { prompt: 'What were Bantustans?', options: ['Impoverished territories created for Black people under apartheid', 'White suburbs', 'Cities', 'International territories'], answer: 'Impoverished territories created for Black people under apartheid', explanation: 'Bantustans were "homelands" where Black people were forced to live, allowing the state to deny them citizenship.' },
  { prompt: 'How many Bantustans did the government create?', options: ['Ten', 'Five', 'One', 'Twenty'], answer: 'Ten', explanation: 'The apartheid government created ten Bantustans or "independent homelands" across South Africa.' },
  { prompt: 'What was the purpose of Bantustans?', options: ['To separate and control Black populations from white areas', 'To provide equal opportunity', 'To unite South Africa', 'To improve Black living standards'], answer: 'To separate and control Black populations from white areas', explanation: 'Bantustans were part of the apartheid strategy to remove Black people from white areas and deny them citizenship.' },
  { prompt: 'How did people resist forced removals?', options: ['Through marches, stay-aways, and civil disobedience', 'They accepted the removals', 'Violence only', 'No resistance occurred'], answer: 'Through marches, stay-aways, and civil disobedience', explanation: 'Communities organized protests and resistance campaigns against forced removals.' },
  { prompt: 'What does forced removal mean?', options: ['When the government forces people to leave their homes and move elsewhere', 'Voluntary relocation', 'Urban development', 'Immigration'], answer: 'When the government forces people to leave their homes and move elsewhere', explanation: 'Forced removal is the government\'s coercive relocation of communities, causing displacement and suffering.' },
];

const SophiatownBantustans = () => (
  <HisTopic
    title="Sophiatown and Bantustans"
    subtitle="Forced removals, territorial control, and community resistance"
    learnSteps={learnSteps}
    task="gr9-sophiatown-bantustans-t3"
    bank={bank}
  />
);

export default SophiatownBantustans;
