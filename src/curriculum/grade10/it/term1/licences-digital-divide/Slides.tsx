import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Licences, copyright and piracy",
    content: slide(
      <>
        <Rule>Software is protected by copyright, which gives the creator the right to decide how it is copied and used. A licence agreement says what you may do. Using or copying software without permission is piracy and is against the law.</Rule>
        <KeyTable
          title="Protection of software and content"
          head={["Term", "Meaning"]}
          aria="Protection of software and content. Copyright: The creator's legal right to control copies and use. Licence agreement: The rules for using the software. Piracy: Copying or using software without permission. Creative commons: A licence that lets creators share work with chosen freedoms. Copyleft: Free to use and change, if the changed version stays free too."
          rows={[["Copyright", "The creator's legal right to control copies and use"], ["Licence agreement", "The rules for using the software"], ["Piracy", "Copying or using software without permission"], ["Creative commons", "A licence that lets creators share work with chosen freedoms"], ["Copyleft", "Free to use and change, if the changed version stays free too"]]}
        />
        <Worked
          steps={[
            <>A learner who copies a paid program for friends is committing piracy, even if no money changes hands.</>,
            <>A photographer shares a photo under a creative commons licence that allows use if the photographer is named.</>,
          ]}
        />
        <Mistake>Thinking that anything found online is free to copy. Check the licence.</Mistake>
      </>,
    ),
  },
  {
    title: "Social, ethical and legal issues; economic reasons",
    content: slide(
      <>
        <Rule>Computers raise social, ethical and legal questions. Businesses and schools also use computers for economic reasons: saving paper, labour and communication costs, and for efficiency, accuracy and reliability.</Rule>
        <KeyTable
          title="Reasons for using computers"
          head={["Reason", "Example"]}
          aria="Reasons for using computers. Save paper: Send a notice by e-mail, not on paper. Save labour: A till adds a bill faster than a person. Lower communication costs: A video call costs less than travel. Efficiency, accuracy, reliability: A computer repeats a task without tiring. Advantage and disadvantage: Faster work, but jobs may change and people may over-rely on it."
          rows={[["Save paper", "Send a notice by e-mail, not on paper"], ["Save labour", "A till adds a bill faster than a person"], ["Lower communication costs", "A video call costs less than travel"], ["Efficiency, accuracy, reliability", "A computer repeats a task without tiring"], ["Advantage and disadvantage", "Faster work, but jobs may change and people may over-rely on it"]]}
        />
        <Worked
          steps={[
            <>A school sends reports by e-mail, which saves paper and postage.</>,
            <>A bank uses software to check payments around the clock, which is reliable but depends on power.</>,
          ]}
        />
        <Mistake>Listing only advantages. A balanced answer also gives a disadvantage.</Mistake>
      </>,
    ),
  },
  {
    title: "The digital divide",
    content: slide(
      <>
        <Rule>The digital divide is the gap between people who have access to computers and the Internet and people who do not. Reasons include cost, no electricity, poor connections, little training and language. Digitally enabled citizens have the access and skills to take part.</Rule>
        <KeyTable
          title="The digital divide"
          head={["Item", "Description"]}
          aria="The digital divide. Digital divide: The gap between those with and without access. Reasons: Cost, no power or signal, lack of skills, language. Digitally enabled citizen: Has access and the skills to use ICT well. Ways to narrow it: Cheaper data, school computer rooms, training."
          rows={[["Digital divide", "The gap between those with and without access"], ["Reasons", "Cost, no power or signal, lack of skills, language"], ["Digitally enabled citizen", "Has access and the skills to use ICT well"], ["Ways to narrow it", "Cheaper data, school computer rooms, training"]]}
        />
        <Worked
          steps={[
            <>A rural learner with no signal and no device is on the wrong side of the divide.</>,
            <>A school computer lab and cheaper data can help to narrow it.</>,
          ]}
        />
        <Mistake>Thinking that the divide is only about owning a device. Skills, data costs and signal matter too.</Mistake>
      </>,
    ),
  },
  {
    title: "Digital citizenship and your digital footprint",
    content: slide(
      <>
        <Rule>A digital citizen uses technology responsibly and respectfully. Your digital footprint is the trail of data you leave online, from posts to searches. It can last a long time.</Rule>
        <KeyTable
          title="Digital citizenship"
          head={["Item", "Meaning"]}
          aria="Digital citizenship. Digital citizen: Uses ICT responsibly, safely and respectfully. Digital footprint: The data trail you leave online. Active footprint: What you post on purpose. Passive footprint: Data collected about you, such as sites you visit."
          rows={[["Digital citizen", "Uses ICT responsibly, safely and respectfully"], ["Digital footprint", "The data trail you leave online"], ["Active footprint", "What you post on purpose"], ["Passive footprint", "Data collected about you, such as sites you visit"]]}
        />
        <Worked
          steps={[
            <>A learner who posts a rude comment leaves an active footprint that may be seen later by an employer.</>,
            <>Websites that track what you visit add to your passive footprint.</>,
          ]}
        />
        <Mistake>Believing that deleting a post removes the footprint. Copies may remain.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is piracy?</>,
          <>What is the digital divide?</>,
          <>What is a digital footprint?</>,
          <>Give one economic reason for using computers.</>,
        ]}
        answers={[
          <>Copying or using software without permission.</>,
          <>The gap between people who have access to ICT and those who do not.</>,
          <>The trail of data you leave online.</>,
          <>Saving paper, labour or communication costs.</>,
        ]}
      />,
    ),
  },
];
