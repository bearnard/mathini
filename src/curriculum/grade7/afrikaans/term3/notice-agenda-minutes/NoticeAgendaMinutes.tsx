import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A notice",
    content: slide(
      <>
        <Rule>A <Af>kennisgewing</Af> <En>notice</En> gives <Af>inligting aan 'n groep</Af> <En>information to a group</En>. It says <Af>wat</Af> <En>what</En> is happening, <Af>wanneer</Af> <En>when</En> and <Af>waar</Af> <En>where</En>, and who wrote it. Keep it short.</Rule>
        <OrderTiles tiles={["Kennisgewing: Skoolkoor", "Wanneer: Vrydag om 14:00", "Waar: in die saal", "Van: Mev. Pillay"]} aria={"The parts of a notice: Kennisgewing: Skoolkoor, Wanneer: Vrydag om 14:00, Waar: in die saal, Van: Mev. Pillay."} />
        <Worked
          title={"Read a notice"}
          steps={[
            <><Af>Wanneer: Vrydag om 14:00</Af> <En>When: Friday at 14:00</En> <SpeakButton text="Wanneer: Vrydag om 14:00" /></>,
            <><Af>Waar: in die saal</Af> <En>Where: in the hall</En></>,
          ]}
        />
        <Mistake>Leaving out the time or the place. The reader needs both.</Mistake>
      </>,
    ),
  },
  {
    title: "An agenda",
    content: slide(
      <>
        <Rule>An <Af>agenda</Af> <En>agenda</En> lists the items of a <Af>vergadering</Af> <En>meeting</En> in order. It is written <Af>voor die vergadering</Af> <En>before the meeting</En>. Typical items are <Af>Welkom</Af> <En>Welcome</En>, <Af>Verskonings</Af> <En>Apologies</En> and <Af>Sluiting</Af> <En>Closing</En>.</Rule>
        <OrderTiles tiles={["Welkom", "Verskonings", "Notule van die vorige vergadering", "Sluiting"]} aria={"An agenda in order: Welkom, Verskonings, Notule van die vorige vergadering, Sluiting."} />
        <Worked
          title={"Read an agenda"}
          steps={[
            <><Af>Welkom</Af> <En>Welcome</En> <SpeakButton text="Welkom" /></>,
            <><Af>Verskonings</Af> <En>Apologies</En></>,
            <><Af>Sluiting</Af> <En>Closing</En></>,
          ]}
        />
        <Mistake>Writing an agenda as a paragraph. List the items in order.</Mistake>
      </>,
    ),
  },
  {
    title: "Minutes",
    content: slide(
      <>
        <Rule>The <Af>notule</Af> <En>minutes</En> are the record of a meeting. They are written after the meeting. They list who was <Af>teenwoordig</Af> <En>present</En>, who sent <Af>verskonings</Af> and what the <Af>besluit</Af> <En>decision</En> was. Write in the past tense.</Rule>
        <TaggedBoxes items={[{"word": "notule", "tag": "minutes"}, {"word": "teenwoordig", "tag": "present"}, {"word": "besluit", "tag": "decision"}]} aria={"Afrikaans words: notule means minutes, teenwoordig means present, besluit means decision."} />
        <Worked
          title={"Record a decision"}
          steps={[
            <><Af>Die vergadering het om 14:00 begin.</Af> <En>The meeting started at 14:00.</En> <SpeakButton text="Die vergadering het om 14:00 begin." /></>,
            <><Af>Besluit: Die basaar is op 20 Junie.</Af> <En>Decision: The bazaar is on 20 June.</En></>,
          ]}
        />
        <Mistake>Writing the minutes before the meeting. Minutes record what happened.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>notice</En>?</>} answer={<><Af>Kennisgewing</Af>.</>} />
        <Check question={<>Which word means <En>meeting</En>?</>} answer={<><Af>Vergadering</Af>.</>} />
        <Check question={<>Which word means <En>minutes</En>?</>} answer={<><Af>Notule</Af>.</>} />
        <Check question={<>Which word means <En>apologies</En>?</>} answer={<><Af>Verskonings</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'notice'?",
    options: ["agenda", "notule", "kennisgewing", "handtekening"],
    answer: "kennisgewing",
    explanation: "'Kennisgewing' means 'notice'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'meeting'?",
    options: ["vergadering", "kennisgewing", "notule", "agenda"],
    answer: "vergadering",
    explanation: "'Vergadering' means 'meeting'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'minutes'?",
    options: ["agenda", "kennisgewing", "vergadering", "notule"],
    answer: "notule",
    explanation: "'Notule' means 'minutes'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'apologies'?",
    options: ["besluit", "verskonings", "kennisgewing", "sluiting"],
    answer: "verskonings",
    explanation: "'Verskonings' means 'apologies'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'decision'?",
    options: ["verskonings", "welkom", "besluit", "sluiting"],
    answer: "besluit",
    explanation: "'Besluit' means 'decision'.",
  },
  {
    prompt: "Watter woord beteken 'present' in die notule?",
    options: ["teenwoordig", "besluit", "verskonings", "sluiting"],
    answer: "teenwoordig",
    explanation: "'Teenwoordig' means 'present'.",
  },
  {
    prompt: "Watter woord vra 'what'?",
    options: ["wanneer", "waar", "van", "wat"],
    answer: "wat",
    explanation: "'Wat' means 'what'.",
  },
  {
    prompt: "Wat gee 'n kennisgewing?",
    options: ["'n lang storie oor 'n vakansie", "inligting aan 'n groep", "'n gedig", "'n rekening"],
    answer: "inligting aan 'n groep",
    explanation: "A notice gives information to a group.",
  },
  {
    prompt: "Wanneer skryf jy 'n agenda?",
    options: ["na die vergadering", "tydens die pouse op skool", "voor die vergadering", "lank na die vergadering"],
    answer: "voor die vergadering",
    explanation: "An agenda is written before the meeting.",
  },
  {
    prompt: "Wat is die eerste item op die agenda?",
    options: ["Welkom", "Sluiting", "Besluit", "Notule"],
    answer: "Welkom",
    explanation: "A meeting starts with a welcome.",
  },
  {
    prompt: "Watter sin sê 'The meeting started at 14:00'?",
    options: ["Waar: in die saal", "Besluit: Die basaar is op 20 Junie.", "Welkom", "Die vergadering het om 14:00 begin."],
    answer: "Die vergadering het om 14:00 begin.",
    explanation: "'Het begin' shows the past.",
  },
  {
    prompt: "Watter woord beteken 'closing' op die agenda?",
    options: ["Welkom", "Sluiting", "Verskonings", "Besluit"],
    answer: "Sluiting",
    explanation: "'Sluiting' means 'closing'.",
  },
];

const NoticeAgendaMinutes = () => (
  <AfrikaansTopic
    title={"Kennisgewing, agenda en notule"}
    subtitle={"A notice, an agenda and minutes"}
    learnSteps={learnSteps}
    task={"gr7-afr-notice-agenda-minutes-t3"}
    bank={bank}
    speak="options"
  />
);

export default NoticeAgendaMinutes;
