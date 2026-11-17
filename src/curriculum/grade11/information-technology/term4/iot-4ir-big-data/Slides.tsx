import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The Internet of Things",
    content: slide(
      <>
        <Rule>The Internet of Things (IoT) is a network of everyday devices that have sensors and software and are connected to the Internet, so that they can collect and share data and can be controlled remotely.</Rule>
        <KeyTable
          title="IoT: characteristics and uses"
          head={["Item", "Example"]}
          aria="IoT: characteristics and uses. Characteristics: Sensors, software, a connection, remote control. Connected security system: Cameras and alarms you can check on a phone. Household appliances: A fridge or lights that you control by app. Connected cars: A car that sends data on its position and condition."
          rows={[["Characteristics", "Sensors, software, a connection, remote control"], ["Connected security system", "Cameras and alarms you can check on a phone"], ["Household appliances", "A fridge or lights that you control by app"], ["Connected cars", "A car that sends data on its position and condition"]]}
        />
        <Worked
          steps={[
            <>A smart thermostat senses the temperature and switches the heater, and the owner can change the setting from work.</>,
            <>Each connected device collects data, so IoT raises questions about privacy and security.</>,
          ]}
        />
        <Mistake>Thinking that any device with a screen is part of the IoT. It must be connected and able to send or receive data.</Mistake>
      </>,
    ),
  },
  {
    title: "The fourth and fifth industrial revolutions",
    content: slide(
      <>
        <Rule>The fourth industrial revolution (4IR) joins the physical and digital worlds through technologies such as the IoT, artificial intelligence, robotics and big data. The fifth (5IR) puts people and machines to work together, with human skills such as creativity at the centre.</Rule>
        <KeyTable
          title="4IR and 5IR"
          head={["Term", "Meaning"]}
          aria="4IR and 5IR. 4IR: Digital technologies such as IoT, AI and robotics change industry and daily life. 5IR: People and intelligent machines work together. Globalisation: Countries and businesses become more closely linked. Effect on work: New skills are needed; some tasks are automated."
          rows={[["4IR", "Digital technologies such as IoT, AI and robotics change industry and daily life"], ["5IR", "People and intelligent machines work together"], ["Globalisation", "Countries and businesses become more closely linked"], ["Effect on work", "New skills are needed; some tasks are automated"]]}
        />
        <Worked
          steps={[
            <>In a 4IR factory, sensors report on each machine and software plans maintenance before it breaks.</>,
            <>In a 5IR view, a robot does the heavy lifting and a person uses judgement and creativity for design.</>,
          ]}
        />
        <Mistake>Treating 4IR and 5IR as two separate technologies. They are descriptions of change in how technology is used in society.</Mistake>
      </>,
    ),
  },
  {
    title: "Big data and its social implications",
    content: slide(
      <>
        <Rule>Big data is data that is so large, fast and varied that normal tools cannot handle it. It is described by four Vs: volume, variety, velocity and value. It is used to understand customers, improve patient care and help farming, but it also raises social questions.</Rule>
        <KeyTable
          title="The four Vs and uses"
          head={["Item", "Meaning"]}
          aria="The four Vs and uses. Volume: A very large amount of data. Variety: Many kinds: numbers, text, images, sensor data. Velocity: Data arrives and changes very fast. Value: Useful information can be found in it. Uses: Customer profiling, patient care, farming. Social implications: Privacy, fairness, security, jobs."
          rows={[["Volume", "A very large amount of data"], ["Variety", "Many kinds: numbers, text, images, sensor data"], ["Velocity", "Data arrives and changes very fast"], ["Value", "Useful information can be found in it"], ["Uses", "Customer profiling, patient care, farming"], ["Social implications", "Privacy, fairness, security, jobs"]]}
        />
        <Worked
          steps={[
            <>A hospital studies many patients' records to see which treatment works best.</>,
            <>A shop that profiles customers may know a lot about them, so it must protect that data and use it fairly.</>,
          ]}
        />
        <Mistake>Thinking that big data only means a lot of data. Speed, variety and value matter too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the Internet of Things?</>,
          <>Name the four Vs of big data.</>,
          <>Give one use of big data.</>,
          <>Give one social implication of big data.</>,
        ]}
        answers={[
          <>Everyday devices with sensors and software that are connected to the Internet.</>,
          <>Volume, variety, velocity and value.</>,
          <>Customer profiling, patient care or farming.</>,
          <>For example privacy, fairness, security or jobs.</>,
        ]}
      />,
    ),
  },
];
