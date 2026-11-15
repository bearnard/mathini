import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'en: adding an idea',
    content: slide(
      <>
        <Rule>A <Af>voegwoord</Af> <En>conjunction</En> joins words or sentences. <Af>en</Af> means <em>and</em>. It adds a second, similar idea.</Rule>
        <WordBoxes
          words={['Ek', 'lees', 'en', 'ek', 'skryf']}
          hot={[2]}
          aria="The sentence Ek lees en ek skryf as five boxes, with the joining word en highlighted between the two ideas."
        />
        <Worked
          title="Join two ideas with en"
          steps={[
            <><Af>Sy sing.</Af> <Af>Sy dans.</Af></>,
            <>Join them: <Af>Sy sing en sy dans.</Af> <En>She sings and she dances.</En> <SpeakButton text="Sy sing en sy dans." /></>,
            <><Af>Hulle lag en hulle speel.</Af> <En>They laugh and they play.</En></>,
          ]}
        />
        <Mistake>Using <Af>maar</Af> for two similar ideas. <Af>Hulle lag maar hulle speel</Af> is wrong. Use <Af>en</Af> to add.</Mistake>
      </>,
    ),
  },
  {
    title: 'maar: showing a contrast',
    content: slide(
      <>
        <Rule><Af>maar</Af> means <em>but</em>. It joins two ideas that are different, or that do not go together as you would expect.</Rule>
        <WordBoxes
          words={['Hy', 'is', 'klein', 'maar', 'sterk']}
          hot={[3]}
          aria="The sentence Hy is klein maar sterk as five boxes, with the joining word maar highlighted between small and strong."
        />
        <Worked
          title="Join two ideas with maar"
          steps={[
            <><Af>Hy is klein, maar hy is sterk.</Af> <En>He is small, but he is strong.</En> <SpeakButton text="Hy is klein, maar hy is sterk." /></>,
            <><Af>Ek hou van sokker, maar ek speel vandag nie.</Af> <En>I like soccer, but I am not playing today.</En></>,
          ]}
        />
        <Mistake>Using <Af>en</Af> when the ideas clash. <Af>Hy is klein en hy is sterk</Af> misses the surprise. Say <Af>Hy is klein, maar hy is sterk</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'want and omdat: giving a reason',
    content: slide(
      <>
        <Rule>Both <Af>want</Af> and <Af>omdat</Af> mean <em>because</em>. After <Af>want</Af> the word order stays normal. After <Af>omdat</Af> the verb goes to the end of its part.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['want', 'because'], ['omdat', 'because']]}
          aria="Two Afrikaans joining words that both mean because: want and omdat."
        />
        <Worked
          title="Give the reason"
          steps={[
            <><Af>Ons bly binne, want dit reën.</Af> <En>We stay inside because it rains.</En> <SpeakButton text="Ons bly binne, want dit reën." /></>,
            <><Af>Ek dra 'n jas, want dit is koud.</Af> <En>I wear a coat because it is cold.</En> The verb <Af>is</Af> keeps its place.</>,
            <><Af>Ek is moeg omdat ek hard gewerk het.</Af> <En>I am tired because I worked hard.</En> The verb <Af>het</Af> goes last.</>,
          ]}
        />
        <Mistake>Using <Af>of</Af> or <Af>en</Af> for a reason. <Af>Ons bly binne, en dit reën</Af> does not say why. A reason needs <Af>want</Af> or <Af>omdat</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'of: a choice, and picking the joiner',
    content: slide(
      <>
        <Rule><Af>of</Af> means <em>or</em>. It offers a choice. Ask what the two ideas do: add (<Af>en</Af>), clash (<Af>maar</Af>), give a reason (<Af>want</Af>) or choose (<Af>of</Af>).</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['en', 'and'], ['maar', 'but'], ['of', 'or']]}
          aria="Three Afrikaans joining words with their English meaning: en is and, maar is but, of is or."
        />
        <Worked
          title="Choose the joiner"
          steps={[
            <><Af>Wil jy appels of pere hê?</Af> <En>Do you want apples or pears?</En> A choice, so <Af>of</Af>. <SpeakButton text="Wil jy appels of pere hê?" /></>,
            <><Af>Kom jy vandag of môre?</Af> <En>Are you coming today or tomorrow?</En> Again a choice: <Af>of</Af>.</>,
          ]}
        />
        <Mistake>Using <Af>en</Af> when you offer a choice. <Af>Kom jy vandag en môre?</Af> asks about both days. For either one, write <Af>Kom jy vandag of môre?</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Fill in: <Af>Sy sing ___ sy dans.</Af> (and)</>} answer={<><Af>en</Af>.</>} />
        <Check question={<>Fill in: <Af>Hy is klein, ___ hy is sterk.</Af> (but)</>} answer={<><Af>maar</Af>.</>} />
        <Check question={<>Fill in: <Af>Ons bly binne, ___ dit reën.</Af> (because)</>} answer={<><Af>want</Af>.</>} />
        <Check question={<>Fill in: <Af>Kom jy vandag ___ môre?</Af> (or)</>} answer={<><Af>of</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Ek lees ___ ek skryf. (and)',
    options: ['en', 'maar', 'want', 'of'],
    answer: 'en',
    explanation: "'en' means 'and'.",
  },
  {
    prompt: 'Hy is klein, ___ hy is sterk. (but)',
    options: ['want', 'maar', 'en', 'of'],
    answer: 'maar',
    explanation: "'maar' means 'but'.",
  },
  {
    prompt: 'Ons bly binne, ___ dit reën. (because)',
    options: ['of', 'en', 'want', 'maar'],
    answer: 'want',
    explanation: "'want' gives a reason and means 'because'.",
  },
  {
    prompt: 'Wil jy appels ___ pere hê? (or)',
    options: ['maar', 'of', 'want', 'en'],
    answer: 'of',
    explanation: "'of' means 'or'.",
  },
  {
    prompt: 'Sy sing ___ sy dans. (and)',
    options: ['en', 'want', 'maar', 'of'],
    answer: 'en',
    explanation: "Use 'en' to add another action.",
  },
  {
    prompt: 'Ek hou van sokker, ___ ek speel vandag nie. (but)',
    options: ['of', 'maar', 'en', 'want'],
    answer: 'maar',
    explanation: "Use 'maar' to show contrast.",
  },
  {
    prompt: "Ek dra 'n jas, ___ dit is koud. (because)",
    options: ['want', 'en', 'of', 'maar'],
    answer: 'want',
    explanation: "Use 'want' before a simple reason.",
  },
  {
    prompt: 'Kom jy vandag ___ môre? (or)',
    options: ['en', 'maar', 'of', 'want'],
    answer: 'of',
    explanation: "Use 'of' when there is a choice.",
  },
  {
    prompt: 'Hulle lag ___ hulle speel. (and)',
    options: ['maar', 'want', 'en', 'of'],
    answer: 'en',
    explanation: "'en' joins two similar ideas.",
  },
];

const Voegwoorde = () => (
  <AfrikaansTopic title="Voegwoorde" subtitle="Joining words (conjunctions)" learnSteps={learnSteps} task="voegwoorde" bank={bank} speak="options" />
);

export default Voegwoorde;
