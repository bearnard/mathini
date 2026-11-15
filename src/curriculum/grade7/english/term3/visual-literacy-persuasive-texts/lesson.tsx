import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps, PosterLayout } from '../../../../../components/diagrams/english/lessonPictures';
import { AIDA } from '../../../../../components/diagrams/english/lessonHelpers';

// Invented adverts used in the slides (not real brands). Tests check the answers against these.
export const advert = 'Plant a tree today. Give your school a greener tomorrow!';
export const hook = 'Act now and protect your future!';
export const slogan = 'Sort it. Save it. Recycle it.';

export const audienceClues = [
  { title: 'Clues', note: 'Bright colours, big sports shoes' },
  { title: 'Audience', note: 'Young people who like sport' },
  { title: 'Purpose', note: 'Make them want to buy the shoes' },
];

export const aidaSteps = AIDA.map((a) => ({ title: `${a.letter}: ${a.word}`, note: a.note }));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Persuasive language: influence the audience',
    content: slide(
      <>
        <Rule>Advertisements and posters use persuasive language. Its purpose is to influence the audience to think or act in a certain way.</Rule>
        <Worked
          title={`Read the advert: “${advert}”`}
          steps={[
            <>Purpose: it wants readers to take part in planting trees.</>,
            <>Technique 1: a command, “Plant a tree today”, which tells the reader what to do.</>,
            <>Technique 2: a hopeful picture of the future, “a greener tomorrow”, which makes the action feel worthwhile.</>,
          ]}
        />
        <Mistake>Treating an advert as a list of neutral facts. Every word in a persuasive text is chosen to move the reader toward a response.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience and purpose',
    content: slide(
      <>
        <Rule>The target audience is the specific group a text is aimed at. The purpose is what the text wants that group to do. Ask: “Who is this text for, and what does it want them to do?”</Rule>
        <FlowSteps steps={audienceClues} aria="Three boxes from top to bottom: Clues, bright colours and a big picture of sports shoes; Audience, young people who like sport; Purpose, make them want to buy the shoes." />
        <Worked
          title="A poster has bright colours and a large image of sports shoes"
          steps={[
            <>Collect the clues: bright colours and sports shoes.</>,
            <>Decide who they attract: <strong>young people who are interested in sport</strong>.</>,
            <>State the purpose: to make that group want to buy the shoes.</>,
          ]}
        />
        <Mistake>Answering “everyone” or naming the person marking the work. A target audience is a specific group, and the clues in the text point to it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Layout guides the eye',
    content: slide(
      <>
        <Rule>Layout is how the parts of a poster are arranged. Good layout guides the viewer’s eye to the key information quickly and clearly.</Rule>
        <PosterLayout />
        <Worked
          title="Read the poster in order"
          steps={[
            <>1: the hook has the biggest words, so the eye lands there first.</>,
            <>2 and 3: the image catches attention and the slogan is easy to remember.</>,
            <>4: the call to action tells the viewer what to do next.</>,
          ]}
        />
        <Mistake>Giving every part the same size and colour, so nothing stands out. The viewer then does not know where to look first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hooks, slogans and AIDA',
    content: slide(
      <>
        <Rule>A hook grabs attention at once. A slogan is a short, catchy phrase that is easy to remember. AIDA is a plan for persuasion: Attention, Interest, Desire, Action.</Rule>
        <FlowSteps steps={aidaSteps} aria="Four boxes from top to bottom: A, Attention, a hook that grabs the eye; I, Interest, facts that keep you reading; D, Desire, makes you want it; A, Action, tells you what to do now." />
        <Worked
          title={`Is “${hook}” a hook?`}
          steps={[
            <>It is direct and urges immediate action, so it grabs attention: the first A in AIDA.</>,
            <>A slogan for a recycling campaign could be “{slogan}” It is short and has a rhythm.</>,
          ]}
        />
        <Mistake>Calling a long paragraph a slogan. “The file is on page 12” is not a hook or a slogan either: it states a plain fact and does not urge anyone to act.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why does a cereal advert say “Join thousands of happy families”?</>,
          <>What does the first A in AIDA stand for?</>,
          <>How does a clear layout help someone who reads a poster?</>,
          <>Which question should you ask before designing a flyer?</>,
        ]}
        answers={[
          <>To influence the audience to think or act (here, to buy).</>,
          <>Attention.</>,
          <>It guides the viewer’s eye to the key information.</>,
          <>“Who is this text for, and what does it want them to do?”</>,
        ]}
      />,
    ),
  },
];

