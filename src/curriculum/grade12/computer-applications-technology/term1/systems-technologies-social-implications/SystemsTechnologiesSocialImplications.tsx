import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/cat/term1/systems-technologies-social-implications/diagram.webp", alt: "Systems Technologies and Social Implications" },
    title: "General concepts and system requirements",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"When CAT asks about general systems concepts, compare the task that must be done with the hardware and software that will support it. A video-editing workstation needs more RAM, storage and processing power than a basic office PC, while a portable device trades raw power for mobility and battery life. System requirements always link performance, cost and the user's actual needs."</p>
      </div>
    ),
  },
  {
    title: "Hardware, software and trade-offs",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Grade 12 learners must evaluate devices rather than simply name them. Hardware choices include processor speed, RAM size, SSD versus HDD storage and suitable input or output devices. Software choices include operating systems, application packages, licensing and compatibility. A good recommendation explains why one option is more suitable, affordable or reliable for a specific scenario."</p>
      </div>
    ),
  },
  {
    title: "Accessibility and user-centred design",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"User-centred design means starting with the needs of the person who will use the system. Accessibility features such as screen readers, magnifiers, voice input, sticky keys and high-contrast themes help different users work effectively. Inclusive systems improve usability for everyone, not only for users with disabilities, because navigation, readability and feedback become clearer."</p>
      </div>
    ),
  },
  {
    title: "Environmental and social implications",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Technology decisions also have social and environmental consequences. E-waste, energy use, recycling, ergonomics, digital divide issues and the ethical use of devices often appear in CAT theory questions. Strong answers show both benefits and risks, for example that mobile devices increase access to information but can deepen inequality if learners cannot afford data or reliable hardware."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Which hardware upgrade usually improves multitasking performance the MOST on a computer that already has enough storage space?",
    options: ["Adding more RAM", "Changing the wallpaper", "Using a smaller monitor", "Installing a printer"],
    answer: 0,
    explanation: "More RAM allows the computer to keep more programs and data in memory at the same time, which improves multitasking.",
  },
  {
    prompt: "Why is user-centred design important when selecting technology for a school office?",
    options: ["It focuses on the needs and tasks of the users", "It guarantees the cheapest device on sale", "It removes the need for training completely", "It always uses the newest technology"],
    answer: 0,
    explanation: "User-centred design matches the system to the users, their tasks and their environment.",
  },
  {
    prompt: "Which accessibility feature helps a learner who has difficulty using a mouse?",
    options: ["Sticky keys", "Voice input or keyboard navigation", "A faster SSD", "A higher screen resolution only"],
    answer: 1,
    explanation: "Voice input and keyboard navigation can reduce the need for precise mouse control.",
  },
  {
    prompt: "What is an example of a social implication of technology?",
    options: ["The colour of a computer case", "The shape of a desktop icon", "The digital divide between users with and without internet access", "The brand of office chair used"],
    answer: 2,
    explanation: "The digital divide is a social issue because access to technology is not equal for all users.",
  },
  {
    prompt: "Which statement about e-waste is correct?",
    options: ["It has no environmental impact once a device is switched off", "It can contain hazardous materials that should be recycled responsibly", "It only applies to broken printers", "It is the same as cloud storage"],
    answer: 1,
    explanation: "Electronic waste can contain harmful materials, so it should be disposed of through proper recycling channels.",
  },
  {
    prompt: "Why might a CAT learner choose a laptop instead of a desktop for PAT research at school and home?",
    options: ["A laptop is always more powerful than a desktop", "A laptop is more portable and supports work in different locations", "A laptop never needs charging", "A laptop does not use an operating system"],
    answer: 1,
    explanation: "Portability is a major advantage when work must continue in more than one place.",
  },
  {
    prompt: "Which software factor is MOST important before installing a new application?",
    options: ["Whether the icon looks modern", "Whether the software is compatible with the operating system", "Whether the keyboard is wireless", "Whether the monitor has built-in speakers"],
    answer: 1,
    explanation: "The software must be compatible with the operating system and hardware before it can run properly.",
  },
  {
    prompt: "A school wants to reduce electricity use in its computer lab. Which choice best supports that goal?",
    options: ["Leaving all computers on overnight", "Using energy-efficient devices and power management settings", "Replacing SSDs with HDDs only", "Printing all notes instead of sharing digital copies"],
    answer: 1,
    explanation: "Energy-efficient devices and power-saving settings reduce power consumption without stopping work.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SystemsTechnologiesSocialImplications = () => (
  <CapsSubjectTopic
    title="Systems Technologies and Social Implications"
    subtitle="System choices, user-centred design and responsible technology use"
    learnSteps={learnSteps}
    task="gr12-systems-technologies-social-implications-t1"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default SystemsTechnologiesSocialImplications;
