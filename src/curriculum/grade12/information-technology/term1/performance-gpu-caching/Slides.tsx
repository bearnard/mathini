import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The processor: CPU, multi-processing and GPU',
    content: slide(
      <>
        <Rule>The central processing unit (CPU) carries out instructions. Its speed and the number of processors or cores affect performance. A graphics processing unit (GPU) is built to handle many simple calculations at once, such as drawing images and video.</Rule>
        <KeyTable
          title="Processors"
          head={['Part', 'Effect on performance']}
          aria="Processors and performance. CPU speed: how fast instructions are carried out. Multi-processing: more than one processor or core works at the same time, so several tasks run together. GPU: takes over graphics work, so games, video and design programs run smoothly. A GPU can be built into the processor or be a separate graphics card."
          rows={[
            ['CPU speed', 'How fast instructions run'],
            ['Multi-processing', 'More cores work at the same time'],
            ['GPU', 'Handles graphics and video'],
          ]}
        />
        <Worked
          steps={[
            <>A video editor needs a strong CPU with several cores and a good GPU, because it processes many frames.</>,
            <>A computer used only for typing and email needs much less.</>,
          ]}
        />
        <Mistake>Thinking that a faster CPU alone makes everything faster. A slow disk or too little memory can still hold the computer back.</Mistake>
      </>,
    ),
  },
  {
    title: 'Memory and cache',
    content: slide(
      <>
        <Rule>Memory capacity matters. Random access memory (RAM) holds the programs and data in use. Cache is a small, very fast memory that keeps the data the processor uses most, so it does not have to wait for slower RAM.</Rule>
        <KeyTable
          title="Memory"
          head={['Memory', 'Role']}
          aria="Memory. RAM: holds programs and data that are in use, and more RAM lets more programs run smoothly. Cache memory: small and very fast, close to the processor, keeps the most-used data. Speed order from fastest: cache, RAM, then storage."
          rows={[
            ['RAM', 'Holds what is in use; more lets more run'],
            ['Cache', 'Small and very fast; keeps frequently used data'],
            ['Speed order', 'Cache, then RAM, then storage'],
          ]}
        />
        <Worked
          steps={[
            <>A computer with too little RAM must swap data to the disk, and it slows down.</>,
            <>Cache works like a desk drawer: the things you use most are kept at hand instead of in a distant cupboard.</>,
          ]}
        />
        <Mistake>Mixing up memory and storage. RAM is lost when the power goes off. Storage keeps data.</Mistake>
      </>,
    ),
  },
  {
    title: 'Storage speed and disk caching',
    content: slide(
      <>
        <Rule>Storage type and speed affect how fast programs start and files open. A solid-state drive (SSD) is usually faster than a hard disk drive (HDD). Disk caching keeps recently used data in faster memory so that it can be read again quickly.</Rule>
        <KeyTable
          title="Storage and the network"
          head={['Factor', 'Effect']}
          aria="Storage and network factors. HDD: spinning disk, cheaper for large capacity and slower. SSD: no moving parts, faster, uses less power. Disk caching: keeps recently used disk data in fast memory so that it is read again quickly. Network interface card speed: sets how fast data can move on the network."
          rows={[
            ['HDD', 'Cheaper per capacity, slower'],
            ['SSD', 'Faster, no moving parts'],
            ['Disk caching', 'Recent disk data kept in fast memory'],
            ['Network card speed', 'Limits how fast data moves on the network'],
          ]}
        />
        <Worked
          steps={[
            <>Changing the hard disk for an SSD often makes a computer start much faster.</>,
            <>A fast connection is wasted if the network card is slow, because the card limits the speed.</>,
          ]}
        />
        <Mistake>Believing that the biggest storage is the fastest. Capacity and speed are different things.</Mistake>
      </>,
    ),
  },
  {
    title: 'Motivating a computer for a user',
    content: slide(
      <>
        <Rule>To motivate a computer system, match the hardware to what the user needs to do, and give a reason for each choice. Do not spend on what the user does not need.</Rule>
        <KeyTable
          title="Matching hardware to a user"
          head={['User', 'Hardware that fits']}
          aria="Matching hardware to a user. A learner who writes documents and browses: a modest processor, enough RAM, an SSD and a battery that lasts. A gamer: a strong CPU, a good GPU, plenty of RAM and fast storage. A video editor: a multi-core CPU, a strong GPU, lots of RAM and a large fast SSD. A user who travels: a light laptop with long battery life."
          rows={[
            ['Learner: documents, browsing', 'Modest CPU, enough RAM, an SSD'],
            ['Gamer', 'Strong CPU and GPU, plenty of RAM'],
            ['Video editor', 'Multi-core CPU, strong GPU, lots of RAM, large SSD'],
            ['Frequent traveller', 'Light laptop with long battery life'],
          ]}
        />
        <Worked
          steps={[
            <>&ldquo;A learner who writes documents needs an SSD so that the computer starts quickly, but does not need an expensive graphics card.&rdquo;</>,
            <>Always give a reason: what the user does, which part helps, and why.</>,
          ]}
        />
        <Mistake>Recommending the most expensive parts for every user. A good motivation fits the need and the budget.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a GPU for?</>,
          <>Why does a computer with too little RAM slow down?</>,
          <>What is the role of cache memory?</>,
          <>Name one reason to choose an SSD over an HDD.</>,
        ]}
        answers={[
          <>It handles graphics and video work.</>,
          <>It must move data to and from the disk, which is slower.</>,
          <>It keeps frequently used data close to the processor so it is quickly available.</>,
          <>It is faster and has no moving parts.</>,
        ]}
      />,
    ),
  },
];
