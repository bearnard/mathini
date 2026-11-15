import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ClueCards } from '../../../../../components/diagrams/english/EnglishLayoutPictures';
import { GENRE_CLUES, genreOfClue, strategyFor, wordCount } from '../../../../../components/diagrams/english/lessonSkills';

// Answers below come from the tested helpers in lessonSkills.ts (lessonSkills.test.ts).
const COLORS = { novel: '#818cf8', poetry: '#34d399', drama: '#fbbf24', media: '#fb7185' } as const;

const dramaClue = 'speaker names';
const dramaGenre = genreOfClue(dramaClue);
const scanStrategy = strategyFor('detail');
const skimStrategy = strategyFor('gist');
const inferStrategy = strategyFor('implied');

const summarySource =
  'Our school garden started with six rows of spinach. Learners water it every morning before class. Last term the spinach grew so well that the class sold bunches at the market on Saturday. The money paid for new seeds.';
const summaryText = 'The class garden grew spinach, and selling it paid for new seeds.';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Four genres, four ways of reading',
    content: slide(
      <>
        <Rule>Every genre has signposts. Find the signposts first, then read the way that genre asks you to.</Rule>
        <ClueCards
          cards={(Object.keys(GENRE_CLUES) as (keyof typeof GENRE_CLUES)[]).map((g) => ({
            title: g === 'media' ? 'Media text' : g[0].toUpperCase() + g.slice(1),
            clue: GENRE_CLUES[g].join(', '),
            color: COLORS[g],
          }))}
          aria="Four cards. Novel: chapters, paragraphs, narrator. Poetry: lines, stanzas, imagery. Drama: speaker names, dialogue, stage directions. Media text: headline, headings, photos and captions."
        />
        <Worked
          title="Which genre is this?"
          steps={[
            <>Read: <em>THANDI (whispering): Did you hear that?</em></>,
            <>Spot the signpost: a name in capitals and a bracketed note about how to speak. These are {dramaClue} and stage directions.</>,
            <>So the genre is <strong>{dramaGenre}</strong>. Read it as speech to be performed.</>,
          ]}
        />
        <Mistake>Using the same method for every text. A poem and a news article need different attention: look for imagery in a poem, and for headings and facts in a media text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skim, scan and infer',
    content: slide(
      <>
        <Rule>Skimming gets the general idea quickly. Scanning finds one specific detail, such as a name or a date. Inferring works out what is only hinted at.</Rule>
        <ClueCards
          cards={[
            { title: 'Skim', clue: 'Read headings and first lines for the gist.', color: '#818cf8' },
            { title: 'Scan', clue: 'Run your eyes over the text for one name, time or number.', color: '#34d399' },
            { title: 'Infer', clue: 'Join clues in the text with your own reasoning.', color: '#fbbf24' },
          ]}
          aria="Three cards. Skim: read headings and first lines for the gist. Scan: look for one name, time or number. Infer: join clues with reasoning."
        />
        <Worked
          title="A library notice"
          steps={[
            <>Question: <em>What is the notice mainly about?</em> You want the gist, so you <strong>{skimStrategy}</strong>.</>,
            <>Question: <em>At what time does the library close?</em> You want one detail, so you <strong>{scanStrategy}</strong> for the number.</>,
            <>Question: <em>Why might the librarian have put up this notice?</em> The answer is not stated, so you <strong>{inferStrategy}</strong>.</>,
          ]}
        />
        <Mistake>Reading every word slowly for every question. Choose the strategy that fits the question and you save time in the exam.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evidence and inference',
    content: slide(
      <>
        <Rule>An inference question asks you to use clues to work out an implied meaning. Back your answer with evidence: the words from the text that gave you the clue.</Rule>
        <Worked
          title="Read, infer, prove"
          steps={[
            <>Text: <em>Sipho kept looking at the clock and tapped his pencil.</em></>,
            <>Question: <em>How does Sipho feel?</em> The text does not say, so use the clues.</>,
            <>Clues: looking at the clock and tapping. He is probably <strong>impatient or nervous</strong>.</>,
            <>Evidence: write the proof in quotation marks: &quot;kept looking at the clock&quot;.</>,
          ]}
        />
        <Mistake>Guessing without the text, or copying a whole paragraph. A good answer gives your idea and a short quotation that shows where it came from.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summaries and revision habits',
    content: slide(
      <>
        <Rule>A good summary keeps the key points in concise form. Leave out small details, examples and your own opinions.</Rule>
        <Worked
          title="Summarise in one sentence"
          steps={[
            <>Read the source ({wordCount(summarySource)} words): <em>{summarySource}</em></>,
            <>Key points: the garden grew spinach, and the sales paid for new seeds.</>,
            <>Drop the detail: six rows, the morning watering, and the market day.</>,
            <>Write: <strong>{summaryText}</strong> ({wordCount(summaryText)} words).</>,
          ]}
        />
        <Mistake>Copying every sentence, or adding unrelated opinions. Before the exam, practise varied question types across all genres, not just one text type, and do some of it against the clock.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name the four genres you revise in Term 4.</li>
            <li>A question asks for a person&apos;s name in a long article. Which strategy do you use?</li>
            <li>Why must you give evidence in an inference answer?</li>
            <li>The summary of a 40-word paragraph is 60 words long. What went wrong?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Novel, poetry, drama and media texts.</li>
            <li>{scanStrategy[0].toUpperCase() + scanStrategy.slice(1)}: it finds one specific detail.</li>
            <li>It shows your answer comes from the text, not from guessing.</li>
            <li>A summary must be shorter than the text and keep only key points, so detail or opinion crept in.</li>
          </ol>
        }
      />,
    ),
  },
];

