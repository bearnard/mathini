import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Beeld en simbool",
    content: slide(
      <>
        <Rule>A <Af>beeld</Af> <En>image</En> makes the reader see, hear or feel something. A <Af>simbool</Af> <En>symbol</En> is a thing that stands for an idea. Together they carry the <Af>stemming</Af> <En>mood</En> of the poem.</Rule>
        <PoemBox label={"Gedig A"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die leë stoel staan nog by die venster,", "asof Oupa nog daar sit en kyk.", "Die tee word koud in die koppie,", "en die klok tik net aan."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The empty chair still stands by the window, as if Grandpa still sits there looking. The tea gets cold in the cup, and the clock just keeps ticking.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["beeld", "image"], ["simbool", "symbol"], ["stemming", "mood"]]} aria={"Afrikaans words with their English meaning: beeld is image, simbool is symbol, stemming is mood."} />
        <Worked
          title={"Read Gedig A"}
          steps={[
            <><Af>Die tee word koud.</Af> <En>The tea gets cold.</En> <SpeakButton text="Die tee word koud." /> <Af>Dit is 'n beeld van gevoel.</Af> <En>It is an image of touch.</En></>,
            <><Af>Die leë stoel is 'n simbool van verlies.</Af> <En>The empty chair is a symbol of loss.</En></>,
            <><Af>Die stemming is hartseer.</Af> <En>The mood is sad.</En></>,
          ]}
        />
        <Mistake>Naming an image without saying what it suggests. Add the feeling or idea.</Mistake>
      </>,
    ),
  },
  {
    title: "Ironie en kontras",
    content: slide(
      <>
        <Rule><Af>Ironie</Af> <En>Irony</En> is when the words or events are the opposite of what you expect. A <Af>kontras</Af> <En>contrast</En> puts two opposite things side by side.</Rule>
        <PoemBox label={"Gedig B"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["\"Wat 'n lieflike dag,\" sê hy in die storm,", "terwyl die reën in sy skoene loop."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: "What a lovely day," he says in the storm, while the rain runs into his shoes.</p>
        </PoemBox>
        <PoemBox label={"Gedig C"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die winkel blink met goud en lig,", "buite sit 'n kind met kaal voete."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The shop shines with gold and light, outside a child sits with bare feet.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "ironie", "tag": "opposite of expected"}, {"word": "kontras", "tag": "two opposites together"}]} aria={"Two Afrikaans words: ironie means irony, when words or events are the opposite of what you expect, and kontras means contrast, two opposite things side by side."} />
        <Worked
          title={"Find them"}
          steps={[
            <><Af>Wat 'n lieflike dag, sê hy in die storm.</Af> <En>What a lovely day, he says in the storm.</En> <SpeakButton text="Wat 'n lieflike dag, sê hy in die storm." /> <Af>Dit is ironie.</Af> <En>It is irony.</En></>,
            <><Af>Die winkel blink, maar buite sit 'n kind met kaal voete.</Af> <En>The shop shines, but outside a child sits with bare feet.</En> <Af>Dit is 'n kontras.</Af> <En>It is a contrast.</En></>,
          ]}
        />
        <Mistake>Calling anything surprising irony. Irony needs a gap between the words and the situation.</Mistake>
      </>,
    ),
  },
  {
    title: "Verduidelik 'n beeld",
    content: slide(
      <>
        <Rule>To explain an <Af>beeld</Af>: <Af>haal aan</Af> <En>quote</En> the words, say what they show, and link them to the <Af>stemming</Af>.</Rule>
        
        <OrderTiles tiles={["Haal aan.", "Sê wat dit wys.", "Verbind met die stemming."]} aria={"Three steps in order: Haal aan, Sê wat dit wys, Verbind met die stemming."} />
        <Worked
          title={"A model answer"}
          steps={[
            <><Af>Haal aan: die tee word koud.</Af> <En>Quote: the tea gets cold.</En></>,
            <><Af>Dit wys dat tyd verbygaan en niemand drink nie.</Af> <En>It shows that time passes and nobody drinks.</En></>,
            <><Af>Dit pas by die hartseer stemming.</Af> <En>It fits the sad mood.</En></>,
          ]}
        />
        <Mistake>Quoting without explaining. A quotation alone is not an answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>symbol</En>?</>} answer={<><Af>Simbool</Af>.</>} />
        <Check question={<>Which word means <En>irony</En>?</>} answer={<><Af>Ironie</Af>.</>} />
        <Check question={<>Which word means <En>contrast</En>?</>} answer={<><Af>Kontras</Af>.</>} />
        <Check question={<>Which word means <En>image</En>?</>} answer={<><Af>Beeld</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'symbol'?",
    options: ["beeld", "ironie", "simbool", "kontras"],
    answer: "simbool",
    explanation: "'Simbool' means 'symbol'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'irony'?",
    options: ["ironie", "simbool", "kontras", "beeld"],
    answer: "ironie",
    explanation: "'Ironie' means 'irony'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'image' in 'n gedig?",
    options: ["simbool", "ironie", "kontras", "beeld"],
    answer: "beeld",
    explanation: "'Beeld' means 'image'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'contrast'?",
    options: ["beeld", "kontras", "ironie", "simbool"],
    answer: "kontras",
    explanation: "'Kontras' means 'contrast'.",
  },
  {
    prompt: "Wat is 'n simbool?",
    options: ["'n Woord wat soos 'n klank klink", "'n Reël wat in die gedig terugkom", "Iets wat vir 'n idee staan", "'n Vergelyking met die woord soos"],
    answer: "Iets wat vir 'n idee staan",
    explanation: "A symbol stands for an idea.",
  },
  {
    prompt: "Waarvoor staan 'n wit duif gewoonlik?",
    options: ["Vrede", "Oorlog", "Honger", "Spoed"],
    answer: "Vrede",
    explanation: "A white dove usually stands for peace.",
  },
  {
    prompt: "Waarvoor staan 'n toe deur in 'n gedig dikwels?",
    options: ["Nuwe vriende wat kom kuier", "'n Lang reis", "Warm kos", "Verlore geleentheid"],
    answer: "Verlore geleentheid",
    explanation: "A closed door often stands for a lost chance.",
  },
  {
    prompt: "Watter reël is ironie?",
    options: ["Dit is 'n warm dag en ons swem", "'Lekker weer!' sê hy in die storm", "Die storm het gisteraand die dak afgewaai", "Hy sê dankie vir die koffie"],
    answer: "'Lekker weer!' sê hy in die storm",
    explanation: "The words say the opposite of the situation.",
  },
  {
    prompt: "Wat is 'n kontras?",
    options: ["Twee woorde wat rym", "'n Reël wat herhaal word", "Twee teenoorgestelde dinge saam", "'n Klank wat soos sy betekenis klink"],
    answer: "Twee teenoorgestelde dinge saam",
    explanation: "A contrast sets two opposite things side by side.",
  },
  {
    prompt: "Watter reëls wys 'n kontras?",
    options: ["Lig in die dorp, maar donker by die kind", "Die dorp is groot en die kind is klein", "Die kind loop saam met sy ma na die dorp", "Die dorp is by die see"],
    answer: "Lig in die dorp, maar donker by die kind",
    explanation: "Light and dark are opposites.",
  },
  {
    prompt: "Wat moet jy doen nadat jy 'n beeld aangehaal het?",
    options: ["Tel al die woorde in die reël", "Skryf dit weer", "Verander dit in prosa", "Verduidelik wat dit wys"],
    answer: "Verduidelik wat dit wys",
    explanation: "The explanation is the point of the answer.",
  },
  {
    prompt: "Watter sintuig spreek 'koue tee in 'n koppie' aan?",
    options: ["Gehoor", "Gevoel", "Reuk", "Sig"],
    answer: "Gevoel",
    explanation: "Cold is felt by touch.",
  },
];

const ImagerySymbol = () => (
  <AfrikaansTopic
    title={"Beeld, simbool en ironie"}
    subtitle={"Beeld, simbool, ironie en kontras in 'n gedig"}
    learnSteps={learnSteps}
    task={"gr9-afr-imagery-symbol-t2"}
    bank={bank}
    speak="options"
  />
);

export default ImagerySymbol;
