import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, Stanzas, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Poetry structure: reël, strofe, rym',
    content: slide(
      <>
        <Rule>A poem is built from <Af>reëls</Af> <En>lines</En>. A group of lines is a <Af>Strofe</Af> <En>stanza</En>. When words have the same end sound, we call it <Af>rym</Af> <En>rhyme</En>.</Rule>
        <Stanzas
          groups={[3, 3]}
          labels={['strofe 1', 'strofe 2']}
          aria="A poem drawn as grey bars in two groups of three lines. Each group is a strofe (stanza) and each bar is a reël (line)."
        />
        <Worked
          title="Find the rhyme"
          steps={[
            <><Af>Die son sak stadig oor die berg, die wolke word rooi en goud. Die voëls word stil in die bome, en die aand kom sag en koud.</Af></>,
            <><Af>goud</Af> and <Af>koud</Af> end the same way. They rhyme. <SpeakButton text="goud, koud" /></>,
          ]}
        />
        <Mistake>Calling a stanza a paragraph or a chapter. In a poem the group of lines is a <Af>strofe</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Imagery: what picture do the words make?',
    content: slide(
      <>
        <Rule><Af>Beeldspraak</Af> <En>imagery</En> uses words to make a picture or a feeling. To understand it ask: <Af>Watter beeld skep die woorde?</Af></Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['wolke', 'rooi en goud'], ['voëls', 'stil'], ['aand', 'sag, koud']]}
          aria="Three things in the poem and the picture they create: the wolke (clouds) are red and gold, the voëls (birds) are quiet, the aand (evening) is soft and cold."
        />
        <Worked
          title="Name the picture"
          steps={[
            <><Af>die wolke word rooi en goud</Af> <En>the clouds turn red and gold</En></>,
            <>The words paint a sunset: the colours of the evening sky.</>,
          ]}
        />
        <Mistake>Counting letters or asking who printed the poem. Imagery questions are about the picture and feeling the words create.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone and theme',
    content: slide(
      <>
        <Rule>The <Af>toon</Af> <En>tone</En> refers to <Af>die houding of gevoel in die stem</Af> <En>the attitude or feeling in the voice</En>. To find the theme, look for <Af>Herhalende idees en kernwoorde</Af> <En>repeated ideas and key words</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'stil', tag: 'kernwoord' }, { word: 'sag', tag: 'kernwoord' }, { word: 'koud', tag: 'kernwoord' }]}
          aria="Three key words from the poem, each tagged kernwoord: stil (quiet), sag (soft), koud (cold)."
        />
        <Worked
          title="From key words to theme"
          steps={[
            <>The poem repeats quiet, soft and cold words about the evening.</>,
            <>The tone is calm. The theme is how the evening arrives quietly.</>,
          ]}
        />
        <Mistake>Confusing tone with the length of the poem. Tone is the feeling in the poet&apos;s voice, and the theme grows from repeated ideas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Line references and interpretation',
    content: slide(
      <>
        <Rule>When a question says <Af>Kyk na reël 4</Af>, then <Af>Gebruik bewyse uit reël 4</Af> <En>use evidence from line 4</En>. A good interpretation will <Af>Koppel woordkeuse aan betekenis</Af> <En>link word choice to meaning</En>.</Rule>
        <OrderTiles
          tiles={['Reël', 'Woord', 'Betekenis']}
          aria="Three steps in order: Reël (go to the line), Woord (pick the word), Betekenis (explain the meaning)."
        />
        <Worked
          title="Answer with evidence"
          steps={[
            <>Reël 4: <Af>en die aand kom sag en koud.</Af></>,
            <>The word <Af>sag</Af> shows the evening arrives gently. That links word choice to meaning.</>,
          ]}
        />
        <Mistake>Giving an opinion with no line, or naming a word without saying what it means. Use the line and explain the word.</Mistake>
      </>,
    ),
  },
  {
    title: 'Start with a slow read',
    content: slide(
      <>
        <Rule>With an unknown poem the best first step is <Af>Lees dit stadig van begin tot einde</Af> <En>read it slowly from beginning to end</En>.</Rule>
        <OrderTiles
          tiles={['Lees', 'Kyk', 'Skryf']}
          aria="Three steps in order: Lees (read slowly), Kyk (look at words and lines), Skryf (write the answer)."
        />
        <Worked
          title="A routine"
          steps={[
            <>Read once for the feeling, once for the details.</>,
            <>Then look at the title, the rhyme and the key words before you answer.</>,
          ]}
        />
        <Mistake>Starting with the hardest question or jumping around. Read the whole poem first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What do we call a group of lines in a poem?</>} answer={<><Af>Strofe</Af>.</>} />
        <Check question={<>Words with the same end sound: the poem uses ___.</>} answer={<><Af>rym</Af>.</>} />
        <Check question={<>What does the tone of a poem refer to?</>} answer={<><Af>die houding of gevoel in die stem</Af>.</>} />
        <Check question={<>A question says <Af>Kyk na reël 4</Af>. What do you do?</>} answer={<><Af>Gebruik bewyse uit reël 4</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons 'n groep versreëls in 'n gedig?",
    options: ['Strofe', 'Paragraaf', 'Bylaag', 'Tabel'],
    answer: 'Strofe',
    explanation: 'A stanza in Afrikaans is a strofe.',
  },
  {
    prompt: "As woorde dieselfde eindklank het, noem ons dit ___.",
    options: ['rym', 'plot', 'register', 'simbool'],
    answer: 'rym',
    explanation: 'Rhyme uses similar ending sounds.',
  },
  {
    prompt: "Watter vraag help om beeldspraak te verstaan?",
    options: ['Watter beeld skep die woorde?', 'Hoeveel bladsye het die boek?', 'Wie druk die boek?', 'Watter kleur is die omslag?'],
    answer: 'Watter beeld skep die woorde?',
    explanation: 'Imagery asks what mental picture the words create.',
  },
  {
    prompt: "Die 'toon' van 'n gedig verwys na ___.",
    options: ['die houding of gevoel in die stem', 'die lengte van die papier', 'die aantal hoofstukke', 'die prys van die bundel'],
    answer: 'die houding of gevoel in die stem',
    explanation: 'Tone captures the speaker’s attitude.',
  },
  {
    prompt: "As 'n vraag sê 'Kyk na reël 4', wat moet jy doen?",
    options: ['Gebruik bewyse uit reël 4', 'Slaan reël 4 oor', 'Skryf net jou opinie', 'Verander die titel'],
    answer: 'Gebruik bewyse uit reël 4',
    explanation: 'Line-reference items need textual evidence.',
  },
  {
    prompt: "Watter opsie dui die beste op literêre interpretasie?",
    options: ['Koppel woordkeuse aan betekenis', 'Noem net die bladsygetal', 'Kies die langste opsie', 'Skryf sonder lees'],
    answer: 'Koppel woordkeuse aan betekenis',
    explanation: 'Interpretation explains effect and meaning.',
  },
  {
    prompt: "Wat help jou om die tema van 'n gedig te vind?",
    options: ['Herhalende idees en kernwoorde', 'Die naam van die drukker', 'Die datum op die boekrak', 'Die lettertipe alleen'],
    answer: 'Herhalende idees en kernwoorde',
    explanation: 'Themes are shown by repeated ideas.',
  },
  {
    prompt: "Kies die beste eerste stap met 'n onbekende gedig.",
    options: ['Lees dit stadig van begin tot einde', 'Skryf die antwoorde dadelik neer sonder lees', 'Raai al die antwoorde na die titel', 'Begin by die laaste vraag en werk terug'],
    answer: 'Lees dit stadig van begin tot einde',
    explanation: 'A full read builds understanding before analysis.',
  },
];

export { bank };

const PoetryEarlyLiteratureStudy = () => (
  <AfrikaansTopic
    title="Poësie & Vroeë Literatuurstudie"
    subtitle="Structure, tone, imagery and line-reference skills"
    learnSteps={learnSteps}
    task="gr8-poetry-early-literature-study-t1"
    bank={bank}
    speak="options"
  />
);

export default PoetryEarlyLiteratureStudy;
