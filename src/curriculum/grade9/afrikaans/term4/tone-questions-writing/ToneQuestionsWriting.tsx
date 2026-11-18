import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { PoemBox } from '@/components/subjects/lesson/PoemBox';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Toon en boodskap",
    content: slide(
      <>
        <Rule>The <Af>toon</Af> <En>tone</En> is the speaker's attitude. The <Af>boodskap</Af> <En>message</En> is the main idea that the poet wants to share. Use exact words such as <Af>hoopvol</Af> <En>hopeful</En> or <Af>grappig</Af> <En>funny</En>, and prove them.</Rule>
        <PoemBox label={"Gedig G"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Hulle sê die dorp is dood,", "maar by my ouma ruik dit na brood.", "Die winkels is toe, die strate is stil,", "maar sy lag en sê: \"Kom in, as jy wil.\""]}>
          <p className="mt-2 text-xs italic text-slate-600">English: They say the town is dead, but at my gran's it smells of bread. The shops are closed, the streets are quiet, but she laughs and says: "Come in, if you like."</p>
        </PoemBox>
        <MeaningPairs kind="same" pairs={[["toon", "tone"], ["boodskap", "message"], ["hoopvol", "hopeful"]]} aria={"Afrikaans words with their English meaning: toon is tone, boodskap is message, hoopvol is hopeful."} />
        <Worked
          title={"Read Gedig G"}
          steps={[
            <><Af>Die toon is hoopvol.</Af> <En>The tone is hopeful.</En> <SpeakButton text="Die toon is hoopvol." /></>,
            <><Af>Sy lag en sê: Kom in.</Af> <En>She laughs and says: Come in.</En> <Af>Dit bewys dit.</Af> <En>That proves it.</En></>,
            <><Af>Die boodskap: warmte bly selfs as dinge dood lyk.</Af> <En>The message: warmth stays even when things look dead.</En></>,
          ]}
        />
        <Mistake>Stating a topic instead of a <Af>boodskap</Af>. A message is a full idea about the subject.</Mistake>
      </>,
    ),
  },
  {
    title: "Kontekstuele vrae en evaluering",
    content: slide(
      <>
        <Rule>A <Af>kontekstuele vraag</Af> <En>contextual question</En> may ask about the <Af>toon</Af>, a <Af>beeld</Af>, the word choice or whether something is effective (<Af>evalueer</Af> <En>evaluate</En>). Give a point, a quotation and an explanation.</Rule>
        <PoemBox label={"Gedig G"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Hulle sê die dorp is dood,", "maar by my ouma ruik dit na brood.", "Die winkels is toe, die strate is stil,", "maar sy lag en sê: \"Kom in, as jy wil.\""]}>
          <p className="mt-2 text-xs italic text-slate-600">English: They say the town is dead, but at my gran's it smells of bread. The shops are closed, the streets are quiet, but she laughs and says: "Come in, if you like."</p>
        </PoemBox>
        <OrderTiles tiles={["Punt", "Aanhaling", "Verduideliking"]} aria={"Three parts of an answer in order: Punt, Aanhaling, Verduideliking."} />
        <Worked
          title={"Model answers"}
          steps={[
            <><Af>Vraag: Wat is die toon? (2)</Af> <En>Question: What is the tone? (2)</En></>,
            <><Af>Antwoord: Hoopvol (1), want sy lag en sê: Kom in (1).</Af> <En>Answer: Hopeful (1), because she laughs and says: Come in (1).</En></>,
            <><Af>Evalueer: Is die woord dood effektief? Ja, dit wys die kontras met die warm brood.</Af> <En>Evaluate: Is the word dead effective? Yes, it shows the contrast with the warm bread.</En></>,
          ]}
        />
        <Mistake>Only retelling the poem. The question asks what the words do.</Mistake>
      </>,
    ),
  },
  {
    title: "Skryf jou eie gedig",
    content: slide(
      <>
        <Rule>For Grade 9 write three to six <Af>verse</Af> <En>stanzas</En>. <Af>Beplan</Af> <En>Plan</En>, <Af>skryf</Af> <En>write</En> and <Af>hersien</Af> <En>revise</En>. Choose one small subject, use <Af>beeld</Af> <En>image</En> and one figure of speech, and read your poem aloud.</Rule>
        <PoemBox label={"Gedig H"} provenance="Oorspronklike gedig, vir hierdie les geskryf (an original poem written for this lesson)" lines={["Die bus ruik na lemoene en nat jasse,", "die ruite is toe van mis.", "", "'n Kind teken 'n hart met sy vinger,", "en die dag word skielik anders.", "", "Ek klim af in die reën,", "maar die hart bly agter op die glas."]}>
          <p className="mt-2 text-xs italic text-slate-600">English: The bus smells of oranges and wet coats, the windows are covered with mist. A child draws a heart with a finger, and the day suddenly becomes different. I get off in the rain, but the heart stays behind on the glass.</p>
        </PoemBox>
        <OrderTiles tiles={["Beplan: een klein onderwerp", "Skryf: beelde en beeldspraak", "Hersien: lees hardop"]} aria={"Three steps in order: Beplan with one small subject, Skryf with images and figures of speech, Hersien by reading aloud."} />
        <Worked
          title={"Study Gedig H"}
          steps={[
            <><Af>Gedig H het drie verse.</Af> <En>Gedig H has three stanzas.</En></>,
            <><Af>Die onderwerp is een bus-rit.</Af> <En>The subject is one bus ride.</En></>,
            <><Af>'n Kind teken 'n hart.</Af> <En>A child draws a heart.</En> <Af>Dit is 'n klein, spesifieke beeld.</Af> <En>It is a small, specific image.</En></>,
          ]}
        />
        <Mistake>Writing about a big idea in general words. Begin with one real moment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>message</En>?</>} answer={<><Af>Boodskap</Af>.</>} />
        <Check question={<>Which word means <En>hopeful</En>?</>} answer={<><Af>Hoopvol</Af>.</>} />
        <Check question={<>Which word means <En>to revise</En>?</>} answer={<><Af>Hersien</Af>.</>} />
        <Check question={<>Which word means <En>to evaluate</En>?</>} answer={<><Af>Evalueer</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'message' van 'n gedig?",
    options: ["toon", "titel", "boodskap", "onderwerp"],
    answer: "boodskap",
    explanation: "'Boodskap' means 'message'.",
  },
  {
    prompt: "Watter woord beteken 'hopeful'?",
    options: ["hoopvol", "kwaad", "bitter", "opgewonde"],
    answer: "hoopvol",
    explanation: "'Hoopvol' means 'hopeful'.",
  },
  {
    prompt: "Watter woord beteken 'funny'?",
    options: ["hartseer", "kwaad", "bang", "grappig"],
    answer: "grappig",
    explanation: "'Grappig' means 'funny'.",
  },
  {
    prompt: "Watter toon het 'Ag nee, nog 'n toets!' met 'n sug?",
    options: ["Opgewonde", "Moedeloos", "Dankbaar", "Trots"],
    answer: "Moedeloos",
    explanation: "The sigh shows that the speaker feels discouraged.",
  },
  {
    prompt: "Wat is 'n boodskap van 'n gedig?",
    options: ["Die titel van die gedig", "Die aantal verse in die hele gedig", "Die hoofgedagte van die digter", "Die rymskema van die gedig"],
    answer: "Die hoofgedagte van die digter",
    explanation: "A message is the main idea.",
  },
  {
    prompt: "Watter antwoord op 'Wat is die toon?' is die beste?",
    options: ["Hoopvol: 'sy lag en sê: Kom in'", "Hoopvol: omdat ek van die gedig hou", "Hartseer: omdat die gedig lank is", "Grappig: omdat die titel kort is"],
    answer: "Hoopvol: 'sy lag en sê: Kom in'",
    explanation: "The best answer names the tone and quotes the proof.",
  },
  {
    prompt: "Wat moet jy doen by 'n evalueringsvraag?",
    options: ["Die hele gedig in jou eie woorde oorskryf", "Die woorde tel", "Die digter se naam gee", "Oordeel hoe effektief iets is"],
    answer: "Oordeel hoe effektief iets is",
    explanation: "An evaluation question asks for a judgement with a reason.",
  },
  {
    prompt: "Wat is verkeerd met 'n antwoord wat net die gedig oorvertel?",
    options: ["Dit het geen titel bo-aan die bladsy nie", "Dit verduidelik nie die woorde nie", "Dit is te kort vir twee punte", "Dit is 'n aanhaling uit die gedig self"],
    answer: "Dit verduidelik nie die woorde nie",
    explanation: "The answer must explain the effect of the words.",
  },
  {
    prompt: "Hoeveel verse mag 'n eie gedig in graad 9 hê?",
    options: ["1 vers", "10 verse", "3 tot 6 verse", "100 verse in een week"],
    answer: "3 tot 6 verse",
    explanation: "CAPS gives three to six stanzas for Grade 9.",
  },
  {
    prompt: "Watter titel pas by 'n gedig oor 'n bus in die reën?",
    options: ["Mis op die ruite", "Die gedig oor 'n bus", "Oor die lewe en die dood", "Die titel van my gedig"],
    answer: "Mis op die ruite",
    explanation: "A good title is specific and adds meaning.",
  },
  {
    prompt: "Watter reël is spesifiek?",
    options: ["Die kombuis is 'n lekker plek om te wees", "Daar was 'n dag vol dinge", "Dit was 'n gewone dag", "Die kombuis ruik na kaneel en rook"],
    answer: "Die kombuis ruik na kaneel en rook",
    explanation: "Specific details show what the speaker sees and smells.",
  },
  {
    prompt: "Wat doen jy as jy jou gedig hersien?",
    options: ["Maak dit langer met baie rym", "Sny swak woorde uit", "Verander die onderwerp", "Skryf die titel oor"],
    answer: "Sny swak woorde uit",
    explanation: "Revising improves the words and the sound.",
  },
];

const ToneQuestionsWriting = () => (
  <AfrikaansTopic
    title={"Toon, boodskap, vrae en skryf"}
    subtitle={"Toon, boodskap, kontekstuele vrae en jou eie gedig van drie tot ses verse"}
    learnSteps={learnSteps}
    task={"gr9-afr-tone-questions-writing-t4"}
    bank={bank}
    speak="options"
  />
);

export default ToneQuestionsWriting;
