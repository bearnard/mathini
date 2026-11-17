import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Online services and the gig economy",
    content: slide(
      <>
        <Rule>Digitalisation moves services online: banking, booking, learning and meetings. The gig economy is work done in short jobs (gigs) found through online platforms, instead of a regular job with one employer.</Rule>
        <KeyTable
          title="Online services and gigs"
          head={["Item", "Example"]}
          aria="Online services and gigs. Online banking: Pay and check a balance on a phone. Booking and reservations: Book a ticket or a room online. E-learning: Take a course on a screen. Video conferencing, collaboration: Meet and edit documents with others from far away. Gig economy: Delivery driver or freelance designer paid per job."
          rows={[["Online banking", "Pay and check a balance on a phone"], ["Booking and reservations", "Book a ticket or a room online"], ["E-learning", "Take a course on a screen"], ["Video conferencing, collaboration", "Meet and edit documents with others from far away"], ["Gig economy", "Delivery driver or freelance designer paid per job"]]}
        />
        <Worked
          steps={[
            <>A designer takes short jobs through an online platform. She works when she wants, but has no steady salary or benefits.</>,
            <>A school holds a parents' meeting by video conference, so parents do not have to travel.</>,
          ]}
        />
        <Mistake>Thinking that every gig worker is their own boss with no limits. Platforms set prices and rules, and workers often carry the costs.</Mistake>
      </>,
    ),
  },
  {
    title: "Digital careers and the workplace",
    content: slide(
      <>
        <Rule>New technology creates new careers and changes old ones. Work can be done remotely, labour can be decentralised, offices can be automated, and robots and artificial intelligence take over some tasks.</Rule>
        <KeyTable
          title="Careers and workplace change"
          head={["Item", "Description"]}
          aria="Careers and workplace change. Digital forensic investigator: Finds evidence on computers after a crime. 3D architect, 3D printing operator: Designs and prints models, including prosthetic limbs. Privacy consultant: Advises how to protect personal information. Remote office: Staff work from home or elsewhere. Office automation, robotics, AI: Machines do routine tasks."
          rows={[["Digital forensic investigator", "Finds evidence on computers after a crime"], ["3D architect, 3D printing operator", "Designs and prints models, including prosthetic limbs"], ["Privacy consultant", "Advises how to protect personal information"], ["Remote office", "Staff work from home or elsewhere"], ["Office automation, robotics, AI", "Machines do routine tasks"]]}
        />
        <Worked
          steps={[
            <>A factory uses robots for welding, and employs fewer welders but more technicians who keep the robots working.</>,
            <>A privacy consultant helps a company to follow the rules on personal information.</>,
          ]}
        />
        <Mistake>Assuming that automation only removes jobs. It also creates new ones, though people may need new skills.</Mistake>
      </>,
    ),
  },
  {
    title: "Social media, influencing and your online identity",
    content: slide(
      <>
        <Rule>Social media lets people share and influence others. Your online identity is the picture of you that others build from what you post. Protect it, because misuse can harm your safety and reputation.</Rule>
        <KeyTable
          title="Protecting your online identity"
          head={["Step", "Why"]}
          aria="Protecting your online identity. Think before you post: Posts last and spread. Use privacy settings: Limit who sees your details. Strong, different passwords: One leak does not open every account. Beware of fake profiles and scams: They are used to steal details. Check what is public about you: You can remove what you should not share."
          rows={[["Think before you post", "Posts last and spread"], ["Use privacy settings", "Limit who sees your details"], ["Strong, different passwords", "One leak does not open every account"], ["Beware of fake profiles and scams", "They are used to steal details"], ["Check what is public about you", "You can remove what you should not share"]]}
        />
        <Worked
          steps={[
            <>A learner posts a photo that shows the school badge and the street. A stranger can learn where she is. Removing the location and tightening the settings lowers the risk.</>,
            <>An influencer is a person with a large following, who can shape what many others buy or think.</>,
          ]}
        />
        <Mistake>Believing that deleting a post removes it everywhere. Others may have copied it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the gig economy?</>,
          <>Name one digital career.</>,
          <>Give one way to protect your online identity.</>,
          <>What is a remote office?</>,
        ]}
        answers={[
          <>Work done in short jobs found through online platforms.</>,
          <>For example: digital forensic investigator, 3D printing operator, privacy consultant.</>,
          <>Use privacy settings, strong passwords, or think before you post.</>,
          <>Work done from home or another place away from the office.</>,
        ]}
      />,
    ),
  },
];
