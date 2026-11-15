import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Defining tema, konflik, karakter',
    content: slide(
      <>
        <Rule>In literature questions the words are explained in Afrikaans. The <Af>tema</Af> is <Af>die hoofboodskap van 'n teks</Af>. The <Af>konflik</Af> is <Af>die probleem of stryd in 'n storie</Af>. A <Af>karakter</Af> is <Af>iemand in 'n storie</Af>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['tema', 'hoofboodskap'], ['konflik', 'probleem'], ['karakter', 'iemand']]}
          aria="Three literary words and a key word from their Afrikaans definition: tema is the hoofboodskap (main message), konflik is the probleem (problem), karakter is iemand (someone) in a story."
        />
        <Worked
          title="Match the definition"
          steps={[
            <><Af>die hoofboodskap van 'n teks</Af> <En>the main message of a text</En> is the <Af>tema</Af>.</>,
            <><Af>die probleem of stryd in 'n storie</Af> <En>the problem or struggle in a story</En> is the <Af>konflik</Af>. <SpeakButton text="tema, konflik, karakter" /></>,
          ]}
        />
        <Mistake>Giving a character&apos;s name as the theme. The theme is the message of the whole text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Defining resensie, toneel, storie',
    content: slide(
      <>
        <Rule>A <Af>resensie</Af> is <Af>jou mening met redes oor 'n boek of fliek</Af>. A <Af>toneel</Af> is <Af>een deel van 'n drama op die verhoog</Af>. A <Af>storie</Af> is <Af>'n vertelling oor karakters en gebeure</Af>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['resensie', 'mening'], ['toneel', 'verhoog'], ['storie', 'vertelling']]}
          aria="Three literary words and a key word from their Afrikaans definition: resensie is a mening (opinion) with reasons, toneel is a part on the verhoog (stage), storie is a vertelling (telling) about characters."
        />
        <Worked
          title="Match the definition"
          steps={[
            <><Af>jou mening met redes oor 'n boek of fliek</Af> <En>your opinion with reasons about a book or film</En>: a <Af>resensie</Af>.</>,
            <><Af>een deel van 'n drama op die verhoog</Af> <En>one part of a drama on the stage</En>: a <Af>toneel</Af>.</>,
          ]}
        />
        <Mistake>Calling a review a retelling. A <Af>resensie</Af> is an opinion with reasons, not the whole story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Literary features: setting, imagery, tone',
    content: slide(
      <>
        <Rule>Look for the <Af>ruimte</Af> <En>setting</En>, <Af>beeldspraak</Af> <En>imagery</En> and <Af>toon</Af> <En>tone</En> in a text. Each one adds to the message.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['ruimte', 'waar'], ['beeldspraak', 'prentjie'], ['toon', 'gevoel']]}
          aria="Three literary features and what they show: ruimte (setting) shows where, beeldspraak (imagery) makes a prentjie (picture), toon (tone) shows the gevoel (feeling)."
        />
        <Worked
          title="Find the features"
          steps={[
            <><Af>Die aand kom sag en koud.</Af> <En>The evening comes softly and cold.</En> The words make a picture and set a calm tone.</>,
            <>Ask: where is it, what picture is made, and what is the feeling?</>,
          ]}
        />
        <Mistake>Naming a feature without saying what it does. Always add the effect: what the picture or feeling adds to the message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Textual evidence',
    content: slide(
      <>
        <Rule>A strong answer proves its claim with <Af>teksbewys</Af> <En>textual evidence</En>: a word, a line or an action from the text.</Rule>
        <OrderTiles
          tiles={['Bewering', 'Bewys', 'Verklaar']}
          aria="Three parts of a strong answer: Bewering (claim), Bewys (evidence), Verklaar (explain)."
        />
        <Worked
          title="Claim, proof, explanation"
          steps={[
            <>Claim: <Af>Hy is dapper.</Af> <En>He is brave.</En></>,
            <>Proof: <Af>Hy help sy broer al is hy bang.</Af> Explanation: he acts even though he is afraid.</>,
          ]}
        />
        <Mistake>Giving only a claim, such as <Af>Hy is dapper</Af>, with no proof from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Respond and present',
    content: slide(
      <>
        <Rule>Prescribed texts are discussed in writing and orally. Prepare your points, speak clearly and keep eye contact.</Rule>
        <Worked
          title="A short oral response"
          steps={[
            <>Say the theme first: <Af>Die tema is vriendskap.</Af> <SpeakButton text="Die tema is vriendskap." /></>,
            <>Give one proof from the text and explain it in your own words.</>,
          ]}
        />
        <Mistake>Reading every word from your notes. Look at your listeners, and use your notes only as a guide.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <Af>die hoofboodskap van 'n teks</Af>?</>} answer={<><Af>tema</Af>.</>} />
        <Check question={<>Which word means <Af>die probleem of stryd in 'n storie</Af>?</>} answer={<><Af>konflik</Af>.</>} />
        <Check question={<>Which word means <Af>jou mening met redes oor 'n boek of fliek</Af>?</>} answer={<><Af>resensie</Af>.</>} />
        <Check question={<>Which word means <Af>een deel van 'n drama op die verhoog</Af>?</>} answer={<><Af>toneel</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter woord beteken 'die hoofboodskap van 'n teks'?",
    options: ["tema", "toneel", "karakter", "konflik"],
    answer: "tema",
    explanation: "'Tema' (theme) is the main message or big idea of a text.",
  },
  {
    prompt: "Watter woord beteken 'die probleem of stryd in 'n storie'?",
    options: ["konflik", "tema", "resensie", "storie"],
    answer: "konflik",
    explanation: "'Konflik' (conflict) is the problem or struggle that drives a story.",
  },
  {
    prompt: "Watter woord beteken 'iemand in 'n storie'?",
    options: ["karakter", "resensie", "toneel", "tema"],
    answer: "karakter",
    explanation: "'Karakter' (character) is a person in a story.",
  },
  {
    prompt: "Watter woord beteken 'jou mening met redes oor 'n boek of fliek'?",
    options: ["resensie", "storie", "konflik", "toneel"],
    answer: "resensie",
    explanation: "'Resensie' (review) gives an opinion with reasons about a book or film.",
  },
  {
    prompt: "Watter woord beteken 'een deel van 'n drama op die verhoog'?",
    options: ["toneel", "karakter", "tema", "resensie"],
    answer: "toneel",
    explanation: "'Toneel' (scene / stage) is a part of a play on the stage.",
  },
  {
    prompt: "Watter woord beteken 'n vertelling oor karakters en gebeure'?",
    options: ["storie", "konflik", "tema", "resensie"],
    answer: "storie",
    explanation: "'Storie' (story) tells about characters and events.",
  },
];

export { bank };

const LiteratureStudy = () => (
  <AfrikaansTopic
    title="Literatuurstudie & Respons"
    subtitle="Themes, characters, literary features, and textual evidence"
    learnSteps={learnSteps}
    task="gr9-literature-study-t3"
    bank={bank}
    speak="options"
  />
);

export default LiteratureStudy;
