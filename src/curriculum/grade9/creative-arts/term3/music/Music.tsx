import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Binary form (AB) in music consists of...',
    options: ['Two separate sections with contrasting material', 'A single section that is repeated all through', 'Three sections, with the first one coming back', 'A piece that has no clear structure'],
    answer: 'Two separate sections with contrasting material',
    explanation: 'Binary form alternates between different melodic or harmonic ideas.',
  },
  {
    prompt: 'Ternary form (ABA) returns to...',
    options: ['The opening material, after a contrasting middle section', 'The middle material only, which is repeated', 'A new section that has not been heard before', 'The ending of the middle section in a new key'],
    answer: 'The opening material, after a contrasting middle section',
    explanation: 'Ternary form creates familiarity and closure through return.',
  },
  {
    prompt: 'Composition in music means...',
    options: ['Creating new music by combining melody, harmony and rhythm', 'Performing a piece that someone else has written', 'Reading a score without playing any of it', 'Copying a piece note for note from a recording'],
    answer: 'Creating new music by combining melody, harmony and rhythm',
    explanation: 'Composition develops musical literacy and creative expression.',
  },
  {
    prompt: 'Arrangement involves...',
    options: ['Adapting existing music for other instruments or voices', 'Performing a piece exactly as it was written', 'Making no changes to the original in any way', 'Creating a brand new piece from nothing'],
    answer: 'Adapting existing music for other instruments or voices',
    explanation: 'Arrangement lets familiar pieces reach new audiences and contexts.',
  },
  {
    prompt: 'An ostinato is...',
    options: ['A short phrase that repeats steadily through a piece', 'A phrase that is played one time only', 'A phrase that is never repeated in the piece', 'The last note that ends the piece'],
    answer: 'A short phrase that repeats steadily through a piece',
    explanation: 'Ostinato provides foundation and unity in musical structure.',
  },
  {
    prompt: 'Technology in music production includes...',
    options: ['Recording equipment, DAWs, synthesizers and digital effects', 'Traditional instruments only, such as drums and strings', 'Tools that are no longer used in modern music', 'Paper and pencil used for writing out a score'],
    answer: 'Recording equipment, DAWs, synthesizers and digital effects',
    explanation: 'Technology expands musical possibilities and production methods.',
  },
  {
    prompt: 'Rehearsing with independence means...',
    options: ['Taking the lead to improve and solve problems without constant direction', 'Always needing help from the teacher', 'Having no duty to prepare for rehearsal', 'Following the director exactly, with no ideas of your own'],
    answer: 'Taking the lead to improve and solve problems without constant direction',
    explanation: 'Independent rehearsal builds ownership and musical maturity.',
  },
  {
    prompt: 'Listening analysis of form helps you to...',
    options: ["See the structure and understand the composer's choices", 'Hear sounds without noticing any shape in them', 'Remove the need to understand how pieces are built', 'Skip the patterns and listen for the loudest notes'],
    answer: "See the structure and understand the composer's choices",
    explanation: 'Form awareness deepens listening comprehension and appreciation.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Musical form, arrangement, composition, technology awareness, and rehearsal practice"
    learnSteps={learnSteps}
    task="gr9-music-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
