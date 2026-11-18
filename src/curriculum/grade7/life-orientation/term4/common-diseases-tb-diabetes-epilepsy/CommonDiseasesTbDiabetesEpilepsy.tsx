import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What causes common diseases?',
    content: slide(
      <>
        <Rule>Diseases have different causes. Some, such as tuberculosis (TB), are caused by germs that spread from person to person. Others, such as diabetes, are linked to how the body works and to habits such as poor eating and not being active. Social, economic and environmental factors also matter: poverty, crowded homes, unsafe water, alcohol and tobacco, poor eating habits and physical inactivity all raise the risk of illness.</Rule>
        <FactCards
          cards={[
            { title: 'Germs', line1: 'some diseases spread', line2: 'from person to person' },
            { title: 'Habits', line1: 'poor eating, tobacco,', line2: 'alcohol, no exercise' },
            { title: 'Social', line1: 'poverty and crowded', line2: 'living raise risk' },
            { title: 'Environment', line1: 'unsafe water and', line2: 'polluted air' },
          ]}
          aria="Causes of common diseases. Germs: some diseases spread from person to person. Habits: poor eating, tobacco, alcohol and no exercise. Social: poverty and crowded living raise risk. Environment: unsafe water and polluted air."
        />
        <Worked
          title="Sort the causes"
          steps={[
            'A germ that spreads when people cough: a cause of TB.',
            'Years of sugary drinks and little exercise: a habit that raises the risk of type 2 diabetes.',
            'A crowded home with poor ventilation: a social and environmental risk factor.',
          ]}
        />
        <Mistake>Blaming a person for being ill. Many causes are outside a person&rsquo;s control, and everyone deserves care and respect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tuberculosis (TB)',
    content: slide(
      <>
        <Rule>TB is an infection caused by bacteria that mostly affects the lungs. It spreads through the air when a person with active TB coughs. Signs include a cough that lasts for more than two weeks, night sweats, fever, tiredness and weight loss. TB can be cured: you must go to a clinic for tests and take the medicine every day for the full course, which lasts for months. It is not spread by sharing plates or by touching.</Rule>
        <FactCards
          cards={[
            { title: 'Cause', line1: 'bacteria that affect', line2: 'the lungs' },
            { title: 'Spread', line1: 'through the air when', line2: 'a person coughs' },
            { title: 'Signs', line1: 'a long cough, night', line2: 'sweats and tiredness' },
            { title: 'Cure', line1: 'clinic tests and a full', line2: 'course of medicine' },
          ]}
          aria="Tuberculosis. Cause: bacteria that affect the lungs. Spread: through the air when a person coughs. Signs: a long cough, night sweats and tiredness. Cure: clinic tests and a full course of medicine."
        />
        <Worked
          title="Act on the signs"
          steps={[
            'You have had a cough for three weeks and you sweat at night.',
            'You go to the clinic for a test.',
            'If it is TB, you take the medicine every day until the full course is finished, even when you feel better.',
          ]}
        />
        <Mistake>Stopping TB medicine when you feel better. The germs can survive and the illness can return.</Mistake>
      </>,
    ),
  },
  {
    title: 'Diabetes',
    content: slide(
      <>
        <Rule>Diabetes is a condition in which there is too much sugar in the blood because the body does not make enough insulin or cannot use it well. Signs include being very thirsty, passing urine often, tiredness and blurred sight. It is not contagious. People with diabetes can live well by eating healthy food, being active, taking their medicine or insulin and going for check-ups.</Rule>
        <FactCards
          cards={[
            { title: 'What', line1: 'too much sugar in', line2: 'the blood' },
            { title: 'Signs', line1: 'thirst, passing urine', line2: 'often and tiredness' },
            { title: 'Not catching', line1: 'it does not spread', line2: 'from person to person' },
            { title: 'Living well', line1: 'healthy food, exercise,', line2: 'medicine and check-ups' },
          ]}
          aria="Diabetes. What: too much sugar in the blood. Signs: thirst, passing urine often and tiredness. Not catching: it does not spread from person to person. Living well: healthy food, exercise, medicine and check-ups."
        />
        <Worked
          title="Support a person with diabetes"
          steps={[
            'Your uncle has diabetes and takes his medicine.',
            'He eats less sugar, walks every day and visits the clinic for check-ups.',
            'You can support him by cooking healthy food with him and walking together.',
          ]}
        />
        <Mistake>Thinking that you can catch diabetes from another person. It does not spread.</Mistake>
      </>,
    ),
  },
  {
    title: 'Epilepsy',
    content: slide(
      <>
        <Rule>Epilepsy is a condition of the brain that causes seizures, which are short periods when the body shakes or the person is not aware of what is happening. It is not contagious and it is not caused by witchcraft or a curse. Many people control seizures with medicine and live normal lives. If someone has a seizure, stay calm, move hard objects away, cushion the head, do not put anything in the mouth, and call for help if it lasts longer than five minutes.</Rule>
        <StepFlow steps={['Stay calm and time it.', 'Move hard objects away.', 'Cushion the head and turn the person on the side.', 'Call for help if it lasts over five minutes.']} aria="Four steps to help during a seizure: stay calm and time it, move hard objects away, cushion the head and turn the person on their side, and call for help if it lasts over five minutes." />
        <Worked
          title="Help a classmate"
          steps={[
            'A classmate has a seizure in the classroom.',
            'You stay calm, call the teacher, ask others to move back and cushion the head with a jersey.',
            'You do not hold the person down or put anything in the mouth, and afterwards you stay with the person until help comes.',
          ]}
        />
        <Mistake>Believing that epilepsy is caused by a curse or can be caught. It is a medical condition, and people with epilepsy deserve respect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How does TB spread?</>,
          <>Why must TB medicine be taken for the full course?</>,
          <>Can you catch diabetes from another person?</>,
          <>What should you not put in the mouth of a person who is having a seizure?</>,
        ]}
        answers={[
          <>Through the air when a person with active TB coughs.</>,
          <>Otherwise the germs can survive and the illness can return.</>,
          <>No, it does not spread.</>,
          <>Anything at all.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which is a risk factor for illness that people can change?",
    options: ["Their date of birth", "The colour of their eyes", "Smoking and drinking alcohol", "Where they were born"],
    answer: "Smoking and drinking alcohol",
    explanation: "Tobacco, alcohol, poor eating habits and inactivity raise the risk of illness.",
  },
  {
    prompt: "What causes TB?",
    options: ["Bacteria that mostly affect the lungs", "A curse placed by a person", "Eating far too many sweets", "Wearing clothes that are wet"],
    answer: "Bacteria that mostly affect the lungs",
    explanation: "TB is an infection.",
  },
  {
    prompt: "How does TB spread?",
    options: ["By sharing plates at a table", "By holding hands with a friend", "By swimming in the same pool", "Through the air when a person coughs"],
    answer: "Through the air when a person coughs",
    explanation: "It is not spread by touching or sharing dishes.",
  },
  {
    prompt: "Which is a sign of TB?",
    options: ["A sore toe after a long walk", "A cough for more than two weeks", "A bruised knee after a game", "A headache after the sport"],
    answer: "A cough for more than two weeks",
    explanation: "A long cough, night sweats and weight loss are signs.",
  },
  {
    prompt: "Where should you go if you have a cough for three weeks?",
    options: ["To a shop for sweets", "To the clinic for a test", "To a friend's house to play", "Nowhere, because it will pass"],
    answer: "To the clinic for a test",
    explanation: "Early testing and treatment help.",
  },
  {
    prompt: "Why must TB tablets be finished even when you feel well?",
    options: ["Because it is sweet", "Because it is a school rule", "Because it is expensive", "Otherwise the illness can return"],
    answer: "Otherwise the illness can return",
    explanation: "Stopping early lets the germs survive.",
  },
  {
    prompt: "What is diabetes?",
    options: ["Too much sugar in the blood", "A broken bone", "A kind of skin rash", "A cough in the lungs"],
    answer: "Too much sugar in the blood",
    explanation: "The body does not make enough insulin or cannot use it well.",
  },
  {
    prompt: "Which is a sign of diabetes?",
    options: ["A sore elbow after a bad fall", "Sneezing a lot in the spring time", "Being very thirsty and passing urine often", "A loose tooth at the front of the mouth"],
    answer: "Being very thirsty and passing urine often",
    explanation: "Thirst and passing urine often are common signs.",
  },
  {
    prompt: "Is diabetes something that spreads between people?",
    options: ["Yes, from a handshake", "Yes, from a hug", "Yes, from sharing a plate", "No, it does not spread"],
    answer: "No, it does not spread",
    explanation: "Diabetes is not contagious.",
  },
  {
    prompt: "Which helps a person to live well with diabetes?",
    options: ["Skipping the medicine every day", "Healthy food, activity and check-ups", "Eating only sweets and cake", "Staying in bed all day long"],
    answer: "Healthy food, activity and check-ups",
    explanation: "Taking medicine and keeping check-ups matter too.",
  },
  {
    prompt: "What is epilepsy?",
    options: ["A brain condition that causes seizures", "A kind of cold in the nose and throat", "A skin disease caused by the sun", "A stomach ache after a big meal"],
    answer: "A brain condition that causes seizures",
    explanation: "It is not contagious.",
  },
  {
    prompt: "Which statement about the cause of epilepsy is true?",
    options: ["It is caused by a curse", "It is caused by bad luck only", "It is a medical condition", "It is caused by eating cold food"],
    answer: "It is a medical condition",
    explanation: "Many people control seizures with medicine.",
  },
  {
    prompt: "What should you do when a classmate has a seizure?",
    options: ["Hold the person down hard", "Put a spoon into the mouth", "Stay calm, cushion the head, get help", "Shout and run out of the room"],
    answer: "Stay calm, cushion the head, get help",
    explanation: "Do not restrain the person or put anything in the mouth.",
  },
  {
    prompt: "When should you call for help during a seizure?",
    options: ["If it goes on for over five minutes", "Never, because it never matters", "Only after a whole week has passed", "Only if it is raining outside"],
    answer: "If it goes on for over five minutes",
    explanation: "A long seizure is an emergency.",
  },
];

const CommonDiseasesTbDiabetesEpilepsy = () => (
  <CapsSubjectTopic
    title="Common Diseases: TB, Diabetes and Epilepsy"
    subtitle="Causes of common diseases, and what TB, diabetes and epilepsy are and how to live with them"
    learnSteps={learnSteps}
    task="gr7-common-diseases-tb-diabetes-epilepsy-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CommonDiseasesTbDiabetesEpilepsy;
