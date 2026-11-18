import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Lines, stanzas and rhyme",
    content: slide(
      <>
        <Rule>A poem is written in lines. A group of lines is a stanza. A stanza of four lines is a quatrain. Rhyme is the repeating of the same sound at the end of lines. You show a rhyme scheme with letters: lines that rhyme get the same letter. In the scheme AABB, lines one and two rhyme, and lines three and four rhyme.</Rule>
        <KeyTable
          title={"Parts of a poem"}
          head={["Part", "Meaning"]}
          aria={"Parts of a poem. line: one row of words in a poem. stanza: a group of lines. quatrain: a stanza of four lines. rhyme scheme: AABB: the lines rhyme in pairs."}
          rows={[["line", "one row of words in a poem"], ["stanza", "a group of lines"], ["quatrain", "a stanza of four lines"], ["rhyme scheme", "AABB: the lines rhyme in pairs"]]}
        />
        <Worked
          title={"Find the scheme"}
          steps={[
            <>The cat sat on the mat (A). It wore a funny hat (A).</>,
            <>The sun came out to play (B). It stayed all through the day (B). The scheme is AABB.</>,
          ]}
        />
        <Mistake>Forcing a rhyme that does not make sense. A poem does not have to rhyme.</Mistake>
      </>,
    ),
  },
  {
    title: "Imagery and figurative language",
    content: slide(
      <>
        <Rule>Imagery is language that helps the reader to see, hear, smell, taste or feel. Poets use figurative language to make images. A simile compares two things with like or as: as brave as a lion. A metaphor says that one thing is another: Time is a thief. Personification gives human actions to a thing: The wind whispered. Alliteration repeats a starting sound: slippery snake.</Rule>
        <KeyTable
          title={"Figures of speech"}
          head={["Figure", "Example"]}
          aria={"Figures of speech. simile: as quiet as a mouse. metaphor: The classroom was a zoo.. personification: The old door groaned.. alliteration: Slippery snakes slide silently.. onomatopoeia: buzz, splash, crack."}
          rows={[["simile", "as quiet as a mouse"], ["metaphor", "The classroom was a zoo."], ["personification", "The old door groaned."], ["alliteration", "Slippery snakes slide silently."], ["onomatopoeia", "buzz, splash, crack"]]}
        />
        <Worked
          title={"Name the figure"}
          steps={[
            <>The moon is a silver coin says that one thing is another, so it is a metaphor.</>,
            <>The moon smiled at me gives a human action to the moon, so it is personification.</>,
          ]}
        />
        <Mistake>Mixing up simile and metaphor. A simile uses like or as, and a metaphor does not.</Mistake>
      </>,
    ),
  },
  {
    title: "Rhythm and form",
    content: slide(
      <>
        <Rule>Rhythm is the beat of the words: the pattern of strong and weak sounds. Free verse has no regular rhyme or rhythm, and its lines can be of any length. A poem has a title, which can hint at its topic. Choose a form that suits your topic and mood, and read your poem aloud to hear its rhythm.</Rule>
        <KeyTable
          title={"Choosing a form"}
          head={["Form", "Features"]}
          aria={"Choosing a form. rhymed poem: lines rhyme in a scheme such as AABB. free verse: no regular rhyme or rhythm. title: hints at the topic."}
          rows={[["rhymed poem", "lines rhyme in a scheme such as AABB"], ["free verse", "no regular rhyme or rhythm"], ["title", "hints at the topic"]]}
        />
        <Worked
          title={"Choose a form"}
          steps={[
            <>A gentle lullaby may suit a steady rhythm and rhyme.</>,
            <>A poem about a storm may suit free verse with short and long lines.</>,
          ]}
        />
        <Mistake>Choosing words only because they rhyme. Choose the words that say what you mean.</Mistake>
      </>,
    ),
  },
  {
    title: "Writing and improving your poem",
    content: slide(
      <>
        <Rule>Follow the writing process. Plan: choose a topic and list words that you could use. Draft: write the first version in lines and stanzas. Revise: change words and lines to make the images stronger. Edit and proof-read: check spelling and punctuation. Present: copy it neatly and read it aloud.</Rule>
        <KeyTable
          title={"The writing process"}
          head={["Step", "What you do"]}
          aria={"The writing process. plan: choose a topic and list words. draft: write lines and stanzas. revise: improve words and images. edit and proof-read: check spelling and punctuation. present: copy it neatly and read it aloud."}
          rows={[["plan", "choose a topic and list words"], ["draft", "write lines and stanzas"], ["revise", "improve words and images"], ["edit and proof-read", "check spelling and punctuation"], ["present", "copy it neatly and read it aloud"]]}
        />
        <Worked
          title={"Revise a line"}
          steps={[
            <>First draft: The rain fell on the roof.</>,
            <>Revised: The rain drummed on the tin roof.</>,
          ]}
        />
        <Mistake>Handing in the first draft. Revise it to improve the words and the images.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a group of lines in a poem called?</>,
          <>What does the rhyme scheme AABB show?</>,
          <>Which figure of speech uses like or as?</>,
          <>Name one thing you may change when you revise.</>,
        ]}
        answers={[
          <>A stanza.</>,
          <>The lines rhyme in pairs.</>,
          <>A simile.</>,
          <>A word or a line.</>,
        ]}
      />,
    ),
  },
];
