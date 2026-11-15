import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The formal letter',
    content: slide(
      <>
        <Rule>A formal letter has an address and date, a greeting such as <Af>Geagte Mevrou</Af> <En>Dear Madam</En>, the content, a closing and a signature. The closing paragraph must <Af>Om die versoek netjies af te sluit</Af> <En>close the request neatly</En>.</Rule>
        <LetterLayout
          parts={['adres, datum', 'Geagte Mevrou', 'inhoud', 'Die uwe', 'handtekening']}
          aria="A formal letter drawn as five strips from top to bottom: adres and datum, the greeting Geagte Mevrou, the inhoud (content, the biggest strip), the closing Die uwe, and the handtekening (signature)."
        />
        <Worked
          title="Greeting and closing"
          steps={[
            <>Greeting: <Af>Geagte Mevrou</Af>. <SpeakButton text="Geagte Mevrou" /></>,
            <>Closing: <Af>Die uwe</Af> <En>yours faithfully</En>, then your signature.</>,
          ]}
        />
        <Mistake>Closing with a casual line or no closing paragraph at all. The last paragraph thanks the reader and ends the request neatly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Linking words: want, daarom, dus',
    content: slide(
      <>
        <Rule><Af>want</Af> gives a reason. <Af>daarom</Af> and <Af>dus</Af> show a result. After <Af>daarom</Af> the verb comes before the subject.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['want', 'because'], ['daarom', 'therefore'], ['dus', 'so']]}
          aria="Three Afrikaans linking words with their English meaning: want is because, daarom is therefore, dus is so."
        />
        <Worked
          title="Choose the link"
          steps={[
            <><Af>Ek studeer hard, want ek wil slaag.</Af> <En>I study hard because I want to pass.</En></>,
            <><Af>Ons begin vroeg; daarom voltooi ons betyds.</Af> <En>We start early; therefore we finish on time.</En> <SpeakButton text="Ons begin vroeg; daarom voltooi ons betyds." /></>,
          ]}
        />
        <Mistake>Using <Af>maar</Af> or <Af>of</Af> for a reason or result, or writing <Af>daarom ons voltooi</Af>. Say <Af>daarom voltooi ons</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation: full stop and semicolon',
    content: slide(
      <>
        <Rule>A statement ends with a full stop. A semicolon joins two sentences that belong closely together, as before <Af>daarom</Af>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Dankie vir u hulp.', tag: 'punt' }, { word: 'Ons begin vroeg;', tag: 'kommapunt' }]}
          aria="Two sentences with their end marks: Dankie vir u hulp ends with a full stop (punt), Ons begin vroeg ends with a semicolon (kommapunt)."
        />
        <Worked
          title="Choose the mark"
          steps={[
            <><Af>Dankie vir u hulp.</Af> <En>Thank you for your help.</En> A statement, so a full stop.</>,
            <><Af>Ons begin vroeg; daarom voltooi ons betyds.</Af> Two linked sentences, so a semicolon.</>,
          ]}
        />
        <Mistake>Ending a thank-you line with a question mark or an exclamation mark. A polite statement in a formal letter ends with a full stop.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reported speech and precise words',
    content: slide(
      <>
        <Rule>In indirect speech use <Af>dat</Af> and change the pronoun. In editing, <Af>Vervang vae woorde met presiese taal</Af> <En>replace vague words with precise language</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['dinge', 'handboeke'], ['baie', 'vyf']]}
          aria="Two vague words and a precise replacement: dinge (things) becomes handboeke (textbooks), baie (many) becomes vyf (five)."
        />
        <Worked
          title="Report and refine"
          steps={[
            <><Af>Hy sê: 'Ek is laat.'</Af> becomes <Af>Hy sê dat hy laat is.</Af> <SpeakButton text="Hy sê dat hy laat is." /></>,
            <>Vague: <Af>Ek het dinge nodig.</Af> Precise: <Af>Ek het twee handboeke nodig.</Af> <En>I need two textbooks.</En></>,
          ]}
        />
        <Mistake>Keeping <Af>ek</Af> in the report: <Af>Hy sê dat ek laat is</Af> is wrong. Also avoid vague words like <Af>dinge</Af> in a formal request.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which greeting suits a formal letter to a woman?</>} answer={<><Af>Geagte Mevrou</Af>.</>} />
        <Check question={<>Choose the joiner: <Af>Ek studeer hard, ___ ek wil slaag.</Af></>} answer={<><Af>want</Af>.</>} />
        <Check question={<>Which closing suits a formal letter?</>} answer={<><Af>Die uwe</Af>.</>} />
        <Check question={<>Change to indirect speech: <Af>Hy sê: 'Ek is laat.'</Af></>} answer={<><Af>Hy sê dat hy laat is.</Af></>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter groet pas in 'n formele brief?",
    options: ['Geagte Mevrou', 'Hi daar', 'Hallo maat', 'Yo vriend'],
    answer: 'Geagte Mevrou',
    explanation: 'Formal letters start with respectful greetings.',
  },
  {
    prompt: "Kies die beste voegwoord: 'Ek studeer hard, ___ ek wil slaag.'",
    options: ['want', 'maar', 'of', 'alhoewel'],
    answer: 'want',
    explanation: "'Want' gives a reason.",
  },
  {
    prompt: "Watter leesteken voltooi: 'Dankie vir u hulp___'",
    options: ['.', '?', ':', ';'],
    answer: '.',
    explanation: 'A polite statement ends with a full stop.',
  },
  {
    prompt: "Kies die korrekte indirekte rede: Hy sê: 'Ek is laat.'",
    options: ['Hy sê dat hy laat is.', 'Hy sê dat ek laat is.', 'Hy sê hy is laat?', 'Hy sê: hy laat is.'],
    answer: 'Hy sê dat hy laat is.',
    explanation: 'Reported speech adjusts pronoun and structure.',
  },
  {
    prompt: "Wat is die hoofdoel van 'n formele brief se slotparagraaf?",
    options: ['Om die versoek netjies af te sluit', 'Om nuwe onverwante idees te begin', 'Om graptaal te gebruik', 'Om geen slot te hê nie'],
    answer: 'Om die versoek netjies af te sluit',
    explanation: 'The closing should be concise and purposeful.',
  },
  {
    prompt: "Kies die beste sin met samehang.",
    options: ['Ons begin vroeg; daarom voltooi ons betyds.', 'Ons begin vroeg daarom ons voltooi betyds daarom.', 'Begin vroeg voltooi betyds daarom ons.', 'Ons begin vroeg maar daarom en.'],
    answer: 'Ons begin vroeg; daarom voltooi ons betyds.',
    explanation: 'Logical linking shows clear cause and result.',
  },
  {
    prompt: "Watter opsie wys taalverfyning tydens redigering?",
    options: ['Vervang vae woorde met presiese taal', 'Laat alle foute soos dit is', 'Verwyder leestekens', 'Skryf alles in hoofletters'],
    answer: 'Vervang vae woorde met presiese taal',
    explanation: 'Refinement improves clarity and register.',
  },
  {
    prompt: "Kies die mees gepaste afsluiting vir 'n formele brief.",
    options: ['Die uwe', 'Groete maat', 'Cheers', 'Later'],
    answer: 'Die uwe',
    explanation: 'This closing is appropriate in formal correspondence.',
  },
];

export { bank };

const TransactionalWritingLanguageRefinement = () => (
  <AfrikaansTopic
    title="Transaksionele Skryfwerk & Taalverfyning"
    subtitle="Formal writing, conjunction choices and editing precision"
    learnSteps={learnSteps}
    task="gr8-transactional-writing-language-refinement-t3"
    bank={bank}
    speak="options"
  />
);

export default TransactionalWritingLanguageRefinement;
