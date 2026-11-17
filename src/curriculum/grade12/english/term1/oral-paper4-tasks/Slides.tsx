import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { DURATIONS, EXAMPLE, PAPER4, exampleTotal, paper4Percent, paper4Total, preparedMarks, rangeText } from '@/components/diagrams/english/oralHelpers';

// Every number below comes from oralHelpers.ts (tested in oralHelpers.test.ts and g12EngOral.test.ts).
const total = paper4Total();
const pct = String(paper4Percent()).replace('.', ','); // South African decimal comma
const myTotal = exampleTotal();
const myPrepared = EXAMPLE.prepared.reduce((a, b) => a + b, 0);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What Paper 4 is',
    content: slide(
      <>
        <Rule>Paper 4 is the oral assessment. The oral tasks done during the year make up Paper 4 of the end-of-year external assessment. It is worth {total} of the {PAPER4.endOfYearTotal} marks. The orals are set and assessed by the school and then moderated externally.</Rule>
        <KeyTable
          title="The Paper 4 marks"
          head={['Task', 'Marks']}
          aria={`The Paper 4 marks. Prepared speech, ${PAPER4.preparedSpeeches} speeches of ${PAPER4.marksPerPreparedSpeech} marks each: ${preparedMarks()} marks. Unprepared speech: ${PAPER4.unpreparedSpeech} marks. Listening for comprehension: ${PAPER4.listening} marks. Total ${total} marks.`}
          rows={[
            [`Prepared speech (${PAPER4.preparedSpeeches} × ${PAPER4.marksPerPreparedSpeech})`, `${preparedMarks()}`],
            ['Unprepared speech', `${PAPER4.unpreparedSpeech}`],
            ['Listening for comprehension', `${PAPER4.listening}`],
            ['Paper 4 total', `${total}`],
          ]}
        />
        <Worked
          steps={[
            `Marks: ${preparedMarks()} + ${PAPER4.unpreparedSpeech} + ${PAPER4.listening} = ${total}.`,
            `Share of the end-of-year marks: ${total} ÷ ${PAPER4.endOfYearTotal} = one sixth, which is about ${pct}%.`,
          ]}
        />
        <Mistake>Treating the oral as less important than the written papers. It is one sixth of the end-of-year marks, and you can prepare for it all year.</Mistake>
      </>,
    ),
  },
  {
    title: 'What each task assesses',
    content: slide(
      <>
        <Rule>Each oral task has its own focus. The prepared speech is the only task that assesses research and the use of aids.</Rule>
        <KeyTable
          title="What the marker looks for"
          head={['Task', 'Assessed']}
          aria="What each Paper 4 task assesses. Prepared speech: research skills, planning and organisation of content, tone, speaking and presentation skills, critical awareness of language, and the use of audio or visual aids. Unprepared speech: planning and organisation, tone, speaking and presentation skills, and critical awareness of language. Listening for comprehension: listening critically for comprehension, information and evaluation."
          rows={[
            ['Prepared speech', 'Research, planning, tone, delivery, language, aids'],
            ['Unprepared speech', 'Planning, tone, delivery, language'],
            ['Listening', 'Critical listening: comprehension, information, evaluation'],
          ]}
        />
        <Worked
          steps={[
            <>For a prepared speech you may research, make notes and use a poster or slides. A marker looks at the research and the aids too.</>,
            <>For an unprepared speech you get a topic and a little time. The marker looks at how well you plan quickly and speak clearly.</>,
          ]}
        />
        <Mistake>Practising only what to say. Tone, voice, eye contact and use of language are marked too.</Mistake>
      </>,
    ),
  },
  {
    title: 'The oral tasks through the year',
    content: slide(
      <>
        <Rule>The oral tasks are spread over the year. In Grade 12, Term 1 has a listening task and a speech, Term 2 has a speech, Term 3 has a prepared speech that introduces a speaker and offers a vote of thanks, and Term 4 is for moderation.</Rule>
        <KeyTable
          title="Oral tasks by term"
          head={['Term', 'Oral task']}
          aria="Oral tasks by term. Term 1: Task 1, listening for comprehension, and Task 4, prepared or unprepared speech. Term 2: Task 7, prepared or unprepared speech. Term 3: Task 9, prepared speech introducing a speaker or a vote of thanks. Term 4: moderation of orals."
          rows={[
            ['Term 1', 'Task 1: Listening; Task 4: Speech'],
            ['Term 2', 'Task 7: Speech'],
            ['Term 3', 'Task 9: Introducing a speaker, vote of thanks'],
            ['Term 4', 'Moderation of orals'],
          ]}
        />
        <KeyTable
          title="Suggested duration"
          head={['Oral text', 'Time']}
          aria={`Suggested durations: ${DURATIONS.map((d) => `${d.text} ${rangeText(d)}`).join('; ')}.`}
          rows={DURATIONS.map((d) => [d.text, rangeText(d)] as const)}
        />
        <Worked
          steps={[
            <>A prepared speech is planned for 4 to 5 minutes. An unprepared speech is shorter, 2 to 3 minutes.</>,
            <>A debate or panel discussion is the longest oral text, with a suggested 20 to 30 minutes.</>,
          ]}
        />
        <Mistake>Leaving every task to the last term. Terms 1 and 2 already carry speeches and a listening task.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding up the marks',
    content: slide(
      <>
        <Rule>To find a learner&rsquo;s Paper 4 mark, add the mark for the listening task, the two prepared speeches and the unprepared speech. The total is out of {total}.</Rule>
        <KeyTable
          title="One learner's marks"
          head={['Task', 'Mark']}
          aria={`One learner's marks. Listening ${EXAMPLE.listening} out of ${PAPER4.listening}. Prepared speeches ${EXAMPLE.prepared.join(' and ')}, which is ${myPrepared} out of ${preparedMarks()}. Unprepared speech ${EXAMPLE.unprepared} out of ${PAPER4.unpreparedSpeech}. Total ${myTotal} out of ${total}.`}
          rows={[
            ['Listening', `${EXAMPLE.listening} / ${PAPER4.listening}`],
            [`Prepared speeches (${EXAMPLE.prepared.join(' + ')})`, `${myPrepared} / ${preparedMarks()}`],
            ['Unprepared speech', `${EXAMPLE.unprepared} / ${PAPER4.unpreparedSpeech}`],
            ['Total', `${myTotal} / ${total}`],
          ]}
        />
        <Worked
          steps={[
            `Prepared speeches: ${EXAMPLE.prepared.join(' + ')} = ${myPrepared} out of ${preparedMarks()}.`,
            `Total: ${EXAMPLE.listening} + ${myPrepared} + ${EXAMPLE.unprepared} = ${myTotal} out of ${total}.`,
          ]}
        />
        <Mistake>Adding the two prepared speeches as 10 marks. Each is marked out of {PAPER4.marksPerPreparedSpeech}, so together they are out of {preparedMarks()}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many marks is Paper 4 worth, and out of how many marks in all?</>,
          <>How many marks are there for the unprepared speech?</>,
          <>A learner scores 8 and 9 for two prepared speeches. What is that out of 20?</>,
          <>Which task is assessed for research and aids?</>,
        ]}
        answers={[
          <><strong>{total}</strong> marks, out of {PAPER4.endOfYearTotal}.</>,
          <>{PAPER4.unpreparedSpeech} marks.</>,
          <>8 + 9 = <strong>{myPrepared}</strong> out of {preparedMarks()}.</>,
          <>The prepared speech.</>,
        ]}
      />,
    ),
  },
];
