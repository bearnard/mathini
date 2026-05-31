import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Elements of a short story',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A kortverhaal usually has a <strong>karakter</strong>, <strong>ruimte</strong>, and a clear{' '}
          <strong>plot</strong>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">karakter <SpeakButton text="karakter" /></span>
          <span className="inline-flex items-center">ruimte <SpeakButton text="ruimte" /></span>
          <span className="inline-flex items-center">plot <SpeakButton text="plot" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Theme and message',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>tema</strong> is the big idea, like friendship or honesty.
        </p>
        <p className="text-xl text-slate-700">
          Ask: “What lesson does the story teach?”
        </p>
      </div>
    ),
  },
  {
    title: 'Writing a simple review',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>resensie</strong> gives a short opinion with one reason from the story.
        </p>
        <p className="text-xl font-semibold text-slate-700">
          “Ek hou van die storie omdat die hoofkarakter dapper is.”
        </p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "In die sin 'Amina red haar vriend in die park', wie is die hoofkarakter?",
    options: ['Amina', 'vriend', 'park', 'red'],
    answer: 'Amina',
    explanation: 'The main character is the person the story follows most closely.',
  },
  {
    prompt: 'Watter woord wys die plek (setting) van die storie?',
    options: ['park', 'Amina', 'red', 'vriend'],
    answer: 'park',
    explanation: 'Setting tells us where the story happens.',
  },
  {
    prompt: "Wat is die beste voorbeeld van 'n tema?",
    options: ['Vriendskap is belangrik', 'Die storie het drie paragrawe', 'Die hoofkarakter is 12', 'Die hond se naam is Max'],
    answer: 'Vriendskap is belangrik',
    explanation: 'A theme is a broad message, not a small detail.',
  },
  {
    prompt: 'Watter vraag help jou om die plot te verstaan?',
    options: ['Wat gebeur eerste, daarna en laaste?', 'Hoe lank is elke woord?', 'Watter kleur is die boek se omslag?', 'Wie het die boek gedruk?'],
    answer: 'Wat gebeur eerste, daarna en laaste?',
    explanation: 'Plot is the sequence of events.',
  },
  {
    prompt: "Kies die beste openingsin vir 'n kort resensie.",
    options: ['Ek het die storie geniet omdat dit spannend was.', "Die storie is in 'n boek.", 'Daar is letters op die bladsy.', 'Die skrywer gebruik ink.'],
    answer: 'Ek het die storie geniet omdat dit spannend was.',
    explanation: 'A review starts with a clear opinion.',
  },
  {
    prompt: "Watter opsie beskryf die konflik in 'n storie?",
    options: ['Die probleem wat opgelos moet word', 'Die naam van die skrywer', 'Die lys van hoofstukke', 'Die datum van publikasie'],
    answer: 'Die probleem wat opgelos moet word',
    explanation: 'Conflict is the problem or challenge in the story.',
  },
  {
    prompt: "In 'n resensie, wat moet ná jou mening kom?",
    options: ['Een rede of voorbeeld uit die storie', 'Nog tien vrae', 'Die hele storie woord vir woord', 'Net emojis'],
    answer: 'Een rede of voorbeeld uit die storie',
    explanation: 'A reason supports your opinion.',
  },
  {
    prompt: "Watter sin is 'n gepaste afsluiting vir 'n resensie?",
    options: ['Ek beveel hierdie storie vir Graad 7-leerders aan.', 'Daar is 43 bladsye.', 'My pen is blou.', "Ek sit by 'n tafel."],
    answer: 'Ek beveel hierdie storie vir Graad 7-leerders aan.',
    explanation: 'A good closing sentence gives a final recommendation.',
  },
];

const ShortStoriesReviews = () => (
  <AfrikaansTopic
    title="Kortverhale & Resensies"
    subtitle="Short stories, themes and simple reviews"
    learnSteps={learnSteps}
    task="gr7-short-stories-reviews-t1"
    bank={bank}
    speak="options"
  />
);

export default ShortStoriesReviews;
