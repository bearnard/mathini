import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Cloud computing and cloud applications",
    content: slide(
      <>
        <Rule>Cloud computing means using servers, storage and software over the Internet, which a provider owns and looks after. A cloud application runs in a browser and keeps its files online, so they can be reached from any device.</Rule>
        <KeyTable
          title="Cloud computing"
          head={["Item", "Description"]}
          aria="Cloud computing. Cloud storage: Files kept on a provider's servers. Cloud application: Software used in a browser, such as an online word processor. Advantages: Reach files anywhere; share easily; the provider backs up and updates. Disadvantages: Needs the Internet; data is kept by a provider; costs may rise."
          rows={[["Cloud storage", "Files kept on a provider's servers"], ["Cloud application", "Software used in a browser, such as an online word processor"], ["Advantages", "Reach files anywhere; share easily; the provider backs up and updates"], ["Disadvantages", "Needs the Internet; data is kept by a provider; costs may rise"]]}
        />
        <Worked
          steps={[
            <>A group writes a report in a cloud document. Each member edits it from home, and everyone sees the latest version.</>,
            <>If the Internet is down, files that are only online cannot be opened.</>,
          ]}
        />
        <Mistake>Thinking that the cloud has no hardware. Your files are on real servers owned by the provider.</Mistake>
      </>,
    ),
  },
  {
    title: "Grid computing",
    content: slide(
      <>
        <Rule>Grid computing joins many separate computers, often far apart, so that they work together on one large task. Each computer does a small part and the results are combined. It uses spare computing power that would otherwise be wasted.</Rule>
        <KeyTable
          title="Grid and cloud compared"
          head={["Idea", "Meaning"]}
          aria="Grid and cloud compared. Grid computing: Many computers share one big job. Use: Large calculations, such as scientific research. Cloud computing: Rent computing services as you need them. Main difference: A grid pools power for one task; the cloud sells services to many users."
          rows={[["Grid computing", "Many computers share one big job"], ["Use", "Large calculations, such as scientific research"], ["Cloud computing", "Rent computing services as you need them"], ["Main difference", "A grid pools power for one task; the cloud sells services to many users"]]}
        />
        <Worked
          steps={[
            <>A research project splits a huge calculation into small pieces. Thousands of home computers each solve a piece while they are idle.</>,
            <>A school uses the cloud for e-mail and documents. That is a service, not a grid.</>,
          ]}
        />
        <Mistake>Mixing up grid and cloud. Grid is many computers on one task. Cloud is a service you use.</Mistake>
      </>,
    ),
  },
  {
    title: "Streaming and downloading, and sharing permissions",
    content: slide(
      <>
        <Rule>To download is to copy a whole file to your device. To stream is to play media as it arrives without keeping a full copy. When you share a cloud file, permissions decide who may view, comment or edit.</Rule>
        <KeyTable
          title="Streaming, downloading and permissions"
          head={["Item", "Meaning"]}
          aria="Streaming, downloading and permissions. Download: Whole file saved; can be used offline. Streaming: Plays as it arrives; needs a steady connection. View only: The person can read but not change the file. Edit: The person can change the file. Link sharing: Anyone with the link can open it, so share with care."
          rows={[["Download", "Whole file saved; can be used offline"], ["Streaming", "Plays as it arrives; needs a steady connection"], ["View only", "The person can read but not change the file"], ["Edit", "The person can change the file"], ["Link sharing", "Anyone with the link can open it, so share with care"]]}
        />
        <Worked
          steps={[
            <>A learner downloads a lesson video to watch with no data, and streams a live broadcast when connected.</>,
            <>A teacher shares a document as view only, so learners cannot change the original.</>,
          ]}
        />
        <Mistake>Giving edit rights to everyone. Give only the rights a person needs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a cloud application?</>,
          <>What is grid computing?</>,
          <>What is the difference between streaming and downloading?</>,
          <>What does view-only permission allow?</>,
        ]}
        answers={[
          <>Software used in a browser that keeps its files online.</>,
          <>Many computers working together on one large task.</>,
          <>Streaming plays as it arrives. Downloading saves the whole file.</>,
          <>Reading the file but not changing it.</>,
        ]}
      />,
    ),
  },
];
