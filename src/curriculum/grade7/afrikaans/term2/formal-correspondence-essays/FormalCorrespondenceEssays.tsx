import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Formal letter structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A formele brief needs sender details, date, greeting, body and formal closing.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">Geagte ... <SpeakButton text="Geagte" /></span>
          <span className="inline-flex items-center">Die uwe <SpeakButton text="Die uwe" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Register and tone',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use polite, formal language. Avoid slang and chat-style abbreviations.
        </p>
        <p className="text-xl text-slate-700">
          Clear and respectful writing shows control.
        </p>
      </div>
    ),
  },
  {
    title: 'Essay planning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          For essays, plan ideas first, then write an introduction, body and conclusion.
        </p>
        <p className="text-slate-500">Stay on topic and support each point with an example.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these formal-writing words aloud so register and structure feel more natural on the page.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Geagte"} phonetic={"[χəˈɑxtə]"} meaning={"Dear / respected"} lang="af" />
          <PronunciationPlayer word={"Onderwerp"} phonetic={"[ˈɔndərvɛrp]"} meaning={"Subject"} lang="af" />
          <PronunciationPlayer word={"Adres"} phonetic={"[aˈdrɛs]"} meaning={"Address"} lang="af" />
          <PronunciationPlayer word={"Datum"} phonetic={"[ˈdɑːtəm]"} meaning={"Date"} lang="af" />
          <PronunciationPlayer word={"Handtekening"} phonetic={"[ˈhanttɛikəneŋ]"} meaning={"Signature"} lang="af" />
          <PronunciationPlayer word={"Vriendelik"} phonetic={"[ˈfriəndələk]"} meaning={"Kind / friendly"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter groet pas die beste in 'n formele brief?",
    options: ['Geagte Meneer', 'Haai maat', 'Yo vriend', 'Hey julle'],
    answer: 'Geagte Meneer',
    explanation: "'Geagte ...' is a formal salutation.",
  },
  {
    prompt: "Watter afsluiting is formeel?",
    options: ['Die uwe', 'Sien jou later', 'Cheers', 'Liefde en liggies'],
    answer: 'Die uwe',
    explanation: "'Die uwe' is appropriate for formal letters.",
  },
  {
    prompt: "Watter taalregister moet jy in 'n formele brief gebruik?",
    options: ['Formeel en respekvol', 'Sleng en grappies', 'Kort SMS-taal', 'Slegs emoji-tekens'],
    answer: 'Formeel en respekvol',
    explanation: 'Formal correspondence requires formal register.',
  },
  {
    prompt: "Wat kom gewoonlik ná die groet in 'n formele brief?",
    options: ['Die inhoud of paragrawe van die brief', 'Die slot van die brief dadelik', "Die titel van 'n gedig uit die klas", 'Daar volg geen teks na die groet nie'],
    answer: 'Die inhoud of paragrawe van die brief',
    explanation: 'After greeting, you write the body of the letter.',
  },
  {
    prompt: "Watter is die beste opening vir 'n beskrywende opstel?",
    options: ['Die oggendlug het vars geruik toe ons by die strand aankom.', "Hierdie opstel het drie paragrawe en 'n slot.", 'Ek skryf nou net woorde neer vir die opstel.', 'Die papier waarop ek skryf is wit en skoon.'],
    answer: 'Die oggendlug het vars geruik toe ons by die strand aankom.',
    explanation: 'A descriptive opening creates a vivid scene.',
  },
  {
    prompt: "Wat is 'n goeie rede om eers jou opstel te beplan?",
    options: ['Dit help jou idees logies organiseer', 'Dit maak die opstel langer sonder rede', 'Dit vervang redigering', 'Dit laat jou die onderwerp verander'],
    answer: 'Dit help jou idees logies organiseer',
    explanation: 'Planning improves structure and coherence.',
  },
  {
    prompt: "Kies die beste slot vir 'n narratiewe opstel.",
    options: ['Uiteindelik het ek besef hoe belangrik moed is.', 'My pen het opgehou werk tydens die opstel.', 'Daar was baie letters op die bladsy.', 'Ek hou baie van koekies en tee saam.'],
    answer: 'Uiteindelik het ek besef hoe belangrik moed is.',
    explanation: 'A good conclusion reflects on the story meaning.',
  },
  {
    prompt: "Watter fout moet jy vermy in formele skryfwerk?",
    options: ["Informele afkortings soos 'lol' en 'btw'", 'Korrekte leestekens in elke sin', 'Duidelike paragrawe met hoofgedagtes', 'Netjiese taalgebruik in die hele teks'],
    answer: "Informele afkortings soos 'lol' en 'btw'",
    explanation: 'Chat abbreviations are not suitable in formal writing.',
  },
];

const FormalCorrespondenceEssays = () => (
  <AfrikaansTopic
    title="Formele Korrespondensie & Opstelle"
    subtitle="Formal letters, register and essay structure"
    learnSteps={learnSteps}
    task="gr7-formal-correspondence-essays-t2"
    bank={bank}
    speak="options"
  />
);

export default FormalCorrespondenceEssays;
