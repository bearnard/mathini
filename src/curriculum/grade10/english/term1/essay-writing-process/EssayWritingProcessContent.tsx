import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '../../../../../components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EssayPlan } from '../../../../../components/diagrams/english/EnglishPictures';
import { annotate } from '../../_shared/annotate';

/** An original model opening for a narrative essay (written for this lesson). */
export const NARRATIVE_OPENING =
  'The lights went out at 7:14, in the middle of my maths homework. For a moment the whole street held its breath. Then I heard Gogo laugh in the dark and say, "Good. Now we can finally talk."';

export const NARRATIVE_NOTES: [string, string, string][] = [
  ['The lights went out at 7:14', 'hook', 'An exact time and a sudden event pull the reader in at once.'],
  ['the whole street held its breath', 'personification', 'The street is given a human action, which builds suspense.'],
  ['"Good. Now we can finally talk."', 'direct speech', 'Gogo\'s own words create immediacy and show her character.'],
];

/** An original descriptive example: the weak and the strong version of the same sentence. */
export const WEAK_DESCRIPTION = 'The very big, beautiful, old tree was really tall and lovely.';
export const STRONG_DESCRIPTION = 'The marula stood over the yard, its bark cracked like a dry riverbed, its shade smelling of warm dust.';

/** How the 330 words of a Grade 10 argumentative essay could be shared (the task asks for 300 to 350). */
export const ESSAY_PARTS = [
  { label: 'Introduction: your stance', words: 50 },
  { label: 'Body 1: point and proof', words: 80 },
  { label: 'Body 2: point and proof', words: 80 },
  { label: 'Body 3: point and proof', words: 80 },
  { label: 'Conclusion', words: 40 },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'The writing process',
    content: (
      <div className="space-y-4">
        <Rule>Good writing is made in stages: plan, draft, revise, edit, proofread, present.</Rule>
        <ol className="space-y-1.5 text-left text-slate-700">
          <li><strong>1. Plan:</strong> decide the topic, the purpose and the reader, then list your points.</li>
          <li><strong>2. Draft:</strong> write the first full version without stopping to polish.</li>
          <li><strong>3. Revise:</strong> improve the ideas, the order and the choice of words.</li>
          <li><strong>4. Edit:</strong> correct grammar, punctuation and spelling, and check that ideas and sentences link.</li>
          <li><strong>5. Proofread:</strong> read once more for small slips such as missing letters.</li>
          <li><strong>6. Present:</strong> write or type the final copy neatly.</li>
        </ol>
        <Worked
          title="In the examination"
          steps={[
            <>The essay in Paper 3 is marked out of 50 and should be 300 to 350 words long.</>,
            <>Marks are shared: content and planning 60%, language, style and editing 30%, structure 10%.</>,
            <>So spend the first minutes on a short plan: type of essay, three or four points, an ending. A plan costs minutes and earns marks.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The narrative essay',
    content: (
      <div className="space-y-4">
        <Rule>A narrative essay tells a story or a past event. It needs a convincing storyline, a gripping opening and an ending that is not predictable.</Rule>
        <AnnotatedText title="A model opening (written for this lesson)" text={NARRATIVE_OPENING} annotations={annotate(NARRATIVE_OPENING, NARRATIVE_NOTES)} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li>End with a satisfying or unpredictable ending: never one the reader saw coming.</li>
          <li>Use the past tense usually; the present tense can create immediacy.</li>
          <li>Use direct speech for immediacy (the reader hears the character&rsquo;s words); indirect speech keeps the reader at a distance.</li>
          <li>Keep only words that have a purpose: good stories are compact.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'The descriptive essay',
    content: (
      <div className="space-y-4">
        <Rule>A descriptive essay paints a picture in words. Use the senses and well-chosen words, not a pile of adjectives.</Rule>
        <Worked
          title="Weak to strong"
          steps={[
            <>Weak: <em>{WEAK_DESCRIPTION}</em> Every adjective is vague, and nothing can be seen.</>,
            <>Strong: <em>{STRONG_DESCRIPTION}</em></>,
            <>The strong version names a real tree, uses a simile (&ldquo;like a dry riverbed&rdquo;) and appeals to touch and smell.</>,
            <>Another strong sentence, this time for sound and smell: <em>The rank hummed with horns and smelled of frying vetkoek.</em></>,
          ]}
        />
        <Mistake>Piling up adjectives (&ldquo;very big, beautiful, old, lovely&rdquo;) does not make a description vivid. Specific nouns, strong verbs and one or two exact images work better.</Mistake>
      </div>
    ),
  },
  {
    title: 'The argumentative essay',
    content: (
      <div className="space-y-4">
        <Rule>An argumentative essay argues for or against something. It is one-sided on purpose: the conclusion says clearly where you stand and why.</Rule>
        <EssayPlan parts={ESSAY_PARTS} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li><strong>Introduction:</strong> state your stance on the topic in one clear sentence.</li>
          <li><strong>Each body paragraph:</strong> one point, proof or an example, and a sentence explaining why it matters.</li>
          <li><strong>Conclusion:</strong> say again where you stand and leave the reader with a final thought.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">A discursive essay, which you meet in Grade 11, presents both sides and shows its view only in the conclusion.</p>
      </div>
    ),
  },
  {
    title: 'Edit like a marker',
    content: (
      <div className="space-y-4">
        <Rule>Marks are lost to avoidable slips. Keep a short checklist and use it on every essay.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Did I answer the topic, and stay on it?</li>
          <li>Is each paragraph about one idea, and do my linking words show how ideas connect?</li>
          <li>Is my tense steady, my register right and my punctuation correct?</li>
          <li>Does my ending feel finished, not just stopped?</li>
        </ul>
        <Mistake>Changing tense by accident (&ldquo;I opened the door and I see a man&rdquo;) and writing everything about the topic <em>except</em> what the topic asks are two of the most common ways to lose marks.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Put these in order: draft, plan, proofread, revise, edit.</>,
          <>What are the three mark weightings for the Grade 10 essay in Paper 3?</>,
          <>Which essay type is one-sided and ends by stating where the writer stands?</>,
          <>Why is <em>{WEAK_DESCRIPTION}</em> a weak description?</>,
        ]}
        answers={[
          <>Plan, draft, revise, edit, proofread.</>,
          <>Content and planning 60%, language, style and editing 30%, structure 10%.</>,
          <>The argumentative essay.</>,
          <>It piles up vague adjectives and gives the reader nothing specific to see, hear, smell or touch.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which list shows the stages of the writing process in the correct order?',
    options: ['Plan, draft, revise, edit, proofread, present', 'Draft, plan, present, edit, revise, proofread', 'Proofread, plan, draft, present, revise, edit', 'Present, draft, plan, edit, proofread, revise'],
    answer: 'Plan, draft, revise, edit, proofread, present',
    explanation: 'You plan first, draft a full version, improve it (revise), correct language (edit), check for slips (proofread) and finally present the finished copy.',
  },
  {
    prompt: 'During which stage of the writing process do you correct grammar, punctuation and spelling?',
    options: ['Editing', 'Planning', 'Drafting', 'Presenting'],
    answer: 'Editing',
    explanation: 'Editing corrects the language of a text. Planning decides what to write, drafting writes it and presenting produces the final copy.',
  },
  {
    prompt: 'How many marks is the essay in the Grade 10 writing paper (Paper 3) worth?',
    options: ['25', '30', '100', '50'],
    answer: '50',
    explanation: 'The essay carries 50 marks. The two transactional texts are worth 25 marks each, which makes the paper 100 marks in total.',
  },
  {
    prompt: 'How many words should a Grade 10 essay in Paper 3 be?',
    options: ['150 to 200 words', '180 to 200 words', '400 to 450 words', '300 to 350 words'],
    answer: '300 to 350 words',
    explanation: 'The Grade 10 essay is 300 to 350 words. Transactional texts are 180 to 200 words, and the longer essays belong to Grades 11 and 12.',
  },
  {
    prompt: 'In the marking of a Grade 10 essay, which part carries the largest share of the marks?',
    options: ['Language, style and editing', 'Content and planning', 'Structure', 'Neat handwriting'],
    answer: 'Content and planning',
    explanation: 'Content and planning count for 60%, language, style and editing for 30% and structure for 10%.',
  },
  {
    prompt: 'Which of these is a feature of a good narrative essay?',
    options: ['A list of facts about the topic and no storyline', 'A gripping opening and an unpredictable ending', 'Long descriptive paragraphs with no events at all', 'A balanced argument for and against the topic'],
    answer: 'A gripping opening and an unpredictable ending',
    explanation: 'A narrative tells a story, so it needs a gripping opening, a convincing storyline and a fresh ending. Facts and arguments belong to other essay types.',
  },
  {
    prompt: 'A writer uses direct speech in a narrative essay: "Come here!" shouted Anele. What effect does direct speech usually create?',
    options: ['Distance, because the narrator reports at second hand', 'A formal tone suited to a business letter', 'Immediacy: the reader hears the character\'s words', 'A neutral summary of the story as a whole'],
    answer: 'Immediacy: the reader hears the character\'s words',
    explanation: 'Direct speech brings the reader close to the action. Indirect speech reports what was said and keeps the reader at a distance.',
  },
  {
    prompt: 'Which sentence is the best example of vivid descriptive writing?',
    options: ['The taxi rank was very busy and really big and nice.', 'The rank hummed with horns and smelled of frying vetkoek.', 'There were many taxis and many people at the rank, all day.', 'The taxi rank was a place where taxis stop and wait.'],
    answer: 'The rank hummed with horns and smelled of frying vetkoek.',
    explanation: 'It appeals to sound and smell with specific details. The other sentences use vague words that give the reader nothing to picture.',
  },
  {
    prompt: 'In a descriptive essay, why should a writer avoid piling up adjectives?',
    options: ['Specific nouns and strong verbs describe better than adjectives', 'Adjectives are not allowed in essays of any kind', 'Adjectives change the tense of the sentence in which they stand', 'A descriptive essay should consist of verbs without any nouns'],
    answer: 'Specific nouns and strong verbs describe better than adjectives',
    explanation: 'Good descriptions are often built from few adjectives. Vague stacking ("very big, beautiful, lovely") tells the reader little.',
  },
  {
    prompt: 'What is the main purpose of an argumentative essay?',
    options: ['To argue for or against a view with proof', 'To tell a story from the past in order', 'To describe a place using the five senses', 'To list the parts of a letter in order'],
    answer: 'To argue for or against a view with proof',
    explanation: 'An argumentative essay takes a side and defends it with reasons and proof. A narrative tells a story and a descriptive essay creates a picture.',
  },
  {
    prompt: 'Where should the writer of an argumentative essay make their stance clear?',
    options: ['In one of the middle paragraphs alone', 'Nowhere: the reader must guess', 'In the title of the essay alone', 'In the introduction and conclusion'],
    answer: 'In the introduction and conclusion',
    explanation: 'A clear stance at the start guides the reader, and restating it at the end shows where the argument has led.',
  },
  {
    prompt: 'What should each body paragraph of an argumentative essay contain?',
    options: ['One point with proof, explained', 'Three unrelated ideas with no proof', 'A copy of the introduction', 'A list of questions with no answers'],
    answer: 'One point with proof, explained',
    explanation: 'Each body paragraph develops a single point so the argument stays clear and convincing.',
  },
  {
    prompt: 'A learner writes "I opened the door and I see a man in the passage." Which error should the learner correct when editing?',
    options: ['A change of tense from past to present', 'A spelling mistake in the word "passage"', 'A missing full stop at the beginning', 'The use of the word "door"'],
    answer: 'A change of tense from past to present',
    explanation: '"Opened" is past tense but "see" is present tense. Keeping the tense steady is a basic editing check.',
  },
];
