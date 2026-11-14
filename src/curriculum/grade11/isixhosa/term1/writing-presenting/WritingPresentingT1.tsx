import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Reflective essay — personal voice and structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>reflective essay</strong> explores your personal thoughts, feelings, and growth around an experience or idea.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-indigo-800 mb-2">Key features:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>Written in first person (Mna / Ndim)</li>
            <li>Explores feelings and lessons learnt</li>
            <li>Moves from experience → reflection → insight</li>
            <li>Uses thoughtful, contemplative language</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Descriptive essay — sensory detail and vivid language',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>descriptive essay</strong> creates a vivid picture using all five senses and precise language choices.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Sensory language</strong>
            <p className="text-slate-600">Sight, sound, smell, taste, and touch — describe so the reader can experience the scene.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Vivid vocabulary</strong>
            <p className="text-slate-600">Use strong adjectives and precise verbs. Avoid vague words like "nice" or "good".</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Figurative language</strong>
            <p className="text-slate-600">Similes and metaphors make description more powerful and memorable.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Consistent tone</strong>
            <p className="text-slate-600">Keep the same mood throughout — peaceful, tense, joyful — to create a unified effect.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Friendly vs formal texts — register and format',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Register</strong> is the level of formality in language. Choosing the correct register is essential in Grade 11.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Friendly letter / informal text</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Use first name in greeting</li>
              <li>Conversational, warm language</li>
              <li>Contractions allowed (e.g. "I'm")</li>
              <li>Casual closing (e.g. "Umhlobo wakho")</li>
            </ul>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Formal letter</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Full address and date at top right</li>
              <li>Formal greeting: "Enkosi Mnumzana/Nkosikazi"</li>
              <li>Objective, professional language</li>
              <li>Formal closing: "Ngembeko"</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Planning and drafting — from idea to final text',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good writers follow a <strong>writing process</strong> to produce controlled, well-developed texts.
        </p>
        <div className="grid gap-3 md:grid-cols-4 text-left">
          <div className="rounded-xl bg-slate-50 p-3">
            <strong className="text-slate-700">1. Brainstorm</strong>
            <p className="text-sm text-slate-500">Generate ideas freely — mind map or list everything.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <strong className="text-slate-700">2. Plan / Outline</strong>
            <p className="text-sm text-slate-500">Select and organise ideas into a logical structure.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <strong className="text-slate-700">3. Draft</strong>
            <p className="text-sm text-slate-500">Write freely, focusing on content — not perfection.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <strong className="text-slate-700">4. Revise &amp; Edit</strong>
            <p className="text-sm text-slate-500">Check content, language, grammar, and punctuation.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these essay-writing terms aloud so that planning, structuring, and editing are easier to manage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isincoko"} phonetic={"[isiŋ'kɔːkɔ]"} meaning={"Essay"} lang="xh" />
          <PronunciationPlayer word={"Intshayelelo"} phonetic={"[intʃaje'lelo]"} meaning={"Introduction"} lang="xh" />
          <PronunciationPlayer word={"Umhlathi"} phonetic={"[um'ɬaːti]"} meaning={"Paragraph"} lang="xh" />
          <PronunciationPlayer word={"Isiphelo"} phonetic={"[isi'pʰɛlɔ]"} meaning={"Conclusion"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which person (pronoun perspective) is used in a reflective essay?',
    options: ['First person (I / Mna / Ndim)', 'Third person only (He/She/They)', 'Second person (You)', 'No pronouns at all'],
    answer: 'First person (I / Mna / Ndim)',
    explanation: 'Reflective essays explore the writer\'s own thoughts and experiences, so first person is essential.',
  },
  {
    prompt: 'What is the main purpose of a reflective essay?',
    options: ['To explore your thoughts and lessons from an experience', 'To argue for one side of a debate in an essay', 'To give factual information about a topic', 'To describe a place using sensory detail only'],
    answer: 'To explore your thoughts and lessons from an experience',
    explanation: 'Reflection goes beyond description — it involves introspection and showing growth or insight.',
  },
  {
    prompt: 'Which type of language is essential in a descriptive essay?',
    options: ['Sensory and figurative language that creates images', 'Technical jargon and statistics about a place', 'Bullet points and numbered lists of details', 'Very short, factual sentences and nothing else'],
    answer: 'Sensory and figurative language that creates images',
    explanation: 'Descriptive writing appeals to the senses and uses devices like simile and metaphor to create a vivid experience for the reader.',
  },
  {
    prompt: 'Which closing phrase is most appropriate for a formal letter in isiXhosa?',
    options: ['Ngembeko', 'Umhlobo wakho', 'Sala kakuhle', 'Ngothando'],
    answer: 'Ngembeko',
    explanation: '"Ngembeko" (With respect) is a formal closing. Informal letters use friendly closings like "Umhlobo wakho" (Your friend).',
  },
  {
    prompt: 'What should the FIRST step of the writing process be?',
    options: [
      'Brainstorming or mind-mapping ideas',
      'Writing the final draft immediately',
      'Proofreading for errors',
      'Choosing a title',
    ],
    answer: 'Brainstorming or mind-mapping ideas',
    explanation: 'Brainstorming allows you to generate and explore ideas freely before selecting and organising them.',
  },
  {
    prompt: 'Which feature distinguishes a friendly letter from a formal letter?',
    options: [
      'A casual tone and use of the recipient\'s first name',
      'A full address at the top right of the page',
      'Objective, professional language throughout',
      'A formal reference line',
    ],
    answer: 'A casual tone and use of the recipient\'s first name',
    explanation: 'Friendly letters use informal register, contractions, and personal language — features absent from formal letters.',
  },
  {
    prompt: 'Why should a descriptive essay avoid vague words like "nice" or "good"?',
    options: ['They give weak, vague images; stronger words add power', 'They are grammatically wrong in the isiXhosa language', 'Markers penalise the use of any English words', 'They are only fitting in formal letters to people'],
    answer: 'They give weak, vague images; stronger words add power',
    explanation: 'Precise vocabulary — e.g. "gleaming" instead of "nice" — is a key criterion in writing assessments.',
  },
  {
    prompt: 'In the writing process, what happens during the "revise and edit" stage?',
    options: ['You check content, improve language and fix grammar', 'You generate ideas without any filtering', 'You write the first complete version of the text', 'You choose the topic that you will write on'],
    answer: 'You check content, improve language and fix grammar',
    explanation: 'Revision and editing are distinct from drafting — here you polish the text for accuracy, clarity, and effect.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Reflective essay, descriptive essay, friendly and formal texts, planning and drafting"
    learnSteps={learnSteps}
    task="gr11-xho-writing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
