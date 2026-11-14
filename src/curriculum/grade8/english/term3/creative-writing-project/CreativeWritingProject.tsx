import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan and research before drafting',
    image: {
      src: '/curriculum/grade8/eng/term3/creative-writing-project/diagram.webp',
      alt: 'learner planning a creative writing project with research notes and draft pages',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A successful creative project starts with planning and research. Gather ideas, organise notes, and define
          audience and purpose before writing.
        </p>
      </div>
    ),
  },
  {
    title: 'Draft, peer review and revise',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Process writing includes drafting, feedback, and redrafting. Peer review helps identify strengths and areas
          for improvement.
        </p>
      </div>
    ),
  },
  {
    title: 'Present with reflection and clarity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final presentation should show polished language, structured ideas, and reflection on how the work developed
          through revision.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which stage comes first in a creative writing project?',
    options: ['planning and research', 'final presentation', 'peer review after final marks', 'publishing without drafting'],
    answer: 'planning and research',
    explanation: 'Planning gives direction and purpose before drafting begins.',
  },
  {
    prompt: 'Why is audience awareness important in project writing?',
    options: ['It shapes tone, detail and language choices.', 'It removes the need for structure.', 'It allows unrelated content.', 'It replaces revision.'],
    answer: 'It shapes tone, detail and language choices.',
    explanation: 'Writers choose content and style based on who will read the text.',
  },
  {
    prompt: 'Peer review is mainly used to...',
    options: ['get helpful feedback before finalising', 'avoid editing the work completely', 'check the handwriting style and nothing else', 'replace the original writer of the text'],
    answer: 'get helpful feedback before finalising',
    explanation: 'Peer comments help improve clarity and effectiveness.',
  },
  {
    prompt: 'What is redrafting?',
    options: ['rewriting after feedback to improve quality', 'copying the same draft with no changes', 'adding random pictures only', 'deleting all paragraphs'],
    answer: 'rewriting after feedback to improve quality',
    explanation: 'Redrafting applies revision decisions to strengthen the writing.',
  },
  {
    prompt: 'A strong project introduction should...',
    options: ['engage the reader and state focus clearly', 'list unrelated statistics only', 'repeat the title many times', 'avoid any clear purpose'],
    answer: 'engage the reader and state focus clearly',
    explanation: 'Introductions set direction and create interest.',
  },
  {
    prompt: 'Which evidence best shows reflection in a project?',
    options: ['explaining how feedback changed the final draft', 'stating that no changes were needed', 'removing all of the planning notes', 'submitting the title page and nothing else'],
    answer: 'explaining how feedback changed the final draft',
    explanation: 'Reflection comments on decisions and growth during writing.',
  },
  {
    prompt: 'What should happen before final submission?',
    options: ['editing for language, structure and accuracy', 'skipping the proofreading of the work', 'changing the topic for no good reason', 'taking out the paragraphing of the text'],
    answer: 'editing for language, structure and accuracy',
    explanation: 'Final editing checks quality and correctness.',
  },
  {
    prompt: 'Why use a project timeline?',
    options: ['to manage tasks and meet deadlines', 'to avoid planning entirely', 'to limit creativity to one sentence', 'to replace audience analysis'],
    answer: 'to manage tasks and meet deadlines',
    explanation: 'Timelines support steady progress through each writing stage.',
  },
];

const CreativeWritingProject = () => (
  <CapsSubjectTopic
    title="Creative Writing Project"
    subtitle="Research, process writing, peer review and reflective presentation"
    learnSteps={learnSteps}
    task="gr8-creative-writing-project-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default CreativeWritingProject;
