import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan and research first',
    content: slide(
      <>
        <Rule>The first step in a creative project is <Af>Beplan die onderwerp en doel</Af> <En>plan the topic and purpose</En>. Research notes are useful because <Af>Dit gee feite en idees vir inhoud</Af> <En>they give facts and ideas for content</En>.</Rule>
        <OrderTiles
          tiles={['Beplan', 'Navors', 'Konsep', 'Hersien', 'Aanbied']}
          aria="Five project steps in order: Beplan (plan), Navors (research), Konsep (draft), Hersien (revise), Aanbied (present)."
        />
        <Worked
          title="Start the project"
          steps={[
            <>Choose the topic and decide the purpose: who is it for and what should it do?</>,
            <>Make research notes: facts, names, ideas. Use them later when you write.</>,
          ]}
        />
        <Mistake>Starting to write the final text before you know the topic and purpose, or before you have notes to write from.</Mistake>
      </>,
    ),
  },
  {
    title: 'Draft and feedback',
    content: slide(
      <>
        <Rule>A first <Af>konsep</Af> <En>draft</En> is a <Af>Werkweergawe wat later verbeter word</Af> <En>a working version that is improved later</En>. Use feedback to <Af>Verbeter paragraaforde en woordkeuse</Af> <En>improve paragraph order and word choice</En>.</Rule>
        <Worked
          title="Improve the draft"
          steps={[
            <>Write the whole draft first. It does not have to be perfect.</>,
            <>Ask for feedback. Move a paragraph that is in the wrong place and replace weak words.</>,
          ]}
        />
        <Mistake>Treating the first draft as the final version, or using feedback only to fix small typing errors. Use it to improve the order and the words too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time and the rubric',
    content: slide(
      <>
        <Rule>Good time management is to <Af>Stel klein sperdatums vir elke deel</Af> <En>set small deadlines for each part</En>. The <Af>rubriek</Af> <En>rubric</En> is important because <Af>Dit wys presies hoe die werk geassesseer word</Af> <En>it shows exactly how the work is assessed</En>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['sperdatum', 'tyd'], ['rubriek', 'punte']]}
          aria="Two project tools and what they help with: a sperdatum (deadline) helps with tyd (time), the rubriek (rubric) shows the punte (marks)."
        />
        <Worked
          title="Plan with the rubric"
          steps={[
            <>Give each part its own deadline: notes, draft, revision, presentation.</>,
            <>Read the rubric before you write. It shows where the marks are.</>,
          ]}
        />
        <Mistake>One deadline at the very end, or never reading the rubric. Then you only find out at the end what was marked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Present and reflect',
    content: slide(
      <>
        <Rule>A good presentation technique is <Af>Praat duidelik en hou oogkontak</Af> <En>speak clearly and keep eye contact</En>. After the project, reflect on what you improved.</Rule>
        <OrderTiles
          tiles={['Oefen', 'Praat', 'Oogkontak']}
          aria="Three presentation steps: Oefen (practise), Praat (speak clearly), Oogkontak (keep eye contact)."
        />
        <Worked
          title="Present and reflect"
          steps={[
            <>Practise your talk out loud. Look up at your listeners.</>,
            <>Reflect: <Af>Ek het my tweede konsep verbeter ná terugvoer.</Af> <En>I improved my second draft after feedback.</En> <SpeakButton text="Ek het my tweede konsep verbeter ná terugvoer." /></>,
          ]}
        />
        <Mistake>Reading every word from the page with no eye contact, or writing a reflection that says nothing, such as <Af>Ek het nie die vraag gelees nie</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which step comes first in a creative project?</>} answer={<><Af>Beplan die onderwerp en doel</Af>.</>} />
        <Check question={<>Why are research notes useful?</>} answer={<><Af>Dit gee feite en idees vir inhoud</Af>.</>} />
        <Check question={<>What is a first draft?</>} answer={<><Af>Werkweergawe wat later verbeter word</Af>.</>} />
        <Check question={<>Which practice shows good time management?</>} answer={<><Af>Stel klein sperdatums vir elke deel</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter stap kom eerste in 'n kreatiewe projek?",
    options: ['Beplan die onderwerp en doel', 'Dien die finale weergawe in', 'Doen mondeling sonder voorbereiding', 'Ignoreer die rubriek'],
    answer: 'Beplan die onderwerp en doel',
    explanation: 'Planning starts the process.',
  },
  {
    prompt: "Waarom is navorsingsnotas nuttig tydens projekwerk?",
    options: ['Dit gee feite en idees vir inhoud', 'Dit vervang alle redigering', 'Dit maak die projek korter', 'Dit verander die taal outomaties'],
    answer: 'Dit gee feite en idees vir inhoud',
    explanation: 'Notes help build informed content.',
  },
  {
    prompt: "Wat is die beste beskrywing van 'n eerste konsep?",
    options: ['Werkweergawe wat later verbeter word', 'Die finale teks sonder enige foute', "Slegs 'n titel vir die opstel", "'n Mondelinge aanbieding voor die klas"],
    answer: 'Werkweergawe wat later verbeter word',
    explanation: 'A draft is not the final submission.',
  },
  {
    prompt: "Kies die sterkste gebruik van terugvoer.",
    options: ['Verbeter paragraaforde en woordkeuse', 'Verwyder alle inhoud', 'Ignoreer kommentaar heeltemal', 'Verander net die lettertipe'],
    answer: 'Verbeter paragraaforde en woordkeuse',
    explanation: 'Feedback should lead to meaningful revisions.',
  },
  {
    prompt: "Watter praktyk wys goeie tydsbestuur?",
    options: ['Stel klein sperdatums vir elke deel', 'Wag tot die laaste dag voor die sperdatum', "Skryf sonder 'n plan of volgorde", 'Dien halfklaar werk in om tyd te spaar'],
    answer: 'Stel klein sperdatums vir elke deel',
    explanation: 'Milestones keep progress on track.',
  },
  {
    prompt: "Waarom is die rubriek belangrik?",
    options: ['Dit wys presies hoe die werk geassesseer word', 'Dit vervang die onderwerp van die opdrag', 'Dit is net bedoel vir die onderwysers', 'Dit maak die taalreëls onnodig'],
    answer: 'Dit wys presies hoe die werk geassesseer word',
    explanation: 'Rubrics guide quality and focus.',
  },
  {
    prompt: "Kies die beste aanbiedingstegniek.",
    options: ['Praat duidelik en hou oogkontak', 'Lees vinnig sonder pouses', 'Kyk net na die vloer', 'Praat baie sag'],
    answer: 'Praat duidelik en hou oogkontak',
    explanation: 'Confident delivery improves communication.',
  },
  {
    prompt: "Watter sin wys gepaste refleksie ná die projek?",
    options: ['Ek het my tweede konsep verbeter ná terugvoer.', 'Ek het niks geleer nie en dit was nutteloos.', 'Ek het net die titel van die opstel verander.', 'Ek het die vraag nie mooi gelees nie.'],
    answer: 'Ek het my tweede konsep verbeter ná terugvoer.',
    explanation: 'Reflection should show growth and improvement.',
  },
];

export { bank };

const CreativeWritingProject = () => (
  <AfrikaansTopic
    title="Kreatiewe Skryfprojek"
    subtitle="Research, drafting, revision and presentation process"
    learnSteps={learnSteps}
    task="gr8-creative-writing-project-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativeWritingProject;
