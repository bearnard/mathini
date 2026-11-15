import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { RhymeLines } from '../../../../../components/diagrams/english/Grade9Pictures';
import { POEM, rhymeScheme } from '../../../../../components/diagrams/english/grade9';

// The poem and its rhyme scheme come from the tested helpers in grade9.ts (grade9.test.ts).
// All poem and scene text on these slides is invented for this lesson.
const scheme = rhymeScheme(POEM).split('').join(' ');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Rhyme scheme',
    content: slide(
      <>
        <Rule>A rhyme scheme is the pattern of rhyming words at the ends of lines. Give each new end sound a letter: A, B, C.</Rule>
        <RhymeLines />
        <Worked
          title="Find the rhyme scheme of the poem above"
          steps={[
            <>Underline the last word of each line: hill, coin, still, join.</>,
            <>Line 1 ends in &ldquo;hill&rdquo;: call that sound <strong>A</strong>. Line 2 ends in &ldquo;coin&rdquo;, a new sound: <strong>B</strong>.</>,
            <>&ldquo;Still&rdquo; rhymes with hill (A) and &ldquo;join&rdquo; rhymes with coin (B). The scheme is <strong>{scheme}</strong>.</>,
          ]}
        />
        <Mistake>Confusing rhyme scheme with rhythm or with the number of lines. Rhythm is the beat of the syllables. The rhyme scheme is only the pattern of end rhymes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Literary devices and imagery',
    content: slide(
      <>
        <Rule>Devices are the writer&rsquo;s tools. Personification gives human actions to something that is not human. Imagery uses the senses so the reader can picture a scene.</Rule>
        <Worked
          title="Name the devices"
          steps={[
            <>&ldquo;The wind whispered over the sleeping hill.&rdquo; Wind cannot whisper, so this is <strong>personification</strong>.</>,
            <>&ldquo;The moon hung like a silver coin.&rdquo; Compares with &ldquo;like&rdquo;: a <strong>simile</strong>, which also gives a picture (imagery).</>,
            <>&ldquo;Bright, bubbling, bold.&rdquo; Repeats the b sound: <strong>alliteration</strong>.</>,
            <>Say the effect: the whisper makes the evening gentle and calm.</>,
          ]}
        />
        <Mistake>Only naming the device. &ldquo;It is personification&rdquo; earns little. Add what it makes the reader see or feel. &ldquo;The wind whispered&rdquo; is personification, and the picture it creates is soft and quiet.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone, theme and evidence',
    content: slide(
      <>
        <Rule>Tone is the attitude or feeling the speaker conveys. Theme is the central idea or message of the work. Support every point with a quotation.</Rule>
        <Worked
          title="Analyse the poem"
          steps={[
            <><strong>Tone:</strong> calm and peaceful. Evidence: &ldquo;the river sang softly, calm and still&rdquo;.</>,
            <><strong>Theme:</strong> the quiet beauty of nature at night. It is an idea, not a retelling.</>,
            <>Write a sentence: The speaker&rsquo;s tone is peaceful, shown in &ldquo;calm and still&rdquo;, which supports the theme of quiet beauty.</>,
          ]}
        />
        <Mistake>Retelling the poem in your own words, or giving the title as the theme. Interpret the meaning and prove it with a short quotation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Drama: character and scene',
    content: slide(
      <>
        <Rule>In drama we learn about a character from dialogue, actions and what other characters say. A scene analysis names the conflict, the dialogue and how the scene moves the plot on.</Rule>
        <Worked
          title="Read this invented scene"
          steps={[
            <><strong>NOMSA</strong> (folding her arms): I told you to be home by six.</>,
            <><strong>SIPHO</strong> (looking at his shoes): The taxi was late.</>,
            <>Characterisation: her actions (folded arms) and words show she is angry. His looking away suggests he feels guilty.</>,
            <>Conflict: Nomsa wants honesty and Sipho is making an excuse. This moves the plot, because the next scene must deal with the broken trust.</>,
          ]}
        />
        <Mistake>Listing funny moments or the actors&rsquo; names. A scene analysis is about characters, conflict, dialogue and plot, supported by lines from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>A poem&rsquo;s end words are: day, sea, play, tree. What is the rhyme scheme?</>} answer={<>A B A B. Day and play rhyme (A); sea and tree rhyme (B).</>} />
        <Check question={<>Which device is &ldquo;the clock shouted at me to hurry&rdquo;?</>} answer={<>Personification: a clock cannot shout.</>} />
        <Check question={<>What makes a strong point when you analyse a poem?</>} answer={<>A quotation from the poem that supports your interpretation.</>} />
        <Check question={<>Name three ways drama shows a character.</>} answer={<>Dialogue, actions, and what other characters say about them.</>} />
      </>,
    ),
  },
];

