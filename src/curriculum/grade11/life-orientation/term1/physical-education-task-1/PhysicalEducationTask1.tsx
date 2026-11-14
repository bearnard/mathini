import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Components of Physical Fitness',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Physical fitness is made up of several components that together determine your overall health and athletic ability.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cardiovascular endurance</strong>
            <p className="text-slate-600 text-sm">The heart and lungs' ability to supply oxygen during sustained exercise (e.g., running, swimming).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Muscular strength &amp; endurance</strong>
            <p className="text-slate-600 text-sm">Strength: max force in one effort. Endurance: repeated effort over time (e.g., push-ups).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Flexibility</strong>
            <p className="text-slate-600 text-sm">The range of motion in your joints and muscles — improved by regular stretching.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Body composition</strong>
            <p className="text-slate-600 text-sm">The ratio of fat to lean muscle mass in your body.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Speed and coordination</strong>
            <p className="text-slate-600 text-sm">How quickly you move and how well your muscles work together to perform skills.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Technique, Endurance and Warm-Up',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct <strong>technique</strong> prevents injury and improves performance. <strong>Endurance</strong> is built gradually through progressive training.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Warm-up (5–10 min)</strong>
            <p className="text-slate-600 text-sm">Light aerobic activity followed by dynamic stretches. Prepares muscles, heart, and joints. Reduces injury risk.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Cool-down (5–10 min)</strong>
            <p className="text-slate-600 text-sm">Gradual reduction in intensity followed by static stretches. Aids recovery and reduces muscle soreness.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Build endurance using the <strong>overload principle</strong> — gradually increase frequency, intensity, or duration of exercise to improve fitness over time.</p>
      </div>
    ),
  },
  {
    title: 'Designing a Personal Activity Programme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>personal physical activity programme</strong> is tailored to your current fitness level and goals.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">FITT Principle — design guide:</p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li><strong>F</strong>requency — how often (e.g., 3–5 times per week)</li>
            <li><strong>I</strong>ntensity — how hard (e.g., moderate pace)</li>
            <li><strong>T</strong>ime — how long per session (e.g., 30–60 minutes)</li>
            <li><strong>T</strong>ype — what activity (e.g., jogging, swimming, circuit training)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Physical Activity and Mental Wellbeing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Regular physical activity has well-documented benefits for both physical and mental health — especially important during the academic pressures of Grade 11.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Mental health benefits</strong>
            <p className="text-slate-600 text-sm">Reduces anxiety and depression symptoms, improves mood through endorphin release, and enhances concentration and memory.</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <strong className="text-lime-700">Physical health benefits</strong>
            <p className="text-slate-600 text-sm">Stronger heart and lungs, better sleep, healthier weight, improved immune function, and reduced chronic disease risk.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">South African guidelines recommend at least <strong>60 minutes of moderate physical activity per day</strong> for adolescents.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which component of fitness measures the heart and lungs\' ability to supply oxygen during sustained exercise?',
    options: ['Muscular strength', 'Flexibility', 'Cardiovascular endurance', 'Body composition'],
    answer: 'Cardiovascular endurance',
    explanation: 'Cardiovascular endurance reflects how efficiently the heart and lungs work together during prolonged aerobic activities.',
  },
  {
    prompt: 'What does the FITT principle stand for?',
    options: [
      'Fitness, Intensity, Time, Training',
      'Frequency, Intensity, Time, Type',
      'Frequency, Interval, Tempo, Technique',
      'Flexibility, Intensity, Training, Time',
    ],
    answer: 'Frequency, Intensity, Time, Type',
    explanation: 'The FITT principle guides exercise programme design: Frequency, Intensity, Time, and Type of activity.',
  },
  {
    prompt: 'What is the main purpose of a warm-up before exercise?',
    options: [
      'To exhaust muscles before the main activity',
      'To prepare muscles, heart, and joints and reduce injury risk',
      'To save energy for the main activity',
      'It has no real purpose',
    ],
    answer: 'To prepare muscles, heart, and joints and reduce injury risk',
    explanation: 'A warm-up raises heart rate, increases blood flow to muscles, and improves joint mobility, reducing the chance of injury.',
  },
  {
    prompt: 'What does the overload principle in fitness training mean?',
    options: ['Training until you are completely worn out each time', 'Gradually raising the frequency, intensity or length of exercise', 'Always training at the same level to stay consistent', 'Training only on days when you feel full of energy'],
    answer: 'Gradually raising the frequency, intensity or length of exercise',
    explanation: 'The overload principle states that the body adapts to exercise demands only when those demands are progressively increased.',
  },
  {
    prompt: 'How does regular physical activity benefit mental health?',
    options: ['It has no effect on mental health at all', 'It lowers anxiety, releases endorphins and lifts mood and focus', 'It raises stress levels in most people', 'It benefits the body only and does not help the mind'],
    answer: 'It lowers anxiety, releases endorphins and lifts mood and focus',
    explanation: 'Exercise triggers endorphin release and reduces stress hormones, improving mood, focus, and emotional wellbeing.',
  },
  {
    prompt: 'What is the difference between muscular strength and muscular endurance?',
    options: [
      'They are the same thing',
      'Strength is maximum force in one effort; endurance is repeated effort over time',
      'Endurance is maximum force in one effort; strength is repeated effort over time',
      'Muscular endurance only applies to the legs',
    ],
    answer: 'Strength is maximum force in one effort; endurance is repeated effort over time',
    explanation: 'Muscular strength and endurance are distinct components of fitness that can be trained separately.',
  },
  {
    prompt: 'How many minutes of moderate physical activity per day do South African guidelines recommend for adolescents?',
    options: ['20 minutes', '30 minutes', '45 minutes', '60 minutes'],
    answer: '60 minutes',
    explanation: 'South African health guidelines recommend adolescents engage in at least 60 minutes of moderate physical activity every day.',
  },
  {
    prompt: 'Which activity is best for improving flexibility?',
    options: ['Sprinting', 'Weightlifting', 'Regular stretching and yoga', 'Cycling at high intensity'],
    answer: 'Regular stretching and yoga',
    explanation: 'Flexibility is improved by regularly stretching the muscles and connective tissue beyond their usual range of motion.',
  },
  {
    prompt: 'Why is self-discipline important in maintaining a personal activity programme?',
    options: ['It is not important if you already have a coach', 'It keeps you training when motivation dips and builds habits', 'It matters only during the competition season', 'It means that you never need to take any rest days'],
    answer: 'It keeps you training when motivation dips and builds habits',
    explanation: 'Self-discipline helps turn physical activity from a short-term effort into a sustainable lifestyle habit.',
  },
  {
    prompt: 'A cool-down after exercise mainly helps by:',
    options: ['Burning extra calories straight after the session', 'Slowly lowering heart rate and easing soreness with static stretches', 'Building more muscle straight after the exercise', 'Raising your body temperature after the exercise'],
    answer: 'Slowly lowering heart rate and easing soreness with static stretches',
    explanation: 'A proper cool-down eases the transition from vigorous exercise to rest, reducing soreness and aiding recovery.',
  },
];

const PhysicalEducationTask1 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 1"
    subtitle="Fitness components, technique, personal activity programming and health benefits"
    learnSteps={learnSteps}
    task="gr11-physical-education-task-1-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask1;
