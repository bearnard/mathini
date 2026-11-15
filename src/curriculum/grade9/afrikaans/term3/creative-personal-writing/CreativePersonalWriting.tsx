import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, StoryArc } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Story words: karakter, storie, konflik',
    content: slide(
      <>
        <Rule>A <Af>storie</Af> <En>story</En> has <Af>karakters</Af> <En>characters</En> and a <Af>konflik</Af> <En>conflict, the problem</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['karakter', 'character'], ['storie', 'story'], ['konflik', 'conflict']]}
          aria="Three Afrikaans story words with their English meaning: karakter is character, storie is story, konflik is conflict."
        />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Amina</Af> is the <Af>karakter</Af>. <SpeakButton text="karakter, storie, konflik" /></>,
            <>Her friend falls into the dam. That problem is the <Af>konflik</Af>. The whole telling is the <Af>storie</Af>.</>,
          ]}
        />
        <Mistake>Calling the setting or the title the conflict. The <Af>konflik</Af> is the problem the characters must solve.</Mistake>
      </>,
    ),
  },
  {
    title: 'More words: tema, toneel, resensie',
    content: slide(
      <>
        <Rule>The <Af>tema</Af> <En>theme</En> is the big message. A <Af>toneel</Af> is a scene on a stage. A <Af>resensie</Af> is a review.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['tema', 'theme'], ['toneel', 'scene / stage'], ['resensie', 'review']]}
          aria="Three Afrikaans words with their English meaning: tema is theme, toneel is scene or stage, resensie is review."
        />
        <Worked
          title="Use them"
          steps={[
            <><Af>Die tema van die storie is vriendskap.</Af> <En>The theme of the story is friendship.</En> <SpeakButton text="Die tema van die storie is vriendskap." /></>,
            <><Af>In die tweede toneel praat die twee karakters.</Af> <En>In the second scene the two characters talk.</En></>,
          ]}
        />
        <Mistake>Writing the theme as a detail, such as a name. The <Af>tema</Af> is an idea like <Af>vriendskap</Af> <En>friendship</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'The narrative essay',
    content: slide(
      <>
        <Rule>A narrative essay tells a story in order: <Af>Begin</Af>, <Af>Konflik</Af>, <Af>Hoogtepunt</Af> and <Af>Einde</Af>. Use the past tense and keep it the same.</Rule>
        <StoryArc
          points={['Begin', 'Konflik', 'Hoogtepunt', 'Einde']}
          aria="A story drawn as a hill with four points: Begin, Konflik (problem), Hoogtepunt (high point), Einde (end)."
        />
        <Worked
          title="Plan the story"
          steps={[
            <>Begin: <Af>Verlede Saterdag het ons na die strand gegaan.</Af> <En>Last Saturday we went to the beach.</En></>,
            <>Then the problem, the high point and the end, all in the past tense.</>,
          ]}
        />
        <Mistake>Mixing tenses, or skipping the problem. Without a <Af>konflik</Af> there is no story to tell.</Mistake>
      </>,
    ),
  },
  {
    title: 'Descriptive, reflective and informal writing',
    content: slide(
      <>
        <Rule>A descriptive essay uses the senses. A reflective essay says what you learnt. An informal letter uses a friendly register, such as <Af>Liewe Sara</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['beskrywend', 'sintuie'], ['besinnend', 'geleer'], ['informele brief', 'Liewe']]}
          aria="Three kinds of personal writing and their key feature: beskrywend uses the sintuie (senses), besinnend says what you geleer (learnt), an informele brief starts with Liewe."
        />
        <Worked
          title="Spot the feature"
          steps={[
            <>Descriptive: <Af>Die lug het vars geruik.</Af> <En>The air smelled fresh.</En></>,
            <>Reflective: <Af>Ek het geleer dat vriendskap belangrik is.</Af> <En>I learnt that friendship is important.</En></>,
          ]}
        />
        <Mistake>Using a formal greeting in an informal letter, or only listing events in a reflective essay. Say what you learnt.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a review',
    content: slide(
      <>
        <Rule>A <Af>resensie</Af> gives your opinion with reasons about a book or film. It has an opinion, a reason or example, and a recommendation.</Rule>
        <OrderTiles
          tiles={['Mening', 'Rede', 'Aanbeveling']}
          aria="Three parts of a review in order: Mening (opinion), Rede (reason), Aanbeveling (recommendation)."
        />
        <Worked
          title="A short review"
          steps={[
            <><Af>Ek het die storie geniet omdat dit spannend was.</Af> <En>I enjoyed the story because it was exciting.</En></>,
            <><Af>Ek beveel dit aan vir Graad 9-leerders.</Af> <En>I recommend it to Grade 9 learners.</En> <SpeakButton text="Ek beveel dit aan vir Graad 9-leerders." /></>,
          ]}
        />
        <Mistake>Retelling the whole story. A review gives your opinion with reasons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>character</em>?</>} answer={<><Af>karakter</Af>.</>} />
        <Check question={<>Which word means <em>conflict</em>?</>} answer={<><Af>konflik</Af>.</>} />
        <Check question={<>Which word means <em>review</em>?</>} answer={<><Af>resensie</Af>.</>} />
        <Check question={<>Which word means <em>scene / stage</em>?</>} answer={<><Af>toneel</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'character'?",
    options: ["karakter", "tema", "konflik", "resensie"],
    answer: "karakter",
    explanation: "'Karakter' means 'character', a person in a story.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'theme'?",
    options: ["tema", "storie", "toneel", "konflik"],
    answer: "tema",
    explanation: "'Tema' means 'theme', the main message of a text.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'conflict'?",
    options: ["konflik", "karakter", "storie", "resensie"],
    answer: "konflik",
    explanation: "'Konflik' means 'conflict', the problem or struggle in a story.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'story'?",
    options: ["storie", "tema", "resensie", "toneel"],
    answer: "storie",
    explanation: "'Storie' means 'story'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'review'?",
    options: ["resensie", "karakter", "tema", "toneel"],
    answer: "resensie",
    explanation: "'Resensie' means 'review', a text that gives an opinion with reasons.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'scene / stage'?",
    options: ["toneel", "konflik", "storie", "karakter"],
    answer: "toneel",
    explanation: "'Toneel' means 'scene' or 'stage'.",
  },
];

export { bank };

const CreativePersonalWriting = () => (
  <AfrikaansTopic
    title="Kreatiewe & Persoonlike Skryfwerk"
    subtitle="Narrative, descriptive, reflective essays, and reviews"
    learnSteps={learnSteps}
    task="gr9-creative-personal-writing-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativePersonalWriting;
