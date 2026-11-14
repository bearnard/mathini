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
    options: ['Personal, cultural or social parts of who we are', 'The physical looks of a person and nothing else', 'Subjects that carry no personal meaning', 'Subjects chosen without any thought or link'],
    answer: 'Personal, cultural or social parts of who we are',
    explanation: 'Identity-based art connects to lived experience and meaning-making.',
  },
  {
    prompt: 'Environment as a theme involves...',
    options: ['Natural or city settings, climate change or ecology', 'Landscape scenes with no other meaning', 'Subjects that have no link to social issues', 'Subjects that ignore the setting of the work'],
    answer: 'Natural or city settings, climate change or ecology',
    explanation: 'Environmental art raises awareness and connects to sustainability.',
  },
  {
    prompt: 'Mixed media art means...',
    options: ['Combining several materials or techniques in one artwork', 'Using only one medium in the artwork', 'Staying with methods that are not experimental', 'Keeping to a single material, with no variety'],
    answer: 'Combining several materials or techniques in one artwork',
    explanation: 'Mixed media allows rich expression and creative problem-solving.',
  },
  {
    prompt: 'Symbolism in art refers to...',
    options: ['Using images or colours to stand for ideas or feelings', 'Showing things exactly as they look and no more', 'Artwork that has no deeper meaning', 'Artwork that is only meant to decorate a wall'],
    answer: 'Using images or colours to stand for ideas or feelings',
    explanation: 'Symbols communicate complex meanings beyond realistic depiction.',
  },
  {
    prompt: 'An artist statement explains...',
    options: ["The artist's aim, inspiration and meaning in the work", 'Nothing that a viewer needs to know about the piece', 'The title of the work and nothing else about it', 'Why no explanation is needed for the work'],
    answer: "The artist's aim, inspiration and meaning in the work",
    explanation: 'Artist statements provide insight into creative process and vision.',
  },
  {
    prompt: 'Critique in art involves...',
    options: ["Analysing and discussing a work's strengths and impact", 'Giving praise or rejection and nothing else', 'Looking at the work without any discussion', 'Ignoring the work and talking about the artist'],
    answer: "Analysing and discussing a work's strengths and impact",
    explanation: 'Constructive critique supports growth and deeper understanding.',
  },
  {
    prompt: 'When planning a themed artwork, you should...',
    options: ['Research, develop ideas, choose materials and sketch', 'Start work at once, without any research', 'Skip planning, as ideas come while making', 'Copy an existing artwork and change the colours'],
    answer: 'Research, develop ideas, choose materials and sketch',
    explanation: 'Strategic planning strengthens final artwork quality and impact.',
  },
  {
    prompt: 'Composition in your themed work should...',
    options: ['Back your theme by placing elements with a purpose', 'Be a scatter of marks with no pattern in it', 'Have no purpose beyond looking attractive', 'Simply fill the space on the page or canvas'],
    answer: 'Back your theme by placing elements with a purpose',
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
