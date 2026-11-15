import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, StoryArc, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Dialogue and stage directions',
    content: slide(
      <>
        <Rule>In a drama, <Af>dialoog</Af> <En>dialogue</En> shows <Af>Karakter se stem en verhouding</Af> <En>the character&apos;s voice and relationship</En>. A <Af>toneelaanwysing</Af> gives <Af>Instruksies oor beweging en aksie</Af> <En>instructions about movement and action</En>.</Rule>
        <TaggedBoxes
          items={[{ word: '(kyk weg)', tag: 'aanwysing' }, { word: 'Ek was nie daar nie.', tag: 'dialoog' }]}
          aria="Two parts of a drama script: (kyk weg), in brackets, is a stage direction (aanwysing), and Ek was nie daar nie is dialogue (dialoog)."
        />
        <Worked
          title="Read a script line"
          steps={[
            <><Af>THABO: (kyk weg) Ek was nie daar nie.</Af> <En>THABO: (looks away) I was not there.</En> <SpeakButton text="Ek was nie daar nie." /></>,
            <>The brackets tell the actor what to do. The spoken words show Thabo&apos;s voice, and that he may be hiding something.</>,
          ]}
        />
        <Mistake>Reading the stage direction as spoken words. It is an instruction for movement and action, not something the character says.</Mistake>
      </>,
    ),
  },
  {
    title: 'What makes a scene dramatic',
    content: slide(
      <>
        <Rule>A scene is dramatic when there is a <Af>Duidelike konflik tussen karakters</Af> <En>clear conflict between characters</En>. The conflict builds up to a high point.</Rule>
        <StoryArc
          points={['Begin', 'Konflik', 'Hoogtepunt', 'Resolusie']}
          aria="A scene drawn as a hill with four points: Begin, Konflik (conflict), Hoogtepunt (high point), Resolusie (resolution)."
        />
        <Worked
          title="Find the conflict"
          steps={[
            <>Two friends want different things: one wants to tell the truth, the other wants to hide it.</>,
            <>That clash is the conflict. It makes the scene tense and dramatic.</>,
          ]}
        />
        <Mistake>Thinking a scene is dramatic because of a lot of talking or a long setting. Drama needs characters in conflict.</Mistake>
      </>,
    ),
  },
  {
    title: 'Characters under pressure',
    content: slide(
      <>
        <Rule>To analyse a character ask: <Af>Hoe reageer die karakter onder druk?</Af> Then back it up with a scene from the text.</Rule>
        <OrderTiles
          tiles={['Druk', 'Reaksie', 'Eienskap']}
          aria="Three steps in order: Druk (the pressure), Reaksie (what the character does), Eienskap (what it shows about the character)."
        />
        <Worked
          title="Strong text reference"
          steps={[
            <>Pressure: he is asked to lie. Reaction: he refuses.</>,
            <>Answer: <Af>In toneel 2 weier hy om te lieg, dus is hy eerlik.</Af> <En>In scene 2 he refuses to lie, so he is honest.</En> <SpeakButton text="In toneel 2 weier hy om te lieg, dus is hy eerlik." /></>,
          ]}
        />
        <Mistake>Giving a trait with no scene, such as <Af>Hy is eerlik</Af>. Say where and how it shows.</Mistake>
      </>,
    ),
  },
  {
    title: 'Setting, theme and resolution',
    content: slide(
      <>
        <Rule>In a short story <Af>ruimte</Af> <En>setting</En> refers to <Af>waar en wanneer die storie afspeel</Af> <En>where and when the story takes place</En>. A <Af>tema</Af> is <Af>Die groot boodskap van die teks</Af>. The <Af>resolusie</Af> is <Af>Die deel waar die probleem opgelos word</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['ruimte', 'waar/wanneer'], ['tema', 'boodskap'], ['resolusie', 'oplossing']]}
          aria="Three story parts and what they mean: ruimte (setting) is where and when, tema (theme) is the message, resolusie (resolution) is the solution."
        />
        <Worked
          title="Name the part"
          steps={[
            <><Af>Op 'n plaas in die winter</Af> <En>on a farm in winter</En>: where and when, so the setting.</>,
            <>The end, where the brothers solve the problem: the resolution.</>,
          ]}
        />
        <Mistake>Calling the resolution the beginning, or the theme a small detail. The resolution is where the problem is solved.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What does dialogue show best in a drama?</>} answer={<><Af>Karakter se stem en verhouding</Af>.</>} />
        <Check question={<>What does <Af>toneelaanwysing</Af> mean?</>} answer={<><Af>Instruksies oor beweging en aksie</Af>.</>} />
        <Check question={<>Which question helps with character analysis?</>} answer={<><Af>Hoe reageer die karakter onder druk?</Af></>} />
        <Check question={<>What is the <Af>resolusie</Af> of a story?</>} answer={<><Af>Die deel waar die probleem opgelos word</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat wys dialoog die beste in 'n drama?",
    options: ['Karakter se stem en verhouding', 'Die prys van die boek in die winkel', 'Die uitleg van die bladsye van die boek', 'Die soort papier waarop die drama gedruk is'],
    answer: 'Karakter se stem en verhouding',
    explanation: 'Dialogue reveals character and relationships.',
  },
  {
    prompt: "Watter element maak 'n toneel dramaties?",
    options: ['Duidelike konflik tussen karakters', 'Slegs lang beskrywings van die plek', 'Geen handeling in die toneel nie', 'Geen sprekers in die toneel nie'],
    answer: 'Duidelike konflik tussen karakters',
    explanation: 'Drama depends on tension and conflict.',
  },
  {
    prompt: "Wat beteken 'toneelaanwysing'?",
    options: ['Instruksies oor beweging en aksie', 'Die titel van die boek en die skrywer', 'Die CV van die skrywer van die drama', 'Die lys van vrae oor die drama'],
    answer: 'Instruksies oor beweging en aksie',
    explanation: 'Stage directions tell performers what to do.',
  },
  {
    prompt: "Kies die beste vraag vir karakterontleding.",
    options: ['Hoe reageer die karakter onder druk?', 'Watter kleur is die omslag?', 'Hoeveel letters is in die naam?', 'Wie verkoop die boek?'],
    answer: 'Hoe reageer die karakter onder druk?',
    explanation: 'Character analysis looks at decisions and reactions.',
  },
  {
    prompt: "In 'n kortverhaal verwys 'ruimte' na ___.",
    options: ['waar en wanneer die storie afspeel', 'die hoofkarakter se ouderdom', 'die skrywer se nasionaliteit', 'die boek se formaat'],
    answer: 'waar en wanneer die storie afspeel',
    explanation: 'Setting covers place and time.',
  },
  {
    prompt: "Watter antwoord toon sterk teksverwysing?",
    options: ['In toneel 2 weier hy om te lieg, dus is hy eerlik.', 'Hy lyk baie interessant op die voorblad.', 'Ek hou net van hom en dit is al.', 'Die verhaal is baie lank en moeilik.'],
    answer: 'In toneel 2 weier hy om te lieg, dus is hy eerlik.',
    explanation: 'It links evidence to interpretation.',
  },
  {
    prompt: "Wat is 'n tema?",
    options: ['Die groot boodskap van die teks', 'Die eerste woord van die teks', 'Die naam van die uitgewer', 'Die aantal sinne'],
    answer: 'Die groot boodskap van die teks',
    explanation: 'Theme is the central idea.',
  },
  {
    prompt: "Kies die beste beskrywing van resolusie in 'n verhaal.",
    options: ['Die deel waar die probleem opgelos word', 'Die eerste sin van die inleiding', 'Die voorbladbeeld', 'Die bibliografie'],
    answer: 'Die deel waar die probleem opgelos word',
    explanation: 'Resolution closes the conflict.',
  },
];

export { bank };

const ShortStoriesDrama = () => (
  <AfrikaansTopic
    title="Kortverhale & Drama"
    subtitle="Dialogue, conflict, character and theme interpretation"
    learnSteps={learnSteps}
    task="gr8-short-stories-drama-t3"
    bank={bank}
    speak="options"
  />
);

export default ShortStoriesDrama;
