import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The TCP/IP protocol suite',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>TCP/IP</strong> is the foundation of internet communication. It defines how data is packaged, addressed, transmitted, routed, and received.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">TCP (Transmission Control Protocol)</strong>
            <p className="text-slate-600">Ensures reliable, ordered delivery. Breaks data into packets, confirms receipt (ACK), and retransmits lost packets.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">IP (Internet Protocol)</strong>
            <p className="text-slate-600">Handles addressing and routing. Every device has an IP address; IP routes packets across networks to the destination.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Application-layer protocols',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Application-layer protocols define the rules for specific types of communication:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl inline-block text-left">
          <table className="text-sm text-slate-700 w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-6 py-1">Protocol</th>
                <th className="py-1">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pr-6 py-1 font-medium">HTTP / HTTPS</td><td>Web browsing (HTTPS adds encryption via TLS)</td></tr>
              <tr><td className="pr-6 py-1 font-medium">FTP</td><td>File Transfer Protocol — upload/download files</td></tr>
              <tr><td className="pr-6 py-1 font-medium">SMTP</td><td>Simple Mail Transfer Protocol — sending email</td></tr>
              <tr><td className="pr-6 py-1 font-medium">POP3 / IMAP</td><td>Receiving email (POP3 downloads; IMAP syncs)</td></tr>
              <tr><td className="pr-6 py-1 font-medium">DNS</td><td>Resolves domain names to IP addresses</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Wired vs wireless communication media',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Data travels across physical or wireless <strong>communication media</strong>:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Wired media</strong>
            <p className="text-slate-600"><strong>Twisted pair (Ethernet):</strong> common, cheap, up to ~1 Gbps over 100 m. <strong>Fibre optic:</strong> light pulses, very fast (10+ Gbps), immune to electrical interference, expensive to install.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Wireless media</strong>
            <p className="text-slate-600"><strong>Wi-Fi (802.11):</strong> local wireless LAN. <strong>Bluetooth:</strong> short range (≤10 m), device pairing. <strong>4G/5G:</strong> mobile broadband over cellular networks. More flexible but more susceptible to interference and eavesdropping.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'IP addresses and DNS',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every device on the internet has a unique <strong>IP address</strong>. DNS translates human-readable domain names into IP addresses.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">IPv4 address</strong>
            <p className="text-slate-600">Four octets, e.g. 192.168.1.10. Values 0–255 per octet. Private ranges (192.168.x.x) are used inside LANs; public IPs are used on the internet.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">DNS (Domain Name System)</strong>
            <p className="text-slate-600">Acts like a phone book for the internet. When you type www.google.com, DNS returns its IP address so your browser can connect.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">A <strong>router</strong> forwards packets between networks; a <strong>switch</strong> connects devices within the same network.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'Which protocol is responsible for breaking data into packets and ensuring reliable delivery with acknowledgements?',
    options: ['IP', 'HTTP', 'TCP', 'FTP'],
    answer: 'TCP',
    explanation: 'TCP (Transmission Control Protocol) provides reliable, ordered delivery — it retransmits any packets that are lost.',
  },
  {
    prompt: 'A user types "www.school.co.za" into a browser. Which protocol translates this name into an IP address?',
    options: ['HTTP', 'SMTP', 'DNS', 'FTP'],
    answer: 'DNS',
    explanation: 'DNS (Domain Name System) resolves human-readable domain names to numeric IP addresses.',
  },
  {
    prompt: 'What is the difference between HTTP and HTTPS?',
    options: ['HTTPS is much faster than HTTP on any network', 'HTTPS encrypts data in transit using TLS, so it is secure', 'HTTP is used only on mobile devices', 'HTTPS can be used on local networks only'],
    answer: 'HTTPS encrypts data in transit using TLS, so it is secure',
    explanation: 'HTTPS adds a TLS encryption layer to HTTP, protecting data (e.g. passwords, credit card numbers) from interception.',
  },
  {
    prompt: 'Which protocol is used to SEND an email from a mail client to a mail server?',
    options: ['IMAP', 'POP3', 'SMTP', 'FTP'],
    answer: 'SMTP',
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used to send outgoing email. POP3 and IMAP are for receiving email.',
  },
  {
    prompt: 'What is the main advantage of fibre optic cable over twisted pair (Ethernet) cable?',
    options: ['It is cheaper to install than Ethernet cable', 'It sends data as light, giving high speed and no interference', 'It supports wireless connections between devices', 'It works only over very short distances'],
    answer: 'It sends data as light, giving high speed and no interference',
    explanation: 'Fibre uses light, not electrical signals, so it achieves speeds of 10+ Gbps and is unaffected by electrical noise.',
  },
  {
    prompt: 'Which wireless technology is designed for very short-range device pairing (e.g. earphones to a phone)?',
    options: ['Wi-Fi', '4G', 'Bluetooth', 'Satellite'],
    answer: 'Bluetooth',
    explanation: 'Bluetooth is designed for short-range (typically ≤10 m) device-to-device communication.',
  },
  {
    prompt: 'What is the valid range for each octet in an IPv4 address?',
    options: ['0–127', '0–255', '1–254', '0–512'],
    answer: '0–255',
    explanation: 'An IPv4 address consists of 4 octets, each an 8-bit value ranging from 0 to 255 (e.g. 192.168.1.1).',
  },
  {
    prompt: 'What does a router do in a network?',
    options: ['Connects devices that are within the same LAN', 'Forwards data packets between networks using IP addresses', 'Boosts the Wi-Fi signal in a building', 'Assigns MAC addresses to the devices on a network'],
    answer: 'Forwards data packets between networks using IP addresses',
    explanation: 'A router operates at the network layer, directing packets between networks (e.g. your LAN to the internet).',
  },
  {
    prompt: 'Which email protocol downloads messages from the server and then removes them (unless configured otherwise)?',
    options: ['SMTP', 'IMAP', 'POP3', 'DNS'],
    answer: 'POP3',
    explanation: 'POP3 (Post Office Protocol 3) downloads emails to the local device and typically deletes them from the server. IMAP keeps them synchronised on the server.',
  },
  {
    prompt: 'Why is wireless communication generally considered less secure than wired communication?',
    options: ['Wireless signals travel slower than wired signals', 'Wireless signals travel through the air and can be intercepted', 'Wireless networks do not support any encryption', 'Wired networks automatically encrypt all of their data'],
    answer: 'Wireless signals travel through the air and can be intercepted',
    explanation: 'Radio waves can be captured by unintended receivers. Encryption (WPA3) mitigates this risk but must be configured.',
  },
];

const ProtocolsMedia = () => (
  <CapsSubjectTopic
    title="Protocols and Communication Media"
    subtitle="Rules for data transmission and types of transmission media"
    learnSteps={learnSteps}
    task="gr11-protocols-media-t3"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default ProtocolsMedia;
