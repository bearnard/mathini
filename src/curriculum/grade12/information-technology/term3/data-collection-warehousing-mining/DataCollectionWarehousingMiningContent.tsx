import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'Collecting data',
    content: (
      <div className="space-y-4">
        <Rule>Data collection is the gathering of facts and figures so that they can be stored and used. Data can be collected in several ways, and some of them the person does not notice.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>RFID (radio-frequency identification):</strong> a small tag with a chip is read by radio waves, without touching it. It is used for access cards, for tracking stock and for e-tags at toll gates.</li>
          <li><strong>Online:</strong> data typed into web forms, surveys and sign-up pages, and data recorded about how a person uses a website.</li>
          <li><strong>Invisible collection:</strong> data gathered without the person typing it in, for example when a credit card or loyalty card is swiped, when a toll-road pass is read, when a cellphone connects to a network, or when a government form is processed.</li>
        </ul>
        <Mistake>Invisible does not mean secret or illegal. It means that the person does not type the data in. The data may still be collected under rules that people agree to.</Mistake>
      </div>
    ),
  },
  {
    title: 'Data warehousing',
    content: (
      <div className="space-y-4">
        <Rule>A data warehouse is a very large central store of data, collected from many different sources, and kept so that it can be analysed.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Purpose:</strong> to bring the data of an organisation together in one place, with history, so that managers can study it and make decisions.</li>
          <li><strong>Uses:</strong> reports on sales over several years, finding trends, and comparing branches or products.</li>
          <li><strong>Different from the day-to-day database:</strong> the working database handles current transactions, such as a sale at a till. The warehouse keeps copies of many such records for analysis, and it is mostly read, not changed.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Data mining',
    content: (
      <div className="space-y-4">
        <Rule>Data mining is the search through a large amount of stored data for patterns that give useful knowledge.</Rule>
        <ol className="space-y-1.5 text-left text-slate-700">
          <li><strong>1. Extract the data:</strong> use SQL to select the data that is needed from the warehouse or database.</li>
          <li><strong>2. Look for patterns:</strong> looking for groups, links and trends in the data.</li>
          <li><strong>3. Discover knowledge:</strong> decide what the patterns mean.</li>
          <li><strong>4. Strategy:</strong> use the knowledge to plan what to do.</li>
        </ol>
        <Worked
          title="A supermarket with a loyalty card"
          steps={[
            <>The shop extracts what each card holder bought over the last year.</>,
            <>The mining finds that customers who buy baby food often also buy nappies.</>,
            <>The strategy: place the two products close together and send those customers a special offer.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Location-based data',
    content: (
      <div className="space-y-4">
        <Rule>Location-based data tells where a device, and so usually its owner, is or was. It comes from GPS, cellphone towers and Wi-Fi networks.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Uses</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Navigation, showing the traffic on a route.</li><li>Ride-hailing and delivery services.</li><li>Finding a lost or stolen phone and calling emergency help.</li><li>Advertising for shops near you.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Concerns</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>A record of where a person goes is very personal.</li><li>A person can be tracked unaware, without their knowledge.</li><li>It must be handled according to privacy law and with the consent of the person.</li></ul></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What does RFID stand for?</>,
          <>What is the purpose of a data warehouse?</>,
          <>What happens in the first step of data mining?</>,
          <>Give one use and one concern of location-based data.</>,
        ]}
        answers={[
          <>Radio-frequency identification.</>,
          <>To keep data from many sources together so that it can be analysed for decisions.</>,
          <>The data that is needed is extracted, using SQL.</>,
          <>Use: navigation or finding a lost phone. Concern: tracking and loss of privacy.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does RFID stand for?',
    options: ['Remote file input device', 'Random frequency index data', 'Radio-frequency identification', 'Rapid form information display'],
    answer: 'Radio-frequency identification',
    explanation: 'An RFID tag with a chip is read by radio waves and identifies the item or card it is attached to.',
  },
  {
    prompt: 'Which is an example of RFID in daily use?',
    options: ['A form typed on a web page', 'An e-tag at a toll gate', 'A receipt printed by a till', 'A prompt asking for a password'],
    answer: 'An e-tag at a toll gate',
    explanation: 'The toll gate reads the tag by radio, so the driver does not need to stop and pay.',
  },
  {
    prompt: 'What is invisible data collection?',
    options: ['Data gathered without the person typing', 'Data that is hidden by an encryption key', 'Data collected from government forms', 'Data deleted once it has been used'],
    answer: 'Data gathered without the person typing',
    explanation: 'Swiping a loyalty card or being read at a toll gate records data although the person enters nothing.',
  },
  {
    prompt: 'Which action is an example of invisible data collection?',
    options: ['Typing an answer in a survey form', 'Writing a letter by hand', 'Reading a printed newspaper', 'Swiping a loyalty card at a till'],
    answer: 'Swiping a loyalty card at a till',
    explanation: 'The shop records the purchase and the card holder without the customer entering anything.',
  },
  {
    prompt: 'What is a data warehouse?',
    options: ['A small file with one user\'s settings', 'A program that checks for viruses', 'A central store of data for analysis', 'A device that reads RFID tags'],
    answer: 'A central store of data for analysis',
    explanation: 'A data warehouse brings data from many sources together, with its history, so that it can be analysed.',
  },
  {
    prompt: 'How does a data warehouse differ from the working database at a till?',
    options: ['It is changed with each new sale', 'It keeps old records and is mostly read', 'It holds the sale that is in progress', 'It is stored on the cashier\'s own phone'],
    answer: 'It keeps old records and is mostly read',
    explanation: 'The working database handles current transactions. The warehouse keeps copies of many records and is mostly read for reports.',
  },
  {
    prompt: 'Which use suits a data warehouse?',
    options: ['The recording of one sale at the till', 'Logging a user into an online shop', 'Reading an RFID tag at the toll gate', 'A report on sales over several years'],
    answer: 'A report on sales over several years',
    explanation: 'Warehouses hold historical data from many sources, so they suit long-term reports and trends.',
  },
  {
    prompt: 'What is data mining?',
    options: ['Collecting the data with RFID tags', 'Searching stored data for patterns', 'Copying the data to a backup drive', 'Deleting the data that is out of date'],
    answer: 'Searching stored data for patterns',
    explanation: 'Data mining looks through large amounts of data for patterns that give useful knowledge.',
  },
  {
    prompt: 'Which language is used to extract the data that is needed for data mining?',
    options: ['HTML', 'CSS', 'SQL', 'XML'],
    answer: 'SQL',
    explanation: 'SQL is used to select and extract the data, which is then searched for patterns.',
  },
  {
    prompt: 'What comes after data is extracted in data mining?',
    options: ['Deleting the data again', 'Printing the data again', 'Looking for patterns now', 'Encrypting the data again'],
    answer: 'Looking for patterns now',
    explanation: 'The steps are: extract the data, look for patterns, discover knowledge and plan a strategy.',
  },
  {
    prompt: 'A shop finds that customers who buy baby food also buy nappies, and places them together. Which step is this?',
    options: ['Extraction', 'Collection', 'Encryption', 'Strategy'],
    answer: 'Strategy',
    explanation: 'Using the discovered knowledge to plan what to do is the strategy step.',
  },
  {
    prompt: 'Where does location-based data come from?',
    options: ['The colour of the screen display on it', 'The keys pressed on a keyboard each day', 'The age of the battery in the phone', 'GPS, cellphone towers, Wi-Fi networks'],
    answer: 'GPS, cellphone towers, Wi-Fi networks',
    explanation: 'These systems can work out where a device is, so they provide location data.',
  },
  {
    prompt: 'Which is a use of location-based data?',
    options: ['Printing a monthly sales report', 'Showing the traffic on a route', 'Editing a database record', 'Compressing a large file'],
    answer: 'Showing the traffic on a route',
    explanation: 'Traffic reports and navigation use the locations of many devices.',
  },
  {
    prompt: 'Which is a concern about location-based data?',
    options: ['It makes a phone battery last long', 'It cannot be used for navigation', 'A person can be tracked unaware', 'It is not stored by companies'],
    answer: 'A person can be tracked unaware',
    explanation: 'A record of where a person goes is personal, so it must be handled with consent and according to privacy law.',
  },
];
