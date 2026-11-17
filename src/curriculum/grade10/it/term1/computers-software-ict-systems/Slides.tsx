import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Types of computers",
    content: slide(
      <>
        <Rule>Computers come in many types. They differ in their main use, their processing power and their size, and they can be grouped by how portable they are.</Rule>
        <KeyTable
          title="Types of computer"
          head={["Type", "Main use"]}
          aria="Types of computer. Desktop: Office or home work at one place; powerful for its price. Laptop: Portable work; has its own battery. Tablet, smartphone: Small, touch screen, very portable. Server: Serves files and services to many users. Embedded computer: A tiny computer inside a device, such as a washing machine."
          rows={[["Desktop", "Office or home work at one place; powerful for its price"], ["Laptop", "Portable work; has its own battery"], ["Tablet, smartphone", "Small, touch screen, very portable"], ["Server", "Serves files and services to many users"], ["Embedded computer", "A tiny computer inside a device, such as a washing machine"]]}
        />
        <Worked
          steps={[
            <>A school office uses desktops. A learner carries a laptop between home and school.</>,
            <>A smart TV and a microwave oven each contain an embedded computer that runs only one job.</>,
          ]}
        />
        <Mistake>Thinking that every computer has a keyboard and screen. An embedded computer has none of its own.</Mistake>
      </>,
    ),
  },
  {
    title: "Hardware and software",
    content: slide(
      <>
        <Rule>Hardware is the physical parts of a computer. Software is the programs that tell the hardware what to do. Hardware and software depend on each other: neither is any use alone.</Rule>
        <KeyTable
          title="Hardware and software"
          head={["Part", "Description"]}
          aria="Hardware and software. Hardware: Keyboard, mouse, processor, drive, screen. System software: The operating system and utility programs. Application software: Programs for tasks, such as word processing. Interdependent: Software needs hardware to run; hardware needs software to be useful."
          rows={[["Hardware", "Keyboard, mouse, processor, drive, screen"], ["System software", "The operating system and utility programs"], ["Application software", "Programs for tasks, such as word processing"], ["Interdependent", "Software needs hardware to run; hardware needs software to be useful"]]}
        />
        <Worked
          steps={[
            <>A word processor (application software) runs on the operating system (system software), which controls the hardware.</>,
            <>A computer with no software cannot do any useful work.</>,
          ]}
        />
        <Mistake>Calling a program part of the hardware. You cannot touch software.</Mistake>
      </>,
    ),
  },
  {
    title: "Software licences",
    content: slide(
      <>
        <Rule>A licence says how you may use software. Proprietary software is owned by a company and sold under a licence. Shareware can be tried first and then paid for. Freeware is free to use but remains the owner's. Free open-source software (FOSS) is free to use and its code can be studied and changed.</Rule>
        <KeyTable
          title="Kinds of software"
          head={["Kind", "Meaning"]}
          aria="Kinds of software. Proprietary: Owned by a company; you pay for a licence. Shareware: Try first; pay if you keep using it. Freeware: Free to use; the code is not shared. FOSS: Free to use; code open to study and change."
          rows={[["Proprietary", "Owned by a company; you pay for a licence"], ["Shareware", "Try first; pay if you keep using it"], ["Freeware", "Free to use; the code is not shared"], ["FOSS", "Free to use; code open to study and change"]]}
        />
        <Worked
          steps={[
            <>A learner uses freeware for a drawing program. A firm pays for proprietary office software.</>,
            <>A school installs an open-source operating system on old computers to save money.</>,
          ]}
        />
        <Mistake>Assuming that free means open source. Freeware is free but its code is not open.</Mistake>
      </>,
    ),
  },
  {
    title: "Data, information and the processing cycle",
    content: slide(
      <>
        <Rule>Data is raw facts. Information is data that has been processed so that it means something. The information processing cycle has five stages: input, processing, output, storage and communication.</Rule>
        <KeyTable
          title="The cycle"
          head={["Stage", "Example"]}
          aria="The cycle. Input: Typing marks into a spreadsheet. Processing: The spreadsheet works out the average. Output: The average is shown or printed. Storage: The file is saved on a drive. Communication: The report is e-mailed to the principal."
          rows={[["Input", "Typing marks into a spreadsheet"], ["Processing", "The spreadsheet works out the average"], ["Output", "The average is shown or printed"], ["Storage", "The file is saved on a drive"], ["Communication", "The report is e-mailed to the principal"]]}
        />
        <Worked
          steps={[
            <>The marks 45, 60 and 72 are data. The sentence &ldquo;the average is 59&rdquo; is information.</>,
            <>An ICT system, such as a point-of-sale system, carries out all five stages for each sale.</>,
          ]}
        />
        <Mistake>Treating input and processing as the same stage. Input is entering data. Processing is working on it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one example of an embedded computer.</>,
          <>What is the difference between hardware and software?</>,
          <>What does FOSS stand for?</>,
          <>Name the five stages of the information processing cycle.</>,
        ]}
        answers={[
          <>A microwave oven or a washing machine.</>,
          <>Hardware is the physical parts. Software is the programs.</>,
          <>Free open-source software.</>,
          <>Input, processing, output, storage and communication.</>,
        ]}
      />,
    ),
  },
];
