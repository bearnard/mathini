import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A personal recount should mainly describe...',
    options: ['an event you experienced', 'a price catalogue', 'a grammar table only', 'a map legend'],
    answer: 'an event you experienced',
    explanation: 'Recounts retell personal experiences in sequence.',
  },
  {
    prompt: 'Which sentence sounds like a short review opinion?',
    options: ['Le ncwadi inomdla kuba abalinganiswa bacacile.', 'Ndiyavuka kusasa ekuseni kakhulu.', 'Ivenkile ivaliwe ngoMvulo ngexesha.', 'Ndiyafunda izenzi kwiklasi yethu.'],
    answer: 'Le ncwadi inomdla kuba abalinganiswa bacacile.',
    explanation: 'A review includes evaluation with reasons.',
  },
  {
    prompt: 'What should a school message include?',
    options: ['clear purpose and key detail', 'many unrelated ideas', 'no greeting or context', 'random symbols'],
    answer: 'clear purpose and key detail',
    explanation: 'Messages should be brief but informative.',
  },
  {
    prompt: 'Which planning tool helps paragraph writing?',
    options: ['a simple outline of main points', 'guessing while writing', 'copying unrelated text', 'removing topic sentences'],
    answer: 'a simple outline of main points',
    explanation: 'Outlines help organise ideas before drafting.',
  },
  {
    prompt: 'Which edit is most useful before final submission?',
    options: ['correcting spelling errors', 'changing font colour only', 'adding random exclamation marks', 'deleting all punctuation'],
    answer: 'correcting spelling errors',
    explanation: 'Accurate spelling improves readability and marks.',
  },
  {
    prompt: 'In a recount, sequence words like “first” and “then” are used to...',
    options: ['show order of events', 'introduce a poem rhyme', 'ask questions', 'replace verbs'],
    answer: 'show order of events',
    explanation: 'Sequence words keep narrative order clear.',
  },
  {
    prompt: 'Which ending suits a reflective paragraph?',
    options: ['Ndifunde lukhulu kolu suku.', 'Yiya phaya ngoku!', 'Andazi ngokupheleleyo.', '2x + 3 = 9'],
    answer: 'Ndifunde lukhulu kolu suku.',
    explanation: 'It reflects on learning from the experience.',
  },
  {
    prompt: 'Why practise writing revision in Term 4?',
    options: ['to prepare for end-of-year tasks', 'to avoid presenting', 'to skip editing', 'to remove sentence control'],
    answer: 'to prepare for end-of-year tasks',
    explanation: 'Revision strengthens readiness for final assessment.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Personal recounts, short reviews, messages, and revision paragraphs"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
