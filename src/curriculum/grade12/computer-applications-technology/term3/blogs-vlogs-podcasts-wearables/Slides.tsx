import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Blogs, vlogs, podcasts and wikis",
    content: slide(
      <>
        <Rule>Web tools let people communicate with a global audience. A blog is a web diary in writing. A vlog is a video blog. A podcast is a series of audio recordings, and a vodcast is a series of video recordings, that you can subscribe to. A wiki is a site that many people can edit.</Rule>
        <KeyTable
          title="Web tools"
          head={["Tool", "Description"]}
          aria="Web tools. Blog: Regular written posts, newest first. Vlog: A video blog. Podcast: A series of audio episodes you can subscribe to. Vodcast: A series of video episodes. Wiki: A site that many people can edit together. Social network: A site for connecting and sharing."
          rows={[["Blog", "Regular written posts, newest first"], ["Vlog", "A video blog"], ["Podcast", "A series of audio episodes you can subscribe to"], ["Vodcast", "A series of video episodes"], ["Wiki", "A site that many people can edit together"], ["Social network", "A site for connecting and sharing"]]}
        />
        <Worked
          steps={[
            <>A learner writes a blog about her school's recycling project. Readers can comment.</>,
            <>A wiki lets a class build a study guide together, with each learner adding a page.</>,
          ]}
        />
        <Mistake>Treating a wiki as always correct. Anyone can edit it, so check the facts.</Mistake>
      </>,
    ),
  },
  {
    title: "Choosing the right tool",
    content: slide(
      <>
        <Rule>Pick the tool that fits the audience and the message. Think about who reads or watches, how formal it should be, and whether you need comments or sharing.</Rule>
        <KeyTable
          title="Which tool"
          head={["Need", "Good choice"]}
          aria="Which tool. Written updates for readers: Blog. Show how to do something: Vlog or video. Audio you can listen to while travelling: Podcast. Build a document with others: Wiki. Reach friends and groups quickly: Social network."
          rows={[["Written updates for readers", "Blog"], ["Show how to do something", "Vlog or video"], ["Audio you can listen to while travelling", "Podcast"], ["Build a document with others", "Wiki"], ["Reach friends and groups quickly", "Social network"]]}
        />
        <Worked
          steps={[
            <>A cooking club shows a recipe step by step, so it uses a vlog.</>,
            <>A school choir sends weekly audio notes as a podcast, so members can listen on the bus.</>,
          ]}
        />
        <Mistake>Using a social network for a formal notice. A school website or e-mail is more suitable.</Mistake>
      </>,
    ),
  },
  {
    title: "Personal mobile devices and wearables",
    content: slide(
      <>
        <Rule>Personal mobile devices include smartphones, tablets and wearables. A wearable is a device you wear, such as a smartwatch or fitness tracker. Wearables collect data about the body and surroundings, and they need etiquette and care with privacy.</Rule>
        <KeyTable
          title="Devices and wearables"
          head={["Device", "Use"]}
          aria="Devices and wearables. Smartphone: Calls, messages, apps and the Internet. Tablet: Larger touch screen for reading and work. Smartwatch: Time, messages and health data on the wrist. Fitness tracker: Counts steps and heart rate. Wearable etiquette: Silence it in meetings and lessons. Privacy: Health data is personal; protect it."
          rows={[["Smartphone", "Calls, messages, apps and the Internet"], ["Tablet", "Larger touch screen for reading and work"], ["Smartwatch", "Time, messages and health data on the wrist"], ["Fitness tracker", "Counts steps and heart rate"], ["Wearable etiquette", "Silence it in meetings and lessons"], ["Privacy", "Health data is personal; protect it"]]}
        />
        <Worked
          steps={[
            <>A runner uses a fitness tracker to see her heart rate and steps, and syncs the data to a phone.</>,
            <>Health data from a wearable is personal information, so it should be shared only with care.</>,
          ]}
        />
        <Mistake>Checking a smartwatch during a lesson or meeting. It is rude and distracting.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a vlog?</>,
          <>What is a podcast?</>,
          <>What is a wearable?</>,
          <>Why check facts on a wiki?</>,
        ]}
        answers={[
          <>A video blog.</>,
          <>A series of audio episodes that you can subscribe to.</>,
          <>A device that you wear, such as a smartwatch.</>,
          <>Anyone can edit it.</>,
        ]}
      />,
    ),
  },
];
