import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { UDHR as U, dateText } from '../../_shared/facts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'The reasons for the Declaration',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: '1939 to 1945', title: 'World War II', description: 'Millions of people are killed, including in the Holocaust.' },
            { date: '1945', title: 'The United Nations is formed', description: 'Countries join to keep peace and protect human rights.' },
            { date: '1946', title: 'A commission is set up', description: `A group led by ${U.chair} begins to write a statement of rights for all people.` },
            { date: dateText(U.adopted), title: 'The Declaration is adopted', description: `The General Assembly adopts the Universal Declaration of Human Rights, with ${U.articles} articles.` },
            { date: '1948', title: 'The National Party wins power in South Africa', description: 'It begins to make apartheid law.' },
          ]}
        />
        <Rule>After World War II, countries drew up the Universal Declaration of Human Rights. The world had seen terrible crimes against people because of who they were, and countries wanted to say that all people have basic rights.</Rule>
        <Mistake>Thinking that the Declaration was written by one country. It was written under the United Nations, by representatives from several countries.</Mistake>
      </div>
    ),
  },
  {
    title: 'What the Declaration says',
    content: (
      <div className="space-y-4">
        <Rule>The Declaration has {U.articles} articles. It was adopted on {dateText(U.adopted)}, and 10 December is now Human Rights Day. It says that every person has the same basic rights, whatever their race, sex, religion or opinions.</Rule>
        <Worked
          title="Some rights in everyday words"
          steps={[
            <>All people are born free and equal in dignity and rights.</>,
            <>Everyone has the right to life, liberty and safety.</>,
            <>Everyone may move about freely and has the right to an education.</>,
            <>No one may be treated worse because of their race.</>,
          ]}
        />
        <Mistake>Thinking that the rights are favours from a government. The Declaration says that they belong to every person from birth.</Mistake>
      </div>
    ),
  },
  {
    title: 'How strong is the Declaration?',
    content: (
      <div className="space-y-4">
        <Rule>The Declaration is a statement of standards, not a law that a court can enforce. But it became the base of later treaties and of many countries&rsquo; own laws.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>In the vote of 1948, {U.votes.for} states voted for it, {U.votes.against} voted against it and {U.votes.abstained} abstained (did not vote either way).</li>
          <li>South Africa was one of the states that abstained.</li>
          <li>The Bill of Rights in South Africa&rsquo;s Constitution of 1996 protects many of the rights that the Declaration names.</li>
        </ul>
        <Mistake>Calling the Declaration a binding law in 1948. It set a standard that countries were asked to follow.</Mistake>
      </div>
    ),
  },
  {
    title: 'The Declaration and apartheid',
    content: (
      <div className="space-y-4">
        <Rule>The apartheid government that came to power in 1948 passed laws that went against the Declaration. Opponents of apartheid used the Declaration to show that these laws were wrong.</Rule>
        <SourceBox label="Source B" provenance="A paraphrase of Article 2 of the Declaration, written for this lesson.">
          <p>&ldquo;Everyone is entitled to the rights in this Declaration, without any distinction of any kind, such as race, colour, sex, language or religion.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Rights and apartheid laws"
          steps={[
            <>Equal rights for all people: apartheid divided people by race and gave them unequal rights.</>,
            <>Freedom of movement: the pass laws controlled where Black South Africans could live and travel.</>,
            <>Education: Black children received a separate and poorer education.</>,
          ]}
        />
        <Mistake>Saying that apartheid was legal and therefore fair. A law can be against basic human rights, as the Declaration shows.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>When was the Declaration adopted, and how many articles does it have?</>,
          <>What had the world seen in the war that led to it?</>,
          <>In 1948, could a court force countries to follow the Declaration?</>,
          <>Name one apartheid practice that went against the Declaration.</>,
        ]}
        answers={[
          <>On {dateText(U.adopted)}; {U.articles} articles.</>,
          <>Because of the terrible crimes against people during the war, so that all people have basic rights.</>,
          <>No. It was a statement of standards, not a law.</>,
          <>Any one of: unequal treatment by race, the pass laws, separate and poorer education.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why was the Universal Declaration of Human Rights written?',
    options: ["To end the war in the Pacific region", "To divide Germany into four parts", "To give the United Nations an army", "To say all people have basic rights"],
    answer: "To say all people have basic rights",
    explanation: 'After the crimes of World War II, countries wanted a shared statement of the rights of every person.',
  },
  {
    prompt: 'Which organisation adopted the Declaration?',
    options: ['The United Nations', 'The League of Nations', 'The Warsaw Pact', 'The African Union'],
    answer: 'The United Nations',
    explanation: 'The General Assembly of the United Nations adopted it.',
  },
  {
    prompt: 'On what date was the Declaration adopted?',
    options: ["7 December 1941", "28 February 1946", "10 December 1948", "11 November 1949"],
    answer: "10 December 1948",
    explanation: 'It was adopted on 10 December 1948, and 10 December is now Human Rights Day.',
  },
  {
    prompt: 'How many articles does the Declaration have?',
    options: ['10', '48', '30', '100'],
    answer: '30',
    explanation: 'The Declaration has 30 articles.',
  },
  {
    prompt: 'Who led the commission that wrote the first draft?',
    options: ['Winston Churchill', 'Nelson Mandela', 'Adolf Hitler', 'Eleanor Roosevelt'],
    answer: 'Eleanor Roosevelt',
    explanation: 'Eleanor Roosevelt, a former First Lady of the United States, chaired the commission.',
  },
  {
    prompt: 'Which statement agrees with Article 1 of the Declaration?',
    options: ["Only some people are born with rights", "Rights are given by the governments", "All people are born free and equal", "Rights depend on the race of a person"],
    answer: "All people are born free and equal",
    explanation: 'The Declaration says that rights belong to every person from birth.',
  },
  {
    prompt: 'According to the Declaration, who is entitled to its rights?',
    options: ["Citizens of the member states", "Everyone, whatever their race or sex", "People who obey the law at that time", "People who live in Europe at present"],
    answer: "Everyone, whatever their race or sex",
    explanation: 'Article 2 says that the rights belong to everyone without distinction of any kind.',
  },
  {
    prompt: 'Was the Declaration a law that countries had to obey in 1948?',
    options: ["Yes, each country had to obey it", "Yes, a court of the UN could jail leaders", "No, it applied to Europe at the time", "No, it was a statement of standards"],
    answer: "No, it was a statement of standards",
    explanation: 'It was not a binding law, but it became the base of later treaties and national laws.',
  },
  {
    prompt: 'In the vote of 1948, how many states voted for the Declaration?',
    options: ['30', '8', '48', '56'],
    answer: '48',
    explanation: 'The vote was 48 for, none against and 8 abstentions.',
  },
  {
    prompt: 'What did South Africa do in the vote of 1948?',
    options: ['It voted for the Declaration', 'It voted against the Declaration', 'It did not exist yet', 'It abstained'],
    answer: 'It abstained',
    explanation: 'South Africa was one of the 8 states that abstained.',
  },
  {
    prompt: 'Which right of the Declaration did the pass laws go against?',
    options: ['The right to vote for the UN', 'The right to own a car', 'The right to move about freely', 'The right to a university degree'],
    answer: 'The right to move about freely',
    explanation: 'The pass laws controlled where Black South Africans could live and travel.',
  },
  {
    prompt: 'Why did apartheid go against Article 2 of the Declaration?',
    options: ["It gave children the same schools in each town", "It treated people differently by race", "It ended the use of passes for all adults", "It gave the vote to adults in the country"],
    answer: "It treated people differently by race",
    explanation: 'Article 2 says that rights belong to all, without distinction of race. Apartheid divided people by race.',
  },
  {
    prompt: 'Source B says that everyone is entitled to the rights, without distinction of race, colour or sex. What does it show a historian?',
    options: ["How many states obeyed the Declaration", "What the South African government decided", "The result of a court case about rights", "The standard set for all states"],
    answer: "The standard set for all states",
    explanation: 'The source states the principle of equal rights. It does not show whether states followed it.',
  },
  {
    prompt: 'Which South African document protects many of the rights named in the Declaration?',
    options: ["The Bill of Rights of 1996", "The Population Registration Act", "The Group Areas Act of 1950", "The Bantu Education Act of 1953"],
    answer: "The Bill of Rights of 1996",
    explanation: 'The Bill of Rights protects rights such as equality, dignity, freedom of movement and education.',
  },
];
