import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PACIFIC as P, dateText } from '../../_shared/facts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Japan expands in Asia',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: `${P.manchuria.year}`, title: 'Japan takes Manchuria', description: 'The Japanese army occupies this region of China.' },
            { date: `${P.chinaWar.month} ${P.chinaWar.year}`, title: 'War against China', description: 'Japan begins a full-scale war against China, years before the war in Europe.' },
            { date: `${P.nanjing.month} ${P.nanjing.year}`, title: 'Nanjing', description: 'Japanese troops capture the Chinese city of Nanjing; many civilians are killed.' },
            { date: dateText(P.pearlHarbor), title: 'Pearl Harbor', description: 'Japan attacks the American naval base in Hawaii.' },
            { date: dateText(P.eo9066), title: 'Executive Order 9066', description: 'People of Japanese descent on the American West Coast are ordered into camps.' },
            { date: `${P.capture.year}`, title: 'Allied soldiers captured', description: 'Thousands of Allied soldiers become prisoners of war of Japan.' },
          ]}
        />
        <Rule>The war in the Pacific began in Asia, with Japanese expansion. Japan wanted territory and raw materials, such as oil, and invaded China from {P.manchuria.year}.</Rule>
        <Mistake>Thinking that the Pacific war started at Pearl Harbor. Japan had been at war in China for years before the United States was attacked.</Mistake>
      </div>
    ),
  },
  {
    title: 'Japanese atrocities in China',
    content: (
      <div className="space-y-4">
        <Rule>Japanese forces treated the civilians of the lands they occupied very harshly. The capture of Nanjing in {P.nanjing.month} {P.nanjing.year} is a well-known example: very large numbers of civilians were killed, and many people were abused.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>These acts were crimes against civilians, who were not fighting.</li>
          <li>The suffering in China is a large part of the story of the war in Asia, and it is still remembered in China and in Japan.</li>
          <li>Historians use survivors&rsquo; accounts, documents and photographs to describe these events, and they still discuss some details.</li>
        </ul>
        <Mistake>Leaving China out of the story of World War II. The war in Asia caused great suffering long before the attack on Pearl Harbor.</Mistake>
      </div>
    ),
  },
  {
    title: 'Pearl Harbor',
    content: (
      <div className="space-y-4">
        <Rule>On {dateText(P.pearlHarbor)} Japanese aircraft attacked the American naval base at Pearl Harbor in Hawaii. The United States declared war on Japan the next day, {dateText(P.usDeclares)}.</Rule>
        <Worked
          title="Why did Japan attack?"
          steps={[
            <>Japan wanted to take the territories of South-East Asia, which had oil and other raw materials.</>,
            <>The American Pacific fleet could have stopped this. The attack aimed to damage the fleet first.</>,
            <>The attack did not defeat the United States. It brought a very strong country into the war on the side of the Allies.</>,
          ]}
        />
        <Mistake>Saying that the attack was a surprise to everyone. The two countries had been in dispute for some time, but the attack itself came without a declaration of war.</Mistake>
      </div>
    ),
  },
  {
    title: 'Japanese Americans and the camps',
    content: (
      <div className="space-y-4">
        <Rule>After Pearl Harbor, fear and prejudice led the American government to order people of Japanese descent on the West Coast into camps. Executive Order 9066 was signed on {dateText(P.eo9066)}. More than {P.internedMoreThan.toLocaleString('en-ZA')} people were held, and about two thirds of them were American citizens.</Rule>
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of a notice posted in 1942.">
          <p>&ldquo;All persons of Japanese descent living in this area must report on Saturday, with only what they can carry.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Two points of view"
          steps={[
            <>The government said that the camps protected the country from spies and sabotage.</>,
            <>The families said that they were loyal. They lost their homes, farms and businesses, and no one had been proved guilty of anything.</>,
            <>In {P.apology.year} the United States government apologised and paid compensation to the survivors.</>,
          ]}
        />
        <Mistake>Saying that the camps held enemy soldiers. They held families, most of whom were American citizens.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>When was Pearl Harbor attacked, and by whom?</>,
          <>Why were Japanese Americans moved into camps, and what did the survivors receive in {P.apology.year}?</>,
          <>Name one reason why Source A is useful to a historian, and one limit.</>,
          <>Where were Allied soldiers held after they were captured by Japan?</>,
        ]}
        answers={[
          <>On {dateText(P.pearlHarbor)}, by Japan.</>,
          <>Out of fear and prejudice after the attack; an apology and compensation.</>,
          <>It shows what the authorities ordered at the time; it does not show how the families felt.</>,
          <>In prisoner-of-war camps, where they were treated harshly and made to work.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'When did Japan begin its full-scale war against China?',
    options: ['In July 1937', 'In December 1941', 'In September 1939', 'In May 1945'],
    answer: 'In July 1937',
    explanation: 'Japan began full-scale war against China in 1937, years before Pearl Harbor.',
  },
  {
    prompt: 'Why did Japan want to expand in Asia?',
    options: ["To gain land and raw materials", "To spread its language abroad", "To stop the Nazi Party growing", "To host a world sports event"],
    answer: "To gain land and raw materials",
    explanation: 'Japan had few raw materials of its own and wanted the resources of China and South-East Asia.',
  },
  {
    prompt: 'What happened in Nanjing in December 1937?',
    options: ["Japan took the city, killing civilians", "The Allies landed a large army there", "Japan and China made a peace treaty today", "The United States bombed the city twice"],
    answer: "Japan took the city, killing civilians",
    explanation: 'Nanjing is a well-known example of Japanese atrocities against civilians in China.',
  },
  {
    prompt: 'On what date did Japan attack Pearl Harbor?',
    options: ['1 September 1939', '7 December 1941', '8 May 1945', '6 June 1944'],
    answer: '7 December 1941',
    explanation: 'The attack on the American base in Hawaii took place on 7 December 1941.',
  },
  {
    prompt: 'What did the United States do the day after Pearl Harbor was attacked?',
    options: ['It made peace with Japan', 'It sent soldiers to Germany', 'It left the Pacific', 'It declared war on Japan'],
    answer: 'It declared war on Japan',
    explanation: 'The United States declared war on Japan on 8 December 1941 and entered the war.',
  },
  {
    prompt: 'What was one aim of the attack on Pearl Harbor?',
    options: ["To start a war on Germany", "To take the city of Washington", "To damage the Pacific fleet", "To end the war in China"],
    answer: "To damage the Pacific fleet",
    explanation: 'Japan wanted to stop the American fleet from interfering as it took territory in South-East Asia.',
  },
  {
    prompt: 'What was the result of the attack for the United States?',
    options: ["It stayed out of the war until 1945 at least", "It joined the war on the Allied side", "It joined the Axis side in the war", "It asked Japan to make peace now"],
    answer: "It joined the war on the Allied side",
    explanation: 'The attack did not defeat the United States. It brought a strong country into the war against Japan.',
  },
  {
    prompt: 'What was Executive Order 9066 of 19 February 1942?',
    options: ["An order that sent Japanese Americans to camps", "A declaration of war against Japan itself now", "A treaty that ended the war in the Pacific then", "A law that gave Japanese Americans the vote there"],
    answer: "An order that sent Japanese Americans to camps",
    explanation: 'The order allowed the removal of people of Japanese descent from the West Coast.',
  },
  {
    prompt: 'About how many of the people held in the camps were American citizens?',
    options: ["About one in ten", "About one in twenty", "About two thirds", "About one in fifty"],
    answer: "About two thirds",
    explanation: 'Most of the more than 100 000 people held were born in the United States and were citizens.',
  },
  {
    prompt: 'What reason did the government give for the camps?',
    options: ["To train the families as new soldiers", "To give the families free housing", "To keep the families from the war", "To guard against spies and sabotage"],
    answer: "To guard against spies and sabotage",
    explanation: 'The government said it feared spying. The families said they were loyal, and no proof was found.',
  },
  {
    prompt: 'What did the United States government do in 1988?',
    options: ["It closed the last of the camps there", "It apologised and paid compensation", "It signed the order for the camps", "It declared war on Japan then"],
    answer: "It apologised and paid compensation",
    explanation: 'In 1988 the government admitted the injustice and paid the survivors.',
  },
  {
    prompt: 'A notice of 1942 tells people of Japanese descent to report with only what they can carry. What does it show a historian?',
    options: ["How the families felt about it", "How many people obeyed it", "What the authorities ordered", "What the families said later"],
    answer: "What the authorities ordered",
    explanation: 'The notice comes from the authorities, so it shows the order but not the feelings of the families.',
  },
  {
    prompt: 'How were Allied prisoners of war treated in Japanese camps?',
    options: ['Well, with plenty of food', 'Very harshly, with forced labour', 'As guests who could leave', 'As soldiers who were soon sent home'],
    answer: 'Very harshly, with forced labour',
    explanation: 'Many prisoners were made to work and suffered hunger and disease, and many died.',
  },
  {
    prompt: 'Why is it wrong to say that the Pacific war started at Pearl Harbor?',
    options: ["The war in Europe began after it", "Japan had fought in China for years", "Japan only began fighting in 1945", "The United States had been at war since 1931"],
    answer: "Japan had fought in China for years",
    explanation: 'The war in Asia began with the invasion of Manchuria in 1931 and the war in China in 1937.',
  },
];
