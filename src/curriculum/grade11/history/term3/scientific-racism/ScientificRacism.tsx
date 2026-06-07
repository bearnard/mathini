import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/his/term3/scientific-racism/diagram.webp", alt: "Scientific Racism" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1735", "title": "Humans ranked by type", "description": "Carl Linnaeus published classifications of human groups in Systema Naturae. His categories helped later writers present racial difference as natural science."},
            {"date": "1775", "title": "Blumenbach expands taxonomy", "description": "Johann Friedrich Blumenbach proposed major human varieties based on physical features. His work was later used to support false racial hierarchies."},
            {"date": "1859", "title": "Darwin explains selection", "description": "Charles Darwin published On the Origin of Species, explaining natural selection in biology. Later thinkers wrongly applied these ideas to human societies."},
            {"date": "1864", "title": "Spencer misapplies evolution", "description": "Herbert Spencer popularised the phrase \"survival of the fittest\" and used evolutionary language to justify inequality. This became central to Social Darwinism."},
            {"date": "1883", "title": "Galton coins eugenics", "description": "Francis Galton argued that society should encourage reproduction by the so-called fit and restrict the so-called unfit. Eugenics turned prejudice into policy language."},
            {"date": "1907", "title": "Sterilization law passed", "description": "Indiana adopted the first compulsory sterilization law in the United States. It showed how eugenic ideas could become state action."},
            {"date": "1927", "title": "Court backs sterilization", "description": "In Buck v. Bell, the US Supreme Court upheld compulsory sterilization. The ruling gave legal support to eugenic abuse against vulnerable people."},
            {"date": "1933", "title": "Nazi eugenics legalized", "description": "Nazi Germany passed the Law for the Prevention of Hereditarily Diseased Offspring. It linked pseudo-science directly to forced sterilization and later genocide."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Racial classification in the 18th and 19th centuries',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          European writers in the 18th and 19th centuries tried to divide humanity into so-called
          <strong> "races"</strong> and then ranked those groups in a false hierarchy. These ideas were
          presented as science, but they were shaped by prejudice and empire rather than evidence.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Classification</strong>
            <p className="text-slate-600">Thinkers such as Linnaeus and Blumenbach grouped people by physical features like skin colour and skull shape.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Hierarchy</strong>
            <p className="text-slate-600">Europeans often placed themselves at the top and labelled Africans, Asians, and Indigenous peoples as inferior.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Why it mattered</strong>
            <p className="text-slate-600">These categories were used to justify conquest, slavery, and unequal treatment across the world.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Social Darwinism — misusing Darwin\'s ideas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Charles Darwin explained <strong>natural selection</strong> in the animal world. Later writers such as Herbert Spencer wrongly applied these ideas to human societies, arguing that some nations or races were naturally stronger and more fit to rule.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block max-w-2xl text-left">
          <p className="font-bold text-blue-700">Key CAPS warning:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Darwin wrote about biology, not a moral right to dominate others.</li>
            <li>Social Darwinists turned a scientific theory into a political excuse for inequality.</li>
            <li>The phrase <strong>"survival of the fittest"</strong> was used to defend imperialism, poverty, and racism.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Eugenics and forced sterilisation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Eugenics</strong> claimed that society could be improved by encouraging the reproduction of the "fit" and preventing the "unfit" from having children. In the early 20th century, governments in countries such as the USA and parts of Europe passed laws allowing <strong>forced sterilisation</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Targets</strong>
            <p className="text-slate-600">Poor people, disabled people, the mentally ill, and minority groups were often labelled unfit.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Historical impact</strong>
            <p className="text-slate-600">Thousands of people lost their rights over their own bodies because prejudice was disguised as science.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'From pseudo-science to imperialism, segregation, and genocide',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Scientific racism had deadly consequences. It helped imperial powers claim they were "civilising" colonised people, supported systems of segregation, and later fed genocidal policies in the 20th century.
        </p>
        <div className="bg-red-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-red-700 mb-2">When analysing sources, ask:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>What assumptions are made about superiority and inferiority?</li>
            <li>Who benefits if one group is called "less civilised" or "less human"?</li>
            <li>How do ideas lead to consequences such as conquest, segregation, or genocide?</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was the central claim of scientific racism?',
    options: [
      'That humanity could be divided into biological races ranked in a hierarchy of worth',
      'That all humans are equal regardless of physical differences',
      'That race was purely a cultural idea with no political impact',
      'That imperialism should end because all people are the same',
    ],
    answer: 'That humanity could be divided into biological races ranked in a hierarchy of worth',
    explanation: 'Scientific racism falsely claimed that racial categories were natural and that some groups were superior to others.',
  },
  {
    prompt: 'How did 18th- and 19th-century racial classification support empire?',
    options: [
      'It portrayed colonised peoples as inferior and Europeans as fit to rule them',
      'It proved that colonial subjects should govern Europe',
      'It encouraged equal citizenship in colonies',
      'It rejected all links between race and power',
    ],
    answer: 'It portrayed colonised peoples as inferior and Europeans as fit to rule them',
    explanation: 'Pseudo-scientific hierarchies helped imperial states present domination as natural and justified.',
  },
  {
    prompt: 'What was Social Darwinism?',
    options: [
      'The false application of natural selection to human societies and races',
      'Darwin\'s original theory about plants and animals',
      'A movement for racial equality based on biology',
      'A campaign to abolish imperialism in Africa',
    ],
    answer: 'The false application of natural selection to human societies and races',
    explanation: 'Social Darwinists misused Darwinian language to argue that some societies and races were naturally more advanced.',
  },
  {
    prompt: 'Why is the phrase "survival of the fittest" important in this topic?',
    options: [
      'It was used to justify inequality, imperial conquest, and racist policy',
      'It proved that human races are scientifically fixed',
      'It showed that Darwin supported genocide',
      'It was a slogan of anti-racist movements',
    ],
    answer: 'It was used to justify inequality, imperial conquest, and racist policy',
    explanation: 'Social Darwinists used the phrase to claim domination of weaker groups was natural and inevitable.',
  },
  {
    prompt: 'What did the eugenics movement aim to do?',
    options: [
      'Control reproduction by promoting the so-called fit and restricting the so-called unfit',
      'End all racial classification in modern states',
      'Expand democracy to colonised peoples',
      'Protect workers from industrial exploitation only',
    ],
    answer: 'Control reproduction by promoting the so-called fit and restricting the so-called unfit',
    explanation: 'Eugenics treated prejudice as science and targeted vulnerable people for exclusion or sterilisation.',
  },
  {
    prompt: 'What was forced sterilisation?',
    options: [
      'A policy that prevented people from having children without their full consent',
      'A law that forced people to move into segregated areas',
      'A military policy used during world wars',
      'A programme that rewarded large families',
    ],
    answer: 'A policy that prevented people from having children without their full consent',
    explanation: 'Forced sterilisation violated human rights and was justified through eugenic ideas in several countries.',
  },
  {
    prompt: 'Which of the following best links ideas to consequences?',
    options: [
      'Scientific racism helped justify segregation, imperialism, and later genocide',
      'Scientific racism had little effect outside universities',
      'Scientific racism mainly improved international law',
      'Scientific racism ended discrimination by using evidence',
    ],
    answer: 'Scientific racism helped justify segregation, imperialism, and later genocide',
    explanation: 'This topic shows how dangerous ideas can shape violent systems and state policies.',
  },
  {
    prompt: 'A source describes Africans as "childlike peoples needing European control". How should a historian read it?',
    options: [
      'As a biased source that reveals racist assumptions used to justify domination',
      'As neutral scientific evidence about human ability',
      'As proof that colonialism improved equality',
      'As a source with no political purpose',
    ],
    answer: 'As a biased source that reveals racist assumptions used to justify domination',
    explanation: 'CAPS History expects learners to identify loaded language, assumptions, and the political use of such ideas.',
  },
];

const ScientificRacism = () => (
  <CapsSubjectTopic
    title="Scientific Racism"
    subtitle="Racial classification, Social Darwinism, eugenics, and the consequences of pseudo-science"
    learnSteps={learnSteps}
    task="gr11-scientific-racism-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ScientificRacism;
