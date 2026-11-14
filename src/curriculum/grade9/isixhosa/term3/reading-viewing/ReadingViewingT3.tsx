import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Drama, poetry, short stories, message, tone, and character motivation',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/reading-viewing/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners analysing drama scenes, poetry, and literary character motivation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Reading & Viewing focuses on <strong>drama, poetry, short stories,</strong>{' '}
          message, tone, and character motivation.
        </p>
        <p className="text-slate-600">
          Learners interpret prescribed or school-based literary texts with more independence and depth.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these literary-reading words when discussing folktales, poems, drama scenes, and character response.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intsomi"} phonetic={"[in'tsɔmi]"} meaning={"Folktale"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Abalinganiswa"} phonetic={"[abaliŋga'niswa]"} meaning={"Characters"} lang="xh" />
          <PronunciationPlayer word={"Umxholo"} phonetic={"[um'xɔlɔ]"} meaning={"Theme / topic"} lang="xh" />
          <PronunciationPlayer word={"Imvakalelo"} phonetic={"[im.vaka'lɛlɔ]"} meaning={"Feeling / emotion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Drama differs from narrative prose in that it is...',
    options: ['presented through dialogue and action on stage or screen', 'told wholly by a narrator in the third person', 'always about a story with a happy ending', 'written only for adult audiences to enjoy'],
    answer: 'presented through dialogue and action on stage or screen',
    explanation: 'Drama shows rather than tells, using visual and verbal performance.',
  },
  {
    prompt: 'A dramatic scene\'s tone is created by...',
    options: ['word choice, pace of dialogue, stage directions and lighting', 'the words of the script and nothing else in it', 'the mood of the audience on the night of the show', 'the cost of staging the production for a crowd'],
    answer: 'word choice, pace of dialogue, stage directions and lighting',
    explanation: 'Tone in drama emerges from multiple theatrical elements working together.',
  },
  {
    prompt: 'Character motivation is...',
    options: ['the reason a character acts or speaks in a given way', 'how tall or old a character is in the play', 'the name that the author gave the character', 'a trait that is always clear on the surface'],
    answer: 'the reason a character acts or speaks in a given way',
    explanation: 'Motivation explains behavior and deepens our understanding of characters.',
  },
  {
    prompt: 'Poetic devices like metaphor and simile are used to...',
    options: ['create vivid images and express emotion in few words', 'make the poem harder for readers to understand', 'fill space on the page with extra words', 'make a poem longer than it needs to be'],
    answer: 'create vivid images and express emotion in few words',
    explanation: 'Figurative language makes abstract ideas concrete and memorable.',
  },
  {
    prompt: 'The message of a short story is often...',
    options: ['often implied, not stated, and shown through plot and theme', 'written in the first paragraph of the story', 'always clear straight away to every reader', 'missing, as many stories have no message'],
    answer: 'often implied, not stated, and shown through plot and theme',
    explanation: 'Readers must interpret meaning from narrative elements and resolution.',
  },
  {
    prompt: 'Context clues in a poem help you understand...',
    options: ["unfamiliar words and the poet's intended meaning", 'the rules of grammar that the poet used', 'the length of the poem and its verses', 'the age and background of the poet'],
    answer: "unfamiliar words and the poet's intended meaning",
    explanation: 'Surrounding words and lines provide hints about unclear terms.',
  },
  {
    prompt: 'Character motivation may come from...',
    options: ['desires, fears, values, past experiences or outside events', 'the length of the story that is being told', 'the way that the author ends the story', 'only logical thinking and never feelings'],
    answer: 'desires, fears, values, past experiences or outside events',
    explanation: 'Multiple sources influence why characters make their choices.',
  },
  {
    prompt: 'When quoting from a text to support analysis, you should...',
    options: ['choose relevant quotes and explain why they matter', 'quote long passages with no comment on them', 'add quotes without any explanation of them', 'quote only the dialogue and skip the narration'],
    answer: 'choose relevant quotes and explain why they matter',
    explanation: 'Explained quotations integrate evidence into your argument effectively.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Drama, poetry, short stories, message, tone, and character motivation"
    learnSteps={learnSteps}
    task="gr9-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
