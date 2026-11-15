import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Words adverts use: koop, spesiaal, vars',
    content: slide(
      <>
        <Rule>Adverts use short, strong words. Learn these three: <Af>koop</Af> <En>buy</En>, <Af>spesiaal</Af> <En>special</En> and <Af>vars</Af> <En>fresh</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['koop', 'buy'], ['spesiaal', 'special'], ['vars', 'fresh']]}
          aria="Three Afrikaans advertising words with their English meaning: koop is buy, spesiaal is special, vars is fresh."
        />
        <Worked
          title="Read the advert lines"
          steps={[
            <><Af>Koop vandag en spaar!</Af> <En>Buy today and save! A call to action: it tells the reader to act now.</En> <SpeakButton text="Koop vandag en spaar!" /></>,
            <><Af>'n Spesiale prys vir Graad 9-leerders.</Af> <En>A special price for Grade 9 learners.</En></>,
            <><Af>Vars brood elke oggend.</Af> <En>Fresh bread every morning.</En></>,
          ]}
        />
        <Mistake>Writing <Af>vers</Af> for fresh. <Af>vars</Af> is fresh; <Af>vers</Af> is a line of a poem. Before a noun <Af>spesiaal</Af> takes an <Af>-e</Af>: <Af>'n spesiale prys</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'More words: keuse, aandag, oortuig',
    content: slide(
      <>
        <Rule>An advert wants <Af>aandag</Af> <En>attention</En>, offers a <Af>keuse</Af> <En>choice</En> and tries to <Af>oortuig</Af> <En>convince, persuade</En> you.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['keuse', 'choice'], ['aandag', 'attention'], ['oortuig', 'persuade']]}
          aria="Three Afrikaans words with their English meaning: keuse is choice, aandag is attention, oortuig is convince or persuade."
        />
        <Worked
          title="Use them in sentences"
          steps={[
            <><Af>Die groot beeld trek aandag.</Af> <En>The big picture draws attention.</En></>,
            <><Af>Jy het 'n keuse: koop nou of later.</Af> <En>You have a choice: buy now or later.</En></>,
            <><Af>Advertensies wil jou oortuig.</Af> <En>Adverts want to persuade you.</En> <SpeakButton text="Advertensies wil jou oortuig." /></>,
          ]}
        />
        <Mistake>Mixing the noun <Af>keuse</Af> <En>a choice</En> with the verb <Af>kies</Af> <En>to choose</En>. You make a <Af>keuse</Af>; you <Af>kies</Af> a product.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone and emotive language',
    content: slide(
      <>
        <Rule>The <Af>toon</Af> <En>tone</En> is the attitude of the text, such as excited or serious. <Af>Emosionele taal</Af> <En>emotive language</En>: <Af>Dit werk op jou gevoelens</Af> <En>it works on your feelings</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Wen nou!', 'opgewonde'], ['Veilig en seker', 'kalm'], ['Moenie wag nie!', 'dringend']]}
          aria="Three advert lines and the tone each creates: Wen nou is opgewonde (excited), Veilig en seker is kalm (calm), Moenie wag nie is dringend (urgent)."
        />
        <Worked
          title="Name the tone"
          steps={[
            <><Af>Wen nou!</Af> uses an exclamation mark and a command: the tone is excited.</>,
            <><Af>Moenie wag nie!</Af> <En>Don&apos;t wait!</En> pushes you to act now: the tone is urgent.</>,
          ]}
        />
        <Mistake>Confusing tone with the topic. The topic is what the advert is about; the tone is how it sounds.</Mistake>
      </>,
    ),
  },
  {
    title: 'Picture and words work together',
    content: slide(
      <>
        <Rule>Visual and verbal parts together persuade: <Af>beeld en woorde</Af> <En>picture and words</En>. Ask what the picture shows, what the words say, and who the advert is for.</Rule>
        <TaggedBoxes
          items={[{ word: 'beeld', tag: 'visueel' }, { word: 'woorde', tag: 'verbaal' }, { word: 'gehoor', tag: 'teiken' }]}
          aria="Three parts to analyse in an advert: the beeld (picture) is visual, the woorde (words) are verbal, the gehoor (audience) is the target."
        />
        <Worked
          title="Analyse a school-bag advert"
          steps={[
            <>Picture: a bright bag with a smiling learner. Words: <Af>Spesiaal vir jou!</Af></>,
            <>Audience: learners. The picture catches the eye and the words speak to the reader directly.</>,
          ]}
        />
        <Mistake>Looking only at the words or only at the picture. The persuasion comes from both together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which Afrikaans word means <em>buy</em>?</>} answer={<><Af>koop</Af>.</>} />
        <Check question={<>Which Afrikaans word means <em>fresh</em>?</>} answer={<><Af>vars</Af>.</>} />
        <Check question={<>Which Afrikaans word means <em>attention</em>?</>} answer={<><Af>aandag</Af>.</>} />
        <Check question={<>Which Afrikaans word means <em>convince / persuade</em>?</>} answer={<><Af>oortuig</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'buy'?",
    options: ["koop", "vars", "keuse", "aandag"],
    answer: "koop",
    explanation: "'Koop' means 'buy'. It is a key persuasive word in adverts: 'Koop nou!'",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'special'?",
    options: ["spesiaal", "oortuig", "keuse", "koop"],
    answer: "spesiaal",
    explanation: "'Spesiaal' means 'special', as in a special offer.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'fresh'?",
    options: ["vars", "aandag", "spesiaal", "oortuig"],
    answer: "vars",
    explanation: "'Vars' means 'fresh'. Adverts often use it for food.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'choice'?",
    options: ["keuse", "koop", "vars", "aandag"],
    answer: "keuse",
    explanation: "'Keuse' means 'choice'. Adverts often give the audience a choice.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'attention'?",
    options: ["aandag", "oortuig", "spesiaal", "vars"],
    answer: "aandag",
    explanation: "'Aandag' means 'attention'. The first step of an advert is to get the reader's attention.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'convince / persuade'?",
    options: ["oortuig", "koop", "spesiaal", "aandag"],
    answer: "oortuig",
    explanation: "'Oortuig' means 'convince' or 'persuade', which is the aim of an advert.",
  },
  {
    prompt: "Watter sin is 'n oproep tot aksie?",
    options: ["Koop vandag en spaar!", "Die lug is vandag baie blou.", "Ek hou baie van katte.", "Die boek is oop op bladsy vier."],
    answer: "Koop vandag en spaar!",
    explanation: "An instruction telling the reader to act now.",
  },
  {
    prompt: "Wat is die toon van 'Wen nou!'?",
    options: ["opgewonde", "hartseer en swaar", "kalm en rustig", "verveeld en moeg"],
    answer: "opgewonde",
    explanation: "The exclamation mark and command make it excited.",
  },
  {
    prompt: "Watter woord is 'n byvoeglike naamwoord in 'Vars brood elke oggend'?",
    options: ["vars", "brood", "elke", "oggend"],
    answer: "vars",
    explanation: "vars describes the bread.",
  },
  {
    prompt: "Wat doen emosionele taal in 'n advertensie?",
    options: ["Dit werk op jou gevoelens", "Dit gee net die prys", "Dit lys feite sonder beeld", "Dit vervang die beeld"],
    answer: "Dit werk op jou gevoelens",
    explanation: "Emotive language works on feelings.",
  },
  {
    prompt: "Watter paar werk saam om te oortuig?",
    options: ["beeld en woorde", "datum en adres", "titel en bladsynommer", "reël en strofe"],
    answer: "beeld en woorde",
    explanation: "Picture and words together persuade.",
  },
  {
    prompt: "Kies die regte vorm: 'n ___ prys.",
    options: ["spesiale", "spesiaal", "spesialle", "spesiales"],
    answer: "spesiale",
    explanation: "Many adjectives take -e before a noun.",
  },
];

export { bank };

const AdvertisingVisualPersuasion = () => (
  <AfrikaansTopic
    title="Advertensies & Visuele Oortuiging"
    subtitle="Target audiences, persuasive language, and design impact"
    learnSteps={learnSteps}
    task="gr9-advertising-visual-persuasion-t1"
    bank={bank}
    speak="options"
  />
);

export default AdvertisingVisualPersuasion;
