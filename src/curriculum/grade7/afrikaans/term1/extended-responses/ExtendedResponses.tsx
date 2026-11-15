import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan first: inleiding, middel, slot',
    content: slide(
      <>
        <Rule>Plan before you write. A longer answer has three parts: the <Af>Inleiding</Af> <En>introduction</En> comes first, then the <Af>middel</Af> <En>middle</En>, then the <Af>slot</Af> <En>ending</En>.</Rule>
        <OrderTiles
          tiles={['Inleiding', 'Middel', 'Slot']}
          aria="Three parts of a longer answer in order: Inleiding (introduction), Middel (middle), Slot (ending)."
        />
        <Worked
          title="A plan for My beste vakansie"
          steps={[
            <><Af>Inleiding:</Af> where and when. <Af>Verlede Desember het ons strand toe gegaan.</Af> <En>Last December we went to the beach.</En></>,
            <><Af>Middel:</Af> what happened, in order.</>,
            <><Af>Slot:</Af> how you felt. <SpeakButton text="Inleiding, middel, slot" /></>,
          ]}
        />
        <Mistake>Starting to write with no plan, or putting the <Af>slot</Af> first. The <Af>Inleiding</Af> starts the response.</Mistake>
      </>,
    ),
  },
  {
    title: 'One idea in each paragraph',
    content: slide(
      <>
        <Rule>A paragraph has one main idea. The best order is: <Af>Hoofidee, besonderhede, afsluiting</Af> <En>main idea, details, closing</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Hoofidee', tag: '1' }, { word: 'Besonderhede', tag: '2' }, { word: 'Afsluiting', tag: '3' }]}
          aria="Three parts of a paragraph in order: Hoofidee (main idea) is 1, Besonderhede (details) is 2, Afsluiting (closing) is 3."
        />
        <Worked
          title="Build a paragraph"
          steps={[
            <><Af>Hoofidee:</Af> <Af>Ek hou van sokker.</Af> <En>I like soccer.</En></>,
            <><Af>Besonderhede:</Af> <Af>Ons oefen elke Dinsdag en speel op Saterdag.</Af> <En>We practise every Tuesday and play on Saturday.</En></>,
            <><Af>Afsluiting:</Af> <Af>Sokker maak my gelukkig.</Af> <En>Soccer makes me happy.</En></>,
          ]}
        />
        <Mistake>Giving only details with no <Af>hoofidee</Af>, or squeezing two ideas into one paragraph. Start a new paragraph for a new idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Linking words: eers, daarna, uiteindelik',
    content: slide(
      <>
        <Rule>Linking words show the order of events. <Af>Daarna</Af> shows what comes next in a sequence.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Eers', 'First'], ['Daarna', 'Then'], ['Uiteindelik', 'Finally']]}
          aria="Three Afrikaans linking words with their English meaning: Eers is first, Daarna is then, Uiteindelik is finally."
        />
        <Worked
          title="Show the sequence"
          steps={[
            <><Af>Eers het ons begin oefen.</Af> <En>First we started to practise.</En></>,
            <><Af>Daarna het ons gespeel.</Af> <En>Then we played.</En> <SpeakButton text="Daarna het ons gespeel." /></>,
            <><Af>Uiteindelik het ons gewen.</Af> <En>In the end we won.</En></>,
          ]}
        />
        <Mistake>Using <Af>Maar</Af>, <Af>Want</Af> or <Af>Of</Af> to show sequence. They show contrast, a reason or a choice. For order use <Af>Daarna</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Know your reader: teikengehoor and tone',
    content: slide(
      <>
        <Rule>The <Af>teikengehoor</Af> <En>audience</En> is <Af>Die mense vir wie jy skryf</Af> <En>the people you write for</En>. For school writing the tone must be <Af>Netjies en respekvol</Af> <En>neat and respectful</En>.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['Netjies', 'Sleng'], ['Respekvol', 'Emoji']]}
          aria="Two pairs of opposites: neat language (Netjies) against slang (Sleng), and respectful language (Respekvol) against emoji."
        />
        <Worked
          title="Fix the tone"
          steps={[
            <>Too casual: <Af>Haai, dis cool!</Af></>,
            <>Better for school: <Af>Dit is baie interessant.</Af> <En>It is very interesting.</En></>,
          ]}
        />
        <Mistake>Using slang, emoji or short forms such as <Af>lol</Af> in a formal answer. They do not suit a school task.</Mistake>
      </>,
    ),
  },
  {
    title: 'Opening, closing and editing',
    content: slide(
      <>
        <Rule>A story opening sets the scene. A closing sentence sums up the message. At the end you <Af>redigeer</Af> <En>edit</En>: <Af>Om foute in spelling en leestekens reg te maak</Af> <En>to fix mistakes in spelling and punctuation</En>.</Rule>
        <OrderTiles
          tiles={['Opening', 'Slot', 'Redigeer']}
          aria="Three finishing steps in order: Opening, Slot (closing), Redigeer (edit)."
        />
        <Worked
          title="Open and close"
          steps={[
            <>Opening: <Af>Verlede Saterdag het iets onverwags gebeur.</Af> <En>Last Saturday something unexpected happened.</En></>,
            <>Closing: <Af>Dus het ek geleer dat voorbereiding belangrik is.</Af> <En>So I learnt that preparation is important.</En> <SpeakButton text="Dus het ek geleer dat voorbereiding belangrik is." /></>,
          ]}
        />
        <Mistake>Skipping the edit, or ending with a vague line such as <Af>Ek het nou klaar gepraat</Af>. A closing should sum up your key message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which part of a longer answer comes first?</>} answer={<><Af>Inleiding</Af> <En>the introduction</En>.</>} />
        <Check question={<>Choose the linking word: <Af>___ het ons begin oefen.</Af> (it shows sequence)</>} answer={<><Af>Daarna</Af>.</>} />
        <Check question={<>What does <Af>teikengehoor</Af> mean?</>} answer={<><Af>Die mense vir wie jy skryf</Af>.</>} />
        <Check question={<>What is the best order for a paragraph?</>} answer={<><Af>Hoofidee, besonderhede, afsluiting</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n skryftaak kom eerste?",
    options: ['Inleiding', 'Slot', 'Titelblad', 'Bylaag'],
    answer: 'Inleiding',
    explanation: 'The introduction starts the response.',
  },
  {
    prompt: "Watter volgorde is die beste vir 'n paragraaf?",
    options: ['Hoofidee, besonderhede, afsluiting', 'Afsluiting, hoofidee, titel', 'Titel, datum, voetnota', 'Slegs besonderhede sonder hoofidee'],
    answer: 'Hoofidee, besonderhede, afsluiting',
    explanation: 'A paragraph needs a clear main idea and support.',
  },
  {
    prompt: "Kies die beste skakelwoord vir volgorde: '___ het ons begin oefen.'",
    options: ['Daarna', 'Maar', 'Want', 'Of'],
    answer: 'Daarna',
    explanation: "'Daarna' shows sequence of events.",
  },
  {
    prompt: "Wat beteken 'teikengehoor' in skryfwerk?",
    options: ['Die mense vir wie jy skryf', 'Die lengte van jou opstel', 'Die lettertipe van jou werk', 'Die kleur van die papier'],
    answer: 'Die mense vir wie jy skryf',
    explanation: 'Audience means the intended readers.',
  },
  {
    prompt: "Watter opening pas die beste by 'n narratiewe paragraaf?",
    options: ['Verlede Saterdag het iets onverwags gebeur.', 'Die teks gebruik swart ink.', 'Daar is drie reëls op die bladsy.', 'My boek is op die tafel.'],
    answer: 'Verlede Saterdag het iets onverwags gebeur.',
    explanation: 'Narrative writing needs a context-setting opening.',
  },
  {
    prompt: "Watter sin is die beste slot vir 'n uitgebreide antwoord?",
    options: ['Dus het ek geleer dat voorbereiding belangrik is.', 'Ek het nou klaar gepraat, dink ek miskien.', 'Die pen wat ek gebruik het, was baie swaar.', "Hier is nog 'n titel vir die volgende opstel."],
    answer: 'Dus het ek geleer dat voorbereiding belangrik is.',
    explanation: 'A closing sentence should summarise the key message.',
  },
  {
    prompt: "Waarom redigeer ons aan die einde?",
    options: ['Om foute in spelling en leestekens reg te maak', 'Om nuwe hoofstukke by die opstel te voeg', 'Om die onderwerp van die opstel te verander', 'Om die vrae in die vraestel te ignoreer'],
    answer: 'Om foute in spelling en leestekens reg te maak',
    explanation: 'Editing improves clarity and correctness.',
  },
  {
    prompt: "Kies die beste toon vir 'n formele skoolantwoord.",
    options: ['Netjies en respekvol', 'Baie sleng en afkortings', 'Slegs emoji-simbole', 'Langer as 20 paragrawe sonder plan'],
    answer: 'Netjies en respekvol',
    explanation: 'School writing should be clear and appropriate.',
  },
];

export { bank };

const ExtendedResponses = () => (
  <AfrikaansTopic
    title="Uitgebreide Antwoorde"
    subtitle="Planning and structuring longer writing"
    learnSteps={learnSteps}
    task="gr7-extended-responses-t1"
    bank={bank}
    speak="options"
  />
);

export default ExtendedResponses;
