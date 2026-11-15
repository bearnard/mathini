import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Revision words: begrip, woordeskat, hersiening',
    content: slide(
      <>
        <Rule>Three words for the exam: <Af>begrip</Af> <En>comprehension</En>, <Af>woordeskat</Af> <En>vocabulary</En> and <Af>hersiening</Af> <En>revision</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['begrip', 'comprehension'], ['woordeskat', 'vocabulary'], ['hersiening', 'revision']]}
          aria="Three Afrikaans exam words with their English meaning: begrip is comprehension, woordeskat is vocabulary, hersiening is revision."
        />
        <Worked
          title="Use the words"
          steps={[
            <><Af>Ek doen 'n begriptoets.</Af> <En>I do a comprehension test.</En> <SpeakButton text="Ek doen 'n begriptoets." /></>,
            <><Af>My woordeskat word groter deur hersiening.</Af> <En>My vocabulary grows through revision.</En></>,
          ]}
        />
        <Mistake>Revising only reading and forgetting vocabulary. A strong <Af>woordeskat</Af> helps you in every paper.</Mistake>
      </>,
    ),
  },
  {
    title: 'Three text types: gedig, brief, advertensie',
    content: slide(
      <>
        <Rule>Know the main features of each text type: a <Af>gedig</Af> <En>poem</En> has rhyme and imagery, a <Af>brief</Af> <En>letter</En> has a format, an <Af>advertensie</Af> <En>advertisement</En> wants to persuade.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['gedig', 'rym'], ['brief', 'formaat'], ['advertensie', 'oortuig']]}
          aria="Three text types and their key feature: a gedig (poem) has rym (rhyme), a brief (letter) has a formaat (format), an advertensie (advertisement) tries to oortuig (persuade)."
        />
        <Worked
          title="Match the feature"
          steps={[
            <>Rhyme and imagery: a <Af>gedig</Af>. Greeting, subject, closing: a <Af>brief</Af>.</>,
            <>Slogan, picture and a call to action: an <Af>advertensie</Af>.</>,
          ]}
        />
        <Mistake>Using the features of one text type in another, such as a slogan in a formal letter.</Mistake>
      </>,
    ),
  },
  {
    title: 'A comprehension strategy',
    content: slide(
      <>
        <Rule>For a <Af>begriptoets</Af> read the text first, read the questions, then find the answer in the text and support it.</Rule>
        <OrderTiles
          tiles={['Lees', 'Vrae', 'Soek', 'Bewys']}
          aria="Four steps in order: Lees (read the text), Vrae (read the questions), Soek (find the answer), Bewys (support it from the text)."
        />
        <Worked
          title="Answer with proof"
          steps={[
            <>Question word first: <Af>Wie?</Af> a person, <Af>Waar?</Af> a place, <Af>Hoekom?</Af> a reason.</>,
            <>Then find the words in the text and use them in your answer.</>,
          ]}
        />
        <Mistake>Answering from memory or opinion. Always go back to the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summary and mixed revision',
    content: slide(
      <>
        <Rule>A summary gives the main ideas briefly, in your own words. For revision, mix texts and skills: a poem, a letter, an advertisement and a comprehension in one session.</Rule>
        <OrderTiles
          tiles={['Lees', 'Hoofidees', 'Eie woorde']}
          aria="Three summary steps in order: Lees (read), Hoofidees (find the main ideas), Eie woorde (write them in your own words)."
        />
        <Worked
          title="A mixed session"
          steps={[
            <>One poem question, one letter task, one advertisement and one comprehension.</>,
            <>Check your answers and note what went wrong.</>,
          ]}
        />
        <Mistake>Repeating one kind of exercise. The exam mixes all the genres and skills.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>comprehension</em>?</>} answer={<><Af>begrip</Af>.</>} />
        <Check question={<>Which word means <em>vocabulary</em>?</>} answer={<><Af>woordeskat</Af>.</>} />
        <Check question={<>Which word means <em>poem</em>?</>} answer={<><Af>gedig</Af>.</>} />
        <Check question={<>Which word means <em>advertisement</em>?</>} answer={<><Af>advertensie</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'comprehension'?",
    options: ["begrip", "gedig", "brief", "hersiening"],
    answer: "begrip",
    explanation: "'Begrip' means 'comprehension', understanding a text.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'vocabulary'?",
    options: ["woordeskat", "advertensie", "hersiening", "begrip"],
    answer: "woordeskat",
    explanation: "'Woordeskat' means 'vocabulary'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'poem'?",
    options: ["gedig", "brief", "begrip", "woordeskat"],
    answer: "gedig",
    explanation: "'Gedig' means 'poem'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'letter'?",
    options: ["brief", "gedig", "advertensie", "hersiening"],
    answer: "brief",
    explanation: "'Brief' means 'letter'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'advertisement'?",
    options: ["advertensie", "gedig", "brief", "woordeskat"],
    answer: "advertensie",
    explanation: "'Advertensie' means 'advertisement'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'revision'?",
    options: ["hersiening", "begrip", "woordeskat", "gedig"],
    answer: "hersiening",
    explanation: "'Hersiening' means 'revision', going over work again before an exam.",
  },
];

export { bank };

const SynopticRevision = () => (
  <AfrikaansTopic
    title="Sinoptiese Hersiening"
    subtitle="Full curriculum review, mixed-genre texts, and comprehension strategies"
    learnSteps={learnSteps}
    task="gr9-synoptic-revision-t4"
    bank={bank}
    speak="options"
  />
);

export default SynopticRevision;
