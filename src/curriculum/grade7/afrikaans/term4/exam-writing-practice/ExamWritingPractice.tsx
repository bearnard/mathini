import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Read first, then plan briefly',
    content: slide(
      <>
        <Rule>The best first step in an exam writing task is <Af>Lees die vraag en beplan kortliks</Af> <En>read the question and plan briefly</En>. Then write, then edit.</Rule>
        <OrderTiles
          tiles={['Lees', 'Beplan', 'Skryf', 'Redigeer']}
          aria="Four exam steps in order: Lees (read the question), Beplan (plan briefly), Skryf (write), Redigeer (edit)."
        />
        <Worked
          title="A short plan"
          steps={[
            <>Underline the topic and the text type in the question.</>,
            <>Jot down three or four ideas in order. Then start writing.</>,
          ]}
        />
        <Mistake>Writing at once without reading, choosing a closing first, or ignoring the topic. Read and plan first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Share your time',
    content: slide(
      <>
        <Rule>Good time management is to <Af>Verdeel tyd tussen beplanning, skryf en redigering</Af> <En>divide time between planning, writing and editing</En>. Writing gets the most time.</Rule>
        <TaggedBoxes
          items={[{ word: 'Beplan', tag: 'kort' }, { word: 'Skryf', tag: 'langste' }, { word: 'Redigeer', tag: 'laaste' }]}
          aria="Three parts of the exam time: Beplan is short, Skryf is the longest, Redigeer comes last."
        />
        <Worked
          title="Plan the clock"
          steps={[
            <>Look at the time for the whole task and mark when each part ends.</>,
            <>Keep a few minutes at the end for editing.</>,
          ]}
        />
        <Mistake>Using all the time on the introduction, skipping the edit, or writing only bullet points with no sentences.</Mistake>
      </>,
    ),
  },
  {
    title: 'Follow the format',
    content: slide(
      <>
        <Rule>The topic decides the format. A narrative essay needs <Af>'n storie met begin, middel en einde</Af>. A formal question needs <Af>Nette, formele taal met duidelike paragrawe</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['narratief', 'storie'], ['formele brief', 'formaat']]}
          aria="Two exam text types and what they need: a narratiewe opstel (narrative essay) needs a story, a formele brief (formal letter) needs the correct format."
        />
        <Worked
          title="Match topic and format"
          steps={[
            <>Narrative topic: <Af>Vertel 'n storie met begin, middel en einde</Af> <En>tell a story with a beginning, middle and end</En>.</>,
            <>Formal answer: neat, formal language and clear paragraphs, not slang or loose notes.</>,
          ]}
        />
        <Mistake>Using the wrong format. <Af>'n Verkeerde formaat kan punte kos</Af> <En>a wrong format can cost marks</En>. Do not use a formal-letter format for a story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Checklist, common slips and endings',
    content: slide(
      <>
        <Rule>A <Af>kontrolelys</Af> <En>checklist</En> is useful because <Af>Dit help jou om algemene foute op te spoor</Af> <En>it helps you find common mistakes</En>. Under time pressure learners often <Af>Vergeet van leestekens</Af> <En>forget punctuation</En>.</Rule>
        <OrderTiles
          tiles={['Leestekens', 'Spelling', 'Taal']}
          aria="Three checklist items: Leestekens (punctuation), Spelling, Taal (language and tense)."
        />
        <Worked
          title="Finish well"
          steps={[
            <>Check punctuation, spelling and tense, one at a time.</>,
            <>End with a closing that sums up: <Af>Laastens het hierdie ervaring my deursettingsvermoë gewys.</Af> <En>Lastly this experience showed my perseverance.</En> <SpeakButton text="Laastens het hierdie ervaring my deursettingsvermoë gewys." /></>,
          ]}
        />
        <Mistake>Ending with chat or thanks, such as <Af>Einde van die vraestel, dankie vir die tyd</Af>. A closing belongs to the essay and sums up its message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the best first step in an exam writing task?</>} answer={<><Af>Lees die vraag en beplan kortliks</Af>.</>} />
        <Check question={<>Which practice shows good time management?</>} answer={<><Af>Verdeel tyd tussen beplanning, skryf en redigering</Af>.</>} />
        <Check question={<>The topic asks for a narrative essay. What do you do?</>} answer={<><Af>Vertel 'n storie met begin, middel en einde</Af>.</>} />
        <Check question={<>Which mistake is common under time pressure?</>} answer={<><Af>Vergeet van leestekens</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die beste eerste stap in 'n eksamenskryftaak?",
    options: ['Lees die vraag en beplan kortliks', 'Skryf onmiddellik sonder lees', "Kies eers 'n slot", 'Ignoreer die onderwerp'],
    answer: 'Lees die vraag en beplan kortliks',
    explanation: 'Quick planning improves relevance and structure.',
  },
  {
    prompt: "Watter praktyk wys goeie tydbestuur?",
    options: ['Verdeel tyd tussen beplanning, skryf en redigering', 'Gebruik al die tyd op die inleiding', 'Slaan die redigering heeltemal oor', 'Skryf net kolpunte neer en niks anders'],
    answer: 'Verdeel tyd tussen beplanning, skryf en redigering',
    explanation: 'Balanced timing helps complete all sections well.',
  },
  {
    prompt: "Kies die beste rede om 'n kontrolelys te gebruik.",
    options: ['Dit help jou om algemene foute op te spoor', 'Dit maak beplanning heeltemal onnodig', 'Dit vervang die inhoud van die opstel', 'Dit verander die vraag in die vraestel'],
    answer: 'Dit help jou om algemene foute op te spoor',
    explanation: 'Checklists improve technical accuracy.',
  },
  {
    prompt: "Watter antwoord pas by 'n formele eksamenvraag?",
    options: ['Nette, formele taal met duidelike paragrawe', 'Baie sleng en afkortings in elke sin', 'Slegs los notas sonder sinne', 'Emojis as die hoofinhoud van die antwoord'],
    answer: 'Nette, formele taal met duidelike paragrawe',
    explanation: 'Formal tasks need formal style and structure.',
  },
  {
    prompt: "As die onderwerp vra vir 'n narratiewe opstel, wat moet jy doen?",
    options: ["Vertel 'n storie met begin, middel en einde", 'Skryf net feite in lysvorm neer', "Gebruik die formaat van 'n formele brief", 'Gee net definisies van die kernwoorde'],
    answer: "Vertel 'n storie met begin, middel en einde",
    explanation: 'Narrative essays require clear storyline structure.',
  },
  {
    prompt: "Watter fout kom dikwels voor onder tydsdruk?",
    options: ['Vergeet van leestekens', 'Te veel beplanning', 'Te veel hersiening', 'Te netjiese handskrif'],
    answer: 'Vergeet van leestekens',
    explanation: 'Punctuation errors increase when learners rush.',
  },
  {
    prompt: "Kies die beste afsluiting vir 'n opstel.",
    options: ['Laastens het hierdie ervaring my deursettingsvermoë gewys.', 'En toe stop ek sommer daar by die tafel.', 'My pen is swart en dit is amper leeg.', 'Einde van die vraestel, dankie vir die tyd.'],
    answer: 'Laastens het hierdie ervaring my deursettingsvermoë gewys.',
    explanation: 'A conclusion should wrap up the main idea meaningfully.',
  },
  {
    prompt: "Waarom is format-herroeping belangrik in eksamens?",
    options: ["'n Verkeerde formaat kan punte kos", 'Formaat tel nooit in die eksamen nie', 'Formaat is net belangrik in kuns', 'Formaat vervang die inhoud heeltemal'],
    answer: "'n Verkeerde formaat kan punte kos",
    explanation: 'Assessment rubrics include format requirements.',
  },
];

export { bank };

const ExamWritingPractice = () => (
  <AfrikaansTopic
    title="Eksamen-skryf Oefening"
    subtitle="Timed writing, format recall and editing"
    learnSteps={learnSteps}
    task="gr7-exam-writing-practice-t4"
    bank={bank}
    speak="options"
  />
);

export default ExamWritingPractice;
