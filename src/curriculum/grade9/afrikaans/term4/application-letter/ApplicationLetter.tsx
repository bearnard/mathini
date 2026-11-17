import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Aansoekbrief: the opening',
    content: slide(
      <>
        <Rule>An <Af>aansoekbrief</Af> <En>letter of application</En> asks for a post. The first paragraph says which post you want and where you saw it.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['aansoek', 'application'], ['pos', 'post'], ['advertensie', 'advertisement']]}
          aria="Three Afrikaans words with their English meaning: aansoek is application, pos is post, advertensie is advertisement."
        />
        <Worked
          title="Open the letter"
          steps={[
            <><Af>Ek het u advertensie in die koerant gesien.</Af> <En>I saw your advertisement in the newspaper.</En> <SpeakButton text="Ek het u advertensie in die koerant gesien." /></>,
            <><Af>Ek doen aansoek vir die pos van biblioteekassistent.</Af> <En>I am applying for the post of library assistant.</En></>,
          ]}
        />
        <Mistake>Starting with <Af>Haai</Af> or a long story. Name the post in the first paragraph.</Mistake>
      </>,
    ),
  },
  {
    title: 'The body: why you suit the post',
    content: slide(
      <>
        <Rule>The middle shows why you suit the post: your <Af>ondervinding</Af> <En>experience</En> and your <Af>eienskappe</Af> <En>qualities</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'ondervinding', tag: 'experience' }, { word: 'eienskappe', tag: 'qualities' }, { word: 'betroubaar', tag: 'reliable' }]}
          aria="Three Afrikaans words with their English meaning: ondervinding is experience, eienskappe is qualities, betroubaar is reliable."
        />
        <Worked
          title="Give evidence"
          steps={[
            <><Af>Ek was twee jaar lank biblioteekmonitor.</Af> <En>I was a library monitor for two years.</En> <SpeakButton text="Ek was twee jaar lank biblioteekmonitor." /></>,
            <><Af>Ek is betroubaar.</Af> <En>I am reliable.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Ek is die beste</Af> <En>I am the best</En> without proof. Give facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'The ending and the word u',
    content: slide(
      <>
        <Rule>End by saying that your CV is attached, that you can come for an interview, and by thanking the reader. Use <Af>u</Af> for the reader: it is the formal <em>you</em>.</Rule>
        <OrderTiles
          tiles={['Opening: die pos', 'Middel: ondervinding', 'My CV is aangeheg', 'Baie dankie', 'Vriendelike groete']}
          aria="The parts of an application letter in order: the opening with the post, the middle with experience, the line My CV is aangeheg, the thanks Baie dankie, and the closing Vriendelike groete."
        />
        <Worked
          title="Formal you"
          steps={[
            <><Af>Baie dankie vir u tyd.</Af> <En>Thank you very much for your time.</En> <SpeakButton text="Baie dankie vir u tyd." /></>,
            <><Af>Ek is beskikbaar vir 'n onderhoud.</Af> <En>I am available for an interview.</En></>,
          ]}
        />
        <Mistake>Using <Af>jou</Af> for the reader. In a formal letter write <Af>u</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>letter of application</em>?</>} answer={<><Af>Aansoekbrief</Af>.</>} />
        <Check question={<>Which word means <em>experience</em>?</>} answer={<><Af>Ondervinding</Af>.</>} />
        <Check question={<>Which word is the formal <em>you</em>?</>} answer={<><Af>U</Af>.</>} />
        <Check question={<>Which sentence means <em>I am reliable</em>?</>} answer={<><Af>Ek is betroubaar.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Watter Afrikaanse woord beteken 'letter of application'?", options: ['dagboekinskrywing', 'testament', 'dekbrief', 'aansoekbrief'], answer: 'aansoekbrief', explanation: "'Aansoekbrief' means 'letter of application'." },
  { prompt: "Watter Afrikaanse woord beteken 'post' (a job)?", options: ['brief', 'klub', 'datum', 'pos'], answer: 'pos', explanation: "'Pos' means a post or job in an application." },
  { prompt: "Watter Afrikaanse woord beteken 'advertisement'?", options: ['aansoek', 'onderhoud', 'advertensie', 'handtekening'], answer: 'advertensie', explanation: "'Advertensie' means 'advertisement'." },
  { prompt: "Watter Afrikaanse woord beteken 'experience'?", options: ['eienskappe', 'ondervinding', 'kwalifikasies', 'verwysings'], answer: 'ondervinding', explanation: "'Ondervinding' means 'experience'." },
  { prompt: "Watter Afrikaanse woord beteken 'reliable'?", options: ['ondervinding', 'betroubaar', 'beskikbaar', 'vriendelik'], answer: 'betroubaar', explanation: "'Betroubaar' means 'reliable'." },
  { prompt: "Watter sin pas by die eerste paragraaf van 'n aansoekbrief?", options: ['Ek doen aansoek vir die pos van biblioteekassistent.', 'Ek het gister met my maats gehardloop.', 'Die klub het een keer per jaar in die saal vergader.', 'Ek bemaak my huis en my motor aan my dogter.'], answer: 'Ek doen aansoek vir die pos van biblioteekassistent.', explanation: 'The first paragraph names the post.' },
  { prompt: "Watter sin sê waar jy die pos gesien het?", options: ['Ek was twee jaar lank biblioteekmonitor.', 'Baie dankie vir u tyd en vir u moeite met my.', 'Ek is betroubaar en ek werk goed saam.', 'Ek het u advertensie in die koerant gesien.'], answer: 'Ek het u advertensie in die koerant gesien.', explanation: "'Ek het u advertensie in die koerant gesien' means 'I saw your advertisement in the newspaper'." },
  { prompt: "Watter sin gee bewys van ondervinding?", options: ['Ek is die beste leerder in die hele skool.', "Ek wil net 'n pos hê, enige een.", 'Ek hou baie van pizza en sjokolade vandag.', 'Ek was twee jaar lank biblioteekmonitor.'], answer: 'Ek was twee jaar lank biblioteekmonitor.', explanation: 'It gives a fact that fits the post.' },
  { prompt: "Wat beteken 'Ek is betroubaar'?", options: ['I am tired.', 'I am reliable.', 'I am proud.', 'I am available.'], answer: 'I am reliable.', explanation: "'Betroubaar' means 'reliable'." },
  { prompt: "Watter woord is die formele 'you'?", options: ['jy', 'jou', 'ek', 'u'], answer: 'u', explanation: "In a formal letter the reader is addressed as 'u'." },
  { prompt: "Watter sin bedank die leser?", options: ['Baie dankie vir u tyd.', 'Dankie vir jou tyd, maat.', 'Ek is betroubaar.', 'My CV is aangeheg.'], answer: 'Baie dankie vir u tyd.', explanation: "It thanks the reader with the formal 'u'." },
  { prompt: "Watter afsluiting pas by die aansoekbrief?", options: ['Sien jou later, maat', 'Lekker bly en tot siens', 'Haai daar, totsiens', 'Vriendelike groete'], answer: 'Vriendelike groete', explanation: "'Vriendelike groete' is a formal, friendly closing." },
];

const ApplicationLetter = () => (
  <AfrikaansTopic
    title="Aansoekbrief"
    subtitle="The opening, experience and qualities, the ending, and the formal u"
    learnSteps={learnSteps}
    task="gr9-afr-application-letter-t4"
    bank={bank}
    speak="options"
  />
);

export default ApplicationLetter;
