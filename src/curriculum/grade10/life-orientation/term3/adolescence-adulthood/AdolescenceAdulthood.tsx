import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'From adolescence to adulthood',
    content: slide(
      <>
        <Rule>Adolescence is the stage between childhood and adulthood. Your body, your feelings and your social life all change. The changes are normal, and they start at different ages for different people.</Rule>
        <StepFlow
          steps={['Childhood.', 'Adolescence: changes begin.', 'Young adulthood.']}
          aria="Three life stages in order: childhood, adolescence, where the physical, emotional and social changes happen, and then young adulthood."
        />
        <Worked
          title="Two friends of the same age"
          steps={[
            <>Aya has grown taller and her voice has changed.</>,
            <>Her friend Zola has not changed much yet.</>,
            <>Both are normal: the changes start at different times.</>,
            <>Comparing yourself with others is not helpful. Your own body has its own timing.</>,
          ]}
        />
        <Mistake>Worrying that something is wrong because you change earlier or later than your friends. People develop at their own pace.</Mistake>
      </>,
    ),
  },
  {
    title: 'Physical changes',
    content: slide(
      <>
        <Rule>Hormones cause physical changes: a faster growth rate, changes in body proportions and secondary sex characteristics. Primary changes are changes in the reproductive organs: in girls menstruation and ovulation start, and in boys sperm production starts. Skin problems such as pimples are common.</Rule>
        <Compare
          left={{ title: 'Changes in girls', items: ['Breasts develop', 'Hips widen', 'Menstruation starts'] }}
          right={{ title: 'Changes in boys', items: ['Voice deepens', 'Shoulders broaden', 'Sperm production starts'] }}
          aria="Two columns. Changes in girls: breasts develop, hips widen and menstruation starts. Changes in boys: the voice deepens, shoulders broaden and sperm production starts. Both also grow faster and may have pimples."
        />
        <Worked
          title="Caring for your skin"
          steps={[
            <>Pimples are caused by hormones, and they are common.</>,
            <>Wash your face gently twice a day.</>,
            <>Do not squeeze the pimples, because this can leave scars.</>,
            <>If your skin is very sore, ask a clinic or doctor for advice.</>,
          ]}
        />
        <Mistake>Believing that pimples mean that you are dirty. They are caused by hormones, and washing gently helps, but dirt is not the cause.</Mistake>
      </>,
    ),
  },
  {
    title: 'Emotional and social changes',
    content: slide(
      <>
        <Rule>Your emotions change: your personality matures, your feelings are deeper and you learn to control them better, but you may also feel insecure. Your needs, interests, beliefs and values change, and you may become interested in sex. Socially, your family relationships change, your friends matter more, you want acceptance from your peers, and you take on more responsibility.</Rule>
        <Worked
          title="Mood swings and the need to fit in"
          steps={[
            <>Neo feels happy in the morning and sad in the afternoon, and he does not know why.</>,
            <>This is a normal emotional change during adolescence.</>,
            <>He also wants his friends to accept him and begins to depend on their opinions.</>,
            <>He remembers that his own values matter more than a peer&apos;s approval.</>,
          ]}
        />
        <Mistake>Thinking that strong feelings or mood swings mean that something is wrong with you. They are part of growing up, but ask for help if you feel hopeless for a long time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Coping with change',
    content: slide(
      <>
        <Rule>Cope with change by communicating with a trusted adult or friend, by making friends who support you and keeping good ones, and by looking after your body and mind. Be patient: the changes are temporary and normal.</Rule>
        <Worked
          title="Zola feels worried about her changing body"
          steps={[
            <>She talks to her aunt, whom she trusts.</>,
            <>Her aunt explains that the changes are normal.</>,
            <>Zola makes friends in the school choir, where she feels accepted.</>,
            <>She sleeps well, eats well and exercises, and she feels better.</>,
          ]}
        />
        <Mistake>Keeping worries to yourself or trusting rumours from friends. Talk to a trusted adult, a school counsellor or a clinic nurse who can give you correct information.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is adolescence? Why do people change at different ages?</>,
          <>Name one physical change that happens in girls, one in boys, and one that happens in both.</>,
          <>Name one emotional change and one social change during adolescence.</>,
          <>Give two ways of coping with the changes.</>,
        ]}
        answers={[
          <>The stage between childhood and adulthood. Every body has its own timing, and this is normal.</>,
          <>For example menstruation in girls, a deeper voice or sperm production in boys, and a faster growth rate or pimples in both.</>,
          <>For example mood changes or feeling insecure (emotional), and a stronger need for acceptance by friends (social).</>,
          <>For example talk to a trusted adult, make good friends, and look after your body and mind.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is adolescence?',
    options: ['The stage after a person becomes an adult', 'The stage between childhood and adulthood', 'The stage before a baby is born into a family', 'The stage in which a person is no longer able to grow'],
    answer: 'The stage between childhood and adulthood',
    explanation: 'Adolescence is the stage between childhood and adulthood, with physical, emotional and social changes.',
  },
  {
    prompt: 'What causes most of the physical changes of adolescence?',
    options: ['Hormones', 'Eating too much sugar', 'Studying too hard at school', 'Spending time with friends'],
    answer: 'Hormones',
    explanation: 'Hormones cause the growth and the changes in body proportions and in the reproductive organs.',
  },
  {
    prompt: 'Why do some friends of the same age change earlier than others?',
    options: ['Early change means that a person is unhealthy', 'Late change means that a person did something wrong', 'All people must change at exactly the same age', 'Each body has its own timing, and it is normal'],
    answer: 'Each body has its own timing, and it is normal',
    explanation: 'People start to develop at different ages. Comparing yourself with others is not helpful.',
  },
  {
    prompt: 'Which of these is a secondary sex characteristic in boys?',
    options: ['The start of menstruation', 'The widening of the hips', 'A deeper voice', 'The development of breasts'],
    answer: 'A deeper voice',
    explanation: 'A deeper voice, a broader chest and shoulders and facial hair are secondary sex characteristics in boys.',
  },
  {
    prompt: 'Which of these is a primary change in girls?',
    options: ['The voice becomes deeper in the teenage years', 'Menstruation begins', 'The shoulders become broader and the chest wider', 'Facial hair starts to grow on the face'],
    answer: 'Menstruation begins',
    explanation: 'Primary changes are changes in the reproductive organs: in girls menstruation and ovulation start.',
  },
  {
    prompt: 'Which of these is a primary change in boys?',
    options: ['Sperm production starts', 'Menstruation starts each month', 'The breasts begin to develop', 'The hips become wider'],
    answer: 'Sperm production starts',
    explanation: 'In boys the testes start to produce sperm. This is a primary change.',
  },
  {
    prompt: 'What causes pimples during adolescence?',
    options: ['Being dirty for a long time', 'Eating food that is cooked at home', 'Staying out of the sun every day', 'Hormonal changes'],
    answer: 'Hormonal changes',
    explanation: 'Hormones make the skin oilier. Pimples are common, and washing gently helps.',
  },
  {
    prompt: 'What is the best way to care for skin that has pimples?',
    options: ['Squeeze the pimples so that they heal faster', 'Scrub the skin hard until it turns red', 'Wash gently and do not squeeze the pimples', 'Cover the skin with a thick layer of make-up'],
    answer: 'Wash gently and do not squeeze the pimples',
    explanation: 'Gentle washing helps, and squeezing can cause scars. See a clinic if your skin is very sore.',
  },
  {
    prompt: 'Which of these is an emotional change during adolescence?',
    options: ['The voice becomes deeper in boys of this age', 'Feelings become deeper', 'The hips become wider in girls of this age', 'The skin starts to produce more oil than before'],
    answer: 'Feelings become deeper',
    explanation: 'Emotions become deeper, and mood changes and feelings of insecurity are common.',
  },
  {
    prompt: 'Which of these is a social change during adolescence?',
    options: ['A need for acceptance by peers', 'A faster rate of growth in height and weight', 'The start of menstruation or sperm production', 'The development of pimples on the skin'],
    answer: 'A need for acceptance by peers',
    explanation: 'Friends and peers matter more, and many adolescents want to be accepted by their group.',
  },
  {
    prompt: 'Neo feels happy in the morning and sad in the afternoon, and he does not know why. What is the best explanation?',
    options: ['It shows that Neo has done something wrong', 'It means that Neo must be ill in his body', 'It happens because Neo is not trying hard enough', 'Mood changes are a normal part of adolescence'],
    answer: 'Mood changes are a normal part of adolescence',
    explanation: 'Mood swings are a normal emotional change. Ask for help if you feel hopeless for a long time.',
  },
  {
    prompt: 'Which is a healthy way of coping with the changes of adolescence?',
    options: ['Keeping all of your worries to yourself and saying nothing', 'Believing the rumours that friends tell you', 'Communicating with a trusted adult or friend', 'Staying away from other people for weeks'],
    answer: 'Communicating with a trusted adult or friend',
    explanation: 'Communication helps. A trusted adult, a school counsellor or a clinic nurse can give correct information.',
  },
  {
    prompt: 'Why is it a good idea to make and keep good friends during adolescence?',
    options: ['They make sure that you are right in an argument', 'They give support and help you to feel accepted', 'They decide what your values and beliefs must be', 'They make it easy to avoid your family for a while'],
    answer: 'They give support and help you to feel accepted',
    explanation: 'Good friends support you and help you cope with change.',
  },
  {
    prompt: 'A learner worries about the changes in her body. Who is the best person to ask?',
    options: ['A trusted adult or a clinic nurse', 'A stranger whom she meets on a social media site', 'A friend who spreads rumours about other people', 'A person who tells her to keep quiet about it'],
    answer: 'A trusted adult or a clinic nurse',
    explanation: 'Choose someone you trust who can give correct and caring information.',
  },
];

const AdolescenceAdulthood = () => (
  <CapsSubjectTopic
    title="From Adolescence to Adulthood"
    subtitle="Physical, emotional and social changes, and how to cope with them"
    learnSteps={learnSteps}
    task="gr10-adolescence-adulthood-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default AdolescenceAdulthood;
