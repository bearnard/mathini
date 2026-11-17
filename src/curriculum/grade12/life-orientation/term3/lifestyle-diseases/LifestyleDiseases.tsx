import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a lifestyle disease?",
    options: ["An illness made likelier by how we live", "An illness caused by one single germ only", "An illness that people are born with today", "An illness that follows a long journey"],
    answer: "An illness made likelier by how we live",
    explanation: "Eating habits, exercise, smoking and similar choices raise the risk of lifestyle diseases.",
  },
  {
    prompt: "Which is a lifestyle disease named in the CAPS?",
    options: ["A broken leg", "A cut finger", "Hypertension", "A sprained wrist"],
    answer: "Hypertension",
    explanation: "The CAPS lists cancer, hypertension, heart and circulatory disease, TB and STIs.",
  },
  {
    prompt: "Why is hypertension called a silent disease?",
    options: ["A person can feel well with high pressure", "It affects people who are very quiet people", "The sick person loses their own voice", "It spreads between people without contact"],
    answer: "A person can feel well with high pressure",
    explanation: "High blood pressure often has no signs, so only a check shows it.",
  },
  {
    prompt: "Smoking is a major cause of which cancer?",
    options: ["Lung cancer", "Skin cancer", "Bone cancer", "Brain cancer"],
    answer: "Lung cancer",
    explanation: "Smoking is a major cause of lung cancer.",
  },
  {
    prompt: "How does TB spread?",
    options: ["Through the air when a sick person coughs", "Through a handshake with a healthy friend", "Through eating fresh vegetables", "Through sharing a school bench"],
    answer: "Through the air when a sick person coughs",
    explanation: "TB germs spread through the air, especially in crowded, badly ventilated rooms.",
  },
  {
    prompt: "Why does crowded housing raise the risk of TB?",
    options: ["Germs pass easily in a small space", "Larger homes carry far more TB germs", "The walls of the home make people cough", "Neighbours share the same name and cough"],
    answer: "Germs pass easily in a small space",
    explanation: "In crowded, poorly ventilated rooms, TB germs spread more easily.",
  },
  {
    prompt: "Which is a way in which poverty raises the risk of heart disease?",
    options: ["Cheap food is often high in fat", "Rich people have a much weaker heart", "Poor people usually get a lot more sleep", "Clinics are far cheaper than any food"],
    answer: "Cheap food is often high in fat",
    explanation: "A family with little money may buy cheap, fatty food.",
  },
  {
    prompt: "How can a gender imbalance raise the risk of an STI?",
    options: ["Both partners have an equal say", "A partner may not insist on protection", "Boys and girls study the same subjects", "Men and women pay the same tax"],
    answer: "A partner may not insist on protection",
    explanation: "When one partner has less power, safe sex is harder to insist on.",
  },
  {
    prompt: "Which is an example of early detection?",
    options: ["A blood pressure check at the clinic", "Stopping medicine when you feel better", "Eating a fatty meal", "Ignoring a lump on the body"],
    answer: "A blood pressure check at the clinic",
    explanation: "A check can find a problem before it is serious.",
  },
  {
    prompt: "Which is an example of prevention?",
    options: ["Not smoking and exercising", "Taking no medicine", "Waiting until the illness is serious", "Sharing drugs with friends"],
    answer: "Not smoking and exercising",
    explanation: "Healthy habits prevent many lifestyle diseases.",
  },
  {
    prompt: "A patient feels better after two months of TB medicine. What must the patient do?",
    options: ["Stop the medicine at once today", "Take half of the dose each day", "Finish the full course of medicine", "Share the pills with a good friend"],
    answer: "Finish the full course of medicine",
    explanation: "TB is curable if the full course is taken.",
  },
  {
    prompt: "Why is care and support important for a person living with HIV?",
    options: ["It cures the HIV within a week or two", "It helps the person stay on treatment", "It means that medicine is not needed", "It removes the need for a clinic visit"],
    answer: "It helps the person stay on treatment",
    explanation: "Family and support groups encourage the person to keep up the treatment.",
  },
  {
    prompt: "Which is a human factor that raises the risk of a heart disease?",
    options: ["Regular exercise each week", "Eating many vegetables", "Enough sleep each night", "Fatty food and smoking"],
    answer: "Fatty food and smoking",
    explanation: "Fatty food and smoking harm the heart and blood vessels.",
  },
  {
    prompt: "Which list names the four kinds of intervention in the CAPS?",
    options: ["Money, travel, fashion, entertainment", "Reading, writing, counting, painting", "Sleeping, running, jumping, swimming", "Prevent, detect, treat, support"],
    answer: "Prevent, detect, treat, support",
    explanation: "The CAPS names prevention and control, early detection, treatment, and care and support.",
  },
];

const LifestyleDiseases = () => (
  <CapsSubjectTopic
    title="Lifestyle Diseases and Interventions"
    subtitle="Cancer, hypertension, heart disease, TB and STIs, how poverty and gender imbalances raise the risk, and how to prevent, detect and treat them"
    learnSteps={learnSteps}
    task="gr12-lifestyle-diseases-t3"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default LifestyleDiseases;
