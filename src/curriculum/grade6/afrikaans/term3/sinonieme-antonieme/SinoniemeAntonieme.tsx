import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Sinonieme: words with the same meaning',
    content: slide(
      <>
        <Rule><Af>Sinonieme</Af> are words that mean the same, or almost the same. A synonym can replace the other word in a sentence.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['bly', 'gelukkig'], ['vinnig', 'gou'], ['kwaad', 'boos']]}
          aria="Three pairs of Afrikaans synonyms joined by an equals sign: bly and gelukkig (happy), vinnig and gou (fast), kwaad and boos (angry)."
        />
        <Worked
          title={<>A synonym for <Af>praat</Af> <En>talk</En></>}
          steps={[
            <>Ask: which word means the same as <Af>praat</Af>?</>,
            <><Af>gesels</Af> <En>chat</En> also means to talk. <SpeakButton text="praat, gesels" /></>,
            <>So <Af>praat</Af> and <Af>gesels</Af> are synonyms. Also: <Af>mooi</Af> = <Af>pragtig</Af> <En>pretty, beautiful</En>.</>,
          ]}
        />
        <Mistake>Choosing the opposite. <Af>mooi</Af> and <Af>lelik</Af> <En>ugly</En> are not synonyms. <Af>pragtig</Af> is the synonym.</Mistake>
      </>,
    ),
  },
  {
    title: 'Antonieme: opposites',
    content: slide(
      <>
        <Rule><Af>Antonieme</Af> (also <Af>teenoorgesteldes</Af>) are words with opposite meanings.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['groot', 'klein'], ['warm', 'koud'], ['oop', 'toe']]}
          aria="Three pairs of Afrikaans antonyms joined by a double arrow: groot and klein (big and small), warm and koud (warm and cold), oop and toe (open and closed)."
        />
        <Worked
          title={<>An antonym for <Af>lank</Af> <En>long</En></>}
          steps={[
            <>Think of the opposite length.</>,
            <>The opposite of <Af>lank</Af> is <Af>kort</Af> <En>short</En>. <SpeakButton text="lank, kort" /></>,
            <>Also: <Af>stadig</Af> <En>slow</En> ↔ <Af>vinnig</Af> <En>fast</En>; <Af>bly</Af> <En>happy</En> ↔ <Af>hartseer</Af> <En>sad</En>.</>,
          ]}
        />
        <Mistake>Choosing a stronger word, not the opposite. <Af>heet</Af> <En>hot</En> is close to <Af>warm</Af>. The opposite of <Af>warm</Af> is <Af>koud</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Same or opposite? Read the question',
    content: slide(
      <>
        <Rule>First decide what the question asks: a word that means the same (<Af>sinoniem</Af>) or the opposite (<Af>antoniem</Af>).</Rule>
        <Worked
          title="Sort these pairs"
          steps={[
            <><Af>kwaad</Af> and <Af>boos</Af>: same meaning, so a <strong>synonym</strong> pair.</>,
            <><Af>oop</Af> and <Af>toe</Af>: opposite meaning, so an <strong>antonym</strong> pair.</>,
            <><Af>vinnig</Af> and <Af>gou</Af>: same meaning, so a <strong>synonym</strong> pair.</>,
            <><Af>stadig</Af> and <Af>vinnig</Af>: opposite meaning, so an <strong>antonym</strong> pair.</>,
          ]}
        />
        <Mistake>Answering with a word that only goes with the first word. <Af>warm</Af> goes with <Af>son</Af> <En>sun</En>, but that is not a synonym or an antonym.</Mistake>
      </>,
    ),
  },
  {
    title: 'Swap words in a sentence',
    content: slide(
      <>
        <Rule>A good synonym keeps the sentence meaning. A good antonym turns the meaning round.</Rule>
        <Worked
          title="Change one word"
          steps={[
            <><Af>Die kind is bly.</Af> <En>The child is happy.</En></>,
            <>Synonym: <Af>Die kind is gelukkig.</Af> The meaning stays the same.</>,
            <>Antonym: <Af>Die kind is hartseer.</Af> <En>The child is sad.</En> The meaning is the opposite. <SpeakButton text="Die kind is gelukkig. Die kind is hartseer." /></>,
          ]}
        />
        <Mistake>Changing the word and forgetting the rest of the sentence. Only the one word changes: <Af>Die hond is groot</Af> becomes <Af>Die hond is klein</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Give a synonym for <Af>kwaad</Af> <En>angry</En>.</>} answer={<><Af>boos</Af> <En>angry</En>.</>} />
        <Check question={<>Give the antonym of <Af>oop</Af> <En>open</En>.</>} answer={<><Af>toe</Af> <En>closed</En>.</>} />
        <Check question={<>Give a synonym for <Af>vinnig</Af> <En>fast</En>.</>} answer={<><Af>gou</Af> <En>quick</En>.</>} />
        <Check question={<>Give the antonym of <Af>lank</Af> <En>long</En>.</>} answer={<><Af>kort</Af> <En>short</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Choose a synonym for 'bly' (happy).",
    options: ['gelukkig', 'hartseer', 'kwaad', 'moeg'],
    answer: 'gelukkig',
    explanation: "'Bly' and 'gelukkig' both mean happy.",
  },
  {
    prompt: "Choose an antonym for 'groot' (big).",
    options: ['klein', 'lank', 'breed', 'sterk'],
    answer: 'klein',
    explanation: "The opposite of 'groot' is 'klein'.",
  },
  {
    prompt: "Choose an antonym for 'warm' (warm).",
    options: ['koud', 'heet', 'sag', 'droog'],
    answer: 'koud',
    explanation: "'Warm' and 'koud' are opposites.",
  },
  {
    prompt: "Choose a synonym for 'vinnig' (fast).",
    options: ['gou', 'stadig', 'laat', 'stil'],
    answer: 'gou',
    explanation: "'Gou' can mean quickly, so it is close in meaning to 'vinnig'.",
  },
  {
    prompt: "Choose a synonym for 'praat' (talk).",
    options: ['gesels', 'luister', 'skryf', 'lees'],
    answer: 'gesels',
    explanation: "'Praat' and 'gesels' both describe talking.",
  },
  {
    prompt: "Choose an antonym for 'stadig' (slow).",
    options: ['vinnig', 'sag', 'stil', 'mooi'],
    answer: 'vinnig',
    explanation: "The opposite of 'stadig' is 'vinnig'.",
  },
  {
    prompt: "Choose an antonym for 'lank' (long).",
    options: ['kort', 'hoog', 'breed', 'dun'],
    answer: 'kort',
    explanation: "'Lank' and 'kort' are opposites.",
  },
  {
    prompt: "Choose a synonym for 'mooi' (pretty).",
    options: ['pragtig', 'lelik', 'oud', 'koud'],
    answer: 'pragtig',
    explanation: "'Mooi' and 'pragtig' both describe something beautiful.",
  },
  {
    prompt: "Choose an antonym for 'oop' (open).",
    options: ['toe', 'wyd', 'naby', 'nuut'],
    answer: 'toe',
    explanation: "The opposite of 'oop' is 'toe'.",
  },
  {
    prompt: "Choose a synonym for 'kwaad' (angry).",
    options: ['boos', 'vriendelik', 'bly', 'rustig'],
    answer: 'boos',
    explanation: "'Kwaad' and 'boos' can both mean angry.",
  },
];

const SinoniemeAntonieme = () => (
  <AfrikaansTopic
    title="Sinonieme & Antonieme"
    subtitle="Synonyms and opposites"
    learnSteps={learnSteps}
    task="sinonieme-antonieme"
    bank={bank}
    speak="options"
  />
);

export default SinoniemeAntonieme;
