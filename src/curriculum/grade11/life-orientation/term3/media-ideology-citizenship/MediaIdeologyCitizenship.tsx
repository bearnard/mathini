import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/lo/term3/media-ideology-citizenship/diagram.webp", alt: "Media, Ideology and Active Citizenship" },
    title: 'How Media Shapes Opinion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Media does not only report events. It also shapes opinion through <strong>selection</strong>, <strong>framing</strong>, and <strong>language</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Selection</strong>
            <p className="text-slate-600">Choosing which stories, voices, and facts are included or excluded.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Framing</strong>
            <p className="text-slate-600">Presenting an issue from a specific angle that influences interpretation.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Language</strong>
            <p className="text-slate-600">Using loaded words, labels, and tone to produce an emotional response.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Propaganda and Persuasion Techniques',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Propaganda</strong> aims to persuade people in a one-sided way, often by appealing to emotions more than evidence.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Common techniques:</strong> name-calling, bandwagon, fear appeals, glittering generalities, testimonials, and selective facts.</p>
          <p>Critical readers ask: What is the purpose? Who benefits? What evidence is missing?</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Ideology, Bias and Critical Literacy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Ideology</strong> refers to a set of beliefs or values that can influence how issues are reported and interpreted.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Signs of bias</strong>
            <p className="text-sm text-slate-600">Unbalanced sources, emotionally loaded wording, missing context, and headlines that exaggerate.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Critical literacy skills</strong>
            <p className="text-sm text-slate-600">Check author credibility, compare sources, distinguish fact from opinion, and verify evidence before sharing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Active Citizenship and Evidence-Based Dialogue',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Active citizens use reliable information to participate in civic conversations, challenge misinformation, and promote respectful democratic debate.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Good civic communication includes:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Using verified facts and credible sources</li>
            <li>Explaining claims clearly with evidence</li>
            <li>Listening to different viewpoints respectfully</li>
            <li>Rejecting hate speech, stereotypes, and misinformation</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does media selection mean?',
    options: [
      'Allowing readers to write the article themselves',
      'Choosing which stories, facts, and voices are included',
      'Changing the law about newspapers',
      'Printing every opinion equally',
    ],
    answer: 'Choosing which stories, facts, and voices are included',
    explanation: 'Selection influences what audiences notice and what remains invisible.',
  },
  {
    prompt: 'A headline uses emotional words to make readers angry before they read the article. Which technique is being used?',
    options: ['Loaded language', 'Objective reporting', 'Balanced sourcing', 'Judicial review'],
    answer: 'Loaded language',
    explanation: 'Loaded language tries to shape feelings and opinion through strong wording.',
  },
  {
    prompt: 'What is propaganda?',
    options: [
      'A balanced and fully neutral source every time',
      'Persuasion that is often one-sided and emotional',
      'A formal court judgment',
      'A scientific research method',
    ],
    answer: 'Persuasion that is often one-sided and emotional',
    explanation: 'Propaganda aims to persuade, often by using emotion, repetition, or selective facts.',
  },
  {
    prompt: 'Which of the following is a propaganda technique?',
    options: ['Peer review', 'Bandwagon', 'Referencing', 'Sampling'],
    answer: 'Bandwagon',
    explanation: 'Bandwagon persuades people to join because “everyone else is doing it.”',
  },
  {
    prompt: 'What does ideology refer to in media studies?',
    options: [
      'A type of printing machine',
      'A set of beliefs and values that shapes interpretation',
      'A law passed by Parliament',
      'A random social media trend',
    ],
    answer: 'A set of beliefs and values that shapes interpretation',
    explanation: 'Ideology can influence how issues are framed and which perspectives are highlighted.',
  },
  {
    prompt: 'Which action shows critical literacy?',
    options: [
      'Sharing a post immediately because it matches your views',
      'Comparing two sources and checking the evidence used',
      'Believing the first headline you see',
      'Ignoring the author and date of publication',
    ],
    answer: 'Comparing two sources and checking the evidence used',
    explanation: 'Critical literacy involves verification, comparison, and careful evaluation of evidence.',
  },
  {
    prompt: 'Why is it important to distinguish fact from opinion in civic discussions?',
    options: [
      'Because opinions are always false',
      'Because evidence-based discussion depends on knowing what can be verified',
      'Because facts are only important in science',
      'Because opinions are illegal in democracy',
    ],
    answer: 'Because evidence-based discussion depends on knowing what can be verified',
    explanation: 'Democratic debate is stronger when claims are supported by verifiable facts.',
  },
  {
    prompt: 'A learner challenges misinformation about an election by sharing IEC data and a credible news analysis. This is an example of:',
    options: ['Active citizenship', 'Propaganda', 'Name-calling', 'Discrimination'],
    answer: 'Active citizenship',
    explanation: 'Using reliable evidence to improve public discussion is a core active citizenship skill.',
  },
];

const MediaIdeologyCitizenship = () => (
  <CapsSubjectTopic
    title="Media, Ideology and Active Citizenship"
    subtitle="Media influence, propaganda, critical literacy and evidence-based civic engagement"
    learnSteps={learnSteps}
    task="gr11-media-ideology-citizenship-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default MediaIdeologyCitizenship;
