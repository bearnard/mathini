import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The parts that link a network',
    content: slide(
      <>
        <Rule>A network needs parts that link its nodes: a switch joins devices on a local network, cables or a wireless base station carry the signal, and a router joins the network to other networks such as the Internet.</Rule>
        <KeyTable
          title="Essential parts"
          head={['Part', 'Job']}
          aria="Essential parts of a network. Switch: joins the devices of a local network and passes data to the right device. Cables: carry the signal on a wired network. Wireless base station, also called an access point: lets devices connect without cables. Router: joins the local network to the Internet and sends data between networks. Modem: changes signals so the line to the Internet can carry data."
          rows={[
            ['Switch', 'Joins local devices, sends data to the right one'],
            ['Cables', 'Carry the signal on a wired network'],
            ['Wireless base station', 'Lets devices connect without cables'],
            ['Router', 'Joins the network to the Internet'],
            ['Modem', 'Lets the Internet line carry the data'],
          ]}
        />
        <Worked
          steps={[
            <>At home, one box is often the modem, router, switch and wireless base station all in one. It is called an all-in-one solution, and people often just call it the router.</>,
            <>A school computer lab uses a separate switch, with cables to each computer, and a router to the Internet.</>,
          ]}
        />
        <Mistake>Calling every network box a router. A switch joins devices on one network. A router joins networks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Connecting to the Internet',
    content: slide(
      <>
        <Rule>You connect through a router or modem and an Internet service provider. The connection can be fibre, Wi-Fi to a router, a cellular network (4G or 5G), or satellite. Each suits different places and needs.</Rule>
        <KeyTable
          title="Ways to connect"
          head={['Connection', 'Suits']}
          aria="Ways to connect to the Internet. Fibre: very fast and stable, where the cable has been laid. Wi-Fi: wireless link between a device and a router in a building. 4G and 5G: a mobile network, good for phones and places without cables, and 5G is faster. Satellite: reaches remote areas, with more delay."
          rows={[
            ['Fibre', 'Fast and stable; needs a cable laid'],
            ['Wi-Fi', 'Wireless link to a router inside a building'],
            ['4G and 5G', 'Mobile network; 5G is faster'],
            ['Satellite', 'Remote areas, with more delay'],
          ]}
        />
        <Worked
          steps={[
            <>A farm far from any town cannot get fibre. It uses satellite or a 4G/5G router instead.</>,
            <>A house with fibre shares it with phones and laptops over Wi-Fi.</>,
          ]}
        />
        <Mistake>Mixing up Wi-Fi and the Internet. Wi-Fi is the wireless link inside the building. The Internet connection comes through the provider.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sharing files and online services',
    content: slide(
      <>
        <Rule>Files and folders can be shared on a network, and the user rights decide who may read or change them. Online services let people store and share files over the Internet. File-sharing methods such as BitTorrent have benefits and risks.</Rule>
        <KeyTable
          title="Sharing"
          head={['Method', 'Points']}
          aria="Sharing methods. Shared folder on a network: user rights control who can read or change files. Online storage services such as Dropbox, Google Workspace or Microsoft 365: files are reached from any device and shared by link. BitTorrent: files are shared in pieces between many users. Benefit: fast sharing of large files. Risks: malware in files and breaking copyright if the file is pirated."
          rows={[
            ['Shared folder', 'User rights decide who can read or change'],
            ['Online services (Dropbox, Google Workspace, Microsoft 365)', 'Reach files from any device, share by link'],
            ['BitTorrent', 'Fast for big files; risks: malware, piracy'],
          ]}
        />
        <Worked
          steps={[
            <>A teacher gives learners read-only rights to a folder. They can open the notes but cannot change them.</>,
            <>A learner shares a project in an online service. Each group member edits it from their own device.</>,
          ]}
        />
        <Mistake>Giving everyone full rights to a shared folder. Give only the rights each person needs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Remote access and VPN',
    content: slide(
      <>
        <Rule>Remote access means using a computer or network from another place. It can be done on a local network, through the Internet, or through a virtual private network (VPN), which makes a protected link across the Internet.</Rule>
        <KeyTable
          title="Remote access"
          head={['Way', 'What it does']}
          aria="Ways of remote access. On a local network: control or use a computer in the same building. Through the Internet: reach a computer or service from far away, with a login. VPN: a virtual private network that encrypts the link so that the connection across the Internet is protected."
          rows={[
            ['Local network', 'Use a computer in the same building'],
            ['Through the Internet', 'Reach a computer from far away, with a login'],
            ['VPN', 'A protected, encrypted link across the Internet'],
          ]}
        />
        <Worked
          steps={[
            <>An employee working from home connects to the office network through a VPN. The link is encrypted, so others on the public Internet cannot read it.</>,
            <>Remote access needs a strong login, because anyone who gets the login can use the computer.</>,
          ]}
        />
        <Mistake>Thinking that a VPN makes you anonymous and safe from everything. It protects the link, not your device from malware.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the job of a switch?</>,
          <>What is an all-in-one router?</>,
          <>Name two ways of connecting to the Internet.</>,
          <>What does a VPN do?</>,
        ]}
        answers={[
          <>It joins devices on a local network and sends data to the right one.</>,
          <>One box that is the modem, router, switch and wireless base station.</>,
          <>Any two of: fibre, Wi-Fi to a router, 4G or 5G, satellite.</>,
          <>It makes a protected, encrypted link across the Internet.</>,
        ]}
      />,
    ),
  },
];
