import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Prose study — social themes and perspective',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 prose study focuses on <strong>social themes</strong> — how novels and stories reflect the real-world issues of communities.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Common social themes</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Poverty and inequality</li>
              <li>Gender roles and identity</li>
              <li>Cultural tradition vs modernity</li>
              <li>Education and opportunity</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Perspective</strong>
            <p className="text-slate-600">Whose point of view tells the story? How does that perspective shape what we see and understand? Consider whose voice is centred and whose is marginalised.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Media texts — bias, perspective, and reliability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When analysing media texts (news articles, advertisements, social media), critically assess <strong>perspective</strong> and <strong>reliability</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Questions to ask:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>Who created this text and what is their purpose?</li>
            <li>Whose views are represented and whose are left out?</li>
            <li>Is evidence cited — are sources credible?</li>
            <li>What language signals bias or objectivity?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual literacy — design elements and meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Visual texts</strong> use design deliberately to create meaning. Analyse these elements:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Colour</strong>
            <p className="text-slate-600">Colours carry connotations — red for danger/passion, green for nature/safety, blue for calm/trust.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Layout</strong>
            <p className="text-slate-600">Placement guides the reader's eye. Dominant images draw attention; headings establish hierarchy.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Font and size</strong>
            <p className="text-slate-600">Bold/large text emphasises importance; font style signals formality or creativity.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing viewpoints — justifying interpretations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 reading skills require you to <strong>compare two or more viewpoints</strong> and justify your interpretation with evidence.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">A comparison answer should include:</p>
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li>Identify the viewpoint of Source A (with evidence).</li>
            <li>Identify the viewpoint of Source B (with evidence).</li>
            <li>Explain how they agree, differ, or complement each other.</li>
            <li>State your own reasoned interpretation.</li>
          </ol>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these text-type words aloud before working with media, instructions, and informational reading.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Imenyu"} phonetic={"[i'meɲu]"} meaning={"Menu"} lang="xh" />
          <PronunciationPlayer word={"Imiyalelo"} phonetic={"[imi.ja'lɛlɔ]"} meaning={"Instructions"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advert / notice"} lang="xh" />
          <PronunciationPlayer word={"Umqondiso"} phonetic={"[umqondiso]"} meaning={"Sign / symbol"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Time / schedule"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following is a social theme commonly found in isiXhosa prose?',
    options: [
      'Tension between cultural tradition and modern life',
      'The physics of sound waves',
      'Mathematical problem solving',
      'Cooking recipes from the Eastern Cape',
    ],
    answer: 'Tension between cultural tradition and modern life',
    explanation: 'Social themes reflect real community experiences; the clash between tradition and modernity is a recurring theme in South African literature.',
  },
  {
    prompt: 'What does "perspective" refer to when analysing a novel?',
    options: [
      'The point of view from which the story is told and how it shapes meaning',
      'The physical setting of the story',
      'The length of the chapters',
      'The font used in the printed edition',
    ],
    answer: 'The point of view from which the story is told and how it shapes meaning',
    explanation: 'Perspective (narrative voice) determines what readers know and feel — different narrators create different interpretations.',
  },
  {
    prompt: 'Which question is most useful when assessing the reliability of a media text?',
    options: [
      'Are the sources cited credible and verifiable?',
      'Is the text written in a colourful font?',
      'Does the text use short paragraphs?',
      'Is the text longer than one page?',
    ],
    answer: 'Are the sources cited credible and verifiable?',
    explanation: 'Reliable texts support claims with identifiable, credible sources — this is a key media literacy skill.',
  },
  {
    prompt: 'In visual literacy, what do connotations of colour help you analyse?',
    options: [
      'The emotional and cultural meanings a designer intends to convey',
      'The exact brightness of the image',
      'The printing cost of the document',
      'Whether the text is fiction or non-fiction',
    ],
    answer: 'The emotional and cultural meanings a designer intends to convey',
    explanation: 'Colour choice is deliberate: designers use colours to trigger emotional associations and guide the viewer\'s response.',
  },
  {
    prompt: 'When comparing two media sources on the same topic, what should you do FIRST?',
    options: [
      'Identify the viewpoint and evidence in Source A',
      'Decide which source is correct before reading both',
      'Summarise only the longer source',
      'Count the number of images in each source',
    ],
    answer: 'Identify the viewpoint and evidence in Source A',
    explanation: 'Systematic comparison begins with clearly identifying and recording what each source says before drawing comparisons.',
  },
  {
    prompt: 'What language feature signals objectivity in a media text?',
    options: [
      'Neutral vocabulary, balanced reporting, and cited evidence',
      'Emotive language and one-sided claims',
      'Use of slang and personal opinions',
      'Large, bold headlines that express strong emotion',
    ],
    answer: 'Neutral vocabulary, balanced reporting, and cited evidence',
    explanation: 'Objective media texts present multiple views fairly, use neutral language, and support claims with verifiable evidence.',
  },
  {
    prompt: 'Why is "font size" a visual literacy element worth analysing?',
    options: [
      'Larger or bolder text signals importance and directs the reader\'s attention',
      'It only indicates the printer\'s preference',
      'It has no effect on how a reader receives the message',
      'It determines the mood of the text independently of words',
    ],
    answer: 'Larger or bolder text signals importance and directs the reader\'s attention',
    explanation: 'Typographical choices — size, weight, style — guide the reader\'s eye and communicate hierarchy and emphasis.',
  },
  {
    prompt: 'Which narrative perspective allows the reader to know the thoughts of ALL characters?',
    options: [
      'Third-person omniscient narrator',
      'First-person narrator',
      'Second-person narrator',
      'Third-person limited narrator',
    ],
    answer: 'Third-person omniscient narrator',
    explanation: 'An omniscient narrator has god-like knowledge of every character\'s thoughts and feelings throughout the story.',
  },
  {
    prompt: 'What does a "justified interpretation" of a text require?',
    options: [
      'Supporting your reading with direct evidence (quotations or examples) from the text',
      'Agreeing with your teacher\'s interpretation',
      'Writing the longest possible answer',
      'Using only your personal feelings without reference to the text',
    ],
    answer: 'Supporting your reading with direct evidence (quotations or examples) from the text',
    explanation: 'In CAPS, any interpretation must be grounded in evidence — personal response alone is insufficient.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Prose study, media texts, visual literacy, social themes, and perspective"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT2;
