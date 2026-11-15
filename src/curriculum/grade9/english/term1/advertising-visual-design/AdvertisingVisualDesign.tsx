import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/english/WritingPictures';
import { AIDA, aidaInitials } from '../../../../../components/diagrams/english/writing';

// The AIDA stages and their order come from AIDA (writing.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'AIDA: how an advert persuades',
    content: slide(
      <>
        <Rule>{aidaInitials()} stands for Attention, Interest, Desire, Action. Advertisements move the reader through these four steps.</Rule>
        <StepFlow
          steps={AIDA.map((s) => ({ label: s.word, color: s.color, sub: s.letter }))}
          aria="Four boxes in a row: Attention, Interest, Desire, Action, labelled A, I, D, A."
        />
        <Worked
          title="Invented poster for “Sunny” juice"
          steps={[
            <>Attention: a bold orange splash across the poster.</>,
            <>Interest: “Made with real naartjies.”</>,
            <>Desire: “Taste the sunshine.”</>,
            <>Action: “Buy two for R20 this Saturday.”</>,
          ]}
        />
        <Mistake>Thinking the Action stage only describes the product. Action motivates the reader to buy or respond.</Mistake>
      </>,
    ),
  },
  {
    title: 'Emotive language and tone',
    content: slide(
      <>
        <Rule>Emotive language creates an emotional connection with viewers. Tone is the attitude the advert sets, such as friendly, urgent, formal or playful, and it shapes whether readers engage.</Rule>
        <Worked
          title="Compare two versions"
          steps={[
            <>Neutral and factual: “Juice. 500 ml.”</>,
            <>Emotive: “Feel the sunshine in every sip!”</>,
            <>The second version stirs feeling, and its tone is playful and friendly.</>,
          ]}
        />
        <Mistake>
          Thinking emotive language only gives facts, or that tone is just volume. Tone is an attitude, and it works in print too.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Visual choices match the audience',
    content: slide(
      <>
        <Rule>Colours, images, fonts and layout work with the words. The target audience decides which choices work best.</Rule>
        <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <div className="rounded-xl p-3" style={{ background: '#fde047' }}>
            <p className="font-extrabold text-slate-900">Teenagers</p>
            <p className="text-sm font-semibold text-slate-800">Bright colours, informal language, relatable imagery.</p>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#1e293b' }}>
            <p className="font-extrabold text-amber-200">Luxury goods</p>
            <p className="text-sm font-semibold text-slate-100">Elegant design, high-quality imagery, sophisticated colours.</p>
          </div>
        </div>
        <Worked
          title="Why would a watch advert use dark colours and one large photograph?"
          steps={[
            <>The product is luxury, so the image must look expensive.</>,
            <>Dark, sophisticated colours and a quality photograph suit that image.</>,
          ]}
        />
        <Mistake>Using cartoons and bright primary colours for a luxury product. The design must match the product image and the target market.</Mistake>
      </>,
    ),
  },
  {
    title: 'Analyse: technique and effect',
    content: slide(
      <>
        <Rule>Analysis names a specific technique and explains its effect on the reader. Describing what is on the page is not analysis.</Rule>
        <Worked
          title="“The ad uses a famous celebrity to make the product seem desirable.”"
          steps={[
            <>Technique: a famous celebrity features in the advert.</>,
            <>Effect: the product seems desirable, so it works on the Desire stage of AIDA.</>,
            <>That links technique to effect, so it is analysis.</>,
          ]}
        />
        <Mistake>Writing “The ad has a picture of the product.” This only describes. Say what the picture does to the reader.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What does AIDA stand for?" answer="Attention, Interest, Desire, Action." />
        <Check question="What does emotive language aim to do?" answer="Create an emotional connection with viewers." />
        <Check question="Which choices suit an advert aimed at teenagers?" answer="Bright colours, informal language and relatable imagery." />
        <Check question="Which statement shows analysis of a persuasive technique?" answer="One that names the technique and its effect, such as: the ad uses a famous celebrity to make the product seem desirable." />
      </>,
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
    options: ['bright colours, informal language, and relatable imagery', 'formal vocabulary and long technical terms', 'muted colours and dense paragraphs of text', 'legal wording and a serious, official tone'],
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
    options: ['elegant design, high-quality imagery, and sophisticated colours', 'cartoon drawings and bright primary colours throughout', 'plain text in a crowded and busy layout', 'a cheap-looking design with low-quality photographs'],
    answer: 'elegant design, high-quality imagery, and sophisticated colours',
    explanation: 'Visual design must match the product image and appeal to the target market.',
  },
  {
    prompt: 'How does tone affect a reader\'s response to an advertisement?',
    options: ['Tone sets an attitude that shapes whether readers engage.', 'Tone only affects the headline and not the reader.', 'Tone matters in videos, where it means volume.', 'Tone matters less than the size of the print.'],
    answer: 'Tone sets an attitude that shapes whether readers engage.',
    explanation: 'Tone shapes how a message is received and whether it resonates with the audience.',
  },
  {
    prompt: 'Which statement shows analysis of persuasive technique?',
    options: ['The ad uses a famous celebrity to make the product seem desirable.', 'The ad has a picture of the product printed in it, on glossy paper.', 'The ad is written in English for local readers to read.', 'The ad is printed in a magazine that many people buy.'],
    answer: 'The ad uses a famous celebrity to make the product seem desirable.',
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
