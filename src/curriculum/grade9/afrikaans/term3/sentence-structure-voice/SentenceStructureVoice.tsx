import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Onderwerp, werkwoord, voorwerp',
    content: slide(
      <>
        <Rule>A simple sentence has an <Af>onderwerp</Af> <En>subject</En>, a <Af>werkwoord</Af> <En>verb</En> and often a <Af>voorwerp</Af> <En>object</En>. The subject does the action; the object receives it.</Rule>
        <TaggedBoxes
          items={[{ word: 'Die hond', tag: 'onderwerp' }, { word: 'jaag', tag: 'werkwoord' }, { word: 'die kat', tag: 'voorwerp' }]}
          aria="The sentence Die hond jaag die kat in three boxes: Die hond is the onderwerp (subject), jaag is the werkwoord (verb), die kat is the voorwerp (object)."
        />
        <Worked
          title="Find the parts"
          steps={[
            <><Af>Die hond jaag die kat.</Af> <En>The dog chases the cat.</En> <SpeakButton text="Die hond jaag die kat." /></>,
            <>Who chases? <Af>Die hond</Af>: the subject. What is chased? <Af>die kat</Af>: the object.</>,
          ]}
        />
        <Mistake>Taking the first word group for the object. The subject comes first and does the action; the object is the thing it acts on.</Mistake>
      </>,
    ),
  },
  {
    title: 'Active voice: bedrywende vorm',
    content: slide(
      <>
        <Rule>In the <Af>bedrywende vorm</Af> <En>active voice</En> the subject does the action: subject, verb, object.</Rule>
        <WordBoxes
          words={['Die hond', 'jaag', 'die kat']}
          hot={[0]}
          aria="The sentence Die hond jaag die kat as three boxes, with the subject Die hond highlighted as the one who acts."
        />
        <Worked
          title="Make active sentences"
          steps={[
            <><Af>Die kinders eet die appels.</Af> <En>The children eat the apples.</En></>,
            <>The children do the eating, so the subject acts: active voice.</>,
          ]}
        />
        <Mistake>Looking only at the verb. Always ask who does the action. If the subject does it, the sentence is active.</Mistake>
      </>,
    ),
  },
  {
    title: 'Passive voice: lydende vorm',
    content: slide(
      <>
        <Rule>In the <Af>lydende vorm</Af> <En>passive voice</En> the subject receives the action. Use <Af>word</Af> (or <Af>is</Af> in the past), <Af>deur</Af> <En>by</En> and the <Af>ge-</Af> verb at the end.</Rule>
        <WordBoxes
          words={['Die kat', 'word', 'deur', 'die hond', 'gejaag']}
          hot={[0]}
          aria="The passive sentence Die kat word deur die hond gejaag as five boxes, with the subject Die kat highlighted as the one who receives the action."
        />
        <Worked
          title="Turn active into passive"
          steps={[
            <>Active: <Af>Die hond jaag die kat.</Af></>,
            <>Passive: <Af>Die kat word deur die hond gejaag.</Af> <En>The cat is chased by the dog.</En> <SpeakButton text="Die kat word deur die hond gejaag." /></>,
            <>Past passive: <Af>Die kat is deur die hond gejaag.</Af> <En>The cat was chased by the dog.</En></>,
          ]}
        />
        <Mistake>Leaving out <Af>deur</Af> or the <Af>ge-</Af>: <Af>Die kat word die hond jaag</Af> is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sinsbou: sentence patterns and editing',
    content: slide(
      <>
        <Rule><Af>Sinsbou</Af> is the way a sentence is built. In a statement the verb is in second place. Edit by checking the order of the parts.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['sinsbou', 'structure'], ['werkwoord', 'verb']]}
          aria="Two Afrikaans grammar words with their English meaning: sinsbou is sentence structure (sentence building), werkwoord is verb."
        />
        <Worked
          title="Edit the order"
          steps={[
            <>Wrong: <Af>Vandag die hond jaag die kat.</Af></>,
            <>Right: <Af>Vandag jaag die hond die kat.</Af> <En>Today the dog chases the cat.</En> The verb stays second.</>,
          ]}
        />
        <Mistake>Keeping the subject in front of the verb after a time word. The verb stays second: <Af>Vandag jaag die hond</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>subject</em> of a sentence?</>} answer={<><Af>onderwerp</Af>.</>} />
        <Check question={<>Which word means <em>object</em>?</>} answer={<><Af>voorwerp</Af>.</>} />
        <Check question={<>Which term means <em>active voice</em>?</>} answer={<><Af>bedrywende vorm</Af>.</>} />
        <Check question={<>Which term means <em>passive voice</em>?</>} answer={<><Af>lydende vorm</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'subject' (van 'n sin)?",
    options: ["onderwerp", "werkwoord", "voorwerp", "sinsbou"],
    answer: "onderwerp",
    explanation: "'Onderwerp' is the subject, the doer of the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'verb'?",
    options: ["werkwoord", "onderwerp", "voorwerp", "sinsbou"],
    answer: "werkwoord",
    explanation: "'Werkwoord' means 'verb', the action word.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'object'?",
    options: ["voorwerp", "onderwerp", "werkwoord", "sinsbou"],
    answer: "voorwerp",
    explanation: "'Voorwerp' means 'object', the receiver of the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'active voice'?",
    options: ["bedrywende vorm", "lydende vorm", "sinsbou", "werkwoord"],
    answer: "bedrywende vorm",
    explanation: "'Bedrywende vorm' means 'active voice': the subject does the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'passive voice'?",
    options: ["lydende vorm", "bedrywende vorm", "sinsbou", "onderwerp"],
    answer: "lydende vorm",
    explanation: "'Lydende vorm' means 'passive voice': the subject receives the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'sentence structure'?",
    options: ["sinsbou", "voorwerp", "werkwoord", "onderwerp"],
    answer: "sinsbou",
    explanation: "'Sinsbou' means 'sentence structure'.",
  },
];

export { bank };

const SentenceStructureVoice = () => (
  <AfrikaansTopic
    title="Sinstruktuur & Stem"
    subtitle="Sentence patterns, active/passive voice, and editing"
    learnSteps={learnSteps}
    task="gr9-sentence-structure-voice-t3"
    bank={bank}
    speak="options"
  />
);

export default SentenceStructureVoice;
