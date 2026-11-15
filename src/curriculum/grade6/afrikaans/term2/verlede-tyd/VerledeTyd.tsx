import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';
import { futureWords, participle, pastWords, presentWords, sentence, verbIndex } from '@/components/diagrams/afrikaans/afrikaansHelpers';

const S = sentence;
const play = { s: 'ek', m: 'sokker', v: 'speel' };
const past = pastWords(play.s, play.m, play.v);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The past: het + ge-',
    content: slide(
      <>
        <Rule>For the <Af>verlede tyd</Af> (past) use <Af>het</Af> and put <Af>ge-</Af> in front of the verb: <Af>speel</Af> becomes <Af>gespeel</Af>.</Rule>
        <TenseTimeline
          past={S(past)}
          present={S(presentWords(play.s, play.m, play.v))}
          future={S(futureWords(play.s, play.m, play.v))}
          aria="A timeline from yesterday to tomorrow. Gister: Ek het sokker gespeel. Vandag: Ek speel sokker. Môre: Ek sal sokker speel."
        />
        <Worked
          title="Present to past"
          steps={[
            <>Present: <Af>{S(presentWords(play.s, play.m, play.v))}</Af> <En>I play soccer.</En></>,
            <>Add <Af>het</Af> after the subject.</>,
            <>Put <Af>ge-</Af> on the verb: <Af>{participle(play.v)}</Af>.</>,
            <>Past: <Af>{S(past)}</Af> <En>I played soccer.</En> <SpeakButton text={S(past)} /></>,
            <>With no extra words it is shorter: <Af>Ek speel</Af> becomes <Af>Ek het gespeel</Af>.</>,
          ]}
        />
        <Mistake>Using only one of the two parts. <Af>Ek het speel</Af> has no <Af>ge-</Af>, and <Af>Ek gespeel</Af> has no <Af>het</Af>. You need both.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where does the verb go?',
    content: slide(
      <>
        <Rule><Af>het</Af> is in second place. The <Af>ge-</Af> verb goes to the <strong>end</strong> of the sentence.</Rule>
        <WordBoxes
          words={pastWords('hy', 'die bal', 'skop')}
          hot={[1, verbIndex(pastWords('hy', 'die bal', 'skop'), 'skop')]}
          bracket={[1, verbIndex(pastWords('hy', 'die bal', 'skop'), 'skop')]}
          aria="The sentence Hy het die bal geskop in boxes. Het is in second place and the verb geskop is last, joined by a bracket underneath."
        />
        <Worked
          title="Build the sentence"
          steps={[
            <>Subject first: <Af>hy</Af>.</>,
            <>Second place: <Af>het</Af>.</>,
            <>Then the rest: <Af>die bal</Af> <En>the ball</En>.</>,
            <>The <Af>ge-</Af> verb last: <Af>{S(pastWords('hy', 'die bal', 'skop'))}</Af> <En>He kicked the ball.</En></>,
          ]}
        />
        <Mistake>Putting the verb next to <Af>het</Af>. <Af>Hy het geskop die bal</Af> is wrong. Say <Af>Hy het die bal geskop</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Verbs you will meet',
    content: slide(
      <>
        <Rule>Most verbs just add <Af>ge-</Af> (verbs that start with <Af>be-</Af>, <Af>ver-</Af>, <Af>ont-</Af> or <Af>her-</Af> do not). One needs a small spelling change: <Af>eet</Af> becomes <Af>geëet</Af>, with <Af>ë</Af> to show a new syllable.</Rule>
        <Worked
          title="Make the past"
          steps={[
            <><Af>{S(pastWords('sy', "'n boek", 'lees'))}</Af> <En>She read a book.</En></>,
            <><Af>{S(pastWords('ek', 'die hond', 'sien'))}</Af> <En>I saw the dog.</En></>,
            <><Af>{S(pastWords('ons', 'skool toe', 'loop'))}</Af> <En>We walked to school.</En></>,
            <><Af>{S(pastWords('ons', 'appels', 'eet'))}</Af> <En>We ate apples.</En> <SpeakButton text={S(pastWords('ons', 'appels', 'eet'))} /></>,
            <><Af>{S(pastWords('hulle', 'hard', 'werk'))}</Af> <En>They worked hard.</En></>,
          ]}
        />
        <Mistake>Writing <Af>geeet</Af> for <Af>eet</Af>. The correct form is <Af>geëet</Af>, with the two dots on the <Af>ë</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two special verbs: is and het',
    content: slide(
      <>
        <Rule><Af>is</Af> becomes <Af>was</Af>, and <Af>het</Af> (to have) becomes <Af>het ... gehad</Af>. These do not follow the <Af>het + ge-</Af> pattern in the same way.</Rule>
        <Worked
          title="Past of is and het"
          steps={[
            <>Present: <Af>Ek is moeg.</Af> <En>I am tired.</En></>,
            <>Past: <Af>Ek was moeg.</Af> <En>I was tired.</En> (no <Af>het</Af>, no <Af>ge-</Af>)</>,
            <>Present: <Af>Hy het 'n pen.</Af> <En>He has a pen.</En></>,
            <>Past: <Af>Hy het 'n pen gehad.</Af> <En>He had a pen.</En> <SpeakButton text="Ek was moeg. Hy het 'n pen gehad." /></>,
          ]}
        />
        <Mistake>Keeping the present word. <Af>Ek is moeg</Af> says you are tired now. For yesterday, change <Af>is</Af> to <Af>was</Af>: <Af>Ek was moeg</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Put in the past: <Af>{S(presentWords('hy', 'die bal', 'skop'))}</Af></>} answer={<><Af>{S(pastWords('hy', 'die bal', 'skop'))}</Af></>} />
        <Check question={<>Put in the past: <Af>{S(presentWords('sy', "'n boek", 'lees'))}</Af></>} answer={<><Af>{S(pastWords('sy', "'n boek", 'lees'))}</Af></>} />
        <Check question={<>What is the past of <Af>Ek is moeg</Af>?</>} answer={<><Af>Ek was moeg.</Af></>} />
        <Check question={<>Which past sentence is right: <Af>Ons het appels geëet</Af> or <Af>Ons het appels geeet</Af>?</>} answer={<>The first one. <Af>eet</Af> becomes <Af>geëet</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Past tense of 'Ek speel' is ...",
    options: ['Ek het gespeel', 'Ek speel', 'Ek sal speel', 'Ek gespeel'],
    answer: 'Ek het gespeel',
    explanation: 'Past tense uses het + ge-: speel → het gespeel.',
  },
  {
    prompt: "Past tense of 'Ons loop skool toe' is ...",
    options: ['Ons het skool toe geloop', 'Ons loop skool toe', 'Ons het loop skool toe', 'Ons sal skool toe loop'],
    answer: 'Ons het skool toe geloop',
    explanation: 'Loop becomes het geloop in the past tense.',
  },
  {
    prompt: "Choose the correct past tense: 'Hy skop die bal.'",
    options: ['Hy het die bal geskop', 'Hy skop die bal', 'Hy het die bal skop', 'Hy sal die bal skop'],
    answer: 'Hy het die bal geskop',
    explanation: 'Skop becomes het geskop.',
  },
  {
    prompt: "Past tense of 'Sy lees 'n boek' is ...",
    options: ["Sy het 'n boek gelees", "Sy lees 'n boek", "Sy het 'n boek lees", "Sy sal 'n boek lees"],
    answer: "Sy het 'n boek gelees",
    explanation: 'Lees becomes het gelees.',
  },
  {
    prompt: "Past tense of 'Ek sien die hond' is ...",
    options: ['Ek het die hond gesien', 'Ek sien die hond', 'Ek het die hond sien', 'Ek sal die hond sien'],
    answer: 'Ek het die hond gesien',
    explanation: 'Sien becomes het gesien.',
  },
  {
    prompt: "Past tense of 'Ons eet appels' is ...",
    options: ['Ons het appels geëet', 'Ons eet appels', 'Ons het appels geeet', 'Ons sal appels eet'],
    answer: 'Ons het appels geëet',
    explanation: 'Eet becomes het geëet, with ë to show the new syllable.',
  },
  {
    prompt: "Past tense of 'Ek is moeg' is ...",
    options: ['Ek was moeg', 'Ek het moeg gewees', 'Ek is moeg', 'Ek sal moeg wees'],
    answer: 'Ek was moeg',
    explanation: 'For simple Grade 6 sentences, is often becomes was.',
  },
  {
    prompt: "Past tense of 'Hy het 'n pen' is ...",
    options: ["Hy het 'n pen gehad", "Hy het 'n pen", "Hy gehad 'n pen", "Hy sal 'n pen hê"],
    answer: "Hy het 'n pen gehad",
    explanation: 'The past tense of having something is het gehad.',
  },
  {
    prompt: "Past tense of 'Hulle werk hard' is ...",
    options: ['Hulle het hard gewerk', 'Hulle werk hard', 'Hulle het hard werk', 'Hulle sal hard werk'],
    answer: 'Hulle het hard gewerk',
    explanation: 'Werk becomes het gewerk.',
  },
];

const VerledeTyd = () => (
  <AfrikaansTopic
    title="Verlede Tyd"
    subtitle="The past tense (het ge-)"
    learnSteps={learnSteps}
    task="verlede-tyd"
    bank={bank}
    speak="options"
  />
);

export default VerledeTyd;
