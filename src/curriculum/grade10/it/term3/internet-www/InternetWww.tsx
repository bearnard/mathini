import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the Internet?",
    options: ["A worldwide network of networks", "A single computer in a lab for a task", "A web browser on a system in a program", "A search engine at a school on a device"],
    answer: "A worldwide network of networks",
    explanation: "Many networks are joined.",
  },
  {
    prompt: "What is an IP address?",
    options: ["A name for a website on a system in a program", "A number that identifies a device", "A kind of cable at a school on a device", "A type of screen for a task in use"],
    answer: "A number that identifies a device",
    explanation: "Each device has an IP address.",
  },
  {
    prompt: "What is a domain name?",
    options: ["A kind of cable on a system in a program", "An easy name for an address", "A type of file at a school on a device", "A password for a task in use"],
    answer: "An easy name for an address",
    explanation: "It is easier to remember than a number.",
  },
  {
    prompt: "What does DNS do?",
    options: ["Prints a page in use for a user", "Cools a server at work in a lab", "Draws a picture in a file on a system", "Turns a name into an IP address"],
    answer: "Turns a name into an IP address",
    explanation: "DNS is the domain name system.",
  },
  {
    prompt: "What does an ISP provide?",
    options: ["Access to the Internet", "A new computer in a program", "A printer on a device in a file", "A monitor in use for a user"],
    answer: "Access to the Internet",
    explanation: "ISP is Internet service provider.",
  },
  {
    prompt: "What is the World Wide Web?",
    options: ["The same as the Internet in use for a user", "Linked web pages on the Internet", "A kind of cable at work in a lab", "A type of computer in a file on a system"],
    answer: "Linked web pages on the Internet",
    explanation: "It is a service on the Internet.",
  },
  {
    prompt: "What is a URL?",
    options: ["The address of a web page", "A kind of computer for a task", "A type of cable in a program", "A browser on a device in a file"],
    answer: "The address of a web page",
    explanation: "It tells where a page is.",
  },
  {
    prompt: "In https://www.example.org/news, which part is the protocol?",
    options: ["news", "example", "org", "https"],
    answer: "https",
    explanation: "The protocol comes before the colon.",
  },
  {
    prompt: "What is a website?",
    options: ["A single picture at work in a lab", "A kind of cable in a file on a system", "A group of related web pages", "A browser for a user at a school"],
    answer: "A group of related web pages",
    explanation: "A site has many pages.",
  },
  {
    prompt: "What is a web browser?",
    options: ["A program that shows web pages", "A kind of cable on a system in a program", "A search service at a school on a device", "A server for a task in use"],
    answer: "A program that shows web pages",
    explanation: "Chrome and Firefox are browsers.",
  },
  {
    prompt: "What is a search engine?",
    options: ["A kind of cable for a task in use", "A service that finds pages for your words", "A program that draws in a program at work", "A server on a device in a file"],
    answer: "A service that finds pages for your words",
    explanation: "Google and Bing are search engines.",
  },
  {
    prompt: "Which search words usually work best?",
    options: ["A whole paragraph in use for a user", "One letter at work in a lab", "Short, specific key words", "A blank"],
    answer: "Short, specific key words",
    explanation: "Specific words give better results.",
  },
  {
    prompt: "What do quotation marks do in a search?",
    options: ["Hide the results in a file on a system", "Delete the page for a user at a school", "Print the page in a lab for a task", "Search for an exact phrase"],
    answer: "Search for an exact phrase",
    explanation: "They match the phrase.",
  },
  {
    prompt: "Why check the source of a page?",
    options: ["To make it faster in a lab for a task", "To delete it on a system in a program", "To see if it is reliable", "To print it at a school on a device"],
    answer: "To see if it is reliable",
    explanation: "Not all pages are accurate.",
  },
];

const InternetWww = () => (
  <CapsSubjectTopic
    title="The Internet and the World Wide Web"
    subtitle="What the Internet is, IP addresses and domain names, getting connected, the Web, browsers, and searching"
    learnSteps={learnSteps}
    task="gr10-internet-www-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default InternetWww;
