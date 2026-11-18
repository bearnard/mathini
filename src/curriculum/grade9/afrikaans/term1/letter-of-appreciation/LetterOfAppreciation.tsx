import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Brief van waardering: the opening',
    content: slide(
      <>
        <Rule>A <Af>brief van waardering</Af> <En>letter of appreciation</En> thanks someone for <Af>hulp</Af> <En>help</En> or <Af>advies</Af> <En>advice</En>. The first paragraph says what you are thanking the person for.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['waardering', 'appreciation'], ['hulp', 'help'], ['advies', 'advice']]}
          aria="Three Afrikaans words with their English meaning: waardering is appreciation, hulp is help, advies is advice."
        />
        <Worked
          title="Open the letter"
          steps={[
            <><Af>Baie dankie vir u hulp.</Af> <En>Thank you very much for your help.</En> <SpeakButton text="Baie dankie vir u hulp." /></>,
            <><Af>Ek wil u bedank vir u advies.</Af> <En>I want to thank you for your advice.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Dankie, maat</Af> <En>Thanks, mate</En> to a teacher. Use the polite words of a letter.</Mistake>
      </>,
    ),
  },
  {
    title: 'The middle: what the help did',
    content: slide(
      <>
        <Rule>The middle gives the supporting ideas: what the person did and what changed. Use <Af>omdat</Af> <En>because</En> to give a reason.</Rule>
        <TaggedBoxes
          items={[{ word: 'omdat', tag: 'because' }, { word: 'daarom', tag: 'therefore' }, { word: 'beter', tag: 'better' }]}
          aria="Three Afrikaans words with their English meaning: omdat is because, daarom is therefore, beter is better."
        />
        <Worked
          title="Say what changed"
          steps={[
            <><Af>My punte het beter geword.</Af> <En>My marks got better.</En> <SpeakButton text="My punte het beter geword." /></>,
            <><Af>Ek is dankbaar omdat u my gehelp het.</Af> <En>I am grateful because you helped me.</En></>,
          ]}
        />
        <Mistake>Writing only <Af>Ek is dankbaar</Af> <En>I am grateful</En>. Say why, with facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'The format and the ending',
    content: slide(
      <>
        <Rule>A <Af>brief</Af> <En>letter</En> starts with your address and the date, then the greeting <Af>Geagte Mev. Pillay</Af> <En>Dear Mrs Pillay</En>. End with thanks once more and <Af>Vriendelike groete</Af> <En>Kind regards</En>. Use <Af>u</Af> for the reader, never <Af>jou</Af>.</Rule>
        <OrderTiles
          tiles={['Adres en datum', 'Geagte Mev. Pillay', 'Baie dankie vir u hulp', 'Weer eens dankie', 'Vriendelike groete']}
          aria="The parts of a letter of appreciation in order: the address and date, the greeting Geagte Mev. Pillay, the thanks Baie dankie vir u hulp, the second thanks Weer eens dankie, and the closing Vriendelike groete."
        />
        <Worked
          title="End the letter"
          steps={[
            <><Af>Weer eens baie dankie vir u tyd.</Af> <En>Thank you once more for your time.</En> <SpeakButton text="Weer eens baie dankie vir u tyd." /></>,
            <><Af>Vriendelike groete</Af> <En>Kind regards</En>, and then your name.</>,
          ]}
        />
        <Mistake>Using <Af>jou</Af> for a teacher. In this letter write <Af>u</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>help</em>?</>} answer={<><Af>Hulp</Af>.</>} />
        <Check question={<>Which word means <em>because</em>?</>} answer={<><Af>Omdat</Af>.</>} />
        <Check question={<>Which greeting suits a letter to Mrs Pillay?</>} answer={<><Af>Geagte Mev. Pillay</Af>.</>} />
        <Check question={<>Which closing means <em>Kind regards</em>?</>} answer={<><Af>Vriendelike groete</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Watter Afrikaanse woord beteken 'help'?", options: ['advies', 'brief', 'datum', 'hulp'], answer: 'hulp', explanation: "'Hulp' means 'help'." },
  { prompt: "Watter Afrikaanse woord beteken 'advice'?", options: ['hulp', 'advies', 'groete', 'tyd'], answer: 'advies', explanation: "'Advies' means 'advice'." },
  { prompt: "Watter Afrikaanse woord beteken 'appreciation'?", options: ['waardering', 'handtekening', 'aansoekbrief', 'ondervinding'], answer: 'waardering', explanation: "'Waardering' means 'appreciation'." },
  { prompt: "Watter Afrikaanse woord beteken 'because'?", options: ['daarom', 'maar', 'omdat', 'dan'], answer: 'omdat', explanation: "'Omdat' gives a reason." },
  { prompt: "Watter sin pas by die eerste paragraaf van 'n brief van waardering?", options: ['Ek het gister met my maats gehardloop.', 'Ek wil u bedank vir u advies.', 'My CV is aangeheg.', 'Die klub het in die saal vergader.'], answer: 'Ek wil u bedank vir u advies.', explanation: 'The first paragraph says what you are thanking the person for.' },
  { prompt: 'Watter sin bedank die leser?', options: ['Ek is moeg vandag.', 'Dankie, maat, tot later.', 'Die brief is lank.', 'Baie dankie vir u hulp.'], answer: 'Baie dankie vir u hulp.', explanation: "It thanks the reader with the polite 'u'." },
  { prompt: "Wat beteken die woord 'dankbaar'?", options: ['embarrassed', 'impatient', 'grateful', 'confused'], answer: 'grateful', explanation: "'Dankbaar' means grateful: you feel thankful for what someone did." },
  { prompt: 'Watter sin sê wat verander het?', options: ['My punte het beter geword.', 'Weer eens baie dankie vir u tyd.', 'Ek wil u bedank vir u advies.', 'Baie dankie vir u hulp.'], answer: 'My punte het beter geword.', explanation: 'A supporting idea says what changed after the help.' },
  { prompt: 'Watter afsluiting pas by die brief?', options: ['Sien jou later, maat', 'Lekker bly en tot siens', 'Haai daar, totsiens', 'Vriendelike groete'], answer: 'Vriendelike groete', explanation: "'Vriendelike groete' is a polite closing." },
  { prompt: "Watter woord is die formele 'you'?", options: ['jy', 'jou', 'ek', 'u'], answer: 'u', explanation: "In this letter the reader is addressed as 'u'." },
  { prompt: "Watter aanhef pas by 'n brief aan Mev. Pillay?", options: ['Haai Mev. Pillay, hoe gaan dit?', 'Ou Pillay', 'Pillay!', 'Geagte Mev. Pillay'], answer: 'Geagte Mev. Pillay', explanation: "'Geagte' is the polite greeting of a letter." },
  { prompt: 'Watter sin is die slot van die brief?', options: ['Weer eens baie dankie vir u tyd.', 'Ek het gister met my maats gehardloop.', 'My CV is aangeheg vir u inligting.', 'Ek is vandag baie moeg en honger.'], answer: 'Weer eens baie dankie vir u tyd.', explanation: 'The ending thanks the reader once more.' },
];

const LetterOfAppreciation = () => (
  <AfrikaansTopic
    title="Brief van Waardering"
    subtitle="Thanking someone for help: the opening, what changed, the format and the formal u"
    learnSteps={learnSteps}
    task="gr9-afr-letter-of-appreciation-t1"
    bank={bank}
    speak="options"
  />
);

export default LetterOfAppreciation;
