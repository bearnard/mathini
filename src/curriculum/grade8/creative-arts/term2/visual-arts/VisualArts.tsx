import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

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
    options: ['Transferring an image from a prepared surface', 'Shading freehand with a pencil only', 'Building a sculpture out of clay', 'Recording a dance routine on camera'],
    answer: 'Transferring an image from a prepared surface',
    explanation: 'In printmaking, an image is inked and transferred from a plate, block, or stencil.',
  },
  {
    prompt: 'Collage is an art technique where you...',
    options: ['Stick cut or torn materials onto a surface', 'Carve directly into a block of wood', 'Paint with water on a sheet of paper', 'Trace each line with a ruler'],
    answer: 'Stick cut or torn materials onto a surface',
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
    options: ['The areas of an object and the empty space around it', 'Warm and cool colours in a picture only', 'Loud and soft sounds in music only', 'Fast and slow movement in dance only'],
    answer: 'The areas of an object and the empty space around it',
    explanation: 'Positive space is the subject; negative space is around it.',
  },
  {
    prompt: 'Process notes are useful because they...',
    options: ['They show planning, testing and improvements', 'They take the place of the practical work', 'They are only meant as decoration', 'They leave out any decisions that were made'],
    answer: 'They show planning, testing and improvements',
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
