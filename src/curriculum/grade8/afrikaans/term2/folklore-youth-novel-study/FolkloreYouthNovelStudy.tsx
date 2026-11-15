import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, StoryArc, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plot and conflict: intrige and konflik',
    content: slide(
      <>
        <Rule>The <Af>intrige</Af> <En>plot</En> is <Af>Die volgorde van gebeure in die storie</Af> <En>the order of events in the story</En>. The <Af>konflik</Af> is <Af>Die hoofprobleem wat spanning skep</Af> <En>the main problem that creates tension</En>.</Rule>
        <StoryArc
          points={['Begin', 'Konflik', 'Hoogtepunt', 'Einde']}
          aria="A story drawn as a hill with four points: Begin, Konflik (the main problem), Hoogtepunt (high point), Einde (end)."
        />
        <Worked
          title="Follow the plot"
          steps={[
            <>Begin: Thabo is afraid of the dark.</>,
            <>Conflict: his little sister gets lost at night. The problem creates tension.</>,
            <>High point: he goes out alone to find her. End: they get home safe.</>,
          ]}
        />
        <Mistake>Mixing up plot and conflict. The plot is all the events in order; the conflict is the main problem that makes the story tense.</Mistake>
      </>,
    ),
  },
  {
    title: 'Characters change: karakterontwikkeling',
    content: slide(
      <>
        <Rule>To study <Af>karakterontwikkeling</Af> <En>character development</En> ask: <Af>Hoe verander die karakter van begin tot einde?</Af></Rule>
        <OrderTiles
          tiles={['Begin', 'Gebeure', 'Einde']}
          aria="Three points to compare a character: Begin (at the start), Gebeure (what happens), Einde (at the end)."
        />
        <Worked
          title="Compare begin and end"
          steps={[
            <>At the start Thabo is <Af>bang</Af> <En>afraid</En>.</>,
            <>After the events he walks out alone. At the end he is <Af>dapper</Af> <En>brave</En>.</>,
            <>The change shows the character developed. <SpeakButton text="bang, dapper" /></>,
          ]}
        />
        <Mistake>Describing the character only at the end. Development needs two points: how the character is at the start and at the end.</Mistake>
      </>,
    ),
  },
  {
    title: 'Textual evidence: teksbewys',
    content: slide(
      <>
        <Rule><Af>Teksbewys</Af> <En>textual evidence</En> shows from the text that your claim is true: an action, a quote or a chapter. The strongest answer gives a fact from the story.</Rule>
        <TaggedBoxes
          items={[{ word: 'dapper', tag: 'bewering' }, { word: 'help sy broer', tag: 'bewys' }]}
          aria="A claim and its proof: dapper (brave) is the bewering (claim), help sy broer (helps his brother) is the bewys (evidence)."
        />
        <Worked
          title="Claim plus proof"
          steps={[
            <>Question: <Af>Hoekom is die karakter dapper?</Af> <En>Why is the character brave?</En></>,
            <>Strong answer: <Af>Hy help sy broer al is hy bang.</Af> <En>He helps his brother although he is afraid.</En> <SpeakButton text="Hy help sy broer al is hy bang." /></>,
            <>Example of evidence with a place in the book: <Af>Die hoofkarakter erken sy fout in hoofstuk 5.</Af> <En>The main character admits his mistake in chapter 5.</En></>,
          ]}
        />
        <Mistake>Giving only an opinion such as <Af>Hy is net dapper</Af>. Add what he does in the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Moraal, dialoog and tema',
    content: slide(
      <>
        <Rule>In a folk tale the <Af>moraal</Af> shows <Af>'n les vir die leser</Af> <En>a lesson for the reader</En>. <Af>Dialoog</Af> <En>dialogue</En>: <Af>Dit wys karakterstemme en verhoudings</Af> <En>it shows character voices and relationships</En>. The <Af>tema</Af> is <Af>Die groot idee agter die verhaal</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['moraal', 'les'], ['dialoog', 'stemme'], ['tema', 'groot idee']]}
          aria="Three story features and what they give: the moraal (moral) gives a les (lesson), dialoog (dialogue) gives karakterstemme (character voices), tema (theme) is the groot idee (big idea)."
        />
        <Worked
          title="Use all three"
          steps={[
            <>Moral: <Af>Wees eerlik</Af> <En>be honest</En> is a lesson for the reader.</>,
            <>Dialogue: how two brothers speak to each other shows their relationship.</>,
            <>Theme: the big idea behind the whole story, for example courage.</>,
          ]}
        />
        <Mistake>Calling the theme a small detail like a name or a place. The theme is the big idea behind the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What do we mean by <Af>konflik</Af> in a story?</>} answer={<><Af>Die hoofprobleem wat spanning skep</Af>.</>} />
        <Check question={<>Which question helps you analyse character development?</>} answer={<><Af>Hoe verander die karakter van begin tot einde?</Af></>} />
        <Check question={<>What is the best definition of <Af>intrige</Af>?</>} answer={<><Af>Die volgorde van gebeure in die storie</Af>.</>} />
        <Check question={<>In a folk tale, what does the moral usually show?</>} answer={<><Af>'n les vir die leser</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat bedoel ons met 'konflik' in 'n verhaal?",
    options: ['Die hoofprobleem wat spanning skep', 'Die naam van die hoofstuk', 'Die lys karakters', 'Die tyd van publikasie'],
    answer: 'Die hoofprobleem wat spanning skep',
    explanation: 'Conflict drives the story forward.',
  },
  {
    prompt: "Watter vraag help om karakterontwikkeling te ontleed?",
    options: ['Hoe verander die karakter van begin tot einde?', 'Hoeveel bladsye het die boek altesaam?', 'Watter pen is gebruik om die boek te skryf?', 'Wat kos die boek in die winkel?'],
    answer: 'Hoe verander die karakter van begin tot einde?',
    explanation: 'Development focuses on change over time.',
  },
  {
    prompt: "Kies die beste voorbeeld van teksbewys.",
    options: ['Die hoofkarakter erken sy fout in hoofstuk 5.', 'Ek dink die boek is baie cool en lekker.', 'My vriend hou baie daarvan om dit te lees.', 'Die omslag van die boek is groen en blou.'],
    answer: 'Die hoofkarakter erken sy fout in hoofstuk 5.',
    explanation: 'Specific reference is stronger than opinion only.',
  },
  {
    prompt: "In 'n volksverhaal wys 'n moraal gewoonlik ___.",
    options: ["'n les vir die leser", 'die aantal karakters', 'die boek se formaat', 'die taalvlak van die drukker'],
    answer: "'n les vir die leser",
    explanation: 'Folktales often end with a lesson.',
  },
  {
    prompt: "Wat is die beste definisie van intrige?",
    options: ['Die volgorde van gebeure in die storie', 'Die kleur van die omslag van die boek', 'Die adres van die skrywer van die boek', 'Die lengte van die woorde in die storie'],
    answer: 'Die volgorde van gebeure in die storie',
    explanation: 'Plot is the sequence of events.',
  },
  {
    prompt: "Waarom is dialoog belangrik in jeugromans?",
    options: ['Dit wys karakterstemme en verhoudings', 'Dit vervang alle beskrywing', 'Dit maak leestekens onnodig', 'Dit stop die plot'],
    answer: 'Dit wys karakterstemme en verhoudings',
    explanation: 'Dialogue reveals personality and conflict.',
  },
  {
    prompt: "Watter opsie beskryf die tema die beste?",
    options: ['Die groot idee agter die verhaal', 'Die eerste sin van die boek', 'Die titel alleen', 'Die aantal hoofstukke'],
    answer: 'Die groot idee agter die verhaal',
    explanation: 'Theme is the main message or insight.',
  },
  {
    prompt: "Kies die sterkste antwoord op 'Hoekom is die karakter dapper?'",
    options: ['Hy help sy broer al is hy bang.', 'Hy dra blou skoene wanneer hy skool toe gaan.', 'Hy woon in Pretoria saam met sy ouers.', 'Hy eet vroeg aandete saam met die gesin.'],
    answer: 'Hy help sy broer al is hy bang.',
    explanation: 'It provides action-based evidence of courage.',
  },
];

export { bank };

const FolkloreYouthNovelStudy = () => (
  <AfrikaansTopic
    title="Volksverhale & Jeugromanstudie"
    subtitle="Plot, character, conflict and theme in prose texts"
    learnSteps={learnSteps}
    task="gr8-folklore-youth-novel-study-t2"
    bank={bank}
    speak="options"
  />
);

export default FolkloreYouthNovelStudy;
