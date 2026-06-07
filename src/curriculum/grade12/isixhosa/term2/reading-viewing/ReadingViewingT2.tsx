import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term2/reading-viewing/diagram.webp", alt: "Reading & Viewing" },
    title: 'Novel and drama: tracking themes across a text',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Themes develop over time through events, dialogue, and character choices.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Major themes</strong><p className="text-slate-600">Repeated central ideas such as justice, poverty, family, or perseverance.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Minor themes</strong><p className="text-slate-600">Smaller supporting ideas that add depth to the text.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Development</strong><p className="text-slate-600">Track how a theme changes as conflict grows and resolves.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Character perspective and motivation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Perspective affects how we judge actions, while motivation explains why characters act.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Questions to ask</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>What does the character want?</li>
              <li>What pressure shapes the decision?</li>
              <li>How does the character&apos;s viewpoint affect meaning?</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">isiXhosa drama example</strong>
            <p className="text-slate-600">If a character says, &quot;Andinakuthula xa ubulungisa bunyathelwa,&quot; that perspective shows moral urgency.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Media texts: layout and design for meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Newspapers and magazines use layout to guide attention and shape interpretation.</p>
        <div className="grid gap-3 text-left md:grid-cols-5">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Headline</strong><p className="text-sm text-slate-600">Signals main idea.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Photo</strong><p className="text-sm text-slate-600">Adds emotion or proof.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Caption</strong><p className="text-sm text-slate-600">Directs interpretation.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Pull quote</strong><p className="text-sm text-slate-600">Highlights a key idea.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Colour & font</strong><p className="text-sm text-slate-600">Create emphasis and tone.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Critical literacy: comparing viewpoints',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Critical readers compare texts, identify stance, and notice whose voices are emphasised or ignored.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Compare stance</strong><p className="text-slate-600">Ask whether each writer supports, criticises, or complicates the issue.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Check evidence</strong><p className="text-slate-600">Reliable comparison depends on direct evidence from both texts.</p></div>
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

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'rv21', question: 'A theme in a novel is best described as:', options: ['A central idea developed through the text', 'The number of chapters in the book', 'Only the setting of the story', 'The font on the cover'], answer: 0, explanation: 'Themes are recurring ideas or messages developed through characters and events.' },
  { id: 'rv22', question: 'Character motivation refers to:', options: ['Why a character acts in a certain way', 'How many lines a character speaks', 'The costume of a character', 'The title of the chapter'], answer: 0, explanation: 'Motivation explains the reasons behind a character’s decisions and behaviour.' },
  { id: 'rv23', question: 'Which feature in a newspaper article often gives the main idea immediately?', options: ['Headline', 'Page number', 'Staple position', 'Printer name'], answer: 0, explanation: 'The headline is designed to attract attention and state or frame the central story angle.' },
  { id: 'rv24', question: 'What is the purpose of a caption under a photograph?', options: ['To guide the reader’s understanding of the image', 'To hide the article topic', 'To replace the whole article', 'To show the price of the paper'], answer: 0, explanation: 'Captions identify or interpret the photo and connect it to the article.' },
  { id: 'rv25', question: 'When comparing viewpoints, what should you look for first?', options: ['Each writer’s stance on the issue', 'The paper quality', 'The number of paragraphs only', 'The writer’s handwriting'], answer: 0, explanation: 'Viewpoint comparison begins by identifying what each writer believes or argues.' },
  { id: 'rv26', question: 'Which statement best shows connotative meaning?', options: ['Calling a leader “a lion” suggests courage and power.', 'A lion is an animal in the cat family.', 'The article is six paragraphs long.', 'The play was published in 2002.'], answer: 0, explanation: 'Connotation includes implied associations beyond the literal meaning.' },
  { id: 'rv27', question: 'In drama analysis, dialogue can help you understand:', options: ['Theme and character perspective', 'Only the date of publication', 'The size of the theatre', 'The cost of the script'], answer: 0, explanation: 'Dialogue reveals personality, conflict, values, and thematic development.' },
  { id: 'rv28', question: 'Why should critical readers notice bias?', options: ['Because language choices may influence how an issue is presented', 'Because bias makes spelling easier', 'Because every biased text is fiction', 'Because bias removes the need for evidence'], answer: 0, explanation: 'Bias affects perspective, emphasis, and fairness in a text.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Novel or drama study, media texts, perspective, theme, and critical literacy"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT2;
