import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'How media texts explain current issues',
    image: {
      src: '/curriculum/grade6/eng/term1/current-issues-media/diagram.webp',
      alt: 'learner comparing a newspaper article and radio report about a community issue',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Media texts</strong> help us understand issues happening now. We read newspaper articles and
          listen to radio reports to find the <strong>main idea</strong>, key details, and different viewpoints.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Newspaper article</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">headline</span>
              <span className="rounded-full bg-white px-3 py-1">paragraphs</span>
              <span className="rounded-full bg-white px-3 py-1">details</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Radio report</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">spoken news</span>
              <span className="rounded-full bg-white px-3 py-1">careful listening</span>
              <span className="rounded-full bg-white px-3 py-1">tone</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Main idea</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">what it is mostly about</span>
              <span className="rounded-full bg-white px-3 py-1">big picture</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Current issue</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">real problem</span>
              <span className="rounded-full bg-white px-3 py-1">community topic</span>
              <span className="rounded-full bg-white px-3 py-1">reasons</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Spot fact, opinion, inference and evidence',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good readers ask, <strong>Can I prove this?</strong> Facts can be checked, opinions show what someone
          thinks, and inferences are smart ideas we make from clues. Evidence supports a claim.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Fact</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">can be checked</span>
              <span className="rounded-full bg-white px-3 py-1">date</span>
              <span className="rounded-full bg-white px-3 py-1">name</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Opinion</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">belief</span>
              <span className="rounded-full bg-white px-3 py-1">judgement</span>
              <span className="rounded-full bg-white px-3 py-1">viewpoint</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Inference</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">clues</span>
              <span className="rounded-full bg-white px-3 py-1">thinking</span>
              <span className="rounded-full bg-white px-3 py-1">probable meaning</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Evidence</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">quote</span>
              <span className="rounded-full bg-white px-3 py-1">detail</span>
              <span className="rounded-full bg-white px-3 py-1">proof</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Listen critically and discuss viewpoints',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          When we discuss a current issue, we should <strong>listen carefully</strong>, compare viewpoints, and
          give reasons backed by evidence. If one side is over-emphasised, we should think about possible bias.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Viewpoint</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">who is speaking</span>
              <span className="rounded-full bg-white px-3 py-1">what they believe</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Reasons</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">explain your answer</span>
              <span className="rounded-full bg-white px-3 py-1">use support</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Bias</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">one-sided</span>
              <span className="rounded-full bg-white px-3 py-1">missing facts</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Critical listening</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">notice tone</span>
              <span className="rounded-full bg-white px-3 py-1">check evidence</span>
              <span className="rounded-full bg-white px-3 py-1">ask questions</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which media text would you usually read in paragraphs under a headline?',
    options: ['Newspaper article', 'Radio report', 'Television remote', 'Poetry notebook'],
    answer: 'Newspaper article',
    explanation: 'A newspaper article is a written media text with a headline and organised paragraphs.',
  },
  {
    prompt: 'Which media text do you mainly listen to?',
    options: ['Radio report', 'Wall poster', 'Comic strip', 'Recipe card'],
    answer: 'Radio report',
    explanation: 'A radio report is spoken, so listeners need to pay close attention to the information.',
  },
  {
    prompt: 'Which sentence is a fact?',
    options: [
      'The report says the meeting starts at 3 p.m.',
      'The meeting is the most exciting event ever.',
      'Everyone will definitely love the meeting.',
      'The meeting sounds boring and pointless.',
    ],
    answer: 'The report says the meeting starts at 3 p.m.',
    explanation: 'A fact can be checked. The start time can be confirmed in the report or notice.',
  },
  {
    prompt: 'Which sentence is an opinion?',
    options: [
      'The new park is the best place in town.',
      'The park opened on Saturday morning.',
      'The article names the mayor of the town.',
      'Two swings were added to the park.',
    ],
    answer: 'The new park is the best place in town.',
    explanation: 'Words like “best” show a judgement, not something everyone can prove.',
  },
  {
    prompt: 'A report says, “Umbrellas filled the taxi rank as dark clouds gathered.” What is the best inference?',
    options: [
      'It was probably about to rain.',
      'The sun was shining brightly all day.',
      'Everyone had forgotten their umbrellas at home.',
      'The taxi rank was closed for the week.',
    ],
    answer: 'It was probably about to rain.',
    explanation: 'Umbrellas and dark clouds are clues that help you infer rainy weather.',
  },
  {
    prompt: 'Which choice is evidence that supports a claim in a media text?',
    options: [
      'A quoted witness statement and a photo caption',
      'A random guess with no source',
      'A joke that changes the topic',
      'A repeated opinion with no detail',
    ],
    answer: 'A quoted witness statement and a photo caption',
    explanation: 'Evidence includes details, quotes, and other proof that back up what the text says.',
  },
  {
    prompt: 'The main idea of a media text tells you…',
    options: [
      'what the text is mostly about',
      'how to rewrite every sentence',
      'only the writer’s favourite word',
      'the colour of the paper only',
    ],
    answer: 'what the text is mostly about',
    explanation: 'The main idea is the big message or central point of the text.',
  },
  {
    prompt: 'If a speaker gives only one side of an issue and ignores other facts, what should you think about?',
    options: ['Possible bias', 'The page number', 'The weather forecast', 'Alphabet order'],
    answer: 'Possible bias',
    explanation: 'Bias happens when information is presented in a one-sided way.',
  },
  {
    prompt: 'How can you discuss a current issue well in class?',
    options: [
      'Support your opinion with evidence from the text',
      'Ignore what everyone else says',
      'Choose an answer without any reason',
      'Only repeat the title of the article',
    ],
    answer: 'Support your opinion with evidence from the text',
    explanation: 'Strong discussions use reasons and evidence, not just unsupported opinions.',
  },
];

const CurrentIssuesMedia = () => (
  <CapsSubjectTopic
    title="Current Issues Media Texts"
    subtitle="Reading, listening, and checking viewpoints in the news"
    learnSteps={learnSteps}
    task="current-issues-media"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CurrentIssuesMedia;
