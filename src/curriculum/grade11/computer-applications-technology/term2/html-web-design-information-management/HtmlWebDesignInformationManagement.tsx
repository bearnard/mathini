import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term2/html-web-design-information-management/diagram.webp", alt: "HTML, Web Design and Information Management" },
    title: 'HTML document structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every HTML page has a standard structure using nested tags.
        </p>
        <CodeBlock language="html" code={`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>A paragraph of text.</p>
  </body>
</html>`} />
      </div>
    ),
  },
  {
    title: 'Common HTML tags and attributes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          HTML tags define the structure and meaning of content.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Text and structure</strong>
            <p className="text-slate-600 font-mono text-sm">&lt;h1&gt;–&lt;h6&gt; headings<br />&lt;p&gt; paragraph<br />&lt;strong&gt; bold<br />&lt;em&gt; italic<br />&lt;br&gt; line break<br />&lt;hr&gt; horizontal rule</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Links and images</strong>
            <p className="text-slate-600 font-mono text-sm">&lt;a href="url"&gt;Link text&lt;/a&gt;<br />&lt;img src="pic.jpg" alt="desc"&gt;<br /><br />Attributes:<br />href — destination URL<br />src — image file path<br />alt — accessibility text</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Lists</strong>
            <p className="text-slate-600 font-mono text-sm">&lt;ul&gt; unordered list (bullets)<br />&lt;ol&gt; ordered list (numbers)<br />&lt;li&gt; list item</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Tables</strong>
            <p className="text-slate-600 font-mono text-sm">&lt;table&gt; table container<br />&lt;tr&gt; table row<br />&lt;th&gt; header cell (bold)<br />&lt;td&gt; data cell</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Basic CSS styling',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          CSS (Cascading Style Sheets) controls the visual appearance of HTML elements.
        </p>
        <CodeBlock language="html" code={`body {'{'}
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  color: #333333;
{'}'}
h1 {'{'}
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
{'}'}`} />
      </div>
    ),
  },
  {
    title: 'Information quality and referencing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good information management means evaluating quality and acknowledging sources correctly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Information quality criteria</strong>
            <p className="text-slate-600 text-sm">Accuracy (correct), Currency (up to date), Relevance (fits the need), Authority (reliable source), Purpose (why it was created).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Referencing and plagiarism</strong>
            <p className="text-slate-600 text-sm">Always cite your sources. Plagiarism is presenting someone else's work as your own. Use in-text citations and a bibliography.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which HTML tag creates a hyperlink to another webpage?',
    options: ['<link>', '<a href="url">', '<url>', '<nav>'],
    answer: '<a href="url">',
    explanation: 'The anchor tag <a> with the href attribute creates a clickable hyperlink. href specifies the destination URL.',
  },
  {
    prompt: 'What is the purpose of the alt attribute in an <img> tag?',
    options: ['Sets the image size', 'Provides alternative text for screen readers and when the image fails to load', 'Links the image to another page', 'Changes the image format'],
    answer: 'Provides alternative text for screen readers and when the image fails to load',
    explanation: 'The alt attribute improves accessibility (read by screen readers) and displays descriptive text if the image cannot be shown.',
  },
  {
    prompt: 'Which CSS property changes the background colour of an element?',
    options: ['color', 'font-color', 'background-color', 'fill'],
    answer: 'background-color',
    explanation: 'background-color sets the background. The color property changes the text/foreground colour.',
  },
  {
    prompt: 'What does the <!DOCTYPE html> declaration do at the top of an HTML file?',
    options: ['Adds the page title', 'Tells the browser this is an HTML5 document', 'Links a CSS stylesheet', 'Creates the page heading'],
    answer: 'Tells the browser this is an HTML5 document',
    explanation: '<!DOCTYPE html> is not an HTML tag — it is a declaration that instructs the browser to render the page in HTML5 standards mode.',
  },
  {
    prompt: 'Which HTML tags are used to create a table row and a data cell?',
    options: ['<row> and <cell>', '<tr> and <td>', '<table-row> and <data>', '<tr> and <th>'],
    answer: '<tr> and <td>',
    explanation: '<tr> defines a table row; <td> defines a standard data cell within that row. <th> is used for header cells.',
  },
  {
    prompt: 'A learner copies a paragraph from Wikipedia directly into their project without citing it. This is called:',
    options: ['Summarising', 'Paraphrasing', 'Plagiarism', 'Referencing'],
    answer: 'Plagiarism',
    explanation: 'Plagiarism is using someone else\'s work (text, images, ideas) without acknowledgement, presenting it as your own.',
  },
  {
    prompt: 'What is the difference between <ul> and <ol> in HTML?',
    options: ['<ul> creates a table; <ol> creates a list', '<ul> creates an unordered (bulleted) list; <ol> creates an ordered (numbered) list', 'They are identical', '<ul> is for images; <ol> is for text'],
    answer: '<ul> creates an unordered (bulleted) list; <ol> creates an ordered (numbered) list',
    explanation: 'ul = unordered list (bullets), ol = ordered list (numbers or letters). Both use <li> for individual items.',
  },
  {
    prompt: 'Which information quality criterion asks: "Is this information still relevant and recent?"',
    options: ['Accuracy', 'Authority', 'Currency', 'Purpose'],
    answer: 'Currency',
    explanation: 'Currency evaluates how up to date the information is. Outdated statistics or old news may no longer be reliable.',
  },
  {
    prompt: 'In HTML, where does the <title> tag appear, and what does it affect?',
    options: ['In <body> — it creates the main page heading', 'In <head> — it sets the text shown in the browser tab', 'In <body> — it creates a footer', 'In <head> — it links the CSS file'],
    answer: 'In <head> — it sets the text shown in the browser tab',
    explanation: 'The <title> tag is placed in the <head> section and controls the text displayed in the browser tab or window title bar.',
  },
  {
    prompt: 'Which CSS property would you use to centre text inside a heading?',
    options: ['text-position: center', 'align: middle', 'text-align: center', 'center: true'],
    answer: 'text-align: center',
    explanation: 'text-align: center is the correct CSS property to horizontally centre inline content (text) within its container.',
  },
];

const HtmlWebDesignInformationManagement = () => (
  <CapsSubjectTopic
    title="HTML, Web Design and Information Management"
    subtitle="HTML structure, common tags, CSS basics, and information quality"
    learnSteps={learnSteps}
    task="gr11-html-web-design-information-management-t2"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default HtmlWebDesignInformationManagement;
