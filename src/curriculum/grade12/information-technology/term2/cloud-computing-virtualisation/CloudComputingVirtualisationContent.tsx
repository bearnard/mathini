import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is cloud computing?',
    content: (
      <div className="space-y-4">
        <Rule>Cloud computing means using computing resources, such as servers, storage and software, over the internet. A provider owns and looks after the equipment, and you use it when you need it, usually for a fee.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>You do not buy or install the servers yourself.</li>
          <li>You can reach your files and programs from any device with an internet connection.</li>
          <li>You can ask for more or less capacity as your needs change, and you pay for what you use.</li>
        </ul>
        <Mistake>The cloud is not a place without hardware. Your data is still stored on real servers, owned by the provider, in data centres.</Mistake>
      </div>
    ),
  },
  {
    title: 'Effect on hardware needs',
    content: (
      <div className="space-y-4">
        <Rule>When the heavy work is done on the provider&rsquo;s servers, the computer in front of the user can be simpler.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Less is needed locally</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>A less powerful and cheaper device can do the job.</li><li>Less local storage is needed, because files are kept online.</li><li>Fewer upgrades, because the provider upgrades the servers.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">More is needed elsewhere</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>A reliable internet connection becomes essential.</li><li>A fast network is needed to move large files.</li><li>A device that works offline may still be needed during outages.</li></ul></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Software as a service (SaaS)',
    content: (
      <div className="space-y-4">
        <Rule>Software as a service (SaaS) is software that runs on the provider&rsquo;s servers and is used through a web browser or an app, usually for a subscription. You do not install it.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Advantages:</strong> no installation, updates are done by the provider, access from any device, a lower starting cost and easy sharing of documents.</li>
          <li><strong>Who owns what?</strong> The provider owns the servers and the software, and the customer only gets the right to use the software. The customer&rsquo;s data is the customer&rsquo;s own, but it is stored on the provider&rsquo;s servers, so the terms of use must be read.</li>
        </ul>
        <Worked
          title="Example: an online word processor"
          steps={[
            <>The learner opens the program in a browser. Nothing is installed.</>,
            <>The document is saved on the provider&rsquo;s servers and can be opened from home or school.</>,
            <>If the internet fails, the learner may be unable to work on the document.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Virtualisation of servers',
    content: (
      <div className="space-y-4">
        <Rule>Virtualisation lets one physical server act as several separate virtual servers. Each virtual server (virtual machine) has its own operating system and programs, but they share the same hardware.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>A program called a <strong>hypervisor</strong> divides the hardware among the virtual machines.</li>
          <li>The hardware is used better, because one powerful server does the work of many weak ones.</li>
          <li>Fewer machines mean lower costs for equipment, space and electricity.</li>
          <li>A virtual machine can be copied or moved easily, which helps with backups and recovery.</li>
          <li>The virtual machines are kept apart, so a problem in one does not have to affect the others.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">Cloud providers use virtualisation to give each customer a share of their servers.</p>
      </div>
    ),
  },
  {
    title: 'Arguments for and against',
    content: (
      <div className="space-y-4">
        <Rule>CAPS asks for arguments for and against. Give both sides, and link them to the situation.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">For</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Lower starting costs and no servers to look after.</li><li>Capacity can grow or shrink.</li><li>Access from anywhere, and easy sharing.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Against</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>It depends on a good internet connection.</li><li>Your data is stored by someone else, which raises security and privacy questions.</li><li>Subscriptions continue, and you have less control.</li></ul></div>
        </div>
        <p className="text-left text-sm text-slate-600">For a small school with a poor connection, the arguments against may weigh more than for a company with fast, reliable internet.</p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Give one effect that cloud computing has on the hardware a user needs.</>,
          <>What does SaaS stand for?</>,
          <>What does a hypervisor do?</>,
          <>Name one argument for and one against using the cloud.</>,
        ]}
        answers={[
          <>A less powerful device is enough, but a reliable internet connection is needed.</>,
          <>Software as a service.</>,
          <>It divides one physical server&rsquo;s hardware among several virtual machines.</>,
          <>For: lower starting costs or access from anywhere. Against: dependence on the internet or security of the stored data.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is cloud computing?',
    options: ['Keeping files on a local hard drive alone', 'Using shared servers over the internet', 'Running programs without needing hardware', 'Joining computers by a cable in one room'],
    answer: 'Using shared servers over the internet',
    explanation: 'Cloud computing means using computing resources that a provider owns and runs, over the internet.',
  },
  {
    prompt: 'Where is data in the cloud stored?',
    options: ['On the device of the user', 'On the provider\'s servers', 'In the air above a building', 'Nowhere, as it has no hardware'],
    answer: 'On the provider\'s servers',
    explanation: 'The cloud is real hardware: data is stored on servers owned by the provider.',
  },
  {
    prompt: 'How does cloud computing affect the hardware a user needs?',
    options: ['A much faster processor is then needed', 'No local device is needed any more', 'A far larger local drive is needed', 'A simpler local device may be enough'],
    answer: 'A simpler local device may be enough',
    explanation: 'Because the servers do the heavy work and keep the files, the user\'s device can be simpler.',
  },
  {
    prompt: 'Which new need does cloud computing create for the user?',
    options: ['A server kept at the home', 'A printer for each file', 'A dependable internet link', 'A second operating system on it'],
    answer: 'A dependable internet link',
    explanation: 'Cloud services are used over the internet, so a reliable connection becomes essential.',
  },
  {
    prompt: 'What does SaaS stand for?',
    options: ['Software as a service', 'Storage as a server', 'Security as a system', 'Servers as a software'],
    answer: 'Software as a service',
    explanation: 'SaaS is software that runs on the provider\'s servers and is used through a browser or app.',
  },
  {
    prompt: 'Which is an advantage of SaaS?',
    options: ['The user owns the program code', 'It works without any internet', 'It needs a licence for each file', 'Updates are done by the provider'],
    answer: 'Updates are done by the provider',
    explanation: 'With SaaS nothing is installed and the provider keeps the software up to date.',
  },
  {
    prompt: 'With SaaS, who owns the software?',
    options: ['The customer', 'The provider', 'The internet service provider', 'The operating system'],
    answer: 'The provider',
    explanation: 'The provider owns the servers and the software, and the customer only gets the right to use the software.',
  },
  {
    prompt: 'A learner uses an online word processor. What is a risk?',
    options: ['The program is installed on each device', 'Work may stop if the internet fails', 'Documents cannot be shared with others', 'The program gets no updates'],
    answer: 'Work may stop if the internet fails',
    explanation: 'SaaS depends on the internet, so a failed connection can stop the work.',
  },
  {
    prompt: 'What is virtualisation of servers?',
    options: ['Several servers are joined into one box', 'A server is moved to the cloud for good', 'A server is switched off at night time', 'One server acts as many virtual servers'],
    answer: 'One server acts as many virtual servers',
    explanation: 'Virtualisation lets one physical machine run several virtual machines that share its hardware.',
  },
  {
    prompt: 'What does a hypervisor do?',
    options: ['It blocks viruses from the whole of the network', 'It stores the backup of each file every night', 'It shares the hardware among virtual machines', 'It makes the processor run much faster than before'],
    answer: 'It shares the hardware among virtual machines',
    explanation: 'The hypervisor manages the hardware and shares it among the virtual machines.',
  },
  {
    prompt: 'Which is a benefit of virtualisation?',
    options: ['The hardware is used better', 'More physical servers are needed', 'Each program needs its own computer', 'Backups become impossible'],
    answer: 'The hardware is used better',
    explanation: 'One powerful server does the work of many weak ones, so less hardware, space and electricity are needed.',
  },
  {
    prompt: 'Which is an argument against cloud computing?',
    options: ['Capacity cannot be increased', 'Files cannot be reached from home', 'Data is stored by someone else', 'It has no running costs'],
    answer: 'Data is stored by someone else',
    explanation: 'Storing data with a provider raises questions about security, privacy and control.',
  },
  {
    prompt: 'Which is an argument for cloud computing?',
    options: ['The user keeps full control of the hardware', 'It works best with a slow connection', 'Lower starting costs and no servers to maintain', 'The subscription ends when the user stops paying'],
    answer: 'Lower starting costs and no servers to maintain',
    explanation: 'The customer does not need to buy and look after servers, so the starting cost is lower.',
  },
  {
    prompt: 'A rural school has a slow, unreliable connection. What is a fair conclusion about using SaaS?',
    options: ['The school must switch to SaaS at once', 'SaaS works better with a poor connection', 'The arguments against may weigh more', 'The connection does not matter'],
    answer: 'The arguments against may weigh more',
    explanation: 'The benefits of the cloud depend on a good connection, so for this school the arguments against may count more.',
  },
];
