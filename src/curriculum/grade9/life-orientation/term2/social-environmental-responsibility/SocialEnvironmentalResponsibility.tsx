import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Community health',
    content: slide(
      <>
        <Rule>Community health is the wellbeing of all the people in a community. It depends on services, clean water, safety, education and jobs.</Rule>
        <Hub centre="Health" spokes={['Clean water', 'Safety', 'Education', 'Jobs']} aria="A circle labelled Health with four things it depends on: clean water, safety, education and jobs." />
        <Worked
          title="A community has no clean water"
          steps={[<>Problem: people cannot get clean water.</>, <>Effect: people can get sick and miss school or work.</>, <>Response: report the problem to the municipality.</>, <>Help others: share what you know.</>]}
        />
        <Mistake>Thinking community health only means having a clinic. Water, safety, education and jobs also affect how healthy people are.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social pressure and responsible action',
    content: slide(
      <>
        <Rule>Social pressure can influence choices for good or bad. Responsible action means making choices that help your community and nature.</Rule>
        <Branches
          problem="Friends want to dump rubbish near the stream"
          options={[
            { choice: 'Join in', outcome: 'The stream is polluted.' },
            { choice: 'Say no, pick it up', outcome: 'The place stays clean.' },
          ]}
          aria="A decision tree. Friends want to dump rubbish near the stream. If you join in the stream is polluted. If you say no and pick it up the place stays clean."
        />
        <Worked
          title="Choose a responsible action"
          steps={[<>Notice the pressure from friends.</>, <>Ask: does this help or harm my community?</>, <>Say no, and suggest a clean-up instead.</>]}
        />
        <Mistake>Going along with a group because “everyone does it”. Social pressure can also be positive, for example when a group joins a clean-up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Caring for the environment',
    content: slide(
      <>
        <Rule>Environmental care protects resources for future generations. Environmental problems include pollution, deforestation, water shortage and climate change. “Reduce, reuse, recycle” cuts waste and saves resources.</Rule>
        <StepFlow steps={['Reduce: use less.', 'Reuse: use it again.', 'Recycle: make it into something new.']} aria="Three steps in order: reduce by using less, reuse by using it again, recycle by making it into something new." />
        <Worked
          title="A plastic bottle"
          steps={[<>Reduce: bring a refillable bottle.</>, <>Reuse: keep a bottle to store water at home.</>, <>Recycle: put the empty bottle in a recycling bin.</>]}
        />
        <Mistake>Thinking recycling alone solves waste. Reduce comes first, because the waste you never make needs no recycling.</Mistake>
      </>,
    ),
  },
  {
    title: 'What learners can do',
    content: slide(
      <>
        <Rule>Education helps people make informed choices about their health. As a learner you can save water, cut waste, teach others and volunteer.</Rule>
        <StepFlow steps={['Find a real problem at school.', 'Plan a realistic action.', 'Teach others about it.', 'Check what changed.']} aria="Four steps for a class campaign in order: find a real problem, plan a realistic action, teach others, check what changed." />
        <Worked
          title="A class campaign to cut waste"
          steps={[<>Problem: the bins are full of paper.</>, <>Action: use both sides of the page.</>, <>Teach: make a poster for other classes.</>, <>Check: are the bins emptier after a month?</>]}
        />
        <Mistake>Choosing a goal that is too big, such as “stop all pollution”. A small action you can finish makes a real difference.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is community health, and name three things it depends on?" answer="The wellbeing of all the people in a community. For example: clean water, safety, education, jobs, services." />
        <Check question="How can social pressure affect people?" answer="It can influence choices, for good or bad." />
        <Check question="What do reduce, reuse and recycle mean?" answer="Use less, use it again, and make it into something new. Together they cut waste and save resources." />
        <Check question="Give two things you can do as a learner to protect the environment." answer="Any two of: save water, cut waste, teach others, volunteer." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is community health?',
    options: ['The number of hospitals that serve a community', 'The wellbeing of all the people in a community', 'The exercise that people in a community take', 'The health of one person at a time, but not groups'],
    answer: 'The wellbeing of all the people in a community',
    explanation: 'Community health includes access to clean water, healthcare, safety, and good living conditions.',
  },
  {
    prompt: 'What factors affect community wellbeing?',
    options: ['The government and its offices in the community only', 'Access to services, clean water, safety, education and jobs', 'The income of the richest families in the area only', 'The weather of the area and its yearly rainfall only'],
    answer: 'Access to services, clean water, safety, education and jobs',
    explanation: 'Multiple factors contribute to healthy communities.',
  },
  {
    prompt: 'How does social pressure affect people?',
    options: ['It affects nothing, since people choose alone', 'It can influence choices, for good or bad', 'It affects adults at work and not young people', 'It affects people at school and nowhere else'],
    answer: 'It can influence choices, for good or bad',
    explanation: 'Social pressure can be positive (encouraging good behaviour) or negative (pushing harmful choices).',
  },
  {
    prompt: 'Why is environmental care important?',
    options: ['It is not important, since resources never run out', 'To protect resources for future generations', 'It matters only for animals and plants that are rare', 'It is too hard for ordinary people to take part in'],
    answer: 'To protect resources for future generations',
    explanation: 'Environmental care ensures a healthy planet for current and future people.',
  },
  {
    prompt: 'What is the "reduce, reuse, recycle" principle?',
    options: ['A rule where only recycling matters and the rest does not', 'A way of cutting waste and saving resources', 'A plan that works only in rich countries with money', 'A slogan that is not practical in daily life'],
    answer: 'A way of cutting waste and saving resources',
    explanation: 'This approach minimizes environmental impact through reducing consumption, reusing items, and recycling.',
  },
  {
    prompt: 'How can individuals promote community health?',
    options: ['They cannot, as community health is for the state alone', 'By making healthy choices and helping others to do so', 'Only doctors and nurses can improve community health', 'Only the government can improve community health'],
    answer: 'By making healthy choices and helping others to do so',
    explanation: 'Individual choices and community participation strengthen overall health.',
  },
  {
    prompt: 'What is responsible action?',
    options: ['Doing nothing, so that you cannot cause harm', 'Making choices that help your community and nature', 'Taking action that only leaders are allowed to take', 'Avoiding problems so you do not make them worse'],
    answer: 'Making choices that help your community and nature',
    explanation: 'Responsible action involves considering impacts and contributing positively.',
  },
  {
    prompt: 'What are examples of environmental problems?',
    options: ['Crime, unemployment, poverty and hunger in towns', 'Pollution, deforestation, water shortage and climate change', 'Wars, strikes, riots and the loss of jobs', 'Traffic, noise, queues and crowded buses in cities'],
    answer: 'Pollution, deforestation, water shortage and climate change',
    explanation: 'Environmental challenges include pollution, resource depletion, and climate impacts.',
  },
  {
    prompt: 'How does education help community health?',
    options: ['It helps only the doctors who treat sick people', 'It helps people make informed choices about their health', 'It has no link, as health depends on luck alone', 'It matters for adults only and not for learners'],
    answer: 'It helps people make informed choices about their health',
    explanation: 'Education empowers people to understand and improve their health and communities.',
  },
  {
    prompt: 'What can you do as a learner to protect the environment?',
    options: ['Nothing, as only adults can change the environment', 'Save water, cut waste, teach others and volunteer', 'Leave the work to adults, who have more power than you', 'Do nothing, as one learner is too small to matter'],
    answer: 'Save water, cut waste, teach others and volunteer',
    explanation: 'Young people can contribute meaningfully to environmental protection.',
  },
];

const SocialEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Community health and sustainable action"
    learnSteps={learnSteps}
    task="gr9-social-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialEnvironmentalResponsibility;
