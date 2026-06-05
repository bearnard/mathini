import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Network types: LAN, MAN and WAN',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Networks are classified by their <strong>geographic size</strong>:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">LAN</strong>
            <p className="text-slate-600"><em>Local Area Network</em> — covers a small area (one building/campus). Fast, privately owned. E.g. school network.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">MAN</strong>
            <p className="text-slate-600"><em>Metropolitan Area Network</em> — covers a city or campus group. Often owned by ISPs or municipalities.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">WAN</strong>
            <p className="text-slate-600"><em>Wide Area Network</em> — spans countries or continents. The Internet is the largest WAN. Slower than LAN; uses public infrastructure.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Bus, star and ring topologies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>network topology</strong> describes the physical or logical layout of connected devices.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Bus</strong>
            <p className="text-slate-600">All nodes connect to a single cable (backbone). Simple and cheap. A break in the cable brings down the whole network.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Star</strong>
            <p className="text-slate-600">All nodes connect to a central switch/hub. Easy to manage and add nodes. Single point of failure: if the switch fails, all nodes lose connectivity.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Ring</strong>
            <p className="text-slate-600">Each node connects to exactly two neighbours forming a circle. Data travels in one direction (or both in dual ring). A break can disrupt the loop.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mesh topology and hybrid networks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mesh</strong> and <strong>hybrid</strong> topologies offer greater redundancy for critical networks.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Full mesh</strong>
            <p className="text-slate-600">Every node connects to every other node. Very resilient — multiple paths exist. Very expensive (many cables/connections).</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Hybrid</strong>
            <p className="text-slate-600">Combines two or more topologies. E.g. star-bus (star sub-networks connected via a bus backbone). Flexible but complex to manage.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Most real-world enterprise networks use a <strong>hierarchical star</strong> (switches at multiple levels).</p>
      </div>
    ),
  },
  {
    title: 'Client-server vs peer-to-peer',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Networks can also be classified by their <strong>organisational model</strong>:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Client-server</strong>
            <p className="text-slate-600">A dedicated server provides resources/services to client machines. Centralised — easier to manage security and backups. Used in schools and businesses.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Peer-to-peer (P2P)</strong>
            <p className="text-slate-600">All machines are equal; each can act as both client and server. Simple setup, no dedicated server needed. Hard to secure; not scalable for large networks.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'A school connects all computers in one building via a network. What type of network is this?',
    options: ['WAN', 'MAN', 'LAN', 'PAN'],
    answer: 'LAN',
    explanation: 'A Local Area Network (LAN) covers a small geographic area such as a single building or campus.',
  },
  {
    prompt: 'In a star topology, what happens if the central switch fails?',
    options: [
      'Only the node furthest from the switch loses connectivity',
      'All nodes connected to that switch lose network connectivity',
      'Data is rerouted through alternate paths automatically',
      'Only two nodes are affected',
    ],
    answer: 'All nodes connected to that switch lose network connectivity',
    explanation: 'The switch is the single point of failure in a star topology. All nodes depend on it.',
  },
  {
    prompt: 'Which network topology connects all nodes along a single shared cable?',
    options: ['Star', 'Ring', 'Bus', 'Mesh'],
    answer: 'Bus',
    explanation: 'In a bus topology, all devices share one backbone cable. A break anywhere disrupts the whole network.',
  },
  {
    prompt: 'What is the main advantage of a full mesh topology?',
    options: [
      'It is the cheapest topology to install',
      'It requires the fewest cables',
      'It provides high redundancy — multiple paths exist between any two nodes',
      'It is the easiest to configure',
    ],
    answer: 'It provides high redundancy — multiple paths exist between any two nodes',
    explanation: 'Full mesh offers maximum fault tolerance; if any link fails, data is rerouted via an alternative path.',
  },
  {
    prompt: 'In a client-server network, what is the role of the server?',
    options: [
      'To provide resources and services to client machines',
      'To connect to the internet only',
      'To act as a personal workstation',
      'To block unauthorised access to printers',
    ],
    answer: 'To provide resources and services to client machines',
    explanation: 'The server is a dedicated machine that handles requests from clients — file storage, printing, authentication, etc.',
  },
  {
    prompt: 'Which topology sends data in a circular path from node to node?',
    options: ['Bus', 'Star', 'Ring', 'Mesh'],
    answer: 'Ring',
    explanation: 'In a ring topology, data travels around the ring from node to node in one (or two, in dual-ring) directions.',
  },
  {
    prompt: 'The Internet is the best example of which type of network?',
    options: ['LAN', 'MAN', 'WAN', 'PAN'],
    answer: 'WAN',
    explanation: 'The Internet is the world\'s largest Wide Area Network, spanning continents using public infrastructure.',
  },
  {
    prompt: 'What is a key DISADVANTAGE of a peer-to-peer network compared to a client-server network?',
    options: [
      'It requires expensive dedicated server hardware',
      'It is difficult to secure and manage as the network grows',
      'It cannot share files between computers',
      'It only works with wired connections',
    ],
    answer: 'It is difficult to secure and manage as the network grows',
    explanation: 'P2P has no centralised security or management, making it unsuitable for large or security-sensitive environments.',
  },
  {
    prompt: 'A hybrid topology combines which of the following?',
    options: [
      'Only bus and ring topologies',
      'Two or more different topology types to balance cost and reliability',
      'Only wired and wireless connections',
      'LAN and WAN networks only',
    ],
    answer: 'Two or more different topology types to balance cost and reliability',
    explanation: 'A hybrid topology (e.g. star-bus) mixes topologies to gain the benefits of each while managing costs.',
  },
  {
    prompt: 'Which network device is central to a star topology and directs data to the correct destination port?',
    options: ['Router', 'Modem', 'Switch', 'Repeater'],
    answer: 'Switch',
    explanation: 'A switch connects nodes in a star topology and uses MAC addresses to direct frames to the correct port.',
  },
];

const NetworkTopologies = () => (
  <CapsSubjectTopic
    title="Network Topologies"
    subtitle="Types of network layouts and their characteristics"
    learnSteps={learnSteps}
    task="gr11-network-topologies-t3"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default NetworkTopologies;
