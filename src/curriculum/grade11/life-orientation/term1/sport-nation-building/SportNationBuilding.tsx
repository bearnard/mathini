import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You cheer for a national team with people of every background. How does this help the nation?",
    options: ["It stops all rival matches in the country", "It removes the need for referees", "It builds a shared identity and pride", "It gives players a place in parliament"],
    answer: "It builds a shared identity and pride",
    explanation: "Supporting a team together builds unity and pride.",
  },
  {
    prompt: "In which year did South Africa host a Rugby World Cup that helped to unite many people?",
    options: ["1948", "1976", "1995", "2024"],
    answer: "1995",
    explanation: "The 1995 Rugby World Cup is remembered for its role in national unity.",
  },
  {
    prompt: "A fan shouts racist abuse at a player. How does this affect nation building?",
    options: ["It builds unity among fans", "It damages unity and hurts people", "It helps the players to improve", "It makes the referee’s job easier"],
    answer: "It damages unity and hurts people",
    explanation: "Racist abuse divides people and harms the image of sport.",
  },
  {
    prompt: "Your team loses and you congratulate the winners. What kind of behaviour is this?",
    options: ["Negative behaviour", "Positive behaviour", "Illegal behaviour", "Random behaviour"],
    answer: "Positive behaviour",
    explanation: "Congratulating the opposition shows respect and good sportsmanship.",
  },
  {
    prompt: "A player admits to a foul the referee missed. What does this show?",
    options: ["Weakness in the team", "A lack of training", "Disrespect for the rules", "Honesty and fair play"],
    answer: "Honesty and fair play",
    explanation: "Admitting a foul shows honesty even if it costs your team.",
  },
  {
    prompt: "Which of these is a negative behaviour of spectators?",
    options: ["Applauding good play by both teams", "Obeying the stadium rules", "Helping an injured player", "Throwing objects onto the field"],
    answer: "Throwing objects onto the field",
    explanation: "Throwing objects is dangerous and shows disrespect.",
  },
  {
    prompt: "You feel angry at a late goal. Which response helps most?",
    options: ["Shout at the referee", "Push the nearest fan", "Take a breath and stay calm", "Leave the stadium on a rampage"],
    answer: "Take a breath and stay calm",
    explanation: "Staying calm stops anger from becoming harmful behaviour.",
  },
  {
    prompt: "Which trigger can make crowd trouble more likely?",
    options: ["A clear stadium rule", "Alcohol at a match", "A fair referee", "A good seat view"],
    answer: "Alcohol at a match",
    explanation: "Alcohol lowers self-control and can start or worsen trouble.",
  },
  {
    prompt: "A group of fans starts to insult the other team’s supporters. What should you do?",
    options: ["Walk away from the trouble", "Join in the chanting in a lab", "Throw a bottle on a system in a program", "Film it and shout louder at a school"],
    answer: "Walk away from the trouble",
    explanation: "Walking away avoids being drawn into crowd pressure.",
  },
  {
    prompt: "Your school asks every team to sign a pledge to play fairly. What is this?",
    options: ["A positive behaviour programme", "A trigger for violence for a task", "A form of doping in a program at work", "A way of match fixing on a device"],
    answer: "A positive behaviour programme",
    explanation: "A fair play pledge is a programme that promotes good conduct.",
  },
  {
    prompt: "Which group is affected by the way spectators behave at a match?",
    options: ["Players, other fans and the community", "The referee on the day for a task in use", "The coach of the team in a program at work", "The shop next to the stadium on a device"],
    answer: "Players, other fans and the community",
    explanation: "Behaviour affects participants, spectators, the community and the nation.",
  },
  {
    prompt: "A community club offers free sport to young people on Saturdays. How can this support nation building?",
    options: ["It gives a safe place and builds teamwork", "It stops all sport in schools on a system in a program", "It removes the need for teachers at a school", "It raises the price of tickets for a task in use"],
    answer: "It gives a safe place and builds teamwork",
    explanation: "Community sport builds teamwork, skills and a sense of belonging.",
  },
  {
    prompt: "Doping and match fixing are examples of what in sport?",
    options: ["Good fair play behaviour for a task in use", "Compulsory team practice in a program at work", "Behaviour that harms trust in sport", "Safe warm-up routines on a device in a file"],
    answer: "Behaviour that harms trust in sport",
    explanation: "Cheating destroys the trust that fans and players place in sport.",
  },
  {
    prompt: "Why should you respect the referee even when you disagree?",
    options: ["Referees are perfect judges at matches", "A fair game needs respect for decisions", "Players have to stay silent at matches", "The crowd decides the final score at matches"],
    answer: "A fair game needs respect for decisions",
    explanation: "Respecting decisions keeps sport fair, and a captain may politely raise a concern.",
  },
];

const SportNationBuilding = () => (
  <CapsSubjectTopic
    title="Sport and Nation Building"
    subtitle="How players and spectators behave, what triggers it, and how sport can bring a country together or pull it apart"
    learnSteps={learnSteps}
    task="gr11-sport-nation-building-t1"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default SportNationBuilding;
