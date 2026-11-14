import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Sport Skills and Technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sport skills</strong> are techniques and movements specific to each sport or activity.
          Developing skills requires practice and feedback.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Good technique prevents injury and improves performance.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Endurance, Flexibility, and Fair Play',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Endurance</strong> is your ability to keep going during activity.
          <strong> Flexibility</strong> is your range of movement. <strong>Fair play</strong> means following rules and respecting others.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Endurance</strong>
            <p className="text-slate-600">Stamina and persistence.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Flexibility</strong>
            <p className="text-slate-600">Range of motion and stretch.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Fair play</strong>
            <p className="text-slate-600">Rules and respect for all.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Competitive and Recreational Activity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Competitive activity involves competing against others or standards.
          Recreational activity is for enjoyment and fitness, not necessarily to win.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Both types are valuable:</p>
          <p className="text-slate-600">Competition builds skills and drive; recreation builds joy and lifelong fitness habits.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are sport skills?',
    options: ['Running fast, which is the skill in every sport', 'The techniques and movements of each sport', 'Skills that only professional players need to learn', 'Skills that matter little to enjoying a sport'],
    answer: 'The techniques and movements of each sport',
    explanation: 'Sports skills are learned techniques that improve performance and safety.',
  },
  {
    prompt: 'Why is proper technique important in sport?',
    options: ['It matters only in competitions, not in practice', 'It improves performance and prevents injury', 'It is not needed if you are strong and fit', 'It slows down your play and makes the game boring'],
    answer: 'It improves performance and prevents injury',
    explanation: 'Good technique is efficient, effective, and safe.',
  },
  {
    prompt: 'What is endurance?',
    options: ['The ability to lift a heavy load for one short time', 'The ability to keep going in an activity for a long time', 'The ability to bend and stretch the body freely', 'The ability to react fast to a signal or sound'],
    answer: 'The ability to keep going in an activity for a long time',
    explanation: 'Endurance is cardiovascular and muscular stamina developed through training.',
  },
  {
    prompt: 'Why is flexibility important?',
    options: ['It lets you lift heavier weights than other people can', 'It improves your range of movement and prevents injury', 'It is needed by dancers and gymnasts but not others', 'It raises your heart rate more than running does'],
    answer: 'It improves your range of movement and prevents injury',
    explanation: 'Flexibility supports all physical activities and reduces injury risk.',
  },
  {
    prompt: 'What is fair play?',
    options: ['Winning the game by any means that you can', 'Following the rules and respecting all players', 'Being kind to your team but not to the other team', 'Breaking a rule if the referee does not see it'],
    answer: 'Following the rules and respecting all players',
    explanation: 'Fair play is central to good sportsmanship and healthy competition.',
  },
  {
    prompt: 'How do you maintain safety in competitive sport?',
    options: ['Rely on luck, since injuries cannot be prevented', 'Use good technique, follow rules, warm up and cool down', 'Play hard and fast at all times to get ahead', 'Carry on playing when a referee gives a warning'],
    answer: 'Use good technique, follow rules, warm up and cool down',
    explanation: 'Safety practices are essential even in competitive contexts.',
  },
  {
    prompt: 'What is recreational activity?',
    options: ['Activity done only at school during sport periods', 'Activity that you do for fun and health, not to win', 'Activity that is too easy to count as real exercise', 'Activity that has no value, as it is not competitive'],
    answer: 'Activity that you do for fun and health, not to win',
    explanation: 'Recreation builds fitness and lifetime enjoyment of physical activity.',
  },
  {
    prompt: 'How does competition benefit participants?',
    options: ['It does not help, as only the winners learn', 'It builds skills, motivation and personal growth', 'It benefits only the winners and no other players', 'It harms players because they feel pressure to win'],
    answer: 'It builds skills, motivation and personal growth',
    explanation: 'Competition, when fair and healthy, drives improvement and development.',
  },
  {
    prompt: 'What should you do if injured during sport?',
    options: ['Keep playing, since the pain will soon go away', 'Stop, check the injury and get medical help if needed', 'Play through the pain to help your team win the match', 'Hide the injury so that you are not taken off'],
    answer: 'Stop, check the injury and get medical help if needed',
    explanation: 'Stopping and getting help prevents minor injuries from becoming serious.',
  },
  {
    prompt: 'How can you apply sport skills in game play?',
    options: ['By waiting for the game, as skills cannot be learned', 'By practising, focusing on technique and adapting to the game', 'By using skills in training only and not in matches', 'By assuming that skills do not carry over to games'],
    answer: 'By practising, focusing on technique and adapting to the game',
    explanation: 'Practised skills become automatic in game situations with experience.',
  },
];

const PhysicalEducationTask2 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 2"
    subtitle="Sport skills, competitive and recreational activity"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-2-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask2;
