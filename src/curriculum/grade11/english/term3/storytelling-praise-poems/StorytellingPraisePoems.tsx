import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You are asked to tell a story to the class. Which feature helps you to catch their attention?",
    options: ["A long list of facts", "A silent start", "A written summary", "A strong opening"],
    answer: "A strong opening",
    explanation: "A strong opening catches attention and sets the scene.",
  },
  {
    prompt: "About how long is a storytelling task in an oral assessment?",
    options: ["1 to 2 minutes", "20 to 30 minutes", "45 to 60 minutes", "8 to 10 minutes"],
    answer: "8 to 10 minutes",
    explanation: "Storytelling usually runs for about 8 to 10 minutes.",
  },
  {
    prompt: "Why do storytellers repeat a short line?",
    options: ["It fills time when the story is finished for a user", "It lets the speaker rest his voice in a lab for a task", "It helps the audience remember and join in", "It hides the ending of the story on a system in a program"],
    answer: "It helps the audience remember and join in",
    explanation: "Repetition is a strong feature of oral stories.",
  },
  {
    prompt: "You whisper a line before something frightening happens. Which skill are you using?",
    options: ["Spelling and punctuation at a school", "Volume and pause for suspense", "Writing in the third person for a task", "Reading from your page in a program"],
    answer: "Volume and pause for suspense",
    explanation: "Soft volume and a pause build suspense.",
  },
  {
    prompt: "You use a quick voice for a boy and a slow voice for an old woman. What does this show?",
    options: ["The end of the story", "A change of audience", "Different characters", "A mistake in the telling"],
    answer: "Different characters",
    explanation: "Different voices help the listeners tell characters apart.",
  },
  {
    prompt: "Why should you not read a story word for word to your audience?",
    options: ["You must look at and involve the audience", "The audience cannot read your notes at a school", "The story will end sooner for a task in use", "The rules ban every page in a program at work"],
    answer: "You must look at and involve the audience",
    explanation: "Knowing the story lets you keep eye contact.",
  },
  {
    prompt: "A poem honours a person with strong names and repeated lines. What is it?",
    options: ["A formal letter", "A set of minutes", "A praise poem", "A vote of thanks"],
    answer: "A praise poem",
    explanation: "A praise poem honours its subject with praise names and repetition.",
  },
  {
    prompt: "What is a praise poet often called in isiXhosa tradition?",
    options: ["A chairperson", "An imbongi", "A secretary", "A timekeeper"],
    answer: "An imbongi",
    explanation: "An imbongi is a praise poet who performs aloud.",
  },
  {
    prompt: "A poem calls a champion a river in flood. Which feature is this?",
    options: ["An image that compares her to nature", "A statistic from a report for a task in use", "A formal greeting in a program at work", "A closing thank you on a device in a file"],
    answer: "An image that compares her to nature",
    explanation: "Praise poems use imagery and comparison to show strength.",
  },
  {
    prompt: "Which feature gives a praise poem its rhythm?",
    options: ["Repetition and parallel lines", "Long paragraphs of prose in a program", "A page of footnotes on a device in a file", "A list of page numbers in use for a user"],
    answer: "Repetition and parallel lines",
    explanation: "Repeated and balanced lines give rhythm and emphasis.",
  },
  {
    prompt: "A praise poem names the subject’s village and family. Why?",
    options: ["They record history and place", "They fill the page with dates", "They end the poem at once", "They hide the subject’s name"],
    answer: "They record history and place",
    explanation: "Praise poems often name ancestors, places and deeds.",
  },
  {
    prompt: "A praise poem says the subject is as strong as a mountain. What is this?",
    options: ["A plain fact on a system in a program", "An agenda item at a school on a device", "Exaggeration and imagery", "A form of address for a task"],
    answer: "Exaggeration and imagery",
    explanation: "Exaggeration shows how great the subject is.",
  },
  {
    prompt: "You prepare to perform a praise poem. What is a good first step?",
    options: ["Research the facts and values of the subject", "Copy lines you do not understand for a task in use", "Write a list of minutes in a program at work", "Avoid practising aloud on a device in a file"],
    answer: "Research the facts and values of the subject",
    explanation: "Research gives you true details and respect for the subject.",
  },
  {
    prompt: "Why should you rehearse a praise poem aloud?",
    options: ["To make the poem silent for a task in use", "To avoid looking at the audience in a program", "To check the rhythm, pace and gestures", "To remove all the images on a device in a file"],
    answer: "To check the rhythm, pace and gestures",
    explanation: "Praise poems are meant to be heard, so rehearse aloud.",
  },
];

const StorytellingPraisePoems = () => (
  <CapsSubjectTopic
    title="Storytelling and Praise Poems"
    subtitle="How a story is shaped for listeners, how a praise poem is built, and how voice and body bring both to life"
    learnSteps={learnSteps}
    task="gr11-storytelling-praise-poems-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default StorytellingPraisePoems;
