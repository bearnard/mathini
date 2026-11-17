import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const XML_EXAMPLE = `<learners>
  <learner>
    <name>Zinzi</name>
    <grade>12</grade>
  </learner>
</learners>`;

export const CSS_EXAMPLE = `h1 {
  color: blue;
  font-size: 24px;
}`;

export const learnSteps: LearnStep[] = [
  {
    title: 'Storing data: locally and online',
    content: (
      <div className="space-y-4">
        <Rule>An online application has to remember data. It can store the data locally, on the user&rsquo;s own device, or online, on a server.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Locally: cookies</strong><p className="mt-1">A cookie is a small text file that a website asks the browser to store. It lets the site remember things such as a language choice or a login. It stays on the user&rsquo;s device.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Online: databases</strong><p className="mt-1">A database on the server stores large amounts of data safely for all users. SQL is used to select, add and change the data.</p></div>
        </div>
        <Mistake>A cookie is not a program and it cannot run code. It only holds a small piece of text that the website can read later.</Mistake>
      </div>
    ),
  },
  {
    title: 'Running instructions: scripts and AJAX',
    content: (
      <div className="space-y-4">
        <Rule>Instructions can run in two places: in the browser (locally) or on the server (online).</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Locally:</strong> a script such as JavaScript runs inside the browser. It can check a form before it is sent and change what is on the page.</li>
          <li><strong>AJAX:</strong> a script asks the server for data in the background and updates part of the page, without loading the whole page again.</li>
          <li><strong>Online (server side):</strong> code such as PHP runs on the server. It can read the database, build the page and send the result to the browser.</li>
        </ul>
        <Worked
          title="A search box that suggests words"
          steps={[
            <>The learner types a letter. A JavaScript script in the browser notices it.</>,
            <>Using AJAX, the script asks the server for words that start with that letter. The page is not reloaded.</>,
            <>A PHP script on the server looks in the database, and the words are shown under the box.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'XML: data with tags',
    content: (
      <div className="space-y-4">
        <Rule>XML (Extensible Markup Language) describes and carries data in a structured text format. You choose the tag names, and the tags show what each piece of data means.</Rule>
        <CodeBlock language="xml" code={XML_EXAMPLE} />
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Every opening tag must have a closing tag.</li>
          <li>Tags must be nested properly: the last tag opened is the first closed.</li>
          <li>There is one outer (root) tag around everything.</li>
          <li>XML is used to store data and to exchange it between systems, for example between a server and a browser.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'CSS: formatting the output',
    content: (
      <div className="space-y-4">
        <Rule>CSS (Cascading Style Sheets) formats the output of a web page: colours, fonts, sizes and layout. It keeps the look separate from the content.</Rule>
        <CodeBlock language="css" code={CSS_EXAMPLE} />
        <p className="text-left text-slate-700">The rule above makes every h1 heading blue and 24 pixels high. A rule has a selector (h1) and, in curly brackets, properties with values (color: blue;).</p>
        <p className="text-left text-sm text-slate-600">If you change the style sheet, the look of every page that uses it changes, and the content does not have to be edited.</p>
      </div>
    ),
  },
  {
    title: 'How the parts work together',
    content: (
      <div className="space-y-4">
        <Rule>An online application uses several technologies, each with its own job.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Database and SQL:</strong> store and retrieve the data on the server.</li>
          <li><strong>PHP (server-side scripting):</strong> reads the database and builds the page.</li>
          <li><strong>XML:</strong> carries the data in a structured form.</li>
          <li><strong>JavaScript and AJAX:</strong> run in the browser and update parts of the page.</li>
          <li><strong>CSS:</strong> formats how the page looks.</li>
          <li><strong>Cookies:</strong> remember small things on the user&rsquo;s device.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is a cookie?</>,
          <>Where does PHP code run, and where does JavaScript run?</>,
          <>What is AJAX used for?</>,
          <>What does CSS control?</>,
        ]}
        answers={[
          <>A small text file stored by the browser so that a website can remember something.</>,
          <>PHP runs on the server. JavaScript runs in the browser.</>,
          <>To update part of a page with data from the server, without reloading the page.</>,
          <>How the page looks: colours, fonts and layout.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a cookie?',
    options: ['A small file of text in a browser', 'A program that runs on the server', 'A table inside an online database', 'A tag inside an XML document file'],
    answer: 'A small file of text in a browser',
    explanation: 'A website asks the browser to store a cookie so that the site can remember something later.',
  },
  {
    prompt: 'Where is a cookie stored?',
    options: ['On the web server machine', 'On the user\'s own device', 'In the online database table', 'On the home router box'],
    answer: 'On the user\'s own device',
    explanation: 'Cookies are a way of storing data locally, on the user\'s device.',
  },
  {
    prompt: 'Which is stored online rather than locally?',
    options: ['A cookie in the browser', 'A script running in a browser', 'A style sheet in a browser cache', 'Data in a server database'],
    answer: 'Data in a server database',
    explanation: 'A database on the server stores large amounts of data for all users, and SQL is used to work with it.',
  },
  {
    prompt: 'Where does PHP code run?',
    options: ['In the browser', 'On the server', 'In a cookie', 'In the style sheet'],
    answer: 'On the server',
    explanation: 'PHP is a server-side scripting language: it runs on the server and sends the result to the browser.',
  },
  {
    prompt: 'Where does a JavaScript script usually run?',
    options: ['On the server', 'In the database', 'In the router', 'In the browser'],
    answer: 'In the browser',
    explanation: 'JavaScript runs locally in the browser, for example to check a form before it is sent.',
  },
  {
    prompt: 'What is AJAX used for?',
    options: ['To format the colours of a web page now', 'To store the cookies of the user', 'To describe the data with tags', 'To update a page part, with no reload'],
    answer: 'To update a page part, with no reload',
    explanation: 'AJAX asks the server for data in the background and changes only part of the page.',
  },
  {
    prompt: 'What does XML do?',
    options: ['Describes data with tags', 'Runs the code on the server', 'Formats the look of a page', 'Stores small files in a browser'],
    answer: 'Describes data with tags',
    explanation: 'XML is a structured text format in which tags show what each piece of data means.',
  },
  {
    prompt: 'Which XML text is correct, with every tag closed and nested properly?',
    options: ['<a><b>Zinzi</b></a>', '<a><b>Zinzi</a></b>', '<a><b>Zinzi</b>', '<a><b>Zinzi<b></a>'],
    answer: '<a><b>Zinzi</b></a>',
    explanation: 'The b tag is closed before the a tag, so the tags are nested properly and each one is closed.',
  },
  {
    prompt: 'What does CSS stand for?',
    options: ['Computer Server Scripts', 'Cascading Style Sheets', 'Coded Site Structure', 'Central Storage System'],
    answer: 'Cascading Style Sheets',
    explanation: 'CSS is used to format the output of a web page.',
  },
  {
    prompt: 'What does CSS control?',
    options: ['Where the data is stored', 'Which server answers', 'How the page looks', 'How fast the line is'],
    answer: 'How the page looks',
    explanation: 'CSS controls colours, fonts, sizes and layout, and keeps the look separate from the content.',
  },
  {
    prompt: 'What does the CSS rule h1 { color: blue; } do?',
    options: ['Makes every paragraph blue', 'Deletes every h1 heading', 'Makes every h1 heading blue', 'Stores the colour in a cookie'],
    answer: 'Makes every h1 heading blue',
    explanation: 'The selector h1 picks the headings and the property color sets their colour to blue.',
  },
  {
    prompt: 'Which technology builds the page on the server by reading a database?',
    options: ['PHP', 'CSS', 'A cookie', 'A tag in XML'],
    answer: 'PHP',
    explanation: 'Server-side code such as PHP reads the database, builds the page and sends it to the browser.',
  },
  {
    prompt: 'A form checks that an e-mail address contains an @ sign before it is sent. Where does this check best run?',
    options: ['In the browser, with JavaScript', 'On the server, after it is sent', 'In the style sheet, with the CSS', 'In a cookie, with some XML code'],
    answer: 'In the browser, with JavaScript',
    explanation: 'A script in the browser can check the form at once, without sending the data to the server first.',
  },
  {
    prompt: 'Which language is used to select, add and change data in an online database?',
    options: ['CSS', 'XML', 'SQL', 'AJAX'],
    answer: 'SQL',
    explanation: 'SQL is the language used to work with the data in a database.',
  },
];
