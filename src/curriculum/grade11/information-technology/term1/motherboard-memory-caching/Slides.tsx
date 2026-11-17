import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The motherboard and its parts",
    content: slide(
      <>
        <Rule>The motherboard is the main circuit board that connects all the parts of a computer. Its design is modular: parts can be added or replaced in slots.</Rule>
        <KeyTable
          title="Parts on or in the motherboard"
          head={["Part", "Role"]}
          aria="Parts on or in the motherboard. BIOS chip: Starts the computer and checks the hardware. CPU: Carries out instructions. GPU: Handles graphics work. RAM: Holds programs and data in use. VRAM: Memory used by the GPU for images. ROM: Permanent memory with start-up instructions. Slots and busses: Connect expansion cards and carry data."
          rows={[["BIOS chip", "Starts the computer and checks the hardware"], ["CPU", "Carries out instructions"], ["GPU", "Handles graphics work"], ["RAM", "Holds programs and data in use"], ["VRAM", "Memory used by the GPU for images"], ["ROM", "Permanent memory with start-up instructions"], ["Slots and busses", "Connect expansion cards and carry data"]]}
        />
        <Worked
          steps={[
            <>When you switch on, the BIOS chip runs first. It checks the hardware and then starts the operating system.</>,
            <>A graphics card is an expansion card that fits into a slot and brings extra video power.</>,
          ]}
        />
        <Mistake>Thinking that the CPU is the motherboard. The CPU is one part that is fitted on it.</Mistake>
      </>,
    ),
  },
  {
    title: "Expansion cards and the flow of data",
    content: slide(
      <>
        <Rule>Expansion cards add features, such as better graphics or sound. Data flows between the parts along busses and point-to-point connections: from storage to RAM to the CPU, and from RAM to VRAM to the GPU.</Rule>
        <KeyTable
          title="How data flows"
          head={["Path", "What happens"]}
          aria="How data flows. Storage, RAM, CPU: A program is loaded into RAM, then the CPU runs it. RAM, VRAM, GPU: Image data goes to VRAM, then the GPU draws it. Bus (for example USB): A shared path that devices use to send data. Point-to-point: A direct link between two parts."
          rows={[["Storage, RAM, CPU", "A program is loaded into RAM, then the CPU runs it"], ["RAM, VRAM, GPU", "Image data goes to VRAM, then the GPU draws it"], ["Bus (for example USB)", "A shared path that devices use to send data"], ["Point-to-point", "A direct link between two parts"]]}
        />
        <Worked
          steps={[
            <>You open a game. The files move from the drive to RAM, the CPU runs the game code, and the picture data goes through VRAM to the GPU.</>,
            <>Add an expansion card and the new part uses a slot on the motherboard.</>,
          ]}
        />
        <Mistake>Believing that the CPU reads directly from the hard drive while running a program. Programs run from RAM.</Mistake>
      </>,
    ),
  },
  {
    title: "Cache memory and caching",
    content: slide(
      <>
        <Rule>Cache is a small, very fast memory that keeps the data the processor uses most, so it does not wait for slower RAM. Caching means keeping a copy close by to get it again quickly, as in cache memory, web caching and disk caching.</Rule>
        <KeyTable
          title="Caching"
          head={["Kind", "What it keeps"]}
          aria="Caching. Cache memory: Data the CPU uses most, close to the CPU. Web caching: Pages and files from sites you visited, on your device. Disk caching: Recently used disk data held in faster memory. ROM and RAM: ROM is permanent; RAM is temporary and fast."
          rows={[["Cache memory", "Data the CPU uses most, close to the CPU"], ["Web caching", "Pages and files from sites you visited, on your device"], ["Disk caching", "Recently used disk data held in faster memory"], ["ROM and RAM", "ROM is permanent; RAM is temporary and fast"]]}
        />
        <Worked
          steps={[
            <>A page you opened yesterday loads faster today, because the browser kept a copy in its cache.</>,
            <>A computer with more cache and RAM often performs better, because the CPU waits less.</>,
          ]}
        />
        <Mistake>Thinking that cache and RAM are the same. Cache is smaller and faster, and sits closer to the CPU.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the BIOS chip do?</>,
          <>Name the path of data from storage to the CPU.</>,
          <>What is VRAM used for?</>,
          <>What is web caching?</>,
        ]}
        answers={[
          <>It starts the computer and checks the hardware.</>,
          <>Storage, then RAM, then the CPU.</>,
          <>Holding image data for the GPU.</>,
          <>Keeping copies of visited pages on your device so they load faster.</>,
        ]}
      />,
    ),
  },
];
