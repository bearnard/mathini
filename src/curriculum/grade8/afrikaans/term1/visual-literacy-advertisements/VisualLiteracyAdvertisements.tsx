import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Read the purpose of the advert',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual texts combine words and design to persuade a specific audience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">slagspreuk <SpeakButton text="slagspreuk" /></span>
          <span className="inline-flex items-center">teikengehoor <SpeakButton text="teikengehoor" /></span>
          <span className="inline-flex items-center">uitleg <SpeakButton text="uitleg" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Connect language to impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Emotive words and bold slogans are used to influence feelings and choices.
        </p>
        <p className="text-xl text-slate-700">Ask: “How does this wording make the reader react?”</p>
      </div>
    ),
  },
  {
    title: 'Evaluate design choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Layout, image size and call-to-action placement guide what we notice first.
        </p>
        <p className="text-slate-500">Strong answers mention both visuals and language evidence.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter woord in 'n advertensie noem wie die boodskap moet lees?",
    options: ['Teikengehoor', 'Bysin', 'Werkwoord', 'Paragraaf'],
    answer: 'Teikengehoor',
    explanation: 'Target audience identifies who the advert is aimed at.',
  },
  {
    prompt: "Wat is die hoofdoel van 'n slagspreuk?",
    options: ['Om die produk maklik te onthou', 'Om die datum te versteek', 'Om leestekens te verduidelik', 'Om die advertensie langer te maak'],
    answer: 'Om die produk maklik te onthou',
    explanation: 'A slogan should be short and memorable.',
  },
  {
    prompt: "As die teks sê 'Moenie uitmis nie!', watter tegniek word gebruik?",
    options: ['Oorredende taal', 'Direkte rede', 'Opsomming', 'Verlede tyd'],
    answer: 'Oorredende taal',
    explanation: 'This phrase pushes the reader to act quickly.',
  },
  {
    prompt: 'Watter vraag help jou om uitleg te ontleed?',
    options: ['Waar val jou oog eerste?', 'Hoeveel letters is daar?', 'Watter pen is gebruik?', 'Wie het dit uitgedruk?'],
    answer: 'Waar val jou oog eerste?',
    explanation: 'Layout analysis starts by noticing visual focus.',
  },
  {
    prompt: "Kies die beste voorbeeld van 'n oproep tot aksie.",
    options: ['Koop vandag en spaar 20%', 'Hierdie is net inligting', 'Die plakkaat is blou', 'Daar is drie sinne'],
    answer: 'Koop vandag en spaar 20%',
    explanation: 'A call to action asks the reader to do something.',
  },
  {
    prompt: "Watter kombinasie maak 'n advertensie die mees oortuigend?",
    options: ['Duidelike beeld en sterk woorde', 'Baie klein letters en geen titel', 'Net een lang paragraaf', 'Geen prent en geen prys'],
    answer: 'Duidelike beeld en sterk woorde',
    explanation: 'Effective adverts balance visual and language impact.',
  },
  {
    prompt: "Waarom gebruik advertensies soms 'n vraag as opskrif?",
    options: ['Om nuuskierigheid te skep', 'Om grammatika te toets', 'Om antwoordstelle te gee', 'Om die produknaam te verwyder'],
    answer: 'Om nuuskierigheid te skep',
    explanation: 'Questions draw readers in and hold attention.',
  },
  {
    prompt: "In die sin 'Perfek vir Graad 8-leerders', wat wys dit die beste?",
    options: ['Doelgroep', 'Tydsvorm', 'Konflik', 'Byvoeging'],
    answer: 'Doelgroep',
    explanation: 'It specifies exactly who the advert is for.',
  },
];

const VisualLiteracyAdvertisements = () => (
  <AfrikaansTopic
    title="Visuele Geletterdheid & Advertensies"
    subtitle="Audience, persuasion and layout in visual texts"
    learnSteps={learnSteps}
    task="gr8-visual-literacy-advertisements-t1"
    bank={bank}
    speak="options"
  />
);

export default VisualLiteracyAdvertisements;
