import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { RACE as R } from '../../_shared/facts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is racism?',
    content: (
      <div className="space-y-4">
        <Rule>Racism is the belief that people can be divided into groups called &ldquo;races&rdquo; because of their appearance, and that some of these groups are better than others. It is also the unfair treatment of people because of this belief.</Rule>
        <Worked
          title="Three words"
          steps={[
            <><strong>Prejudice:</strong> an opinion about people that is formed without knowing them.</>,
            <><strong>Discrimination:</strong> treating people unfairly because of the group they are put in.</>,
            <><strong>Racism:</strong> prejudice and discrimination based on the idea of &ldquo;race&rdquo;. When laws support it, as in apartheid, it becomes a system.</>,
          ]}
        />
        <Mistake>Thinking that racism is only about insults. It can be built into laws and rules, so that a whole group is denied rights and opportunities.</Mistake>
      </div>
    ),
  },
  {
    title: 'Human evolution and our common ancestry',
    content: (
      <div className="space-y-4">
        <Rule>The study of human evolution shows that all people share a common ancestry. We are all Africans in the sense that we descended from ancestors who lived in Africa. The CAPS says this was as recently as {R.ancestorsYears.toLocaleString('en-ZA')} years ago; scientists find that the first modern humans lived even earlier.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>People spread from Africa to every continent over a very long time.</li>
          <li>Differences such as skin colour are superficial. They developed as people adapted to different amounts of sunlight in the places where they lived.</li>
          <li>Because of the common ancestry, people from different parts of the world are much more alike than different.</li>
        </ul>
        <Mistake>Thinking that people who look different must be very different inside. The differences of appearance are small compared with what all people share.</Mistake>
      </div>
    ),
  },
  {
    title: 'The myth of "race"',
    content: (
      <div className="space-y-4">
        <Rule>Scientists say that &ldquo;race&rdquo; is a cultural or social construct, not a biological one. Humans cannot be divided into biological races. This is why we speak of the myth of &ldquo;race&rdquo;.</Rule>
        <Worked
          title="Why the idea fails"
          steps={[
            <>The features used to sort people, such as skin colour or hair, are few and superficial, and they change gradually from place to place.</>,
            <>People in one group often differ from each other more than they differ from people in another group.</>,
            <>Societies, not nature, decided where to draw the lines, and different societies drew them in different places.</>,
          ]}
        />
        <Mistake>Saying that &ldquo;race&rdquo; does not matter because it is a myth. The idea is not real in biology, but racism has had very real effects on people&rsquo;s lives.</Mistake>
      </div>
    ),
  },
  {
    title: 'Apartheid and the myth of "race"',
    content: (
      <div className="space-y-4">
        <Rule>Apartheid was built on the myth of &ldquo;race&rdquo;. The Population Registration Act of {R.registrationAct.year} classified every South African into a &ldquo;population group&rdquo;, and a person&rsquo;s group decided where they could live, work and study.</Rule>
        <SourceBox label="Source C" provenance="An original description written for this lesson, in the style of a family memory.">
          <p>&ldquo;My brother and I are the children of the same parents, yet the officials put us in different groups. That meant that we went to different schools and could not live in the same street.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge the source"
          steps={[
            <>It shows how classification could divide a family, from one person&rsquo;s point of view.</>,
            <>It is one memory. It does not show how many families this happened to.</>,
            <>The officials used appearance and descent, and sometimes unreliable tests. This shows that the groups were arbitrary.</>,
          ]}
        />
        <Mistake>Thinking that the groups existed in nature and the law only recorded them. The law created the categories and forced people into them.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is racism?</>,
          <>What do we learn about all people from human evolution?</>,
          <>Why do scientists call &ldquo;race&rdquo; a social construct?</>,
          <>How did the Act of {R.registrationAct.year} treat the people of South Africa?</>,
        ]}
        answers={[
          <>The belief that people can be divided into superior and inferior groups by appearance, and the unfair treatment that follows.</>,
          <>That all people share a common ancestry in Africa.</>,
          <>Because the groups were made by societies, not by biology.</>,
          <>It classified every South African into a &ldquo;population group&rdquo;.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which definition best describes racism?',
    options: ["A dislike of a local sports team", "Unfair treatment based on race", "A rule that gives groups equal rights", "An opinion formed after knowing people"],
    answer: "Unfair treatment based on race",
    explanation: 'Racism combines prejudice and discrimination with the idea that some "races" are better than others.',
  },
  {
    prompt: 'What is prejudice?',
    options: ["A law that treats people unequally", "An opinion formed without knowing people", "A fact that was proved by scientists", "A fair judgement made after careful study"],
    answer: "An opinion formed without knowing people",
    explanation: 'Prejudice is a judgement made before knowing the facts. Discrimination is acting on it.',
  },
  {
    prompt: 'What is discrimination?',
    options: ["Equal treatment for people of each group", "The study of the history of a region", "An opinion held without acting upon it", "Unfair treatment because of the group"],
    answer: "Unfair treatment because of the group",
    explanation: 'Discrimination is unfair treatment because of the group that a person is placed in.',
  },
  {
    prompt: 'What does the study of human evolution show?',
    options: ['People of different groups have different ancestors', 'All people share a common ancestry in Africa', 'People came from Europe to the rest of the world', 'Each continent had its own first people'],
    answer: 'All people share a common ancestry in Africa',
    explanation: 'The study of human evolution shows that all people descended from ancestors who lived in Africa.',
  },
  {
    prompt: 'In what sense are we all "Africans", according to the CAPS?',
    options: ["We live on the African continent today", "We speak an African language at home", "We descended from ancestors in Africa", "We belong to one political party now"],
    answer: "We descended from ancestors in Africa",
    explanation: 'The common ancestors of all modern humans lived in Africa.',
  },
  {
    prompt: 'Why do people look different in different parts of the world?',
    options: ["Their ancestors were different species", "Features adapted to sunlight and climate", "Their governments chose how they look", "They belong to biological races of people"],
    answer: "Features adapted to sunlight and climate",
    explanation: 'Features such as skin colour developed as people adapted to the amount of sunlight where they lived.',
  },
  {
    prompt: 'What do scientists say about "race"?',
    options: ["It is a clear biological division of people", "It is the same thing as a language group", "It is a social idea, not a biological fact", "It was found by the study of old fossils"],
    answer: "It is a social idea, not a biological fact",
    explanation: 'Scientists say that humans cannot be divided into biological races. "Race" is an idea made by societies.',
  },
  {
    prompt: 'Why is "race" called a myth?',
    options: ["It has not been used to treat people badly", "It was not part of the laws of any state", "Humans cannot be split into biological races", "It describes the people of a single continent"],
    answer: "Humans cannot be split into biological races",
    explanation: 'The groups called races are not real divisions of nature, although racism has had real effects.',
  },
  {
    prompt: 'Which statement about the features used to sort people is correct?',
    options: ['They show deep differences between groups', 'They are the same in every society', 'They are few and superficial', 'They decide how clever a person is'],
    answer: 'They are few and superficial',
    explanation: 'Features such as skin colour or hair are only a small part of what people are like, and they change gradually.',
  },
  {
    prompt: 'What did the Population Registration Act of 1950 do?',
    options: ["It gave the vote to adults in the country", "It ended the pass laws for the workers", "It sorted South Africans into groups", "It opened the schools to children of the country"],
    answer: "It sorted South Africans into groups",
    explanation: 'The classification decided where a person could live, work and study under apartheid.',
  },
  {
    prompt: 'On what did apartheid officials base the classification of people?',
    options: ["A scientific test of the blood of a person", "Appearance and descent, both arbitrary", "The wishes of the person and their family", "The language the person spoke at their work place"],
    answer: "Appearance and descent, both arbitrary",
    explanation: 'Officials used appearance and descent, and sometimes unreliable tests. This shows that the groups were not natural.',
  },
  {
    prompt: 'Source C describes two children of the same parents who were put in different groups. What does it show a historian?',
    options: ['How many families were divided in this way', 'What the government wrote in its own reports', 'How classification could divide one family', 'Why the law was passed in the year 1950'],
    answer: 'How classification could divide one family',
    explanation: 'It is one memory. It shows the effect on a family but not how many families were affected.',
  },
  {
    prompt: 'Why is it wrong to say that "race" does not matter because it is a myth?',
    options: ["The groups are real divisions of nature", "The idea has not been used in laws", "It mattered in the past in Europe", "Racism has had real effects on lives"],
    answer: "Racism has had real effects on lives",
    explanation: 'The idea of "race" is not real in biology, but the laws and the treatment based on it had very real effects.',
  },
  {
    prompt: 'Which statement is a correct conclusion from the lesson?',
    options: ["Apartheid recorded groups that exist in nature", "Apartheid made categories and forced people in", "Apartheid rested on the science of race", "Apartheid made people equal before the law"],
    answer: "Apartheid made categories and forced people in",
    explanation: 'The law created the groups, using the myth of "race", and then used them to decide people\'s rights.',
  },
];
