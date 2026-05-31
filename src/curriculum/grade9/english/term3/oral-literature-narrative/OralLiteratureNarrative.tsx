import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand oral traditions and their features',
    image: {
      src: '/curriculum/grade9/english/term3/oral-literature-narrative/image1.jpg',
      alt: 'learner presenting a folktale with gesture and expression for an audience',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Oral literature includes folktales, myths, and fables passed down through speaking. These traditions often 
          feature repetition, formulaic language, and moral lessons. Presenting orally requires clear voice, pacing, 
          and audience engagement.
        </p>
      </div>
    ),
  },
  {
    title: 'Master interview and presentation skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Interviews gather information through purposeful questioning. Clear presentations require sequencing ideas 
          logically, using supporting details, and adapting delivery to the listener. Eye contact and tone matter in 
          oral communication.
        </p>
      </div>
    ),
  },
  {
    title: 'Present information clearly to listeners',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective oral responses organize information in a logical order and emphasize key points. Listeners need 
          signposting ("First...", "Next...", "Finally...") to follow the sequence and understand relationships between 
          ideas.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a characteristic of oral literature?',
    options: ['repetition and formulaic phrases help listeners remember', 'it requires written text only', 'it avoids any patterns', 'it is always humorous'],
    answer: 'repetition and formulaic phrases help listeners remember',
    explanation: 'Oral traditions use memorable patterns to preserve stories across generations.',
  },
  {
    prompt: 'What is the main purpose of a folktale?',
    options: ['to teach a lesson or moral to listeners', 'to confuse the audience', 'to avoid any meaningful message', 'to promote only entertainment without meaning'],
    answer: 'to teach a lesson or moral to listeners',
    explanation: 'Folktales often embed cultural values and practical wisdom.',
  },
  {
    prompt: 'Which element is important in oral presentation?',
    options: ['clear voice, appropriate pace, and eye contact with audience', 'reading directly from paper without variation', 'speaking as fast as possible', 'avoiding audience engagement'],
    answer: 'clear voice, appropriate pace, and eye contact with audience',
    explanation: 'Delivery techniques keep listeners engaged and help them understand.',
  },
  {
    prompt: 'What should an effective interview include?',
    options: ['focused questions, active listening, and follow-up prompts', 'only yes-or-no questions', 'no interaction with the respondent', 'predetermined answers that don\'t adapt'],
    answer: 'focused questions, active listening, and follow-up prompts',
    explanation: 'Good interviews gather detailed, relevant information through responsive questioning.',
  },
  {
    prompt: 'How does sequencing help in oral responses?',
    options: ['It signals the order of ideas and helps listeners follow the logic.', 'It confuses listeners deliberately.', 'It eliminates the need for examples.', 'It makes speech shorter only.'],
    answer: 'It signals the order of ideas and helps listeners follow the logic.',
    explanation: 'Clear sequencing (First, Next, Finally) structures information for comprehension.',
  },
  {
    prompt: 'What is a myth in oral traditions?',
    options: ['a story explaining natural phenomena or origins with a cultural purpose', 'always a false or untrue story', 'a short joke', 'a modern invented tale'],
    answer: 'a story explaining natural phenomena or origins with a cultural purpose',
    explanation: 'Myths serve important cultural and explanatory functions in societies.',
  },
  {
    prompt: 'Which technique improves listener comprehension in an oral presentation?',
    options: ['using signposting language and pausing for emphasis', 'speaking monotonously without variation', 'avoiding interaction with the audience', 'rushing through all information'],
    answer: 'using signposting language and pausing for emphasis',
    explanation: 'Delivery techniques guide listeners through your ideas.',
  },
  {
    prompt: 'Why are gesture and expression important in oral literature?',
    options: ['They enhance meaning and engage listeners emotionally.', 'They distract from the message.', 'They are unnecessary in all contexts.', 'They replace the need for words.'],
    answer: 'They enhance meaning and engage listeners emotionally.',
    explanation: 'Non-verbal communication strengthens the impact of oral delivery.',
  },
];

const OralLiteratureNarrative = () => (
  <CapsSubjectTopic
    title="Oral Literature and Narrative Traditions"
    subtitle="Folktales, myths, oral presentation, interview and sequencing skills"
    learnSteps={learnSteps}
    task="gr9-oral-literature-narrative-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default OralLiteratureNarrative;
