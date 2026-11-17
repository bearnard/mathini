import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { DURATIONS, rangeText } from '@/components/diagrams/english/oralHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const prepared = DURATIONS.find((d) => d.text.startsWith('Prepared'))!;
const unprepared = DURATIONS.find((d) => d.text.startsWith('Unprepared'))!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Planning and organising a prepared speech',
    content: slide(
      <>
        <Rule>A prepared speech starts with planning: know your audience, purpose and theme, research the topic from reliable sources, and choose an organisational pattern. The register, style and voice must suit the audience and the occasion.</Rule>
        <KeyTable
          title="Ways to organise a speech"
          head={['Pattern', 'Use it to']}
          aria="Ways to organise a speech. Chronological: tell events in time order. Topical: divide the subject into topics. Cause and effect: show what causes something and what follows. Compare and contrast: show how two things are alike and different. Problem and solution: describe a problem and then offer a way to solve it."
          rows={[
            ['Chronological', 'Tell events in time order'],
            ['Topical', 'Divide the subject into topics'],
            ['Cause and effect', 'Show causes and what follows'],
            ['Compare and contrast', 'Show likeness and difference'],
            ['Problem and solution', 'Describe a problem, then a way out'],
          ]}
        />
        <Worked
          steps={[
            <>Topic: litter at school. Audience: learners and teachers. Purpose: persuade. Pattern: problem and solution.</>,
            <>Research: count the litter on one day, ask the cleaners, and read about a school that solved the problem.</>,
          ]}
        />
        <Mistake>Starting to write the speech before deciding who the audience is. The audience decides the language and the examples.</Mistake>
      </>,
    ),
  },
  {
    title: 'Structure and evidence',
    content: slide(
      <>
        <Rule>A speech needs a striking introduction, a clear body with ideas in a logical order, and a powerful conclusion. Support each idea with proof that is credible, valid and relevant, such as statistics, testimony and specific instances.</Rule>
        <KeyTable
          title="The parts of a speech and the proof"
          head={['Part or proof', 'What it does']}
          aria="The parts of a speech and types of proof. Introduction: catches attention and states the purpose. Body: develops ideas in a logical order. Conclusion: leaves a strong final message. Statistics: numbers from a reliable source. Testimony: what an expert or a witness says. Specific instance: one real example."
          rows={[
            ['Introduction', 'Catches attention, states purpose'],
            ['Body', 'Ideas in a logical order'],
            ['Conclusion', 'A strong final message'],
            ['Statistics', 'Numbers from a reliable source'],
            ['Testimony', 'An expert or witness speaks'],
            ['Specific instance', 'One real example'],
          ]}
        />
        <Worked
          steps={[
            <>Opening: &ldquo;Every school day, 120 learners drop a wrapper on this field.&rdquo; (a striking statistic)</>,
            <>Avoid digression, repeated points, clichés and rhetorical statements that say nothing. Keep to the point.</>,
          ]}
        />
        <Mistake>Quoting a statistic with no source. Evidence must be credible, so say where the number comes from.</Mistake>
      </>,
    ),
  },
  {
    title: 'Delivering the speech',
    content: slide(
      <>
        <Rule>Speak directly to the audience. Use verbal techniques (tone, voice projection, volume, pace and phrasing) and non-verbal techniques (eye contact, facial expressions, gestures and posture). Use the right form of address.</Rule>
        <KeyTable
          title="Verbal and non-verbal techniques"
          head={['Technique', 'Aim']}
          aria="Verbal and non-verbal techniques. Tone: show the mood and the attitude. Volume and projection: be heard at the back. Pace: not so fast that the audience cannot follow. Pause: give the audience time to think. Eye contact: connect with the audience. Gestures and posture: support the message and look confident."
          rows={[
            ['Tone', 'Show mood and attitude'],
            ['Volume and projection', 'Be heard at the back'],
            ['Pace and pauses', 'Let the audience follow'],
            ['Eye contact', 'Connect with listeners'],
            ['Gestures and posture', 'Support the message'],
          ]}
        />
        <Worked
          steps={[
            <>Begin with a form of address: &ldquo;Principal, teachers and fellow learners&rdquo;. Look up from your notes often.</>,
            <>Slow down for the key point, and pause after it. A pause shows confidence and gives the audience time to think.</>,
          ]}
        />
        <Mistake>Reading the speech word for word with your head down. Use notes as a guide and speak to the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'The unprepared speech',
    content: slide(
      <>
        <Rule>An unprepared speech is short, about {rangeText(unprepared)}. You get a topic and a little time to plan. Use tone, projection, pace, eye contact, posture and gestures, choose effective words, and begin and end well. A prepared speech is longer, about {rangeText(prepared)}.</Rule>
        <KeyTable
          title="A quick plan for an unprepared speech"
          head={['Step', 'What to do']}
          aria="A quick plan for an unprepared speech. Understand the topic and choose a stance. Choose two or three main points. Plan a strong opening and a clear ending. Speak calmly and keep to the time."
          rows={[
            ['1. Understand', 'Read the topic, choose a stance'],
            ['2. Choose points', 'Two or three main points'],
            ['3. Frame it', 'Strong opening, clear ending'],
            ['4. Deliver', 'Calm voice, keep to time'],
          ]}
        />
        <Worked
          steps={[
            <>Topic: &ldquo;Cellphones should be banned at school.&rdquo; Stance: against. Points: safety, learning, fairness.</>,
            <>Open with a question to the audience, make your three points one after another, and close by restating your stance.</>,
          ]}
        />
        <Mistake>Trying to say everything about the topic. With {rangeText(unprepared)}, two or three points are enough.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two organisational patterns for a speech.</>,
          <>Name two kinds of proof that support an idea in a speech.</>,
          <>Give one verbal and one non-verbal technique of delivery.</>,
          <>How long is the suggested time for an unprepared speech?</>,
        ]}
        answers={[
          <>Any two of: chronological, topical, cause and effect, compare and contrast, problem and solution.</>,
          <>Any two of: statistics, testimony, specific instances.</>,
          <>Verbal: tone, volume or pace. Non-verbal: eye contact, gestures or posture.</>,
          <>{rangeText(unprepared)}.</>,
        ]}
      />,
    ),
  },
];
