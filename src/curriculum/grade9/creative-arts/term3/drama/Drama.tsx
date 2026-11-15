import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Script writing begins with...',
    options: ['Understanding character motives, conflict and your story', 'Writing the dialogue first and the plot much later', 'Writing without any plan for the story at all', 'Choosing a list of words to put into the script'],
    answer: 'Understanding character motives, conflict and your story',
    explanation: 'Clear story vision guides all scriptwriting decisions.',
  },
  {
    prompt: 'Adapting scenes means...',
    options: ['Taking existing material and rewriting it for your aim or cast', 'Copying the original scenes word for word', 'Leaving the scenes just as they were written', 'Ignoring the source and writing something new'],
    answer: 'Taking existing material and rewriting it for your aim or cast',
    explanation: 'Adaptation allows creative interpretation while respecting source.',
  },
  {
    prompt: 'Character motivation tells us...',
    options: ['Why a character wants something or acts as they do', 'How the character looks on the stage', 'The age of the character in the story', 'The actions that the character takes on stage'],
    answer: 'Why a character wants something or acts as they do',
    explanation: 'Strong motivation makes characters believable and engaging.',
  },
  {
    prompt: 'Rehearsal discipline includes...',
    options: ['Focus, punctuality, openness to direction and teamwork', 'Being easily distracted by what is happening around you', 'Not needing to attend every rehearsal', 'Talking over the others while they are rehearsing'],
    answer: 'Focus, punctuality, openness to direction and teamwork',
    explanation: 'Professional rehearsal habits create stronger performances.',
  },
  {
    prompt: 'Peer review in drama means...',
    options: ['Giving fair, helpful feedback to fellow performers', 'Giving praise only, to keep everyone feeling happy', 'Giving no comment, since critique is unkind', 'Ignoring the work of the other performers'],
    answer: 'Giving fair, helpful feedback to fellow performers',
    explanation: 'Peer feedback supports growth and improves final work.',
  },
  {
    prompt: 'Collaboration in ensemble work requires...',
    options: ['Listening, compromising, supporting others and adding ideas', 'Believing that only your own ideas matter', 'Working without speaking to the other performers', 'Working on your own most of the time'],
    answer: 'Listening, compromising, supporting others and adding ideas',
    explanation: 'Strong collaboration creates richer, more complex work.',
  },
  {
    prompt: 'Stage directions in your script should tell performers...',
    options: ['Where to move, what tone to use and what to do', 'Nothing that the performers need to know', 'Only the moment when an actor should sit', 'Hints that the actors must guess the meaning of'],
    answer: 'Where to move, what tone to use and what to do',
    explanation: 'Clear directions ensure coherent, intentional performance.',
  },
  {
    prompt: 'Mood in a scene is created by...',
    options: ['Dialogue, movement, pace and the choices of performers together', 'The words that are spoken and nothing else', 'The words and the music, with no help from the body', 'The music that plays under the scene'],
    answer: 'Dialogue, movement, pace and the choices of performers together',
    explanation: 'Mood emerges from all theatrical elements working together.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Script writing, character motivation, rehearsal process, and collaboration"
    learnSteps={learnSteps}
    task="gr9-drama-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
