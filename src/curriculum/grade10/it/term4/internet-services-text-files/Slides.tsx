import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Online storage, synchronisation and collaboration",
    content: slide(
      <>
        <Rule>Internet services are tools that you use over the Internet. Online storage keeps your files on a server. Synchronisation keeps copies on several devices the same. Collaboration lets people work on the same file together.</Rule>
        <KeyTable
          title="Online services"
          head={["Service", "What it does"]}
          aria="Online services. Online storage: Files kept on a server; reach them anywhere. Synchronisation: Changes on one device appear on the others. Collaboration: Several people edit one document at the same time."
          rows={[["Online storage", "Files kept on a server; reach them anywhere"], ["Synchronisation", "Changes on one device appear on the others"], ["Collaboration", "Several people edit one document at the same time"]]}
        />
        <Worked
          steps={[
            <>A group project is kept in online storage. Each member edits it, and everyone sees the latest version.</>,
            <>A phone and a laptop are synchronised, so a photo taken on the phone appears on the laptop.</>,
          ]}
        />
        <Mistake>Assuming that online files are safe without a backup. Keep a second copy of important work.</Mistake>
      </>,
    ),
  },
  {
    title: "Online shopping and social media",
    content: slide(
      <>
        <Rule>Online shopping lets you buy goods and services over the Internet. Social media sites let people share content and connect. Each has benefits and risks.</Rule>
        <KeyTable
          title="Shopping and social media"
          head={["Service", "Benefit and risk"]}
          aria="Shopping and social media. Online shopping: Convenient and often cheaper; risk of fraud and fake shops. Safe shopping: Use a trusted site; look for https; use secure payment. Social media: Share and connect; risk to privacy and of cyberbullying. Think before you share: Posts last and can be copied."
          rows={[["Online shopping", "Convenient and often cheaper; risk of fraud and fake shops"], ["Safe shopping", "Use a trusted site; look for https; use secure payment"], ["Social media", "Share and connect; risk to privacy and of cyberbullying"], ["Think before you share", "Posts last and can be copied"]]}
        />
        <Worked
          steps={[
            <>A learner buys a book from a well-known shop that uses https and a secure payment method.</>,
            <>A learner checks her privacy settings before she posts a photo.</>,
          ]}
        />
        <Mistake>Buying from a site only because the price is very low. Very low prices can mean a scam.</Mistake>
      </>,
    ),
  },
  {
    title: "Saving and loading a text file",
    content: slide(
      <>
        <Rule>A text file stores text on a disk. In the PAT you may save the contents of a list box to a file and load them back. In Delphi you use SaveToFile and LoadFromFile, with a file name.</Rule>
        <KeyTable
          title="Text file input and output"
          head={["Task", "Delphi"]}
          aria="Text file input and output. Save a list box: lstItems.Items.SaveToFile('data.txt');. Load a list box: lstItems.Items.LoadFromFile('data.txt');. Check the file first: if FileExists('data.txt') then .... Why: Keep data after the program closes."
          rows={[["Save a list box", "lstItems.Items.SaveToFile('data.txt');"], ["Load a list box", "lstItems.Items.LoadFromFile('data.txt');"], ["Check the file first", "if FileExists('data.txt') then ..."], ["Why", "Keep data after the program closes"]]}
        />
        <Worked
          steps={[
            <>When the program closes it saves the list. When it opens it loads the list, so the user finds the data again.</>,
            <>Loading a file that does not exist gives an error, so check with FileExists first.</>,
          ]}
        />
        <Mistake>Loading a file without checking that it exists. The program can crash.</Mistake>
      </>,
    ),
  },
  {
    title: "Finishing the project",
    content: slide(
      <>
        <Rule>Finalise the PAT by building the solution from the plan, adding comments that explain the code, and testing it against the user stories.</Rule>
        <KeyTable
          title="Finalising"
          head={["Task", "Detail"]}
          aria="Finalising. Construct: Build each requirement from your plan. Comments: Explain what the code does. Test: Run the test cases and fix errors. Document: Keep your planning with the program."
          rows={[["Construct", "Build each requirement from your plan"], ["Comments", "Explain what the code does"], ["Test", "Run the test cases and fix errors"], ["Document", "Keep your planning with the program"]]}
        />
        <Worked
          steps={[
            <>A comment above a procedure says what it does and what it needs. This helps a teacher, and helps you later.</>,
            <>Run each test case and tick it off when the actual output matches the expected output.</>,
          ]}
        />
        <Mistake>Leaving testing to the last day. Test as you build.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is synchronisation?</>,
          <>Give one risk of social media.</>,
          <>Which Delphi method saves a list box to a file?</>,
          <>Why check that a file exists before loading it?</>,
        ]}
        answers={[
          <>Keeping copies on several devices the same.</>,
          <>Loss of privacy or cyberbullying.</>,
          <>SaveToFile.</>,
          <>Loading a missing file gives an error.</>,
        ]}
      />,
    ),
  },
];
