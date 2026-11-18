import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Vergelyking en metafoor",
    content: slide(
      <>
        <Rule>A <Af>vergelyking</Af> <En>simile</En> uses <Af>soos</Af> <En>like</En>. A <Af>metafoor</Af> <En>metaphor</En> says that one thing <Af>is</Af> <En>is</En> another. Both are <Af>beeldspraak</Af> <En>figurative language</En>.</Rule>
        <PoemBox label={"Gedig A"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die markplein brul soos 'n leeu,", "'n duisend stemme skree my naam,", "die motors toet en die remme gil,", "en die hele stad wag vir my."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The market square roars like a lion, a thousand voices shout my name, the cars hoot and the brakes scream, and the whole city waits for me.</p>
        </PoemBox>
        <PoemBox label={"Gedig C"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die nag is 'n swart kombers oor die dorp,", "die maan kyk stil op ons neer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The night is a black blanket over the town, the moon looks down quietly at us.</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["vergelyking", "simile"], ["metafoor", "metaphor"], ["beeldspraak", "figurative language"]]} aria={"Afrikaans words with their English meaning: vergelyking is simile, metafoor is metaphor, beeldspraak is figurative language."} />
        <Worked
          title={"Find them"}
          steps={[
            <><Af>Die markplein brul soos 'n leeu.</Af> <En>The market square roars like a lion.</En> <SpeakButton text="Die markplein brul soos 'n leeu." /> <Af>Dit is 'n vergelyking.</Af> <En>It is a simile.</En></>,
            <><Af>Die nag is 'n swart kombers.</Af> <En>The night is a black blanket.</En> <Af>Dit is 'n metafoor.</Af> <En>It is a metaphor.</En></>,
          ]}
        />
        <Mistake>Calling a <Af>metafoor</Af> a <Af>vergelyking</Af>. A simile has <Af>soos</Af>; a metaphor does not.</Mistake>
      </>,
    ),
  },
  {
    title: "Personifikasie en hiperbool",
    content: slide(
      <>
        <Rule><Af>Personifikasie</Af> <En>Personification</En> gives a thing the actions of a person. A <Af>hiperbool</Af> <En>hyperbole</En> is a big exaggeration (<Af>oordrywing</Af> <En>exaggeration</En>).</Rule>
        <PoemBox label={"Gedig C"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die nag is 'n swart kombers oor die dorp,", "die maan kyk stil op ons neer."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The night is a black blanket over the town, the moon looks down quietly at us.</p>
        </PoemBox>
        <PoemBox label={"Gedig A"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die markplein brul soos 'n leeu,", "'n duisend stemme skree my naam,", "die motors toet en die remme gil,", "en die hele stad wag vir my."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The market square roars like a lion, a thousand voices shout my name, the cars hoot and the brakes scream, and the whole city waits for me.</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "personifikasie", "tag": "acts like a person"}, {"word": "hiperbool", "tag": "big exaggeration"}]} aria={"Two Afrikaans words: personifikasie means personification, which gives a thing the actions of a person, and hiperbool means hyperbole, a big exaggeration."} />
        <Worked
          title={"Find them"}
          steps={[
            <><Af>Die maan kyk stil op ons neer.</Af> <En>The moon looks down quietly at us.</En> <SpeakButton text="Die maan kyk stil op ons neer." /> <Af>Dit is personifikasie.</Af> <En>It is personification.</En></>,
            <><Af>'n duisend stemme skree my naam</Af> <En>a thousand voices shout my name</En> <Af>Dit is 'n hiperbool.</Af> <En>It is a hyperbole.</En></>,
          ]}
        />
        <Mistake>Thinking that a hyperbole must be true. It is an exaggeration to show a strong feeling.</Mistake>
      </>,
    ),
  },
  {
    title: "Klankeffekte: onomatopee",
    content: slide(
      <>
        <Rule>An <Af>onomatopee</Af> <En>onomatopoeia</En> is a word that sounds like its meaning, such as <Af>tik-tak</Af> <En>tick-tock</En> and <Af>miaau</Af> <En>meow</En>. It is a <Af>klankeffek</Af> <En>sound effect</En>.</Rule>
        <PoemBox label={"Gedig B"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Tik-tak, tik-tak, die horlosie praat,", "drup-drup, die reën val op die dak,", "en die kat skrik wakker: miaau!"]}>
          <p className="mt-2 text-xs italic text-slate-600">English: Tick-tock, tick-tock, the clock talks, drip-drip, the rain falls on the roof, and the cat wakes with a fright: meow!</p>
        </PoemBox>
        <TaggedBoxes items={[{"word": "onomatopee", "tag": "sounds like meaning"}, {"word": "klankeffek", "tag": "sound effect"}]} aria={"Two Afrikaans words: onomatopee means onomatopoeia, a word that sounds like its meaning, and klankeffek means sound effect."} />
        <Worked
          title={"Read Gedig B"}
          steps={[
            <><Af>Tik-tak</Af> <En>Tick-tock</En> <Af>drup-drup</Af> <En>drip-drip</En> <Af>miaau</Af> <En>meow</En></>,
            <><Af>Jy kan die klank hoor.</Af> <En>You can hear the sound.</En></>,
          ]}
        />
        <Mistake>Naming the sound word without saying what it does. Say that it lets the reader hear the sound.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>simile</En>?</>} answer={<><Af>Vergelyking</Af>.</>} />
        <Check question={<>Which word means <En>hyperbole</En>?</>} answer={<><Af>Hiperbool</Af>.</>} />
        <Check question={<>Which word means <En>onomatopoeia</En>?</>} answer={<><Af>Onomatopee</Af>.</>} />
        <Check question={<>Which sentence means <En>The moon looks down</En>?</>} answer={<><Af>Die maan kyk neer.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'hyperbole'?",
    options: ["metafoor", "vergelyking", "hiperbool", "personifikasie"],
    answer: "hiperbool",
    explanation: "'Hiperbool' means 'hyperbole'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'onomatopoeia'?",
    options: ["onomatopee", "alliterasie", "vergelyking", "personifikasie"],
    answer: "onomatopee",
    explanation: "'Onomatopee' means 'onomatopoeia'.",
  },
  {
    prompt: "Watter reël is 'n vergelyking?",
    options: ["Die klas is 'n byekorf", "Die son lag oor die veld", "Ek het 'n miljoen boeke gelees", "Sy stem is sag soos fluweel"],
    answer: "Sy stem is sag soos fluweel",
    explanation: "The word 'soos' shows a simile.",
  },
  {
    prompt: "Watter reël is 'n metafoor?",
    options: ["Die klas is so stil soos 'n muis", "Die klas is 'n byekorf", "Die klas lag en dans", "Daar is 'n duisend kinders in die klas"],
    answer: "Die klas is 'n byekorf",
    explanation: "It says that the class is a beehive.",
  },
  {
    prompt: "Watter reël is personifikasie?",
    options: ["Die veld is so groen soos gras", "Die veld is 'n groot tapyt", "Die son lag oor die veld", "Die veld is baie groot"],
    answer: "Die son lag oor die veld",
    explanation: "A sun cannot laugh like a person.",
  },
  {
    prompt: "Watter reël is 'n hiperbool?",
    options: ["Ek het 'n miljoen keer gebel", "Ek het twee keer gebel", "Ek het soos 'n mal mens baie gebel", "Die telefoon is 'n vriend"],
    answer: "Ek het 'n miljoen keer gebel",
    explanation: "A million calls is an exaggeration.",
  },
  {
    prompt: "Watter woord is onomatopee?",
    options: ["stil", "groot", "tafel", "plof"],
    answer: "plof",
    explanation: "'Plof' sounds like the thing it names.",
  },
  {
    prompt: "Watter een is 'n klank wat 'n kat maak?",
    options: ["Die kat is groot", "miaau", "Die kat slaap baie", "Die kat het vier pote"],
    answer: "miaau",
    explanation: "'Miaau' sounds like a cat, so it is an onomatopoeia.",
  },
  {
    prompt: "Wat wys die hiperbool 'ek wag al 'n eeu'?",
    options: ["That the speaker lives for a hundred years", "That the wait lasted one year", "That the wait felt very long", "That the wait was very short"],
    answer: "That the wait felt very long",
    explanation: "The exaggeration shows how long the wait felt.",
  },
  {
    prompt: "Wat is die effek van 'die reën val drup-drup'?",
    options: ["You can hear the rain", "You can see the rain falling", "You can feel the cold rain", "You can smell the wet rain"],
    answer: "You can hear the rain",
    explanation: "The sound word lets us hear the rain.",
  },
  {
    prompt: "Watter twee dinge word vergelyk in 'die wolk is 'n skaap'?",
    options: ["'n skaap en die hemel", "die lug en 'n berg", "'n wolk en die son", "'n wolk en 'n skaap"],
    answer: "'n wolk en 'n skaap",
    explanation: "A cloud and a sheep are compared.",
  },
  {
    prompt: "Hoe verduidelik jy beeldspraak die beste?",
    options: ["Sê net die naam van die beeldspraak", "Sê wat vergelyk word en wat dit wys", "Skryf die reël oor", "Tel die woorde in die reël"],
    answer: "Sê wat vergelyk word en wat dit wys",
    explanation: "A full answer says what is compared and what it shows.",
  },
];

const ImagerySound = () => (
  <AfrikaansTopic
    title={"Beeldspraak en klankeffekte"}
    subtitle={"Vergelyking, metafoor, personifikasie, hiperbool en onomatopee"}
    learnSteps={learnSteps}
    task={"gr8-afr-imagery-sound-t2"}
    bank={bank}
    speak="options"
  />
);

export default ImagerySound;
