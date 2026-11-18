import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SourceBox } from '../../../../grade12/history/_shared/SourceBox';
import { ARMED as A, when } from '../../_shared/topic5Facts';

// Facts come from topic5Facts.ts and are asserted in g11HisResistance.test.ts. Every source box is an original or paraphrased description written for the lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events: 1960 to 1964',
    content: slide(
      <Timeline
        events={[
          { date: when(A.sharpeville), title: 'Police fire at Sharpeville', description: `${A.killed} people are killed at a pass-law protest called by the PAC.` },
          { date: when(A.emergency), title: 'A state of emergency is declared', description: 'Thousands of people are detained.' },
          { date: when(A.ban), title: 'The ANC and PAC are banned', description: 'Both organisations must work underground.' },
          { date: when(A.mk), title: 'Umkhonto we Sizwe launches its first attacks', description: 'The ANC’s armed wing begins a sabotage campaign.' },
          { date: when(A.liliesleaf), title: 'Police raid Liliesleaf Farm', description: 'Leaders are arrested at Rivonia.' },
          { date: when(A.verdict), title: 'The Rivonia verdict', description: `${A.sentenced} men, including Mandela, are sentenced to life imprisonment.` },
        ]}
      />,
    ),
  },
  {
    title: 'Sharpeville and its aftermath',
    content: slide(
      <>
        <Rule>On {when(A.sharpeville)} the PAC called a protest against the pass laws. People left their passes at home and went to the police station at Sharpeville to be arrested. The police opened fire, and {A.killed} people were killed. The government declared a state of emergency on {when(A.emergency)} and banned the ANC and the PAC on {when(A.ban)}.</Rule>
        <FactCards
          cards={[
            { title: `${A.sharpeville.day} Mar`, line1: 'police fire at', line2: 'Sharpeville' },
            { title: `${A.killed}`, line1: 'people killed', line2: 'by the police' },
            { title: `${A.emergency.day} Mar`, line1: 'state of emergency', line2: 'declared' },
            { title: `${A.ban.day} Apr`, line1: 'the ANC and PAC', line2: 'are banned' },
          ]}
          aria={`Sharpeville and after. On ${when(A.sharpeville)} police fired at a PAC protest against passes and ${A.killed} people were killed. A state of emergency was declared on ${when(A.emergency)}. The ANC and PAC were banned on ${when(A.ban)}.`}
        />
        <SourceBox label="Source A" provenance="An original paraphrase written for this lesson, in the style of a newspaper report of 1960.">
          <p>The report says that a large crowd gathered at the police station, that the police fired into the crowd, and that many people were wounded as they ran away. It adds that the government soon declared a state of emergency.</p>
        </SourceBox>
        <Worked
          title="Use the source"
          steps={[
            'The source shows that the shooting was followed quickly by an emergency, so the state chose force.',
            'It is one report, so a historian also reads the government’s statements and the later findings.',
          ]}
        />
        <Mistake>Saying that the ANC called the Sharpeville protest. It was called by the PAC, although the ANC held its own campaign against passes that month.</Mistake>
      </>,
    ),
  },
  {
    title: 'The turn to armed struggle',
    content: slide(
      <>
        <Rule>With peaceful protest banned and met with force, Mandela and others formed Umkhonto we Sizwe, the Spear of the Nation, as the ANC’s armed wing. Its first attacks were on {when(A.mk)}. It began with sabotage of government buildings and power lines, planned to avoid loss of life. The state replied with the Sabotage Act of {A.sabotageAct}, which allowed long detention without trial.</Rule>
        <FactCards
          cards={[
            { title: `${A.mk.year}`, line1: 'Umkhonto we Sizwe', line2: 'is formed' },
            { title: 'Targets', line1: 'buildings and', line2: 'power lines' },
            { title: 'Aim', line1: 'sabotage without', line2: 'loss of life' },
            { title: `${A.sabotageAct}`, line1: 'the Sabotage Act', line2: 'tightens control' },
          ]}
          aria={`The armed struggle. Umkhonto we Sizwe launched its first attacks on ${when(A.mk)}. Targets were government buildings and power lines, chosen to avoid loss of life. The state replied with the Sabotage Act of ${A.sabotageAct}.`}
        />
        <Worked
          title="Explain the turn"
          steps={[
            'The ANC and PAC were banned, and peaceful protest met with force.',
            'Leaders judged that sabotage was the only way left to put pressure on the state.',
            'The state answered with stronger laws, so both sides hardened.',
          ]}
        />
        <Mistake>Calling the first sabotage campaign random violence against civilians. Its stated aim was to damage state targets without killing people.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Rivonia Trial, 1963 and 1964',
    content: slide(
      <>
        <Rule>On {when(A.liliesleaf)} police raided Liliesleaf Farm in Rivonia and arrested leaders of the ANC and Umkhonto we Sizwe. The trial began in {A.trialStart}. On {when(A.speech)} Mandela told the court that a free and democratic society was an ideal he hoped to live for, but was prepared to die for. On {when(A.verdict)} {A.sentenced} men were sentenced to life imprisonment.</Rule>
        <FactCards
          cards={[
            { title: `${A.liliesleaf.day} Jul`, line1: 'raid on Liliesleaf', line2: `Farm, ${A.liliesleaf.year}` },
            { title: `${A.speech.day} Apr`, line1: `Mandela’s speech,`, line2: `${A.speech.year}` },
            { title: `${A.verdict.day} Jun`, line1: 'the verdict:', line2: 'life imprisonment' },
            { title: `${A.sentenced}`, line1: 'men sentenced,', line2: 'including Mandela' },
          ]}
          aria={`The Rivonia Trial. Police raided Liliesleaf Farm on ${when(A.liliesleaf)}. Mandela made his speech on ${when(A.speech)}. On ${when(A.verdict)} ${A.sentenced} men, including Mandela, were sentenced to life imprisonment.`}
        />
        <SourceBox label="Source B" provenance="An original paraphrase of the closing part of Mandela's statement to the court, April 1964.">
          <p>He says he has fought against white domination and against black domination, that he holds the ideal of a free society in which all live together in harmony, and that he is prepared to die for it if need be.</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It is useful because it is the accused leader’s own statement of his reasons.',
            'It was made in court, so a historian also compares it with the state’s case.',
          ]}
        />
        <Mistake>Saying that Mandela was sentenced to death. The state asked for it, but the court sentenced the eight men to life imprisonment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which organisation called the pass-law protest at Sharpeville?</>,
          <>What happened to the ANC and PAC in April 1960?</>,
          <>What does Umkhonto we Sizwe mean?</>,
          <>Which verdict ended the Rivonia Trial?</>,
        ]}
        answers={[
          <>The Pan Africanist Congress.</>,
          <>They were banned and had to work underground.</>,
          <>The Spear of the Nation.</>,
          <>Life imprisonment for {A.sentenced} men, including Mandela.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "On which date in 1960 did police fire on protesters at Sharpeville?",
    options: ["16 June 1976", "21 March 1960", "9 August 1956", "26 June 1955"],
    answer: "21 March 1960",
    explanation: "On 21 March 1960 police opened fire on a crowd protesting against the pass laws.",
  },
  {
    prompt: "Which organisation called the 1960 anti-pass protest at Sharpeville?",
    options: ["The African National Congress", "The Black Sash movement", "The Congress of Democrats", "The Pan Africanist Congress"],
    answer: "The Pan Africanist Congress",
    explanation: "The PAC called the protest, which was a campaign against the pass laws.",
  },
  {
    prompt: "How many people were killed by the police at Sharpeville?",
    options: ["69 people", "21 people", "156 people", "12 people"],
    answer: "69 people",
    explanation: "Sixty-nine people died and many more were wounded, and many were shot in the back as they ran.",
  },
  {
    prompt: "What did the protesters at Sharpeville leave at home to challenge the pass laws?",
    options: ["Their weapons", "Their school books", "Their passes", "Their wage packets"],
    answer: "Their passes",
    explanation: "People were asked to leave their passes at home and offer themselves for arrest at police stations.",
  },
  {
    prompt: "What did the government do after Sharpeville in 1960?",
    options: ["Repealed the pass laws and freed the arrested leaders", "Invited the ANC and PAC to talks about a new law", "Handed the townships to councils and local chiefs", "Declared an emergency and banned both movements"],
    answer: "Declared an emergency and banned both movements",
    explanation: "A state of emergency was declared on 30 March, and the two organisations were banned on 8 April 1960.",
  },
  {
    prompt: "In which month of 1960 were the ANC and PAC banned?",
    options: ["January", "April", "August", "November"],
    answer: "April",
    explanation: "The Unlawful Organisations Act of 8 April 1960 banned the ANC and PAC, so they had to work underground.",
  },
  {
    prompt: "What was the name of the armed wing formed by the ANC in 1961?",
    options: ["Umkhonto we Sizwe", "Poqo of the Pan Africanist Congress", "Operation Vula of the exiled ANC", "The Black Consciousness Movement"],
    answer: "Umkhonto we Sizwe",
    explanation: "Umkhonto we Sizwe means Spear of the Nation, and it was formed with the help of members of the Communist Party.",
  },
  {
    prompt: "On which date in 1961 did Umkhonto we Sizwe launch its first attacks?",
    options: ["16 June 1976", "26 June 1955", "16 December 1961", "12 December 1956"],
    answer: "16 December 1961",
    explanation: "The first sabotage attacks took place on 16 December 1961, a day with a deep meaning for Afrikaner nationalists.",
  },
  {
    prompt: "What kind of targets did Umkhonto we Sizwe choose at first?",
    options: ["Crowded city centres and busy shopping streets", "Empty government buildings and power lines", "Police stations full of officers on duty", "Foreign embassies in the capital city"],
    answer: "Empty government buildings and power lines",
    explanation: "Sabotage was planned to damage symbols of the state without loss of life, at least at the start.",
  },
  {
    prompt: "Why did Mandela and others decide in 1961 to turn to sabotage?",
    options: ["The Freedom Charter had called for an armed war", "They wanted to copy the Defiance Campaign", "The United Nations asked them to take up arms", "Peaceful protest was banned and met with force"],
    answer: "Peaceful protest was banned and met with force",
    explanation: "After Sharpeville and the bans, leaders felt that peaceful methods had been closed and that the state answered with force.",
  },
  {
    prompt: "Where did police arrest ANC and MK leaders in July 1963?",
    options: ["At Robben Island prison", "At Kliptown on the Charter day", "At Liliesleaf Farm in Rivonia", "At the Union Buildings in Pretoria"],
    answer: "At Liliesleaf Farm in Rivonia",
    explanation: "The police raid of 11 July 1963 on Liliesleaf Farm led to the Rivonia Trial.",
  },
  {
    prompt: "What did Mandela say he was prepared to do for the ideal of a free and democratic society?",
    options: ["Die for it if need be", "Leave the country for exile", "Join the government of the day", "Hand over the ANC's weapons"],
    answer: "Die for it if need be",
    explanation: "In April 1964 Mandela said it was an ideal he hoped to live for but was prepared to die for.",
  },
  {
    prompt: "What sentence did the court give Mandela and seven others in June 1964?",
    options: ["The death sentence by hanging", "Five years in prison", "Banishment to a rural area", "Life imprisonment"],
    answer: "Life imprisonment",
    explanation: "On 12 June 1964 eight men were sentenced to life imprisonment, although the state had asked for the death sentence.",
  },
  {
    prompt: "Why is Mandela's April 1964 speech a useful source for a historian?",
    options: ["It was written by the judge who sentenced the eight men", "It gives the accused leader's own reasons for sabotage", "It records the police view of the farm raid", "It was published by the National Party government"],
    answer: "It gives the accused leader's own reasons for sabotage",
    explanation: "It is the leader's own statement of his reasons, although it was made in court and is one side of the story.",
  },
];

const SharpevilleArmedStruggleRivonia = () => (
  <CapsSubjectTopic
    title="Sharpeville, the Armed Struggle and the Rivonia Trial"
    subtitle="The 1960 massacre, the bans, Umkhonto we Sizwe and the Rivonia Trial of 1963 and 1964"
    learnSteps={learnSteps}
    task="gr11-sharpeville-armed-struggle-rivonia-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default SharpevilleArmedStruggleRivonia;
