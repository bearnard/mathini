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
            {"date": "12 Mar 1947", "title": "Truman Doctrine announced", "description": "The United States promised support to countries resisting communism. This policy helped define the early Cold War struggle between the superpowers."},
            {"date": "24 Jun 1948", "title": "Berlin Blockade begins", "description": "The Soviet Union blocked Western access to West Berlin, and the USA and its allies answered with the Berlin Airlift. The crisis showed how dangerous superpower rivalry had become."},
            {"date": "4 Apr 1949", "title": "NATO is formed", "description": "Western countries created NATO as a collective defense alliance led by the USA. It formalized the military division of Europe."},
            {"date": "25 Jun 1950", "title": "Korean War starts", "description": "North Korea invaded South Korea, and the conflict became a major proxy war involving the USA, its allies, China, and Soviet backing. It showed how the Cold War spread beyond Europe."},
            {"date": "14 May 1955", "title": "Warsaw Pact created", "description": "The Soviet Union and its Eastern European allies formed the Warsaw Pact. It was the communist answer to NATO."},
            {"date": "1965", "title": "Vietnam War escalates", "description": "Large-scale US combat involvement deepened the Vietnam War. The conflict became one of the most famous Cold War proxy wars."},
            {"date": "24 Dec 1979", "title": "Soviets invade Afghanistan", "description": "The Soviet invasion of Afghanistan triggered another major proxy conflict. The USSR fought insurgents supported by the United States and others."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Two superpowers after World War II',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After World War II, two superpowers emerged: the <strong>United States</strong> (democratic, capitalist) 
          and the <strong>Soviet Union</strong> (communist, authoritarian). They had competing ideologies, 
          conflicting interests, and nuclear weapons. Their rivalry shaped global politics for 45 years.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Superpowers:</strong> USA (West) vs USSR (East); Cold War begins 1945–1950s
        </div>
      </div>
    ),
  },
  {
    title: 'Ideological confrontation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The USA promoted democracy and capitalism; the USSR promoted communism and centralized control. 
          Neither side wanted direct military conflict (that would mean nuclear war), but they competed globally 
          through <strong>proxy wars</strong>, espionage, and supporting opposing sides in regional conflicts.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Strategy:</strong> Proxy wars in Korea, Vietnam, Afghanistan; espionage; alliances
        </div>
      </div>
    ),
  },
  {
    title: 'NATO and the Warsaw Pact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The USA led <strong>NATO</strong> (North Atlantic Treaty Organization), a military alliance of Western democracies. 
          The USSR countered with the <strong>Warsaw Pact</strong>, a military alliance of Eastern European communist states. 
          Europe became divided into an armed Western bloc and a communist Eastern bloc.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Blocs:</strong> NATO (1949) vs Warsaw Pact (1955); mutual defense commitments
        </div>
      </div>
    ),
  },
  {
    title: 'Proxy wars and crises',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Korea (1950–1953), Vietnam (1964–1975), and Afghanistan (1979–1989) became battlegrounds where 
          the superpowers fought indirectly. American troops fought communist forces; Soviet forces fought 
          American-backed rebels. These wars killed millions and shaped entire regions.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Conflicts:</strong> Korea, Vietnam, Afghanistan, Middle East crises
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'Which two superpowers dominated the Cold War?', options: ['The USA and the Soviet Union', 'Britain and France', 'Germany and Japan', 'China and India'], answer: 'The USA and the Soviet Union', explanation: 'The United States and Soviet Union were the primary superpowers competing during the Cold War.' },
  { prompt: 'What ideology did the USA promote?', options: ['Democracy and capitalism', 'Communism', 'Fascism', 'Monarchy'], answer: 'Democracy and capitalism', explanation: 'The USA championed democratic government and free-market capitalism.' },
  { prompt: 'What was the main ideology of the Soviet Union?', options: ['Communism and centralized control', 'Capitalism', 'Democracy', 'Fascism'], answer: 'Communism and centralized control', explanation: 'The USSR was a communist state with a centrally planned economy.' },
  { prompt: 'What was NATO?', options: ['A military alliance of Western democratic nations led by the USA', 'A Soviet military organization', 'A peace treaty', 'A trade agreement'], answer: 'A military alliance of Western democratic nations led by the USA', explanation: 'NATO, formed in 1949, was the Western military alliance for collective defense against the Soviet threat.' },
  { prompt: 'What was the Warsaw Pact?', options: ['The Soviet-led military alliance of Eastern European communist states', 'A peace agreement', 'A trade organization', 'A democratic alliance'], answer: 'The Soviet-led military alliance of Eastern European communist states', explanation: 'The Warsaw Pact, formed in 1955, was the Soviet counterpart to NATO.' },
  { prompt: 'Why were proxy wars fought during the Cold War?', options: ['To avoid direct nuclear conflict while competing for global influence', 'For territorial conquest', 'For economic gain only', 'They had no real purpose'], answer: 'To avoid direct nuclear conflict while competing for global influence', explanation: 'Proxy wars allowed superpowers to compete globally without risking direct confrontation.' },
  { prompt: 'Which wars were Cold War proxy conflicts?', options: ['Korea, Vietnam, and Afghanistan', 'World War II', 'The Gulf War only', 'No wars during the Cold War'], answer: 'Korea, Vietnam, and Afghanistan', explanation: 'The Korean War (1950–1953), Vietnam War (1964–1975), and Soviet-Afghan War (1979–1989) were major proxy conflicts.' },
  { prompt: 'What did "deterrence" mean in Cold War strategy?', options: ['Keeping war from happening by having enough weapons to make war too costly', 'Starting wars quickly', 'Destroying an enemy', 'Making peace agreements'], answer: 'Keeping war from happening by having enough weapons to make war too costly', explanation: 'Deterrence prevented direct superpower conflict by making nuclear war mutually unthinkable.' },
];

const USASovietSuperpowers = () => (
  <HisTopic
    title="USA vs Soviet Union: Superpowers"
    subtitle="Ideological confrontation, alliances, and proxy wars"
    learnSteps={learnSteps}
    task="gr9-usa-ussr-superpowers-t2"
    bank={bank}
  />
);

export default USASovietSuperpowers;
