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
            {"date": "6 Aug 1945", "title": "Hiroshima bombed", "description": "The United States dropped the first atomic bomb used in war on Hiroshima. The blast and radiation devastated the city and killed tens of thousands."},
            {"date": "9 Aug 1945", "title": "Nagasaki bombed", "description": "A second atomic bomb destroyed much of Nagasaki three days later. Japan surrendered soon after, and the nuclear age had begun."},
            {"date": "29 Aug 1949", "title": "USSR tests atomic bomb", "description": "The Soviet Union successfully tested its first atomic weapon. This ended the US nuclear monopoly and intensified the arms race."},
            {"date": "8 Dec 1953", "title": "Atoms for Peace speech", "description": "US President Dwight Eisenhower promoted peaceful nuclear uses at the United Nations. The speech encouraged nuclear research for energy and medicine."},
            {"date": "27 Jun 1954", "title": "First nuclear power station", "description": "The Obninsk plant in the Soviet Union became the first grid-connected nuclear power station. It showed that atomic energy could generate electricity, not only destroy."},
            {"date": "Oct 1962", "title": "Cuban Missile Crisis", "description": "The USA and USSR came closest to nuclear war during the standoff over Soviet missiles in Cuba. The crisis showed the terrifying logic of Mutually Assured Destruction."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The atomic age begins',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In 1945, the United States dropped atomic bombs on <strong>Hiroshima</strong> and <strong>Nagasaki</strong>, 
          destroying entire cities and killing over 200,000 people. This demonstrated the destructive power of 
          nuclear weapons and ushered in the nuclear age.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Power:</strong> Atomic weapons could destroy entire cities in seconds
        </div>
      </div>
    ),
  },
  {
    title: 'Nuclear technology and power',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After the war, nuclear technology developed rapidly for both weapons and <strong>peaceful uses</strong>: 
          nuclear power plants generated electricity, medical imaging used radioactive isotopes, and research 
          accelerated. Nuclear science promised both great danger and great promise.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Dual use:</strong> Weapons and peaceful applications (power, medicine, research)
        </div>
      </div>
    ),
  },
  {
    title: 'The nuclear arms race',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The USA and USSR raced to build larger and more powerful nuclear arsenals. During the 1950s and 1960s, 
          thousands of nuclear warheads were created. This created a <strong>balance of terror</strong>—both sides 
          could destroy each other many times over (Mutually Assured Destruction, or MAD).
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>MAD:</strong> Mutual Assured Destruction prevented nuclear war through terror
        </div>
      </div>
    ),
  },
  {
    title: 'Living with nuclear anxiety',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People lived with fear of nuclear war. Schools held nuclear drills, families built bomb shelters, 
          and popular culture was filled with nuclear anxiety. The closest the world came to nuclear war was 
          during the 1962 Cuban Missile Crisis, when the USA and USSR nearly clashed over Soviet missiles in Cuba.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Crisis:</strong> Cuban Missile Crisis 1962—world held its breath
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What cities were hit by atomic bombs in 1945?', options: ['Hiroshima and Nagasaki', 'Tokyo and Osaka', 'Berlin and Munich', 'Moscow and Leningrad'], answer: 'Hiroshima and Nagasaki', explanation: 'The USA dropped atomic bombs on Hiroshima (6 August) and Nagasaki (9 August) 1945.' },
  { prompt: 'How many people died in the atomic bombings?', options: ['Over 200,000', 'About 50,000', 'About 1 million', 'About 10,000'], answer: 'Over 200,000', explanation: 'The immediate and long-term effects killed over 200,000 people from both cities combined.' },
  { prompt: 'What does MAD stand for?', options: ['Mutually Assured Destruction', 'Military Authorized Defense', 'Maximum Armed Division', 'Missile Attack Deterrent'], answer: 'Mutually Assured Destruction', explanation: 'MAD was the Cold War doctrine that nuclear war would be so devastating that neither side would start it.' },
  { prompt: 'What peaceful uses did nuclear technology develop?', options: ['Power stations, medical imaging and research', 'Weapons for armies and nothing else', 'Farming only, to grow more crops', 'Transport only, such as trains and ships'], answer: 'Power stations, medical imaging and research', explanation: 'Nuclear technology was developed for electricity generation, medical diagnosis, and scientific research.' },
  { prompt: 'What was the Cuban Missile Crisis?', options: ['A 1962 stand-off between the USA and USSR over missiles in Cuba', 'A war that was fought between Cuba and the USA', 'The fall of the Berlin Wall in 1989', 'The launch of the first Soviet satellite, Sputnik'], answer: 'A 1962 stand-off between the USA and USSR over missiles in Cuba', explanation: 'During the Cuban Missile Crisis, the world nearly saw nuclear war as Kennedy and Khrushchev faced off.' },
  { prompt: 'Why did people fear nuclear war during the Cold War?', options: ['Both superpowers held weapons that could destroy civilisation', 'Nuclear weapons were thought not to work in a war', 'There was no real danger of nuclear war breaking out', 'Only one country held nuclear weapons at that time'], answer: 'Both superpowers held weapons that could destroy civilisation', explanation: 'The possibility of total nuclear annihilation created widespread anxiety.' },
  { prompt: 'What were nuclear drills in schools?', options: ['Practice drills for what to do in a nuclear attack', 'Lessons about the science of atoms', 'Contests between schools in science', 'First-aid training for medical emergencies'], answer: 'Practice drills for what to do in a nuclear attack', explanation: 'Schools held drills where students practiced sheltering in place if a nuclear war began.' },
  { prompt: 'How did the nuclear arms race develop?', options: ['The USA and the USSR competed to build bigger arsenals', 'Only the USA built nuclear weapons', 'The USSR always had more weapons than the USA', 'Nuclear weapons did not increase in number'], answer: 'The USA and the USSR competed to build bigger arsenals', explanation: 'The superpowers continuously upgraded and expanded their nuclear capabilities throughout the Cold War.' },
];

const AtomicAgeNuclearPower = () => (
  <HisTopic
    title="The Atomic Age and Nuclear Power"
    subtitle="Nuclear weapons, arms race, and living with atomic anxiety"
    learnSteps={learnSteps}
    task="gr9-atomic-age-nuclear-power-t2"
    bank={bank}
  />
);

export default AtomicAgeNuclearPower;
