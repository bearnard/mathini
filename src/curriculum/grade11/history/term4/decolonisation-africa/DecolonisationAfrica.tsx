import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/his/term4/decolonisation-africa/diagram.webp", alt: "Decolonisation in Africa" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1941", "title": "Atlantic Charter raises hopes", "description": "The Atlantic Charter spoke of self-determination and freedom. Many African nationalists used its language to challenge colonial rule."},
            {"date": "1945", "title": "War weakens empires", "description": "World War II left Britain and France exhausted and less able to maintain empire. Post-war conditions made decolonisation more likely."},
            {"date": "1952", "title": "Mau Mau revolt begins", "description": "Armed resistance in Kenya grew from land loss, settler domination, and repression. The uprising exposed how bitter decolonisation could become."},
            {"date": "1 Nov 1954", "title": "Algerian war erupts", "description": "The FLN launched attacks against French rule, beginning the Algerian War of Independence. The conflict became one of the most violent anti-colonial wars in Africa."},
            {"date": "6 Mar 1957", "title": "Ghana becomes independent", "description": "The Gold Coast became Ghana under Kwame Nkrumah. It was the first sub-Saharan African colony to gain independence in the post-war era."},
            {"date": "1960", "title": "Year of Africa", "description": "Seventeen African countries gained independence in a single year. The pace of change showed that European empire was collapsing rapidly."},
            {"date": "5 Jul 1962", "title": "Algeria wins independence", "description": "After a brutal eight-year war, Algeria became independent from France. The victory highlighted both the success and the heavy cost of decolonisation."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Conditions for decolonisation after 1945',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After World War II, several conditions made decolonisation more likely. European powers were weakened, anti-colonial nationalism had grown, and the world was talking about freedom and self-determination.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Weakened Europe</strong>
            <p className="text-slate-600">Britain and France were financially and politically exhausted after the war.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Atlantic Charter</strong>
            <p className="text-slate-600">It raised hopes that peoples would have the right to choose their own governments.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cold War</strong>
            <p className="text-slate-600">The USA and USSR both opposed old-style empire for their own strategic reasons.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ghana and Kwame Nkrumah',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Gold Coast became <strong>Ghana</strong> in <strong>1957</strong>, making it the first sub-Saharan African colony to gain independence in the post-war period. Under <strong>Kwame Nkrumah</strong> and the Convention People's Party, Ghana became a powerful symbol of African self-government.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-green-700">Why Ghana mattered:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>It proved colonial rule was not permanent.</li>
            <li>It inspired nationalists across Africa.</li>
            <li>Nkrumah linked Ghanaian independence to wider African liberation.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Kenya and Algeria — decolonisation by conflict',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Decolonisation did not happen in the same way everywhere. In <strong>Kenya</strong>, the <strong>Mau Mau uprising</strong> challenged British rule and settler power. In <strong>Algeria</strong>, the war of independence against France (1954–1962) was long, violent, and deeply divisive.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Kenya</strong>
            <p className="text-slate-600">Land loss, settler dominance, and repression helped drive the Mau Mau revolt.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Algeria</strong>
            <p className="text-slate-600">The FLN fought French rule in a brutal war involving guerrilla tactics, torture, and civilian suffering.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The Year of Africa and the legacy of colonialism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In <strong>1960</strong>, seventeen African countries became independent, earning the title <strong>"Year of Africa"</strong>. Yet independence did not erase colonial damage. New states faced borders drawn by empires, uneven development, and dependence on export economies.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-slate-700 mb-2">Legacy questions historians ask:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Did independence bring political freedom without economic freedom?</li>
            <li>How did colonial borders affect unity and conflict?</li>
            <li>Why did some countries struggle with development after independence?</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why did decolonisation accelerate after World War II?',
    options: [
      'European powers were weakened and anti-colonial nationalism had grown stronger',
      'Colonial subjects stopped demanding independence',
      'The war made empire more profitable and stable',
      'Only one African colony wanted self-rule',
    ],
    answer: 'European powers were weakened and anti-colonial nationalism had grown stronger',
    explanation: 'Post-war conditions made it far harder for imperial states to maintain colonial control.',
  },
  {
    prompt: 'How did the Atlantic Charter influence decolonisation?',
    options: [
      'It encouraged hopes of self-determination and freedom from colonial rule',
      'It ordered African states to remain colonies forever',
      'It created apartheid in southern Africa',
      'It ended the Cold War immediately',
    ],
    answer: 'It encouraged hopes of self-determination and freedom from colonial rule',
    explanation: 'Although not written for colonies directly, many nationalists used its language to press their claims.',
  },
  {
    prompt: 'Why did the Cold War matter to decolonisation?',
    options: [
      'The superpowers competed for influence and often opposed traditional empire',
      'It prevented all nationalist activity in Africa',
      'It forced African colonies to unite under one government',
      'It gave France and Britain unlimited power in Africa',
    ],
    answer: 'The superpowers competed for influence and often opposed traditional empire',
    explanation: 'Cold War politics created new pressures and opportunities for independence movements.',
  },
  {
    prompt: 'Which country became independent under Kwame Nkrumah in 1957?',
    options: ['Ghana', 'Algeria', 'Kenya', 'Angola'],
    answer: 'Ghana',
    explanation: 'Ghana was the first sub-Saharan African colony to gain independence in the post-war era.',
  },
  {
    prompt: 'Why was Ghana\'s independence historically important?',
    options: [
      'It inspired other African nationalist movements and showed colonial rule could be defeated',
      'It ended colonial rule across the continent immediately',
      'It created the Mau Mau uprising',
      'It was the first independence movement led by Europe',
    ],
    answer: 'It inspired other African nationalist movements and showed colonial rule could be defeated',
    explanation: 'Ghana became a symbol of possibility for anti-colonial movements elsewhere in Africa.',
  },
  {
    prompt: 'What was the Mau Mau uprising?',
    options: [
      'An anti-colonial revolt in Kenya against British rule and settler domination',
      'A peace conference held in Algeria',
      'A Pan-African congress in Ghana',
      'A French plan for gradual reform in West Africa',
    ],
    answer: 'An anti-colonial revolt in Kenya against British rule and settler domination',
    explanation: 'The Mau Mau revolt grew from land loss, repression, and resentment of colonial inequality.',
  },
  {
    prompt: 'What best describes the Algerian War of Independence?',
    options: [
      'A violent anti-colonial war against French rule from 1954 to 1962',
      'A peaceful negotiation with no conflict',
      'A campaign led by Britain in East Africa',
      'A civil war unrelated to colonialism',
    ],
    answer: 'A violent anti-colonial war against French rule from 1954 to 1962',
    explanation: 'The Algerian struggle showed that decolonisation could be extremely violent and prolonged.',
  },
  {
    prompt: 'Why is 1960 called the "Year of Africa"?',
    options: [
      'Seventeen African countries gained independence that year',
      'It was the first year any African colony became independent',
      'All colonial borders disappeared in 1960',
      'It marked the end of nationalism in Africa',
    ],
    answer: 'Seventeen African countries gained independence that year',
    explanation: 'The dramatic number of new states in 1960 showed how quickly empire was collapsing.',
  },
  {
    prompt: 'What is one major legacy of colonialism after independence?',
    options: [
      'New states inherited artificial borders and uneven patterns of development',
      'Colonial rule left no lasting economic effects',
      'All post-colonial states immediately became wealthy and stable',
      'Independence removed all conflict linked to identity',
    ],
    answer: 'New states inherited artificial borders and uneven patterns of development',
    explanation: 'Colonial structures often continued to shape politics, economics, and conflict after independence.',
  },
];

const DecolonisationAfrica = () => (
  <CapsSubjectTopic
    title="Decolonisation in Africa"
    subtitle="Why empire weakened, how independence was won, and the lasting legacy of colonial rule"
    learnSteps={learnSteps}
    task="gr11-decolonisation-africa-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default DecolonisationAfrica;
