import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'Mobile technologies',
    content: (
      <div className="space-y-4">
        <Rule>Mobile technologies are devices that you can carry and use anywhere: smart phones, laptops, tablets, netbooks and e-book readers.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Advantages of mobility</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Work and learn from anywhere.</li><li>Stay in touch and get information quickly.</li><li>One small device can replace several (phone, camera, map).</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Constraints</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Battery life is limited.</li><li>Size: a small device has a small screen, keyboard and battery.</li><li>Computing power against power consumption: a faster processor drains the battery faster.</li></ul></div>
        </div>
        <p className="text-left text-sm text-slate-600">Designers always trade off power against battery life, size and heat.</p>
      </div>
    ),
  },
  {
    title: 'What makes a computer fast?',
    content: (
      <div className="space-y-4">
        <Rule>Four factors influence the performance of a computer. A weak link in any one of them slows the whole system.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>CPU:</strong> the clock speed (in GHz) and multi-processing, where several cores work at the same time.</li>
          <li><strong>Memory:</strong> RAM is the working memory, and its capacity decides how much can be open at once. <strong>Cache</strong> is a small, very fast memory next to the CPU that keeps data it uses often.</li>
          <li><strong>Storage speed:</strong> how fast data is read and written. A solid-state drive (SSD) has no moving parts and is faster than a hard disk drive (HDD).</li>
          <li><strong>Network speed:</strong> how fast data moves over a network or the internet. It affects downloads, streaming and cloud use.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Matching hardware to a purpose',
    content: (
      <div className="space-y-4">
        <Rule>Hardware must fit the purpose of the user. A more expensive system is not always the better one.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Home or personal use</strong><p className="mt-1">Browsing, documents, video calls. A moderate CPU, enough RAM and an SSD are enough.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Games and entertainment</strong><p className="mt-1">A strong CPU and graphics card, plenty of RAM and fast storage, and a good screen.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>SOHO (Small-Office-Home-Office)</strong><p className="mt-1">Reliability, networking and printing, backup storage and a moderate CPU.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Power user</strong><p className="mt-1">A fast multi-core CPU, a lot of RAM and fast, large storage for video editing or programming.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Motivating a system',
    content: (
      <div className="space-y-4">
        <Rule>To motivate a system, state the need, name the hardware and give a reason that links the two.</Rule>
        <Worked
          title="A SOHO user"
          steps={[
            <><strong>Need:</strong> a small design studio shares files and a printer among four people.</>,
            <><strong>Hardware:</strong> a moderate multi-core CPU, enough RAM for several programs, a network connection and external storage for backup.</>,
            <><strong>Reason:</strong> several programs must run at the same time, files must be shared on the network, and a backup protects the customers&rsquo; work.</>,
          ]}
        />
        <Mistake>A motivation that only names a component (&ldquo;get a fast CPU&rdquo;) earns little. Always say what the user will do with it.</Mistake>
      </div>
    ),
  },
  {
    title: 'Common mix-ups',
    content: (
      <div className="space-y-4">
        <Rule>Exam answers lose marks on a few common mix-ups.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>RAM and storage:</strong> RAM is temporary working memory. Storage keeps files after the power is off.</li>
          <li><strong>Cache and RAM:</strong> cache is smaller and faster than RAM, and sits close to the CPU.</li>
          <li><strong>More cores do not always mean faster:</strong> a program only gains speed from extra cores when it can split its work.</li>
          <li><strong>Higher GHz is not everything:</strong> memory, storage and network speed can still be the bottleneck.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Name two constraints of mobile devices.</>,
          <>Which two memories sit between the CPU and the storage drive?</>,
          <>Why is an SSD usually faster than an HDD?</>,
          <>What should a motivation for a computer system link together?</>,
        ]}
        answers={[
          <>Any two of: battery life, size, computing power against power consumption.</>,
          <>Cache and RAM.</>,
          <>It has no moving parts.</>,
          <>The needs of the user and the hardware chosen.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which of these is a mobile technology?',
    options: ['A desktop tower', 'A network switch', 'A tablet', 'A rack server'],
    answer: 'A tablet',
    explanation: 'Smart phones, laptops, tablets, netbooks and e-book readers are mobile technologies.',
  },
  {
    prompt: 'Which is an advantage of mobility?',
    options: ['The battery lasts for weeks', 'The screen is as large as a desk', 'The device needs no updates', 'Work can be done from anywhere'],
    answer: 'Work can be done from anywhere',
    explanation: 'Mobile devices let people work, learn and stay in touch wherever they are.',
  },
  {
    prompt: 'Which is a constraint of mobile devices?',
    options: ['Too much storage space', 'Limited battery life', 'A fixed place of use', 'No wireless connection'],
    answer: 'Limited battery life',
    explanation: 'A small battery limits how long a mobile device can be used between charges.',
  },
  {
    prompt: 'Why does a faster processor reduce battery life in a phone?',
    options: ['It has a smaller screen', 'It uses less memory', 'It has no cache memory', 'It consumes more power'],
    answer: 'It consumes more power',
    explanation: 'Computing power and power consumption are linked: a faster processor drains the battery faster.',
  },
  {
    prompt: 'What does multi-processing mean for a CPU?',
    options: ['Cores work at the same time', 'The CPU runs at a lower speed', 'The CPU uses only the cache', 'The CPU works without memory'],
    answer: 'Cores work at the same time',
    explanation: 'Multi-processing allows several tasks to be handled at once by different cores.',
  },
  {
    prompt: 'What is cache memory?',
    options: ['Large, slow memory kept on a disk', 'Memory used mainly for the network', 'Small, very fast memory by the CPU', 'Memory that stores files for good'],
    answer: 'Small, very fast memory by the CPU',
    explanation: 'Cache keeps data the CPU uses often, so it does not have to wait for the slower RAM.',
  },
  {
    prompt: 'What does the capacity of RAM decide?',
    options: ['How long files are kept for', 'How quickly the network runs', 'How much can be open at once', 'How bright the screen can be'],
    answer: 'How much can be open at once',
    explanation: 'RAM is the working memory: more RAM allows more programs and data to be open at the same time.',
  },
  {
    prompt: 'Why is an SSD usually faster than an HDD?',
    options: ['It is always larger in size', 'It uses a slower interface', 'It has no moving parts', 'It is kept in the cache'],
    answer: 'It has no moving parts',
    explanation: 'An SSD reads and writes electronically, while an HDD has to move a read/write head over a spinning disk.',
  },
  {
    prompt: 'Which factor describes how fast data moves over the internet?',
    options: ['Network speed', 'Storage speed', 'Clock speed', 'Cache size'],
    answer: 'Network speed',
    explanation: 'Network speed decides how quickly downloads, streaming and cloud services work.',
  },
  {
    prompt: 'A learner mainly browses the web and writes documents at home. Which system is suitable?',
    options: ['The most powerful gaming system made', 'A moderate CPU, enough RAM, an SSD', 'A server with many processors', 'A system with no storage at all'],
    answer: 'A moderate CPU, enough RAM, an SSD',
    explanation: 'Home use does not need extreme power. A moderate CPU, enough RAM and an SSD fit the purpose at a fair price.',
  },
  {
    prompt: 'Which hardware best suits a player of demanding games?',
    options: ['A strong CPU and graphics card', 'A tablet with a small battery pack', 'An e-book reader for novels', 'A basic netbook for notes'],
    answer: 'A strong CPU and graphics card',
    explanation: 'Games need strong processing and graphics, plenty of RAM and fast storage.',
  },
  {
    prompt: 'What does SOHO stand for?',
    options: ['Small-Office-Home-Office', 'Software-Online-Hardware-Option', 'Single-Office-High-Output', 'Secure-Online-Home-Operations'],
    answer: 'Small-Office-Home-Office',
    explanation: 'A SOHO user works from a small office or from home and needs reliable, shared and backed-up systems.',
  },
  {
    prompt: 'Which is the best reason to give when you motivate a power user\'s system?',
    options: ['Video editing needs a fast CPU and much RAM', 'Fast computers are the best computers to buy', 'Everyone should have many cores in a computer', 'The price is the only thing that matters'],
    answer: 'Video editing needs a fast CPU and much RAM',
    explanation: 'A good motivation links a need (video editing) to the hardware chosen (a fast CPU and a lot of RAM).',
  },
  {
    prompt: 'Which statement about RAM and storage is correct?',
    options: ['RAM is temporary, storage keeps files', 'RAM keeps files when the power is off', 'Storage is faster than the CPU cache', 'RAM and storage are the same thing'],
    answer: 'RAM is temporary, storage keeps files',
    explanation: 'RAM is temporary working memory. Storage keeps files even when the power is switched off.',
  },
];
