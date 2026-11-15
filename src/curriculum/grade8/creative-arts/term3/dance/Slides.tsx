import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CanonDiagram, EnergyLines, Pathways, SectionBar } from '../../../../../components/diagrams/arts/Ca8DancePictures';
import { canonEntries, splitPlan, timeline } from '../../../../../components/diagrams/arts/ca8-dance-helpers';
import type { PathKind } from '../../../../../components/diagrams/arts/ca8-dance-helpers';

// Every count below comes from ca8-dance-helpers.ts (tested in ca8-dance-helpers.test.ts and ca8-dance-lessons.test.ts).
export const PATHS: PathKind[] = ['straight', 'zigzag', 'curved', 'circular'];
export const FLOOR_PLAN = [
  { name: 'straight', counts: 2 },
  { name: 'zigzag', counts: 2 },
  { name: 'circular', counts: 4 },
] as const;
const floor = timeline(FLOOR_PLAN);
const floorTotal = floor[floor.length - 1].end;

export const CANON = { dancers: 3, offset: 2, phrase: 4 };
const canon = canonEntries(CANON.dancers, CANON.offset, CANON.phrase);

export const LINK = [
  { name: 'Phrase A', size: 8 },
  { name: 'Link', size: 2 },
  { name: 'Phrase B', size: 8 },
];
const link = splitPlan(LINK);
const range = (a: number, b: number) => `counts ${a} to ${b}`;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Space and pathways',
    content: slide(
      <>
        <Rule>Dancers use space through direction, level and pathway. A pathway is the line a dancer traces on the floor, such as straight, zigzag, curved or circular.</Rule>
        <Pathways kinds={PATHS} />
        <Worked
          title={`Plan an ${floorTotal}-count floor pattern`}
          steps={[...floor.map((s) => `${s.name[0].toUpperCase() + s.name.slice(1)} pathway: ${range(s.start, s.end)}.`), `${floor.map((s) => s.counts).join(' + ')} = ${floorTotal} counts.`]}
        />
        <Mistake>Mixing up a pathway with the way the dancer faces. A pathway is where the dancer travels.</Mistake>
      </>,
    ),
  },
  {
    title: 'Energy quality',
    content: slide(
      <>
        <Rule>Energy quality is how a movement feels, for example sharp, smooth or sustained. Changing the energy changes the expression and the style.</Rule>
        <EnergyLines />
        <Worked
          title="Same steps, new energy"
          steps={['Take four walking steps.', 'Make them sharp: each step stops suddenly.', 'Make them smooth: each step flows into the next. The steps are the same but the feeling is different.']}
        />
        <Mistake>Mixing up energy with the volume of the music or the colour of the costume. Energy is how the movement itself feels.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choreographic devices',
    content: slide(
      <>
        <Rule>A choreographic device is a method for developing movement ideas, such as repetition, contrast, unison and canon. In unison dancers move together. In canon they start one after another.</Rule>
        <CanonDiagram {...CANON} />
        <Worked
          title={`Canon: ${CANON.dancers} dancers, a ${CANON.phrase}-count phrase`}
          steps={canon.map((e) => `Dancer ${e.dancer} dances ${range(e.start, e.end)}.`)}
        />
        <Mistake>Calling it a canon when everyone starts together. That is unison. In a canon each dancer starts later.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transitions and performance quality',
    content: slide(
      <>
        <Rule>A transition connects one movement phrase to the next so the sequence flows. Performance quality shows in timing, control and expression.</Rule>
        <SectionBar sections={LINK} unit="counts" aria={`A sequence of ${link.total} counts: ${link.parts.map((p) => `${p.name} ${p.size} counts`).join(', ')}.`} />
        <Worked
          title="Link two phrases"
          steps={link.parts.map((p) => `${p.name}: ${range(p.from, p.to)}.`).concat([`${LINK.map((p) => p.size).join(' + ')} = ${link.total} counts.`])}
        />
        <Mistake>Stopping dead between phrases. A transition keeps the movement going.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cultural dance, style and feedback',
    content: slide(
      <>
        <Rule>Study cultural dance with respect for its origins, purpose and context. When you discuss style, explain why the movement suits the dance idea. Peer feedback should be specific, respectful and practical.</Rule>
        <Worked
          title="Give a feedback sentence"
          steps={['Say what you saw: "Your jump on count 5 was sharp and high."', 'Say why it works: "It showed excitement."', 'Suggest a next step: "Hold the landing for one more count."']}
        />
        <Mistake>Copying the steps of a cultural dance without learning what they mean, or saying &quot;I did not like it&quot; with no example.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the difference between sharp and smooth energy?</li>
            <li>Which device has dancers start one after another?</li>
            <li>Phrase A has {LINK[0].size} counts, the link {LINK[1].size} and phrase B {LINK[2].size}. How many counts altogether?</li>
            <li>Give one quality of useful peer feedback.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Sharp movement stops suddenly. Smooth movement flows.</li>
            <li>Canon.</li>
            <li>{LINK.map((p) => p.size).join(' + ')} = {link.total} counts.</li>
            <li>Any of: specific, respectful or practical.</li>
          </ol>
        }
      />,
    ),
  },
];
