import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand oral traditions and their features',
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
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Jack and the Beanstalk\" — traditional tale"}
        text={"Fee-fi-fo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I'll grind his bones to make my bread."}
        annotations={[
          { start: 0, end: 13, device: "alliteration", note: "The repeated opening sounds make the giant’s chant memorable and oral in style." },
          { start: 17, end: 49, device: "imagery", note: "The line creates a vivid and frightening sensory image." },
          { start: 79, end: 116, device: "hyperbole", note: "The giant’s threat is wildly exaggerated to heighten fear and drama." },
          { start: 51, end: 77, device: "tone", note: "The balanced phrase strengthens the chant’s cold, threatening tone." },
        ]}
      />
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
    options: ['repetition and set phrases help listeners remember', 'it needs a written text to be passed on', 'it avoids patterns, as these bore the audience', 'it is always funny, as it is made to entertain'],
    answer: 'repetition and set phrases help listeners remember',
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
    options: ['focused questions, careful listening and follow-up prompts', 'only yes-or-no questions that are fast to answer', 'a list of questions read out with no interaction', 'answers prepared that do not change with the replies'],
    answer: 'focused questions, careful listening and follow-up prompts',
    explanation: 'Good interviews gather detailed, relevant information through responsive questioning.',
  },
  {
    prompt: 'How does sequencing help in oral responses?',
    options: ['It shows the order of ideas and helps listeners follow.', 'It confuses listeners so that they pay attention.', 'It removes the need to give any examples.', 'It makes the talk shorter and more exciting.'],
    answer: 'It shows the order of ideas and helps listeners follow.',
    explanation: 'Clear sequencing (First, Next, Finally) structures information for comprehension.',
  },
  {
    prompt: 'What is a myth in oral traditions?',
    options: ['a story that explains natural events or origins', 'any story that is untrue or has been made up', 'a short joke that is told at a gathering of friends', "a modern tale that is invented for a children's book"],
    answer: 'a story that explains natural events or origins',
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
    options: ['They add meaning and engage listeners emotionally.', 'They distract listeners from the message of the story.', 'They matter only in written forms of literature.', 'They take the place of the words of a story.'],
    answer: 'They add meaning and engage listeners emotionally.',
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
