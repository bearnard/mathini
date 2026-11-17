import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which is a physical long-term effect of regular activity?",
    options: ["A louder, deeper voice", "A stronger heart", "A much longer name", "A heavier school bag"],
    answer: "A stronger heart",
    explanation: "Regular activity strengthens the heart and helps to keep a healthy weight.",
  },
  {
    prompt: "Which is a mental effect of regular activity?",
    options: ["A lower school fee each term", "Less stress, better focus", "A faster internet speed at home", "More homework every afternoon"],
    answer: "Less stress, better focus",
    explanation: "Activity helps the mind to cope with stress.",
  },
  {
    prompt: "Which is a social effect of playing a team sport?",
    options: ["Friendships and team spirit", "A smaller class size at school", "A brand new school uniform", "A later bedtime on weekdays"],
    answer: "Friendships and team spirit",
    explanation: "Team sport builds friendships and a sense of belonging.",
  },
  {
    prompt: "Which is an emotional effect of regular activity?",
    options: ["A longer holiday at the coast", "A louder alarm clock at dawn", "More confidence, better mood", "A smaller bag for the school day"],
    answer: "More confidence, better mood",
    explanation: "Being active helps people to feel better about themselves.",
  },
  {
    prompt: "What does an action plan for physical activity state?",
    options: ["The goal, activity, days and minutes", "The name of the best player in a team", "The price of a new sports shirt", "The weather forecast for next year"],
    answer: "The goal, activity, days and minutes",
    explanation: "A plan makes the goal clear and measurable.",
  },
  {
    prompt: "A weekly plan has 30, 0, 45, 0, 30, 60 and 0 minutes. What is the total?",
    options: ["135 minutes", "165 minutes", "105 minutes", "205 minutes"],
    answer: "165 minutes",
    explanation: "30 + 45 + 30 + 60 = 165 minutes.",
  },
  {
    prompt: "On how many days is the plan 30, 0, 45, 0, 30, 60, 0 active?",
    options: ["3 days", "5 days", "7 days", "4 days"],
    answer: "4 days",
    explanation: "Four days have more than 0 minutes: Mon, Wed, Fri and Sat.",
  },
  {
    prompt: "A learner aims for 150 minutes a week and plans 105 minutes. How many minutes short is the plan?",
    options: ["55 minutes", "35 minutes", "45 minutes", "105 minutes"],
    answer: "45 minutes",
    explanation: "150 - 105 = 45 minutes.",
  },
  {
    prompt: "Why should a plan be realistic?",
    options: ["It must be one the learner can keep", "Hard plans are the best kind of plan", "Easy plans cannot be changed later on", "Plans are not checked after a week"],
    answer: "It must be one the learner can keep",
    explanation: "A realistic plan is more likely to become a habit.",
  },
  {
    prompt: "Why should a learner check the plan each week?",
    options: ["To change it if it is too hard", "To hide a missed session from others", "To avoid exercise for the next month", "To please a friend and a teacher"],
    answer: "To change it if it is too hard",
    explanation: "Checking helps the plan to grow with the learner.",
  },
  {
    prompt: "Which is a way round the barrier \"no gym\"?",
    options: ["Wait until a new gym opens", "Stop being active until later", "Spend all your money on a machine", "Walk, run or skip at home"],
    answer: "Walk, run or skip at home",
    explanation: "Many forms of activity are free and need no gym.",
  },
  {
    prompt: "Which is a way round the barrier \"no time\"?",
    options: ["Skip your sleep to find more time", "Ten minutes, three times a day", "Give up your studies for a month", "Wait for a free year to begin"],
    answer: "Ten minutes, three times a day",
    explanation: "Short sessions add up through the day.",
  },
  {
    prompt: "Regular activity lowers the risk of which lifestyle disease?",
    options: ["Heart disease", "A broken window", "A flat tyre", "A lost book"],
    answer: "Heart disease",
    explanation: "Activity strengthens the heart and lowers blood pressure.",
  },
  {
    prompt: "What is a value-added benefit of regular activity?",
    options: ["A free holiday to a faraway place", "A lower tax bill at the end of the year", "A higher fuel price at the garage", "Better control of weight and stress"],
    answer: "Better control of weight and stress",
    explanation: "Besides lowering disease risk, activity helps with weight and stress.",
  },
];

const PhysicalActivityPlan = () => (
  <CapsSubjectTopic
    title="A Long-Term Physical Activity Plan"
    subtitle="The long-term effects of being active, building an action plan, and the benefits for lifestyle diseases"
    learnSteps={learnSteps}
    task="gr12-physical-activity-plan-t3"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalActivityPlan;
