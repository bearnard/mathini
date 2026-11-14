import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Master perspective, proportion, and advanced drawing techniques',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual Arts in Grade 9 Term 1 deepens your drawing skills. You explore one-point and two-point perspective, accurate proportion, advanced shading techniques, and planning 2D or 3D artwork with stronger composition and visual depth.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which perspective technique shows parallel lines meeting at a single point?',
    options: ['One-point perspective', 'Two-point perspective', 'Isometric perspective', 'Aerial perspective'],
    answer: 'One-point perspective',
    explanation: 'One-point perspective has all receding lines meeting at a single vanishing point.',
  },
  {
    prompt: 'Proportion in drawing refers to...',
    options: ['How the sizes of the parts relate to each other', 'How dark the pencil is that the artist uses', 'The size of the paper on which the work is drawn', 'The name that the artist signs on the work'],
    answer: 'How the sizes of the parts relate to each other',
    explanation: 'Accurate proportion ensures body parts, objects, or architectural elements relate correctly in size.',
  },
  {
    prompt: 'Which shading technique uses parallel lines placed close together?',
    options: ['Hatching', 'Blending', 'Stippling', 'Crosshatching'],
    answer: 'Hatching',
    explanation: 'Hatching creates tone and texture using repeated parallel lines.',
  },
  {
    prompt: 'Two-point perspective is often used for drawing...',
    options: ['Buildings and street scenes seen from a corner', 'Objects that face straight ahead of the viewer', 'Flat patterns that have no depth in them', 'Portraits of faces seen from the front only'],
    answer: 'Buildings and street scenes seen from a corner',
    explanation: 'Two-point perspective shows corner views of buildings and scenes effectively.',
  },
  {
    prompt: 'Value in art means...',
    options: ['How light or dark a tone is', 'How much the materials cost to buy', 'How old the work of art is', "How much the artist's work is worth"],
    answer: 'How light or dark a tone is',
    explanation: 'Value range from light to dark creates volume and visual interest in drawings.',
  },
  {
    prompt: 'A grid method helps artists to...',
    options: ['Enlarge and copy a design accurately', 'Rub out mistakes more quickly', 'Choose the best paper to buy', 'Paint a picture in less time'],
    answer: 'Enlarge and copy a design accurately',
    explanation: 'Grid drawing translates reference images to larger or smaller artworks with correct proportions.',
  },
  {
    prompt: 'Which principle helps balance visual weight in a composition?',
    options: ['Symmetry or asymmetry', 'Using only one colour', 'Avoiding the centre', 'Copying another work'],
    answer: 'Symmetry or asymmetry',
    explanation: 'Both symmetrical and asymmetrical balance create visual harmony in artwork.',
  },
  {
    prompt: 'Atmospheric perspective creates depth by...',
    options: ['Making distant objects fainter and hazier', 'Drawing distant objects larger than near ones', 'Using thick dark outlines for far objects', 'Adding bright colours to the far objects'],
    answer: 'Making distant objects fainter and hazier',
    explanation: 'Objects farther away appear hazier, smaller, and less detailed due to atmospheric conditions.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Advanced drawing, perspective, proportion, shading, and 2D/3D planning"
    learnSteps={learnSteps}
    task="gr9-visual-arts-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
