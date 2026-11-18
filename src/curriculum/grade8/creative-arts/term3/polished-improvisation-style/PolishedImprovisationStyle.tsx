import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// All terms and meanings follow the Grade 8 drama plan; no play, poem or praise poem is quoted (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Choose a style",
    content: slide(
      <>
        <Rule>A polished improvisation is a scene that you plan, rehearse and improve. You can build it in a style. Comedy uses humour and exaggeration. Tragedy is serious and ends in loss or sorrow. A musical uses songs and dance to tell the story. A puppet show uses puppets to play the characters.</Rule>
        <FactCards
          cards={[
            { title: "Comedy", line1: "humour and exaggeration" },
            { title: "Tragedy", line1: "serious, ends in loss or sorrow" },
            { title: "Musical", line1: "songs and dance tell the story" },
            { title: "Puppet show", line1: "puppets play the characters" },
          ]}
          aria="Comedy: humour and exaggeration. Tragedy: serious, ends in loss or sorrow. Musical: songs and dance tell the story. Puppet show: puppets play the characters."
        />
        <Worked
          title="Choose a style for a theme"
          steps={[
            "Your theme is saving water.",
            "A comedy suits it: a silly character wastes water in funny ways and learns a lesson.",
            "The style shapes the characters, the voices and the ending.",
          ]}
        />
        <Mistake>Choosing a style because it is easy. Choose the style that suits the theme and your group.</Mistake>
      </>,
    ),
  },
  {
    title: "Use what you know about drama elements",
    content: slide(
      <>
        <Rule>A polished improvisation uses everything you know about the drama elements. What: the events, with a beginning, a middle, an end and a climax. Who: the characters, with voice and body. Where and when: the place and the time. Who to: the audience. Keep the dramatic tension going.</Rule>
        <FactCards
          cards={[
            { title: "What", line1: "events with a beginning, middle and end" },
            { title: "Who", line1: "characters in voice and body" },
            { title: "Where and when", line1: "place and time" },
            { title: "Who to", line1: "the audience" },
          ]}
          aria="What: events with a beginning, middle and end. Who: characters in voice and body. Where and when: place and time. Who to: the audience."
        />
        <Worked
          title="Plan the scene"
          steps={[
            "What: a character leaves a tap running, the water runs out and the climax is a dry village.",
            "Who: the careless character, a friend who worries and a wise grandmother.",
            "Where and when: a village tap at sunrise.",
          ]}
        />
        <Mistake>Leaving out the ending. A scene needs a beginning, a middle and a clear end.</Mistake>
      </>,
    ),
  },
  {
    title: "Technical resources",
    content: slide(
      <>
        <Rule>Technical resources make a performance stronger and can be made from found objects. Properties are the things that actors hold or use. Set pieces are the scenery. Costume pieces show who the character is. Basic lighting shows the time or the mood, and sound adds atmosphere.</Rule>
        <FactCards
          cards={[
            { title: "Properties", line1: "things the actors hold or use" },
            { title: "Set pieces", line1: "scenery on the stage" },
            { title: "Costume pieces", line1: "show who the character is" },
            { title: "Lighting", line1: "time or mood" },
            { title: "Sound", line1: "effects and music" },
          ]}
          aria="Properties: things the actors hold or use. Set pieces: scenery on the stage. Costume pieces: show who the character is. Lighting: time or mood. Sound: effects and music."
        />
        <Worked
          title="Choose resources for the village scene"
          steps={[
            "A bucket and a cardboard tap are properties.",
            "A cloth hung on a rope is a set piece for the village wall, and a scarf makes one actor the grandmother.",
            "Dimmed lights show the evening, and a drum beat marks the climax.",
          ]}
        />
        <Mistake>Using every object you can find. Each resource must have a job in the story.</Mistake>
      </>,
    ),
  },
  {
    title: "Justify your choices",
    content: slide(
      <>
        <Rule>To justify a choice means to give a reason for it. A good reason explains how the resource helps the story, the mood or the audience. You say what you used, why you used it and what effect it has.</Rule>
        <FactCards
          cards={[
            { title: "Choice", line1: "what you used" },
            { title: "Reason", line1: "why you used it" },
            { title: "Effect", line1: "what the audience feels or understands" },
          ]}
          aria="Choice: what you used. Reason: why you used it. Effect: what the audience feels or understands."
        />
        <Worked
          title="Justify a blue cloth"
          steps={[
            "Choice: a blue cloth on the floor.",
            "Reason: it shows the river that the village depends on.",
            "Effect: the audience sees that the river is shrinking when the cloth is folded smaller.",
          ]}
        />
        <Mistake>Saying that you used something because it was nearby. A reason must explain how it helps the performance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which style uses humour and exaggeration?</>,
          <>What is a set piece?</>,
          <>What does justify mean?</>,
          <>Which drama element is about the place of the scene?</>,
        ]}
        answers={[
          <>Comedy.</>,
          <>A piece of scenery on the stage.</>,
          <>Give a reason for a choice.</>,
          <>Where.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which style of drama uses humour and exaggeration?",
    options: ["Tragedy", "Musical", "Comedy", "Puppet show"],
    answer: "Comedy",
    explanation: "Comedy uses humour and exaggeration to make the audience laugh.",
  },
  {
    prompt: "Which style of drama usually ends in loss or sorrow for the main character?",
    options: ["Tragedy", "Comedy", "Musical", "Puppet show"],
    answer: "Tragedy",
    explanation: "A tragedy is a serious drama that ends in loss or sorrow.",
  },
  {
    prompt: "In which style do songs and dance help to tell the story?",
    options: ["Tragedy", "Comedy", "Puppet show", "Musical"],
    answer: "Musical",
    explanation: "A musical tells its story with songs and dance.",
  },
  {
    prompt: "Which style of drama uses puppets to play the characters?",
    options: ["Tragedy", "Puppet show", "Musical", "Comedy"],
    answer: "Puppet show",
    explanation: "In a puppet show the puppets play the characters.",
  },
  {
    prompt: "Which technical resource is held or used by an actor, such as a cardboard phone?",
    options: ["A set piece", "A lighting cue", "A property", "A sound effect"],
    answer: "A property",
    explanation: "A property is an object that an actor holds or uses.",
  },
  {
    prompt: "A painted cardboard tree stands on the stage as scenery. What is it?",
    options: ["A set piece", "A costume piece", "A property", "A sound cue"],
    answer: "A set piece",
    explanation: "A set piece is part of the scenery.",
  },
  {
    prompt: "You tie a scarf around your head to become an old gogo. What is the scarf?",
    options: ["A lighting effect", "A sound effect", "A set piece", "A costume piece"],
    answer: "A costume piece",
    explanation: "A costume piece helps to show who the character is.",
  },
  {
    prompt: "Which basic lighting choice could show night time on stage?",
    options: ["Using the brightest light", "Dimming the lights", "Pointing lights at the audience", "Painting the floor white"],
    answer: "Dimming the lights",
    explanation: "Dim lighting suggests evening or night.",
  },
  {
    prompt: "A drum beat is played when the villain enters. What is the drum beat?",
    options: ["A set piece", "A costume piece", "A sound effect", "A property"],
    answer: "A sound effect",
    explanation: "Sound adds atmosphere and marks important moments.",
  },
  {
    prompt: "Why must you justify your use of a technical resource?",
    options: ["To show how it improves the performance", "To make the show longer", "To use each object in the room", "To hide the actors from view"],
    answer: "To show how it improves the performance",
    explanation: "A justification explains how a resource helps the story or the mood.",
  },
  {
    prompt: "Which statement best justifies a blue cloth on the floor?",
    options: ["It was the nearest cloth", "It was washed yesterday", "It matches the teacher's shirt", "It shows the river in the scene"],
    answer: "It shows the river in the scene",
    explanation: "A good reason links the choice to the story.",
  },
  {
    prompt: "How should you prepare a polished improvisation before you perform it?",
    options: ["Perform without thinking", "Plan, rehearse and improve", "Read word for word from a script", "Copy exactly from a film"],
    answer: "Plan, rehearse and improve",
    explanation: "Polished means planned, rehearsed and improved.",
  },
  {
    prompt: "You plan a comedy about saving water. Which idea fits the style?",
    options: ["A sad ending where everyone loses everything", "A silent scene with no characters", "A silly character who wastes water in funny ways", "A lecture read from a textbook"],
    answer: "A silly character who wastes water in funny ways",
    explanation: "A comedy uses humour and exaggeration.",
  },
  {
    prompt: "A scene is set at a village tap. Which drama element does the village tap show?",
    options: ["Where", "Who", "When", "What"],
    answer: "Where",
    explanation: "Where is the place and space shown through voice and body.",
  },
];

const PolishedImprovisationStyle = () => (
  <CapsSubjectTopic
    title="Polished Improvisation in a Style"
    subtitle="Comedy, tragedy, musical or puppet show, drama elements, technical resources and justifying your choices"
    learnSteps={learnSteps}
    task="gr8-ca-polished-improvisation-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default PolishedImprovisationStyle;
