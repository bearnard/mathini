import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a psychological factor in ill-health?",
    options: ["Living far from a clinic", "Long-term stress and anxiety", "A cultural practice with shared tools", "A flood in the area"],
    answer: "Long-term stress and anxiety",
    explanation: "Long-term stress affects the body and the mind, so it is a psychological factor.",
  },
  {
    prompt: "Which is a social factor in ill-health?",
    options: ["A person's own thoughts about stress", "Poverty that limits healthy food", "A strong belief in a healer", "A change in the weather"],
    answer: "Poverty that limits healthy food",
    explanation: "Poverty is a social factor because it limits food, housing and access to care.",
  },
  {
    prompt: "A cultural practice spreads infection because tools are shared. Which kind of factor is this?",
    options: ["A psychological factor", "A natural factor", "A genetic factor", "A cultural factor"],
    answer: "A cultural factor",
    explanation: "Practices that are part of a culture can raise or lower the risk of ill-health.",
  },
  {
    prompt: "Why can a traditional healer and a clinic work together?",
    options: ["They bring different knowledge to care", "The healer takes the place of the clinic", "They give identical advice to patients", "The clinic plays no part in the care"],
    answer: "They bring different knowledge to care",
    explanation: "Different knowledge perspectives can work together, for example a referral for medical treatment.",
  },
  {
    prompt: "Which list gives CAPS contributing factors to ill-health?",
    options: ["Diet, exercise, smoking, drugs and sex", "Height, hair colour, age, name, address", "Weather, language, fees, transport, music", "Sleep, reading, homework, art, drama"],
    answer: "Diet, exercise, smoking, drugs and sex",
    explanation: "The CAPS names eating habits, lack of exercise, smoking, substance abuse and unsafe sexual behaviour.",
  },
  {
    prompt: "Which habit raises the risk of lung cancer?",
    options: ["Walking to school", "Drinking water", "Sleeping early", "Smoking"],
    answer: "Smoking",
    explanation: "Smoking is a major cause of lung cancer and heart disease.",
  },
  {
    prompt: "Which habit raises the risk of high blood pressure?",
    options: ["Eating fresh vegetables on most days", "Walking for half an hour a day", "Drinking enough clean water daily", "Salty food and a lack of exercise"],
    answer: "Salty food and a lack of exercise",
    explanation: "A diet high in salt and fat and a lack of exercise raise blood pressure.",
  },
  {
    prompt: "Which behaviour raises the risk of a sexually transmitted infection?",
    options: ["Playing sport after school", "Eating a lot of fruit", "Unsafe sexual behaviour", "Studying late at night"],
    answer: "Unsafe sexual behaviour",
    explanation: "Unprotected sex with an infected partner can pass on an STI, including HIV.",
  },
  {
    prompt: "A learner uses drugs and then rides a bicycle on the road. Which risk is raised by substance abuse?",
    options: ["A better memory", "Accidents", "Faster fitness", "A lower stress level"],
    answer: "Accidents",
    explanation: "Substance abuse affects judgement and balance, so accidents are more likely.",
  },
  {
    prompt: "Heavy rain floods homes built in a river bed. Which human factor turned the rain into a disaster?",
    options: ["The colour of the muddy water", "Building in an unsafe place", "The name of the local river", "The number of clouds that day"],
    answer: "Building in an unsafe place",
    explanation: "People's choices, such as where they build, decide how much harm a hazard does.",
  },
  {
    prompt: "Which is a human factor that causes road accidents?",
    options: ["A clear and sunny day", "A new road sign on the road", "Speeding and drunk driving", "A short trip to the shop"],
    answer: "Speeding and drunk driving",
    explanation: "Human behaviour causes most road accidents.",
  },
  {
    prompt: "Which is a way of preventing a shack fire?",
    options: ["Leaving a heater on while asleep", "Keeping flames away from cloth", "Hanging clothes over a hot stove", "Building homes close together"],
    answer: "Keeping flames away from cloth",
    explanation: "Safe use of flames and an escape plan lower the risk of fire.",
  },
  {
    prompt: "Why is it unfair to blame the person alone for ill-health?",
    options: ["Illness is the fault of the doctor", "Poverty has little link with health", "Some causes are not in their hands", "People cannot change their habits"],
    answer: "Some causes are not in their hands",
    explanation: "Social factors such as poverty can limit a person's choices.",
  },
  {
    prompt: "Which is an example of a crisis caused by human factors?",
    options: ["A long summer holiday at the coast", "A birthday party at home today", "A family in debt after a job loss", "A school athletics day at the field"],
    answer: "A family in debt after a job loss",
    explanation: "Job loss and debt can lead to a family crisis.",
  },
];

const HumanFactorsIllHealth = () => (
  <CapsSubjectTopic
    title="Human Factors in Ill-Health, Accidents and Disasters"
    subtitle="Psychological, social, religious and cultural factors, behaviour that harms health, and the human side of accidents and disasters"
    learnSteps={learnSteps}
    task="gr12-human-factors-ill-health-t3"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default HumanFactorsIllHealth;
