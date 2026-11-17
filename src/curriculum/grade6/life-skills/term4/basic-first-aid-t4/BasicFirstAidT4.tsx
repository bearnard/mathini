import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is first aid?",
    options: ["A visit to a doctor next week", "A kind of medicine for children", "A game played at school clinics", "Quick help for a hurt person"],
    answer: "Quick help for a hurt person",
    explanation: "First aid is the first help given to a hurt or ill person before a doctor or an ambulance arrives.",
  },
  {
    prompt: "A classmate falls and is badly hurt. What should you do first?",
    options: ["Move the child quickly to the shade", "Shout for an adult and get help", "Give the child something to drink", "Run home to tell your family"],
    answer: "Shout for an adult and get help",
    explanation: "For anything serious, get an adult and call for help first.",
  },
  {
    prompt: "In an emergency, which of these numbers calls an ambulance?",
    options: ["10177", "10111", "0861 555 777", "116"],
    answer: "10177",
    explanation: "The ambulance number is 10177. From a cell phone you can also phone 112.",
  },
  {
    prompt: "What is the first thing to do for a small cut?",
    options: ["Rub dry sand into the cut now", "Rinse it with clean water", "Leave it open to air for a day", "Cover it with a wet leaf"],
    answer: "Rinse it with clean water",
    explanation: "Rinse a small cut with clean water and then cover it with a clean plaster.",
  },
  {
    prompt: "A cut is bleeding. What should an adult press on it?",
    options: ["A bag of warm sand", "A dry piece of paper", "A clean cloth", "A handful of leaves"],
    answer: "A clean cloth",
    explanation: "Press firmly on the wound with a clean cloth to help the bleeding to stop.",
  },
  {
    prompt: "How can you help a bruise?",
    options: ["Rub it hard until it feels warm", "Hold a wrapped cold pack on it", "Soak it in very hot water", "Press a heavy book hard on it"],
    answer: "Hold a wrapped cold pack on it",
    explanation: "A cold pack, wrapped in a cloth and held on for a short time, helps a bruise.",
  },
  {
    prompt: "A person has a scald from hot water. What should you do first?",
    options: ["Spread butter over the burnt skin", "Press ice hard on the skin", "Rub toothpaste over the skin", "Cool it under running water"],
    answer: "Cool it under running water",
    explanation: "Cool a burn or scald under cool running water for at least 10 minutes.",
  },
  {
    prompt: "A burn needs cooling under running water for what length of time?",
    options: ["Two seconds", "A few seconds", "About half a minute", "At least 10 minutes"],
    answer: "At least 10 minutes",
    explanation: "A burn needs at least 10 minutes under cool running water.",
  },
  {
    prompt: "Which of these helps to prevent sunburn?",
    options: ["Playing outside without a hat", "Wearing a hat and sunscreen", "Lying in the sun at midday", "Wetting your face in the sun"],
    answer: "Wearing a hat and sunscreen",
    explanation: "A hat, sunscreen and shade in the middle of the day help to prevent sunburn.",
  },
  {
    prompt: "A person has been bitten by a snake. What should you do?",
    options: ["Cut the bite open and suck it", "Keep still and get to hospital", "Tie a very tight band on the leg", "Make the person run for help fast"],
    answer: "Keep still and get to hospital",
    explanation: "Keep the person still and calm and get medical help. Do not cut or suck the bite.",
  },
  {
    prompt: "A child has swallowed something poisonous. What must you not do?",
    options: ["Tell an adult at once", "Make the child vomit", "Keep the container to show", "Phone the poisons helpline"],
    answer: "Make the child vomit",
    explanation: "Making a person vomit can cause more harm. Get an adult and phone for help.",
  },
  {
    prompt: "A person is choking and cannot cough, speak or breathe. What should you do?",
    options: ["Give the person a drink of water", "Call an adult and phone 10177", "Wait a while to see if it passes", "Slap the person hard on the face"],
    answer: "Call an adult and phone 10177",
    explanation: "If a person cannot cough, speak or breathe, get an adult and call for emergency help straight away.",
  },
];

const BasicFirstAidT4 = () => (
  <CapsSubjectTopic
    title="Basic First Aid"
    subtitle="Cuts, burns, sunburn, stings, bites, poisoning, choking, and when to get help"
    learnSteps={learnSteps}
    task="gr6-basic-first-aid-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default BasicFirstAidT4;
