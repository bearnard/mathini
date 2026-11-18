import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Opinion and reason",
    content: slide(
      <>
        <Rule>An <Af>mening</Af> <En>opinion</En> says what you think. A <Af>rede</Af> <En>reason</En> says why. Use <Af>want</Af> <En>because</En> to give the reason.</Rule>
        <MeaningPairs kind="same" pairs={[["mening", "opinion"], ["rede", "reason"], ["want", "because"]]} aria="Afrikaans words with their English meaning: mening is opinion, rede is reason, want is because." />
        <Worked
          title="Give an opinion and a reason"
          steps={[
            <><Af>Ek dink sport is belangrik.</Af> <En>I think sport is important.</En></>,
            <><Af>Ek hou van sokker, want dit is lekker.</Af> <En>I like soccer because it is fun.</En></>,
          ]}
        />
        <Mistake>Giving an opinion with no reason. Always add want and a reason.</Mistake>
      </>,
    ),
  },
  {
    title: "Say what you think",
    content: slide(
      <>
        <Rule>Start with <Af>Ek dink</Af> <En>I think</En>. Say if you agree: <Af>Ek stem saam.</Af> <En>I agree.</En></Rule>
        <WordBoxes words={["Ek", "dink", "sport", "is", "belangrik."]} hot={[0, 1]} aria="The sentence in boxes: Ek dink sport is belangrik.." />
        <Worked
          title="Write your opinion"
          steps={[
            <><Af>Ek dink sport is belangrik.</Af> <En>I think sport is important.</En></>,
            <><Af>Ek stem saam.</Af> <En>I agree.</En></>,
            <><Af>Ek dink dit is lekker.</Af> <En>I think it is fun.</En></>,
          ]}
        />
        <Mistake>Writing only yes or no. Say what you think in a full sentence.</Mistake>
      </>,
    ),
  },
  {
    title: "Disagree politely",
    content: slide(
      <>
        <Rule>To disagree, say <Af>Ek stem nie saam nie.</Af> <En>I do not agree.</En> Then give a reason.</Rule>
        <WordBoxes words={["Ek", "stem", "nie", "saam", "nie."]} hot={[2, 4]} aria="The sentence in boxes: Ek stem nie saam nie.." />
        <Worked
          title="Write a polite sentence"
          steps={[
            <><Af>Ek stem nie saam nie.</Af> <En>I do not agree.</En></>,
            <><Af>Dit is my mening.</Af> <En>It is my opinion.</En></>,
          ]}
        />
        <Mistake>Using one nie. Afrikaans needs two: nie saam nie.</Mistake>
      </>,
    ),
  },
  {
    title: "Put it together",
    content: slide(
      <>
        <Rule>A short paragraph has your opinion, a reason and an example. You can start with <Af>Eerstens</Af> <En>Firstly</En>.</Rule>
        <OrderTiles tiles={["mening", "rede", "voorbeeld"]} aria="The steps in order: mening, rede, voorbeeld." />
        <Worked
          title="Build the paragraph"
          steps={[
            <><Af>Eerstens is dit goed vir jou gesondheid.</Af> <En>Firstly it is good for your health.</En></>,
          ]}
        />
        <Mistake>Writing three opinions in one paragraph. Keep to one idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>because</En>?</>} answer={<><Af>Want</Af>.</>} />
        <Check question={<>Which word means <En>reason</En>?</>} answer={<><Af>Rede</Af>.</>} />
        <Check question={<>How do you say <En>I agree</En>?</>} answer={<><Af>Ek stem saam.</Af></>} />
        <Check question={<>How many nie words in: I do not agree?</>} answer={<>Two.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'opinion'?",
    options: ["mening", "want", "rede", "voorbeeld"],
    answer: "mening",
    explanation: "'Mening' means 'opinion'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'reason'?",
    options: ["want", "rede", "eerstens", "voorbeeld"],
    answer: "rede",
    explanation: "'Rede' means 'reason'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'because'?",
    options: ["mening", "voorbeeld", "want", "eerstens"],
    answer: "want",
    explanation: "'Want' means 'because'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'firstly'?",
    options: ["rede", "mening", "voorbeeld", "eerstens"],
    answer: "eerstens",
    explanation: "'Eerstens' means 'firstly'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'example'?",
    options: ["voorbeeld", "biblioteek", "want", "eerstens"],
    answer: "voorbeeld",
    explanation: "'Voorbeeld' means 'example'.",
  },
  {
    prompt: "Watter sin sê 'I think sport is important'?",
    options: ["Ek hou van sokker, want dit is lekker.", "Ek dink sport is belangrik.", "Ek stem saam.", "Eerstens is dit goed vir jou gesondheid."],
    answer: "Ek dink sport is belangrik.",
    explanation: "'Ek dink sport is belangrik.' means 'I think sport is important'.",
  },
  {
    prompt: "Watter sin sê 'I like soccer because it is fun'?",
    options: ["Eerstens is dit goed vir jou gesondheid.", "Ek dink sport is belangrik.", "Ek hou van sokker, want dit is lekker.", "Ek stem saam."],
    answer: "Ek hou van sokker, want dit is lekker.",
    explanation: "'Ek hou van sokker, want dit is lekker.' means 'I like soccer because it is fun'.",
  },
  {
    prompt: "Hoe sê jy 'I agree' in Afrikaans?",
    options: ["Eerstens is dit goed vir jou gesondheid.", "Ek stem nie saam nie.", "Ek hou van sokker, want dit is lekker.", "Ek stem saam."],
    answer: "Ek stem saam.",
    explanation: "'Ek stem saam.' means 'I agree'.",
  },
  {
    prompt: "Watter sin sê 'I do not agree'?",
    options: ["Ek stem nie saam nie.", "Ek hou van sokker, want dit is lekker.", "Eerstens is dit goed vir jou gesondheid.", "Ek dink sport is belangrik."],
    answer: "Ek stem nie saam nie.",
    explanation: "'Ek stem nie saam nie.' means 'I do not agree'.",
  },
  {
    prompt: "Watter sin sê 'It is my opinion'?",
    options: ["Ek dink sport is belangrik.", "Dit is my mening.", "Ek dink dit is lekker.", "Ek stem saam. in a program"],
    answer: "Dit is my mening.",
    explanation: "'Dit is my mening.' means 'It is my opinion'.",
  },
  {
    prompt: "Watter sin sê 'Firstly it is good for your health'?",
    options: ["Ek stem nie saam nie. in a lab for a task", "Ek stem saam. on a system in a program", "Eerstens is dit goed vir jou gesondheid.", "Ek dink dit is lekker. at a school on a device"],
    answer: "Eerstens is dit goed vir jou gesondheid.",
    explanation: "'Eerstens is dit goed vir jou gesondheid.' means 'Firstly it is good for your health'.",
  },
  {
    prompt: "Watter sin sê 'I think it is fun'?",
    options: ["Dit is my mening.", "Ek stem saam.", "Eerstens is dit goed vir jou gesondheid.", "Ek dink dit is lekker."],
    answer: "Ek dink dit is lekker.",
    explanation: "'Ek dink dit is lekker.' means 'I think it is fun'.",
  },
];

const OpinionParagraph = () => (
  <AfrikaansTopic
    title="Skryf ’n Mening"
    subtitle="Your opinion, a reason with want, and agreeing or disagreeing"
    learnSteps={learnSteps}
    task="afr6-opinion-paragraph-t2"
    bank={bank}
    speak="options"
  />
);

export default OpinionParagraph;
