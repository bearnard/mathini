import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Stemming, toon en tema",
    content: slide(
      <>
        <Rule>The <Af>stemming</Af> <En>mood</En> is the feeling that a poem gives the reader. The <Af>toon</Af> <En>tone</En> is the attitude of the speaker. The <Af>tema</Af> <En>theme</En> is the main idea. Mood words: <Af>hartseer</Af> <En>sad</En>, <Af>bly</Af> <En>happy</En>, <Af>weemoedig</Af> <En>wistful</En>.</Rule>
        <PoemBox label={"Gedig G"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die laaste dag van die vakansie breek aan,", "my tas staan gepak by die deur.", "Ek tel die ure soos geld wat val,", "en wens daar was nog meer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The last day of the holiday dawns, my bag stands packed by the door. I count the hours like money that falls, and wish there were more.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["stemming", "mood"], ["toon", "tone"], ["tema", "theme"]]} aria={"Afrikaans words with their English meaning: stemming is mood, toon is tone, tema is theme."} />
        <Worked
          title={"Read Gedig G"}
          steps={[
            <><Af>Die stemming is weemoedig.</Af> <En>The mood is wistful.</En> <SpeakButton text="Die stemming is weemoedig." /></>,
            <><Af>Ek wens daar was nog meer.</Af> <En>I wish there were more.</En> <Af>Dit bewys dit.</Af> <En>That proves it.</En></>,
            <><Af>Die tema is: die vakansie is te gou verby.</Af> <En>The theme is: the holiday is over too soon.</En></>,
          ]}
        />
        <Mistake>Mixing up <Af>stemming</Af> and <Af>toon</Af>. The <Af>stemming</Af> is what the reader feels; the <Af>toon</Af> is how the speaker sounds.</Mistake>
      </>,
    ),
  },
  {
    title: "Kontekstuele vrae",
    content: slide(
      <>
        <Rule>A <Af>kontekstuele vraag</Af> <En>contextual question</En> is about a poem that is printed in the paper. Read the poem twice. Then <Af>haal aan</Af> <En>quote</En> words from the poem and <Af>verduidelik</Af> <En>explain</En> them.</Rule>
        <PoemBox label={"Gedig G"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die laaste dag van die vakansie breek aan,", "my tas staan gepak by die deur.", "Ek tel die ure soos geld wat val,", "en wens daar was nog meer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The last day of the holiday dawns, my bag stands packed by the door. I count the hours like money that falls, and wish there were more.</p>
        </PoemBox>
        <OrderTiles tiles={["Lees die gedig twee keer.", "Haal woorde aan.", "Verduidelik."]} aria={"Three steps in order: Lees die gedig twee keer, Haal woorde aan, Verduidelik."} />
        <Worked
          title={"A model answer"}
          steps={[
            <><Af>Vraag: Wat is die stemming?</Af> <En>Question: What is the mood?</En></>,
            <><Af>Antwoord: Weemoedig, want die digter wens daar was nog meer.</Af> <En>Answer: Wistful, because the poet wishes there were more.</En></>,
            <><Af>Die woorde bewys die antwoord.</Af> <En>The words prove the answer.</En></>,
          ]}
        />
        <Mistake>Giving an answer with no words from the poem. Always quote and explain.</Mistake>
      </>,
    ),
  },
  {
    title: "Skryf jou eie gedig",
    content: slide(
      <>
        <Rule>Write a <Af>gedig</Af> <En>poem</En> of two or three <Af>verse</Af> <En>stanzas</En>. Choose one small subject, use a <Af>vergelyking</Af> <En>simile</En> or a <Af>metafoor</Af> <En>metaphor</En>, and read your poem aloud.</Rule>
        <PoemBox label={"Gedig H"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["My ouma se hande is warm soos brood,", "haar lag is 'n ketel wat sing.", "", "In die aand sê sy die sterre moet slaap,", "en die donker is nie so lank nie."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: My gran's hands are warm like bread, her laugh is a kettle that sings. In the evening she tells the stars to sleep, and the dark is not so long.</p>
        </PoemBox>
        <OrderTiles tiles={["Kies een onderwerp.", "Gebruik beeldspraak.", "Lees dit hardop."]} aria={"Three steps in order: Kies een onderwerp, Gebruik beeldspraak, Lees dit hardop."} />
        <Worked
          title={"Study Gedig H"}
          steps={[
            <><Af>Die onderwerp is my ouma.</Af> <En>The subject is my gran.</En></>,
            <><Af>My ouma se hande is warm soos brood.</Af> <En>My gran's hands are warm like bread.</En> <Af>Dit is 'n vergelyking.</Af> <En>It is a simile.</En></>,
            <><Af>Haar lag is 'n ketel wat sing.</Af> <En>Her laugh is a kettle that sings.</En> <Af>Dit is 'n metafoor.</Af> <En>It is a metaphor.</En></>,
          ]}
        />
        <Mistake>Writing about a big idea in general words. Begin with one small subject and real details.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>mood</En>?</>} answer={<><Af>Stemming</Af>.</>} />
        <Check question={<>Which word means <En>tone</En>?</>} answer={<><Af>Toon</Af>.</>} />
        <Check question={<>Which word means <En>theme</En>?</>} answer={<><Af>Tema</Af>.</>} />
        <Check question={<>Which word means <En>to quote</En>?</>} answer={<><Af>Haal aan</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'mood'?",
    options: ["toon", "tema", "stemming", "onderwerp"],
    answer: "stemming",
    explanation: "'Stemming' means 'mood'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tone'?",
    options: ["toon", "stemming", "tema", "titel"],
    answer: "toon",
    explanation: "'Toon' means 'tone'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'theme'?",
    options: ["toon", "stemming", "titel", "tema"],
    answer: "tema",
    explanation: "'Tema' means 'theme'.",
  },
  {
    prompt: "Watter woord beteken 'sad'?",
    options: ["bly", "hartseer", "kwaad", "opgewonde"],
    answer: "hartseer",
    explanation: "'Hartseer' means 'sad'.",
  },
  {
    prompt: "Watter woord beteken 'wistful'?",
    options: ["kwaad", "grappig", "weemoedig", "opgewonde"],
    answer: "weemoedig",
    explanation: "'Weemoedig' means 'wistful'.",
  },
  {
    prompt: "Watter stemming het hierdie reëls? 'Die kamer is leeg en die nag is lank.'",
    options: ["Hartseer", "Bly", "Kwaad", "Opgewonde"],
    answer: "Hartseer",
    explanation: "The empty room and the long night make a sad mood.",
  },
  {
    prompt: "Watter toon het 'Hoera! Ons het gewen!'?",
    options: ["Hartseer", "Kwaad", "Bang", "Bly"],
    answer: "Bly",
    explanation: "The words show joy.",
  },
  {
    prompt: "Wat is die tema van: 'Die saad is klein, die reën is stadig, maar dit groei.'?",
    options: ["Seeds are small and rain is slow", "Patience brings results", "Rain is slow", "Gardens are big"],
    answer: "Patience brings results",
    explanation: "The poem says that things grow for those who are patient.",
  },
  {
    prompt: "Wat moet jy eerste doen by 'n kontekstuele vraag?",
    options: ["Skryf dadelik die antwoord", "Tel die reëls", "Lees die gedig twee keer", "Kopieer die titel"],
    answer: "Lees die gedig twee keer",
    explanation: "Read the poem carefully first.",
  },
  {
    prompt: "Hoe bewys jy jou antwoord?",
    options: ["Haal woorde uit die gedig aan", "Skryf jou naam bo-aan die bladsy", "Tel die verse", "Verander die titel"],
    answer: "Haal woorde uit die gedig aan",
    explanation: "Quote the words that prove it.",
  },
  {
    prompt: "Hoeveel punte moet jy maak vir 'n vraag van 2 punte?",
    options: ["1", "5", "10", "2"],
    answer: "2",
    explanation: "The marks show how many points are needed.",
  },
  {
    prompt: "Hoeveel verse kan jy skryf vir 'n eie gedig in graad 8?",
    options: ["Een reël", "Twee of drie verse", "Twintig verse", "Honderd verse in een week"],
    answer: "Twee of drie verse",
    explanation: "CAPS gives two to three stanzas for Grade 8.",
  },
];

const MoodToneQuestions = () => (
  <AfrikaansTopic
    title={"Stemming, toon en kontekstuele vrae"}
    subtitle={"Stemming, toon, tema, kontekstuele vrae en jou eie gedig"}
    learnSteps={learnSteps}
    task={"gr8-afr-mood-tone-questions-t4"}
    bank={bank}
    speak="options"
  />
);

export default MoodToneQuestions;
