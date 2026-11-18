import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "An advertisement and a poster",
    content: slide(
      <>
        <Rule>An <Af>advertensie</Af> <En>advertisement</En> or a <Af>plakkaat</Af> <En>poster</En> wants people to buy something or come to an event. It has a big <Af>opskrif</Af> <En>heading</En>, the <Af>prys</Af> <En>price</En> or the facts, and a way to <Af>kontak</Af> <En>contact</En> the seller.</Rule>
        <MeaningPairs kind="same" pairs={[["advertensie", "advertisement"], ["plakkaat", "poster"], ["opskrif", "heading"]]} aria={"Afrikaans words with their English meaning: advertensie is advertisement, plakkaat is poster, opskrif is heading."} />
        <Worked
          title={"Read the parts"}
          steps={[
            <><Af>Sportdag</Af> <En>Sports day</En> <En>heading</En></>,
            <><Af>Vrydag om 9:00 by die skool.</Af> <En>Friday at 9:00 at the school.</En> <SpeakButton text="Vrydag om 9:00 by die skool." /></>,
          ]}
        />
        <Mistake>Putting too many words on a poster. Use a short heading and a few facts.</Mistake>
      </>,
    ),
  },
  {
    title: "Words that persuade",
    content: slide(
      <>
        <Rule>Use short, strong words to make people want to buy. <Af>Nuut</Af> <En>New</En>, <Af>spesiaal</Af> <En>special</En>, <Af>goedkoop</Af> <En>cheap</En> and <Af>gratis</Af> <En>free</En> are useful. A short sentence with an exclamation mark gets attention.</Rule>
        <TaggedBoxes items={[{"word": "nuut", "tag": "new"}, {"word": "goedkoop", "tag": "cheap"}, {"word": "gratis", "tag": "free"}]} aria={"Three Afrikaans words: nuut means new, goedkoop means cheap, gratis means free."} />
        <Worked
          title={"Write a slogan"}
          steps={[
            <><Af>Gratis roomys!</Af> <En>Free ice cream!</En> <SpeakButton text="Gratis roomys!" /></>,
            <><Af>Net R100.</Af> <En>Only R100.</En></>,
          ]}
        />
        <Mistake>Making promises that are not true. An advertisement must be honest.</Mistake>
      </>,
    ),
  },
  {
    title: "The layout",
    content: slide(
      <>
        <Rule>Put the <Af>opskrif</Af> at the top in big letters. Add <Af>Wanneer</Af> <En>When</En> and <Af>Waar</Af> <En>Where</En>. End with the <Af>kontak</Af> <En>contact</En> details so that people can ask questions.</Rule>
        <OrderTiles tiles={["Opskrif: SPORTDAG", "Wanneer: Vrydag om 9:00", "Waar: by die skool", "Kontak: Mnr. Dlamini"]} aria={"The parts of a poster in order: Opskrif: SPORTDAG, Wanneer: Vrydag om 9:00, Waar: by die skool, Kontak: Mnr. Dlamini."} />
        <Worked
          title={"Check a poster"}
          steps={[
            <><Af>Wanneer?</Af> <En>When?</En> <Af>Vrydag om 9:00.</Af></>,
            <><Af>Waar?</Af> <En>Where?</En> <Af>By die skool.</Af></>,
          ]}
        />
        <Mistake>Forgetting the contact details. Without them, nobody can reply.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>poster</En>?</>} answer={<><Af>Plakkaat</Af>.</>} />
        <Check question={<>Which word means <En>price</En>?</>} answer={<><Af>Prys</Af>.</>} />
        <Check question={<>Which word means <En>free</En>?</>} answer={<><Af>Gratis</Af>.</>} />
        <Check question={<>Which word asks <En>When</En>?</>} answer={<><Af>Wanneer</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'advertisement'?",
    options: ["plakkaat", "strooibiljet", "advertensie", "dagboek"],
    answer: "advertensie",
    explanation: "'Advertensie' means 'advertisement'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'poster'?",
    options: ["plakkaat", "advertensie", "prys", "opskrif"],
    answer: "plakkaat",
    explanation: "'Plakkaat' means 'poster'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'heading'?",
    options: ["prys", "kontak", "plakkaat", "opskrif"],
    answer: "opskrif",
    explanation: "'Opskrif' means 'heading'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'price'?",
    options: ["opskrif", "prys", "kontak", "plakkaat"],
    answer: "prys",
    explanation: "'Prys' means 'price'.",
  },
  {
    prompt: "Watter woord beteken 'new'?",
    options: ["gratis", "goedkoop", "nuut", "spesiaal"],
    answer: "nuut",
    explanation: "'Nuut' means 'new'.",
  },
  {
    prompt: "Watter woord beteken 'cheap'?",
    options: ["goedkoop", "nuut", "gratis", "spesiaal"],
    answer: "goedkoop",
    explanation: "'Goedkoop' means 'cheap'.",
  },
  {
    prompt: "Watter woord beteken 'free'?",
    options: ["nuut", "goedkoop", "spesiaal", "gratis"],
    answer: "gratis",
    explanation: "'Gratis' means 'free'.",
  },
  {
    prompt: "Watter woord beteken 'special'?",
    options: ["nuut", "spesiaal", "goedkoop", "gratis"],
    answer: "spesiaal",
    explanation: "'Spesiaal' means 'special'.",
  },
  {
    prompt: "Watter sin sê 'Free ice cream!'?",
    options: ["Net R100.", "Sportdag", "Gratis roomys!", "Vrydag om 9:00."],
    answer: "Gratis roomys!",
    explanation: "'Gratis roomys' means 'Free ice cream'.",
  },
  {
    prompt: "Wat beteken 'Net R100'?",
    options: ["Only R100.", "Free ice cream!", "Friday at 9:00.", "Sports day"],
    answer: "Only R100.",
    explanation: "'Net' means 'only'.",
  },
  {
    prompt: "Watter woord vra 'when'?",
    options: ["Waar", "Kontak", "Opskrif", "Wanneer"],
    answer: "Wanneer",
    explanation: "'Wanneer' means 'when'.",
  },
  {
    prompt: "Watter woord vra 'where'?",
    options: ["Wanneer", "Waar", "Kontak", "Prys"],
    answer: "Waar",
    explanation: "'Waar' means 'where'.",
  },
];

const AdvertPoster = () => (
  <AfrikaansTopic
    title={"Advertensie en plakkaat"}
    subtitle={"The parts of an advertisement, words that persuade and the layout of a poster"}
    learnSteps={learnSteps}
    task={"gr7-afr-advert-poster-t2"}
    bank={bank}
    speak="options"
  />
);

export default AdvertPoster;
