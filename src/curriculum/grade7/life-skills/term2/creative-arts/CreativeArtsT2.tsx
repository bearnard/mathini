import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { ContrastPair, MotifRow, SectionBar } from '../../../../../components/diagrams/lo/CaPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const STRONG = { bg: '#1e1b4b', fg: '#fef08a' };
const WEAK = { bg: '#fde68a', fg: '#fef3c7' };
const song = [
  { label: 'Verse', units: 8 },
  { label: 'Chorus', units: 8 },
  { label: 'Verse', units: 8 },
  { label: 'Chorus', units: 8 },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Poster design: message and audience first',
    content: slide(
      <>
        <Rule>Decide the message and the target audience first. They guide every design choice. Strong contrast between key elements makes a poster easy to read.</Rule>
        <ContrastPair strong={STRONG} weak={WEAK} aria="Two headings that both say Read me. The first is pale yellow on dark blue and has strong contrast. The second is pale yellow on a slightly different pale yellow and has weak contrast." />
        <Worked
          title="A poster for a school clean-up day"
          steps={[<>Message: “Pick up litter on Friday.”</>, <>Audience: learners at our school.</>, <>Choose a dark background and a light title so it stands out.</>, <>Step back from the poster: can you still read the title?</>]}
        />
        <Mistake>Choosing decorations and fancy lettering before you know your message and audience. Pale text on a pale background is also hard to read.</Mistake>
      </>,
    ),
  },
  {
    title: 'Characterisation: who is this character?',
    content: slide(
      <>
        <Rule>Characterisation means showing who a character is through actions and voice. Your face and body help too.</Rule>
        <Hub centre="Character" spokes={['Voice', 'Face', 'Body', 'Actions']} aria="A circle labelled Character with four ways to show it: voice, face, body and actions." />
        <Worked
          title="Play a nervous new learner"
          steps={[<>Voice: speak quietly and a little shakily.</>, <>Body: hunch your shoulders and look at the floor.</>, <>Actions: fiddle with your bag strap.</>, <>The audience sees the nervousness without being told.</>]}
        />
        <Mistake>Only saying “I am nervous” and then acting the same as every other character. Show it in how you speak and move.</Mistake>
      </>,
    ),
  },
  {
    title: 'Song structure and movement motifs',
    content: slide(
      <>
        <Rule>Song structure is how verses and chorus are organised. A movement motif is a repeated movement idea in choreography.</Rule>
        <SectionBar parts={song} unit="bars" aria="An example song as a bar split in four equal sections: verse, chorus, verse, chorus, 8 bars each." />
        <MotifRow tiles={[{ label: 'Step, step, turn', kind: 'repeat' }, { label: 'Step, step, turn', kind: 'repeat' }, { label: 'Bigger step, step, turn', kind: 'change' }, { label: 'Step, step, turn', kind: 'repeat' }]} aria="A row of four movement tiles. The motif step, step, turn is repeated three times and shown once in a bigger version." />
        <Worked
          title="Build a motif"
          steps={[<>Choose a short idea: step, step, turn.</>, <>Repeat it so the audience recognises it.</>, <>Change it once, for example make it bigger.</>, <>Return to the first version to finish.</>]}
        />
        <Mistake>Thinking a motif is a different move every time. A motif is repeated so the piece feels unified.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience, critique and revision',
    content: slide(
      <>
        <Rule>Adapt to your audience: for younger children use clearer gestures and simpler language. A constructive critique names a strength and one practical improvement. Revise before the final presentation.</Rule>
        <StepFlow steps={['Perform for a friend.', 'Get specific feedback.', 'Revise the weak part.', 'Present the final piece.']} aria="Four steps in order: perform for a friend, get specific feedback, revise the weak part, present the final piece." />
        <Worked
          title="Give a peer critique"
          steps={[<>Strength: “Your message is clear.”</>, <>Improvement: “Raise the volume in the chorus.”</>, <>Put them together in one kind comment.</>]}
        />
        <Mistake>Saying “It was bad” or only “Nice.” Neither helps. Revision improves clarity and impact, so do not skip it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What should you decide first when planning a poster, and what helps readability?" answer="The message and the target audience. Strong contrast between key elements helps readability." />
        <Check question="What is characterisation, and what is a movement motif?" answer="Characterisation is showing who a character is through actions and voice. A motif is a repeated movement idea in choreography." />
        <Check question="What does song structure describe?" answer="How the verses and chorus are organised." />
        <Check question="Write a constructive peer critique for a performance with a clear message but a quiet chorus." answer="For example: “Your message is clear; raise the volume in the chorus.”" />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should you decide first when planning a poster?',
    options: ['The message and the target audience', 'The size of the paper and nothing else', 'Which desk you will sit at to work', 'How quickly you can finish the poster'],
    answer: 'The message and the target audience',
    explanation: 'Clear purpose and audience guide all design choices.',
  },
  {
    prompt: 'Which design choice can improve readability?',
    options: [
      'Strong contrast between key elements',
      'Using the same tone everywhere',
      'Crowding every space with detail',
      'Making all elements identical in size',
    ],
    answer: 'Strong contrast between key elements',
    explanation: 'Contrast helps viewers notice important information quickly.',
  },
  {
    prompt: 'What is characterisation in performance?',
    options: ['Showing who a character is through actions and voice', 'Standing still with no expression at all', 'Ignoring the context of the story completely', 'Using one tone of voice for every role'],
    answer: 'Showing who a character is through actions and voice',
    explanation: 'Characterisation makes characters believable to the audience.',
  },
  {
    prompt: 'Which option describes song structure?',
    options: ['How verses and chorus are organised', 'The colour of stage lights', 'The number of chairs in class', 'A list of sports rules'],
    answer: 'How verses and chorus are organised',
    explanation: 'Song structure arranges sections so the music feels coherent.',
  },
  {
    prompt: 'What is a movement motif?',
    options: [
      'A repeated movement idea in choreography',
      'A random warm-up stretch only',
      'A spoken paragraph in a script',
      'A drawing tool for shading',
    ],
    answer: 'A repeated movement idea in choreography',
    explanation: 'Motifs create unity and recognisable patterns in movement pieces.',
  },
  {
    prompt: 'How can performers adapt for a younger audience?',
    options: [
      'Use clearer gestures and simpler language',
      'Use very fast speech with no pauses',
      'Remove all emotional expression',
      'Ignore whether the message is understood',
    ],
    answer: 'Use clearer gestures and simpler language',
    explanation: 'Audience awareness improves communication and engagement.',
  },
  {
    prompt: 'Which comment is a constructive peer critique?',
    options: ['Your message is clear; raise the volume in the chorus', 'This is boring and useless to everyone', 'No one should ever try this again', 'Only the costumes matter in every task'],
    answer: 'Your message is clear; raise the volume in the chorus',
    explanation: 'Constructive critique identifies strengths and practical improvements.',
  },
  {
    prompt: 'Why is revision important in Creative Arts?',
    options: [
      'It improves clarity and impact before final presentation',
      'It removes the need for rehearsal',
      'It guarantees perfect marks without effort',
      'It means feedback should be ignored',
    ],
    answer: 'It improves clarity and impact before final presentation',
    explanation: 'Revision helps learners refine artistic and communication choices.',
  },
];

const CreativeArtsT2 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Poster design, characterisation, song structure, and movement motifs"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT2;
