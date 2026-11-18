import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Your options after Grade 9',
    content: slide(
      <>
        <Rule>After Grade 9 you can continue at school towards the National Senior Certificate (NSC) in Grades 10 to 12, or you can study for the National Certificate (Vocational), the NCV, at a TVET college, which was called a FET college. Both are recognised qualifications, but they prepare you in different ways.</Rule>
        <FactCards
          cards={[
            { title: 'NSC', line1: 'Grades 10 to 12 at', line2: 'school, ends with matric' },
            { title: 'NCV', line1: 'a vocational course at', line2: 'a TVET (FET) college' },
            { title: 'Choice', line1: 'make it after Grade 9', line2: 'with good information' },
            { title: 'Both', line1: 'are recognised', line2: 'qualifications' },
          ]}
          aria="Your options after Grade 9. NSC: Grades 10 to 12 at school, ending with matric. NCV: a vocational course at a TVET or FET college. Make the choice after Grade 9 with good information. Both are recognised qualifications."
        />
        <Worked
          title="Name the pathway"
          steps={[
            'Staying at school to write the matric examinations at the end of Grade 12: the NSC.',
            'Enrolling at a TVET college to learn a trade or a skill such as engineering, business or hospitality: the NCV.',
            'Both can lead to further study or to work, depending on the subjects and results.',
          ]}
        />
        <Mistake>Believing that only one pathway is respected. The NSC and the NCV are both qualifications that can lead to a career.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing the NSC and the NCV',
    content: slide(
      <>
        <Rule>The NSC is mostly academic and is written at the end of Grade 12, and with the right subjects and results it can lead to a university or college. The NCV combines theory with practical training in a chosen field and is studied at a college over several levels. The NCV can lead to work, to further training or to higher education if the entry requirements are met.</Rule>
        <FactCards
          cards={[
            { title: 'NSC', line1: 'mainly academic subjects', line2: 'at school' },
            { title: 'NCV', line1: 'theory and practical', line2: 'training at a college' },
            { title: 'After NSC', line1: 'study further or', line2: 'start work' },
            { title: 'After NCV', line1: 'work, training or', line2: 'higher study' },
          ]}
          aria="Comparing the NSC and the NCV. NSC: mainly academic subjects at school. NCV: theory and practical training at a college. After the NSC: study further or start work. After the NCV: work, training or higher study."
        />
        <Worked
          title="Weigh your choice"
          steps={[
            'Ask: do I learn best by reading and studying, or by doing and practising?',
            'Ask: which career do I want, and which route leads there?',
            'Talk to your teacher, a career counsellor and people who work in the field before you decide.',
          ]}
        />
        <Mistake>Choosing a pathway only because friends chose it. Choose the one that fits your interests, strengths and goals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Making and acting on the decision',
    content: slide(
      <>
        <Rule>A good decision uses information. List your interests, strengths and goals, find out what each pathway offers, ask for advice, compare and decide, then apply on time. Know the implications: the subjects that you choose at school or the course that you choose at college shape the careers and further studies that are open to you.</Rule>
        <StepFlow steps={['List interests and goals.', 'Find out about each pathway.', 'Ask for advice.', 'Decide and apply on time.']} aria="Four steps to decide a pathway: list interests and goals, find out about each pathway, ask for advice, then decide and apply on time." />
        <Worked
          title="Decide with care"
          steps={[
            'Sipho likes working with machines and learns well by practising.',
            'He visits a TVET college, talks to a lecturer and finds out about a course in engineering studies.',
            'He compares it with staying at school and decides on the course that matches his goal, then applies before the closing date.',
          ]}
        />
        <Mistake>Leaving the decision until the last minute. Applications close on set dates, so start early.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does NSC stand for?</>,
          <>What does NCV stand for, and where is it studied?</>,
          <>Name one difference between the two pathways.</>,
          <>Why should you apply early?</>,
        ]}
        answers={[
          <>National Senior Certificate.</>,
          <>National Certificate (Vocational), at a TVET college.</>,
          <>The NSC is mainly academic at school, and the NCV combines theory and practical training at a college.</>,
          <>Applications close on set dates.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does NSC stand for?",
    options: ["National School Council", "New Study Course", "National Senior Certificate", "National Skills Centre"],
    answer: "National Senior Certificate",
    explanation: "The NSC is the matric qualification from Grades 10 to 12.",
  },
  {
    prompt: "What does NCV stand for?",
    options: ["National Certificate (Vocational)", "National Council of Voters", "New Career Vision", "National Class Values"],
    answer: "National Certificate (Vocational)",
    explanation: "The NCV is a vocational qualification.",
  },
  {
    prompt: "Where is the NCV studied?",
    options: ["Only at a primary school", "Only at a stadium", "Only at a bank", "At a TVET college"],
    answer: "At a TVET college",
    explanation: "TVET colleges were formerly called FET colleges.",
  },
  {
    prompt: "Where is the NSC studied?",
    options: ["At a college for three months", "At school in Grades 10 to 12", "At a university only", "At work only"],
    answer: "At school in Grades 10 to 12",
    explanation: "The NSC is written at the end of Grade 12.",
  },
  {
    prompt: "Which route mixes classroom theory with hands-on training?",
    options: ["The NSC only", "The NCV", "Neither of them", "A bank loan"],
    answer: "The NCV",
    explanation: "The NCV combines theory and practical training.",
  },
  {
    prompt: "Which route is mainly academic subjects at school?",
    options: ["The NCV", "A learnership", "An apprenticeship", "The NSC"],
    answer: "The NSC",
    explanation: "The NSC is mostly academic.",
  },
  {
    prompt: "When must you decide between the NSC and the NCV?",
    options: ["After Grade 9", "After matric only", "After Grade 4", "After a degree"],
    answer: "After Grade 9",
    explanation: "The choice is made after Grade 9.",
  },
  {
    prompt: "What is a good first step when choosing a pathway?",
    options: ["Choose what friends chose", "Pick the shortest route", "List your interests and goals", "Guess a pathway"],
    answer: "List your interests and goals",
    explanation: "Start with your own interests, strengths and goals.",
  },
  {
    prompt: "Why should you talk to a career counsellor before choosing?",
    options: ["To avoid choosing at all", "To choose your friends", "To pass without study", "To get advice about each pathway"],
    answer: "To get advice about each pathway",
    explanation: "Advice helps you to decide with information.",
  },
  {
    prompt: "Is the NCV a recognised qualification?",
    options: ["No, it is not", "Yes, it is", "Only in one town", "Only for adults"],
    answer: "Yes, it is",
    explanation: "Both the NSC and the NCV are recognised.",
  },
  {
    prompt: "Can the NSC lead to further study?",
    options: ["Yes, with suitable results", "No, it can never do that", "Only if you leave school early", "Only after you leave school"],
    answer: "Yes, with suitable results",
    explanation: "It can lead to university or college study.",
  },
  {
    prompt: "Which statement about the two pathways is true?",
    options: ["Only one is a qualification", "Neither leads to work", "Both can lead to a career", "Only one is recognised"],
    answer: "Both can lead to a career",
    explanation: "Choose the pathway that suits you.",
  },
  {
    prompt: "You learn best by doing and practising. Which route might suit you?",
    options: ["No route at all", "Only a degree in theory", "The NCV at a TVET college", "Skipping study"],
    answer: "The NCV at a TVET college",
    explanation: "The NCV has a strong practical side.",
  },
  {
    prompt: "Why should you apply early for a college place?",
    options: ["Applications close on set dates", "Colleges never close", "Early applications cost more", "Dates do not matter"],
    answer: "Applications close on set dates",
    explanation: "Late applications are usually not considered.",
  },
];

const NscAndNcv = () => (
  <CapsSubjectTopic
    title="After Grade 9: the NSC and the NCV"
    subtitle="The two pathways, how they differ and how to decide"
    learnSteps={learnSteps}
    task="gr9-nsc-and-ncv-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default NscAndNcv;
