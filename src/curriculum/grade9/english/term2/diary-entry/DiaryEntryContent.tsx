import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a diary entry?',
    content: (
      <div className="space-y-4">
        <Rule>A diary entry is a portrayal of daily events, written from the writer&rsquo;s own point of view. It tells what happened and gives the writer&rsquo;s evaluation of the day or event.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>It is a personal text. Most diaries are private, so the writer can be honest.</li>
          <li>It is written in the <strong>first person</strong> (I, my, we).</li>
          <li>The writer says what happened and also how they feel about it.</li>
          <li>The tone is set by the nature of the entry: it may be excited, sad, angry or calm.</li>
        </ul>
        <Mistake>A diary entry is not a news report. Do not write about yourself as &ldquo;he&rdquo; or &ldquo;she&rdquo;, and do not only list facts. Say what you think and feel.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model entry, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model diary entry" note="An original model written for this lesson.">
          <p><strong>14 March, 20:30</strong></p>
          <p>Dear Diary,</p>
          <p>Today was our school cross-country race and I nearly stayed home. My legs felt heavy from the start. At the hill by the dam I wanted to stop, but I told myself to keep going. I finished 12th out of 40 runners.</p>
          <p>I am proud of myself, even though I am exhausted. Tomorrow I will stretch before training.</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'Date and time', what: 'at the top, so the entry belongs to a day.' },
            { name: 'Greeting', what: 'the line "Dear Diary," is common but optional.' },
            { name: 'Events', what: 'what happened, in the order it happened.' },
            { name: 'Evaluation', what: 'how the writer feels about the day and what they learnt.' },
            { name: 'Closing thought', what: 'a hope or a plan for tomorrow.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language and tone',
    content: (
      <div className="space-y-4">
        <Rule>The language of a diary entry is simple and to the point. It is closer to speech than to a school report, but it must still be correct.</Rule>
        <Worked
          title="Changing a report into a diary sentence"
          steps={[
            <><strong>Report:</strong> &ldquo;The learner finished twelfth in the race.&rdquo; This is third person and gives no feelings.</>,
            <><strong>Diary:</strong> &ldquo;I finished twelfth and I was so proud!&rdquo; This is first person and gives a feeling.</>,
            <>Use the <strong>past tense</strong> for what happened, the <strong>present tense</strong> for how you feel now, and the <strong>future tense</strong> for what you plan to do.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">Choose words that match the tone of the entry. A sad entry uses quieter words than an excited one.</p>
      </div>
    ),
  },
  {
    title: 'Planning and writing',
    content: (
      <div className="space-y-4">
        <Rule>Use the writing process for a diary entry in a test or an exam: plan, draft, revise, edit and proof-read.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Plan:</strong> choose one day or event and note the main happenings in order.</li>
          <li><strong>Draft:</strong> write in the first person, adding your feelings.</li>
          <li><strong>Revise and edit:</strong> check the order, cut what is not needed and fix the tone.</li>
          <li><strong>Proof-read:</strong> check spelling, punctuation and tenses.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check your entry',
    content: (
      <div className="space-y-4">
        <Rule>Before you hand in a diary entry, ask these questions.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Is there a date at the top?</li>
          <li>Is it in the first person?</li>
          <li>Does it tell what happened and also give my evaluation?</li>
          <li>Does the tone fit the event?</li>
          <li>Is the language simple, and are spelling and tenses correct?</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Whose view does a diary entry show, and in which person?</>,
          <>Name two things a diary entry gives besides the events of the day.</>,
          <>Which tense do you use for what happened?</>,
          <>What decides the tone of an entry?</>,
        ]}
        answers={[
          <>The writer&rsquo;s own, in the first person.</>,
          <>The writer&rsquo;s evaluation or feelings, and a closing thought or plan.</>,
          <>The past tense.</>,
          <>The nature of the entry, for example an exciting event or a sad one.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a diary entry?',
    options: ['A formal request sent to a company', 'A portrayal of the writer\'s own day', 'A set of rules for an organisation', 'A list of facts about another person'],
    answer: 'A portrayal of the writer\'s own day',
    explanation: 'A diary entry is a portrayal of daily events and the writer\'s evaluation of the day or event.',
  },
  {
    prompt: 'From whose point of view is a diary entry written?',
    options: ['A newspaper editor\'s', 'A teacher\'s who marks it', 'A neighbour\'s who reads it', 'The writer\'s own'],
    answer: 'The writer\'s own',
    explanation: 'A diary is written from the writer\'s own point of view, in the first person.',
  },
  {
    prompt: 'Which pronoun is most appropriate in a diary entry?',
    options: ['I', 'He', 'They', 'One'],
    answer: 'I',
    explanation: 'The first person (I, my, we) is the most appropriate approach for a diary.',
  },
  {
    prompt: 'What does the writer give in the evaluation part of an entry?',
    options: ['The address of the writer', 'The rules of the writer\'s club', 'How they feel about the day', 'A list of qualifications'],
    answer: 'How they feel about the day',
    explanation: 'The evaluation part shows what the writer thinks and feels about the day or event.',
  },
  {
    prompt: 'What decides the tone of a diary entry?',
    options: ['The length of the date and time', 'The size of the diary page used', 'The nature of the entry itself', 'The colour of the diary cover page'],
    answer: 'The nature of the entry itself',
    explanation: 'The tone will be decided by the nature of the entry, for example excited for good news or sad for a loss.',
  },
  {
    prompt: 'Which kind of language suits a diary entry?',
    options: ['Legal and full of clauses', 'Technical with long lists', 'Simple and to the point', 'Impersonal and passive'],
    answer: 'Simple and to the point',
    explanation: 'The language choice for a diary is simple and to the point.',
  },
  {
    prompt: 'What should appear at the top of a diary entry?',
    options: ['The signature of the writer', 'A list of referees', 'The terms of reference', 'The date'],
    answer: 'The date',
    explanation: 'A date (and often the time) at the top shows which day the entry belongs to.',
  },
  {
    prompt: 'Which sentence belongs in a diary entry?',
    options: ['The learner was nervous before the race.', 'I was so nervous before the race today.', 'All competitors must report at nine.', 'Yours faithfully, the race organiser.'],
    answer: 'I was so nervous before the race today.',
    explanation: 'This sentence is in the first person and gives a feeling, as a diary entry should.',
  },
  {
    prompt: 'Which sentence is NOT suitable for a diary entry?',
    options: ['I finished twelfth and felt proud.', 'Tomorrow I will stretch before training.', 'The learner came twelfth in the race.', 'My legs felt heavy from the start.'],
    answer: 'The learner came twelfth in the race.',
    explanation: 'It is in the third person and gives no feelings, so it reads like a report, not like a diary.',
  },
  {
    prompt: 'Which tense is used for the events of the day?',
    options: ['The future tense', 'The past tense', 'The passive voice only', 'The imperative'],
    answer: 'The past tense',
    explanation: 'Events that have happened are told in the past tense. The present tense is used for how you feel and the future for plans.',
  },
  {
    prompt: 'Which closing thought fits a diary entry?',
    options: ['Yours sincerely, the writer.', 'Tomorrow I will try again.', 'Please find my CV attached.', 'This meeting is now closed.'],
    answer: 'Tomorrow I will try again.',
    explanation: 'A diary entry may end with a thought or plan for tomorrow, not with a formal closing.',
  },
  {
    prompt: 'Is "Dear Diary," required at the start of an entry?',
    options: ['Yes, each entry must include it', 'Yes, but just in an exam paper', 'No, it is common but optional', 'No, it is not allowed in diaries'],
    answer: 'No, it is common but optional',
    explanation: 'A greeting such as "Dear Diary," is common but optional. The date is more important.',
  },
  {
    prompt: 'Which step of the writing process is checking spelling and tenses?',
    options: ['Planning ideas', 'Drafting a text', 'Proof-reading it', 'Presenting a text'],
    answer: 'Proof-reading it',
    explanation: 'Proof-reading is the final check of spelling, punctuation and tenses before the text is presented.',
  },
  {
    prompt: 'Why is a news-style list of facts a weak diary entry?',
    options: ['It gives no evaluation or feeling', 'It uses the past tense too much', 'It has a date and time at the top', 'It is written by just one writer'],
    answer: 'It gives no evaluation or feeling',
    explanation: 'A diary entry should show what the writer thinks and feels. A list of facts alone does not.',
  },
];
