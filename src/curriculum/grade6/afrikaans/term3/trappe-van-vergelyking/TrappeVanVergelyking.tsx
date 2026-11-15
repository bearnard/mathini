import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, Ladder } from '@/components/diagrams/afrikaans/AfrikaansPictures';
import { DEGREES } from '@/components/diagrams/afrikaans/afrikaansHelpers';

const D = Object.fromEntries(DEGREES.map((d) => [d.base, d]));
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Three degrees: mooi, mooier, mooiste',
    content: slide(
      <>
        <Rule>An adjective has three degrees: the plain word, the <strong>comparative</strong> (add <Af>-er</Af>) and the <strong>superlative</strong> (add <Af>-ste</Af>).</Rule>
        <Ladder
          steps={[
            { word: D.mooi.base, label: 'plain' },
            { word: D.mooi.comp, label: 'comparative' },
            { word: D.mooi.sup, label: 'superlative' },
          ]}
          aria="Three steps that grow taller from left to right: mooi, mooier, mooiste, named plain, comparative and superlative."
        />
        <Worked
          title="Compare three flowers"
          steps={[
            <><Af>Die blom is mooi.</Af> <En>The flower is pretty.</En></>,
            <><Af>Die roos is mooier.</Af> <En>The rose is prettier.</En> (<Af>mooi</Af> + <Af>-er</Af>)</>,
            <><Af>Die tulp is die mooiste.</Af> <En>The tulip is the prettiest.</En> (<Af>mooi</Af> + <Af>-ste</Af>) <SpeakButton text="mooi, mooier, mooiste" /></>,
          ]}
        />
        <Mistake>Writing <Af>meer mooi</Af> or <Af>mooi</Af> for the comparison. For short adjectives like <Af>mooi</Af>, add <Af>-er</Af>: <Af>mooier</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'More words that follow the rule',
    content: slide(
      <>
        <Rule>Most adjectives follow the same pattern. Add <Af>-er</Af> for two things, and <Af>-ste</Af> for the most.</Rule>
        <Worked
          title="Build the three degrees"
          steps={[
            <><Af>{D.klein.base}</Af> <En>small</En> → <Af>{D.klein.comp}</Af> → <Af>{D.klein.sup}</Af></>,
            <><Af>{D.vinnig.base}</Af> <En>fast</En> → <Af>{D.vinnig.comp}</Af> → <Af>{D.vinnig.sup}</Af></>,
            <><Af>{D.warm.base}</Af> <En>warm</En> → <Af>{D.warm.comp}</Af> → <Af>{D.warm.sup}</Af> <SpeakButton text="klein, kleiner, kleinste, vinnig, vinniger, vinnigste, warm, warmer, warmste" /></>,
          ]}
        />
        <Mistake>Forgetting the <Af>-ste</Af> on the third degree. <Af>die vinnig</Af> is wrong for “the fastest”. Write <Af>die vinnigste</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Spelling change: groot, groter, grootste',
    content: slide(
      <>
        <Rule>A long vowel written with two letters loses one letter before <Af>-er</Af>: <Af>groot</Af> becomes <Af>groter</Af>. The superlative keeps both: <Af>grootste</Af>.</Rule>
        <Worked
          title="Build the degrees of groot"
          steps={[
            <><Af>{D.groot.base}</Af> <En>big</En></>,
            <>Comparative: take away one <Af>o</Af>, then add <Af>-er</Af>: <Af>{D.groot.comp}</Af>.</>,
            <>Superlative: keep <Af>oo</Af>, add <Af>-ste</Af>: <Af>{D.groot.sup}</Af>. <SpeakButton text="groot, groter, grootste" /></>,
          ]}
        />
        <Mistake>Writing <Af>grooter</Af> with a double <Af>o</Af>. The comparative is <Af>groter</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'A special one: goed, beter, beste',
    content: slide(
      <>
        <Rule>A few adjectives change into different words. <Af>goed</Af> <En>good</En> becomes <Af>beter</Af> and <Af>beste</Af>.</Rule>
        <Ladder
          steps={[
            { word: D.goed.base, label: 'plain' },
            { word: D.goed.comp, label: 'comparative' },
            { word: D.goed.sup, label: 'superlative' },
          ]}
          aria="Three steps that grow taller from left to right: goed, beter, beste, named plain, comparative and superlative."
        />
        <Worked
          title="Use them in sentences"
          steps={[
            <><Af>Jan is goed in sokker.</Af> <En>Jan is good at soccer.</En></>,
            <><Af>Piet is beter as Jan.</Af> <En>Piet is better than Jan.</En> (<Af>as</Af> means than.)</>,
            <><Af>Sipho is die beste.</Af> <En>Sipho is the best.</En> <SpeakButton text="goed, beter, beste" /></>,
          ]}
        />
        <Mistake>Writing <Af>goeder</Af> or <Af>goedste</Af>. These are wrong. Learn the three words <Af>goed, beter, beste</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Give the comparative of <Af>klein</Af> <En>small</En>.</>} answer={<><Af>{D.klein.comp}</Af>.</>} />
        <Check question={<>Give the superlative of <Af>warm</Af> <En>warm</En>.</>} answer={<><Af>{D.warm.sup}</Af>.</>} />
        <Check question={<>Give the comparative of <Af>goed</Af> <En>good</En>.</>} answer={<><Af>{D.goed.comp}</Af>.</>} />
        <Check question={<>Give the superlative of <Af>vinnig</Af> <En>fast</En>.</>} answer={<><Af>{D.vinnig.sup}</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Comparative of 'mooi' (pretty)?",
    options: ['mooier', 'mooiste', 'mooi', 'meer mooi'],
    answer: 'mooier',
    explanation: "'Mooi' becomes 'mooier' in the comparative form.",
  },
  {
    prompt: "Superlative of 'mooi' (pretty)?",
    options: ['mooiste', 'mooier', 'mooi', 'mees mooi'],
    answer: 'mooiste',
    explanation: "The three forms are mooi, mooier, mooiste.",
  },
  {
    prompt: "Comparative of 'groot' (big)?",
    options: ['groter', 'grootste', 'groot', 'meer groot'],
    answer: 'groter',
    explanation: "'Groot' becomes 'groter' when comparing two things.",
  },
  {
    prompt: "Superlative of 'groot' (big)?",
    options: ['grootste', 'groter', 'groot', 'mees groot'],
    answer: 'grootste',
    explanation: "The three forms are groot, groter, grootste.",
  },
  {
    prompt: "Comparative of 'goed' (good)?",
    options: ['beter', 'beste', 'goeder', 'goedste'],
    answer: 'beter',
    explanation: "'Goed' is irregular: goed, beter, beste.",
  },
  {
    prompt: "Superlative of 'goed' (good)?",
    options: ['beste', 'beter', 'goedste', 'goeder'],
    answer: 'beste',
    explanation: "The superlative form of 'goed' is 'beste'.",
  },
  {
    prompt: "Comparative of 'vinnig' (fast)?",
    options: ['vinniger', 'vinnigste', 'vinnig', 'meer vinnig'],
    answer: 'vinniger',
    explanation: "'Vinnig' becomes 'vinniger' in the comparative form.",
  },
  {
    prompt: "Superlative of 'vinnig' (fast)?",
    options: ['vinnigste', 'vinniger', 'vinnig', 'mees vinnig'],
    answer: 'vinnigste',
    explanation: "The three forms are vinnig, vinniger, vinnigste.",
  },
  {
    prompt: "Comparative of 'klein' (small)?",
    options: ['kleiner', 'kleinste', 'klein', 'meer klein'],
    answer: 'kleiner',
    explanation: "'Klein' becomes 'kleiner' when comparing two things.",
  },
  {
    prompt: "Superlative of 'warm' (warm)?",
    options: ['warmste', 'warmer', 'warm', 'mees warm'],
    answer: 'warmste',
    explanation: "The three forms are warm, warmer, warmste.",
  },
];

const TrappeVanVergelyking = () => (
  <AfrikaansTopic
    title="Trappe van Vergelyking"
    subtitle="Degrees of comparison"
    learnSteps={learnSteps}
    task="trappe-van-vergelyking"
    bank={bank}
    speak="options"
  />
);

export default TrappeVanVergelyking;
