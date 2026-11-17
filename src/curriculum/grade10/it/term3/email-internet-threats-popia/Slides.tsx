import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "E-mail and Internet threats",
    content: slide(
      <>
        <Rule>Some messages and websites are made to harm or trick you. Know what each threat is, so that you can recognise it. Here they are described, not taught.</Rule>
        <KeyTable
          title="Threats"
          head={["Threat", "Description"]}
          aria="Threats. Virus: A harmful program that spreads and may damage files. Hoax: A false warning or story that people are urged to pass on. Fake news: False information made to look like news. Spam: Unwanted e-mail, often adverts, sent in bulk. Phishing: A fake message that tries to get your details. E-mail spoofing: A message that pretends to come from someone else. Pharming: Sending you to a fake website."
          rows={[["Virus", "A harmful program that spreads and may damage files"], ["Hoax", "A false warning or story that people are urged to pass on"], ["Fake news", "False information made to look like news"], ["Spam", "Unwanted e-mail, often adverts, sent in bulk"], ["Phishing", "A fake message that tries to get your details"], ["E-mail spoofing", "A message that pretends to come from someone else"], ["Pharming", "Sending you to a fake website"]]}
        />
        <Worked
          steps={[
            <>An e-mail that looks like it is from your bank, but asks you to click a link and type your password, is phishing.</>,
            <>A chain message that says &ldquo;forward this to ten friends or bad luck follows&rdquo; is a hoax.</>,
          ]}
        />
        <Mistake>Passing on a shocking message without checking. Fake news and hoaxes spread because people share them.</Mistake>
      </>,
    ),
  },
  {
    title: "Safe e-mail and Internet use",
    content: slide(
      <>
        <Rule>Most harm can be avoided by simple habits. Think before you click, protect your details and keep software up to date.</Rule>
        <KeyTable
          title="Safe use"
          head={["Habit", "Why"]}
          aria="Safe use. Do not open attachments from strangers: They may carry a virus. Check the sender and the link before you click: Spoofed senders and fake links look real. Never give your password by e-mail: A real organisation does not ask. Use strong passwords and keep software updated: Weak or old systems are easier to attack. Report spam and phishing: Services can block the sender. Check facts from more than one reliable source: Fake news often has one source only."
          rows={[["Do not open attachments from strangers", "They may carry a virus"], ["Check the sender and the link before you click", "Spoofed senders and fake links look real"], ["Never give your password by e-mail", "A real organisation does not ask"], ["Use strong passwords and keep software updated", "Weak or old systems are easier to attack"], ["Report spam and phishing", "Services can block the sender"], ["Check facts from more than one reliable source", "Fake news often has one source only"]]}
        />
        <Worked
          steps={[
            <>A learner receives a message that says she has won a prize and must pay a fee. She does not reply, and deletes it.</>,
            <>If a link looks strange, type the real address of the site yourself.</>,
          ]}
        />
        <Mistake>Replying to spam. A reply shows that your address is real, and brings more.</Mistake>
      </>,
    ),
  },
  {
    title: "POPIA: protecting personal information",
    content: slide(
      <>
        <Rule>The Protection of Personal Information Act (POPIA) is a South African law that protects personal information. Its purpose is to make sure that organisations collect, store and use personal information responsibly.</Rule>
        <KeyTable
          title="POPIA in brief"
          head={["Idea", "Meaning"]}
          aria="POPIA in brief. Personal information: Details that identify a person, such as name, ID number or phone number. Purpose: Protect people's personal information from misuse. Organisations must: Collect only what they need, keep it safe and use it fairly. Your rights: To know what is kept about you and to ask for corrections."
          rows={[["Personal information", "Details that identify a person, such as name, ID number or phone number"], ["Purpose", "Protect people's personal information from misuse"], ["Organisations must", "Collect only what they need, keep it safe and use it fairly"], ["Your rights", "To know what is kept about you and to ask for corrections"]]}
        />
        <Worked
          steps={[
            <>A shop that asks for your ID number must explain why it needs it and keep it safe.</>,
            <>If an organisation misuses your information, you can complain to the Information Regulator.</>,
          ]}
        />
        <Mistake>Thinking that POPIA only matters to big firms. It applies to every organisation that handles personal information, including schools.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is phishing?</>,
          <>What is spam?</>,
          <>Give one safe Internet habit.</>,
          <>What is the purpose of POPIA?</>,
        ]}
        answers={[
          <>A fake message that tries to get your details.</>,
          <>Unwanted e-mail sent in bulk.</>,
          <>For example: do not open attachments from strangers, or check the sender before you click.</>,
          <>To protect people's personal information from misuse.</>,
        ]}
      />,
    ),
  },
];
