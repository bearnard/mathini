import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, TwoColumns } from '../../../../../components/diagrams/english/Grade8Pictures';
import { isOpinion } from '../../../../../components/diagrams/english/grade8';

// Fact or opinion is decided by a tested helper (grade8.test.ts).
const verdict = (s: string) => (isOpinion(s) ? 'opinion' : 'fact');
const s1 = 'This article is the most inspiring one ever.';
const s2 = 'The article was published on Monday.';
const s3 = 'The report names two speakers.';
const c1 = 'The school garden is the best thing in Mthatha.';
const c2 = 'The garden has twelve vegetable beds.';
const c3 = 'Everyone should plant a tree.';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Media text or literary text?',
    content: slide(
      <>
        <Rule>A media text, such as a news report, gives verified current information. A literary text, such as a folktale, tells a story that carries a meaning.</Rule>
        <TwoColumns
          left={{ title: 'News report', lines: ['factual focus', 'current events'] }}
          right={{ title: 'Folktale', lines: ['narrative meaning', 'plot and characters'] }}
          aria="Two columns. A news report has a factual focus and covers current events. A folktale has narrative meaning, with a plot and characters."
        />
        <Worked
          title="Which genre is it?"
          steps={[
            <>&ldquo;Two learners won the quiz on Monday.&rdquo; It states something that happened and can be checked: a news report.</>,
            <>&ldquo;Once, a clever girl outwitted a greedy chief.&rdquo; It begins a story with characters: a folktale.</>,
            <>Comparing the two shows how form and purpose shape meaning and the reader&apos;s response.</>,
          ]}
        />
        <Mistake>Thinking a folktale has no point because it is not factual. It has a purpose too: it is built to carry an idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fact or opinion?',
    content: slide(
      <>
        <Rule>A fact can be checked. An opinion is a personal judgement. Words such as &ldquo;most&rdquo;, &ldquo;best&rdquo;, &ldquo;inspiring&rdquo; and &ldquo;should&rdquo; signal opinion.</Rule>
        <TwoColumns
          left={{ title: 'Fact', lines: ['can be checked', 'published on Monday'] }}
          right={{ title: 'Opinion', lines: ['personal judgement', 'most inspiring'] }}
          aria="Two columns. A fact can be checked, for example published on Monday. An opinion is a personal judgement, for example most inspiring."
        />
        <Worked
          title="Test each sentence"
          steps={[
            <>&ldquo;{s1}&rdquo; &ldquo;most inspiring&rdquo; is a judgement: {verdict(s1)}.</>,
            <>&ldquo;{s2}&rdquo; You could check the date: {verdict(s2)}.</>,
            <>&ldquo;{s3}&rdquo; You could count them: {verdict(s3)}.</>,
          ]}
        />
        <Mistake>Believing a sentence is a fact because it sounds sure. &ldquo;{c1}&rdquo; is an {verdict(c1)}; &ldquo;{c2}&rdquo; is a {verdict(c2)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Headlines and sources',
    content: slide(
      <>
        <Rule>A headline uses short, strong wording to grab attention. A direct quote from a witness is supporting evidence: it makes the report more credible.</Rule>
        <StepFlow
          items={[
            { label: 'Headline', note: 'grabs attention' },
            { label: 'Opening facts', note: 'who, what, when, where' },
            { label: 'Witness quote', note: 'supporting evidence' },
          ]}
          aria="A news report in three parts: a headline that grabs attention, opening facts, then a witness quote as supporting evidence."
        />
        <Worked
          title="Look at the wording"
          steps={[
            <>&ldquo;Community Fights Back&rdquo; uses the strong verb &ldquo;fights&rdquo; to catch the eye.</>,
            <>A plainer version, &ldquo;Residents hold a meeting&rdquo;, gives the same facts with less impact.</>,
            <>A quote such as &ldquo;We saw the water rise,&rdquo; said a resident, is evidence from a source who was there.</>,
          ]}
        />
        <Mistake>Treating a headline as a full summary or a source list. Its job is to attract the reader, not to give every detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conflict and theme',
    content: slide(
      <>
        <Rule>Conflict is the central struggle in a story and it drives the plot. Theme is the underlying idea running through the whole text.</Rule>
        <StepFlow
          items={[
            { label: 'Characters want different things' },
            { label: 'Conflict', note: 'the central struggle' },
            { label: 'Events follow', note: 'the plot moves' },
            { label: 'Theme', note: 'the underlying idea' },
          ]}
          aria="Four boxes in order: characters want different things, which creates conflict, events follow, and the story leaves an underlying idea called the theme."
        />
        <Worked
          title="A short invented folktale"
          steps={[
            <>Naledi wants to keep the last seed maize for planting. Her cousin wants to eat it now.</>,
            <>Conflict: Naledi against her cousin, patience against hunger. This struggle drives what happens next.</>,
            <>If the maize is planted and the village has food later, the theme is that planning for the future pays off.</>,
          ]}
        />
        <Mistake>Mixing up theme and plot. The plot is what happens; the theme is the idea behind it. Conflict is never a date or a list of references.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Is this a fact or an opinion? &ldquo;{c3}&rdquo;</li>
            <li>Which text type usually gives verified current information?</li>
            <li>What does the headline &ldquo;Community Fights Back&rdquo; mainly try to do?</li>
            <li>What is the conflict in a story?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{verdict(c3)}: &ldquo;should&rdquo; shows a personal judgement.</li>
            <li>A news report.</li>
            <li>Grab attention with strong wording.</li>
            <li>The central struggle that drives the plot.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which text type usually prioritises verified current information?',
    options: ['news report', 'folktale', 'dramatic monologue', 'personal poem'],
    answer: 'news report',
    explanation: 'News reports are designed to communicate factual current events.',
  },
  {
    prompt: 'Which statement is an opinion?',
    options: ['This article is the most inspiring one ever.', 'The article was published on Monday.', 'The report names two speakers.', 'The headline appears in bold.'],
    answer: 'This article is the most inspiring one ever.',
    explanation: 'Words like "most inspiring" express personal judgement.',
  },
  {
    prompt: 'A headline that says "Community Fights Back" mainly aims to...',
    options: ['grab attention with strong wording', 'list every source reference', 'show rhyme pattern', 'explain punctuation rules'],
    answer: 'grab attention with strong wording',
    explanation: 'Headlines often use concise impact language to attract readers.',
  },
  {
    prompt: 'Conflict in a literary text refers to...',
    options: ['the central struggle in the story', 'the publication date', 'the paragraph spacing style', 'the list of references'],
    answer: 'the central struggle in the story',
    explanation: 'Conflict drives plot and character decisions.',
  },
  {
    prompt: 'Which pair best compares genres?',
    options: ['news report: factual focus; folktale: narrative meaning', 'news report: rhyme focus; folktale: statistics', 'news report: dialogue script only; folktale: timetable', 'news report: no audience; folktale: no plot'],
    answer: 'news report: factual focus; folktale: narrative meaning',
    explanation: 'The genres differ in purpose and structure.',
  },
  {
    prompt: 'If a report includes a direct quote from a witness, this is...',
    options: ['supporting evidence', 'figurative language only', 'a stereotype', 'a stanza feature'],
    answer: 'supporting evidence',
    explanation: 'Quoted sources strengthen credibility in media writing.',
  },
  {
    prompt: 'Theme is best described as...',
    options: ['the underlying idea running through a text', 'the font size that is used for the title', 'the number of commas in a paragraph', 'the volume at which the speaker reads'],
    answer: 'the underlying idea running through a text',
    explanation: 'Theme reflects the deeper message or concept.',
  },
  {
    prompt: 'Why compare media and literary texts in one lesson?',
    options: ['to see how forms shape meaning and response', 'to avoid having to read the texts carefully', 'to leave evidence out of the answers', 'to memorise facts that have no link'],
    answer: 'to see how forms shape meaning and response',
    explanation: 'Comparison reveals how purpose and technique vary by genre.',
  },
];

const MediaLiteraryTexts = () => (
  <CapsSubjectTopic
    title="Media and Literary Texts"
    subtitle="Comparing information and story shaping across genres"
    learnSteps={learnSteps}
    task="gr8-media-literary-texts-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MediaLiteraryTexts;
