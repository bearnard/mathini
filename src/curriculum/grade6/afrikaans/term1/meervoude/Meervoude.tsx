import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, PluralPair } from '@/components/diagrams/afrikaans/AfrikaansPictures';
import { PLURALS, pluralRule } from '@/components/diagrams/afrikaans/afrikaansHelpers';

const P = Object.fromEntries(PLURALS.map((p) => [p.sg, p]));
const note = (sg: string) => ({ e: 'add -e', 'double-e': 'double the last letter, add -e', s: 'add -s', special: 'learn the word' })[pluralRule(P[sg].sg, P[sg].pl)];
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Most plurals add -e',
    content: slide(
      <>
        <Rule>The <Af>meervoud</Af> (plural) of most Afrikaans nouns is made by adding <Af>-e</Af> to the singular.</Rule>
        <PluralPair sg={P.hond.sg} pl={P.hond.pl} note={note('hond')} aria="One dot with the word hond, an arrow, then three dots with the word honde. The plural adds e." />
        <Worked
          title="Make the plural"
          steps={[
            <><Af>{P.hond.sg}</Af> <En>dog</En> + <Af>-e</Af> = <Af>{P.hond.pl}</Af></>,
            <><Af>{P.boek.sg}</Af> <En>book</En> + <Af>-e</Af> = <Af>{P.boek.pl}</Af></>,
            <><Af>{P.huis.sg}</Af> <En>house</En> + <Af>-e</Af> = <Af>{P.huis.pl}</Af> <SpeakButton text="honde, boeke, huise" /></>,
          ]}
        />
        <Mistake>Adding <Af>-s</Af> to every noun. <Af>honds</Af>, <Af>boeks</Af> and <Af>huiss</Af> are wrong. These words take <Af>-e</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Short vowel: double the last letter',
    content: slide(
      <>
        <Rule>When the vowel is short and the word ends in one consonant, <strong>double</strong> that consonant before <Af>-e</Af>.</Rule>
        <PluralPair sg={P.kat.sg} pl={P.kat.pl} note={note('kat')} aria="One dot with the word kat, an arrow, then three dots with the word katte. The t is doubled before e." />
        <Worked
          title="Double the letter, then add -e"
          steps={[
            <><Af>{P.kat.sg}</Af> <En>cat</En>: double the <Af>t</Af> and add <Af>-e</Af> = <Af>{P.kat.pl}</Af></>,
            <><Af>{P.kop.sg}</Af> <En>head</En>: double the <Af>p</Af> = <Af>{P.kop.pl}</Af></>,
            <><Af>{P.blom.sg}</Af> <En>flower</En>: double the <Af>m</Af> = <Af>{P.blom.pl}</Af> <SpeakButton text="katte, koppe, blomme" /></>,
          ]}
        />
        <Mistake>Forgetting to double. <Af>kate</Af> and <Af>kope</Af> are wrong, because the vowel would then sound long. Write <Af>katte</Af> and <Af>koppe</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Words ending in -el take -s',
    content: slide(
      <>
        <Rule>Many nouns that end in <Af>-el</Af> take <Af>-s</Af> in the plural.</Rule>
        <PluralPair sg={P.tafel.sg} pl={P.tafel.pl} note={note('tafel')} aria="One dot with the word tafel, an arrow, then three dots with the word tafels. The plural adds s." />
        <Worked
          title="Add -s"
          steps={[
            <><Af>{P.tafel.sg}</Af> <En>table</En> + <Af>-s</Af> = <Af>{P.tafel.pl}</Af></>,
            <><Af>{P.appel.sg}</Af> <En>apple</En> + <Af>-s</Af> = <Af>{P.appel.pl}</Af> <SpeakButton text="tafels, appels" /></>,
          ]}
        />
        <Mistake>Adding <Af>-e</Af> here. <Af>tafele</Af> and <Af>appele</Af> are wrong. These take <Af>-s</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Words you must learn: kind, dag',
    content: slide(
      <>
        <Rule>Some plurals do not follow a rule. Learn them as new words.</Rule>
        <PluralPair sg={P.kind.sg} pl={P.kind.pl} note={note('kind')} aria="One dot with the word kind, an arrow, then three dots with the word kinders. This plural is a special form." />
        <Worked
          title="Two special plurals"
          steps={[
            <><Af>{P.kind.sg}</Af> <En>child</En> → <Af>{P.kind.pl}</Af> <En>children</En></>,
            <><Af>{P.dag.sg}</Af> <En>day</En> → <Af>{P.dag.pl}</Af> <En>days</En> <SpeakButton text="kinders, dae" /></>,
          ]}
        />
        <Mistake>Using a rule on <Af>kind</Af>. <Af>kinde</Af> and <Af>kinds</Af> are wrong. The plural is <Af>kinders</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the plural of <Af>hond</Af> <En>dog</En>?</>} answer={<><Af>{P.hond.pl}</Af> (add <Af>-e</Af>).</>} />
        <Check question={<>What is the plural of <Af>kat</Af> <En>cat</En>?</>} answer={<><Af>{P.kat.pl}</Af> (double the <Af>t</Af>).</>} />
        <Check question={<>What is the plural of <Af>tafel</Af> <En>table</En>?</>} answer={<><Af>{P.tafel.pl}</Af> (add <Af>-s</Af>).</>} />
        <Check question={<>What is the plural of <Af>kind</Af> <En>child</En>?</>} answer={<><Af>{P.kind.pl}</Af> (a special form).</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "What is the plural of 'hond' (dog)?", options: ['honde', 'honds', 'honne', 'hondes'], answer: 'honde', explanation: "Most Afrikaans nouns like 'hond' add -e: hond → honde." },
  { prompt: "What is the plural of 'kat' (cat)?", options: ['katte', 'kats', 'kate', 'katers'], answer: 'katte', explanation: "'Kat' has a short vowel, so the consonant doubles: kat → katte." },
  { prompt: "What is the plural of 'boek' (book)?", options: ['boeke', 'boeks', 'boekke', 'boeken'], answer: 'boeke', explanation: "'Boek' takes -e in the plural: boek → boeke." },
  { prompt: "What is the plural of 'huis' (house)?", options: ['huise', 'huiss', 'huises', 'huiseë'], answer: 'huise', explanation: "'Huis' becomes 'huise' in the plural." },
  { prompt: "What is the plural of 'tafel' (table)?", options: ['tafels', 'tafele', 'taffels', 'tafelte'], answer: 'tafels', explanation: "'Tafel' is a common noun that forms the plural with -s." },
  { prompt: "What is the plural of 'appel' (apple)?", options: ['appels', 'appele', 'appel', 'appelers'], answer: 'appels', explanation: "'Appel' forms the plural with -s: appel → appels." },
  { prompt: "What is the plural of 'kop' (head/cup)?", options: ['koppe', 'kops', 'kope', 'kopies'], answer: 'koppe', explanation: "The consonant doubles after the short vowel: kop → koppe." },
  { prompt: "What is the plural of 'kind' (child)?", options: ['kinders', 'kinde', 'kinds', 'kindere'], answer: 'kinders', explanation: "'Kind' has the special plural 'kinders'." },
  { prompt: "Which word is already plural?", options: ['honde', 'hond', 'kat', 'boek'], answer: 'honde', explanation: "'Honde' means more than one dog." },
  { prompt: "Which plural uses -s?", options: ['tafels', 'honde', 'katte', 'boeke'], answer: 'tafels', explanation: "'Tafel' becomes 'tafels' by adding -s." },
];

const Meervoude = () => (
  <AfrikaansTopic
    title="Meervoude"
    subtitle="Making Afrikaans plurals"
    learnSteps={learnSteps}
    task="meervoude"
    bank={bank}
    speak="options"
  />
);

export default Meervoude;
