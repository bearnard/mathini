import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'The design process in art begins with...',
    options: ['Research, observation and planning before making', 'Starting to draw at once without any thought', 'Copying the work of other artists exactly', 'Making the work without any planning at all'],
    answer: 'Research, observation and planning before making',
    explanation: 'Good design planning leads to stronger, more intentional artwork.',
  },
  {
    prompt: 'Visual analysis of an artwork involves...',
    options: ['Describing what you see and how it affects the viewer', 'Guessing the meaning without looking closely', 'Skipping the details of the work', 'Looking only at the colours used in the work'],
    answer: 'Describing what you see and how it affects the viewer',
    explanation: 'Analysis connects visual elements to meaning and intent.',
  },
  {
    prompt: 'A print technique such as linocut or relief printing involves...',
    options: ['Carving or cutting away material to make a repeatable image', 'Painting a picture that can be made only once', 'Drawing on paper with a pencil only', 'Making an image that cannot be repeated'],
    answer: 'Carving or cutting away material to make a repeatable image',
    explanation: 'Print techniques allow multiple copies with consistent results.',
  },
  {
    prompt: 'South African artists often explore themes like...',
    options: ['Identity, history, community and social issues', 'Flowers and plants that grow in gardens', 'Abstract symbols that carry no meaning', 'Landscapes and nothing else'],
    answer: 'Identity, history, community and social issues',
    explanation: 'SA art reflects rich cultural and political contexts.',
  },
  {
    prompt: 'Experimentation in art means...',
    options: ['Trying out materials and techniques to see what works', 'Doing the same thing each time you make art', 'Fearing to make mistakes in your work', 'Following the set rules and nothing else'],
    answer: 'Trying out materials and techniques to see what works',
    explanation: 'Experimentation builds skill and personal artistic voice.',
  },
  {
    prompt: 'A craft technique might include...',
    options: ['Weaving, ceramics, metalwork or batik', 'Painting with oils on a canvas only', 'Writing a poem or a story only', 'Reading and studying books about art'],
    answer: 'Weaving, ceramics, metalwork or batik',
    explanation: 'Craft combines skill, tradition, and creative expression.',
  },
  {
    prompt: 'An artist\'s research notes should include...',
    options: ['Observations, references, colour studies and ideas', 'Nothing written down, as memory is enough', 'Copied images with no notes to go with them', 'The final answer and no working to show how'],
    answer: 'Observations, references, colour studies and ideas',
    explanation: 'Good notes show your process and thinking.',
  },
  {
    prompt: 'When creating artwork based on research, you should...',
    options: ['Bring your findings together in an original work', 'Copy your sources exactly into your own piece', 'Ignore what you learned from your research', 'Leave out any note of the sources you used'],
    answer: 'Bring your findings together in an original work',
    explanation: 'Your work builds on research but reflects your own creativity.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Design process, research, South African artists, and print or craft techniques"
    learnSteps={learnSteps}
    task="gr9-visual-arts-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
