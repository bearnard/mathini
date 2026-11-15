import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The parts of an email',
    content: slide(
      <>
        <Rule>An <Af>e-pos</Af> is a transactional text. The <Af>Onderwerplyn</Af> <En>subject line</En> explains the topic in one short phrase. Then come the greeting, the message and the closing.</Rule>
        <LetterLayout
          parts={['Onderwerplyn', 'Geagte Mnr. Jacobs', 'Boodskap', 'Vriendelike groete', 'Naam']}
          aria="An email drawn as five strips from top to bottom: Onderwerplyn (subject line), the greeting Geagte Mnr. Jacobs, the Boodskap (message, the biggest strip), the closing Vriendelike groete, and the Naam (name)."
        />
        <Worked
          title="Write the subject line"
          steps={[
            <>A short phrase that says what the email is about: <Af>Aansoek om 'n boek</Af> <En>Request for a book</En>.</>,
            <>It is not a whole sentence and not left empty.</>,
          ]}
        />
        <Mistake>Leaving the subject line empty or writing the whole message in it. The subject line is one short phrase.</Mistake>
      </>,
    ),
  },
  {
    title: 'Formal greeting and closing',
    content: slide(
      <>
        <Rule>To a school principal write <Af>Geagte Mnr. Jacobs</Af> <En>Dear Mr Jacobs</En> and close with <Af>Vriendelike groete</Af> <En>kind regards</En>. A formal letter closes with <Af>Die uwe</Af>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Geagte Mnr. Jacobs', tag: 'aanhef' }, { word: 'Vriendelike groete', tag: 'slot' }]}
          aria="Two parts of a formal email: the greeting Geagte Mnr. Jacobs (aanhef) and the closing Vriendelike groete (slot)."
        />
        <Worked
          title="Choose the formal words"
          steps={[
            <>Greeting: <Af>Geagte Mnr. Jacobs</Af>, not <Af>Haai oom</Af>. <SpeakButton text="Geagte Mnr. Jacobs" /></>,
            <>Closing in a formal email: <Af>Vriendelike groete</Af>.</>,
          ]}
        />
        <Mistake>Greeting a principal like a friend. Use the title and surname: <Af>Mnr.</Af> <En>Mr</En> or <Af>Mev.</Af> <En>Mrs</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Register: fit language to purpose and reader',
    content: slide(
      <>
        <Rule>Register matters because <Af>Dit pas taal by doel en gehoor</Af> <En>it fits language to purpose and audience</En>. To a friend the register is <Af>Informeel maar duidelik</Af> <En>informal but clear</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['skoolhoof', 'formeel'], ['vriend', 'informeel']]}
          aria="Two readers and the register to use: a skoolhoof (school principal) needs formeel (formal) language, a vriend (friend) allows informeel (informal) language."
        />
        <Worked
          title="Match the reader"
          steps={[
            <>To the principal: <Af>Ek wil graag vra of ek...</Af> <En>I would like to ask whether I...</En></>,
            <>To a friend: <Af>Hallo, kom jy Saterdag?</Af> <En>Hello, are you coming on Saturday?</En> Relaxed, but still clear.</>,
          ]}
        />
        <Mistake>Using the same language for everyone. Slang suits a friend, not a principal; and even to a friend the message must stay clear.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a book review',
    content: slide(
      <>
        <Rule>A review starts with your opinion. After your opinion comes <Af>Bewyse of redes uit die teks</Af> <En>evidence or reasons from the text</En>. Then you close with a recommendation.</Rule>
        <OrderTiles
          tiles={['Mening', 'Bewyse', 'Slot']}
          aria="Three parts of a review in order: Mening (opinion), Bewyse (evidence), Slot (closing)."
        />
        <Worked
          title="Opinion plus reason"
          steps={[
            <><Af>Hierdie roman is boeiend omdat die konflik realisties is.</Af> <En>This novel is gripping because the conflict is realistic.</En> <SpeakButton text="Hierdie roman is boeiend omdat die konflik realisties is." /></>,
            <>The opinion is <Af>boeiend</Af>; the reason follows after <Af>omdat</Af>.</>,
          ]}
        />
        <Mistake>Giving an opinion with no evidence, or opening with a fact about the cover. Back up your opinion with a reason from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which part of an email explains the topic in one short phrase?</>} answer={<><Af>Onderwerplyn</Af>.</>} />
        <Check question={<>Choose the formal greeting for a principal.</>} answer={<><Af>Geagte Mnr. Jacobs</Af>.</>} />
        <Check question={<>Which closing suits a formal email?</>} answer={<><Af>Vriendelike groete</Af>.</>} />
        <Check question={<>What should follow your opinion in a review?</>} answer={<><Af>Bewyse of redes uit die teks</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n e-pos verduidelik die onderwerp in een kort frase?",
    options: ['Onderwerplyn', 'Handtekening', 'Slotparagraaf', 'Opskrifprent'],
    answer: 'Onderwerplyn',
    explanation: 'The subject line states what the email is about.',
  },
  {
    prompt: "Kies die mees gepaste formele groet vir 'n skoolhoof.",
    options: ['Geagte Mnr. Jacobs', 'Haai ou maat', 'Yo, wat gaan aan?', 'Hallo daar vriend'],
    answer: 'Geagte Mnr. Jacobs',
    explanation: 'Formal emails use respectful greetings.',
  },
  {
    prompt: "Wat moet ná jou mening in 'n resensie volg?",
    options: ['Bewyse of redes uit die teks', 'Nog drie vrae wat die leser kan beantwoord', 'Net emojis wat die gevoel wys', 'Geen verdere sin nie, want die mening is klaar'],
    answer: 'Bewyse of redes uit die teks',
    explanation: 'Evidence supports the review opinion.',
  },
  {
    prompt: "Watter slot pas die beste in 'n formele e-pos?",
    options: ['Vriendelike groete', 'Cheers!', 'Later!', 'Totsiens maat'],
    answer: 'Vriendelike groete',
    explanation: 'Formal closings should remain polite and neutral.',
  },
  {
    prompt: "Waarom is register belangrik in elektroniese kommunikasie?",
    options: ['Dit pas taal by doel en gehoor', 'Dit maak sinne langer', 'Dit verwyder leestekens', 'Dit verander die onderwerp'],
    answer: 'Dit pas taal by doel en gehoor',
    explanation: 'Register controls tone and appropriateness.',
  },
  {
    prompt: "Kies die beste openingsin vir 'n boekresensie.",
    options: ['Hierdie roman is boeiend omdat die konflik realisties is.', 'Ek het hierdie week sokker gespeel by die skool.', "Die boek het papierbladsye en 'n harde omslag.", 'Daar is baie letters in die titel van die boek.'],
    answer: 'Hierdie roman is boeiend omdat die konflik realisties is.',
    explanation: 'It gives opinion and reason clearly.',
  },
  {
    prompt: "Watter een is 'n transaksionele teks in term 2?",
    options: ['E-pos', 'Gedig', 'Toneelstuk', 'Plakkaat'],
    answer: 'E-pos',
    explanation: 'An email is a practical transactional format.',
  },
  {
    prompt: "As jy aan 'n vriend skryf, watter register is gewoonlik gepas?",
    options: ['Informeel maar duidelik', 'Uiters formeel met titels', 'Wiskundige notasie', 'Geen groet of slot'],
    answer: 'Informeel maar duidelik',
    explanation: 'Audience determines an appropriate level of formality.',
  },
];

export { bank };

const ElectronicCommunicationReviews = () => (
  <AfrikaansTopic
    title="Elektroniese Kommunikasie & Resensies"
    subtitle="Email format, tone control and review-writing essentials"
    learnSteps={learnSteps}
    task="gr8-electronic-communication-reviews-t2"
    bank={bank}
    speak="options"
  />
);

export default ElectronicCommunicationReviews;
