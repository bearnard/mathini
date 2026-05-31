import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Identify persuasive techniques in advertisements',
    image: {
      src: '/curriculum/grade9/english/term1/advertising-visual-design/image1.jpg',
      alt: 'learner analysing advertisement posters for AIDA, tone, and visual techniques',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Advertisements use AIDA (Attention, Interest, Desire, Action) to persuade. Look for emotive language, 
          colour choices, and design that work together to attract and influence a target audience.
        </p>
      </div>
    ),
  },
  {
    title: 'Analyse tone and visual elements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Tone (the attitude conveyed) shifts between friendly, urgent, formal or playful. Visual elements like 
          images, font sizes, and layout reinforce the message and appeal to specific audiences.
        </p>
      </div>
    ),
  },
  {
    title: 'Match advertising strategies to audience',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong advertising analysis connects design choices to audience needs and values. Understanding the 
          target audience helps explain why certain colours, words, and images are selected.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does AIDA stand for in advertising?',
    options: ['Attention, Interest, Desire, Action', 'All, Inform, Design, Announce', 'Adverts, Image, Details, Appeal', 'Allow, Increase, Decide, Ask'],
    answer: 'Attention, Interest, Desire, Action',
    explanation: 'AIDA is a key framework for understanding how advertisements persuade audiences.',
  },
  {
    prompt: 'Which element is most important for grabbing a reader\'s attention in a poster?',
    options: ['a striking image or bold colour', 'a long paragraph of explanation', 'a list of prices', 'a formal letter'],
    answer: 'a striking image or bold colour',
    explanation: 'Attention-grabbing visuals are the first step in the AIDA process.',
  },
  {
    prompt: 'Emotive language in advertising aims to...',
    options: ['create an emotional connection with viewers', 'provide only factual information', 'list all product features neutrally', 'use complicated technical terms'],
    answer: 'create an emotional connection with viewers',
    explanation: 'Emotive language triggers feelings and makes the product or service more appealing.',
  },
  {
    prompt: 'An advertisement targeting teenagers would most likely use...',
    options: ['bright colours, informal language, and relatable imagery', 'only formal terminology', 'black and white images only', 'complex legal jargon'],
    answer: 'bright colours, informal language, and relatable imagery',
    explanation: 'Visual and verbal choices match the interests and communication style of the target audience.',
  },
  {
    prompt: 'What is the purpose of the "Action" stage in AIDA?',
    options: ['to motivate the reader to buy or respond', 'to describe the product only', 'to confuse the reader', 'to end the advertisement abruptly'],
    answer: 'to motivate the reader to buy or respond',
    explanation: 'Action is the final goal—convincing the audience to take a specific step.',
  },
  {
    prompt: 'Which visual choice would make a poster about luxury goods more appealing?',
    options: ['elegant design, high-quality imagery, and sophisticated colours', 'cartoon drawings and bright primary colours', 'plain text only', 'small, hard-to-read fonts'],
    answer: 'elegant design, high-quality imagery, and sophisticated colours',
    explanation: 'Visual design must match the product image and appeal to the target market.',
  },
  {
    prompt: 'How does tone affect a reader\'s response to an advertisement?',
    options: ['Tone creates an attitude or feeling that influences whether readers engage.', 'Tone has no effect on reader response.', 'Tone only refers to volume in videos.', 'Tone replaces the need for visuals.'],
    answer: 'Tone creates an attitude or feeling that influences whether readers engage.',
    explanation: 'Tone shapes how a message is received and whether it resonates with the audience.',
  },
  {
    prompt: 'Which statement shows analysis of persuasive technique?',
    options: ['The ad uses bright colours and a famous celebrity to make the product seem desirable.', 'The ad has a picture in it.', 'The ad is printed on paper.', 'The ad uses English words.'],
    answer: 'The ad uses bright colours and a famous celebrity to make the product seem desirable.',
    explanation: 'Effective analysis connects specific techniques to their persuasive effect.',
  },
];

const AdvertisingVisualDesign = () => (
  <CapsSubjectTopic
    title="Advertising and Visual Design"
    subtitle="AIDA, emotive language, tone, target audience and persuasive techniques"
    learnSteps={learnSteps}
    task="gr9-advertising-visual-design-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default AdvertisingVisualDesign;
