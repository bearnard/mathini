import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EssayPlan } from '../../../../../components/diagrams/english/EnglishPictures';
import { CAPS_G10 } from '../../_shared/capsFacts';

/** An original poem written for this lesson. */
export const POEM_TITLE = 'Gogo\'s Hands';
export const POEM_LINES = [
  'Gogo\'s hands are maps of weather:',
  'every crease a river, every knuckle a stone.',
  'They kneaded bread before the sun was up',
  'and held a hundred babies,',
  'and now they rest on the blanket,',
  'quiet as two old birds.',
];

/** An original drama extract written for this lesson. */
export const DRAMA_LINES = [
  'MPHO: (standing at the window) The bus is late again.',
  'GRANDFATHER: (without turning) It is never late. We are early.',
  'MPHO: (laughing despite herself) You always say that.',
  'GRANDFATHER: (quietly) And I have always been right.',
];

/** A suggested split of a 330-word literary essay on a novel or drama (the task asks for 300 to 350). */
export const LIT_ESSAY_PARTS = [
  { label: 'Introduction: answer the topic', words: 50 },
  { label: 'Body 1: point, quote, explain', words: 80 },
  { label: 'Body 2: point, quote, explain', words: 80 },
  { label: 'Body 3: point, quote, explain', words: 80 },
  { label: 'Conclusion: link back', words: 40 },
];

const Box = ({ title, lines }: { title?: string; lines: string[] }) => (
  <div className="rounded-xl bg-slate-50 p-4 text-left text-slate-800">
    {title ? <p className="font-semibold">{title}</p> : null}
    {lines.map((l) => <p key={l} className="leading-7">{l}</p>)}
  </div>
);

export const learnSteps: LearnStep[] = [
  {
    title: 'Paper 2 at a glance',
    content: (
      <div className="space-y-4">
        <Rule>Paper 2 is {CAPS_G10.paper2Marks} marks in two hours: poetry ({CAPS_G10.poetryMarks}) and one section on a novel or a drama ({CAPS_G10.novelDramaEssayMarks + CAPS_G10.novelDramaContextualMarks}).</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Seen poems ({CAPS_G10.seenPoetryMarks} marks):</strong> four poems are set; you answer on two.</li>
          <li><strong>Unseen poem ({CAPS_G10.unseenPoetryMarks} marks):</strong> contextual questions on a poem you have not studied.</li>
          <li><strong>Novel or drama:</strong> one essay question ({CAPS_G10.novelDramaEssayMarks} marks, 300 to 350 words) and one contextual question ({CAPS_G10.novelDramaContextualMarks} marks), both from the same section.</li>
        </ul>
        <Worked
          title="Plan the two hours"
          steps={[
            <>Poetry: 40 minutes. Novel or drama: 70 minutes. Checking: 10 minutes.</>,
            <>Read the whole question paper first, then choose the poems and the section you know best.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Seen poetry: worked answers',
    content: (
      <div className="space-y-4">
        <Rule>Name the device, quote the words, and explain the effect. One point for each mark.</Rule>
        <Box title={POEM_TITLE} lines={POEM_LINES} />
        <Worked
          title="Questions, marks and model answers"
          steps={[
            <><strong>(2 marks)</strong> Name the figure of speech in line 1 and explain it. <em>A metaphor: the hands are called maps, so their lines show a long life of hard weather and work.</em></>,
            <><strong>(2 marks)</strong> What does &ldquo;quiet as two old birds&rdquo; suggest? <em>A simile: the hands are still, gentle and fragile now that her work is done.</em></>,
            <><strong>(2 marks)</strong> Describe the tone. <em>Tender and respectful: the speaker admires her grandmother.</em></>,
            <><strong>(2 marks)</strong> State the theme. <em>A lifetime of care leaves its record on a person&rsquo;s body.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Unseen poetry: a four-step plan',
    content: (
      <div className="space-y-4">
        <Rule>An unseen poem is only 10 marks, so keep to about 12 minutes and use the same steps every time.</Rule>
        <ol className="space-y-1.5 text-left text-slate-700">
          <li><strong>1. Read twice:</strong> the title, then the poem, then the poem again.</li>
          <li><strong>2. Name the situation:</strong> who speaks, to whom and about what.</li>
          <li><strong>3. Mark the images and the shift:</strong> underline imagery, repetition and any change of mood.</li>
          <li><strong>4. Answer:</strong> device, quotation, effect, in that order.</li>
        </ol>
        <Mistake>Do not retell the poem line by line. A &ldquo;what does the poem mean?&rdquo; answer needs the central idea in one clear sentence, supported by two images.</Mistake>
      </div>
    ),
  },
  {
    title: 'Contextual question on a drama',
    content: (
      <div className="space-y-4">
        <Rule>Use the extract: every answer should point to words or stage directions you can see.</Rule>
        <Box lines={DRAMA_LINES} />
        <Worked
          title="Questions, marks and model answers"
          steps={[
            <><strong>(2 marks)</strong> What do the stage directions show about Grandfather? <em>&ldquo;Without turning&rdquo; and &ldquo;quietly&rdquo; show that he is calm and unhurried.</em></>,
            <><strong>(3 marks)</strong> What does &ldquo;We are early&rdquo; show about his character? <em>He is patient and optimistic; he refuses to be rushed and turns a delay into a gift of time.</em></>,
            <><strong>(2 marks)</strong> Why does Mpho laugh &ldquo;despite herself&rdquo;? <em>She is frustrated by the delay, but his familiar saying amuses her.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The literary essay',
    content: (
      <div className="space-y-4">
        <Rule>A literary essay is an argument about the text: 300 to 350 words, marked on content (60%) and language and structure (40%).</Rule>
        <EssayPlan parts={LIT_ESSAY_PARTS} />
        <Worked
          title="From topic to thesis"
          steps={[
            <>Topic: &ldquo;The silence between family members can say more than words.&rdquo; Discuss.</>,
            <>Thesis: in the text I studied, what characters leave unsaid reveals their feelings more powerfully than what they say.</>,
            <>A short version of the same thesis: unsaid feelings can outweigh spoken words.</>,
            <>Each body paragraph: one scene, a short quotation, and an explanation of what the silence shows.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>(1 mark) How many marks is the poetry section of Paper 2 worth, and how are they shared?</>,
          <>(2 marks) Give the three steps of a short poetry answer.</>,
          <>(1 mark) From which sections must the essay and the contextual question come?</>,
          <>(1 mark) How many words should the novel or drama essay be?</>,
        ]}
        answers={[
          <>30 marks: 20 for seen poems and 10 for the unseen poem.</>,
          <>Name the device, quote the words, explain the effect.</>,
          <>Both from the same section: the novel or the drama.</>,
          <>300 to 350 words.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: '(1 mark) In Paper 2, how are the 30 poetry marks shared?',
    options: ['10 for seen poems and 20 for the unseen poem', '15 for the seen and 15 for the unseen', '30 for the unseen poem alone', '20 for seen poems and 10 for the unseen poem'],
    answer: '20 for seen poems and 10 for the unseen poem',
    explanation: 'Seen poetry carries 20 marks and the unseen poem 10.',
  },
  {
    prompt: '(1 mark) How many of the four seen poems must a learner answer on?',
    options: ['One', 'All four', 'Two', 'Three'],
    answer: 'Two',
    explanation: 'Four seen poems are set, and the learner answers on two of them.',
  },
  {
    prompt: '(2 marks) The line "Gogo\'s hands are maps of weather" calls the hands maps. Which figure of speech is this, and what does it suggest?',
    options: ['A metaphor: the lines record a long life', 'A simile: the hands are compared with "like"', 'Onomatopoeia: the hands make a sound', 'Hyperbole: the hands are far too big'],
    answer: 'A metaphor: the lines record a long life',
    explanation: 'One thing is said to be another, with no "like" or "as", so it is a metaphor. The lines on the hands are like a map of a life.',
  },
  {
    prompt: '(2 marks) The hands are "quiet as two old birds". What does this simile suggest?',
    options: ['They are still, gentle and fragile', 'They are noisy, busy and restless', 'They are angry, tense and clenched', 'They are bright, strong and quick'],
    answer: 'They are still, gentle and fragile',
    explanation: 'Old birds at rest are still and delicate, so the simile suggests the grandmother\'s peaceful old age.',
  },
  {
    prompt: '(2 marks) Which word best describes the tone of a poem about a grandmother\'s hands in which the speaker admires all the grandmother has done?',
    options: ['Tender and respectful', 'Sarcastic and mocking', 'Angry and bitter', 'Bored and distant'],
    answer: 'Tender and respectful',
    explanation: 'Admiration and loving detail give the poem a tender, respectful tone.',
  },
  {
    prompt: '(1 mark) What is the best first step with an unseen poem?',
    options: ['Answer the last question first', 'Count the number of lines', 'Copy the whole poem out', 'Read title and poem twice'],
    answer: 'Read title and poem twice',
    explanation: 'A first reading gives the situation and a second shows images and shifts. Then you answer.',
  },
  {
    prompt: '(3 marks) A grandfather says calmly, "It is never late. We are early." What does this show about his character?',
    options: ['Patient and unhurried', 'Angry about the long delay', 'Confused about the time of day', 'Afraid of the late bus'],
    answer: 'Patient and unhurried',
    explanation: 'He turns a delay into extra time. His calm words and stage directions show patience and a positive outlook.',
  },
  {
    prompt: '(2 marks) A stage direction says a character speaks "without turning". What does it most likely show?',
    options: ['The character is calm, at ease', 'The character cannot speak at all', 'The character is leaving the stage', 'The character is telling a lie'],
    answer: 'The character is calm, at ease',
    explanation: 'Stage directions reveal manner and attitude. Not turning suggests ease, not urgency.',
  },
  {
    prompt: '(2 marks) A contextual question asks "Why does Mpho laugh despite herself?" Which answer earns the most marks?',
    options: ['Because the extract says that she laughs.', 'She is annoyed but amused by his saying.', 'She laughs because the extract says so.', 'Because the grandfather is talking to her.'],
    answer: 'She is annoyed but amused by his saying.',
    explanation: 'A full answer gives both the frustration and the cause of the laughter. The other options repeat the extract or the question.',
  },
  {
    prompt: '(1 mark) A learner must answer one essay and one contextual question on a novel or drama. Which choice is allowed?',
    options: ['One from the novel and one from the drama', 'Two contextual questions from the drama', 'Both from the drama section', 'Two essay questions from the novel'],
    answer: 'Both from the drama section',
    explanation: 'The essay and the contextual question must come from the same section, either the novel or the drama.',
  },
  {
    prompt: '(1 mark) How is a Grade 10 literary essay on a novel or drama marked?',
    options: ['Handwriting 50%, length 50%', 'Content 10%, structure 90%', 'Language 80%, content 20%', 'Content 60%, language 40%'],
    answer: 'Content 60%, language 40%',
    explanation: 'Interpretation, depth of argument and grasp of the text carry 60%. Structure, flow and language carry 40%.',
  },
  {
    prompt: '(2 marks) Which is the best thesis for an essay on the topic "Silence can say more than words"?',
    options: ['This essay is about silence in a book we read.', 'Silence is a word that people can say out loud.', 'The story has a lot of words in it as well.', 'Unsaid feelings can outweigh spoken words.'],
    answer: 'Unsaid feelings can outweigh spoken words.',
    explanation: 'A thesis takes a clear position on the topic. The other options only repeat the topic or say nothing.',
  },
  {
    prompt: '(1 mark) In a 330-word essay with an introduction, three body paragraphs and a conclusion, roughly how many words suit each body paragraph?',
    options: ['About 80 words', 'About 10 words', 'About 200 words', 'About 5 words'],
    answer: 'About 80 words',
    explanation: 'A split such as 50 + 80 + 80 + 80 + 40 gives 330 words. Each body paragraph holds one point with a quotation and an explanation.',
  },
];
