import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Plan your speech",
    content: slide(
      <>
        <Rule>A prepared speech starts before you write a word. You decide who the audience is, why you are speaking and how formal you must be. Then you research facts and examples and organise them so that the audience can follow your argument.</Rule>
        <KeyTable
          title="Planning a prepared speech"
          head={["Step", "What you do"]}
          aria="Planning a prepared speech. Audience and purpose: Decide who listens and what you want them to do or think. Register: Choose formal or informal language to suit the occasion. Research: Collect facts, examples and sources you can name. Organise: Choose a pattern such as cause and effect or problem and solution. Practise: Rehearse aloud and time yourself, aiming at 4 to 5 minutes."
          rows={[["Audience and purpose", "Decide who listens and what you want them to do or think"], ["Register", "Choose formal or informal language to suit the occasion"], ["Research", "Collect facts, examples and sources you can name"], ["Organise", "Choose a pattern such as cause and effect or problem and solution"], ["Practise", "Rehearse aloud and time yourself, aiming at 4 to 5 minutes"]]}
        />
        <Worked
          steps={[
            <>You are asked to speak to the school governing body about a longer library day. The audience is adults, so you choose formal language.</>,
            <>You find the library opening hours and the number of learners who study there, then organise the speech as a problem and a solution.</>,
          ]}
        />
        <Mistake>Writing the whole speech out and reading it word for word. Use short notes so that you can look at the audience.</Mistake>
      </>,
    ),
  },
  {
    title: "Structure and evidence",
    content: slide(
      <>
        <Rule>A speech needs a striking introduction, a body with your points in a clear order and a powerful conclusion. Back each point with proof such as statistics, testimony or a specific instance, and check that your proof is credible, valid and relevant.</Rule>
        <KeyTable
          title="Parts of a speech"
          head={["Part", "What it does"]}
          aria="Parts of a speech. Introduction: Wins attention and states your topic. Body: Develops your points one at a time. Evidence: Statistics, testimony or a specific instance. Conclusion: Leaves one strong idea with the audience. Forms of address: Phrases such as Ladies and gentlemen, or I want to stress that."
          rows={[["Introduction", "Wins attention and states your topic"], ["Body", "Develops your points one at a time"], ["Evidence", "Statistics, testimony or a specific instance"], ["Conclusion", "Leaves one strong idea with the audience"], ["Forms of address", "Phrases such as Ladies and gentlemen, or I want to stress that"]]}
        />
        <Worked
          steps={[
            <>You argue that schools should start later. Your body gives a statistic from a sleep study, a quote from a doctor and one example from a local school.</>,
            <>You end by repeating your strongest reason, not by adding a new point.</>,
          ]}
        />
        <Mistake>Giving an opinion with no proof. A claim such as everybody agrees is not evidence.</Mistake>
      </>,
    ),
  },
  {
    title: "Delivery",
    content: slide(
      <>
        <Rule>Your voice and body carry your message. Speak directly to the audience, use your voice to stress key words and keep a steady pace. Eye contact, posture and gestures show confidence. Do not read your notes without looking up.</Rule>
        <KeyTable
          title="Verbal and non-verbal skills"
          head={["Skill", "What it looks like"]}
          aria="Verbal and non-verbal skills. Voice projection: Loud enough for the back of the room. Pace: Not rushed, with pauses after key points. Intonation: Rises and falls so you do not sound flat. Eye contact: You look at people, not at the floor. Gestures: Natural movements that match your words."
          rows={[["Voice projection", "Loud enough for the back of the room"], ["Pace", "Not rushed, with pauses after key points"], ["Intonation", "Rises and falls so you do not sound flat"], ["Eye contact", "You look at people, not at the floor"], ["Gestures", "Natural movements that match your words"]]}
        />
        <Worked
          steps={[
            <>You pause for two seconds after your most important sentence so the audience has time to think about it.</>,
            <>You look at three different parts of the room in turn.</>,
          ]}
        />
        <Mistake>Speaking very fast because you are nervous. Slow down, and breathe at the end of each point.</Mistake>
      </>,
    ),
  },
  {
    title: "The unprepared speech",
    content: slide(
      <>
        <Rule>An unprepared speech is given with very little time, usually 2 to 3 minutes. You still need an opening, two or three points and a conclusion. Use the thinking time to choose a simple pattern, such as past, present and future, and to write three key words.</Rule>
        <KeyTable
          title="Prepared and unprepared speeches compared"
          head={["Feature", "Difference"]}
          aria="Prepared and unprepared speeches compared. Time to prepare: Prepared: days. Unprepared: a minute or two. Length: Prepared: 4 to 5 minutes. Unprepared: 2 to 3 minutes. Notes: Prepared: cue cards. Unprepared: three key words. Research: Prepared: yes. Unprepared: your own knowledge. Still needed: Opening, points, conclusion, good delivery."
          rows={[["Time to prepare", "Prepared: days. Unprepared: a minute or two"], ["Length", "Prepared: 4 to 5 minutes. Unprepared: 2 to 3 minutes"], ["Notes", "Prepared: cue cards. Unprepared: three key words"], ["Research", "Prepared: yes. Unprepared: your own knowledge"], ["Still needed", "Opening, points, conclusion, good delivery"]]}
        />
        <Worked
          steps={[
            <>You are given the topic Social media and young people. You write three key words: benefits, risks, advice, and speak on each in turn.</>,
            <>You open with a short question and close by repeating your advice.</>,
          ]}
        />
        <Mistake>Starting with I do not know what to say. Begin with a clear first sentence and the rest will follow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do you decide first when you plan a speech?</>,
          <>Name three kinds of proof you can use.</>,
          <>How long is an unprepared speech?</>,
          <>What should you do with your notes during delivery?</>,
        ]}
        answers={[
          <>Your audience and your purpose.</>,
          <>Statistics, testimony and a specific instance.</>,
          <>About 2 to 3 minutes.</>,
          <>Use short notes and keep looking at the audience.</>,
        ]}
      />,
    ),
  },
];
