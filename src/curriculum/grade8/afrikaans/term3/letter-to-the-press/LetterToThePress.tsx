import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Who you write to",
    content: slide(
      <>
        <Rule>A <Af>brief aan die pers</Af> <En>letter to the press</En> is written to the <Af>redakteur</Af> <En>editor</En> of a newspaper. It gives your view on a news report. The greeting is <Af>Geagte Redakteur</Af> <En>Dear Editor</En>.</Rule>
        <LetterLayout parts={["Adres en datum", "Geagte Redakteur,", "Ek stem nie saam nie.", "Vriendelike groete"]} aria="The parts of the text from top to bottom: Adres en datum, Geagte Redakteur,, Ek stem nie saam nie., Vriendelike groete." />
        <Worked
          title="Start the letter"
          steps={[
            <><Af>Geagte Redakteur,</Af> <En>Dear Editor,</En> <SpeakButton text="Geagte Redakteur," /></>,
            <><Af>Ek skryf oor u berig van 1 Augustus.</Af> <En>I am writing about your report of 1 August.</En></>,
            <>You write <Af>oor 'n berig in die koerant</Af> <En>about a report in the newspaper</En>.</>,
          ]}
        />
        <Mistake>Starting with <Af>Liewe Thandi</Af>. A letter to the editor is formal.</Mistake>
      </>,
    ),
  },
  {
    title: "Give your view and your reasons",
    content: slide(
      <>
        <Rule>Say what you think, then give reasons. Use <Af>eerstens</Af> <En>firstly</En> and <Af>tweedens</Af> <En>secondly</En>. Say <Af>Ek stem nie saam nie</Af> <En>I do not agree</En> or <Af>Ek stem saam</Af> <En>I agree</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["eerstens", "firstly"], ["tweedens", "secondly"], ["Ek stem saam", "I agree"]]} aria="Afrikaans words with their English meaning: eerstens is firstly, tweedens is secondly, Ek stem saam is I agree." />
        <Worked
          title="Argue politely"
          steps={[
            <><Af>Ek stem nie saam nie.</Af> <En>I do not agree.</En> <SpeakButton text="Ek stem nie saam nie." /></>,
            <><Af>Eerstens het baie leerders nie boeke tuis nie.</Af> <En>Firstly, many learners have no books at home.</En></>,
            <>Use <Af>beleefde, formele taal</Af> <En>polite, formal language</En>. Give <Af>redes vir jou mening</Af> <En>reasons for your view</En>.</>,
          ]}
        />
        <Mistake>Insulting the writer. Give reasons and stay polite.</Mistake>
      </>,
    ),
  },
  {
    title: "A polite request and a closing",
    content: slide(
      <>
        <Rule>End with a request and a formal closing. Use <Af>Ek vra die raad om die biblioteek oop te hou.</Af> <En>I ask the council to keep the library open.</En> Close with <Af>Vriendelike groete</Af> <En>Kind regards</En> and your name.</Rule>
        <OrderTiles tiles={["Geagte Redakteur", "Ek stem nie saam nie", "Eerstens ...", "Vriendelike groete"]} aria="The steps in order: Geagte Redakteur, Ek stem nie saam nie, Eerstens ..., Vriendelike groete." />
        <Worked
          title="Finish the letter"
          steps={[
            <><Af>Ek vra die raad om die biblioteek oop te hou.</Af> <En>I ask the council to keep the library open.</En> <SpeakButton text="Ek vra die raad om die biblioteek oop te hou." /></>,
            <><Af>Vriendelike groete,</Af> <Af>Zinhle Mkhize</Af> <En>Kind regards, Zinhle Mkhize</En></>,
          ]}
        />
        <Mistake>Closing with <Af>Jou vriendin</Af>. That closing is for a friend.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>editor</En>?</>} answer={<><Af>Redakteur</Af>.</>} />
        <Check question={<>Which greeting suits a letter to the press?</>} answer={<><Af>Geagte Redakteur,</Af></>} />
        <Check question={<>Which word means <En>firstly</En>?</>} answer={<><Af>Eerstens</Af>.</>} />
        <Check question={<>Which closing is formal?</>} answer={<><Af>Vriendelike groete</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'editor'?",
    options: ["leser", "verslaggewer", "skrywer", "redakteur"],
    answer: "redakteur",
    explanation: "'Redakteur' means 'editor'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'firstly'?",
    options: ["tweedens", "laastens", "eerstens", "daarna"],
    answer: "eerstens",
    explanation: "'Eerstens' means 'firstly'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'secondly'?",
    options: ["eerstens", "tweedens", "laastens", "dan"],
    answer: "tweedens",
    explanation: "'Tweedens' means 'secondly'.",
  },
  {
    prompt: "Hoe begin 'n brief aan die pers?",
    options: ["Liewe Thandi nou", "Geagte Redakteur", "Liewe Dagboek nou", "Hallo almal hier"],
    answer: "Geagte Redakteur",
    explanation: "It is a formal letter to the editor.",
  },
  {
    prompt: "Watter slot pas by 'n brief aan die pers?",
    options: ["Jou vriendin in a lab", "Groete, bokkie on a system", "Vriendelike groete", "Tot later at a school"],
    answer: "Vriendelike groete",
    explanation: "A formal closing.",
  },
  {
    prompt: "Watter sin sê 'I do not agree'?",
    options: ["Skryf gou terug aan my.", "Ek stem saam met jou hier.", "Ek hoop jy is gesond nou.", "Ek stem nie saam nie."],
    answer: "Ek stem nie saam nie.",
    explanation: "'Ek stem nie saam nie' means 'I do not agree'.",
  },
  {
    prompt: "Watter sin wys dat jy dit eens is?",
    options: ["Ek stem saam.", "Ek stem nie saam met jou nie.", "Ek is moeg en wil gaan slaap.", "Dit was lekker by die strand."],
    answer: "Ek stem saam.",
    explanation: "'Ek stem saam' means 'I agree'.",
  },
  {
    prompt: "Waaroor skryf jy in 'n brief aan die pers?",
    options: ["oor jou vakansie on a system in a program", "oor jou dagboek at a school on a device", "oor 'n berig in die koerant", "oor 'n resep for a task in use"],
    answer: "oor 'n berig in die koerant",
    explanation: "You react to a news report.",
  },
  {
    prompt: "Watter sin gee 'n rede?",
    options: ["Eerstens het baie leerders nie boeke tuis nie.", "Dit was baie warm gister in ons dorp, het ek gehoor.", "Ek is baie lief vir koek en ander lekker kos by die huis.", "Skryf my gou terug, want ek wil hoor hoe dit gaan."],
    answer: "Eerstens het baie leerders nie boeke tuis nie.",
    explanation: "It gives a reason with 'eerstens'.",
  },
  {
    prompt: "Watter sin is 'n beleefde versoek?",
    options: ["Ek vra die raad om die biblioteek oop te hou.", "Die biblioteek is stom en ek haat die hele raad.", "Ek is nie bly met die biblioteek van die dorp nie.", "Wanneer gaan die biblioteek weer oopmaak, vra ek?"],
    answer: "Ek vra die raad om die biblioteek oop te hou.",
    explanation: "A polite request.",
  },
  {
    prompt: "Watter taal pas by 'n brief aan die pers?",
    options: ["beleefde, formele taal", "slang", "net gevoelens on a system", "kort SMS-taal at a school"],
    answer: "beleefde, formele taal",
    explanation: "Formal and polite.",
  },
  {
    prompt: "Wat moet 'n goeie brief aan die pers hê?",
    options: ["net 'n grap for a user at a school", "geen redes nie in a lab", "redes vir jou mening", "'n lang storie on a system"],
    answer: "redes vir jou mening",
    explanation: "Reasons support the view.",
  },
];

const LetterToThePress = () => (
  <AfrikaansTopic
    title="Brief aan die pers"
    subtitle="Writing to the editor: the greeting, your view with reasons, and a polite request"
    learnSteps={learnSteps}
    task="gr8-afr-letter-to-the-press-t3"
    bank={bank}
    speak="options"
  />
);

export default LetterToThePress;
