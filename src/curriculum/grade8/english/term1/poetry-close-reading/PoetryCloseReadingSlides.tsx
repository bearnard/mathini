import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemLines } from '../../../../../components/diagrams/english/EnglishLayoutPictures';
import { POEM, POEM_KEYS, lineRef, rhymeScheme } from '../../../../../components/diagrams/english/lessonSkills';

// The practice poem, rhyme scheme and line references come from lessonSkills.ts (tested).
const scheme = rhymeScheme(POEM_KEYS[0]);
const simile = lineRef(2, 2);
const personification = lineRef(1, 1);
const dark = lineRef(1, 2);
const bright = lineRef(2, 1);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Stanzas, lines and rhyme',
    content: slide(
      <>
        <Rule>A stanza is a grouped section of lines in a poem. Close reading means slowing down to see how each line adds to the meaning.</Rule>
        <PoemLines
          stanzas={POEM}
          aria="A short practice poem in two stanzas of four lines each. Lines 1 and 3 of each stanza end in the same sound, and lines 2 and 4 do too."
        />
        <Worked
          title="Look at the shape"
          steps={[
            <>Count the stanzas: there are <strong>{POEM.length}</strong>, each with {POEM[0].length} lines.</>,
            <>Check the line endings of stanza 1: night, glass, light, pass.</>,
            <>Night rhymes with light, and glass with pass. The rhyme scheme is <strong>{scheme}</strong>.</>,
          ]}
        />
        <Mistake>Calling the whole poem one stanza, or calling a single line a stanza. A stanza is a group of lines, set apart by a gap.</Mistake>
      </>,
    ),
  },
  {
    title: 'Imagery and repetition',
    content: slide(
      <>
        <Rule>Imagery is sensory language that helps readers picture ideas. When a poet repeats a word, the repetition highlights a key emotional idea.</Rule>
        <PoemLines
          stanzas={POEM}
          marks={{ [`2.2`]: 'simile', [`1.1`]: 'personification' }}
          aria="The practice poem again. Line 1 of stanza 1 is marked as personification and line 2 of stanza 2 is marked as a simile."
        />
        <Worked
          title="Name the picture"
          steps={[
            <>{personification.ref}: &quot;{personification.quote}&quot; The thunder is described as if it were alive, with a voice that roars. Treating a non-living thing as a living being is personification.</>,
            <>{simile.ref}: &quot;{simile.quote}&quot; The word &quot;like&quot; compares puddles to coins. That is a simile, and it shows how bright they are.</>,
            <>Repetition: if a poet wrote &quot;alone in the dark, alone in the rain&quot; (an invented example, not from this poem), repeating &quot;alone&quot; would stress loneliness.</>,
          ]}
        />
        <Mistake>Only naming the device. &quot;It is a simile&quot; earns little. Say what the comparison makes you see or feel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone and tone shifts',
    content: slide(
      <>
        <Rule>Tone is the attitude or feeling in the poem. When the words turn from joyful to gloomy (or from gloomy to joyful) the tone is changing.</Rule>
        <Worked
          title="Follow the tone"
          steps={[
            <>Stanza 1 words: &quot;thunder&quot;, &quot;cold&quot;, &quot;hid&quot;, &quot;waited&quot;. They feel tense and fearful.</>,
            <>Stanza 2 words: &quot;golden&quot;, &quot;flash&quot;, &quot;delight&quot;, &quot;sing&quot;. They feel warm and joyful.</>,
            <>The move from {dark.ref} to {bright.ref} is a <strong>tone change</strong>, from fear to joy.</>,
          ]}
        />
        <Mistake>Confusing tone with topic. The topic is a storm. The tone is the attitude: fearful first, then joyful.</Mistake>
      </>,
    ),
  },
  {
    title: 'Theme: the central idea',
    content: slide(
      <>
        <Rule>The theme is the central message or idea of a poem. It is bigger than the topic, and you work it out from imagery, tone and repetition together.</Rule>
        <Worked
          title="From clues to theme"
          steps={[
            <>Imagery: the storm, then the sunlit puddles.</>,
            <>Tone: fear first, then delight.</>,
            <>Put them together: hard times pass, and hope returns.</>,
            <>Write it as a full idea: <strong>after difficulty comes hope</strong>.</>,
          ]}
        />
        <Mistake>Stating the topic as the theme. &quot;A storm&quot; is what the poem is about. &quot;After difficulty comes hope&quot; is what it says about life.</Mistake>
      </>,
    ),
  },
  {
    title: 'Support answers with the text',
    content: slide(
      <>
        <Rule>A close-reading answer quotes a line and explains its effect. Line references show where your evidence comes from.</Rule>
        <Worked
          title="Quote, reference, explain"
          steps={[
            <>Question: <em>How does the poet show the puddles are bright?</em></>,
            <>Quote: &quot;{simile.quote}&quot; ({simile.ref}).</>,
            <>Explain: comparing the puddles to coins makes them flash and shine, so the morning feels rich and cheerful.</>,
          ]}
        />
        <Mistake>Writing your opinion without any words from the poem. Without a quotation and a line reference, the marker cannot see your evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a stanza?</li>
            <li>A poem repeats the word &quot;alone&quot;. What does this highlight?</li>
            <li>The first verse of a poem is full of sunshine and laughter, but the last is about empty streets and cold rain. What does this signal?</li>
            <li>Give a good way to answer: &quot;How does the poet show the storm is loud?&quot;</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A grouped section of lines in a poem.</li>
            <li>A key emotional idea.</li>
            <li>A tone change.</li>
            <li>Quote the line, give the line reference ({personification.ref}), and explain its effect: &quot;{personification.quote}&quot; makes the thunder sound alive and loud.</li>
          </ol>
        }
      />,
    ),
  },
];

