import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Six career categories',
    content: slide(
      <>
        <Rule>Careers can be grouped into six categories according to the interests and strengths that they use: realistic (working with tools, machines or the outdoors), investigative (finding out and solving problems), artistic (creating), social (helping and teaching), enterprising (leading, selling and persuading) and conventional (organising data and details).</Rule>
        <FactCards
          cards={[
            { title: 'Realistic', line1: 'tools, machines,', line2: 'building and the outdoors' },
            { title: 'Investigative', line1: 'research, science', line2: 'and solving problems' },
            { title: 'Artistic', line1: 'design, music,', line2: 'writing and drama' },
            { title: 'Social', line1: 'teaching, nursing', line2: 'and helping people' },
            { title: 'Enterprising', line1: 'leading, selling', line2: 'and running a business' },
            { title: 'Conventional', line1: 'records, numbers', line2: 'and office systems' },
          ]}
          aria="Six career categories. Realistic: tools, machines, building and the outdoors. Investigative: research, science and solving problems. Artistic: design, music, writing and drama. Social: teaching, nursing and helping people. Enterprising: leading, selling and running a business. Conventional: records, numbers and office systems."
        />
        <Worked
          title="Match a career to a category"
          steps={[
            'An electrician works with tools and equipment: realistic.',
            'A laboratory scientist solves problems by research: investigative.',
            'A bookkeeper keeps accurate records: conventional.',
          ]}
        />
        <Mistake>Thinking that a person fits only one category. Most people have interests in two or three, and careers often mix categories.</Mistake>
      </>,
    ),
  },
  {
    title: 'Link your interests to the categories',
    content: slide(
      <>
        <Rule>To find careers that suit you, list what you enjoy and what you are good at, then match these to the categories. A category is a guide to explore, not a rule that limits your choices. Your school subjects, hobbies and the activities you enjoy give clues.</Rule>
        <StepFlow steps={['List what you enjoy.', 'List what you are good at.', 'Match both to the categories.', 'Explore careers in them.']} aria="Four steps to link interests to careers: list what you enjoy, list what you are good at, match both to the categories, and explore careers in them." />
        <Worked
          title="Match your interests"
          steps={[
            'Thandi enjoys helping her younger cousins with homework and likes talking to people.',
            'These interests fit the social category, for example teaching or nursing.',
            'She also likes drawing, so a career such as graphic design (artistic) could also suit her.',
          ]}
        />
        <Mistake>Choosing a career only because friends or family chose it. Match it to your own interests and strengths.</Mistake>
      </>,
    ),
  },
  {
    title: 'The role of work in South Africa',
    content: slide(
      <>
        <Rule>Work meets the needs of people and of the country. Workers earn an income to support themselves and their families, they produce goods and provide services that others need, and they pay taxes that help to pay for schools, clinics and roads. Unpaid work, such as caring for a family or volunteering, also meets social needs.</Rule>
        <FactCards
          cards={[
            { title: 'Income', line1: 'pays for food, housing', line2: 'and school costs' },
            { title: 'Services', line1: 'teachers, nurses and', line2: 'drivers serve others' },
            { title: 'Goods', line1: 'farms and factories', line2: 'make what we use' },
            { title: 'Taxes', line1: 'help to fund schools', line2: 'and clinics' },
          ]}
          aria="The role of work. Income: pays for food, housing and school costs. Services: teachers, nurses and drivers serve others. Goods: farms and factories make what we use. Taxes: help to fund schools and clinics."
        />
        <Worked
          title="Follow the link"
          steps={[
            'A farmer grows maize and sells it, earning an income.',
            'A trucker, a miller and a shop worker are also employed because of that maize.',
            'The taxes on their wages help to pay for a local clinic that everyone can use.',
          ]}
        />
        <Mistake>Thinking that only paid jobs matter. Caring for children, helping a neighbour and volunteering also meet needs in the community.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the six career categories.</>,
          <>Which category does a teacher belong to?</>,
          <>Give one way in which work helps the country.</>,
          <>Why is a category not a rule?</>,
        ]}
        answers={[
          <>Realistic, investigative, artistic, social, enterprising and conventional.</>,
          <>Social.</>,
          <>It provides goods and services, income and taxes.</>,
          <>People have several interests, so it is only a guide.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A career category tells you which kind of interests and strengths a job uses. How many categories does this lesson use?",
    options: ["Three", "Four", "Six", "Ten"],
    answer: "Six",
    explanation: "There are six categories.",
  },
  {
    prompt: "Which category includes working with tools, machines and the outdoors?",
    options: ["Realistic", "Artistic", "Social", "Conventional"],
    answer: "Realistic",
    explanation: "Realistic careers use tools, machines and building.",
  },
  {
    prompt: "Which category involves research and solving problems?",
    options: ["Enterprising", "Realistic", "Social", "Investigative"],
    answer: "Investigative",
    explanation: "Investigative careers use science and research.",
  },
  {
    prompt: "A graphic designer belongs mainly to which category?",
    options: ["Conventional", "Artistic", "Investigative", "Realistic"],
    answer: "Artistic",
    explanation: "Artistic careers involve creating.",
  },
  {
    prompt: "A teacher belongs mainly to which category?",
    options: ["Realistic", "Social", "Conventional", "Investigative"],
    answer: "Social",
    explanation: "Social careers involve helping and teaching.",
  },
  {
    prompt: "A person who runs a business and likes to sell and lead belongs to which category?",
    options: ["Social", "Artistic", "Realistic", "Enterprising"],
    answer: "Enterprising",
    explanation: "Enterprising careers involve leading and selling.",
  },
  {
    prompt: "A bookkeeper who keeps accurate records belongs to which category?",
    options: ["Conventional", "Artistic", "Social", "Enterprising"],
    answer: "Conventional",
    explanation: "Conventional careers involve data and details.",
  },
  {
    prompt: "An electrician is best placed in which category?",
    options: ["Artistic", "Social", "Realistic", "Enterprising"],
    answer: "Realistic",
    explanation: "Electricians work with tools and equipment.",
  },
  {
    prompt: "Why should a career category be used only as a guide?",
    options: ["Categories never apply to anyone", "Each person has only one interest", "Jobs fit one category only", "Most people have several interests"],
    answer: "Most people have several interests",
    explanation: "A category is only a guide for exploring careers.",
  },
  {
    prompt: "What is the first step in linking your interests to careers?",
    options: ["Choose what your friends chose", "List what you enjoy and what you are good at", "Wait until after matric to think", "Pick the highest-paid job"],
    answer: "List what you enjoy and what you are good at",
    explanation: "Start with your own interests and strengths.",
  },
  {
    prompt: "Which of these is a poor reason to choose a career?",
    options: ["Only because a friend chose it", "It matches your strengths", "It uses your interests", "You learned about it from research"],
    answer: "Only because a friend chose it",
    explanation: "Choose to suit your own interests and strengths.",
  },
  {
    prompt: "How does work help a country?",
    options: ["It makes everyone poor", "It stops people from learning", "It produces goods, services and taxes", "It closes schools"],
    answer: "It produces goods, services and taxes",
    explanation: "Work meets needs and pays for services.",
  },
  {
    prompt: "What do the taxes that workers pay help to fund?",
    options: ["Only luxury cars for officials", "Only birthday parties for adults", "Schools, clinics and roads", "Nothing that anyone can use"],
    answer: "Schools, clinics and roads",
    explanation: "Taxes fund public services.",
  },
  {
    prompt: "Which is an example of unpaid work that meets social needs?",
    options: ["Caring for family members", "Being employed in a bank", "Selling in a shop", "Driving a taxi"],
    answer: "Caring for family members",
    explanation: "Unpaid work such as caring and volunteering also meets needs.",
  },
];

const CareerCategories = () => (
  <CapsSubjectTopic
    title="The Six Career Categories and the Role of Work"
    subtitle="Realistic, investigative, artistic, social, enterprising and conventional, and how work meets needs"
    learnSteps={learnSteps}
    task="gr8-career-categories-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CareerCategories;
