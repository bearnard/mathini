import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Curate and present a portfolio of artwork',
    image: {
      src: '/curriculum/grade9/creative-arts/term4/visual-arts/image1.jpg',
      alt: 'Grade 9 learners presenting portfolio work and reflecting on artistic growth',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual Arts in Grade 9 Term 4 culminates your learning. You select strongest portfolio pieces, plan exhibition presentation, apply finishing techniques, write critical reflections on your work, and explore creative careers. Demonstrate artistic growth, technical development, and clear communication of intent.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Portfolio selection involves...',
    options: ['Choosing your strongest work that shows development and variety', 'Picking randomly', 'No selection needed', 'All work equally important'],
    answer: 'Choosing your strongest work that shows development and variety',
    explanation: 'Strategic selection demonstrates growth and artistic voice.',
  },
  {
    prompt: 'Exhibition curation means...',
    options: ['Planning how artwork will be displayed, arranged, and presented', 'Just hanging pictures', 'No planning needed', 'Random placement only'],
    answer: 'Planning how artwork will be displayed, arranged, and presented',
    explanation: 'Thoughtful curation enhances viewer experience and artwork impact.',
  },
  {
    prompt: 'Finishing techniques in visual arts include...',
    options: ['Framing, mounting, protective spray, matting, or labelling', 'Nothing necessary', 'No final touches', 'Leaving it messy'],
    answer: 'Framing, mounting, protective spray, matting, or labelling',
    explanation: 'Professional finishing elevates presentation and artwork longevity.',
  },
  {
    prompt: 'A critical reflection on your work should explain...',
    options: ['Your artistic growth, successes, challenges, and lessons learned', 'Just saying it\'s nice', 'No reflection needed', 'Guessing about intent'],
    answer: 'Your artistic growth, successes, challenges, and lessons learned',
    explanation: 'Reflection demonstrates meta-cognition and artistic maturity.',
  },
  {
    prompt: 'Creative careers in visual arts might include...',
    options: ['Illustrator, graphic designer, art teacher, curator, or fine artist', 'Only one option', 'No careers exist', 'Nothing professional'],
    answer: 'Illustrator, graphic designer, art teacher, curator, or fine artist',
    explanation: 'Many career paths value creative visual skills.',
  },
  {
    prompt: 'Moderation of a portfolio involves...',
    options: ['Evaluating work against standards and providing constructive feedback', 'No assessment needed', 'Ignoring the work', 'Unfair judgment only'],
    answer: 'Evaluating work against standards and providing constructive feedback',
    explanation: 'Moderation ensures fair assessment and supports improvement.',
  },
  {
    prompt: 'Presentation of artwork includes...',
    options: ['Clean display, good lighting, labels, and artist statements', 'Just showing pictures', 'No context needed', 'Messy presentation only'],
    answer: 'Clean display, good lighting, labels, and artist statements',
    explanation: 'Professional presentation enhances artwork appreciation and impact.',
  },
  {
    prompt: 'Demonstrating artistic growth in your portfolio means showing...',
    options: ['Progression in skill, concept development, and creative risk-taking', 'Same work always', 'No improvement', 'Repetitive only'],
    answer: 'Progression in skill, concept development, and creative risk-taking',
    explanation: 'Growth evidence shows learning and artistic development.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Portfolio moderation, exhibition curation, presentation, and arts careers"
    learnSteps={learnSteps}
    task="gr9-visual-arts-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
