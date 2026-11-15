import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { BalanceBars, CallResponse, LayersStack, StaffNotes } from '../../../../../components/diagrams/arts/Ca8MusicPictures';
import { callAndResponse, countIn, layers, motion, rebalance, tooLoud } from '../../../../../components/diagrams/arts/ca8-music-helpers';

// Every count below comes from ca8-music-helpers.ts (tested in ca8-music-helpers.test.ts and ca8-music-lessons.test.ts).
const TUNE = ['E4', 'G4', 'A4', 'G4', 'E4'];
const moves = TUNE.slice(1).map((n, i) => ({ from: TUNE[i], to: n, kind: motion(TUNE[i], n) }));
const mk = (name: string, playing: boolean) => ({ name, playing });
const alone = [mk('Voice', true), mk('Drum', false), mk('Marimba', false)];
const two = [mk('Voice', true), mk('Drum', true), mk('Marimba', false)];
const three = [mk('Voice', true), mk('Drum', true), mk('Marimba', true)];
const dialogue = callAndResponse(2);
const loudBand = [{ name: 'Voices', level: 3 }, { name: 'Drums', level: 6 }, { name: 'Marimba', level: 3 }];
const fixedBand = rebalance(loudBand, 3);
const q4band = [{ name: 'Voices', level: 3 }, { name: 'Drums', level: 5 }, { name: 'Marimba', level: 3 }];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Melody',
    content: slide(
      <>
        <Rule>A melody is a sequence of pitched notes that forms a tune. It moves by steps to the next note or by skips over notes.</Rule>
        <StaffNotes notes={TUNE} aria="A five-line staff with five notes: E, G, A, G, E. The tune skips up, steps up, steps down and skips down." />
        <Worked
          title="Trace the tune E G A G E"
          steps={moves.map((m) => (
            <>
              {m.from.replace('4', '')} to {m.to.replace('4', '')}: {m.kind}.
            </>
          ))}
        />
        <Mistake>Calling a rhythm alone a melody. A melody needs notes of different pitches, not only a pattern of long and short sounds.</Mistake>
      </>,
    ),
  },
  {
    title: 'Texture',
    content: slide(
      <>
        <Rule>Musical texture describes how many layers of sound are heard at the same time.</Rule>
        <LayersStack parts={three} aria={`Three bars, one for a voice, a drum and a marimba, all playing together. That is ${layers(three)} layers of sound.`} />
        <Worked
          title="Count the layers"
          steps={[<>Voice alone: {layers(alone)} layer.</>, <>Voice and drum: {layers(two)} layers.</>, <>Voice, drum and marimba: {layers(three)} layers, a thicker texture.</>]}
        />
        <Mistake>Mixing up texture and volume. One very loud voice is still one layer; texture counts the layers, not the loudness.</Mistake>
      </>,
    ),
  },
  {
    title: 'Call-and-response',
    content: slide(
      <>
        <Rule>In call-and-response music, a phrase from one voice is answered by a second phrase. The leader gives the call and the group gives the response.</Rule>
        <CallResponse sequence={dialogue} aria={`Four blocks taking turns: a call, a response, a call and a response. The phrases alternate, they do not play at the same time.`} />
        <Worked
          title="Perform two pairs"
          steps={[<>The order is: {dialogue.join(', ')}.</>, 'The leader sings the call and then stops.', 'The group answers, then waits for the next call.']}
        />
        <Mistake>Singing the call and the response together. The two parts take turns.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing styles by listening',
    content: slide(
      <>
        <Rule>To compare styles, spot similarities and differences in musical features such as voices or instruments, rhythm and texture. A listening log records what you noticed.</Rule>
        <CompareCards
          left={{ title: 'Isicathamiya', lines: ['Sung by voices alone', 'Several vocal parts at once'] }}
          right={{ title: 'Marimba', lines: ['Tuned wooden bars', 'Played with mallets'] }}
        />
        <Worked
          title="One line of a listening log"
          steps={['Name the style you heard.', 'Note one musical feature: voices only, or struck wooden bars.', 'Note one similarity or difference with another style.']}
        />
        <Mistake>Writing only &quot;I liked it&quot;. Use specific features you heard, such as the instruments, the layers or the rhythm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ensemble balance and counting in',
    content: slide(
      <>
        <Rule>Good ensemble balance means no part overpowers the others. If one section is too loud, lower that section and rebalance. Count in first so everyone begins together.</Rule>
        <BalanceBars before={loudBand} after={fixedBand} aria={`Two sets of bars for voices, drums and marimba. Before, the drums are much taller than the others. After, all three are the same height, so the drums no longer overpower the rest.`} />
        <Worked
          title="Fix the balance"
          steps={[<>Too loud: {tooLoud(loudBand, 3).join(', ')}.</>, <>Lower the drums to match the others and rebalance.</>, <>Count in {countIn('4/4')} so all start together.</>]}
        />
        <Mistake>Making every other part louder to compete. Lower the part that is too loud instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How many layers are playing if a voice, a drum and a marimba play together?</li>
            <li>A tune moves from E up to G. Is that a step or a skip?</li>
            <li>The drums are far louder than the voices and marimba. What should you do?</li>
            <li>What is a listening log used for?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{layers(three)} layers.</li>
            <li>A {motion('E4', 'G4')}.</li>
            <li>Lower the {tooLoud(q4band, 3).join(', ').toLowerCase()} and rebalance.</li>
            <li>To record what you noticed while listening.</li>
          </ol>
        }
      />,
    ),
  },
];
