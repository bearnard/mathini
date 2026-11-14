import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Persuasive visual texts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Adverts and posters use images and words to persuade a target audience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">advertensie <SpeakButton text="advertensie" /></span>
          <span className="inline-flex items-center">slagspreuk <SpeakButton text="slagspreuk" /></span>
          <span className="inline-flex items-center">teikengehoor <SpeakButton text="teikengehoor" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'AIDA model',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          AIDA stands for Attention, Interest, Desire and Action.
        </p>
        <p className="text-xl text-slate-700">
          Good adverts first grab attention, then ask the reader to act.
        </p>
      </div>
    ),
  },
  {
    title: 'Critical response',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ask whether the message is fair, clear, and believable.
        </p>
        <p className="text-slate-500">Support answers with details from the visual text.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these persuasive words aloud before analysing how adverts and campaigns influence audiences.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"koop"} phonetic={"[koəp]"} meaning={"buy"} lang="af" />
          <PronunciationPlayer word={"spesiaal"} phonetic={"[spɛsiˈɑːl]"} meaning={"special"} lang="af" />
          <PronunciationPlayer word={"vars"} phonetic={"[fars]"} meaning={"fresh"} lang="af" />
          <PronunciationPlayer word={"keuse"} phonetic={"[ˈkœsə]"} meaning={"choice"} lang="af" />
          <PronunciationPlayer word={"aandag"} phonetic={"[ˈaːndax]"} meaning={"attention"} lang="af" />
          <PronunciationPlayer word={"oortuig"} phonetic={"[ˈuːrtœiχ]"} meaning={"convince / persuade"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die hoofdoel van 'n advertensie?",
    options: ['Om mense te oortuig om iets te doen of koop', "Om 'n storie in hoofstukke te vertel", 'Om net grammatika te toets', 'Om rymwoorde te lys'],
    answer: 'Om mense te oortuig om iets te doen of koop',
    explanation: 'Adverts are designed to persuade.',
  },
  {
    prompt: "In AIDA, waarvoor staan die 'A' aan die einde?",
    options: ['Action', 'Answer', 'Audience', 'Accuracy'],
    answer: 'Action',
    explanation: 'The final step asks the audience to act.',
  },
  {
    prompt: "Watter element trek gewoonlik eerste aandag in 'n plakkaat?",
    options: ['Groot beeld of vet opskrif', 'Klein voetnota', 'Bladsynommer', 'Skrywer se handtekening'],
    answer: 'Groot beeld of vet opskrif',
    explanation: 'Visual hierarchy starts with large eye-catching elements.',
  },
  {
    prompt: "Wat is 'n slagspreuk?",
    options: ['Kort, onthoubare frase vir die produk of boodskap', "'n Lang paragraaf uit 'n opstel", "'n Lys van spelreëls vir 'n wedstryd", "'n Formele afsluiting van 'n brief"],
    answer: 'Kort, onthoubare frase vir die produk of boodskap',
    explanation: 'A slogan is short and memorable.',
  },
  {
    prompt: "Watter vraag help om die teikengehoor te bepaal?",
    options: ['Vir wie is hierdie advertensie bedoel?', 'Hoeveel bladsye het die handboek?', 'Wie het gister afwesig was?', 'Wat is die rymskema?'],
    answer: 'Vir wie is hierdie advertensie bedoel?',
    explanation: 'Target audience is the intended group.',
  },
  {
    prompt: "Kies die beste oproep tot aksie.",
    options: ['Koop nou en spaar 20%!', 'Miskien later, dalk.', 'Daar is wolke vandag.', "Hierdie is net 'n hoofstuknaam."],
    answer: 'Koop nou en spaar 20%!',
    explanation: "A call to action tells the reader what to do next.",
  },
  {
    prompt: "Watter tegniek is persuasief?",
    options: ['Emosionele woordkeuse', 'Wiskundeformules sonder konteks', 'Leë bladsy', 'Slegs voetnotas'],
    answer: 'Emosionele woordkeuse',
    explanation: 'Persuasive texts often use emotive language.',
  },
  {
    prompt: "Waarom moet jy 'n advertensie krities lees?",
    options: ['Om te toets of die boodskap betroubaar en billik is', 'Om net die prentjie in die advertensie te kleur', 'Om al die vrae oor die advertensie oor te slaan', 'Om ryme in elke sin van die teks te soek'],
    answer: 'Om te toets of die boodskap betroubaar en billik is',
    explanation: 'Critical reading checks claims and bias.',
  },
];

const VisualLiteracyPersuasion = () => (
  <AfrikaansTopic
    title="Visuele Geletterdheid & Oorreding"
    subtitle="Advertisements, AIDA and persuasive language"
    learnSteps={learnSteps}
    task="gr7-visual-literacy-persuasion-t3"
    bank={bank}
    speak="options"
  />
);

export default VisualLiteracyPersuasion;
