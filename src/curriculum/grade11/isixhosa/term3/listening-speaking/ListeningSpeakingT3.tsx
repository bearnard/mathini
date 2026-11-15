import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In a formal debate, the "proposition" team is the side that:',
    options: [
      'Supports and argues in favour of the motion',
      'Argues against the motion',
      'Manages time and introduces speakers',
      'Decides who wins the debate',
    ],
    answer: 'Supports and argues in favour of the motion',
    explanation: 'The proposition (affirmative side) opens by presenting arguments for the motion; the opposition challenges them.',
  },
  {
    prompt: 'What is a "rebuttal" in a debate?',
    options: ['A direct challenge to a specific point made by the other team', 'The opening statement of the debate', 'A summary of all of your own arguments', 'The vote that is taken at the end of the debate'],
    answer: 'A direct challenge to a specific point made by the other team',
    explanation: 'A rebuttal dismantles the opponent\'s specific claim with counter-evidence — it is distinct from presenting new points.',
  },
  {
    prompt: 'Which feature is essential in a Grade 11 prepared speech on a social issue?',
    options: [
      'A clear position supported by two or three well-developed arguments',
      'Personal anecdotes only, with no factual evidence',
      'A summary of the opposing view without any response',
      'Reading directly from notes without any eye contact',
    ],
    answer: 'A clear position supported by two or three well-developed arguments',
    explanation: 'Grade 11 speeches require a sustained, evidence-based argument — not just opinions.',
  },
  {
    prompt: 'Which language feature characterises academic register in a seminar?',
    options: ['Formal vocabulary, complete sentences and hedging language', 'Slang and contractions in every sentence', 'Short, incomplete phrases without any verbs', 'Speaking in isiXhosa idioms and nothing else'],
    answer: 'Formal vocabulary, complete sentences and hedging language',
    explanation: 'Academic register uses precise language, complete grammatical structures, and hedging to convey appropriately tentative claims.',
  },
  {
    prompt: 'What does "hedging language" do in academic discussion?',
    options: ['States a claim with care (e.g. "It could be argued that…")', 'Makes a claim sound more forceful and aggressive', 'Contradicts the main argument of the speaker', 'Avoids using any evidence in a discussion'],
    answer: 'States a claim with care (e.g. "It could be argued that…")',
    explanation: 'Hedging acknowledges uncertainty or the possibility of other views — it is a hallmark of academic honesty.',
  },
  {
    prompt: 'When giving an oral response to a literary text, which step should come AFTER stating your interpretation?',
    options: ['Quote from the text to support your interpretation', 'Summarise the whole plot of the text', 'Describe the setting of the text in detail', 'Mention the biography of the author'],
    answer: 'Quote from the text to support your interpretation',
    explanation: 'The P–E–E approach requires: Point (interpretation) → Evidence (quotation) → Explanation (significance).',
  },
  {
    prompt: 'Which facilitation skill helps keep a seminar discussion on track?',
    options: [
      'Summarising points periodically to refocus the group',
      'Allowing only one person to speak for the entire session',
      'Changing the topic whenever it becomes challenging',
      'Ending the discussion before everyone has contributed',
    ],
    answer: 'Summarising points periodically to refocus the group',
    explanation: 'Periodic summaries consolidate progress and signal to participants what ground has been covered and where to go next.',
  },
  {
    prompt: 'In a debate, which team typically speaks FIRST?',
    options: [
      'The proposition (for the motion)',
      'The opposition (against the motion)',
      'The chairperson',
      'The floor (audience)',
    ],
    answer: 'The proposition (for the motion)',
    explanation: 'Convention places the proposition first so they can present the case that the opposition then challenges.',
  },
  {
    prompt: 'What structured approach is recommended for an oral response to a social issue?',
    options: ['State the problem, give causes, describe impact, propose a solution', 'Read a poem, sing a song and leave the room', 'List facts, apologise and then sit down', 'Agree with everyone, summarise and change the topic'],
    answer: 'State the problem, give causes, describe impact, propose a solution',
    explanation: 'This four-part structure ensures a logical, complete oral response that demonstrates analytical thinking.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Debate, prepared speech, seminar discussion, and oral response to issues"
    learnSteps={learnSteps}
    task="gr11-xho-listening-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
