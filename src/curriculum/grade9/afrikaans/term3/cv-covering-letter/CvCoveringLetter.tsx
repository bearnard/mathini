import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'CV: the headings',
    content: slide(
      <>
        <Rule>A <Af>CV</Af> shows who you are in one clear page. Its headings are <Af>Persoonlike besonderhede</Af> <En>personal details</En>, <Af>Kwalifikasies</Af> <En>qualifications</En> and <Af>Werkondervinding</Af> <En>work experience</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Persoonlike besonderhede', tag: 'personal details' }, { word: 'Kwalifikasies', tag: 'qualifications' }, { word: 'Werkondervinding', tag: 'work experience' }]}
          aria="Three CV headings with their English meaning: Persoonlike besonderhede is personal details, Kwalifikasies is qualifications, Werkondervinding is work experience."
        />
        <Worked
          title="Fill in the headings"
          steps={[
            <><Af>Kwalifikasies: Graad 9 by Hillcrest Hoërskool.</Af> <En>Qualifications: Grade 9 at Hillcrest High School.</En> <SpeakButton text="Graad 9 by Hillcrest Hoërskool." /></>,
            <><Af>Werkondervinding: biblioteekmonitor vir twee jaar.</Af> <En>Work experience: library monitor for two years.</En></>,
          ]}
        />
        <Mistake>Writing a long story. A CV gives short, true facts under each heading.</Mistake>
      </>,
    ),
  },
  {
    title: 'CV: referees and contact details',
    content: slide(
      <>
        <Rule>End the CV with <Af>Verwysings</Af> <En>referees</En>: people who know you. Give contact details: a <Af>selfoonnommer</Af> <En>cellphone number</En> and an <Af>e-posadres</Af> <En>e-mail address</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['verwysings', 'referees'], ['selfoonnommer', 'cellphone number'], ['e-posadres', 'e-mail address']]}
          aria="Three Afrikaans CV words with their English meaning: verwysings is referees, selfoonnommer is cellphone number, e-posadres is e-mail address."
        />
        <Worked
          title="A referee line"
          steps={[
            <><Af>Mev. N. Dlamini, klasonderwyser</Af> <En>Mrs N. Dlamini, class teacher</En></>,
            <>Add her <Af>selfoonnommer</Af>: for example <Af>082 000 0000</Af>. <SpeakButton text="Mev. N. Dlamini, klasonderwyser" /></>,
          ]}
        />
        <Mistake>Naming a referee without contact details. The employer must be able to reach that person.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dekbrief: the key sentences',
    content: slide(
      <>
        <Rule>A <Af>dekbrief</Af> <En>covering letter</En> goes with the CV. It says which post you want, that the CV is attached, and that you can come for an <Af>onderhoud</Af> <En>interview</En>.</Rule>
        <Worked
          title="Three sentences"
          steps={[
            <><Af>Ek doen aansoek vir die pos van naweekassistent.</Af> <En>I am applying for the post of weekend assistant.</En> <SpeakButton text="Ek doen aansoek vir die pos van naweekassistent." /></>,
            <><Af>My CV is aangeheg.</Af> <En>My CV is attached.</En></>,
            <><Af>Ek is beskikbaar vir 'n onderhoud.</Af> <En>I am available for an interview.</En></>,
          ]}
        />
        <Mistake>Greeting with <Af>Haai</Af>. A covering letter is formal.</Mistake>
      </>,
    ),
  },
  {
    title: 'The layout and the closing',
    content: slide(
      <>
        <Rule>The dekbrief follows the formal letter order. The greeting is <Af>Geagte Meneer/Mevrou</Af> <En>Dear Sir/Madam</En> and the closing is <Af>Vriendelike groete</Af> <En>kind regards</En>.</Rule>
        <LetterLayout
          parts={['Adres, Datum', 'Geagte Meneer/Mevrou', 'Onderwerp: Aansoek', 'CV aangeheg', 'Vriendelike groete']}
          aria="A covering letter drawn as five strips from top to bottom: Adres and Datum, the greeting Geagte Meneer/Mevrou, the Onderwerp Aansoek, the line CV aangeheg, and the closing Vriendelike groete."
        />
        <Worked
          title="Check the order"
          steps={[
            <>Address and date first, then the greeting, the subject line and the short paragraphs.</>,
            <>End with <Af>Vriendelike groete</Af> and your name. <SpeakButton text="Vriendelike groete" /></>,
          ]}
        />
        <Mistake>Leaving out the <Af>Onderwerp</Af> <En>subject</En> line that names the post.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which heading means <em>qualifications</em>?</>} answer={<><Af>Kwalifikasies</Af>.</>} />
        <Check question={<>Which word means <em>referees</em>?</>} answer={<><Af>Verwysings</Af>.</>} />
        <Check question={<>Which word means <em>covering letter</em>?</>} answer={<><Af>Dekbrief</Af>.</>} />
        <Check question={<>Which sentence means <em>My CV is attached</em>?</>} answer={<><Af>My CV is aangeheg.</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Watter Afrikaanse woord beteken 'qualifications'?", options: ['Verwysings', 'Kwalifikasies', 'Werkondervinding', 'Selfoonnommer'], answer: 'Kwalifikasies', explanation: "'Kwalifikasies' means 'qualifications': school and results." },
  { prompt: "Watter opskrif beteken 'work experience'?", options: ['Kwalifikasies', 'Werkondervinding', 'Selfoonnommer', 'Persoonlike besonderhede'], answer: 'Werkondervinding', explanation: "'Werkondervinding' means 'work experience'." },
  { prompt: "Watter Afrikaanse woord beteken 'referees'?", options: ['Kwalifikasies', 'Getuies', 'Verwysings', 'Lede'], answer: 'Verwysings', explanation: "'Verwysings' means 'referees': people who know you." },
  { prompt: "Watter Afrikaanse woord beteken 'cellphone number'?", options: ['selfoonnommer', 'e-posadres van my', 'handtekening onderaan', 'datum van vandag'], answer: 'selfoonnommer', explanation: "'Selfoonnommer' means 'cellphone number'." },
  { prompt: "Watter Afrikaanse woord beteken 'e-mail address'?", options: ['e-posadres', 'selfoonnommer', 'onderwerp', 'kwalifikasies'], answer: 'e-posadres', explanation: "'E-posadres' means 'e-mail address'." },
  { prompt: "Watter Afrikaanse woord beteken 'covering letter'?", options: ['dagboek', 'testament', 'grondwet', 'dekbrief'], answer: 'dekbrief', explanation: "'Dekbrief' means 'covering letter': it goes with the CV." },
  { prompt: "Wat beteken 'onderhoud' in 'n aansoek?", options: ['subject', 'signature', 'address', 'interview'], answer: 'interview', explanation: "'Onderhoud' means 'interview'." },
  { prompt: "Watter sin beteken 'My CV is attached'?", options: ['My CV is aangeheg.', 'My CV is gister gestuur.', 'My CV is baie lank.', 'My CV is nie hier nie.'], answer: 'My CV is aangeheg.', explanation: "'Aangeheg' means 'attached'." },
  { prompt: "Watter sin sê dat jy 'n pos wil hê?", options: ['Ek het gister ver gehardloop met my maats.', 'Die klub het een keer per jaar in die saal vergader.', 'Ek doen aansoek vir die pos van naweekassistent.', 'Ek bemaak my huis aan my dogter, Lerato.'], answer: 'Ek doen aansoek vir die pos van naweekassistent.', explanation: "'Ek doen aansoek vir die pos van...' means 'I am applying for the post of...'." },
  { prompt: "Watter groet pas by 'n dekbrief?", options: ['Haai daar, my ou maat', 'Liewe Dagboek van my', 'Geagte Meneer/Mevrou', 'Hallo daar, boetie'], answer: 'Geagte Meneer/Mevrou', explanation: 'A covering letter is formal, so it uses Geagte Meneer/Mevrou.' },
  { prompt: "Watter afsluiting pas by 'n dekbrief?", options: ['Sien jou later, maat', 'Lekker bly en tot siens', 'Haai daar, totsiens', 'Vriendelike groete'], answer: 'Vriendelike groete', explanation: "'Vriendelike groete' is a formal, friendly closing." },
  { prompt: 'Wat kom in die onderwerp van die dekbrief?', options: ['Liewe Dagboek', 'Gister het ek gespeel', 'Aansoek vir die pos', 'Aangeneem op 3 Februarie'], answer: 'Aansoek vir die pos', explanation: 'The subject line names the post you want.' },
];

const CvCoveringLetter = () => (
  <AfrikaansTopic
    title="CV en Dekbrief"
    subtitle="CV headings, referees, and the key sentences, layout and closing of a covering letter"
    learnSteps={learnSteps}
    task="gr9-afr-cv-covering-letter-t3"
    bank={bank}
    speak="options"
  />
);

export default CvCoveringLetter;
