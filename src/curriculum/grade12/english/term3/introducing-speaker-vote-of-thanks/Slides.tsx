import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { DURATIONS, rangeText } from '@/components/diagrams/english/oralHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const time = DURATIONS.find((d) => d.text.startsWith('Introducing'))!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Introducing a speaker: plan and research',
    content: slide(
      <>
        <Rule>When you introduce a speaker, you prepare the audience to listen. Research the speaker, ask what from their CV they would like you to use, give relevant background, and link the introduction to the theme of the address. The task is suggested to last {rangeText(time)}.</Rule>
        <KeyTable
          title="What to include"
          head={['Part', 'Example']}
          aria="What to include when you introduce a speaker. Welcome: formal language that welcomes the audience. Background: the speaker's school career, qualifications and work. Achievements: the highest achievements. Link: why the speaker was invited to speak on this theme. The name: announced at the end and pronounced clearly."
          rows={[
            ['Welcome', 'Formal greeting to the audience'],
            ['Background', 'School career, qualifications, work'],
            ['Achievements', 'Highest achievements'],
            ['Link to the theme', 'Why this speaker was invited'],
            ['The name', 'Said last, clearly and correctly'],
          ]}
        />
        <Worked
          steps={[
            <>Before the function, ask the speaker what to say, check how to pronounce the name, and note two or three relevant achievements.</>,
            <>Hobbies and interests are mentioned only if they suit the occasion.</>,
          ]}
        />
        <Mistake>Telling the speaker&rsquo;s whole life story. The audience came to hear the speaker, so keep the introduction brief.</Mistake>
      </>,
    ),
  },
  {
    title: 'A model introduction',
    content: slide(
      <>
        <Rule>A good introduction is formal, brief and relevant. It does not try to be funny, and it ends by announcing the speaker&rsquo;s name.</Rule>
        <KeyTable
          title="A model introduction, part by part"
          head={['Words', 'Part']}
          aria="A model introduction, part by part. Good afternoon, learners, teachers and guests: the welcome. Our theme today is careers in health: the link to the theme. Our guest trained as a nurse and now manages a local clinic: the background. She has won a provincial award for community care: the achievement. Please welcome Sister Thandi Dlamini: the name, announced last."
          rows={[
            ['Good afternoon, learners, teachers and guests.', 'Welcome'],
            ['Our theme today is careers in health.', 'Link to theme'],
            ['Our guest trained as a nurse and now manages a local clinic.', 'Background'],
            ['She has won a provincial award for community care.', 'Achievement'],
            ['Please welcome Sister Thandi Dlamini.', 'Name, last'],
          ]}
        />
        <Worked
          steps={[
            <>The introduction takes about a minute, which is well within the {rangeText(time)} for the task and leaves the stage to the speaker.</>,
            <>The name comes last, so that the audience is waiting for it, and it is spoken slowly and clearly.</>,
          ]}
        />
        <Mistake>Giving the name at the start and then talking for several minutes. The name comes last.</Mistake>
      </>,
    ),
  },
  {
    title: 'Offering a vote of thanks',
    content: slide(
      <>
        <Rule>A vote of thanks is given after a speaker has spoken. Listen carefully, pick out some highlights, thank the speaker for the strong points, and keep it short and to the point.</Rule>
        <KeyTable
          title="A vote of thanks, part by part"
          head={['Words', 'Part']}
          aria="A vote of thanks, part by part. On behalf of everyone here, I would like to thank Sister Dlamini: the thanks. We learnt that a nurse needs patience as much as knowledge: a highlight from the speech. We had not known how many careers a clinic offers: a point that was new to the audience. Thank you, Sister Dlamini: the close."
          rows={[
            ['On behalf of everyone here, I thank Sister Dlamini.', 'Thanks'],
            ['We learnt that a nurse needs patience as much as knowledge.', 'Highlight'],
            ['We had not known how many careers a clinic offers.', 'New idea'],
            ['Thank you, Sister Dlamini.', 'Close'],
          ]}
        />
        <Worked
          steps={[
            <>Listen during the speech and jot down two or three strong points. A vote of thanks cannot be fully written before the speech.</>,
            <>Keep it short, about a minute, and end with a clear thanks.</>,
          ]}
        />
        <Mistake>Repeating the whole speech. A vote of thanks picks out the highlights and thanks the speaker.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where in the introduction do you announce the speaker&rsquo;s name?</>,
          <>Should you try to be funny when you introduce a speaker?</>,
          <>What should you do while the speaker speaks, if you must give the vote of thanks?</>,
          <>How long is an introduction or a vote of thanks suggested to be?</>,
        ]}
        answers={[
          <>At the end.</>,
          <>No. Use formal language and keep it brief.</>,
          <>Listen carefully and note some highlights.</>,
          <>{rangeText(time)}.</>,
        ]}
      />,
    ),
  },
];
