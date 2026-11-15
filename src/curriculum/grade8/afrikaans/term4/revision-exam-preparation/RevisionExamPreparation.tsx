import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Reading a new passage',
    content: slide(
      <>
        <Rule>With a new comprehension test the best reading strategy is <Af>Lees eers vir hoofidee en doel</Af> <En>first read for the main idea and purpose</En>. Then go back for details.</Rule>
        <OrderTiles
          tiles={['Lees', 'Hoofidee', 'Detail']}
          aria="Three reading steps in order: Lees (read the passage), Hoofidee (find the main idea and purpose), Detail (go back for the details)."
        />
        <Worked
          title="Read for the main idea"
          steps={[
            <>Read the whole passage once without stopping.</>,
            <>Ask: what is it about, and why was it written? Then read the questions.</>,
          ]}
        />
        <Mistake>Starting with the questions and hunting for single words. First understand what the passage is about.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summaries: key points only',
    content: slide(
      <>
        <Rule>The purpose of a summary is to <Af>Gee kernpunte kort en duidelik</Af> <En>give the key points briefly and clearly</En>.</Rule>
        <OrderTiles
          tiles={['Lees', 'Kernpunte', 'Skryf']}
          aria="Three summary steps in order: Lees (read), Kernpunte (find the key points), Skryf (write them briefly)."
        />
        <Worked
          title="Write a summary"
          steps={[
            <>Underline the key points. Cross out examples and repeated detail.</>,
            <>Write the key points in short, clear sentences in your own words.</>,
          ]}
        />
        <Mistake>Copying whole sentences or adding your own opinion. A summary is short and keeps only the key points.</Mistake>
      </>,
    ),
  },
  {
    title: 'Listening: key words and facts',
    content: slide(
      <>
        <Rule>In listening activities focus on <Af>sleutelwoorde en feite</Af> <En>key words and facts</En>: names, numbers, places and times.</Rule>
        <TaggedBoxes
          items={[{ word: 'sleutelwoorde', tag: 'skryf neer' }, { word: 'feite', tag: 'skryf neer' }]}
          aria="Two things to note while listening: sleutelwoorde (key words) and feite (facts); write both down."
        />
        <Worked
          title="Take notes"
          steps={[
            <>Listen once for the main idea. Write down names, numbers, places and times.</>,
            <>Use short notes, not full sentences, so that you keep up with the speaker.</>,
          ]}
        />
        <Mistake>Trying to write every word. You miss the next fact. Note only the key words and facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exam technique: instructions, marks, time',
    content: slide(
      <>
        <Rule>Good exam technique: <Af>Ek lees elke instruksie twee keer.</Af> If a question is worth two marks, <Af>Gee twee duidelike antwoorde</Af> <En>give two clear answers</En>. Time planning <Af>Dit help jou om alle afdelings te voltooi</Af> <En>helps you finish all sections</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['2 punte', '2 antwoorde'], ['elke instruksie', '2 keer']]}
          aria="Two exam rules: a question worth 2 punte (marks) needs 2 antwoorde (answers), and each instruksie (instruction) is read 2 keer (times)."
        />
        <Worked
          title="Plan the paper"
          steps={[
            <>Read each instruction twice before you answer. <SpeakButton text="Ek lees elke instruksie twee keer." /></>,
            <>Check the marks: two marks means two separate points.</>,
            <>Give each section its share of the time so that all sections are finished.</>,
          ]}
        />
        <Mistake>Giving one long answer for two marks, or spending all the time on the first section. Count the marks and watch the clock.</Mistake>
      </>,
    ),
  },
  {
    title: 'Last check and a good revision habit',
    content: slide(
      <>
        <Rule>The best last step before handing in is <Af>Kontroleer spelling, leestekens en instruksies</Af> <En>check spelling, punctuation and instructions</En>. The best revision attitude is <Af>Werk gereeld met gemengde oefeninge</Af> <En>work regularly with mixed exercises</En>.</Rule>
        <OrderTiles
          tiles={['Spelling', 'Leestekens', 'Instruksies']}
          aria="Three last checks: Spelling, Leestekens (punctuation), Instruksies (instructions)."
        />
        <Worked
          title="Finish well"
          steps={[
            <>Check spelling, then punctuation, then re-read the instructions against your answers.</>,
            <>Revise a little every day, with different kinds of questions mixed together.</>,
          ]}
        />
        <Mistake>Handing in at once, or cramming one topic the night before. Check your answers and revise regularly with mixed exercises.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which reading strategy helps most with a new test?</>} answer={<><Af>Lees eers vir hoofidee en doel</Af>.</>} />
        <Check question={<>What is the purpose of a summary?</>} answer={<><Af>Gee kernpunte kort en duidelik</Af>.</>} />
        <Check question={<>A question is worth two marks. What do you do?</>} answer={<><Af>Gee twee duidelike antwoorde</Af>.</>} />
        <Check question={<>What should you focus on in listening activities?</>} answer={<><Af>sleutelwoorde en feite</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter leesstrategie help die meeste by 'n nuwe begripstoets?",
    options: ['Lees eers vir hoofidee en doel', 'Skryf antwoorde sonder lees', 'Begin by die moeilikste vraag net', 'Ignoreer die teks'],
    answer: 'Lees eers vir hoofidee en doel',
    explanation: 'Main idea first gives context for details.',
  },
  {
    prompt: "Wat is die doel van 'n opsomming?",
    options: ['Gee kernpunte kort en duidelik', 'Kopieer die hele teks', 'Voeg nuwe stories by', 'Gebruik slegs vrae'],
    answer: 'Gee kernpunte kort en duidelik',
    explanation: 'Summaries condense essential information.',
  },
  {
    prompt: "Waarom is tydsbeplanning belangrik in eksamens?",
    options: ['Dit help jou om alle afdelings te voltooi', 'Dit maak jou antwoorde langer as nodig', 'Dit vervang die studie vir die eksamen', 'Dit haal die moeilike vrae uit die vraestel'],
    answer: 'Dit help jou om alle afdelings te voltooi',
    explanation: 'Time management prevents unfinished sections.',
  },
  {
    prompt: "Kies die beste laaste stap voor inhandiging.",
    options: ['Kontroleer spelling, leestekens en instruksies', 'Begin met nuwe antwoorde op die laaste oomblik', 'Skryf alles weer van voor af oor', 'Slaan die laaste bladsy oor om tyd te spaar'],
    answer: 'Kontroleer spelling, leestekens en instruksies',
    explanation: 'Final checks catch preventable errors.',
  },
  {
    prompt: "In luister-aktiwiteite moet jy veral fokus op ___.",
    options: ['sleutelwoorde en feite', 'die klankvolume alleen', 'die lengte van die opname', 'die spreker se skoene'],
    answer: 'sleutelwoorde en feite',
    explanation: 'Keywords help recall accurate details.',
  },
  {
    prompt: "Watter antwoord toon goeie eksamentegniek?",
    options: ['Ek lees elke instruksie twee keer.', 'Ek raai voordat ek lees.', 'Ek antwoord in enige taal.', 'Ek slaan maklike vrae oor.'],
    answer: 'Ek lees elke instruksie twee keer.',
    explanation: 'Careful instruction reading reduces mistakes.',
  },
  {
    prompt: "As 'n vraag vra vir twee punte, wat moet jy doen?",
    options: ['Gee twee duidelike antwoorde', 'Gee een lang storie', 'Los dit oop', "Skryf net 'ja'"],
    answer: 'Gee twee duidelike antwoorde',
    explanation: 'Mark allocation guides expected response length.',
  },
  {
    prompt: "Wat is die beste houding tydens hersiening?",
    options: ['Werk gereeld met gemengde oefeninge', 'Studeer net die aand voor die eksamen', 'Herhaal net een onderwerp keer op keer', 'Maak nie foute reg wat jy gemaak het nie'],
    answer: 'Werk gereeld met gemengde oefeninge',
    explanation: 'Regular mixed practice builds retention.',
  },
];

export { bank };

const RevisionExamPreparation = () => (
  <AfrikaansTopic
    title="Hersiening & Eksamenvoorbereiding"
    subtitle="Comprehension, summary and timed exam strategy practice"
    learnSteps={learnSteps}
    task="gr8-revision-exam-preparation-t4"
    bank={bank}
    speak="options"
  />
);

export default RevisionExamPreparation;
