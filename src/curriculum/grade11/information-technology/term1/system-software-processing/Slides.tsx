import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Types of operating system and language translators",
    content: slide(
      <>
        <Rule>Operating systems differ in cost, size, the hardware they need and the platform they run on. A compiler translates a whole program into machine code before it runs. An interpreter translates and runs it line by line.</Rule>
        <KeyTable
          title="Operating systems and translators"
          head={["Item", "Description"]}
          aria="Operating systems and translators. Desktop and laptop OS: Runs on personal computers; many programs at once. Mobile OS: Built for phones and tablets and touch screens. Embedded OS: Small and fixed, inside a device such as a smart TV. Network OS: Manages users, files and resources on a network. Compiler: Translates the whole program before it runs. Interpreter: Translates and runs the program line by line."
          rows={[["Desktop and laptop OS", "Runs on personal computers; many programs at once"], ["Mobile OS", "Built for phones and tablets and touch screens"], ["Embedded OS", "Small and fixed, inside a device such as a smart TV"], ["Network OS", "Manages users, files and resources on a network"], ["Compiler", "Translates the whole program before it runs"], ["Interpreter", "Translates and runs the program line by line"]]}
        />
        <Worked
          steps={[
            <>A phone OS is small and tuned for touch and battery life. A server OS is built to serve many users at once.</>,
            <>A compiled program runs fast once built. An interpreted program can be tested quickly, line by line.</>,
          ]}
        />
        <Mistake>Mixing up compiler and interpreter. The compiler works on the whole program first. The interpreter works one line at a time.</Mistake>
      </>,
    ),
  },
  {
    title: "Multi-tasking, multi-threading and multi-processing",
    content: slide(
      <>
        <Rule>These techniques let a computer do more at once. Multi-tasking runs several programs by switching between them. Multi-threading splits one program into parts that run together. Multi-processing uses more than one processor or core.</Rule>
        <KeyTable
          title="Processing techniques"
          head={["Technique", "Meaning"]}
          aria="Processing techniques. Multi-tasking: Several programs run by switching quickly. Multi-threading: One program is split into threads that run together. Multi-processing: More than one processor or core works at once."
          rows={[["Multi-tasking", "Several programs run by switching quickly"], ["Multi-threading", "One program is split into threads that run together"], ["Multi-processing", "More than one processor or core works at once"]]}
        />
        <Worked
          steps={[
            <>You listen to music while you type a document. The OS switches between the programs so quickly that both seem to run at once.</>,
            <>A video editor uses several threads, so one part exports while another shows the preview.</>,
          ]}
        />
        <Mistake>Thinking that multi-tasking needs several processors. A single processor can switch between tasks.</Mistake>
      </>,
    ),
  },
  {
    title: "Virtual memory and virtual machines",
    content: slide(
      <>
        <Rule>When RAM is full, the operating system can use part of the storage drive as virtual memory. A virtual machine is software that acts like a separate computer, so that more than one system can run on one real computer.</Rule>
        <KeyTable
          title="Virtual memory and virtualisation"
          head={["Idea", "What it does"]}
          aria="Virtual memory and virtualisation. Virtual memory: Uses part of the drive as extra, slower memory. Virtualisation: Makes one computer act as several. Virtual machine: A software computer with its own system. Purpose: Test software safely, share hardware, save cost."
          rows={[["Virtual memory", "Uses part of the drive as extra, slower memory"], ["Virtualisation", "Makes one computer act as several"], ["Virtual machine", "A software computer with its own system"], ["Purpose", "Test software safely, share hardware, save cost"]]}
        />
        <Worked
          steps={[
            <>A computer with 4 GB of RAM opens many programs. The OS moves unused data to the drive, so there is room in RAM. This is slower than RAM.</>,
            <>A developer runs a second operating system in a virtual machine to test a program without risk to the real system.</>,
          ]}
        />
        <Mistake>Treating virtual memory as a replacement for RAM. It is slower, and too much use slows the computer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a compiler and an interpreter?</>,
          <>What is multi-threading?</>,
          <>What is virtual memory?</>,
          <>Give one use of a virtual machine.</>,
        ]}
        answers={[
          <>A compiler translates the whole program first. An interpreter works line by line.</>,
          <>Splitting one program into parts that run together.</>,
          <>Part of the drive used as extra memory when RAM is full.</>,
          <>Testing software safely, or running another operating system on one computer.</>,
        ]}
      />,
    ),
  },
];
