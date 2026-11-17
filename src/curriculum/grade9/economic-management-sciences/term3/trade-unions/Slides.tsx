import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { DISPUTE_STEPS } from '../../../../../components/diagrams/ems/ems9d-helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What a trade union is',
    content: slide(
      <>
        <Rule>A trade union is an organisation of workers that protects and promotes their interests, such as their pay, working hours and safety. The Constitution gives every worker the right to form and join a trade union.</Rule>
        <StepFlow steps={['Workers', 'Union', 'Employer']} notes={['Join together', 'Speak for them', 'Agrees terms']} aria="Workers join a union. The union speaks for them to the employer, who agrees terms of work with it." />
        <Worked
          steps={[
            'One worker on their own has little power to ask for a higher wage. Together, workers have more.',
            'Members pay a small fee. In return the union negotiates for them and helps them with problems at work.',
            'An employer may not dismiss a worker only for being a member of a union.',
          ]}
        />
        <Mistake>Thinking that a union is run by the employer. A union belongs to its members, who elect their leaders.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collective bargaining',
    content: slide(
      <>
        <Rule>Collective bargaining is when the union negotiates with the employer on behalf of all its members. The result is a collective agreement about pay, hours and leave that both sides accept.</Rule>
        <StepFlow steps={['Demands', 'Offers', 'Agreement']} notes={['Union asks', 'Employer replies', 'Both accept']} aria="Collective bargaining in three steps: the union makes demands, the employer makes offers, and both sides reach an agreement." />
        <Worked
          steps={[
            'A shop steward is a worker elected by the members at a workplace to speak for them.',
            'The union may ask for a higher wage. The employer may offer less, and the two sides negotiate.',
            'When they agree, the terms are written down and apply to all the workers covered.',
          ]}
        />
        <Mistake>Thinking that the union simply orders the employer. Bargaining means that both sides must give and take to reach an agreement.</Mistake>
      </>,
    ),
  },
  {
    title: 'When the two sides do not agree',
    content: slide(
      <>
        <Rule>If negotiation fails, there is a dispute. South Africa has a legal process under the Labour Relations Act, and the CCMA (Commission for Conciliation, Mediation and Arbitration) helps to settle disputes.</Rule>
        <StepFlow steps={[...DISPUTE_STEPS]} notes={['The two sides talk', 'A neutral person helps', 'Last resort']} aria={`The steps of a dispute: ${DISPUTE_STEPS.join(', then ')}.`} />
        <Worked
          steps={[
            'Negotiation: the union and the employer try to agree.',
            'Conciliation: a neutral person helps both sides to find an agreement. The person does not decide.',
            'Arbitration: a neutral person hears both sides and makes a decision that must be followed. A strike is the other possibility, if the law allows it.',
          ]}
        />
        <Mistake>Confusing conciliation with arbitration. A conciliator helps the two sides to agree; an arbitrator decides.</Mistake>
      </>,
    ),
  },
  {
    title: 'Strikes and their effects',
    content: slide(
      <>
        <Rule>A strike is when workers stop working together to put pressure on an employer. A lock-out is when the employer stops the workers from working. The Constitution gives workers the right to strike, and the law sets how this must be done.</Rule>
        <StepFlow steps={['Strike', 'Output falls', 'Pressure to settle']} notes={['Workers stop', 'Employer loses', 'Talks resume']} aria="A strike leads to less output, which puts pressure on the employer and the workers to settle." />
        <Worked
          steps={[
            'For workers: a strike can win better pay or conditions, but workers usually lose their wages while they are not working.',
            'For the employer: production and sales stop, which costs money and may lose customers.',
            'For the economy: a long strike can reduce output and jobs, so both sides try to settle.',
          ]}
        />
        <Mistake>Thinking that a strike only has costs for the employer. Workers lose wages, and customers and the economy can be affected too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is collective bargaining?</>,
          <>What is the difference between conciliation and arbitration?</>,
          <>Give one effect of a strike on workers and one on an employer.</>,
        ]}
        answers={[
          <>The union negotiates with the employer on behalf of all its members.</>,
          <>A conciliator helps both sides to agree. An arbitrator decides.</>,
          <>Workers lose wages; the employer loses production and sales.</>,
        ]}
      />,
    ),
  },
];
