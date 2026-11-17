import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Static and dynamic websites",
    content: slide(
      <>
        <Rule>A static website shows the same fixed pages to every visitor. A dynamic website builds pages from stored data, so it can change, store information and respond to the visitor. Location-based sites give content that fits where the visitor is.</Rule>
        <KeyTable
          title="Types of website"
          head={["Type", "Features"]}
          aria="Types of website. Static: Fixed pages; simple and cheap; no stored visitor data. Dynamic: Pages built from data; can interact, log in, buy and store. Location-based: Content depends on the visitor's position, such as nearby shops."
          rows={[["Static", "Fixed pages; simple and cheap; no stored visitor data"], ["Dynamic", "Pages built from data; can interact, log in, buy and store"], ["Location-based", "Content depends on the visitor's position, such as nearby shops"]]}
        />
        <Worked
          steps={[
            <>A small club page with its times and address is static. An online shop that shows your orders is dynamic.</>,
            <>A weather site that shows your town's forecast is location-based.</>,
          ]}
        />
        <Mistake>Thinking that a dynamic site must look different. The word describes how the pages are made.</Mistake>
      </>,
    ),
  },
  {
    title: "HTTP and HTTPS",
    content: slide(
      <>
        <Rule>HTTP is the set of rules that a browser and a web server use to send web pages. HTTPS is HTTP with encryption, so that the data cannot be read on the way. Use HTTPS whenever you send private details.</Rule>
        <KeyTable
          title="HTTP and HTTPS"
          head={["Protocol", "Features"]}
          aria="HTTP and HTTPS. HTTP: Sends pages; not encrypted. HTTPS: HTTP with encryption; shows a padlock in the browser. Use HTTPS for: Logins, banking, shopping, forms with personal details."
          rows={[["HTTP", "Sends pages; not encrypted"], ["HTTPS", "HTTP with encryption; shows a padlock in the browser"], ["Use HTTPS for", "Logins, banking, shopping, forms with personal details"]]}
        />
        <Worked
          steps={[
            <>A learner uses a school website over HTTP. Anyone who can see the traffic could read it. A bank website uses HTTPS, so the data is scrambled.</>,
            <>The address starts with https:// and the browser shows a padlock.</>,
          ]}
        />
        <Mistake>Thinking that the padlock proves a site is honest. It shows that the connection is encrypted.</Mistake>
      </>,
    ),
  },
  {
    title: "Security services and Internet careers",
    content: slide(
      <>
        <Rule>Security services check that a user is who they claim to be. Multi-factor authentication asks for more than one proof. A one-time PIN (OTP) works only once. A security token is valid for a short time. Many careers work on the Internet.</Rule>
        <KeyTable
          title="Security services and careers"
          head={["Item", "Meaning"]}
          aria="Security services and careers. Multi-factor authentication: Two or more proofs, such as a password and a code. One-time PIN (OTP): A code that works once. Security token: A code or device valid for a limited time. Web designer: Plans the look and layout of a site. Web author: Writes the content of a site. Graphics and multimedia designer: Creates images, animation, audio and video."
          rows={[["Multi-factor authentication", "Two or more proofs, such as a password and a code"], ["One-time PIN (OTP)", "A code that works once"], ["Security token", "A code or device valid for a limited time"], ["Web designer", "Plans the look and layout of a site"], ["Web author", "Writes the content of a site"], ["Graphics and multimedia designer", "Creates images, animation, audio and video"]]}
        />
        <Worked
          steps={[
            <>A bank sends an OTP by SMS. You type it in, and it cannot be used again.</>,
            <>A security token changes its code every minute, so a stolen code soon stops working.</>,
          ]}
        />
        <Mistake>Sharing an OTP with anyone who asks. A real bank never asks for it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a static and a dynamic website?</>,
          <>What does HTTPS add to HTTP?</>,
          <>What is an OTP?</>,
          <>Name one Internet career.</>,
        ]}
        answers={[
          <>A static site shows fixed pages. A dynamic site builds pages from data.</>,
          <>Encryption.</>,
          <>A one-time PIN: a code that works once.</>,
          <>Web designer, web author or graphics and multimedia designer.</>,
        ]}
      />,
    ),
  },
];
