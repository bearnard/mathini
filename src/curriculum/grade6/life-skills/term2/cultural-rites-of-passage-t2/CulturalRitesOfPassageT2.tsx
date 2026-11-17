import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is a rite of passage?",
    options: ["A ceremony for an important life stage", "A road that leads to a new town", "A game played between two schools", "A rule that is kept in a classroom at times"],
    answer: "A ceremony for an important life stage",
    explanation: "A rite of passage is a ceremony or custom that marks a stage such as birth, marriage or death.",
  },
  {
    prompt: "Which four life stages does this topic cover?",
    options: ["School, sport, travel and work life", "Birth, baptism, a wedding and death", "Play, rest, food and the sleep of a child", "Spring, summer, autumn and winter times"],
    answer: "Birth, baptism, a wedding and death",
    explanation: "These are important stages of life that many cultures and religions mark with ceremonies.",
  },
  {
    prompt: "What does the meaning of a ceremony tell us?",
    options: ["How much the ceremony costs the host", "What the ceremony says about life", "How many guests came to the ceremony", "Where the ceremony was held that day"],
    answer: "What the ceremony says about life",
    explanation: "The meaning is the idea behind the ceremony, such as welcoming a new life.",
  },
  {
    prompt: "Why do families hold a ceremony when a baby is born?",
    options: ["To welcome and give thanks for the baby", "To test whether the baby is very strong at school", "To choose the future job of the baby", "To keep the baby away from the visitors"],
    answer: "To welcome and give thanks for the baby",
    explanation: "Welcoming ceremonies give thanks for a new life and introduce the child to the family and community.",
  },
  {
    prompt: "What is baptism?",
    options: ["A school ceremony for new learners as well", "A Christian ceremony welcoming a child", "A ceremony that ends a marriage", "A sports event for young children"],
    answer: "A Christian ceremony welcoming a child",
    explanation: "In baptism a child is welcomed into the Christian community.",
  },
  {
    prompt: "A baby is given a name at a welcoming ceremony. Which kind of significance is this?",
    options: ["Personal: the child gets a name and place", "Social: a king gets a new subject", "Money: the family earns something", "None: the name has no meaning to it in town at home"],
    answer: "Personal: the child gets a name and place",
    explanation: "A name and a place in the family mean something to the child, so this is a personal significance.",
  },
  {
    prompt: "Why do relatives and friends come to a welcoming ceremony?",
    options: ["They must pay a fee to the baby", "They are chosen by the government today", "They want to take the baby home", "The community accepts the new member"],
    answer: "The community accepts the new member",
    explanation: "This is a social significance: the community welcomes the new member.",
  },
  {
    prompt: "What is a wedding?",
    options: ["A meeting of the school committee", "A prize-giving at the school hall", "A funeral for an old family friend these days", "A ceremony in which two people marry"],
    answer: "A ceremony in which two people marry",
    explanation: "At a wedding two people promise to care for each other, and their families celebrate with them.",
  },
  {
    prompt: "What is the social significance of a wedding?",
    options: ["The bride alone receives a gift", "Two families are linked and share joy", "The groom alone gives a speech", "The guests are paid to attend it in general"],
    answer: "Two families are linked and share joy",
    explanation: "A wedding joins two families and brings the community together.",
  },
  {
    prompt: "Weddings in different cultures and religions are:",
    options: ["Held in the same way in each culture", "Held in different ways, all with respect", "Held in a church building and nowhere else", "Held by rich families and no others"],
    answer: "Held in different ways, all with respect",
    explanation: "Songs, dress, food and places differ between cultures and religions.",
  },
  {
    prompt: "Why do families hold a funeral or other ceremony when a person dies?",
    options: ["To celebrate that the person has gone away from us", "To choose who will get the house", "To give the school a day of holiday", "To remember the person and comfort one another"],
    answer: "To remember the person and comfort one another",
    explanation: "The ceremony honours the person and helps the family and friends to grieve and say goodbye.",
  },
  {
    prompt: "A classmate's grandmother has died. What is a kind thing to do?",
    options: ["Tell your classmate to stop crying", "Make jokes to cheer your classmate up", "Say you are sorry and listen well", "Ask for the money the family spent"],
    answer: "Say you are sorry and listen well",
    explanation: "Being gentle and listening shows respect and care for a person who is grieving.",
  },
];

const CulturalRitesOfPassageT2 = () => (
  <CapsSubjectTopic
    title="Cultural Rites of Passage"
    subtitle="Birth and baptism, weddings and death: their meaning and significance"
    learnSteps={learnSteps}
    task="cultural-rites-of-passage-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CulturalRitesOfPassageT2;
