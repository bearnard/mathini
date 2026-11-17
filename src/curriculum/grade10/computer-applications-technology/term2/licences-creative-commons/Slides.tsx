import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Licences and copyright",
    content: slide(
      <>
        <Rule>Copyright gives the creator of software or other work the right to decide how it is copied and used. A licence agreement states what you may do. Using software without a licence is illegal and is called piracy.</Rule>
        <KeyTable
          title="Licence terms"
          head={["Term", "Meaning"]}
          aria="Licence terms. Copyright: The creator's legal right over the work. Licence agreement: The rules for using the software. End-user licence: Lets one person use the software on stated devices. Site licence: Lets an organisation use it on many computers at one site. Piracy: Copying or using software without permission."
          rows={[["Copyright", "The creator's legal right over the work"], ["Licence agreement", "The rules for using the software"], ["End-user licence", "Lets one person use the software on stated devices"], ["Site licence", "Lets an organisation use it on many computers at one site"], ["Piracy", "Copying or using software without permission"]]}
        />
        <Worked
          steps={[
            <>A school buys a site licence, so it can install the program on all the computers in its lab.</>,
            <>A learner who gives a friend a copy of a paid program breaks the licence.</>,
          ]}
        />
        <Mistake>Thinking that anything you can copy is free. Check the licence.</Mistake>
      </>,
    ),
  },
  {
    title: "Creative commons",
    content: slide(
      <>
        <Rule>Creative commons is a set of licences that let creators share their work and choose the freedoms they give. Common conditions are: you must name the creator, you may or may not use the work commercially, and you may or may not change it.</Rule>
        <KeyTable
          title="Creative commons conditions"
          head={["Condition", "Meaning"]}
          aria="Creative commons conditions. Attribution: Name the creator. Non-commercial: Not to be used to make money. No derivatives: Do not change the work. Share alike: Share changes under the same licence."
          rows={[["Attribution", "Name the creator"], ["Non-commercial", "Not to be used to make money"], ["No derivatives", "Do not change the work"], ["Share alike", "Share changes under the same licence"]]}
        />
        <Worked
          steps={[
            <>A photographer shares a photo under creative commons with attribution. A learner uses it in a project and writes the photographer's name under it.</>,
            <>If a work is marked non-commercial, a business may not use it in an advert.</>,
          ]}
        />
        <Mistake>Using a creative commons picture without naming the creator when the licence asks for attribution.</Mistake>
      </>,
    ),
  },
  {
    title: "Using content responsibly",
    content: slide(
      <>
        <Rule>Respect licences and copyright. Use work that you have permission to use, give credit, and do not pass off other people's work as your own.</Rule>
        <KeyTable
          title="Responsible use"
          head={["Action", "Why"]}
          aria="Responsible use. Read the licence: It says what you may do. Give credit: The creator deserves it. Use free or creative commons sources: They give permission. Do not copy and paste as your own: That is plagiarism. Buy or license software: It supports the creator and is legal."
          rows={[["Read the licence", "It says what you may do"], ["Give credit", "The creator deserves it"], ["Use free or creative commons sources", "They give permission"], ["Do not copy and paste as your own", "That is plagiarism"], ["Buy or license software", "It supports the creator and is legal"]]}
        />
        <Worked
          steps={[
            <>A learner needs a picture for a poster. She searches for pictures with a creative commons licence, and credits the creator.</>,
            <>Copying a paragraph from a website without naming the source is plagiarism.</>,
          ]}
        />
        <Mistake>Taking a picture from an online search without checking the licence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a site licence?</>,
          <>What does attribution mean?</>,
          <>What is piracy?</>,
          <>What is plagiarism?</>,
        ]}
        answers={[
          <>A licence that lets an organisation use software on many computers at one site.</>,
          <>Naming the creator.</>,
          <>Copying or using software without permission.</>,
          <>Presenting other people's work as your own.</>,
        ]}
      />,
    ),
  },
];
