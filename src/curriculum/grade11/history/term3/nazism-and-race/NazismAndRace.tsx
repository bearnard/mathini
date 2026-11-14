import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "30 Jan 1933", "title": "Hitler becomes chancellor", "description": "Adolf Hitler took power in Germany and quickly turned Nazi racial ideology into state policy. Jews and other groups were cast as enemies of the nation."},
            {"date": "1 Apr 1933", "title": "Jewish boycott begins", "description": "The Nazi regime organised a boycott of Jewish shops and professionals. It marked an early public step in excluding Jews from German life."},
            {"date": "15 Sep 1935", "title": "Nuremberg Laws enacted", "description": "These laws stripped Jews of German citizenship and banned marriage between Jews and so-called Aryans. Racist ideology was now embedded in law."},
            {"date": "9–10 Nov 1938", "title": "Kristallnacht pogrom erupts", "description": "Synagogues were burned, Jewish businesses smashed, and thousands of Jews arrested. The violence showed open state-backed terror against Jews."},
            {"date": "20 Jan 1942", "title": "Final Solution coordinated", "description": "At the Wannsee Conference, Nazi officials coordinated plans for the systematic murder of Europe's Jews. The Holocaust moved further into industrialised genocide."},
            {"date": "20 Nov 1945", "title": "Trials define crimes", "description": "The Nuremberg Trials began prosecuting leading Nazis after World War II. They helped establish the idea of crimes against humanity in international law."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Aryan supremacy and Nazi anti-Semitism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Nazi ideology claimed that Germans of so-called <strong>Aryan</strong> descent were a superior race. Adolf Hitler and the Nazi Party combined this with deep anti-Semitism, blaming Jewish people for Germany's problems after World War I.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Racial state</strong>
            <p className="text-slate-600">Nazis believed the state should protect and purify the so-called German race.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Scapegoating</strong>
            <p className="text-slate-600">Jews were falsely blamed for unemployment, communism, and Germany's defeat in 1918.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Exclusion</strong>
            <p className="text-slate-600">Roma, disabled people, Slavs, and political opponents were also targeted as "undesirable".</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The Nuremberg Laws, 1935',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In 1935 the <strong>Nuremberg Laws</strong> stripped Jewish Germans of citizenship and banned marriage or sexual relations between Jews and "Aryans". Racism was no longer only propaganda — it became law.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-700">Why the laws mattered:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>They defined Jewish identity through ancestry, not religion alone.</li>
            <li>They isolated Jewish people from German public life.</li>
            <li>They normalised discrimination and prepared the way for more violence.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Kristallnacht and the escalation to genocide',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On 9–10 November 1938, Nazi leaders organised <strong>Kristallnacht</strong> (the "Night of Broken Glass"). Synagogues were burned, Jewish shops smashed, and thousands of Jews were arrested. During World War II, persecution escalated from ghettoisation and shootings to industrialised genocide.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Turning point</strong>
            <p className="text-slate-600">Kristallnacht showed open state violence against Jews and destroyed any illusion of safety.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Holocaust</strong>
            <p className="text-slate-600">Millions of Jews were murdered in ghettos, mass shootings, and death camps such as Auschwitz-Birkenau, Treblinka, and Sobibor.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Aftermath — Nuremberg Trials and human rights law',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After World War II, leading Nazis were prosecuted at the <strong>Nuremberg Trials</strong>. The trials helped define crimes against humanity and influenced later human rights law, including the Genocide Convention and the Universal Declaration of Human Rights.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-indigo-700 mb-2">Historical significance:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Individuals could be held responsible for state crimes.</li>
            <li>The Holocaust became key evidence for new international protections.</li>
            <li>Historians must evaluate sources carefully to understand both atrocity and memory.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What did Nazi racial ideology claim about Aryans?',
    options: [
      'That they were a superior race meant to rule and remain racially pure',
      'That they should share equal power with all ethnic groups',
      'That race had no role in German politics',
      'That Germans should abandon nationalism',
    ],
    answer: 'That they were a superior race meant to rule and remain racially pure',
    explanation: 'Aryan supremacy was central to Nazi belief and shaped laws, propaganda, and mass violence.',
  },
  {
    prompt: 'Why was anti-Semitism so important to Nazism?',
    options: [
      'Jews were used as scapegoats for Germany\'s economic and political problems',
      'Jewish leaders controlled the Nazi Party',
      'Anti-Semitism was rejected by Hitler after 1933',
      'It was only a private belief and not part of state policy',
    ],
    answer: 'Jews were used as scapegoats for Germany\'s economic and political problems',
    explanation: 'Nazis blamed Jews for defeat, unemployment, and communism to win support and justify persecution.',
  },
  {
    prompt: 'What did the Nuremberg Laws of 1935 do?',
    options: ['They removed Jewish citizenship and banned marriage with "Aryans"', 'They ended the discrimination against Jewish Germans', 'They set up the United Nations after the war', 'They gave Jewish people equal civil rights'],
    answer: 'They removed Jewish citizenship and banned marriage with "Aryans"',
    explanation: 'The Nuremberg Laws turned Nazi racism into official German law.',
  },
  {
    prompt: 'What was Kristallnacht?',
    options: [
      'A state-sponsored pogrom against Jews in November 1938',
      'A peace agreement between Germany and Austria',
      'The code name for the invasion of Poland',
      'A trial held after World War II',
    ],
    answer: 'A state-sponsored pogrom against Jews in November 1938',
    explanation: 'Jewish homes, synagogues, and businesses were attacked while authorities encouraged the violence.',
  },
  {
    prompt: 'What does the term Holocaust refer to?',
    options: ['The systematic murder of six million Jews and others by the Nazis', 'The economic crisis in Germany after World War I', 'The bombing of German cities by the Allied air forces', 'The fighting on the Eastern Front and nothing more'],
    answer: 'The systematic murder of six million Jews and others by the Nazis',
    explanation: 'The Holocaust was genocide carried out through ghettos, shootings, camps, and death camps.',
  },
  {
    prompt: 'What was the function of death camps such as Auschwitz-Birkenau and Treblinka?',
    options: [
      'To murder large numbers of people efficiently as part of genocide',
      'To resettle refugees safely',
      'To train German soldiers for war',
      'To imprison only political opponents for short periods',
    ],
    answer: 'To murder large numbers of people efficiently as part of genocide',
    explanation: 'Death camps were built for industrial-scale killing, especially of Jews deported from across Europe.',
  },
  {
    prompt: 'Why were the Nuremberg Trials historically important?',
    options: ['They held Nazi leaders to account and defined crimes against humanity', 'They restored Hitler to power in Germany', 'They abolished all international law after the war', 'They dealt with economic crimes and nothing else'],
    answer: 'They held Nazi leaders to account and defined crimes against humanity',
    explanation: 'The trials established that individuals and governments could be judged for mass atrocities.',
  },
  {
    prompt: 'How did the Holocaust influence later human rights law?',
    options: ['It encouraged protections such as the Genocide Convention', 'It ended all debate about international justice', 'It led states to reject universal human rights', 'It had no influence outside of the country of Germany'],
    answer: 'It encouraged protections such as the Genocide Convention',
    explanation: 'The scale of Nazi crimes pushed the world toward stronger legal definitions of genocide and human rights.',
  },
];

const NazismAndRace = () => (
  <CapsSubjectTopic
    title="Nazism and Race"
    subtitle="Aryan supremacy, anti-Semitism, the Holocaust, and the legacy of human rights law"
    learnSteps={learnSteps}
    task="gr11-nazism-and-race-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default NazismAndRace;
