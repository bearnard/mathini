import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A form",
    content: slide(
      <>
        <Rule>A <Af>vorm</Af> <En>form</En> asks for information. Read it first. Then write your <Af>naam</Af> <En>first name</En>, your <Af>van</Af> <En>surname</En>, your <Af>geboortedatum</Af> <En>date of birth</En> and your contact details. At the end, add your <Af>handtekening</Af> <En>signature</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["naam", "first name"], ["van", "surname"], ["geboortedatum", "date of birth"]]} aria={"Afrikaans words with their English meaning: naam is first name, van is surname, geboortedatum is date of birth."} />
        <Worked
          title={"Fill in a line"}
          steps={[
            <><Af>Naam: Thandi</Af> <En>Name: Thandi</En> <SpeakButton text="Naam: Thandi" /></>,
            <><Af>Van: Mokoena</Af> <En>Surname: Mokoena</En></>,
          ]}
        />
        <Mistake>Writing before you read the form. Read it first so that you know what to write.</Mistake>
      </>,
    ),
  },
  {
    title: "Instructions on a form",
    content: slide(
      <>
        <Rule>Forms use short commands. <Af>Vul die vorm in.</Af> <En>Fill in the form.</En> <Af>Skryf in blokletters.</Af> <En>Write in block letters.</En> <Af>Merk een blokkie.</Af> <En>Tick one box.</En> <Af>Onderteken die vorm.</Af> <En>Sign the form.</En> Follow each command.</Rule>
        <OrderTiles tiles={["Vul die vorm in.", "Skryf in blokletters.", "Merk een blokkie.", "Onderteken die vorm."]} aria={"Four commands on a form: Vul die vorm in., Skryf in blokletters., Merk een blokkie., Onderteken die vorm."} />
        <Worked
          title={"Follow the commands"}
          steps={[
            <><Af>Skryf in blokletters.</Af> <En>Write in block letters.</En> <SpeakButton text="Skryf in blokletters." /> <Af>MOKOENA</Af></>,
            <><Af>Merk een blokkie.</Af> <En>Tick one box.</En></>,
          ]}
        />
        <Mistake>Ticking two boxes when the form says one. Follow the command.</Mistake>
      </>,
    ),
  },
  {
    title: "A questionnaire",
    content: slide(
      <>
        <Rule>A <Af>vraelys</Af> <En>questionnaire</En> asks people questions. Many questions have the answers <Af>ja</Af> <En>yes</En> or <Af>nee</Af> <En>no</En>. Read each question and tick one box.</Rule>
        <TaggedBoxes items={[{"word": "vraelys", "tag": "questionnaire"}, {"word": "ja", "tag": "yes"}, {"word": "nee", "tag": "no"}]} aria={"Afrikaans words: vraelys means questionnaire, ja means yes, nee means no."} />
        <Worked
          title={"Answer a question"}
          steps={[
            <><Af>Loop jy skool toe?</Af> <En>Do you walk to school?</En> <SpeakButton text="Loop jy skool toe?" /></>,
            <><Af>Ja</Af> <En>Yes</En> <Af>/</Af> <Af>Nee</Af> <En>No</En></>,
          ]}
        />
        <Mistake>Skipping a question. Answer every question that the form asks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>form</En>?</>} answer={<><Af>Vorm</Af>.</>} />
        <Check question={<>Which word means <En>surname</En>?</>} answer={<><Af>Van</Af>.</>} />
        <Check question={<>Which sentence means <En>Sign the form</En>?</>} answer={<><Af>Onderteken die vorm.</Af></>} />
        <Check question={<>Which word means <En>yes</En>?</>} answer={<><Af>Ja</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'form'?",
    options: ["vraelys", "brief", "vorm", "gedig"],
    answer: "vorm",
    explanation: "'Vorm' means 'form'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'questionnaire'?",
    options: ["vraelys", "vorm", "handtekening", "van"],
    answer: "vraelys",
    explanation: "'Vraelys' means 'questionnaire'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'surname'?",
    options: ["naam", "adres", "datum", "van"],
    answer: "van",
    explanation: "'Van' means 'surname'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'signature'?",
    options: ["geboortedatum", "handtekening", "blokletters", "vraelys"],
    answer: "handtekening",
    explanation: "'Handtekening' means 'signature'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'date of birth'?",
    options: ["handtekening", "blokletters", "geboortedatum", "geboortesertifikaat"],
    answer: "geboortedatum",
    explanation: "'Geboortedatum' means 'date of birth'.",
  },
  {
    prompt: "Wat beteken 'Vul die vorm in'?",
    options: ["Fill in the form.", "Sign the form.", "Tick one box.", "Write in block letters."],
    answer: "Fill in the form.",
    explanation: "'Vul in' means 'fill in'.",
  },
  {
    prompt: "Wat beteken 'Skryf in blokletters'?",
    options: ["Fill in the form.", "Tick one box.", "Write your name in small letters.", "Write in block letters."],
    answer: "Write in block letters.",
    explanation: "'Blokletters' are block letters.",
  },
  {
    prompt: "Watter sin sê 'Tick one box'?",
    options: ["Onderteken die vorm.", "Merk een blokkie.", "Vul die vorm in.", "Skryf in blokletters."],
    answer: "Merk een blokkie.",
    explanation: "'Merk een blokkie' means 'Tick one box'.",
  },
  {
    prompt: "Watter sin sê 'Sign the form'?",
    options: ["Merk een blokkie.", "Vul die vorm in.", "Onderteken die vorm.", "Skryf in blokletters."],
    answer: "Onderteken die vorm.",
    explanation: "'Onderteken' means 'sign'.",
  },
  {
    prompt: "Wat beteken 'Loop jy skool toe?'",
    options: ["Do you walk to school?", "Do you sign the form?", "Do you tick one box?", "Do you write in block letters?"],
    answer: "Do you walk to school?",
    explanation: "'Loop jy skool toe?' means 'Do you walk to school?'.",
  },
  {
    prompt: "Watter woord beteken 'yes'?",
    options: ["nee", "van", "naam", "ja"],
    answer: "ja",
    explanation: "'Ja' means 'yes'.",
  },
  {
    prompt: "Watter woord beteken 'no'?",
    options: ["ja", "nee", "van", "naam"],
    answer: "nee",
    explanation: "'Nee' means 'no'.",
  },
];

const FormsQuestionnaire = () => (
  <AfrikaansTopic
    title={"Vorms en vraelyste"}
    subtitle={"Filling in a form, the commands on a form and answering a questionnaire"}
    learnSteps={learnSteps}
    task={"gr7-afr-forms-questionnaire-t3"}
    bank={bank}
    speak="options"
  />
);

export default FormsQuestionnaire;
