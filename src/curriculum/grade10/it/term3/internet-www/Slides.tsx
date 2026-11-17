import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The Internet and how addresses work",
    content: slide(
      <>
        <Rule>The Internet is a worldwide network of networks. Every device on it has an Internet protocol (IP) address, which is a number. A domain name is an easy-to-remember name for an address, such as example.org, and the domain name system (DNS) turns it into the number.</Rule>
        <KeyTable
          title="Internet addresses"
          head={["Item", "Meaning"]}
          aria="Internet addresses. Internet: A worldwide network of networks. IP address: A number that identifies a device. Domain name: A name for an address, easier to remember. DNS: Turns a domain name into an IP address. ISP: The Internet service provider that gives you access."
          rows={[["Internet", "A worldwide network of networks"], ["IP address", "A number that identifies a device"], ["Domain name", "A name for an address, easier to remember"], ["DNS", "Turns a domain name into an IP address"], ["ISP", "The Internet service provider that gives you access"]]}
        />
        <Worked
          steps={[
            <>You type a domain name into the browser. DNS finds its IP address and the browser connects to that server.</>,
            <>An ISP sells the connection, which may be wired or wireless.</>,
          ]}
        />
        <Mistake>Thinking that the Internet and the Web are the same. The Web is one service that runs on the Internet.</Mistake>
      </>,
    ),
  },
  {
    title: "What is needed to connect, and the Web",
    content: slide(
      <>
        <Rule>To connect you need a device, a connection (wired or wireless), an ISP and usually a router or modem. The World Wide Web (WWW) is the collection of web pages and sites that you reach with a browser. A web address, or URL, tells the browser where a page is.</Rule>
        <KeyTable
          title="Connecting and the Web"
          head={["Item", "Meaning"]}
          aria="Connecting and the Web. Device: A computer, tablet or phone. Connection: Wired or wireless, through an ISP. WWW: Web pages linked together on the Internet. Web page: One document on the Web. Website: A group of related web pages. URL: The address of a web page."
          rows={[["Device", "A computer, tablet or phone"], ["Connection", "Wired or wireless, through an ISP"], ["WWW", "Web pages linked together on the Internet"], ["Web page", "One document on the Web"], ["Website", "A group of related web pages"], ["URL", "The address of a web page"]]}
        />
        <Worked
          steps={[
            <>The URL https://www.example.org/news has a protocol (https), a domain name (www.example.org) and a page (news).</>,
            <>A website has many web pages, and each has its own URL.</>,
          ]}
        />
        <Mistake>Calling a web page a website. A website is a set of pages.</Mistake>
      </>,
    ),
  },
  {
    title: "Browsers and searching",
    content: slide(
      <>
        <Rule>A web browser is a program that shows web pages. A search engine finds pages for words you type. Good search techniques give better results.</Rule>
        <KeyTable
          title="Browsing and searching"
          head={["Item", "Detail"]}
          aria="Browsing and searching. Browser: Shows web pages; for example Chrome, Firefox, Edge, Safari. Search engine: Finds pages that match your words; for example Google, Bing. Use key words: Short, specific words work best. Quotation marks: Search for an exact phrase. Check the source: Is the site reliable and up to date?."
          rows={[["Browser", "Shows web pages; for example Chrome, Firefox, Edge, Safari"], ["Search engine", "Finds pages that match your words; for example Google, Bing"], ["Use key words", "Short, specific words work best"], ["Quotation marks", "Search for an exact phrase"], ["Check the source", "Is the site reliable and up to date?"]]}
        />
        <Worked
          steps={[
            <>To find the capital of Lesotho, type capital Lesotho. For an exact phrase, put it in quotation marks.</>,
            <>Check who wrote the page and when, before you trust it.</>,
          ]}
        />
        <Mistake>Taking the first result as the truth. Check the source.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an IP address?</>,
          <>What does DNS do?</>,
          <>What is the difference between a web page and a website?</>,
          <>Give one search technique.</>,
        ]}
        answers={[
          <>A number that identifies a device on the Internet.</>,
          <>Turns a domain name into an IP address.</>,
          <>A website is a group of related web pages.</>,
          <>Use key words, or put an exact phrase in quotation marks.</>,
        ]}
      />,
    ),
  },
];
