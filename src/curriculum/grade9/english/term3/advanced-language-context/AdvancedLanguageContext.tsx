import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Distinguish active and passive voice',
    image: {
      src: '/curriculum/grade9/english/term3/advanced-language-context/image1.jpg',
      alt: 'learner transforming active voice sentences to passive voice and comparing effects',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Active voice emphasizes the subject performing the action ("The player scored a goal"). Passive voice 
          emphasizes the action or recipient ("A goal was scored by the player"). Choosing the right voice affects 
          focus, clarity, and style.
        </p>
      </div>
    ),
  },
  {
    title: 'Transform direct and reported speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reported speech paraphrases what someone said, shifting tense and pronouns. Recognizing these transformations 
          and applying them correctly strengthens your ability to represent ideas accurately across contexts.
        </p>
      </div>
    ),
  },
  {
    title: 'Identify figurative language in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Figurative language—metaphors, similes, personification, hyperbole—creates vivid imagery and emotional 
          impact. Understanding how these techniques work in complex sentences improves both reading comprehension and 
          writing expressiveness.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is in active voice?',
    options: ['The teacher marked the papers.', 'The papers were marked by the teacher.', 'Papers marking was done.', 'Marking of papers occurred.'],
    answer: 'The teacher marked the papers.',
    explanation: 'Active voice places the subject (teacher) as the doer of the action.',
  },
  {
    prompt: 'Why might a writer choose passive voice?',
    options: ['to emphasize the action rather than who performs it', 'to make writing longer only', 'to avoid meaning', 'to confuse readers'],
    answer: 'to emphasize the action rather than who performs it',
    explanation: 'Passive voice shifts focus to the action or recipient instead of the subject.',
  },
  {
    prompt: 'Transform to passive voice: "The chef prepared the meal."',
    options: ['The meal was prepared by the chef.', 'The meal prepared the chef.', 'Preparing meal was done.', 'The chef will prepare meals.'],
    answer: 'The meal was prepared by the chef.',
    explanation: 'In passive voice, the object of the active sentence becomes the subject.',
  },
  {
    prompt: 'What happens to the verb in reported speech?',
    options: ['the tense often shifts to match the reporting verb', 'it stays exactly the same always', 'the verb disappears', 'it becomes a noun'],
    answer: 'the tense often shifts to match the reporting verb',
    explanation: 'Reported speech typically backshifts tense: "I will come" → "She said she would come."',
  },
  {
    prompt: 'Convert to reported speech: "I am tired," he said.',
    options: ['He said he was tired.', 'He said I am tired.', 'He will say he is tired.', 'He said tired he is.'],
    answer: 'He said he was tired.',
    explanation: 'Reported speech changes "I" to "he" and "am" to "was".',
  },
  {
    prompt: 'Which is an example of metaphor?',
    options: ['Her heart is a stone.', 'Her heart is like a stone.', 'Her heart is beating.', 'She has a strong heart.'],
    answer: 'Her heart is a stone.',
    explanation: 'Metaphor states one thing IS another without using "like" or "as".',
  },
  {
    prompt: 'What effect does hyperbole create?',
    options: ['extreme exaggeration for emphasis or humour', 'complete accuracy only', 'boredom and passivity', 'confusion without effect'],
    answer: 'extreme exaggeration for emphasis or humour',
    explanation: 'Hyperbole overstates for dramatic impact or comic effect.',
  },
  {
    prompt: 'Identify the complex sentence pattern that shows cause and effect:',
    options: ['Because it rained, the match was postponed.', 'The match was postponed.', 'It rained.', 'The match is fun.'],
    answer: 'Because it rained, the match was postponed.',
    explanation: 'The subordinate clause (Because...) explains why the main action occurred.',
  },
];

const AdvancedLanguageContext = () => (
  <CapsSubjectTopic
    title="Advanced Language in Context"
    subtitle="Active and passive voice, reported speech, figurative language and complex sentences"
    learnSteps={learnSteps}
    task="gr9-advanced-language-context-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default AdvancedLanguageContext;
