import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Exam Strategies for the FET Phase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 is a significant step up. Effective exam preparation requires deliberate strategies, not just more hours of reading.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Active recall</strong>
            <p className="text-slate-600 text-sm">Test yourself on content rather than re-reading. Use flashcards, past papers, or mind-maps from memory.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Spaced repetition</strong>
            <p className="text-slate-600 text-sm">Review material at increasing intervals (today, in 3 days, in a week) to move it to long-term memory.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Past paper practice</strong>
            <p className="text-slate-600 text-sm">Practise under exam conditions using previous NSC papers to learn question styles and time management.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Concept mapping</strong>
            <p className="text-slate-600 text-sm">Create visual connections between ideas to understand, not just memorise, the material.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Workload Management Across Subjects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Managing a full Grade 11 workload requires a <strong>study timetable</strong> that balances all subjects and allocates more time to weaker areas.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Building an effective study timetable:</p>
          <ol className="list-decimal list-inside text-slate-600 text-sm space-y-1">
            <li>List all subjects and their upcoming assessment dates.</li>
            <li>Allocate study blocks — prioritise weaker subjects.</li>
            <li>Build in short breaks (e.g., Pomodoro: 25 min study, 5 min break).</li>
            <li>Include revision of previously covered work, not just new content.</li>
            <li>Review and adjust the timetable weekly.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Stress, Resilience and Coping Strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some stress is normal and can improve performance (<strong>eustress</strong>). Chronic or overwhelming stress (<strong>distress</strong>) harms health and academic performance.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Signs of unhealthy stress</strong>
            <p className="text-slate-600 text-sm">Difficulty sleeping, irritability, inability to concentrate, physical symptoms like headaches.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Healthy coping strategies</strong>
            <p className="text-slate-600 text-sm">Exercise, mindfulness, talking to a trusted person, breaking tasks into smaller steps, adequate sleep.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm"><strong>Resilience</strong> is the ability to recover and adapt after setbacks. It is built through experience, support, and a growth mindset.</p>
      </div>
    ),
  },
  {
    title: 'Using Support Systems Effectively',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          You do not have to face academic and personal challenges alone. Identifying and using support systems is a sign of emotional intelligence, not weakness.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">School support</strong>
            <p className="text-slate-600 text-sm">Teachers, subject tutors, the school counsellor, study groups, and peer mentors.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Home support</strong>
            <p className="text-slate-600 text-sm">Parents, guardians, siblings, or trusted family members who can help create a calm study environment.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Community support</strong>
            <p className="text-slate-600 text-sm">Libraries, after-school programmes, mentors, and community organisations offering academic help.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is "active recall" as a study technique?',
    options: ['Reading your notes aloud over and over again', 'Testing yourself on content instead of re-reading it', 'Highlighting the key words in a textbook', 'Copying your notes into a neat new book'],
    answer: 'Testing yourself on content instead of re-reading it',
    explanation: 'Active recall forces the brain to retrieve information, which strengthens memory more effectively than passive re-reading.',
  },
  {
    prompt: 'The Pomodoro study technique involves:',
    options: ['Studying for three hours with no breaks at all', 'Alternating 25 minutes of focused study with a 5-minute break', 'Studying only on the night before a test', 'Sharing your notes with a classmate each day'],
    answer: 'Alternating 25 minutes of focused study with a 5-minute break',
    explanation: 'The Pomodoro method improves focus and prevents mental fatigue by structuring work into short, timed bursts.',
  },
  {
    prompt: 'What is "spaced repetition" in studying?',
    options: [
      'Studying the same topic for many hours in one sitting',
      'Reviewing material at increasing time intervals to strengthen long-term memory',
      'Asking a teacher to repeat the explanation several times',
      'Sharing study time equally between all subjects',
    ],
    answer: 'Reviewing material at increasing time intervals to strengthen long-term memory',
    explanation: 'Spaced repetition is scientifically proven to improve retention by revisiting material just before you are likely to forget it.',
  },
  {
    prompt: 'Which of the following is the most useful strategy when building a study timetable?',
    options: [
      'Spend equal time on all subjects regardless of difficulty',
      'Allocate more time to subjects where you are weakest',
      'Study only subjects you enjoy',
      'Leave all revision to the week before exams',
    ],
    answer: 'Allocate more time to subjects where you are weakest',
    explanation: 'A good timetable prioritises subjects that need more attention while still covering all areas.',
  },
  {
    prompt: 'What is the difference between eustress and distress?',
    options: ['The two are the same thing under two names', 'Eustress motivates and is manageable; distress overwhelms and harms', 'Distress is a positive state and eustress a negative one', 'Eustress occurs only in the weeks of the exams'],
    answer: 'Eustress motivates and is manageable; distress overwhelms and harms',
    explanation: 'Eustress (positive stress) can enhance performance, while distress impairs functioning and wellbeing.',
  },
  {
    prompt: 'Which of the following is a physical sign of chronic academic stress?',
    options: ['Feeling excited about an upcoming test', 'Better concentration and more energy', 'Headaches, trouble sleeping and irritability', 'Wanting to study more than you usually do'],
    answer: 'Headaches, trouble sleeping and irritability',
    explanation: 'Chronic stress manifests physically and emotionally, negatively affecting health and academic performance.',
  },
  {
    prompt: 'What is resilience?',
    options: ['Never making a mistake in your work', 'Avoiding every stressful situation you can', 'The ability to recover and adapt after setbacks', 'Depending fully on other people for support'],
    answer: 'The ability to recover and adapt after setbacks',
    explanation: 'Resilience allows people to "bounce back" from difficulties and continue growing through challenges.',
  },
  {
    prompt: 'Why is practising past NSC papers an effective study strategy?',
    options: ['It guarantees that the same questions will appear', 'It shows you question styles, timing and exam conditions', 'It is the only study method that a learner needs', 'Past papers are useful for mathematics only'],
    answer: 'It shows you question styles, timing and exam conditions',
    explanation: 'Past papers familiarise learners with the format and cognitive demands of the exam, improving performance under pressure.',
  },
  {
    prompt: 'Seeking help from a school counsellor when overwhelmed is an example of:',
    options: ['A sign of weakness and of failing to cope', 'Using a support system wisely, a sign of maturity', 'A waste of valuable study time before exams', 'A way of ignoring the problem for a little while'],
    answer: 'Using a support system wisely, a sign of maturity',
    explanation: 'Accessing support systems is a mature, proactive coping strategy that strengthens wellbeing.',
  },
  {
    prompt: 'Which study habit is most likely to move information into long-term memory?',
    options: ['Reading a chapter once on the night before', 'Highlighting each sentence in a textbook', 'Making concept maps and testing yourself over several days', "Copying the teacher's notes out word for word"],
    answer: 'Making concept maps and testing yourself over several days',
    explanation: 'Active and spaced learning strategies create stronger, more durable memory traces than passive review.',
  },
];

const StudySkillsCopingStrategies = () => (
  <CapsSubjectTopic
    title="Study Skills and Coping Strategies"
    subtitle="Exam strategies, workload management, stress resilience and support systems"
    learnSteps={learnSteps}
    task="gr11-study-skills-coping-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudySkillsCopingStrategies;
