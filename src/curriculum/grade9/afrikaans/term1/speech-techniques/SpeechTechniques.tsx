import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 9 Afrikaans FAL oral skills: prepared speech and presentation (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Planning a persuasive speech",
    content: slide(
      <>
        <Rule>A speech can try to <Af>oortuig</Af> <En>persuade</En>. Know your <Af>gehoor</Af> <En>audience</En>. Start with a strong opening, give points with proof and end with an <Af>oproep tot aksie</Af> <En>call to action</En>.</Rule>
        <OrderTiles tiles={["Sterk inleiding", "Punte met bewyse", "Oproep tot aksie"]} aria={"The plan of a persuasive speech in order: Sterk inleiding, Punte met bewyse, Oproep tot aksie."} />
        <Worked
          title="Plan the words"
          steps={[
            <><Af>Begin met &apos;n sterk inleiding.</Af> <En>Start with a strong opening.</En> <SpeakButton text="Begin met 'n sterk inleiding." /></>,
            <><Af>Gee bewyse vir elke punt.</Af> <En>Give proof for every point.</En> <SpeakButton text="Gee bewyse vir elke punt." /></>,
            <><Af>4 minute teen 130 woorde per minuut is 520 woorde.</Af> <En>4 minutes at 130 words a minute is 520 words.</En> <SpeakButton text="4 minute teen 130 woorde per minuut is 520 woorde." /></>,
          ]}
        />
        <Mistake>Many weak points. A few strong points with proof persuade better.</Mistake>
      </>,
    ),
  },
  {
    title: "Three appeals",
    content: slide(
      <>
        <Rule>Persuade with <Af>feite</Af> <En>facts</En> (reason), with <Af>emosie</Af> <En>emotion</En> and with <Af>geloofwaardigheid</Af> <En>credibility</En>. Use them fairly and never lie.</Rule>
        <TaggedBoxes items={[{"word": "feite", "tag": "facts"}, {"word": "emosie", "tag": "emotion"}, {"word": "geloofwaardigheid", "tag": "credibility"}]} aria={"Three appeals: feite means facts, emosie means emotion, geloofwaardigheid means credibility."} />
        <Worked
          title="One topic, three appeals"
          steps={[
            <><Af>Een blikkie herwin spaar energie.</Af> <En>Recycling one tin saves energy.</En> <SpeakButton text="Een blikkie herwin spaar energie." /></>,
            <><Af>Stel jou &apos;n skoon rivier voor.</Af> <En>Imagine a clean river.</En> <SpeakButton text="Stel jou 'n skoon rivier voor." /></>,
            <><Af>Ek het twee jaar lank ons herwinningspan gelei.</Af> <En>I led our recycling team for two years.</En> <SpeakButton text="Ek het twee jaar lank ons herwinningspan gelei." /></>,
          ]}
        />
        <Mistake>Using only emotion. Add facts and show that you can be trusted.</Mistake>
      </>,
    ),
  },
  {
    title: "Delivery and time",
    content: slide(
      <>
        <Rule>Make a <Af>pouse</Af> <En>pause</En> before an important point. Use <Af>kaartjies</Af> <En>cue cards</En> with key words. A 520-word speech needs about 104 words from each of 5 cue cards.</Rule>
        <OrderTiles tiles={["520 woorde", "5 kaartjies", "104 woorde elk"]} aria={"A cue card sum in order: 520 woorde, 5 kaartjies, so 104 woorde elk."} />
        <Worked
          title="Deliver the speech"
          steps={[
            <><Af>Maak &apos;n pouse voor &apos;n belangrike punt.</Af> <En>Pause before an important point.</En> <SpeakButton text="Maak 'n pouse voor 'n belangrike punt." /></>,
            <><Af>Praat met die hele gehoor.</Af> <En>Speak to the whole audience.</En> <SpeakButton text="Praat met die hele gehoor." /></>,
            <><Af>520 woorde en 5 kaartjies is 104 woorde elk.</Af> <En>520 words and 5 cue cards is 104 words each.</En> <SpeakButton text="520 woorde en 5 kaartjies is 104 woorde elk." /></>,
          ]}
        />
        <Mistake>Reading from the cards. They only remind you of your points.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>persuade</em>?</>} answer={<><Af>oortuig</Af> <En>persuade</En>.</>} />
        <Check question={<>Which word means <em>credibility</em>?</>} answer={<><Af>geloofwaardigheid</Af> <En>credibility</En>.</>} />
        <Check question={<>What do you do before an important point?</>} answer={<><Af>pouse</Af> <En>pause</En>.</>} />
        <Check question={<>How many words is 4 minutes at 130 words a minute?</>} answer={<><Af>520 woorde</Af> <En>520 words</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'persuade'?",
    options: ["vertel", "oortuig", "verduidelik", "vergeet"],
    answer: "oortuig",
    explanation: "'Oortuig' means to persuade.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'audience'?",
    options: ["bewys", "slot", "kaartjie", "gehoor"],
    answer: "gehoor",
    explanation: "The 'gehoor' are the people who listen.",
  },
  {
    prompt: "Watter sin beteken 'Start with a strong opening.'?",
    options: ["Begin met 'n sterk inleiding.", "Gee bewyse vir elke punt.", "Maak 'n pouse voor 'n belangrike punt.", "Praat met die hele gehoor."],
    answer: "Begin met 'n sterk inleiding.",
    explanation: "'Sterk inleiding' means a strong opening.",
  },
  {
    prompt: "Watter sin beteken 'Give proof for every point.'?",
    options: ["Begin met 'n sterk inleiding.", "Praat met die hele gehoor.", "Gee bewyse vir elke punt.", "Maak 'n pouse voor 'n belangrike punt."],
    answer: "Gee bewyse vir elke punt.",
    explanation: "'Bewyse' means proof.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'facts'?",
    options: ["emosie", "feite", "bewyse", "kaartjies"],
    answer: "feite",
    explanation: "'Feite' are things that can be checked.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'emotion'?",
    options: ["feite", "bewyse", "gehoor", "emosie"],
    answer: "emosie",
    explanation: "'Emosie' means feeling.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'credibility'?",
    options: ["geloofwaardigheid", "geskiedenis", "gedagte", "gehoorsaamheid"],
    answer: "geloofwaardigheid",
    explanation: "'Geloofwaardigheid' shows that you can be trusted.",
  },
  {
    prompt: "Watter sin gebruik feite?",
    options: ["Stel jou 'n skoon rivier voor.", "Praat met die hele gehoor.", "Een blikkie herwin spaar energie.", "Begin met 'n sterk inleiding."],
    answer: "Een blikkie herwin spaar energie.",
    explanation: "A fact can be checked.",
  },
  {
    prompt: "Watter sin gebruik emosie?",
    options: ["Een blikkie herwin spaar energie.", "Stel jou 'n skoon rivier voor.", "Gee bewyse vir elke punt.", "Maak 'n pouse voor 'n belangrike punt."],
    answer: "Stel jou 'n skoon rivier voor.",
    explanation: "It paints a picture and works on feeling.",
  },
  {
    prompt: "Watter sin wys geloofwaardigheid?",
    options: ["Een blikkie herwin spaar baie energie.", "Stel jou 'n skoon rivier vir ons voor.", "Praat met die hele gehoor in die saal.", "Ek het twee jaar lank ons herwinningspan gelei."],
    answer: "Ek het twee jaar lank ons herwinningspan gelei.",
    explanation: "It shows the speaker's experience.",
  },
  {
    prompt: "Hoeveel woorde is 4 minute teen 130 woorde per minuut?",
    options: ["520 woorde", "134 woorde", "260 woorde", "780 woorde"],
    answer: "520 woorde",
    explanation: "4 × 130 = 520 words.",
  },
  {
    prompt: "Hoeveel woorde kom van elk van 5 kaartjies in 'n toespraak van 520 woorde?",
    options: ["26 woorde", "52 woorde", "104 woorde", "520 woorde"],
    answer: "104 woorde",
    explanation: "520 ÷ 5 = 104 words.",
  },
  {
    prompt: "Watter sin beteken 'Pause before an important point.'?",
    options: ["Praat met die hele gehoor.", "Maak 'n pouse voor 'n belangrike punt.", "Gee bewyse vir elke punt.", "Begin met 'n sterk inleiding."],
    answer: "Maak 'n pouse voor 'n belangrike punt.",
    explanation: "A pause makes the point stand out.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'call to action'?",
    options: ["inleiding", "opsomming", "gehoor", "oproep tot aksie"],
    answer: "oproep tot aksie",
    explanation: "An 'oproep tot aksie' tells the audience what to do.",
  },
];

const SpeechTechniques = () => (
  <AfrikaansTopic
    title="Toesprake: tegnieke en aanbieding"
    subtitle="Planning a persuasive speech, the three appeals, delivery and time"
    learnSteps={learnSteps}
    task="gr9-afr-speech-techniques-t1"
    bank={bank}
    speak="options"
  />
);

export default SpeechTechniques;
