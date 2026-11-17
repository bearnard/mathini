import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Wearables and personal devices",
    content: slide(
      <>
        <Rule>A wearable is a device that you wear, such as a smartwatch or fitness tracker. Wearables, smartphones and tablets are personal mobile devices that link to networks.</Rule>
        <KeyTable
          title="Personal devices"
          head={["Device", "Use"]}
          aria="Personal devices. Smartphone: Calls, messages, apps, the Internet. Tablet: Reading, work and games on a larger screen. Smartwatch: Time, messages and health information on the wrist. Fitness tracker: Counts steps and heart rate."
          rows={[["Smartphone", "Calls, messages, apps, the Internet"], ["Tablet", "Reading, work and games on a larger screen"], ["Smartwatch", "Time, messages and health information on the wrist"], ["Fitness tracker", "Counts steps and heart rate"]]}
        />
        <Worked
          steps={[
            <>A fitness tracker counts a learner's steps and sends the total to her phone.</>,
            <>Wearables collect personal data, so the data should be protected.</>,
          ]}
        />
        <Mistake>Thinking that a wearable works alone. Most link to a phone.</Mistake>
      </>,
    ),
  },
  {
    title: "RFID, magnetic strips, bar codes and QR codes",
    content: slide(
      <>
        <Rule>These are ways of storing data so that a machine can read it. Each reads in a different way.</Rule>
        <KeyTable
          title="Data on a label or card"
          head={["Technology", "How it works"]}
          aria="Data on a label or card. RFID: A tag sends its data by radio to a reader, no line of sight needed. Magnetic strip: Data stored on a strip of magnetic material that is swiped. Bar code: Black and white lines read by a scanner (a till reads a product). QR code: A square code that a phone camera reads; it can hold a web address."
          rows={[["RFID", "A tag sends its data by radio to a reader, no line of sight needed"], ["Magnetic strip", "Data stored on a strip of magnetic material that is swiped"], ["Bar code", "Black and white lines read by a scanner (a till reads a product)"], ["QR code", "A square code that a phone camera reads; it can hold a web address"]]}
        />
        <Worked
          steps={[
            <>A shop scans a bar code to find the price. A learner scans a QR code on a poster to open a website.</>,
            <>An RFID tag on a school bag could be read by a reader at the gate.</>,
          ]}
        />
        <Mistake>Thinking that a bar code holds the price. It holds a number, and the system looks up the price.</Mistake>
      </>,
    ),
  },
  {
    title: "NFC, GPS and communication channels",
    content: slide(
      <>
        <Rule>Near field communication (NFC) works over very short distances, such as tapping a card to pay. The global positioning system (GPS) finds position using satellites. Devices communicate over channels such as Wi-Fi and Bluetooth, each with its own range.</Rule>
        <KeyTable
          title="Wireless links"
          head={["Technology", "Use"]}
          aria="Wireless links. NFC: Very short range; tap to pay or share. GPS: Finds a device's position using satellites. Wi-Fi: Links devices to a network over a building or area. Bluetooth: Short range links, such as earphones."
          rows={[["NFC", "Very short range; tap to pay or share"], ["GPS", "Finds a device's position using satellites"], ["Wi-Fi", "Links devices to a network over a building or area"], ["Bluetooth", "Short range links, such as earphones"]]}
        />
        <Worked
          steps={[
            <>A learner taps her phone on a reader to pay. This is NFC. A map app uses GPS to show where she is.</>,
            <>Bluetooth earphones work only within a few metres of the phone.</>,
          ]}
        />
        <Mistake>Thinking that GPS needs the Internet. GPS uses satellites; maps may need data.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a wearable?</>,
          <>What reads a QR code?</>,
          <>What is NFC used for?</>,
          <>What does GPS do?</>,
        ]}
        answers={[
          <>A device that you wear, such as a smartwatch.</>,
          <>A phone camera or scanner.</>,
          <>Very short range links, such as tap to pay.</>,
          <>Finds position using satellites.</>,
        ]}
      />,
    ),
  },
];
