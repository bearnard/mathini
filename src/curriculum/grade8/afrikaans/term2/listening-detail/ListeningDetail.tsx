import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 8 Afrikaans FAL oral skills: listening for detail and viewpoint (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Listen for details",
    content: slide(
      <>
        <Rule>Listen for the <Af>besonderhede</Af> <En>details</En>: who, what, where, when, why and how many. Read the questions before you listen.</Rule>
        <TaggedBoxes items={[{"word": "Wie?", "tag": "who"}, {"word": "Waar?", "tag": "where"}, {"word": "Wanneer?", "tag": "when"}]} aria={"Three question words: Wie is who, Waar is where, Wanneer is when."} />
        <Worked
          title="What to listen for"
          steps={[
            <><Af>Luister vir name, plekke en getalle.</Af> <En>Listen for names, places and numbers.</En> <SpeakButton text="Luister vir name, plekke en getalle." /></>,
            <><Af>Skryf die antwoorde kort neer.</Af> <En>Write the answers down briefly.</En> <SpeakButton text="Skryf die antwoorde kort neer." /></>,
            <><Af>360 woorde teen 120 woorde per minuut is 3 minute.</Af> <En>360 words at 120 words a minute is 3 minutes.</En> <SpeakButton text="360 woorde teen 120 woorde per minuut is 3 minute." /></>,
          ]}
        />
        <Mistake>Writing everything down. Note only the details that you need.</Mistake>
      </>,
    ),
  },
  {
    title: "Main idea and summary",
    content: slide(
      <>
        <Rule>The <Af>hoofgedagte</Af> <En>main idea</En> is what the whole text is about. A <Af>opsomming</Af> <En>summary</En> is short and in your own words.</Rule>
        <OrderTiles tiles={["Luister", "Hoofgedagte", "Opsomming"]} aria={"Steps in order: Luister, Hoofgedagte, Opsomming."} />
        <Worked
          title="From listening to summary"
          steps={[
            <><Af>Die hoofgedagte is waaroor die teks gaan.</Af> <En>The main idea is what the text is about.</En> <SpeakButton text="Die hoofgedagte is waaroor die teks gaan." /></>,
            <><Af>Skryf &apos;n kort opsomming in jou eie woorde.</Af> <En>Write a short summary in your own words.</En> <SpeakButton text="Skryf 'n kort opsomming in jou eie woorde." /></>,
            <><Af>Los die voorbeelde uit.</Af> <En>Leave out the examples.</En> <SpeakButton text="Los die voorbeelde uit." /></>,
          ]}
        />
        <Mistake>Copying sentences. A summary uses your own words.</Mistake>
      </>,
    ),
  },
  {
    title: "Viewpoint and bias",
    content: slide(
      <>
        <Rule>A speaker&apos;s <Af>standpunt</Af> <En>viewpoint</En> is how the speaker sees the topic. <Af>Vooroordeel</Af> <En>bias</En> means showing only one side. Strong words such as <Af>verskriklik</Af> <En>terrible</En> show strong feeling.</Rule>
        <TaggedBoxes items={[{"word": "standpunt", "tag": "viewpoint"}, {"word": "vooroordeel", "tag": "bias"}, {"word": "verskriklik", "tag": "terrible"}]} aria={"Three words: standpunt means viewpoint, vooroordeel means bias, verskriklik means terrible."} />
        <Worked
          title="Spot the viewpoint"
          steps={[
            <><Af>Hy gee net een kant van die storie.</Af> <En>He gives only one side of the story.</En> <SpeakButton text="Hy gee net een kant van die storie." /></>,
            <><Af>Die nuwe reël is verskriklik.</Af> <En>The new rule is terrible.</En> <SpeakButton text="Die nuwe reël is verskriklik." /></>,
            <><Af>Vra: wat los die spreker uit?</Af> <En>Ask: what does the speaker leave out?</En> <SpeakButton text="Vra: wat los die spreker uit?" /></>,
          ]}
        />
        <Mistake>Believing a speaker because the voice sounds sure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>details</em>?</>} answer={<><Af>besonderhede</Af> <En>details</En>.</>} />
        <Check question={<>Which word means <em>summary</em>?</>} answer={<><Af>opsomming</Af> <En>summary</En>.</>} />
        <Check question={<>Which word means <em>bias</em>?</>} answer={<><Af>vooroordeel</Af> <En>bias</En>.</>} />
        <Check question={<>How long do 360 words take at 120 words a minute?</>} answer={<><Af>3 minute</Af> <En>3 minutes</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'details'?",
    options: ["opsomming", "besonderhede", "hoofgedagte", "standpunt"],
    answer: "besonderhede",
    explanation: "'Besonderhede' are the facts such as names and numbers.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'who'?",
    options: ["Waar", "Wanneer", "Hoekom", "Wie"],
    answer: "Wie",
    explanation: "'Wie' asks about a person.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'where'?",
    options: ["Waar", "Wie", "Wanneer", "Hoeveel"],
    answer: "Waar",
    explanation: "'Waar' asks about a place.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'when'?",
    options: ["Wie", "Waar", "Wanneer", "Hoekom"],
    answer: "Wanneer",
    explanation: "'Wanneer' asks about a time.",
  },
  {
    prompt: "Watter sin beteken 'Listen for names, places and numbers.'?",
    options: ["Skryf die antwoorde kort neer.", "Luister vir name, plekke en getalle.", "Los die voorbeelde uit.", "Vra: wat los die spreker uit?"],
    answer: "Luister vir name, plekke en getalle.",
    explanation: "These are details that answer who, where and how many.",
  },
  {
    prompt: "Hoeveel minute neem 360 woorde teen 120 woorde per minuut?",
    options: ["2 minute", "4 minute", "30 minute", "3 minute"],
    answer: "3 minute",
    explanation: "360 ÷ 120 = 3 minutes.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'main idea'?",
    options: ["hoofgedagte", "opsomming", "standpunt", "vooroordeel"],
    answer: "hoofgedagte",
    explanation: "The 'hoofgedagte' is what the whole text is about.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'summary'?",
    options: ["hoofgedagte", "besonderhede", "opsomming", "standpunt"],
    answer: "opsomming",
    explanation: "An 'opsomming' is a short summary.",
  },
  {
    prompt: "Watter sin beteken 'Write a short summary in your own words.'?",
    options: ["Los die voorbeelde uit.", "Skryf 'n kort opsomming in jou eie woorde.", "Skryf die antwoorde kort neer.", "Luister vir name, plekke en getalle."],
    answer: "Skryf 'n kort opsomming in jou eie woorde.",
    explanation: "A summary is short and in your own words.",
  },
  {
    prompt: "Wat los jy uit 'n opsomming uit?",
    options: ["Die hoofgedagte", "Die belangrikste feite", "Jou eie woorde", "Die voorbeelde"],
    answer: "Die voorbeelde",
    explanation: "A summary keeps only what is important.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'viewpoint'?",
    options: ["standpunt", "vooroordeel", "besonderhede", "opsomming"],
    answer: "standpunt",
    explanation: "'Standpunt' is how the speaker sees the topic.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'bias'?",
    options: ["standpunt", "hoofgedagte", "vooroordeel", "opsomming"],
    answer: "vooroordeel",
    explanation: "'Vooroordeel' means a one-sided view.",
  },
  {
    prompt: "Watter sin wys vooroordeel?",
    options: ["Hy gee albei kante van die storie.", "Hy gee net een kant van die storie.", "Hy gee al die feite.", "Hy luister na almal."],
    answer: "Hy gee net een kant van die storie.",
    explanation: "Showing only one side is bias.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'terrible'?",
    options: ["lekker", "stil", "laat", "verskriklik"],
    answer: "verskriklik",
    explanation: "'Verskriklik' is a strong word that shows strong feeling.",
  },
];

const ListeningDetail = () => (
  <AfrikaansTopic
    title="Luister vir besonderhede"
    subtitle="Listening for details, the main idea, summary, viewpoint and bias"
    learnSteps={learnSteps}
    task="gr8-afr-listening-detail-t2"
    bank={bank}
    speak="options"
  />
);

export default ListeningDetail;
