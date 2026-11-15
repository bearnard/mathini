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
            {"date": "1919", "title": "Weimar Republic founded", "description": "Germany became a democracy after World War I, but the new Weimar Republic began under severe political and economic pressure. Many Germans blamed it for national humiliation."},
            {"date": "1923", "title": "Hyperinflation crisis", "description": "Germany's currency collapsed and savings became almost worthless. The crisis deepened anger and weakened trust in democratic government."},
            {"date": "8–9 Nov 1923", "title": "Beer Hall Putsch fails", "description": "Hitler tried to seize power in Munich by force, but the coup failed. His trial gave him national publicity and helped spread Nazi ideas."},
            {"date": "30 Jan 1933", "title": "Hitler becomes Chancellor", "description": "President Hindenburg appointed Hitler chancellor of Germany. This gave the Nazi leader the position from which he destroyed democracy."},
            {"date": "23 Mar 1933", "title": "Enabling Act passed", "description": "The Enabling Act allowed Hitler's government to make laws without parliament. It was a key step in creating a dictatorship."},
            {"date": "7 Mar 1936", "title": "Rhineland remilitarized", "description": "Hitler sent German troops into the demilitarized Rhineland in defiance of the Treaty of Versailles. Britain and France did not stop him, encouraging further aggression."},
            {"date": "12 Mar 1938", "title": "Austria annexed", "description": "Germany carried out the Anschluss, uniting Austria with Nazi Germany. This expansion strengthened Hitler and alarmed Europe."},
            {"date": "1 Sep 1939", "title": "Poland invaded", "description": "Germany invaded Poland after years of expansionist moves. Britain and France declared war, starting World War II in Europe."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Weimar Republic and its challenges',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After World War I, Germany was struggling. The <strong>Weimar Republic</strong> faced economic hardship, 
          humiliation from the Treaty of Versailles, and political instability. Hyperinflation in the 1920s 
          destroyed people's savings.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Key factors:</strong> Economic crisis, resentment, political weakness, social unrest
        </div>
      </div>
    ),
  },
  {
    title: 'Adolf Hitler and the rise of Nazism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Adolf Hitler</strong> blamed scapegoats for Germany's problems and promised national 
          restoration and racial superiority. The Nazi Party grew during hard times, and Hitler was appointed 
          Chancellor in 1933. He rapidly seized total power (dictatorship).
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Nazi ideology:</strong> Racial superiority, antisemitism, militarism, totalitarian control
        </div>
      </div>
    ),
  },
  {
    title: 'Life under Nazi control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Hitler turned Germany into a <strong>fascist dictatorship</strong>. The Nazis controlled the government, 
          media, education, and secret police. Opposition was crushed, and minorities—especially Jewish people—faced 
          severe discrimination and persecution.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Tools of control:</strong> Secret police (Gestapo), propaganda, suppression of opposition
        </div>
      </div>
    ),
  },
  {
    title: 'European expansion and ambitions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Hitler pursued territorial expansion to gain <strong>Lebensraum</strong> (living space). Germany 
          remilitarized the Rhineland, annexed Austria, took Czechoslovakia, and finally invaded Poland in 1939, 
          triggering World War II.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Expansion:</strong> 1936–1939, aggressive moves unchecked by Western powers
        </div>
      <div className="space-y-2">
  <p className="text-slate-600">{"In the early 1920s prices in Germany rose so fast that money lost its value from one day to the next, and people who had saved all their lives found their savings were worth almost nothing."}</p>
  <p className="text-slate-600">{"The Nazis persecuted Jews above all, but also Roma and Sinti people, disabled people, political opponents and others they claimed were a threat."}</p>
</div>
</div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was the Weimar Republic?', options: ['The government of Germany after World War I', 'A political party that was led by Hitler', 'A military plan used in World War II', 'An alliance that Germany made with Britain'], answer: 'The government of Germany after World War I', explanation: 'The Weimar Republic was Germany\'s democratic government between 1919 and 1933, named after the city where it was founded.' },
  { prompt: 'What economic problem did Germany face in the 1920s?', options: ['Hyperinflation, which wiped out savings and money', 'Too much spending on the army and on weapons', 'Poor harvests that led to famine in the cities', 'Too much wealth, which caused prices to fall fast'], answer: 'Hyperinflation, which wiped out savings and money', explanation: 'Germany\'s currency became worthless due to hyperinflation, wiping out ordinary people\'s savings.' },
  { prompt: 'When did Hitler become Chancellor of Germany?', options: ['1933', '1925', '1939', '1945'], answer: '1933', explanation: 'Hitler was appointed Chancellor in January 1933 and quickly established a dictatorship.' },
  { prompt: 'What does "Lebensraum" mean?', options: ['Living space, used to justify land grabs', 'A political party that opposed Hitler', 'A weapon that the German army used in battle', 'A form of government that was run by the army'], answer: 'Living space, used to justify land grabs', explanation: 'Lebensraum was Hitler\'s concept of needing more territory for German people, driving his aggressive expansion.' },
  { prompt: 'Who were the primary targets of Nazi persecution?', options: ['Jews and other minority groups', 'Political opponents of the Nazis and no one else', 'Farmers who grew food for German cities', 'Industrialists who ran the large factories'], answer: 'Jews and other minority groups', explanation: 'The Nazis persecuted Jewish people, Roma, disabled people, political opponents, and others.' },
  { prompt: 'What year did Germany invade Poland, starting World War II?', options: ['1939', '1933', '1936', '1941'], answer: '1939', explanation: 'Germany\'s invasion of Poland on September 1, 1939, marked the start of World War II in Europe.' },
  { prompt: 'Which country did Hitler invade and annex in 1938?', options: ['Austria', 'France', 'Poland', 'Belgium'], answer: 'Austria', explanation: 'In the Anschluss of 1938, Germany annexed Austria, uniting the German-speaking lands.' },
  { prompt: 'What was the Nazi secret police called?', options: ['The Gestapo', 'The Wehrmacht', 'The SS only', 'The Luftwaffe'], answer: 'The Gestapo', explanation: 'The Gestapo was the secret police force that enforced Nazi control through fear and suppression.' },
];

const RiseOfHitler = () => (
  <HisTopic
    title="Rise of Hitler and Nazism"
    subtitle="The Weimar Republic, Hitler's rise to power, and Nazi ideology"
    learnSteps={learnSteps}
    task="gr9-rise-of-hitler-t1"
    bank={bank}
  />
);

export default RiseOfHitler;
