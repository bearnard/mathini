import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The value of data and metadata',
    content: slide(
      <>
        <Rule>Data has value because it can be turned into information that helps people decide. Metadata is data about data: it describes a file or record without being its content.</Rule>
        <KeyTable
          title="Data and metadata"
          head={['Item', 'Example']}
          aria="Data and metadata. Data: a customer's order. Metadata about a photo: the date it was taken, the camera type and the place. Metadata about a document: its author, size and when it was last changed. Metadata helps to find, sort and manage data."
          rows={[
            ['Data', 'A customer’s order'],
            ['Metadata of a photo', 'Date, camera, place'],
            ['Metadata of a document', 'Author, size, last changed'],
          ]}
        />
        <Worked
          steps={[
            <>A shop&rsquo;s sales data shows which products sell best. The owner uses it to decide what to order.</>,
            <>The date and place stored in a photo are metadata. They help to find the photo, but they can also reveal where you were.</>,
          ]}
        />
        <Mistake>Thinking that metadata is unimportant. It can reveal a lot about a person, such as where and when a photo was taken.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting data',
    content: slide(
      <>
        <Rule>Data must be kept accurate and safe. Validation, verification, integrity checks, a log of changes, backups and access control each protect it in a different way.</Rule>
        <KeyTable
          title="Ways of protecting data"
          head={['Method', 'What it does']}
          aria="Ways of protecting data. Validation: checks that data entered is sensible, such as a date that exists. Verification: checks that the data is the same as the source, such as typing it twice. Integrity: the data stays accurate and consistent. Logging changes: records who changed what and when. Warehousing and parallel data sets: keeping copies so data is not lost. Controlling access: passwords, security and user rights decide who may see or change data."
          rows={[
            ['Validation', 'Checks the data is sensible'],
            ['Verification', 'Checks it matches the source'],
            ['Integrity', 'Keeps it accurate and consistent'],
            ['Logging changes', 'Records who changed what, and when'],
            ['Warehousing, parallel data sets', 'Copies kept so data is not lost'],
            ['Controlling access', 'Passwords and user rights'],
          ]}
        />
        <Worked
          steps={[
            <>Validation rejects a birth date of 31 February. Verification asks a clerk to enter an ID number twice and compares the two entries.</>,
            <>A log shows that user &ldquo;Sipho&rdquo; changed a price at 14:05 on Monday, so a mistake can be traced.</>,
          ]}
        />
        <Mistake>Mixing up validation and verification. Validation asks &ldquo;is it sensible?&rdquo; Verification asks &ldquo;is it the same as the source?&rdquo;</Mistake>
      </>,
    ),
  },
  {
    title: 'Big data, data mining and privacy',
    content: slide(
      <>
        <Rule>Warehouses and mining make very large amounts of data useful, but they raise social questions about privacy, fairness and security. Mobile technology adds to this, because phones collect location and activity data.</Rule>
        <KeyTable
          title="Social implications"
          head={['Issue', 'Example']}
          aria="Social implications of big data, warehousing, mining and mobile technology. Benefit: a shop can see what customers want. Privacy: personal data can be collected without people knowing. Fairness: decisions based on data can be unfair to some groups. Security: a large store of data is a target for criminals. Mobile technology: a phone records location, and apps may share it."
          rows={[
            ['Benefit', 'Businesses learn what customers want'],
            ['Privacy', 'Data collected without people knowing'],
            ['Fairness', 'Data-based decisions can disadvantage groups'],
            ['Security', 'A large store of data attracts criminals'],
            ['Mobile technology', 'A phone records location; apps may share it'],
          ]}
        />
        <Worked
          steps={[
            <>A loyalty card records what you buy. The shop mines the data to send offers. This is useful, but it also builds a detailed picture of your life.</>,
            <>You can limit the risk: check which apps may use your location, and read what a service will do with your data.</>,
          ]}
        />
        <Mistake>Believing that data is harmless because your name is not in it. Combined data can often identify a person.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is metadata?</>,
          <>What is the difference between validation and verification?</>,
          <>What does a log of changes record?</>,
          <>Give one privacy risk of data mining.</>,
        ]}
        answers={[
          <>Data about data, such as the date and author of a file.</>,
          <>Validation checks that data is sensible. Verification checks that it matches the source.</>,
          <>Who changed what, and when.</>,
          <>For example: personal data is collected without people knowing, or combined data identifies a person.</>,
        ]}
      />,
    ),
  },
];
