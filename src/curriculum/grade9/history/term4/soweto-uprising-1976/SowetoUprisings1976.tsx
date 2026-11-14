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
            {"date": "1974", "title": "Afrikaans medium decree imposed", "description": "The apartheid state ordered many Black secondary schools to use Afrikaans alongside English. Students and teachers rejected this as part of inferior Bantu Education."},
            {"date": "16 Jun 1976", "title": "Students march in Soweto", "description": "Thousands of school students marched peacefully to protest Afrikaans instruction and apartheid education. Their action made youth resistance visible to the whole country."},
            {"date": "16 Jun 1976", "title": "Police shoot protesters", "description": "Police opened fire on the student marchers, killing and injuring children. Images of victims such as Hector Pieterson shocked South Africa and the world."},
            {"date": "Jun–Jul 1976", "title": "Uprising spreads nationwide", "description": "Protests, boycotts, and clashes spread from Soweto to other townships and cities. Youth-led resistance became a national challenge to apartheid."},
            {"date": "1977", "title": "Many youths go into exile", "description": "After the crackdown, many young activists fled South Africa and joined liberation movements in exile. The uprising helped strengthen anti-apartheid activism inside and outside the country."},
            {"date": "1995", "title": "Youth Day is commemorated", "description": "Democratic South Africa formally commemorated 16 June as Youth Day. The date honors the courage of the students who resisted apartheid education."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Youth uprising in Soweto',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On June 16, 1976, thousands of Black school students in <strong>Soweto</strong> (Southwest Townships) 
          protested against the <strong>Bantu Education Act</strong> and the forced use of Afrikaans as a language 
          of instruction. Police responded with violence. The <strong>Soweto Uprising</strong> began a wave of 
          youth-led resistance that transformed South Africa.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Uprising:</strong> June 16, 1976; Youth-led; School protest
        </div>
      </div>
    ),
  },
  {
    title: 'Violence and casualties',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Police opened fire on student marchers. Young people were shot and killed. Hundreds died in the initial 
          violence and subsequent unrest. The government's brutal response shocked both South Africa and the world. 
          Children and youth became the face of resistance, inspiring a generation.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Deaths:</strong> Hundreds killed; Police fired on children; International horror
        </div>
      </div>
    ),
  },
  {
    title: 'Nationwide uprisings',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Soweto Uprising spread to other townships. Youth everywhere took to the streets. School boycotts 
          spread. Stay-aways paralyzed cities. Young people burned government buildings and clashed with police. 
          The Soweto Uprising showed that apartheid could not suppress a determined generation seeking freedom.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Spread:</strong> Nationwide uprisings; Boycotts; Stay-aways; Mass action
        </div>
      </div>
    ),
  },
  {
    title: 'Long-term impact and legacy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Soweto Uprising energized anti-apartheid resistance globally and domestically. It discredited the apartheid 
          system in the eyes of millions. Young people became central to liberation. June 16 is now celebrated as Youth 
          Day. The uprising accelerated apartheid's decline and hastened the negotiated end to racial oppression.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Legacy:</strong> Youth Day; Accelerated apartheid's fall; Symbol of resistance
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'When was the Soweto Uprising?', options: ['June 16, 1976', 'March 1976', 'December 1976', 'January 1977'], answer: 'June 16, 1976', explanation: 'The Soweto Uprising began on June 16, 1976, and is now commemorated as Youth Day.' },
  { prompt: 'What did students protest in the Soweto Uprising?', options: ['The forced use of Afrikaans and Bantu Education', 'School fees that were raised in 1976', 'The price of food at school tuck shops', 'Sports teams that were banned from play'], answer: 'The forced use of Afrikaans and Bantu Education', explanation: 'Students rejected inferior Bantu Education and the imposition of Afrikaans as a language of instruction.' },
  { prompt: 'Who led the Soweto Uprising?', options: ['Thousands of Black school students', 'The ANC, which planned it in advance', 'Protesters from other countries', 'Teachers who organised the march'], answer: 'Thousands of Black school students', explanation: 'Youth and students took the lead, making this a youth-driven uprising.' },
  { prompt: 'How did police respond to student marchers in Soweto?', options: ['They opened fire, killing hundreds', 'They allowed peaceful march', 'They negotiated', 'They provided protection'], answer: 'They opened fire, killing hundreds', explanation: 'Police used extreme violence against unarmed students, shocking the world.' },
  { prompt: 'What spread after the initial Soweto violence?', options: ['Uprisings, boycotts and stay-aways across the country', 'Only small local protests in Soweto', 'No spread, as the protest ended in a day', 'A calm in which the government regained control'], answer: 'Uprisings, boycotts and stay-aways across the country', explanation: 'The uprising inspired resistance throughout South Africa and internationally.' },
  { prompt: 'What is June 16 commemorated as in South Africa?', options: ['Youth Day', 'Independence Day', 'Freedom Day', 'Workers\' Day'], answer: 'Youth Day', explanation: 'June 16 is celebrated annually as South Africa\'s Youth Day in memory of the Soweto Uprising.' },
  { prompt: 'What impact did the Soweto Uprising have on apartheid?', options: ["It energised resistance and hastened apartheid's fall", 'Apartheid grew stronger after the uprising', 'It had no impact on how the country was run', 'It brought apartheid to an end at once'], answer: "It energised resistance and hastened apartheid's fall", explanation: 'The uprising showed the system\'s brutality and strengthened determination to end apartheid.' },
  { prompt: 'Why were young people central to the Soweto Uprising?', options: ['They bore the brunt of unjust schooling and had courage to resist', 'They were forced to join in by their own parents', 'They held political power in the country at the time', 'They joined the march without any reason or cause'], answer: 'They bore the brunt of unjust schooling and had courage to resist', explanation: 'Youth saw themselves as inheritors of apartheid and took action to change their future.' },
];

const SowetoUprisings1976 = () => (
  <HisTopic
    title="Soweto Uprising 1976"
    subtitle="Youth resistance, school boycotts, and nationwide uprisings"
    learnSteps={learnSteps}
    task="gr9-soweto-uprising-1976-t4"
    bank={bank}
  />
);

export default SowetoUprisings1976;
