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
            {"date": "4 Oct 1957", "title": "Sputnik launched", "description": "The Soviet Union launched the first artificial satellite into orbit. This shocked the United States and began the space race."},
            {"date": "12 Apr 1961", "title": "Gagarin reaches space", "description": "Yuri Gagarin became the first human in space aboard Vostok 1. His flight gave the Soviet Union another dramatic early victory."},
            {"date": "25 May 1961", "title": "Kennedy sets Moon goal", "description": "President John F. Kennedy pledged that the USA would land a man on the Moon before the decade ended. The speech intensified space competition."},
            {"date": "13 Aug 1961", "title": "Berlin Wall built", "description": "East Germany began building the Berlin Wall to stop people fleeing to West Berlin. The barrier became a powerful symbol of Cold War division."},
            {"date": "20 Jul 1969", "title": "Apollo 11 lands", "description": "Neil Armstrong and Buzz Aldrin landed on the Moon while Michael Collins orbited above. The mission is often seen as the peak of the space race."},
            {"date": "17 Jul 1975", "title": "Apollo-Soyuz links spacecraft", "description": "American astronauts and Soviet cosmonauts docked their spacecraft in orbit. The mission symbolized a shift from intense rivalry toward cooperation."},
            {"date": "9 Nov 1989", "title": "Berlin Wall falls", "description": "Crowds crossed freely as East German controls collapsed. The wall's fall marked the failure of the division it had represented since 1961."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The space race begins',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both superpowers competed to achieve space firsts. The Soviet Union shocked the world by launching 
          <strong>Sputnik</strong> in 1957 and sending <strong>Yuri Gagarin</strong> into space in 1961. 
          The USA responded with President Kennedy's bold promise to land on the Moon by decade's end.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Race:</strong> Sputnik (1957), Gagarin (1961), Moon landing (1969)
        </div>
      </div>
    ),
  },
  {
    title: 'The Berlin Wall divides Europe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After World War II, Berlin was divided between East and West. In 1961, the <strong>Berlin Wall</strong> 
          was built by East Germany and the Soviet Union to keep people from fleeing to the West. 
          It became a symbol of the Iron Curtain dividing communist and democratic Europe.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Barrier:</strong> Built August 1961; fell November 1989
        </div>
      </div>
    ),
  },
  {
    title: 'The Moon landing triumphant',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On July 20, 1969, <strong>Apollo 11</strong> landed on the Moon with astronauts Neil Armstrong 
          and Buzz Aldrin. Armstrong's famous words, "That's one small step for man, one giant leap for mankind," 
          marked humanity's greatest technological achievement. The USA had won the space race.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Victory:</strong> Apollo 11, July 20, 1969; Moon conquest
        </div>
      </div>
    ),
  },
  {
    title: 'The space race slows, but continues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After the Moon landings, space exploration became more cooperative. Space stations like Skylab and 
          later the International Space Station brought cooperation. The space race showed that humans could 
          achieve extraordinary things through science and determination.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Legacy:</strong> Space exploration continues today; science unites nations
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was Sputnik?', options: ['The first artificial satellite, launched by the USSR in 1957', 'A Soviet space station launched in 1971', 'An American rocket that took men to the Moon', 'A spacecraft that carried the first woman into space'], answer: 'The first artificial satellite, launched by the USSR in 1957', explanation: 'Sputnik shocked the world by proving the Soviets could reach space before the Americans.' },
  { prompt: 'Who was Yuri Gagarin?', options: ['The first human in space, a Soviet cosmonaut in 1961', 'An American astronaut who walked on the Moon', 'A German pilot who flew in World War II', 'A British scientist who built rockets'], answer: 'The first human in space, a Soviet cosmonaut in 1961', explanation: 'Gagarin\'s 1961 spaceflight made him the first human in space and a Soviet hero.' },
  { prompt: 'When was the Berlin Wall built?', options: ['1961', '1945', '1989', '1975'], answer: '1961', explanation: 'East Germany and the Soviet Union built the Berlin Wall in August 1961 to stop people fleeing to the West.' },
  { prompt: 'What did the Berlin Wall symbolize?', options: ['The split between communist East and democratic West Europe', 'Peace between the USA and the USSR after the war', 'The unity of the German people under one flag', 'The strength of the NATO alliance in Europe'], answer: 'The split between communist East and democratic West Europe', explanation: 'The Berlin Wall represented the "Iron Curtain" separating communist and free worlds.' },
  { prompt: 'Who landed on the Moon in the Apollo 11 mission?', options: ['Neil Armstrong and Buzz Aldrin', 'Neil Armstrong, who walked on the Moon alone', 'Yuri Gagarin and Alan Shepard', 'Wernher von Braun and Buzz Aldrin'], answer: 'Neil Armstrong and Buzz Aldrin', explanation: 'On July 20, 1969, Apollo 11 astronauts Armstrong and Aldrin walked on the Moon.' },
  { prompt: 'What did Neil Armstrong say when he stepped on the Moon?', options: ['"That\'s one small step for man, one giant leap for mankind"', '"We have arrived safely and the crew is well"', '"The Moon is cold and covered with grey dust"', '"The USA has won the space race against the Soviets"'], answer: '"That\'s one small step for man, one giant leap for mankind"', explanation: 'Armstrong\'s iconic words acknowledged both a personal achievement and a milestone for humanity.' },
  { prompt: 'When did the space race peak?', options: ['The late 1960s, with the Moon landing in 1969', 'During World War II, in the early 1940s', 'In the 1980s, with the first space shuttle', 'It never peaked, as the race stayed even'], answer: 'The late 1960s, with the Moon landing in 1969', explanation: 'The space race culminated with the Apollo 11 Moon landing in 1969.' },
  { prompt: 'What later happened to the Berlin Wall?', options: ['It fell in November 1989 as the Cold War ended', 'It was strengthened and made higher in 1989', 'It still stands in the city of Berlin today', 'It was replaced by a new wall further east'], answer: 'It fell in November 1989 as the Cold War ended', explanation: 'As communist regimes collapsed across Eastern Europe, the Berlin Wall fell on November 9, 1989.' },
];

const SpaceRaceBerlinWall = () => (
  <HisTopic
    title="Space Race and Berlin Wall"
    subtitle="Competition in space, divided Berlin, and Cold War symbols"
    learnSteps={learnSteps}
    task="gr9-space-race-berlin-wall-t2"
    bank={bank}
  />
);

export default SpaceRaceBerlinWall;
