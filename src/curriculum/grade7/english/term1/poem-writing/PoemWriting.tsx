import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What do we call a group of lines in a poem?",
    options: ["A paragraph", "A chapter", "A stanza", "A caption"],
    answer: "A stanza",
    explanation: "A stanza is a group of lines in a poem.",
  },
  {
    prompt: "What is the rhyme scheme of this poem: cat, hat, sun, fun?",
    options: ["AABB", "ABAB", "ABBA", "ABCD"],
    answer: "AABB",
    explanation: "Lines one and two rhyme, and lines three and four rhyme.",
  },
  {
    prompt: "Which sentence contains a simile?",
    options: ["She was a lion in the fight.", "The lion roared at dawn.", "The brave lion slept.", "She was as brave as a lion."],
    answer: "She was as brave as a lion.",
    explanation: "A simile compares two things with as or like.",
  },
  {
    prompt: "Which sentence contains a metaphor?",
    options: ["Time passes as slowly as a snail.", "Time is a thief.", "Time passed quickly.", "The time was ten o'clock."],
    answer: "Time is a thief.",
    explanation: "A metaphor says that one thing is another.",
  },
  {
    prompt: "Which sentence contains personification?",
    options: ["The wind was as cold as ice in winter.", "The wind blew hard.", "The wind whispered through the trees.", "The wind is a river of air."],
    answer: "The wind whispered through the trees.",
    explanation: "Whispered gives a human action to the wind.",
  },
  {
    prompt: "Which phrase is an example of alliteration?",
    options: ["Slippery snakes slide silently", "Silver coins glittering in a jar", "Bees buzzing", "As quiet as a mouse"],
    answer: "Slippery snakes slide silently",
    explanation: "The sound s is repeated at the start of the words.",
  },
  {
    prompt: "Which word is an example of onomatopoeia?",
    options: ["ocean", "water", "surface", "splash"],
    answer: "splash",
    explanation: "Splash sounds like what it describes.",
  },
  {
    prompt: "A poet describes a sound so that you can almost hear it. What is the poet using?",
    options: ["A stanza", "Imagery", "A rhyme scheme", "Free verse"],
    answer: "Imagery",
    explanation: "Imagery appeals to the senses.",
  },
  {
    prompt: "Which pair of words rhyme?",
    options: ["moon and moan", "moon and man", "moon and spoon", "moon and morning"],
    answer: "moon and spoon",
    explanation: "Moon and spoon end with the same sound.",
  },
  {
    prompt: "How many lines are there in a quatrain?",
    options: ["Four", "Two", "Six", "Eight"],
    answer: "Four",
    explanation: "A quatrain is a stanza of four lines.",
  },
  {
    prompt: "What is free verse?",
    options: ["A poem that rhymes in each line and stanza", "A poem with exactly four lines", "A poem that is read aloud", "A poem with no regular rhyme or rhythm"],
    answer: "A poem with no regular rhyme or rhythm",
    explanation: "Free verse does not follow a fixed rhyme scheme or rhythm.",
  },
  {
    prompt: "What do you do when you revise your poem?",
    options: ["Copy it neatly for a display on the wall", "Change words and lines to improve it", "Choose the topic", "Check the page number"],
    answer: "Change words and lines to improve it",
    explanation: "Revising means improving the words and the images.",
  },
  {
    prompt: "Which is the best first step when you write a poem?",
    options: ["Copy a poem that you already know well", "Read it aloud to the class", "Choose a topic and list some words", "Draw a picture for the cover"],
    answer: "Choose a topic and list some words",
    explanation: "Planning comes first in the writing process.",
  },
  {
    prompt: "Which line has the stronger image?",
    options: ["The rain drummed on the tin roof.", "The rain fell on the roof of the house.", "It was raining.", "There was rain."],
    answer: "The rain drummed on the tin roof.",
    explanation: "Drummed adds a sound that the reader can hear.",
  },
];

const PoemWriting = () => (
  <CapsSubjectTopic
    title={"Writing a Poem"}
    subtitle={"Lines, stanzas, rhyme, imagery, figures of speech, free verse and the writing process"}
    learnSteps={learnSteps}
    task={"gr7-poem-writing-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoemWriting;
