import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Vrye vers en gerymde vers",
    content: slide(
      <>
        <Rule><Af>Vrye vers</Af> <En>Free verse</En> has no fixed rhyme or rhythm, and the poet chooses where each line ends. A <Af>gerymde vers</Af> <En>rhymed verse</En> has a pattern of rhyme.</Rule>
        <PoemBox label={"Gedig D"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["My ma knie die deeg", "asof sy met dit stry", "en wen.", "", "Die kombuis vul met warm,", "stadige asem."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: My mother kneads the dough as if she were arguing with it and winning. The kitchen fills with warm, slow breath.</p>
        </PoemBox>
        <PoemBox label={"Gedig E"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die son kom op, dit is 'n nuwe dag,", "my suster speel en ek lag.", "By die strand is net ek en die see,", "en die golwe sing vir ons altwee."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The sun comes up, it is a new day, my sister plays and I laugh. At the beach it is just me and the sea, and the waves sing for the two of us.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["vrye vers", "free verse"], ["gerymde vers", "rhymed verse"], ["rym", "rhyme"]]} aria={"Afrikaans words with their English meaning: vrye vers is free verse, gerymde vers is rhymed verse, rym is rhyme."} />
        <Worked
          title={"Compare the poems"}
          steps={[
            <><Af>Gedig D is vrye vers.</Af> <En>Gedig D is free verse.</En> <SpeakButton text="Gedig D is vrye vers." /></>,
            <><Af>Gedig E is gerymde vers: AABB.</Af> <En>Gedig E is rhymed verse: AABB.</En></>,
          ]}
        />
        <Mistake>Thinking that free verse has no form. The poet still chooses the lines and stanzas carefully.</Mistake>
      </>,
    ),
  },
  {
    title: "Koeplet en kwatryn",
    content: slide(
      <>
        <Rule>A <Af>koeplet</Af> <En>couplet</En> is two lines. A <Af>kwatryn</Af> <En>quatrain</En> is four lines. A <Af>strofe</Af> <En>stanza</En> is a group of lines (also called a <Af>vers</Af> <En>verse</En>).</Rule>
        <PoemBox label={"Gedig E"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die son kom op, dit is 'n nuwe dag,", "my suster speel en ek lag.", "By die strand is net ek en die see,", "en die golwe sing vir ons altwee."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The sun comes up, it is a new day, my sister plays and I laugh. At the beach it is just me and the sea, and the waves sing for the two of us.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "koeplet", "tag": "2 reëls"}, {"word": "kwatryn", "tag": "4 reëls"}]} aria={"Two Afrikaans words: koeplet means couplet, two lines, and kwatryn means quatrain, four lines."} />
        <Worked
          title={"Look at Gedig E"}
          steps={[
            <><Af>Gedig E het een kwatryn.</Af> <En>Gedig E has one quatrain.</En></>,
            <><Af>Dit bestaan uit twee koeplette.</Af> <En>It consists of two couplets.</En></>,
            <><Af>Reël 1 en 2 is die eerste koeplet.</Af> <En>Lines 1 and 2 are the first couplet.</En></>,
          ]}
        />
        <Mistake>Mixing up <Af>koeplet</Af> and <Af>kwatryn</Af>. Count the lines: two or four.</Mistake>
      </>,
    ),
  },
  {
    title: "Enjambement: die sin loop voort",
    content: slide(
      <>
        <Rule>In <Af>enjambement</Af> <En>enjambement</En> a sentence runs on into the next line without a stop. The reader does not pause at the line end.</Rule>
        <PoemBox label={"Gedig D"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["My ma knie die deeg", "asof sy met dit stry", "en wen.", "", "Die kombuis vul met warm,", "stadige asem."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: My mother kneads the dough as if she were arguing with it and winning. The kitchen fills with warm, slow breath.</p>
        </PoemBox>
        <OrderTiles tiles={["Reël 1: geen leesteken", "Reël 2: geen leesteken", "Reël 3: die sin eindig"]} aria={"The lines of the first stanza of Gedig D in order: line 1 has no punctuation, line 2 has no punctuation, line 3 is where the sentence ends."} />
        <Worked
          title={"Read Gedig D"}
          steps={[
            <><Af>My ma knie die deeg asof sy met dit stry en wen.</Af> <En>My mother kneads the dough as if she argues with it and wins.</En> <SpeakButton text="My ma knie die deeg asof sy met dit stry en wen." /></>,
            <><Af>Die sin loop deur drie reëls.</Af> <En>The sentence runs through three lines.</En></>,
            <><Af>Dit is enjambement.</Af> <En>This is enjambement.</En></>,
          ]}
        />
        <Mistake>Reading a pause at every line end. Read on when there is no punctuation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>free verse</En>?</>} answer={<><Af>Vrye vers</Af>.</>} />
        <Check question={<>Which word means <En>couplet</En>?</>} answer={<><Af>Koeplet</Af>.</>} />
        <Check question={<>Which word means <En>quatrain</En>?</>} answer={<><Af>Kwatryn</Af>.</>} />
        <Check question={<>Which word means <En>stanza</En>?</>} answer={<><Af>Strofe</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'free verse'?",
    options: ["gerymde vers", "koeplet", "vrye vers", "kwatryn"],
    answer: "vrye vers",
    explanation: "'Vrye vers' means 'free verse'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'couplet'?",
    options: ["koeplet", "kwatryn", "strofe", "refrein"],
    answer: "koeplet",
    explanation: "'Koeplet' means 'couplet'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'quatrain'?",
    options: ["koeplet", "refrein", "strofe", "kwatryn"],
    answer: "kwatryn",
    explanation: "'Kwatryn' means 'quatrain'.",
  },
  {
    prompt: "Hoeveel reëls het 'n koeplet?",
    options: ["3", "2", "4", "6"],
    answer: "2",
    explanation: "A couplet has two lines.",
  },
  {
    prompt: "Hoeveel reëls het 'n kwatryn?",
    options: ["2", "3", "4", "8"],
    answer: "4",
    explanation: "A quatrain has four lines.",
  },
  {
    prompt: "Wat is vrye vers?",
    options: ["Gedig sonder vaste rym of ritme", "Gedig met 'n rym in elke reël", "Gedig met veertien reëls", "Gedig met 'n refrein in elke vers"],
    answer: "Gedig sonder vaste rym of ritme",
    explanation: "Free verse has no fixed pattern.",
  },
  {
    prompt: "Wat kan 'n digter met reëlbreuke in vrye vers doen?",
    options: ["Hulle gebruik dit om te rym in elke reël van die gedig", "Hulle tel die woorde", "Hulle maak die gedig korter", "Hulle kies om die betekenis te vorm"],
    answer: "Hulle kies om die betekenis te vorm",
    explanation: "The poet chooses the line breaks.",
  },
  {
    prompt: "Wat is enjambement?",
    options: ["'n Rym aan die einde van 'n reël in die vers", "'n Sin wat in die volgende reël voortgaan", "'n Reël wat herhaal word", "'n Woord wat soos sy klank klink"],
    answer: "'n Sin wat in die volgende reël voortgaan",
    explanation: "The sentence runs on over the line end.",
  },
  {
    prompt: "Watter rymskema het: dag, lag, see, altwee?",
    options: ["ABAB", "ABCB", "AABB", "ABBA"],
    answer: "AABB",
    explanation: "Dag and lag rhyme, see and altwee rhyme.",
  },
  {
    prompt: "Watter woord rym met 'dag'?",
    options: ["lag", "lig", "lug", "log"],
    answer: "lag",
    explanation: "'Dag' and 'lag' rhyme.",
  },
  {
    prompt: "Hoeveel koeplette is daar in 'n kwatryn met rymskema AABB?",
    options: ["1", "3", "4", "2"],
    answer: "2",
    explanation: "Four lines make two couplets.",
  },
  {
    prompt: "Wat is 'n gerymde vers?",
    options: ["Gedig sonder enige patroon van rym", "Gedig met 'n patroon van rym", "Gedig met net een reël", "Gedig sonder 'n titel"],
    answer: "Gedig met 'n patroon van rym",
    explanation: "A rhymed verse has a pattern of rhyme.",
  },
];

const FormStructure = () => (
  <AfrikaansTopic
    title={"Vorm en struktuur"}
    subtitle={"Vrye vers, gerymde vers, koeplet, kwatryn en enjambement"}
    learnSteps={learnSteps}
    task={"gr9-afr-form-structure-t3"}
    bank={bank}
    speak="options"
  />
);

export default FormStructure;
