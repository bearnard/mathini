import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SourceBox } from '../../../../grade12/history/_shared/SourceBox';
import { AFRIKANER as A, AUSTRALIA as S } from '../../_shared/gaps11Facts';

// Dates come from gaps11Facts.ts and are asserted in g11HisGaps.test.ts. Every source box is an original or paraphrased description written for the lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const date = (d: { day: number; month: string; year: number }) => `${d.day} ${d.month} ${d.year}`;
export const learnSteps: LearnStep[] = [
  {
    title: 'Key events: the Stolen Generations',
    content: slide(
      <Timeline
        events={[
          { date: String(S.waAboriginesAct), title: 'Western Australia\'s Aborigines Act', description: 'The Chief Protector becomes the legal guardian of every Aboriginal child in the state.' },
          { date: `${S.removalsFrom} to ${S.removalsTo}`, title: 'Children removed from their families', description: 'Governments in many states and territories take Aboriginal children, especially those of mixed descent, from their families.' },
          { date: String(S.canberraConference), title: 'The Canberra conference', description: 'Officials, including Neville and Cook, agree that people of mixed descent should be absorbed into the white community.' },
          { date: String(S.bringingThemHome), title: 'The Bringing Them Home report', description: 'An inquiry tells the story of the removals from the evidence of those who lived it.' },
          { date: date(S.apology), title: 'The national apology', description: 'The Prime Minister apologises in Parliament to the Stolen Generations.' },
        ]}
      />,
    ),
  },
  {
    title: 'Protection and assimilation',
    content: slide(
      <>
        <Rule>In the early twentieth century state and territory governments passed laws that controlled the lives of Aboriginal people: where they lived, whom they married and where they worked. Officials called this protection. The policy that followed, assimilation, aimed to make Aboriginal people live like white Australians and to end their separate identity. The laws gave an official the power to take a child from a family without a court order.</Rule>
        <FactCards
          cards={[
            { title: 'Protection', line1: 'laws control where', line2: 'Aboriginal people live' },
            { title: 'Guardian', line1: 'the Chief Protector is', line2: 'every child’s guardian' },
            { title: 'Assimilation', line1: 'live like white', line2: 'Australians' },
            { title: 'Result', line1: 'families separated by', line2: 'official decision' },
          ]}
          aria="Protection and assimilation. Protection: laws control where Aboriginal people live. Guardian: the Chief Protector is every child's legal guardian. Assimilation: Aboriginal people to live like white Australians. Result: families separated by official decision."
        />
        <Worked
          title="Explain the policy"
          steps={[
            'The law made an official the legal guardian of Aboriginal children.',
            'The official could place a child in a mission, a children’s home or with a white family.',
            'The aim was assimilation: the child was to grow up as part of white society.',
          ]}
        />
        <Mistake>Using the term &ldquo;protection&rdquo; as if the laws really protected families. Today historians explain that it meant control.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cecil Cook and A. O. Neville',
    content: slide(
      <>
        <Rule>Dr Cecil Cook was Chief Protector of Aborigines in the Northern Territory from {S.cookFrom} to {S.cookTo}, and A. O. Neville led Aboriginal affairs in Western Australia from {S.nevilleFrom} to {S.nevilleTo}. Both believed that children of mixed descent should be brought up in white society, and that over generations the Aboriginal ancestry of their descendants would fade, a plan often described as breeding out blackness. At the Canberra conference of {S.canberraConference}, officials from the states agreed that this absorption was the future for such people.</Rule>
        <FactCards
          cards={[
            { title: 'Cook', line1: `Northern Territory,`, line2: `${S.cookFrom} to ${S.cookTo}` },
            { title: 'Neville', line1: 'Western Australia,', line2: `${S.nevilleFrom} to ${S.nevilleTo}` },
            { title: 'Idea', line1: 'absorb people of mixed', line2: 'descent into white society' },
            { title: 'Conference', line1: `Canberra, ${S.canberraConference}`, line2: 'states agree' },
          ]}
          aria={`Cook and Neville. Cook was Chief Protector in the Northern Territory from ${S.cookFrom} to ${S.cookTo}. Neville led Aboriginal affairs in Western Australia from ${S.nevilleFrom} to ${S.nevilleTo}. Their idea was to absorb people of mixed descent into white society. At the Canberra conference in ${S.canberraConference} the states agreed.`}
        />
        <SourceBox label="Source B" provenance="An original paraphrase written for this lesson of the kind of argument that officials made at the 1937 conference.">
          <p>Officials argued that children of mixed descent should be brought up away from Aboriginal communities, so that in a few generations their descendants would be part of the white population.</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It is useful for showing the aim of the officials: to end a separate Aboriginal identity.',
            'It is one-sided: it gives the officials’ view and says nothing of what the families wanted.',
          ]}
        />
        <Mistake>Saying that Cook and Neville were the only people responsible. They led policies that the governments, churches and many voters supported.</Mistake>
      </>,
    ),
  },
  {
    title: 'The removals and their effects',
    content: slide(
      <>
        <Rule>Between about {S.removalsFrom} and {S.removalsTo} many Aboriginal children were taken from their families. The Bringing Them Home inquiry estimated that between one in three and one in ten children were removed in that period. The children are known as the Stolen Generations. Many lost contact with their parents, their language and their culture, and some were badly treated; families and communities were left grieving.</Rule>
        <FactCards
          cards={[
            { title: 'When', line1: `about ${S.removalsFrom}`, line2: `to ${S.removalsTo}` },
            { title: 'How many', line1: 'between one in three', line2: 'and one in ten children' },
            { title: 'Loss', line1: 'family, language', line2: 'and culture' },
            { title: 'Effects', line1: 'grief that passes on', line2: 'to later generations' },
          ]}
          aria={`The removals. When: about ${S.removalsFrom} to ${S.removalsTo}. How many: between one in three and one in ten children. Loss: family, language and culture. Effects: grief that passes on to later generations.`}
        />
        <SourceBox label="Source C" provenance="An original description written for this lesson, in the style of testimony given to the inquiry. It is not a real person's words.">
          <p>&ldquo;I was taken when I was small. I grew up in a home, and I did not see my mother again until I was grown. I had lost my language.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Use the evidence"
          steps={[
            'Source C shows the effect on one person: separation, and loss of language.',
            'It is one account, so a historian uses it with the inquiry’s wider findings.',
          ]}
        />
        <Mistake>Giving a single figure for how many children were taken. The inquiry gave a range, because records are incomplete.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bringing Them Home and the apology',
    content: slide(
      <>
        <Rule>The Bringing Them Home report of {S.bringingThemHome} recorded the evidence of survivors and recommended that governments apologise and make reparations. The first National Sorry Day was held in {S.sorryDay}. Some political leaders argued for years against a formal apology, saying that today&rsquo;s government should not apologise for past actions, and others said that many officials believed they were helping. On {date(S.apology)} the Prime Minister, Kevin Rudd, apologised in Parliament to the Stolen Generations.</Rule>
        <FactCards
          cards={[
            { title: `${S.bringingThemHome}`, line1: 'the inquiry report', line2: 'Bringing Them Home' },
            { title: `${S.sorryDay}`, line1: 'the first National', line2: 'Sorry Day' },
            { title: 'Debate', line1: 'should a government', line2: 'apologise for the past?' },
            { title: `${S.apology.year}`, line1: 'the apology in', line2: 'Parliament' },
          ]}
          aria={`Bringing Them Home and the apology. In ${S.bringingThemHome} the inquiry published its report. In ${S.sorryDay} the first National Sorry Day was held. There was a debate over whether a government should apologise for the past. In ${S.apology.year} the Prime Minister apologised in Parliament.`}
        />
        <Worked
          title="Balance the views"
          steps={[
            'For an apology: the policy was based on race, it caused deep harm and survivors were still living.',
            'Against, as some argued: later governments are not responsible for earlier ones, and some officials meant to help.',
            'Historians agree that the removals happened and that policy aimed at assimilation, and they differ on how to describe the intentions of individual officials.',
          ]}
        />
        <Mistake>Treating the apology as the end of the story. Many Indigenous Australians say that closing gaps in health, education and housing is still needed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What name is given to the children taken from their families?</>,
          <>What was the aim of the policy of assimilation?</>,
          <>Name one of the two officials who led the policy in their territory or state.</>,
          <>On what date did the Prime Minister apologise in Parliament?</>,
        ]}
        answers={[
          <>The Stolen Generations.</>,
          <>To make Aboriginal people live like white Australians and end their separate identity.</>,
          <>Cecil Cook or A. O. Neville.</>,
          <>{date(S.apology)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What name is given to the Aboriginal children taken from their families?",
    options: ["The Lost Fleet", "The Lost Colonies", "The Stolen Generations", "The White Generation"],
    answer: "The Stolen Generations",
    explanation: "The children removed by government policy are known as the Stolen Generations.",
  },
  {
    prompt: "Between about which years did the removals take place?",
    options: ["1910 to 1970", "1788 to 1850", "1850 to 1900", "1970 to 2008"],
    answer: "1910 to 1970",
    explanation: "The inquiry placed the removals between about 1910 and 1970.",
  },
  {
    prompt: "What was the aim of the policy of assimilation?",
    options: ["To protect Aboriginal customs and laws", "To return the land to its first owners", "To end all immigration to the country", "To make Aboriginal people live as whites"],
    answer: "To make Aboriginal people live as whites",
    explanation: "Assimilation aimed to end a separate Aboriginal identity.",
  },
  {
    prompt: "What power did the laws give a Chief Protector over Aboriginal children?",
    options: ["He could only advise them", "He was their legal guardian", "He had no power", "He could sell their land"],
    answer: "He was their legal guardian",
    explanation: "The law made the official the legal guardian, so he could remove them.",
  },
  {
    prompt: "Which Aboriginal children were especially targeted for removal?",
    options: ["Children of immigrants", "Children of mixed descent", "Children in cities only", "Children of officials"],
    answer: "Children of mixed descent",
    explanation: "Officials planned to absorb children of mixed descent into white society.",
  },
  {
    prompt: "Which official was Chief Protector in the Northern Territory from 1927 to 1939?",
    options: ["A. O. Neville", "Kevin Rudd", "Robert Menzies", "Cecil Cook"],
    answer: "Cecil Cook",
    explanation: "Dr Cecil Cook held the post in the Northern Territory.",
  },
  {
    prompt: "Which official led Aboriginal affairs in Western Australia from 1915 to 1940?",
    options: ["A. O. Neville", "Cecil Cook", "Kevin Rudd", "Arthur Calwell"],
    answer: "A. O. Neville",
    explanation: "A. O. Neville led the policy in Western Australia.",
  },
  {
    prompt: "What did Cook and Neville expect to happen to the descendants of mixed-descent children?",
    options: ["They would return to the land", "They would form a new state", "Their Aboriginal ancestry would fade", "They would stay in their communities"],
    answer: "Their Aboriginal ancestry would fade",
    explanation: "The plan, described as breeding out blackness, aimed at absorption.",
  },
  {
    prompt: "In which year did the officials meet at the Canberra conference?",
    options: ["1788", "1905", "1997", "1937"],
    answer: "1937",
    explanation: "The 1937 conference agreed on absorption.",
  },
  {
    prompt: "Which inquiry report told the story of the removals from survivors' evidence?",
    options: ["The Mabo report", "Bringing Them Home", "The Canberra report", "The Sorry report"],
    answer: "Bringing Them Home",
    explanation: "The Bringing Them Home report was published in 1997.",
  },
  {
    prompt: "Roughly what share of Aboriginal children did the inquiry estimate were removed?",
    options: ["Between one in three and one in ten", "Fewer than one in a hundred", "More than nine in ten", "Exactly one in two"],
    answer: "Between one in three and one in ten",
    explanation: "The inquiry gave a range because records were incomplete.",
  },
  {
    prompt: "Why is one survivor's account used with other evidence?",
    options: ["It is always false in every detail", "It can replace all other sources", "It shows one life, not the whole", "It must never be used by anyone"],
    answer: "It shows one life, not the whole",
    explanation: "A historian uses testimony with the wider findings of the inquiry.",
  },
  {
    prompt: "On what date did Prime Minister Rudd apologise in Parliament?",
    options: ["26 May 1998", "3 June 1992", "13 February 2008", "1 January 1901"],
    answer: "13 February 2008",
    explanation: "The national apology was made on 13 February 2008.",
  },
  {
    prompt: "What argument did some leaders make against a formal apology?",
    options: ["Today's government should not apologise", "The removals never happened at all", "Every official meant to do harm", "The inquiry was never held by anyone"],
    answer: "Today's government should not apologise",
    explanation: "Others replied that the policy caused deep harm to living survivors.",
  },
];

const StolenGenerations = () => (
  <CapsSubjectTopic
    title="The Stolen Generations"
    subtitle="Protection and assimilation, Cook and Neville, the removals, Bringing Them Home and the apology"
    learnSteps={learnSteps}
    task="gr11-stolen-generations-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default StolenGenerations;
