import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Sport and the nation",
    content: slide(
      <>
        <Rule>Sport can unite people across race, language and class. When a whole country supports a team, people feel they belong to the same nation. Sport can also divide a country when it brings out violence, racism or corruption. How you behave as a player or a spectator makes a difference.</Rule>
        <KeyTable
          title="Sport and nation building"
          head={["Way sport helps", "Way sport harms"]}
          aria="Sport and nation building. Brings people together: Violence between rival fans. Builds pride and a shared identity: Racist abuse of players. Teaches teamwork and respect: Cheating, doping and match fixing. Gives role models: Excluding people who are different. Creates community events: Spending that ignores community needs."
          rows={[["Brings people together", "Violence between rival fans"], ["Builds pride and a shared identity", "Racist abuse of players"], ["Teaches teamwork and respect", "Cheating, doping and match fixing"], ["Gives role models", "Excluding people who are different"], ["Creates community events", "Spending that ignores community needs"]]}
        />
        <Worked
          steps={[
            <>In 1995 South Africa hosted the Rugby World Cup and the whole country cheered the winning team, which helped people to feel more united.</>,
            <>Fans who abuse an opposing team’s supporters do the opposite and damage the sense of unity.</>,
          ]}
        />
        <Mistake>Thinking that sport has no effect on society. How people behave in sport shapes how they treat each other outside it.</Mistake>
      </>,
    ),
  },
  {
    title: "Behaviour of players and spectators",
    content: slide(
      <>
        <Rule>Positive behaviour includes fair play, respect for officials and opponents, and supporting your team without abusing others. Negative behaviour includes violence, insults, racist chants, cheating and throwing objects. Both players and spectators set an example that others copy.</Rule>
        <KeyTable
          title="Positive and negative behaviour"
          head={["Positive", "Negative"]}
          aria="Positive and negative behaviour. Fair play and honesty: Cheating or doping. Respect for the referee: Shouting abuse at officials. Applauding good play by both sides: Racist or sexist chants. Helping an injured opponent: Fighting with rival fans. Obeying the stadium rules: Throwing objects onto the field."
          rows={[["Fair play and honesty", "Cheating or doping"], ["Respect for the referee", "Shouting abuse at officials"], ["Applauding good play by both sides", "Racist or sexist chants"], ["Helping an injured opponent", "Fighting with rival fans"], ["Obeying the stadium rules", "Throwing objects onto the field"]]}
        />
        <Worked
          steps={[
            <>A spectator claps when the other team scores a good goal. This shows respect and sets an example.</>,
            <>A player who admits to a foul shows honesty, even though it may cost the team.</>,
          ]}
        />
        <Mistake>Believing that only players matter. Spectators’ behaviour affects safety, the atmosphere and the image of the team.</Mistake>
      </>,
    ),
  },
  {
    title: "What triggers poor behaviour",
    content: slide(
      <>
        <Rule>Poor behaviour often has triggers. Strong rivalry, frustration at a decision, alcohol, crowd pressure and the wish to win at any cost can push people to act in ways they would not normally choose. Knowing the triggers helps you to stay calm and to choose how you respond.</Rule>
        <KeyTable
          title="Triggers and responses"
          head={["Trigger", "Helpful response"]}
          aria="Triggers and responses. Rivalry between teams: Support your team without insulting the rival. A decision you disagree with: Stay calm; the captain may speak to the referee. Alcohol: Avoid it before and during matches. Crowd pressure: Walk away from fans who start trouble. Losing: Congratulate the winners."
          rows={[["Rivalry between teams", "Support your team without insulting the rival"], ["A decision you disagree with", "Stay calm; the captain may speak to the referee"], ["Alcohol", "Avoid it before and during matches"], ["Crowd pressure", "Walk away from fans who start trouble"], ["Losing", "Congratulate the winners"]]}
        />
        <Worked
          steps={[
            <>You feel angry at a late goal. You take a breath, stay in your seat and leave calmly at the end.</>,
            <>A coach asks the team to shake hands with the opponents after every match.</>,
          ]}
        />
        <Mistake>Blaming everything on the referee. Poor decisions happen, but you remain responsible for your behaviour.</Mistake>
      </>,
    ),
  },
  {
    title: "Programmes and effects",
    content: slide(
      <>
        <Rule>Positive behaviour programmes, such as fair play campaigns, codes of conduct and school leagues, teach good conduct. The way people behave in sport affects participants, spectators, teams, opponents, the community and the nation. When the effect is good, sport supports nation building; when it is bad, it detracts from it.</Rule>
        <KeyTable
          title="Effects of behaviour"
          head={["Behaviour", "Effect on the nation"]}
          aria="Effects of behaviour. Fair play and respect: Builds trust and pride. Inclusive teams: Shows that people can work together. Violence at a match: Spreads fear and division. Racist abuse: Harms people and the image of the country. Community clubs and school leagues: Give young people a safe place and role models."
          rows={[["Fair play and respect", "Builds trust and pride"], ["Inclusive teams", "Shows that people can work together"], ["Violence at a match", "Spreads fear and division"], ["Racist abuse", "Harms people and the image of the country"], ["Community clubs and school leagues", "Give young people a safe place and role models"]]}
        />
        <Worked
          steps={[
            <>A school introduces a fair play pledge that all teams sign before the season.</>,
            <>A club in your area runs free sport for young people on Saturdays.</>,
          ]}
        />
        <Mistake>Seeing a match as only about winning. Sport can also build character and bring people together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How can sport help to build a nation?</>,
          <>Name one trigger of poor behaviour at a match.</>,
          <>What should you do if a referee makes a decision you disagree with?</>,
          <>Name a positive behaviour programme.</>,
        ]}
        answers={[
          <>It brings people together and builds pride and shared identity.</>,
          <>Alcohol, rivalry or crowd pressure.</>,
          <>Stay calm and respect it.</>,
          <>A fair play campaign or a code of conduct.</>,
        ]}
      />,
    ),
  },
];
