import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, PlaceScene } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'On, in, under: op, in, onder',
    content: slide(
      <>
        <Rule>A <Af>voorsetsel</Af> <En>preposition</En> shows where something is. <Af>op</Af> is on, <Af>in</Af> is in and <Af>onder</Af> is under.</Rule>
        <PlaceScene
          scenes={['op', 'in', 'onder']}
          aria="Three small pictures of a ball and a box: the ball is on the box (op), in the box (in) and under the box (onder)."
        />
        <Worked
          title="Say where it is"
          steps={[
            <><Af>Die boek lê op die tafel.</Af> <En>The book lies on the table.</En> <SpeakButton text="Die boek lê op die tafel." /></>,
            <><Af>Die leerders sit in die klas.</Af> <En>The learners sit in the class.</En></>,
            <><Af>Die hond slaap onder die bed.</Af> <En>The dog sleeps under the bed.</En></>,
          ]}
        />
        <Mistake>Swapping <Af>op</Af> and <Af>onder</Af>. Picture the ball: on top is <Af>op</Af>, below is <Af>onder</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'In front, behind, next to: voor, agter, langs',
    content: slide(
      <>
        <Rule><Af>voor</Af> is in front of, <Af>agter</Af> is behind and <Af>langs</Af> is next to or beside.</Rule>
        <PlaceScene
          scenes={['voor', 'agter', 'langs']}
          aria="Three small pictures of a ball and a box: the ball is in front of the box (voor), behind the box (agter) and next to the box (langs)."
        />
        <Worked
          title="Say where it is"
          steps={[
            <><Af>Die motor staan voor die huis.</Af> <En>The car stands in front of the house.</En> <SpeakButton text="Die motor staan voor die huis." /></>,
            <><Af>Die tuin is agter die skool.</Af> <En>The garden is behind the school.</En></>,
            <><Af>My maat sit langs my.</Af> <En>My friend sits next to me.</En></>,
          ]}
        />
        <Mistake><Af>voor</Af> looks like the English word <em>for</em>, but it means <em>in front of</em>. Do not mix it up with <Af>agter</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Between and at: tussen, by',
    content: slide(
      <>
        <Rule><Af>tussen</Af> means between two things. <Af>by</Af> means at or by a place or a person.</Rule>
        <PlaceScene
          scenes={['tussen']}
          aria="A small picture of a ball and two boxes: the ball is between the two boxes (tussen)."
        />
        <Worked
          title="Say where it is"
          steps={[
            <><Af>Die bal is tussen die twee stoele.</Af> <En>The ball is between the two chairs.</En> <SpeakButton text="Die bal is tussen die twee stoele." /></>,
            <><Af>Ons wag by die hek.</Af> <En>We wait at the gate.</En></>,
          ]}
        />
        <Mistake>Using <Af>tussen</Af> with one thing. <Af>tussen</Af> needs two things, such as <Af>die twee stoele</Af>. For one place use <Af>by</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fill the blank: read the hint',
    content: slide(
      <>
        <Rule>Read the English hint, find the matching Afrikaans word, then read the whole sentence to check it makes sense.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['by', 'at / by'], ['tussen', 'between'], ['langs', 'next to']]}
          aria="Three Afrikaans prepositions with their English meaning: by is at or by, tussen is between, langs is next to."
        />
        <Worked
          title="Use the hint"
          steps={[
            <><Af>Die tuin is ___ die skool.</Af> (behind)</>,
            <>Hint: behind. The word is <Af>agter</Af>.</>,
            <><Af>Die tuin is agter die skool.</Af> <En>The garden is behind the school.</En> <SpeakButton text="Die tuin is agter die skool." /></>,
          ]}
        />
        <Mistake>Choosing a word that fits the sentence in English but not the hint. If the hint says <em>under</em>, the answer is <Af>onder</Af>, not <Af>op</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Fill in: <Af>Die boek lê ___ die tafel.</Af> (on)</>} answer={<><Af>op</Af>.</>} />
        <Check question={<>Fill in: <Af>Die motor staan ___ die huis.</Af> (in front of)</>} answer={<><Af>voor</Af>.</>} />
        <Check question={<>Fill in: <Af>Die bal is ___ die twee stoele.</Af> (between)</>} answer={<><Af>tussen</Af>.</>} />
        <Check question={<>Fill in: <Af>My maat sit ___ my.</Af> (next to)</>} answer={<><Af>langs</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Die boek lê ___ die tafel. (on)',
    options: ['op', 'onder', 'in', 'agter'],
    answer: 'op',
    explanation: "'op' means 'on'.",
  },
  {
    prompt: 'Die hond slaap ___ die bed. (under)',
    options: ['langs', 'onder', 'voor', 'by'],
    answer: 'onder',
    explanation: "'onder' means 'under'.",
  },
  {
    prompt: 'Die leerders sit ___ die klas. (in)',
    options: ['tussen', 'agter', 'in', 'op'],
    answer: 'in',
    explanation: "'in' means 'in'.",
  },
  {
    prompt: 'Die motor staan ___ die huis. (in front of)',
    options: ['agter', 'voor', 'onder', 'langs'],
    answer: 'voor',
    explanation: "'voor' means 'in front of'.",
  },
  {
    prompt: 'Die tuin is ___ die skool. (behind)',
    options: ['by', 'op', 'agter', 'tussen'],
    answer: 'agter',
    explanation: "'agter' means 'behind'.",
  },
  {
    prompt: 'My maat sit ___ my. (next to)',
    options: ['langs', 'in', 'voor', 'onder'],
    answer: 'langs',
    explanation: "'langs' means 'next to' or 'beside'.",
  },
  {
    prompt: 'Die bal is ___ die twee stoele. (between)',
    options: ['agter', 'tussen', 'by', 'op'],
    answer: 'tussen',
    explanation: "'tussen' means 'between'.",
  },
  {
    prompt: 'Ons wag ___ die hek. (at/by)',
    options: ['onder', 'langs', 'by', 'in'],
    answer: 'by',
    explanation: "'by' can mean 'at' or 'by'.",
  },
];

const Voorsetsels = () => (
  <AfrikaansTopic title="Voorsetsels" subtitle="Prepositions" learnSteps={learnSteps} task="voorsetsels" bank={bank} speak="options" />
);

export default Voorsetsels;
