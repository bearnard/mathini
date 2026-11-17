import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an operating system does",
    content: slide(
      <>
        <Rule>The operating system (OS) is a group of related programs that manage the hardware and the software. It gives the user an interface and manages input and output, files, memory, storage and processes.</Rule>
        <KeyTable
          title="Roles of an operating system"
          head={["Role", "Description"]}
          aria="Roles of an operating system. User interface: Lets you use the computer with windows, icons or commands. Input and output management: Controls the keyboard, screen, printer and other devices. File and disk management: Stores, finds and organises files. Memory management: Shares RAM between programs. Process management: Decides which program runs when."
          rows={[["User interface", "Lets you use the computer with windows, icons or commands"], ["Input and output management", "Controls the keyboard, screen, printer and other devices"], ["File and disk management", "Stores, finds and organises files"], ["Memory management", "Shares RAM between programs"], ["Process management", "Decides which program runs when"]]}
        />
        <Worked
          steps={[
            <>When you open a program, the OS loads it into RAM and gives it processor time.</>,
            <>When you save a file, the OS decides where on the drive it goes.</>,
          ]}
        />
        <Mistake>Thinking that the operating system is the same as one application. It manages all of them.</Mistake>
      </>,
    ),
  },
  {
    title: "Types and examples of operating system",
    content: slide(
      <>
        <Rule>Operating systems suit different computers. A stand-alone (home) OS runs on a personal computer. A network OS manages a network. An embedded OS runs inside a device. Common examples are Windows, Linux, iOS and Android.</Rule>
        <KeyTable
          title="Types and examples"
          head={["Item", "Description"]}
          aria="Types and examples. Stand-alone (home) OS: A personal computer with one user at a time. Network OS: Manages users, files and devices on a network. Embedded OS: Inside a device such as a smart TV. Windows, Linux: Common on desktop and laptop computers. iOS, Android: Common on smartphones and tablets."
          rows={[["Stand-alone (home) OS", "A personal computer with one user at a time"], ["Network OS", "Manages users, files and devices on a network"], ["Embedded OS", "Inside a device such as a smart TV"], ["Windows, Linux", "Common on desktop and laptop computers"], ["iOS, Android", "Common on smartphones and tablets"]]}
        />
        <Worked
          steps={[
            <>A family laptop runs a stand-alone OS. A school server runs a network OS.</>,
            <>Android and iOS are made for touch screens and mobile hardware.</>,
          ]}
        />
        <Mistake>Assuming that all operating systems are the same. They differ by device and by purpose.</Mistake>
      </>,
    ),
  },
  {
    title: "Utility programs and device drivers",
    content: slide(
      <>
        <Rule>Utility programs do maintenance jobs, such as cleaning the disk, scanning for malware and compressing files. A device driver is software that lets the operating system work with a hardware device. Drivers are installed manually or automatically by plug and play.</Rule>
        <KeyTable
          title="Utilities and drivers"
          head={["Item", "Description"]}
          aria="Utilities and drivers. Utility program: Maintains or protects the computer, such as disk clean-up. Anti-malware: Scans for harmful software. Compression utility: Makes files smaller. Device driver: Lets the OS control a hardware device. Plug and play: The OS finds and installs the driver itself."
          rows={[["Utility program", "Maintains or protects the computer, such as disk clean-up"], ["Anti-malware", "Scans for harmful software"], ["Compression utility", "Makes files smaller"], ["Device driver", "Lets the OS control a hardware device"], ["Plug and play", "The OS finds and installs the driver itself"]]}
        />
        <Worked
          steps={[
            <>A new printer is connected and the OS installs the driver by plug and play, so it works at once.</>,
            <>If a device does not work, the driver may be missing or out of date, so it may need to be installed or updated.</>,
          ]}
        />
        <Mistake>Expecting hardware to work without its driver. The OS needs the driver to talk to the device.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two jobs of an operating system.</>,
          <>Give two examples of operating systems.</>,
          <>What is a utility program?</>,
          <>What is a device driver?</>,
        ]}
        answers={[
          <>For example: user interface, file management, memory management.</>,
          <>Windows and Linux, or iOS and Android.</>,
          <>A program that does maintenance, such as disk clean-up.</>,
          <>Software that lets the OS work with a hardware device.</>,
        ]}
      />,
    ),
  },
];
