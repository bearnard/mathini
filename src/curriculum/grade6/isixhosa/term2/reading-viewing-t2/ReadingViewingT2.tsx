import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT2.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'What does the main idea of a short story tell you?',
    options: ['What the story is mostly about', 'The colour of the cover only', 'How many desks are in class', 'The writer’s favourite food'],
    answer: 'What the story is mostly about',
    explanation: 'The main idea is the central message of the text.',
  },
  {
    prompt: 'Which text is best for finding the cost of food items?',
    options: ['Menu', 'Timetable', 'Map', 'Diary entry'],
    answer: 'Menu',
    explanation: 'A menu lists food choices and prices.',
  },
  {
    prompt: 'Which text is best for checking what time the school bus leaves?',
    options: ['Timetable', 'Advertisement', 'Recipe', 'Poem'],
    answer: 'Timetable',
    explanation: 'A timetable gives organised time information.',
  },
  {
    prompt: 'An advertisement’s main purpose is usually to...',
    options: ['persuade people to buy or use something', 'tell a full life story in order', 'list all of the rules of grammar', 'show the formulas used in maths'],
    answer: 'persuade people to buy or use something',
    explanation: 'Adverts are designed to attract attention and persuade an audience.',
  },
  {
    prompt: 'When reading instructions, what should you do first?',
    options: ['Find step 1 and start there', 'Read only the last step', 'Skip all action words', 'Do steps in random order'],
    answer: 'Find step 1 and start there',
    explanation: 'Instructions must be followed in sequence to work properly.',
  },
  {
    prompt: 'What does scanning help you find quickly?',
    options: ['Specific details like names, times or prices', 'Only the difficult spelling words', 'Every sentence of the text from memory', 'The writer’s style of handwriting'],
    answer: 'Specific details like names, times or prices',
    explanation: 'Scanning is a fast reading strategy for key facts.',
  },
  {
    prompt: 'If a notice says “Meeting at 14:00 in Hall B,” where must you go?',
    options: ['Hall B', 'Library corner', 'Sports field', 'Bus stop'],
    answer: 'Hall B',
    explanation: 'The location detail in the notice is Hall B.',
  },
  {
    prompt: 'Which detail helps you compare two meals on a menu?',
    options: ['Price of each meal', 'Name of the class teacher', 'Date of your birthday', 'Type of school uniform'],
    answer: 'Price of each meal',
    explanation: 'Comparing prices helps you choose between menu options.',
  },
  {
    prompt: 'Why should you re-read a sentence when meaning is unclear?',
    options: ['To confirm the correct understanding', 'To make the text longer', 'To change the topic completely', 'To avoid answering questions'],
    answer: 'To confirm the correct understanding',
    explanation: 'Re-reading helps you check details and answer accurately.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Simple stories, menus, adverts, instructions, and timetables"
    learnSteps={learnSteps}
    task="reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ReadingViewingT2;
