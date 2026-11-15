import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Greetings through the day',
    content: slide(
      <>
        <Rule>The Afrikaans greeting changes with the time of day. <Af>Goeie</Af> means good: <Af>môre</Af> is morning, <Af>dag</Af> is day and <Af>aand</Af> is evening.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Goeiemôre', 'Good morning'], ['Goeiedag', 'Good day'], ['Goeienaand', 'Good evening']]}
          aria="Three Afrikaans greetings with their English meaning: Goeiemôre is good morning, Goeiedag is good day, Goeienaand is good evening."
        />
        <Worked
          title="Choose the greeting"
          steps={[
            <>It is 7 o&apos;clock in the morning: <Af>Goeiemôre!</Af> <SpeakButton text="Goeiemôre" /></>,
            <>It is 8 o&apos;clock at night: <Af>Goeienaand!</Af> <En>Good evening</En> <SpeakButton text="Goeienaand" /></>,
          ]}
        />
        <Mistake>Saying <Af>Goeiemôre</Af> in the evening, or leaving off the hat on the <Af>ô</Af>. In the evening say <Af>Goeienaand</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hello, goodbye, how are you?',
    content: slide(
      <>
        <Rule>Use <Af>Hallo</Af> to start and <Af>Totsiens</Af> to end. To ask how someone is, say <Af>Hoe gaan dit?</Af></Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Hallo', 'Hello'], ['Totsiens', 'Goodbye'], ['Baie goed', 'Very well']]}
          aria="Three Afrikaans phrases with their English meaning: Hallo is hello, Totsiens is goodbye, Baie goed is very well."
        />
        <Worked
          title="A short chat"
          steps={[
            <><Af>Hallo, Sipho! Hoe gaan dit?</Af> <En>Hello, Sipho! How are you?</En></>,
            <><Af>Baie goed, dankie. Totsiens!</Af> <En>Very well, thank you. Goodbye!</En> <SpeakButton text="Baie goed, dankie. Totsiens!" /></>,
          ]}
        />
        <Mistake>Using <Af>Totsiens</Af> to say hello. It means goodbye, so use it when you leave.</Mistake>
      </>,
    ),
  },
  {
    title: 'Polite words: Dankie and Asseblief',
    content: slide(
      <>
        <Rule>Polite words make your Afrikaans friendly. <Af>Dankie</Af> says thank you. <Af>Asseblief</Af> asks nicely.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Dankie', 'Thank you'], ['Asseblief', 'Please'], ['Verskoon my', 'Excuse me']]}
          aria="Three polite Afrikaans phrases with their English meaning: Dankie is thank you, Asseblief is please, Verskoon my is excuse me."
        />
        <Worked
          title="Ask nicely, then say thanks"
          steps={[
            <><Af>Gee my die boek, asseblief.</Af> <En>Give me the book, please.</En></>,
            <><Af>Dankie!</Af> <En>Thank you!</En> <SpeakButton text="Gee my die boek, asseblief. Dankie!" /></>,
          ]}
        />
        <Mistake>Mixing the two up. <Af>Asseblief</Af> means please, not thank you. Thank you is <Af>Dankie</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nouns: animals and places',
    content: slide(
      <>
        <Rule>A noun names an animal, place or thing. Learn each Afrikaans noun with its English meaning.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['kat', 'cat'], ['hond', 'dog'], ['huis', 'house']]}
          aria="Three Afrikaans nouns with their English meaning: kat is cat, hond is dog, huis is house."
        />
        <Worked
          title="Say it in a sentence"
          steps={[
            <><Af>Die kat slaap.</Af> <En>The cat sleeps.</En></>,
            <><Af>Die hond is in die huis.</Af> <En>The dog is in the house.</En> <SpeakButton text="Die hond is in die huis." /></>,
          ]}
        />
        <Mistake>Mixing up <Af>hond</Af> and <Af>huis</Af> because both start with h. <Af>hond</Af> is the dog; <Af>huis</Af> is the house.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nouns: school and things',
    content: slide(
      <>
        <Rule>More nouns for your day. Some look like English, but the spelling is Afrikaans.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['skool', 'school'], ['boek', 'book'], ['water', 'water']]}
          aria="Three Afrikaans nouns with their English meaning: skool is school, boek is book, water is water."
        />
        <Worked
          title="Say it in a sentence"
          steps={[
            <><Af>Ek lees 'n boek by die skool.</Af> <En>I read a book at school.</En></>,
            <><Af>Ek drink water.</Af> <En>I drink water.</En> <SpeakButton text="Ek drink water." /></>,
          ]}
        />
        <Mistake>Writing <Af>book</Af> for <Af>boek</Af>. The Afrikaans word is spelt with <strong>oe</strong>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What does <Af>Goeienaand</Af> mean?</>} answer={<><Af>Good evening</Af>.</>} />
        <Check question={<>Which greeting do you say in the morning?</>} answer={<><Af>Goeiemôre</Af> <En>good morning</En>.</>} />
        <Check question={<>What does <Af>Dankie</Af> mean?</>} answer={<>Thank you. <Af>Asseblief</Af> is please.</>} />
        <Check question={<>What is the Afrikaans word for <em>dog</em>?</>} answer={<><Af>hond</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "What does 'Hallo' mean in English?", options: ['Hello', 'Goodbye', 'Please', 'Book'], answer: 'Hello', explanation: "'Hallo' is the Afrikaans greeting for 'Hello'." },
  { prompt: "Choose the Afrikaans word for 'Good morning'.", options: ['Goeiemôre', 'Goeienaand', 'Totsiens', 'Dankie'], answer: 'Goeiemôre', explanation: "'Goeiemôre' means 'Good morning'." },
  { prompt: "What does 'Goeienaand' mean?", options: ['Good evening', 'Good morning', 'Goodbye', 'Thank you'], answer: 'Good evening', explanation: "'Goeienaand' is used in the evening." },
  { prompt: "Choose the Afrikaans word for 'Goodbye'.", options: ['Totsiens', 'Hallo', 'Asseblief', 'Skool'], answer: 'Totsiens', explanation: "'Totsiens' means 'Goodbye'." },
  { prompt: "What does 'Dankie' mean?", options: ['Thank you', 'Please', 'House', 'Dog'], answer: 'Thank you', explanation: "'Dankie' is the Afrikaans word for 'Thank you'." },
  { prompt: "Choose the Afrikaans word for 'Please'.", options: ['Asseblief', 'Dankie', 'Hallo', 'Water'], answer: 'Asseblief', explanation: "'Asseblief' means 'Please'." },
  { prompt: "What is the English meaning of 'kat'?", options: ['cat', 'dog', 'book', 'school'], answer: 'cat', explanation: "'Kat' means 'cat'." },
  { prompt: "Choose the Afrikaans word for 'dog'.", options: ['hond', 'kat', 'huis', 'boek'], answer: 'hond', explanation: "'Hond' means 'dog'." },
  { prompt: "What does 'skool' mean in English?", options: ['school', 'house', 'water', 'book'], answer: 'school', explanation: "'Skool' means 'school'." },
  { prompt: "Choose the Afrikaans word for 'book'.", options: ['boek', 'huis', 'water', 'kat'], answer: 'boek', explanation: "'Boek' means 'book'." },
];

const WoordeskatGroete = () => (
  <AfrikaansTopic
    title="Woordeskat & Groete"
    subtitle="Everyday Afrikaans words & greetings"
    learnSteps={learnSteps}
    task="woordeskat"
    bank={bank}
    speak="options"
  />
);

export default WoordeskatGroete;
