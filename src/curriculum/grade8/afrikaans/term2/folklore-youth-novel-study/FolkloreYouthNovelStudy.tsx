import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Track plot and conflict',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In folklore and youth novels, events build toward a central conflict.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">intrige <SpeakButton text="intrige" /></span>
          <span className="inline-flex items-center">karakter <SpeakButton text="karakter" /></span>
          <span className="inline-flex items-center">konflik <SpeakButton text="konflik" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Use textual evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Support claims about characters with actions, dialogue and key moments.
        </p>
        <p className="text-xl text-slate-700">Avoid vague answers by quoting short details.</p>
      </div>
    ),
  },
  {
    title: 'Respond to social themes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stories often explore identity, friendship, pressure and responsibility.
        </p>
        <p className="text-slate-500">Theme answers should connect event and message.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat bedoel ons met 'konflik' in 'n verhaal?",
    options: ['Die hoofprobleem wat spanning skep', 'Die naam van die hoofstuk', 'Die lys karakters', 'Die tyd van publikasie'],
    answer: 'Die hoofprobleem wat spanning skep',
    explanation: 'Conflict drives the story forward.',
  },
  {
    prompt: "Watter vraag help om karakterontwikkeling te ontleed?",
    options: ['Hoe verander die karakter van begin tot einde?', 'Hoeveel bladsye het die boek?', 'Watter pen is gebruik?', 'Wat kos die boek?'],
    answer: 'Hoe verander die karakter van begin tot einde?',
    explanation: 'Development focuses on change over time.',
  },
  {
    prompt: "Kies die beste voorbeeld van teksbewys.",
    options: ['Die hoofkarakter erken sy fout in hoofstuk 5.', 'Ek dink die boek is cool.', 'My vriend hou daarvan.', 'Die omslag is groen.'],
    answer: 'Die hoofkarakter erken sy fout in hoofstuk 5.',
    explanation: 'Specific reference is stronger than opinion only.',
  },
  {
    prompt: "In 'n volksverhaal wys 'n moraal gewoonlik ___.",
    options: ["'n les vir die leser", 'die aantal karakters', 'die boek se formaat', 'die taalvlak van die drukker'],
    answer: "'n les vir die leser",
    explanation: 'Folktales often end with a lesson.',
  },
  {
    prompt: "Wat is die beste definisie van intrige?",
    options: ['Die volgorde van gebeure in die storie', 'Die kleur van die omslag', 'Die skrywer se adres', 'Die lengte van woorde'],
    answer: 'Die volgorde van gebeure in die storie',
    explanation: 'Plot is the sequence of events.',
  },
  {
    prompt: "Waarom is dialoog belangrik in jeugromans?",
    options: ['Dit wys karakterstemme en verhoudings', 'Dit vervang alle beskrywing', 'Dit maak leestekens onnodig', 'Dit stop die plot'],
    answer: 'Dit wys karakterstemme en verhoudings',
    explanation: 'Dialogue reveals personality and conflict.',
  },
  {
    prompt: "Watter opsie beskryf die tema die beste?",
    options: ['Die groot idee agter die verhaal', 'Die eerste sin van die boek', 'Die titel alleen', 'Die aantal hoofstukke'],
    answer: 'Die groot idee agter die verhaal',
    explanation: 'Theme is the main message or insight.',
  },
  {
    prompt: "Kies die sterkste antwoord op 'Hoekom is die karakter dapper?'",
    options: ['Hy help sy broer al is hy bang.', 'Hy dra blou skoene.', 'Hy woon in Pretoria.', 'Hy eet vroeg aandete.'],
    answer: 'Hy help sy broer al is hy bang.',
    explanation: 'It provides action-based evidence of courage.',
  },
];

const FolkloreYouthNovelStudy = () => (
  <AfrikaansTopic
    title="Volksverhale & Jeugromanstudie"
    subtitle="Plot, character, conflict and theme in prose texts"
    learnSteps={learnSteps}
    task="gr8-folklore-youth-novel-study-t2"
    bank={bank}
    speak="options"
  />
);

export default FolkloreYouthNovelStudy;
