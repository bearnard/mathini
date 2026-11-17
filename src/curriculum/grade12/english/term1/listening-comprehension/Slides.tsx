import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The listening process',
    content: slide(
      <>
        <Rule>Good listening is a process with three phases: before listening, while listening and after listening. Listening is not the same as hearing: it means taking in the meaning and thinking about it.</Rule>
        <KeyTable
          title="The three phases"
          head={['Phase', 'What you do']}
          aria="The three phases of listening. Pre-listening: set the context, predict the content and recall what you already know. During listening: analyse the message and the speaker, make inferences and take notes. Post-listening: ask questions, summarise what the speaker said and evaluate it."
          rows={[
            ['Pre-listening', 'Set the context, predict, recall what you know'],
            ['During listening', 'Analyse the message, make notes, infer'],
            ['Post-listening', 'Ask questions, summarise, evaluate'],
          ]}
        />
        <Worked
          steps={[
            <>Before a talk on water saving, think about what you already know and what the speaker is likely to say.</>,
            <>While listening, note the main points and the speaker&rsquo;s reasons. Afterwards, summarise the talk in a few sentences.</>,
          ]}
        />
        <Mistake>Starting to listen only when the questions are read out. Prepare before and think afterwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Different kinds of listening',
    content: slide(
      <>
        <Rule>CAPS names three kinds of listening: listening for specific information, listening for critical analysis and evaluation, and listening for appreciation and interaction. The listening task in Paper 4 asks you to listen critically for comprehension, information and evaluation.</Rule>
        <KeyTable
          title="Three kinds of listening"
          head={['Kind', 'Example of use']}
          aria="Three kinds of listening. For specific information: following directions or instructions, and finding the main and supporting ideas. For critical analysis and evaluation: judging an advertisement or a speech for bias and emotive language. For appreciation and interaction: taking part in a debate or group discussion and responding to tone and gestures."
          rows={[
            ['Specific information', 'Directions, instructions, main ideas'],
            ['Critical analysis', 'An advert or speech: bias and emotive words'],
            ['Appreciation and interaction', 'Debates and group discussions'],
          ]}
        />
        <Worked
          steps={[
            <>Listening for the time and place of a meeting is listening for specific information.</>,
            <>Deciding whether a political speech is fair or one-sided is listening for critical analysis and evaluation.</>,
            <>In Grade 12 the listening text is about 400 words, or an audio clip of about three minutes. It is read or played at least twice before the questions are answered.</>,
          ]}
        />
        <Mistake>Listening to everything in the same way. Decide first what you need: a detail, a judgement, or a response.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening critically',
    content: slide(
      <>
        <Rule>To listen critically, separate facts from opinions, notice emotive and persuasive language, and judge the speaker&rsquo;s tone, pace and bias. A fact can be checked. An opinion is a judgement.</Rule>
        <KeyTable
          title="Fact, opinion and emotive language"
          head={['Statement', 'What it is']}
          aria="Examples of statements and what they are. The dam is 40 percent full: a fact, because it can be checked. The council has shamefully failed us: an opinion in emotive language. Everyone knows that this is the only fair plan: a bias, because it ignores other views."
          rows={[
            ['The dam is 40% full.', 'A fact: it can be checked'],
            ['The council has shamefully failed us.', 'An opinion in emotive language'],
            ['Everyone knows this is the only fair plan.', 'Bias: other views are ignored'],
          ]}
        />
        <Worked
          steps={[
            <>Emotive words such as &ldquo;shamefully&rdquo; are chosen to make the listener feel angry or afraid, not to give evidence.</>,
            <>A slow, serious tone can make a speaker sound trustworthy. A fast, excited tone can persuade without giving reasons. Ask what evidence supports the message.</>,
          ]}
        />
        <Mistake>Believing a message because it is spoken with confidence. Check the evidence and the reasons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Making notes while you listen',
    content: slide(
      <>
        <Rule>Notes help you to remember the main ideas and the supporting details. Write key words, not full sentences, and use a simple layout such as an outline or a list of headings.</Rule>
        <KeyTable
          title="Note-making methods"
          head={['Method', 'How it works']}
          aria="Note-making methods. Outlining: main points with supporting points beneath. Mapping: the topic in the middle with branches. Categorising: grouping ideas under headings. Summarising: a short account of the whole message in your own words."
          rows={[
            ['Outlining', 'Main points, details beneath'],
            ['Mapping', 'Topic in the middle, branches'],
            ['Categorising', 'Ideas grouped under headings'],
            ['Summarising', 'The message in a few words'],
          ]}
        />
        <Worked
          steps={[
            <>A speaker says: &ldquo;We should save water because dams are low, a drought is likely, and cities are growing.&rdquo; Note: <strong>Save water: dams low, drought, growth</strong>.</>,
            <>After the talk, use the notes to answer questions and to write a short summary.</>,
          ]}
        />
        <Mistake>Trying to write down every word. You will miss the next point. Write key words only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the three phases of the listening process.</>,
          <>Is &ldquo;The dam is 40% full&rdquo; a fact or an opinion?</>,
          <>Why do speakers use emotive language?</>,
          <>Why write key words and not full sentences when you take notes?</>,
        ]}
        answers={[
          <>Pre-listening, during listening and post-listening.</>,
          <>A fact, because it can be checked.</>,
          <>To make the listener feel something, such as anger or fear, so that the message persuades.</>,
          <>It is faster, so that you do not miss the next point.</>,
        ]}
      />,
    ),
  },
];
