import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build fitness safely from a baseline',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Physical Education starts with a <strong>fitness baseline</strong>. Baselines help learners set realistic
          improvement goals while keeping activities safe.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <p className="font-bold text-blue-700">Baseline checks</p>
            <p className="text-slate-600">measure current fitness level</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Warm-up</p>
            <p className="text-slate-600">prepare muscles and joints</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Movement patterns</p>
            <p className="text-slate-600">locomotor and control skills</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Coordination</p>
            <p className="text-slate-600">timing and control of movement</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cooperate in paired and group tasks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          PE is not only about speed or strength. <strong>Cooperation</strong>, encouragement, and safe behaviour help
          everyone improve together.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Communication</p>
            <p className="text-slate-600">give clear and positive cues</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Support</p>
            <p className="text-slate-600">help partners complete challenges</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Safety rules</p>
            <p className="text-slate-600">space, control, and fair turns</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Reflection</p>
            <p className="text-slate-600">track progress after each activity</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do learners complete baseline fitness checks?',
    options: [
      'To measure starting fitness and set goals',
      'To replace all physical activity',
      'To compete for final exam marks only',
      'To skip warm-up and cool-down',
    ],
    answer: 'To measure starting fitness and set goals',
    explanation: 'Baseline data helps learners plan realistic and safe improvement.',
  },
  {
    prompt: 'Which activity is part of a safe warm-up?',
    options: ['Light jogging and dynamic stretches', 'Sprinting at full speed immediately', 'Sitting and waiting for class to end', 'Ignoring any movement instructions'],
    answer: 'Light jogging and dynamic stretches',
    explanation: 'Warm-ups gradually increase heart rate and prepare muscles for activity.',
  },
  {
    prompt: 'Which action best shows coordination?',
    options: ['Catching and passing with correct timing', 'Standing still for the whole lesson', 'Shouting without moving', 'Running into other learners'],
    answer: 'Catching and passing with correct timing',
    explanation: 'Coordination combines timing, control, and body awareness.',
  },
  {
    prompt: 'Which movement is locomotor?',
    options: ['Running across the court', 'Balancing on one foot in place', 'Stretching arms while seated', 'Twisting your torso without travelling'],
    answer: 'Running across the court',
    explanation: 'Locomotor movements travel from one place to another.',
  },
  {
    prompt: 'How can you support a partner during a paired challenge?',
    options: [
      'Encourage them and give clear cues',
      'Laugh when they make mistakes',
      'Take over so they do not practise',
      'Ignore all team instructions',
    ],
    answer: 'Encourage them and give clear cues',
    explanation: 'Supportive communication improves confidence and performance.',
  },
  {
    prompt: 'Why are safety routines important in PE?',
    options: [
      'They reduce injury risk during activity',
      'They make learners move less',
      'They remove the need for teamwork',
      'They replace all practice drills',
    ],
    answer: 'They reduce injury risk during activity',
    explanation: 'Safety routines protect learners and keep lessons productive.',
  },
  {
    prompt: 'Which behaviour shows cooperation in group tasks?',
    options: ['Taking turns fairly and following rules', 'Refusing to pass to teammates', 'Changing rules to win unfairly', 'Arguing with every instruction'],
    answer: 'Taking turns fairly and following rules',
    explanation: 'Cooperation requires fairness, shared effort, and respect.',
  },
  {
    prompt: 'What should happen after vigorous PE activity?',
    options: ['A cool-down with controlled breathing', 'Immediate full-speed sprint repeats', 'No water for the rest of the day', 'Pushing through pain without reporting it'],
    answer: 'A cool-down with controlled breathing',
    explanation: 'Cool-down helps the body recover safely after exercise.',
  },
];

const PhysicalEducationT1 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Fitness baselines, movement patterns, coordination, and cooperation"
    learnSteps={learnSteps}
    task="gr7-physical-education-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT1;
