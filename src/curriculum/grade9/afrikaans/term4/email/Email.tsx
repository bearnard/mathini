import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'E-pos: the parts',
    content: slide(
      <>
        <Rule>An <Af>e-pos</Af> <En>e-mail</En> has three lines before the message: <Af>Aan</Af> <En>To</En>, <Af>Kopie</Af> <En>CC</En> and <Af>Onderwerp</Af> <En>Subject</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Aan', tag: 'To' }, { word: 'Kopie', tag: 'CC' }, { word: 'Onderwerp', tag: 'Subject' }]}
          aria="Three e-mail lines with their English meaning: Aan is To, Kopie is CC, Onderwerp is Subject."
        />
        <Worked
          title="The subject line"
          steps={[
            <><Af>Onderwerp: Versoek om die saal</Af> <En>Subject: Request for the hall</En> <SpeakButton text="Versoek om die saal" /></>,
            <>The subject is a short summary of the message.</>,
          ]}
        />
        <Mistake>Leaving the <Af>Onderwerp</Af> empty. The reader needs to know what the e-mail is about.</Mistake>
      </>,
    ),
  },
  {
    title: 'A formal e-pos',
    content: slide(
      <>
        <Rule>To a teacher or an employer, use a formal greeting, a polite question and the formal <Af>u</Af>.</Rule>
        <Worked
          title="Formal sentences"
          steps={[
            <><Af>Geagte Mev. Dlamini</Af> <En>Dear Mrs Dlamini</En></>,
            <><Af>Mag ons asseblief die saal op Donderdag gebruik?</Af> <En>May we please use the hall on Thursday?</En> <Af>asseblief</Af> <En>please</En> <SpeakButton text="Mag ons asseblief die saal op Donderdag gebruik?" /></>,
            <><Af>Baie dankie.</Af> <En>Thank you very much.</En> End with <Af>Vriendelike groete</Af> <En>kind regards</En>.</>,
          ]}
        />
        <Mistake>Using text-message spelling in a formal e-mail. Write whole words and sentences.</Mistake>
      </>,
    ),
  },
  {
    title: 'An informal e-pos',
    content: slide(
      <>
        <Rule>To a friend, the language can be lively and simple. Start with <Af>Hallo</Af> and the first name, and end with <Af>Groete</Af>.</Rule>
        <Worked
          title="Informal sentences"
          steps={[
            <><Af>Hallo Zinzi!</Af> <En>Hello Zinzi!</En></>,
            <><Af>Raai wat het vandag gebeur!</Af> <En>Guess what happened today!</En> <SpeakButton text="Raai wat het vandag gebeur!" /></>,
            <><Af>Groete</Af> <En>regards, cheers</En> and your first name.</>,
          ]}
        />
        <Mistake>Sending an informal e-mail to a teacher. Match the register to the reader.</Mistake>
      </>,
    ),
  },
  {
    title: 'Formal or informal?',
    content: slide(
      <>
        <Rule>Decide who reads the e-pos. <Af>Die register moet by die leser pas</Af> <En>the register must suit the reader</En>: the greeting and closing change.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Geagte', 'Hallo'], ['Vriendelike groete', 'Groete']]}
          aria="Formal words and their informal partners: Geagte (Dear) becomes Hallo, and Vriendelike groete (kind regards) becomes Groete."
        />
        <Worked
          title="Choose the register"
          steps={[
            <>To the principal: <Af>Geagte Meneer</Af> and <Af>Vriendelike groete</Af>.</>,
            <>To a friend: <Af>Hallo Zinzi</Af> and <Af>Groete</Af>.</>,
          ]}
        />
        <Mistake>Mixing the two, such as <Af>Hallo Meneer</Af> with <Af>Vriendelike groete</Af>. Keep one register.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>e-mail</em>?</>} answer={<><Af>E-pos</Af>.</>} />
        <Check question={<>Which word means <em>CC</em> in an e-mail?</>} answer={<><Af>Kopie</Af>.</>} />
        <Check question={<>Which word means <em>Subject</em>?</>} answer={<><Af>Onderwerp</Af>.</>} />
        <Check question={<>Which closing is informal?</>} answer={<><Af>Groete</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Watter Afrikaanse woord beteken 'e-mail'?", options: ['dagboek', 'dekbrief', 'e-pos', 'selfoon'], answer: 'e-pos', explanation: "'E-pos' means 'e-mail'." },
  { prompt: "Watter woord beteken 'To' in 'n e-pos?", options: ['Kopie', 'Onderwerp', 'Aan', 'Groete'], answer: 'Aan', explanation: "'Aan' means 'To': the person you write to." },
  { prompt: "Watter woord beteken 'CC' in 'n e-pos?", options: ['Aan', 'Onderwerp', 'Hallo', 'Kopie'], answer: 'Kopie', explanation: "'Kopie' means 'copy' (CC)." },
  { prompt: "Watter woord beteken 'Subject'?", options: ['Boodskap', 'Aan en Van', 'Onderwerp', 'Groete van my'], answer: 'Onderwerp', explanation: "'Onderwerp' means 'Subject': a short summary of the message." },
  { prompt: "Watter onderwerp pas by 'n e-pos oor die saal?", options: ['Liewe Dagboek', 'Versoek om die saal', 'Aangeneem op 3 Februarie', 'Die getuies teken ook'], answer: 'Versoek om die saal', explanation: 'The subject summarises the message: a request for the hall.' },
  { prompt: "Watter groet pas by 'n formele e-pos aan 'n onderwyseres?", options: ['Hallo Zinzi, hoe gaan dit?', 'Haai daar, my ou maat', 'Liewe Dagboek van my', 'Geagte Mev. Dlamini'], answer: 'Geagte Mev. Dlamini', explanation: 'A formal e-mail uses a formal greeting with a title and surname.' },
  { prompt: "Watter sin pas by 'n formele e-pos?", options: ['Raai wat het vandag by ons hele skool gebeur man!', 'Gee my gou die saal vir Donderdag of hoe.', 'Ek wil die saal op Donderdag hê en wel nou.', 'Mag ons asseblief die saal op Donderdag gebruik?'], answer: 'Mag ons asseblief die saal op Donderdag gebruik?', explanation: 'It is polite and complete.' },
  { prompt: "Wat beteken die woord 'asseblief' in 'n beleefde vraag?", options: ['please', 'thank you', 'sorry', 'hello'], answer: 'please', explanation: "'Asseblief' means 'please'. It makes a request polite." },
  { prompt: "Watter sin pas by 'n informele e-pos aan 'n vriend?", options: ['Raai wat het vandag gebeur!', 'Mag ons asseblief die saal gebruik?', 'Geagte Mev. Dlamini', 'Baie dankie vir u tyd.'], answer: 'Raai wat het vandag gebeur!', explanation: 'It is lively and friendly.' },
  { prompt: "Watter afsluiting is informeel?", options: ['Groete', 'Vriendelike groete', 'Geagte', 'Onderwerp'], answer: 'Groete', explanation: "'Groete' is the informal closing; 'Vriendelike groete' is more formal." },
  { prompt: "Watter groet pas by 'n e-pos aan 'n vriend?", options: ['Geagte Meneer', 'Hallo Zinzi!', 'Geagte Mev. Dlamini', 'Aan die Redakteur'], answer: 'Hallo Zinzi!', explanation: "'Hallo' and the first name suit a friend." },
  { prompt: "Waarom skryf jy nie met selfoonspelling aan 'n onderwyser nie?", options: ['Selfone werk nie goed met e-pos', 'Die register moet by die leser pas', 'Onderwysers lees nooit hul eie e-pos', 'E-pos het geen spelling nodig'], answer: 'Die register moet by die leser pas', explanation: 'The register must suit the reader: a teacher expects formal language.' },
];

const Email = () => (
  <AfrikaansTopic
    title="E-pos"
    subtitle="The parts of an e-mail, a formal and an informal message, and choosing the register"
    learnSteps={learnSteps}
    task="gr9-afr-email-t4"
    bank={bank}
    speak="options"
  />
);

export default Email;
