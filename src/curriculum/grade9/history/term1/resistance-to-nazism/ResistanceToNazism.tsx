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
            {"date": "1942", "title": "White Rose leaflets", "description": "Students in Munich, including Hans and Sophie Scholl, distributed leaflets condemning Hitler and Nazi crimes. Their peaceful protest showed internal German resistance."},
            {"date": "Feb 1943", "title": "White Rose executed", "description": "Hans and Sophie Scholl were arrested and executed after opposing the Nazi regime. Their deaths made them enduring symbols of moral courage."},
            {"date": "19 Apr 1943", "title": "Warsaw Ghetto Uprising", "description": "Jewish fighters in the Warsaw Ghetto resisted Nazi deportations with scarce weapons. Though crushed, the uprising became one of the most famous acts of resistance."},
            {"date": "Oct 1943", "title": "Danish Jews rescued", "description": "Many Danes helped ferry Jewish people to safety in neutral Sweden. This was a major example of rescuers risking their lives to save others."},
            {"date": "6 Jun 1944", "title": "French Resistance aids D-Day", "description": "Resistance groups sabotaged railways, cut communications, and gathered intelligence for the Allied landings in Normandy. Their actions weakened German control in occupied France."},
            {"date": "20 Jul 1944", "title": "Stauffenberg bomb plot", "description": "German officers led by Claus von Stauffenberg tried to assassinate Hitler at his headquarters. The attempt failed, and the conspirators were executed."},
            {"date": "1 Aug 1944", "title": "Warsaw Uprising begins", "description": "The Polish Home Army rose against German occupation as Soviet forces approached Warsaw. The revolt was eventually crushed after brutal fighting."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Forms of resistance under Nazism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Even under Nazi terror, many resisted. Resistance took different forms: sabotage, hiding refugees, 
          spreading banned information, refusing to comply with orders, and armed rebellion. Some resisters 
          risked or lost their lives.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Methods:</strong> Active and passive resistance, from quiet refusal to armed action
        </div>
      </div>
    ),
  },
  {
    title: 'Internal opposition and conspiracies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some Germans, including military officers, clergy, and ordinary citizens, opposed Hitler. 
          The most famous plot was the <strong>20 July 1944</strong> attempt to assassinate Hitler led by 
          Colonel Claus von Stauffenberg. Though it failed, it showed that resistance existed even within Germany.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>20 July Plot:</strong> Failed assassination attempt by German officers
        </div>
      </div>
    ),
  },
  {
    title: 'Resistance in occupied Europe',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In occupied countries, resistance movements fought Nazi rule. France had the Resistance, Poland had 
          the Home Army, and across Europe, partisans ambushed Nazi forces. These resisters sabotaged supplies, 
          aided prisoners, and eventually helped liberate their nations.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Example:</strong> French Resistance under de Gaulle; Polish Home Army
        </div>
      </div>
    ),
  },
  {
    title: 'Rescuers and hidden resistance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many risked their lives hiding Jewish refugees and others targeted by the Nazis. The Righteous Among 
          the Nations honors non-Jews who saved Jewish lives. These acts of courage and compassion, though often 
          quiet, represent profound moral resistance against evil.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Righteous Among Nations:</strong> Non-Jews who saved Jewish lives
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What were some forms of resistance to Nazism?', options: ['Sabotage, hiding refugees, spreading banned news and armed revolt', 'Armed revolt alone, as other forms were not possible', 'Nothing, as resistance was not possible under Nazi rule', 'Letters to newspapers and no other action'], answer: 'Sabotage, hiding refugees, spreading banned news and armed revolt', explanation: 'Resistance took many forms, from quiet refusal to risk-taking public action.' },
  { prompt: 'What was the 20 July Plot?', options: ['An attempt by German officers to assassinate Hitler', 'A Nazi propaganda campaign to win the army', 'A peace treaty signed by Germany and Britain', 'A military exercise held in the east of Germany'], answer: 'An attempt by German officers to assassinate Hitler', explanation: 'On 20 July 1944, Colonel Claus von Stauffenberg and other officers tried to kill Hitler with a bomb.' },
  { prompt: 'Did the 20 July Plot succeed?', options: ['No, Hitler survived and the plotters were executed', 'Yes, Hitler died and the war ended soon after', 'It never took place, as it was only a rumour', 'It delayed the war and led to peace talks'], answer: 'No, Hitler survived and the plotters were executed', explanation: 'The bomb wounded Hitler but did not kill him; the conspirators were caught and executed.' },
  { prompt: 'Which country had a famous resistance movement called the Resistance?', options: ['France', 'Germany', 'Italy', 'Belgium'], answer: 'France', explanation: 'The French Resistance, a network of groups later united in the National Council of the Resistance (1943), fought Nazi occupation. Charles de Gaulle led the Free French from London.' },
  { prompt: 'What is the Righteous Among the Nations?', options: ['Honour for non-Jews who saved Jewish lives in the Holocaust', 'An award that the German government gave to its soldiers', 'A Nazi group that worked to gather support for Hitler', 'A British army unit that freed prisoners from camps'], answer: 'Honour for non-Jews who saved Jewish lives in the Holocaust', explanation: 'The Righteous Among the Nations honors people who risked their lives to hide and rescue Jewish refugees.' },
  { prompt: 'Who were partisans in World War II?', options: ['Armed resistance fighters in occupied lands', 'Soldiers who served in the Nazi army', 'Diplomats who negotiated peace between countries', 'Reporters who covered the war for newspapers'], answer: 'Armed resistance fighters in occupied lands', explanation: 'Partisans were guerrilla fighters who sabotaged Nazi forces and helped resistance movements.' },
  { prompt: 'Did Germans participate in resistance to Hitler?', options: ['Yes, including officers, clergy and ordinary citizens', 'No, all Germans supported Hitler to the very end', 'Only soldiers resisted, and no civilians did', 'Resistance was not possible in Germany itself'], answer: 'Yes, including officers, clergy and ordinary citizens', explanation: 'German resisters included the White Rose student group, clergy, officers, and many ordinary citizens.' },
  { prompt: 'Why is resistance to tyranny important to remember?', options: ['It shows resistance is possible under oppression and courage counts', 'It is a historical detail with no lesson for people today', 'It shows that resistance to tyranny always ends in failure', 'It is of interest to the study of military history only'], answer: 'It shows resistance is possible under oppression and courage counts', explanation: 'Stories of resistance inspire us to stand against injustice and show the power of individual courage.' },
];

const ResistanceToNazism = () => (
  <HisTopic
    title="Resistance to Nazism"
    subtitle="Opposition from within Germany and occupied territories"
    learnSteps={learnSteps}
    task="gr9-resistance-to-nazism-t1"
    bank={bank}
  />
);

export default ResistanceToNazism;
