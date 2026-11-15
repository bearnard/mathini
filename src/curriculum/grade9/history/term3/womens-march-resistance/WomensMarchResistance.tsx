import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "17 Apr 1954", "title": "FEDSAW is formed", "description": "The Federation of South African Women united women across racial lines against apartheid. It helped organize campaigns around passes, rights, and daily hardship."},
            {"date": "1954", "title": "Women's Charter adopted", "description": "FEDSAW adopted the Women's Charter, which linked women's equality to the wider freedom struggle. It became an important statement of demands and principles."},
            {"date": "9 Aug 1956", "title": "Women march on Pretoria", "description": "About 20,000 women marched to the Union Buildings to protest pass laws for Black women. The march showed remarkable courage and multiracial solidarity."},
            {"date": "9 Aug 1956", "title": "Pass law petitions delivered", "description": "The protesters stood in disciplined silence and delivered petitions to the government. Their message rejected passes and the humiliation they imposed on women."},
            {"date": "1960", "title": "Resistance faces repression", "description": "After Sharpeville, the apartheid state banned major liberation movements and intensified crackdowns. Many activists, including women, continued organizing under severe danger."},
            {"date": "1961", "title": "Struggle goes underground", "description": "As open protest became harder, resistance moved underground and increasingly included armed struggle. Women remained vital as organizers, couriers, supporters, and community leaders."},
            {"date": "1995", "title": "National Women's Day recognized", "description": "Democratic South Africa officially commemorated 9 August as National Women's Day. The holiday honors the 1956 march and women's long role in resistance."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Women\'s March 1956',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On August 9, 1956, approximately 20,000 women—Black, Coloured, Indian, and white—marched on the Union 
          Buildings to protest new pass laws that would force Black women to carry passes. This <strong>Women's March</strong> 
          became one of the most powerful anti-apartheid demonstrations. August 9 is now celebrated as National Women's Day in South Africa.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>March:</strong> August 9, 1956; 20,000 women; Multi-racial solidarity
        </div>
      </div>
    ),
  },
  {
    title: 'Women\'s leadership in resistance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Women were central to anti-apartheid resistance, though often overlooked in history. Leaders like 
          <strong>Winnie Madikizela-Mandela</strong>, <strong>Nosiwe Mkhize</strong>, and countless others 
          organized, protested, and endured suffering. Women also bore the burden of apartheid in family and 
          economic life, making their resistance particularly courageous.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Women leaders:</strong> Organized protest; Endured violence; Kept families together
        </div>
      </div>
    ),
  },
  {
    title: 'Sustained resistance to the 1960s',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The 1950s saw massive campaigns, but apartheid intensified repression. By 1960, the ANC and PAC were banned 
          after the Sharpeville massacre. Resistance went underground and armed. Despite bans and brutal crackdowns, 
          the anti-apartheid movement never ceased, strengthening resolve for liberation.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Evolution:</strong> Mass protest → Underground → Armed struggle
        </div>
      </div>
    ),
  },
  {
    title: 'Oral history and memory',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stories from those who lived through apartheid—activists, victims, and survivors—are crucial sources. 
          Oral history captures experiences that official records miss. Listening to and recording these testimonies 
          honors those who suffered and ensures we learn from their courage and sacrifice.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Memory:</strong> Oral testimony; Personal stories; Historical truth
        </div>
      <div className="space-y-2">
  <p className="text-slate-600">{"Women such as Lilian Ngoyi, Helen Joseph, Albertina Sisulu and Winnie Mandela helped to organise marches, strikes and campaigns and kept the resistance going even when many male leaders were jailed."}</p>
</div>
</div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'When was the Women\'s March held in South Africa?', options: ['August 9, 1956', 'June 1956', 'December 1956', 'March 1957'], answer: 'August 9, 1956', explanation: 'The Women\'s March on August 9, 1956, is now celebrated annually as South Africa\'s National Women\'s Day.' },
  { prompt: 'How many women marched on the Union Buildings in 1956?', options: ['Approximately 20,000', 'About 5,000', 'About 50,000', 'About 1,000'], answer: 'Approximately 20,000', explanation: 'Over 20,000 women of all races marched in one of history\'s greatest anti-apartheid demonstrations.' },
  { prompt: 'What was the Women\'s March protesting?', options: ['New pass laws that would force Black women to carry passes', 'The price of food and basic goods in towns', 'The closing of schools in the black townships', 'Policies on the language used in schools'], answer: 'New pass laws that would force Black women to carry passes', explanation: 'The march protested the extension of pass laws to women, further restricting their freedom.' },
  { prompt: 'Who were some women leaders in the anti-apartheid movement?', options: ['Lilian Ngoyi, Helen Joseph, Albertina Sisulu and Winnie Mandela', 'Only men, as women took no part in the struggle', 'Women from other countries who lived abroad', 'No women led, since men held all the posts'], answer: 'Lilian Ngoyi, Helen Joseph, Albertina Sisulu and Winnie Mandela', explanation: 'Women held crucial leadership roles in organizing and sustaining anti-apartheid resistance.' },
  { prompt: 'Why is the Women\'s March significant?', options: ['It showed unity across races and the courage of women against injustice', 'It was a small gathering that few people noticed', 'It won immediate change when the pass law was dropped', 'It affected women and had no wider effect'], answer: 'It showed unity across races and the courage of women against injustice', explanation: 'The march united women across racial lines and inspired continued resistance.' },
  { prompt: 'What happened to the anti-apartheid movement after major campaigns in the 1950s?', options: ['It was forced underground and later turned to armed struggle', 'It ended once the leaders had been put in jail', 'It became legal after the campaigns of the 1950s', 'It carried on growing without any change at all'], answer: 'It was forced underground and later turned to armed struggle', explanation: 'After the Sharpeville massacre in 1960, the ANC and PAC were banned, forcing a shift in strategy.' },
  { prompt: 'What is oral history?', options: ['Stories and testimony from people who lived through events', 'Written records that are kept in an archive', 'Government documents that are kept by the state', 'Articles that were printed in newspapers'], answer: 'Stories and testimony from people who lived through events', explanation: 'Oral history captures first-hand accounts of experiences and preserves personal truth.' },
  { prompt: 'Why is remembering women\'s anti-apartheid activism important?', options: ["Women's key roles were overlooked; honouring them completes the history", 'Women did little, so their story adds no value', 'Only men took part in the resistance movement', 'It is of no importance to the story of the struggle'], answer: "Women's key roles were overlooked; honouring them completes the history", explanation: 'Including women\'s stories creates a fuller, more accurate picture of the anti-apartheid struggle.' },
];

const WomensMarchResistance = () => (
  <HisTopic
    title="Women's March and Resistance"
    subtitle="Multi-racial solidarity, women's leadership, and continuing struggle"
    learnSteps={learnSteps}
    task="gr9-womens-march-resistance-t3"
    bank={bank}
  />
);

export default WomensMarchResistance;
