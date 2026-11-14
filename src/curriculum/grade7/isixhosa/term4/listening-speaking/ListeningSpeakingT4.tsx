import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Prepare short talks on health, feelings, and future plans',
    image: {
      src: '/curriculum/grade7/xho/term4/listening-speaking/diagram.webp',
      alt: 'Grade 7 learners delivering short isiXhosa talks on health and future plans',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 oral work revises vocabulary through discussions about <strong>health, feelings,</strong> and
          <strong> future plans</strong>, plus short prepared talks.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-semibold text-rose-800">Prepared speech</p>
            <p className="text-slate-600">Plan your points and practise smooth delivery.</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-semibold text-lime-800">Discussion skills</p>
            <p className="text-slate-600">Listen actively and respond respectfully to others.</p>
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
          Say these health, feelings, and celebration words aloud to build confidence for revision conversations.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Impilo"} phonetic={"[im'piːlɔ]"} meaning={"Health"} lang="xh" />
          <PronunciationPlayer word={"Uvuyo"} phonetic={"[u'vujɔ]"} meaning={"Joy"} lang="xh" />
          <PronunciationPlayer word={"Usizi"} phonetic={"[u'siːzi]"} meaning={"Sadness"} lang="xh" />
          <PronunciationPlayer word={"Ndidiniwe"} phonetic={"[ndi.di'niːwe]"} meaning={"I am tired"} lang="xh" />
          <PronunciationPlayer word={"Umnyhadala"} phonetic={"[umɲa'dala]"} meaning={"Celebration / event"} lang="xh" />
          <PronunciationPlayer word={"Phumla"} phonetic={"[pʰum'la]"} meaning={"Rest"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence shares a feeling clearly?',
    options: ['Namhlanje ndiziva ndonwabile.', 'Namhlanje ibhasi ibomvu.', 'Namhlanje yintoni?', 'Namhlanje andazi.'],
    answer: 'Namhlanje ndiziva ndonwabile.',
    explanation: 'It clearly states an emotion.',
  },
  {
    prompt: 'A healthy habit example is...',
    options: ['ukutya ukutya okunempilo', 'ukungalali konke', 'ukusela iziselo ezineswekile kuphela', 'ukungazilolongi'],
    answer: 'ukutya ukutya okunempilo',
    explanation: 'Balanced food is part of healthy living.',
  },
  {
    prompt: 'Which phrase shows a future plan?',
    options: ['Ndiza kufunda nzima kulo nyaka uzayo.', 'Ndifunda ngoku nje ekhaya.', 'Ndifunde izolo ebusuku kakhulu.', 'Andisafundi kule minyaka ngoku.'],
    answer: 'Ndiza kufunda nzima kulo nyaka uzayo.',
    explanation: 'Ndiza indicates planned future action.',
  },
  {
    prompt: 'In a short prepared talk, you should first...',
    options: ['introduce your topic', 'jump to conclusion only', 'speak without planning', 'ignore audience'],
    answer: 'introduce your topic',
    explanation: 'A clear introduction helps the audience follow.',
  },
  {
    prompt: 'Which response shows respectful discussion behaviour?',
    options: ['Ndiyavuma, kwaye ndinoluvo olongezelelweyo.', 'Sukundiphikisa ngoku, ndiyakuxelela!', 'Awazi nto ngale ngxoxo kwaphela!', 'Mamela mna kuphela, ungathethi!'],
    answer: 'Ndiyavuma, kwaye ndinoluvo olongezelelweyo.',
    explanation: 'It responds politely and adds ideas constructively.',
  },
  {
    prompt: 'Listening quizzes mainly assess your ability to...',
    options: ['hear and recall key details', 'write long essays', 'draw diagrams only', 'memorise spelling lists'],
    answer: 'hear and recall key details',
    explanation: 'Listening tasks focus on oral information processing.',
  },
  {
    prompt: 'Which topic belongs to Term 4 oral revision?',
    options: ['health vocabulary', 'map coordinates', 'chemical equations', 'binary coding'],
    answer: 'health vocabulary',
    explanation: 'Health and wellbeing language is part of the term focus.',
  },
  {
    prompt: 'Why is pace important in oral delivery?',
    options: ['It helps listeners understand the message.', 'It makes talks longer only.', 'It replaces pronunciation.', 'It removes need for preparation.'],
    answer: 'It helps listeners understand the message.',
    explanation: 'Controlled pace improves clarity and comprehension.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Health, feelings, future plans, and revision discussions"
    learnSteps={learnSteps}
    task="gr7-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
