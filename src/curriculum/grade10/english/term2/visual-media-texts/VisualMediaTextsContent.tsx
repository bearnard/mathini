import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InvertedPyramid } from '../../../../../components/diagrams/english/EnglishPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'Reading an advertisement',
    content: (
      <div className="space-y-4">
        <Rule>An advertisement is built to persuade. Ask who it is for, what it wants you to do and how it tries to make you do it.</Rule>
        <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 text-left text-sm text-slate-700">
          <strong>An imaginary advert.</strong> A bright orange poster shows three laughing teenagers with bottles of a juice drink called FreshGulp. The headline in huge white letters reads &ldquo;Taste the summer!&rdquo; Small print at the bottom: &ldquo;Made with a small amount of fruit juice.&rdquo;
        </blockquote>
        <Worked
          title="Analyse it"
          steps={[
            <><strong>Target audience:</strong> teenagers, shown in the picture.</>,
            <><strong>Emotive language and image:</strong> laughing faces and &ldquo;Taste the summer!&rdquo; link the drink to fun.</>,
            <><strong>Font and layout:</strong> the headline is huge and the facts are in small print, so the eye goes to the feeling before the facts.</>,
            <><strong>What is left out:</strong> the small print shows that the drink is only partly fruit juice. Ask what is hidden as well as what is shown.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Fonts, headings and captions',
    content: (
      <div className="space-y-4">
        <Rule>The look of a text carries meaning. Font type and size, headings and captions all tell the reader what matters.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Font:</strong> the type and size of the letters. Large, bold type signals importance; small print is easily missed.</li>
          <li><strong>Heading:</strong> names a section and guides the reader&rsquo;s eye.</li>
          <li><strong>Caption:</strong> a title or comment attached to a picture or photograph. It can change how the picture is understood.</li>
        </ul>
        <Mistake>Do not describe a picture only by what you see. An answer must say what effect the choice has: for example, that capital letters create urgency.</Mistake>
      </div>
    ),
  },
  {
    title: 'Cartoons and caricature',
    content: (
      <div className="space-y-4">
        <Rule>A cartoon comments on people or events, often through caricature: an exaggerated portrayal that makes fun of a trait or appearance.</Rule>
        <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 text-left text-sm text-slate-700">
          <strong>An imaginary cartoon.</strong> A tiny learner sits under a gigantic pile of homework books that reaches the ceiling. A teacher says, &ldquo;Only a little homework tonight.&rdquo;
        </blockquote>
        <Worked
          title="Read the cartoon"
          steps={[
            <>Exaggeration: the pile is far bigger than any real pile. This caricature makes the point that the homework is too much.</>,
            <>Irony: the teacher&rsquo;s words say &ldquo;a little&rdquo; while the picture shows the opposite.</>,
            <>Purpose: to criticise the amount of homework in a humorous way, a gentle form of satire.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">Watch for stereotypes: a fixed and often biased view of how a type of person behaves. Ask whether an image or a joke depends on one.</p>
      </div>
    ),
  },
  {
    title: 'The report and the review',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700">
            <strong className="text-indigo-700">Report</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>a title</li>
              <li>an introduction: background, purpose and scope</li>
              <li>a body that answers who, why, where, when, what and how</li>
              <li>conclusions and recommendations</li>
              <li>formal, impersonal language in the third person, usually in the present tense</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700">
            <strong className="text-rose-700">Review</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>an individual&rsquo;s response to a book, film or event</li>
              <li>subjective: two reviewers may disagree</li>
              <li>relevant facts such as the title, the author or producer, the publisher and the price</li>
              <li>fair but honest, not just gushing or insulting</li>
            </ul>
          </div>
        </div>
        <Worked
          title="Outline a short report on a leaking school tap"
          steps={[
            <>Title: Report on the leaking tap at the Grade 10 cloakroom.</>,
            <>Introduction: background (the tap leaks daily), purpose (to ask for repairs) and scope (one tap).</>,
            <>Conclusion: the leak wastes water. Recommendation: the school should repair it this week.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Newspaper and magazine articles',
    content: (
      <div className="space-y-4">
        <Rule>A newspaper article states the most important facts first. A magazine article has a personal, lively style.</Rule>
        <InvertedPyramid />
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Newspaper:</strong> a short title and a clear sub-title, then who, what, how, when, where and why. State facts briefly and accurately, without slanting the truth.</li>
          <li><strong>Magazine:</strong> an attractive, interesting heading; a personal style that speaks directly to the reader; descriptive and figurative language; names, places and times where needed. There is no fixed format.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is a caricature?</>,
          <>Name two things a report&rsquo;s introduction contains.</>,
          <>In a newspaper article, where do the most important facts go?</>,
          <>Why are two reviews of the same film allowed to disagree?</>,
        ]}
        answers={[
          <>An exaggerated portrayal of a person or trait, used to mock or to make a point.</>,
          <>Any two of: background, purpose, scope.</>,
          <>At the beginning, in the first part of the article.</>,
          <>A review is subjective: it records one person&rsquo;s response to the work.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does an advertiser mean by the "target audience" of an advert?',
    options: ['The people who made the advert itself', 'The shop that sells the product on offer', 'The people the advert tries to persuade', 'The newspaper that printed the advert'],
    answer: 'The people the advert tries to persuade',
    explanation: 'Adverts are designed for a particular audience, such as teenagers or parents. The images and words are chosen to appeal to that group.',
  },
  {
    prompt: 'An advert shows a huge headline and a tiny line of small print at the bottom. What effect does this have?',
    options: ['The small print is noticed and the headline is missed', 'The reader ignores the headline', 'The headline is noticed; the small print is missed', 'The reader sees no difference between the two'],
    answer: 'The headline is noticed; the small print is missed',
    explanation: 'Font size directs attention. Advertisers often put the persuasive message in large type and the conditions in small print.',
  },
  {
    prompt: 'What is a caption?',
    options: ['A title or comment attached to a picture', 'A long paragraph at the end of an article', 'The name of the writer of an article', 'A list of the sources that were used'],
    answer: 'A title or comment attached to a picture',
    explanation: 'A caption sits above or below a picture and tells the reader what to notice.',
  },
  {
    prompt: 'What is a caricature in a cartoon?',
    options: ['A photograph of a person on the street', 'A caption written in capital letters', 'A map of a town and its roads', 'An exaggerated portrayal of a person'],
    answer: 'An exaggerated portrayal of a person',
    explanation: 'Cartoonists exaggerate features or behaviour to make a comment, often a satirical one.',
  },
  {
    prompt: 'A cartoon shows a teacher saying "Only a little homework" beside a giant pile of books. What technique makes this funny?',
    options: ['Rhyme between the two characters\' words', 'Onomatopoeia in the speech bubble itself', 'A flashback to an earlier day in class', 'Irony: the words and picture disagree'],
    answer: 'Irony: the words and picture disagree',
    explanation: 'The teacher\'s words do not match the picture, and that gap creates the humour and the criticism.',
  },
  {
    prompt: 'What is a stereotype?',
    options: ['A fixed, biased view of a type of person', 'A very detailed description of one person', 'A type of font used in newspapers', 'A summary of a short news article'],
    answer: 'A fixed, biased view of a type of person',
    explanation: 'Stereotypes simplify people into types. Readers should notice when an advert or a joke relies on one.',
  },
  {
    prompt: 'Which of the following belongs in the introduction of a report?',
    options: ['A list of recommendations', 'The writer\'s personal feelings about the topic', 'A poem about the topic', 'Background, purpose and scope'],
    answer: 'Background, purpose and scope',
    explanation: 'The introduction of a report explains why it was written and what it covers. Recommendations come at the end.',
  },
  {
    prompt: 'Which language suits a formal report?',
    options: ['Slang and abbreviations in the first person', 'Emotional language full of exclamation marks', 'Impersonal language in the third person', 'Jokes and long personal stories'],
    answer: 'Impersonal language in the third person',
    explanation: 'A report gives exact feedback on a situation in a formal register, with facts rather than feelings.',
  },
  {
    prompt: 'What should a review of a film or book include?',
    options: ['The full plot, with the ending included', 'Insults about the writer and the cast', 'A copy of the whole script and songs', 'Relevant facts and the reviewer\'s view'],
    answer: 'Relevant facts and the reviewer\'s view',
    explanation: 'A review gives the basic facts and then the reviewer\'s response. It should be fair but honest.',
  },
  {
    prompt: 'Why can two reviewers disagree about the same film?',
    options: ['One of them must have made a spelling mistake', 'Reviews have to agree with each other', 'A review is a list of facts that cannot differ', 'A review records one person\'s response'],
    answer: 'A review records one person\'s response',
    explanation: 'Reviews express judgement and taste, so reviewers may respond differently.',
  },
  {
    prompt: 'In a newspaper article, which information should come first?',
    options: ['The least important details', 'Background that is not related to the story', 'The most important facts', 'The writer\'s opinion about the story'],
    answer: 'The most important facts',
    explanation: 'Newspaper articles start with who, what, when, where and why, so a reader gets the essentials at once.',
  },
  {
    prompt: 'What does a newspaper article add below its title to help the reader?',
    options: ['A clear sub-title', 'A list of the writer\'s favourite words', 'A second, unrelated title', 'A picture of the writer'],
    answer: 'A clear sub-title',
    explanation: 'A succinct title plus a clear sub-title tell the reader quickly what the article is about.',
  },
  {
    prompt: 'Which feature is typical of a magazine article but not of a news report?',
    options: ['A neutral, factual tone throughout', 'Only the most important facts in the first sentence', 'A personal style that speaks directly to the reader', 'A formal list of recommendations at the end'],
    answer: 'A personal style that speaks directly to the reader',
    explanation: 'Magazine articles often use a lively, personal voice and descriptive language. News reports stay factual and brief.',
  },
];
