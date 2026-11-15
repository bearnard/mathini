import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Network types: LAN and WLAN',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>network</strong> connects devices so they can share resources and communicate.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">LAN (Local Area Network)</strong>
            <p className="text-slate-600">Covers a small area (e.g. school, office). Uses Ethernet cables. Fast, secure, and reliable.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">WLAN (Wireless LAN)</strong>
            <p className="text-slate-600">Uses Wi-Fi (radio waves) instead of cables. Allows mobility but can be slower and less secure than wired.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">WAN (Wide Area Network)</strong>
            <p className="text-slate-600">Spans large geographic areas (cities, countries). The internet is the largest WAN.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">MAN (Metropolitan Area Network)</strong>
            <p className="text-slate-600">Covers a city or campus. Larger than a LAN, smaller than a WAN.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Network hardware components',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Several hardware devices are needed to build and manage a network.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Router</strong>
            <p className="text-slate-600">Connects different networks (e.g. home LAN to the internet). Assigns IP addresses via DHCP.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Switch</strong>
            <p className="text-slate-600">Connects multiple devices within a LAN. Smarter than a hub — sends data only to the intended device.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">NIC (Network Interface Card)</strong>
            <p className="text-slate-600">Hardware in each device that enables it to connect to a network (wired or wireless).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Access point</strong>
            <p className="text-slate-600">Extends Wi-Fi coverage by connecting wirelessly to the router and broadcasting the signal further.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Modem</strong>
            <p className="text-slate-600">Converts digital signals to analogue (and back) for transmission over telephone or fibre lines.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Firewall</strong>
            <p className="text-slate-600">Hardware or software that monitors and controls incoming/outgoing network traffic based on security rules.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Internet vs World Wide Web',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>internet</strong> is the global network infrastructure. The <strong>WWW</strong> is one service that runs on it.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Internet</strong>
            <p className="text-slate-600">A worldwide network of networks. Carries email, streaming, VoIP, cloud services, and the web.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">World Wide Web (WWW)</strong>
            <p className="text-slate-600">Web pages linked via hyperlinks, accessed through a browser (Chrome, Firefox). Uses HTTP/HTTPS protocol.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">An IP address identifies each device on the internet. DNS converts domain names (www.google.com) into IP addresses.</p>
      </div>
    ),
  },
  {
    title: 'IoT, BYOD, and digital citizenship',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          New trends shape how we interact with networks in everyday and school life.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">IoT (Internet of Things)</strong>
            <p className="text-slate-600">Everyday devices (smart fridges, fitness trackers, smart meters) connected to the internet and each other.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">BYOD (Bring Your Own Device)</strong>
            <p className="text-slate-600">Learners or employees use personal devices at school/work. Convenient but raises security and fairness concerns.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Digital citizenship</strong>
            <p className="text-slate-600">Responsible, ethical behaviour online: respecting others, protecting privacy, avoiding cyberbullying.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is the difference between a switch and a hub in a network?',
    options: ['A hub is faster than a switch on a network', 'A switch sends data to the intended device; a hub broadcasts to all', 'A switch needs Wi-Fi and a hub needs cables', 'There is no difference between a switch and a hub'],
    answer: 'A switch sends data to the intended device; a hub broadcasts to all',
    explanation: 'Switches are "intelligent" — they learn MAC addresses and direct traffic only to the correct port. Hubs broadcast to all, wasting bandwidth.',
  },
  {
    prompt: 'Which network type covers the largest geographic area?',
    options: ['LAN', 'WLAN', 'MAN', 'WAN'],
    answer: 'WAN',
    explanation: 'A WAN (Wide Area Network) spans countries or continents. The internet is the largest WAN.',
  },
  {
    prompt: 'What does DNS stand for and what does it do?',
    options: [
      'Digital Network Security — protects the network from attacks',
      'Domain Name System — translates domain names into IP addresses',
      'Data Network Streaming — handles video delivery',
      'Device Network Switch — manages device connections',
    ],
    answer: 'Domain Name System — translates domain names into IP addresses',
    explanation: 'DNS acts like a phone book for the internet, converting human-readable URLs (www.example.com) into numeric IP addresses.',
  },
  {
    prompt: 'A school implements a BYOD policy. Which is the MOST significant security risk?',
    options: ['Learners will use too much internet data', 'Personal devices may carry malware that infects the network', 'The devices will be too slow for school tasks', 'Learners will not want to bring their own devices'],
    answer: 'Personal devices may carry malware that infects the network',
    explanation: 'Unmanaged personal devices may not have updated antivirus or OS patches, making them potential vectors for malware on the school network.',
  },
  {
    prompt: 'Which device connects a home LAN to the internet and assigns IP addresses to devices?',
    options: ['Switch', 'Hub', 'Router', 'NIC'],
    answer: 'Router',
    explanation: 'A router connects different networks (e.g. home LAN to the ISP network) and uses DHCP to assign local IP addresses to connected devices.',
  },
  {
    prompt: 'The Internet and the World Wide Web are the same thing.',
    options: ['True — they are identical', 'False — the internet is the global infrastructure; the WWW is one service running on it', 'True — both only handle websites', 'False — the WWW is the infrastructure; the internet is a service on it'],
    answer: 'False — the internet is the global infrastructure; the WWW is one service running on it',
    explanation: 'The internet is the network. The WWW is one application (web pages via HTTP). Email, FTP, and streaming also use the internet but are not the WWW.',
  },
  {
    prompt: 'Which protocol indicates that a website uses a secure, encrypted connection?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    answer: 'HTTPS',
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) encrypts data between the browser and server using TLS/SSL.',
  },
  {
    prompt: 'An IoT example in a South African home would be:',
    options: ['A desktop computer that is connected by Ethernet', 'A smart meter that reports usage to the utility over the internet', 'A wired telephone that is fixed to a wall', 'A printed textbook that is kept in a classroom'],
    answer: 'A smart meter that reports usage to the utility over the internet',
    explanation: 'IoT devices are everyday objects connected to the internet — smart meters, smart lights, and fitness bands are common examples.',
  },
  {
    prompt: 'Which component converts digital data signals to analogue signals for transmission over a telephone line?',
    options: ['Switch', 'Router', 'Modem', 'Access point'],
    answer: 'Modem',
    explanation: 'A modem (modulator-demodulator) converts between digital signals used by computers and analogue signals used by traditional telephone lines.',
  },
  {
    prompt: 'What type of network connects devices within a single building using Wi-Fi?',
    options: ['WAN', 'MAN', 'PAN', 'WLAN'],
    answer: 'WLAN',
    explanation: 'A WLAN (Wireless Local Area Network) is a LAN that uses wireless (Wi-Fi) connections instead of physical cables.',
  },
];

const NetworksInternetSocialImplications = () => (
  <CapsSubjectTopic
    title="Networks, Internet and Social Implications"
    subtitle="LAN, WAN, network hardware, internet services, IoT, and digital citizenship"
    learnSteps={learnSteps}
    task="gr11-networks-internet-social-implications-t2"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default NetworksInternetSocialImplications;
