import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The Internet of Things",
    content: slide(
      <>
        <Rule>The Internet of Things (IoT) is a network of everyday devices that have sensors and software and connect to the Internet. They collect data, send it, and can be controlled remotely. Other technologies help: big data stores the data collected over time, and AI makes decisions from it.</Rule>
        <KeyTable
          title="IoT"
          head={["Item", "Example"]}
          aria="IoT. Smart home: Lights and heating you control by app. Health care: A wearable fitness tracker or medical device. Transport: A connected vehicle fleet sends its position. Supporting technologies: Big data (data over time) and AI (decisions)."
          rows={[["Smart home", "Lights and heating you control by app"], ["Health care", "A wearable fitness tracker or medical device"], ["Transport", "A connected vehicle fleet sends its position"], ["Supporting technologies", "Big data (data over time) and AI (decisions)"]]}
        />
        <Worked
          steps={[
            <>A smart thermostat senses the temperature and switches the heater. The owner can change it from work.</>,
            <>Each connected device collects data, so IoT raises questions of privacy and security.</>,
          ]}
        />
        <Mistake>Thinking that every device with a screen is an IoT device. It must connect and send or receive data.</Mistake>
      </>,
    ),
  },
  {
    title: "The Fourth Industrial Revolution, VR and AR",
    content: slide(
      <>
        <Rule>The fourth industrial revolution (4IR) is a time of change in which digital technologies such as IoT, AI, robotics and big data join the physical and digital worlds. Virtual reality (VR) puts you inside a computer-made world. Augmented reality (AR) adds digital information to the real view.</Rule>
        <KeyTable
          title="4IR, VR and AR"
          head={["Term", "Meaning"]}
          aria="4IR, VR and AR. 4IR: Digital technologies change how people work and live. VR: A fully computer-made world seen in a headset. AR: Digital information shown over the real world. Real-world uses: Training, games, shopping previews, maps."
          rows={[["4IR", "Digital technologies change how people work and live"], ["VR", "A fully computer-made world seen in a headset"], ["AR", "Digital information shown over the real world"], ["Real-world uses", "Training, games, shopping previews, maps"]]}
        />
        <Worked
          steps={[
            <>A trainee pilot practises in a VR simulator. A phone app that shows how a sofa looks in your room uses AR.</>,
            <>In 4IR, factories use sensors and robots, and need workers with new skills.</>,
          ]}
        />
        <Mistake>Confusing VR and AR. In AR you still see the real world.</Mistake>
      </>,
    ),
  },
  {
    title: "Fake news and how to check",
    content: slide(
      <>
        <Rule>Fake news is false information made to look true. It spreads fast online. Bad practice is to share without checking. Good practice is to check the source, look for other reports, and use apps and sites that verify content.</Rule>
        <KeyTable
          title="Checking information"
          head={["Step", "How"]}
          aria="Checking information. Check the source: Is it a known, reliable site?. Check the author and date: Is it recent and signed?. Look for other reports: Do other reliable sources agree?. Look at the pictures: Search for the original picture. Use a verification site: Fact-checking sites and apps."
          rows={[["Check the source", "Is it a known, reliable site?"], ["Check the author and date", "Is it recent and signed?"], ["Look for other reports", "Do other reliable sources agree?"], ["Look at the pictures", "Search for the original picture"], ["Use a verification site", "Fact-checking sites and apps"]]}
        />
        <Worked
          steps={[
            <>A shocking story appears with no author. Searching the story finds no reliable site that reports it, so it is probably fake.</>,
            <>A fact-checking site shows that a viral photo is from another year.</>,
          ]}
        />
        <Mistake>Sharing a story because it is exciting. Check it first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the Internet of Things?</>,
          <>What is the difference between VR and AR?</>,
          <>What is fake news?</>,
          <>Give one way to check a story.</>,
        ]}
        answers={[
          <>Everyday devices with sensors that connect to the Internet.</>,
          <>VR is a fully virtual world. AR adds information to the real view.</>,
          <>False information made to look true.</>,
          <>Check the source, or look for other reliable reports.</>,
        ]}
      />,
    ),
  },
];
