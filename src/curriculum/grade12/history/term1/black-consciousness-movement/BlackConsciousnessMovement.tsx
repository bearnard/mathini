import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/his/term1/black-consciousness-movement/diagram.webp", alt: "Black Consciousness Movement" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1960", "title": "ANC and PAC banned", "description": "After Sharpeville, the apartheid state banned the ANC and PAC. This repression helped create the conditions for a new internal politics of resistance."},
            {"date": "1968–1969", "title": "SASO is formed", "description": "Black students broke from white-dominated NUSAS and created the South African Students' Organisation. SASO became the main student vehicle for Black Consciousness."},
            {"date": "1972", "title": "BCM expands nationally", "description": "The Black People's Convention was formed to widen Black Consciousness beyond campuses. Community programmes and political education spread its message of self-reliance."},
            {"date": "1972", "title": "Community programmes grow", "description": "Black Community Programmes supported clinics, literacy work, and local projects. They showed that resistance also meant building alternative institutions."},
            {"date": "16 Jun 1976", "title": "Soweto generation rises", "description": "Black Consciousness had a strong influence on the students who challenged apartheid in Soweto. Its message of dignity and psychological liberation helped inspire youth resistance."},
            {"date": "12 Sep 1977", "title": "Steve Biko dies", "description": "Steve Biko died in police detention after brutal assault by security police. His death sparked global outrage and exposed apartheid's violence."},
            {"date": "Late 1970s–1980s", "title": "Legacy shapes resistance", "description": "Although heavily repressed, Black Consciousness left a lasting political legacy. It helped inspire later youth, civic, and labour struggles against apartheid."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Origins of Black Consciousness",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"After the ANC and PAC were banned in 1960, many young activists believed black South Africans needed a new language of resistance. Black Consciousness grew in universities and schools as a movement that stressed dignity, confidence, and independent organisation."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Steve Biko became the best-known leader of the movement."}</li>
          <li>{"The South African Students' Organisation (SASO) was formed in 1969 after black students rejected white control of NUSAS."}</li>
          <li>{"The movement argued that liberation had to begin by defeating feelings of inferiority created by apartheid."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Ideas and methods",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Black Consciousness taught that oppressed people should define themselves and organise for themselves. This was called psychological liberation: rejecting apartheid's labels and refusing to accept white superiority as normal."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"It promoted black pride, self-reliance, and solidarity among Africans, Coloureds, and Indians oppressed by apartheid."}</li>
          <li>{"It criticised white liberal paternalism and insisted black people must lead their own struggle."}</li>
          <li>{"Community clinics, literacy projects, and cultural programmes showed that resistance could also build alternative institutions."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Spreading into schools and communities",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The movement did not remain on university campuses. Its ideas spread into teacher groups, church networks, youth organisations, and township schools, where it encouraged young people to challenge Bantu Education and apartheid authority."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Black Community Programmes linked political ideas to practical community work."}</li>
          <li>{"Student leaders used rallies, publications, and discussion groups to spread the message."}</li>
          <li>{"By the mid-1970s, Black Consciousness had helped produce a more assertive generation of school pupils."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Repression and legacy",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"The apartheid state saw Black Consciousness as dangerous because it rebuilt internal resistance. Biko and other leaders were banned, harassed, and detained, but repression could not erase the movement's influence on the Soweto generation."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Steve Biko died in police detention in September 1977 after brutal assault by security police."}</li>
          <li>{"His death drew global outrage and exposed the violence of apartheid to the world."}</li>
          <li>{"Black Consciousness helped inspire later youth, civic, and labour resistance in the 1980s."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Who was the best-known leader of the Black Consciousness Movement in South Africa?",
    options: ["Nelson Mandela", "Steve Biko", "Oliver Tambo", "Desmond Tutu"],
    answer: "Steve Biko",
    explanation: "Steve Biko became the leading public face of Black Consciousness in the 1970s.",
  },
  {
    prompt: "What does “psychological liberation” mean in Black Consciousness thinking?",
    options: ["Accepting apartheid laws while waiting for reform", "Rejecting feelings of inferiority created by oppression", "Using only armed struggle to win freedom", "Asking white liberals to lead the movement"],
    answer: "Rejecting feelings of inferiority created by oppression",
    explanation: "Black Consciousness stressed that people had to free their minds from apartheid's message of black inferiority.",
  },
  {
    prompt: "Which student organisation was founded in 1969 as part of the Black Consciousness Movement?",
    options: ["ANCYL", "SASO", "COSATU", "UDF"],
    answer: "SASO",
    explanation: "SASO stands for the South African Students' Organisation.",
  },
  {
    prompt: "Why did Black Consciousness criticise white liberal control of anti-apartheid politics?",
    options: ["It believed apartheid could be improved", "It insisted oppressed people had to lead their own struggle", "It rejected all cooperation with churches", "It wanted to end student politics"],
    answer: "It insisted oppressed people had to lead their own struggle",
    explanation: "Black Consciousness promoted black self-definition and leadership instead of paternalism.",
  },
  {
    prompt: "Which of the following was a typical Black Consciousness activity?",
    options: ["Community self-help projects and clinics", "Campaigning for the tricameral parliament", "Supporting pass laws", "Serving in the apartheid cabinet"],
    answer: "Community self-help projects and clinics",
    explanation: "Black Community Programmes linked political consciousness to practical community support.",
  },
  {
    prompt: "Why did the apartheid state see Black Consciousness as a threat?",
    options: ["It supported homeland independence", "It rebuilt confidence and internal resistance among black South Africans", "It called for cooperation with the secret police", "It wanted to protect white supremacy"],
    answer: "It rebuilt confidence and internal resistance among black South Africans",
    explanation: "The movement challenged apartheid ideologically and helped create a new generation of activists.",
  },
  {
    prompt: "What happened to Steve Biko in 1977?",
    options: ["He became state president", "He left South Africa to study abroad", "He died in police detention", "He joined the tricameral parliament"],
    answer: "He died in police detention",
    explanation: "Biko died after being brutally assaulted by security police, causing international outrage.",
  },
  {
    prompt: "What was one important legacy of Black Consciousness?",
    options: ["It ended apartheid in 1976", "It inspired youth resistance and later mass mobilisation", "It created the homeland system", "It replaced all other anti-apartheid organisations"],
    answer: "It inspired youth resistance and later mass mobilisation",
    explanation: "Its ideas strongly influenced the Soweto generation and later internal resistance in the 1980s.",
  },
];

const BlackConsciousnessMovement = () => (
  <CapsSubjectTopic
    title="Black Consciousness Movement"
    subtitle="Steve Biko, psychological liberation, and community self-reliance"
    learnSteps={learnSteps}
    task="gr12-black-consciousness-movement-t1"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default BlackConsciousnessMovement;
