import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Cloud storage as a service",
    content: slide(
      <>
        <Rule>Cloud storage keeps your files on a provider's servers, which you reach over the Internet. It is a form of software as a service (SaaS): you use the software and storage you need, usually for a fee or with free limits, and the provider looks after the hardware.</Rule>
        <KeyTable
          title="Cloud storage"
          head={["Item", "Description"]}
          aria="Cloud storage. Cloud storage: Files kept online on a provider's servers. SaaS: Software you use online; the provider runs it. Advantages: Reach files anywhere; share; backup and updates handled. Risks: Needs the Internet; provider keeps your data; fees; security."
          rows={[["Cloud storage", "Files kept online on a provider's servers"], ["SaaS", "Software you use online; the provider runs it"], ["Advantages", "Reach files anywhere; share; backup and updates handled"], ["Risks", "Needs the Internet; provider keeps your data; fees; security"]]}
        />
        <Worked
          steps={[
            <>A learner saves a project in cloud storage and opens it on a school computer and at home.</>,
            <>If the provider has a fault, files may be unavailable for a while.</>,
          ]}
        />
        <Mistake>Believing that cloud files are always safe. Keep a second copy of important work.</Mistake>
      </>,
    ),
  },
  {
    title: "Choosing and using cloud storage",
    content: slide(
      <>
        <Rule>Compare the free space, the cost, the security and how easily files can be shared. Use strong passwords and extra verification to protect your account.</Rule>
        <KeyTable
          title="Choosing cloud storage"
          head={["Factor", "Question to ask"]}
          aria="Choosing cloud storage. Space: How much storage do I get free?. Cost: What does extra space cost each month?. Security: Is my account protected by extra verification?. Sharing: Can I control who sees my files?. Access: Does it work on my devices?."
          rows={[["Space", "How much storage do I get free?"], ["Cost", "What does extra space cost each month?"], ["Security", "Is my account protected by extra verification?"], ["Sharing", "Can I control who sees my files?"], ["Access", "Does it work on my devices?"]]}
        />
        <Worked
          steps={[
            <>A family needs 100 GB. A plan with 15 GB free is too small, so they compare paid plans.</>,
            <>Turning on two-step verification protects the account if the password is stolen.</>,
          ]}
        />
        <Mistake>Using the same password for the cloud and other sites. One leak could expose all your files.</Mistake>
      </>,
    ),
  },
  {
    title: "Interpreting adverts for hardware and cloud storage",
    content: slide(
      <>
        <Rule>Adverts show features and prices. Read them carefully: compare the features that matter to you, check what is included, and watch for small print.</Rule>
        <KeyTable
          title="Reading an advert"
          head={["Part", "What to check"]}
          aria="Reading an advert. Specification: Processor, memory, storage size and type. Price: Is it the total, or a monthly fee?. Included: Are the software and warranty included?. Small print: Limits, extra costs, contract length. Claims: Do the claims match the facts?."
          rows={[["Specification", "Processor, memory, storage size and type"], ["Price", "Is it the total, or a monthly fee?"], ["Included", "Are the software and warranty included?"], ["Small print", "Limits, extra costs, contract length"], ["Claims", "Do the claims match the facts?"]]}
        />
        <Worked
          steps={[
            <>Advert A: a laptop with 8 GB memory and a 256 GB SSD. Advert B: 4 GB memory and a 1 TB hard drive. A learner who works with large files and wants speed picks A for the SSD and memory.</>,
            <>A cloud advert says 'unlimited storage' but the small print limits the file size, so it is not truly unlimited.</>,
          ]}
        />
        <Mistake>Judging by price alone. The cheapest option may not meet your needs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is SaaS?</>,
          <>Give one advantage of cloud storage.</>,
          <>Give one risk of cloud storage.</>,
          <>What should you check in the small print of an advert?</>,
        ]}
        answers={[
          <>Software that you use online and that the provider runs.</>,
          <>Reach files anywhere, or share easily.</>,
          <>Needs the Internet, or the provider keeps your data.</>,
          <>Limits, extra costs and contract length.</>,
        ]}
      />,
    ),
  },
];
