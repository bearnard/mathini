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
            {"date": "1 Sep 1939", "title": "Poland invaded", "description": "Germany attacked Poland, prompting Britain and France to declare war. This marked the beginning of World War II in Europe."},
            {"date": "Jun 1940", "title": "France falls", "description": "German forces defeated France in a rapid campaign. Much of Western Europe came under Axis control."},
            {"date": "Jul–Oct 1940", "title": "Battle of Britain", "description": "Germany bombed Britain in the Blitz but failed to gain air superiority. Britain remained in the war as a key Allied base."},
            {"date": "22 Jun 1941", "title": "Germany attacks USSR", "description": "Operation Barbarossa opened the huge Eastern Front. The Soviet Union joined the Allies against Nazi Germany."},
            {"date": "7 Dec 1941", "title": "Pearl Harbor attacked", "description": "Japan struck the US naval base at Pearl Harbor. The attack brought the United States fully into World War II."},
            {"date": "6 Jun 1944", "title": "D-Day landings", "description": "Allied forces landed in Normandy in the largest amphibious invasion in history. This began the liberation of Western Europe from Nazi rule."},
            {"date": "8 May 1945", "title": "Germany surrenders", "description": "Nazi Germany surrendered unconditionally after Hitler's death. Victory in Europe ended the war there, though fighting continued in Asia."},
            {"date": "2 Sep 1945", "title": "Japan formally surrenders", "description": "Japan signed its surrender after the atomic bombings and Soviet entry into the war against Japan. World War II officially ended."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Axis and Allied powers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          World War II was fought between two main sides: the <strong>Axis Powers</strong> (Germany, Italy, Japan) 
          and the <strong>Allied Powers</strong> (Britain, the Soviet Union, the United States, and others). 
          The conflict spread across Europe, Africa, Asia, and the Pacific.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Axis vs Allies:</strong> Authoritarian regimes vs democratic and communist powers
        </div>
      </div>
    ),
  },
  {
    title: 'War in Europe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Germany quickly conquered much of Europe in 1940–1941. The Blitz terrorized Britain with bombing. 
          When Germany invaded the Soviet Union in 1941, the Soviets joined the Allies. The war ground on with 
          massive casualties as Germany fought on multiple fronts.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Key battles:</strong> France fell 1940; USSR invaded 1941; D-Day 1944
        </div>
      </div>
    ),
  },
  {
    title: 'War in the Pacific',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Japan attacked the US naval base at <strong>Pearl Harbor</strong> on December 7, 1941, bringing America into the war. 
          The Pacific War involved island-hopping campaigns, naval battles, and eventually American air attacks 
          including the atomic bombs dropped on Hiroshima and Nagasaki in 1945.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Key event:</strong> Pearl Harbor attack (7 December 1941)
        </div>
      </div>
    ),
  },
  {
    title: 'Outcome and consequences',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Germany surrendered in May 1945 after Hitler's death. Japan surrendered in August 1945 after the 
          atomic bombings. The war killed tens of millions. Europe lay in ruins. The world emerged divided 
          between victorious Allies, setting the stage for the Cold War.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>End:</strong> 1945; Massive destruction; New world order emerges
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What were the main Axis Powers in World War II?', options: ['Germany, Italy, and Japan', 'Britain, USA, and USSR', 'France, Poland, and Greece', 'Sweden, Spain, and Portugal'], answer: 'Germany, Italy, and Japan', explanation: 'The Axis Powers were the three main Axis nations led by fascist or militarist dictators.' },
  { prompt: 'Which country did Germany invade first in 1939?', options: ['Poland', 'France', 'Denmark', 'Belgium'], answer: 'Poland', explanation: 'Germany\'s invasion of Poland on 1 September 1939 started World War II.' },
  { prompt: 'What was the Blitz?', options: ['Germany\'s bombing campaign against Britain', 'A type of German tank', 'A British invasion plan', 'A code-breaking operation'], answer: 'Germany\'s bombing campaign against Britain', explanation: 'The Blitz was Germany\'s sustained aerial bombing of British cities from 1940–1941.' },
  { prompt: 'When did the United States enter World War II?', options: ['After the attack on Pearl Harbor, December 1941', 'September 1939', 'June 1940', 'January 1945'], answer: 'After the attack on Pearl Harbor, December 1941', explanation: 'The surprise attack on Pearl Harbor by Japan brought the USA into the war.' },
  { prompt: 'What was D-Day?', options: ['The Allied invasion of Normandy, France on 6 June 1944', 'Germany\'s invasion of the Soviet Union', 'The end of World War II', 'A peace treaty'], answer: 'The Allied invasion of Normandy, France on 6 June 1944', explanation: 'D-Day was the largest amphibious invasion in history, marking the beginning of the liberation of Western Europe.' },
  { prompt: 'Which event finally brought the USA into the Pacific War?', options: ['Japan\'s attack on Pearl Harbor', 'Germany\'s invasion of France', 'Italy\'s invasion of Ethiopia', 'Japan\'s invasion of China'], answer: 'Japan\'s attack on Pearl Harbor', explanation: 'The surprise attack on the US naval base at Pearl Harbor on 7 December 1941 caused massive losses and outrage.' },
  { prompt: 'When did Germany surrender in World War II?', options: ['May 1945', 'June 1945', 'January 1945', 'March 1945'], answer: 'May 1945', explanation: 'Germany surrendered unconditionally on 8 May 1945 (VE Day) after Hitler\'s death.' },
  { prompt: 'What was the human cost of World War II?', options: ['Tens of millions dead', 'About 1 million', 'About 5 million', 'Several hundred thousand'], answer: 'Tens of millions dead', explanation: 'World War II caused the deaths of approximately 70–85 million people globally.' },
];

const WorldWar2AlliesAxis = () => (
  <HisTopic
    title="World War II: Allies and Axis"
    subtitle="The global conflict: Europe, Pacific, and the path to victory"
    learnSteps={learnSteps}
    task="gr9-world-war-2-allies-axis-t1"
    bank={bank}
  />
);

export default WorldWar2AlliesAxis;
