import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ANGOLA as A, dateText } from '../../_shared/coldWarFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1974 to 2002',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: dateText(A.carnation), title: 'Revolution in Portugal', description: 'A coup in Lisbon begins the end of Portugal\'s African empire.' },
            { date: dateText(A.independence), title: 'Angola becomes independent', description: 'Three movements compete for power while outside forces take sides.' },
            { date: `${A.cuito.from} to ${A.cuito.to}`, title: 'Cuito Cuanavale', description: 'A long series of battles in south-east Angola whose meaning is still debated.' },
            { date: dateText(A.newYorkAccords), title: 'The New York Accords', description: 'Angola, Cuba and South Africa agree on a settlement for Namibia and the withdrawal of Cuban troops.' },
            { date: dateText(A.namibia), title: 'Namibia becomes independent', description: 'The end of South African rule in Namibia.' },
            { date: `${A.bicesse.month} ${A.bicesse.year}`, title: 'The Bicesse Accords', description: 'A peace deal between the MPLA government and UNITA; the war resumes after the 1992 election.' },
            { date: `${A.peace.month} ${A.peace.year}`, title: 'Peace at last', description: `UNITA leader Jonas Savimbi was killed in ${A.savimbiKilled.month} ${A.savimbiKilled.year}, and peace followed two months later.` },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'How Africa was drawn into the Cold War',
    content: (
      <div className="space-y-4">
        <Rule>When African states became independent, the superpowers competed for influence there through trade, aid and sometimes conflict.</Rule>
        <Worked
          title="Angola: a colony becomes a battlefield"
          steps={[
            <>Portugal ruled Angola for centuries. After the {A.carnation.year} revolution in Portugal, the colony was given independence quickly ({dateText(A.independence)}).</>,
            <>Three liberation movements had fought the Portuguese and now fought each other: the <strong>MPLA</strong> (Agostinho Neto), the <strong>FNLA</strong> (Holden Roberto) and <strong>UNITA</strong> (Jonas Savimbi, founded {A.unitaFounded}).</>,
            <>A civil war broke out and each movement looked for allies abroad, so a local struggle became part of the Cold War.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Who backed whom, and why',
    content: (
      <div className="space-y-4">
        <Rule>Outside states joined the Angolan war for different reasons. Explain the reason, not only the side.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>The USSR and Cuba</strong> supported the MPLA. The USSR wanted influence in southern Africa; Cuba sent troops and presented its role as help against foreign invasion.</li>
          <li><strong>The USA</strong> opposed the MPLA, and backed the FNLA and later UNITA, to contain communism and Soviet influence.</li>
          <li><strong>South Africa</strong> invaded in 1975 and later supported UNITA. It wanted a friendly government in Angola, an end to SWAPO bases and a buffer against the liberation movements.</li>
          <li><strong>China</strong> backed movements opposed to the MPLA for a time, but played a small role.</li>
        </ul>
        <Mistake>Do not describe the war only as a Soviet-American quarrel. Angolan politics and the regional interests of South Africa also shaped it, and the war caused regional instability: SWAPO and the ANC had bases in Angola, and South Africa raided across the border.</Mistake>
      </div>
    ),
  },
  {
    title: 'Cuito Cuanavale: competing accounts',
    content: (
      <div className="space-y-4">
        <Rule>The battles around Cuito Cuanavale ({A.cuito.from} to {A.cuito.to}) are described in different ways. CAPS asks you to understand why, not to pick a winner.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700"><strong className="text-indigo-700">The South African and UNITA accounts</strong><p className="mt-1">Stress that the South African Defence Force and UNITA stopped an offensive on UNITA territory, inflicted heavy losses and kept the town under siege. They describe a battlefield draw or a tactical success.</p></div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700"><strong className="text-rose-700">The Angolan and Cuban accounts</strong><p className="mt-1">Stress that Angolan, Cuban and Soviet-backed forces held the town, stopped the South African advance and then moved forces towards the Namibian border. They describe a decisive victory.</p></div>
        </div>
        <SourceBox label="Source A" provenance="An original summary of how a South African military account of the battle tends to be framed, written for this lesson.">
          <p>&ldquo;The offensive was halted at heavy cost to the attackers, and the SADF withdrew in good order.&rdquo;</p>
        </SourceBox>
        <SourceBox label="Source B" provenance="An original summary of how a Cuban or Angolan government account of the battle tends to be framed, written for this lesson.">
          <p>&ldquo;The invaders failed to take the town and were forced to the negotiating table.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Compare the sources"
          steps={[
            <>Both describe the same siege but stress different facts: Source A stresses losses and an orderly withdrawal; Source B stresses that the town was held.</>,
            <>Ask who wrote each source: each is written by a side with a reason to claim success, to its own people and abroad.</>,
            <>Both agree on one thing that matters most: the battles raised the cost of the war, and the three governments soon negotiated.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'After 1989: changing international relations',
    content: (
      <div className="space-y-4">
        <Rule>As the Cold War ended, the outside powers had less reason to fight in Angola, and settlements followed.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The <strong>New York Accords</strong> ({dateText(A.newYorkAccords)}) linked a Cuban withdrawal from Angola to South African withdrawal from Namibia. Namibia became independent on {dateText(A.namibia)}.</li>
          <li>Cuban troops left Angola by 1991. The Bicesse Accords of {A.bicesse.year} set up elections, but UNITA rejected the 1992 result and the war went on until {A.peace.year}.</li>
          <li>The end of superpower rivalry removed the outside backing that had fuelled the war, so outside backing was removed.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Name the three Angolan liberation movements.</>,
          <>Give one reason for South Africa&rsquo;s involvement in Angola.</>,
          <>Why do accounts of Cuito Cuanavale differ?</>,
          <>What did the New York Accords link?</>,
        ]}
        answers={[
          <>The MPLA, the FNLA and UNITA.</>,
          <>To end SWAPO bases and secure a friendly or weak government as a buffer against the liberation movements.</>,
          <>Each side stresses facts that support its claim to success, and each had a reason to tell its own people and the world that it had done well.</>,
          <>Cuban withdrawal from Angola with South African withdrawal from Namibia.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'On what date did Angola become independent from Portugal?',
    options: ['25 April 1974', '22 December 1988', '21 March 1990', '11 November 1975'],
    answer: '11 November 1975',
    explanation: 'Angola became independent on 11 November 1975. The Portuguese revolution was in April 1974, the New York Accords in December 1988 and Namibia\'s independence in March 1990.',
  },
  {
    prompt: 'Which pairing of movement and leader is correct?',
    options: ['UNITA and Agostinho Neto', 'MPLA and Agostinho Neto', 'FNLA and Jonas Savimbi', 'MPLA and Holden Roberto'],
    answer: 'MPLA and Agostinho Neto',
    explanation: 'The MPLA was led by Agostinho Neto. UNITA was led by Jonas Savimbi and the FNLA by Holden Roberto.',
  },
  {
    prompt: 'Why did the USSR support the MPLA?',
    options: ['It wanted to protect Portugal\'s empire', 'It wished to help South Africa', 'It wanted influence in southern Africa', 'It had been asked by the USA'],
    answer: 'It wanted influence in southern Africa',
    explanation: 'Supporting a friendly, Marxist government in Angola advanced Soviet influence in the region and fitted the Cold War competition with the USA.',
  },
  {
    prompt: 'Why did the USA oppose the MPLA government?',
    options: ['To protect Portuguese rule', 'To help Cuba gain influence', 'To contain Soviet influence', 'To aid the Soviet Union'],
    answer: 'To contain Soviet influence',
    explanation: 'The USA saw the Marxist MPLA, backed by the USSR and Cuba, as a Cold War threat and supported its rivals.',
  },
  {
    prompt: 'Which of the following was a reason for South African involvement in Angola?',
    options: ['To protect the Soviet Union', 'To help Cuba defend Angola', 'To end SWAPO bases and gain a buffer', 'To bring Namibia to early independence'],
    answer: 'To end SWAPO bases and gain a buffer',
    explanation: 'South Africa feared SWAPO and the ANC and wanted a friendly or weak government in Angola.',
  },
  {
    prompt: 'What was the regional impact of the war in Angola?',
    options: ['A long period of peace in Namibia', 'Raids and regional instability', 'The end of apartheid in 1975', 'The union of Angola and Namibia'],
    answer: 'Raids and regional instability',
    explanation: 'The war spilled over borders: South Africa raided Angola, SWAPO and the ANC kept bases there, and the region suffered.',
  },
  {
    prompt: 'The battles of Cuito Cuanavale took place in which years?',
    options: ['1974 to 1975', '1987 to 1988', '1990 to 1991', '1980 to 1981'],
    answer: '1987 to 1988',
    explanation: 'The siege of Cuito Cuanavale was fought mainly between 1987 and 1988.',
  },
  {
    prompt: 'Why do South African and Cuban accounts of Cuito Cuanavale differ?',
    options: ['The battle did not really happen', 'Each stresses its own success', 'One side wrote down an account', 'The accounts match on the facts'],
    answer: 'Each stresses its own success',
    explanation: 'Both sides had reasons to claim success, so a historian compares them and looks for what both agree on.',
  },
  {
    prompt: 'Which statement about the outcome of Cuito Cuanavale do historians generally accept?',
    options: ['South Africa lost its whole army', 'It raised the cost of the war', 'The USSR invaded South Africa', 'Cuba took control of Namibia'],
    answer: 'It raised the cost of the war',
    explanation: 'Historians accept that the battles raised the cost of the war and led to negotiations, although the battlefield result is debated.',
  },
  {
    prompt: 'What did the New York Accords of December 1988 link together?',
    options: ['The independence of Angola and Mozambique', 'The end of apartheid and the end of war', 'The creation of the Warsaw Pact', 'Two withdrawals: Cuban and South African'],
    answer: 'Two withdrawals: Cuban and South African',
    explanation: 'The accords linked two withdrawals: Cuban troops from Angola and South African forces from Namibia, which set Namibia on the path to independence in 1990.',
  },
  {
    prompt: 'Why was the end of the Cold War important for Angola?',
    options: ['The war immediately ended with peace', 'The MPLA lost all its supporters', 'South Africa took control of Angola', 'Outside backing was removed'],
    answer: 'Outside backing was removed',
    explanation: 'With less superpower competition, outside support fell and settlements followed, although the war itself continued until 2002.',
  },
  {
    prompt: 'A South African account says the offensive was "halted at heavy cost to the attackers". What must a historian note about this source?',
    options: ['It is accurate because it is a military record', 'It was written by a side wanting credit', 'It comes from a neutral observer', 'It gives the Angolan view of events'],
    answer: 'It was written by a side wanting credit',
    explanation: 'The source comes from one of the parties, so it may stress facts that favour that side. Compare it with other accounts.',
  },
  {
    prompt: 'A Cuban account says the invaders "were forced to the negotiating table". Which question would help a historian judge it?',
    options: ['How many pages does it have?', 'Who wrote it, and why?', 'In what colour was it printed?', 'Was it written in Spanish?'],
    answer: 'Who wrote it, and why?',
    explanation: 'Provenance and purpose are the first questions to ask of any source.',
  },
  {
    prompt: 'In which year did the Angolan civil war finally end, after Savimbi was killed?',
    options: ['1975', '1988', '1991', '2002'],
    answer: '2002',
    explanation: 'Jonas Savimbi was killed in February 2002 and a peace agreement followed in April 2002. The Bicesse Accords of 1991 had failed.',
  },
];
