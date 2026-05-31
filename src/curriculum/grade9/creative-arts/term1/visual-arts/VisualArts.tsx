import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Master perspective, proportion, and advanced drawing techniques',
    image: {
      src: '/curriculum/grade9/creative-arts/term1/visual-arts/image1.jpg',
      alt: 'Grade 9 learners applying perspective and proportion in advanced observational drawing',
    },
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
    options: ['The relationship of sizes between different parts', 'How dark the pencil is', 'The paper size used', 'The artist\'s name'],
    answer: 'The relationship of sizes between different parts',
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
    options: ['Buildings and street scenes viewed at an angle', 'Objects straight ahead', 'Flat patterns only', 'Portraits exclusively'],
    answer: 'Buildings and street scenes viewed at an angle',
    explanation: 'Two-point perspective shows corner views of buildings and scenes effectively.',
  },
  {
    prompt: 'Value in art means...',
    options: ['The lightness or darkness of a tone', 'The cost of materials', 'The age of the artwork', 'The artist\'s worth'],
    answer: 'The lightness or darkness of a tone',
    explanation: 'Value range from light to dark creates volume and visual interest in drawings.',
  },
  {
    prompt: 'A grid method helps artists to...',
    options: ['Scale and transfer designs accurately', 'Erase mistakes quickly', 'Buy expensive paper', 'Learn to paint faster'],
    answer: 'Scale and transfer designs accurately',
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
    options: ['Making distant objects less distinct and hazier', 'Drawing them larger', 'Using thick outlines', 'Adding bright colours'],
    answer: 'Making distant objects less distinct and hazier',
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
