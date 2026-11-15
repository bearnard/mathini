import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Which element of art describes how light or dark a colour looks?',
    options: ['Value', 'Rhythm', 'Tempo', 'Pitch'],
    answer: 'Value',
    explanation: 'Value in art means the lightness or darkness of a tone or colour.',
  },
  {
    prompt: 'Observational drawing means you draw from...',
    options: ['A real object you can see', 'Only imagination', 'A printed test paper', 'A music recording'],
    answer: 'A real object you can see',
    explanation: 'Observation drawing is based on looking carefully at a real subject.',
  },
  {
    prompt: 'Which line type most strongly suggests movement?',
    options: ['Diagonal line', 'Horizontal line', 'Border line only', 'Ruler margin'],
    answer: 'Diagonal line',
    explanation: 'Diagonal lines often create energy and movement in a composition.',
  },
  {
    prompt: 'Texture in a drawing can be shown by...',
    options: ['Using marks like hatching and stippling', 'Rubbing out all of the outlines in the drawing', 'Leaving out all of the detail in the drawing', 'Writing labels on the page beside the drawing'],
    answer: 'Using marks like hatching and stippling',
    explanation: 'Repeated mark-making techniques help create the illusion of texture.',
  },
  {
    prompt: 'A shape in art is usually...',
    options: ['Flat and two-dimensional', 'Always three-dimensional', 'A sound pattern', 'A dance count'],
    answer: 'Flat and two-dimensional',
    explanation: 'Shapes are 2D areas defined by lines, edges, or colour contrast.',
  },
  {
    prompt: 'Which pair is mostly warm colours?',
    options: ['Red and orange', 'Blue and green', 'Purple and blue', 'Black and white'],
    answer: 'Red and orange',
    explanation: 'Warm colours include reds, oranges, and yellows.',
  },
  {
    prompt: 'Balanced composition means...',
    options: ['The elements are arranged so the artwork feels stable', 'All of the objects are exactly the same size', 'Everything is placed in one corner of the page', 'No background is included in the picture'],
    answer: 'The elements are arranged so the artwork feels stable',
    explanation: 'Balance helps a 2D artwork feel ordered and visually effective.',
  },
  {
    prompt: 'In a still-life drawing, objects nearest to the viewer are in the...',
    options: ['Foreground', 'Background', 'Sidebar', 'Footer'],
    answer: 'Foreground',
    explanation: 'Foreground describes the front area of an artwork nearest the viewer.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Elements of art, observation drawing, texture, colour, and 2D composition"
    learnSteps={learnSteps}
    task="gr8-visual-arts-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
