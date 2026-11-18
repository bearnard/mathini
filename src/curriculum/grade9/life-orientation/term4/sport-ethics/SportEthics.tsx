import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What are sport ethics?',
    content: slide(
      <>
        <Rule>Sport ethics are the moral values that guide how people play and take part: fair play, honesty, respect for the rules, respect for opponents, officials and team-mates, and concern for safety. They apply in every physical activity, from team sport to a fun run, and the spirit of the game matters as much as winning.</Rule>
        <FactCards
          cards={[
            { title: 'Fair play', line1: 'play by the rules,', line2: 'win or lose' },
            { title: 'Honesty', line1: 'no cheating or', line2: 'pretending to be hurt' },
            { title: 'Respect', line1: 'for opponents, referees', line2: 'and team-mates' },
            { title: 'Safety', line1: 'do not put others', line2: 'at risk' },
          ]}
          aria="Sport ethics. Fair play: play by the rules, win or lose. Honesty: no cheating or pretending to be hurt. Respect: for opponents, referees and team-mates. Safety: do not put others at risk."
        />
        <Worked
          title="Name the value"
          steps={[
            'A player admits that the ball touched her last and gives the other team the throw-in: honesty.',
            'A team shakes hands with the opponents after losing: respect.',
            'A player refuses to tackle dangerously: concern for safety.',
          ]}
        />
        <Mistake>Believing that winning is the only thing that counts. A win without fair play is not a win to be proud of.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cheating and unfair behaviour',
    content: slide(
      <>
        <Rule>Cheating breaks the rules to gain an unfair advantage, for example by breaking a rule on purpose, lying about a score, using banned substances to improve performance (doping) or hurting an opponent. Other unfair behaviours include abusing referees, discrimination and bullying in teams. Cheating harms other players, damages the sport and can lead to penalties or bans.</Rule>
        <FactCards
          cards={[
            { title: 'Cheating', line1: 'breaking the rules', line2: 'to get an advantage' },
            { title: 'Doping', line1: 'banned substances', line2: 'harm health and fairness' },
            { title: 'Abuse', line1: 'insulting referees', line2: 'or opponents' },
            { title: 'Penalty', line1: 'a fine, ban or', line2: 'loss of a title' },
          ]}
          aria="Cheating and unfair behaviour. Cheating: breaking the rules to get an advantage. Doping: banned substances harm health and fairness. Abuse: insulting referees or opponents. Penalty: a fine, ban or loss of a title."
        />
        <Worked
          title="Spot the unfair act"
          steps={[
            'An athlete takes a banned substance to run faster: this is doping, which is cheating.',
            'A coach tells the players to hurt the best opponent: unfair, and it puts a person at risk.',
            'A supporter shouts insults at a referee: abuse, which is not respectful.',
          ]}
        />
        <Mistake>Thinking that cheating is fine if nobody sees it. It still harms others, and it harms your own honesty.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ethics for everyone: inclusion and good sportsmanship',
    content: slide(
      <>
        <Rule>Good sportsmanship means that everyone is treated with respect and has a fair chance to take part, whatever their gender, race, ability or background. Accept decisions of officials, encourage team-mates, congratulate winners and handle defeat well. Spectators and parents also show the values of sport by how they behave.</Rule>
        <StepFlow steps={['Know and follow the rules.', 'Include every player.', 'Accept the referee’s decision.', 'Congratulate the winners.']} aria="Four habits of good sportsmanship: know and follow the rules, include every player, accept the referee's decision, and congratulate the winners." />
        <Worked
          title="Show good sportsmanship"
          steps={[
            'Your team loses a close match.',
            'You accept the referee’s decisions without complaint.',
            'You shake hands with the winners and thank your coach and team-mates.',
          ]}
        />
        <Mistake>Excluding weaker players so that your team wins. Sport is for everyone, and inclusion is part of fair play.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two sport ethics.</>,
          <>What is doping?</>,
          <>How should you respond to a referee&rsquo;s decision?</>,
          <>Why is inclusion part of fair play?</>,
        ]}
        answers={[
          <>For example fair play and respect.</>,
          <>Using banned substances to improve performance.</>,
          <>Accept it respectfully.</>,
          <>Sport is for everyone, and every player must have a fair chance.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What are sport ethics?",
    options: ["The price of sports shoes", "The score of a final", "Values that guide how people play", "The length of a field"],
    answer: "Values that guide how people play",
    explanation: "They include fair play, honesty and respect.",
  },
  {
    prompt: "Which is an example of fair play?",
    options: ["Playing by the rules, win or lose", "Cheating to win", "Hurting the best player", "Arguing with the referee"],
    answer: "Playing by the rules, win or lose",
    explanation: "Fair play means following the rules and respecting others.",
  },
  {
    prompt: "A player admits that the ball touched her last. Which value is shown?",
    options: ["Greed", "Fear", "Boasting", "Honesty"],
    answer: "Honesty",
    explanation: "Telling the truth is part of fair play.",
  },
  {
    prompt: "Which is a sign of respect after a match?",
    options: ["Insulting the referee", "Shaking hands with the opponents", "Refusing to leave the field", "Mocking the other team"],
    answer: "Shaking hands with the opponents",
    explanation: "Respect continues after the final whistle.",
  },
  {
    prompt: "What is cheating in sport?",
    options: ["Training hard every single week", "Breaking rules to gain an edge", "Eating well before a big match", "Resting well before the game"],
    answer: "Breaking rules to gain an edge",
    explanation: "Cheating is unfair to other players.",
  },
  {
    prompt: "What is doping?",
    options: ["Eating a healthy meal before play", "Resting after a hard game", "Stretching before a long game", "Using banned substances to perform better"],
    answer: "Using banned substances to perform better",
    explanation: "Doping is cheating and it harms health.",
  },
  {
    prompt: "Why is doping wrong?",
    options: ["It is unfair and it harms health", "It is a school rule only", "It makes sport safe", "It helps everyone equally"],
    answer: "It is unfair and it harms health",
    explanation: "It breaks the rules and risks the athlete's health.",
  },
  {
    prompt: "What should a team do after a close loss?",
    options: ["Blame the referee for the result", "Refuse to shake hands with them", "Accept it and congratulate the winners", "Leave the field without a word"],
    answer: "Accept it and congratulate the winners",
    explanation: "Good sportsmanship includes handling defeat well.",
  },
  {
    prompt: "A supporter shouts insults at the referee. What is this?",
    options: ["Good sportsmanship", "A school rule", "Fair play", "Abusive and not respectful"],
    answer: "Abusive and not respectful",
    explanation: "Officials deserve respect.",
  },
  {
    prompt: "A coach tells players to hurt the best opponent. What is wrong with this?",
    options: ["It is good coaching advice", "It is unfair and dangerous", "It is a rule of the game", "It is a safe way to win"],
    answer: "It is unfair and dangerous",
    explanation: "Safety and fair play both matter.",
  },
  {
    prompt: "Why does fair play include every player in a team?",
    options: ["Every player must have a fair chance", "Only the best players matter", "Weaker players should leave", "Only boys may play"],
    answer: "Every player must have a fair chance",
    explanation: "Sport is for everyone.",
  },
  {
    prompt: "Which action shows concern for safety?",
    options: ["Tackling as hard as possible", "Ignoring an injured player", "Refusing to tackle dangerously", "Hiding an injury"],
    answer: "Refusing to tackle dangerously",
    explanation: "Safe play protects everyone.",
  },
  {
    prompt: "Do ethics matter when you take part in a fun run?",
    options: ["No, only to finals", "No, only to adults", "Yes, to all physical activities", "No, only to professionals"],
    answer: "Yes, to all physical activities",
    explanation: "Ethics apply in every physical activity.",
  },
  {
    prompt: "Apart from the score, what else matters in a game?",
    options: ["The spirit of the game", "The colour of the kit", "The size of the crowd", "The price of the ticket"],
    answer: "The spirit of the game",
    explanation: "Fair play and respect matter too.",
  },
];

const SportEthics = () => (
  <CapsSubjectTopic
    title="Sport Ethics"
    subtitle="Fair play, honesty, respect, cheating and doping, inclusion and good sportsmanship"
    learnSteps={learnSteps}
    task="gr9-sport-ethics-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SportEthics;
