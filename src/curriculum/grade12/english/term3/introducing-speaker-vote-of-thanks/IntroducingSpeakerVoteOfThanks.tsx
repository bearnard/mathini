import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the purpose of introducing a speaker?",
    options: ["To give a long speech of your own", "To prepare the audience to listen", "To argue with the speaker", "To replace the main speech"],
    answer: "To prepare the audience to listen",
    explanation: "An introduction welcomes the speaker and prepares the audience.",
  },
  {
    prompt: "Where do you announce the speaker's name?",
    options: ["At the start of the introduction", "In the middle of the introduction", "At the end of the introduction", "In the vote of thanks only"],
    answer: "At the end of the introduction",
    explanation: "The name comes last, and it is said clearly.",
  },
  {
    prompt: "What kind of language suits an introduction?",
    options: ["Slang", "Formal language", "Jokes", "Text-message language"],
    answer: "Formal language",
    explanation: "Formal language welcomes and introduces the speaker.",
  },
  {
    prompt: "What tone suits an introduction?",
    options: ["Funny, casual and playful", "Slangy, loose and chatty", "Formal, brief, polite", "Long, rambling and loud"],
    answer: "Formal, brief, polite",
    explanation: "The CAPS says to use formal language and not to try to be funny.",
  },
  {
    prompt: "Why should you ask the speaker what to use from their CV?",
    options: ["To avoid the research work", "To read the entire CV out loud", "To learn the speaker's exact age", "To use what the speaker allows"],
    answer: "To use what the speaker allows",
    explanation: "The speaker may prefer some details to be left out.",
  },
  {
    prompt: "Which is relevant background in an introduction?",
    options: ["The speaker's home address", "The speaker's cellphone number", "Qualifications and career", "The speaker's shoe size"],
    answer: "Qualifications and career",
    explanation: "Background such as school career, qualifications and employment is relevant.",
  },
  {
    prompt: "Why should an introduction link to the theme?",
    options: ["To fill up the available time", "To show why the speaker came", "To list the speaker's prizes now", "To avoid naming the speaker yet"],
    answer: "To show why the speaker came",
    explanation: "The link tells the audience why this speaker is here.",
  },
  {
    prompt: "Why should an introduction be brief?",
    options: ["The speaker dislikes introductions", "Long introductions are against the law", "The audience came to hear the speaker", "Teachers prefer silence"],
    answer: "The audience came to hear the speaker",
    explanation: "The audience wants to hear the speaker, not the introducer.",
  },
  {
    prompt: "When is a vote of thanks given?",
    options: ["After the speech has ended", "Before the speaker arrives", "In the middle of the speech", "Instead of the whole speech"],
    answer: "After the speech has ended",
    explanation: "A vote of thanks follows the address.",
  },
  {
    prompt: "What should you do while the speaker speaks if you give the vote of thanks?",
    options: ["Listen and note the highlights", "Write the vote of thanks beforehand", "Look at your phone", "Plan the next function"],
    answer: "Listen and note the highlights",
    explanation: "A good vote of thanks refers to what was really said.",
  },
  {
    prompt: "What should a vote of thanks include?",
    options: ["Highlights and a clear thank-you", "A full repeat of the speech", "A list of the speaker's mistakes", "A new speech on a new topic"],
    answer: "Highlights and a clear thank-you",
    explanation: "It thanks the speaker for strong points in the address.",
  },
  {
    prompt: "How long is a vote of thanks suggested to be?",
    options: ["20 to 30 minutes", "4 to 5 minutes", "10 to 15 minutes", "6 to 8 minutes"],
    answer: "4 to 5 minutes",
    explanation: "CAPS suggests 4 to 5 minutes for this task.",
  },
  {
    prompt: "Which of these is a sentence for a vote of thanks?",
    options: ["\"We learnt that patience matters.\"", "\"I have a few complaints for you.\"", "\"Let me tell you about my own life.\"", "\"My own speech comes next today.\""],
    answer: "\"We learnt that patience matters.\"",
    explanation: "A highlight from the speech shows that the speaker was heard.",
  },
  {
    prompt: "In which term is the introducing the speaker and vote of thanks task set?",
    options: ["Term 1", "Term 3", "Term 2", "Term 4"],
    answer: "Term 3",
    explanation: "Task 9 in Term 3 is the prepared speech introducing a speaker or a vote of thanks.",
  },
];

const IntroducingSpeakerVoteOfThanks = () => (
  <CapsSubjectTopic
    title="Introducing a Speaker and a Vote of Thanks"
    subtitle="Researching and introducing a speaker, a model introduction, and offering a vote of thanks"
    learnSteps={learnSteps}
    task="gr12-introducing-speaker-vote-of-thanks-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default IntroducingSpeakerVoteOfThanks;
