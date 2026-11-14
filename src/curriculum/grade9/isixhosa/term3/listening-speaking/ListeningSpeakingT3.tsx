import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Debate, prepared speech, oral response to literature, and panel discussion',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners engaging in debate and oral literary discussions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Listening & Speaking focuses on <strong>debate, prepared speeches, oral responses to literature,</strong>{' '}
          and panel discussion.
        </p>
        <p className="text-slate-600">
          Learners argue points of view more clearly and respond to literature and social issues in spoken form.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these higher-order discussion words when preparing for debate, seminar, and panel speaking.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ingxoxo-mpikiswano"} phonetic={"[iŋ'xɔxɔ mpi'kiswano]"} meaning={"Debate"} lang="xh" />
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Isizathu"} phonetic={"[isi'zatu]"} meaning={"Reason"} lang="xh" />
          <PronunciationPlayer word={"Phendula"} phonetic={"[pʰɛn'dula]"} meaning={"Respond / answer"} lang="xh" />
          <PronunciationPlayer word={"Ingxoxo"} phonetic={"[iŋ'xɔxɔ]"} meaning={"Discussion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A debate is a formal discussion where...',
    options: ['two sides present arguments and counter-arguments', 'one speaker gives a talk and no one replies', 'speakers share opinions without needing evidence', 'the audience votes and the speakers stay silent'],
    answer: 'two sides present arguments and counter-arguments',
    explanation: 'Debate requires structured argument, evidence, and respectful opposition.',
  },
  {
    prompt: 'In a debate, a strong argument includes...',
    options: ['a clear claim, supporting evidence and logical reasoning', 'strong opinions stated with a loud voice', 'feelings that are shared without any facts', 'attacks on the other speaker as a person'],
    answer: 'a clear claim, supporting evidence and logical reasoning',
    explanation: 'Evidence-based arguments are more persuasive and intellectually honest.',
  },
  {
    prompt: 'An oral response to a literary text should show...',
    options: ['understanding shown through examples and interpretation', 'proof that you did not read the whole text', 'a display of emotion without any examples', 'ideas that have no link to the text'],
    answer: 'understanding shown through examples and interpretation',
    explanation: 'Responses supported by textual evidence demonstrate genuine comprehension.',
  },
  {
    prompt: 'A panel discussion differs from a debate because...',
    options: ['several experts discuss a topic from different views', 'one speaker talks while the rest listen', 'the topic is not chosen until the end', 'no questions are taken from the audience'],
    answer: 'several experts discuss a topic from different views',
    explanation: 'Panels explore nuance; debates typically have winners and losers.',
  },
  {
    prompt: 'When preparing a speech for debate, you should...',
    options: ['research well, plan your points and expect counter-arguments', 'go in without notes and hope that it goes well', 'learn the whole speech word for word and stop there', 'prepare only your own side and ignore the other'],
    answer: 'research well, plan your points and expect counter-arguments',
    explanation: 'Preparation shows respect for your audience and strengthens your position.',
  },
  {
    prompt: 'Responding to an opposing view in debate should...',
    options: ['acknowledge the point, then refute it politely with evidence', 'dismiss it angrily so that the point is lost', 'ignore it so that the judges forget it', 'agree with it at once to keep the peace'],
    answer: 'acknowledge the point, then refute it politely with evidence',
    explanation: 'Respectful engagement makes debates productive and credible.',
  },
  {
    prompt: 'A quotation from a text in oral response serves to...',
    options: ['support your interpretation with direct evidence', 'fill the time that is left in your talk', 'confuse the listeners with long extracts', 'avoid the need to analyse the text'],
    answer: 'support your interpretation with direct evidence',
    explanation: 'Direct quotes anchor your analysis and show close reading.',
  },
  {
    prompt: 'In a panel discussion, listening to other speakers helps you...',
    options: ['build on ideas, find common ground and ask good questions', 'plan your own speech while the others talk', 'wait for a chance to argue with every speaker', 'miss the main points that the others make'],
    answer: 'build on ideas, find common ground and ask good questions',
    explanation: 'Active listening in dialogue creates meaningful, coherent discussion.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Debate, prepared speech, oral response to literature, and panel discussion"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
