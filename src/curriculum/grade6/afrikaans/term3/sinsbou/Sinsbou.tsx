import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The verb comes second',
    content: slide(
      <>
        <Rule>In a normal Afrikaans statement the verb is in <strong>second place</strong>. The subject is first.</Rule>
        <WordBoxes
          words={['Ek', 'speel', 'buite']}
          hot={[1]}
          aria="The sentence Ek speel buite as three boxes. The verb speel is highlighted in second place."
        />
        <Worked
          title="Find the verb"
          steps={[
            <><Af>Die kinders sing hard in die klas.</Af> <En>The children sing loudly in class.</En> <SpeakButton text="Die kinders sing hard in die klas." /></>,
            <>First place: <Af>Die kinders</Af> <En>the subject</En>.</>,
            <>Second place: <Af>sing</Af> <En>the verb</En>. Then the rest.</>,
            <>Another: <Af>Die hond slaap op die mat.</Af> <En>The dog sleeps on the mat.</En> The verb <Af>slaap</Af> is second.</>,
          ]}
        />
        <Mistake>Putting the verb late. <Af>Ek vandag speel buite</Af> is wrong. Say <Af>Ek speel vandag buite</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'STOMPI: the order of the rest',
    content: slide(
      <>
        <Rule><strong>STOMPI</strong> gives the order: <strong>S</strong>ubject, <strong>T</strong>ime, <strong>O</strong>bject, <strong>M</strong>anner, <strong>P</strong>lace, <strong>I</strong>nfinitive. The verb sits right after the subject.</Rule>
        <OrderTiles
          tiles={['S', 'T', 'O', 'M', 'P', 'I']}
          aria="Six tiles in order: S for subject, T for time, O for object, M for manner, P for place, I for infinitive."
        />
        <Worked
          title="Sort the parts"
          steps={[
            <><Af>Ek lees vandag 'n boek.</Af> <En>I read a book today.</En> Subject <Af>Ek</Af>, verb <Af>lees</Af>, time <Af>vandag</Af>, object <Af>'n boek</Af>.</>,
            <><Af>Ons eet vanaand pizza.</Af> <En>We eat pizza tonight.</En> <SpeakButton text="Ons eet vanaand pizza." /></>,
            <><Af>My ma koop brood by die winkel.</Af> <En>My mom buys bread at the shop.</En> Object, then place.</>,
          ]}
        />
        <Mistake>Mixing the order, such as place before time. <Af>Ek speel buite vandag</Af> breaks STOMPI. Say <Af>Ek speel vandag buite</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Start with time: the verb stays second',
    content: slide(
      <>
        <Rule>When a time word or phrase starts the sentence, the verb still stays second. The subject comes <strong>after</strong> the verb.</Rule>
        <WordBoxes
          words={['Vandag', 'speel', 'ek', 'buite']}
          hot={[1]}
          bracket={[1, 2]}
          aria="The sentence Vandag speel ek buite as four boxes. The verb speel is highlighted and a bracket joins the verb and the subject ek, which come right after the time word."
        />
        <Worked
          title="Move the time to the front"
          steps={[
            <><Af>Ek speel buite.</Af> becomes <Af>Vandag speel ek buite.</Af> <En>Today I play outside.</En> <SpeakButton text="Vandag speel ek buite." /></>,
            <><Af>Na skool speel hulle sokker.</Af> <En>After school they play soccer.</En> The time phrase <Af>Na skool</Af> is first, then the verb.</>,
            <><Af>Gister het ek huiswerk gedoen.</Af> <En>Yesterday I did homework.</En> Here <Af>het</Af> is second.</>,
          ]}
        />
        <Mistake>Keeping the subject in front of the verb. <Af>Vandag ek speel buite</Af> is wrong. Say <Af>Vandag speel ek buite</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Test a sentence',
    content: slide(
      <>
        <Rule>Check in two steps. First, is the verb in second place? Second, does the rest follow STOMPI?</Rule>
        <WordBoxes
          words={['Sy', 'lees', 'saans', "'n boek"]}
          hot={[1]}
          aria="The sentence Sy lees saans 'n boek as four boxes, with the verb lees highlighted in second place."
        />
        <Worked
          title="Which one is correct?"
          steps={[
            <><Af>Sy saans lees 'n boek</Af>: the verb <Af>lees</Af> is third. Wrong.</>,
            <><Af>Lees sy saans 'n boek</Af>: the verb is first, like a question. Wrong.</>,
            <><Af>Sy lees saans 'n boek</Af> <En>She reads a book in the evening</En>: verb second, time before object. Correct. <SpeakButton text="Sy lees saans 'n boek." /></>,
          ]}
        />
        <Mistake>Moving words around until it sounds like English. Count the places: the verb must be second.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which is correct: <Af>Ek speel vandag buite</Af> or <Af>Ek vandag speel buite</Af>?</>} answer={<><Af>Ek speel vandag buite</Af>: the verb is second.</>} />
        <Check question={<>Start with <Af>Môre</Af>: <Af>Môre gaan ons skool toe</Af> or <Af>Môre ons gaan skool toe</Af>?</>} answer={<><Af>Môre gaan ons skool toe</Af>: the verb stays second.</>} />
        <Check question={<>What does the T in STOMPI stand for?</>} answer={<>Time.</>} />
        <Check question={<>Put in order: <Af>Gister</Af>, <Af>ek</Af>, <Af>het</Af>, <Af>huiswerk gedoen</Af>.</>} answer={<><Af>Gister het ek huiswerk gedoen</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['Ek speel vandag buite', 'Ek vandag speel buite', 'Speel ek vandag buite', 'Vandag ek speel buite'],
    answer: 'Ek speel vandag buite',
    explanation: "In a normal statement, the verb 'speel' is second.",
  },
  {
    prompt: 'Which sentence correctly starts with a time word?',
    options: ['Vandag speel ek buite', 'Vandag ek speel buite', 'Vandag buite speel ek', 'Speel vandag ek buite'],
    answer: 'Vandag speel ek buite',
    explanation: "After 'Vandag', the verb comes next, then the subject.",
  },
  {
    prompt: 'Which sentence has the correct word order?',
    options: ["Sy lees saans 'n boek", "Sy saans lees 'n boek", "Saans sy lees 'n boek", "Lees sy saans 'n boek"],
    answer: "Sy lees saans 'n boek",
    explanation: "The verb 'lees' is second in the statement.",
  },
  {
    prompt: 'Which sentence correctly uses inversion?',
    options: ["Môre gaan ons skool toe", "Môre ons gaan skool toe", "Môre skool toe gaan ons", "Gaan môre ons skool toe"],
    answer: "Môre gaan ons skool toe",
    explanation: "When 'Môre' starts the sentence, 'gaan' comes second.",
  },
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['Die hond slaap op die mat', 'Die hond op die mat slaap', 'Slaap die hond op die mat', 'Op die mat die hond slaap'],
    answer: 'Die hond slaap op die mat',
    explanation: "The verb 'slaap' is second in a normal statement.",
  },
  {
    prompt: 'Which sentence correctly starts with a time phrase?',
    options: ['Na skool speel hulle sokker', 'Na skool hulle speel sokker', 'Na skool sokker speel hulle', 'Speel na skool hulle sokker'],
    answer: 'Na skool speel hulle sokker',
    explanation: "After a fronted time phrase, the verb comes before the subject.",
  },
  {
    prompt: 'Which sentence has the correct word order?',
    options: ['Ons eet vanaand pizza', 'Ons vanaand eet pizza', 'Vanaand ons eet pizza', 'Eet ons vanaand pizza'],
    answer: 'Ons eet vanaand pizza',
    explanation: "The verb 'eet' is second in a normal statement.",
  },
  {
    prompt: 'Which sentence correctly uses verb second?',
    options: ['Die kinders sing hard in die klas', 'Die kinders hard sing in die klas', 'In die klas die kinders sing hard', 'Sing die kinders hard in die klas'],
    answer: 'Die kinders sing hard in die klas',
    explanation: "The verb 'sing' stands second after the subject.",
  },
  {
    prompt: 'Which sentence correctly starts with a time word?',
    options: ['Gister het ek huiswerk gedoen', 'Gister ek het huiswerk gedoen', 'Gister huiswerk het ek gedoen', 'Het gister ek huiswerk gedoen'],
    answer: 'Gister het ek huiswerk gedoen',
    explanation: "With 'Gister' first, 'het' is second and 'ek' follows.",
  },
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['My ma koop brood by die winkel', 'My ma brood koop by die winkel', 'By die winkel my ma koop brood', 'Koop my ma brood by die winkel'],
    answer: 'My ma koop brood by die winkel',
    explanation: "The verb 'koop' is second in the statement.",
  },
];

const Sinsbou = () => (
  <AfrikaansTopic
    title="Sinsbou (STOMPI)"
    subtitle="Afrikaans word order"
    learnSteps={learnSteps}
    task="sinsbou"
    bank={bank}
    speak="options"
  />
);

export default Sinsbou;
