import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// All terms and meanings follow the Grade 8 drama plan; no play, poem or praise poem is quoted (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Forms of media",
    content: slide(
      <>
        <Rule>Media are the ways in which stories and information reach many people. Film shows moving pictures with sound on a screen. Television brings programmes into the home. Radio uses sound only. A documentary shows real people and real events. The internet lets you watch, listen and read when you choose.</Rule>
        <FactCards
          cards={[
            { title: "Film", line1: "moving pictures and sound" },
            { title: "Television", line1: "programmes at home" },
            { title: "Radio", line1: "sound only" },
            { title: "Documentary", line1: "real people and events" },
            { title: "Internet", line1: "watch or listen when you choose" },
          ]}
          aria="Film: moving pictures and sound. Television: programmes at home. Radio: sound only. Documentary: real people and events. Internet: watch or listen when you choose."
        />
        <Worked
          title="Match the medium"
          steps={[
            "A play that you only hear, with voices and sound effects: radio.",
            "A programme about real farmers and their work: a documentary.",
            "A story watched on a big screen in a cinema: film.",
          ]}
        />
        <Mistake>Thinking that all media are television. Radio uses sound only and the internet can carry film, radio and writing.</Mistake>
      </>,
    ),
  },
  {
    title: "Drama elements in the media",
    content: slide(
      <>
        <Rule>Media dramas use the same drama elements as the stage. What: the story, with a beginning, middle and end. Who: the characters. Where and when: the place and the time. There is also dramatic tension, which keeps the audience watching or listening.</Rule>
        <FactCards
          cards={[
            { title: "What", line1: "the story and its events" },
            { title: "Who", line1: "the characters" },
            { title: "Where and when", line1: "place and time" },
            { title: "Tension", line1: "keeps the audience hooked" },
          ]}
          aria="What: the story and its events. Who: the characters. Where and when: place and time. Tension: keeps the audience hooked."
        />
        <Worked
          title="Find the elements in a TV drama"
          steps={[
            "What: two friends try to save a school garden.",
            "Who: the two friends and a caretaker. Where and when: the school at sunset.",
            "Tension: a storm is coming and the seedlings are not covered.",
          ]}
        />
        <Mistake>Naming only the story. Look for the characters, the place, the time and the tension as well.</Mistake>
      </>,
    ),
  },
  {
    title: "Radio and film compared",
    content: slide(
      <>
        <Rule>A radio drama has only sound, so the audience cannot see the action. It uses voices, sound effects and music to help the audience picture the scene. A film shows pictures, so it uses a camera, acting and editing. Both tell stories with characters and tension, but they use different tools.</Rule>
        <FactCards
          cards={[
            { title: "Radio drama", line1: "voices, sound effects and music" },
            { title: "Film", line1: "camera, acting and editing" },
          ]}
          aria="Radio drama: voices, sound effects and music. Film: camera, acting and editing."
        />
        <Worked
          title="Show a storm in two media"
          steps={[
            "On radio you play the sound of wind and thunder, and a character says that the roof is shaking.",
            "On film the camera shows the dark sky, the bending trees and the frightened faces in close-up, with tense music.",
            "Both give the audience the feeling of a storm, with different tools.",
          ]}
        />
        <Mistake>Using a picture on the radio. Without pictures, the sounds and voices must do the work.</Mistake>
      </>,
    ),
  },
  {
    title: "Responding to a media drama",
    content: slide(
      <>
        <Rule>To respond to a media drama, use drama words. Say what you saw or heard, name the drama element, and give a reason for your opinion. For example, you can talk about a character, the tension or the way sound is used.</Rule>
        <FactCards
          cards={[
            { title: "Say", line1: "what you saw or heard" },
            { title: "Name", line1: "the drama element" },
            { title: "Reason", line1: "why you think so" },
          ]}
          aria="Say: what you saw or heard. Name: the drama element. Reason: why you think so."
        />
        <Worked
          title="Write a response"
          steps={[
            "What you heard: the radio play used drum beats before each surprise.",
            "The element: the sound built tension.",
            "Your reason: the beats made you expect something and kept you listening.",
          ]}
        />
        <Mistake>Saying only that it was boring or good. Give a reason that uses a drama element.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which medium uses sound only?</>,
          <>What is a documentary?</>,
          <>Why does a radio play use sound effects?</>,
          <>What three parts does a response need?</>,
        ]}
        answers={[
          <>Radio.</>,
          <>A programme about real people and events.</>,
          <>Because the audience cannot see the action.</>,
          <>What you saw or heard, the element and a reason.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which medium uses sound only, with no pictures?",
    options: ["Television", "Film", "Radio", "A video on the internet"],
    answer: "Radio",
    explanation: "Radio gives the audience sound only.",
  },
  {
    prompt: "Which form of media shows real people and real events?",
    options: ["A documentary", "A cartoon", "A radio jingle", "A game show"],
    answer: "A documentary",
    explanation: "A documentary is about real life.",
  },
  {
    prompt: "Which of these is a form of media?",
    options: ["A stage curtain", "A drum", "A costume", "Television"],
    answer: "Television",
    explanation: "Television is a form of media that brings programmes to a home.",
  },
  {
    prompt: "In a radio play, how does the audience know that a door has opened?",
    options: ["They see a set piece", "They hear a sound effect", "They read a caption", "They watch a puppet"],
    answer: "They hear a sound effect",
    explanation: "Radio uses sound effects in place of pictures.",
  },
  {
    prompt: "The beginning, middle and end of a film story make up its...",
    options: ["Costume", "Set piece", "Structure", "Audience"],
    answer: "Structure",
    explanation: "Structure is how the events of the story are arranged.",
  },
  {
    prompt: "Which drama element are you analysing when you ask who the people in a TV drama are?",
    options: ["Characters", "Place", "Time", "Audience"],
    answer: "Characters",
    explanation: "Who is about the characters.",
  },
  {
    prompt: "A TV scene shows a village at night. Which drama element does night show?",
    options: ["Who", "What", "Who to", "When"],
    answer: "When",
    explanation: "When is the time shown in the scene.",
  },
  {
    prompt: "Which medium can you watch or listen to at any time on a phone or computer?",
    options: ["A live stage show", "The internet", "A school assembly", "A town hall meeting"],
    answer: "The internet",
    explanation: "The internet lets you choose when to watch or listen.",
  },
  {
    prompt: "What does a radio drama use to help the audience picture a scene?",
    options: ["A camera and editing", "Bright colours and lights", "Sound effects and music", "Close-ups and zooms"],
    answer: "Sound effects and music",
    explanation: "Sound has to create the pictures in the audience's mind.",
  },
  {
    prompt: "How can a film show that a character is scared?",
    options: ["A close-up with tense music", "A long list of rules on screen", "A black screen that lasts an hour", "A weather report read aloud"],
    answer: "A close-up with tense music",
    explanation: "Film uses the camera and sound to show feelings.",
  },
  {
    prompt: "When you give an opinion about a TV drama, what should you add?",
    options: ["The name of your school", "The price of the television", "Your home phone number", "A reason with an example"],
    answer: "A reason with an example",
    explanation: "A reason with an example makes your response useful.",
  },
  {
    prompt: "Which question helps you to reflect on a film drama?",
    options: ["How tall is the cinema door?", "How did the music build tension?", "What was the name of the shop?", "Who sold the popcorn?"],
    answer: "How did the music build tension?",
    explanation: "A reflection question looks at drama elements such as tension.",
  },
  {
    prompt: "Which pair are both forms of media?",
    options: ["Costume and set", "Poem and drum", "Film and radio", "Stage and curtain"],
    answer: "Film and radio",
    explanation: "Film and radio are both ways of reaching an audience.",
  },
  {
    prompt: "What do media dramas share with stage drama?",
    options: ["Characters, a story and tension", "A live audience in the room", "The same stage and curtain", "No story or characters"],
    answer: "Characters, a story and tension",
    explanation: "Media dramas use the same drama elements.",
  },
];

const DramaInTheMedia = () => (
  <CapsSubjectTopic
    title="Drama in the Media"
    subtitle="Film, television, radio, documentaries and the internet, drama elements in the media and responding to a media drama"
    learnSteps={learnSteps}
    task="gr8-ca-media-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default DramaInTheMedia;
