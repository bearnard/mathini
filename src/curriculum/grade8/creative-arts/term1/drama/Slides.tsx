import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { CHARACTER, STOP_LINE, TABLEAU_LEVELS, VOICE, WINDOW_LINE, markedPause, markedText, scriptStats } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { TableauLevels, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';

// The voice tools, the tableau levels and the marked-up line come from ca8-drama-helpers.ts (tested).
const pause = markedPause(STOP_LINE);
const spoken = markedText(STOP_LINE);
const [loud, soft] = [STOP_LINE[0], STOP_LINE[2]];
const direction = scriptStats([WINDOW_LINE]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Warm up the body and voice',
    content: slide(
      <>
        <Rule>Drama classes begin with warm-ups to prepare the body and voice safely and to sharpen focus. Warm muscles strain less.</Rule>
        <NumberedSteps
          label="A simple warm-up routine"
          heading="A simple warm-up routine"
          tone="teal"
          steps={[
            { lead: 'Stretch', text: ' the neck, shoulders and arms gently.' },
            { lead: 'Breathe', text: ' in slowly, then out on a long "sss".' },
            { lead: 'Voice', text: ' hum, then say a tongue twister slowly.' },
            { lead: 'Focus', text: ' a stillness game: freeze and watch.' },
          ]}
        />
        <Worked
          title="Why each step?"
          steps={['Stretching prepares muscles for movement.', 'Breath control supports a steady voice.', 'The tongue twister warms the mouth.', 'The game gathers everyone’s attention.']}
        />
        <Mistake>Skipping the warm-up and shouting straight away. That can strain the voice and leaves minds elsewhere.</Mistake>
      </>,
    ),
  },
  {
    title: 'Voice projection',
    content: slide(
      <>
        <Rule>Voice projection means speaking clearly so the audience can hear. It uses breath, good posture and clear articulation, not shouting.</Rule>
        <TermGrid terms={VOICE} cols={2} aria="Six voice tools in boxes: volume (how loud or soft), pitch (how high or low), pace (how fast or slow), pause (a planned silence), projection (reaching the back row) and articulation (forming words clearly)." />
        <Worked
          title={`Mark up the line "${spoken}"`}
          steps={[
            <>Say the first word {loud.volume} and {loud.pace}.</>,
            <>Pause for {pause} beat.</>,
            <>Then {soft.volume} volume and a {soft.pace} pace for the rest.</>,
            'Aim the voice at the back wall.',
          ]}
        />
        <Mistake>Thinking projection is only shouting. A shouted line is often harder to understand.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tableaux and body language',
    content: slide(
      <>
        <Rule>A tableau is a frozen picture made with bodies. It shows one dramatic moment. Use levels, facial expression, clear eye focus and purposeful body language so the audience knows where to look.</Rule>
        <TableauLevels levels={TABLEAU_LEVELS} aria="Four stick figures frozen at different levels: low, high, medium and low. Each one leans towards a focus point in the middle, shown by a gold dot." />
        <Worked
          title="Tableau: a lost child is found"
          steps={['Choose the moment: the instant of being found.', 'Put the child at a low level and the parent at a high level.', 'Give faces the same feeling: relief.', 'Everyone looks or reaches towards the child, then freezes.']}
        />
        <Mistake>Everyone standing in a line at the same level, looking in different directions. The picture has no focus.</Mistake>
      </>,
    ),
  },
  {
    title: 'Improvisation and characterisation',
    content: slide(
      <>
        <Rule>Improvisation is creating a performance without a fixed script. Stay in role, accept your partner&apos;s ideas and build on them. Strong characterisation keeps one steady voice and movement for the role.</Rule>
        <TermGrid terms={CHARACTER} cols={2} aria="Four parts of a character in boxes: voice (how they sound), movement (how they move), motivation (what they want) and reaction (how they react)." />
        <Worked
          title="Improvise a shopkeeper and a customer"
          steps={['Decide who, where and what each wants.', 'Give the shopkeeper a slow walk and a warm voice.', 'Keep that walk and voice until the end.', 'Build on whatever your partner offers.']}
        />
        <Mistake>Changing your character&apos;s voice or walk halfway through, or rejecting your partner&apos;s idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stage directions and reflection',
    content: slide(
      <>
        <Rule>Stage directions tell actors how to move and act. They are written in brackets and are not spoken. After a role-play, reflect on what worked well and what could be better.</Rule>
        <Worked
          title={`${WINDOW_LINE.who}: (${WINDOW_LINE.direction}) ${WINDOW_LINE.text}`}
          steps={[
            `The script has ${direction.withDirections} stage direction in brackets.`,
            'Do the direction: walk slowly to the window.',
            <>Say only the line: &quot;{WINDOW_LINE.text}&quot;</>,
            'Reflect: the slow walk showed sadness (worked well); the voice was too soft at the back (improve).',
          ]}
        />
        <Mistake>Reading the bracketed directions aloud, or reflecting only with &quot;it was good&quot;. Name what worked and what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why do drama classes begin with warm-ups?</li>
            <li>What is a tableau?</li>
            <li>What does improvisation mean?</li>
            <li>What do stage directions tell actors?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>To prepare the body and voice safely and sharpen focus.</li>
            <li>A frozen picture made with bodies, showing one dramatic moment.</li>
            <li>Creating a performance without a fixed script.</li>
            <li>How to move and act in the scene.</li>
          </ol>
        }
      />,
    ),
  },
];
