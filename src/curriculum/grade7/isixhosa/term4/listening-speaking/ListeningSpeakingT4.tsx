import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

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
