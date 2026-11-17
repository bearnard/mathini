import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Why networks, and their parts",
    content: slide(
      <>
        <Rule>A network is a group of computers and devices joined so that they can share data and resources. Networks allow communication, sharing of resources, centralisation, file and funds transfer, productivity and leisure.</Rule>
        <KeyTable
          title="Reasons and components"
          head={["Item", "Description"]}
          aria="Reasons and components. Reasons: Communication, sharing resources, central storage, file and funds transfer, leisure. Node: A device on the network, such as a printer, server or workstation. NIC: The network interface card that connects a node. Communication media: The cable or wireless link between nodes. Switch and router: A switch joins devices; a router joins networks. NOS: The network operating system that manages the network."
          rows={[["Reasons", "Communication, sharing resources, central storage, file and funds transfer, leisure"], ["Node", "A device on the network, such as a printer, server or workstation"], ["NIC", "The network interface card that connects a node"], ["Communication media", "The cable or wireless link between nodes"], ["Switch and router", "A switch joins devices; a router joins networks"], ["NOS", "The network operating system that manages the network"]]}
        />
        <Worked
          steps={[
            <>A school shares one printer with many computers over a network. This saves money.</>,
            <>A bank transfers funds over its network in seconds.</>,
          ]}
        />
        <Mistake>Listing only advantages. A network can also fail, be attacked and cost money to run.</Mistake>
      </>,
    ),
  },
  {
    title: "Communication media",
    content: slide(
      <>
        <Rule>Data travels over wired or wireless media. They differ in accessibility, coverage and security.</Rule>
        <KeyTable
          title="Media compared"
          head={["Medium", "Features"]}
          aria="Media compared. UTP cable: Wired, cheap, common in offices. Fibre optic: Wired, light signals, very fast, long distance. Radio waves: Wireless, such as Wi-Fi, flexible, more open to interference. Infrared: Wireless, short range, line of sight."
          rows={[["UTP cable", "Wired, cheap, common in offices"], ["Fibre optic", "Wired, light signals, very fast, long distance"], ["Radio waves", "Wireless, such as Wi-Fi, flexible, more open to interference"], ["Infrared", "Wireless, short range, line of sight"]]}
        />
        <Worked
          steps={[
            <>A school uses UTP cable in the computer room and fibre to connect buildings.</>,
            <>Wi-Fi is convenient, but a wired link is usually more secure and stable.</>,
          ]}
        />
        <Mistake>Assuming that wireless is always better. Wired media are often faster and more secure.</Mistake>
      </>,
    ),
  },
  {
    title: "PAN, HAN, LAN, WAN and client-server",
    content: slide(
      <>
        <Rule>Networks are named by their coverage: PAN, HAN, LAN and WAN. The Internet is an example of a WAN. In a client-server network a central server serves clients, and access control decides who can use what. In a peer-to-peer network computers share directly.</Rule>
        <KeyTable
          title="Types of network"
          head={["Type", "Coverage and use"]}
          aria="Types of network. PAN: One person; a phone and earphones. HAN: One home. LAN, WLAN: One building or site, wired or wireless. WAN: A very wide area; the Internet. Client-server: A central server; access control; easier to manage. Peer-to-peer: Computers share directly; small and simple; less control."
          rows={[["PAN", "One person; a phone and earphones"], ["HAN", "One home"], ["LAN, WLAN", "One building or site, wired or wireless"], ["WAN", "A very wide area; the Internet"], ["Client-server", "A central server; access control; easier to manage"], ["Peer-to-peer", "Computers share directly; small and simple; less control"]]}
        />
        <Worked
          steps={[
            <>A school LAN uses a server for logins and files. This is client-server.</>,
            <>Three friends sharing files between their laptops use peer-to-peer.</>,
          ]}
        />
        <Mistake>Choosing peer-to-peer for a large network. It becomes hard to manage and secure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two reasons for using a network.</>,
          <>Which is faster: fibre or UTP?</>,
          <>What is a LAN?</>,
          <>What is the difference between client-server and peer-to-peer?</>,
        ]}
        answers={[
          <>For example: sharing resources and communication.</>,
          <>Fibre optic.</>,
          <>A network in one building or site.</>,
          <>Client-server has a central server. Peer-to-peer computers share directly.</>,
        ]}
      />,
    ),
  },
];
