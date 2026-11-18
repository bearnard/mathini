import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Vergelyking: die woord soos",
    content: slide(
      <>
        <Rule>A <Af>vergelyking</Af> <En>simile</En> compares two things with the word <Af>soos</Af> <En>like</En>. It is a kind of <Af>beeldspraak</Af> <En>figurative language</En>. In a <Af>gedig</Af> <En>poem</En> each line is a <Af>reël</Af> <En>line</En>.</Rule>
        <PoemBox label={"Gedig A"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die son is 'n goue appel in die lug,", "die wind fluister saggies in die gras,", "en my hart is so lig soos 'n veer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The sun is a golden apple in the sky, the wind whispers softly in the grass, and my heart is as light as a feather.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["vergelyking", "simile"], ["soos", "like"], ["reël", "line"]]} aria={"Afrikaans words with their English meaning: vergelyking is simile, soos is like, reël is line."} />
        <Worked
          title={"Read line 3"}
          steps={[
            <><Af>en my hart is so lig soos 'n veer</Af> <En>and my heart is as light as a feather</En> <SpeakButton text="en my hart is so lig soos 'n veer" /></>,
            <><Af>Die hart en 'n veer word vergelyk.</Af> <En>The heart and a feather are compared.</En></>,
            <><Af>Die woord soos wys dit is 'n vergelyking.</Af> <En>The word soos shows that it is a simile.</En></>,
          ]}
        />
        <Mistake>Saying that a <Af>vergelyking</Af> has no comparing word. It always has <Af>soos</Af> or a similar word.</Mistake>
      </>,
    ),
  },
  {
    title: "Metafoor en personifikasie",
    content: slide(
      <>
        <Rule>A <Af>metafoor</Af> <En>metaphor</En> says that one thing <Af>is</Af> <En>is</En> another thing, with no <Af>soos</Af>. <Af>Personifikasie</Af> <En>Personification</En> gives a thing the actions of a person.</Rule>
        <PoemBox label={"Gedig A"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die son is 'n goue appel in die lug,", "die wind fluister saggies in die gras,", "en my hart is so lig soos 'n veer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The sun is a golden apple in the sky, the wind whispers softly in the grass, and my heart is as light as a feather.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "metafoor", "tag": "is, no soos"}, {"word": "personifikasie", "tag": "acts like a person"}]} aria={"Two Afrikaans words: metafoor means metaphor, which says one thing is another, and personifikasie means personification, which gives a thing the actions of a person."} />
        <Worked
          title={"Read lines 1 and 2"}
          steps={[
            <><Af>Die son is 'n goue appel.</Af> <En>The sun is a golden apple.</En> <SpeakButton text="Die son is 'n goue appel." /> <Af>Dit is 'n metafoor.</Af> <En>It is a metaphor.</En></>,
            <><Af>Die wind fluister.</Af> <En>The wind whispers.</En> <Af>Dit is personifikasie.</Af> <En>It is personification.</En></>,
          ]}
        />
        <Mistake>Calling a metaphor a <Af>vergelyking</Af>. If there is no <Af>soos</Af>, it is a <Af>metafoor</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: "Verduidelik die beeldspraak",
    content: slide(
      <>
        <Rule>To explain <Af>beeldspraak</Af>, read the line, ask what is compared, and say what it shows.</Rule>
        
        <OrderTiles tiles={["Lees die reël.", "Wat word vergelyk?", "Wat wys dit?"]} aria={"Three steps in order: Lees die reël, Wat word vergelyk, Wat wys dit."} />
        <Worked
          title={"Explain a line"}
          steps={[
            <><Af>Lees die reël.</Af> <En>Read the line.</En></>,
            <><Af>Wat word vergelyk?</Af> <En>What is compared?</En></>,
            <><Af>Wat wys dit?</Af> <En>What does it show?</En></>,
          ]}
        />
        <Mistake>Only naming the figure. Also say what the comparison shows about the thing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>simile</En>?</>} answer={<><Af>Vergelyking</Af>.</>} />
        <Check question={<>Which word means <En>metaphor</En>?</>} answer={<><Af>Metafoor</Af>.</>} />
        <Check question={<>Which word means <En>figurative language</En>?</>} answer={<><Af>Beeldspraak</Af>.</>} />
        <Check question={<>Which sentence means <En>The wind whispers</En>?</>} answer={<><Af>Die wind fluister.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'simile'?",
    options: ["metafoor", "personifikasie", "vergelyking", "taalgebruik"],
    answer: "vergelyking",
    explanation: "'Vergelyking' means 'simile'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'metaphor'?",
    options: ["metafoor", "vergelyking", "personifikasie", "taalgebruik"],
    answer: "metafoor",
    explanation: "'Metafoor' means 'metaphor'.",
  },
  {
    prompt: "Watter reël is 'n vergelyking?",
    options: ["Die nag is 'n swart kombers", "Die maan loop oor die berge", "Die sterre dans in die lug", "Sy oë blink soos sterre"],
    answer: "Sy oë blink soos sterre",
    explanation: "The word 'soos' shows a simile.",
  },
  {
    prompt: "Watter reël is 'n metafoor?",
    options: ["Sy oë blink soos sterre", "Die nag is 'n swart kombers", "Die wind fluister in die bome", "Hy hardloop so vinnig soos die wind"],
    answer: "Die nag is 'n swart kombers",
    explanation: "It says that the night is a blanket, with no 'soos'.",
  },
  {
    prompt: "Watter reël is personifikasie?",
    options: ["Die nag is 'n groot swart kombers", "Sy oë blink soos sterre", "Die wind fluister in die bome", "Die boom is baie groot"],
    answer: "Die wind fluister in die bome",
    explanation: "A wind cannot whisper like a person.",
  },
  {
    prompt: "Watter woord wys gewoonlik 'n vergelyking?",
    options: ["soos", "en", "maar", "want"],
    answer: "soos",
    explanation: "'Soos' means 'like' and often shows a simile.",
  },
  {
    prompt: "Wat beteken 'Die son is 'n goue appel'?",
    options: ["The sun is a fruit that grows on trees", "The sun is sweet to eat", "The sun is hidden", "The sun looks round and golden"],
    answer: "The sun looks round and golden",
    explanation: "The metaphor compares the sun to a golden apple.",
  },
  {
    prompt: "Wat word vergelyk in 'my hart is so lig soos 'n veer'?",
    options: ["Die veer en die lig", "Die hart en 'n veer", "Die hart en die son", "Die lig en die wind"],
    answer: "Die hart en 'n veer",
    explanation: "The heart and a feather are compared.",
  },
  {
    prompt: "Wat wys 'so lig soos 'n veer'?",
    options: ["That the heart is as heavy as a feather", "That the heart is heavy", "That the heart feels happy and light", "That the feather is a heart"],
    answer: "That the heart feels happy and light",
    explanation: "A feather is light, so the heart feels light and happy.",
  },
  {
    prompt: "Hoe weet jy dit is 'n metafoor?",
    options: ["Dit sê iets is iets anders", "Dit het die woord 'soos' in", "Dit rym met die titel", "Dit het vier reëls"],
    answer: "Dit sê iets is iets anders",
    explanation: "A metaphor says one thing is another, without 'soos'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'figurative language'?",
    options: ["woordeskat", "spelling", "taalgebruik", "beeldspraak"],
    answer: "beeldspraak",
    explanation: "'Beeldspraak' means 'figurative language'.",
  },
  {
    prompt: "Watter reël is NIE beeldspraak nie?",
    options: ["Die gras dans in die wind", "Die gras is groen", "Die gras is 'n groen see", "Die gras is soos 'n tapyt"],
    answer: "Die gras is groen",
    explanation: "The line says what the grass is, plainly, with no comparison.",
  },
];

const FiguresPoems = () => (
  <AfrikaansTopic
    title={"Beeldspraak in gedigte"}
    subtitle={"Vergelyking, metafoor en personifikasie in 'n gedig"}
    learnSteps={learnSteps}
    task={"gr7-afr-figures-poems-t2"}
    bank={bank}
    speak="options"
  />
);

export default FiguresPoems;
