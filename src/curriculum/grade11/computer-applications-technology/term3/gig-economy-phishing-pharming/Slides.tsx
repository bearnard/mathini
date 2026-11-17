import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The gig economy and decentralised work",
    content: slide(
      <>
        <Rule>The gig economy is work done in short jobs, or gigs, found through online platforms, instead of one regular job. Technology lets work be decentralised: people do it from different places. It creates jobs and flexibility, but also less security.</Rule>
        <KeyTable
          title="The gig economy"
          head={["Point", "Description"]}
          aria="The gig economy. Gig: A short job paid per task. Platform: An app or site that links workers and customers. Decentralisation of labour: Work done by people in many places. Benefit: Flexible hours; new jobs; extra income. Drawback: No steady salary or benefits; platforms set rules."
          rows={[["Gig", "A short job paid per task"], ["Platform", "An app or site that links workers and customers"], ["Decentralisation of labour", "Work done by people in many places"], ["Benefit", "Flexible hours; new jobs; extra income"], ["Drawback", "No steady salary or benefits; platforms set rules"]]}
        />
        <Worked
          steps={[
            <>A designer takes short jobs through an online platform and works from home. She chooses her hours but has no regular salary.</>,
            <>A delivery driver is paid per delivery and uses an app to find jobs.</>,
          ]}
        />
        <Mistake>Thinking that every gig worker earns more. Income can be uncertain.</Mistake>
      </>,
    ),
  },
  {
    title: "Phishing and pharming described",
    content: slide(
      <>
        <Rule>Phishing is a fake message that tries to trick you into giving details. Pharming sends you to a fake website that looks real. Both are deception-based attacks. Here they are described so that you can recognise and avoid them.</Rule>
        <KeyTable
          title="Deception-based attacks"
          head={["Attack", "Description"]}
          aria="Deception-based attacks. Phishing: A fake e-mail or message that asks for your details. Pharming: A fake website reached even when you type the real address. Warning signs: Urgent wording, spelling mistakes, strange links, requests for passwords. Real organisations: Do not ask for passwords by e-mail."
          rows={[["Phishing", "A fake e-mail or message that asks for your details"], ["Pharming", "A fake website reached even when you type the real address"], ["Warning signs", "Urgent wording, spelling mistakes, strange links, requests for passwords"], ["Real organisations", "Do not ask for passwords by e-mail"]]}
        />
        <Worked
          steps={[
            <>An e-mail claims to be from a bank and says your account is locked. It asks you to click a link and type your password. This is phishing.</>,
            <>If a bank website looks odd or has no padlock, do not enter details.</>,
          ]}
        />
        <Mistake>Clicking a link because the message looks official. Check the sender and go to the site yourself.</Mistake>
      </>,
    ),
  },
  {
    title: "Staying safe",
    content: slide(
      <>
        <Rule>Safe habits protect against both attacks. Check before you click, protect your accounts and report what you find.</Rule>
        <KeyTable
          title="Safe habits"
          head={["Habit", "Why"]}
          aria="Safe habits. Check the sender and the link: Fake messages look real. Type the address yourself: Avoids fake links. Look for https and a padlock: The connection is encrypted. Use extra verification: A stolen password is not enough. Report phishing: Services can block the sender."
          rows={[["Check the sender and the link", "Fake messages look real"], ["Type the address yourself", "Avoids fake links"], ["Look for https and a padlock", "The connection is encrypted"], ["Use extra verification", "A stolen password is not enough"], ["Report phishing", "Services can block the sender"]]}
        />
        <Worked
          steps={[
            <>A learner gets a prize message that asks for a fee. She does not reply, and reports it as spam.</>,
            <>Extra verification stops a criminal who has only the password.</>,
          ]}
        />
        <Mistake>Believing that a padlock proves that a site is honest. It shows only that the connection is encrypted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the gig economy?</>,
          <>What is phishing?</>,
          <>What is pharming?</>,
          <>Give one safe habit.</>,
        ]}
        answers={[
          <>Work in short jobs found through online platforms.</>,
          <>A fake message that tries to get your details.</>,
          <>Sending a user to a fake website.</>,
          <>Check the sender, or type the address yourself.</>,
        ]}
      />,
    ),
  },
];
