import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT3.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'Which detail must appear in a formal invitation?',
    options: ['Date, time, and venue', 'Only a drawing', 'Only one greeting word', 'A random number'],
    answer: 'Date, time, and venue',
    explanation: 'Invitations should include essential event information for the reader.',
  },
  {
    prompt: 'What makes directions easy to follow?',
    options: [
      'Steps written in logical order with landmarks',
      'Mixing all steps without sequence words',
      'Using unrelated details about weather only',
      'Leaving out the destination',
    ],
    answer: 'Steps written in logical order with landmarks',
    explanation: 'Directions need clear sequence and place clues.',
  },
  {
    prompt: 'A recount is mainly used to...',
    options: [
      'Describe events that happened in order',
      'List only nouns without verbs',
      'Give mathematical formulas',
      'Write a poster slogan only',
    ],
    answer: 'Describe events that happened in order',
    explanation: 'Recounts tell what happened and follow event sequence.',
  },
  {
    prompt: 'Why is planning useful before drafting?',
    options: [
      'It helps organise ideas and stay on topic',
      'It removes the need for sentences',
      'It replaces revision completely',
      'It makes format unnecessary',
    ],
    answer: 'It helps organise ideas and stay on topic',
    explanation: 'Planning supports clear structure and focused writing.',
  },
  {
    prompt: 'Which linking word best shows sequence in a paragraph?',
    options: ['After that', 'Blue', 'Mountain', 'Yesterdayly'],
    answer: 'After that',
    explanation: 'Sequence linkers help connect actions in logical order.',
  },
  {
    prompt: 'What should you check during editing?',
    options: ['Spelling and punctuation', 'Only font colour', 'Only page margin size', 'Only desk arrangement'],
    answer: 'Spelling and punctuation',
    explanation: 'Editing improves correctness and readability.',
  },
  {
    prompt: 'Which sentence is best for an invitation opening?',
    options: [
      'You are warmly invited to our cultural day celebration',
      'Come maybe somewhere sometime',
      'I think writing is hard and that is all',
      'This invitation has no purpose',
    ],
    answer: 'You are warmly invited to our cultural day celebration',
    explanation: 'It clearly states the purpose and audience in a suitable tone.',
  },
  {
    prompt: 'What helps a picture paragraph stay connected?',
    options: [
      'Sentences that all describe the same scene',
      'A new unrelated topic in every line',
      'No verbs in any sentence',
      'Only repeating one word',
    ],
    answer: 'Sentences that all describe the same scene',
    explanation: 'Connected sentences should build one clear idea.',
  },
  {
    prompt: 'In CAPS-style writing assessment, format checks mainly look at...',
    options: [
      'Whether the text type features are used correctly',
      'How expensive the pen was',
      'Whether the learner wrote in one minute',
      'Whether the page has stickers',
    ],
    answer: 'Whether the text type features are used correctly',
    explanation: 'Format checks assess if required structural elements are present.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing and Presenting"
    subtitle="Producing invitations, directions, recounts, and connected paragraphs"
    learnSteps={learnSteps}
    task="writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default WritingPresentingT3;
