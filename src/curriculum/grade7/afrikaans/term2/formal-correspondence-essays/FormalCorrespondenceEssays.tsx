import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Parts of a formal letter',
    content: slide(
      <>
        <Rule>A formal letter has an <Af>Adres</Af> and <Af>Datum</Af> at the top, then the greeting, the <Af>Onderwerp</Af> <En>subject</En>, the content, the closing and the <Af>Handtekening</Af> <En>signature</En>.</Rule>
        <LetterLayout
          parts={['adres, datum', 'Geagte Meneer', 'Onderwerp', 'inhoud', 'Die uwe', 'handtekening']}
          aria="A formal letter drawn as six strips from top to bottom: adres and datum, the greeting Geagte Meneer, the Onderwerp (subject) line, the inhoud (content, the biggest strip), the closing Die uwe, and the handtekening (signature)."
        />
        <Worked
          title="Put the parts in order"
          steps={[
            <>Address and date first. Then <Af>Geagte Meneer</Af> <En>Dear Sir</En>.</>,
            <>A short <Af>Onderwerp</Af> line says what the letter is about.</>,
            <>Then the content, <Af>Die uwe</Af> <En>yours faithfully</En>, and your signature.</>,
          ]}
        />
        <Mistake>Leaving out the greeting or closing. Every formal letter needs both, and the content comes after the greeting.</Mistake>
      </>,
    ),
  },
  {
    title: 'Greeting and closing: formal words',
    content: slide(
      <>
        <Rule>Use a formal greeting and a formal closing. <Af>Geagte Meneer</Af> is a formal greeting, and <Af>Die uwe</Af> is a formal closing.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['Geagte Meneer', 'Haai maat'], ['Die uwe', 'Cheers']]}
          aria="Two pairs of opposites: the formal greeting Geagte Meneer against the informal Haai maat, and the formal closing Die uwe against the informal Cheers."
        />
        <Worked
          title="Choose the formal word"
          steps={[
            <>Greeting: <Af>Geagte Meneer</Af>, not <Af>Yo vriend</Af> or <Af>Hey julle</Af>. <SpeakButton text="Geagte Meneer" /></>,
            <>Closing: <Af>Die uwe</Af>, not <Af>Sien jou later</Af> or <Af>Liefde en liggies</Af>.</>,
          ]}
        />
        <Mistake>Using a friendly closing in a formal letter. <Af>Sien jou later</Af> is for a friend, not for a principal or an official.</Mistake>
      </>,
    ),
  },
  {
    title: 'Content and register',
    content: slide(
      <>
        <Rule>After the greeting comes <Af>Die inhoud of paragrawe van die brief</Af> <En>the content, in paragraphs</En>. The register must be <Af>Formeel en respekvol</Af> <En>formal and respectful</En>.</Rule>
        <OrderTiles
          tiles={['Groet', 'Inhoud', 'Afsluiting']}
          aria="Three parts of a formal letter in order: Groet (greeting), Inhoud (content), Afsluiting (closing)."
        />
        <Worked
          title="Check the register"
          steps={[
            <>Informal: <Af>Haai, ek wil net sê...</Af></>,
            <>Formal: <Af>Ek skryf om te vra of ek...</Af> <En>I am writing to ask whether I...</En></>,
            <>Avoid <Af>Informele afkortings soos 'lol' en 'btw'</Af> <En>informal short forms such as lol and btw</En>.</>,
          ]}
        />
        <Mistake>Using slang, jokes, SMS language or emoji. Formal writing is neat, polite and in clear paragraphs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plan your essay',
    content: slide(
      <>
        <Rule>Plan before you write an essay. <Af>Dit help jou idees logies organiseer</Af> <En>it helps you organise ideas in a logical order</En>.</Rule>
        <OrderTiles
          tiles={['Idees', 'Volgorde', 'Skryf']}
          aria="Three planning steps in order: Idees (ideas), Volgorde (order), Skryf (write)."
        />
        <Worked
          title="A quick plan"
          steps={[
            <>Write down your ideas on the topic.</>,
            <>Put them in order: opening, middle, closing.</>,
            <>Then write, using one paragraph for each idea.</>,
          ]}
        />
        <Mistake>Thinking a plan only makes the essay longer. A plan does not change the topic and does not replace editing. It keeps your ideas in order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Essay openings and closings',
    content: slide(
      <>
        <Rule>A descriptive essay opens with what you see, hear or smell. A narrative essay closes by finishing the story, often with the resolution or what the writer learnt.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['beskrywend', 'sintuie'], ['narratief', 'les']]}
          aria="Two essay types and what they use: a beskrywende opstel (descriptive essay) uses the senses (sintuie), a narratiewe opstel (narrative essay) ends with a lesson (les)."
        />
        <Worked
          title="Open and close"
          steps={[
            <>Opening: <Af>Die oggendlug het vars geruik toe ons by die strand aankom.</Af> <En>The morning air smelled fresh when we reached the beach.</En></>,
            <>Closing: <Af>Uiteindelik het ek besef hoe belangrik moed is.</Af> <En>In the end I realised how important courage is.</En> <SpeakButton text="Uiteindelik het ek besef hoe belangrik moed is." /></>,
          ]}
        />
        <Mistake>Opening with a line about the paper, such as <Af>Die papier waarop ek skryf is wit en skoon</Af>. Open with the scene.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which greeting is formal: <Af>Geagte Meneer</Af> or <Af>Haai maat</Af>?</>} answer={<><Af>Geagte Meneer</Af>.</>} />
        <Check question={<>Which closing is formal: <Af>Die uwe</Af> or <Af>Cheers</Af>?</>} answer={<><Af>Die uwe</Af>.</>} />
        <Check question={<>Which register must a formal letter use?</>} answer={<><Af>Formeel en respekvol</Af>.</>} />
        <Check question={<>Why plan an essay first?</>} answer={<><Af>Dit help jou idees logies organiseer</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter groet pas die beste in 'n formele brief?",
    options: ['Geagte Meneer', 'Haai maat', 'Yo vriend', 'Hey julle'],
    answer: 'Geagte Meneer',
    explanation: "'Geagte ...' is a formal salutation.",
  },
  {
    prompt: "Watter afsluiting is formeel?",
    options: ['Die uwe', 'Sien jou later', 'Cheers', 'Liefde en liggies'],
    answer: 'Die uwe',
    explanation: "'Die uwe' is appropriate for formal letters.",
  },
  {
    prompt: "Watter taalregister moet jy in 'n formele brief gebruik?",
    options: ['Formeel en respekvol', 'Sleng en grappies', 'Kort SMS-taal', 'Slegs emoji-tekens'],
    answer: 'Formeel en respekvol',
    explanation: 'Formal correspondence requires formal register.',
  },
  {
    prompt: "Wat kom gewoonlik ná die groet in 'n formele brief?",
    options: ['Die inhoud of paragrawe van die brief', 'Die slot van die brief dadelik', "Die titel van 'n gedig uit die klas", 'Daar volg geen teks na die groet nie'],
    answer: 'Die inhoud of paragrawe van die brief',
    explanation: 'After greeting, you write the body of the letter.',
  },
  {
    prompt: "Watter is die beste opening vir 'n beskrywende opstel?",
    options: ['Die oggendlug het vars geruik toe ons by die strand aankom.', "Hierdie opstel het drie paragrawe en 'n slot.", 'Ek skryf nou net woorde neer vir die opstel.', 'Die papier waarop ek skryf is wit en skoon.'],
    answer: 'Die oggendlug het vars geruik toe ons by die strand aankom.',
    explanation: 'A descriptive opening creates a vivid scene.',
  },
  {
    prompt: "Wat is 'n goeie rede om eers jou opstel te beplan?",
    options: ['Dit help jou idees logies organiseer', 'Dit maak die opstel langer sonder rede', 'Dit vervang redigering', 'Dit laat jou die onderwerp verander'],
    answer: 'Dit help jou idees logies organiseer',
    explanation: 'Planning improves structure and coherence.',
  },
  {
    prompt: "Kies die beste slot vir 'n narratiewe opstel.",
    options: ['Uiteindelik het ek besef hoe belangrik moed is.', 'My pen het opgehou werk tydens die opstel.', 'Daar was baie letters op die bladsy.', 'Ek hou baie van koekies en tee saam.'],
    answer: 'Uiteindelik het ek besef hoe belangrik moed is.',
    explanation: 'A good conclusion reflects on the story meaning.',
  },
  {
    prompt: "Watter fout moet jy vermy in formele skryfwerk?",
    options: ["Informele afkortings soos 'lol' en 'btw'", 'Korrekte leestekens in elke sin', 'Duidelike paragrawe met hoofgedagtes', 'Netjiese taalgebruik in die hele teks'],
    answer: "Informele afkortings soos 'lol' en 'btw'",
    explanation: 'Chat abbreviations are not suitable in formal writing.',
  },
];

export { bank };

const FormalCorrespondenceEssays = () => (
  <AfrikaansTopic
    title="Formele Korrespondensie & Opstelle"
    subtitle="Formal letters, register and essay structure"
    learnSteps={learnSteps}
    task="gr7-formal-correspondence-essays-t2"
    bank={bank}
    speak="options"
  />
);

export default FormalCorrespondenceEssays;
