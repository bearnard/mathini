import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: "HTML structure and common tags",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A valid web page is built with a clear structure, including the html, head and body sections. Within the body, headings, paragraphs, images, links, lists and tables organise the content. Grade 12 CAT questions often ask you to identify incorrect syntax, missing closing tags or the tag that best matches a given purpose."</p>
      </div>
    ),
  },
  {
    title: "Designing for usability",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Usability means that a visitor can understand and use the page easily. Clear navigation, readable text, meaningful headings, suitable colour contrast and well-placed links all support usability. Good design is not about adding many effects; it is about helping users find information quickly and complete the intended task without confusion."</p>
      </div>
    ),
  },
  {
    title: "Communication through web pages",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A web page communicates a message to a specific audience. The design should therefore match the purpose, whether it is to inform, advertise, persuade or allow a user to make contact. Strong CAT answers refer to audience, purpose and content structure when explaining why one layout or design choice is better than another."</p>
      </div>
    ),
  },
  {
    title: "Fixing layout and content problems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"When debugging web design questions, inspect both the code and the communication outcome. An image without alt text, a page with poor heading order or links that are hard to spot all reduce quality. Layout fixes should improve clarity, accessibility and consistent presentation across the page."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Which HTML tag is used to create a clickable hyperlink?",
    options: ["<img>", "<a>", "<p>", "<table>"],
    answer: 1,
    explanation: "<a> is the anchor tag used to create hyperlinks.",
  },
  {
    prompt: "Where should the visible page content normally be placed in an HTML document?",
    options: ["Inside the <body> section", "Inside the <head> section only", "Inside the DOCTYPE line", "Inside the file name"],
    answer: 0,
    explanation: "The content displayed in the browser window belongs inside the body section.",
  },
  {
    prompt: "What is the main purpose of alt text on an image?",
    options: ['To increase the internet speed of the web page', 'To describe the image for accessibility and when it cannot load', 'To change the background colour of the web page behind the image', 'To create a border around a table on the page'],
    answer: 1,
    explanation: "Alt text supports accessibility and provides a text alternative if the image is unavailable.",
  },
  {
    prompt: "Which design choice best improves usability on an information page?",
    options: ["Tiny text with many colours", "Clear headings and easy navigation", "Auto-playing music on every page", "Using different menu positions on each page"],
    answer: 1,
    explanation: "Usable pages help the visitor find information quickly through consistent navigation and readable headings.",
  },
  {
    prompt: "Why is colour contrast important on a website?",
    options: ['It reduces the size of the image files that are shown on the page', 'It helps users read text clearly against the background', 'It automatically fixes errors in the HTML code', 'It removes the need for headings on the page'],
    answer: 1,
    explanation: "Strong contrast improves readability and accessibility.",
  },
  {
    prompt: "A school club wants visitors to contact them easily from the website. What should be included?",
    options: ['A hidden menu that visitors must search for on the page', 'Visible contact information or a clear contact link', 'Large decorative images that fill the page', 'A blank home page with no links on it'],
    answer: 1,
    explanation: "The page should make the communication action obvious by providing contact details or a contact page link.",
  },
  {
    prompt: "Which statement about the <head> section is correct?",
    options: ["It usually contains metadata such as the page title", "It holds all images on the site", "It replaces the need for the body section", "It shows the page footer only"],
    answer: 0,
    explanation: "The head section typically stores metadata such as the title and linked resources.",
  },
  {
    prompt: "What is the best reason to keep navigation consistent across pages?",
    options: ["It makes the code longer", "It helps users know where to find information on each page", "It forces every page to use the same picture", "It removes all accessibility requirements"],
    answer: 1,
    explanation: "Consistent navigation reduces confusion and improves user experience.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const HtmlWebDesignUsability = () => (
  <CapsSubjectTopic
    title="HTML, Web Design and Usability"
    subtitle="Structured pages, communication choices and user-friendly design"
    learnSteps={learnSteps}
    task="gr12-html-web-design-usability-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default HtmlWebDesignUsability;
