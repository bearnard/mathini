import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PairLinks } from '../../../../../components/diagrams/lo/PswPictures';
import { Tiers } from '../../../../../components/diagrams/lo/Lo10Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The Bill of Rights',
    content: slide(
      <>
        <Rule>The Bill of Rights is Chapter 2 of the Constitution of South Africa (1996). It protects the rights of all people living in the country, for example equality, human dignity, life, privacy, freedom of religion and expression, and education. Rights can only be limited by law, when the limit is reasonable and fair.</Rule>
        <PairLinks
          pairs={[
            { right: 'Freedom of expression', duty: 'Do not harm the dignity of others' },
            { right: 'Education', duty: 'Attend and work at school' },
            { right: 'Equality', duty: 'Treat other people as equals' },
          ]}
          aria="Three rights and the matching responsibility. Freedom of expression goes with not harming the dignity of others. Education goes with attending and working at school. Equality goes with treating other people as equals."
        />
        <Worked
          title="Rights come with responsibilities"
          steps={[
            <>A learner has the right to freedom of expression.</>,
            <>She posts a cruel message about a classmate.</>,
            <>This harms the classmate&apos;s right to human dignity.</>,
            <>Her right does not cover this, and she is responsible for what she says.</>,
          ]}
        />
        <Mistake>Believing that rights have no limits, or that a right means you can do whatever you like. Your rights end where they harm the rights of other people.</Mistake>
      </>,
    ),
  },
  {
    title: 'International conventions and instruments',
    content: slide(
      <>
        <Rule>International instruments are agreements between countries that set standards for human rights. They guide our laws, but our Constitution and laws apply in South Africa. Three that you must know are the Convention on the Rights of the Child, the African Charter on the Rights and Welfare of the Child and CEDAW.</Rule>
        <Tiers
          tiers={[
            { title: 'CRC (UN, 1989)', line: 'Children under 18' },
            { title: 'African Charter (1990)', line: 'Children in Africa' },
            { title: 'CEDAW (UN, 1979)', line: 'Ends discrimination against women' },
          ]}
          aria="Three instruments. The Convention on the Rights of the Child, adopted by the United Nations in 1989, protects the rights of every child under 18. The African Charter on the Rights and Welfare of the Child, adopted in 1990, protects African children. CEDAW, adopted by the United Nations in 1979, aims to end discrimination against women."
        />
        <Worked
          title="Which instrument fits?"
          steps={[
            <>A child&apos;s right to be protected from abuse: the Convention on the Rights of the Child and the African Charter.</>,
            <>Discrimination against women in education or work: CEDAW.</>,
            <>The Constitution and our laws still apply and give effect to these standards.</>,
          ]}
        />
        <Mistake>Thinking that an international instrument replaces South African law. It sets a standard, and the Constitution and our laws are how the rights are protected here.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protection agencies, laws and codes',
    content: slide(
      <>
        <Rule>Rights are protected by laws, courts, protection agencies and rules such as a school code of conduct. If a right is violated, you can report it to the right body.</Rule>
        <PairLinks
          pairs={[
            { right: 'SA Human Rights Commission', duty: 'Promotes and monitors human rights' },
            { right: 'Commission for Gender Equality', duty: 'Promotes gender equality' },
            { right: 'Public Protector', duty: 'Investigates wrongdoing in government' },
            { right: 'Legal Aid South Africa', duty: 'Legal help for people who cannot pay' },
          ]}
          aria="Four bodies and what they do. The South African Human Rights Commission promotes and monitors human rights. The Commission for Gender Equality promotes gender equality. The Public Protector investigates wrongdoing in government. Legal Aid South Africa gives legal help to people who cannot pay."
        />
        <Worked
          title="A right is violated at school"
          steps={[
            <>Step 1: speak to a teacher or the principal.</>,
            <>Step 2: use the school code of conduct and the school governing body.</>,
            <>Step 3: report it to the education department or a body such as the Human Rights Commission.</>,
            <>Step 4: if needed, take it to a court with help from Legal Aid South Africa.</>,
          ]}
        />
        <Mistake>Thinking that only the police protect human rights. Courts, commissions, schools, organisations and ordinary people all have a part.</Mistake>
      </>,
    ),
  },
  {
    title: 'Campaigns, nation-building and your own part',
    content: slide(
      <>
        <Rule>South Africans build the nation by taking part in campaigns and events that address discrimination and human rights violations. Examples are Human Rights Day on 21 March and the 16 Days of Activism for No Violence against Women and Children, from 25 November to 10 December.</Rule>
        <Worked
          title="A school campaign for the 16 Days of Activism"
          steps={[
            <>Your group chooses an issue: violence against women and children.</>,
            <>You make posters about where to get help.</>,
            <>You hold a short talk in assembly and ask learners to sign a pledge.</>,
            <>Your own contribution: you speak up and you support others.</>,
          ]}
        />
        <Mistake>Believing that human rights are only the work of politicians or adults. Young people can take part in discussions, projects and campaigns.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where is the Bill of Rights found, and why can rights be limited?</>,
          <>What is the Convention on the Rights of the Child about, and who is a child in it?</>,
          <>Which instrument aims to end discrimination against women?</>,
          <>Name two bodies that protect human rights in South Africa.</>,
        ]}
        answers={[
          <>In Chapter 2 of the Constitution. A right can be limited by law when the limit is reasonable and fair, for example when it would harm other people&apos;s rights.</>,
          <>It protects the rights of children, and a child is a person under 18.</>,
          <>CEDAW, the Convention on the Elimination of All Forms of Discrimination against Women.</>,
          <>For example the South African Human Rights Commission and the Commission for Gender Equality, or the courts and the Public Protector.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In which part of the Constitution is the Bill of Rights found?',
    options: ['Chapter 1', 'Chapter 2', 'Chapter 7', 'Chapter 14'],
    answer: 'Chapter 2',
    explanation: 'The Bill of Rights is Chapter 2 of the Constitution of the Republic of South Africa, 1996.',
  },
  {
    prompt: 'Who does the Bill of Rights protect?',
    options: ['People living in South Africa', 'Only citizens who are older than 18 years', 'Members of the government and of Parliament', 'Learners who go to school in a city'],
    answer: 'People living in South Africa',
    explanation: 'The Bill of Rights is a cornerstone of democracy in South Africa. It protects the rights of all people in the country.',
  },
  {
    prompt: 'Under which circumstances can a right in the Bill of Rights be limited?',
    options: ['By a teacher, when a learner has behaved badly in class', 'By any person who disagrees with what you have said', 'By a school, when it is more convenient for the school', 'By a fair and reasonable law'],
    answer: 'By a fair and reasonable law',
    explanation: 'A right can only be limited by a law that is reasonable and fair, for example when it would harm the rights of other people.',
  },
  {
    prompt: 'A learner posts a cruel message about a classmate and says, "It is my right to freedom of expression." Is she correct?',
    options: ['Yes, because freedom of expression has no limits at all', 'Yes, because the post was made outside school hours', 'No, because it harms a classmate\'s dignity', 'Yes, because the classmate can ignore the message'],
    answer: 'No, because it harms a classmate\'s dignity',
    explanation: 'Rights come with responsibilities. Freedom of expression does not include harming the dignity of others.',
  },
  {
    prompt: 'Which of these is a right protected by the Bill of Rights?',
    options: ['The right to a job in any company that you choose', 'The right to human dignity', 'The right to be given a free mobile phone', 'The right to skip lessons when you are tired'],
    answer: 'The right to human dignity',
    explanation: 'Human dignity, equality, life, privacy, expression and education are examples of rights in the Bill of Rights.',
  },
  {
    prompt: 'What is an international instrument in the area of human rights?',
    options: ['An agreement between countries on human rights standards', 'A law that only a school governing body is allowed to make', 'A tool that the police use to find people who have disappeared', 'A document that a person needs to travel to another country'],
    answer: 'An agreement between countries on human rights standards',
    explanation: 'International instruments, such as conventions and charters, set human rights standards that countries agree to follow.',
  },
  {
    prompt: 'Whose rights does the Convention on the Rights of the Child protect?',
    options: ['Women, who face discrimination in many countries', 'Workers, who earn a salary in a company or a factory', 'Refugees, who have left their home countries because of war', 'Children, who are people under the age of 18'],
    answer: 'Children, who are people under the age of 18',
    explanation: 'The Convention on the Rights of the Child, adopted by the United Nations in 1989, protects people under 18.',
  },
  {
    prompt: 'Which instrument was adopted in 1990 and protects the rights and welfare of African children?',
    options: ['The Convention on the Rights of the Child', 'The Convention on the Elimination of Discrimination against Women', 'The African Charter on the Rights and Welfare of the Child', 'The Constitution of the Republic of South Africa'],
    answer: 'The African Charter on the Rights and Welfare of the Child',
    explanation: 'The African Charter on the Rights and Welfare of the Child was adopted in 1990 by the Organisation of African Unity, which is now the African Union.',
  },
  {
    prompt: 'What does CEDAW aim to do?',
    options: ['Protect the rights of children in the world', 'End discrimination against women', 'Give support to people who live with HIV', 'Make sure that all countries have the same laws'],
    answer: 'End discrimination against women',
    explanation: 'CEDAW is the Convention on the Elimination of All Forms of Discrimination against Women, adopted by the United Nations in 1979.',
  },
  {
    prompt: 'What is the relationship between international instruments and South African law?',
    options: ['They set standards, and our own laws apply here', 'They replace the Constitution in South Africa itself', 'They only apply to countries that are in Europe', 'They can be ignored by the courts in our country'],
    answer: 'They set standards, and our own laws apply here',
    explanation: 'International instruments guide our laws. The Constitution and our own laws are how rights are protected in South Africa.',
  },
  {
    prompt: 'Which body promotes, protects and monitors human rights in South Africa?',
    options: ['The South African Reserve Bank', 'The South African Weather Service', 'The South African Broadcasting Corporation', 'The South African Human Rights Commission'],
    answer: 'The South African Human Rights Commission',
    explanation: 'The South African Human Rights Commission is set up by the Constitution to promote and monitor human rights.',
  },
  {
    prompt: 'Which body gives legal help to people who cannot afford a lawyer?',
    options: ['The Public Protector', 'The Department of Transport', 'Legal Aid South Africa', 'The Johannesburg Stock Exchange'],
    answer: 'Legal Aid South Africa',
    explanation: 'Legal Aid South Africa provides legal help to people who cannot pay for it.',
  },
  {
    prompt: 'A learner\'s rights are violated at school. Which step should usually come first?',
    options: ['Take the matter to the highest court in the country', 'Speak to a teacher or the principal', 'Post the school\'s details on social media for revenge', 'Stay quiet and hope that the problem goes away'],
    answer: 'Speak to a teacher or the principal',
    explanation: 'Start with the people at school and the code of conduct. If that does not work, use bodies such as the Human Rights Commission or a court.',
  },
  {
    prompt: 'Which campaign runs from 25 November to 10 December each year?',
    options: ['16 Days of Activism for No Violence against Women and Children', 'The Youth Day marches that take place in June each year', 'The Heritage Day braai that takes place in September each year', 'The Human Rights Day events that take place in March each year'],
    answer: '16 Days of Activism for No Violence against Women and Children',
    explanation: 'The 16 Days of Activism for No Violence against Women and Children runs from 25 November to 10 December.',
  },
];

const BillOfRightsInstruments = () => (
  <CapsSubjectTopic
    title="The Bill of Rights and International Instruments"
    subtitle="Our rights, the conventions that support them and the bodies that protect them"
    learnSteps={learnSteps}
    task="gr10-bill-of-rights-instruments-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default BillOfRightsInstruments;
