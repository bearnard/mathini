import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Direct and indirect speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reporting what someone said requires tense and pronoun adjustments.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">direkte rede <SpeakButton text="direkte rede" /></span>
          <span className="inline-flex items-center">indirekte rede <SpeakButton text="indirekte rede" /></span>
          <span className="inline-flex items-center">voornaamwoorde <SpeakButton text="voornaamwoorde" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Concord and pronouns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Subject-verb agreement and correct pronouns make reporting accurate.
        </p>
        <p className="text-xl text-slate-700">Check who performs the action before choosing forms.</p>
      </div>
    ),
  },
  {
    title: 'Build coherent sentences',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Coherence improves when ideas connect logically with correct linking words.
        </p>
        <p className="text-slate-500">Avoid abrupt jumps between unrelated sentences.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte indirekte rede: Sy sê: 'Ek leer nou.'",
    options: ['Sy sê dat sy nou leer.', 'Sy sê ek leer nou.', 'Sy sê dat ek nou leer.', 'Sy sê dat sy leer gister.'],
    answer: 'Sy sê dat sy nou leer.',
    explanation: 'Pronoun shifts from first person to third person.',
  },
  {
    prompt: "Watter voornaamwoord pas: 'Lebo en Anna bring ___ boeke.'",
    options: ['hulle', 'hy', 'sy', 'ons'],
    answer: 'hulle',
    explanation: 'Plural subject needs plural pronoun.',
  },
  {
    prompt: "Kies die sin met korrekte kongruensie.",
    options: ['Die leerders skryf netjies.', 'Die leerders skryf netjiese.', 'Die leerders skryfte netjies.', 'Die leerders het skryf netjies.'],
    answer: 'Die leerders skryf netjies.',
    explanation: 'Verb form and sentence structure are correct.',
  },
  {
    prompt: "Watter voegwoord verbeter samehang hier: 'Hy het hard gewerk, ___ hy geslaag.'",
    options: ['dus', 'maar', 'of', 'alhoewel'],
    answer: 'dus',
    explanation: "'Dus' shows logical result.",
  },
  {
    prompt: "Kies die beste indirekte weergawe: Mnr. Naidoo sê: 'Julle moet stil wees.'",
    options: ['Mnr. Naidoo sê dat hulle stil moet wees.', 'Mnr. Naidoo sê julle moet stil wees.', 'Mnr. Naidoo sê dat ons stil wees.', 'Mnr. Naidoo sê dat hy stil moet wees.'],
    answer: 'Mnr. Naidoo sê dat hulle stil moet wees.',
    explanation: 'Reported speech adjusts pronouns correctly.',
  },
  {
    prompt: "Waarom is samehang belangrik in verslagskryfwerk?",
    options: ['Dit help die leser om idees maklik te volg', 'Dit maak sinne langer sonder rede', 'Dit verwyder alle voegwoorde', 'Dit stop die hoofidee'],
    answer: 'Dit help die leser om idees maklik te volg',
    explanation: 'Coherence supports clear communication.',
  },
  {
    prompt: "Watter sin gebruik direkte rede korrek?",
    options: ["Hy vra: 'Wanneer begin die toets?'", 'Hy vra wanneer begin die toets?', "Hy vra 'Wanneer begin die toets?", 'Hy vra: wanneer begin die toets.'],
    answer: "Hy vra: 'Wanneer begin die toets?'",
    explanation: 'Direct speech uses punctuation and quotation marks.',
  },
  {
    prompt: "Kies die beste aanpassing van tyd: 'Ek gaan môre oefen,' sê Karla.",
    options: ['Karla sê sy gaan die volgende dag oefen.', 'Karla sê ek gaan môre oefen.', 'Karla sê sy oefen gister.', 'Karla sê sy gaan môre te gewees oefen.'],
    answer: 'Karla sê sy gaan die volgende dag oefen.',
    explanation: "Time words often shift in reported speech.",
  },
];

const GrammarReportingCoherence = () => (
  <AfrikaansTopic
    title="Grammatika vir Verslagdoening & Samehang"
    subtitle="Reported speech, pronouns, concord and coherent sentence links"
    learnSteps={learnSteps}
    task="gr8-grammar-reporting-coherence-t2"
    bank={bank}
    speak="options"
  />
);

export default GrammarReportingCoherence;
