import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Distinguish active and passive voice',
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
    options: ['to stress the action rather than who does it', 'to make the sentence longer and more formal', 'to hide the meaning of the action performed', 'to make the sentence a question for readers'],
    answer: 'to stress the action rather than who does it',
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
    options: ['the tense often shifts back to fit the reporting verb', "it stays exactly as it was in the speaker's words", 'it is dropped and replaced by a noun', 'it moves forward into the future tense'],
    answer: 'the tense often shifts back to fit the reporting verb',
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
    options: ['extreme exaggeration for emphasis or humour', 'a plain statement that is exact and accurate', 'a comparison that uses the words "like" or "as"', 'a gentle understatement that plays down a fact'],
    answer: 'extreme exaggeration for emphasis or humour',
    explanation: 'Hyperbole overstates for dramatic impact or comic effect.',
  },
  {
    prompt: 'Identify the complex sentence pattern that shows cause and effect:',
    options: ['Because it rained, the match was postponed.', 'The match was postponed and it rained.', 'It rained, and the match was a good one.', 'The match was postponed. It was raining.'],
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
