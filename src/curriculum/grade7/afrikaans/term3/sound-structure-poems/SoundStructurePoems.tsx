import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Rym en rymskema",
    content: slide(
      <>
        <Rule>Words <Af>rym</Af> <En>rhyme</En> when their end sounds are the same, such as <Af>huis</Af> and <Af>muis</Af>. The <Af>rymskema</Af> <En>rhyme scheme</En> uses letters for the end sounds, such as ABAB.</Rule>
        <PoemBox label={"Gedig B"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die dag is warm, die son is hoog,", "die kinders speel op die strand.", "Die see is blou, die lug is droog,", "en golwe loop oor die sand."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The day is warm, the sun is high, the children play on the beach. The sea is blue, the sky is dry, and waves run over the sand.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["rym", "rhyme"], ["rymskema", "rhyme scheme"], ["reël", "line"]]} aria={"Afrikaans words with their English meaning: rym is rhyme, rymskema is rhyme scheme, reël is line."} />
        <Worked
          title={"Mark Gedig B"}
          steps={[
            <><Af>hoog</Af> <En>high</En> (A), <Af>strand</Af> <En>beach</En> (B), <Af>droog</Af> <En>dry</En> (A), <Af>sand</Af> <En>sand</En> (B)</>,
            <><Af>hoog en droog rym.</Af> <En>hoog and droog rhyme.</En> <Af>strand en sand rym.</Af> <En>strand and sand rhyme.</En></>,
            <><Af>Die rymskema is ABAB.</Af> <En>The rhyme scheme is ABAB.</En></>,
          ]}
        />
        <Mistake>Choosing words that only look alike. Rhyme depends on the sound at the end of the word.</Mistake>
      </>,
    ),
  },
  {
    title: "Alliterasie en herhaling",
    content: slide(
      <>
        <Rule><Af>Alliterasie</Af> <En>Alliteration</En> is the same sound at the start of words that are close together. <Af>Herhaling</Af> <En>Repetition</En> is when a word or line comes back.</Rule>
        <PoemBox label={"Gedig C"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die slang sluip saggies oor die sand,", "sy skubbe blink in die son."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The snake slides softly over the sand, its scales shine in the sun.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "alliterasie", "tag": "same start sound"}, {"word": "herhaling", "tag": "comes back"}]} aria={"Two Afrikaans words: alliterasie means alliteration, the same sound at the start of nearby words, and herhaling means repetition, when a word or line comes back."} />
        <Worked
          title={"Read Gedig C"}
          steps={[
            <><Af>Die slang sluip saggies</Af> <En>The snake slides softly</En> <SpeakButton text="Die slang sluip saggies" /></>,
            <><Af>Die s-klank herhaal.</Af> <En>The s sound repeats.</En> <Af>Dit is alliterasie.</Af> <En>It is alliteration.</En></>,
          ]}
        />
        <Mistake>Thinking that alliteration is the same letter at the end. It is the same sound at the start of the words.</Mistake>
      </>,
    ),
  },
  {
    title: "Vers, reël en refrein",
    content: slide(
      <>
        <Rule>A <Af>vers</Af> <En>stanza</En> is a group of <Af>reëls</Af> <En>lines</En>. A <Af>refrein</Af> <En>refrain</En> is a line that comes back in the poem.</Rule>
        <PoemBox label={"Gedig D"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die winter is koud en die dae is kort,", "ek wag en ek wag vir die lente.", "Die vure brand laag, die wind is wild,", "ek wag en ek wag vir die lente."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The winter is cold and the days are short, I wait and I wait for spring. The fires burn low, the wind is wild, I wait and I wait for spring.</p>
        </PoemBox>
        <OrderTiles tiles={["Vers 1: twee reëls", "Vers 2: twee reëls", "Die refrein kom terug"]} aria={"Three parts in order: Vers 1 has two lines, Vers 2 has two lines, the refrain comes back."} />
        <Worked
          title={"Count Gedig D"}
          steps={[
            <><Af>Daar is twee verse.</Af> <En>There are two stanzas.</En></>,
            <><Af>Daar is vier reëls.</Af> <En>There are four lines.</En></>,
            <><Af>Die refrein is: ek wag en ek wag vir die lente.</Af> <En>The refrain is: I wait and I wait for spring.</En></>,
          ]}
        />
        <Mistake>Mixing up <Af>vers</Af> and <Af>reël</Af>. A <Af>vers</Af> is a group; a <Af>reël</Af> is one row.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>rhyme</En>?</>} answer={<><Af>Rym</Af>.</>} />
        <Check question={<>Which word means <En>stanza</En>?</>} answer={<><Af>Vers</Af>.</>} />
        <Check question={<>Which word means <En>refrain</En>?</>} answer={<><Af>Refrein</Af>.</>} />
        <Check question={<>Which word means <En>alliteration</En>?</>} answer={<><Af>Alliterasie</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'rhyme'?",
    options: ["reël", "vers", "rym", "refrein"],
    answer: "rym",
    explanation: "'Rym' means 'rhyme'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'stanza'?",
    options: ["vers", "reël", "rym", "refrein"],
    answer: "vers",
    explanation: "'Vers' means 'stanza'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'line' in 'n gedig?",
    options: ["vers", "gedig", "refrein", "reël"],
    answer: "reël",
    explanation: "'Reël' means 'line'.",
  },
  {
    prompt: "Watter woord rym met 'huis'?",
    options: ["hond", "muis", "dak", "boom"],
    answer: "muis",
    explanation: "'Huis' and 'muis' have the same end sound.",
  },
  {
    prompt: "Watter woord rym met 'son'?",
    options: ["maan", "ster", "kon", "wolk"],
    answer: "kon",
    explanation: "'Son' and 'kon' rhyme.",
  },
  {
    prompt: "Wat is die rymskema van reëls wat so eindig: son, ster, kon, ver?",
    options: ["ABAB", "AABB", "ABBA", "ABCD"],
    answer: "ABAB",
    explanation: "Son and kon rhyme, and ster and ver rhyme: ABAB.",
  },
  {
    prompt: "Wat is die rymskema van reëls wat so eindig: kat, mat, hond, mond?",
    options: ["ABAB", "ABBA", "ABCB", "AABB"],
    answer: "AABB",
    explanation: "Kat and mat rhyme, and hond and mond rhyme: AABB.",
  },
  {
    prompt: "Watter reël het alliterasie?",
    options: ["Die kat sit op die mat", "Die groot grys gans gaan goed", "Die kind loop met die hond na die winkel", "Die berg is baie hoog"],
    answer: "Die groot grys gans gaan goed",
    explanation: "The g sound repeats at the start of words.",
  },
  {
    prompt: "Wat is 'n refrein?",
    options: ["die titel van die gedig", "die laaste woord van elke reël in die vers", "'n reël wat in die gedig herhaal word", "die naam van die digter"],
    answer: "'n reël wat in die gedig herhaal word",
    explanation: "A refrain is a line that comes back.",
  },
  {
    prompt: "Hoeveel reëls het hierdie vers? 'Reën op die dak, / reën op die pad, / reën op die blare / en reën op my hart.'",
    options: ["4", "2", "3", "5"],
    answer: "4",
    explanation: "Count the lines: four.",
  },
  {
    prompt: "Hoeveel verse het hierdie gedig? 'Son op die berg, / wind in die gras. // Maan in die lug, / ster in die glas.' (// is die einde van 'n vers.)",
    options: ["1", "3", "4", "2"],
    answer: "2",
    explanation: "The poem has two stanzas: two lines before the // and two lines after it.",
  },
  {
    prompt: "Watter woorde rym NIE?",
    options: ["hand en sand", "hand en berg", "kat en mat", "huis en muis"],
    answer: "hand en berg",
    explanation: "'Hand' and 'berg' have different end sounds.",
  },
];

const SoundStructurePoems = () => (
  <AfrikaansTopic
    title={"Klank en struktuur in gedigte"}
    subtitle={"Rym, rymskema, alliterasie, herhaling, vers en refrein"}
    learnSteps={learnSteps}
    task={"gr7-afr-sound-structure-poems-t3"}
    bank={bank}
    speak="options"
  />
);

export default SoundStructurePoems;
