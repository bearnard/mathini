import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Why plan for the cost of study?',
    content: slide(
      <>
        <Rule>Studying after school costs money for fees, books, transport and accommodation. Many young people do not have to pay it all themselves, because funding providers offer bursaries, scholarships, loans and learnerships. Finding out early about funding helps you to plan and to apply on time.</Rule>
        <FactCards
          cards={[
            { title: 'Costs', line1: 'fees, books, transport', line2: 'and a place to stay' },
            { title: 'Bursary', line1: 'money for study that', line2: 'you do not repay' },
            { title: 'Loan', line1: 'money that you', line2: 'repay later' },
            { title: 'Learnership', line1: 'training with pay or', line2: 'a stipend' },
          ]}
          aria="Paying for study. Costs: fees, books, transport and a place to stay. A bursary is money for study that you do not repay. A loan is money that you repay later. A learnership is training with pay or a stipend."
        />
        <Worked
          title="Name the kind of funding"
          steps={[
            'A company pays your fees and you do not have to pay it back: a bursary.',
            'A bank lends you money and you repay it with interest after you work: a loan.',
            'You train and work at the same time and receive a stipend: a learnership.',
          ]}
        />
        <Mistake>Assuming that you cannot study because your family does not have money. Funding may be available, so find out and apply.</Mistake>
      </>,
    ),
  },
  {
    title: 'Who provides funding?',
    content: slide(
      <>
        <Rule>Funding providers include the National Student Financial Aid Scheme (NSFAS), which supports students from lower-income families at public universities and TVET colleges, Sector Education and Training Authorities (SETAs), which support skills and learnerships in an industry, companies and employers, banks, universities and colleges, and community and religious organisations. Each provider has its own requirements.</Rule>
        <FactCards
          cards={[
            { title: 'NSFAS', line1: 'financial aid for students', line2: 'from lower-income families' },
            { title: 'SETAs', line1: 'skills and learnerships', line2: 'in an industry' },
            { title: 'Companies', line1: 'bursaries for', line2: 'chosen fields' },
            { title: 'Banks, colleges', line1: 'loans and bursaries', line2: 'for study' },
          ]}
          aria="Who provides funding. NSFAS: financial aid for students from lower-income families. SETAs: skills and learnerships in an industry. Companies: bursaries for chosen fields. Banks and colleges: loans and bursaries for study."
        />
        <Worked
          title="Find a provider"
          steps={[
            'You want to study engineering and need funding.',
            'You look at university bursaries, company bursaries in engineering and NSFAS.',
            'You note the requirements and closing dates of each one, then apply to more than one.',
          ]}
        />
        <Mistake>Applying to only one provider. Funding is competitive, so apply to several that fit your situation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Applying and lifelong learning goals',
    content: slide(
      <>
        <Rule>To apply for funding, find the closing date, collect the documents that are needed, fill in the form honestly and neatly, and apply early. Learning does not stop when you finish school: lifelong learning means that you keep learning new skills. Set goals that are specific, measurable and realistic, and review them often.</Rule>
        <StepFlow steps={['Find the closing date.', 'Collect your documents.', 'Fill in the form honestly.', 'Apply early and keep a copy.']} aria="Four steps to apply for funding: find the closing date, collect your documents, fill in the form honestly, and apply early and keep a copy." />
        <Worked
          title="Set a lifelong learning goal"
          steps={[
            'Goal: to complete a certificate in electrical engineering within three years.',
            'Steps: research colleges this year, apply for funding before the closing date and keep my marks high.',
            'Review: check my progress each term and change the plan if I need to.',
          ]}
        />
        <Mistake>Sending the form after the closing date or with missing documents. Late or incomplete applications are usually not considered.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a bursary and a loan?</>,
          <>Name one funding provider.</>,
          <>Why should you apply to more than one?</>,
          <>What does lifelong learning mean?</>,
        ]}
        answers={[
          <>A bursary is not repaid, and a loan is repaid later.</>,
          <>For example NSFAS, a company or a SETA.</>,
          <>Funding is competitive.</>,
          <>Learning new skills throughout your life.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a bursary?",
    options: ["A loan that must be repaid with interest", "A kind of tax paid on wages", "Study money you do not repay", "A kind of school uniform"],
    answer: "Study money you do not repay",
    explanation: "Bursaries are not repaid, but they may have conditions.",
  },
  {
    prompt: "What is a student loan?",
    options: ["Money that you repay later", "Money that is a gift", "A free ticket", "A kind of prize"],
    answer: "Money that you repay later",
    explanation: "A loan must be repaid, often with interest.",
  },
  {
    prompt: "Which of these is a learnership?",
    options: ["A free holiday trip for students", "A bank account for savings", "A kind of examination paper", "Training with work experience and a stipend"],
    answer: "Training with work experience and a stipend",
    explanation: "Learnerships combine study and work.",
  },
  {
    prompt: "Which scheme gives financial aid to students from lower-income families at public universities and TVET colleges?",
    options: ["SARS", "NSFAS", "SAPS", "SABC"],
    answer: "NSFAS",
    explanation: "NSFAS is the National Student Financial Aid Scheme.",
  },
  {
    prompt: "What do SETAs support?",
    options: ["Only sports clubs in a town", "Skills and learnerships", "Only primary schools in a village", "Only farm animals on a farm"],
    answer: "Skills and learnerships",
    explanation: "SETAs are Sector Education and Training Authorities.",
  },
  {
    prompt: "Which of these can offer a bursary?",
    options: ["A weather service", "A bus stop", "A street sign", "A company or employer"],
    answer: "A company or employer",
    explanation: "Many companies fund study in fields they need.",
  },
  {
    prompt: "Why should you find out about funding early?",
    options: ["To apply before closing dates", "Because funding is never needed", "Because funding never closes at all", "Because funding is only for adults"],
    answer: "To apply before closing dates",
    explanation: "Early planning helps you to apply on time.",
  },
  {
    prompt: "Why is it wise to send applications to several funders?",
    options: ["Each one is a loan only", "Each one is the same", "Funding is competitive", "It is not allowed"],
    answer: "Funding is competitive",
    explanation: "Applying to several raises your chances.",
  },
  {
    prompt: "What is the first step when applying for funding?",
    options: ["Wait until after the date", "Guess the requirements", "Send it at the last hour", "Find the closing date"],
    answer: "Find the closing date",
    explanation: "Know the deadline before you start.",
  },
  {
    prompt: "What should you do on an application form?",
    options: ["Leave out your marks on purpose", "Fill it in honestly", "Guess the answers to questions", "Copy someone else's form"],
    answer: "Fill it in honestly",
    explanation: "Honest, complete forms are taken seriously.",
  },
  {
    prompt: "What happens to a late or incomplete application?",
    options: ["It is usually not considered", "It is always accepted", "It is given extra marks", "It is always doubled"],
    answer: "It is usually not considered",
    explanation: "Send everything on time.",
  },
  {
    prompt: "What does lifelong learning mean?",
    options: ["Learning only until Grade 9 ends", "Learning only inside a classroom", "Learning new skills for life", "Never studying again after school"],
    answer: "Learning new skills for life",
    explanation: "Skills keep changing, so people keep learning.",
  },
  {
    prompt: "Which is a good lifelong learning goal?",
    options: ["Learn something someday soon", "Do nothing new this decade", "Finish a certificate in three years", "Hope for the best with luck"],
    answer: "Finish a certificate in three years",
    explanation: "A good goal is specific, measurable and realistic.",
  },
  {
    prompt: "How often should you review your goals?",
    options: ["Regularly, such as each term", "Never, once they are written", "Only once in your whole life", "Only when you are very old"],
    answer: "Regularly, such as each term",
    explanation: "Review and adjust your plan often.",
  },
];

const StudyCareerFunding = () => (
  <CapsSubjectTopic
    title="Study and Career Funding"
    subtitle="Bursaries, loans, learnerships, funding providers, applications and lifelong learning goals"
    learnSteps={learnSteps}
    task="gr9-study-career-funding-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudyCareerFunding;
