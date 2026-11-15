import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { CountStrip, SectionBar } from '../../../../../components/diagrams/arts/Ca8DancePictures';
import { barsOf, cueCount, splitPlan, timeline } from '../../../../../components/diagrams/arts/ca8-dance-helpers';

// Every count below comes from ca8-dance-helpers.ts (tested in ca8-dance-helpers.test.ts and ca8-dance-lessons.test.ts).
export const ROUTINE = [
  { name: 'Beginning', size: 8 },
  { name: 'Development', size: 16 },
  { name: 'Ending', size: 8 },
];
const routine = splitPlan(ROUTINE);

export const ENTRY = { count: 9, lead: 1, total: 12 };
const cue = cueCount(ENTRY.count, ENTRY.lead);
const entry = timeline([
  { name: 'Wait', counts: ENTRY.count - 1 },
  { name: 'Enter', counts: ENTRY.total - ENTRY.count + 1 },
]);

export const PRACTICE = [
  { name: 'Warm-up', size: 10 },
  { name: 'Run-through', size: 20 },
  { name: 'Cool-down', size: 5 },
];
const practice = splitPlan(PRACTICE);
const range = (a: number, b: number) => `counts ${a} to ${b}`;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The structure of a routine',
    content: slide(
      <>
        <Rule>A complete routine has a clear beginning, a development and an ending, joined by transitions. This makes it easy for an audience to follow.</Rule>
        <SectionBar sections={ROUTINE} unit="counts" aria={`A routine of ${routine.total} counts: ${routine.parts.map((p) => `${p.name} ${p.size} counts`).join(', ')}.`} />
        <Worked
          title={`A ${routine.total}-count routine`}
          steps={[...routine.parts.map((p) => `${p.name}: ${range(p.from, p.to)}.`), `${routine.total} counts = ${barsOf(routine.total)} bars of 4.`]}
        />
        <Mistake>Repeating one move over and over with nothing to link it. A routine needs a beginning, development and ending.</Mistake>
      </>,
    ),
  },
  {
    title: 'Timing and group synchronisation',
    content: slide(
      <>
        <Rule>Timing accuracy means moving on the correct counts and cues. A group stays together by using shared counts and visual cues such as a nod or a breath.</Rule>
        <CountStrip
          segments={entry}
          total={ENTRY.total}
          cue={{ count: cue, label: 'nod' }}
          aria={`Twelve counts. The group waits for counts 1 to ${ENTRY.count - 1} and enters on count ${ENTRY.count}. A nod is the cue on count ${cue}.`}
        />
        <Worked
          title={`Everyone enters on count ${ENTRY.count}`}
          steps={[`Count silently from 1 to ${ENTRY.count - 1}.`, `On count ${cue} the lead dancer nods (the cue).`, `Everybody enters on count ${ENTRY.count}.`]}
        />
        <Mistake>Watching only yourself or changing the tempo on your own. The group counts and cues must be shared.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expression',
    content: slide(
      <>
        <Rule>Expression communicates a feeling or an idea. Dancers show it through body dynamics, such as energy and size, and through facial focus.</Rule>
        <CompareCards
          left={{ title: 'Joy', lines: ['Big, open, bouncy movement', 'Head lifted, bright focus'] }}
          right={{ title: 'Calm', lines: ['Small, slow, smooth movement', 'Soft, steady focus'] }}
        />
        <Worked
          title="Show one feeling"
          steps={['Choose the feeling, for example joy.', 'Choose the body dynamics: big, open and bouncy.', 'Add facial focus: lift the head and look up.']}
        />
        <Mistake>Believing expression comes only from the costume or where you stand. It comes from how you move and where you focus.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safe performance habits',
    content: slide(
      <>
        <Rule>Before a final practice, warm up and drink water. Practise on a safe floor, stretch without forcing, and cool down at the end.</Rule>
        <SectionBar sections={PRACTICE} unit="minutes" aria={`A ${practice.total}-minute practice: ${practice.parts.map((p) => `${p.name} ${p.size} minutes`).join(', ')}.`} />
        <Worked
          title={`Plan a ${practice.total}-minute final practice`}
          steps={[...practice.parts.map((p) => `${p.name}: ${p.size} minutes.`), 'Sip water between run-throughs.']}
        />
        <Mistake>Skipping the warm-up to save time, or forcing a painful stretch. Both make an injury more likely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Appreciation, reflection and careers',
    content: slide(
      <>
        <Rule>Dance appreciation means giving respectful, informed feedback. Reflection asks what to improve next. Dance careers include choreographer, dancer and dance teacher.</Rule>
        <Worked
          title="Reflect on a performance"
          steps={['Name a strength: "Our entrance was together."', 'Name something to refine: "The ending was rushed."', 'Ask: what will I refine before the next performance?']}
        />
        <Mistake>Laughing at mistakes, or commenting only on clothes. A choreographer creates and organises movement, so useful feedback is about the dance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A {routine.total}-count routine has a beginning of {ROUTINE[0].size} counts and an ending of {ROUTINE[2].size}. How long is the development?</li>
            <li>A group enters on count {ENTRY.count} and the cue is {ENTRY.lead} count early. On which count is the cue?</li>
            <li>Give one safe habit for a final practice.</li>
            <li>Which dance career creates and organises movement?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{routine.total} − {ROUTINE[0].size} − {ROUTINE[2].size} = {ROUTINE[1].size} counts.</li>
            <li>{ENTRY.count} − {ENTRY.lead} = count {cue}.</li>
            <li>Any of: warm up, drink water, cool down.</li>
            <li>A choreographer.</li>
          </ol>
        }
      />,
    ),
  },
];
