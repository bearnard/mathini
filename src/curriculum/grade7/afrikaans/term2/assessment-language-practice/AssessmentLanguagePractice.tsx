import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Read the question slowly',
    content: slide(
      <>
        <Rule>The first strategy in a test question: <Af>Lees die vraag en sleutelwoorde stadig</Af> <En>read the question and the key words slowly</En>. Then look for the answer, write it and check it.</Rule>
        <OrderTiles
          tiles={['Lees', 'Soek', 'Skryf', 'Kyk na']}
          aria="Four test steps in order: Lees (read), Soek (find the answer), Skryf (write it), Kyk na (check it)."
        />
        <Worked
          title="Find the key words"
          steps={[
            <><Af>Watter produk word geadverteer?</Af> <En>Which product is advertised?</En></>,
            <>Key words: <Af>produk</Af> and <Af>geadverteer</Af>. They tell you to name the product.</>,
          ]}
        />
        <Mistake>Jumping straight to option C without reading, or ignoring the instruction and starting to write. Read first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evidence from the text',
    content: slide(
      <>
        <Rule>When a question says <Af>haal bewys uit die teks</Af> <En>take evidence from the text</En>, it means: <Af>Gebruik 'n woord of frase uit die teks as ondersteuning</Af> <En>use a word or phrase from the text as support</En>.</Rule>
        <WordBoxes
          words={['Sy', 'oë', 'was', 'swaar']}
          hot={[3]}
          aria="The phrase Sy oë was swaar as four boxes, with swaar highlighted as the evidence that Pieter was tired."
        />
        <Worked
          title="Support your answer"
          steps={[
            <>Text: <Af>Pieter was moeg. Sy oë was swaar.</Af> <En>Pieter was tired. His eyes were heavy.</En></>,
            <>Question: how do you know Pieter was tired?</>,
            <>Evidence: <Af>"Sy oë was swaar."</Af> <SpeakButton text="Sy oë was swaar." /></>,
          ]}
        />
        <Mistake>Writing your own story, guessing from the title, or copying the whole page. Choose a word or phrase from the text that supports your answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual texts: pictures and word choice',
    content: slide(
      <>
        <Rule>In an advertisement, <Af>Beelde en woordkeuse</Af> <En>pictures and word choice</En> show the target audience. Match the question to the text type.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['advertensie', 'produk'], ['gedig', 'rymskema'], ['storie', 'konflik']]}
          aria="Three text types and what to ask about each: an advertensie (advertisement) asks about the produk, a gedig (poem) about the rymskema (rhyme scheme), a storie (story) about the konflik."
        />
        <Worked
          title="Match question and text"
          steps={[
            <>Advertisement: <Af>Watter produk word geadverteer?</Af></>,
            <>A question about the <Af>hoofkarakter se konflik</Af>, the <Af>rymskema</Af> or the longest chapter does not fit an advertisement.</>,
          ]}
        />
        <Mistake>Using the colour of the paper, the page number or the price of the pen to find the audience. Look at the pictures and the words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Language check: punctuation, tense, spelling',
    content: slide(
      <>
        <Rule>Check three things: punctuation, tense and spelling. A warning ends with <Af>!</Af>. The past tense is <Af>het</Af> plus <Af>ge-</Af> verb.</Rule>
        <WordBoxes
          words={['Hulle', 'het', 'gister', 'gespeel']}
          hot={[1, 3]}
          aria="The sentence Hulle het gister gespeel as four boxes, with het and gespeel highlighted as the two parts of the past tense."
        />
        <Worked
          title="Fix the sentence"
          steps={[
            <><Af>Pasop! Die vloer is nat!</Af> <En>Careful! The floor is wet!</En> A warning takes <Af>!</Af></>,
            <><Af>Hulle het gister gespeel.</Af> <En>They played yesterday.</En> <SpeakButton text="Hulle het gister gespeel." /></>,
            <>Spelling: <Af>Die leerder voltooi sy huiswerk betyds.</Af> <En>The learner finishes his homework on time.</En></>,
          ]}
        />
        <Mistake>Mixing up the tense: <Af>Hulle gister speel</Af> and <Af>Hulle het speel gister</Af> are wrong. Write <Af>Hulle het gister gespeel.</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'Prepare a little every day',
    content: slide(
      <>
        <Rule>A good habit is <Af>Daaglikse kort hersiening van grammatika</Af> <En>short daily revision of grammar</En>. Do not leave it all to the night before.</Rule>
        <OrderTiles
          tiles={['Elke dag', 'Kort', 'Hersien']}
          aria="Three parts of a study habit: Elke dag (every day), Kort (short), Hersien (revise)."
        />
        <Worked
          title="A simple routine"
          steps={[
            <>Ten minutes a day: one tense, one spelling list, one punctuation rule.</>,
            <>Read your answers again before you hand in.</>,
          ]}
        />
        <Mistake>Learning everything the night before the test, writing without punctuation, or never reading your answers again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the first strategy in a test question?</>} answer={<><Af>Lees die vraag en sleutelwoorde stadig</Af>.</>} />
        <Check question={<>Choose the punctuation: <Af>Pasop___ die vloer is nat!</Af></>} answer={<><Af>!</Af> a warning takes an exclamation mark.</>} />
        <Check question={<>Which sentence is correct: <Af>Hulle het gister gespeel</Af> or <Af>Hulle gister speel</Af>?</>} answer={<><Af>Hulle het gister gespeel.</Af></>} />
        <Check question={<>Which question fits an advertisement?</>} answer={<><Af>Watter produk word geadverteer?</Af></>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter strategie help eerste in 'n toetsvraag?",
    options: ['Lees die vraag en sleutelwoorde stadig', 'Spring dadelik na opsie C sonder om te lees', 'Ignoreer die instruksie en begin skryf', 'Skryf iets neer sonder om eers te dink'],
    answer: 'Lees die vraag en sleutelwoorde stadig',
    explanation: 'Careful reading reduces avoidable mistakes.',
  },
  {
    prompt: "In 'n advertensie, wat help om die teikengehoor te identifiseer?",
    options: ['Beelde en woordkeuse', 'Net die papierkleur', 'Die bladsy nommer', 'Die prys van die pen'],
    answer: 'Beelde en woordkeuse',
    explanation: 'Visual and language choices reveal target audience.',
  },
  {
    prompt: "Kies die korrekte leesteken: 'Pasop___ die vloer is nat!'",
    options: ['!', '.', ',', '?'],
    answer: '!',
    explanation: 'An exclamation mark fits a warning.',
  },
  {
    prompt: "Watter opsie is die beste taalverbetering?",
    options: ['Hulle het gister gespeel.', 'Hulle gister speel.', 'Hulle speel gister.', 'Hulle het speel gister.'],
    answer: 'Hulle het gister gespeel.',
    explanation: "Correct past tense word order is 'het ... gespeel'.",
  },
  {
    prompt: "Wat beteken 'haal bewys uit die teks'?",
    options: ["Gebruik 'n woord of frase uit die teks as ondersteuning", 'Skryf jou eie storie oor die onderwerp', 'Raai die antwoord uit die titel van die teks', 'Kopieer die hele bladsy uit die teks neer'],
    answer: "Gebruik 'n woord of frase uit die teks as ondersteuning",
    explanation: 'Evidence must come from the given text.',
  },
  {
    prompt: "Watter sin is die beste voorbeeld van korrekte spelling?",
    options: ['Die leerder voltooi sy huiswerk betyds.', 'Die leeder voltoi sy huiswerk betyds.', 'Die lerder voltooi sy huisswerk betyds.', 'Die leerder voltooi sy huiswerkk betyds.'],
    answer: 'Die leerder voltooi sy huiswerk betyds.',
    explanation: 'This option has standard spelling.',
  },
  {
    prompt: "Kies die vraag wat by 'n visuele teks pas.",
    options: ['Watter produk word geadverteer?', 'Wat is die hoofkarakter se konflik?', 'Wat is die rymskema?', 'Watter hoofstuk is die langste?'],
    answer: 'Watter produk word geadverteer?',
    explanation: 'Visual text questions focus on adverts, posters, signs, and images.',
  },
  {
    prompt: "Watter gewoonte help met taaltoetsvoorbereiding?",
    options: ['Daaglikse kort hersiening van grammatika', 'Leer net die aand voor die toets alles', 'Skryf al jou werk sonder leestekens', 'Lees nooit jou antwoorde weer deur nie'],
    answer: 'Daaglikse kort hersiening van grammatika',
    explanation: 'Consistent practice builds accuracy.',
  },
];

export { bank };

const AssessmentLanguagePractice = () => (
  <AfrikaansTopic
    title="Assesseringsgerigte Taalpraktyk"
    subtitle="Comprehension, visual literacy and grammar readiness"
    learnSteps={learnSteps}
    task="gr7-assessment-language-practice-t2"
    bank={bank}
    speak="options"
  />
);

export default AssessmentLanguagePractice;
