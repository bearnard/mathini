import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a poem",
    content: slide(
      <>
        <Rule>A <Af>gedig</Af> <En>poem</En> has <Af>reëls</Af> <En>lines</En> and <Af>verse</Af> <En>stanzas</En>. Words that end with the same sound <Af>rym</Af> <En>rhyme</En>. A poem does not have to rhyme, but a rhyme can make it fun to read aloud.</Rule>
        <MeaningPairs kind="same" pairs={[["gedig", "poem"], ["reël", "line"], ["vers", "stanza"]]} aria={"Afrikaans words with their English meaning: gedig is poem, reël is line, vers is stanza."} />
        <Worked
          title={"Read two lines"}
          steps={[
            <><Af>Die kat sit op die mat.</Af> <En>The cat sits on the mat.</En> <SpeakButton text="Die kat sit op die mat." /></>,
            <><Af>Kat en mat rym.</Af> <En>Kat and mat rhyme.</En></>,
          ]}
        />
        <Mistake>Forcing a rhyme that does not make sense. Choose words that say what you mean.</Mistake>
      </>,
    ),
  },
  {
    title: "Rhyming words",
    content: slide(
      <>
        <Rule>Rhyming words have the same ending sound. <Af>Kat</Af> rhymes with <Af>mat</Af>. <Af>Hond</Af> rhymes with <Af>mond</Af>. <Af>Huis</Af> rhymes with <Af>muis</Af>. Say the words aloud to hear the rhyme.</Rule>
        <TaggedBoxes items={[{"word": "kat", "tag": "rhymes with mat"}, {"word": "hond", "tag": "rhymes with mond"}, {"word": "huis", "tag": "rhymes with muis"}]} aria={"Three Afrikaans words and their rhymes: kat rhymes with mat, hond rhymes with mond, huis rhymes with muis."} />
        <Worked
          title={"Find the rhyme"}
          steps={[
            <><Af>kat</Af> <En>cat</En> <Af>-</Af> <Af>mat</Af> <En>mat</En></>,
            <><Af>hond</Af> <En>dog</En> <Af>-</Af> <Af>mond</Af> <En>mouth</En></>,
            <><Af>huis</Af> <En>house</En> <Af>-</Af> <Af>muis</Af> <En>mouse</En></>,
          ]}
        />
        <Mistake>Thinking that words rhyme because they start with the same letter. They rhyme when the ending sounds are the same.</Mistake>
      </>,
    ),
  },
  {
    title: "A dialogue",
    content: slide(
      <>
        <Rule>A <Af>dialoog</Af> <En>dialogue</En> shows what two people say. Write the name of the speaker, then a <Af>dubbelpunt</Af> <En>colon</En>, then the words. Put a <Af>vraagteken</Af> <En>question mark</En> after a question.</Rule>
        <OrderTiles tiles={["Thandi: Waar is my tas?", "Sipho: Dit is agter die deur.", "Thandi: Dankie!"]} aria={"A dialogue in order: Thandi: Waar is my tas?, Sipho: Dit is agter die deur., Thandi: Dankie!"} />
        <Worked
          title={"Read the dialogue"}
          steps={[
            <><Af>Waar is my tas?</Af> <En>Where is my bag?</En> <SpeakButton text="Waar is my tas?" /></>,
            <><Af>Dit is agter die deur.</Af> <En>It is behind the door.</En></>,
          ]}
        />
        <Mistake>Leaving out the speaker's name. The name and the colon show who is speaking.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>stanza</En>?</>} answer={<><Af>Vers</Af>.</>} />
        <Check question={<>Which word rhymes with <Af>hond</Af>?</>} answer={<><Af>Mond</Af>.</>} />
        <Check question={<>Which mark follows a question?</>} answer={<><Af>Vraagteken</Af>.</>} />
        <Check question={<>Which sentence means <En>It is behind the door</En>?</>} answer={<><Af>Dit is agter die deur.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'poem'?",
    options: ["dialoog", "brief", "gedig", "vorm"],
    answer: "gedig",
    explanation: "'Gedig' means 'poem'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'line' in 'n gedig?",
    options: ["reël", "vers", "rym", "gedig"],
    answer: "reël",
    explanation: "'Reël' means 'line'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'stanza'?",
    options: ["reël", "rym", "dialoog", "vers"],
    answer: "vers",
    explanation: "'Vers' means 'stanza'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'rhyme'?",
    options: ["vers", "rym", "reël", "gedig"],
    answer: "rym",
    explanation: "'Rym' means 'rhyme'.",
  },
  {
    prompt: "Watter woord rym met 'kat'?",
    options: ["hond", "huis", "mat", "mond"],
    answer: "mat",
    explanation: "'Kat' and 'mat' have the same ending sound.",
  },
  {
    prompt: "Watter woord rym met 'hond'?",
    options: ["mond", "kat", "huis", "mat"],
    answer: "mond",
    explanation: "'Hond' and 'mond' rhyme.",
  },
  {
    prompt: "Watter woord rym met 'huis'?",
    options: ["kat", "hond", "mat", "muis"],
    answer: "muis",
    explanation: "'Huis' and 'muis' rhyme.",
  },
  {
    prompt: "Watter teken kom na 'n vraag?",
    options: ["dubbelpunt", "vraagteken", "gedig", "dialoog"],
    answer: "vraagteken",
    explanation: "A question ends with a question mark, a 'vraagteken'.",
  },
  {
    prompt: "Wat skryf jy na die naam van die spreker in 'n dialoog?",
    options: ["vraagteken", "vers", "dubbelpunt", "reël"],
    answer: "dubbelpunt",
    explanation: "The name is followed by a colon, a 'dubbelpunt'.",
  },
  {
    prompt: "Watter sin is 'n vraag?",
    options: ["Waar is my tas?", "Dit is agter die deur.", "Die kat sit op die mat.", "Dankie!"],
    answer: "Waar is my tas?",
    explanation: "'Waar is my tas?' asks where the bag is.",
  },
  {
    prompt: "Wat beteken 'Dit is agter die deur'?",
    options: ["Where is my bag?", "Thank you!", "The cat sits on the mat.", "It is behind the door."],
    answer: "It is behind the door.",
    explanation: "'Dit is agter die deur' means 'It is behind the door'.",
  },
  {
    prompt: "Wat beteken 'Die kat sit op die mat'?",
    options: ["The dog is in the house.", "The cat sits on the mat.", "It is behind the door.", "Where is my bag?"],
    answer: "The cat sits on the mat.",
    explanation: "'Die kat sit op die mat' means 'The cat sits on the mat'.",
  },
];

const PoemDialogue = () => (
  <AfrikaansTopic
    title={"Gedig en dialoog"}
    subtitle={"The parts of a poem, rhyming words, and the layout of a dialogue"}
    learnSteps={learnSteps}
    task={"gr7-afr-poem-dialogue-t1"}
    bank={bank}
    speak="options"
  />
);

export default PoemDialogue;
