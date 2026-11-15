import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Puberty: a time of change',
    content: slide(
      <>
        <Rule>Puberty is a time of physical and emotional change in adolescence. Genes, food and health affect when it starts and how fast it goes, so everyone is different.</Rule>
        <Hub centre="Puberty timing" spokes={['Genes', 'Food', 'Health']} aria="A circle labelled Puberty timing with three things that affect it: genes, food and health." />
        <Worked
          title="Two friends are the same age but one has changed earlier"
          steps={[<>Notice: the timing is different.</>, <>Remember: genes, food and health affect the timing and pace.</>, <>Conclude: both are normal.</>, <>Ask a trusted adult if you are worried.</>]}
        />
        <Mistake>Believing something is wrong with you because you change earlier or later than your friends. Different timing is normal.</Mistake>
      </>,
    ),
  },
  {
    title: 'HIV: facts, not myths',
    content: slide(
      <>
        <Rule>HIV is a virus that weakens the immune system. It spreads through blood, sexual contact and breastfeeding, and from a mother to her baby.</Rule>
        <Compare left={{ title: 'Can spread HIV', items: ['Blood', 'Sexual contact'] }} right={{ title: 'Cannot spread HIV', items: ['Hugging', 'Sharing a plate'] }} aria="Two columns. Can spread HIV: blood and sexual contact. Cannot spread HIV: hugging and sharing a plate." />
        <Worked
          title="A rumour says you can get HIV from a mosquito bite"
          steps={[<>Ask how HIV spreads: blood, sexual contact, breastfeeding.</>, <>Is a mosquito bite on that list? No.</>, <>So the rumour is a myth.</>]}
        />
        <Mistake>Believing myths such as “you get HIV from hugging”. Myths cause fear and unfair treatment of people living with HIV.</Mistake>
      </>,
    ),
  },
  {
    title: 'Consent, pregnancy and waiting',
    content: slide(
      <>
        <Rule>Consent means freely agreeing to something without any pressure. In South Africa the age of consent for sex is 16. Teenage pregnancy is more likely with poor education, no protection and pressure from others. Delaying sex gives time for emotional readiness and finishing school.</Rule>
        <Worked
          title="“If you loved me, you would”"
          steps={[<>Spot it: this is pressure, not consent.</>, <>Remember: you can say no, and you can change your mind.</>, <>Say clearly: “No, I am not ready.”</>, <>Talk to a trusted adult.</>]}
        />
        <Mistake>Thinking that giving in to pressure counts as consent. Real consent is freely given, with no pressure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting your health and getting help',
    content: slide(
      <>
        <Rule>To protect yourself from STIs, use abstinence (not having sex), protection, testing and open communication. If you have questions about sexual health, talk to a trusted adult, a clinic or a reliable source.</Rule>
        <StepFlow steps={['Abstinence: not having sex.', 'Use protection (a condom) correctly.', 'Get tested at a clinic.', 'Talk openly with your partner.']} aria="Four ways to protect yourself from sexually transmitted infections: abstinence, use protection correctly, get tested at a clinic, talk openly with your partner." />
        <Worked
          title="Thabo has a question about sexual health"
          steps={[<>He does not trust a rumour from a friend.</>, <>He asks a trusted adult or the clinic nurse.</>, <>He checks a reliable source.</>]}
        />
        <Mistake>Waiting for symptoms before getting tested. HIV and other STIs can cause no signs for a long time, so testing matters.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is puberty, and why does everyone experience it differently?" answer="A time of physical and emotional change in adolescence. Genes, food and health affect the timing and pace." />
        <Check question="What is HIV, and name two ways it spreads." answer="A virus that weakens the immune system. It spreads through blood, sexual contact or breastfeeding." />
        <Check question="What does consent mean?" answer="Freely agreeing to something without any pressure." />
        <Check question="Give two ways to protect yourself from STIs." answer="Any two of: abstinence, protection, testing, communication." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is puberty?',
    options: ['An illness that children catch from other children', 'A time of physical and emotional change in adolescence', 'A stage that only boys go through, and not girls', 'A stage that lasts a few weeks and then stops'],
    answer: 'A time of physical and emotional change in adolescence',
    explanation: 'Puberty is a normal biological process that prepares the body for adulthood.',
  },
  {
    prompt: 'Why do different people experience puberty differently?',
    options: ['They do not, as all people change at the same age', 'Genes, food and health affect the timing and pace', 'Everyone develops in exactly the same way and speed', 'It is random and depends on luck alone'],
    answer: 'Genes, food and health affect the timing and pace',
    explanation: 'Puberty varies between individuals based on biological and environmental factors.',
  },
  {
    prompt: 'What is HIV?',
    options: ['A skin rash that spreads by touch from one person to another', 'A virus that weakens the immune system', 'A disease that affects only certain groups of people', 'A disease that always kills a person at once'],
    answer: 'A virus that weakens the immune system',
    explanation: 'HIV damages immune cells, leaving the body vulnerable to infections.',
  },
  {
    prompt: 'How is HIV transmitted?',
    options: ['Through hugging or touching a person who has HIV', 'Through blood, sexual contact or breastfeeding', 'Through sharing food, plates or cups with that person', 'Through coughing, sneezing or breathing near that person'],
    answer: 'Through blood, sexual contact or breastfeeding',
    explanation: 'HIV requires direct contact with infected blood or body fluids.',
  },
  {
    prompt: 'What does consent mean?',
    options: ['Doing what other people want so that they stay happy', 'Freely agreeing to something without any pressure', 'A rule that is never needed in friendships', 'A rule that applies to adults but not to teenagers'],
    answer: 'Freely agreeing to something without any pressure',
    explanation: 'Consent requires free choice, understanding, and no coercion.',
  },
  {
    prompt: 'What increases risk of teenage pregnancy?',
    options: ['Nothing, as teenage pregnancy rarely takes place', 'Poor education, no protection and pressure from others', 'Only a few people are at risk and they cannot be known', 'It is hopeless, since nothing can be done to prevent it'],
    answer: 'Poor education, no protection and pressure from others',
    explanation: 'Knowledge and preparation reduce the risk of unintended pregnancy.',
  },
  {
    prompt: 'What are benefits of delaying sexual activity?',
    options: ['There are none, since the age does not matter', 'Emotional readiness, finishing school and stable relationships', 'It wastes time, as young people should enjoy life now', 'It makes no difference to future plans or relationships'],
    answer: 'Emotional readiness, finishing school and stable relationships',
    explanation: 'Waiting allows for maturity, education, and stable relationships.',
  },
  {
    prompt: 'What is healthy sexual health?',
    options: ['Having many partners to learn what you prefer', 'Knowing your body, choosing wisely and talking to partners', 'Not thinking about it, so you avoid any worries', 'Doing what your friends say is normal to do'],
    answer: 'Knowing your body, choosing wisely and talking to partners',
    explanation: 'Good sexual health involves knowledge, responsibility, and communication.',
  },
  {
    prompt: 'How can you protect yourself from STIs?',
    options: ['It is not possible, since infections spread by chance', 'Abstinence, protection, testing and communication', 'Only one way works and all others make no difference', 'Prevention is not possible, so treatment is the only step'],
    answer: 'Abstinence, protection, testing and communication',
    explanation: 'Multiple strategies reduce STI transmission.',
  },
  {
    prompt: 'What should you do if you have questions about sexual health?',
    options: ['Ignore them, as the questions will go away in time', 'Talk to a trusted adult, a clinic or a reliable source', 'Ask anyone you meet, since all answers are the same', 'Keep the questions secret and use rumours to guess'],
    answer: 'Talk to a trusted adult, a clinic or a reliable source',
    explanation: 'Professional guidance and reliable information are important for sexual health.',
  },
];

const SexualityHealth = () => (
  <CapsSubjectTopic
    title="Sexuality and Health"
    subtitle="Understanding puberty, disease prevention, and consent"
    learnSteps={learnSteps}
    task="gr9-sexuality-health-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SexualityHealth;
