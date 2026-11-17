import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Ergonomics: a healthy workstation",
    content: slide(
      <>
        <Rule>Ergonomics is designing and arranging equipment so that people can use it comfortably, safely and efficiently. A good workstation and good habits lower the risk of pain and injury.</Rule>
        <KeyTable
          title="A healthy workstation"
          head={["Item", "Good practice"]}
          aria="A healthy workstation. Chair: Supports the back; feet flat on the floor. Screen: At eye level, an arm's length away. Keyboard and mouse: Wrists straight and relaxed. Lighting: No glare on the screen. Breaks: Stand up and stretch regularly."
          rows={[["Chair", "Supports the back; feet flat on the floor"], ["Screen", "At eye level, an arm's length away"], ["Keyboard and mouse", "Wrists straight and relaxed"], ["Lighting", "No glare on the screen"], ["Breaks", "Stand up and stretch regularly"]]}
        />
        <Worked
          steps={[
            <>A learner sits with the screen too low and the neck bent. Raising the screen to eye level removes the strain.</>,
            <>With correct keyboarding, fingers sit on the correct keys and wrists stay relaxed.</>,
          ]}
        />
        <Mistake>Working for hours without a break. Short, regular breaks protect eyes, neck and wrists.</Mistake>
      </>,
    ),
  },
  {
    title: "Health issues",
    content: slide(
      <>
        <Rule>Long computer use can cause health problems. Most can be prevented by good habits.</Rule>
        <KeyTable
          title="Health issues"
          head={["Issue", "Prevention"]}
          aria="Health issues. Eye strain: Rest your eyes and look away often. Repetitive strain injury (RSI): Take breaks; keep wrists straight. Back and neck pain: Sit correctly; move often. Lack of exercise: Stand up and exercise. Stress and poor sleep: Limit late-night screen time."
          rows={[["Eye strain", "Rest your eyes and look away often"], ["Repetitive strain injury (RSI)", "Take breaks; keep wrists straight"], ["Back and neck pain", "Sit correctly; move often"], ["Lack of exercise", "Stand up and exercise"], ["Stress and poor sleep", "Limit late-night screen time"]]}
        />
        <Worked
          steps={[
            <>A learner who types for hours may get sore wrists (RSI). Short breaks and stretching help.</>,
            <>The 20-20-20 rule: every 20 minutes look at something about 6 metres away for 20 seconds.</>,
          ]}
        />
        <Mistake>Ignoring pain. Early signs should be taken seriously.</Mistake>
      </>,
    ),
  },
  {
    title: "Green computing",
    content: slide(
      <>
        <Rule>Green computing means using computers in ways that reduce harm to the environment: save energy, cut waste and recycle.</Rule>
        <KeyTable
          title="Green computing"
          head={["Practice", "Benefit"]}
          aria="Green computing. Switch off or sleep when not in use: Saves electricity. Energy-saving settings: Lower power use. Print only when needed; print on both sides: Saves paper and ink. Recycle old equipment and cartridges: Cuts waste and harmful materials. Read on screen instead of printing: Saves paper."
          rows={[["Switch off or sleep when not in use", "Saves electricity"], ["Energy-saving settings", "Lower power use"], ["Print only when needed; print on both sides", "Saves paper and ink"], ["Recycle old equipment and cartridges", "Cuts waste and harmful materials"], ["Read on screen instead of printing", "Saves paper"]]}
        />
        <Worked
          steps={[
            <>A school sets computers to sleep after a few minutes and recycles old monitors at an approved centre.</>,
            <>Reading a document on screen instead of printing saves paper.</>,
          ]}
        />
        <Mistake>Throwing old computers in the bin. Electronic waste can contain harmful materials.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is ergonomics?</>,
          <>What does RSI stand for?</>,
          <>Give one way to reduce eye strain.</>,
          <>Give one green computing practice.</>,
        ]}
        answers={[
          <>Arranging equipment so people can use it comfortably and safely.</>,
          <>Repetitive strain injury.</>,
          <>Look away from the screen often.</>,
          <>Switch off when not in use, or recycle old equipment.</>,
        ]}
      />,
    ),
  },
];
