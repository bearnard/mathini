import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Audience: teikengehoor and doelgroep',
    content: slide(
      <>
        <Rule>The <Af>Teikengehoor</Af> <En>target audience</En> names who must read the message. Words that point to a group, such as a grade, show the <Af>Doelgroep</Af> <En>target group</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Perfek vir Graad 8-leerders', tag: 'doelgroep' }]}
          aria="A line from an advertisement in one box, Perfek vir Graad 8-leerders, tagged doelgroep (target group)."
        />
        <Worked
          title="Find the audience"
          steps={[
            <><Af>Perfek vir Graad 8-leerders</Af> <En>Perfect for Grade 8 learners</En>. <SpeakButton text="Perfek vir Graad 8-leerders" /></>,
            <>The words name a group of people, so they show the <Af>doelgroep</Af>.</>,
          ]}
        />
        <Mistake>Calling the audience the product or the price. The audience is the group of people the advert is aimed at.</Mistake>
      </>,
    ),
  },
  {
    title: 'Language: slagspreuk and persuasive words',
    content: slide(
      <>
        <Rule>The main purpose of a <Af>slagspreuk</Af> <En>slogan</En> is <Af>Om die produk maklik te onthou</Af> <En>to make the product easy to remember</En>. <Af>Oorredende taal</Af> <En>persuasive language</En> pushes you to act.</Rule>
        <TaggedBoxes
          items={[{ word: 'slagspreuk', tag: 'onthou' }, { word: 'Moenie uitmis nie!', tag: 'oorreding' }]}
          aria="Two parts of an advertisement: the slagspreuk (slogan) helps you remember, and Moenie uitmis nie is persuasive language (oorreding)."
        />
        <Worked
          title="Spot the technique"
          steps={[
            <><Af>Moenie uitmis nie!</Af> <En>Don&apos;t miss out!</En> It pressures the reader to act now: persuasive language.</>,
            <>A slogan is short and catchy, so it is easy to remember.</>,
          ]}
        />
        <Mistake>Thinking a slogan is there to give the price or to list rules. It is there so you remember the product.</Mistake>
      </>,
    ),
  },
  {
    title: 'Layout: where does the eye go first?',
    content: slide(
      <>
        <Rule>To analyse the <Af>uitleg</Af> <En>layout</En> ask: <Af>Waar val jou oog eerste?</Af> Big pictures and bold headlines usually catch the eye first.</Rule>
        <OrderTiles
          tiles={['Beeld', 'Opskrif', 'Teks']}
          aria="Three parts of a layout in the order the eye usually moves: Beeld (picture), Opskrif (headline), Teks (small text)."
        />
        <Worked
          title="Read the layout"
          steps={[
            <>Look at the page for a second. What do you see first?</>,
            <>Then ask why: it is big, bright, or in the middle.</>,
          ]}
        />
        <Mistake>Only reading the small print. The designer chose what the eye sees first, so start with the picture and headline.</Mistake>
      </>,
    ),
  },
  {
    title: 'Call to action and question headlines',
    content: slide(
      <>
        <Rule>A call to action tells the reader what to do, for example <Af>Koop vandag en spaar 20%</Af>. A question as a headline is used <Af>Om nuuskierigheid te skep</Af> <En>to create curiosity</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Koop vandag!', 'aksie'], ['vraag-opskrif', 'nuuskierig']]}
          aria="Two advertising features and their effect: Koop vandag is a call to action (aksie), a question headline makes the reader curious (nuuskierig)."
        />
        <Worked
          title="Spot the call to action"
          steps={[
            <><Af>Koop vandag en spaar 20%</Af> <En>Buy today and save 20%</En> says what to do and why. <SpeakButton text="Koop vandag en spaar 20%" /></>,
            <>A headline that asks a question makes you want to read on to find the answer.</>,
          ]}
        />
        <Mistake>Choosing a line that only describes, like <Af>Die hemel is blou</Af>. A call to action asks you to do something.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evaluate: what makes an advert persuasive',
    content: slide(
      <>
        <Rule>The most persuasive advert combines <Af>Duidelike beeld en sterk woorde</Af> <En>a clear picture and strong words</En>. Evaluate the choices: does each part help the message?</Rule>
        <OrderTiles
          tiles={['Beeld', 'Woorde', 'Uitleg']}
          aria="Three design choices to evaluate: Beeld (picture), Woorde (words), Uitleg (layout)."
        />
        <Worked
          title="Evaluate"
          steps={[
            <>Is the picture clear and linked to the product?</>,
            <>Are the words strong? Does the layout lead the eye to the message?</>,
          ]}
        />
        <Mistake>Judging only by colour. A crowded page with weak words and a blurred picture is not persuasive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word names who must read the advertisement?</>} answer={<><Af>Teikengehoor</Af>.</>} />
        <Check question={<>What is the purpose of a slogan?</>} answer={<><Af>Om die produk maklik te onthou</Af>.</>} />
        <Check question={<><Af>Moenie uitmis nie!</Af> Which technique is this?</>} answer={<><Af>Oorredende taal</Af> <En>persuasive language</En>.</>} />
        <Check question={<>Which is a good call to action?</>} answer={<><Af>Koop vandag en spaar 20%</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter woord in 'n advertensie noem wie die boodskap moet lees?",
    options: ['Teikengehoor', 'Bysin', 'Werkwoord', 'Paragraaf'],
    answer: 'Teikengehoor',
    explanation: 'Target audience identifies who the advert is aimed at.',
  },
  {
    prompt: "Wat is die hoofdoel van 'n slagspreuk?",
    options: ['Om die produk maklik te onthou', 'Om die datum te versteek', 'Om leestekens te verduidelik', 'Om die advertensie langer te maak'],
    answer: 'Om die produk maklik te onthou',
    explanation: 'A slogan should be short and memorable.',
  },
  {
    prompt: "As die teks sê 'Moenie uitmis nie!', watter tegniek word gebruik?",
    options: ['Oorredende taal', 'Direkte rede', 'Opsomming', 'Verlede tyd'],
    answer: 'Oorredende taal',
    explanation: 'This phrase pushes the reader to act quickly.',
  },
  {
    prompt: 'Watter vraag help jou om uitleg te ontleed?',
    options: ['Waar val jou oog eerste?', 'Hoeveel letters is daar?', 'Watter pen is gebruik?', 'Wie het dit uitgedruk?'],
    answer: 'Waar val jou oog eerste?',
    explanation: 'Layout analysis starts by noticing visual focus.',
  },
  {
    prompt: "Kies die beste voorbeeld van 'n oproep tot aksie.",
    options: ['Koop vandag en spaar 20%', 'Hierdie is net inligting', 'Die plakkaat is blou', 'Daar is drie sinne'],
    answer: 'Koop vandag en spaar 20%',
    explanation: 'A call to action asks the reader to do something.',
  },
  {
    prompt: "Watter kombinasie maak 'n advertensie die mees oortuigend?",
    options: ['Duidelike beeld en sterk woorde', 'Baie klein letters en geen titel', 'Net een lang paragraaf', 'Geen prent en geen prys'],
    answer: 'Duidelike beeld en sterk woorde',
    explanation: 'Effective adverts balance visual and language impact.',
  },
  {
    prompt: "Waarom gebruik advertensies soms 'n vraag as opskrif?",
    options: ['Om nuuskierigheid te skep', 'Om grammatika te toets', 'Om antwoordstelle te gee', 'Om die produknaam te verwyder'],
    answer: 'Om nuuskierigheid te skep',
    explanation: 'Questions draw readers in and hold attention.',
  },
  {
    prompt: "In die sin 'Perfek vir Graad 8-leerders', wat wys dit die beste?",
    options: ['Doelgroep', 'Tydsvorm', 'Konflik', 'Byvoeging'],
    answer: 'Doelgroep',
    explanation: 'It specifies exactly who the advert is for.',
  },
];

export { bank };

const VisualLiteracyAdvertisements = () => (
  <AfrikaansTopic
    title="Visuele Geletterdheid & Advertensies"
    subtitle="Audience, persuasion and layout in visual texts"
    learnSteps={learnSteps}
    task="gr8-visual-literacy-advertisements-t1"
    bank={bank}
    speak="options"
  />
);

export default VisualLiteracyAdvertisements;
