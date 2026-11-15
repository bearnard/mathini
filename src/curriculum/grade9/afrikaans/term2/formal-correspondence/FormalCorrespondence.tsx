import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The top of the letter: Adres, Datum, Geagte',
    content: slide(
      <>
        <Rule>A formal letter starts with the <Af>Adres</Af> <En>address</En> and the <Af>Datum</Af> <En>date</En>, then the greeting <Af>Geagte</Af> <En>Dear, respected</En> with a title and surname.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Adres', 'Address'], ['Datum', 'Date'], ['Geagte', 'Dear']]}
          aria="Three Afrikaans letter words with their English meaning: Adres is address, Datum is date, Geagte is dear or respected."
        />
        <Worked
          title="Write the top"
          steps={[
            <><Af>Hoofstraat 12, Kaapstad</Af> <En>12 Main Street, Cape Town</En></>,
            <><Af>12 Maart 2025</Af>, then <Af>Geagte Mnr. Smit</Af> <En>Dear Mr Smit</En>. <SpeakButton text="Geagte Mnr. Smit" /></>,
          ]}
        />
        <Mistake>Greeting with <Af>Haai</Af> or only a first name. A formal letter uses <Af>Geagte</Af> plus title and surname.</Mistake>
      </>,
    ),
  },
  {
    title: 'Onderwerp, Handtekening, Vriendelik',
    content: slide(
      <>
        <Rule>The <Af>Onderwerp</Af> <En>subject</En> line says what the letter is about. You end with a friendly closing and your <Af>Handtekening</Af> <En>signature</En>. <Af>Vriendelik</Af> means kind or friendly.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['Onderwerp', 'Subject'], ['Handtekening', 'Signature'], ['Vriendelik', 'Kind']]}
          aria="Three Afrikaans letter words with their English meaning: Onderwerp is subject, Handtekening is signature, Vriendelik is kind or friendly."
        />
        <Worked
          title="Subject and closing"
          steps={[
            <><Af>Onderwerp: Versoek om 'n afspraak</Af> <En>Subject: Request for an appointment</En></>,
            <>Closing: <Af>Vriendelike groete</Af> <En>kind regards</En>, then your signature and name.</>,
          ]}
        />
        <Mistake>Leaving out the <Af>Onderwerp</Af>, or signing without a closing. The closing comes before the signature.</Mistake>
      </>,
    ),
  },
  {
    title: 'The whole formal letter',
    content: slide(
      <>
        <Rule>Put the parts in order: address and date, greeting, content, closing, signature. The subject line comes after the greeting.</Rule>
        <LetterLayout
          parts={['Adres, Datum', 'Geagte Mnr. Smit', 'Onderwerp en inhoud', 'Vriendelike groete', 'Handtekening']}
          aria="A formal letter drawn as five strips from top to bottom: Adres and Datum, the greeting Geagte Mnr. Smit, the Onderwerp and inhoud (the biggest strip), the closing Vriendelike groete, and the Handtekening (signature)."
        />
        <Worked
          title="Check the order"
          steps={[
            <>Address and date at the top, then the greeting.</>,
            <>Then subject and content, the closing, and last of all the signature.</>,
          ]}
        />
        <Mistake>Putting the signature before the closing, or the date at the bottom. Follow the order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Register and audience',
    content: slide(
      <>
        <Rule>The register must fit the reader. Public writing, such as a letter to a newspaper editor, needs a formal tone and a clear purpose.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['redakteur', 'formeel'], ['boetie', 'informeel']]}
          aria="Two readers and the register to use: a redakteur (editor) needs a formeel (formal) register, a boetie (little brother) allows an informeel (informal) register."
        />
        <Worked
          title="Match the reader"
          steps={[
            <>To an editor: <Af>Ek skryf om my kommer uit te spreek oor...</Af> <En>I am writing to express my concern about...</En></>,
            <>To your little brother: <Af>Hallo, boetie! Hoe gaan dit?</Af> Relaxed and friendly.</>,
          ]}
        />
        <Mistake>Using the same register for every reader. Think about who will read the text and why you write.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>Dear / respected</em>?</>} answer={<><Af>Geagte</Af>.</>} />
        <Check question={<>Which word means <em>Subject</em> in a letter?</>} answer={<><Af>Onderwerp</Af>.</>} />
        <Check question={<>Which word means <em>Signature</em>?</>} answer={<><Af>Handtekening</Af>.</>} />
        <Check question={<>Which word means <em>Date</em>?</>} answer={<><Af>Datum</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'Dear / respected'?",
    options: ["Geagte", "Adres", "Datum", "Vriendelik"],
    answer: "Geagte",
    explanation: "'Geagte' means 'Dear' or 'respected' and opens a formal letter, e.g. 'Geagte Meneer'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Subject'?",
    options: ["Onderwerp", "Handtekening", "Vriendelik", "Adres"],
    answer: "Onderwerp",
    explanation: "'Onderwerp' means 'Subject'. A formal letter or e-mail states its subject.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Address'?",
    options: ["Adres", "Datum", "Geagte", "Onderwerp"],
    answer: "Adres",
    explanation: "'Adres' means 'Address'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Date'?",
    options: ["Datum", "Adres", "Geagte", "Vriendelik"],
    answer: "Datum",
    explanation: "'Datum' means 'Date'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Signature'?",
    options: ["Handtekening", "Onderwerp", "Adres", "Vriendelik"],
    answer: "Handtekening",
    explanation: "'Handtekening' means 'Signature'. It comes at the end of the letter.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Kind / friendly'?",
    options: ["Vriendelik", "Datum", "Geagte", "Onderwerp"],
    answer: "Vriendelik",
    explanation: "'Vriendelik' means 'kind' or 'friendly'.",
  },
];

export { bank };

const FormalCorrespondence = () => (
  <AfrikaansTopic
    title="Formele Korrespondensie"
    subtitle="Register, audience awareness, and professional format"
    learnSteps={learnSteps}
    task="gr9-formal-correspondence-t2"
    bank={bank}
    speak="options"
  />
);

export default FormalCorrespondence;
