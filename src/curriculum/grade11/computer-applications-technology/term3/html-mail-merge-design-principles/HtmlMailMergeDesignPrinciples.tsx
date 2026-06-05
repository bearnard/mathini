import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'HTML links: internal and external',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          HTML links connect pages within the same site (internal) or to other websites (external).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">External link</strong>
            <p className="font-mono text-sm text-slate-700 mt-1">&lt;a href="https://www.example.com"&gt;Visit site&lt;/a&gt;</p>
            <p className="text-slate-600 text-sm mt-1">Uses a full URL. Opens another website. Add target="_blank" to open in a new tab.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Internal link</strong>
            <p className="font-mono text-sm text-slate-700 mt-1">&lt;a href="about.html"&gt;About us&lt;/a&gt;</p>
            <p className="text-slate-600 text-sm mt-1">Uses a relative path to another page within the same website. No domain needed.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Anchor (bookmark) link</strong>
            <p className="font-mono text-sm text-slate-700 mt-1">&lt;a href="#contact"&gt;Jump to contact&lt;/a&gt;</p>
            <p className="text-slate-600 text-sm mt-1">Links to a named section on the same page using the id attribute as a target.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Image as link</strong>
            <p className="font-mono text-sm text-slate-700 mt-1">&lt;a href="home.html"&gt;&lt;img src="logo.png" alt="Home"&gt;&lt;/a&gt;</p>
            <p className="text-slate-600 text-sm mt-1">Wrap an &lt;img&gt; tag inside an &lt;a&gt; tag to make an image clickable.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'HTML tables',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          HTML tables organise data in rows and columns using a set of related tags.
        </p>
        <CodeBlock language="html" code={`<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Scores</th>
  </tr>
  <tr>
    <td>Amahle</td>
    <td>85</td>
    <td>90</td>
  </tr>
</table>`} />
        <p className="text-sm text-slate-500">colspan merges cells horizontally; rowspan merges cells vertically.</p>
      </div>
    ),
  },
  {
    title: 'Mail merge steps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mail merge creates personalised documents for multiple recipients from one master template.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
            <li><strong>Create the main document</strong> — letter, label, or envelope template.</li>
            <li><strong>Connect to data source</strong> — spreadsheet or database with recipient details.</li>
            <li><strong>Insert merge fields</strong> — e.g. «First Name», «Address», «Balance».</li>
            <li><strong>Preview results</strong> — check each record displays correctly.</li>
            <li><strong>Complete the merge</strong> — merge to a new document or print directly.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Design principles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good design applies consistent principles to create clear, professional documents and web pages.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Alignment</strong>
            <p className="text-slate-600">Align text and objects to invisible grid lines for a neat, organised look.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Contrast</strong>
            <p className="text-slate-600">Use different sizes, colours, or weights to guide the reader's eye to the most important elements.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Repetition</strong>
            <p className="text-slate-600">Repeat visual elements (fonts, colours, logo) consistently to create unity and branding.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Proximity</strong>
            <p className="text-slate-600">Group related elements together. Items that are close together are perceived as related.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which HTML tag and attribute are used to open a link in a new browser tab?',
    options: ['<a href="url" newtab>', '<a href="url" target="_blank">', '<a href="url" open="new">', '<link href="url" tab="new">'],
    answer: '<a href="url" target="_blank">',
    explanation: 'The target="_blank" attribute tells the browser to open the hyperlink destination in a new tab or window.',
  },
  {
    prompt: 'What does the colspan="2" attribute do in an HTML table cell?',
    options: ['Adds 2 rows below the cell', 'Makes the cell span across 2 columns horizontally', 'Changes the cell colour', 'Adds 2 pixels of padding'],
    answer: 'Makes the cell span across 2 columns horizontally',
    explanation: 'colspan merges a cell across the specified number of columns. rowspan does the same vertically.',
  },
  {
    prompt: 'In a mail merge, what is the purpose of merge fields like «First Name»?',
    options: ['They permanently change the document template', 'They are placeholders replaced by individual data from the data source for each recipient', 'They apply formatting to the whole document', 'They link the document to a specific printer'],
    answer: 'They are placeholders replaced by individual data from the data source for each recipient',
    explanation: 'Merge fields are replaced with the corresponding value from each record in the data source when the merge is completed.',
  },
  {
    prompt: 'An anchor link <a href="#fees"> in HTML links to:',
    options: ['An external website called fees.com', 'An element with id="fees" on the same page', 'A file called fees.html', 'A database field named fees'],
    answer: 'An element with id="fees" on the same page',
    explanation: 'The # symbol denotes an anchor/bookmark link to an element with a matching id attribute on the current page.',
  },
  {
    prompt: 'Which design principle is applied when a school\'s logo, colours, and font appear identically on every page of their newsletter?',
    options: ['Contrast', 'Proximity', 'Repetition', 'Alignment'],
    answer: 'Repetition',
    explanation: 'Repetition creates visual consistency and brand identity by reusing the same design elements throughout a document or website.',
  },
  {
    prompt: 'A mail merge data source contains 150 records. How many personalised letters will the completed merge produce?',
    options: ['1', '2', '15', '150'],
    answer: '150',
    explanation: 'Mail merge creates one output document (or printout) per record in the data source — 150 records produces 150 personalised letters.',
  },
  {
    prompt: 'Which HTML tags define a table header cell and a data cell respectively?',
    options: ['<head> and <data>', '<th> and <td>', '<tr> and <td>', '<table> and <cell>'],
    answer: '<th> and <td>',
    explanation: '<th> (table header) displays text in bold and centred by default. <td> (table data) contains standard cell content.',
  },
  {
    prompt: 'A flyer has the headline in a large red font and the body text in small black font. Which design principle does this demonstrate?',
    options: ['Proximity', 'Repetition', 'Alignment', 'Contrast'],
    answer: 'Contrast',
    explanation: 'Contrast uses differences in size, colour, or weight to highlight important elements and create visual hierarchy.',
  },
  {
    prompt: 'To link from "index.html" to "contact.html" in the SAME folder, which href is correct?',
    options: ['href="https://contact.html"', 'href="/contact"', 'href="contact.html"', 'href="www/contact.html"'],
    answer: 'href="contact.html"',
    explanation: 'A relative path like "contact.html" points to a file in the same directory as the current page — no domain or slash needed.',
  },
  {
    prompt: 'In which step of a mail merge do you verify that data displays correctly before finalising?',
    options: ['Connecting the data source', 'Inserting merge fields', 'Previewing results', 'Completing the merge'],
    answer: 'Previewing results',
    explanation: 'The Preview step cycles through merged records so you can check that names, addresses, and other fields are pulling in correctly before printing or saving.',
  },
];

const HtmlMailMergeDesignPrinciples = () => (
  <CapsSubjectTopic
    title="HTML, Mail Merge and Design Principles"
    subtitle="HTML links and tables, mail merge steps, and CARP design principles"
    learnSteps={learnSteps}
    task="gr11-html-mail-merge-design-principles-t3"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default HtmlMailMergeDesignPrinciples;
