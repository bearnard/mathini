import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Ergonomics",
    content: slide(
      <>
        <Rule>Ergonomics is designing and arranging equipment so that people can use it comfortably, safely and efficiently. A good workstation lowers the risk of pain and injury.</Rule>
        <KeyTable
          title="A healthy workstation"
          head={["Item", "Good practice"]}
          aria="A healthy workstation. Chair: Supports the back; feet flat on the floor. Screen: At eye level, an arm's length away. Keyboard and mouse: Wrists straight and relaxed. Lighting: No glare on the screen. Breaks: Stand up and stretch regularly."
          rows={[["Chair", "Supports the back; feet flat on the floor"], ["Screen", "At eye level, an arm's length away"], ["Keyboard and mouse", "Wrists straight and relaxed"], ["Lighting", "No glare on the screen"], ["Breaks", "Stand up and stretch regularly"]]}
        />
        <Worked
          steps={[
            <>A learner sits with the screen too low and the neck bent forward. Raising the screen to eye level removes the strain.</>,
            <>An adjustable chair lets people of different heights sit correctly.</>,
          ]}
        />
        <Mistake>Working for hours without a break. Short, regular breaks protect the eyes, neck and wrists.</Mistake>
      </>,
    ),
  },
  {
    title: "Health issues of computer use",
    content: slide(
      <>
        <Rule>Using computers for a long time can cause health problems. Most can be prevented by good habits and a good workstation.</Rule>
        <KeyTable
          title="Health issues"
          head={["Issue", "Cause and prevention"]}
          aria="Health issues. Eye strain: Long screen time; rest the eyes and look away often. Repetitive strain injury (RSI): Repeated movements; take breaks and keep wrists straight. Back and neck pain: Poor posture; sit correctly and move often. Lack of exercise: Too much sitting; exercise and stand up. Stress and sleep: Late-night use; set limits on screen time."
          rows={[["Eye strain", "Long screen time; rest the eyes and look away often"], ["Repetitive strain injury (RSI)", "Repeated movements; take breaks and keep wrists straight"], ["Back and neck pain", "Poor posture; sit correctly and move often"], ["Lack of exercise", "Too much sitting; exercise and stand up"], ["Stress and sleep", "Late-night use; set limits on screen time"]]}
        />
        <Worked
          steps={[
            <>A learner who plays games for hours may get sore wrists (RSI). Short breaks and stretching help.</>,
            <>The 20-20-20 rule: every 20 minutes, look at something 20 feet (about 6 m) away for 20 seconds.</>,
          ]}
        />
        <Mistake>Ignoring pain. Early signs should be taken seriously, and posture or breaks changed.</Mistake>
      </>,
    ),
  },
  {
    title: "Green computing",
    content: slide(
      <>
        <Rule>Green computing means using computers in ways that reduce harm to the environment. It saves energy, cuts waste and recycles equipment.</Rule>
        <KeyTable
          title="Green computing"
          head={["Practice", "Benefit"]}
          aria="Green computing. Switch off or sleep when not in use: Saves electricity. Energy-saving settings: Lower power use. Print only when needed, print on both sides: Saves paper and ink. Recycle old equipment and cartridges: Cuts waste and harmful materials. Use e-mail and cloud storage: Less paper."
          rows={[["Switch off or sleep when not in use", "Saves electricity"], ["Energy-saving settings", "Lower power use"], ["Print only when needed, print on both sides", "Saves paper and ink"], ["Recycle old equipment and cartridges", "Cuts waste and harmful materials"], ["Use e-mail and cloud storage", "Less paper"]]}
        />
        <Worked
          steps={[
            <>A school sets computers to sleep after a few minutes, and recycles old monitors at an approved centre.</>,
            <>Reading a document on screen instead of printing it saves paper.</>,
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
          <>Look away from the screen often, or rest the eyes.</>,
          <>Switch off when not in use, or recycle old equipment.</>,
        ]}
      />,
    ),
  },
];
