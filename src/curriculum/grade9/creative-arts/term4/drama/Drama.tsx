import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create and evaluate final production',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Grade 9 Term 4 culminates with a final production. You stage a short performance, develop awareness of technical theatre roles, reflect on acting and design choices, evaluate teamwork and audience impact, and explore drama as a career. Demonstrate theatrical maturity and collaborative excellence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Final production work involves...',
    options: ['Staging a full performance with design and technical help', 'Rehearsing a piece without ever performing it', 'Skipping the show and handing in written work', 'Making and showing solo work only, on a stage'],
    answer: 'Staging a full performance with design and technical help',
    explanation: 'Full production demonstrates integrated theatrical creativity.',
  },
  {
    prompt: 'Technical theatre roles include...',
    options: ['Lighting, sound, set design, costume and stage management', 'Acting, which is the only role on a stage', 'Work off the stage that is not part of theatre', 'Roles that a show can do without'],
    answer: 'Lighting, sound, set design, costume and stage management',
    explanation: 'Technical roles support and enhance performance quality.',
  },
  {
    prompt: 'Acting evaluation considers...',
    options: ['Believable character, voice, movement and engagement', 'How good the actor looks on the stage in costume', 'Standards that are not needed to judge a performance', 'Personal taste only, with no clear measures to use'],
    answer: 'Believable character, voice, movement and engagement',
    explanation: 'Comprehensive evaluation recognizes diverse acting strengths.',
  },
  {
    prompt: 'Design choices in drama refer to...',
    options: ["Costume, lighting, set and props that support the production's vision", 'Decoration that is added once the play is ready', 'Choices made without any planning ahead', 'Choices made on the day, according to what is at hand'],
    answer: "Costume, lighting, set and props that support the production's vision",
    explanation: 'Design creates atmosphere and supports storytelling.',
  },
  {
    prompt: 'Evaluating teamwork includes considering...',
    options: ['Communication, support for peers, meeting deadlines and shared tasks', 'A test that is not needed for group work', 'Credit for the single best performer in the group', 'Work done alone, with no help from the group'],
    answer: 'Communication, support for peers, meeting deadlines and shared tasks',
    explanation: 'Strong teamwork enables successful complex productions.',
  },
  {
    prompt: 'Audience impact in theatre means...',
    options: ['How viewers respond, in feeling and thought, to the show', 'How loudly the audience claps at the end', 'A link with the audience that is not needed', 'Viewers that matter little to a performance'],
    answer: 'How viewers respond, in feeling and thought, to the show',
    explanation: 'Powerful theatre connects with and moves audiences.',
  },
  {
    prompt: 'Drama careers might include...',
    options: ['Actor, director, playwright, dramaturge or drama therapist', 'Performing on stage and no other work', 'No careers are open to people who study drama', 'Hobbies that cannot become professional work'],
    answer: 'Actor, director, playwright, dramaturge or drama therapist',
    explanation: 'Drama offers diverse fulfilling professional pathways.',
  },
  {
    prompt: 'Reflection on your final production helps you to...',
    options: ['Judge what you learned, celebrate wins and see where to grow', 'Nothing to reflect on once the show has ended', 'There was no learning in the production', 'Forget the project and move on to the next one'],
    answer: 'Judge what you learned, celebrate wins and see where to grow',
    explanation: 'Reflection consolidates learning and informs future growth.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Final production, technical theatre, reflection, and evaluation"
    learnSteps={learnSteps}
    task="gr9-drama-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
