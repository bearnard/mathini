import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You exercise, sleep well and eat a balanced diet. Which facet of your lifestyle are you looking after?",
    options: ["Physical", "Spiritual", "Social", "Emotional"],
    answer: "Physical",
    explanation: "Exercise, sleep and diet look after the physical facet.",
  },
  {
    prompt: "You talk to a friend about a hard day. Which facet does this support?",
    options: ["Physical", "Spiritual", "Emotional", "Economic"],
    answer: "Emotional",
    explanation: "Talking about feelings supports emotional well-being.",
  },
  {
    prompt: "Which of these makes healthy choices harder for a family?",
    options: ["A supportive community in use for a user", "A positive role model at work in a lab", "Good access to information in a file", "Poverty and an unsafe environment"],
    answer: "Poverty and an unsafe environment",
    explanation: "Poverty and an unsafe area limit the healthy choices people can make.",
  },
  {
    prompt: "You cross the road while looking at your phone and nearly get hit. What caused the near accident?",
    options: ["An unsafe behaviour", "A lack of rainfall in use", "A broken stair at work", "Good luck in a file on a system"],
    answer: "An unsafe behaviour",
    explanation: "Looking at a phone near traffic is an unsafe behaviour.",
  },
  {
    prompt: "A broken step at a school can cause a fall. What cause of accidents is this?",
    options: ["An unsafe attitude on a device", "A lack of skills in use for a user", "An unsafe environment", "An emotional factor at work"],
    answer: "An unsafe environment",
    explanation: "A faulty place is an unsafe environment.",
  },
  {
    prompt: "You rush across the street because you are angry. Which cause of accidents is this?",
    options: ["An unsafe environment", "A lack of knowledge", "A wet road", "An emotional factor"],
    answer: "An emotional factor",
    explanation: "Anger and stress can lead to careless decisions.",
  },
  {
    prompt: "You use a machine for the first time without being shown how. What is the main cause of risk?",
    options: ["A lack of exercise", "A lack of skills", "Too much sleep", "A friendly teacher"],
    answer: "A lack of skills",
    explanation: "Not having training raises the risk of an accident.",
  },
  {
    prompt: "Which choice reduces the risk of injury in a car?",
    options: ["Sitting on the back shelf", "Wearing a seatbelt", "Opening the window to shout", "Leaning out of the door"],
    answer: "Wearing a seatbelt",
    explanation: "A seatbelt protects you in a crash.",
  },
  {
    prompt: "You walk at night and wear something bright. Why?",
    options: ["It keeps you warm", "Drivers can see you", "It lets you walk faster", "It makes you feel taller"],
    answer: "Drivers can see you",
    explanation: "Bright clothing makes you visible to drivers.",
  },
  {
    prompt: "Someone is injured near you. What should you do?",
    options: ["Leave quickly and say nothing at work in a lab", "Call for help and stay with the person", "Move them without any thought in a file on a system", "Take photographs for later for a user at a school"],
    answer: "Call for help and stay with the person",
    explanation: "Calling for help and staying with the person is the safest step.",
  },
  {
    prompt: "Which food group mainly gives you energy for sport?",
    options: ["Salt", "Sweets only", "Starchy foods", "Bottled flavouring"],
    answer: "Starchy foods",
    explanation: "Starchy foods are a main source of energy.",
  },
  {
    prompt: "Which food group helps to build and repair your body?",
    options: ["Protein foods", "Sugary drinks", "Salt", "Fizzy drinks"],
    answer: "Protein foods",
    explanation: "Beans, eggs, meat and fish give protein for growth and repair.",
  },
  {
    prompt: "Why is water important when you play sport?",
    options: ["It keeps your body hydrated", "It makes you taller at a school", "It replaces a meal for a task in use", "It stops all tiredness in a program"],
    answer: "It keeps your body hydrated",
    explanation: "Water replaces what you lose in sweat.",
  },
  {
    prompt: "Which snack is the better choice between meals?",
    options: ["A large sugary sweet", "A bag of salty chips", "A piece of fruit", "A fizzy drink"],
    answer: "A piece of fruit",
    explanation: "Fruit gives vitamins and fibre with less sugar.",
  },
];

const HealthyLifestyleAccidentsNutrition = () => (
  <CapsSubjectTopic
    title="A Healthy Balanced Lifestyle: Accidents and Nutrition"
    subtitle="The facets of a healthy lifestyle, why accidents happen and how to prevent them, and what you need to eat"
    learnSteps={learnSteps}
    task="gr11-healthy-lifestyle-accidents-nutrition-t3"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default HealthyLifestyleAccidentsNutrition;
