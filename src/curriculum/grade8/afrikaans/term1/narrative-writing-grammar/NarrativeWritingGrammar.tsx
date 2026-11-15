import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, StoryArc, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan the story: inleiding first',
    content: slide(
      <>
        <Rule>A story has a beginning, a problem, a high point and an end. The <Af>Inleiding</Af> <En>introduction</En> introduces the character and the place.</Rule>
        <StoryArc
          points={['Inleiding', 'Probleem', 'Hoogtepunt', 'Einde']}
          aria="A story drawn as a hill with four points: Inleiding (introduction), Probleem (problem), Hoogtepunt (high point), Einde (end)."
        />
        <Worked
          title="Open with action"
          steps={[
            <><Af>Toe die klok lui, hardloop ek na die saal.</Af> <En>When the bell rang, I ran to the hall.</En> <SpeakButton text="Toe die klok lui, hardloop ek na die saal." /></>,
            <>This opening shows the character (<Af>ek</Af>), the place (<Af>die saal</Af>) and an action.</>,
          ]}
        />
        <Mistake>Opening with a dull fact such as <Af>Die teks gebruik swart ink</Af>. Start with the scene, the character or an action.</Mistake>
      </>,
    ),
  },
  {
    title: 'Paragraphs and punctuation',
    content: slide(
      <>
        <Rule>Paragraphs matter because <Af>Hulle organiseer idees en gebeure</Af> <En>they organise ideas and events</En>. Punctuation is there <Af>Om betekenis duidelik te maak</Af> <En>to make meaning clear</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['paragraaf', 'idees'], ['leesteken', 'betekenis']]}
          aria="Two writing tools and what they do: a paragraaf (paragraph) organises idees (ideas), a leesteken (punctuation mark) makes betekenis (meaning) clear."
        />
        <Worked
          title="Use both"
          steps={[
            <>New idea or event: start a new paragraph.</>,
            <><Af>Ek hou van lees, skryf en teken.</Af> <En>I like reading, writing and drawing.</En> The commas show the three items.</>,
          ]}
        />
        <Mistake>Writing one long block with no paragraphs, or leaving out punctuation. The reader can no longer follow the events or the meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keep the tense the same',
    content: slide(
      <>
        <Rule>Choose one tense and keep it. A story about yesterday uses the past (<Af>was</Af>, <Af>het</Af>). A story told as it happens uses the present.</Rule>
        <WordBoxes
          words={['Gister', 'was', 'ons', 'laat']}
          hot={[1]}
          aria="The sentence Gister was ons laat as four boxes, with the past-tense verb was highlighted."
        />
        <Worked
          title="Check the tense"
          steps={[
            <><Af>Gister was ons laat by die huis.</Af> <En>Yesterday we were late at home.</En> <Af>Gister</Af> asks for the past: <Af>was</Af>.</>,
            <>Present: <Af>Ek stap skool toe en groet my vriend.</Af> <En>I walk to school and greet my friend.</En> Both verbs are present.</>,
          ]}
        />
        <Mistake>Mixing tenses in one sentence, such as <Af>Ek stap skool toe en het my vriend gegroet</Af>. Keep both verbs in the same tense.</Mistake>
      </>,
    ),
  },
  {
    title: 'Describe with adjectives',
    content: slide(
      <>
        <Rule>An adjective makes the picture clearer. After <Af>'n</Af> many adjectives take an <Af>-e</Af> before the noun.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['spannend', 'spannende'], ['vriendelik', 'vriendelike'], ['koud', 'koue']]}
          aria="Three adjectives and the form used before a noun: spannend becomes spannende, vriendelik becomes vriendelike, koud becomes koue."
        />
        <Worked
          title="Choose the form"
          steps={[
            <><Af>Dit was 'n spannende dag.</Af> <En>It was an exciting day.</En> <SpeakButton text="Dit was 'n spannende dag." /></>,
            <><Af>'n vriendelike onderwyser</Af> <En>a friendly teacher</En>, <Af>'n koue oggend</Af> <En>a cold morning</En>.</>,
          ]}
        />
        <Mistake>Leaving the adjective bare before the noun: <Af>Dit was 'n spannend dag</Af> is wrong. Write <Af>spannende</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit for clarity',
    content: slide(
      <>
        <Rule>Good editing is to <Af>Verbeter spelling en sinsbou in elke paragraaf</Af> <En>improve spelling and sentence structure in every paragraph</En>.</Rule>
        <OrderTiles
          tiles={['Skryf', 'Lees', 'Verbeter']}
          aria="Three steps in order: Skryf (write), Lees (read it again), Verbeter (improve spelling and sentences)."
        />
        <Worked
          title="Edit one paragraph"
          steps={[
            <>Read the paragraph aloud and listen for sentences that do not flow.</>,
            <>Fix the spelling, the word order and the punctuation. Then go to the next paragraph.</>,
          ]}
        />
        <Mistake>Editing only the first paragraph, or only checking the spelling. Check every paragraph, spelling and sentences.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which part of a story introduces the character and the place?</>} answer={<><Af>Inleiding</Af>.</>} />
        <Check question={<>Fill in: <Af>Gister ___ ons laat by die huis.</Af></>} answer={<><Af>was</Af>.</>} />
        <Check question={<>Fill in: <Af>Dit was 'n ___ dag.</Af> (exciting)</>} answer={<><Af>spannende</Af>.</>} />
        <Check question={<>Why are paragraphs important in a story?</>} answer={<><Af>Hulle organiseer idees en gebeure</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n storie stel die karakter en plek bekend?",
    options: ['Inleiding', 'Konflik', 'Klimaks', 'Slotnota'],
    answer: 'Inleiding',
    explanation: 'The introduction sets up setting and characters.',
  },
  {
    prompt: "Kies die beste narratiewe openingsin.",
    options: ['Toe die klok lui, hardloop ek na die saal.', 'Die saal is groot en blou en het baie stoele.', 'Ek hou van skryfwerk en lees graag stories.', 'Daar is drie vensters en twee deure in die saal.'],
    answer: 'Toe die klok lui, hardloop ek na die saal.',
    explanation: 'It starts with action and context.',
  },
  {
    prompt: "Wat is die hoofdoel van leestekens in 'n opstel?",
    options: ['Om betekenis duidelik te maak', 'Om sinne langer te maak', 'Om die storie te verkort', 'Om werkwoorde te vervang'],
    answer: 'Om betekenis duidelik te maak',
    explanation: 'Punctuation guides reading and meaning.',
  },
  {
    prompt: "Kies die korrekte tydsvorm: 'Gister ___ ons laat by die huis.'",
    options: ['was', 'is', 'sal wees', 'wees'],
    answer: 'was',
    explanation: "'Gister' requires past tense.",
  },
  {
    prompt: "Watter opsie wys goeie redigering?",
    options: ['Verbeter spelling en sinsbou in elke paragraaf', 'Voeg net meer uitroeptekens by elke sin by', 'Verander net die titel van die opstel', 'Skryf sonder leestekens om tyd te spaar'],
    answer: 'Verbeter spelling en sinsbou in elke paragraaf',
    explanation: 'Editing focuses on language accuracy and clarity.',
  },
  {
    prompt: "Kies die beste byvoeglike naamwoord in: 'Dit was 'n ___ dag.'",
    options: ['spannende', 'spanning', 'spannendheid', 'span'],
    answer: 'spannende',
    explanation: 'The attributive adjective form is needed here.',
  },
  {
    prompt: "Waarom is paragrawe belangrik in narratiewe skryfwerk?",
    options: ['Hulle organiseer idees en gebeure', 'Hulle vervang leestekens', 'Hulle maak sinne onnodig', 'Hulle wys die boekprys'],
    answer: 'Hulle organiseer idees en gebeure',
    explanation: 'Paragraphing helps flow and readability.',
  },
  {
    prompt: "Watter sin toon konsekwente teenwoordige tyd?",
    options: ['Ek stap skool toe en groet my vriend.', 'Ek stap skool toe en het my vriend gegroet.', 'Ek sal stap en groet gister.', 'Ek het stap en groet nou.'],
    answer: 'Ek stap skool toe en groet my vriend.',
    explanation: 'Both verbs are in present tense.',
  },
];

export { bank };

const NarrativeWritingGrammar = () => (
  <AfrikaansTopic
    title="Narratiewe Skryfwerk & Grammatika"
    subtitle="Essay flow, grammar control and editing practice"
    learnSteps={learnSteps}
    task="gr8-narrative-writing-grammar-t1"
    bank={bank}
    speak="options"
  />
);

export default NarrativeWritingGrammar;
