import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { WOMEN_AND_PEACE as W, dateText } from '../../_shared/civilSocietyFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: `${W.fedsaw.month} ${W.fedsaw.year}`, title: 'FEDSAW is founded', description: 'The Federation of South African Women adopts a Women’s Charter and joins the struggle against pass laws.' },
            { date: `${W.blackSash.year}`, title: 'The Black Sash is founded', description: 'White women begin silent protests against apartheid laws.' },
            { date: dateText(W.womensMarch), title: 'The women’s march to Pretoria', description: `About ${W.womensMarch.women.toLocaleString('en-ZA')} women march to the Union Buildings against passes for women.` },
            { date: `${W.cnd.year}`, title: 'The Campaign for Nuclear Disarmament', description: 'A British movement against nuclear weapons begins.' },
            { date: `${W.feminineMystique.year}`, title: 'The Feminine Mystique', description: 'Betty Friedan’s book questions the idea that a woman’s place is only in the home.' },
            { date: `${W.now.year}`, title: 'The National Organization for Women', description: 'American women found a group to press for equal rights.' },
            { date: dateText(W.moratorium), title: 'The Moratorium', description: 'Millions of Americans take part in protests against the war in Vietnam.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Women\u2019s liberation in the West',
    content: (
      <div className="space-y-4">
        <Rule>The second wave of feminism, from the 1960s, asked for more than the vote. It challenged ideas about women&rsquo;s place at home and at work.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Betty Friedan&rsquo;s <em>The Feminine Mystique</em> ({W.feminineMystique.year}) described the dissatisfaction of many housewives.</li>
          <li>The National Organization for Women ({W.now.year}) pressed for equal pay and equal opportunity.</li>
          <li>Women&rsquo;s groups also discussed family life, health and control over their own bodies.</li>
        </ul>
        <Mistake>The first wave won the vote for women. The second wave of the 1960s and 1970s asked for equality in the workplace, in law and in the family.</Mistake>
      </div>
    ),
  },
  {
    title: 'Women in South Africa, 1950s to 1970s',
    content: (
      <div className="space-y-4">
        <Rule>South African women protested against both apartheid and the unequal position of women. Their struggle was often about passes.</Rule>
        <Worked
          title="Three forms of action"
          steps={[
            <><strong>FEDSAW ({W.fedsaw.month} {W.fedsaw.year}):</strong> a federation of women&rsquo;s groups of all races. It wrote a Women&rsquo;s Charter and organised protests against passes for women.</>,
            <><strong>The march of {dateText(W.womensMarch)}:</strong> about {W.womensMarch.women.toLocaleString('en-ZA')} women of all races marched to the Union Buildings in Pretoria and handed in petitions. Leaders included Lilian Ngoyi and Helen Joseph. National Women&rsquo;s Day on 9 August remembers it.</>,
            <><strong>The Black Sash ({W.blackSash.year}):</strong> white women who protested in silence against apartheid laws and later ran advice offices for people hit by them.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">Many women also worked in trade unions and in the informal sector, where they faced low pay and little protection.</p>
      </div>
    ),
  },
  {
    title: 'Peace and anti-war movements',
    content: (
      <div className="space-y-4">
        <Rule>Peace movements argued that war, and especially nuclear weapons, were a danger to everyone. They used marches, petitions and public meetings.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The Campaign for Nuclear Disarmament ({W.cnd.year}) in Britain called for Britain to give up nuclear weapons and organised marches.</li>
          <li>In the United States, protest against the Vietnam War grew through the late 1960s, and on {dateText(W.moratorium)} the Moratorium brought protests in many cities.</li>
          <li>In May 1970 National Guard troops shot dead four students at Kent State University, and protests spread across the country.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">Protest helped to turn public opinion against the war, but historians disagree about how far it ended the war itself.</p>
      </div>
    ),
  },
  {
    title: 'Judging the movements and reading sources',
    content: (
      <div className="space-y-4">
        <Rule>When you judge a protest movement, ask what it wanted, what it achieved and who it left out.</Rule>
        <SourceBox label="Source C" provenance="An original description written for this lesson, in the style of a petition delivered to a government office in the 1950s.">
          <p>&ldquo;We women are made to carry a pass. We ask that no woman should be forced to carry one.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            <>It shows what the women asked for and how they stated the demand.</>,
            <>It does not tell us how many women signed or how the government responded.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What was the Women&rsquo;s Charter?</>,
          <>Why did about {W.womensMarch.women.toLocaleString('en-ZA')} women march to the Union Buildings in {W.womensMarch.year}?</>,
          <>What was the Black Sash?</>,
          <>Name one peace movement and one method it used.</>,
        ]}
        answers={[
          <>A statement of women&rsquo;s demands adopted by FEDSAW.</>,
          <>To object to passes for women.</>,
          <>A group of white women who protested silently against apartheid laws and ran advice offices.</>,
          <>The Campaign for Nuclear Disarmament, which used marches and petitions.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What did second-wave feminism ask for beyond the vote?',
    options: ['A return to traditional family roles', 'Equality at work, in law and at home', 'The end of all schooling for girls', 'A ban on women entering politics'],
    answer: 'Equality at work, in law and at home',
    explanation: 'The second wave of the 1960s and 1970s challenged women\'s place in the workplace, the law and the family.',
  },
  {
    prompt: 'Which book of 1963 questioned the idea that a woman\'s place is only at home?',
    options: ['The Women\'s Charter text', 'The Feminine Mystique', 'The Freedom Charter text', 'The Female Eunuch'],
    answer: 'The Feminine Mystique',
    explanation: 'Betty Friedan\'s book of 1963 described the dissatisfaction of many housewives and helped to start the second wave.',
  },
  {
    prompt: 'What was the National Organization for Women, founded in 1966?',
    options: ['An American group for equal rights', 'A British group against nuclear weapons', 'A South African group against passes', 'A group of white women in protest'],
    answer: 'An American group for equal rights',
    explanation: 'NOW was founded in 1966 to press for equal pay and equal opportunity for women in the United States.',
  },
  {
    prompt: 'What was FEDSAW, founded in April 1954?',
    options: ['A federation of women\'s groups', 'A union of mine workers in Johannesburg', 'A party of white women voters', 'A school board for township girls'],
    answer: 'A federation of women\'s groups',
    explanation: 'The Federation of South African Women brought together women of all races and adopted a Women\'s Charter.',
  },
  {
    prompt: 'Why did about 20 000 women march to the Union Buildings on 9 August 1956?',
    options: ['To demand a place in parliament', 'To mark the end of apartheid', 'To support a strike by miners', 'To object to passes for women'],
    answer: 'To object to passes for women',
    explanation: 'The women handed in petitions against extending the pass laws to women. National Women\'s Day remembers the march.',
  },
  {
    prompt: 'Which two leaders are linked to the women\'s march of 1956?',
    options: ['Lilian Ngoyi and Helen Joseph', 'Betty Friedan and Rosa Parks', 'Charlotte Maxeke and Olive Schreiner', 'Margaret Thatcher and Indira Gandhi'],
    answer: 'Lilian Ngoyi and Helen Joseph',
    explanation: 'Lilian Ngoyi and Helen Joseph were two of the leaders who delivered the petitions to the Prime Minister\'s office.',
  },
  {
    prompt: 'What was the Black Sash?',
    options: ['A group of Black women who led strikes', 'A part of the Women\'s Charter itself', 'A trade union of domestic workers', 'White women who protested in silence'],
    answer: 'White women who protested in silence',
    explanation: 'The Black Sash was founded in 1955 and later ran advice offices to help people affected by apartheid laws.',
  },
  {
    prompt: 'What did the Campaign for Nuclear Disarmament (1958) want?',
    options: ['Britain to build more nuclear weapons', 'Britain to give up nuclear weapons', 'Britain to leave the United Nations', 'Britain to join the Warsaw Pact'],
    answer: 'Britain to give up nuclear weapons',
    explanation: 'CND, founded in Britain in 1958, organised marches and petitions for nuclear disarmament.',
  },
  {
    prompt: 'What happened on 15 October 1969 in the United States?',
    options: ['The signing of the Civil Rights Act', 'The march on the Lincoln Memorial', 'The Montgomery bus boycott began', 'Moratorium protests against the war'],
    answer: 'Moratorium protests against the war',
    explanation: 'The Moratorium brought protests in cities and towns across the United States against the war in Vietnam.',
  },
  {
    prompt: 'What happened at Kent State University in May 1970?',
    options: ['Students sat at a lunch counter', 'The first women\'s march was held', 'Troops shot dead four protesters', 'Students burned the flag of Vietnam'],
    answer: 'Troops shot dead four protesters',
    explanation: 'National Guard troops killed four students during an anti-war protest, which led to protests across the country.',
  },
  {
    prompt: 'What is a fair judgement of the anti-war movement?',
    options: ['It ended the war on its own within a year', 'It shifted opinion; its effect is debated', 'It had no effect on public opinion at home', 'It won the support of the whole country'],
    answer: 'It shifted opinion; its effect is debated',
    explanation: 'Protest changed public opinion, but historians disagree about how far it ended the war.',
  },
  {
    prompt: 'A 1950s petition says "no woman should be forced to carry a pass". What does it show a historian?',
    options: ['What the women demanded, in their words', 'How many women signed the petition', 'How the government answered the petition', 'What men thought of the women\'s demand'],
    answer: 'What the women demanded, in their words',
    explanation: 'The petition shows the women\'s demand in their own words, but not how many signed or how the government replied.',
  },
];
