import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Wireless technologies",
    content: slide(
      <>
        <Rule>Mobile devices connect without cables in several ways. Each has its own range and use.</Rule>
        <KeyTable
          title="Wireless links"
          head={["Technology", "Use"]}
          aria="Wireless links. Wi-Fi hotspot, personal: Your phone shares its mobile data with other devices. Wi-Fi hotspot, public: A shop or airport offers Wi-Fi to visitors; be careful what you send. Bluetooth: Short range; earphones, speakers, keyboards. NFC (near field communication): Very short range; tap to pay or share. 4G and 5G: Mobile data; 5G is faster."
          rows={[["Wi-Fi hotspot, personal", "Your phone shares its mobile data with other devices"], ["Wi-Fi hotspot, public", "A shop or airport offers Wi-Fi to visitors; be careful what you send"], ["Bluetooth", "Short range; earphones, speakers, keyboards"], ["NFC (near field communication)", "Very short range; tap to pay or share"], ["4G and 5G", "Mobile data; 5G is faster"]]}
        />
        <Worked
          steps={[
            <>A learner turns on her phone's hotspot so that her laptop can reach the Internet.</>,
            <>Tapping a bank card on a reader uses NFC: the card must be very close.</>,
          ]}
        />
        <Mistake>Using a public hotspot to type passwords. Others on the network may be able to read what you send.</Mistake>
      </>,
    ),
  },
  {
    title: "GPS and location services",
    content: slide(
      <>
        <Rule>The global positioning system (GPS) finds the position of a device using satellites. Apps use it for maps, weather and traffic. Location data is personal, so share it only with apps that need it.</Rule>
        <KeyTable
          title="Location"
          head={["Item", "Detail"]}
          aria="Location. GPS: Finds position from satellites. Uses: Maps, weather, traffic, finding a shop. Benefit: Services that fit where you are. Risk: Others may learn where you are and where you go. Control: Turn location off or allow it only while the app is in use."
          rows={[["GPS", "Finds position from satellites"], ["Uses", "Maps, weather, traffic, finding a shop"], ["Benefit", "Services that fit where you are"], ["Risk", "Others may learn where you are and where you go"], ["Control", "Turn location off or allow it only while the app is in use"]]}
        />
        <Worked
          steps={[
            <>A map app uses GPS to show your position and directions.</>,
            <>A learner checks which apps may use her location and turns it off for a game that does not need it.</>,
          ]}
        />
        <Mistake>Leaving location on for every app. It uses battery and shares your movements.</Mistake>
      </>,
    ),
  },
  {
    title: "Mobile apps",
    content: slide(
      <>
        <Rule>A mobile app is a program installed on a phone or tablet, usually from an app store. Install apps only from trusted stores, read the permissions they ask for, and keep them updated.</Rule>
        <KeyTable
          title="Installing and using apps"
          head={["Step", "Why"]}
          aria="Installing and using apps. Use a trusted app store: Apps are checked for harm. Read the permissions: Does a torch app need your contacts?. Check reviews and the publisher: Avoid fake apps. Keep apps updated: Fixes faults and weaknesses. Remove apps you do not use: Saves space and lowers risk."
          rows={[["Use a trusted app store", "Apps are checked for harm"], ["Read the permissions", "Does a torch app need your contacts?"], ["Check reviews and the publisher", "Avoid fake apps"], ["Keep apps updated", "Fixes faults and weaknesses"], ["Remove apps you do not use", "Saves space and lowers risk"]]}
        />
        <Worked
          steps={[
            <>A learner sees that a free game asks for access to her contacts and microphone. It does not need them, so she does not install it.</>,
            <>An app update fixes a security fault, so updating helps.</>,
          ]}
        />
        <Mistake>Accepting every permission without reading. Apps can collect more than they need.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is NFC used for?</>,
          <>What does GPS do?</>,
          <>Why be careful on a public hotspot?</>,
          <>Why read an app's permissions?</>,
        ]}
        answers={[
          <>Very short range links, such as tap to pay.</>,
          <>Finds the position of a device using satellites.</>,
          <>Others may read what you send.</>,
          <>It may ask for more than it needs.</>,
        ]}
      />,
    ),
  },
];
