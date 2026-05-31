import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply design principles through print and collage work',
    image: {
      src: '/curriculum/grade8/ca/term2/visual-arts/diagram.webp',
      alt: 'Grade 8 learners planning printmaking and collage designs with pattern and contrast',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Visual Arts focuses on principles of design such as pattern, repetition, and contrast. Learners plan
          and produce artworks using printmaking and collage techniques with African visual references.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is a principle of design?',
    options: ['Contrast', 'Pitch', 'Metre', 'Dialogue'],
    answer: 'Contrast',
    explanation: 'Contrast is a design principle that creates visual interest through difference.',
  },
  {
    prompt: 'Pattern in artwork is created by...',
    options: ['Repeating visual elements', 'Removing all shapes', 'Using only one tiny dot', 'Ignoring spacing completely'],
    answer: 'Repeating visual elements',
    explanation: 'Pattern comes from repeating lines, shapes, colours, or motifs.',
  },
  {
    prompt: 'Printmaking usually involves...',
    options: ['Transferring an image from a prepared surface', 'Only freehand pencil shading', 'Building a clay sculpture', 'Recording a dance routine'],
    answer: 'Transferring an image from a prepared surface',
    explanation: 'In printmaking, an image is inked and transferred from a plate, block, or stencil.',
  },
  {
    prompt: 'Collage is an art technique where you...',
    options: ['Assemble cut or torn materials onto a surface', 'Carve directly into wood only', 'Paint with water only', 'Trace every line with a ruler'],
    answer: 'Assemble cut or torn materials onto a surface',
    explanation: 'Collage combines papers or textures to create a new image.',
  },
  {
    prompt: 'A focal point in a composition is...',
    options: ['The area that attracts the viewer first', 'The blank corner with no detail', 'The title of the artwork', 'The materials list'],
    answer: 'The area that attracts the viewer first',
    explanation: 'A focal point guides the viewer to the key visual idea.',
  },
  {
    prompt: 'Using African visual references means learners should...',
    options: ['Study and respectfully use local motifs and symbols', 'Copy any artwork exactly without thought', 'Avoid all cultural context', 'Only use imported themes'],
    answer: 'Study and respectfully use local motifs and symbols',
    explanation: 'Cultural references should be informed, respectful, and meaningful.',
  },
  {
    prompt: 'Positive and negative space refers to...',
    options: ['Object areas and surrounding empty areas', 'Only warm and cool colours', 'Loud and soft music', 'Fast and slow movement'],
    answer: 'Object areas and surrounding empty areas',
    explanation: 'Positive space is the subject; negative space is around it.',
  },
  {
    prompt: 'Process notes are useful because they...',
    options: ['Show planning, testing, and improvements', 'Replace practical work', 'Are only decoration', 'Do not include any decisions'],
    answer: 'Show planning, testing, and improvements',
    explanation: 'Process evidence helps explain how an artwork was developed.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Design principles, pattern, printmaking, collage, and African references"
    learnSteps={learnSteps}
    task="gr8-visual-arts-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
