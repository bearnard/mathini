import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Research artists and create informed artwork',
    image: {
      src: '/curriculum/grade9/creative-arts/term2/visual-arts/image1.jpg',
      alt: 'Grade 9 learners researching South African artists and developing planned artworks',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual Arts in Grade 9 Term 2 focuses on design process and research. You investigate South African and global artists, explore print or craft techniques through experimentation, and produce a planned artwork informed by your research. Use visual analysis to support your choices.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'The design process in art begins with...',
    options: ['Research, observation, and planning before making', 'Starting to draw immediately', 'Copying other artworks', 'Not planning at all'],
    answer: 'Research, observation, and planning before making',
    explanation: 'Good design planning leads to stronger, more intentional artwork.',
  },
  {
    prompt: 'Visual analysis of an artwork involves...',
    options: ['Describing what you see and explaining how it affects the viewer', 'Just guessing the meaning', 'Ignoring details', 'Only looking at colours'],
    answer: 'Describing what you see and explaining how it affects the viewer',
    explanation: 'Analysis connects visual elements to meaning and intent.',
  },
  {
    prompt: 'A print technique such as linocut or relief printing involves...',
    options: ['Carving or removing material to create an image that can be repeated', 'Painting only once', 'Drawing on paper only', 'No repetition possible'],
    answer: 'Carving or removing material to create an image that can be repeated',
    explanation: 'Print techniques allow multiple copies with consistent results.',
  },
  {
    prompt: 'South African artists often explore themes like...',
    options: ['Identity, history, community, and social issues', 'Only flowers', 'Abstract symbols only', 'Landscapes always'],
    answer: 'Identity, history, community, and social issues',
    explanation: 'SA art reflects rich cultural and political contexts.',
  },
  {
    prompt: 'Experimentation in art means...',
    options: ['Trying different materials and techniques to discover what works', 'Doing the same thing always', 'Being afraid to make mistakes', 'Following rules only'],
    answer: 'Trying different materials and techniques to discover what works',
    explanation: 'Experimentation builds skill and personal artistic voice.',
  },
  {
    prompt: 'A craft technique might include...',
    options: ['Weaving, ceramics, metalwork, or batik', 'Only painting', 'Writing only', 'Reading only'],
    answer: 'Weaving, ceramics, metalwork, or batik',
    explanation: 'Craft combines skill, tradition, and creative expression.',
  },
  {
    prompt: 'An artist\'s research notes should include...',
    options: ['Observations, references, colour studies, and ideas for your work', 'Nothing written', 'Only copied images', 'Just the final answer'],
    answer: 'Observations, references, colour studies, and ideas for your work',
    explanation: 'Good notes show your process and thinking.',
  },
  {
    prompt: 'When creating artwork based on research, you should...',
    options: ['Integrate your findings into an original work', 'Copy exactly from sources', 'Ignore what you learned', 'Forget to cite sources'],
    answer: 'Integrate your findings into an original work',
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
