import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Learn key concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 9 Afrikaans FAL builds on foundational skills.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop deeper understanding',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mastering these concepts prepares you for advanced language study.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply learning in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Practice strengthens your command of Afrikaans language and literature.
        </p>
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
    prompt: "Watter woord beteken 'die hoofboodskap van 'n teks'?",
    options: ["tema", "toneel", "karakter", "konflik"],
    answer: "tema",
    explanation: "'Tema' (theme) is the main message or big idea of a text.",
  },
  {
    prompt: "Watter woord beteken 'die probleem of stryd in 'n storie'?",
    options: ["konflik", "tema", "resensie", "storie"],
    answer: "konflik",
    explanation: "'Konflik' (conflict) is the problem or struggle that drives a story.",
  },
  {
    prompt: "Watter woord beteken 'iemand in 'n storie'?",
    options: ["karakter", "resensie", "toneel", "tema"],
    answer: "karakter",
    explanation: "'Karakter' (character) is a person in a story.",
  },
  {
    prompt: "Watter woord beteken 'jou mening met redes oor 'n boek of fliek'?",
    options: ["resensie", "storie", "konflik", "toneel"],
    answer: "resensie",
    explanation: "'Resensie' (review) gives an opinion with reasons about a book or film.",
  },
  {
    prompt: "Watter woord beteken 'een deel van 'n drama op die verhoog'?",
    options: ["toneel", "karakter", "tema", "resensie"],
    answer: "toneel",
    explanation: "'Toneel' (scene / stage) is a part of a play on the stage.",
  },
  {
    prompt: "Watter woord beteken 'n vertelling oor karakters en gebeure'?",
    options: ["storie", "konflik", "tema", "resensie"],
    answer: "storie",
    explanation: "'Storie' (story) tells about characters and events.",
  },
];

const LiteratureStudy = () => (
  <AfrikaansTopic
    title="Literatuurstudie & Respons"
    subtitle="Themes, characters, literary features, and textual evidence"
    learnSteps={learnSteps}
    task="gr9-literature-study-t3"
    bank={bank}
    speak="options"
  />
);

export default LiteratureStudy;
