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
            {"date": "1948", "title": "National Party wins election", "description": "The National Party came to power and began formally implementing apartheid. Its policies entrenched white minority rule and racial segregation."},
            {"date": "1950", "title": "Population Registration Act passed", "description": "This law required South Africans to be classified by race. Racial classification became the basis for many other apartheid laws."},
            {"date": "1950", "title": "Group Areas Act enforced", "description": "The Group Areas Act assigned racial groups to separate residential areas. It led to forced removals and the destruction of mixed communities."},
            {"date": "1952", "title": "Pass laws tightened", "description": "The apartheid state strengthened pass controls through the Natives Abolition of Passes and Coordination of Documents Act. Black South Africans had to carry documents to live, travel, or work in many areas."},
            {"date": "1953", "title": "Bantu Education Act passed", "description": "This act placed Black education under state control and designed it to prepare students for inferior, limited roles. It deepened inequality in schools and opportunities."},
            {"date": "1953", "title": "Separate Amenities Act passed", "description": "The law legalized segregated public facilities such as buses, parks, and toilets. In practice, facilities for Black people were far poorer than those for whites."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Apartheid begins in 1948',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In 1948, the National Party won South African elections and introduced <strong>apartheid</strong> 
          (meaning "separateness"), a system of institutionalized racial segregation and discrimination. 
          Under apartheid, the white minority ruled and controlled the country, with Black Africans, Coloureds, 
          and Indians denied basic rights.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Start:</strong> 1948; systematic racial laws; injustice codified
        </div>
      </div>
    ),
  },
  {
    title: 'Laws of apartheid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The government passed laws enforcing racial separation. The <strong>Population Registration Act</strong> 
          classified all people by race. The <strong>Group Areas Act</strong> forced people to live in separate, 
          unequal zones. <strong>Pass laws</strong> restricted Black movement. <strong>Bantu Education</strong> 
          provided inferior education for Black children.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Control:</strong> Classification, forced removals, pass books, inferior services
        </div>
      </div>
    ),
  },
  {
    title: 'Daily reality under apartheid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Apartheid dictated where people could live, work, go to school, and even ride on buses. Separate, 
          inferior facilities were provided for Black people: poor schools, clinics, and public spaces marked 
          "Whites only" or "Non-whites." This created a deeply unequal and dehumanizing society.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Reality:</strong> Separate everything; Black people had fewer rights and poor services
        </div>
      </div>
    ),
  },
  {
    title: 'Resistance and opposition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          From the start, apartheid faced opposition from anti-apartheid activists, the ANC (African National Congress), 
          and international pressure. Many Black South Africans protested, boycotted, and fought for freedom. 
          International sanctions and pressure grew as the world condemned apartheid.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Opposition:</strong> Internal resistance + international pressure
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was apartheid?', options: ['A system of institutionalized racial segregation in South Africa', 'A type of government structure', 'An economy model', 'A political party'], answer: 'A system of institutionalized racial segregation in South Africa', explanation: 'Apartheid was the official policy of racial separation and discrimination that lasted from 1948 to the 1990s.' },
  { prompt: 'What year did apartheid begin in South Africa?', options: ['1948', '1945', '1950', '1952'], answer: '1948', explanation: 'The National Party came to power in 1948 and immediately began implementing apartheid laws.' },
  { prompt: 'What was the Population Registration Act?', options: ['A law that classified all South Africans by race', 'A census of the population', 'A voting law', 'An immigration law'], answer: 'A law that classified all South Africans by race', explanation: 'This 1950 law forced all South Africans to be classified into racial categories.' },
  { prompt: 'What were pass books?', options: ['Documents that Black people had to carry to move around and work', 'Travel documents for white people', 'Money', 'Identification cards for everyone'], answer: 'Documents that Black people had to carry to move around and work', explanation: 'Pass books restricted the movement of Black people and required them to have permission from white employers.' },
  { prompt: 'What did the Group Areas Act do?', options: ['Forced people to live in racially separated residential areas', 'Allowed freedom of movement', 'Created integrated communities', 'Abolished segregation'], answer: 'Forced people to live in racially separated residential areas', explanation: 'This law forcibly removed people from integrated areas and relocated them to segregated zones.' },
  { prompt: 'What was Bantu Education?', options: ['A system providing inferior education to Black children', 'A quality education for all', 'Higher learning institutions', 'Teacher training'], answer: 'A system providing inferior education to Black children', explanation: 'The Bantu Education Act limited Black education to basic skills needed for labour.' },
  { prompt: 'Who opposed apartheid?', options: ['The ANC, anti-apartheid activists, and the international community', 'Only white supporters', 'No one opposed it', 'Only foreign countries'], answer: 'The ANC, anti-apartheid activists, and the international community', explanation: 'Many inside South Africa and around the world fought against apartheid.' },
  { prompt: 'What were "whites only" signs?', options: ['Signs marking facilities restricted to white people only', 'Advertisements', 'Traffic signs', 'Information boards'], answer: 'Signs marking facilities restricted to white people only', explanation: 'These signs marked separate facilities for white people, enforcing racial segregation daily.' },
];

const ApartheidSystem1948 = () => (
  <HisTopic
    title="The Apartheid System 1948"
    subtitle="Institutionalized racism, pass laws, and forced segregation"
    learnSteps={learnSteps}
    task="gr9-apartheid-system-1948-t3"
    bank={bank}
  />
);

export default ApartheidSystem1948;
