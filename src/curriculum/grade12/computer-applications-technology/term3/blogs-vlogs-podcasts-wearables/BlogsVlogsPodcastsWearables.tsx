import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a blog?",
    options: ["A kind of cable in a program at work", "A type of screen on a device in a file", "A virus", "A web diary of written posts"],
    answer: "A web diary of written posts",
    explanation: "Posts are shown newest first.",
  },
  {
    prompt: "What is a vlog?",
    options: ["A written web diary", "A kind of cable for a screen", "A type of data file", "A video blog"],
    answer: "A video blog",
    explanation: "It uses video to share posts.",
  },
  {
    prompt: "What is a podcast?",
    options: ["A series of audio episodes", "A series of pictures at work in a lab", "A kind of cable in a file on a system", "A type of screen for a user at a school"],
    answer: "A series of audio episodes",
    explanation: "You can subscribe.",
  },
  {
    prompt: "What is a vodcast?",
    options: ["A series of audio episodes", "A series of video episodes", "A written diary", "A kind of cable"],
    answer: "A series of video episodes",
    explanation: "It is the video form.",
  },
  {
    prompt: "What is a wiki?",
    options: ["A site many people can edit", "A site only one person edits", "A kind of cable", "A virus"],
    answer: "A site many people can edit",
    explanation: "It is built together.",
  },
  {
    prompt: "Why check facts on a wiki?",
    options: ["It is always wrong", "It has no text", "It is printed", "Anyone can edit it"],
    answer: "Anyone can edit it",
    explanation: "Content may be inaccurate.",
  },
  {
    prompt: "Which tool suits showing how to do a task?",
    options: ["A podcast only", "A paper note", "A vlog", "A blog with no pictures"],
    answer: "A vlog",
    explanation: "Video shows steps.",
  },
  {
    prompt: "Which tool suits audio to hear while travelling?",
    options: ["A wiki", "A printed page", "A podcast", "A blog with no sound"],
    answer: "A podcast",
    explanation: "You can listen anywhere.",
  },
  {
    prompt: "Which tool suits building a document together?",
    options: ["A podcast", "A vlog", "A wiki", "A printed page"],
    answer: "A wiki",
    explanation: "Many users edit.",
  },
  {
    prompt: "Which is a personal mobile device?",
    options: ["A server", "A mainframe", "A desktop tower", "A smartphone"],
    answer: "A smartphone",
    explanation: "Phones are personal and mobile.",
  },
  {
    prompt: "What is a wearable?",
    options: ["A kind of cable in a file", "A type of server for a user", "A virus", "A device you wear"],
    answer: "A device you wear",
    explanation: "For example a smartwatch.",
  },
  {
    prompt: "Which is a wearable?",
    options: ["A fitness tracker", "A desktop PC for a user", "A router in a lab for a task", "A printer on a system"],
    answer: "A fitness tracker",
    explanation: "It is worn on the body.",
  },
  {
    prompt: "Which is good wearable etiquette?",
    options: ["Check it in a meeting", "Silence it in a lesson", "Play music in class", "Answer calls in a test"],
    answer: "Silence it in a lesson",
    explanation: "Avoid distracting others.",
  },
  {
    prompt: "Why protect data from a wearable?",
    options: ["It has no data at a school", "It is public for a task in use", "It is a game in a program at work", "Health data is personal"],
    answer: "Health data is personal",
    explanation: "It must be kept private.",
  },
];

const BlogsVlogsPodcastsWearables = () => (
  <CapsSubjectTopic
    title="Blogs, Vlogs, Podcasts, Wikis and Wearables"
    subtitle="Tools for global communication, and personal mobile devices including wearables"
    learnSteps={learnSteps}
    task="gr12-blogs-vlogs-podcasts-wearables-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default BlogsVlogsPodcastsWearables;
