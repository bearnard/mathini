import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Telling a story aloud",
    content: slide(
      <>
        <Rule>Storytelling is an oral tradition: the story is shaped to be heard, not read. You plan it with a beginning, a middle and an ending, choose a few clear characters and decide how your voice will show each one. An oral story in an assessment usually lasts 8 to 10 minutes.</Rule>
        <KeyTable
          title="Shaping a story for listeners"
          head={["Feature", "What it does"]}
          aria="Shaping a story for listeners. Opening: Catches attention and sets the scene. Characters: Few and clear, each with a distinct voice. Events: Told in order, with a problem and a turning point. Repetition: Helps listeners remember and join in. Ending: Brings the story to a satisfying close. Duration: About 8 to 10 minutes."
          rows={[["Opening", "Catches attention and sets the scene"], ["Characters", "Few and clear, each with a distinct voice"], ["Events", "Told in order, with a problem and a turning point"], ["Repetition", "Helps listeners remember and join in"], ["Ending", "Brings the story to a satisfying close"], ["Duration", "About 8 to 10 minutes"]]}
        />
        <Worked
          steps={[
            <>You open a story with a sentence that invites the audience to listen, then use a slower voice for the old woman and a quick voice for the boy.</>,
            <>You repeat a short line three times so listeners can join in.</>,
          ]}
        />
        <Mistake>Reading the story word for word from a page. Know it well enough to look at the audience.</Mistake>
      </>,
    ),
  },
  {
    title: "Voice, body and audience",
    content: slide(
      <>
        <Rule>A story comes alive through your voice and body. Change your pace to build excitement, pause before a surprise and use your face and hands to show feelings. Watch the audience and adapt, so that they stay involved from the start to the end.</Rule>
        <KeyTable
          title="Delivery in storytelling"
          head={["Skill", "Effect"]}
          aria="Delivery in storytelling. Pace: Speed up for action, slow down for suspense. Pause: Builds suspense before a surprise. Volume: Soft for secrets, loud for excitement. Gesture and face: Show feeling and action. Eye contact: Keeps the audience involved. Audience: Invite a response, such as a repeated line."
          rows={[["Pace", "Speed up for action, slow down for suspense"], ["Pause", "Builds suspense before a surprise"], ["Volume", "Soft for secrets, loud for excitement"], ["Gesture and face", "Show feeling and action"], ["Eye contact", "Keeps the audience involved"], ["Audience", "Invite a response, such as a repeated line"]]}
        />
        <Worked
          steps={[
            <>You whisper the line before the lion appears, pause, and then speak loudly when it roars.</>,
            <>You look at all parts of the room, not only at the front row.</>,
          ]}
        />
        <Mistake>Speaking in one flat voice. A story needs changes in pace, volume and tone.</Mistake>
      </>,
    ),
  },
  {
    title: "What a praise poem is",
    content: slide(
      <>
        <Rule>A praise poem honours a person, a group, an animal or a place. It is performed aloud, often by a poet known as an imbongi, and it uses praise names, repetition, exaggeration and images from nature and history. In many African traditions praise poetry is a respected form that records achievements and values.</Rule>
        <KeyTable
          title="Features of a praise poem"
          head={["Feature", "What it does"]}
          aria="Features of a praise poem. Praise names: Honour the subject with strong titles. Repetition and parallel lines: Give rhythm and emphasis. Exaggeration: Shows how great the subject is. Imagery and comparison: Link the subject to strength in nature. History and family: Name ancestors, places and deeds. Performance: Spoken loudly, with movement and rhythm."
          rows={[["Praise names", "Honour the subject with strong titles"], ["Repetition and parallel lines", "Give rhythm and emphasis"], ["Exaggeration", "Shows how great the subject is"], ["Imagery and comparison", "Link the subject to strength in nature"], ["History and family", "Name ancestors, places and deeds"], ["Performance", "Spoken loudly, with movement and rhythm"]]}
        />
        <Worked
          steps={[
            <>A praise poem about a school champion compares her to a river in flood and repeats her name at the start of each line.</>,
            <>The poet names her village and the school as part of the praise.</>,
          ]}
        />
        <Mistake>Treating a praise poem as a plain list of facts. Its power is in rhythm, images and the voice of the performer.</Mistake>
      </>,
    ),
  },
  {
    title: "Prepare and perform",
    content: slide(
      <>
        <Rule>To prepare a praise poem or story, research your subject, choose strong images and write lines that sound good when spoken. Practise aloud, so that you know the rhythm, and perform with confidence, using your voice and gestures. Treat the traditions with respect and do not mock them.</Rule>
        <KeyTable
          title="Preparing to perform"
          head={["Task", "Why it matters"]}
          aria="Preparing to perform. Research: Know the facts and the values of the subject. Choose images: Pick comparisons your audience will understand. Write for the ear: Short lines and strong rhythm. Rehearse aloud: Check pace, pauses and gestures. Respect: Honour the tradition and the people it praises."
          rows={[["Research", "Know the facts and the values of the subject"], ["Choose images", "Pick comparisons your audience will understand"], ["Write for the ear", "Short lines and strong rhythm"], ["Rehearse aloud", "Check pace, pauses and gestures"], ["Respect", "Honour the tradition and the people it praises"]]}
        />
        <Worked
          steps={[
            <>You gather three achievements of a local sports coach and turn each into a line with a strong image.</>,
            <>You practise the poem in front of a friend and adjust the pace.</>,
          ]}
        />
        <Mistake>Copying lines you do not understand. Write your own, and know what every image means.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>About how long is an oral storytelling task?</>,
          <>Name two features of a praise poem.</>,
          <>What does a pause before a surprise do?</>,
          <>Who often performs a praise poem?</>,
        ]}
        answers={[
          <>About 8 to 10 minutes.</>,
          <>Praise names and repetition.</>,
          <>It builds suspense.</>,
          <>A praise poet, known as an imbongi.</>,
        ]}
      />,
    ),
  },
];
