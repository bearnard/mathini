import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The five parts of a friendly letter',
    content: slide(
      <>
        <Rule>A friendly letter has five parts, always in this order: <Af>datum, groet, liggaam, afsluiting, naam</Af> <En>date, greeting, body, closing, name</En>. If you write your address, it goes at the very top, above the date.</Rule>
        <LetterLayout
          parts={['datum', 'groet', 'liggaam', 'afsluiting', 'naam']}
          aria="A letter drawn as five strips from top to bottom: datum (date), groet (greeting), liggaam (body, the biggest strip), afsluiting (closing), naam (name)."
        />
        <Worked
          title="Put the parts in order"
          steps={[
            <>The date goes <Af>bo-aan die brief</Af> <En>at the top of the letter</En>.</>,
            <>Then the greeting, then the body with your message.</>,
            <>Last come the closing and, underneath, your name.</>,
          ]}
        />
        <Mistake>Putting your name before the closing. The closing comes first, then <Af>jou naam</Af> <En>your name</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'The date and the greeting',
    content: slide(
      <>
        <Rule>Write the date as day, month, year. Start a friendly letter with <Af>Liewe</Af> <En>dear</En> and the name of your friend.</Rule>
        <TaggedBoxes
          items={[{ word: '12', tag: 'day' }, { word: 'Mei', tag: 'month' }, { word: '2024', tag: 'year' }]}
          aria="The date 12 Mei 2024 as three boxes: 12 is the day, Mei is the month, 2024 is the year."
        />
        <Worked
          title="Date and greeting"
          steps={[
            <><Af>12 Mei 2024</Af> <En>12 May 2024</En></>,
            <><Af>Liewe Sara</Af>, <En>Dear Sara</En> <SpeakButton text="Liewe Sara" /></>,
          ]}
        />
        <Mistake>Using a formal greeting. <Af>Geagte Meneer</Af> is for a formal letter. Do not write the date as <Af>Mei 12, 2024</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'The body: your news',
    content: slide(
      <>
        <Rule>The <Af>liggaam</Af> is your message. Ask a question, tell your news or say thank you. Use short, friendly sentences.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Hoe gaan dit?', 'ask'], ['Ek mis jou.', 'feelings'], ['Dankie!', 'thank']]}
          aria="Three kinds of sentence for the body of a letter: Hoe gaan dit asks a question, Ek mis jou shares feelings, Dankie says thank you."
        />
        <Worked
          title="Write the body"
          steps={[
            <><Af>Hoe gaan dit met jou?</Af> <En>How are you?</En> <SpeakButton text="Hoe gaan dit met jou?" /></>,
            <><Af>Ek mis jou baie.</Af> <En>I miss you a lot.</En></>,
            <><Af>Dankie vir jou brief.</Af> <En>Thank you for your letter.</En></>,
          ]}
        />
        <Mistake>Putting greeting or closing words in the body. <Af>Liewe Ben</Af> and <Af>Jou vriendin</Af> do not belong in the middle of the message.</Mistake>
      </>,
    ),
  },
  {
    title: 'The closing and your name',
    content: slide(
      <>
        <Rule>End with a friendly closing such as <Af>Jou maatjie</Af> <En>your pal</En> or <Af>Groete</Af> <En>regards</En>. Then write <strong>your name</strong> underneath.</Rule>
        <TaggedBoxes
          items={[{ word: 'Jou maatjie', tag: 'afsluiting' }, { word: 'Sipho', tag: 'naam' }]}
          aria="A closing and a name as two boxes: Jou maatjie is the closing (afsluiting), Sipho is the name (naam)."
        />
        <Worked
          title="Finish the letter"
          steps={[
            <><Af>Jou maatjie,</Af> <SpeakButton text="Jou maatjie" /></>,
            <>Sipho. The name goes on the line below the closing.</>,
          ]}
        />
        <Mistake>Using a formal closing. <Af>Die uwe</Af> belongs to a formal letter. A friendly letter is warm and has no <Af>Onderwerp</Af> <En>subject line</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Does the date go at the top or at the bottom of a friendly letter?</>} answer={<><Af>bo-aan die brief</Af> <En>at the top</En>.</>} />
        <Check question={<>Which greeting suits a letter to Sara: <Af>Liewe Sara</Af> or <Af>Geagte Meneer</Af>?</>} answer={<><Af>Liewe Sara</Af>.</>} />
        <Check question={<>What comes after the closing?</>} answer={<><Af>jou naam</Af> <En>your name</En>.</>} />
        <Check question={<>Put the five parts in order.</>} answer={<><Af>datum, groet, liggaam, afsluiting, naam</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
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
