import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Read narrative and drama cues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Short stories and drama scenes use dialogue, stage cues and conflict to build meaning.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">dialoog <SpeakButton text="dialoog" /></span>
          <span className="inline-flex items-center">toneelaanwysing <SpeakButton text="toneelaanwysing" /></span>
          <span className="inline-flex items-center">tema <SpeakButton text="tema" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpret character choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ask what a character says, does and feels in each key moment.
        </p>
        <p className="text-xl text-slate-700">Use scene evidence to support your interpretation.</p>
      </div>
    ),
  },
  {
    title: 'Identify theme and message',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Themes often appear through repeated conflict and final resolution.
        </p>
        <p className="text-slate-500">Contextual questions usually test this link.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat wys dialoog die beste in 'n drama?",
    options: ['Karakter se stem en verhouding', 'Boekprys', 'Bladsyuitleg', 'Papiersoort'],
    answer: 'Karakter se stem en verhouding',
    explanation: 'Dialogue reveals character and relationships.',
  },
  {
    prompt: "Watter element maak 'n toneel dramaties?",
    options: ['Duidelike konflik tussen karakters', 'Slegs lang beskrywings', 'Geen handeling nie', 'Geen sprekers nie'],
    answer: 'Duidelike konflik tussen karakters',
    explanation: 'Drama depends on tension and conflict.',
  },
  {
    prompt: "Wat beteken 'toneelaanwysing'?",
    options: ['Instruksies oor beweging en aksie', 'Die titel van die boek', 'Die skrywer se CV', 'Die lys vrae'],
    answer: 'Instruksies oor beweging en aksie',
    explanation: 'Stage directions tell performers what to do.',
  },
  {
    prompt: "Kies die beste vraag vir karakterontleding.",
    options: ['Hoe reageer die karakter onder druk?', 'Watter kleur is die omslag?', 'Hoeveel letters is in die naam?', 'Wie verkoop die boek?'],
    answer: 'Hoe reageer die karakter onder druk?',
    explanation: 'Character analysis looks at decisions and reactions.',
  },
  {
    prompt: "In 'n kortverhaal verwys 'ruimte' na ___.",
    options: ['waar en wanneer die storie afspeel', 'die hoofkarakter se ouderdom', 'die skrywer se nasionaliteit', 'die boek se formaat'],
    answer: 'waar en wanneer die storie afspeel',
    explanation: 'Setting covers place and time.',
  },
  {
    prompt: "Watter antwoord toon sterk teksverwysing?",
    options: ['In toneel 2 weier hy om te lieg, dus is hy eerlik.', 'Hy lyk interessant.', 'Ek hou net van hom.', 'Die verhaal is lank.'],
    answer: 'In toneel 2 weier hy om te lieg, dus is hy eerlik.',
    explanation: 'It links evidence to interpretation.',
  },
  {
    prompt: "Wat is 'n tema?",
    options: ['Die groot boodskap van die teks', 'Die eerste woord van die teks', 'Die naam van die uitgewer', 'Die aantal sinne'],
    answer: 'Die groot boodskap van die teks',
    explanation: 'Theme is the central idea.',
  },
  {
    prompt: "Kies die beste beskrywing van resolusie in 'n verhaal.",
    options: ['Die deel waar die probleem opgelos word', 'Die eerste sin van die inleiding', 'Die voorbladbeeld', 'Die bibliografie'],
    answer: 'Die deel waar die probleem opgelos word',
    explanation: 'Resolution closes the conflict.',
  },
];

const ShortStoriesDrama = () => (
  <AfrikaansTopic
    title="Kortverhale & Drama"
    subtitle="Dialogue, conflict, character and theme interpretation"
    learnSteps={learnSteps}
    task="gr8-short-stories-drama-t3"
    bank={bank}
    speak="options"
  />
);

export default ShortStoriesDrama;
