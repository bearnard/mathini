import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Three steps: read, ask, find',
    content: slide(
      <>
        <Rule>Read the short text first. Ask what the question wants. Then find the answer in the text. The <Af>hoofgedagte</Af> <En>main idea</En> tells you what the text is about.</Rule>
        <OrderTiles
          tiles={['Lees', 'Vraag', 'Soek']}
          aria="Three steps in order: Lees (read), Vraag (the question), Soek (find the answer in the text)."
        />
        <Worked
          title="Read, then ask"
          steps={[
            <><Af>Pieter stap elke dag skool toe.</Af> <En>Pieter walks to school every day.</En></>,
            <>Main idea: Pieter walks to school.</>,
            <>Question: <Af>Waarheen stap Pieter?</Af> <En>Where does Pieter walk to?</En> Answer: <Af>skool toe</Af>.</>,
          ]}
        />
        <Mistake>Reading only the question and guessing. Always read the text first, then look back at it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Question words: wie, wat, waar',
    content: slide(
      <>
        <Rule>The first word of the question shows what kind of answer to look for: a person, a thing or a place.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Wie?', 'Who?'], ['Wat?', 'What?'], ['Waar?', 'Where?']]}
          aria="Three Afrikaans question words with their English meaning: Wie is who, Wat is what, Waar is where."
        />
        <Worked
          title="Match the question to the text"
          steps={[
            <><Af>Ouma bak brood in die kombuis.</Af> <En>Granny bakes bread in the kitchen.</En> <SpeakButton text="Ouma bak brood in die kombuis." /></>,
            <><Af>Wie</Af> bak brood? Look for a person: <Af>Ouma</Af>.</>,
            <><Af>Wat</Af> bak sy? A thing: <Af>brood</Af>. <Af>Waar</Af> bak sy? A place: <Af>in die kombuis</Af>.</>,
          ]}
        />
        <Mistake>Giving a place when the question asks <Af>Wie?</Af> Check that your answer is a person, a thing or a place, as the question word says.</Mistake>
      </>,
    ),
  },
  {
    title: 'More question words: hoe laat, hoekom, watter',
    content: slide(
      <>
        <Rule><Af>Hoe laat?</Af> asks for a time. <Af>Hoekom?</Af> asks for a reason, often after <Af>omdat</Af> <En>because</En>. <Af>Watter?</Af> asks which one, such as a colour.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Hoe laat?', 'What time?'], ['Hoekom?', 'Why?'], ['Watter?', 'Which?']]}
          aria="Three Afrikaans question words with their English meaning: Hoe laat is what time, Hoekom is why, Watter is which."
        />
        <Worked
          title="Find the time and the reason"
          steps={[
            <><Af>Die bus kom om agt-uur.</Af> <Af>Hoe laat</Af> kom die bus? <Af>Om agt-uur.</Af></>,
            <><Af>Hulle bly binne omdat dit reën.</Af> <En>They stay inside because it rains.</En></>,
            <><Af>Hoekom</Af> bly hulle binne? <Af>Omdat dit reën.</Af></>,
          ]}
        />
        <Mistake>Giving the time when the question asks <Af>Hoekom?</Af> A reason answers why. Look for <Af>omdat</Af> or <Af>want</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Find the answer in the text',
    content: slide(
      <>
        <Rule>The answer is in the text. Find the words from the question, then read the words next to them. Choose the option that matches the text, not one that only sounds familiar.</Rule>
        <WordBoxes
          words={['Piet', 'plant', 'mielies']}
          hot={[2]}
          aria="The sentence Piet plant mielies as three boxes, with the word mielies highlighted as the answer to the question Wat plant Piet?"
        />
        <Worked
          title="Check each option"
          steps={[
            <><Af>Sara se kat slaap op die bank.</Af> <En>Sara&apos;s cat sleeps on the couch.</En></>,
            <>Question: <Af>Waar slaap die kat?</Af> Find <Af>slaap</Af> in the text: <Af>op die bank</Af>.</>,
            <>An option like <Af>onder die bed</Af> is not in the text, so it is wrong.</>,
          ]}
        />
        <Mistake>Choosing a word because you know it. <Af>bome</Af> is a fine word, but if the text says <Af>mielies</Af>, then <Af>mielies</Af> is the answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<><Af>Ben dra 'n rooi pet.</Af> <Af>Watter kleur is sy pet?</Af></>} answer={<><Af>rooi</Af> <En>red</En>.</>} />
        <Check question={<><Af>Die reën val hard.</Af> <Af>Hoekom speel die kinders binne?</Af></>} answer={<>Because it is raining hard: <Af>omdat dit hard reën</Af>.</>} />
        <Check question={<>What does <Af>Hoe laat?</Af> ask for?</>} answer={<>A time.</>} />
        <Check question={<><Af>Wie</Af> asks for a person. What does <Af>Waar</Af> ask for?</>} answer={<>A place.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Lena het Saterdag biblioteek toe gegaan. Sy het ’n boek oor diere geleen. Watter boek het Lena geleen?',
    options: ['’n Diereboek', '’n Motorboek', '’n Sportboek', '’n Kosboek'],
    answer: '’n Diereboek',
    explanation: 'The passage says she borrowed a book about animals.',
  },
  {
    prompt: 'Thabo speel sokker na skool. Sy span oefen op die groot veld. Waar oefen die span?',
    options: ['Op die veld', 'In die klaskamer', 'By die winkel', 'In die kombuis'],
    answer: 'Op die veld',
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
    options: ['Teen sewe-uur', 'Teen agt-uur', 'Teen ses-uur', 'Teen tien-uur'],
    answer: 'Teen sewe-uur',
    explanation: 'The time given in the passage is seven o’clock.',
  },
  {
    prompt: 'Sara se kat slaap op die bank. Die kat is grys en baie rustig. Waar slaap die kat?',
    options: ['Op die rusbank', 'Onder die bed', 'Buite die huis', 'Op die tafel'],
    answer: 'Op die rusbank',
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
    options: ['Na ’n museum', 'Na die strand', 'Na die park', 'Na die mark'],
    answer: 'Na ’n museum',
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
