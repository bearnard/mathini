import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Stories and visuals both send meaning',
    image: {
      src: '/curriculum/grade6/eng/term1/fiction-visual-literacy/diagram.webp',
      alt: 'learner reading a story while studying a colourful advertisement poster',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In English HL we read <strong>fiction</strong> and <strong>visual texts</strong>. We look at the
          setting, the plot, and the message so that words and pictures both make sense.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-purple-50 p-4 text-left">
            <strong className="text-purple-800">Speculative fiction</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-purple-700">
              <span className="rounded-full bg-white px-3 py-1">imagined worlds</span>
              <span className="rounded-full bg-white px-3 py-1">future ideas</span>
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Setting</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">where</span>
              <span className="rounded-full bg-white px-3 py-1">when</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Plot</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">events</span>
              <span className="rounded-full bg-white px-3 py-1">problem</span>
              <span className="rounded-full bg-white px-3 py-1">solution</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Message</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">idea</span>
              <span className="rounded-full bg-white px-3 py-1">theme</span>
              <span className="rounded-full bg-white px-3 py-1">meaning</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Alice's Adventures in Wonderland\" — Lewis Carroll"}
        text={"\"Curiouser and curiouser!\" cried Alice. \"Now I'm opening out like the largest telescope that ever was! Goodbye, feet!\""}
        annotations={[
          { start: 1, end: 25, device: "tone", note: "The excited exclamation creates a playful, astonished tone at the start of the moment." },
          { start: 61, end: 87, device: "simile", note: "Alice explains her growth through a vivid comparison that a young reader can picture immediately." },
          { start: 103, end: 117, device: "personification", note: "She speaks to her own feet as though they could listen, adding comic fantasy to the scene." },
        ]}
      />
    ),
  },
  {
    title: 'Use skimming, scanning and visualising',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Different reading strategies help for different jobs. We <strong>skim</strong> for the general idea,
          <strong> scan</strong> for one detail, and <strong>visualise</strong> to build a picture in our minds.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Skimming</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">quick overview</span>
              <span className="rounded-full bg-white px-3 py-1">general idea</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Scanning</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">find one fact</span>
              <span className="rounded-full bg-white px-3 py-1">specific word</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Visualising</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">mind picture</span>
              <span className="rounded-full bg-white px-3 py-1">use clues</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Vocabulary in context</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">nearby words</span>
              <span className="rounded-full bg-white px-3 py-1">sentence clues</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Adverts are made for a purpose',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Visual literacy means noticing how pictures, colour, and layout help an advert speak to a
          <strong> target audience</strong>. Good readers ask what the advert wants us to do and who it is meant for.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Purpose</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">inform</span>
              <span className="rounded-full bg-white px-3 py-1">persuade</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Target audience</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">who it is for</span>
              <span className="rounded-full bg-white px-3 py-1">age group</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Visual clues</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">colour</span>
              <span className="rounded-full bg-white px-3 py-1">picture</span>
              <span className="rounded-full bg-white px-3 py-1">size</span>
            </div>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Reader thinking</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">Who?</span>
              <span className="rounded-full bg-white px-3 py-1">Why?</span>
              <span className="rounded-full bg-white px-3 py-1">What message?</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is speculative fiction?',
    options: [
      'A story that imagines unusual worlds or future events',
      'A list of real school rules only',
      'A newspaper weather chart',
      'A set of maths instructions',
    ],
    answer: 'A story that imagines unusual worlds or future events',
    explanation: 'Speculative fiction uses imagination to explore ideas beyond everyday life.',
  },
  {
    prompt: 'What does the setting of a story tell you?',
    options: [
      'Where and when the story happens',
      'Only the author’s surname',
      'The price of the book',
      'How many pages are left',
    ],
    answer: 'Where and when the story happens',
    explanation: 'The setting gives the place and time of the story.',
  },
  {
    prompt: 'What is the plot of a story?',
    options: [
      'The events that happen in the story',
      'The colour of the cover only',
      'A list of difficult words',
      'The name of the library shelf',
    ],
    answer: 'The events that happen in the story',
    explanation: 'Plot is the sequence of events, including the problem and what follows.',
  },
  {
    prompt: 'Why do readers skim a text?',
    options: [
      'To get the general idea quickly',
      'To copy every word exactly',
      'To find one date only',
      'To count all the punctuation marks',
    ],
    answer: 'To get the general idea quickly',
    explanation: 'Skimming helps you understand what the text is mostly about without reading every word slowly.',
  },
  {
    prompt: 'Why do readers scan a text?',
    options: [
      'To find a specific detail quickly',
      'To guess without looking',
      'To change the ending of the story',
      'To memorise every sentence',
    ],
    answer: 'To find a specific detail quickly',
    explanation: 'Scanning is useful when you need one fact, name, or word fast.',
  },
  {
    prompt: 'What does it mean to visualise while reading?',
    options: [
      'To make a picture in your mind',
      'To draw only with a ruler',
      'To skip to the last page',
      'To read without thinking',
    ],
    answer: 'To make a picture in your mind',
    explanation: 'Visualising helps readers imagine the people, place, and action in a text.',
  },
  {
    prompt: 'Why do adverts often use bright colours and large pictures?',
    options: [
      'To attract attention and support the message',
      'To hide the main idea completely',
      'To make reading impossible',
      'To replace all words with silence',
    ],
    answer: 'To attract attention and support the message',
    explanation: 'Visual choices help an advert stand out and persuade its audience.',
  },
  {
    prompt: 'An advert for a new game uses cartoon heroes and simple language. Who is the target audience?',
    options: ['Children', 'Drivers only', 'Doctors only', 'Farm animals'],
    answer: 'Children',
    explanation: 'The style and language suggest that the advert is aimed at young readers.',
  },
  {
    prompt: 'In the sentence “Lebo crept through the silent house,” what does “crept” most nearly mean?',
    options: [
      'moved quietly and carefully',
      'sang loudly in the kitchen',
      'jumped high over the gate',
      'laughed at a funny joke',
    ],
    answer: 'moved quietly and carefully',
    explanation: 'The context clue “silent house” suggests careful, quiet movement.',
  },
];

const FictionVisualLiteracy = () => (
  <CapsSubjectTopic
    title="Fiction and Visual Literacy"
    subtitle="Understanding stories, adverts, and the clues they give"
    learnSteps={learnSteps}
    task="fiction-visual-literacy"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FictionVisualLiteracy;
