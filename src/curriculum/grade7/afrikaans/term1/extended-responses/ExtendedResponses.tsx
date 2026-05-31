import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan before writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good extended writing starts with a short plan: opening, middle, and closing.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">inleiding <SpeakButton text="inleiding" /></span>
          <span className="inline-flex items-center">middel <SpeakButton text="middel" /></span>
          <span className="inline-flex items-center">slot <SpeakButton text="slot" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Paragraph order matters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Keep one main idea per paragraph and connect ideas with linking words.
        </p>
        <p className="text-xl text-slate-700">
          <strong>Eers</strong>, <strong>daarna</strong>, <strong>uiteindelik</strong>.
        </p>
      </div>
    ),
  },
  {
    title: 'Write for your audience',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Your tone should match the reader. A school task needs clear, respectful language.
        </p>
        <p className="text-slate-500">Always reread and edit before submitting.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n skryftaak kom eerste?",
    options: ['Inleiding', 'Slot', 'Titelblad', 'Bylaag'],
    answer: 'Inleiding',
    explanation: 'The introduction starts the response.',
  },
  {
    prompt: "Watter volgorde is die beste vir 'n paragraaf?",
    options: ['Hoofidee, besonderhede, afsluiting', 'Afsluiting, hoofidee, titel', 'Titel, datum, voetnota', 'Slegs besonderhede sonder hoofidee'],
    answer: 'Hoofidee, besonderhede, afsluiting',
    explanation: 'A paragraph needs a clear main idea and support.',
  },
  {
    prompt: "Kies die beste skakelwoord vir volgorde: '___ het ons begin oefen.'",
    options: ['Daarna', 'Maar', 'Want', 'Of'],
    answer: 'Daarna',
    explanation: "'Daarna' shows sequence of events.",
  },
  {
    prompt: "Wat beteken 'teikengehoor' in skryfwerk?",
    options: ['Die mense vir wie jy skryf', 'Die lengte van jou opstel', 'Die lettertipe van jou werk', 'Die kleur van die papier'],
    answer: 'Die mense vir wie jy skryf',
    explanation: 'Audience means the intended readers.',
  },
  {
    prompt: "Watter opening pas die beste by 'n narratiewe paragraaf?",
    options: ['Verlede Saterdag het iets onverwags gebeur.', 'Die teks gebruik swart ink.', 'Daar is drie reëls op die bladsy.', 'My boek is op die tafel.'],
    answer: 'Verlede Saterdag het iets onverwags gebeur.',
    explanation: 'Narrative writing needs a context-setting opening.',
  },
  {
    prompt: "Watter sin is die beste slot vir 'n uitgebreide antwoord?",
    options: ['Dus het ek geleer dat voorbereiding belangrik is.', 'Ek het nou klaar gepraat miskien.', 'Die pen was swaar.', "Hier is nog 'n titel."],
    answer: 'Dus het ek geleer dat voorbereiding belangrik is.',
    explanation: 'A closing sentence should summarise the key message.',
  },
  {
    prompt: "Waarom redigeer ons aan die einde?",
    options: ['Om foute in spelling en leestekens reg te maak', 'Om nuwe hoofstukke by te voeg', 'Om die onderwerp te verander', 'Om die vrae te ignoreer'],
    answer: 'Om foute in spelling en leestekens reg te maak',
    explanation: 'Editing improves clarity and correctness.',
  },
  {
    prompt: "Kies die beste toon vir 'n formele skoolantwoord.",
    options: ['Netjies en respekvol', 'Baie sleng en afkortings', 'Slegs emoji-simbole', 'Langer as 20 paragrawe sonder plan'],
    answer: 'Netjies en respekvol',
    explanation: 'School writing should be clear and appropriate.',
  },
];

const ExtendedResponses = () => (
  <AfrikaansTopic
    title="Uitgebreide Antwoorde"
    subtitle="Planning and structuring longer writing"
    learnSteps={learnSteps}
    task="gr7-extended-responses-t1"
    bank={bank}
    speak="options"
  />
);

export default ExtendedResponses;
