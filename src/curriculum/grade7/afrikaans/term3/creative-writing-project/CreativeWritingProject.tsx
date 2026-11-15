import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The steps of a writing project',
    content: slide(
      <>
        <Rule>A writing project has steps. <Af>Beplanning</Af> <En>planning</En> comes first. Then you write a draft, revise, edit and present.</Rule>
        <OrderTiles
          tiles={['Beplan', 'Konsep', 'Hersien', 'Redigeer', 'Aanbied']}
          aria="Five project steps in order: Beplan (plan), Konsep (draft), Hersien (revise), Redigeer (edit), Aanbied (present)."
        />
        <Worked
          title="Follow the order"
          steps={[
            <><Af>Beplanning:</Af> choose a topic and list ideas.</>,
            <><Af>Konsep:</Af> write the first version.</>,
            <>Then revise, edit, and last of all <Af>Aanbieding</Af> <En>the presentation</En>.</>,
          ]}
        />
        <Mistake>Starting with the <Af>Finale druk</Af> <En>final print</En> or the presentation. These come last, after planning, drafting, revising and editing.</Mistake>
      </>,
    ),
  },
  {
    title: 'First draft and feedback',
    content: slide(
      <>
        <Rule>A first <Af>konsep</Af> <En>draft</En> is meant <Af>Om idees neer te skryf wat later verbeter kan word</Af> <En>to write ideas down that can be improved later</En>. It is not the final, perfect version.</Rule>
        <Worked
          title="Use feedback"
          steps={[
            <>Write the draft without worrying about every mistake.</>,
            <>Ask a friend to read it. <Af>Terugvoer</Af> <En>feedback</En> <Af>Dit wys waar die teks onduidelik of swak is</Af> <En>it shows where the text is unclear or weak</En>.</>,
            <>Use the feedback to improve the next draft.</>,
          ]}
        />
        <Mistake>Expecting the first draft to be faultless, or thinking feedback changes your topic or replaces your writing. Feedback only shows what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise first, then edit',
    content: slide(
      <>
        <Rule>To <Af>hersien</Af> <En>revise</En> is to <Af>Verbeter inhoud, orde en woordkeuse</Af> <En>improve content, order and word choice</En>. To <Af>redigeer</Af> <En>edit</En> you focus on <Af>Spelling, leestekens en grammatika</Af> <En>spelling, punctuation and grammar</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['hersien', 'inhoud'], ['redigeer', 'spelling']]}
          aria="Two steps and their focus: hersien (revise) looks at inhoud (content), redigeer (edit) looks at spelling."
        />
        <Worked
          title="Two different jobs"
          steps={[
            <>Revise: move a paragraph, add a detail, choose a stronger word.</>,
            <>Edit: fix a spelling mistake, add a full stop, correct a verb.</>,
          ]}
        />
        <Mistake>Calling a change of font size or deleting every paragraph a revision. Revising makes the content, order and word choice better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time, presenting and reflecting',
    content: slide(
      <>
        <Rule>For a long task, <Af>Breek die taak in kleiner sperdatums op</Af> <En>break the task into smaller deadlines</En>. Present <Af>Om jou werk duidelik en selfversekerd te deel</Af> <En>to share your work clearly and confidently</En>.</Rule>
        <Worked
          title="Plan, present, reflect"
          steps={[
            <>Set a deadline for the plan, one for each draft, and one for the final copy.</>,
            <>Practise your presentation. Do not only read from the board.</>,
            <>Reflect: <Af>Ek het my tweede konsep verbeter ná terugvoer.</Af> <En>I improved my second draft after feedback.</En> <SpeakButton text="Ek het my tweede konsep verbeter ná terugvoer." /></>,
          ]}
        />
        <Mistake>Waiting until the last evening before the deadline, or writing without a plan. Also read the rubric: it shows what is marked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which step comes first in a writing project?</>} answer={<><Af>Beplanning</Af>.</>} />
        <Check question={<>What is the purpose of a first draft?</>} answer={<>To write ideas down that can be improved later.</>} />
        <Check question={<>What do you focus on when you edit?</>} answer={<><Af>Spelling, leestekens en grammatika</Af>.</>} />
        <Check question={<>What is a good time-management strategy for a long task?</>} answer={<><Af>Breek die taak in kleiner sperdatums op</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter stap kom eerste in 'n skryfprojek?",
    options: ['Beplanning', 'Aanbieding', 'Finale druk', 'Mondelinge refleksie'],
    answer: 'Beplanning',
    explanation: 'Planning comes before drafting and editing.',
  },
  {
    prompt: "Wat is die doel van 'n eerste konsep (draft)?",
    options: ['Om idees neer te skryf wat later verbeter kan word', 'Om die finale foutlose weergawe te wees', "Om net 'n titel te kies", 'Om beoordeling te vermy'],
    answer: 'Om idees neer te skryf wat later verbeter kan word',
    explanation: 'A draft is a working version to improve later.',
  },
  {
    prompt: "Waarom is terugvoer van 'n maat nuttig?",
    options: ['Dit wys waar die teks onduidelik of swak is', 'Dit vervang alle skryfwerk', 'Dit verander jou onderwerp outomaties', 'Dit maak redigering onnodig'],
    answer: 'Dit wys waar die teks onduidelik of swak is',
    explanation: 'Peer feedback helps improve quality.',
  },
  {
    prompt: "Kies die beste beskrywing van 'hersien'.",
    options: ['Verbeter inhoud, orde en woordkeuse', 'Net verander lettergrootte', 'Skrap alle paragrawe', "Skryf 'n nuwe onderwerp sonder rede"],
    answer: 'Verbeter inhoud, orde en woordkeuse',
    explanation: 'Revision focuses on meaning and structure.',
  },
  {
    prompt: "Wat moet jy tydens redigering fokus?",
    options: ['Spelling, leestekens en grammatika', 'Net die prentjies by die teks', 'Slegs die eerste sin van die opstel', 'Die kleur van die papier van die opstel'],
    answer: 'Spelling, leestekens en grammatika',
    explanation: 'Editing checks language accuracy.',
  },
  {
    prompt: "Watter is die beste doel vir 'n projekaanbieding?",
    options: ['Om jou werk duidelik en selfversekerd te deel', 'Om vinnig sonder voorbereiding te praat', 'Om die gehoor te verwar', 'Om slegs van die bord af te lees'],
    answer: 'Om jou werk duidelik en selfversekerd te deel',
    explanation: 'Presentations should be clear and confident.',
  },
  {
    prompt: "Kies die beste tydsbestuur-strategie vir 'n lang taak.",
    options: ['Breek die taak in kleiner sperdatums op', 'Wag tot die laaste aand voor inhandiging', "Skryf sonder 'n plan vir die taak", 'Ignoreer die assesseringsrubriek heeltemal'],
    answer: 'Breek die taak in kleiner sperdatums op',
    explanation: 'Chunking tasks improves project completion.',
  },
  {
    prompt: "Watter sin wys gepaste projekrefleksie?",
    options: ['Ek het my tweede konsep verbeter ná terugvoer.', 'Ek het geen veranderinge nodig nie ooit.', 'Ek het nie die vraag gelees nie.', 'Ek het net die titel geskryf.'],
    answer: 'Ek het my tweede konsep verbeter ná terugvoer.',
    explanation: 'Reflection shows growth through revision.',
  },
];

export { bank };

const CreativeWritingProject = () => (
  <AfrikaansTopic
    title="Kreatiewe Skryfprojek"
    subtitle="Planning, drafting, revising and presenting"
    learnSteps={learnSteps}
    task="gr7-creative-writing-project-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativeWritingProject;
