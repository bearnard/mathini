import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "PAN, HAN, LAN and WAN compared",
    content: slide(
      <>
        <Rule>Networks are named by their size and use. Each differs in coverage, media and capacity.</Rule>
        <KeyTable
          title="Network types"
          head={["Type", "Coverage and use"]}
          aria="Network types. PAN: Personal area: one person, a few metres (a phone and earphones). HAN: Home area: the devices in one home. LAN: Local area: one building or site, such as a school. WAN: Wide area: cities or countries, such as the Internet."
          rows={[["PAN", "Personal area: one person, a few metres (a phone and earphones)"], ["HAN", "Home area: the devices in one home"], ["LAN", "Local area: one building or site, such as a school"], ["WAN", "Wide area: cities or countries, such as the Internet"]]}
        />
        <Worked
          steps={[
            <>A phone linked to a Bluetooth speaker is a PAN. A school computer room is a LAN. The Internet is the best-known WAN.</>,
            <>Bigger networks cover more distance, but they often have lower speeds per user and more to manage.</>,
          ]}
        />
        <Mistake>Thinking that a LAN must be wired. A LAN can be wireless, as in a school with Wi-Fi.</Mistake>
      </>,
    ),
  },
  {
    title: "VoIP, intranet, extranet and VPN",
    content: slide(
      <>
        <Rule>Voice over IP (VoIP) sends voice calls over the Internet. An intranet is a private network for one organisation. An extranet lets chosen outsiders reach part of it. A VPN makes a protected link across the Internet.</Rule>
        <KeyTable
          title="Network innovations"
          head={["Term", "Meaning"]}
          aria="Network innovations. VoIP: Voice calls over the Internet. Internet: The public network of networks. Intranet: A private network for one organisation. Extranet: Part of an intranet shared with chosen outsiders. VPN: A protected link across the Internet."
          rows={[["VoIP", "Voice calls over the Internet"], ["Internet", "The public network of networks"], ["Intranet", "A private network for one organisation"], ["Extranet", "Part of an intranet shared with chosen outsiders"], ["VPN", "A protected link across the Internet"]]}
        />
        <Worked
          steps={[
            <>A school intranet holds staff notices that only staff see. An extranet might let a supplier see the school's orders.</>,
            <>A VoIP call is cheaper than a normal call, but needs a good connection.</>,
          ]}
        />
        <Mistake>Confusing the Internet with an intranet. The Internet is public. An intranet is private.</Mistake>
      </>,
    ),
  },
  {
    title: "Location-based computing and acceptable use",
    content: slide(
      <>
        <Rule>Location-based computing uses the position of a device, found by GPS or the network, to give services such as maps, weather and traffic. It has social implications, such as privacy. An acceptable use policy (AUP) sets the rules for using a network.</Rule>
        <KeyTable
          title="Location, privacy and rules"
          head={["Item", "Points"]}
          aria="Location, privacy and rules. Uses: Weather, traffic, maps, finding a nearby shop. Benefit: Information and services that fit where you are. Risk: Others may learn where you are and where you go. AUP: A set of rules for acceptable use of a network."
          rows={[["Uses", "Weather, traffic, maps, finding a nearby shop"], ["Benefit", "Information and services that fit where you are"], ["Risk", "Others may learn where you are and where you go"], ["AUP", "A set of rules for acceptable use of a network"]]}
        />
        <Worked
          steps={[
            <>A weather app uses your location to show your local forecast. If you share your location with an app you do not trust, others may track your movements.</>,
            <>A school AUP may forbid games and require respectful behaviour online.</>,
          ]}
        />
        <Mistake>Leaving location sharing on for every app. Allow it only for apps that need it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a LAN?</>,
          <>What is an extranet?</>,
          <>Give one use of location-based computing.</>,
          <>What is an AUP?</>,
        ]}
        answers={[
          <>A network for one building or site.</>,
          <>Part of an intranet that chosen outsiders may use.</>,
          <>A weather, traffic or map service.</>,
          <>A set of rules for using a network.</>,
        ]}
      />,
    ),
  },
];
