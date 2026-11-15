import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Joining words: en, maar, daarom',
    content: slide(
      <>
        <Rule>A <Af>voegwoord</Af> <En>conjunction</En> joins ideas. <Af>en</Af> adds, <Af>maar</Af> shows contrast and <Af>daarom</Af> shows a result.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['en', 'and'], ['maar', 'but'], ['daarom', 'therefore']]}
          aria="Three Afrikaans joining words with their English meaning: en is and, maar is but, daarom is therefore."
        />
        <Worked
          title="Join the ideas"
          steps={[
            <><Af>Ek lees en ek skryf.</Af> <En>I read and I write.</En></>,
            <><Af>Hy is klein, maar hy is sterk.</Af> <En>He is small, but he is strong.</En></>,
            <><Af>Hy het hard gewerk; daarom het hy geslaag.</Af> <En>He worked hard; therefore he passed.</En> <SpeakButton text="Hy het hard gewerk; daarom het hy geslaag." /></>,
          ]}
        />
        <Mistake>Using <Af>maar</Af> to add a similar idea, or <Af>en</Af> for a result. After <Af>daarom</Af> the verb comes before the subject.</Mistake>
      </>,
    ),
  },
  {
    title: 'terwyl, want, omdat',
    content: slide(
      <>
        <Rule><Af>terwyl</Af> <En>while</En> joins two things that happen at the same time. <Af>want</Af> and <Af>omdat</Af> both give a reason.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['terwyl', 'while'], ['want', 'because'], ['omdat', 'because']]}
          aria="Three Afrikaans joining words with their English meaning: terwyl is while, want is because, omdat is because."
        />
        <Worked
          title="Choose the joiner"
          steps={[
            <><Af>Ek lees terwyl sy skryf.</Af> <En>I read while she writes.</En> <SpeakButton text="Ek lees terwyl sy skryf." /></>,
            <><Af>Ek is moeg, want ek het hard gewerk.</Af> <En>I am tired because I worked hard.</En></>,
            <><Af>Ek is moeg omdat ek hard gewerk het.</Af> After <Af>omdat</Af> the verb goes to the end.</>,
          ]}
        />
        <Mistake>Using <Af>terwyl</Af> for a reason. <Af>terwyl</Af> is about time (while), not cause. For a reason use <Af>want</Af> or <Af>omdat</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech repeats the exact words in quotation marks. Indirect speech reports them with <Af>dat</Af> and changes the pronoun.</Rule>
        <TaggedBoxes
          items={[{ word: "Sy sê: 'Ek leer nou.'", tag: 'direk' }, { word: 'Sy sê dat sy nou leer.', tag: 'indirek' }]}
          aria="The same words in two forms: direct speech Sy sê: Ek leer nou in quotation marks, and indirect speech Sy sê dat sy nou leer."
        />
        <Worked
          title="Report the speech"
          steps={[
            <><Af>Sy sê: 'Ek leer nou.'</Af> becomes <Af>Sy sê dat sy nou leer.</Af> <SpeakButton text="Sy sê dat sy nou leer." /></>,
            <><Af>Mnr. Naidoo sê: 'Julle moet stil wees.'</Af> becomes <Af>Mnr. Naidoo sê dat hulle stil moet wees.</Af></>,
          ]}
        />
        <Mistake>Keeping the quotation marks or the old pronoun. <Af>Sy sê dat ek nou leer</Af> is wrong: the speaker is <Af>sy</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Idioms: sayings with a different meaning',
    content: slide(
      <>
        <Rule>An <Af>idioom</Af> is a fixed saying. Its meaning is not word for word. Learn each one as a whole.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['kat uit die boom kyk', 'wag en kyk'], ['dit reën pypestele', 'dit reën hard']]}
          aria="Two idioms and their meaning: die kat uit die boom kyk means to wait and see, dit reën pypestele means it rains hard."
        />
        <Worked
          title="Read the idiom"
          steps={[
            <><Af>Die kat uit die boom kyk</Af> = <Af>eers wag en kyk</Af> <En>to wait and see first</En>. <SpeakButton text="Die kat uit die boom kyk" /></>,
            <><Af>Dit reën pypestele.</Af> <En>It is pouring with rain.</En> There are no real pipe stems.</>,
          ]}
        />
        <Mistake>Taking an idiom literally. Ask what the whole saying means, not what each word means.</Mistake>
      </>,
    ),
  },
  {
    title: 'Language editing: fix the verb',
    content: slide(
      <>
        <Rule>When you edit, check the joiner, the verb position and the tense. After <Af>omdat</Af> the verb goes to the end.</Rule>
        <WordBoxes
          words={['omdat', 'ek', 'hard', 'gewerk', 'het']}
          hot={[4]}
          aria="The words omdat ek hard gewerk het as five boxes, with the verb het highlighted at the end."
        />
        <Worked
          title="Edit the sentence"
          steps={[
            <>Wrong: <Af>Ek is moeg omdat ek het hard gewerk.</Af></>,
            <>Right: <Af>Ek is moeg omdat ek hard gewerk het.</Af> <En>I am tired because I worked hard.</En></>,
          ]}
        />
        <Mistake>Leaving the verb in second place after <Af>omdat</Af>. With <Af>want</Af> the normal order stays: <Af>want ek het hard gewerk</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>but</em>?</>} answer={<><Af>maar</Af>.</>} />
        <Check question={<>Which word means <em>therefore</em>?</>} answer={<><Af>daarom</Af>.</>} />
        <Check question={<>Which word means <em>while</em>?</>} answer={<><Af>terwyl</Af>.</>} />
        <Check question={<>Which word gives a reason, like <Af>omdat</Af>?</>} answer={<><Af>want</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'and'?",
    options: ["en", "maar", "daarom", "terwyl"],
    answer: "en",
    explanation: "'En' means 'and' and joins two similar ideas.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'but'?",
    options: ["maar", "en", "daarom", "want"],
    answer: "maar",
    explanation: "'Maar' means 'but' and shows a contrast.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'therefore'?",
    options: ["daarom", "en", "maar", "terwyl"],
    answer: "daarom",
    explanation: "'Daarom' means 'therefore' and shows a result.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'while'?",
    options: ["terwyl", "daarom", "maar", "en"],
    answer: "terwyl",
    explanation: "'Terwyl' means 'while' and links two things happening at the same time.",
  },
  {
    prompt: "Watter woord gee, soos 'omdat', 'n rede?",
    options: ["want", "maar", "en", "terwyl"],
    answer: "want",
    explanation: "'Want' (because / for) gives a reason, like 'omdat'.",
  },
  {
    prompt: "Watter woord gee, soos 'want', 'n rede?",
    options: ["omdat", "daarom", "maar", "terwyl"],
    answer: "omdat",
    explanation: "'Omdat' (because) gives a reason, like 'want'.",
  },
  {
    prompt: "Kies die korrekte indirekte rede: Sy sê: 'Ek leer nou.'",
    options: ["Sy sê dat sy nou leer.", "Sy sê dat ek nou leer.", "Sy sê: dat sy nou leer.", "Sy sê sy leer nou ek."],
    answer: "Sy sê dat sy nou leer.",
    explanation: "Pronoun changes, dat is used.",
  },
  {
    prompt: "Watter woord wys twee dinge wat gelyktydig gebeur?",
    options: ["terwyl", "want", "omdat", "daarom"],
    answer: "terwyl",
    explanation: "terwyl means while.",
  },
  {
    prompt: "Watter sin is korrek?",
    options: ["Ek is moeg omdat ek hard gewerk het.", "Ek is moeg omdat ek het hard gewerk.", "Ek is moeg omdat het ek hard gewerk.", "Ek is moeg omdat ek hard het gewerk."],
    answer: "Ek is moeg omdat ek hard gewerk het.",
    explanation: "The verb goes to the end after omdat.",
  },
  {
    prompt: "Watter voegwoord pas? 'Hy het hard gewerk; ___ het hy geslaag.'",
    options: ["daarom", "maar", "terwyl", "of"],
    answer: "daarom",
    explanation: "daarom shows a result.",
  },
  {
    prompt: "Wat beteken die idioom 'Die kat uit die boom kyk'?",
    options: ["eers wag en kyk", "'n kat in 'n boom soek", "baie hard hardloop", "baie en hard praat"],
    answer: "eers wag en kyk",
    explanation: "Wait and see first.",
  },
  {
    prompt: "Watter voegwoord wys 'n teenstelling?",
    options: ["maar", "en", "want", "daarom"],
    answer: "maar",
    explanation: "maar shows contrast.",
  },
];

export { bank };

const GrammarReporting = () => (
  <AfrikaansTopic
    title="Grammatika vir Verslagdoening"
    subtitle="Direct/indirect speech, conjunctions, and language editing"
    learnSteps={learnSteps}
    task="gr9-grammar-reporting-t2"
    bank={bank}
    speak="options"
  />
);

export default GrammarReporting;
