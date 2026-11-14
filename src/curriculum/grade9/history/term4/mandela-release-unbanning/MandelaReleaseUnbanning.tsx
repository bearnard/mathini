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
            {"date": "5 Aug 1962", "title": "Mandela is arrested", "description": "Nelson Mandela was arrested after working underground and traveling secretly. His detention marked the start of a long imprisonment that made him a global symbol."},
            {"date": "12 Jun 1964", "title": "Mandela gets life sentence", "description": "At the Rivonia Trial, Mandela and his comrades were sentenced to life imprisonment. He was sent to Robben Island, where he spent most of his prison years."},
            {"date": "1980s", "title": "Free Mandela campaign grows", "description": "International campaigns demanded Mandela's release and an end to apartheid. He became one of the world's best-known symbols of resistance."},
            {"date": "2 Feb 1990", "title": "ANC is unbanned", "description": "President F. W. de Klerk announced the unbanning of the ANC, SACP, and other organizations. The decision showed that apartheid was entering its final phase."},
            {"date": "11 Feb 1990", "title": "Mandela is released", "description": "After 27 years in prison, Mandela walked free from Victor Verster Prison. He called for reconciliation and continued struggle for a democratic South Africa."},
            {"date": "1990", "title": "Negotiations begin", "description": "Following the unbanning and Mandela's release, talks started between the government and liberation movements. Mandela's leadership helped keep the transition moving forward."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Mandela\'s imprisonment and global icon status',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Nelson Mandela</strong> was arrested in 1962 and imprisoned for 27 years (1962–1990) on 
          <strong>Robben Island</strong> and other prisons. Despite brutal conditions, he never renounced the struggle. 
          Internationally, Mandela became a symbol of anti-apartheid resistance. "Free Mandela" campaigns grew worldwide, 
          putting pressure on the apartheid state.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Icon:</strong> 27 years imprisoned; Symbol of resistance; Global campaigns
        </div>
      </div>
    ),
  },
  {
    title: 'Unbanning of the ANC and SACP',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On February 2, 1990, President <strong>F. W. de Klerk</strong> announced the unbanning of the ANC and other 
          organizations. This shocking reversal showed apartheid was ending. The ANC, banned for 30 years, could operate openly again. 
          De Klerk also announced that Mandela would be released.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Unbanning:</strong> February 2, 1990; ANC legalized; Radical policy shift
        </div>
      </div>
    ),
  },
  {
    title: 'Mandela\'s release and triumph',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On February 11, 1990, Nelson Mandela walked free after 27 years. His release was celebrated worldwide. 
          At 71, Mandela emerged unbowed, preaching reconciliation rather than revenge. His first action was to unite 
          the anti-apartheid movement. He became president of the ANC and led negotiations for a new South Africa.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Release:</strong> February 11, 1990; Age 71; Reconciliation message
        </div>
      </div>
    ),
  },
  {
    title: 'Beginning of negotiations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Mandela's release, the government began negotiations with the ANC and other organizations to 
          end apartheid. These talks were long and difficult, but both sides recognized that change was inevitable. 
          Mandela's leadership was crucial in keeping the process on track and maintaining hope for a democratic future.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Negotiations:</strong> Multi-party talks; Long process; Mandela's leadership critical
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'Where was Nelson Mandela imprisoned?', options: ['Robben Island and other prisons', 'Johannesburg Central Prison only', 'Cape Town Castle for the whole time', 'Durban Prison for the whole time'], answer: 'Robben Island and other prisons', explanation: 'Mandela spent most of his 27 years in prison on Robben Island in harsh conditions.' },
  { prompt: 'How long was Nelson Mandela in prison?', options: ['27 years (1962–1990)', '10 years (1962–1972)', '15 years (1962–1977)', '30 years (1960–1990)'], answer: '27 years (1962–1990)', explanation: 'Mandela\'s imprisonment lasted from his arrest in 1962 until his release on February 11, 1990.' },
  { prompt: 'When did the government unban the ANC?', options: ['February 2, 1990', 'December 1989', 'March 1990', 'August 1990'], answer: 'February 2, 1990', explanation: 'President de Klerk announced the unbanning of the ANC on February 2, 1990.' },
  { prompt: 'Who announced the unbanning of the ANC?', options: ['President F. W. de Klerk', 'Nelson Mandela', 'The government cabinet', 'International pressure'], answer: 'President F. W. de Klerk', explanation: 'De Klerk made the dramatic announcement to unban the ANC and begin negotiations.' },
  { prompt: 'When was Nelson Mandela released from prison?', options: ['February 11, 1990', 'December 1989', 'March 1990', 'June 1990'], answer: 'February 11, 1990', explanation: 'Mandela walked free on February 11, 1990, after 27 years of imprisonment.' },
  { prompt: 'How old was Mandela when he was released?', options: ['71', '60', '50', '80'], answer: '71', explanation: 'Mandela was 71 years old when released but remained a powerful leader.' },
  { prompt: 'What was Mandela\'s message after his release?', options: ['Reconciliation rather than revenge', 'Violence against white people', 'Isolation from the world', 'Continued armed struggle'], answer: 'Reconciliation rather than revenge', explanation: 'Despite 27 years of suffering, Mandela called for unity and healing.' },
  { prompt: 'What happened after Mandela\'s release?', options: ['Multi-party talks began to end apartheid and build a democracy', 'Apartheid carried on unchanged for years', 'Violence broke out at once across the country', 'Nothing changed in the way the country was run'], answer: 'Multi-party talks began to end apartheid and build a democracy', explanation: 'Mandela led negotiations with the government and other organizations to transition to democracy.' },
];

const MandelaReleaseUnbanning = () => (
  <HisTopic
    title="Mandela's Release and Unbanning"
    subtitle="Freedom after 27 years, reconciliation, and beginning of negotiations"
    learnSteps={learnSteps}
    task="gr9-mandela-release-unbanning-t4"
    bank={bank}
  />
);

export default MandelaReleaseUnbanning;
