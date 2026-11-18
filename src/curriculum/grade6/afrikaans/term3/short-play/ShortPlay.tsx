import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Parts of a play",
    content: slide(
      <>
        <Rule>A <Af>toneelstuk</Af> <En>play</En> has <Af>karakters</Af> <En>characters</En> who speak. Their words are a <Af>gesprek</Af> <En>conversation</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["toneelstuk", "play"], ["karakters", "characters"], ["gesprek", "conversation"]]} aria="Afrikaans words with their English meaning: toneelstuk is play, karakters is characters, gesprek is conversation." />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>’n Toneelstuk</Af> <En>a play</En> is for acting.</>,
            <><Af>Die karakters</Af> <En>the characters</En> speak.</>,
          ]}
        />
        <Mistake>Writing a play like a story. A play is mostly what the characters say.</Mistake>
      </>,
    ),
  },
  {
    title: "How to write the lines",
    content: slide(
      <>
        <Rule>Write the name of the character, then a colon, then the words. Start each speaker on a new line.</Rule>
        <WordBoxes words={["Thandi:", "Goeie", "môre!"]} hot={[0]} aria="The sentence in boxes: Thandi: Goeie môre!." />
        <Worked
          title="Write the first lines"
          steps={[
            <><Af>Thandi: Goeie môre!</Af> <En>Thandi: Good morning!</En></>,
            <><Af>Sipho: Goeie môre, Thandi.</Af> <En>Sipho: Good morning, Thandi.</En></>,
          ]}
        />
        <Mistake>Leaving out the colon. Write the name and then a colon.</Mistake>
      </>,
    ),
  },
  {
    title: "A short conversation",
    content: slide(
      <>
        <Rule>Characters ask and answer. Use question words like <Af>hoe</Af> <En>how</En> and <Af>waarheen</Af> <En>where to</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["hoe", "how"], ["waarheen", "where to"], ["gesprek", "conversation"]]} aria="Afrikaans words with their English meaning: hoe is how, waarheen is where to, gesprek is conversation." />
        <Worked
          title="Write questions and answers"
          steps={[
            <><Af>Thandi: Hoe gaan dit?</Af> <En>Thandi: How are you?</En></>,
            <><Af>Sipho: Dit gaan goed, dankie.</Af> <En>Sipho: I am fine, thank you.</En></>,
          ]}
        />
        <Mistake>Forgetting the question mark. A question ends with a question mark.</Mistake>
      </>,
    ),
  },
  {
    title: "End the scene",
    content: slide(
      <>
        <Rule>Finish the conversation. Say where the character is going and say goodbye.</Rule>
        <WordBoxes words={["Ek", "gaan", "skool", "toe."]} hot={[1]} aria="The sentence in boxes: Ek gaan skool toe.." />
        <Worked
          title="Write the last lines"
          steps={[
            <><Af>Thandi: Waarheen gaan jy?</Af> <En>Thandi: Where are you going?</En></>,
            <><Af>Sipho: Ek gaan skool toe.</Af> <En>Sipho: I am going to school.</En></>,
          ]}
        />
        <Mistake>Ending with no goodbye. End the scene with a short last line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>play</En>?</>} answer={<><Af>Toneelstuk</Af>.</>} />
        <Check question={<>Which word means <En>characters</En>?</>} answer={<><Af>Karakters</Af>.</>} />
        <Check question={<>What comes after the name of a speaker?</>} answer={<>A colon.</>} />
        <Check question={<>How do you say <En>Good morning</En>?</>} answer={<><Af>Goeie môre.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'play'?",
    options: ["toneelstuk", "biblioteek", "waarheen", "karakters"],
    answer: "toneelstuk",
    explanation: "'Toneelstuk' means 'play'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'characters'?",
    options: ["hoe", "karakters", "toneelstuk", "gesprek"],
    answer: "karakters",
    explanation: "'Karakters' means 'characters'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'conversation'?",
    options: ["waarheen", "hoe", "gesprek", "karakters"],
    answer: "gesprek",
    explanation: "'Gesprek' means 'conversation'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'how'?",
    options: ["gesprek", "toneelstuk", "karakters", "hoe"],
    answer: "hoe",
    explanation: "'Hoe' means 'how'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'where to'?",
    options: ["waarheen", "hoe", "gesprek", "karakters"],
    answer: "waarheen",
    explanation: "'Waarheen' means 'where to'.",
  },
  {
    prompt: "Watter sin sê 'Thandi: Good morning!'?",
    options: ["Sipho: Goeie môre, Thandi.", "Thandi: Goeie môre!", "Ek gaan skool toe.", "Sipho: Dit gaan goed, dankie."],
    answer: "Thandi: Goeie môre!",
    explanation: "'Thandi: Goeie môre!' means 'Thandi: Good morning!'.",
  },
  {
    prompt: "Watter sin sê 'Sipho: Good morning, Thandi.'?",
    options: ["Sipho: Dit gaan goed, dankie.", "Thandi: Goeie môre!", "Sipho: Goeie môre, Thandi.", "Thandi: Hoe gaan dit?"],
    answer: "Sipho: Goeie môre, Thandi.",
    explanation: "'Sipho: Goeie môre, Thandi.' means 'Sipho: Good morning, Thandi.'.",
  },
  {
    prompt: "Watter sin sê 'Thandi: How are you?'?",
    options: ["Thandi: Waarheen gaan jy?", "Sipho: Dit gaan goed, dankie.", "Thandi: Goeie môre!", "Thandi: Hoe gaan dit?"],
    answer: "Thandi: Hoe gaan dit?",
    explanation: "'Thandi: Hoe gaan dit?' means 'Thandi: How are you?'.",
  },
  {
    prompt: "Watter sin sê 'Sipho: I am fine, thank you.'?",
    options: ["Sipho: Dit gaan goed, dankie.", "Sipho: Ek gaan skool toe. in a program", "Ek gaan skool toe. on a device in a file", "Thandi: Waarheen gaan jy? in use"],
    answer: "Sipho: Dit gaan goed, dankie.",
    explanation: "'Sipho: Dit gaan goed, dankie.' means 'Sipho: I am fine, thank you.'.",
  },
  {
    prompt: "Watter sin sê 'Thandi: Where are you going?'?",
    options: ["Thandi: Hoe gaan dit?", "Thandi: Waarheen gaan jy?", "Sipho: Ek gaan skool toe.", "Sipho: Goeie môre, Thandi."],
    answer: "Thandi: Waarheen gaan jy?",
    explanation: "'Thandi: Waarheen gaan jy?' means 'Thandi: Where are you going?'.",
  },
  {
    prompt: "Watter sin sê 'Sipho: I am going to school.'?",
    options: ["Thandi: Waarheen gaan jy?", "Thandi: Goeie môre!", "Sipho: Ek gaan skool toe.", "Sipho: Goeie môre, Thandi."],
    answer: "Sipho: Ek gaan skool toe.",
    explanation: "'Sipho: Ek gaan skool toe.' means 'Sipho: I am going to school.'.",
  },
  {
    prompt: "Watter sin sê 'I am going to school'?",
    options: ["Thandi: Hoe gaan dit?", "Sipho: Dit gaan goed, dankie.", "Thandi: Goeie môre!", "Ek gaan skool toe."],
    answer: "Ek gaan skool toe.",
    explanation: "'Ek gaan skool toe.' means 'I am going to school'.",
  },
];

const ShortPlay = () => (
  <AfrikaansTopic
    title="Skryf ’n Toneelstuk"
    subtitle="Characters, lines with a name and a colon, and a short conversation"
    learnSteps={learnSteps}
    task="afr6-short-play-t3"
    bank={bank}
    speak="options"
  />
);

export default ShortPlay;
