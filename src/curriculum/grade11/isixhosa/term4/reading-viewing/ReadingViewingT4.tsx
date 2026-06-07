import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term4/reading-viewing/diagram.webp", alt: "Reading & Viewing" },
    title: 'Literature revision — themes, characters, and quotation use',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revise your literature set works using these key analytical skills for Paper 2 examination readiness.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Themes</strong>
            <p className="text-slate-600">Identify the central message and trace how it is developed through character, plot, and language.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Characters</strong>
            <p className="text-slate-600">Analyse motivation, change (dynamic vs static), and role in developing the theme.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Quotation use</strong>
            <p className="text-slate-600">Select brief, relevant quotes. Integrate them grammatically. Always explain their significance.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 1 comprehension — summarising and inference',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 1 tests your ability to read unseen texts and demonstrate <strong>comprehension skills</strong> — including summary and inference.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Summary skills:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Identify the main idea of each paragraph</li>
              <li>Condense information in your own words</li>
              <li>Keep to the stated number of points</li>
              <li>Avoid copying the original word for word</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Inference skills:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Read between the lines using context</li>
              <li>Identify implied attitude or purpose</li>
              <li>Support inferences with textual clues</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual text revision — analysing images and design',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual literacy questions appear in Paper 1. Revise how to analyse images, cartoons, and advertisements.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Revision checklist:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>Purpose: What is the visual text trying to achieve?</li>
            <li>Audience: Who is it aimed at?</li>
            <li>Colour connotations: What feelings do the colours trigger?</li>
            <li>Body language / facial expressions (if applicable)</li>
            <li>Caption or tagline: How does it interact with the image?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Summary writing — exam technique and accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>summary task</strong> in CAPS assessments tests conciseness, accuracy, and language control.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Process:</strong>
            <ol className="list-decimal ml-4 text-slate-600 space-y-1 mt-1">
              <li>Underline relevant points in the passage.</li>
              <li>Write rough notes in your own words.</li>
              <li>Draft the summary keeping to the required word/point limit.</li>
              <li>Proofread for concord, tense, and vocabulary.</li>
            </ol>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Common mistakes to avoid:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Copying verbatim from the source</li>
              <li>Including irrelevant detail</li>
              <li>Exceeding the word limit</li>
              <li>Changing the original meaning</li>
            </ul>
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
          Keep these comprehension words ready while revising stories, visual texts, and summary skills.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advert / poster"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
          <PronunciationPlayer word={"Ingcinga"} phonetic={"[iŋ'ciŋga]"} meaning={"Idea / thought"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the most important step when integrating a quotation into an essay answer?',
    options: [
      'Explaining the significance of the quotation in relation to your argument',
      'Placing the quotation in the largest font',
      'Using a quotation that is longer than three sentences',
      'Ending your paragraph with the quotation',
    ],
    answer: 'Explaining the significance of the quotation in relation to your argument',
    explanation: 'A quotation without explanation is worthless — the explanation demonstrates your analytical understanding.',
  },
  {
    prompt: 'In a summary task, which practice will LOSE you marks?',
    options: [
      'Copying sentences verbatim from the source text',
      'Paraphrasing ideas in your own words',
      'Keeping to the required number of points',
      'Using correct grammar and punctuation',
    ],
    answer: 'Copying sentences verbatim from the source text',
    explanation: 'CAPS summary tasks require you to demonstrate comprehension by restating ideas in your own words — verbatim copying earns no credit.',
  },
  {
    prompt: 'What is the difference between a "literal" and an "inferential" comprehension question?',
    options: [
      'Literal questions can be answered directly from the text; inferential questions require reading between the lines',
      'Literal questions are always about vocabulary; inferential ones are about grammar',
      'Literal questions are harder than inferential ones',
      'They mean exactly the same thing',
    ],
    answer: 'Literal questions can be answered directly from the text; inferential questions require reading between the lines',
    explanation: 'Literal comprehension = stated information; inferential comprehension = implied meaning that requires reasoning from context.',
  },
  {
    prompt: 'What does a "dynamic character" do across the narrative?',
    options: [
      'Changes and develops as a result of the events they experience',
      'Remains exactly the same from start to finish',
      'Appears only in one scene',
      'Is always the main villain',
    ],
    answer: 'Changes and develops as a result of the events they experience',
    explanation: 'Dynamic characters grow or change — their development is often tied to the central theme of the text.',
  },
  {
    prompt: 'When analysing a visual advertisement, what should you identify FIRST?',
    options: [
      'The purpose — what the advertisement is trying to achieve',
      'The number of colours used',
      'The physical dimensions of the image',
      'Whether the advertisement is in colour or black and white',
    ],
    answer: 'The purpose — what the advertisement is trying to achieve',
    explanation: 'Understanding purpose frames all subsequent analysis — a sales ad, an awareness campaign, and a political poster use design very differently.',
  },
  {
    prompt: 'How should you handle a word you do not know in an unseen comprehension passage?',
    options: [
      'Use context clues (surrounding words and sentences) to infer its likely meaning',
      'Leave the question blank',
      'Translate the word directly into English',
      'Assume it means the opposite of the previous word',
    ],
    answer: 'Use context clues (surrounding words and sentences) to infer its likely meaning',
    explanation: 'Context clues — definition, example, contrast, and general sense — help you infer meaning even for unfamiliar vocabulary.',
  },
  {
    prompt: 'What is the purpose of a "tagline" or caption in a visual text?',
    options: [
      'To reinforce or complement the visual image with words, creating a unified message',
      'To provide technical information about the printing process',
      'To list the names of everyone who created the advertisement',
      'To describe the background of the image',
    ],
    answer: 'To reinforce or complement the visual image with words, creating a unified message',
    explanation: 'Taglines anchor the visual — they direct how the viewer interprets the image and reinforce the desired message.',
  },
  {
    prompt: 'In a summary, why must you keep to the required number of points?',
    options: [
      'Marks are awarded per relevant point — including more points does not earn extra marks and may confuse',
      'The question is only asking for a count of sentences',
      'Longer summaries always earn higher marks',
      'The marker ignores any points beyond the first one',
    ],
    answer: 'Marks are awarded per relevant point — including more points does not earn extra marks and may confuse',
    explanation: 'In CAPS, summary marks are allocated per point — adding extra points wastes time and can introduce incorrect information.',
  },
  {
    prompt: 'When revising themes in a literature set work, what evidence should you primarily use?',
    options: [
      'Character actions, dialogue, and specific events in the plot',
      'The author\'s biography and personal life',
      'The book\'s cover design and publication date',
      'Reviews written by other learners',
    ],
    answer: 'Character actions, dialogue, and specific events in the plot',
    explanation: 'Theme analysis must be grounded in the text — character behaviour, spoken words, and plot events are the evidence base.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Literature revision, comprehension skills, visual texts, and summary writing"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
