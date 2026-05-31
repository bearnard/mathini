import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Read questions carefully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Assessment tasks mix comprehension, visual text and grammar. Read command words first.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">verduidelik <SpeakButton text="verduidelik" /></span>
          <span className="inline-flex items-center">kies <SpeakButton text="kies" /></span>
          <span className="inline-flex items-center">bewys <SpeakButton text="bewys" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Use visual clues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In visual texts, look at heading, image details, and audience before choosing an answer.
        </p>
        <p className="text-xl text-slate-700">Think: “Who is this message aimed at?”</p>
      </div>
    ),
  },
  {
    title: 'Language check routine',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Check tense, spelling and punctuation in every sentence.
        </p>
        <p className="text-slate-500">Small fixes can earn many marks.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter strategie help eerste in 'n toetsvraag?",
    options: ['Lees die vraag en sleutelwoorde stadig', 'Spring dadelik na opsie C', 'Ignoreer die instruksie', 'Skryf sonder om te dink'],
    answer: 'Lees die vraag en sleutelwoorde stadig',
    explanation: 'Careful reading reduces avoidable mistakes.',
  },
  {
    prompt: "In 'n advertensie, wat help om die teikengehoor te identifiseer?",
    options: ['Beelde en woordkeuse', 'Net die papierkleur', 'Die bladsy nommer', 'Die prys van die pen'],
    answer: 'Beelde en woordkeuse',
    explanation: 'Visual and language choices reveal target audience.',
  },
  {
    prompt: "Kies die korrekte leesteken: 'Pasop___ die vloer is nat!'",
    options: ['!', '.', ',', '?'],
    answer: '!',
    explanation: 'An exclamation mark fits a warning.',
  },
  {
    prompt: "Watter opsie is die beste taalverbetering?",
    options: ['Hulle het gister gespeel.', 'Hulle gister speel.', 'Hulle speel gister.', 'Hulle het speel gister.'],
    answer: 'Hulle het gister gespeel.',
    explanation: "Correct past tense word order is 'het ... gespeel'.",
  },
  {
    prompt: "Wat beteken 'haal bewys uit die teks'?",
    options: ["Gebruik 'n woord of frase uit die teks as ondersteuning", 'Skryf jou eie storie', 'Raai die antwoord', 'Kopieer die hele bladsy'],
    answer: "Gebruik 'n woord of frase uit die teks as ondersteuning",
    explanation: 'Evidence must come from the given text.',
  },
  {
    prompt: "Watter sin is die beste voorbeeld van korrekte spelling?",
    options: ['Die leerder voltooi sy huiswerk betyds.', 'Die leeder voltoi sy huiswerk betyds.', 'Die lerder voltooi sy huisswerk betyds.', 'Die leerder voltooi sy huiswerkk betyds.'],
    answer: 'Die leerder voltooi sy huiswerk betyds.',
    explanation: 'This option has standard spelling.',
  },
  {
    prompt: "Kies die vraag wat by 'n visuele teks pas.",
    options: ['Watter produk word geadverteer?', 'Wat is die hoofkarakter se konflik?', 'Wat is die rymskema?', 'Watter hoofstuk is die langste?'],
    answer: 'Watter produk word geadverteer?',
    explanation: 'Visual text questions focus on adverts, posters, signs, and images.',
  },
  {
    prompt: "Watter gewoonte help met taaltoetsvoorbereiding?",
    options: ['Daaglikse kort hersiening van grammatika en woordeskat', 'Leer net die aand voor die toets', 'Skryf sonder leestekens', 'Lees nooit terug nie'],
    answer: 'Daaglikse kort hersiening van grammatika en woordeskat',
    explanation: 'Consistent practice builds accuracy.',
  },
];

const AssessmentLanguagePractice = () => (
  <AfrikaansTopic
    title="Assesseringsgerigte Taalpraktyk"
    subtitle="Comprehension, visual literacy and grammar readiness"
    learnSteps={learnSteps}
    task="gr7-assessment-language-practice-t2"
    bank={bank}
    speak="options"
  />
);

export default AssessmentLanguagePractice;
