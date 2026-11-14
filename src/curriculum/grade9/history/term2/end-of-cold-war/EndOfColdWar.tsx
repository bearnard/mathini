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
            {"date": "11 Mar 1985", "title": "Gorbachev takes power", "description": "Mikhail Gorbachev became leader of the Soviet Union. He soon introduced reforms that weakened rigid communist control."},
            {"date": "1986", "title": "Glasnost expands openness", "description": "Gorbachev pushed glasnost, allowing more discussion, criticism, and public debate. Greater openness exposed the USSR's deep problems."},
            {"date": "8 Dec 1987", "title": "INF Treaty signed", "description": "The USA and USSR agreed to eliminate an entire class of nuclear missiles. This was a major sign that Cold War tensions were easing."},
            {"date": "1989", "title": "Eastern Europe revolts", "description": "Communist governments in Poland, Hungary, Czechoslovakia, and elsewhere began to fall. Popular protest weakened Soviet domination across the region."},
            {"date": "9 Nov 1989", "title": "Berlin Wall falls", "description": "East Germany opened its border crossings, and crowds broke through the Berlin Wall. The event became the clearest symbol of the Cold War's collapse."},
            {"date": "19–21 Aug 1991", "title": "Soviet coup fails", "description": "Hardline communists tried to seize power and reverse reforms, but the coup collapsed. Their failure fatally weakened the Soviet state."},
            {"date": "26 Dec 1991", "title": "USSR dissolves", "description": "The Soviet Union officially ceased to exist and split into independent republics. This is widely taken as the end of the Cold War."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Cold War winds down',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By the 1980s, the Cold War began to thaw. The Soviet Union faced economic problems and military expenses. 
          In 1985, new Soviet leader <strong>Mikhail Gorbachev</strong> introduced <strong>Glasnost</strong> (openness) 
          and <strong>Perestroika</strong> (restructuring), allowing greater freedom and reform.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Change:</strong> Glasnost and Perestroika; more freedom in the Soviet Union
        </div>
      </div>
    ),
  },
  {
    title: 'Collapse of communism in Eastern Europe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Between 1989 and 1991, communist regimes across Eastern Europe fell. People protested and revolted against 
          authoritarian control. The <strong>Berlin Wall fell</strong> in November 1989. Poland, Czechoslovakia, Hungary, 
          and other nations broke free from Soviet domination.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Revolutions:</strong> 1989–1990, peaceful mostly; freedom restored
        </div>
      </div>
    ),
  },
  {
    title: 'The Soviet Union dissolves',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Soviet Union, facing economic collapse and loss of control over satellite states, could not hold together. 
          It officially dissolved on December 26, 1991. Its 15 republics became independent nations, with <strong>Russia</strong> 
          as the largest. The Cold War officially ended.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>End:</strong> Soviet Union dissolved December 1991; Cold War over
        </div>
      </div>
    ),
  },
  {
    title: 'A new world order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After the Cold War, the world faced new challenges and opportunities. The USA remained the single superpower. 
          International cooperation improved, but regional conflicts and new tensions emerged. The post–Cold War world 
          promised peace but also uncertainty.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Era:</strong> Post–Cold War; new international order; unresolved tensions
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'Who was Mikhail Gorbachev?', options: ['The Soviet leader who brought in Glasnost and Perestroika', 'An American president during the Cold War', 'A German chancellor of a divided country', 'A Chinese official who led the communist party'], answer: 'The Soviet leader who brought in Glasnost and Perestroika', explanation: 'Gorbachev became Soviet leader in 1985 and initiated major reforms that weakened communist control.' },
  { prompt: 'What does "Glasnost" mean?', options: ['Openness and freedom of speech', 'Restructuring of the economy and politics', 'Military strength and a build-up of arms', 'Isolation from the rest of the world'], answer: 'Openness and freedom of speech', explanation: 'Glasnost allowed more freedom of expression and transparency in the Soviet system.' },
  { prompt: 'What was "Perestroika"?', options: ['Economic and political restructuring of the Soviet Union', 'A military campaign that was fought in Eastern Europe', 'A space programme that sent people into orbit', 'A form of government that was used before 1917'], answer: 'Economic and political restructuring of the Soviet Union', explanation: 'Perestroika was Gorbachev\'s program to reform and restructure the Soviet economy and government.' },
  { prompt: 'When did the Berlin Wall fall?', options: ['November 1989', 'June 1989', 'December 1991', 'August 1989'], answer: 'November 1989', explanation: 'The Berlin Wall fell on November 9, 1989, as East German restrictions were lifted.' },
  { prompt: 'What happened to communist regimes in Eastern Europe between 1989–1991?', options: ['They fell, and nations regained independence and democracy', 'They became stronger and spread to new countries', 'They joined the Soviet Union as new republics', 'Nothing changed in the way they were governed'], answer: 'They fell, and nations regained independence and democracy', explanation: 'Between 1989 and 1991, communist governments across Eastern Europe were overthrown in largely peaceful revolutions.' },
  { prompt: 'When did the Soviet Union officially dissolve?', options: ['December 26, 1991', 'November 9, 1989', 'August 1989', 'January 1990'], answer: 'December 26, 1991', explanation: 'The Soviet Union officially ceased to exist on December 26, 1991, replaced by independent republics.' },
  { prompt: 'What caused the Soviet Union to collapse?', options: ['Economic problems, loss of Eastern Europe and pressure at home', 'A military defeat in a war against the USA', 'A single long war that drained the whole economy', 'An invasion of the country by a foreign army'], answer: 'Economic problems, loss of Eastern Europe and pressure at home', explanation: 'Gorbachev\'s reforms, economic weakness, and the fall of communist allies destabilized the USSR.' },
  { prompt: 'What period followed the Cold War?', options: ['A new world order with one superpower, the USA', 'An immediate and lasting peace in every region', 'The outbreak of World War III', 'A return to the Cold War a year later'], answer: 'A new world order with one superpower, the USA', explanation: 'After the Cold War, the USA emerged as the sole superpower, and global relations changed dramatically.' },
];

const EndOfColdWar = () => (
  <HisTopic
    title="End of the Cold War"
    subtitle="Gorbachev's reforms, collapse of communism, and new world order"
    learnSteps={learnSteps}
    task="gr9-end-of-cold-war-t2"
    bank={bank}
  />
);

export default EndOfColdWar;
