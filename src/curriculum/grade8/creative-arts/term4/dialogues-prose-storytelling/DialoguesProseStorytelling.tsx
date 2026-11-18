import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// All terms and meanings follow the Grade 8 drama plan; no play, poem or praise poem is quoted (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Dialogue",
    content: slide(
      <>
        <Rule>A dialogue is a scene between characters. To perform it well, first say what it means in your own words. Then show the character through your voice (tone, rhythm and pitch) and your body (posture and gesture). Use the space well, connect with your character's feelings and stay in character when you are not speaking.</Rule>
        <FactCards
          cards={[
            { title: "Voice", line1: "tone, rhythm and pitch of the character" },
            { title: "Body", line1: "posture and gesture" },
            { title: "Space", line1: "where you stand and move" },
            { title: "Stay in character", line1: "react even when silent" },
          ]}
          aria="Voice: tone, rhythm and pitch of the character. Body: posture and gesture. Space: where you stand and move. Stay in character: react even when silent."
        />
        <Worked
          title="Perform a short dialogue"
          steps={[
            "Decide who the character is: an anxious learner waiting for results.",
            "Use a quick, high voice and a tense posture.",
            "When the other character speaks, keep reacting with your face and body.",
          ]}
        />
        <Mistake>Switching off when you are not speaking. Your character is still part of the scene.</Mistake>
      </>,
    ),
  },
  {
    title: "Status and relationships",
    content: slide(
      <>
        <Rule>Status is how important or powerful a character seems compared with the others. High status shows in a tall posture, a steady voice and taking up space. Low status shows in a smaller posture, a softer voice and looking down. In a dialogue the relationship between characters can grow and change.</Rule>
        <FactCards
          cards={[
            { title: "High status", line1: "tall, steady voice, takes space" },
            { title: "Low status", line1: "smaller, softer voice, looks down" },
            { title: "Relationship", line1: "can grow and change in the scene" },
          ]}
          aria="High status: tall, steady voice, takes space. Low status: smaller, softer voice, looks down. Relationship: can grow and change in the scene."
        />
        <Worked
          title="Play with status"
          steps={[
            "Say the line Come here in a high-status way: stand tall and speak slowly.",
            "Say the same line in a low-status way: step back and speak softly.",
            "The words are the same, but the voice and body change the meaning.",
          ]}
        />
        <Mistake>Thinking that status means being loud. A high-status character can be quiet and still.</Mistake>
      </>,
    ),
  },
  {
    title: "Dramatised prose",
    content: slide(
      <>
        <Rule>Dramatised prose is a story or text that you perform as drama. Choose a short story by a South African author that reflects South African cultures and places. You can perform it alone or in a group. You move between the narrator, who tells the story, and the characters, who speak in their own voices.</Rule>
        <FactCards
          cards={[
            { title: "Narrator", line1: "tells the story" },
            { title: "Characters", line1: "speak in their own voices" },
            { title: "Change of role", line1: "voice and body show the switch" },
          ]}
          aria="Narrator: tells the story. Characters: speak in their own voices. Change of role: voice and body show the switch."
        />
        <Worked
          title="Dramatise a paragraph"
          steps={[
            "Read the paragraph and say in your own words what happens.",
            "Mark the narrator's sentences and the characters' lines.",
            "Change your voice and posture when you move from narrator to character.",
          ]}
        />
        <Mistake>Reading the story out in one voice. Show the difference between the narrator and each character.</Mistake>
      </>,
    ),
  },
  {
    title: "Indigenous storytelling",
    content: slide(
      <>
        <Rule>Indigenous storytelling includes legends, fairy tales and the ntsomi, a traditional folktale. The storyteller uses narrative technique that suits the story. Songs, sound effects and idiophones such as shakers add to the telling. The storyteller changes from character to narrator and uses voice and movement to create mood.</Rule>
        <FactCards
          cards={[
            { title: "Narrative technique", line1: "suits the kind of story" },
            { title: "Songs", line1: "invite the audience to join in" },
            { title: "Idiophones", line1: "shakers and rattles add rhythm" },
            { title: "Sound effects", line1: "rain, wind or footsteps" },
          ]}
          aria="Narrative technique: suits the kind of story. Songs: invite the audience to join in. Idiophones: shakers and rattles add rhythm. Sound effects: rain, wind or footsteps."
        />
        <Worked
          title="Tell a story of a clever hare"
          steps={[
            "Choose the voice for the hare: quick and playful.",
            "Use shakers for the sound of rain and a short song that the audience repeats.",
            "Move from the hare back to the narrator by changing your voice and standing still.",
          ]}
        />
        <Mistake>Reading the story from a page. Storytelling is told aloud and shared with the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How do you show a character in a dialogue?</>,
          <>What does a low-status character usually do?</>,
          <>Who tells the story in dramatised prose?</>,
          <>What is a ntsomi?</>,
        ]}
        answers={[
          <>Through your voice and your body.</>,
          <>Make themselves smaller and speak softly.</>,
          <>The narrator.</>,
          <>A traditional folktale.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "In a dialogue, what does it mean to stay in character when you are not speaking?",
    options: ["You relax and chat to a friend", "You look at the audience and smile", "You keep reacting as your character would", "You leave the stage"],
    answer: "You keep reacting as your character would",
    explanation: "Your character is part of the scene even when silent.",
  },
  {
    prompt: "Which of these show a character's status on stage?",
    options: ["Posture and gesture", "The page number of the script", "The colour of the curtain", "The brand of your shoes"],
    answer: "Posture and gesture",
    explanation: "Body language such as posture and gesture shows status.",
  },
  {
    prompt: "A character with high status stands tall. What does a low-status character usually do?",
    options: ["Stand tall and look down on others", "Speak loudly and give orders", "Take the middle of the stage", "Make themselves smaller and look down"],
    answer: "Make themselves smaller and look down",
    explanation: "Low status shows in a smaller posture and a softer voice.",
  },
  {
    prompt: "What is dramatised prose?",
    options: ["A song sung by a choir", "A story that is performed as drama", "A poem without any words", "A speech given by a teacher"],
    answer: "A story that is performed as drama",
    explanation: "Prose is ordinary written text, and dramatising it means performing it.",
  },
  {
    prompt: "Which text could you dramatise for this unit?",
    options: ["A bus timetable for a city", "A shopping list for a week", "A South African short story", "A phone bill from last month"],
    answer: "A South African short story",
    explanation: "Dramatised prose comes from South African authors and contexts.",
  },
  {
    prompt: "What is a ntsomi?",
    options: ["A traditional folktale told aloud", "A kind of drum used in dances", "A type of costume for a chief", "A praise name for a leader"],
    answer: "A traditional folktale told aloud",
    explanation: "A ntsomi is a traditional story that is told aloud, and it is one form of indigenous storytelling.",
  },
  {
    prompt: "Which instrument could add rhythm to an indigenous story?",
    options: ["A camera", "A microphone stand", "A projector", "A shaker"],
    answer: "A shaker",
    explanation: "A shaker is an idiophone that adds rhythm and sound effects.",
  },
  {
    prompt: "What is a narrator?",
    options: ["The person who paints the set", "The person who tells the story", "The person who sells tickets", "The person who plays the drum"],
    answer: "The person who tells the story",
    explanation: "The narrator tells the story to the audience.",
  },
  {
    prompt: "When a storyteller changes from a character to the narrator, what changes?",
    options: ["The whole story is erased", "The audience leaves the room", "Your voice and your posture", "The set is rebuilt on stage"],
    answer: "Your voice and your posture",
    explanation: "Voice and body show who is speaking.",
  },
  {
    prompt: "Which technique helps an indigenous storyteller to involve the audience?",
    options: ["Songs and call and response", "Silent reading", "Turning the lights off", "Reading from a book"],
    answer: "Songs and call and response",
    explanation: "Songs and call and response invite the audience to join in.",
  },
  {
    prompt: "Which voice tool describes how loudly and how far your voice carries?",
    options: ["Pitch", "Pace", "Tone", "Projection"],
    answer: "Projection",
    explanation: "Projection is how far your voice carries so that the audience can hear.",
  },
  {
    prompt: "What does pace mean when you read a dialogue?",
    options: ["How high or low you speak", "How fast or slow you speak", "How clearly you whisper", "How loudly you shout"],
    answer: "How fast or slow you speak",
    explanation: "Pace is the speed of your speech.",
  },
  {
    prompt: "You make the sound of rain in a story with shakers. What is this?",
    options: ["A costume", "A character", "A sound effect", "A dialogue"],
    answer: "A sound effect",
    explanation: "A sound effect adds atmosphere to the telling.",
  },
  {
    prompt: "What does text analysis help you to do?",
    options: ["Understand what a text means", "Choose the ticket price", "Paint the backdrop", "Count the audience"],
    answer: "Understand what a text means",
    explanation: "Text analysis starts every interpretation.",
  },
];

const DialoguesProseStorytelling = () => (
  <CapsSubjectTopic
    title="Dialogues, Dramatised Prose and Indigenous Storytelling"
    subtitle="Character in voice and body, status, narrator and characters, the ntsomi, songs and sound effects"
    learnSteps={learnSteps}
    task="gr8-ca-dialogue-storytelling-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default DialoguesProseStorytelling;
