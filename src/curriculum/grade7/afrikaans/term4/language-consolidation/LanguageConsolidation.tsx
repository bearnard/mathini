import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate key language areas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 language consolidation revises tense, parts of speech, punctuation and sentence structure.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">tye <SpeakButton text="tye" /></span>
          <span className="inline-flex items-center">woordsoorte <SpeakButton text="woordsoorte" /></span>
          <span className="inline-flex items-center">sinsbou <SpeakButton text="sinsbou" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Accuracy in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Apply grammar rules in full sentences, not isolated lists.
        </p>
        <p className="text-xl text-slate-700">Context shows whether your choice is correct.</p>
      </div>
    ),
  },
  {
    title: 'Final exam confidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Practise mixed MCQs to strengthen automatic recall of language conventions.
        </p>
        <p className="text-slate-500">Consistent review reduces careless errors.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte teenwoordige tyd: 'Hulle ___ elke dag.'",
    options: ['oefen', 'het geoefen', 'sal oefen', 'geoefen'],
    answer: 'oefen',
    explanation: "The adverb 'elke dag' supports present tense.",
  },
  {
    prompt: "Kies die korrekte verlede tyd: 'Gister ___ ons hard geleer.'",
    options: ['het', 'sal', 'is', 'word'],
    answer: 'het',
    explanation: "'Gister' indicates past tense.",
  },
  {
    prompt: "Watter woordsoort is 'vinnig' in: 'Sy hardloop vinnig'?",
    options: ['Bywoord', 'Selfstandige naamwoord', 'Voornaamwoord', 'Voegwoord'],
    answer: 'Bywoord',
    explanation: "'Vinnig' describes how she runs, so it is an adverb.",
  },
  {
    prompt: "Kies die korrekte leesteken: 'Ek hou van lees___ skryf en teken.'",
    options: [',', '.', '!', '?'],
    answer: ',',
    explanation: 'A comma separates listed actions here.',
  },
  {
    prompt: "Watter sin het die beste sinsbou ná 'Môre'?",
    options: ['Môre sal ons vroeg vertrek.', 'Môre ons sal vroeg vertrek.', 'Ons vroeg vertrek sal môre.', 'Sal môre ons vroeg vertrek ons.'],
    answer: 'Môre sal ons vroeg vertrek.',
    explanation: 'With a fronted time phrase, verb placement must stay correct.',
  },
  {
    prompt: "Kies die korrekte antoniem vir 'sterk'.",
    options: ['swak', 'dapper', 'vinnig', 'helder'],
    answer: 'swak',
    explanation: "'Swak' is the opposite of 'sterk'.",
  },
  {
    prompt: "Watter sin toon korrekte hooflettergebruik?",
    options: ["Op Maandag skryf ons 'n toets in Afrikaans.", "op maandag skryf ons 'n toets in afrikaans.", "Op maandag skryf ons 'n toets in afrikaans.", "op Maandag skryf ons 'n toets in Afrikaans."],
    answer: "Op Maandag skryf ons 'n toets in Afrikaans.",
    explanation: 'The sentence starts with a capital and language name is capitalized here.',
  },
  {
    prompt: "Waarom is taal-konsolidasie belangrik teen jaar-einde?",
    options: ['Dit versterk al die kernreëls vir assesserings', 'Dit vervang alle leeswerk', 'Dit fokus net op een vraagtipe', 'Dit maak redigering oorbodig'],
    answer: 'Dit versterk al die kernreëls vir assesserings',
    explanation: 'Consolidation builds reliable exam performance.',
  },
];

const LanguageConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Year-end grammar and sentence accuracy"
    learnSteps={learnSteps}
    task="gr7-language-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default LanguageConsolidation;
