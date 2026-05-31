import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Discursive paragraph, formal letter, article, project writing, and presentation',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/writing-presenting/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners writing discursive paragraphs, formal letters, and project presentations',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Writing & Presenting focuses on <strong>discursive paragraph, formal letter, article,</strong>{' '}
          project writing, and presentation.
        </p>
        <p className="text-slate-600">
          Learners complete a longer project and switch effectively between reflective and formal writing tasks.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A discursive paragraph typically...',
    options: ['presents a topic, explores multiple viewpoints, and reaches a conclusion', 'has no structure', 'supports only one opinion without evidence', 'is extremely short'],
    answer: 'presents a topic, explores multiple viewpoints, and reaches a conclusion',
    explanation: 'Discursive writing explores a topic fairly by considering different angles.',
  },
  {
    prompt: 'A formal letter should include...',
    options: ['sender\'s address, date, formal greeting, clear body, closing, and signature', 'slang throughout', 'no structure', 'no date needed'],
    answer: 'sender\'s address, date, formal greeting, clear body, closing, and signature',
    explanation: 'Formal letter conventions show professionalism and respect.',
  },
  {
    prompt: 'An article for publication is written to...',
    options: ['inform, entertain, or persuade a specific audience', 'only for the writer', 'with no clear purpose', 'only academically'],
    answer: 'inform, entertain, or persuade a specific audience',
    explanation: 'Articles have a clear target audience and intended effect.',
  },
  {
    prompt: 'A project in an academic context should show...',
    options: ['research, original thinking, organization, and evidence of effort', 'minimal work', 'plagiarized content', 'incomplete ideas'],
    answer: 'research, original thinking, organization, and evidence of effort',
    explanation: 'Projects demonstrate learning through sustained, intentional work.',
  },
  {
    prompt: 'The purpose of a presentation is to...',
    options: ['communicate information or ideas effectively to an audience', 'read slides aloud', 'provide no visuals', 'ignore audience engagement'],
    answer: 'communicate information or ideas effectively to an audience',
    explanation: 'Presentations require clear organization and attention to audience needs.',
  },
  {
    prompt: 'When switching between writing styles, you should...',
    options: ['match your tone and vocabulary to the new context and audience', 'use the same style everywhere', 'ignore purpose', 'confuse the reader'],
    answer: 'match your tone and vocabulary to the new context and audience',
    explanation: 'Adaptability in style shows communication skill and professionalism.',
  },
  {
    prompt: 'Evidence in a discursive paragraph is best when it is...',
    options: ['specific, relevant, and from reliable sources', 'vague and general', 'made up', 'from unreliable sources'],
    answer: 'specific, relevant, and from reliable sources',
    explanation: 'Strong evidence builds credibility and persuades readers.',
  },
  {
    prompt: 'A project presentation should...',
    options: ['organize content logically, use visuals effectively, and invite questions', 'overwhelm with text', 'read verbatim from the slide', 'have no interaction'],
    answer: 'organize content logically, use visuals effectively, and invite questions',
    explanation: 'Engaging presentations balance information delivery with audience involvement.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Discursive paragraph, formal letter, article, project writing, and presentation"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
