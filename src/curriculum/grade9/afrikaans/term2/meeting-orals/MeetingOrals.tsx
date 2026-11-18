import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 9 Afrikaans FAL oral skills: meeting orals (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md). Written minutes are a separate lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Roles at a meeting",
    content: slide(
      <>
        <Rule>A meeting follows an <Af>agenda</Af> <En>agenda</En>. The <Af>voorsitter</Af> <En>chairperson</En> keeps order. The <Af>sekretaris</Af> <En>secretary</En> writes the <Af>notule</Af> <En>minutes</En>. A meeting of 6 items of 5 minutes takes 30 minutes.</Rule>
        <TaggedBoxes items={[{"word": "voorsitter", "tag": "chairperson"}, {"word": "sekretaris", "tag": "secretary"}, {"word": "notule", "tag": "minutes"}]} aria={"Three meeting words: voorsitter means chairperson, sekretaris means secretary, notule means minutes."} />
        <Worked
          title="Open the meeting"
          steps={[
            <><Af>Die vergadering is nou geopen.</Af> <En>The meeting is now open.</En> <SpeakButton text="Die vergadering is nou geopen." /></>,
            <><Af>Die sekretaris skryf die notule.</Af> <En>The secretary writes the minutes.</En> <SpeakButton text="Die sekretaris skryf die notule." /></>,
            <><Af>6 punte van 5 minute is 30 minute.</Af> <En>6 items of 5 minutes is 30 minutes.</En> <SpeakButton text="6 punte van 5 minute is 30 minute." /></>,
          ]}
        />
        <Mistake>No agenda. The agenda keeps the meeting in order.</Mistake>
      </>,
    ),
  },
  {
    title: "Proposals and votes",
    content: slide(
      <>
        <Rule>A <Af>voorstel</Af> <En>proposal</En> is a suggestion. Another member must <Af>ondersteun</Af> <En>second</En> it. Then the members <Af>stem</Af> <En>vote</En>. If more vote for than against, the proposal is <Af>aanvaar</Af> <En>accepted</En>.</Rule>
        <OrderTiles tiles={["Voorstel", "Ondersteun", "Stem", "Aanvaar"]} aria={"The steps in order: Voorstel, Ondersteun, Stem, Aanvaar."} />
        <Worked
          title="A vote"
          steps={[
            <><Af>Ek stel voor dat ons Saterdag skoonmaak.</Af> <En>I propose that we clean up on Saturday.</En> <SpeakButton text="Ek stel voor dat ons Saterdag skoonmaak." /></>,
            <><Af>12 stem vir, 7 teen en 3 weerhou.</Af> <En>12 vote for, 7 against and 3 abstain.</En> <SpeakButton text="12 stem vir, 7 teen en 3 weerhou." /></>,
            <><Af>19 het gestem en 22 was teenwoordig.</Af> <En>19 voted and 22 were present.</En> <SpeakButton text="19 het gestem en 22 was teenwoordig." /> <Af>Die voorstel is aanvaar.</Af> <En>The proposal is accepted.</En> <SpeakButton text="Die voorstel is aanvaar." /></>,
          ]}
        />
        <Mistake>Speaking without waiting. Speak through the chairperson.</Mistake>
      </>,
    ),
  },
  {
    title: "Formal language and minutes",
    content: slide(
      <>
        <Rule>Use polite language: <Af>Mevrou die Voorsitter</Af> <En>Madam Chair</En>. The minutes record the decisions in the past tense. A <Af>punt van orde</Af> <En>point of order</En> means that a rule is broken.</Rule>
        <OrderTiles tiles={["Datum", "Teenwoordig", "Besluite"]} aria={"The parts of minutes in order: Datum, Teenwoordig, Besluite."} />
        <Worked
          title="Speak and record"
          steps={[
            <><Af>Mevrou die Voorsitter, ek wil iets voorstel.</Af> <En>Madam Chair, I want to propose something.</En> <SpeakButton text="Mevrou die Voorsitter, ek wil iets voorstel." /></>,
            <><Af>Die voorstel is aanvaar.</Af> <En>The proposal was accepted.</En> <SpeakButton text="Die voorstel is aanvaar." /></>,
            <><Af>Ek wil &apos;n punt van orde opper.</Af> <En>I want to raise a point of order.</En> <SpeakButton text="Ek wil 'n punt van orde opper." /></>,
          ]}
        />
        <Mistake>Writing the minutes as a story. Record the decisions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>chairperson</em>?</>} answer={<><Af>voorsitter</Af> <En>chairperson</En>.</>} />
        <Check question={<>Who writes the minutes?</>} answer={<><Af>sekretaris</Af> <En>secretary</En>.</>} />
        <Check question={<>Which word means <em>proposal</em>?</>} answer={<><Af>voorstel</Af> <En>proposal</En>.</>} />
        <Check question={<>How many voted (12 for, 7 against)?</>} answer={<><Af>19</Af> <En>19</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'chairperson'?",
    options: ["sekretaris", "voorsitter", "lid", "gehoor"],
    answer: "voorsitter",
    explanation: "The 'voorsitter' keeps order.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'secretary'?",
    options: ["voorsitter", "tydhouer", "lid", "sekretaris"],
    answer: "sekretaris",
    explanation: "The 'sekretaris' writes the minutes.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'minutes' van 'n vergadering?",
    options: ["notule", "agenda", "voorstel", "besluit"],
    answer: "notule",
    explanation: "'Notule' are the record of a meeting.",
  },
  {
    prompt: "Watter sin begin 'n vergadering?",
    options: ["Die sekretaris skryf die notule.", "Die voorstel is aanvaar.", "Die vergadering is nou geopen.", "Ek stel voor dat ons Saterdag skoonmaak."],
    answer: "Die vergadering is nou geopen.",
    explanation: "The chairperson opens the meeting.",
  },
  {
    prompt: "Hoe lank neem 6 punte van 5 minute elk?",
    options: ["11 minute", "30 minute", "25 minute", "35 minute"],
    answer: "30 minute",
    explanation: "6 × 5 = 30 minutes.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'proposal'?",
    options: ["agenda", "notule", "stem", "voorstel"],
    answer: "voorstel",
    explanation: "A 'voorstel' is a suggestion for the meeting.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'to second a proposal'?",
    options: ["ondersteun", "verwerp", "vergeet", "skryf"],
    answer: "ondersteun",
    explanation: "A second shows that another member supports the proposal.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'vote'?",
    options: ["notule", "agenda", "stem", "voorstel"],
    answer: "stem",
    explanation: "Members 'stem' to decide.",
  },
  {
    prompt: "Watter sin is 'n voorstel?",
    options: ["Die vergadering is nou geopen.", "Ek stel voor dat ons Saterdag skoonmaak.", "Die sekretaris skryf die notule.", "Die voorstel is aanvaar."],
    answer: "Ek stel voor dat ons Saterdag skoonmaak.",
    explanation: "'Ek stel voor' introduces a proposal.",
  },
  {
    prompt: "12 stem vir, 7 teen en 3 weerhou. Hoeveel het gestem (vir of teen)?",
    options: ["22", "15", "12", "19"],
    answer: "19",
    explanation: "The votes for and against: 12 + 7 = 19. The 3 who abstained are not counted.",
  },
  {
    prompt: "12 stem vir, 7 teen en 3 weerhou. Hoeveel lede was teenwoordig?",
    options: ["22", "19", "15", "10"],
    answer: "22",
    explanation: "12 + 7 + 3 = 22.",
  },
  {
    prompt: "12 stem vir, 7 teen en 3 weerhou. Wat gebeur met die voorstel?",
    options: ["Die voorstel is verwerp.", "Die voorstel word nie getel nie.", "Die voorstel is aanvaar.", "Daar word weer gestem."],
    answer: "Die voorstel is aanvaar.",
    explanation: "More voted for than against.",
  },
  {
    prompt: "Watter sin is beleef en formeel?",
    options: ["Hoor hier, almal, ek praat nou!", "Mevrou die Voorsitter, ek wil iets voorstel.", "Dis 'n dom idee, vergeet daarvan.", "Ek gaan niks vandag vir julle sê nie."],
    answer: "Mevrou die Voorsitter, ek wil iets voorstel.",
    explanation: "Formal language suits a meeting.",
  },
  {
    prompt: "Watter sin beteken 'I want to raise a point of order.'?",
    options: ["Die voorstel is aanvaar.", "Die vergadering is nou geopen.", "Die sekretaris skryf die notule.", "Ek wil 'n punt van orde opper."],
    answer: "Ek wil 'n punt van orde opper.",
    explanation: "A point of order is raised when a rule is broken.",
  },
];

const MeetingOrals = () => (
  <AfrikaansTopic
    title="Vergaderings: mondelinge taak"
    subtitle="Roles at a meeting, proposals and votes, formal language and minutes"
    learnSteps={learnSteps}
    task="gr9-afr-meeting-orals-t2"
    bank={bank}
    speak="options"
  />
);

export default MeetingOrals;
