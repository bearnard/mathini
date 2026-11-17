import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Download, streaming and live broadcasts",
    content: slide(
      <>
        <Rule>To download is to copy a whole file to your device before or while you use it, and you can then use it offline. To stream is to play the media as it arrives, without keeping a full copy. A live broadcast is streamed as it happens.</Rule>
        <KeyTable
          title="Ways of getting media"
          head={["Method", "Features"]}
          aria="Ways of getting media. Download: Whole file saved on your device; can be used offline. Streaming: Plays as it arrives; needs a steady connection. Live broadcast: Streamed as it happens; cannot be skipped ahead."
          rows={[["Download", "Whole file saved on your device; can be used offline"], ["Streaming", "Plays as it arrives; needs a steady connection"], ["Live broadcast", "Streamed as it happens; cannot be skipped ahead"]]}
        />
        <Worked
          steps={[
            <>A learner downloads a lesson video at school, then watches it at home with no data.</>,
            <>A sports match is streamed live. If the connection is slow, the picture stops to load (buffering).</>,
          ]}
        />
        <Mistake>Believing that streaming saves the file. It plays the data as it arrives, and keeps only a small buffer.</Mistake>
      </>,
    ),
  },
  {
    title: "Compression: lossless and lossy",
    content: slide(
      <>
        <Rule>Compression makes a file smaller so that it is faster to send and uses less storage. Lossless compression removes no information, so the original can be restored exactly. Lossy compression discards some detail that people are unlikely to notice, and makes a much smaller file.</Rule>
        <KeyTable
          title="Two kinds of compression"
          head={["Kind", "Features"]}
          aria="Two kinds of compression. Lossless: Original restored exactly; used for text, programs, ZIP files. Lossy: Some detail lost for good; used for photos, music and video, such as JPEG and MP3. Result: Lossy files are usually smaller than lossless ones."
          rows={[["Lossless", "Original restored exactly; used for text, programs, ZIP files"], ["Lossy", "Some detail lost for good; used for photos, music and video, such as JPEG and MP3"], ["Result", "Lossy files are usually smaller than lossless ones"]]}
        />
        <Worked
          steps={[
            <>A ZIP file of a report can be unzipped to give the exact same report. That is lossless.</>,
            <>A music file saved as MP3 is much smaller than the original, but fine detail has been removed for good.</>,
          ]}
        />
        <Mistake>Compressing a text document with a lossy method. The words must be restored exactly.</Mistake>
      </>,
    ),
  },
  {
    title: "Quality, bandwidth and speed",
    content: slide(
      <>
        <Rule>Better quality needs more data, and more data needs more bandwidth and time. Compression lets media travel faster, but strong compression can lower quality.</Rule>
        <KeyTable
          title="The trade-off"
          head={["Factor", "Effect"]}
          aria="The trade-off. Higher quality: Bigger file; more bandwidth; slower on a poor line. Stronger compression: Smaller file; faster; quality may drop. Slow connection: A streaming service lowers the quality to keep playing. Data costs: Large files use up a data allowance."
          rows={[["Higher quality", "Bigger file; more bandwidth; slower on a poor line"], ["Stronger compression", "Smaller file; faster; quality may drop"], ["Slow connection", "A streaming service lowers the quality to keep playing"], ["Data costs", "Large files use up a data allowance"]]}
        />
        <Worked
          steps={[
            <>A video service shows standard quality on a slow connection and high quality on a fast one.</>,
            <>A learner on a limited data plan chooses lower video quality to save data.</>,
          ]}
        />
        <Mistake>Choosing the highest quality on a poor connection. The video may stop and load again and again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between downloading and streaming?</>,
          <>What is lossless compression?</>,
          <>Give an example of lossy compression.</>,
          <>Why might a video lower its quality?</>,
        ]}
        answers={[
          <>Downloading saves the whole file. Streaming plays it as it arrives.</>,
          <>Compression that removes no information, so the original can be restored.</>,
          <>JPEG photos or MP3 music.</>,
          <>The connection is slow, so less data is sent.</>,
        ]}
      />,
    ),
  },
];
