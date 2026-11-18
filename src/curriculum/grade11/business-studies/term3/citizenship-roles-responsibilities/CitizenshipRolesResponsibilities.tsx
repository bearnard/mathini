import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Citizens and the business community',
    content: slide(
      <>
        <Rule>A citizen is a member of a community who has rights and also responsibilities towards other people. The business community is made up of the businesses in an area and the people who work in them or trade with them. Through business, a citizen can help the community to develop socially and economically.</Rule>
        <FactCards
          cards={[
            { title: 'Time', line1: 'volunteer for a cause', line2: 'such as a clean-up' },
            { title: 'Skills', line1: 'share what you know,', line2: 'for example as a counsellor' },
            { title: 'Money', line1: 'donate or sponsor', line2: 'a community project' },
            { title: 'Jobs', line1: 'employ and train', line2: 'people from the area' },
          ]}
          aria="Four ways a person in business can serve the community: give time, share skills, give money, and create jobs and training."
        />
        <Worked
          title="A business person gives back"
          steps={[
            'An accountant gives two free hours each week to teach a local club to keep records.',
            'The club keeps better books and can apply for funding.',
            'The community gains a skill and the accountant is known as a good citizen.',
          ]}
        />
        <Mistake>Thinking that only a large company can be a good citizen. An individual business practitioner can contribute time and skills as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'The role of a business in community development',
    content: slide(
      <>
        <Rule>A business develops its community socially when it supports schools, health care and safety, and economically when it creates jobs, trains workers, pays taxes and buys from local suppliers. Spending money on such projects is often called corporate social investment (CSI).</Rule>
        <FactCards
          cards={[
            { title: 'Social', line1: 'bursaries, school', line2: 'and clinic support' },
            { title: 'Economic', line1: 'jobs, training and', line2: 'local suppliers' },
            { title: 'Environmental', line1: 'recycling and less', line2: 'pollution' },
            { title: 'Ethical', line1: 'honest and fair', line2: 'dealings' },
          ]}
          aria="How a business develops its community. Social: bursaries and school or clinic support. Economic: jobs, training and local suppliers. Environmental: recycling and less pollution. Ethical: honest and fair dealings."
        />
        <Worked
          title="Match the action to the kind of development"
          steps={[
            'A bakery buys its flour from a local mill: economic development.',
            'The bakery pays for school stationery for a nearby primary school: social development.',
            'The bakery sorts its waste for recycling: environmental care.',
          ]}
        />
        <Mistake>Believing that CSI is a tax. It is voluntary spending by a business on community projects, and tax is paid separately.</Mistake>
      </>,
    ),
  },
  {
    title: 'Civil society, NGOs and CBOs',
    content: slide(
      <>
        <Rule>Civil society is made up of the groups and organisations that are neither government nor business and that act in the interests of citizens. A non-governmental organisation (NGO) is an independent non-profit organisation that works for a social cause. A community-based organisation (CBO) is run by and for the people of one local community, for example a soup kitchen or a neighbourhood watch.</Rule>
        <FactCards
          cards={[
            { title: 'Business', line1: 'trades to earn a profit', line2: 'and also gives back' },
            { title: 'NGO', line1: 'non-profit, independent', line2: 'of government' },
            { title: 'CBO', line1: 'local people, local', line2: 'needs' },
            { title: 'Government', line1: 'makes and enforces', line2: 'the laws' },
          ]}
          aria="Who does what. A business trades for profit and also gives back. An NGO is non-profit and independent of government. A CBO is local people meeting local needs. Government makes and enforces the laws."
        />
        <Worked
          title="Business, NGO and CBO work together"
          steps={[
            'A supermarket gives surplus food to a CBO that runs a soup kitchen.',
            'An NGO trains the volunteers in food safety.',
            'Hungry families are fed, volunteers learn a skill and the supermarket supports its community.',
          ]}
        />
        <Mistake>Treating an NGO as a government department. It is independent of government and is not run to make a profit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Case scenarios: giving back to the community',
    content: slide(
      <>
        <Rule>In a case scenario, name the role player, say what the person or organisation did and show how the community benefited. A good answer links the action to social or economic development.</Rule>
        <FactCards
          cards={[
            { title: 'Who?', line1: 'a business, NGO, CBO', line2: 'or a person' },
            { title: 'What?', line1: 'the action that', line2: 'was taken' },
            { title: 'Benefit?', line1: 'who in the community', line2: 'gained' },
            { title: 'Type?', line1: 'social or economic', line2: 'development' },
          ]}
          aria="Four questions for a case scenario: who, what, who benefited, and the type of development."
        />
        <Worked
          title="Analyse a scenario"
          steps={[
            'A nurse in a small firm gives Saturday mornings as an HIV/Aids counsellor at the local clinic.',
            'Who: an individual business practitioner. What: gives time and skills. Benefit: patients receive support.',
            'Type: social development.',
          ]}
        />
        <Mistake>Describing the scenario without naming the benefit to the community. The answer must show how the community gained.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name one way in which an individual can serve the community through business.</>,
          <>A firm hires and trains unemployed youth from the area. What kind of development is this?</>,
          <>Who runs a CBO?</>,
          <>Is an NGO part of government?</>,
        ]}
        answers={[
          <>Give time, share skills or donate money.</>,
          <>Economic development.</>,
          <>The people of one local community.</>,
          <>No. It is independent of government.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A person gives up Saturday mornings to help at a local clinic. What are they contributing?",
    options: ["A tax payment to the state", "Profit from trading", "Their time and effort", "A share in the company"],
    answer: "Their time and effort",
    explanation: "Giving time to a cause is one way a person can serve the community.",
  },
  {
    prompt: "Which group makes up the business community of a town?",
    options: ["Businesses and the people linked to them", "Only the large national companies in it", "Only the officials of the municipality", "Only the churches and the schools"],
    answer: "Businesses and the people linked to them",
    explanation: "The business community is the businesses in an area and the people linked to them.",
  },
  {
    prompt: "A firm trains unemployed youth from the area and then employs them. What does this develop?",
    options: ["Only the firm's profit", "The government's budget", "Foreign trade only", "The local economy and skills"],
    answer: "The local economy and skills",
    explanation: "Creating jobs and training people develops the community economically.",
  },
  {
    prompt: "A company pays for a new classroom at a local school. Which kind of development is this?",
    options: ["Economic crime", "Social development", "Environmental damage", "Piracy of a trade mark"],
    answer: "Social development",
    explanation: "Support for education is social development.",
  },
  {
    prompt: "What is the usual purpose of corporate social investment (CSI)?",
    options: ["To reduce the tax a firm pays", "To fund projects that help communities", "To pay the shareholders", "To advertise a price list"],
    answer: "To fund projects that help communities",
    explanation: "CSI is voluntary spending on community projects.",
  },
  {
    prompt: "Which of these is a civil society organisation?",
    options: ["A municipal housing department", "A listed public company on the JSE", "A provincial treasury office", "An independent non-profit charity"],
    answer: "An independent non-profit charity",
    explanation: "Civil society consists of groups that are neither government nor business.",
  },
  {
    prompt: "What does NGO stand for?",
    options: ["Non-governmental organisation", "National government office", "New group of owners", "Network of general outlets"],
    answer: "Non-governmental organisation",
    explanation: "An NGO is independent of government.",
  },
  {
    prompt: "Which of these best describes a CBO?",
    options: ["A multinational firm with branches", "A department of national government", "A group run by and for one local community", "A company listed on the stock exchange"],
    answer: "A group run by and for one local community",
    explanation: "A CBO is community-based and serves local needs.",
  },
  {
    prompt: "A neighbourhood soup kitchen is run by local volunteers. What type of organisation is it?",
    options: ["A public company", "A government department", "A franchise", "A CBO"],
    answer: "A CBO",
    explanation: "A soup kitchen run by local people for local people is a community-based organisation.",
  },
  {
    prompt: "A supermarket gives unsold food to a CBO that feeds families. Who benefits?",
    options: ["Only the supermarket's shareholders", "The families and the supermarket's reputation", "Only the tax authority", "Nobody in the community"],
    answer: "The families and the supermarket's reputation",
    explanation: "The community is fed and the supermarket is seen as a good citizen.",
  },
  {
    prompt: "Why can an individual business practitioner be a good citizen without a big budget?",
    options: ["By sharing time and skills", "By avoiding tax", "By closing the business", "By raising prices"],
    answer: "By sharing time and skills",
    explanation: "Time and skills are valuable contributions.",
  },
  {
    prompt: "A bakery buys its flour from a mill in the same town. Which development does this support?",
    options: ["Environmental damage to the town", "Foreign aid for the town", "Economic development of the town", "Social grants for the town"],
    answer: "Economic development of the town",
    explanation: "Buying locally keeps money and jobs in the community.",
  },
  {
    prompt: "Which statement about an NGO is correct?",
    options: ["It is a department of the state", "It is owned by shareholders for profit", "It works for a cause and does not aim for profit", "It may not employ any staff"],
    answer: "It works for a cause and does not aim for profit",
    explanation: "An NGO is a non-profit body with a social purpose.",
  },
  {
    prompt: "In a case scenario, which point must a good answer include?",
    options: ["How the community benefited", "The price of the product", "The firm's tax number", "The names of the owners"],
    answer: "How the community benefited",
    explanation: "The answer must link the action to a community benefit.",
  },
];

const CitizenshipRolesResponsibilities = () => (
  <CapsSubjectTopic
    title="Citizenship Roles and Responsibilities of a Business"
    subtitle="Citizens, the business community, CSI, NGOs and CBOs"
    learnSteps={learnSteps}
    task="gr11-citizenship-roles-responsibilities-t3"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default CitizenshipRolesResponsibilities;
