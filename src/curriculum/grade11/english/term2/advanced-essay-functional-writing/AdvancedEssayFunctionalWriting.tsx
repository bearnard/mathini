import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Discursive and reflective essay structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both essays appear in Paper 3. Understand their distinct structures before the exam.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Discursive essay</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Intro: introduce the issue with context</li>
              <li>Body: present each side with evidence and analysis</li>
              <li>Counter each point before moving on</li>
              <li>Conclusion: balanced judgement</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Reflective essay</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Intro: establish the experience or idea</li>
              <li>Body: narrate, reflect, and analyse feelings</li>
              <li>Explore what you learnt from the experience</li>
              <li>Conclusion: broader insight or personal growth</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Formal functional writing: agendas, minutes and reports',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          These texts follow strict conventions. Marks are allocated for correct format as well as content.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Agenda</strong>
            <p className="text-slate-600 text-sm">Lists items for discussion at a meeting. Includes: meeting details, numbered items, "Any Other Business" and closing.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Minutes</strong>
            <p className="text-slate-600 text-sm">Records what was discussed and decided at a meeting. Must be objective, formal, and in past tense.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Formal report</strong>
            <p className="text-slate-600 text-sm">Includes: title, introduction/purpose, findings/body, conclusion, recommendation. Formal, objective register.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Magazine articles and reviews',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both are accessible, public-facing texts but have different purposes and features.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Magazine article</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Headline and subheading for visual appeal</li>
              <li>Engaging opening (hook)</li>
              <li>Informative or entertaining body</li>
              <li>Semi-formal register; journalistic style</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Review</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Introduction: what is being reviewed</li>
              <li>Description: brief summary without spoilers</li>
              <li>Evaluation: strengths and weaknesses with criteria</li>
              <li>Recommendation: audience and rating</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Adapting register for audience and purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Register</strong> is the level of formality in language. Choosing the correct register is as important as content.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Formal</strong>
            <p className="text-slate-600 text-sm">Reports, minutes, formal letters. No contractions, objective tone, professional vocabulary.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Semi-formal</strong>
            <p className="text-slate-600 text-sm">Magazine articles, reviews. Accessible and engaging but still polished — some personality allowed.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Informal</strong>
            <p className="text-slate-600 text-sm">Friendly letters, diary entries. Personal, conversational, contractions acceptable.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the key feature that distinguishes a discursive essay from an argumentative one?',
    options: ['A discursive essay is always shorter than other essays', 'A discursive essay weighs both sides fairly, with no one-sided stance', 'A discursive essay must include a personal anecdote', 'A discursive essay leaves out evidence completely'],
    answer: 'A discursive essay weighs both sides fairly, with no one-sided stance',
    explanation: 'Unlike argumentative essays that defend one position, discursive essays explore the issue from multiple angles and reach a measured conclusion.',
  },
  {
    prompt: 'How does a formal report differ from a magazine article?',
    options: ['A report is informal, while a magazine article is always formal', 'A report is structured and objective; a magazine article is engaging', 'The two are identical in format and in purpose', 'A report is always shorter than a magazine article'],
    answer: 'A report is structured and objective; a magazine article is engaging',
    explanation: 'A formal report is analytical and objective; a magazine article is informative or entertaining and uses a semi-formal register.',
  },
  {
    prompt: 'What information is always included in formal meeting minutes?',
    options: [
      'The personal opinions of the chairperson only',
      'Date, time, attendees, discussions, decisions made, and action points',
      'Only the agenda for the next meeting',
      'A narrative account of the conversation in informal language',
    ],
    answer: 'Date, time, attendees, discussions, decisions made, and action points',
    explanation: 'Minutes are an accurate, objective record of what happened. They must be in formal, past-tense language.',
  },
  {
    prompt: 'What is the purpose of an agenda?',
    options: [
      'To record what was decided after a meeting',
      'To list items to be discussed at an upcoming meeting, in order',
      'To write a report on the results of a meeting',
      'To send a letter inviting people to a meeting',
    ],
    answer: 'To list items to be discussed at an upcoming meeting, in order',
    explanation: 'An agenda is distributed before a meeting so all participants know what will be discussed and can prepare.',
  },
  {
    prompt: 'What register suits a formal school-council report?',
    options: [
      'Casual and conversational, using slang for emphasis',
      'Formal and objective, with no contractions or personal opinion',
      'Emotional and persuasive, designed to convince readers',
      'Poetic and creative, using literary devices throughout',
    ],
    answer: 'Formal and objective, with no contractions or personal opinion',
    explanation: 'A school-council report is a formal functional document — it must present information objectively in professional language.',
  },
  {
    prompt: 'What is a reflective essay primarily about?',
    options: ['Reflecting light waves in a science experiment', 'Exploring your thoughts, feelings and growth in response to an experience', 'Comparing two different texts on the same topic', 'Arguing that the reader should change their behaviour'],
    answer: 'Exploring your thoughts, feelings and growth in response to an experience',
    explanation: 'Reflective essays blend narration with introspection — what happened, what it felt like, and what insight the writer gained.',
  },
  {
    prompt: 'Which feature most clearly identifies a magazine article as different from a formal report?',
    options: ['The use of headings and subheadings in the text', 'An engaging headline, semi-formal register and a journalistic style', 'A conclusion that gives formal recommendations', 'The absence of any personal voice from the writer'],
    answer: 'An engaging headline, semi-formal register and a journalistic style',
    explanation: 'Magazine articles use accessible language, eye-catching headlines, and a voice that engages the reader — unlike the objective tone of a formal report.',
  },
  {
    prompt: 'What is a review?',
    options: ['A factual report that presents the data of a survey', 'A balanced evaluation that describes, analyses and recommends', 'A personal letter to a friend about a film seen', 'An agenda for an arts event that will take place soon'],
    answer: 'A balanced evaluation that describes, analyses and recommends',
    explanation: 'A review includes brief description, evaluative commentary using criteria, and a recommendation to a specific audience.',
  },
  {
    prompt: 'What does "audience awareness" affect in functional writing?',
    options: [
      'Only the length of the piece',
      'Nothing — functional writing has a fixed style regardless of audience',
      'Register, vocabulary, tone, and the level of detail included',
      'Only the font and layout choices',
    ],
    answer: 'Register, vocabulary, tone, and the level of detail included',
    explanation: 'A report for a school principal differs in tone and detail from one written for peers. Audience shapes every language choice.',
  },
  {
    prompt: 'How do you correctly open a formal report?',
    options: ['"Dear Report" followed by a friendly greeting', 'A title, then an introduction that states the purpose and scope', 'A quotation from a famous author about the topic', 'A personal story about why the topic matters to you'],
    answer: 'A title, then an introduction that states the purpose and scope',
    explanation: 'A formal report begins with a title (identifying the subject) and an introduction that tells the reader what the report covers and why it was written.',
  },
];

const AdvancedEssayFunctionalWriting = () => (
  <CapsSubjectTopic
    title="Advanced Essay and Functional Writing"
    subtitle="Discursive and reflective essays, agendas, minutes, reports and magazine articles"
    learnSteps={learnSteps}
    task="gr11-advanced-essay-functional-writing-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default AdvancedEssayFunctionalWriting;
