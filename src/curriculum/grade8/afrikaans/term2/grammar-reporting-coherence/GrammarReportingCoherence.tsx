import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech repeats the exact words in quotation marks, after a colon. Indirect speech reports them with <Af>dat</Af> and no quotation marks.</Rule>
        <TaggedBoxes
          items={[{ word: "Sy sê: 'Ek leer nou.'", tag: 'direk' }, { word: 'Sy sê dat sy nou leer.', tag: 'indirek' }]}
          aria="The same words in two forms: direct speech Sy sê: Ek leer nou in quotation marks, and indirect speech Sy sê dat sy nou leer."
        />
        <Worked
          title="Change direct to indirect"
          steps={[
            <><Af>Sy sê: 'Ek leer nou.'</Af> becomes <Af>Sy sê dat sy nou leer.</Af> <SpeakButton text="Sy sê dat sy nou leer." /></>,
            <>Direct speech with a question: <Af>Hy vra: 'Wanneer begin die toets?'</Af> <En>He asks: When does the test begin?</En></>,
          ]}
        />
        <Mistake>Keeping the quotation marks or the original pronoun. <Af>Sy sê dat ek nou leer</Af> is wrong: the speaker is <Af>sy</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pronouns change with the speaker',
    content: slide(
      <>
        <Rule>When you report speech, the pronouns change to fit the new speaker. <Af>ek</Af> becomes <Af>sy</Af> or <Af>hy</Af>; <Af>julle</Af> becomes <Af>hulle</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['ek', 'sy / hy'], ['julle', 'hulle'], ['Lebo en Anna', 'hulle']]}
          aria="Three words and the pronoun that replaces them in reported speech: ek becomes sy or hy, julle becomes hulle, Lebo en Anna becomes hulle."
        />
        <Worked
          title="Choose the pronoun"
          steps={[
            <><Af>Mnr. Naidoo sê: 'Julle moet stil wees.'</Af> becomes <Af>Mnr. Naidoo sê dat hulle stil moet wees.</Af> <SpeakButton text="Mnr. Naidoo sê dat hulle stil moet wees." /></>,
            <><Af>Lebo en Anna bring hulle boeke.</Af> <En>Lebo and Anna bring their books.</En> Two people: <Af>hulle</Af>.</>,
          ]}
        />
        <Mistake>Keeping <Af>julle</Af> in the report. <Af>Mnr. Naidoo sê dat julle stil moet wees</Af> speaks to the class, but the report talks about them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time words change too',
    content: slide(
      <>
        <Rule>When the report looks back, with a past reporting verb such as <Af>het gesê</Af>, time words change: <Af>môre</Af> becomes <Af>die volgende dag</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['môre', 'die volgende dag'], ['gister', 'die vorige dag'], ['vandag', 'daardie dag']]}
          aria="Three time words and how they change in a report: môre becomes die volgende dag, gister becomes die vorige dag, vandag becomes daardie dag."
        />
        <Worked
          title="Report the plan"
          steps={[
            <><Af>'Ek gaan môre oefen,' het Karla gesê.</Af> <En>I am going to practise tomorrow, Karla said.</En></>,
            <><Af>Karla het gesê dat sy die volgende dag gaan oefen.</Af> <SpeakButton text="Karla het gesê dat sy die volgende dag gaan oefen." /></>,
            <><Af>Karla sê sy gaan die volgende dag oefen</Af> shifts it too. After <Af>sê</Af>, <Af>môre</Af> may also stay.</>,
          ]}
        />
        <Mistake>Leaving <Af>môre</Af> after <Af>het gesê</Af>. The pronoun changes to <Af>sy</Af> and the time word to <Af>die volgende dag</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Concord: one verb form',
    content: slide(
      <>
        <Rule>In Afrikaans the verb does not change for different subjects. <Af>ek skryf</Af>, <Af>die leerders skryf</Af>. Add no endings, and keep an adverb plain: <Af>netjies</Af>.</Rule>
        <WordBoxes
          words={['Die leerders', 'skryf', 'netjies']}
          hot={[1]}
          aria="The sentence Die leerders skryf netjies as three boxes, with the plain verb skryf highlighted."
        />
        <Worked
          title="Check the sentence"
          steps={[
            <><Af>Die leerders skryf netjies.</Af> <En>The learners write neatly.</En> <SpeakButton text="Die leerders skryf netjies." /></>,
            <>The same verb form for one subject or many: <Af>Die klas werk stil.</Af></>,
          ]}
        />
        <Mistake>Adding endings: <Af>skryfte</Af>, <Af>werke</Af> and <Af>netjiese</Af> are wrong here. In the past use <Af>het</Af> plus <Af>geskryf</Af>, not <Af>het skryf</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Coherence: dus, want, maar',
    content: slide(
      <>
        <Rule>Coherence means the ideas follow each other clearly. <Af>Samehang</Af> matters in a report because <Af>Dit help die leser om idees maklik te volg</Af> <En>it helps the reader follow the ideas easily</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['dus', 'therefore'], ['want', 'because'], ['maar', 'but']]}
          aria="Three Afrikaans linking words with their English meaning: dus is therefore, want is because, maar is but."
        />
        <Worked
          title="Show the result"
          steps={[
            <><Af>Hy het hard gewerk, dus het hy geslaag.</Af> <En>He worked hard, so he passed.</En> <SpeakButton text="Hy het hard gewerk, dus het hy geslaag." /></>,
            <><Af>dus</Af> shows a logical result. After <Af>dus</Af> the verb comes before the subject.</>,
          ]}
        />
        <Mistake>Using <Af>maar</Af> or <Af>of</Af> for a result. <Af>maar</Af> shows contrast. A result needs <Af>dus</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Change to indirect speech: <Af>Sy sê: 'Ek leer nou.'</Af></>} answer={<><Af>Sy sê dat sy nou leer.</Af></>} />
        <Check question={<>Fill in: <Af>Lebo en Anna bring ___ boeke.</Af></>} answer={<><Af>hulle</Af>.</>} />
        <Check question={<>Choose the linking word: <Af>Hy het hard gewerk, ___ het hy geslaag.</Af></>} answer={<><Af>dus</Af>.</>} />
        <Check question={<>Report this: <Af>'Ek gaan môre oefen,' het Karla gesê.</Af></>} answer={<><Af>Karla het gesê dat sy die volgende dag gaan oefen.</Af></>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte indirekte rede: Sy sê: 'Ek leer nou.'",
    options: ['Sy sê dat sy nou leer.', 'Sy sê ek leer nou.', 'Sy sê dat ek nou leer.', 'Sy sê dat sy leer gister.'],
    answer: 'Sy sê dat sy nou leer.',
    explanation: 'Pronoun shifts from first person to third person.',
  },
  {
    prompt: "Watter voornaamwoord pas: 'Lebo en Anna bring ___ boeke.'",
    options: ['hulle', 'hy', 'sy', 'ons'],
    answer: 'hulle',
    explanation: 'Plural subject needs plural pronoun.',
  },
  {
    prompt: "Kies die sin met korrekte kongruensie.",
    options: ['Die leerders skryf netjies.', 'Die leerders skryf netjiese.', 'Die leerders skryfte netjies.', 'Die leerders het skryf netjies.'],
    answer: 'Die leerders skryf netjies.',
    explanation: 'Verb form and sentence structure are correct.',
  },
  {
    prompt: "Watter voegwoord verbeter samehang hier: 'Hy het hard gewerk, ___ het hy geslaag.'",
    options: ['dus', 'maar', 'of', 'alhoewel'],
    answer: 'dus',
    explanation: "'Dus' shows logical result.",
  },
  {
    prompt: "Kies die beste indirekte weergawe: Mnr. Naidoo sê: 'Julle moet stil wees.'",
    options: ['Mnr. Naidoo sê dat hulle stil moet wees.', 'Mnr. Naidoo sê julle moet stil wees.', 'Mnr. Naidoo sê dat ons stil wees.', 'Mnr. Naidoo sê dat hy stil moet wees.'],
    answer: 'Mnr. Naidoo sê dat hulle stil moet wees.',
    explanation: 'Reported speech adjusts pronouns correctly.',
  },
  {
    prompt: "Waarom is samehang belangrik in verslagskryfwerk?",
    options: ['Dit help die leser om idees maklik te volg', 'Dit maak sinne langer sonder rede', 'Dit verwyder alle voegwoorde', 'Dit stop die hoofidee'],
    answer: 'Dit help die leser om idees maklik te volg',
    explanation: 'Coherence supports clear communication.',
  },
  {
    prompt: "Watter sin gebruik direkte rede korrek?",
    options: ["Hy vra: 'Wanneer begin die toets?'", 'Hy vra wanneer begin die toets?', "Hy vra 'Wanneer begin die toets?", 'Hy vra: wanneer begin die toets.'],
    answer: "Hy vra: 'Wanneer begin die toets?'",
    explanation: 'Direct speech uses punctuation and quotation marks.',
  },
  {
    prompt: "Kies die beste aanpassing van tyd: 'Ek gaan môre oefen,' sê Karla.",
    options: ['Karla sê sy gaan die volgende dag oefen.', 'Karla sê ek gaan môre oefen.', 'Karla sê sy oefen gister.', 'Karla sê sy gaan môre te gewees oefen.'],
    answer: 'Karla sê sy gaan die volgende dag oefen.',
    explanation: "Time words often shift in reported speech.",
  },
];

export { bank };

const GrammarReportingCoherence = () => (
  <AfrikaansTopic
    title="Grammatika vir Verslagdoening & Samehang"
    subtitle="Reported speech, pronouns, concord and coherent sentence links"
    learnSteps={learnSteps}
    task="gr8-grammar-reporting-coherence-t2"
    bank={bank}
    speak="options"
  />
);

export default GrammarReportingCoherence;
