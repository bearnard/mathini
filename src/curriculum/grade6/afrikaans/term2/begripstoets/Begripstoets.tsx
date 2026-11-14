import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Read for the main idea',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          First ask: <strong>Waaroor gaan die teks?</strong> This means, “What is the text about?”
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          die hoofgedagte <SpeakButton text="die hoofgedagte" />
        </span>
      </div>
    ),
  },
  {
    title: 'Find facts in the passage',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Look back at the sentences to find names, places, times, and actions.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Soek in die teks <SpeakButton text="Soek in die teks" />
        </span>
      </div>
    ),
  },
  {
    title: 'Answer in Afrikaans',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Choose the answer that matches the passage, not just a word that sounds familiar.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          die regte antwoord <SpeakButton text="die regte antwoord" />
        </span>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these comprehension words aloud so question terms are familiar during reading tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"vraag"} phonetic={"[frɑːχ]"} meaning={"question"} lang="af" />
          <PronunciationPlayer word={"antwoord"} phonetic={"[ˈantvɔrt]"} meaning={"answer"} lang="af" />
          <PronunciationPlayer word={"paragraaf"} phonetic={"[paraˈχrɑːf]"} meaning={"paragraph"} lang="af" />
          <PronunciationPlayer word={"hoofgedagte"} phonetic={"[ˈhoəfχədaχtə]"} meaning={"main idea"} lang="af" />
          <PronunciationPlayer word={"detail"} phonetic={"[diˈtœil]"} meaning={"detail"} lang="af" />
          <PronunciationPlayer word={"opsomming"} phonetic={"[ˈɔpsɔməŋ]"} meaning={"summary"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Lena het Saterdag biblioteek toe gegaan. Sy het ’n boek oor diere geleen. Watter boek het Lena geleen?',
    options: ['’n boek oor diere', '’n boek oor motors', '’n boek oor sport', '’n boek oor kos'],
    answer: '’n boek oor diere',
    explanation: 'The passage says she borrowed a book about animals.',
  },
  {
    prompt: 'Thabo speel sokker na skool. Sy span oefen op die groot veld. Waar oefen die span?',
    options: ['op die groot veld', 'in die klaskamer', 'by die winkel', 'in die kombuis'],
    answer: 'op die groot veld',
    explanation: 'The team practises on the big field.',
  },
  {
    prompt: 'Mia plant tamaties in die tuin. Sy gee elke oggend water. Wat plant Mia?',
    options: ['tamaties', 'blomme', 'bome', 'wortels'],
    answer: 'tamaties',
    explanation: 'The first sentence says Mia plants tomatoes.',
  },
  {
    prompt: 'Die bus kom om sewe-uur. Jan staan vroeg op sodat hy nie laat is nie. Hoe laat kom die bus?',
    options: ['om sewe-uur', 'om agt-uur', 'om ses-uur', 'om tien-uur'],
    answer: 'om sewe-uur',
    explanation: 'The time given in the passage is seven o’clock.',
  },
  {
    prompt: 'Sara se kat slaap op die bank. Die kat is grys en baie rustig. Waar slaap die kat?',
    options: ['op die bank', 'onder die bed', 'buite die huis', 'op die tafel'],
    answer: 'op die bank',
    explanation: 'The passage says the cat sleeps on the couch.',
  },
  {
    prompt: 'Ouma bak brood in die kombuis. Die huis ruik lekker. Wie bak brood?',
    options: ['Ouma', 'Sara', 'Jan', 'Mia'],
    answer: 'Ouma',
    explanation: 'Ouma is the person baking bread.',
  },
  {
    prompt: 'Die reën val hard op Maandag. Die kinders speel binne tydens pouse. Hoekom speel die kinders binne?',
    options: ['Dit reën hard', 'Dit is warm', 'Die son skyn', 'Hulle swem'],
    answer: 'Dit reën hard',
    explanation: 'They play inside because it is raining hard.',
  },
  {
    prompt: 'Ben dra ’n rooi pet skool toe. Hy kry die pet by sy broer. Watter kleur is Ben se pet?',
    options: ['rooi', 'blou', 'groen', 'geel'],
    answer: 'rooi',
    explanation: 'The passage says Ben wears a red cap.',
  },
  {
    prompt: 'Die klas besoek die museum. Hulle leer van ou treine en foto’s. Waarheen gaan die klas?',
    options: ['die museum', 'die strand', 'die park', 'die mark'],
    answer: 'die museum',
    explanation: 'The class visits the museum.',
  },
];

const Begripstoets = () => (
  <AfrikaansTopic
    title="Begripstoets"
    subtitle="Reading comprehension"
    learnSteps={learnSteps}
    task="begripstoets"
    bank={bank}
    speak="both"
  />
);

export default Begripstoets;
