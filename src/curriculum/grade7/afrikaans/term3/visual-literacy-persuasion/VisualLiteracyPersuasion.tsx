import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What an advertisement is for',
    content: slide(
      <>
        <Rule>The main purpose of an <Af>advertensie</Af> is <Af>Om mense te oortuig om iets te doen of koop</Af> <En>to persuade people to do or buy something</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['advertensie', 'oortuig'], ['plakkaat', 'aandag']]}
          aria="Two visual texts and their job: an advertensie (advertisement) wants to oortuig (persuade), a plakkaat (poster) must get aandag (attention)."
        />
        <Worked
          title="Spot the purpose"
          steps={[
            <>A poster says <Af>Koop nou!</Af> <En>Buy now!</En> It wants you to act.</>,
            <>So its purpose is to persuade, not to tell a story in chapters, test grammar or list rhyming words.</>,
          ]}
        />
        <Mistake>Treating an advertisement like a story. It does not tell a plot; it tries to make you buy or do something.</Mistake>
      </>,
    ),
  },
  {
    title: 'The AIDA model',
    content: slide(
      <>
        <Rule><strong>AIDA</strong> is the order in which an advertisement works on you. The last <strong>A</strong> stands for <strong>Action</strong>.</Rule>
        <OrderTiles
          tiles={['A', 'I', 'D', 'A']}
          aria="Four letters in order: A for Attention, I for Interest, D for Desire, A for Action."
        />
        <Worked
          title="Read the letters"
          steps={[
            <><strong>A</strong>ttention: a big picture or bold headline catches your eye.</>,
            <><strong>I</strong>nterest: facts or pictures keep you reading. <strong>D</strong>esire: you want the product.</>,
            <><strong>A</strong>ction: you are told what to do, for example <Af>Koop nou!</Af></>,
          ]}
        />
        <Mistake>Giving <em>Answer</em>, <em>Audience</em> or <em>Accuracy</em> for the last A. It is <strong>Action</strong>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Catching attention: beeld, opskrif, slagspreuk',
    content: slide(
      <>
        <Rule>A poster first catches the eye with a <Af>Groot beeld of vet opskrif</Af> <En>a big picture or bold headline</En>. A <Af>slagspreuk</Af> is a <Af>Kort, onthoubare frase vir die produk of boodskap</Af> <En>short, memorable phrase for the product or message</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'beeld', tag: 'aandag' }, { word: 'opskrif', tag: 'aandag' }, { word: 'slagspreuk', tag: 'onthou' }]}
          aria="Three parts of an advertisement: the beeld (picture) and the opskrif (headline) catch attention, the slagspreuk (slogan) is remembered."
        />
        <Worked
          title="Find the slogan"
          steps={[
            <>A short phrase such as <Af>Koop nou en spaar 20%!</Af> is easy to remember. <SpeakButton text="Koop nou en spaar 20%!" /></>,
            <>A long paragraph, a list of rules or a formal closing is not a slogan.</>,
          ]}
        />
        <Mistake>Naming a footnote, a page number or an author&apos;s signature as the first thing a poster shows. The eye goes to the big picture or bold headline.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience, call to action, emotional words',
    content: slide(
      <>
        <Rule>To find the audience ask <Af>Vir wie is hierdie advertensie bedoel?</Af> A call to action tells you to act now. <Af>Emosionele woordkeuse</Af> <En>emotional word choice</En> is a persuasive technique.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Koop nou!', 'aksie'], ['Pragtig!', 'gevoel'], ['Vir wie?', 'gehoor']]}
          aria="Three advertising ideas: Koop nou is a call to action (aksie), Pragtig is an emotional word (gevoel), Vir wie asks about the audience (gehoor)."
        />
        <Worked
          title="Pick the best call to action"
          steps={[
            <><Af>Koop nou en spaar 20%!</Af> is clear and urgent. <En>Buy now and save 20%!</En></>,
            <><Af>Miskien later, dalk.</Af> <En>Maybe later, perhaps.</En> is vague, so it is not a good call to action.</>,
          ]}
        />
        <Mistake>Choosing a sentence that has nothing to do with buying, such as <Af>Daar is wolke vandag.</Af> Emotional words and a clear call to action are persuasive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Read advertisements critically',
    content: slide(
      <>
        <Rule>Read an advertisement critically <Af>Om te toets of die boodskap betroubaar en billik is</Af> <En>to test whether the message is reliable and fair</En>.</Rule>
        <OrderTiles
          tiles={['Kyk', 'Vra', 'Toets']}
          aria="Three steps in order: Kyk (look), Vra (ask who it is for and what it wants), Toets (test whether it is reliable and fair)."
        />
        <Worked
          title="Ask questions"
          steps={[
            <>Who is it for? What does it want me to do?</>,
            <>Is the claim reliable? Is it fair, or does it hide something?</>,
          ]}
        />
        <Mistake>Only colouring the picture or skipping the questions about the advertisement. Critical reading means testing the message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the main purpose of an advertisement?</>} answer={<><Af>Om mense te oortuig om iets te doen of koop</Af>.</>} />
        <Check question={<>In AIDA, what does the last A stand for?</>} answer={<>Action.</>} />
        <Check question={<>What is a <Af>slagspreuk</Af>?</>} answer={<><Af>Kort, onthoubare frase vir die produk of boodskap</Af>.</>} />
        <Check question={<>Which question helps you find the audience?</>} answer={<><Af>Vir wie is hierdie advertensie bedoel?</Af></>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die hoofdoel van 'n advertensie?",
    options: ['Om mense te oortuig om iets te doen of koop', "Om 'n storie in hoofstukke te vertel", 'Om net grammatika te toets', 'Om rymwoorde te lys'],
    answer: 'Om mense te oortuig om iets te doen of koop',
    explanation: 'Adverts are designed to persuade.',
  },
  {
    prompt: "In AIDA, waarvoor staan die 'A' aan die einde?",
    options: ['Action', 'Answer', 'Audience', 'Accuracy'],
    answer: 'Action',
    explanation: 'The final step asks the audience to act.',
  },
  {
    prompt: "Watter element trek gewoonlik eerste aandag in 'n plakkaat?",
    options: ['Groot beeld of vet opskrif', 'Klein voetnota', 'Bladsynommer', 'Skrywer se handtekening'],
    answer: 'Groot beeld of vet opskrif',
    explanation: 'Visual hierarchy starts with large eye-catching elements.',
  },
  {
    prompt: "Wat is 'n slagspreuk?",
    options: ['Kort, onthoubare frase vir die produk of boodskap', "'n Lang paragraaf uit 'n opstel", "'n Lys van spelreëls vir 'n wedstryd", "'n Formele afsluiting van 'n brief"],
    answer: 'Kort, onthoubare frase vir die produk of boodskap',
    explanation: 'A slogan is short and memorable.',
  },
  {
    prompt: "Watter vraag help om die teikengehoor te bepaal?",
    options: ['Vir wie is hierdie advertensie bedoel?', 'Hoeveel bladsye het die handboek?', 'Wie het gister afwesig was?', 'Wat is die rymskema?'],
    answer: 'Vir wie is hierdie advertensie bedoel?',
    explanation: 'Target audience is the intended group.',
  },
  {
    prompt: "Kies die beste oproep tot aksie.",
    options: ['Koop nou en spaar 20%!', 'Miskien later, dalk.', 'Daar is wolke vandag.', "Hierdie is net 'n hoofstuknaam."],
    answer: 'Koop nou en spaar 20%!',
    explanation: "A call to action tells the reader what to do next.",
  },
  {
    prompt: "Watter tegniek is persuasief?",
    options: ['Emosionele woordkeuse', 'Wiskundeformules sonder konteks', 'Leë bladsy', 'Slegs voetnotas'],
    answer: 'Emosionele woordkeuse',
    explanation: 'Persuasive texts often use emotive language.',
  },
  {
    prompt: "Waarom moet jy 'n advertensie krities lees?",
    options: ['Om te toets of die boodskap betroubaar en billik is', 'Om net die prentjie in die advertensie te kleur', 'Om al die vrae oor die advertensie oor te slaan', 'Om ryme in elke sin van die teks te soek'],
    answer: 'Om te toets of die boodskap betroubaar en billik is',
    explanation: 'Critical reading checks claims and bias.',
  },
];

export { bank };

const VisualLiteracyPersuasion = () => (
  <AfrikaansTopic
    title="Visuele Geletterdheid & Oorreding"
    subtitle="Advertisements, AIDA and persuasive language"
    learnSteps={learnSteps}
    task="gr7-visual-literacy-persuasion-t3"
    bank={bank}
    speak="options"
  />
);

export default VisualLiteracyPersuasion;
