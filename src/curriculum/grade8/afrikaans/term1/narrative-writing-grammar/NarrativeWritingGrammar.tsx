import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan narrative structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong narratives have an opening, conflict and clear ending.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">inleiding <SpeakButton text="inleiding" /></span>
          <span className="inline-flex items-center">konflik <SpeakButton text="konflik" /></span>
          <span className="inline-flex items-center">slot <SpeakButton text="slot" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Keep tense and grammar consistent',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use one tense consistently unless the context clearly changes.
        </p>
        <p className="text-xl text-slate-700">Check nouns, adjectives and punctuation while editing.</p>
      </div>
    ),
  },
  {
    title: 'Edit for clarity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final drafts should have accurate sentence control and clear paragraph links.
        </p>
        <p className="text-slate-500">Read each sentence aloud to catch awkward wording.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n storie stel die karakter en plek bekend?",
    options: ['Inleiding', 'Konflik', 'Klimaks', 'Slotnota'],
    answer: 'Inleiding',
    explanation: 'The introduction sets up setting and characters.',
  },
  {
    prompt: "Kies die beste narratiewe openingsin.",
    options: ['Toe die klok lui, hardloop ek na die saal.', 'Die saal is groot en blou.', 'Ek hou van skryfwerk.', 'Daar is drie vensters.'],
    answer: 'Toe die klok lui, hardloop ek na die saal.',
    explanation: 'It starts with action and context.',
  },
  {
    prompt: "Wat is die hoofdoel van leestekens in 'n opstel?",
    options: ['Om betekenis duidelik te maak', 'Om sinne langer te maak', 'Om die storie te verkort', 'Om werkwoorde te vervang'],
    answer: 'Om betekenis duidelik te maak',
    explanation: 'Punctuation guides reading and meaning.',
  },
  {
    prompt: "Kies die korrekte tydsvorm: 'Gister ___ ons laat by die huis.'",
    options: ['was', 'is', 'sal wees', 'wees'],
    answer: 'was',
    explanation: "'Gister' requires past tense.",
  },
  {
    prompt: "Watter opsie wys goeie redigering?",
    options: ['Verbeter spelling en sinsbou in elke paragraaf', 'Voeg net meer uitroeptekens by', 'Verander net die titel', 'Skryf sonder leestekens'],
    answer: 'Verbeter spelling en sinsbou in elke paragraaf',
    explanation: 'Editing focuses on language accuracy and clarity.',
  },
  {
    prompt: "Kies die beste byvoeglike naamwoord in: 'Dit was 'n ___ dag.'",
    options: ['spannende', 'spanning', 'spannendheid', 'span'],
    answer: 'spannende',
    explanation: 'The attributive adjective form is needed here.',
  },
  {
    prompt: "Waarom is paragrawe belangrik in narratiewe skryfwerk?",
    options: ['Hulle organiseer idees en gebeure', 'Hulle vervang leestekens', 'Hulle maak sinne onnodig', 'Hulle wys die boekprys'],
    answer: 'Hulle organiseer idees en gebeure',
    explanation: 'Paragraphing helps flow and readability.',
  },
  {
    prompt: "Watter sin toon konsekwente teenwoordige tyd?",
    options: ['Ek stap skool toe en groet my vriend.', 'Ek stap skool toe en het my vriend gegroet.', 'Ek sal stap en groet gister.', 'Ek het stap en groet nou.'],
    answer: 'Ek stap skool toe en groet my vriend.',
    explanation: 'Both verbs are in present tense.',
  },
];

const NarrativeWritingGrammar = () => (
  <AfrikaansTopic
    title="Narratiewe Skryfwerk & Grammatika"
    subtitle="Essay flow, grammar control and editing practice"
    learnSteps={learnSteps}
    task="gr8-narrative-writing-grammar-t1"
    bank={bank}
    speak="options"
  />
);

export default NarrativeWritingGrammar;
