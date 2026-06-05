import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Team Sports: Strategy and Coordination',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Team sports develop both physical skills and important life skills through coordinated group activity.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Strategy in team sports</strong>
            <p className="text-slate-600 text-sm">Game plans, positional play, formation choices, and reading the opposition to gain competitive advantage.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Coordination within a team</strong>
            <p className="text-slate-600 text-sm">Synchronising individual efforts through communication, anticipating teammates' moves, and covering for each other.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Examples in South Africa: netball, soccer, cricket, rugby, and basketball each require unique strategies and coordination skills.</p>
      </div>
    ),
  },
  {
    title: 'Leadership in Physical Activity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Leadership in sport goes beyond being the captain. It involves inspiring teammates, maintaining morale, and making sound decisions under pressure.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Leadership roles in a team:</p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li><strong>Captain</strong> — motivates the team and communicates with officials.</li>
            <li><strong>Pace-setter</strong> — sets the intensity and work ethic standard for others.</li>
            <li><strong>Problem-solver</strong> — adapts strategy when the original plan isn't working.</li>
            <li><strong>Supporter</strong> — lifts team morale when spirits are low.</li>
          </ul>
        </div>
        <p className="text-slate-600 text-sm">Leadership in sport builds confidence, communication skills, and resilience that transfer directly to school, community, and work contexts.</p>
      </div>
    ),
  },
  {
    title: 'Fair Play and Wellness in Team Activity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fair play</strong> means competing honestly, respecting opponents and officials, and valuing participation over winning at any cost.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Fair play principles</strong>
            <p className="text-slate-600 text-sm">Play by the rules, accept decisions, respect opponents, celebrate effort not just victory.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Wellness benefits of team activity</strong>
            <p className="text-slate-600 text-sm">Cardiovascular fitness, stress relief, social connection, belonging, discipline, and improved mental health.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Regular group physical activity is linked to reduced feelings of anxiety and depression, and stronger social wellbeing.</p>
      </div>
    ),
  },
  {
    title: 'Skill Development and Tracking Progress',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Tracking your physical activity and skill development helps you set realistic goals and see your growth over time.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Wellness record keeping:</p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li>Record the type, duration, and intensity of each activity session.</li>
            <li>Note how you felt before, during, and after activity (mood and energy).</li>
            <li>Track skill improvement — e.g., accuracy, speed, endurance gains.</li>
            <li>Review weekly and set a goal for the following week.</li>
          </ul>
        </div>
        <p className="text-slate-600 text-sm">Reflective tracking builds self-awareness and reinforces the link between physical activity and overall wellbeing.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does "strategy" mean in the context of team sports?',
    options: [
      'Playing as fast as possible without a plan',
      'A planned approach — game plan, formations, and reading opponents — to gain competitive advantage',
      'Following only the referee\'s instructions',
      'Practising individual skills in isolation',
    ],
    answer: 'A planned approach — game plan, formations, and reading opponents — to gain competitive advantage',
    explanation: 'Strategy involves deliberate planning to use the team\'s strengths and exploit the opposition\'s weaknesses.',
  },
  {
    prompt: 'Which of the following best describes "coordination" in a team sport?',
    options: [
      'Every player doing the same thing at the same time',
      'Synchronising individual efforts through communication and anticipating teammates\' moves',
      'Only the captain directing others',
      'Running faster than the other team',
    ],
    answer: 'Synchronising individual efforts through communication and anticipating teammates\' moves',
    explanation: 'Team coordination involves seamless movement and communication between players to achieve shared objectives.',
  },
  {
    prompt: 'What is the primary role of a team captain in sport?',
    options: [
      'To score the most points',
      'To motivate the team, communicate with officials, and lead on and off the field',
      'To train the team',
      'To represent the school at prize-giving',
    ],
    answer: 'To motivate the team, communicate with officials, and lead on and off the field',
    explanation: 'A captain provides leadership, communication, and motivation that holds the team together.',
  },
  {
    prompt: 'Fair play in sport means:',
    options: [
      'Winning by any means necessary',
      'Competing honestly, respecting opponents and officials, and valuing participation',
      'Only following rules when the referee is watching',
      'Ensuring your team gets the most advantages',
    ],
    answer: 'Competing honestly, respecting opponents and officials, and valuing participation',
    explanation: 'Fair play upholds the ethical values of sport — respect, honesty, and integrity — regardless of the result.',
  },
  {
    prompt: 'How does regular participation in team sport benefit mental health?',
    options: [
      'It has no effect on mental health',
      'It reduces anxiety and depression symptoms, builds social connection, and improves mood',
      'It increases competitive stress to harmful levels',
      'It only benefits physical health',
    ],
    answer: 'It reduces anxiety and depression symptoms, builds social connection, and improves mood',
    explanation: 'Group physical activity combines exercise benefits with social belonging, both of which strongly support mental wellbeing.',
  },
  {
    prompt: 'Keeping a wellness record during physical education involves:',
    options: [
      'Only writing down if you won or lost',
      'Recording the type, duration, intensity, and mood before and after each session',
      'Asking the teacher to record your progress',
      'Only tracking your weight',
    ],
    answer: 'Recording the type, duration, intensity, and mood before and after each session',
    explanation: 'A wellness record tracks both physical data and emotional responses, building self-awareness about the link between activity and wellbeing.',
  },
  {
    prompt: 'Which leadership quality involves lifting team morale when spirits are low?',
    options: ['Problem-solving', 'Pace-setting', 'Supporting', 'Officiating'],
    answer: 'Supporting',
    explanation: 'A supportive leader encourages teammates and helps maintain team cohesion and motivation during difficult moments.',
  },
  {
    prompt: 'What is the value of tracking skill improvement in sport over time?',
    options: [
      'It has no value — natural talent determines outcomes',
      'It reveals progress, motivates continued effort, and helps set realistic future goals',
      'It is only useful for professional athletes',
      'It is only used to grade learners',
    ],
    answer: 'It reveals progress, motivates continued effort, and helps set realistic future goals',
    explanation: 'Tracking progress makes improvement visible, reinforcing effort and self-belief.',
  },
  {
    prompt: 'How do leadership skills developed in sport transfer to other life contexts?',
    options: [
      'They are only relevant in a sports setting',
      'Communication, motivation, and decision-making under pressure apply to school, community, and work',
      'Leadership in sport only develops physical skills',
      'They only transfer to professional sport',
    ],
    answer: 'Communication, motivation, and decision-making under pressure apply to school, community, and work',
    explanation: 'Leadership qualities developed through sport — such as resilience, teamwork, and communication — are universally applicable.',
  },
  {
    prompt: 'Why is accepting a referee\'s decision an important part of fair play, even when you disagree?',
    options: [
      'It is not important — referees are often wrong',
      'It demonstrates respect for authority, rules, and the integrity of the competition',
      'It shows weakness',
      'It only matters in professional sport',
    ],
    answer: 'It demonstrates respect for authority, rules, and the integrity of the competition',
    explanation: 'Accepting officiating decisions gracefully upholds sportsmanship and models respectful behaviour for teammates and spectators.',
  },
];

const PhysicalEducationTask2 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 2"
    subtitle="Team sports, strategy, leadership, fair play and wellness tracking"
    learnSteps={learnSteps}
    task="gr11-physical-education-task-2-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask2;
