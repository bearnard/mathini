import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is cultural heritage?",
    options: ["Only the old buildings in a big city", "The money that the government has saved", "The rules of a school sports team here", "Customs, languages and places from the past"],
    answer: "Customs, languages and places from the past",
    explanation: "Heritage includes languages, music, food, stories and places that are handed down.",
  },
  {
    prompt: "What does nation-building mean?",
    options: ["Building houses for a single community", "Making a new set of rules for a school", "People working together as one country", "Choosing a new flag every single year"],
    answer: "People working together as one country",
    explanation: "Nation-building is the work of bringing people together as one nation.",
  },
  {
    prompt: "How can cultural heritage help to unite a nation?",
    options: ["Respect for heritage helps people belong", "It shows that one culture is the very best", "It keeps the people of other cultures apart", "It means that all people must do the same"],
    answer: "Respect for heritage helps people belong",
    explanation: "When people respect and learn from each other's heritage, they feel that they belong together.",
  },
  {
    prompt: "Which of these is a national symbol?",
    options: ["A school badge", "A local shop sign", "A sports team shirt", "The national flag"],
    answer: "The national flag",
    explanation: "The flag, the anthem and the coat of arms are the main national symbols.",
  },
  {
    prompt: "How many colours does the South African flag have?",
    options: ["Three", "Six", "Four", "Nine"],
    answer: "Six",
    explanation: "The flag has six colours: black, gold, green, white, red and blue.",
  },
  {
    prompt: "On what date was the South African flag first flown?",
    options: ["16 June 1976", "21 March 1960", "27 April 1994", "9 August 1956"],
    answer: "27 April 1994",
    explanation: "The new flag was first flown on 27 April 1994, the day of the first democratic election.",
  },
  {
    prompt: "Which two songs does the national anthem join together?",
    options: ["Shosholoza and Thula Baba together", "Meadowlands and Pata Pata together", "Jerusalema and Asimbonanga together", "Nkosi Sikelel' iAfrika and Die Stem"],
    answer: "Nkosi Sikelel' iAfrika and Die Stem",
    explanation: "The anthem combines the two songs and is sung in five languages.",
  },
  {
    prompt: "What does the motto of the coat of arms mean?",
    options: ["The strong must lead", "One land, one king", "Diverse people unite", "Work is the road to wealth"],
    answer: "Diverse people unite",
    explanation: "The motto !ke e: /xarra //ke, in the language of the /Xam, means \"Diverse people unite\".",
  },
  {
    prompt: "Which national day is on 27 April?",
    options: ["Human Rights Day", "Freedom Day", "Heritage Day", "Women's Day"],
    answer: "Freedom Day",
    explanation: "Freedom Day remembers the first democratic election of 27 April 1994.",
  },
  {
    prompt: "What does Human Rights Day on 21 March remember?",
    options: ["The first democratic election in 1994", "The Sharpeville shootings of 1960", "The march of the women in the year 1956", "The birthday of Nelson Mandela in July"],
    answer: "The Sharpeville shootings of 1960",
    explanation: "Human Rights Day remembers Sharpeville and celebrates the human rights of all people.",
  },
  {
    prompt: "On which date is Heritage Day celebrated?",
    options: ["25 September", "24 November", "16 December", "24 September"],
    answer: "24 September",
    explanation: "On Heritage Day we celebrate the cultures, languages and traditions of all our people.",
  },
  {
    prompt: "How many minutes do people give to help others on Mandela Day?",
    options: ["27 minutes", "94 minutes", "67 minutes", "100 minutes"],
    answer: "67 minutes",
    explanation: "Mandela Day is on 18 July. People give 67 minutes to help others.",
  },
];

const NationBuildingHeritageT3 = () => (
  <CapsSubjectTopic
    title="Nation-Building and Cultural Heritage"
    subtitle="Heritage and unity, the national symbols, and the national days"
    learnSteps={learnSteps}
    task="nation-building-heritage-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default NationBuildingHeritageT3;
