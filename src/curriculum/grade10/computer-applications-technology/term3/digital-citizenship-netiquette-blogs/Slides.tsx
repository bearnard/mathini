import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Digital citizenship and your digital footprint",
    content: slide(
      <>
        <Rule>A digital citizen uses technology responsibly, safely and respectfully. Your digital footprint is the trail of data you leave online. Everything you post, search and share adds to it, and it can last a long time.</Rule>
        <KeyTable
          title="Citizen and footprint"
          head={["Term", "Meaning"]}
          aria="Citizen and footprint. Digital citizen: Uses ICT responsibly and respectfully. Digital footprint: The trail of data you leave online. Active footprint: What you post on purpose. Passive footprint: Data collected about you, such as sites you visit."
          rows={[["Digital citizen", "Uses ICT responsibly and respectfully"], ["Digital footprint", "The trail of data you leave online"], ["Active footprint", "What you post on purpose"], ["Passive footprint", "Data collected about you, such as sites you visit"]]}
        />
        <Worked
          steps={[
            <>A learner who posts an angry comment leaves an active footprint that may be seen later by an employer.</>,
            <>Think before you post: would you be happy if a future employer read it?</>,
          ]}
        />
        <Mistake>Believing that deleting a post removes the footprint. Copies may remain.</Mistake>
      </>,
    ),
  },
  {
    title: "Netiquette on e-mail and social media",
    content: slide(
      <>
        <Rule>Netiquette is good manners online. Be polite, clear and brief, use a subject line, check your spelling and tone, and do not type in capitals. On social media, respect others and think before you share.</Rule>
        <KeyTable
          title="General netiquette rules"
          head={["Rule", "Why"]}
          aria="General netiquette rules. Be polite and respectful: Others cannot see your face or hear your tone. Use a clear subject and short text: Readers save time. Do not type in capitals: It looks like shouting. Check spelling and tone: Mistakes spread fast. Think before you share: Posts last and can be copied."
          rows={[["Be polite and respectful", "Others cannot see your face or hear your tone"], ["Use a clear subject and short text", "Readers save time"], ["Do not type in capitals", "It looks like shouting"], ["Check spelling and tone", "Mistakes spread fast"], ["Think before you share", "Posts last and can be copied"]]}
        />
        <Worked
          steps={[
            <>A learner who replies in anger sends a message that hurts. Waiting and rereading it first is better.</>,
            <>On a group chat, do not post private photos of others without their permission.</>,
          ]}
        />
        <Mistake>Writing an e-mail the way you write a chat message. Match the style to the reader.</Mistake>
      </>,
    ),
  },
  {
    title: "Blogs, wikis and web applications",
    content: slide(
      <>
        <Rule>A blog is a web diary. A vlog is a video blog. A wiki is a site that many people can edit. A web application runs in a browser, such as an online document editor or cloud storage.</Rule>
        <KeyTable
          title="Web tools"
          head={["Tool", "Description"]}
          aria="Web tools. Blog, vlog: Regular written or video posts. Wiki: A site that many people edit together. Social network: A site for connecting and sharing. Web application: Software used in a browser, such as an online word processor. Cloud storage: Files kept online, for example in a cloud drive."
          rows={[["Blog, vlog", "Regular written or video posts"], ["Wiki", "A site that many people edit together"], ["Social network", "A site for connecting and sharing"], ["Web application", "Software used in a browser, such as an online word processor"], ["Cloud storage", "Files kept online, for example in a cloud drive"]]}
        />
        <Worked
          steps={[
            <>A class builds a study guide on a wiki, where each learner adds a page.</>,
            <>A group edits one report in an online word processor, so that everyone sees the latest version.</>,
          ]}
        />
        <Mistake>Treating a wiki as always correct. Anyone can edit it, so check the facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a digital footprint?</>,
          <>Give one netiquette rule.</>,
          <>What is a wiki?</>,
          <>What is a web application?</>,
        ]}
        answers={[
          <>The trail of data you leave online.</>,
          <>Be polite, or do not type in capitals.</>,
          <>A site that many people can edit.</>,
          <>Software that runs in a browser.</>,
        ]}
      />,
    ),
  },
];
