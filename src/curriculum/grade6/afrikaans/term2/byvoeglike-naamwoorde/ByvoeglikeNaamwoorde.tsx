import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Adjectives describe nouns',
    content: slide(
      <>
        <Rule>A <Af>byvoeglike naamwoord</Af> <En>adjective</En> tells us more about a noun: its colour, size or quality. It answers the question: what kind?</Rule>
        <WordBoxes
          words={["'n", 'mooi', 'blom']}
          hot={[1]}
          aria="The phrase 'n mooi blom as three boxes. The adjective mooi is highlighted and describes the noun blom."
        />
        <Worked
          title="Find the adjective"
          steps={[
            <><Af>Die klein hond blaf.</Af> <En>The small dog barks.</En> <SpeakButton text="Die klein hond blaf." /></>,
            <>Which word tells us more about the <Af>hond</Af> <En>dog</En>? <Af>klein</Af>.</>,
            <><Af>blaf</Af> shows an action, so it is a verb. <Af>klein</Af> is the adjective.</>,
          ]}
        />
        <Mistake>Choosing the noun. In <Af>'n groot huis</Af> <En>a big house</En>, <Af>huis</Af> is the noun and <Af>groot</Af> is the adjective.</Mistake>
      </>,
    ),
  },
  {
    title: 'Put it before the noun',
    content: slide(
      <>
        <Rule>The adjective stands <strong>before</strong> the noun it describes: article, adjective, noun.</Rule>
        <WordBoxes
          words={["'n", 'rooi', 'appel']}
          hot={[1]}
          arrow={[1, 2]}
          aria="The phrase 'n rooi appel as three boxes. An arrow goes from the adjective rooi to the noun appel."
        />
        <Worked
          title="Build the phrase"
          steps={[
            <>A red apple: <Af>'n</Af> + <Af>rooi</Af> + <Af>appel</Af> = <Af>'n rooi appel</Af>.</>,
            <>A new pencil: <Af>'n nuwe potlood</Af>. <SpeakButton text="'n nuwe potlood" /></>,
          ]}
        />
        <Mistake>Putting the adjective after the noun. <Af>'n blom mooi</Af> and <Af>'n appel rooi</Af> are wrong. Write <Af>'n mooi blom</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Some adjectives add -e',
    content: slide(
      <>
        <Rule>Many adjectives take an <strong>-e</strong> before a noun: <Af>goed</Af> becomes <Af>goeie</Af>, <Af>koud</Af> becomes <Af>koue</Af>. Learn each one as you meet it.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['goed', 'goeie'], ['koud', 'koue'], ['vinnig', 'vinnige']]}
          aria="Three adjectives and the form used before a noun: goed becomes goeie, koud becomes koue, vinnig becomes vinnige."
        />
        <Worked
          title="Use the -e form"
          steps={[
            <><Af>'n goeie boek</Af> <En>a good book</En> <SpeakButton text="'n goeie boek" /></>,
            <><Af>'n koue dag</Af> <En>a cold day</En>, <Af>'n vinnige kat</Af> <En>a fast cat</En>, <Af>'n vriendelike meisie</Af> <En>a friendly girl</En>.</>,
            <>Some stay the same: <Af>'n groot huis</Af>, <Af>'n mooi blom</Af>, <Af>'n rooi appel</Af>.</>,
          ]}
        />
        <Mistake>Writing <Af>'n goed boek</Af> or <Af>'n koud dag</Af>. Use <Af>goeie</Af> and <Af>koue</Af> before the noun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Is it an adjective?',
    content: slide(
      <>
        <Rule>Ask: does the word describe a noun? Then it is an adjective. Nouns name things, verbs show actions, and words like <Af>onder</Af> <En>under</En> show position.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['vinnig', 'adjective'], ['kat', 'noun'], ['spring', 'verb']]}
          aria="Three Afrikaans words and their word type: vinnig is an adjective, kat is a noun, spring is a verb."
        />
        <Worked
          title="Test the word"
          steps={[
            <><Af>'n vinnige kat</Af> <En>a fast cat</En>: <Af>vinnig</Af> describes the cat, so it is an adjective.</>,
            <><Af>kat</Af> names an animal: noun. <Af>spring</Af> <En>jump</En> shows an action: verb.</>,
          ]}
        />
        <Mistake>Picking the word that is nearest to the noun. <Af>'n nuwe potlood</Af>: the adjective is <Af>nuwe</Af>, not <Af>'n</Af> and not <Af>potlood</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word is the adjective in <Af>'n groot huis</Af>?</>} answer={<><Af>groot</Af>.</>} />
        <Check question={<>Choose the phrase for <em>a pretty flower</em>: <Af>'n mooi blom</Af> or <Af>'n blom mooi</Af>?</>} answer={<><Af>'n mooi blom</Af>.</>} />
        <Check question={<>Fill in: <Af>'n ___ boek</Af> (a good book): <Af>goed</Af> or <Af>goeie</Af>?</>} answer={<><Af>goeie</Af>.</>} />
        <Check question={<>Which word is an adjective: <Af>vinnig</Af>, <Af>kat</Af> or <Af>spring</Af>?</>} answer={<><Af>vinnig</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Choose the adjective in: ''n groot huis'.",
    options: ['groot', 'huis', "'n", 'bou'],
    answer: 'groot',
    explanation: 'Groot describes the noun huis.',
  },
  {
    prompt: "Which phrase means 'a pretty flower'?",
    options: ["'n mooi blom", "'n blom mooi", "'n groot blom", "'n goeie blom"],
    answer: "'n mooi blom",
    explanation: 'Mooi means pretty and stands before blom.',
  },
  {
    prompt: "Choose the best adjective: ''n ___ boek' (a good book).",
    options: ['goeie', 'goed', 'groot', 'rooi'],
    answer: 'goeie',
    explanation: 'Goed changes to goeie before a noun.',
  },
  {
    prompt: "Which word describes the noun in: 'Die klein hond blaf'?",
    options: ['klein', 'hond', 'blaf', 'Die'],
    answer: 'klein',
    explanation: 'Klein tells us more about the hond.',
  },
  {
    prompt: "Choose the correct phrase for 'a red apple'.",
    options: ["'n rooi appel", "'n appel rooi", "'n rooi eet", "'n mooi rooi"],
    answer: "'n rooi appel",
    explanation: 'Rooi describes appel and comes before it.',
  },
  {
    prompt: "Which adjective fits: ''n ___ meisie' (a friendly girl)?",
    options: ['vriendelike', 'meisie', 'hardloop', 'blou'],
    answer: 'vriendelike',
    explanation: 'Vriendelike means friendly and describes meisie.',
  },
  {
    prompt: "Choose the adjective in: ''n nuwe potlood'.",
    options: ['nuwe', 'potlood', "'n", 'skryf'],
    answer: 'nuwe',
    explanation: 'Nuwe describes the noun potlood.',
  },
  {
    prompt: "Which phrase is correct for 'a cold day'?",
    options: ["'n koue dag", "'n koud dag", "'n dag koud", "'n goed dag"],
    answer: "'n koue dag",
    explanation: 'Koud often becomes koue before a noun.',
  },
  {
    prompt: "Which word is a byvoeglike naamwoord?",
    options: ['vinnig', 'kat', 'spring', 'onder'],
    answer: 'vinnig',
    explanation: 'Vinnig can describe a noun, for example: ’n vinnige kat.',
  },
];

const ByvoeglikeNaamwoorde = () => (
  <AfrikaansTopic
    title="Byvoeglike Naamwoorde"
    subtitle="Describing words (adjectives)"
    learnSteps={learnSteps}
    task="byvoeglike-naamwoorde"
    bank={bank}
    speak="options"
  />
);

export default ByvoeglikeNaamwoorde;
