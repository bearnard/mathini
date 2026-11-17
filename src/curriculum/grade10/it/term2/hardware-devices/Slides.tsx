import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Input and output devices",
    content: slide(
      <>
        <Rule>Input devices send data into the computer. Output devices show or give results. Some devices do both. For each device ask: what is it, where is it used and what is it used for?</Rule>
        <KeyTable
          title="Input, output and both"
          head={["Kind", "Examples"]}
          aria="Input, output and both. Input: Keyboard, mouse, scanner, microphone, pen, biometric reader, sensor. Output: Monitor, printer (ink, laser, 3D), headphones, speakers. Input and output: Touch screen, game controller, smartphone."
          rows={[["Input", "Keyboard, mouse, scanner, microphone, pen, biometric reader, sensor"], ["Output", "Monitor, printer (ink, laser, 3D), headphones, speakers"], ["Input and output", "Touch screen, game controller, smartphone"]]}
        />
        <Worked
          steps={[
            <>A fingerprint reader is a biometric input device. It identifies a person by a body feature.</>,
            <>A laser printer is used in offices for fast, sharp text. An ink printer is cheaper to buy and is used at home.</>,
          ]}
        />
        <Mistake>Calling a touch screen only an output device. It also takes input from touch.</Mistake>
      </>,
    ),
  },
  {
    title: "Storage devices and memory",
    content: slide(
      <>
        <Rule>Storage devices keep data for a long time. Primary memory (RAM) holds the programs and data in use and is lost when the power goes off. Secondary memory is storage that keeps data permanently.</Rule>
        <KeyTable
          title="Storage and memory"
          head={["Item", "Description"]}
          aria="Storage and memory. Hard drive: Large, magnetic, inside the computer. SSD: Solid state, no moving parts, faster, electronic. USB flash drive, SD card: Small, portable, electronic. Primary memory (RAM): Fast and temporary; holds what is in use. Secondary memory (storage): Slower and permanent; keeps files."
          rows={[["Hard drive", "Large, magnetic, inside the computer"], ["SSD", "Solid state, no moving parts, faster, electronic"], ["USB flash drive, SD card", "Small, portable, electronic"], ["Primary memory (RAM)", "Fast and temporary; holds what is in use"], ["Secondary memory (storage)", "Slower and permanent; keeps files"]]}
        />
        <Worked
          steps={[
            <>When you save a document it goes from RAM to the drive. If the power fails first, the unsaved work is lost.</>,
            <>A flash drive is portable and uses electronic storage, while an older hard drive stores data magnetically.</>,
          ]}
        />
        <Mistake>Mixing up RAM and storage. RAM is the working memory. Storage keeps files.</Mistake>
      </>,
    ),
  },
  {
    title: "The system unit and ports",
    content: slide(
      <>
        <Rule>The system unit holds the main parts: the motherboard, the CPU and the RAM. Ports and connectors join other devices to it. Know the purpose of the main ones.</Rule>
        <KeyTable
          title="Parts and ports"
          head={["Part", "Purpose"]}
          aria="Parts and ports. Motherboard: The main circuit board that joins all parts. CPU: Carries out instructions. RAM: Holds programs and data in use. USB port: Connects many devices, such as a keyboard or flash drive. HDMI port: Sends video and sound to a screen or projector. NIC (network interface card): Connects the computer to a network."
          rows={[["Motherboard", "The main circuit board that joins all parts"], ["CPU", "Carries out instructions"], ["RAM", "Holds programs and data in use"], ["USB port", "Connects many devices, such as a keyboard or flash drive"], ["HDMI port", "Sends video and sound to a screen or projector"], ["NIC (network interface card)", "Connects the computer to a network"]]}
        />
        <Worked
          steps={[
            <>A learner plugs a projector into the HDMI port to show a presentation to the class.</>,
            <>A laptop and a smartphone both have input, processing, output and storage, but a smartphone is smaller and is built to use less power.</>,
          ]}
        />
        <Mistake>Thinking that the CPU stores files. The CPU processes. Storage keeps files.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one input and one output device.</>,
          <>Name one input and output device.</>,
          <>What is the difference between RAM and storage?</>,
          <>What is a USB port used for?</>,
        ]}
        answers={[
          <>For example a keyboard (input) and a monitor (output).</>,
          <>A touch screen.</>,
          <>RAM is temporary working memory. Storage keeps data permanently.</>,
          <>Connecting devices such as keyboards and flash drives.</>,
        ]}
      />,
    ),
  },
];
