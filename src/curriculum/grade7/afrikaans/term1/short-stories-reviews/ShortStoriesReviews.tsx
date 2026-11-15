import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, OrderTiles, StoryArc, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Characters and setting',
    content: slide(
      <>
        <Rule>A <Af>karakter</Af> <En>character</En> is a person in the story. The <Af>hoofkarakter</Af> is the character the story is mostly about. The <Af>plek</Af> <En>setting</En> is where it happens.</Rule>
        <TaggedBoxes
          items={[{ word: 'Amina', tag: 'karakter' }, { word: 'red', tag: 'aksie' }, { word: 'park', tag: 'plek' }]}
          aria="Three words from a sentence, each with a tag: Amina is the character (karakter), red is the action (aksie), park is the place (plek)."
        />
        <Worked
          title="Read the sentence"
          steps={[
            <><Af>Amina red haar vriend in die park.</Af> <En>Amina rescues her friend in the park.</En> <SpeakButton text="Amina red haar vriend in die park." /></>,
            <>Who is the main character? <Af>Amina</Af>. She does the action.</>,
            <>Where does it happen? <Af>park</Af>: that is the setting.</>,
          ]}
        />
        <Mistake>Choosing <Af>vriend</Af> as the main character. The friend is helped; <Af>Amina</Af> is the one who acts. <Af>red</Af> is the action, not a character.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plot and conflict',
    content: slide(
      <>
        <Rule>The <Af>plot</Af> is what happens, in order. Ask: <Af>Wat gebeur eerste, daarna en laaste?</Af> The <Af>konflik</Af> is <Af>Die probleem wat opgelos moet word</Af> <En>the problem that must be solved</En>.</Rule>
        <StoryArc
          points={['Begin', 'Konflik', 'Hoogtepunt', 'Einde']}
          aria="A story drawn as a hill with four points: Begin, Konflik (the problem), Hoogtepunt (the highest point), Einde (the end)."
        />
        <Worked
          title="Follow the plot"
          steps={[
            <><Af>Begin:</Af> Amina and her friend play in the park.</>,
            <><Af>Konflik:</Af> the friend falls into the dam.</>,
            <><Af>Hoogtepunt:</Af> Amina rescues the friend. <Af>Einde:</Af> they go home safe.</>,
          ]}
        />
        <Mistake>Calling the author&apos;s name, the list of chapters or the date of publication the <Af>konflik</Af>. The conflict is the problem in the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Theme: the message',
    content: slide(
      <>
        <Rule>The <Af>tema</Af> <En>theme</En> is the big message of the story, written as a short idea. It is not a small fact.</Rule>
        <TaggedBoxes
          items={[{ word: 'Vriendskap is belangrik', tag: 'tema' }]}
          aria="The theme of the story in one box: Vriendskap is belangrik (friendship is important), tagged tema."
        />
        <Worked
          title="Find the theme"
          steps={[
            <>Story: <Af>Amina red haar vriend.</Af> What is the message?</>,
            <><Af>Vriendskap is belangrik.</Af> <En>Friendship is important.</En> <SpeakButton text="Vriendskap is belangrik." /></>,
          ]}
        />
        <Mistake>Giving a fact as the theme: <Af>Die storie het drie paragrawe</Af>, <Af>Die hoofkarakter is 12</Af> or <Af>Die hond se naam is Max</Af>. These are details, not a message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a review: resensie',
    content: slide(
      <>
        <Rule>A <Af>resensie</Af> <En>review</En> has three parts: your opinion, one reason or example, and a closing recommendation.</Rule>
        <OrderTiles
          tiles={['Mening', 'Rede', 'Aanbeveling']}
          aria="Three parts of a review in order: Mening (opinion), Rede (reason), Aanbeveling (recommendation)."
        />
        <Worked
          title="Write a short review"
          steps={[
            <>Opinion: <Af>Ek het die storie geniet omdat dit spannend was.</Af> <En>I enjoyed the story because it was exciting.</En></>,
            <>After your opinion comes <Af>Een rede of voorbeeld uit die storie</Af> <En>one reason or example from the story</En>.</>,
            <>Closing: <Af>Ek beveel hierdie storie vir Graad 7-leerders aan.</Af> <En>I recommend this story to Grade 7 learners.</En></>,
          ]}
        />
        <Mistake>Retelling the whole story word for word, or adding ten questions. Give your opinion, one reason, and a recommendation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<><Af>Amina red haar vriend in die park.</Af> Who is the main character?</>} answer={<><Af>Amina</Af>.</>} />
        <Check question={<>In the same sentence, which word shows the setting?</>} answer={<><Af>park</Af>.</>} />
        <Check question={<>Which is a theme: <Af>Vriendskap is belangrik</Af> or <Af>Die hond se naam is Max</Af>?</>} answer={<><Af>Vriendskap is belangrik</Af>.</>} />
        <Check question={<>What is the <Af>konflik</Af> in a story?</>} answer={<><Af>Die probleem wat opgelos moet word</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "In die sin 'Amina red haar vriend in die park', wie is die hoofkarakter?",
    options: ['Amina', 'vriend', 'park', 'red'],
    answer: 'Amina',
    explanation: 'The main character is the person the story follows most closely.',
  },
  {
    prompt: 'Watter woord wys die plek (setting) van die storie?',
    options: ['park', 'Amina', 'red', 'vriend'],
    answer: 'park',
    explanation: 'Setting tells us where the story happens.',
  },
  {
    prompt: "Wat is die beste voorbeeld van 'n tema?",
    options: ['Vriendskap is belangrik', 'Die storie het drie paragrawe', 'Die hoofkarakter is 12', 'Die hond se naam is Max'],
    answer: 'Vriendskap is belangrik',
    explanation: 'A theme is a broad message, not a small detail.',
  },
  {
    prompt: 'Watter vraag help jou om die plot te verstaan?',
    options: ['Wat gebeur eerste, daarna en laaste?', 'Hoe lank is elke woord?', 'Watter kleur is die boek se omslag?', 'Wie het die boek gedruk?'],
    answer: 'Wat gebeur eerste, daarna en laaste?',
    explanation: 'Plot is the sequence of events.',
  },
  {
    prompt: "Kies die beste openingsin vir 'n kort resensie.",
    options: ['Ek het die storie geniet omdat dit spannend was.', "Die storie is in 'n boek wat ek gelees het.", 'Daar is letters op elke bladsy van die boek.', 'Die skrywer het ink gebruik om dit te skryf.'],
    answer: 'Ek het die storie geniet omdat dit spannend was.',
    explanation: 'A review starts with a clear opinion.',
  },
  {
    prompt: "Watter opsie beskryf die konflik in 'n storie?",
    options: ['Die probleem wat opgelos moet word', 'Die naam van die skrywer van die storie', 'Die lys van die hoofstukke in die boek', 'Die datum waarop die boek gepubliseer is'],
    answer: 'Die probleem wat opgelos moet word',
    explanation: 'Conflict is the problem or challenge in the story.',
  },
  {
    prompt: "In 'n resensie, wat moet ná jou mening kom?",
    options: ['Een rede of voorbeeld uit die storie', 'Nog tien vrae', 'Die hele storie woord vir woord', 'Net emojis'],
    answer: 'Een rede of voorbeeld uit die storie',
    explanation: 'A reason supports your opinion.',
  },
  {
    prompt: "Watter sin is 'n gepaste afsluiting vir 'n resensie?",
    options: ['Ek beveel hierdie storie vir Graad 7-leerders aan.', "Die boek het 43 bladsye en 'n harde omslag.", 'My pen is blou en dit werk nog goed.', "Ek sit by 'n tafel in die klaskamer."],
    answer: 'Ek beveel hierdie storie vir Graad 7-leerders aan.',
    explanation: 'A good closing sentence gives a final recommendation.',
  },
];

export { bank };

const ShortStoriesReviews = () => (
  <AfrikaansTopic
    title="Kortverhale & Resensies"
    subtitle="Short stories, themes and simple reviews"
    learnSteps={learnSteps}
    task="gr7-short-stories-reviews-t1"
    bank={bank}
    speak="options"
  />
);

export default ShortStoriesReviews;
