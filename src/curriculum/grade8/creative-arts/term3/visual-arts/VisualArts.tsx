import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret symbolism and create mixed-media responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Visual Arts explores South African and African artworks, symbolism, and visual literacy. Learners
          analyse meaning in artworks and create themed mixed-media pieces with informed choices.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Symbolism in art means...',
    options: ['Using images to stand for deeper ideas', 'Copying photographs exactly as they are', 'Mixing paint colours and nothing else', 'Leaving out all subject matter'],
    answer: 'Using images to stand for deeper ideas',
    explanation: 'Symbols carry meaning beyond their literal appearance.',
  },
  {
    prompt: 'Visual literacy is the ability to...',
    options: ['Read and interpret visual messages', 'Sing in harmony with other learners', 'Plan the stage blocking of a scene', 'Write reports about science experiments'],
    answer: 'Read and interpret visual messages',
    explanation: 'Visual literacy helps learners explain what artworks communicate.',
  },
  {
    prompt: 'Mixed media artwork uses...',
    options: ['More than one material or technique', 'Graphite pencil and nothing else', 'One colour and nothing else', 'Digital text and nothing else'],
    answer: 'More than one material or technique',
    explanation: 'Mixed media combines materials like paint, paper, and found textures.',
  },
  {
    prompt: 'When analysing an artwork, context includes...',
    options: ['Where and when it was made', 'Only the frame price', 'Only the artist signature size', 'Only classroom marks'],
    answer: 'Where and when it was made',
    explanation: 'Historical and cultural context support deeper interpretation.',
  },
  {
    prompt: 'A strong themed artwork should...',
    options: ['Link visual choices to a clear idea', 'Use random images with no purpose', 'Avoid any planning', 'Ignore audience interpretation'],
    answer: 'Link visual choices to a clear idea',
    explanation: 'Theme is communicated through intentional symbols, colour, and composition.',
  },
  {
    prompt: 'Combining rough paper with smooth paint can create...',
    options: ['Texture contrast', 'Pitch contrast', 'Tempo contrast', 'Dialogue contrast'],
    answer: 'Texture contrast',
    explanation: 'Different surfaces produce visible and tactile contrast.',
  },
  {
    prompt: 'Artist research is useful because it helps learners...',
    options: ['Understand style, techniques and meaning', 'Avoid looking at any real artworks', 'Take the place of the practical tasks', 'Skip the visual analysis of a work'],
    answer: 'Understand style, techniques and meaning',
    explanation: 'Research strengthens interpretation and creative decision-making.',
  },
  {
    prompt: 'If repeated symbols appear in a work, a good visual-literacy question is...',
    options: ['What idea do these symbols suggest?', 'How many rulers were used?', 'What is the classroom noise level?', 'What snack did the artist eat?'],
    answer: 'What idea do these symbols suggest?',
    explanation: 'Repeated symbols often point to key themes and messages.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="South African and African art, symbolism, mixed media, and visual literacy"
    learnSteps={learnSteps}
    task="gr8-visual-arts-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
