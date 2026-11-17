import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is cruelty to an animal?",
    options: ["An act that causes it pain or fear", "Taking the animal to the vet for a check", "Giving the animal food and a clean bed", "Teaching the animal a gentle new trick"],
    answer: "An act that causes it pain or fear",
    explanation: "Cruelty is any act that causes an animal pain, fear or suffering, including neglect.",
  },
  {
    prompt: "Which of these is an act of cruelty?",
    options: ["Giving a dog fresh water every day", "Leaving a dog chained in the sun", "Walking a dog on a lead in the park", "Brushing the coat of a dog at home"],
    answer: "Leaving a dog chained in the sun",
    explanation: "A chained animal without shade or water suffers, so this is cruelty.",
  },
  {
    prompt: "A family goes on holiday and leaves its cat without food or water. What is this?",
    options: ["Neglect, a kind of cruelty", "A normal part of owning a cat at home", "A kind way of teaching the cat", "Good care of an animal by the family"],
    answer: "Neglect, a kind of cruelty",
    explanation: "Not giving an animal food, water or shelter is neglect, and it is cruel.",
  },
  {
    prompt: "What does a pet need every day?",
    options: ["A new toy and a ribbon", "A holiday by the sea", "A bath in the cold rain", "Food and clean water"],
    answer: "Food and clean water",
    explanation: "Food and clean water are basic needs. A pet also needs shelter, exercise and attention.",
  },
  {
    prompt: "Why should a pet visit the vet and have vaccinations?",
    options: ["To make the pet look more clever in town", "To stop the pet from needing any food", "To teach the pet how to obey the family", "To stay healthy and safe from disease"],
    answer: "To stay healthy and safe from disease",
    explanation: "Vaccinations protect pets from disease, and a vet treats them when they are sick.",
  },
  {
    prompt: "Why should you ask a parent or caregiver before you get a pet?",
    options: ["A pet lives for a short week only", "A pet needs care for its whole life", "A pet costs no money to keep at home", "A pet can look after itself fully"],
    answer: "A pet needs care for its whole life",
    explanation: "Taking care of a pet is a long responsibility, so the whole family must be ready.",
  },
  {
    prompt: "What does SPCA stand for?",
    options: ["School for the Protection of Cats and Animals", "South African Pet Care Association Group", "Society for Prevention of Cruelty to Animals", "Society for Pets in Children's Areas Only"],
    answer: "Society for Prevention of Cruelty to Animals",
    explanation: "The SPCA helps hurt and neglected animals and acts against cruelty.",
  },
  {
    prompt: "Which of these is a place of safety for animals?",
    options: ["A busy road in town", "An animal shelter", "An empty yard at night", "A locked car in the sun"],
    answer: "An animal shelter",
    explanation: "Shelters care for stray and abandoned animals until they find a new home.",
  },
  {
    prompt: "You see a neighbour hitting a dog. What should you do?",
    options: ["Shout at the neighbour and chase him away", "Take the dog home without asking him first", "Tell a trusted adult who can report it", "Ignore it and walk away from there"],
    answer: "Tell a trusted adult who can report it",
    explanation: "Do not deal with it alone. A trusted adult can report cruelty to the SPCA or the police.",
  },
  {
    prompt: "A hurt wild animal is found near the school. What is the best action?",
    options: ["Take it home to keep as a new pet", "Feed it with food from the kitchen", "Poke it to see if it is alive or not", "Tell an adult so a centre can help"],
    answer: "Tell an adult so a centre can help",
    explanation: "A hurt wild animal needs expert care, and it may bite when frightened.",
  },
  {
    prompt: "Why is it unwise to go near a strange dog that is growling?",
    options: ["It wants to be teased by a child", "It may be afraid and bite", "It is a friendly dog that waits for us", "It is asking for a bath in the yard"],
    answer: "It may be afraid and bite",
    explanation: "A growling dog is warning you. Stay away and tell an adult.",
  },
  {
    prompt: "Which action is kind and safe around an unfamiliar pet?",
    options: ["Pull its tail to get its attention", "Hug it quickly from behind it", "Ask the owner before you pat it", "Take away its food bowl while it eats"],
    answer: "Ask the owner before you pat it",
    explanation: "Asking first and letting the animal sniff you keeps both you and the animal safe.",
  },
];

const CaringForAnimalsT3 = () => (
  <CapsSubjectTopic
    title="Caring for Animals"
    subtitle="Acts of cruelty, taking care of animals, protecting them, and places of safety"
    learnSteps={learnSteps}
    task="gr6-caring-for-animals-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CaringForAnimalsT3;
