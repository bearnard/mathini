import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as p from '@/components/diagrams/english/paper1';

// Numbers come from paper1.ts (tested in paper1.test.ts and g12EngPaper1.test.ts). Every passage and sentence is an original teaching text.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Paper 1 at a glance and how to spend your time',
    content: slide(
      <>
        <Rule>Paper 1 (language in context) is worth {p.PAPER1.total} marks and lasts {p.PAPER1.minutes} minutes. Section A is the comprehension ({p.PAPER1.comprehension} marks, a text of {p.PAPER1.passageWords.min} to {p.PAPER1.passageWords.max} words, which may include a visual or graphic text), section B is the summary ({p.PAPER1.summary} marks) and section C is language structures and conventions ({p.PAPER1.language} marks). You have about {String(p.minutesPerMark()).replace('.', ',')} minutes for every mark, so spend time in proportion to the marks.</Rule>
        <InfoTable
          cols={[{ title: 'Section', w: 40 }, { title: 'Marks', w: 20 }, { title: 'About (min)', w: 40 }]}
          rows={[
            ['A: Comprehension', `${p.PAPER1.comprehension}`, `${p.sectionMinutes(p.PAPER1.comprehension)}`],
            ['B: Summary', `${p.PAPER1.summary}`, `${p.sectionMinutes(p.PAPER1.summary)}`],
            ['C: Language', `${p.PAPER1.language}`, `${p.sectionMinutes(p.PAPER1.language)}`],
            ['Total', `${p.PAPER1.total}`, `${p.PAPER1.minutes}`],
          ]}
          aria={`The Paper 1 plan. Section A comprehension: ${p.PAPER1.comprehension} marks, about ${p.sectionMinutes(p.PAPER1.comprehension)} minutes. Section B summary: ${p.PAPER1.summary} marks, about ${p.sectionMinutes(p.PAPER1.summary)} minutes. Section C language: ${p.PAPER1.language} marks, about ${p.sectionMinutes(p.PAPER1.language)} minutes. Total: ${p.PAPER1.total} marks in ${p.PAPER1.minutes} minutes.`}
        />
        <Worked
          title="Work out your time"
          steps={[
            `${p.PAPER1.minutes} ÷ ${p.PAPER1.total} = ${String(p.minutesPerMark()).replace('.', ',')} minutes for each mark.`,
            `Section A: ${p.PAPER1.comprehension} × ${String(p.minutesPerMark()).replace('.', ',')} = about ${p.sectionMinutes(p.PAPER1.comprehension)} minutes, including the reading.`,
            `Section B: about ${p.sectionMinutes(p.PAPER1.summary)} minutes, and section C about ${p.sectionMinutes(p.PAPER1.language)} minutes, with a few minutes left to check.`,
          ]}
        />
        <Mistake>Spending most of the time on one section. A ten-mark summary does not need as much time as a thirty-mark comprehension.</Mistake>
      </>,
    ),
  },
  {
    title: 'Kinds of comprehension questions',
    content: slide(
      <>
        <Rule>A literal question asks for something stated in the text, an inferential question asks what the text suggests, and an evaluative question asks for your judgement, supported by the text. Vocabulary questions ask for the meaning in context, and language questions ask about tone, figures of speech or the writer&rsquo;s purpose. Read the command word: &ldquo;state&rdquo; needs a fact, &ldquo;explain&rdquo; needs a reason, and &ldquo;discuss&rdquo; needs more than one point.</Rule>
        <InfoTable
          cols={[{ title: 'Kind', w: 22 }, { title: 'Asks for', w: 40 }, { title: 'How to answer', w: 38 }]}
          rows={[
            ['Literal', 'what the text states', 'find and give the fact'],
            ['Inferential', 'what the text suggests', 'use clues and explain'],
            ['Evaluative', 'your judgement', 'give an opinion with proof'],
            ['Vocabulary', 'meaning in context', 'give a short phrase'],
          ]}
          aria="A table of question kinds. Literal: what the text states; find and give the fact. Inferential: what the text suggests; use clues and explain. Evaluative: your judgement; give an opinion with proof. Vocabulary: meaning in context; give a short phrase."
        />
        <Worked
          title="Classify the question"
          steps={[
            '"State two reasons given for the closure." This is literal: the reasons are in the text.',
            '"What does the phrase \'a heavy silence\' suggest about the meeting?" This is inferential: the answer comes from clues.',
            '"Do you think the writer is fair? Support your view." This is evaluative.',
          ]}
        />
        <Mistake>Answering an inferential question with a copied sentence. Say what the text suggests in your own words and give the clue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Answering for the marks',
    content: slide(
      <>
        <Rule>Marks tell you how much to write: usually one point for each mark. A two-mark question needs two separate points. Answer in full sentences when the question says so, and keep quotations short and exact. Do not repeat the question, and do not give the same point twice. If the question asks for your own words, do not lift the text.</Rule>
        <InfoTable
          cols={[{ title: 'Marks', w: 20 }, { title: 'Points to give', w: 40 }, { title: 'Length', w: 40 }]}
          rows={[
            ['1', 'one point', 'a word or a short phrase'],
            ['2', 'two separate points', 'one or two sentences'],
            ['3', 'three points or one explained point', 'a short paragraph'],
            ['4', 'four points with explanation', 'a longer answer'],
          ]}
          aria="A table of marks and length. One mark: one point, a word or short phrase. Two marks: two separate points, one or two sentences. Three marks: three points or one explained point, a short paragraph. Four marks: four points with explanation, a longer answer."
        />
        <Worked
          title="Match the answer to the marks"
          steps={[
            'Question (2 marks): "Why did the farmer sell the land?" Answer: "He could not pay his debts, and the drought had ruined his crops." (two points)',
            'Question (1 mark): "Quote the word that shows he was angry." Answer: "furious".',
            'Check that each point is different, and that no point only repeats the first.',
          ]}
        />
        <Mistake>Writing one long sentence for four marks. Each mark needs its own clear point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual texts: advertisements and cartoons',
    content: slide(
      <>
        <Rule>A visual text uses images, words and layout together. In an advertisement ask who the target audience is, what the slogan promises, and how the picture, colour, headings, captions and the size and style of the font draw attention. In a cartoon look at exaggeration, symbols, speech bubbles and the caption to find the message or the satire. Explain the impact of the technique, not only the technique.</Rule>
        <InfoTable
          cols={[{ title: 'Feature', w: 28 }, { title: 'What to ask', w: 40 }, { title: 'Effect', w: 32 }]}
          rows={[
            ['Heading', 'how big and bold?', 'catches the eye'],
            ['Font', 'size and style', 'sets the tone'],
            ['Caption', 'what does it explain?', 'adds meaning'],
            ['Image', 'what does it suggest?', 'creates feeling'],
            ['Exaggeration', 'is it a cartoon?', 'shows satire'],
          ]}
          aria="A table of visual text features. Heading: how big and bold; it catches the eye. Font: size and style; it sets the tone. Caption: what does it explain; it adds meaning. Image: what does it suggest; it creates feeling. Exaggeration: in a cartoon it shows satire."
        />
        <Worked
          title="Explain a technique"
          steps={[
            'A bold, large heading in capital letters on a sale advertisement: it catches the eye and creates urgency.',
            'A small caption under a photo of a river says "Last year": it adds meaning by suggesting that the river has changed.',
            'A cartoon shows a politician with a huge head: the exaggeration suggests that he is full of himself.',
          ]}
        />
        <Mistake>Describing the picture without explaining its effect. Say what the technique does for the message or the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many minutes do you have for each mark in Paper 1?</>,
          <>What kind of question is &ldquo;What does the phrase suggest about the writer?&rdquo;</>,
          <>How many points does a three-mark question usually need?</>,
          <>Name one technique used in an advertisement and its effect.</>,
        ]}
        answers={[
          <>About {String(p.minutesPerMark()).replace('.', ',')} minutes.</>,
          <>An inferential question.</>,
          <>Three points, or one point that is explained.</>,
          <>For example a large heading that catches the eye.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many marks is Paper 1 worth in total?",
    options: ["30", "100", "70", "50"],
    answer: "70",
    explanation: "Paper 1 is language in context.",
  },
  {
    prompt: "How long is Paper 1?",
    options: ["2 hours", "1 hour", "3 hours", "90 minutes"],
    answer: "2 hours",
    explanation: "Paper 1 lasts 120 minutes.",
  },
  {
    prompt: "How many marks is the comprehension section?",
    options: ["10", "70", "15", "30"],
    answer: "30",
    explanation: "Section A is the comprehension.",
  },
  {
    prompt: "About how many minutes do you have for each mark in Paper 1?",
    options: ["3 minutes", "1,7 minutes", "0,5 minutes", "10 minutes"],
    answer: "1,7 minutes",
    explanation: "120 / 70 is about 1,7.",
  },
  {
    prompt: "About how many minutes should you spend on a 10-mark section?",
    options: ["30 minutes", "17 minutes", "10 minutes", "51 minutes"],
    answer: "17 minutes",
    explanation: "Ten marks at about 1,7 minutes a mark is about 17 minutes.",
  },
  {
    prompt: "Which kind of question asks for something that is stated in the text?",
    options: ["An inferential question", "An evaluative question", "A creative question", "A literal question"],
    answer: "A literal question",
    explanation: "The answer is found in the text.",
  },
  {
    prompt: "Which kind of question asks what the text suggests?",
    options: ["An inferential question", "A literal question", "A spelling question", "A punctuation question"],
    answer: "An inferential question",
    explanation: "You read the clues.",
  },
  {
    prompt: "Which kind of question asks for your judgement, supported by the text?",
    options: ["A literal question", "A spelling question", "An evaluative question", "A vocabulary question"],
    answer: "An evaluative question",
    explanation: "You give an opinion with proof.",
  },
  {
    prompt: "A command word in a question is \"state\". What is needed?",
    options: ["An essay", "Your own opinion only", "A drawing", "A fact from the text"],
    answer: "A fact from the text",
    explanation: "State means give the fact.",
  },
  {
    prompt: "A question for two marks usually needs how many points?",
    options: ["One point only", "Two separate points", "Ten points", "No points"],
    answer: "Two separate points",
    explanation: "One mark is usually one point.",
  },
  {
    prompt: "What should you do with a quotation in an answer?",
    options: ["Keep it short and exact", "Change the words", "Make it very long", "Leave it out and guess"],
    answer: "Keep it short and exact",
    explanation: "A short exact quotation shows the evidence.",
  },
  {
    prompt: "In an advertisement, what does the target audience tell you?",
    options: ["The date of the advert", "The price only", "Who the advert is aimed at", "The page number"],
    answer: "Who the advert is aimed at",
    explanation: "The audience shapes language and images.",
  },
  {
    prompt: "A large, bold heading on a poster mainly",
    options: ["hides the whole message", "lengthens the text a lot", "catches the reader's eye", "removes all of the colour"],
    answer: "catches the reader's eye",
    explanation: "Headings draw the eye.",
  },
  {
    prompt: "In a cartoon, exaggeration is most often used to",
    options: ["show satire or attitude", "give the date", "list prices", "name the artist"],
    answer: "show satire or attitude",
    explanation: "Exaggeration mocks or stresses a point.",
  },
];

const P1ComprehensionVisual = () => (
  <CapsSubjectTopic
    title="Comprehension Question Types and Visual Texts"
    subtitle="Paper 1 layout and time, kinds of comprehension questions, answering for the marks, advertisements and cartoons"
    learnSteps={learnSteps}
    task="gr12-p1-comprehension-visual-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default P1ComprehensionVisual;
