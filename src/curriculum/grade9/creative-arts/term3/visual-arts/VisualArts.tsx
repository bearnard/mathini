import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create themed artwork exploring identity and environment',
    image: {
      src: '/curriculum/grade9/creative-arts/term3/visual-arts/image1.jpg',
      alt: 'Grade 9 learners creating mixed media artwork exploring identity and symbolism',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual Arts in Grade 9 Term 3 focuses on personal expression. You explore identity and environment as themes, experiment with mixed media, use symbolism deliberately, and develop critical thinking. Produce a themed artwork and discuss your media choices, symbols, and compositional decisions through artist statements and critique.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Identity themes in art might explore...',
    options: ['Personal, cultural, or social aspects that define who we are', 'Only physical appearance', 'No personal meaning', 'Random subjects'],
    answer: 'Personal, cultural, or social aspects that define who we are',
    explanation: 'Identity-based art connects to lived experience and meaning-making.',
  },
  {
    prompt: 'Environment as a theme involves...',
    options: ['Natural or urban settings, climate change, or ecological relationships', 'Only landscapes', 'No social issues', 'Ignoring context'],
    answer: 'Natural or urban settings, climate change, or ecological relationships',
    explanation: 'Environmental art raises awareness and connects to sustainability.',
  },
  {
    prompt: 'Mixed media art means...',
    options: ['Combining multiple materials or techniques in one artwork', 'Only one medium', 'Nothing experimental', 'No variety'],
    answer: 'Combining multiple materials or techniques in one artwork',
    explanation: 'Mixed media allows rich expression and creative problem-solving.',
  },
  {
    prompt: 'Symbolism in art refers to...',
    options: ['Using images or colours to represent ideas or emotions', 'Only literal representation', 'No deeper meaning', 'Decorative only'],
    answer: 'Using images or colours to represent ideas or emotions',
    explanation: 'Symbols communicate complex meanings beyond realistic depiction.',
  },
  {
    prompt: 'An artist statement explains...',
    options: ['The artist\'s intent, choices, inspiration, and meaning in the work', 'Nothing necessary', 'Only the title', 'No explanation needed'],
    answer: 'The artist\'s intent, choices, inspiration, and meaning in the work',
    explanation: 'Artist statements provide insight into creative process and vision.',
  },
  {
    prompt: 'Critique in art involves...',
    options: ['Analyzing and discussing a work\'s strengths, challenges, and impact', 'Only praise or rejection', 'No discussion', 'Ignoring the work'],
    answer: 'Analyzing and discussing a work\'s strengths, challenges, and impact',
    explanation: 'Constructive critique supports growth and deeper understanding.',
  },
  {
    prompt: 'When planning a themed artwork, you should...',
    options: ['Research, develop concepts, choose materials, and sketch ideas', 'Start immediately', 'No planning needed', 'Copy existing work'],
    answer: 'Research, develop concepts, choose materials, and sketch ideas',
    explanation: 'Strategic planning strengthens final artwork quality and impact.',
  },
  {
    prompt: 'Composition in your themed work should...',
    options: ['Support your theme through intentional element placement', 'Be random', 'Have no purpose', 'Just fill the space'],
    answer: 'Support your theme through intentional element placement',
    explanation: 'Thoughtful composition reinforces meaning and visual strength.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Identity and environment themes, mixed media, symbolism, and critique"
    learnSteps={learnSteps}
    task="gr9-visual-arts-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
