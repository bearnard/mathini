import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Read everyday texts for main ideas and useful details',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 2, you read familiar texts like short stories, menus, adverts, instructions, and
          timetables. Focus on the <strong>main idea</strong> and the key details that help you answer
          questions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Simple stories</p>
            <p className="text-slate-600">identify characters, setting, and main idea</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Menus</p>
            <p className="text-slate-600">find items, prices, and choices</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Advertisements</p>
            <p className="text-slate-600">notice purpose and target audience</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Timetables</p>
            <p className="text-slate-600">read times and sequence of events</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use scanning and matching skills for quick understanding',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good readers use strategies. <strong>Scan</strong> for key words, match questions to details, and
          check if your answer fits the text exactly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Scan</p>
            <p className="text-slate-600">look quickly for names, numbers, and times</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Match</p>
            <p className="text-slate-600">link details to the correct question</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Sequence</p>
            <p className="text-slate-600">follow first, next, then, and finally</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Check meaning</p>
            <p className="text-slate-600">re-read if something is unclear</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpret practical texts in daily life situations',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Reading and viewing skills help you make decisions every day. Use evidence from texts to choose
          meals, follow instructions, understand notices, and manage time.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Instruction text</p>
            <p className="text-slate-600">follow steps in the correct order</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Notice board</p>
            <p className="text-slate-600">read place, date, and event details</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Menu choice</p>
            <p className="text-slate-600">compare options and prices</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Time planning</p>
            <p className="text-slate-600">use timetable information correctly</p>
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
    options: ['persuade people to buy or use something', 'tell a full life story', 'list all grammar rules', 'show maths formulas'],
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
    options: ['Specific details like names, times, or prices', 'Only difficult spelling words', 'Every sentence from memory', 'The writer’s handwriting style'],
    answer: 'Specific details like names, times, or prices',
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
