import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a static website?",
    options: ["Fixed pages for visitors", "Pages built from stored data", "A site that has no pages", "A site that has no text"],
    answer: "Fixed pages for visitors",
    explanation: "A static site does not change for each visitor.",
  },
  {
    prompt: "What is a dynamic website?",
    options: ["Pages that never change", "A site with no server", "Pages built from data", "A site with no text"],
    answer: "Pages built from data",
    explanation: "A dynamic site can respond to the visitor.",
  },
  {
    prompt: "Which is most likely a dynamic website?",
    options: ["An online shop", "A one-page club notice", "A printed flyer", "A paper form"],
    answer: "An online shop",
    explanation: "Shops show orders and stock from data.",
  },
  {
    prompt: "What is a location-based website?",
    options: ["A site with no pages in it", "A site kept in one room", "A paper map of the town", "Content for your place"],
    answer: "Content for your place",
    explanation: "It uses the visitor's position.",
  },
  {
    prompt: "What is HTTP?",
    options: ["A type of display screen", "A type of network cable", "Rules for web pages", "A password for a website"],
    answer: "Rules for web pages",
    explanation: "HTTP is a protocol for the web.",
  },
  {
    prompt: "What does HTTPS add?",
    options: ["A bigger screen", "A new cable", "More adverts", "Encryption"],
    answer: "Encryption",
    explanation: "HTTPS encrypts the data.",
  },
  {
    prompt: "When should you use HTTPS?",
    options: ["On a paper form at school", "In a shop at the till point", "When sending private data", "On a printed letter in the post"],
    answer: "When sending private data",
    explanation: "Logins and payments need it.",
  },
  {
    prompt: "What does the padlock in a browser show?",
    options: ["The site is fully honest", "The site loads very fast", "The site is brand new", "The link is encrypted"],
    answer: "The link is encrypted",
    explanation: "It does not prove the owner is honest.",
  },
  {
    prompt: "What is multi-factor authentication?",
    options: ["A longer password only", "A faster page for a user", "A bigger screen for a user", "Two or more proofs of ID"],
    answer: "Two or more proofs of ID",
    explanation: "For example a password and a code.",
  },
  {
    prompt: "What is a one-time PIN?",
    options: ["A permanent kind of password", "A kind of network cable", "A code that works once", "A type of web page"],
    answer: "A code that works once",
    explanation: "An OTP cannot be reused.",
  },
  {
    prompt: "What is a security token?",
    options: ["A password kept for ever", "A kind of web page", "A type of display screen", "A code valid for a while"],
    answer: "A code valid for a while",
    explanation: "The code expires soon.",
  },
  {
    prompt: "Which career plans the look of a website?",
    options: ["Web author", "Web designer", "Delivery driver", "Restaurant cook"],
    answer: "Web designer",
    explanation: "A web designer plans layout.",
  },
  {
    prompt: "Which career writes the content of a site?",
    options: ["Web designer", "Web author", "Driver", "Cook"],
    answer: "Web author",
    explanation: "A web author writes the content.",
  },
  {
    prompt: "Which career creates images, animation and video?",
    options: ["Web author in a firm", "Delivery driver", "Multimedia designer", "Restaurant cook"],
    answer: "Multimedia designer",
    explanation: "They make the media for sites.",
  },
];

const InternetServicesWebsitesSecurity = () => (
  <CapsSubjectTopic
    title="Websites, HTTP and Internet Security Services"
    subtitle="Static and dynamic websites, location-based sites, HTTP and HTTPS, multi-factor authentication, OTP and tokens, and Internet careers"
    learnSteps={learnSteps}
    task="gr11-internet-services-websites-security-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default InternetServicesWebsitesSecurity;
