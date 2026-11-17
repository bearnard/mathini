import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Testament: the key words',
    content: slide(
      <>
        <Rule>A <Af>testament</Af> <En>will</En> says who gets what after a person dies. The person who receives something is the <Af>erfgenaam</Af> <En>heir</En>. The person who carries out the will is the <Af>eksekuteur</Af> <En>executor</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['testament', 'will'], ['erfgenaam', 'heir'], ['eksekuteur', 'executor']]}
          aria="Three Afrikaans words with their English meaning: testament is will, erfgenaam is heir, eksekuteur is executor."
        />
        <Worked
          title="Read the sentence"
          steps={[
            <><Af>Die testament sê wie die erfgenaam is.</Af> <En>The will says who the heir is.</En> <SpeakButton text="Die testament sê wie die erfgenaam is." /></>,
            <>Everything the person owns is the <Af>boedel</Af> <En>estate</En>.</>,
          ]}
        />
        <Mistake>Mixing up <Af>erfgenaam</Af> and <Af>eksekuteur</Af>. The heir receives; the executor carries out the will.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing the sentences: bemaak',
    content: slide(
      <>
        <Rule>A will uses formal verbs. <Af>Bemaak</Af> <En>leave, bequeath</En> says who gets what. <Af>Aanstel</Af> <En>appoint</En> names the executor.</Rule>
        <WordBoxes
          words={['Ek', 'bemaak', 'my', 'huis', 'aan', 'Lerato']}
          hot={[1]}
          aria="The will sentence Ek bemaak my huis aan Lerato (I leave my house to Lerato) in six boxes, with the verb bemaak highlighted."
        />
        <Worked
          title="Two sentences"
          steps={[
            <><Af>Ek bemaak my huis aan my dogter.</Af> <En>I leave my house to my daughter.</En> <SpeakButton text="Ek bemaak my huis aan my dogter." /></>,
            <><Af>Ek stel my broer as eksekuteur aan.</Af> <En>I appoint my brother as executor.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Ek gee my huis</Af>, which is too casual. A will says <Af>bemaak</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'The order of a will',
    content: slide(
      <>
        <Rule>A will has a fixed order: the title and name, the executor, the heirs, then the date and signatures. The <Af>getuies</Af> <En>witnesses</En> also sign.</Rule>
        <OrderTiles
          tiles={['Titel en naam', 'Eksekuteur', 'Erfgename', 'Datum', 'Handtekening', 'Getuies']}
          aria="A will in order from top to bottom: Titel en naam, Eksekuteur, Erfgename, Datum, Handtekening and Getuies."
        />
        <Worked
          title="Read the end"
          steps={[
            <><Af>Die getuies teken ook.</Af> <En>The witnesses also sign.</En></>,
            <>A real will must be written with an attorney; this is only practice.</>,
          ]}
        />
        <Mistake>Forgetting <Af>die datum en die handtekening</Af> <En>the date and the signature</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exact language',
    content: slide(
      <>
        <Rule>A will must be exact. Name the person and the thing, and use the rand sign with a space for thousands.</Rule>
        <WordBoxes
          words={['Ek', 'bemaak', 'R50 000', 'aan', 'Thabo']}
          hot={[2, 4]}
          aria="The will sentence Ek bemaak R50 000 aan Thabo (I leave R50 000 to Thabo) in five boxes, with the amount and the name highlighted."
        />
        <Worked
          title="Exact and vague"
          steps={[
            <><Af>Ek bemaak R50 000 aan my seun, Thabo.</Af> <En>I leave R50 000 to my son, Thabo.</En> <SpeakButton text="Ek bemaak R50 000 aan my seun, Thabo." /></>,
            <><Af>Ek bemaak my goed aan die kinders.</Af> <En>I leave my things to the children.</En> This is too vague.</>,
          ]}
        />
        <Mistake>Writing <Af>my goed</Af> <En>my things</En>. Say what, and say who.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>will</em> (the document)?</>} answer={<><Af>Testament</Af>.</>} />
        <Check question={<>Which word means <em>executor</em>?</>} answer={<><Af>Eksekuteur</Af>.</>} />
        <Check question={<>Which verb means <em>leave, bequeath</em> in a will?</>} answer={<><Af>Bemaak</Af>.</>} />
        <Check question={<>Which word means <em>witnesses</em>?</>} answer={<><Af>Getuies</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Watter Afrikaanse woord beteken 'will' (the document)?", options: ['testament', 'grondwet', 'ooreenkoms', 'dagboek'], answer: 'testament', explanation: "'Testament' means 'will': it says who gets what after a person dies." },
  { prompt: "Watter Afrikaanse woord beteken 'heir'?", options: ['erfgenaam', 'eksekuteur', 'getuie', 'boedel'], answer: 'erfgenaam', explanation: "'Erfgenaam' means 'heir': the person who receives something." },
  { prompt: "Watter Afrikaanse woord beteken 'executor'?", options: ['erfgenaam', 'testament', 'eksekuteur', 'handtekening'], answer: 'eksekuteur', explanation: "'Eksekuteur' means 'executor': the person who carries out the will." },
  { prompt: "Watter Afrikaanse woord beteken 'estate'?", options: ['testament', 'getuie', 'datum', 'boedel'], answer: 'boedel', explanation: "'Boedel' means 'estate': everything the person owns." },
  { prompt: "Watter Afrikaanse woord beteken 'witnesses'?", options: ['erfgename', 'getuies', 'lede', 'reëls'], answer: 'getuies', explanation: "'Getuies' means 'witnesses'. They also sign the will." },
  { prompt: "Watter werkwoord beteken 'leave, bequeath' in 'n testament?", options: ['verkoop', 'speel', 'lees', 'bemaak'], answer: 'bemaak', explanation: "'Bemaak' means 'leave' or 'bequeath': it says who gets what." },
  { prompt: 'Watter sin pas by die testament?', options: ['Ek gee my huis vir jou, so ja.', 'Hallo, my groot huis is vir jou.', 'Ek bemaak my huis aan my dogter.', 'Hy het gister saam met my gespeel.'], answer: 'Ek bemaak my huis aan my dogter.', explanation: "It uses the formal verb 'bemaak' and names the thing and the person." },
  { prompt: 'Watter sin noem die eksekuteur?', options: ['Ek bemaak R50 000 aan my seun, Thabo.', 'Die getuies teken ook.', 'Ek stel my broer as eksekuteur aan.', 'Die testament sê wie die erfgenaam is.'], answer: 'Ek stel my broer as eksekuteur aan.', explanation: "'Eksekuteur' is the executor. This sentence appoints him." },
  { prompt: 'Wie ontvang iets uit die testament?', options: ['die getuie', 'die erfgenaam', 'die eksekuteur', 'die redakteur'], answer: 'die erfgenaam', explanation: 'The heir (erfgenaam) receives something.' },
  { prompt: 'Watter sin is presies genoeg vir die testament?', options: ['Ek bemaak R50 000 aan my seun, Thabo.', 'Ek bemaak al my goed aan die kinders.', 'Ek bemaak iets aan iemand daar.', 'Die klub kry al my geld en goed.'], answer: 'Ek bemaak R50 000 aan my seun, Thabo.', explanation: 'It names the amount and the person. The others are vague.' },
  { prompt: 'Wie teken ook die testament?', options: ['die klub', 'die redakteur', 'die getuies', 'die lede'], answer: 'die getuies', explanation: 'The witnesses also sign the will.' },
  { prompt: 'Watter twee dinge kom aan die einde van die testament?', options: ['die titel en die naam van my', 'die erfgename en die hele boedel', 'die klub en die skool se naam', 'die datum en die handtekening'], answer: 'die datum en die handtekening', explanation: 'The end shows the date and the signature.' },
];

const WillTestament = () => (
  <AfrikaansTopic
    title="Testament"
    subtitle="Key words, bemaak sentences, the order of a will, and exact language"
    learnSteps={learnSteps}
    task="gr9-afr-will-testament-t3"
    bank={bank}
    speak="options"
  />
);

export default WillTestament;
