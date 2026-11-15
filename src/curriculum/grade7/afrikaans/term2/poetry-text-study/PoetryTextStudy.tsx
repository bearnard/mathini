import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, Stanzas, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Lines and stanzas: reël and strofe',
    content: slide(
      <>
        <Rule>A poem is made of <Af>reëls</Af> <En>lines</En>. A group of lines is a <Af>Strofe</Af> <En>stanza</En>. Do not call it a paragraph or a chapter.</Rule>
        <Stanzas
          groups={[3, 3]}
          labels={['strofe 1', 'strofe 2']}
          aria="A poem drawn as grey bars in two groups of three lines. Each group is a strofe (stanza) and each bar is a reël (line)."
        />
        <Worked
          title="Count the lines"
          steps={[
            <><Af>Die son sak stadig oor die berg,</Af> <En>The sun sinks slowly over the mountain,</En></>,
            <><Af>die wolke word rooi en goud.</Af> <En>the clouds turn red and gold.</En> <SpeakButton text="Die son sak stadig oor die berg, die wolke word rooi en goud." /></>,
            <>That is two lines, reël 1 and reël 2. Together with the next two lines they make one strofe.</>,
          ]}
        />
        <Mistake>Calling a stanza a <Af>paragraaf</Af>. A paragraph is in prose; a poem has <Af>strofes</Af> and <Af>reëls</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sound: rym and alliterasie',
    content: slide(
      <>
        <Rule>When two words have the same end sound, we call it <Af>rym</Af> <En>rhyme</En>. Repeating the same first sound is <Af>alliterasie</Af>.</Rule>
        <TaggedBoxes
          items={[{ word: 'goud', tag: 'rym' }, { word: 'koud', tag: 'rym' }]}
          aria="Two words that rhyme, goud and koud, each tagged rym."
        />
        <Worked
          title="Hear the sound"
          steps={[
            <>The poem ends line 2 with <Af>goud</Af> and line 4 with <Af>koud</Af> (<Af>en die aand kom sag en koud</Af>, <En>and the evening comes softly and cold</En>). Same end sound: they rhyme. <SpeakButton text="goud, koud" /></>,
            <><Af>Slim slang sluip stil.</Af> <En>A clever snake creeps quietly.</En> The same <Af>s</Af> sound begins the words: alliterasie.</>,
          ]}
        />
        <Mistake>Mixing up the two. <Af>Rym</Af> is the end sound; <Af>alliterasie</Af> is the beginning sound repeated. Words like <Af>paragraaf</Af> or <Af>opskrif</Af> do not show sound repetition.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mood and imagery: stemming',
    content: slide(
      <>
        <Rule>The <Af>stemming</Af> <En>mood</En> is <Af>Die gevoel wat die gedig skep</Af> <En>the feeling the poem creates</En>. Ask: <Af>Watter beeld of gevoel skep die woorde?</Af></Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['donker wolke', 'hartseer'], ['warm son', 'bly'], ['stil nag', 'rustig']]}
          aria="Three images from a poem and the mood each creates: donker wolke (dark clouds) is hartseer (sad), warm son (warm sun) is bly (happy), stil nag (quiet night) is rustig (calm)."
        />
        <Worked
          title="Find the mood"
          steps={[
            <><Af>Die voëls word stil in die bome, en die aand kom sag en koud.</Af> <En>The birds go quiet in the trees, and the evening comes softly and cold.</En></>,
            <>The words <Af>stil</Af>, <Af>sag</Af> and <Af>aand</Af> paint a quiet picture. The mood is calm.</>,
          ]}
        />
        <Mistake>Describing the length of the poem, the price of the book or the colour of the page. The mood is the feeling the poem creates.</Mistake>
      </>,
    ),
  },
  {
    title: 'Use the line reference',
    content: slide(
      <>
        <Rule>If a question says <Af>reël 3</Af>, then <Af>Lees en gebruik inligting uit reël 3</Af> <En>read and use the information from line 3</En>. Do not skip the line.</Rule>
        <Worked
          title="Answer from reël 2"
          steps={[
            <>Question: which colours do you find in <Af>reël 2</Af>?</>,
            <>Go to line 2: <Af>die wolke word rooi en goud.</Af></>,
            <>Answer: <Af>rooi</Af> and <Af>goud</Af> <En>red and gold</En>. Use words from that line.</>,
          ]}
        />
        <Mistake>Skipping the line, writing only your name, or changing the title of the poem. Always go back to the line the question names.</Mistake>
      </>,
    ),
  },
  {
    title: 'Analyse a poem: read first',
    content: slide(
      <>
        <Rule>With an unknown poem the best first step is <Af>Lees die hele gedig stadig deur</Af> <En>read the whole poem slowly</En>. Then <Af>Kyk na woordkeuse en betekenis</Af> <En>look at word choice and meaning</En>.</Rule>
        <OrderTiles
          tiles={['Lees', 'Kyk', 'Antwoord']}
          aria="Three steps for a poem in order: Lees (read the whole poem), Kyk (look at word choice and meaning), Antwoord (answer the questions)."
        />
        <Worked
          title="Poetry analysis"
          steps={[
            <>Read the whole poem slowly, also the punctuation.</>,
            <>Look at the words the poet chose and what they mean.</>,
            <>Only then answer, starting with the questions that name a line.</>,
          ]}
        />
        <Mistake>Starting at the last question, choosing options at random, or ignoring the punctuation. Read first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What do we call a group of lines in a poem?</>} answer={<><Af>Strofe</Af>.</>} />
        <Check question={<>Two words with the same end sound: what is that called?</>} answer={<><Af>rym</Af>.</>} />
        <Check question={<>Which word shows repeated sound in poetry: <Af>alliterasie</Af> or <Af>paragraaf</Af>?</>} answer={<><Af>alliterasie</Af>.</>} />
        <Check question={<>What is the best first step with an unknown poem?</>} answer={<><Af>Lees die hele gedig stadig deur</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons 'n groep reëls in 'n gedig?",
    options: ['Strofe', 'Paragraaf', 'Hoofstuk', 'Titelblad'],
    answer: 'Strofe',
    explanation: 'A stanza is called a strofe in Afrikaans.',
  },
  {
    prompt: "As twee woorde dieselfde eindklank het, noem ons dit ___.",
    options: ['rym', 'tempo', 'tema', 'slot'],
    answer: 'rym',
    explanation: "Same ending sounds create rhyme ('rym').",
  },
  {
    prompt: "Watter vraag help met beeldspraak?",
    options: ['Watter beeld of gevoel skep die woorde?', 'Hoeveel letters is in elke woord?', 'Wie het die gedig gedruk?', 'Watter pen is gebruik?'],
    answer: 'Watter beeld of gevoel skep die woorde?',
    explanation: 'Imagery is about mental pictures and feelings.',
  },
  {
    prompt: "Kies die beste beskrywing van 'stemming' in 'n gedig.",
    options: ['Die gevoel wat die gedig skep', 'Die lengte van die gedig', 'Die prys van die boek', 'Die kleur van die bladsy'],
    answer: 'Die gevoel wat die gedig skep',
    explanation: 'Mood describes the emotional atmosphere.',
  },
  {
    prompt: "As 'n vraag vra vir 'reël 3', wat moet jy doen?",
    options: ['Lees en gebruik inligting uit reël 3', 'Slaan die reël oor', 'Skryf net jou naam', 'Verander die gedig se titel'],
    answer: 'Lees en gebruik inligting uit reël 3',
    explanation: 'Line-reference questions need evidence from that line.',
  },
  {
    prompt: "Watter opsie pas by poësie-analise?",
    options: ['Kyk na woordkeuse en betekenis', 'Memoriseer slegs die bladsygetal', 'Ignoreer leestekens heeltemal', 'Skryf sonder om te lees'],
    answer: 'Kyk na woordkeuse en betekenis',
    explanation: 'Poetry analysis focuses on language choices and meaning.',
  },
  {
    prompt: "Watter woord wys klankherhaling in poësie?",
    options: ['alliterasie', 'paragraaf', 'opskrif', 'uitgawe'],
    answer: 'alliterasie',
    explanation: 'Alliteration repeats initial sounds.',
  },
  {
    prompt: "Wat is die beste eerste stap by 'n onbekende gedig?",
    options: ['Lees die hele gedig stadig deur', 'Skryf antwoorde sonder lees', 'Kies lukraak opsies', 'Begin by die laaste vraag'],
    answer: 'Lees die hele gedig stadig deur',
    explanation: 'First read builds understanding before answering questions.',
  },
];

export { bank };

const PoetryTextStudy = () => (
  <AfrikaansTopic
    title="Poësie & Teksstudie"
    subtitle="Imagery, mood and line-reference skills"
    learnSteps={learnSteps}
    task="gr7-poetry-text-study-t2"
    bank={bank}
    speak="options"
  />
);

export default PoetryTextStudy;
