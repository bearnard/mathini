import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Vers, reël en uitleg",
    content: slide(
      <>
        <Rule>A <Af>vers</Af> <En>stanza</En> is a group of <Af>reëls</Af> <En>lines</En>. The <Af>uitleg</Af> <En>layout</En> is how the lines and stanzas are set out on the page. Together they are the <Af>struktuur</Af> <En>structure</En> of the poem.</Rule>
        <PoemBox label={"Gedig D"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die berge staan so stil en hoog,", "die rivier loop stadig deur die dal,", "die voëls sing saam met die son,", "en die wind waai sag oor al."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The mountains stand so still and high, the river flows slowly through the valley, the birds sing along with the sun, and the wind blows softly over everything.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["vers", "stanza"], ["reël", "line"], ["uitleg", "layout"]]} aria={"Afrikaans words with their English meaning: vers is stanza, reël is line, uitleg is layout."} />
        <Worked
          title={"Look at Gedig D"}
          steps={[
            <><Af>Gedig D het een vers.</Af> <En>Gedig D has one stanza.</En></>,
            <><Af>Die vers het vier reëls.</Af> <En>The stanza has four lines.</En></>,
            <><Af>Die struktuur is een vers van vier reëls.</Af> <En>The structure is one stanza of four lines.</En></>,
          ]}
        />
        <Mistake>Mixing up <Af>vers</Af> and <Af>reël</Af>. A <Af>vers</Af> is a group of <Af>reëls</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: "Rym en rymskema",
    content: slide(
      <>
        <Rule>The <Af>rymskema</Af> <En>rhyme scheme</En> shows which end sounds <Af>rym</Af> <En>rhyme</En>. Give each new sound a letter. <Af>Gedig D</Af> <En>Poem D</En> has the scheme ABCB. <Af>Gedig E</Af> <En>Poem E</En> has the scheme AABB.</Rule>
        <PoemBox label={"Gedig D"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die berge staan so stil en hoog,", "die rivier loop stadig deur die dal,", "die voëls sing saam met die son,", "en die wind waai sag oor al."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The mountains stand so still and high, the river flows slowly through the valley, the birds sing along with the sun, and the wind blows softly over everything.</p>
        </PoemBox>
        <PoemBox label={"Gedig E"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Ek sit onder 'n groot, groen boom,", "en daar begin ek rustig droom.", "Die voëls vlieg hoog in die lug,", "en my gedagtes maak 'n vlug."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: I sit under a big green tree, and there I begin to dream calmly. The birds fly high in the sky, and my thoughts take flight.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "ABCB", "tag": "lines 2 and 4 rhyme"}, {"word": "AABB", "tag": "lines 1+2, 3+4 rhyme"}]} aria={"Two rhyme schemes: ABCB means lines 2 and 4 rhyme, and AABB means lines 1 and 2 rhyme and lines 3 and 4 rhyme."} />
        <Worked
          title={"Mark the poems"}
          steps={[
            <><Af>Gedig D: dal en al rym.</Af> <En>Poem D: dal and al rhyme.</En> <Af>Die rymskema is ABCB.</Af> <En>The rhyme scheme is ABCB.</En></>,
            <><Af>Gedig E: boom en droom rym, lug en vlug rym.</Af> <En>Poem E: boom and droom rhyme, lug and vlug rhyme.</En> <Af>Die rymskema is AABB.</Af> <En>The rhyme scheme is AABB.</En></>,
          ]}
        />
        <Mistake>Choosing words that look alike but sound different. Rhyme depends on the end sound.</Mistake>
      </>,
    ),
  },
  {
    title: "Ritme, herhaling en refrein",
    content: slide(
      <>
        <Rule><Af>Ritme</Af> <En>Rhythm</En> is the beat of a line. <Af>Herhaling</Af> <En>Repetition</En> makes an idea stronger. A <Af>refrein</Af> <En>refrain</En> is a line that returns.</Rule>
        <PoemBox label={"Gedig F"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Reën, reën, gaan weg,", "kom weer 'n ander dag.", "Reën, reën, gaan weg,", "die kinders wil speel."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: Rain, rain, go away, come again another day. Rain, rain, go away, the children want to play.</p>
        </PoemBox>
        <OrderTiles tiles={["Reël 1: refrein", "Reël 2: nuwe reël", "Reël 3: refrein", "Reël 4: nuwe reël"]} aria={"The order of the lines in Gedig F: line 1 is the refrain, line 2 is new, line 3 is the refrain again, line 4 is new."} />
        <Worked
          title={"Read Gedig F"}
          steps={[
            <><Af>Reën, reën, gaan weg</Af> <En>Rain, rain, go away</En> <SpeakButton text="Reën, reën, gaan weg" /> <Af>is die refrein.</Af> <En>is the refrain.</En></>,
            <><Af>Die refrein kom twee keer.</Af> <En>The refrain comes twice.</En></>,
            <><Af>Die herhaling wys hoe graag die kinders wil speel.</Af> <En>The repetition shows how much the children want to play.</En></>,
          ]}
        />
        <Mistake>Saying that a refrain is a mistake. It is chosen to stress an idea or feeling.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>rhyme scheme</En>?</>} answer={<><Af>Rymskema</Af>.</>} />
        <Check question={<>Which word means <En>refrain</En>?</>} answer={<><Af>Refrein</Af>.</>} />
        <Check question={<>Which word means <En>layout</En>?</>} answer={<><Af>Uitleg</Af>.</>} />
        <Check question={<>Which word means <En>rhythm</En>?</>} answer={<><Af>Ritme</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'layout' van 'n gedig?",
    options: ["rym", "vers", "uitleg", "refrein"],
    answer: "uitleg",
    explanation: "'Uitleg' means 'layout'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'rhythm'?",
    options: ["ritme", "rym", "reël", "refrein"],
    answer: "ritme",
    explanation: "'Ritme' means 'rhythm'.",
  },
  {
    prompt: "Wat is die rymskema van: boom, droom, lug, vlug?",
    options: ["ABAB", "ABBA", "ABCB", "AABB"],
    answer: "AABB",
    explanation: "Boom and droom rhyme, lug and vlug rhyme: AABB.",
  },
  {
    prompt: "Wat is die rymskema van: hoog, dal, son, al?",
    options: ["AABB", "ABCB", "ABAB", "ABCD"],
    answer: "ABCB",
    explanation: "Dal and al rhyme: ABCB.",
  },
  {
    prompt: "Watter woord rym met 'lug'?",
    options: ["lang", "lag", "vlug", "lig"],
    answer: "vlug",
    explanation: "'Lug' and 'vlug' rhyme.",
  },
  {
    prompt: "Watter woord rym met 'droom'?",
    options: ["boom", "bloem", "dorp", "dood"],
    answer: "boom",
    explanation: "'Droom' and 'boom' rhyme.",
  },
  {
    prompt: "Hoeveel verse het hierdie gedig? 'Son op die berg, / wind in die gras. // Maan in die lug, / ster in die glas. // Nag oor die stad, / stil oor die dak.' (// is die einde van 'n vers.)",
    options: ["1", "2", "6", "3"],
    answer: "3",
    explanation: "Three stanzas of two lines each.",
  },
  {
    prompt: "Wat is 'n refrein?",
    options: ["die titel van die gedig", "'n reël wat terugkom", "die naam van die digter", "die laaste woord van die gedig"],
    answer: "'n reël wat terugkom",
    explanation: "A refrain is a line that returns.",
  },
  {
    prompt: "Wat doen herhaling in 'n gedig?",
    options: ["Dit verander die titel", "Dit maak die gedig korter", "Dit beklemtoon 'n idee", "Dit wys wie die digter is"],
    answer: "Dit beklemtoon 'n idee",
    explanation: "Repetition stresses an idea.",
  },
  {
    prompt: "Hoe lees jy 'n reël sonder leesteken aan die einde?",
    options: ["Lees aan na die volgende reël", "Stop en haal diep asem soos by 'n punt", "Lees dit twee keer", "Slaan dit oor"],
    answer: "Lees aan na die volgende reël",
    explanation: "Read on when the sense goes on.",
  },
  {
    prompt: "Watter woorde rym NIE?",
    options: ["boom en droom", "kat en mat", "lug en vlug", "mat en hoog"],
    answer: "mat en hoog",
    explanation: "'Mat' and 'hoog' have different end sounds.",
  },
  {
    prompt: "Wat is die uitleg van 'n gedig?",
    options: ["Die storie van die gedig oor die lewe", "Hoe die reëls en verse staan", "Die betekenis van die titel van die gedig", "Die klank van die woorde in elke reël"],
    answer: "Hoe die reëls en verse staan",
    explanation: "The layout is how the lines and stanzas stand on the page.",
  },
];

const StructureRhyme = () => (
  <AfrikaansTopic
    title={"Struktuur en rymskema"}
    subtitle={"Vers, reël, uitleg, rymskema, ritme, herhaling en refrein"}
    learnSteps={learnSteps}
    task={"gr8-afr-structure-rhyme-t3"}
    bank={bank}
    speak="options"
  />
);

export default StructureRhyme;
