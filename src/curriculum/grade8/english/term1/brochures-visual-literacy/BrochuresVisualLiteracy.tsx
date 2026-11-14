import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Read brochure layout with purpose in mind',
    image: {
      src: '/curriculum/grade8/eng/term1/brochures-visual-literacy/diagram.webp',
      alt: 'learner analysing brochure panels and visual clues for audience and purpose',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Brochures combine short text, headings, and visuals to inform or persuade. Always ask who the brochure is
          for and what action it wants the reader to take.
        </p>
      </div>
    ),
  },
  {
    title: 'Use skimming, scanning and inference',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Skim to get the main idea, scan for details like times or prices, and infer meaning from image choices,
          colour, and word emphasis.
        </p>
      </div>
    ),
  },
  {
    title: 'Match audience, message and design',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong brochure analysis links layout decisions to audience needs. A clear structure and relevant visuals
          help the message land quickly.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of most brochures?',
    options: ['to inform or persuade a target audience', 'to present a full novel chapter', 'to record private diary thoughts', 'to list random dictionary entries'],
    answer: 'to inform or persuade a target audience',
    explanation: 'Brochures are designed to share focused information and often encourage a response.',
  },
  {
    prompt: 'Which feature helps readers find key points quickly in a brochure?',
    options: ['headings and subheadings', 'long unbroken paragraphs only', 'no visual elements', 'a single sentence repeated'],
    answer: 'headings and subheadings',
    explanation: 'Headings organise information and guide readers to important sections.',
  },
  {
    prompt: 'Skimming is best used to...',
    options: ['get the gist fast', 'check every punctuation mark first', 'memorise the brochure word for word', 'avoid reading visuals'],
    answer: 'get the gist fast',
    explanation: 'Skimming gives the overall meaning before deeper reading.',
  },
  {
    prompt: 'Scanning is most useful when you need to...',
    options: ['locate a specific detail', 'interpret the entire tone deeply', 'rewrite the brochure completely', 'evaluate rhyme scheme'],
    answer: 'locate a specific detail',
    explanation: 'Scanning is a quick search strategy for exact information.',
  },
  {
    prompt: 'A brochure aimed at new parents should mainly use...',
    options: ['clear practical language', 'complex academic jargon', 'unrelated slang expressions', 'poetic metaphors only'],
    answer: 'clear practical language',
    explanation: 'Language should match the audience and help them understand key information.',
  },
  {
    prompt: 'If an image shows happy learners using a library, what is the most likely effect?',
    options: ['It supports a positive message about reading.', 'It proves the brochure is fictional only.', 'It removes the need for headings.', 'It changes the text into a script.'],
    answer: 'It supports a positive message about reading.',
    explanation: 'Visuals reinforce ideas and influence reader response.',
  },
  {
    prompt: 'Which statement is an inference?',
    options: ['The brochure probably targets tourists, as it stresses local sights.', 'The brochure has three paragraphs of text in it.', 'The title is printed at the top of the first page.', 'The page includes two photos of the local area.'],
    answer: 'The brochure probably targets tourists, as it stresses local sights.',
    explanation: 'Inference uses clues to reach a reasonable conclusion.',
  },
  {
    prompt: 'Why is white space important in brochure design?',
    options: ['It improves readability and layout balance.', 'It adds more grammar errors to the text.', 'It hides the key details from the reader.', 'It takes the place of audience analysis.'],
    answer: 'It improves readability and layout balance.',
    explanation: 'White space keeps information uncluttered and easier to process.',
  },
];

const BrochuresVisualLiteracy = () => (
  <CapsSubjectTopic
    title="Brochures and Visual Literacy"
    subtitle="Audience, purpose, layout and inference in brochure texts"
    learnSteps={learnSteps}
    task="gr8-brochures-visual-literacy-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default BrochuresVisualLiteracy;
