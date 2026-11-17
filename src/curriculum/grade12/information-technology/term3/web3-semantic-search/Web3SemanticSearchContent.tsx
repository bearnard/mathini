import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'Web 1.0, 2.0 and 3.0',
    content: (
      <div className="space-y-4">
        <Rule>The World Wide Web has changed over time. The versions are numbered Web 1.0, Web 2.0 and Web 3.0.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Web 1.0</strong><p className="mt-1">Mostly read-only pages. A few people publish and most people only read.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Web 2.0</strong><p className="mt-1">Interactive: users add their own content, for example on social networks, blogs and wikis.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>Web 3.0 (the Semantic Web)</strong><p className="mt-1">Data is given meaning, so that computers can understand and connect it.</p></div>
        </div>
        <Mistake>Web 3.0 is a trend, not a finished product. In CAPS it means the Semantic Web, where data carries meaning that programs can use.</Mistake>
      </div>
    ),
  },
  {
    title: 'The Semantic Web',
    content: (
      <div className="space-y-4">
        <Rule>On today&rsquo;s web a computer sees a page as text. In the Semantic Web, data is labelled with its meaning, so a program can tell what each piece of data is and how it is linked to other data.</Rule>
        <Worked
          title="Plain text and data with meaning"
          steps={[
            <><strong>Plain text:</strong> &ldquo;Jaguar is fast.&rdquo; Does this mean an animal or a car? The computer cannot tell.</>,
            <><strong>With meaning:</strong> the word is labelled as a type of car, with a link to the maker. A program now knows which one is meant.</>,
            <>Because programs can follow such links, they can combine data from different sites and answer questions, not only list pages.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Online applications and storage',
    content: (
      <div className="space-y-4">
        <Rule>Online applications run in a web browser, and online storage keeps files on servers on the internet.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Documents, spreadsheets, e-mail and calendars can be used online, so they work on any device with a browser.</li>
          <li>Files stored online can be reached from anywhere and shared with others.</li>
          <li>The cost is a need for an internet connection and trust in the provider who stores the data.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">This links to cloud computing and software as a service in Term 2.</p>
      </div>
    ),
  },
  {
    title: 'Improving searching',
    content: (
      <div className="space-y-4">
        <Rule>A keyword search matches the words that you type. Newer methods try to find what you mean.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Semantic search:</strong> the search tries to understand the meaning and the context of the question, not only the words, so the results fit what the user wants.</li>
          <li><strong>Mediated search:</strong> an intermediary, such as a person or a program, helps the user to state the question and filter the results, for example a librarian or a specialised search service.</li>
        </ul>
        <Worked
          title="Keyword and semantic search"
          steps={[
            <>Keyword search for &ldquo;jaguar speed&rdquo; returns every page with both words, about animals and cars.</>,
            <>A semantic search uses the context of the user, for example earlier searches about cars, to rank the car pages first.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Trends and effects',
    content: (
      <div className="space-y-4">
        <Rule>Know the benefits and the concerns of these developments.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Benefits</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Better search results that save time.</li><li>Programs can combine data from many sites.</li><li>Access to files and tools from any device.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Concerns</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Understanding the user needs user data, risking privacy.</li><li>Results can be shaped by what the system thinks you want, and you may miss other views.</li><li>Data is only as good as the labels that people give it.</li></ul></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is the main feature of Web 2.0?</>,
          <>What does Web 3.0 (the Semantic Web) add?</>,
          <>How does semantic search differ from keyword search?</>,
          <>Give one concern about search that understands the user.</>,
        ]}
        answers={[
          <>Users can add their own content, so it is interactive.</>,
          <>Meaning: data is labelled so that computers can understand and connect it.</>,
          <>It tries to understand the meaning and context, not only match the words.</>,
          <>It needs data about the user, so privacy is at risk.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which version of the web is mostly read-only pages?',
    options: ['Web 2.0', 'Web 3.0', 'Web 1.0', 'Web 4.0'],
    answer: 'Web 1.0',
    explanation: 'In Web 1.0 a few people published pages and most people only read them.',
  },
  {
    prompt: 'What is the main feature of Web 2.0?',
    options: ['Users add their own content', 'Pages are read-only for everyone', 'Data is labelled with its meaning', 'Pages cannot be linked to each other'],
    answer: 'Users add their own content',
    explanation: 'Web 2.0 is interactive: social networks, blogs and wikis rely on content made by users.',
  },
  {
    prompt: 'Which examples belong to Web 2.0?',
    options: ['Social networks, blogs and wikis', 'Printed pages stored on a disk drive', 'Offline word processors on a PC', 'E-mail without any attachment'],
    answer: 'Social networks, blogs and wikis',
    explanation: 'These sites depend on the content that users add.',
  },
  {
    prompt: 'What is Web 3.0 called in CAPS?',
    options: ['The Searching Web', 'The Semantic Web', 'The Streaming Web', 'The Shopping Web'],
    answer: 'The Semantic Web',
    explanation: 'In CAPS, Web 3.0 is the Semantic Web, in which data carries meaning.',
  },
  {
    prompt: 'What does the Semantic Web add to data?',
    options: ['Colour and animation too', 'A larger size for each file', 'Meaning that programs can use', 'A password for each web page seen'],
    answer: 'Meaning that programs can use',
    explanation: 'Data is labelled with its meaning, so that programs can understand and connect it.',
  },
  {
    prompt: 'Why can a computer not tell whether "Jaguar is fast" is about a car or an animal on today\'s web?',
    options: ['The sentence is too short to read', 'The words have no labelled meaning', 'The page has no hyperlinks', 'The word is spelt in capital letters'],
    answer: 'The words have no labelled meaning',
    explanation: 'The computer sees only text. In the Semantic Web the word would carry a label that shows its meaning.',
  },
  {
    prompt: 'What is an online application?',
    options: ['A program run in a web browser', 'A program stored on a CD or disk', 'A program that has no screen at all', 'A program written for one phone'],
    answer: 'A program run in a web browser',
    explanation: 'Online applications are used through a browser and work on any device with a connection.',
  },
  {
    prompt: 'Which is a benefit of online storage?',
    options: ['Files can be opened without internet', 'Files are stored on the local drive', 'Files cannot be shared with others', 'Files can be reached from anywhere'],
    answer: 'Files can be reached from anywhere',
    explanation: 'Files on an internet server can be opened from any device with a connection.',
  },
  {
    prompt: 'Which is a cost or risk of online storage?',
    options: ['A larger local hard drive for the files', 'A good link, and trust in the provider', 'A faster local processor for the PC', 'A second operating system installed'],
    answer: 'A good link, and trust in the provider',
    explanation: 'The files are reached through the internet and are stored by someone else.',
  },
  {
    prompt: 'What does a keyword search match?',
    options: ['The meaning of the whole question', 'The location of the user', 'The earlier searches of the user', 'The words that the user types'],
    answer: 'The words that the user types',
    explanation: 'A keyword search looks for pages that contain the words typed, without understanding what the user means.',
  },
  {
    prompt: 'How does semantic search differ from keyword search?',
    options: ['It just matches the words typed in', 'It understands meaning and context', 'It searches a single website alone', 'It returns no results to any user'],
    answer: 'It understands meaning and context',
    explanation: 'Semantic search looks at the meaning and the context of the question, so the results fit what the user wants.',
  },
  {
    prompt: 'A user who often searches for cars types "jaguar speed". How could semantic search help?',
    options: ['It could show pages about animals first', 'It could put the car pages first', 'It could block the pages with the word', 'It could ignore the word jaguar fully'],
    answer: 'It could put the car pages first',
    explanation: 'The context of earlier searches suggests that the user means the car.',
  },
  {
    prompt: 'What is mediated search?',
    options: ['A search that uses no keywords at all', 'A search stored on the local disk', 'A search of one folder on a computer', 'A search helped by a person or tool'],
    answer: 'A search helped by a person or tool',
    explanation: 'In mediated search an intermediary, such as a librarian or a specialised service, helps to state the question and filter the results.',
  },
  {
    prompt: 'Which is a concern about search that understands the user?',
    options: ['It needs user data, risking privacy', 'It gives the same result to each user', 'It needs no personal data from the user', 'It makes the websites load slower now'],
    answer: 'It needs user data, risking privacy',
    explanation: 'To understand a user the system must collect data about that user, which raises privacy concerns.',
  },
];
