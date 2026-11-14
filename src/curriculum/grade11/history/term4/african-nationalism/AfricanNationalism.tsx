import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1884–1885", "title": "Colonial partition hardens", "description": "The Berlin Conference accelerated European control over Africa. Colonial rule and exclusion helped provoke later nationalist responses."},
            {"date": "1900", "title": "Pan-African ideas gather", "description": "The first Pan-African Conference in London brought together thinkers challenging racism and empire. It helped frame a wider African and diaspora struggle."},
            {"date": "1912", "title": "ANC predecessor founded", "description": "The South African Native National Congress was founded to defend African rights. It later became the ANC, one of Africa's most important nationalist organisations."},
            {"date": "1919", "title": "Paris Congress meets", "description": "W. E. B. Du Bois helped organise the Pan-African Congress in Paris after World War I. It pressed the case for African rights on an international stage."},
            {"date": "1945", "title": "Manchester Congress radicalises", "description": "The Fifth Pan-African Congress demanded an end to colonial rule. It influenced future leaders such as Kwame Nkrumah and strengthened anti-colonial nationalism."},
            {"date": "1945", "title": "War weakens empire", "description": "World War II left European powers financially and politically weakened. African soldiers, workers, and activists returned with stronger expectations of freedom and self-government."},
            {"date": "1957", "title": "Ghana inspires continent", "description": "Ghana became independent under Kwame Nkrumah. Its success showed that African nationalism could defeat colonial rule."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'What is African nationalism?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Nationalism</strong> is the belief that a people with a shared identity should govern themselves. In Africa, nationalism grew as a response to colonial rule, racial discrimination, land dispossession, and political exclusion.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Political goal</strong>
            <p className="text-slate-600">Self-government and independence from colonial rule.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Social meaning</strong>
            <p className="text-slate-600">Restoring dignity and challenging ideas of African inferiority.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Historical roots</strong>
            <p className="text-slate-600">Christian missions, newspapers, educated elites, workers, and soldiers all helped spread nationalist ideas.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Early organisations and the ANC, 1912',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Early African nationalist organisations emerged in many colonies. In South Africa, the <strong>South African Native National Congress</strong> was founded in 1912 and later became the <strong>African National Congress (ANC)</strong>. It was created to oppose racial discrimination and defend African rights.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-700">Early methods:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Petitions and delegations to the British government</li>
            <li>Political meetings and newspaper campaigns</li>
            <li>Appeals for inclusion, rights, and representation</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Pan-Africanism and the Manchester Congress of 1945',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Pan-Africanism</strong> argued that people of African descent shared a common struggle against racism and colonialism. Leaders such as <strong>W. E. B. Du Bois</strong> and <strong>Marcus Garvey</strong> inspired international activism, while the <strong>Manchester Pan-African Congress of 1945</strong> demanded an end to empire.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Ideas</strong>
            <p className="text-slate-600">Unity, pride, self-determination, and solidarity across Africa and the diaspora.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Impact</strong>
            <p className="text-slate-600">Future leaders such as Kwame Nkrumah were influenced by Pan-African debates and networks.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'World War II and the growth of independence movements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          World War II weakened European powers economically and politically. African soldiers and workers expected change after helping the war effort. After 1945, nationalism expanded rapidly as more movements demanded independence, citizenship, and majority rule.
        </p>
        <div className="bg-red-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-red-700 mb-2">Why nationalism strengthened after 1945:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>European empires were weaker and less able to suppress resistance.</li>
            <li>Ideas about freedom and self-determination had spread more widely.</li>
            <li>Urbanisation, education, and trade unions created new political networks.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is nationalism?',
    options: [
      'The belief that a people with a shared identity should govern themselves',
      'The idea that colonies should remain under European rule',
      'A system of racial classification created by imperial powers',
      'The belief that all states must follow one religion',
    ],
    answer: 'The belief that a people with a shared identity should govern themselves',
    explanation: 'Nationalism links identity to political self-rule and became a powerful anti-colonial force in Africa.',
  },
  {
    prompt: 'Why did African nationalism emerge?',
    options: [
      'As a response to colonial domination, racial discrimination, and political exclusion',
      'Because European powers encouraged immediate independence everywhere',
      'Mainly because African nationalism wanted to strengthen colonialism',
      'Only because of the Cold War, with no earlier causes',
    ],
    answer: 'As a response to colonial domination, racial discrimination, and political exclusion',
    explanation: 'African nationalism was rooted in lived experiences of injustice under colonial rule.',
  },
  {
    prompt: 'What organisation was founded in South Africa in 1912?',
    options: ['The South African Native National Congress, later the ANC', 'The National Party that later ruled apartheid South Africa', 'The Pan-African Congress that met in 1945', 'The United Nations, set up after the war'],
    answer: 'The South African Native National Congress, later the ANC',
    explanation: 'The ANC became one of the most important African nationalist organisations in southern Africa.',
  },
  {
    prompt: 'Which of the following was an early method used by African nationalist organisations?',
    options: [
      'Petitions, delegations, and political meetings',
      'Immediate control of the colonial army',
      'The creation of apartheid laws',
      'Forced removals of settlers',
    ],
    answer: 'Petitions, delegations, and political meetings',
    explanation: 'Early nationalism often used constitutional protest before later strategies developed.',
  },
  {
    prompt: 'What is Pan-Africanism?',
    options: ['The idea that African peoples share struggles and should unite', 'A policy of dividing Africa into smaller colonies', 'A German theory of a racial hierarchy of peoples', 'A British plan for rule through local chiefs'],
    answer: 'The idea that African peoples share struggles and should unite',
    explanation: 'Pan-Africanism connected African and diaspora struggles across national borders.',
  },
  {
    prompt: 'Which leaders are closely associated with Pan-Africanism in this topic?',
    options: ['W. E. B. Du Bois and Marcus Garvey', 'Hitler and Mussolini, the fascist leaders', 'Rhodes and Chamberlain, the British imperialists', 'Stalin and Trotsky, the Soviet leaders'],
    answer: 'W. E. B. Du Bois and Marcus Garvey',
    explanation: 'Both men were major voices in developing Pan-African thought and activism.',
  },
  {
    prompt: 'Why is the Manchester Pan-African Congress of 1945 important?',
    options: ['It demanded an end to colonial rule and inspired future leaders', 'It set up the apartheid state in South Africa', 'It defended European empire after World War II', 'It was a military alliance against the Soviet Union'],
    answer: 'It demanded an end to colonial rule and inspired future leaders',
    explanation: 'Manchester gave sharper political direction to Pan-African demands for self-government.',
  },
  {
    prompt: 'How did World War II strengthen African nationalism?',
    options: ['It weakened Europe and raised African hopes of self-rule', 'It ended all nationalist activity for decades', 'It gave the colonies full equality at once', 'It proved that empire was stronger than ever before'],
    answer: 'It weakened Europe and raised African hopes of self-rule',
    explanation: 'After 1945, many Africans believed the language of freedom should apply to them as well.',
  },
];

const AfricanNationalism = () => (
  <CapsSubjectTopic
    title="African Nationalism"
    subtitle="Origins of nationalism, the ANC, Pan-Africanism, and the post-war growth of independence movements"
    learnSteps={learnSteps}
    task="gr11-african-nationalism-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default AfricanNationalism;
