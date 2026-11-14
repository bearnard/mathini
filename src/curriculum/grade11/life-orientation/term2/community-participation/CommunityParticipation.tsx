import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Volunteering and Community Service',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Community participation</strong> means actively contributing to the wellbeing of your community without expecting financial reward.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3 text-left">
          <p className="font-bold text-slate-800">Benefits of volunteering:</p>
          <div className="grid gap-2 md:grid-cols-2 text-slate-600 text-sm">
            <p>✔ Develops leadership and teamwork skills</p>
            <p>✔ Builds empathy and social awareness</p>
            <p>✔ Strengthens community bonds and social cohesion</p>
            <p>✔ Enhances a portfolio and career prospects</p>
            <p>✔ Improves personal wellbeing and sense of purpose</p>
            <p>✔ Creates positive change in the community</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Examples: food drives, tutoring younger learners, environmental clean-ups, hospital visits, and awareness campaigns.</p>
      </div>
    ),
  },
  {
    title: 'Leadership Qualities in Community Projects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective community leaders inspire others, communicate clearly, and keep projects on track towards meaningful outcomes.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Vision</strong>
            <p className="text-slate-600 text-sm">A clear picture of what the project aims to achieve and why it matters.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Communication</strong>
            <p className="text-slate-600 text-sm">Sharing information clearly, listening to others, and motivating the team.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Reliability</strong>
            <p className="text-slate-600 text-sm">Following through on commitments and holding the team accountable.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Empathy</strong>
            <p className="text-slate-600 text-sm">Understanding community members' needs and tailoring responses accordingly.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Collaboration</strong>
            <p className="text-slate-600 text-sm">Working with others effectively, valuing diverse contributions.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Problem-solving</strong>
            <p className="text-slate-600 text-sm">Addressing obstacles creatively and calmly when they arise.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Planning a Community Participation Project',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A well-planned project is more likely to succeed. Use this step-by-step approach when planning.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Project planning steps:</p>
          <ol className="list-decimal list-inside text-slate-600 text-sm space-y-1">
            <li><strong>Identify the need</strong> — what real problem in your community needs addressing?</li>
            <li><strong>Set clear goals</strong> — what specific outcome do you want to achieve?</li>
            <li><strong>Identify stakeholders</strong> — who will be involved or affected?</li>
            <li><strong>Plan resources</strong> — what people, time, money, and materials are needed?</li>
            <li><strong>Assign roles</strong> — who does what and by when?</li>
            <li><strong>Implement</strong> — carry out the project according to the plan.</li>
            <li><strong>Evaluate</strong> — did it achieve the goals? What could be improved?</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Support Services and Collaboration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective community participation often requires linking with <strong>existing support services</strong> and building <strong>collaborative partnerships</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Support services</strong>
            <p className="text-slate-600 text-sm">NGOs, government departments (e.g., Social Development), faith-based organisations, clinics, and youth development programmes.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Why collaborate?</strong>
            <p className="text-slate-600 text-sm">Shared resources, broader reach, combined expertise, and greater impact than any single person or group can achieve alone.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">South Africa has a strong civil society sector — NGOs, CBOs, and community organisations that young people can partner with for meaningful projects.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following best describes "community participation"?',
    options: ['Paying your taxes to the government every year', 'Contributing to community wellbeing without expecting payment', 'Joining political parties and nothing else', 'Watching the events that happen in a community'],
    answer: 'Contributing to community wellbeing without expecting payment',
    explanation: 'Community participation involves voluntary engagement to address real community needs and contribute to the common good.',
  },
  {
    prompt: 'Which leadership quality involves understanding and responding to community members\' needs?',
    options: ['Vision', 'Empathy', 'Problem-solving', 'Reliability'],
    answer: 'Empathy',
    explanation: 'Empathy allows leaders to understand the experiences and needs of others, making interventions more relevant and effective.',
  },
  {
    prompt: 'What should be the FIRST step when planning a community project?',
    options: [
      'Assign roles to team members',
      'Buy all the materials needed',
      'Identify a real need in the community',
      'Evaluate the project outcomes',
    ],
    answer: 'Identify a real need in the community',
    explanation: 'All effective projects start by identifying a genuine community need to ensure the project is relevant and impactful.',
  },
  {
    prompt: 'Why is volunteering beneficial for personal development?',
    options: [
      'It is only beneficial for the community, not the volunteer',
      'It develops leadership, teamwork, and empathy while building a personal portfolio',
      'It replaces formal employment',
      'It only helps if you volunteer full time',
    ],
    answer: 'It develops leadership, teamwork, and empathy while building a personal portfolio',
    explanation: 'Volunteering builds critical life skills and character while contributing positively to community wellbeing.',
  },
  {
    prompt: 'What is a "stakeholder" in a community project?',
    options: ['Only the leader who runs the project', 'Any person or group involved in or affected by the project', 'Only the people who give money to the project', 'An official who works for the government'],
    answer: 'Any person or group involved in or affected by the project',
    explanation: 'Identifying all stakeholders ensures the project is relevant, inclusive, and sustainable.',
  },
  {
    prompt: 'What is an NGO?',
    options: ['A department that belongs to the national government', 'A company that is run mainly to make a profit', 'A non-governmental body that meets social needs, not for profit', 'A national body that governs a particular sport'],
    answer: 'A non-governmental body that meets social needs, not for profit',
    explanation: 'NGOs form a key part of civil society, providing services and advocacy that complement government work.',
  },
  {
    prompt: 'Which step in project planning involves assessing whether goals were achieved?',
    options: ['Planning resources', 'Implementing the project', 'Evaluating the project', 'Identifying stakeholders'],
    answer: 'Evaluating the project',
    explanation: 'Evaluation is the final step that reflects on outcomes, measures success, and identifies improvements for future projects.',
  },
  {
    prompt: 'Why is collaboration with existing support services important in community projects?',
    options: ['It means that you need not do any work yourself', 'It brings shared resources, expertise and a wider reach', 'It guarantees that the government will fund you', 'Working with other groups is generally not useful'],
    answer: 'It brings shared resources, expertise and a wider reach',
    explanation: 'Partnerships amplify the effectiveness of community projects beyond what any single person or group can achieve alone.',
  },
  {
    prompt: 'A school group organises a food drive for a local informal settlement. This is an example of:',
    options: ['Political activism against the government', 'Community participation and social responsibility', 'Charity that makes people dependent on others', 'A business activity that is run for profit'],
    answer: 'Community participation and social responsibility',
    explanation: 'Organising a food drive demonstrates active engagement in addressing community needs — a core form of community participation.',
  },
  {
    prompt: 'Why should a community project be evaluated after completion?',
    options: ['Evaluation is needed only if the project has failed', 'To see if goals were met and learn lessons for future projects', 'To advertise the project on social media', 'Evaluation is optional and rarely of any use'],
    answer: 'To see if goals were met and learn lessons for future projects',
    explanation: 'Evaluation provides evidence of impact, guides improvement, and promotes accountability to the community served.',
  },
];

const CommunityParticipation = () => (
  <CapsSubjectTopic
    title="Community Participation"
    subtitle="Volunteering, leadership, project planning and collaboration for community change"
    learnSteps={learnSteps}
    task="gr11-community-participation-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CommunityParticipation;
