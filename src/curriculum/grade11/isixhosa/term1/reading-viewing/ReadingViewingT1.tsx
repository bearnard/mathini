import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Novel and drama — character and theme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Sustained literature study in Grade 11 requires you to analyse <strong>character</strong> and <strong>theme</strong> using evidence from the text.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Character analysis</strong>
            <p className="text-slate-600">Examine what a character says, does, thinks, and how others react to them. Look for change (dynamic) vs. no change (static).</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Theme identification</strong>
            <p className="text-slate-600">A theme is the central message or idea. Support it with evidence: character actions, dialogue, and plot events.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Poetry in isiXhosa — tone, imagery, and devices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Poetry communicates through carefully chosen language. Key elements to analyse include:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Tone (Isimbo)</strong>
            <p className="text-slate-600">The poet's attitude — celebratory, mournful, critical, hopeful.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Imagery</strong>
            <p className="text-slate-600">Figurative language — simile (umfanekisomsebenzi), metaphor (umfanekiso), and personification.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Message (Umyalezo)</strong>
            <p className="text-slate-600">The central idea the poem communicates, supported by specific lines.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Media texts and visual literacy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Media texts</strong> include advertisements, cartoons, newspaper articles, and social media posts. Analyse them by considering:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <ul className="space-y-2 text-slate-600">
            <li>📢 <strong>Purpose:</strong> To inform, persuade, entertain, or sell?</li>
            <li>👥 <strong>Audience:</strong> Who is the intended reader or viewer?</li>
            <li>🎨 <strong>Design:</strong> How do layout, colour, and images create meaning?</li>
            <li>💬 <strong>Language:</strong> Formal, informal, emotive, or factual?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Analysing theme, character, and tone together',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In CAPS examinations, you are expected to connect theme, character, and tone across a text. Ask yourself:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Linking characters to theme</strong>
            <p className="text-slate-600">How does a character's journey or choice demonstrate the theme of the text?</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Linking tone to meaning</strong>
            <p className="text-slate-600">How does the writer's tone reinforce the message or theme of the text?</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Always quote directly from the text to support your answer.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these reading-and-viewing words so that key text types are easy to recognise and discuss.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Isaziso"} phonetic={"[isa'ziːso]"} meaning={"Notice"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advertisement / poster"} lang="xh" />
          <PronunciationPlayer word={"Umfanekiso"} phonetic={"[umfa'nɛkiso]"} meaning={"Picture / image"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A "dynamic character" in a novel is one who:',
    options: [
      'Changes significantly during the course of the story',
      'Remains the same from beginning to end',
      'Is only mentioned briefly',
      'Always speaks in a loud voice',
    ],
    answer: 'Changes significantly during the course of the story',
    explanation: 'Dynamic characters undergo development — they learn, grow, or transform in response to events.',
  },
  {
    prompt: 'Which of the following best describes the "theme" of a text?',
    options: [
      'The central message or idea explored throughout the text',
      'The name of the main character',
      'A description of the setting',
      'The title of the book',
    ],
    answer: 'The central message or idea explored throughout the text',
    explanation: 'Theme is the underlying idea — it is not the plot (what happens) but the meaning behind what happens.',
  },
  {
    prompt: 'In isiXhosa poetry, what does "isimbo" refer to?',
    options: [
      'The tone or mood of the poem',
      'The poem\'s setting',
      'The number of stanzas',
      'The title of the poem',
    ],
    answer: 'The tone or mood of the poem',
    explanation: 'Isimbo describes the poet\'s emotional attitude and the overall feeling conveyed by the poem.',
  },
  {
    prompt: 'A simile in isiXhosa poetry is called:',
    options: [
      'Umfanekisomsebenzi',
      'Umfanekiso',
      'Intetho',
      'Umyalezo',
    ],
    answer: 'Umfanekisomsebenzi',
    explanation: 'A simile (umfanekisomsebenzi) compares two things using words like "njenge-" (like/as), while a metaphor (umfanekiso) states the comparison directly.',
  },
  {
    prompt: 'When analysing a media text, what does "purpose" refer to?',
    options: [
      'The reason or goal the text was created for (inform, persuade, entertain, sell)',
      'The physical size of the advertisement',
      'The name of the photographer',
      'The number of words on the page',
    ],
    answer: 'The reason or goal the text was created for (inform, persuade, entertain, sell)',
    explanation: 'Every media text is created with a purpose — identifying it helps you understand the choices the creator made.',
  },
  {
    prompt: 'How should you support a theme statement in an essay answer?',
    options: [
      'Quote or paraphrase evidence directly from the text and explain the link',
      'Give your personal opinion only',
      'Describe the setting of the story',
      'Name as many characters as possible',
    ],
    answer: 'Quote or paraphrase evidence directly from the text and explain the link',
    explanation: 'CAPS literature questions require evidence-based responses — claim + quotation + explanation.',
  },
  {
    prompt: 'What does "visual literacy" involve when reading a media text?',
    options: [
      'Interpreting how images, layout, and design elements create meaning',
      'Reading only the written words aloud',
      'Counting the number of pictures',
      'Identifying the font size only',
    ],
    answer: 'Interpreting how images, layout, and design elements create meaning',
    explanation: 'Visual literacy includes understanding how colour, composition, image choice, and layout work together to convey a message.',
  },
  {
    prompt: 'In drama, what is "conflict"?',
    options: [
      'The struggle or tension between opposing forces, characters, or ideas',
      'The list of characters at the beginning of the play',
      'The final scene of the play',
      'A stage direction telling actors where to stand',
    ],
    answer: 'The struggle or tension between opposing forces, characters, or ideas',
    explanation: 'Conflict drives dramatic action — it may be internal (within a character) or external (between characters or forces).',
  },
  {
    prompt: 'Which question best tests understanding of "tone" in a poem?',
    options: [
      'How does the poet\'s word choice reflect a critical or admiring attitude?',
      'How many lines are in each stanza?',
      'What is the name of the poet?',
      'Does the poem rhyme?',
    ],
    answer: 'How does the poet\'s word choice reflect a critical or admiring attitude?',
    explanation: 'Tone is about emotional attitude; analysing word choice reveals whether the poet views the subject positively, negatively, or with ambiguity.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Novel, drama, poetry, media texts, theme, character, and tone"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
