import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Start with the date and greeting',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A friendly letter usually starts with the <strong>date</strong>, then a warm greeting like
          <strong> Liewe ...</strong>
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Liewe Sara <SpeakButton text="Liewe Sara" />
        </span>
      </div>
    ),
  },
  {
    title: 'Write the message in paragraphs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The body tells your friend your news, asks questions, or says thank you.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Hoe gaan dit met jou? <SpeakButton text="Hoe gaan dit met jou?" />
        </span>
      </div>
    ),
  },
  {
    title: 'End in a friendly way',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Close with a friendly ending, then write your name underneath.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Jou maatjie <SpeakButton text="Jou maatjie" />
        </span>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: 'Which greeting is best for a friendly letter to Sara?',
    options: ['Liewe Sara', 'Geagte Meneer', 'Aan wie dit mag aangaan', 'Beste hoof'],
    answer: 'Liewe Sara',
    explanation: 'Liewe is a warm greeting used in friendly letters.',
  },
  {
    prompt: 'Where do you usually write the date in a friendly letter?',
    options: ['bo-aan die brief', 'net na jou naam', 'in die middel van elke sin', 'op die koevert alleen'],
    answer: 'bo-aan die brief',
    explanation: 'The date is written at the top of the letter.',
  },
  {
    prompt: 'Choose a correct friendly closing.',
    options: ['Jou maatjie', 'Die uwe', 'Geagte', 'Onderwerp'],
    answer: 'Jou maatjie',
    explanation: 'Jou maatjie is suitable for a friendly letter.',
  },
  {
    prompt: 'Which line belongs in the body of a friendly letter?',
    options: ['Ek mis jou baie.', 'Liewe Ben', '12 Mei 2024', 'Jou vriendin'],
    answer: 'Ek mis jou baie.',
    explanation: 'The body contains the main message of the letter.',
  },
  {
    prompt: 'What should come after the closing in a friendly letter?',
    options: ['jou naam', 'nog ’n datum', '’n nuwe groet', 'die adres van die skool'],
    answer: 'jou naam',
    explanation: 'After the closing, the writer signs their name.',
  },
  {
    prompt: 'Which date format is suitable in Afrikaans?',
    options: ['12 Mei 2024', 'Mei 12, 2024', '2024/Mei/12', 'twaalf Mei twee nul'],
    answer: '12 Mei 2024',
    explanation: 'Day, month, year is a clear Afrikaans date format.',
  },
  {
    prompt: 'Which word means “dear” in the greeting “Dear friend”?',
    options: ['Liewe', 'Groete', 'Datum', 'Brief'],
    answer: 'Liewe',
    explanation: 'Liewe means dear in a friendly greeting.',
  },
  {
    prompt: 'Which sentence is a friendly question for the body?',
    options: ['Hoe gaan dit met jou?', 'Geagte voorsitter', 'Jou maatjie', '12 Junie 2024'],
    answer: 'Hoe gaan dit met jou?',
    explanation: 'This is a friendly question you can ask in the body.',
  },
  {
    prompt: 'Choose the best order for a friendly letter.',
    options: ['datum, groet, liggaam, afsluiting, naam', 'naam, afsluiting, datum, groet, liggaam', 'groet, naam, datum, afsluiting, liggaam', 'liggaam, datum, naam, groet, afsluiting'],
    answer: 'datum, groet, liggaam, afsluiting, naam',
    explanation: 'A friendly letter follows this simple structure.',
  },
];

const VriendskaplikeBrief = () => (
  <AfrikaansTopic
    title="Vriendskaplike Brief"
    subtitle="Writing a friendly letter"
    learnSteps={learnSteps}
    task="vriendskaplike-brief"
    bank={bank}
    speak="options"
  />
);

export default VriendskaplikeBrief;
