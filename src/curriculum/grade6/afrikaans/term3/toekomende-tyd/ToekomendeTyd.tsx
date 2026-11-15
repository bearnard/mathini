import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';
import { futureWords, pastWords, presentWords, sentence, verbIndex } from '@/components/diagrams/afrikaans/afrikaansHelpers';

const S = sentence;
const play = { s: 'ek', m: 'sokker', v: 'speel' };
const fut = futureWords(play.s, play.m, play.v);
const pres = presentWords(play.s, play.m, play.v);
const past = pastWords(play.s, play.m, play.v);
const eat = { s: 'ons', m: 'aandete', v: 'eet' };
const read = { s: 'sy', m: "'n boek", v: 'lees' };
const go = { s: 'hulle', m: 'skool toe', v: 'gaan' };
const tea = { s: 'ek', m: 'tee', v: 'maak' };
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The future: use sal',
    content: slide(
      <>
        <Rule>To talk about the future, put <Af>sal</Af> <En>will</En> in front of the verb. <Af>sal</Af> is the signal word for the <Af>toekomende tyd</Af>. You will also hear <Af>gaan</Af>, as in <Af>Ek gaan sokker speel</Af>, but in this lesson we use <Af>sal</Af>.</Rule>
        <TenseTimeline
          past={S(past)}
          present={S(pres)}
          future={S(fut)}
          aria="A timeline from yesterday to tomorrow. Gister: Ek het sokker gespeel. Vandag: Ek speel sokker. Môre: Ek sal sokker speel."
        />
        <Worked
          title="Present to future"
          steps={[
            <>Present: <Af>{S(pres)}</Af> <En>I play soccer.</En></>,
            <>Add <Af>sal</Af> after the subject: <Af>Ek sal ...</Af></>,
            <>Future: <Af>{S(fut)}</Af> <En>I will play soccer.</En> <SpeakButton text={S(fut)} /></>,
          ]}
        />
        <Mistake>Leaving out the signal word. <Af>môre</Af> <En>tomorrow</En> tells you to put <Af>sal</Af> before the verb, as in <Af>Ek sal môre sokker speel</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where does the verb go?',
    content: slide(
      <>
        <Rule>After <Af>sal</Af>, the verb moves to the <strong>end</strong> of the sentence. The subject stays first and <Af>sal</Af> is second.</Rule>
        <WordBoxes
          words={fut}
          hot={[1, verbIndex(fut, play.v)]}
          arrow={[1, verbIndex(fut, play.v)]}
          aria="The sentence Ek sal sokker speel in boxes. Sal is in second place and the verb speel is last, with an arrow showing the verb moved to the end."
        />
        <Worked
          title="Build the sentence"
          steps={[
            <>Subject first: <Af>{eat.s}</Af> <En>we</En>.</>,
            <>Second place: <Af>sal</Af>.</>,
            <>Then the rest of the sentence: <Af>{eat.m}</Af> <En>supper</En>.</>,
            <>The verb goes last: <Af>{S(futureWords(eat.s, eat.m, eat.v))}</Af> <En>We will eat supper.</En></>,
          ]}
        />
        <Mistake>Leaving the verb next to the subject: <Af>Ek speel sal sokker</Af> is wrong. Say <Af>Ek sal sokker speel</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'More sentences with sal',
    content: slide(
      <>
        <Rule>The pattern is always the same: subject + <Af>sal</Af> + the rest + verb. The verb does not change.</Rule>
        <Worked
          title="Three more examples"
          steps={[
            <><Af>{S(futureWords(read.s, read.m, read.v))}</Af> <En>She will read a book.</En></>,
            <><Af>{S(futureWords(go.s, go.m, go.v))}</Af> <En>They will go to school.</En></>,
            <><Af>{S(futureWords(tea.s, tea.m, tea.v))}</Af> <En>I will make tea.</En> <SpeakButton text={`${S(futureWords(read.s, read.m, read.v))} ${S(futureWords(go.s, go.m, go.v))} ${S(futureWords(tea.s, tea.m, tea.v))}`} /></>,
          ]}
        />
        <Mistake>Changing the verb. In the future the verb stays the same (<Af>speel</Af>, <Af>lees</Af>, <Af>gaan</Af>). It does not get <Af>-s</Af> or <Af>ge-</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Which tense is it? Look for the signal word',
    content: slide(
      <>
        <Rule>The signal word tells you the tense: <Af>sal</Af> means future, <Af>het</Af> with <Af>ge-</Af> means past, and no helper means present.</Rule>
        <Worked
          title="Name the tense"
          steps={[
            <><Af>{S(presentWords('jy', "'n brief", 'skryf'))}</Af> has no helper word: <strong>present</strong>.</>,
            <><Af>{S(futureWords('jy', "'n brief", 'skryf'))}</Af> has <Af>sal</Af>: <strong>future</strong> <En>You will write a letter.</En></>,
            <><Af>{S(pastWords('jy', "'n brief", 'skryf'))}</Af> has <Af>het</Af> and <Af>ge-</Af>: <strong>past</strong> <En>You wrote a letter.</En></>,
          ]}
        />
        <Mistake>Mixing the helpers. <Af>Ek sal gespeel</Af> is wrong. <Af>sal</Af> goes with the plain verb: <Af>Ek sal speel</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Put in the future: <Af>{S(presentWords('ons', 'aandete', 'eet'))}</Af></>} answer={<><Af>{S(futureWords('ons', 'aandete', 'eet'))}</Af></>} />
        <Check question={<>Put in the future: <Af>{S(presentWords('die hond', '', 'slaap'))}</Af></>} answer={<><Af>{S(futureWords('die hond', '', 'slaap'))}</Af></>} />
        <Check question={<>Which word shows the future tense in Afrikaans?</>} answer={<><Af>sal</Af> <En>will</En> (<Af>gaan</Af> is another future helper).</>} />
        <Check question={<>Is <Af>Sy sal 'n boek lees</Af> correct word order?</>} answer={<>Yes. <Af>sal</Af> is second and the verb <Af>lees</Af> is last.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Choose the future tense of: 'Ek speel sokker.'",
    options: ['Ek sal sokker speel', 'Ek speel sal sokker', 'Sal ek sokker speel', 'Ek het sokker gespeel'],
    answer: 'Ek sal sokker speel',
    explanation: "Use subject + sal + object + verb: 'Ek sal sokker speel.'",
  },
  {
    prompt: "Choose the future tense of: 'Ons eet aandete.'",
    options: ['Ons sal aandete eet', 'Ons eet sal aandete', 'Ons het aandete geëet', 'Sal ons aandete eet'],
    answer: 'Ons sal aandete eet',
    explanation: "'Sal' shows future tense, and 'eet' moves to the end.",
  },
  {
    prompt: "Choose the future tense of: 'Sy lees 'n boek.'",
    options: ["Sy sal 'n boek lees", "Sy lees sal 'n boek", "Sy het 'n boek gelees", "Sal sy 'n boek lees"],
    answer: "Sy sal 'n boek lees",
    explanation: "The statement is 'Sy sal 'n boek lees.'",
  },
  {
    prompt: "Choose the future tense of: 'Hulle gaan skool toe.'",
    options: ['Hulle sal skool toe gaan', 'Hulle gaan sal skool toe', 'Hulle het skool toe gegaan', 'Sal hulle skool toe gaan'],
    answer: 'Hulle sal skool toe gaan',
    explanation: "Use 'sal' and put 'gaan' at the end.",
  },
  {
    prompt: "Choose the future tense of: 'Ek maak tee.'",
    options: ['Ek sal tee maak', 'Ek maak sal tee', 'Ek het tee gemaak', 'Sal ek tee maak'],
    answer: 'Ek sal tee maak',
    explanation: "The future tense is 'Ek sal tee maak.'",
  },
  {
    prompt: "Choose the future tense of: 'Jy skryf 'n brief.'",
    options: ["Jy sal 'n brief skryf", "Jy skryf sal 'n brief", "Jy het 'n brief geskryf", "Sal jy 'n brief skryf"],
    answer: "Jy sal 'n brief skryf",
    explanation: "In a statement, write 'Jy sal ... skryf.'",
  },
  {
    prompt: "Choose the future tense of: 'Die hond slaap.'",
    options: ['Die hond sal slaap', 'Die hond slaap sal', 'Die hond het geslaap', 'Sal die hond slaap'],
    answer: 'Die hond sal slaap',
    explanation: "Use 'sal' before the verb for a future statement.",
  },
  {
    prompt: 'Which word usually shows the future tense in Afrikaans?',
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Sal' is the helping word for the future tense.",
  },
];

const ToekomendeTyd = () => (
  <AfrikaansTopic
    title="Toekomende Tyd"
    subtitle="The future tense (sal)"
    learnSteps={learnSteps}
    task="toekomende-tyd"
    bank={bank}
    speak="options"
  />
);

export default ToekomendeTyd;
