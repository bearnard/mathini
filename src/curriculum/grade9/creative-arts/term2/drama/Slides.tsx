import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { CHARACTER, LOST_PHONE, THE_LETTER, blocking, scriptStats } from '../../../../../components/diagrams/arts/ca8-drama-helpers';
import { ScriptExcerpt, StageGrid, TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';
import { CHARACTER_QUESTIONS, READERS } from '../../../../../components/diagrams/arts/ca9-drama-helpers';

// The scripts, the character questions and the reader positions come from ca8/ca9 drama helpers (tested).
const letter = scriptStats(THE_LETTER);
const phone = scriptStats(LOST_PHONE);
const readers = blocking(READERS.map((r) => r.at));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Analyse the script first',
    content: slide(
      <>
        <Rule>Before you act a script, ask three questions: who are the characters, what do they want, and what is the conflict?</Rule>
        <ScriptExcerpt lines={THE_LETTER} title="The Letter" aria={`A script excerpt called The Letter with ${letter.lines} lines spoken by ${letter.speakers} characters, Thandi and Mama, each with a stage direction.`} />
        <Worked
          title="Analyse The Letter"
          steps={[`Characters: Thandi and Mama (${letter.speakers} speakers).`, 'Wants: Thandi is afraid to open the letter. Mama wants to support her.', 'Conflict: Thandi’s fear against the need to know.']}
        />
        <Mistake>Reading the lines without asking what each character wants. Then every line sounds the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Interpretation and motivation',
    content: slide(
      <>
        <Rule>Script interpretation is finding meaning in the text and making acting choices from it. Character motivation is why a character acts, speaks or feels as they do.</Rule>
        <TermGrid terms={CHARACTER} cols={2} aria="Four parts of a character in boxes: voice (how they sound), movement (how they move), motivation (what they want) and reaction (how they react)." />
        <Worked
          title={`Interpret Mama's line: "${THE_LETTER[1].text}"`}
          steps={['Motivation: she wants Thandi to feel safe.', 'Voice: quiet and steady.', 'Movement: she steps closer, as the direction says.', 'Gesture: she offers her hand.']}
        />
        <Mistake>Saying every line the same way. A different motivation needs a different voice and gesture.</Mistake>
      </>,
    ),
  },
  {
    title: 'Voice, gesture and stage directions',
    content: slide(
      <>
        <Rule>Voice and gesture show a character&apos;s feelings, aims and personality. Stage directions are written instructions for movement, position, tone and action.</Rule>
        <ScriptExcerpt lines={LOST_PHONE} title="The Lost Phone" aria={`A script excerpt called The Lost Phone with ${phone.lines} lines, ${phone.withDirections} of them with a stage direction in brackets.`} />
        <Worked
          title="Use the directions"
          steps={[`${phone.withDirections} of the ${phone.lines} lines have a direction.`, 'Naledi, searching and panicking: a fast, anxious voice and busy hands.', 'Sipho, calmly: a slow, even voice.', 'Naledi, stopping: freeze, then a quiet line.']}
        />
        <Mistake>Reading the stage directions aloud as dialogue. They are instructions for the performer.</Mistake>
      </>,
    ),
  },
  {
    title: 'South African theatre and cultural awareness',
    content: slide(
      <>
        <Rule>South African theatre often reflects local history, social issues, languages and cultures. Cultural awareness is understanding a character&apos;s social and historical setting.</Rule>
        <NumberedSteps label="Questions to ask about a character's setting" heading="Questions about a character" tone="teal" steps={CHARACTER_QUESTIONS} />
        <Worked
          title="Prepare a nurse in a rural clinic today"
          steps={['Where: a clinic, today.', 'Who: a nurse who speaks the patients’ language.', 'What: she wants to calm a patient.', 'Setting: she speaks gently.']}
        />
        <Mistake>Playing an unresearched culture as a stereotype. Context stops stereotyping.</Mistake>
      </>,
    ),
  },
  {
    title: 'Staged reading',
    content: slide(
      <>
        <Rule>A staged reading is a performance in which actors hold their scripts and read on stage. It lets a group explore a script without memorising it.</Rule>
        <StageGrid
          marks={READERS.map((r, i) => ({ at: r.at, label: r.label, color: ['#818cf8', '#34d399', '#fbbf24'][i] }))}
          aria="The stage seen from above with nine areas. Three readers, A, B and C, stand in a line at the front of the stage, downstage right, downstage centre and downstage left."
        />
        <Worked
          title="Plan a staged reading with three readers"
          steps={[`Stand at ${readers.names.join(', ')}.`, 'Mark your lines and choose a voice for each.', 'Add gestures from the stage directions.', 'Look up at the audience between lines.']}
        />
        <Mistake>Reading flatly with your head in the script. A staged reading is still a performance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which three questions do you ask when you analyse a script?</li>
            <li>What is character motivation?</li>
            <li>Should you say stage directions aloud?</li>
            <li>What is a staged reading?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Who are the characters, what do they want, and what is the conflict?</li>
            <li>Why a character acts, speaks or feels as they do.</li>
            <li>No. They are instructions for movement, position, tone and action.</li>
            <li>A performance in which actors hold scripts and read on stage.</li>
          </ol>
        }
      />,
    ),
  },
];
