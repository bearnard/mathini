import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a story",
    content: slide(
      <>
        <Rule>A simple story has a <Af>begin</Af> <En>beginning</En>, a <Af>middel</Af> <En>middle</En> and an <Af>einde</Af> <En>end</En>. A story has a <Af>karakter</Af> <En>character</En> and a <Af>probleem</Af> <En>problem</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["begin", "beginning"], ["middel", "middle"], ["einde", "end"]]} aria="Afrikaans words with their English meaning: begin is beginning, middel is middle, einde is end." />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Die begin</Af> <En>the beginning</En> tells who and where.</>,
            <><Af>Die middel</Af> <En>the middle</En> tells the problem.</>,
            <><Af>Die einde</Af> <En>the end</En> tells how it is solved.</>,
          ]}
        />
        <Mistake>Telling the end first. A story goes in order: beginning, middle, end.</Mistake>
      </>,
    ),
  },
  {
    title: "Start your story",
    content: slide(
      <>
        <Rule>Many stories start with <Af>Daar was eens</Af> <En>Once upon a time there was</En> and then name the character.</Rule>
        <WordBoxes words={["Daar", "was", "eens", "’n", "seun."]} hot={[0, 1, 2]} aria="The sentence in boxes: Daar was eens ’n seun.." />
        <Worked
          title="Write the first sentences"
          steps={[
            <><Af>Daar was eens ’n seun.</Af> <En>Once upon a time there was a boy.</En></>,
            <><Af>Hy het Sipho geheet.</Af> <En>He was called Sipho.</En></>,
            <><Af>Daar was eens ’n meisie.</Af> <En>There was once a girl.</En></>,
          ]}
        />
        <Mistake>Forgetting the capital letter at the start. A sentence starts with a capital letter.</Mistake>
      </>,
    ),
  },
  {
    title: "The problem",
    content: slide(
      <>
        <Rule>In the middle something goes wrong. Start with <Af>Op ’n dag</Af> <En>One day</En>. Past sentences use <Af>het</Af> <En>had</En>.</Rule>
        <WordBoxes words={["Hy", "het", "sy", "skoen", "verloor."]} hot={[1]} aria="The sentence in boxes: Hy het sy skoen verloor.." />
        <Worked
          title="Write the problem"
          steps={[
            <><Af>Op ’n dag het hy sy skoen verloor.</Af> <En>One day he lost his shoe.</En></>,
            <><Af>Hy was hartseer.</Af> <En>He was sad.</En></>,
          ]}
        />
        <Mistake>Leaving out het. Say Hy het verloor, not Hy verloor, in a past sentence.</Mistake>
      </>,
    ),
  },
  {
    title: "The end",
    content: slide(
      <>
        <Rule>At the end the problem is solved. Use <Af>Gelukkig</Af> <En>Luckily</En>, and show how the character feels.</Rule>
        <OrderTiles tiles={["Daar was eens", "Op ’n dag", "Gelukkig"]} aria="The steps in order: Daar was eens, Op ’n dag, Gelukkig." />
        <Worked
          title="Write the ending"
          steps={[
            <><Af>Gelukkig het sy vriend die skoen gekry.</Af> <En>Luckily his friend found the shoe.</En></>,
            <><Af>Hy was weer bly.</Af> <En>He was happy again.</En></>,
          ]}
        />
        <Mistake>Ending with no answer to the problem. The end must solve it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>beginning</En>?</>} answer={<><Af>Begin</Af>.</>} />
        <Check question={<>Which word means <En>problem</En>?</>} answer={<><Af>Probleem</Af>.</>} />
        <Check question={<>How does a story often start?</>} answer={<><Af>Daar was eens</Af>.</>} />
        <Check question={<>What does the end of a story do?</>} answer={<>It solves the problem.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'beginning'?",
    options: ["begin", "einde", "karakter", "middel"],
    answer: "begin",
    explanation: "'Begin' means 'beginning'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'middle'?",
    options: ["einde", "middel", "karakter", "begin"],
    answer: "middel",
    explanation: "'Middel' means 'middle'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'end'?",
    options: ["begin", "karakter", "einde", "probleem"],
    answer: "einde",
    explanation: "'Einde' means 'end'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'character'?",
    options: ["leerders", "middel", "begin", "karakter"],
    answer: "karakter",
    explanation: "'Karakter' means 'character'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'problem'?",
    options: ["probleem", "leerders", "begin", "middel"],
    answer: "probleem",
    explanation: "'Probleem' means 'problem'.",
  },
  {
    prompt: "Watter sin sê 'Once upon a time there was a boy'?",
    options: ["Hy was weer bly.", "Daar was eens ’n seun.", "Gelukkig het sy vriend die skoen gekry.", "Hy was hartseer."],
    answer: "Daar was eens ’n seun.",
    explanation: "'Daar was eens ’n seun.' means 'Once upon a time there was a boy'.",
  },
  {
    prompt: "Watter sin sê 'He was called Sipho'?",
    options: ["Gelukkig het sy vriend die skoen gekry.", "Daar was eens ’n seun.", "Hy het Sipho geheet.", "Op ’n dag het hy sy skoen verloor."],
    answer: "Hy het Sipho geheet.",
    explanation: "'Hy het Sipho geheet.' means 'He was called Sipho'.",
  },
  {
    prompt: "Watter sin sê 'One day he lost his shoe'?",
    options: ["Gelukkig het sy vriend die skoen gekry.", "Hy was weer bly.", "Hy was hartseer.", "Op ’n dag het hy sy skoen verloor."],
    answer: "Op ’n dag het hy sy skoen verloor.",
    explanation: "'Op ’n dag het hy sy skoen verloor.' means 'One day he lost his shoe'.",
  },
  {
    prompt: "Watter sin sê 'He was sad'?",
    options: ["Hy was hartseer.", "Hy het Sipho geheet.", "Op ’n dag het hy sy skoen verloor.", "Hy was weer bly."],
    answer: "Hy was hartseer.",
    explanation: "'Hy was hartseer.' means 'He was sad'.",
  },
  {
    prompt: "Watter sin sê 'Luckily his friend found the shoe'?",
    options: ["Hy was weer bly. for a user at a school", "Gelukkig het sy vriend die skoen gekry.", "Op ’n dag het hy sy skoen verloor. in a lab", "Hy was hartseer. on a system in a program"],
    answer: "Gelukkig het sy vriend die skoen gekry.",
    explanation: "'Gelukkig het sy vriend die skoen gekry.' means 'Luckily his friend found the shoe'.",
  },
  {
    prompt: "Watter sin sê 'He was happy again'?",
    options: ["Daar was eens ’n meisie.", "Daar was eens ’n seun.", "Hy was weer bly.", "Gelukkig het sy vriend die skoen gekry."],
    answer: "Hy was weer bly.",
    explanation: "'Hy was weer bly.' means 'He was happy again'.",
  },
  {
    prompt: "Watter sin sê 'There was once a girl'?",
    options: ["Hy het Sipho geheet.", "Daar was eens ’n seun.", "Gelukkig het sy vriend die skoen gekry.", "Daar was eens ’n meisie."],
    answer: "Daar was eens ’n meisie.",
    explanation: "'Daar was eens ’n meisie.' means 'There was once a girl'.",
  },
];

const SimpleStory = () => (
  <AfrikaansTopic
    title="Skryf ’n Storie"
    subtitle="The beginning, the middle and the end, and a short past-tense story"
    learnSteps={learnSteps}
    task="afr6-simple-story-t1"
    bank={bank}
    speak="options"
  />
);

export default SimpleStory;
