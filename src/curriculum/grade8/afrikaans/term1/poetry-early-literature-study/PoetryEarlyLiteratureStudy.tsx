import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Poetry structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Poems use line breaks, stanzas and sound patterns to create meaning.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">strofe <SpeakButton text="strofe" /></span>
          <span className="inline-flex items-center">rym <SpeakButton text="rym" /></span>
          <span className="inline-flex items-center">toon <SpeakButton text="toon" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Literary effect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Imagery and word choice help readers feel the mood and message.
        </p>
        <p className="text-xl text-slate-700">Support your answer with a short phrase from the text.</p>
      </div>
    ),
  },
  {
    title: 'Answering line-reference questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Read the quoted line carefully before choosing the best interpretation.
        </p>
        <p className="text-slate-500">Good responses connect language evidence to effect.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these literature words aloud before discussing stories, poems, characters, and themes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"karakter"} phonetic={"[karakˈtɛr]"} meaning={"character"} lang="af" />
          <PronunciationPlayer word={"tema"} phonetic={"[ˈteːma]"} meaning={"theme"} lang="af" />
          <PronunciationPlayer word={"konflik"} phonetic={"[kɔnˈflək]"} meaning={"conflict"} lang="af" />
          <PronunciationPlayer word={"storie"} phonetic={"[ˈstoːri]"} meaning={"story"} lang="af" />
          <PronunciationPlayer word={"resensie"} phonetic={"[rɛˈsɛnsi]"} meaning={"review"} lang="af" />
          <PronunciationPlayer word={"toneel"} phonetic={"[tɔˈniəl]"} meaning={"scene / stage"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons 'n groep versreëls in 'n gedig?",
    options: ['Strofe', 'Paragraaf', 'Bylaag', 'Tabel'],
    answer: 'Strofe',
    explanation: 'A stanza in Afrikaans is a strofe.',
  },
  {
    prompt: "As woorde dieselfde eindklank het, noem ons dit ___.",
    options: ['rym', 'plot', 'register', 'simbool'],
    answer: 'rym',
    explanation: 'Rhyme uses similar ending sounds.',
  },
  {
    prompt: "Watter vraag help om beeldspraak te verstaan?",
    options: ['Watter beeld skep die woorde?', 'Hoeveel bladsye het die boek?', 'Wie druk die boek?', 'Watter kleur is die omslag?'],
    answer: 'Watter beeld skep die woorde?',
    explanation: 'Imagery asks what mental picture the words create.',
  },
  {
    prompt: "Die 'toon' van 'n gedig verwys na ___.",
    options: ['die houding of gevoel in die stem', 'die lengte van die papier', 'die aantal hoofstukke', 'die prys van die bundel'],
    answer: 'die houding of gevoel in die stem',
    explanation: 'Tone captures the speaker’s attitude.',
  },
  {
    prompt: "As 'n vraag sê 'Kyk na reël 4', wat moet jy doen?",
    options: ['Gebruik bewyse uit reël 4', 'Slaan reël 4 oor', 'Skryf net jou opinie', 'Verander die titel'],
    answer: 'Gebruik bewyse uit reël 4',
    explanation: 'Line-reference items need textual evidence.',
  },
  {
    prompt: "Watter opsie dui die beste op literêre interpretasie?",
    options: ['Koppel woordkeuse aan betekenis', 'Noem net die bladsygetal', 'Kies die langste opsie', 'Skryf sonder lees'],
    answer: 'Koppel woordkeuse aan betekenis',
    explanation: 'Interpretation explains effect and meaning.',
  },
  {
    prompt: "Wat help jou om die tema van 'n gedig te vind?",
    options: ['Herhalende idees en kernwoorde', 'Die naam van die drukker', 'Die datum op die boekrak', 'Die lettertipe alleen'],
    answer: 'Herhalende idees en kernwoorde',
    explanation: 'Themes are shown by repeated ideas.',
  },
  {
    prompt: "Kies die beste eerste stap met 'n onbekende gedig.",
    options: ['Lees dit stadig van begin tot einde', 'Skryf antwoorde dadelik', 'Raai al die antwoorde', 'Begin by die laaste vraag'],
    answer: 'Lees dit stadig van begin tot einde',
    explanation: 'A full read builds understanding before analysis.',
  },
];

const PoetryEarlyLiteratureStudy = () => (
  <AfrikaansTopic
    title="Poësie & Vroeë Literatuurstudie"
    subtitle="Structure, tone, imagery and line-reference skills"
    learnSteps={learnSteps}
    task="gr8-poetry-early-literature-study-t1"
    bank={bank}
    speak="options"
  />
);

export default PoetryEarlyLiteratureStudy;
