import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Genres and what marks them',
    content: slide(
      <>
        <Rule>Each text type has its own features. A <Af>gedig</Af> focuses on rhyme and imagery. A <Af>formele brief</Af> uses a formal greeting. An <Af>advertensie</Af> has a slogan.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['gedig', 'rym'], ['formele brief', 'Geagte'], ['advertensie', 'slagspreuk']]}
          aria="Three text types and a typical feature: a gedig (poem) has rym (rhyme), a formele brief (formal letter) starts with Geagte, an advertensie (advertisement) has a slagspreuk (slogan)."
        />
        <Worked
          title="Name the genre"
          steps={[
            <>A text that works with <Af>rym en beeldspraak</Af> <En>rhyme and imagery</En> is a poem.</>,
            <>To ask someone formally for something, write a formal letter, not a short poem or a comic dialogue.</>,
          ]}
        />
        <Mistake>Mixing genre features: a rhyme in every test answer, or a friendly greeting in an advertisement.</Mistake>
      </>,
    ),
  },
  {
    title: 'Retrieval: facts straight from the text',
    content: slide(
      <>
        <Rule><Af>Herwinning/retrieval</Af> means taking facts directly from the text. You find them, you do not invent or guess them.</Rule>
        <WordBoxes
          words={['Pieter', 'was', 'moeg']}
          hot={[2]}
          aria="The sentence Pieter was moeg as three boxes, with moeg highlighted as the fact found in the text."
        />
        <Worked
          title="Find the fact"
          steps={[
            <>Text: <Af>Pieter was moeg.</Af> <En>Pieter was tired.</En></>,
            <>Question: how was Pieter? Retrieve the fact: <Af>moeg</Af>.</>,
          ]}
        />
        <Mistake>Guessing, using a word that is not in the text, or paraphrasing without reading. In retrieval the answer is in the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'A summary: opsomming',
    content: slide(
      <>
        <Rule>The best <Af>opsomming</Af> <En>summary</En> is <Af>'n Kort weergawe van die hoofidees in eie woorde</Af> <En>a short version of the main ideas in your own words</En>.</Rule>
        <OrderTiles
          tiles={['Lees', 'Hoofidees', 'Eie woorde']}
          aria="Three summary steps in order: Lees (read), Hoofidees (find the main ideas), Eie woorde (write them in your own words)."
        />
        <Worked
          title="Write a summary"
          steps={[
            <>Read the text and mark the main ideas.</>,
            <>Write them short, in your own words.</>,
          ]}
        />
        <Mistake>Repeating every detail word for word, giving only the title, or writing a new story with no link to the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual texts and mixed practice',
    content: slide(
      <>
        <Rule>In a visual-text question always consider <Af>Beeld, woordkeuse en teikengehoor</Af> <En>picture, word choice and audience</En>. For mixed revision, <Af>Oefen verskillende vraagtipes in een sessie</Af> <En>practise different question types in one session</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Beeld', tag: 'sien' }, { word: 'Woorde', tag: 'lees' }, { word: 'Gehoor', tag: 'wie' }]}
          aria="Three things to look at in a visual text: Beeld (the picture you see), Woorde (the words you read), Gehoor (who it is for)."
        />
        <Worked
          title="Mix it up"
          steps={[
            <>One session: a poem question, a letter, a visual text, a summary.</>,
            <>Ask for feedback and do the hard questions too.</>,
          ]}
        />
        <Mistake>Looking only at the page number or the font, repeating one question type again and again, or never using feedback from the teacher.</Mistake>
      </>,
    ),
  },
  {
    title: 'Genre awareness and why Term 4 revision',
    content: slide(
      <>
        <Rule>Genre awareness means using the right features for the text type. Term 4 revision matters because <Af>Dit konsolideer al die jaar se vaardighede</Af> <En>it consolidates all the year&apos;s skills</En>.</Rule>
        <Worked
          title="Show genre awareness"
          steps={[
            <>Good: <Af>Ek gebruik 'Geagte' in 'n formele brief.</Af> <En>I use Geagte in a formal letter.</En> <SpeakButton text="Ek gebruik Geagte in 'n formele brief." /></>,
            <>Not good: <Af>Ek gebruik 'Liewe dagboek' in 'n advertensie.</Af> That greeting belongs in a diary.</>,
          ]}
        />
        <Mistake>Ignoring the format, or thinking revision replaces the year&apos;s assessments. It builds on all the skills you learnt.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which text type focuses on rhyme and imagery?</>} answer={<><Af>Gedig</Af> <En>poem</En>.</>} />
        <Check question={<>What does <Af>Herwinning/retrieval</Af> mean?</>} answer={<>Taking facts directly from the text.</>} />
        <Check question={<>What makes the best summary of a text?</>} answer={<><Af>'n Kort weergawe van die hoofidees in eie woorde</Af>.</>} />
        <Check question={<>What must you consider in a visual-text question?</>} answer={<><Af>Beeld, woordkeuse en teikengehoor</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter tekssoort fokus op rym en beeldspraak?",
    options: ['Gedig', 'Formele brief', 'Advertensieverslag', 'Agenda'],
    answer: 'Gedig',
    explanation: 'Poetry often uses rhyme and imagery.',
  },
  {
    prompt: "Watter vaardigheid beteken 'haal feite direk uit die teks'?",
    options: ['Herwinning/retrieval', 'Uitvinding', 'Raaiwerk', 'Parafrasering sonder lees'],
    answer: 'Herwinning/retrieval',
    explanation: 'Retrieval questions ask for explicit information.',
  },
  {
    prompt: "Kies die beste opsomming van 'n teks.",
    options: ["'n Kort weergawe van die hoofidees in eie woorde", 'Elke detail woord vir woord herhaal', 'Slegs die titel van die teks', "'n Nuwe storie sonder enige verband"],
    answer: "'n Kort weergawe van die hoofidees in eie woorde",
    explanation: 'A summary captures only key points concisely.',
  },
  {
    prompt: "Watter genre pas by die doel 'om iemand formeel te vra'?",
    options: ['Formele brief', 'Kort gedig', 'Advertensieslagspreuk', 'Komiese dialoog'],
    answer: 'Formele brief',
    explanation: 'Formal requests are usually written as formal letters.',
  },
  {
    prompt: "In 'n visuele teks-vraag, wat moet jy altyd oorweeg?",
    options: ['Beeld, woordkeuse en teikengehoor', 'Net die bladsynommer van die teks', 'Net die lettertipe van die teks', 'Slegs die datum van publikasie'],
    answer: 'Beeld, woordkeuse en teikengehoor',
    explanation: 'Visual and language cues carry the message.',
  },
  {
    prompt: "Watter strategie help met gemengde hersiening?",
    options: ['Oefen verskillende vraagtipes in een sessie', 'Herhaal net een tipe vraag keer op keer', 'Slaan die moeilike vrae altyd oor', 'Gebruik nooit terugvoer van die onderwyser nie'],
    answer: 'Oefen verskillende vraagtipes in een sessie',
    explanation: 'Mixed practice prepares you for integrated assessments.',
  },
  {
    prompt: "Kies die beste voorbeeld van genre-bewustheid.",
    options: ["Ek gebruik 'Geagte' in 'n formele brief.", "Ek gebruik 'Liewe dagboek' in 'n advertensie.", 'Ek gebruik rym in elke toetsantwoord.', 'Ek ignoreer die formaat.'],
    answer: "Ek gebruik 'Geagte' in 'n formele brief.",
    explanation: 'Language choices should suit the genre.',
  },
  {
    prompt: "Waarom is term 4-hersiening belangrik?",
    options: ['Dit konsolideer al die jaar se vaardighede', 'Dit vervang alle assessering van die jaar', 'Dit maak leeswerk heeltemal oorbodig', 'Dit fokus net op een onderwerp van die jaar'],
    answer: 'Dit konsolideer al die jaar se vaardighede',
    explanation: 'Revision combines and strengthens prior learning.',
  },
];

export { bank };

const RevisionGenresSkills = () => (
  <AfrikaansTopic
    title="Hersiening van Genres en Vaardighede"
    subtitle="Integrated revision across Grade 7 Afrikaans FAL"
    learnSteps={learnSteps}
    task="gr7-revision-genres-skills-t4"
    bank={bank}
    speak="options"
  />
);

export default RevisionGenresSkills;
