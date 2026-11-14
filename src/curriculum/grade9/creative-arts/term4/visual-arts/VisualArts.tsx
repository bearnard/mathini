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
    options: ['Choosing your best work to show growth and variety', 'Choosing pieces by chance, since all work is equal', 'Including everything, with no selection', 'Treating all pieces as equally important'],
    answer: 'Choosing your best work to show growth and variety',
    explanation: 'Strategic selection demonstrates growth and artistic voice.',
  },
  {
    prompt: 'Exhibition curation means...',
    options: ['Planning how the artwork is displayed, arranged and shown', 'Hanging the pictures wherever there is space', 'Putting up work without any planning', 'Placing the pictures in whatever order they arrive'],
    answer: 'Planning how the artwork is displayed, arranged and shown',
    explanation: 'Thoughtful curation enhances viewer experience and artwork impact.',
  },
  {
    prompt: 'Finishing techniques in visual arts include...',
    options: ['Framing, mounting, protective spray or labelling', 'Steps that a finished work does not need to have', 'Leaving off any final touches to the work', 'Leaving the work as it is, however messy it looks'],
    answer: 'Framing, mounting, protective spray or labelling',
    explanation: 'Professional finishing elevates presentation and artwork longevity.',
  },
  {
    prompt: 'A critical reflection on your work should explain...',
    options: ['Your growth as an artist, successes, challenges and lessons', 'A comment that the work is nice and no more', 'A reflection that is not needed for this work', 'A guess about what the artist had in mind'],
    answer: 'Your growth as an artist, successes, challenges and lessons',
    explanation: 'Reflection demonstrates meta-cognition and artistic maturity.',
  },
  {
    prompt: 'Creative careers in visual arts might include...',
    options: ['Illustrator, graphic designer, art teacher or curator', 'Painting for sale and no other kind of work', 'No careers exist for people who study art', 'Jobs that cannot be done as paid work'],
    answer: 'Illustrator, graphic designer, art teacher or curator',
    explanation: 'Many career paths value creative visual skills.',
  },
  {
    prompt: 'Moderation of a portfolio involves...',
    options: ['Checking work against standards and giving helpful feedback', 'No assessment, since every portfolio is the same', 'Ignoring the work and awarding marks by name', 'Judging the work by what the teacher likes'],
    answer: 'Checking work against standards and giving helpful feedback',
    explanation: 'Moderation ensures fair assessment and supports improvement.',
  },
  {
    prompt: 'Presentation of artwork includes...',
    options: ['A clean display, good lighting, labels and artist statements', 'Showing the pictures and nothing more', 'Work that needs no context to be understood', 'A messy display that hides weak pieces'],
    answer: 'A clean display, good lighting, labels and artist statements',
    explanation: 'Professional presentation enhances artwork appreciation and impact.',
  },
  {
    prompt: 'Demonstrating artistic growth in your portfolio means showing...',
    options: ['Growth in skill, idea development and creative risk-taking', 'The same kind of work, piece after piece', 'No improvement between the first piece and the last', 'Repetition of one style in each piece'],
    answer: 'Growth in skill, idea development and creative risk-taking',
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
