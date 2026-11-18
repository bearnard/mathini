import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 8 Afrikaans FAL oral skills: prepared speech (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a speech",
    content: slide(
      <>
        <Rule>A <Af>toespraak</Af> <En>speech</En> has an <Af>inleiding</Af> <En>introduction</En>, a <Af>middel</Af> <En>body</En> and a <Af>slot</Af> <En>closing</En>. Greet the <Af>gehoor</Af> <En>audience</En> first.</Rule>
        <OrderTiles tiles={["Inleiding", "Middel", "Slot"]} aria={"The parts of a speech in order: Inleiding, Middel, Slot."} />
        <Worked
          title="A speech in three parts"
          steps={[
            <><Af>Goeie môre, dames en here.</Af> <En>Good morning, ladies and gentlemen.</En> <SpeakButton text="Goeie môre, dames en here." /></>,
            <><Af>Vandag praat ek oor skoon water.</Af> <En>Today I speak about clean water.</En> <SpeakButton text="Vandag praat ek oor skoon water." /></>,
            <><Af>Dankie dat julle geluister het.</Af> <En>Thank you for listening.</En> <SpeakButton text="Dankie dat julle geluister het." /></>,
          ]}
        />
        <Mistake>Reading the whole speech word for word. Look at the audience.</Mistake>
      </>,
    ),
  },
  {
    title: "Speech techniques",
    content: slide(
      <>
        <Rule>A <Af>retoriese vraag</Af> <En>rhetorical question</En> needs no answer. <Af>Herhaling</Af> <En>repetition</En> stresses an idea. An <Af>oproep tot aksie</Af> <En>call to action</En> tells the audience what to do.</Rule>
        <TaggedBoxes items={[{"word": "retoriese vraag", "tag": "rhetorical question"}, {"word": "herhaling", "tag": "repetition"}, {"word": "oproep tot aksie", "tag": "call to action"}]} aria={"Three techniques: retoriese vraag is a rhetorical question, herhaling is repetition, oproep tot aksie is a call to action."} />
        <Worked
          title="Use the techniques"
          steps={[
            <><Af>Wie wil nie skoon water hê nie?</Af> <En>Who does not want clean water?</En> <SpeakButton text="Wie wil nie skoon water hê nie?" /></>,
            <><Af>Ons kan. Ons moet. Ons sal.</Af> <En>We can. We must. We will.</En> <SpeakButton text="Ons kan. Ons moet. Ons sal." /></>,
            <><Af>Begin vandag: draai die kraan toe.</Af> <En>Start today: turn the tap off.</En> <SpeakButton text="Begin vandag: draai die kraan toe." /></>,
          ]}
        />
        <Mistake>Using every technique at once. Choose a few that suit your message.</Mistake>
      </>,
    ),
  },
  {
    title: "Cue cards, eye contact and time",
    content: slide(
      <>
        <Rule>Write <Af>kernwoorde</Af> <En>key words</En> on <Af>kaartjies</Af> <En>cue cards</En>. Make <Af>oogkontak</Af> <En>eye contact</En>. Count the words: 3 minutes at 120 words a minute is 360 words.</Rule>
        <OrderTiles tiles={["3 minute", "120 woorde per minuut", "360 woorde"]} aria={"A speech sum in order: 3 minute, 120 woorde per minuut, so 360 woorde."} />
        <Worked
          title="Prepare and time"
          steps={[
            <><Af>Skryf kernwoorde op kaartjies.</Af> <En>Write key words on cue cards.</En> <SpeakButton text="Skryf kernwoorde op kaartjies." /></>,
            <><Af>Kyk na die gehoor.</Af> <En>Look at the audience.</En> <SpeakButton text="Kyk na die gehoor." /></>,
            <><Af>3 minute teen 120 woorde per minuut is 360 woorde.</Af> <En>3 minutes at 120 words a minute is 360 words.</En> <SpeakButton text="3 minute teen 120 woorde per minuut is 360 woorde." /> <Af>4 minute is 480 woorde.</Af> <En>4 minutes is 480 words.</En> <SpeakButton text="4 minute is 480 woorde." /></>,
          ]}
        />
        <Mistake>A speech that is too long. Work out the words for the time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>speech</em>?</>} answer={<><Af>toespraak</Af> <En>speech</En>.</>} />
        <Check question={<>Which part ends the speech?</>} answer={<><Af>slot</Af> <En>closing</En>.</>} />
        <Check question={<>What do you write on cue cards?</>} answer={<><Af>kernwoorde</Af> <En>key words</En>.</>} />
        <Check question={<>How many words is 3 minutes at 120 words a minute?</>} answer={<><Af>360 woorde</Af> <En>360 words</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'speech'?",
    options: ["gesprek", "toespraak", "vraag", "opstel"],
    answer: "toespraak",
    explanation: "'Toespraak' means a speech.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'introduction'?",
    options: ["middel", "slot", "gehoor", "inleiding"],
    answer: "inleiding",
    explanation: "The 'inleiding' opens the speech.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'closing'?",
    options: ["slot", "inleiding", "middel", "gehoor"],
    answer: "slot",
    explanation: "The 'slot' ends the speech.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'audience'?",
    options: ["slot", "vraag", "gehoor", "kaartjie"],
    answer: "gehoor",
    explanation: "The 'gehoor' are the people who listen.",
  },
  {
    prompt: "Watter sin begroet die gehoor?",
    options: ["Dankie dat julle geluister het.", "Goeie môre, dames en here.", "Begin vandag: draai die kraan toe.", "Ons kan. Ons moet. Ons sal."],
    answer: "Goeie môre, dames en here.",
    explanation: "A speech begins with a greeting.",
  },
  {
    prompt: "Watter sin sluit 'n toespraak mooi af?",
    options: ["Goeie môre, dames en here.", "Vandag praat ek oor skoon water.", "Wie wil nie skoon water hê nie?", "Dankie dat julle geluister het."],
    answer: "Dankie dat julle geluister het.",
    explanation: "A closing thanks the audience.",
  },
  {
    prompt: "Watter sin is 'n retoriese vraag?",
    options: ["Wie wil nie skoon water hê nie?", "Vandag praat ek oor skoon water.", "Ons kan. Ons moet. Ons sal.", "Dankie dat julle geluister het."],
    answer: "Wie wil nie skoon water hê nie?",
    explanation: "A rhetorical question needs no answer.",
  },
  {
    prompt: "Watter sin gebruik herhaling?",
    options: ["Vandag praat ek oor skoon water.", "Goeie môre, dames en here.", "Ons kan. Ons moet. Ons sal.", "Kyk na die gehoor."],
    answer: "Ons kan. Ons moet. Ons sal.",
    explanation: "The same pattern is repeated for effect.",
  },
  {
    prompt: "Watter sin is 'n oproep tot aksie?",
    options: ["Vandag praat ek oor skoon water.", "Begin vandag: draai die kraan toe.", "Wie wil nie skoon water hê nie?", "Goeie môre, dames en here."],
    answer: "Begin vandag: draai die kraan toe.",
    explanation: "A call to action tells people what to do.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'key words'?",
    options: ["kaartjies", "voorbeelde", "woordeboeke", "kernwoorde"],
    answer: "kernwoorde",
    explanation: "'Kernwoorde' are the main words of a point.",
  },
  {
    prompt: "Wat skryf jy op kaartjies?",
    options: ["Skryf kernwoorde op kaartjies.", "Skryf die hele toespraak oor.", "Skryf net jou naam.", "Skryf niks nie."],
    answer: "Skryf kernwoorde op kaartjies.",
    explanation: "Cue cards hold key words only.",
  },
  {
    prompt: "Watter sin beteken 'Look at the audience.'?",
    options: ["Skryf kernwoorde op kaartjies.", "Goeie môre, dames en here.", "Kyk na die gehoor.", "Dankie dat julle geluister het."],
    answer: "Kyk na die gehoor.",
    explanation: "Eye contact keeps the audience interested.",
  },
  {
    prompt: "Hoeveel woorde is 3 minute teen 120 woorde per minuut?",
    options: ["123 woorde", "360 woorde", "240 woorde", "480 woorde"],
    answer: "360 woorde",
    explanation: "3 × 120 = 360 words.",
  },
  {
    prompt: "Hoeveel woorde is 4 minute teen 120 woorde per minuut?",
    options: ["124 woorde", "360 woorde", "600 woorde", "480 woorde"],
    answer: "480 woorde",
    explanation: "4 × 120 = 480 words.",
  },
];

const PreparedSpeech = () => (
  <AfrikaansTopic
    title="Voorbereide toespraak"
    subtitle="The parts of a speech, speech techniques, cue cards, eye contact and time"
    learnSteps={learnSteps}
    task="gr8-afr-prepared-speech-t1"
    bank={bank}
    speak="options"
  />
);

export default PreparedSpeech;
