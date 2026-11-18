import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { FAMILIES, familyOf } from '../../../../../components/diagrams/arts/ca8-music-gaps';

// Every family, sound source and example comes from ca8-music-gaps.ts (tested in ca8-music-gaps.test.ts and g8CaMusic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const [mem, idio, chord, aero] = FAMILIES;
const card = (f: (typeof FAMILIES)[number]) => ({ title: f.name, line1: `sound: ${f.sound}`, line2: `for example ${f.examples.join(', ')}` });

export const learnSteps: LearnStep[] = [
  {
    title: 'Four families of instruments',
    content: slide(
      <>
        <Rule>Instruments are sorted into families by the way they make their sound. The four families are membranophones, idiophones, chordophones and aerophones. Ask yourself what is vibrating when you hear the sound.</Rule>
        <FactCards cards={FAMILIES.map(card)} aria={`The four families of instruments: ${FAMILIES.map((f) => `${f.name}, where ${f.sound}`).join('; ')}.`} />
        <Worked
          title="Find the family"
          steps={[
            `A djembe is played by striking a skin, so it is a ${familyOf('djembe')?.slice(0, -1)}.`,
            `A guitar sounds when strings vibrate, so it is a ${familyOf('guitar')?.slice(0, -1)}.`,
            `A flute sounds when the air inside it vibrates, so it is an ${familyOf('flute')?.slice(0, -1)}.`,
          ]}
        />
        <Mistake>Sorting instruments by how they look or how big they are. The family depends on what vibrates to make the sound.</Mistake>
      </>,
    ),
  },
  {
    title: 'Membranophones and idiophones',
    content: slide(
      <>
        <Rule>In a membranophone a stretched skin or membrane vibrates. Drums such as the djembe, the ngoma drum and the snare drum are membranophones. In an idiophone the body of the instrument itself vibrates when it is struck, shaken or scraped. A marimba, a triangle and a shaker are idiophones.</Rule>
        <FactCards cards={[card(mem), card(idio)]} aria="Two families. Membranophones: a stretched skin vibrates, for example djembe, ngoma drum and snare drum. Idiophones: the body of the instrument vibrates, for example marimba, triangle and shaker." />
        <Worked
          title="Sort three instruments"
          steps={[
            `A snare drum has a skin stretched over a frame: ${familyOf('snare drum')}.`,
            `The wooden bars of a marimba ring when struck: ${familyOf('marimba')}.`,
            `A shaker rattles as you move it: ${familyOf('shaker')}.`,
          ]}
        />
        <Mistake>Thinking that every instrument you hit is a membranophone. If the hard body rings and there is no skin, it is an idiophone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Chordophones and aerophones',
    content: slide(
      <>
        <Rule>In a chordophone a stretched string vibrates. Strings can be plucked, bowed or struck. A guitar, a violin and the uhadi (a musical bow) are chordophones. In an aerophone a column of air vibrates, set moving by the breath. A flute, a recorder and a vuvuzela are aerophones.</Rule>
        <FactCards cards={[card(chord), card(aero)]} aria="Two families. Chordophones: a stretched string vibrates, for example guitar, violin and uhadi. Aerophones: a column of air vibrates, for example flute, recorder and vuvuzela." />
        <Worked
          title="Sort three instruments"
          steps={[
            `A violin is played with a bow across strings: ${familyOf('violin')}.`,
            `An uhadi has one string stretched along a bow: ${familyOf('uhadi')}.`,
            `A recorder is played by blowing into it: ${familyOf('recorder')}.`,
          ]}
        />
        <Mistake>Calling a vuvuzela a membranophone because it is loud. Loudness has nothing to do with the family: its sound comes from vibrating air.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening for the family',
    content: slide(
      <>
        <Rule>When you listen, use clues in the sound to decide which family you are hearing. A thud or a drumbeat points to a membranophone. A ring, a clink or a rattle points to an idiophone. A plucked or bowed tone points to a chordophone. A breathy or blown tone points to an aerophone.</Rule>
        <FactCards
          cards={[
            { title: 'Thud or drumbeat', line1: 'membranophones' },
            { title: 'Ring, clink or rattle', line1: 'idiophones' },
            { title: 'Plucked or bowed tone', line1: 'chordophones' },
            { title: 'Breathy or blown tone', line1: 'aerophones' },
          ]}
          aria="Listening clues. A thud or drumbeat: membranophones. A ring, clink or rattle: idiophones. A plucked or bowed tone: chordophones. A breathy or blown tone: aerophones."
        />
        <Worked
          title="Describe what you hear"
          steps={[
            'You hear a bright ringing sound as wooden bars are struck with mallets.',
            'No skin, string or air is making the sound, so the body of the instrument is vibrating.',
            'The family is idiophones, and the instrument could be a marimba.',
          ]}
        />
        <Mistake>Deciding from one sound only. Listen to how the sound starts and how it carries on, and use more than one clue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which family does a ngoma drum belong to?</>,
          <>What vibrates in an aerophone?</>,
          <>Which family does a triangle belong to?</>,
          <>You hear plucked strings. Which family is it?</>,
        ]}
        answers={[
          <>Membranophones.</>,
          <>A column of air.</>,
          <>Idiophones.</>,
          <>Chordophones.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which family of instruments makes its sound when a stretched skin vibrates?",
    options: ["Idiophones", "Chordophones", "Membranophones", "Aerophones"],
    answer: "Membranophones",
    explanation: "A membrane is a stretched skin, and drums such as the djembe are membranophones.",
  },
  {
    prompt: "A marimba makes sound when its wooden bars are struck. Which family is it?",
    options: ["Idiophones", "Membranophones", "Chordophones", "Aerophones"],
    answer: "Idiophones",
    explanation: "In an idiophone the body of the instrument itself vibrates.",
  },
  {
    prompt: "The sound of a guitar comes from vibrating strings. Which family is it?",
    options: ["Membranophones", "Idiophones", "Aerophones", "Chordophones"],
    answer: "Chordophones",
    explanation: "Chordophones make sound with stretched strings that are plucked, bowed or struck.",
  },
  {
    prompt: "Which of these instruments is an aerophone?",
    options: ["Djembe", "Recorder", "Violin", "Triangle"],
    answer: "Recorder",
    explanation: "A recorder sounds when the air inside it vibrates, so it is an aerophone.",
  },
  {
    prompt: "Which of these instruments is a membranophone?",
    options: ["Flute", "Guitar", "Djembe", "Marimba"],
    answer: "Djembe",
    explanation: "A djembe has a stretched skin that vibrates when it is struck.",
  },
  {
    prompt: "What vibrates to make the sound of an aerophone?",
    options: ["A column of air", "A stretched skin", "A stretched string", "The body of the instrument"],
    answer: "A column of air",
    explanation: "In an aerophone the player's breath sets a column of air vibrating.",
  },
  {
    prompt: "A shaker rattles when you move it. Which family does it belong to?",
    options: ["Membranophones", "Chordophones", "Aerophones", "Idiophones"],
    answer: "Idiophones",
    explanation: "A shaker makes sound from the vibration of its own body and what is inside it, so it is an idiophone.",
  },
  {
    prompt: "Which of these instruments is an idiophone?",
    options: ["Snare drum", "Triangle", "Uhadi", "Vuvuzela"],
    answer: "Triangle",
    explanation: "A struck metal triangle rings with its whole body, so it is an idiophone.",
  },
  {
    prompt: "The uhadi is a musical bow with one string. Which family is it?",
    options: ["Membranophones", "Idiophones", "Chordophones", "Aerophones"],
    answer: "Chordophones",
    explanation: "The sound comes from the vibrating string, so the uhadi is a chordophone.",
  },
  {
    prompt: "You hear a deep thud from a drum. What is vibrating?",
    options: ["A stretched skin", "A column of air", "A bar of wood", "A string"],
    answer: "A stretched skin",
    explanation: "A drum sounds when its skin vibrates.",
  },
  {
    prompt: "Which pair of instruments belongs to the same family?",
    options: ["Flute and djembe", "Marimba and recorder", "Triangle and snare drum", "Violin and guitar"],
    answer: "Violin and guitar",
    explanation: "Both a violin and a guitar are chordophones, because their strings vibrate.",
  },
  {
    prompt: "A vuvuzela makes sound when the player blows into it. Which family is it?",
    options: ["Membranophones", "Aerophones", "Idiophones", "Chordophones"],
    answer: "Aerophones",
    explanation: "The air inside the horn vibrates, so a vuvuzela is an aerophone.",
  },
  {
    prompt: "Which clue tells you that you are hearing an idiophone?",
    options: ["A breathy tone from blowing", "A plucked tone from a string", "A ring or clink from its own body", "A drum thud from a skin"],
    answer: "A ring or clink from its own body",
    explanation: "Idiophones ring, clink or rattle because their own bodies vibrate.",
  },
  {
    prompt: "How many families of instruments are in this lesson?",
    options: ["Four", "Two", "Three", "Five"],
    answer: "Four",
    explanation: "The families are membranophones, idiophones, chordophones and aerophones.",
  },
];

const InstrumentFamilies = () => (
  <CapsSubjectTopic
    title="Families of Instruments"
    subtitle="Membranophones, idiophones, chordophones and aerophones"
    learnSteps={learnSteps}
    task="gr8-ca-instrument-families-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default InstrumentFamilies;
