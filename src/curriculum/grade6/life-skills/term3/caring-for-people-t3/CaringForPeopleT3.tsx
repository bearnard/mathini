import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a need that every person has?",
    options: ["The newest cell phone model", "Food and a safe place", "A holiday by the sea each year", "A very large house with a pool"],
    answer: "Food and a safe place",
    explanation: "Basic needs include food, shelter, safety, friends and love. The others are wants.",
  },
  {
    prompt: "What is a view?",
    options: ["A picture that hangs on a wall", "A kind of rule at the school", "A person's own idea or opinion", "A meal that is shared at lunch"],
    answer: "A person's own idea or opinion",
    explanation: "A view is what a person thinks. Different people may have different views.",
  },
  {
    prompt: "A new classmate sits alone at break. What is a caring response?",
    options: ["Invite the classmate to join in", "Pretend that you did not see him", "Laugh at the way the classmate looks", "Tell the others to stay away from him"],
    answer: "Invite the classmate to join in",
    explanation: "Noticing a need and acting kindly helps the classmate to feel welcome.",
  },
  {
    prompt: "A friend has a different view from yours. What should you do first?",
    options: ["Tell the friend that she is wrong", "Listen to what the friend says", "Walk away and stop talking", "Shout until she agrees"],
    answer: "Listen to what the friend says",
    explanation: "Listening shows respect. You can disagree without being unkind.",
  },
  {
    prompt: "Which sentence tells someone how you feel without hurting them?",
    options: ["You are a mean and horrible person", "I feel sad when you leave me out", "Nobody ever wants to play with you", "I hate you for leaving me out"],
    answer: "I feel sad when you leave me out",
    explanation: "Saying how you feel, without blaming or using names, is a kind way to say what you need.",
  },
  {
    prompt: "Why should you use a calm voice when you say what you need?",
    options: ["Calm voices make people afraid of you", "Shouting is a better way to be heard", "A calm voice shows that you do not care", "The other person will listen"],
    answer: "The other person will listen",
    explanation: "A calm voice keeps the other person from feeling attacked, so they listen.",
  },
  {
    prompt: "What is an act of kindness?",
    options: ["A gift that is bought only for a prize", "A job that is done to earn some money", "A favour that is done to get one back", "A caring act done without a reward"],
    answer: "A caring act done without a reward",
    explanation: "Kindness is giving help or care because we care, not because we want something in return.",
  },
  {
    prompt: "Which of these is an act of kindness?",
    options: ["Sharing lunch with a hungry friend", "Teasing a child about her shoes", "Keeping the best seat for yourself", "Leaving a mess for others to clear up"],
    answer: "Sharing lunch with a hungry friend",
    explanation: "Sharing food with someone who has none is a caring act.",
  },
  {
    prompt: "Does an act of kindness have to cost money?",
    options: ["No, a kind word or a helping hand", "Yes, it must be a gift that is bought", "Yes, it must be a very big act", "No, it must be done in total secret"],
    answer: "No, a kind word or a helping hand",
    explanation: "Small acts, such as a smile, a thank you or help with a bag, are acts of kindness.",
  },
  {
    prompt: "An older neighbour is struggling with heavy shopping. What is a kind action?",
    options: ["Walk past quickly without looking", "Offer to help carry the bags", "Tell her to hurry up", "Ask her for some money for helping"],
    answer: "Offer to help carry the bags",
    explanation: "Offering to help is a caring act. Always check with a parent first if you go to a neighbour's house.",
  },
  {
    prompt: "Why is it important to listen to views that differ from yours?",
    options: ["Other people are not right at times", "Listening makes your view change at once", "People have the right to their views", "It shows that you are the best person"],
    answer: "People have the right to their views",
    explanation: "Listening shows respect, and we learn from other people's ideas.",
  },
  {
    prompt: "On Mandela Day, what do people do with their 67 minutes?",
    options: ["Do kind things for others", "Rest quietly at home alone", "Study hard for the tests", "Travel to a faraway place"],
    answer: "Do kind things for others",
    explanation: "On Mandela Day, 18 July, people give 67 minutes of their time to do something kind for others.",
  },
];

const CaringForPeopleT3 = () => (
  <CapsSubjectTopic
    title="Caring for People"
    subtitle="Others' needs and views, saying what you need kindly, and acts of kindness"
    learnSteps={learnSteps}
    task="gr6-caring-for-people-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CaringForPeopleT3;
