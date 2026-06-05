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
            {"date": "1933", "title": "Nazi anti-Jewish boycott", "description": "Soon after taking power, the Nazis organized boycotts and other discriminatory measures against Jewish businesses and professionals. This marked the start of systematic persecution."},
            {"date": "15 Sep 1935", "title": "Nuremberg Laws passed", "description": "These laws stripped German Jews of citizenship and banned marriage between Jews and non-Jews. They turned antisemitism into official state policy."},
            {"date": "9–10 Nov 1938", "title": "Kristallnacht pogrom", "description": "Nazi mobs destroyed synagogues, shops, and homes across Germany and Austria. Thousands of Jewish men were arrested, and violence openly escalated."},
            {"date": "1939–1940", "title": "Ghettos are created", "description": "After invading Poland, the Nazis forced many Jewish people into sealed ghettos such as Warsaw and Łódź. Overcrowding, hunger, and disease killed many even before extermination camps."},
            {"date": "1941", "title": "Mass shootings begin", "description": "Following the invasion of the Soviet Union, Einsatzgruppen mobile killing units murdered Jewish communities in occupied territories. This marked a major step toward genocide."},
            {"date": "20 Jan 1942", "title": "Wannsee Conference", "description": "Senior Nazi officials coordinated the so-called Final Solution, the planned mass murder of Europe's Jews. Extermination became more organized and systematic."},
            {"date": "1942–1944", "title": "Auschwitz killings peak", "description": "Auschwitz-Birkenau became the largest Nazi killing center, where over a million people were murdered. Deportation trains arrived from across occupied Europe."},
            {"date": "27 Jan 1945", "title": "Auschwitz liberated", "description": "Soviet troops liberated Auschwitz and exposed the scale of Nazi crimes. The liberation of camps helped the world understand the horror of the Holocaust."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'What was the Holocaust?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Holocaust</strong> was the systematic, state-sponsored persecution and murder of 
          six million Jewish people by the Nazi regime and its collaborators during World War II. It is one of 
          history's greatest atrocities and a stark example of genocide.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Scale:</strong> 6 million Jews murdered; millions of others also killed
        </div>
      </div>
    ),
  },
  {
    title: 'Escalation of persecution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Nazi persecution started with discrimination and boycotts, moved to exclusion from jobs and society, 
          then forced ghettos where thousands starved, and finally to extermination camps where people were 
          systematically murdered in gas chambers.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Timeline:</strong> Laws → Ghettos → Extermination camps (1941–1945)
        </div>
      </div>
    ),
  },
  {
    title: 'Concentration and death camps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Nazis built concentration camps for forced labour and death camps for extermination. 
          Auschwitz was the largest and deadliest. People arrived in cattle cars, were stripped of identity, 
          and faced impossible conditions or immediate death.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Major camps:</strong> Auschwitz-Birkenau, Treblinka, Sobibor, and many others
        </div>
      </div>
    ),
  },
  {
    title: 'Remembering and learning from the Holocaust',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Survivors bear witness to prevent denial. Museums, memorials, and education help us understand how 
          hatred, discrimination, and indifference can lead to catastrophe. The lesson: we must stand against 
          injustice and protect human rights.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Remember:</strong> Never again. Education and vigilance prevent atrocity.
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'How many Jewish people were murdered in the Holocaust?', options: ['About 6 million', 'About 1 million', 'About 10 million', 'About 500,000'], answer: 'About 6 million', explanation: 'The Holocaust killed approximately 6 million Jews, along with millions of others.' },
  { prompt: 'What were ghettos in the Holocaust?', options: ['Sealed areas where Jewish people were forced to live in overcrowding and starvation', 'Concentration camps for forced labour', 'Cities that escaped persecution', 'Neutral territories'], answer: 'Sealed areas where Jewish people were forced to live in overcrowding and starvation', explanation: 'Ghettos were overcrowded, sealed districts where Jewish people faced disease, hunger, and death.' },
  { prompt: 'What were death camps used for?', options: ['Systematic murder in gas chambers', 'Labour only', 'Political prisons', 'Military barracks'], answer: 'Systematic murder in gas chambers', explanation: 'Death camps like Auschwitz-Birkenau were designed specifically for mass extermination.' },
  { prompt: 'Which was the largest Nazi death camp?', options: ['Auschwitz-Birkenau', 'Treblinka', 'Sobibor', 'Ravensbrück'], answer: 'Auschwitz-Birkenau', explanation: 'Auschwitz-Birkenau was the largest concentration and death camp, where over 1 million people died.' },
  { prompt: 'What year did the Nazi "Final Solution" (extermination plan) begin?', options: ['1941', '1933', '1939', '1945'], answer: '1941', explanation: 'The systematic extermination program began in 1941 when Germany invaded the Soviet Union.' },
  { prompt: 'How did the Nazis murder people in extermination camps?', options: ['Gas chambers', 'Starvation only', 'Shooting only', 'Disease only'], answer: 'Gas chambers', explanation: 'The Nazis used gas chambers (mainly Zyklon B) for rapid, systematic mass murder.' },
  { prompt: 'Why is it important to remember the Holocaust?', options: ['To prevent future genocides and stand against hatred and discrimination', 'It is just history', 'No particular reason', 'To glorify war'], answer: 'To prevent future genocides and stand against hatred and discrimination', explanation: 'Remembering teaches us to oppose hatred, protect minorities, and defend human rights.' },
  { prompt: 'What does "genocide" mean?', options: ['The deliberate destruction of a people or group', 'A war between two countries', 'A natural disaster', 'A type of government'], answer: 'The deliberate destruction of a people or group', explanation: 'Genocide is the intentional attempt to destroy an entire ethnic, religious, or national group.' },
];

const HolocaustGenocide = () => (
  <HisTopic
    title="The Holocaust and Genocide"
    subtitle="Nazi persecution, extermination camps, and human rights"
    learnSteps={learnSteps}
    task="gr9-holocaust-genocide-t1"
    bank={bank}
  />
);

export default HolocaustGenocide;
