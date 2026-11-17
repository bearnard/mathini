import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does downloading do?",
    options: ["Plays media with no copy", "Deletes a file from it", "Prints a file on paper", "Copies a file over"],
    answer: "Copies a file over",
    explanation: "A downloaded file can be used offline.",
  },
  {
    prompt: "What does streaming do?",
    options: ["Saves the whole file first", "Plays media as it arrives", "Deletes the media", "Prints the media"],
    answer: "Plays media as it arrives",
    explanation: "Streaming needs a steady connection.",
  },
  {
    prompt: "Which can be used offline?",
    options: ["A live stream", "A broken link", "A downloaded video", "A web page that is closed"],
    answer: "A downloaded video",
    explanation: "The downloaded file is on the device.",
  },
  {
    prompt: "What is a live broadcast?",
    options: ["A file that was saved", "A file that was zipped", "Media streamed live", "A page that was printed"],
    answer: "Media streamed live",
    explanation: "A live broadcast is streamed in real time.",
  },
  {
    prompt: "What is buffering?",
    options: ["A kind of network cable", "A type of media file", "A colour on the screen", "Waiting for data"],
    answer: "Waiting for data",
    explanation: "Playback pauses to load more data.",
  },
  {
    prompt: "What does compression do?",
    options: ["Makes a file much larger", "Makes a file smaller", "Deletes a disk drive", "Prints a file on paper"],
    answer: "Makes a file smaller",
    explanation: "Smaller files are faster to send.",
  },
  {
    prompt: "What is lossless compression?",
    options: ["No information is lost", "Some detail is lost for good", "The file grows", "The file is deleted"],
    answer: "No information is lost",
    explanation: "The original can be restored exactly.",
  },
  {
    prompt: "What is lossy compression?",
    options: ["No detail is lost", "The file is restored exactly", "The file is printed", "Some detail is lost for good"],
    answer: "Some detail is lost for good",
    explanation: "Lossy files are smaller.",
  },
  {
    prompt: "Which is a lossless format?",
    options: ["MP3", "JPEG", "A blurred photo", "ZIP"],
    answer: "ZIP",
    explanation: "A ZIP file restores exactly.",
  },
  {
    prompt: "Which is a lossy format?",
    options: ["ZIP", "MP3", "A text file", "A program file"],
    answer: "MP3",
    explanation: "MP3 removes detail.",
  },
  {
    prompt: "Which should use lossless compression?",
    options: ["A holiday photo", "A music track", "A text document", "A film clip"],
    answer: "A text document",
    explanation: "Words must be restored exactly.",
  },
  {
    prompt: "What does higher quality need?",
    options: ["Less data than before", "No bandwidth at all", "More data and bandwidth", "A smaller kind of screen"],
    answer: "More data and bandwidth",
    explanation: "Higher quality files are bigger.",
  },
  {
    prompt: "Why does a streaming service lower the quality on a slow line?",
    options: ["To keep the video playing", "To use more of the data", "To stop the show for good", "To delete it from a disk"],
    answer: "To keep the video playing",
    explanation: "Less data is sent.",
  },
  {
    prompt: "Why compress a file before e-mailing it?",
    options: ["It is deleted from disk", "It is made much longer", "It is made much louder", "It is faster to send"],
    answer: "It is faster to send",
    explanation: "Compression saves time and data.",
  },
];

const StreamingCompression = () => (
  <CapsSubjectTopic
    title="Streaming, Downloading and Compression"
    subtitle="Download versus streaming, live broadcasts, lossless and lossy compression, and quality against bandwidth"
    learnSteps={learnSteps}
    task="gr11-streaming-compression-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default StreamingCompression;
