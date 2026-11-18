import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The structure of a speech",
    content: slide(
      <>
        <Rule>A speech is written to be spoken to an audience. It has an opening, a body and a closing. The opening greets the audience and catches their attention with a question, a fact or a short story. The body gives your main points, each with an example or a fact. The closing sums up and leaves the audience with a final thought or a call to action. Thank the audience at the end.</Rule>
        <KeyTable
          title={"Parts of a speech"}
          head={["Part", "What it does"]}
          aria={"Parts of a speech. opening: greets and catches attention. body: main points with examples. closing: sums up and gives a final thought. thanks: thanks the audience."}
          rows={[["opening", "greets and catches attention"], ["body", "main points with examples"], ["closing", "sums up and gives a final thought"], ["thanks", "thanks the audience"]]}
        />
        <Worked
          title={"Plan a speech"}
          steps={[
            <>Opening: Good morning, everyone. Who has ever forgotten their lunch?</>,
            <>Body: three reasons why a lunch list helps. Closing: Let us all check our bags tomorrow.</>,
          ]}
        />
        <Mistake>Starting with a long list of facts. Catch the audience first.</Mistake>
      </>,
    ),
  },
  {
    title: "Audience, purpose and register",
    content: slide(
      <>
        <Rule>Think about your audience and your purpose before you write. Are you speaking to learners, parents or teachers? Do you want to inform, persuade or entertain? Choose a register to suit them. A speech to the whole school is formal but friendly. Use words that your audience will understand and keep the sentences short enough to say in one breath.</Rule>
        <KeyTable
          title={"Audience and purpose"}
          head={["Question", "Why it matters"]}
          aria={"Audience and purpose. who is listening?: the words and tone you choose. what is the purpose?: inform, persuade or entertain. how long can you speak?: the number of points. which register?: formal and friendly for a school speech."}
          rows={[["who is listening?", "the words and tone you choose"], ["what is the purpose?", "inform, persuade or entertain"], ["how long can you speak?", "the number of points"], ["which register?", "formal and friendly for a school speech"]]}
        />
        <Worked
          title={"Match the words to the audience"}
          steps={[
            <>To learners: Let us keep our school clean.</>,
            <>To the principal: We request your support for a clean school campaign.</>,
          ]}
        />
        <Mistake>Using words that the audience does not know. Choose clear, everyday words.</Mistake>
      </>,
    ),
  },
  {
    title: "Techniques that make a speech powerful",
    content: slide(
      <>
        <Rule>Speakers use techniques to hold attention. A rhetorical question makes the audience think: Who does not want a clean school? Repetition stresses an idea: We can, we must, we will. The rule of three groups ideas in threes: clean, safe and happy. A personal story or a surprising fact makes the speech memorable. Do not overuse any technique.</Rule>
        <KeyTable
          title={"Speech techniques"}
          head={["Technique", "Example"]}
          aria={"Speech techniques. rhetorical question: Who does not want a clean school?. repetition: We can. We must. We will.. rule of three: a clean, safe and happy school. personal story: Last week I found a bag in the bin.."}
          rows={[["rhetorical question", "Who does not want a clean school?"], ["repetition", "We can. We must. We will."], ["rule of three", "a clean, safe and happy school"], ["personal story", "Last week I found a bag in the bin."]]}
        />
        <Worked
          title={"Use a technique"}
          steps={[
            <>Plain: We should look after our school.</>,
            <>With the rule of three: We should keep our school clean, safe and happy.</>,
          ]}
        />
        <Mistake>Using every technique in one speech. Choose a few that suit your message.</Mistake>
      </>,
    ),
  },
  {
    title: "Preparing and delivering a speech",
    content: slide(
      <>
        <Rule>Follow the writing process: plan, draft, revise and edit. Then practise aloud. Speak clearly and not too fast, use your voice to show feeling, look at your audience, and stand tall. Use cue cards with key words, not the whole text. Practise until you know your speech well enough to speak without reading every word.</Rule>
        <KeyTable
          title={"Delivery"}
          head={["Skill", "What to do"]}
          aria={"Delivery. voice: clear, with changes of pace and volume. eye contact: look at the audience. posture: stand tall and still. cue cards: key words, not the whole speech."}
          rows={[["voice", "clear, with changes of pace and volume"], ["eye contact", "look at the audience"], ["posture", "stand tall and still"], ["cue cards", "key words, not the whole speech"]]}
        />
        <Worked
          title={"Practise"}
          steps={[
            <>Say the opening aloud three times.</>,
            <>Time the speech and cut a point if it is too long.</>,
          ]}
        />
        <Mistake>Reading the whole speech from the page. Use cue cards and look at your audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What are the three main parts of a speech?</>,
          <>What does a rhetorical question do?</>,
          <>What should you use instead of the whole text when you speak?</>,
          <>Whom should you think about before you write?</>,
        ]}
        answers={[
          <>The opening, the body and the closing.</>,
          <>It makes the audience think.</>,
          <>Cue cards with key words.</>,
          <>Your audience.</>,
        ]}
      />,
    ),
  },
];
