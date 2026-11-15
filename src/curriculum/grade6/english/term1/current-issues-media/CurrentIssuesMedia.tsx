import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Media texts and the main idea',
    content: slide(
      <>
        <Rule>
          A newspaper article is a written media text: a headline above organised paragraphs. A radio report is a media text you listen to. The main idea tells you what the text is mostly about.
        </Rule>
        <Worked
          title="Find the main idea of an invented news story"
          steps={[
            <>Headline: “Ward 12 opens new park on Saturday”. The headline names the topic.</>,
            <>Paragraph 1 says who, what and when: the ward is opening a park at 10 a.m. on Saturday.</>,
            <>The other paragraphs add details: the swings, the trees and who may use the park.</>,
            <>Main idea: a new park is opening. It is what the whole text is mostly about, not one small detail.</>,
          ]}
        />
        <Mistake>Choosing one detail (such as the swings) as the main idea. A detail is only one part; the main idea covers the whole text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fact or opinion?',
    content: slide(
      <>
        <Rule>A fact can be checked and proved. An opinion is a belief or judgement: words like “best”, “worst” and “beautiful” are clues.</Rule>
        <Worked
          title="Sort two sentences"
          steps={[
            <>“The report says the meeting starts at 3 p.m.” Ask: can I check it? Yes, in the report or the notice. It is a fact.</>,
            <>“The new park is the best place in town.” Ask: can everyone prove it? No, “best” is a judgement. It is an opinion.</>,
            <>Another person might disagree with an opinion, but nobody can disagree about a checked fact.</>,
          ]}
        />
        <Mistake>Thinking that everything printed in a newspaper is a fact. Articles and letters often contain opinions too, so ask: can I prove this?</Mistake>
      </>,
    ),
  },
  {
    title: 'Inference and evidence',
    content: slide(
      <>
        <Rule>An inference is a sensible idea you work out from clues in the text. Evidence is the detail that supports a claim, such as a quoted witness statement and a photo caption.</Rule>
        <Worked
          title="Make an inference"
          steps={[
            <>Read: “Umbrellas filled the taxi rank as dark clouds gathered.”</>,
            <>Spot the clues: umbrellas and dark clouds.</>,
            <>Join the clues: it was probably about to rain. That is the best inference.</>,
            <>Back it up with evidence: a quoted witness statement and a photo caption can prove what the report says.</>,
          ]}
        />
        <Mistake>Treating an inference as a fact, or making one with no clue. An opinion repeated many times is not evidence either.</Mistake>
      </>,
    ),
  },
  {
    title: 'Viewpoints, bias and discussion',
    content: slide(
      <>
        <Rule>
          Every speaker has a viewpoint. Listen critically: notice the tone and check the evidence. If a speaker gives only one side and ignores other facts, think about possible bias. In a discussion, support your opinion with evidence from the text.
        </Rule>
        <Worked
          title="Check a one-sided report"
          steps={[
            <>A speaker praises a plan and mentions only its benefits.</>,
            <>Ask: whose viewpoint is this, and which facts are missing?</>,
            <>Only one side is given and other facts are ignored, so there may be bias.</>,
            <>In class, give your own view with a reason from the text, for example: “The report says … so I think …”.</>,
          ]}
        />
        <Mistake>Giving an answer with no reason, or ignoring what everyone else says. A strong discussion uses reasons and evidence from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which media text is set out in paragraphs under a headline, and which is spoken news from a presenter?</li>
            <li>What does the main idea of a text tell you?</li>
            <li>“The new park is the best place in town.” Fact or opinion? Why?</li>
            <li>A speaker gives only one side of an issue. What should you think about, and how should you discuss it?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A newspaper article is read; a radio report is listened to.</li>
            <li>What the text is mostly about.</li>
            <li>An opinion: “best” is a judgement that cannot be proved.</li>
            <li>Possible bias. Support your opinion with evidence from the text.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which media text would you usually read in paragraphs under a headline?',
    options: ['Newspaper article', 'Radio report', 'Television remote', 'Poetry notebook'],
    answer: 'Newspaper article',
    explanation: 'A newspaper article is a written media text with a headline and organised paragraphs.',
  },
  {
    prompt: 'Which media text do you mainly listen to?',
    options: ['Radio report', 'Wall poster', 'Comic strip', 'Recipe card'],
    answer: 'Radio report',
    explanation: 'A radio report is spoken, so listeners need to pay close attention to the information.',
  },
  {
    prompt: 'Which sentence is a fact?',
    options: [
      'The report says the meeting starts at 3 p.m.',
      'The meeting is the most exciting event ever.',
      'Everyone will definitely love the meeting.',
      'The meeting sounds boring and pointless.',
    ],
    answer: 'The report says the meeting starts at 3 p.m.',
    explanation: 'A fact can be checked. The start time can be confirmed in the report or notice.',
  },
  {
    prompt: 'Which sentence is an opinion?',
    options: [
      'The new park is the best place in town.',
      'The park opened on Saturday morning.',
      'The article names the mayor of the town.',
      'Two swings were added to the park.',
    ],
    answer: 'The new park is the best place in town.',
    explanation: 'Words like “best” show a judgement, not something everyone can prove.',
  },
  {
    prompt: 'A report says, “Umbrellas filled the taxi rank as dark clouds gathered.” What is the best inference?',
    options: [
      'It was probably about to rain.',
      'The sun was shining brightly all day.',
      'Everyone had forgotten their umbrellas at home.',
      'The taxi rank was closed for the week.',
    ],
    answer: 'It was probably about to rain.',
    explanation: 'Umbrellas and dark clouds are clues that help you infer rainy weather.',
  },
  {
    prompt: 'Which choice is evidence that supports a claim in a media text?',
    options: [
      'A quoted witness statement and a photo caption',
      'A random guess with no source',
      'A joke that changes the topic',
      'A repeated opinion with no detail',
    ],
    answer: 'A quoted witness statement and a photo caption',
    explanation: 'Evidence includes details, quotes, and other proof that back up what the text says.',
  },
  {
    prompt: 'The main idea of a media text tells you…',
    options: [
      'what the text is mostly about',
      'how to rewrite every sentence',
      'only the writer’s favourite word',
      'the colour of the paper only',
    ],
    answer: 'what the text is mostly about',
    explanation: 'The main idea is the big message or central point of the text.',
  },
  {
    prompt: 'If a speaker gives only one side of an issue and ignores other facts, what should you think about?',
    options: ['Possible bias', 'The page number', 'The weather forecast', 'Alphabet order'],
    answer: 'Possible bias',
    explanation: 'Bias happens when information is presented in a one-sided way.',
  },
  {
    prompt: 'How can you discuss a current issue well in class?',
    options: [
      'Support your opinion with evidence from the text',
      'Ignore what everyone else says',
      'Choose an answer without any reason',
      'Only repeat the title of the article',
    ],
    answer: 'Support your opinion with evidence from the text',
    explanation: 'Strong discussions use reasons and evidence, not just unsupported opinions.',
  },
];

const CurrentIssuesMedia = () => (
  <CapsSubjectTopic
    title="Current Issues Media Texts"
    subtitle="Reading, listening, and checking viewpoints in the news"
    learnSteps={learnSteps}
    task="current-issues-media"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CurrentIssuesMedia;
