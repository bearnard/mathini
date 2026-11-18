import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as p from '@/components/diagrams/english/paper1';

// Numbers come from paper1.ts (tested in paper1.test.ts and g12EngPaper1.test.ts). Every passage and sentence is an original teaching text.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Word relationships: synonyms, antonyms and look-alikes',
    content: slide(
      <>
        <Rule>Paper 1 section C tests vocabulary in context, so always check the meaning in the sentence. A synonym has a similar meaning and an antonym an opposite meaning. A homonym is spelt and sounds the same but has a different meaning (bank of a river, bank for money), a homophone sounds the same but is spelt differently (principal, principle), and a polyseme is one word with related meanings (the head of a person and the head of a company). One word can replace a phrase, for example &ldquo;someone who treats illness&rdquo; is a physician.</Rule>
        <InfoTable
          cols={[{ title: 'Term', w: 26 }, { title: 'Meaning', w: 40 }, { title: 'Example', w: 34 }]}
          rows={[
            ['Synonym', 'similar meaning', 'brave, courageous'],
            ['Antonym', 'opposite meaning', 'generous, selfish'],
            ['Homophone', 'sounds the same,\nspelt differently', 'principal, principle'],
            ['Homonym', 'same spelling and sound,\ndifferent meaning', 'bank (river, money)'],
          ]}
          aria="A table of word relationships. Synonym: similar meaning, such as brave and courageous. Antonym: opposite meaning, such as generous and selfish. Homophone: sounds the same but is spelt differently, such as principal and principle. Homonym: same spelling and sound but a different meaning, such as bank for a river or for money."
        />
        <Worked
          title="Choose the meaning in context"
          steps={[
            'Sentence: "The principal announced a new rule." The word needs a person, so principal (head of the school) and not principle (a rule or belief).',
            'Sentence: "He was reluctant to join." A synonym is unwilling; an antonym is eager.',
            'One word for a phrase: "a person who writes for a newspaper" is a journalist.',
          ]}
        />
        <Mistake>Giving the usual meaning of a word without checking the sentence. A word such as &ldquo;bank&rdquo; or &ldquo;head&rdquo; changes meaning with its context.</Mistake>
      </>,
    ),
  },
  {
    title: 'Figures of speech that compare and exaggerate',
    content: slide(
      <>
        <Rule>A simile compares with &ldquo;like&rdquo; or &ldquo;as&rdquo;, a metaphor says one thing is another, and personification gives human qualities to something that is not human. Hyperbole is deliberate exaggeration, understatement and litotes play down (&ldquo;not bad&rdquo; for very good), and an oxymoron joins opposites in two words (&ldquo;deafening silence&rdquo;). A paradox is a statement that seems to contradict itself but holds a truth.</Rule>
        <InfoTable
          cols={[{ title: 'Figure', w: 24 }, { title: 'Example', w: 46 }, { title: 'Effect', w: 30 }]}
          rows={[
            ['Simile', 'The crowd moved like a river.', 'a vivid picture'],
            ['Metaphor', 'The exam was a mountain.', 'shows difficulty'],
            ['Personification', 'The wind whispered at the door.', 'creates mood'],
            ['Hyperbole', 'I have told you a million times.', 'stresses annoyance'],
            ['Oxymoron', 'a deafening silence', 'shows tension'],
          ]}
          aria="A table of figures of speech. Simile: the crowd moved like a river, a vivid picture. Metaphor: the exam was a mountain, shows difficulty. Personification: the wind whispered at the door, creates mood. Hyperbole: I have told you a million times, stresses annoyance. Oxymoron: a deafening silence, shows tension."
        />
        <Worked
          title="Name it and explain the effect"
          steps={[
            '"The classroom was a zoo." This is a metaphor: it says that the room was noisy and out of control.',
            '"Her patience was as thin as paper." This is a simile (as ... as): it shows that she was about to lose patience.',
            'In an answer, name the figure, say what it compares or exaggerates, and give its effect in the context.',
          ]}
        />
        <Mistake>Naming the figure but not its effect. A mark for a figure of speech usually needs the name and what it adds to the meaning in that sentence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Figures of speech that depend on meaning and sound',
    content: slide(
      <>
        <Rule>Irony says or shows the opposite of what is expected, sarcasm is irony used to mock, and a euphemism is a gentle word for something unpleasant (&ldquo;passed away&rdquo;). A pun plays on two meanings of a word, onomatopoeia is a word that sounds like its meaning (&ldquo;buzz&rdquo;), and metonymy and synecdoche use a related part or name for the whole (&ldquo;the crown&rdquo; for the king, &ldquo;hands&rdquo; for workers). Anti-climax ends a build-up with something trivial, and a symbol stands for an idea.</Rule>
        <InfoTable
          cols={[{ title: 'Figure', w: 26 }, { title: 'Example', w: 44 }, { title: 'What it does', w: 30 }]}
          rows={[
            ['Irony', 'A fire station burns down.', 'shows the unexpected'],
            ['Sarcasm', '"Thanks for your great help," he said\nafter she dropped the tray.', 'mocks'],
            ['Euphemism', 'He was let go.', 'softens bad news'],
            ['Synecdoche', 'All hands on deck.', 'part stands for whole'],
            ['Onomatopoeia', 'The kettle hissed.', 'sound echoes sense'],
          ]}
          aria="A table of figures of speech. Irony: a fire station burns down, which shows the unexpected. Sarcasm: thanks for your great help said after she dropped the tray, which mocks. Euphemism: he was let go, which softens bad news. Synecdoche: all hands on deck, where a part stands for the whole. Onomatopoeia: the kettle hissed, where the sound echoes the sense."
        />
        <Worked
          title="Spot the figure"
          steps={[
            '"The company has laid off 200 hands." Hands stand for workers: synecdoche, with "laid off" as a euphemism for dismissed.',
            '"The sizzling sausages popped." Sizzling and popped copy sounds: onomatopoeia.',
            '"Oh, wonderful, another traffic jam." The speaker means the opposite: sarcasm.',
          ]}
        />
        <Mistake>Confusing irony and sarcasm. Sarcasm is spoken to mock someone, and irony can be a situation that turns out the opposite of what was expected.</Mistake>
      </>,
    ),
  },
  {
    title: 'Idioms, word origins and parts of words',
    content: slide(
      <>
        <Rule>An idiom is a fixed expression whose meaning is not the sum of its words, such as &ldquo;to spill the beans&rdquo; (to reveal a secret), and a proverb gives advice, such as &ldquo;a stitch in time saves nine&rdquo;. English borrows words from other languages (braai, lekker, ubuntu), forms new words (neologisms such as &ldquo;selfie&rdquo;) and builds words from prefixes, roots and suffixes: un- (not), -able (can be) and the root &ldquo;port&rdquo; (carry) give &ldquo;unportable&rdquo;. Etymology is the study of where words come from.</Rule>
        <InfoTable
          cols={[{ title: 'Item', w: 28 }, { title: 'Example', w: 36 }, { title: 'Meaning', w: 36 }]}
          rows={[
            ['Idiom', 'spill the beans', 'reveal a secret'],
            ['Proverb', 'A stitch in time saves nine.', 'act early'],
            ['Borrowed word', 'ubuntu, braai', 'from isiZulu and Afrikaans'],
            ['Neologism', 'selfie', 'a new word'],
            ['Prefix + root', 'un- + port + -able', 'not able to be carried'],
          ]}
          aria="A table of word items. Idiom: spill the beans means reveal a secret. Proverb: a stitch in time saves nine means act early. Borrowed words: ubuntu and braai come from isiZulu and Afrikaans. Neologism: selfie is a new word. Prefix, root and suffix: un, port and able mean not able to be carried."
        />
        <Worked
          title="Work out an unknown word"
          steps={[
            'The word "transport": the prefix trans- means across and the root port means carry, so it means to carry across.',
            'The idiom "it is raining cats and dogs" does not mean that animals are falling: it means that it is raining heavily.',
            'In an answer, give the meaning of the idiom in the sentence, not the literal words.',
            'The idiom "to break the ice" means to start a conversation when people feel awkward.',
          ]}
        />
        <Mistake>Explaining an idiom word by word. Give its figurative meaning, for example "to spill the beans" means to reveal a secret.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a simile and a metaphor?</>,
          <>&ldquo;The silence was deafening.&rdquo; Which figure of speech is this?</>,
          <>What does the idiom &ldquo;to spill the beans&rdquo; mean?</>,
          <>What is a euphemism? Give one example.</>,
        ]}
        answers={[
          <>A simile compares with &ldquo;like&rdquo; or &ldquo;as&rdquo;, a metaphor says that one thing is another.</>,
          <>An oxymoron, because &ldquo;deafening&rdquo; and &ldquo;silence&rdquo; are opposites (or hyperbole for its exaggeration).</>,
          <>To reveal a secret.</>,
          <>A gentler word for something unpleasant, such as &ldquo;passed away&rdquo; for died.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which word is a synonym of \"reluctant\"?",
    options: ["Eager", "Careful", "Unwilling", "Famous"],
    answer: "Unwilling",
    explanation: "A synonym has a similar meaning.",
  },
  {
    prompt: "Which word is an antonym of \"generous\"?",
    options: ["Selfish", "Kind", "Giving", "Rich"],
    answer: "Selfish",
    explanation: "An antonym has the opposite meaning.",
  },
  {
    prompt: "Which pair are homophones?",
    options: ["Bark (tree) and bark (dog)", "Quick and fast", "Hot and cold", "Their and there"],
    answer: "Their and there",
    explanation: "Homophones sound the same but are spelt differently.",
  },
  {
    prompt: "Which word is a homonym?",
    options: ["Their (a pronoun of place)", "Bat (animal and sports item)", "Fast (quick and not eating)", "Slow (not quick or fast)"],
    answer: "Bat (animal and sports item)",
    explanation: "A homonym is spelt and sounds the same but has different meanings.",
  },
  {
    prompt: "Which single word replaces \"a person who studies the stars\"?",
    options: ["Chemist", "Astronomer", "Pilot", "Banker"],
    answer: "Astronomer",
    explanation: "One word can replace a phrase.",
  },
  {
    prompt: "\"The old bridge groaned under the traffic.\" Which figure of speech is used?",
    options: ["Simile", "Hyperbole", "Oxymoron", "Personification"],
    answer: "Personification",
    explanation: "A bridge cannot groan; it is given a human quality.",
  },
  {
    prompt: "\"Her smile was as bright as the sun.\" Which figure of speech is this?",
    options: ["Simile", "Metaphor", "Irony", "Pun"],
    answer: "Simile",
    explanation: "It compares with the word as.",
  },
  {
    prompt: "\"The talk was a long sleep for everyone.\" Which figure of speech is this?",
    options: ["Simile", "Euphemism", "Metaphor", "Anti-climax"],
    answer: "Metaphor",
    explanation: "It says that one thing is another.",
  },
  {
    prompt: "\"I could eat a horse.\" What is the figure of speech and its effect?",
    options: ["Simile, to compare", "Irony, to mock", "Pun, to joke", "Hyperbole, to stress hunger"],
    answer: "Hyperbole, to stress hunger",
    explanation: "It is a deliberate exaggeration.",
  },
  {
    prompt: "Which expression is an oxymoron?",
    options: ["Very sweet", "Bitter-sweet", "Quite bitter", "Tasty food"],
    answer: "Bitter-sweet",
    explanation: "An oxymoron joins two opposites.",
  },
  {
    prompt: "A man says \"Lovely weather\" in a storm. Which figure of speech is this?",
    options: ["Irony", "Simile", "Onomatopoeia", "Synecdoche"],
    answer: "Irony",
    explanation: "The words say the opposite of the situation.",
  },
  {
    prompt: "Which word is an example of onomatopoeia?",
    options: ["Large", "Behind", "Thud", "Quickly"],
    answer: "Thud",
    explanation: "The sound of the word echoes its meaning.",
  },
  {
    prompt: "What does the idiom \"to break the ice\" mean?",
    options: ["To damage a frozen lake in the winter", "To end a friendship for good", "To start a conversation when people feel awkward", "To cool a drink in a glass of water"],
    answer: "To start a conversation when people feel awkward",
    explanation: "An idiom's meaning is not the sum of its words.",
  },
  {
    prompt: "What does the prefix \"anti-\" mean in the word \"antisocial\"?",
    options: ["Against", "With", "Before", "Again"],
    answer: "Against",
    explanation: "Anti- means against.",
  },
];

const P1VocabularyFigures = () => (
  <CapsSubjectTopic
    title="Vocabulary and Figures of Speech"
    subtitle="Word relationships, figures of speech, idioms, word origins and parts of words"
    learnSteps={learnSteps}
    task="gr12-p1-vocabulary-figures-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default P1VocabularyFigures;
