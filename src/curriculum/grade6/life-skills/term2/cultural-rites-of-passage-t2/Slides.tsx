import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Rites of passage',
    content: slide(
      <>
        <Rule>A rite of passage is a ceremony or custom that marks an important stage in a person&rsquo;s life. In South Africa, people from different cultures and religions have different ways to mark the stages of birth, baptism, marriage and death.</Rule>
        <StepFlow steps={['Birth', 'Baptism', 'Wedding', 'Death']} aria="Four important stages of life that cultures mark with ceremonies: birth, baptism, a wedding and death." />
        <Worked
          steps={[
            <>Each stage has a <strong>meaning</strong>: what the ceremony says about life.</>,
            <>Each stage has a <strong>personal significance</strong>: what it means to the person.</>,
            <>Each stage has a <strong>social significance</strong>: what it means to the family and the community.</>,
          ]}
        />
        <Mistake>Thinking that one culture has the right way and the others are wrong. Families and cultures mark the stages in different ways, and each deserves respect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Birth and baptism',
    content: slide(
      <>
        <Rule>When a baby is born, many families hold a ceremony to welcome the baby, to give thanks and to introduce the child to the family and community. Baptism is the Christian ceremony in which a child is welcomed into the church.</Rule>
        <Worked
          title="Meaning and significance"
          steps={[
            <><strong>Meaning:</strong> the new life is a gift, and the family promises to care for the child.</>,
            <><strong>Personal:</strong> the child gets a name and a place in the family.</>,
            <><strong>Social:</strong> relatives and friends come together, and the community accepts the new member.</>,
            <>For example, many Christian families baptise a baby in church. In many Xhosa families a ceremony called imbeleko welcomes a baby. Other families welcome a baby in their own way.</>,
          ]}
        />
        <Mistake>Saying that every family has the same ceremony. Families differ in how, when and whether they hold one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Weddings',
    content: slide(
      <>
        <Rule>A wedding is the ceremony in which two people marry. The two promise to care for each other, and their families and friends celebrate with them.</Rule>
        <Worked
          title="Meaning and significance"
          steps={[
            <><strong>Meaning:</strong> two people choose to start a family together and make a promise to each other.</>,
            <><strong>Personal:</strong> the couple begin a new stage of life with new responsibilities.</>,
            <><strong>Social:</strong> two families become linked, and the community shares in the joy.</>,
            <>Weddings can be in a church, a mosque, a temple, a civil office or at home, with songs, food and dress that belong to the culture or religion of the families.</>,
          ]}
        />
        <Mistake>Thinking that a wedding is only a party. It also marks a promise and a new stage in the lives of two families.</Mistake>
      </>,
    ),
  },
  {
    title: 'Death and funerals',
    content: slide(
      <>
        <Rule>When a person dies, families hold a funeral or other ceremony to say goodbye, to honour the person and to comfort one another. Customs differ, and all are to be respected.</Rule>
        <Worked
          title="Meaning and significance"
          steps={[
            <><strong>Meaning:</strong> the ceremony remembers the life of the person and marks the end of that life.</>,
            <><strong>Personal:</strong> it helps the family to grieve and to say goodbye.</>,
            <><strong>Social:</strong> friends and neighbours support the family with their presence, food and kind words.</>,
            <>If a classmate loses someone, be gentle: say that you are sorry and listen.</>,
          ]}
        />
        <Mistake>Laughing or being noisy near a family that is grieving. Show respect and kindness.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do we call a ceremony that marks a stage of life?</>,
          <>Name the four life stages in this topic.</>,
          <>What does a ceremony to welcome a baby show about the baby&rsquo;s place in the community?</>,
          <>How can you treat a classmate kindly if someone in their family has died?</>,
        ]}
        answers={[
          <>A rite of passage: a ceremony or custom that marks an important stage in a person&rsquo;s life.</>,
          <>Birth, baptism, a wedding and death.</>,
          <>That the baby is accepted and welcomed as a member of the family and the community.</>,
          <>Say that you are sorry, be gentle and listen.</>,
        ]}
      />,
    ),
  },
];
