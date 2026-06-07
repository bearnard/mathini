import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/cat/term2/networks-communication-infrastructure/diagram.webp", alt: "Networks and Communication Infrastructure" },
    title: "LANs, WANs and connectivity",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A LAN links devices in a limited area such as a school lab, while a WAN connects devices over much larger distances using telecommunications infrastructure. In Grade 12 questions, compare range, ownership, cost and speed. The internet itself is a global network of networks, built from many connected WAN technologies."</p>
      </div>
    ),
  },
  {
    title: "Network devices and roles",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Routers move data between networks, switches connect devices on the same network and wireless access points provide Wi-Fi connectivity. Learners should know how these devices work together in a practical scenario such as a school office or home study environment. Correct answers name the device and explain its role in the data path."</p>
      </div>
    ),
  },
  {
    title: "Communication infrastructure and reliability",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Communication depends on physical and wireless infrastructure such as fibre, cellular towers, undersea cables and satellites. Reliable access influences learning, business and communication. CAT questions often connect infrastructure to practical issues such as coverage, speed, latency, data cost and what happens when a connection fails."</p>
      </div>
    ),
  },
  {
    title: "Social implications of networks",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Networks support collaboration and information access, but they also raise issues of privacy, cyberbullying, misinformation and unequal access. A strong CAT response weighs benefits such as fast communication against risks such as distraction, unsafe sharing or dependence on expensive data. Social implications are about people, behaviour and fairness, not just technology."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is the main difference between a LAN and a WAN?",
    options: ["A LAN uses no hardware", "A WAN covers a much larger geographical area", "A LAN is always wireless", "A WAN cannot connect to the internet"],
    answer: 1,
    explanation: "A WAN spans large distances, while a LAN is limited to a smaller area such as a building or campus.",
  },
  {
    prompt: "Which network device directs data packets between different networks?",
    options: ["Switch", "Router", "Printer", "Scanner"],
    answer: 1,
    explanation: "A router forwards data between networks, such as between a local network and the internet.",
  },
  {
    prompt: "Why might fibre internet be preferred over older copper connections?",
    options: ["It usually offers higher speed and better reliability", "It can only be used for printers", "It works without electricity", "It removes the need for a router"],
    answer: 0,
    explanation: "Fibre connections generally provide faster and more reliable data transmission.",
  },
  {
    prompt: "Which situation is an example of a social implication of network access?",
    options: ["A new keyboard layout is released", "Learners without affordable data struggle to access online resources", "A monitor has a larger screen size", "A printer uses more paper in draft mode"],
    answer: 1,
    explanation: "Unequal access to data and connectivity contributes to the digital divide.",
  },
  {
    prompt: "What is the role of a switch on a school LAN?",
    options: ["It connects devices within the same network", "It converts a document to PDF", "It scans pages into a computer", "It replaces the operating system"],
    answer: 0,
    explanation: "A switch connects multiple devices on the same local network efficiently.",
  },
  {
    prompt: "Which infrastructure is most closely associated with mobile data coverage?",
    options: ["Cell towers", "Trackballs", "Plotters", "Optical mice"],
    answer: 0,
    explanation: "Mobile connectivity depends on nearby cellular towers and the provider's network.",
  },
  {
    prompt: "Why can satellite internet have higher latency than fibre?",
    options: ["Because satellites are closer to the user", "Because data must travel long distances to and from satellites", "Because fibre uses no cables", "Because satellite internet has no routers"],
    answer: 1,
    explanation: "The greater travel distance to orbit and back increases delay, known as latency.",
  },
  {
    prompt: "Which statement about the internet is correct?",
    options: ["It is a single computer in one country", "It is a worldwide network of interconnected networks", "It is the same thing as a web browser", "It only works with Wi-Fi"],
    answer: 1,
    explanation: "The internet is a global system of interconnected networks, not one single device.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NetworksCommunicationInfrastructure = () => (
  <CapsSubjectTopic
    title="Networks and Communication Infrastructure"
    subtitle="Wide area networks, connectivity and the social impact of communication tools"
    learnSteps={learnSteps}
    task="gr12-networks-communication-infrastructure-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default NetworksCommunicationInfrastructure;
