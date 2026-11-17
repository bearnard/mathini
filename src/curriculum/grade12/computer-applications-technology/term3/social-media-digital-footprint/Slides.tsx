import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Social media platforms and their issues",
    content: slide(
      <>
        <Rule>Social media platforms let people share content and connect. They bring benefits and also legal and ethical issues.</Rule>
        <KeyTable
          title="Benefits and issues"
          head={["Item", "Points"]}
          aria="Benefits and issues. Benefits: Keep in touch, share ideas, learn, promote a business. Privacy: Personal details can be seen and collected. Copyright: Posting someone else's work without permission. Ethics: Respect others; think before you post. Time: Can use up hours and affect sleep and study."
          rows={[["Benefits", "Keep in touch, share ideas, learn, promote a business"], ["Privacy", "Personal details can be seen and collected"], ["Copyright", "Posting someone else's work without permission"], ["Ethics", "Respect others; think before you post"], ["Time", "Can use up hours and affect sleep and study"]]}
        />
        <Worked
          steps={[
            <>A learner posts a photo that she took herself, which is fine. Posting a song she did not make, with no permission, may break copyright.</>,
            <>A business uses a page to advertise, but must not make false claims.</>,
          ]}
        />
        <Mistake>Believing that a post is private because you posted it to friends. Friends can share it.</Mistake>
      </>,
    ),
  },
  {
    title: "Digital footprint and cyber profile",
    content: slide(
      <>
        <Rule>Your digital footprint is the trail of data you leave online. Your cyber profile is the picture of you that others build from it. Employers and others may look at it.</Rule>
        <KeyTable
          title="Footprint and profile"
          head={["Term", "Meaning"]}
          aria="Footprint and profile. Active footprint: What you post on purpose. Passive footprint: Data collected about you, such as sites you visit. Cyber profile: The picture others form from your posts. Managing it: Check privacy settings; delete what you should not share."
          rows={[["Active footprint", "What you post on purpose"], ["Passive footprint", "Data collected about you, such as sites you visit"], ["Cyber profile", "The picture others form from your posts"], ["Managing it", "Check privacy settings; delete what you should not share"]]}
        />
        <Worked
          steps={[
            <>A school leaver applies for a job. The employer searches her name and finds old posts, so her cyber profile matters.</>,
            <>Search for your own name to see what others can find.</>,
          ]}
        />
        <Mistake>Thinking that deleting a post removes it everywhere. Others may have copied it.</Mistake>
      </>,
    ),
  },
  {
    title: "Fake news, defamation and cyberbullying",
    content: slide(
      <>
        <Rule>Fake news is false information made to look true. Misinformation is false information shared by mistake. Disinformation is false information spread on purpose. Defamation harms a person's reputation with false statements. Cyberbullying is using technology to hurt or threaten someone.</Rule>
        <KeyTable
          title="Harmful online behaviour"
          head={["Term", "Meaning"]}
          aria="Harmful online behaviour. Misinformation: False information shared by mistake. Disinformation: False information spread on purpose. Fake news: False stories that look like real news. Defamation: False statements that damage a person's reputation. Cyberbullying: Using technology to hurt, threaten or shame. What to do: Check sources, do not share, report, keep evidence."
          rows={[["Misinformation", "False information shared by mistake"], ["Disinformation", "False information spread on purpose"], ["Fake news", "False stories that look like real news"], ["Defamation", "False statements that damage a person's reputation"], ["Cyberbullying", "Using technology to hurt, threaten or shame"], ["What to do", "Check sources, do not share, report, keep evidence"]]}
        />
        <Worked
          steps={[
            <>A learner shares a shocking story without checking it. It was false: this is misinformation. If someone invented it to mislead, it is disinformation.</>,
            <>A learner who is bullied online should keep the messages, block the sender and tell a trusted adult.</>,
          ]}
        />
        <Mistake>Sharing before checking. Check who wrote it and whether other reliable sources agree.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a digital footprint?</>,
          <>What is the difference between misinformation and disinformation?</>,
          <>What is defamation?</>,
          <>What should you do if you are cyberbullied?</>,
        ]}
        answers={[
          <>The trail of data you leave online.</>,
          <>Misinformation is shared by mistake. Disinformation is spread on purpose.</>,
          <>False statements that damage a person's reputation.</>,
          <>Keep the evidence, block, and tell a trusted adult.</>,
        ]}
      />,
    ),
  },
];
