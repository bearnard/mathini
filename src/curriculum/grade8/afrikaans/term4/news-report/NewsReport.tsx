import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Facts, not opinion",
    content: slide(
      <>
        <Rule>A <Af>joernalistieke verslag</Af> <En>news report</En> tells what happened. It uses <Af>feite</Af> <En>facts</En> and no personal <Af>mening</Af> <En>opinion</En>. It is <Af>objektief</Af> <En>objective</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["feite", "facts"], ["mening", "opinion"], ["objektief", "objective"]]} aria="Afrikaans words with their English meaning: feite is facts, mening is opinion, objektief is objective." />
        <Worked
          title="Fact or opinion?"
          steps={[
            <><Af>Die taxi-staanplek is gister gesluit.</Af> <En>The taxi rank was closed yesterday.</En> A fact.</>,
            <><Af>Dit is verskriklik.</Af> <En>It is terrible.</En> An opinion.</>,
            <><Af>die skrywer se mening</Af> <En>the writer's opinion</En> stays out. The purpose is <Af>om te sê wat gebeur het</Af> <En>to say what happened</En>.</>,
          ]}
        />
        <Mistake>Adding your own opinion. Report only what happened.</Mistake>
      </>,
    ),
  },
  {
    title: "Name your sources",
    content: slide(
      <>
        <Rule>A <Af>bron</Af> <En>source</En> is where the facts come from. Say who told you: <Af>Volgens die munisipaliteit</Af> <En>According to the municipality</En>.</Rule>
        <WordBoxes words={["Volgens", "die", "munisipaliteit", "is", "dit", "gesluit."]} hot={[0, 2]} aria="The sentence in boxes: Volgens die munisipaliteit is dit gesluit.." />
        <Worked
          title="Give the source"
          steps={[
            <><Af>Volgens die munisipaliteit is die staanplek gesluit.</Af> <En>According to the municipality the rank is closed.</En> <SpeakButton text="Volgens die munisipaliteit is die staanplek gesluit." /></>,
            <>The reader can then decide how far to trust it.</>,
            <>A report names its sources so <Af>die leser weet waar die feite vandaan kom</Af> <En>the reader knows where the facts come from</En>.</>,
          ]}
        />
        <Mistake>Giving facts with no source. Say who told you.</Mistake>
      </>,
    ),
  },
  {
    title: "The past tense",
    content: slide(
      <>
        <Rule>A news report tells what already happened, so it uses the past tense with <Af>het</Af>: <Af>Die water het die plek oorstroom.</Af> <En>The water flooded the place.</En></Rule>
        <MeaningPairs kind="same" pairs={[["het oorstroom", "flooded"], ["is gesluit", "was closed"], ["het gesê", "said"]]} aria="Afrikaans words with their English meaning: het oorstroom is flooded, is gesluit is was closed, het gesê is said." />
        <Worked
          title="Write the report"
          steps={[
            <><Af>Die water het die plek oorstroom.</Af> <En>The water flooded the place.</En></>,
            <><Af>Die staanplek is gister gesluit.</Af> <En>The rank was closed yesterday.</En></>,
            <>Use <Af>die verlede tyd</Af> <En>the past tense</En>.</>,
          ]}
        />
        <Mistake>Writing a report in the present tense. Use the past for what happened.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>facts</En>?</>} answer={<><Af>Feite</Af>.</>} />
        <Check question={<>Which word means <En>source</En>?</>} answer={<><Af>Bron</Af>.</>} />
        <Check question={<>Which words give a source?</>} answer={<><Af>Volgens die munisipaliteit</Af>.</>} />
        <Check question={<>Which tense does a news report use?</>} answer={<>The past tense.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'facts'?",
    options: ["feite", "bron", "berig", "mening"],
    answer: "feite",
    explanation: "'Feite' means 'facts'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'opinion'?",
    options: ["mening", "bron", "verslag", "feite"],
    answer: "mening",
    explanation: "'Mening' means 'opinion'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'source'?",
    options: ["mening", "feite", "bron", "opskrif"],
    answer: "bron",
    explanation: "'Bron' means 'source'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'objective'?",
    options: ["subjektief", "bron", "objektief", "feite"],
    answer: "objektief",
    explanation: "'Objektief' means 'objective'.",
  },
  {
    prompt: "Watter woorde gee 'n bron?",
    options: ["Ek dink dat on a device in a file", "Dit is verskriklik in use for a user", "Gister was dit lekker at work", "Volgens die munisipaliteit"],
    answer: "Volgens die munisipaliteit",
    explanation: "'Volgens' introduces a source.",
  },
  {
    prompt: "Watter sin is 'n feit?",
    options: ["Dit is verskriklik. on a system in a program", "Ek haat die reën. at a school on a device", "Dit is die slegste dag. for a task in use", "Die staanplek is gister gesluit."],
    answer: "Die staanplek is gister gesluit.",
    explanation: "A fact can be checked.",
  },
  {
    prompt: "Watter sin is 'n mening?",
    options: ["Die staanplek is gesluit.", "Dit is verskriklik.", "Die water het oorstroom.", "Dit het gister gebeur."],
    answer: "Dit is verskriklik.",
    explanation: "An opinion is what someone thinks.",
  },
  {
    prompt: "Watter tyd gebruik 'n nuusverslag?",
    options: ["die toekomende tyd", "net bevele", "net vrae", "die verlede tyd"],
    answer: "die verlede tyd",
    explanation: "It tells what happened.",
  },
  {
    prompt: "Watter sin is in die verlede tyd?",
    options: ["Die water oorstroom die plek. at a school", "Die water het die plek oorstroom.", "Die water sal oorstroom. for a task in use", "Oorstroom die water? in a program at work"],
    answer: "Die water het die plek oorstroom.",
    explanation: "'het' shows the past.",
  },
  {
    prompt: "Waarom noem 'n verslag sy bronne?",
    options: ["dit maak die verslag langer at a school on a device", "dit is 'n grap for a task in use", "dit versteek die feite in a program at work", "die leser weet waar die feite vandaan kom"],
    answer: "die leser weet waar die feite vandaan kom",
    explanation: "Sources show where facts came from.",
  },
  {
    prompt: "Wat moet nie in 'n verslag wees nie?",
    options: ["feite", "bronne", "'n opskrif at work in a lab", "die skrywer se mening"],
    answer: "die skrywer se mening",
    explanation: "Reports are objective.",
  },
  {
    prompt: "Wat is die doel van 'n joernalistieke verslag?",
    options: ["om te sê wat gebeur het", "om 'n storie te vertel on a device", "om 'n gedig te skryf in use", "om 'n grap te maak at work"],
    answer: "om te sê wat gebeur het",
    explanation: "It reports what happened.",
  },
];

const NewsReport = () => (
  <AfrikaansTopic
    title="Joernalistieke verslag"
    subtitle="Facts first, named sources, the past tense, and no opinion"
    learnSteps={learnSteps}
    task="gr8-afr-news-report-t4"
    bank={bank}
    speak="options"
  />
);

export default NewsReport;
