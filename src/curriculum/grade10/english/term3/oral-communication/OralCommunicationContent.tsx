import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'Listening for comprehension',
    content: (
      <div className="space-y-4">
        <Rule>Listening is a skill you can practise. You listen for different purposes: to be informed, to judge, to enjoy and to take part.</Rule>
        <ul className="grid gap-2 text-left text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-xl bg-slate-50 p-3"><strong>Informative:</strong> to learn facts, such as a news report.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Evaluative:</strong> to judge, such as an argument or an advert.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Appreciative:</strong> to enjoy, such as a story or a poem.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Interactive:</strong> to respond, such as in a discussion.</li>
        </ul>
        <Worked
          title="How the listening task works"
          steps={[
            <>A short text of about 200 words, or a two-minute clip, is read or played at least twice.</>,
            <>Take brief notes: names, numbers, key words and the speaker&rsquo;s attitude.</>,
            <>Answer the questions from your notes. The task is marked out of 15.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Delivering a speech: voice and body',
    content: (
      <div className="space-y-4">
        <Rule>How you say something is part of what you say. Voice and body language carry meaning.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Projection:</strong> the volume, clarity and distinctness of your voice so that everyone can hear you.</li>
          <li><strong>Intonation:</strong> the rise and fall of your voice. It marks questions and shows feeling.</li>
          <li><strong>Stress:</strong> giving force to an important word or syllable.</li>
          <li><strong>Gesture:</strong> a movement of the face or body that communicates, such as a nod.</li>
          <li><strong>Pause:</strong> a short silence that lets an important point sink in.</li>
        </ul>
        <Mistake>Reading your speech word for word with your eyes on the page loses the audience. Use short notes, look at the listeners and let your voice carry the meaning.</Mistake>
      </div>
    ),
  },
  {
    title: 'Debates, discussions and panels',
    content: (
      <div className="space-y-4">
        <Rule>Group speaking has conventions. They keep the exchange fair and let everyone be heard.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700"><strong className="text-indigo-700">Debate</strong><p className="mt-1">Two opposing teams try to convince the adjudicator and the audience that their view is more reasonable.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Panel discussion</strong><p className="mt-1">A group discusses a topic and answers questions from the audience or a chairperson.</p></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Forum or group discussion</strong><p className="mt-1">Members each speak on a different aspect of one topic.</p></div>
        </div>
        <Worked
          title="Turn-taking conventions"
          steps={[
            <>Allow others to give their opinion before you speak again.</>,
            <>Restate what someone said to be sure you understood.</>,
            <>Ask for clarification when you are unsure.</>,
            <>Intervene politely to redirect the discussion when it wanders.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Meetings and meeting procedure',
    content: (
      <div className="space-y-4">
        <Rule>A meeting follows a set order so that decisions are fair and recorded.</Rule>
        <ol className="space-y-1.5 text-left text-slate-700">
          <li><strong>1.</strong> The chairperson opens the meeting and notes who is present and who sent apologies.</li>
          <li><strong>2.</strong> The minutes of the previous meeting are read and confirmed.</li>
          <li><strong>3.</strong> The items on the agenda are discussed in order.</li>
          <li><strong>4.</strong> A proposal is made by a proposer, supported by a seconder, and members vote. What is agreed is a resolution.</li>
          <li><strong>5.</strong> The meeting closes and the secretary writes the minutes.</li>
        </ol>
        <p className="text-left text-sm text-slate-600">The agenda is an outline of what will be discussed and is sent out before the meeting. The minutes record what happened.</p>
      </div>
    ),
  },
  {
    title: 'Storytelling and introducing a speaker',
    content: (
      <div className="space-y-4">
        <Rule>Telling a story aloud needs a clear shape and a lively voice. Introducing a speaker needs a few accurate words.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700">
            <strong className="text-rose-700">Storytelling</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>an opening that catches attention</li>
              <li>a clear beginning, middle and end</li>
              <li>different voices for different characters</li>
              <li>pace and pauses that build suspense</li>
            </ul>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-sm text-slate-700">
            <strong className="text-sky-700">Introducing a speaker, or a vote of thanks</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>say who the speaker is and why they are here</li>
              <li>keep it short and warm</li>
              <li>for a vote of thanks, thank the speaker for something specific</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>How many times is a listening comprehension text read or played?</>,
          <>What does &ldquo;projection&rdquo; mean when you speak?</>,
          <>In a debate, who tries to convince the adjudicator?</>,
          <>What is the name of a decision that a meeting has agreed to?</>,
        ]}
        answers={[
          <>At least twice.</>,
          <>The volume, clarity and distinctness of your voice so that everyone can hear.</>,
          <>The two opposing teams.</>,
          <>A resolution.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Listening to a news report in order to learn facts is an example of which kind of listening?',
    options: ['Appreciative listening', 'Interactive listening', 'Evaluative listening', 'Informative listening'],
    answer: 'Informative listening',
    explanation: 'Informative listening is for gaining information. Appreciative listening is for enjoyment, evaluative for judging, and interactive for taking part.',
  },
  {
    prompt: 'You listen to an advert and ask yourself whether its claims are fair. Which kind of listening is this?',
    options: ['Informative listening', 'Appreciative listening', 'Interactive listening', 'Evaluative listening'],
    answer: 'Evaluative listening',
    explanation: 'Evaluative listening means judging what you hear, for example an argument or an advert.',
  },
  {
    prompt: 'How many times should a listening comprehension text be read or played before learners answer the questions?',
    options: ['Once, with no repeat', 'Ten times in a row', 'It is not read aloud at all', 'At least twice'],
    answer: 'At least twice',
    explanation: 'The text is read or played at least twice, so that learners can listen first for the general sense and then for detail.',
  },
  {
    prompt: 'What does "projection" mean in public speaking?',
    options: ['The volume and clarity of the voice', 'Showing pictures on a large screen', 'Reading the speech word for word', 'The speed at which you walk to the stage'],
    answer: 'The volume and clarity of the voice',
    explanation: 'Projection means making sure every listener can hear you clearly.',
  },
  {
    prompt: 'What is intonation?',
    options: ['The length of the speech in minutes', 'The order of the points in a speech', 'The rise and fall of the voice', 'The words on the speaker\'s notes'],
    answer: 'The rise and fall of the voice',
    explanation: 'Intonation is the pitch pattern of speech. It marks questions and statements and shows the speaker\'s attitude.',
  },
  {
    prompt: 'A speaker pauses briefly before an important sentence. What is the main effect?',
    options: ['It shows that the speaker has forgotten the speech', 'It gives the point weight for the audience', 'It makes the speech longer without purpose', 'It stops the audience from listening'],
    answer: 'It gives the point weight for the audience',
    explanation: 'A well-placed pause is a rhetorical device that emphasises what comes next.',
  },
  {
    prompt: 'Which description fits a debate?',
    options: ['One speaker reads a poem to a class', 'A group agrees on a decision without discussion', 'A speaker interviews a special guest', 'Two opposing teams try to win over a judge'],
    answer: 'Two opposing teams try to win over a judge',
    explanation: 'In a debate, opposing teams argue for and against a topic, and an adjudicator decides the winner.',
  },
  {
    prompt: 'In a group discussion, a learner says: "So are you saying we should hold the event on a Saturday?" Which turn-taking convention is this?',
    options: ['Interrupting to change the subject', 'Staying silent so that others speak', 'Ending the discussion', 'Restating to check understanding'],
    answer: 'Restating to check understanding',
    explanation: 'Restating what someone said confirms that you understood and invites them to clarify.',
  },
  {
    prompt: 'What is the job of the chairperson at a meeting?',
    options: ['To write the minutes of the whole meeting', 'To vote on every proposal on their own', 'To lead the meeting and keep order', 'To speak without being interrupted'],
    answer: 'To lead the meeting and keep order',
    explanation: 'The chairperson leads the meeting, guides the discussion and keeps to the agenda. The secretary usually writes the minutes.',
  },
  {
    prompt: 'At a meeting, a member suggests an action and a second member supports it. What is the supporting member called?',
    options: ['The adjudicator', 'The seconder', 'The chairperson', 'The interviewer'],
    answer: 'The seconder',
    explanation: 'A proposal is made by a proposer and supported by a seconder, and then the meeting votes.',
  },
  {
    prompt: 'What is a resolution?',
    options: ['A list of apologies for absence', 'A decision agreed by a meeting', 'The title of the whole agenda', 'A speech given by a guest speaker'],
    answer: 'A decision agreed by a meeting',
    explanation: 'A resolution is what the meeting agrees after a proposal is made, seconded and voted on. Minutes quote it word for word.',
  },
  {
    prompt: 'Which feature makes storytelling aloud more effective?',
    options: ['Reading the whole story in a monotone', 'Telling the ending first and then stopping', 'Avoiding eye contact with the audience', 'Character voices and suspenseful pauses'],
    answer: 'Character voices and suspenseful pauses',
    explanation: 'A lively voice and good pacing hold the audience. A monotone or no eye contact loses them.',
  },
  {
    prompt: 'What should a short introduction of a guest speaker include?',
    options: ['Who the speaker is and why they are there', 'A long argument about the topic', 'A criticism of the speaker\'s last talk', 'A summary of the speech that they are about to give'],
    answer: 'Who the speaker is and why they are there',
    explanation: 'An introduction is short and warm. It names the speaker and gives a reason for the audience to listen.',
  },
];
