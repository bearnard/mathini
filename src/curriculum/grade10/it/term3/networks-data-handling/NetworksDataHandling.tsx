import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/it/term3/networks-data-handling/diagram.webp", alt: "Networks and Data Handling" },
    title: 'Network Fundamentals',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">What is a Computer Network?</h3>
          <p className="text-slate-700 mb-3">
            A computer network is a collection of interconnected devices that can communicate and share resources. 
            Networks enable file sharing, communication, and resource pooling.
          </p>
        </div>
        <div className="bg-white border-2 border-blue-200 p-4 rounded shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-3">Network Types by Size</h4>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 text-sm">PAN (Personal Area Network)</h5>
              <p className="text-xs text-slate-600">Very small range (1-10 meters). Examples: Bluetooth devices, wireless keyboard/mouse</p>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm">LAN (Local Area Network)</h5>
              <p className="text-xs text-slate-600">Limited area like a school or office building. Fast speeds, privately owned. Example: School computer lab network</p>
            </div>
            <div className="bg-purple-50 p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">MAN (Metropolitan Area Network)</h5>
              <p className="text-xs text-slate-600">Covers a city or large campus. Example: Network connecting multiple school campuses in a city</p>
            </div>
            <div className="bg-orange-50 p-3 rounded border border-orange-100">
              <h5 className="font-bold text-orange-800 text-sm">WAN (Wide Area Network)</h5>
              <p className="text-xs text-slate-600">Covers large geographical areas (countries/continents). Example: The Internet is the largest WAN</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Network Topologies</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 text-sm mb-2">Bus Topology</h5>
              <p className="text-xs text-slate-600 mb-1">All devices connected to a single cable (backbone)</p>
              <p className="text-xs text-slate-500">✓ Easy to install | ✗ Single point of failure</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 text-sm mb-2">Star Topology</h5>
              <p className="text-xs text-slate-600 mb-1">All devices connect to a central hub/switch</p>
              <p className="text-xs text-slate-500">✓ Easy to manage | ✗ Hub failure affects all</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 text-sm mb-2">Ring Topology</h5>
              <p className="text-xs text-slate-600 mb-1">Devices connected in a circular loop</p>
              <p className="text-xs text-slate-500">✓ Equal access | ✗ Break in ring affects network</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <h5 className="font-bold text-yellow-800 text-sm mb-2">Mesh Topology</h5>
              <p className="text-xs text-slate-600 mb-1">Every device connects to multiple others</p>
              <p className="text-xs text-slate-500">✓ Highly reliable | ✗ Expensive and complex</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded border border-teal-200">
            <h5 className="font-semibold text-teal-900 mb-2">Network Hardware</h5>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><strong>Router:</strong> Connects networks, directs traffic</li>
              <li><strong>Switch:</strong> Connects devices in a LAN</li>
              <li><strong>Hub:</strong> Simple connector (broadcasts to all)</li>
              <li><strong>NIC:</strong> Network Interface Card in each device</li>
              <li><strong>Modem:</strong> Modulates/demodulates signals</li>
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-200">
            <h5 className="font-semibold text-pink-900 mb-2">Transmission Media</h5>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><strong>Twisted Pair:</strong> Copper wire (Ethernet)</li>
              <li><strong>Coaxial Cable:</strong> Thick copper (cable TV)</li>
              <li><strong>Fiber Optic:</strong> Light through glass (fast)</li>
              <li><strong>Wireless:</strong> Radio waves (Wi-Fi, 4G/5G)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Data Communication and Protocols',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">How Data Travels Across Networks</h3>
          <p className="text-slate-700 mb-3">
            Data doesn't travel as complete files. It's broken into small packets, sent independently, 
            and reassembled at the destination. This makes communication efficient and reliable.
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-300">
          <h4 className="font-semibold text-purple-900 mb-3">The OSI Model (7 Layers)</h4>
          <p className="text-sm text-slate-600 mb-3">A conceptual framework for understanding network communication:</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-purple-600 text-white rounded flex items-center justify-center text-xs font-bold">7</div>
              <div className="flex-1">
                <span className="font-bold text-purple-800 text-sm">Application Layer</span>
                <span className="text-xs text-slate-600 ml-2">(HTTP, FTP, SMTP - user applications)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-purple-500 text-white rounded flex items-center justify-center text-xs font-bold">6</div>
              <div className="flex-1">
                <span className="font-bold text-purple-800 text-sm">Presentation Layer</span>
                <span className="text-xs text-slate-600 ml-2">(Data format, encryption, compression)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-purple-400 text-white rounded flex items-center justify-center text-xs font-bold">5</div>
              <div className="flex-1">
                <span className="font-bold text-purple-800 text-sm">Session Layer</span>
                <span className="text-xs text-slate-600 ml-2">(Manages connections and sessions)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center text-xs font-bold">4</div>
              <div className="flex-1">
                <span className="font-bold text-blue-800 text-sm">Transport Layer</span>
                <span className="text-xs text-slate-600 ml-2">(TCP/UDP - reliable data transfer)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-blue-400 text-white rounded flex items-center justify-center text-xs font-bold">3</div>
              <div className="flex-1">
                <span className="font-bold text-blue-800 text-sm">Network Layer</span>
                <span className="text-xs text-slate-600 ml-2">(IP - routing and addressing)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-blue-300 text-white rounded flex items-center justify-center text-xs font-bold">2</div>
              <div className="flex-1">
                <span className="font-bold text-blue-800 text-sm">Data Link Layer</span>
                <span className="text-xs text-slate-600 ml-2">(MAC addresses, error detection)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-100">
              <div className="w-6 h-6 bg-blue-200 text-slate-800 rounded flex items-center justify-center text-xs font-bold">1</div>
              <div className="flex-1">
                <span className="font-bold text-blue-800 text-sm">Physical Layer</span>
                <span className="text-xs text-slate-600 ml-2">(Cables, electrical signals, hardware)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Key Network Protocols</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">TCP (Transmission Control Protocol)</p>
              <p className="text-xs text-slate-600">Reliable, connection-oriented. Ensures data arrives in order without errors.</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">IP (Internet Protocol)</p>
              <p className="text-xs text-slate-600">Routes packets across networks using IP addresses.</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">HTTP/HTTPS</p>
              <p className="text-xs text-slate-600">Web page transfer (HTTPS is secure with encryption).</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">FTP (File Transfer Protocol)</p>
              <p className="text-xs text-slate-600">Upload and download files between computers.</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">SMTP (Simple Mail Transfer Protocol)</p>
              <p className="text-xs text-slate-600">Sending email messages.</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <p className="font-bold text-green-800 text-sm">DNS (Domain Name System)</p>
              <p className="text-xs text-slate-600">Converts domain names to IP addresses.</p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Data Packet Structure</h4>
          <div className="bg-white p-3 rounded border border-red-100">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-red-100 p-2 rounded border border-red-200">
                <p className="font-bold text-red-800">Header</p>
                <p className="text-slate-600">Source/Destination IP, Port, Protocol</p>
              </div>
              <div className="bg-yellow-100 p-2 rounded border border-yellow-200">
                <p className="font-bold text-yellow-800">Payload</p>
                <p className="text-slate-600">Actual data being sent</p>
              </div>
              <div className="bg-blue-100 p-2 rounded border border-blue-200">
                <p className="font-bold text-blue-800">Footer</p>
                <p className="text-slate-600">Error checking (checksum)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Internet and IP Addressing',
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <h3 className="font-bold text-teal-900 mb-2">The Internet and IP Addresses</h3>
          <p className="text-slate-700 mb-3">
            The Internet is a global network of networks. Every device connected to the Internet has a unique 
            IP address, like a street address for delivering data packets.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">IP Address Versions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 mb-2">IPv4 (Internet Protocol version 4)</h5>
              <p className="text-sm text-slate-700 mb-2">Format: Four numbers (0-255) separated by dots</p>
              <div className="bg-blue-50 p-2 rounded text-center">
                <code className="text-blue-900 font-mono">192.168.1.1</code>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                32-bit address = ~4.3 billion addresses (running out!)
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 mb-2">IPv6 (Internet Protocol version 6)</h5>
              <p className="text-sm text-slate-700 mb-2">Format: Eight groups of hexadecimal separated by colons</p>
              <div className="bg-blue-50 p-2 rounded text-center text-xs">
                <code className="text-blue-900 font-mono">2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                128-bit address = 340 undecillion addresses (practically unlimited!)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">IP Address Classes (IPv4)</h4>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border border-yellow-200 flex items-center justify-between text-sm">
              <span className="font-bold text-yellow-800">Class A:</span>
              <span className="text-slate-600">1.0.0.0 to 126.255.255.255 (Large networks)</span>
            </div>
            <div className="bg-white p-2 rounded border border-yellow-200 flex items-center justify-between text-sm">
              <span className="font-bold text-yellow-800">Class B:</span>
              <span className="text-slate-600">128.0.0.0 to 191.255.255.255 (Medium networks)</span>
            </div>
            <div className="bg-white p-2 rounded border border-yellow-200 flex items-center justify-between text-sm">
              <span className="font-bold text-yellow-800">Class C:</span>
              <span className="text-slate-600">192.0.0.0 to 223.255.255.255 (Small networks)</span>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">Special IP Addresses</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><code className="bg-purple-100 px-2 py-1 rounded">127.0.0.1</code> - <strong>Localhost</strong> (your own computer)</li>
            <li><code className="bg-purple-100 px-2 py-1 rounded">192.168.x.x</code> - <strong>Private network</strong> addresses (not routable on Internet)</li>
            <li><code className="bg-purple-100 px-2 py-1 rounded">0.0.0.0</code> - <strong>Default route</strong> or "any address"</li>
            <li><code className="bg-purple-100 px-2 py-1 rounded">255.255.255.255</code> - <strong>Broadcast</strong> address (all devices)</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Domain Names and DNS</h4>
          <p className="text-sm text-slate-700 mb-3">
            Domain names (like <strong>www.example.co.za</strong>) are easier to remember than IP addresses. 
            The Domain Name System (DNS) translates domain names to IP addresses.
          </p>
          <div className="bg-white p-3 rounded border border-green-100">
            <p className="text-xs text-slate-600 mb-2">Example DNS lookup process:</p>
            <ol className="list-decimal ml-5 space-y-1 text-xs text-slate-700">
              <li>User types www.example.co.za in browser</li>
              <li>Computer asks DNS server: "What's the IP for www.example.co.za?"</li>
              <li>DNS server responds: "It's 203.0.113.45"</li>
              <li>Browser connects to 203.0.113.45 and loads the website</li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <h5 className="font-semibold text-orange-900 mb-2">Static vs Dynamic IP</h5>
            <p className="text-xs text-slate-700">
              <strong>Static:</strong> Permanent address, manually assigned<br/>
              <strong>Dynamic:</strong> Temporary address, assigned by DHCP server
            </p>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-200">
            <h5 className="font-semibold text-pink-900 mb-2">Subnet Mask</h5>
            <p className="text-xs text-slate-700">
              Divides IP address into network and host portions. Example: 255.255.255.0
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What does LAN stand for?',
    options: ['Large Area Network', 'Local Area Network', 'Linear Access Network', 'Long Area Network'],
    answer: 'Local Area Network',
    explanation: 'A LAN is a network that connects devices over a limited geographical area.',
  },
  {
    prompt: 'What is an IP address used for?',
    options: ['Identifying the users of the network', 'Identifying devices on a network', 'Storing the passwords of the users', 'Running programs on the network'],
    answer: 'Identifying devices on a network',
    explanation: 'An IP address uniquely identifies a device on a network for communication.',
  },
  {
    prompt: 'Which network topology connects all devices to a central hub?',
    options: ['Bus', 'Ring', 'Star', 'Mesh'],
    answer: 'Star',
    explanation: 'In star topology, all devices connect to a central hub or switch, making it easy to manage.',
  },
  {
    prompt: 'What does DNS stand for and what does it do?',
    options: ['Data Network Service - stores files', 'Domain Name System - converts domain names to IP addresses', 'Digital Network Security - protects networks', 'Direct Network Service - connects devices'],
    answer: 'Domain Name System - converts domain names to IP addresses',
    explanation: 'DNS translates human-readable domain names (like www.example.com) into IP addresses that computers use.',
  },
];

const NetworksDataHandling = () => (
  <CapsSubjectTopic
    title="Networks and Data Handling"
    subtitle="Network architecture and communication"
    learnSteps={learnSteps}
    task="gr10-networks-data-handling-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default NetworksDataHandling;
