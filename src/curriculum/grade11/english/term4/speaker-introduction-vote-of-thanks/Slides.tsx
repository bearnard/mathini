import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Introducing a speaker",
    content: slide(
      <>
        <Rule>When you introduce a speaker you prepare the audience to listen. You welcome everyone with formal language, give relevant background about the speaker and explain why they were invited. Keep it brief: the audience has come to hear the speaker, not you. The task takes 4 to 5 minutes.</Rule>
        <KeyTable
          title="What an introduction contains"
          head={["Part", "What to include"]}
          aria="What an introduction contains. Welcome: Formal words to greet the audience. Research: Ask the speaker what to use from their CV. Background: Schooling, qualifications and work history. Link to the topic: Why this speaker was invited. Name last: Announce the name at the end, clearly."
          rows={[["Welcome", "Formal words to greet the audience"], ["Research", "Ask the speaker what to use from their CV"], ["Background", "Schooling, qualifications and work history"], ["Link to the topic", "Why this speaker was invited"], ["Name last", "Announce the name at the end, clearly"]]}
        />
        <Worked
          steps={[
            <>You ask the speaker which parts of her CV she would like used, and then link her work as an engineer to the topic of the evening.</>,
            <>You end with her name, spoken slowly: Please welcome Ms Thandi Mokoena.</>,
          ]}
        />
        <Mistake>Trying to be funny. Keep the language formal and respectful.</Mistake>
      </>,
    ),
  },
  {
    title: "Planning the introduction",
    content: slide(
      <>
        <Rule>You plan the introduction like a short speech. Collect facts from the speaker, choose the most relevant ones, put them in order and practise saying the name correctly. Mention hobbies only if they fit the context of the talk.</Rule>
        <KeyTable
          title="Planning steps"
          head={["Step", "Detail"]}
          aria="Planning steps. Contact the speaker: Find out what they want mentioned. Choose facts: Select the most relevant achievements. Order the points: Background first, link to the topic next, name last. Check pronunciation: Say the name correctly. Time it: Keep it within 4 to 5 minutes."
          rows={[["Contact the speaker", "Find out what they want mentioned"], ["Choose facts", "Select the most relevant achievements"], ["Order the points", "Background first, link to the topic next, name last"], ["Check pronunciation", "Say the name correctly"], ["Time it", "Keep it within 4 to 5 minutes"]]}
        />
        <Worked
          steps={[
            <>You choose two qualifications and one achievement that relate to the theme of a careers evening.</>,
            <>You practise the speaker’s name three times before the event.</>,
          ]}
        />
        <Mistake>Giving a long life story. Choose the facts that matter to this audience and this talk.</Mistake>
      </>,
    ),
  },
  {
    title: "The vote of thanks",
    content: slide(
      <>
        <Rule>After the talk, you offer a vote of thanks. You listen carefully so that you can point out highlights, name something new that you learnt and thank the speaker on behalf of the audience. Keep it short and to the point, and sound sincere.</Rule>
        <KeyTable
          title="A vote of thanks"
          head={["Part", "What to do"]}
          aria="A vote of thanks. Listen: Note the highlights while the speaker talks. Be specific: Mention a point you found valuable. Thank: Thank the speaker for the time and effort. Speak for the audience: Say we, not only I. Keep it short: Around 4 to 5 minutes at most."
          rows={[["Listen", "Note the highlights while the speaker talks"], ["Be specific", "Mention a point you found valuable"], ["Thank", "Thank the speaker for the time and effort"], ["Speak for the audience", "Say we, not only I"], ["Keep it short", "Around 4 to 5 minutes at most"]]}
        />
        <Worked
          steps={[
            <>The speaker explained how to save money from a small income. You thank her for the idea of a monthly budget, which many in the audience had not heard.</>,
            <>You end with a sincere thank-you and invite applause.</>,
          ]}
        />
        <Mistake>Saying only thanks for a nice talk. Mention at least one specific idea.</Mistake>
      </>,
    ),
  },
  {
    title: "Putting it together",
    content: slide(
      <>
        <Rule>Both tasks use formal language and good delivery. Speak slowly and clearly, face the audience and the speaker, and respect the occasion. Practise with a timer, so that you are ready for the 4 to 5 minute limit, and prepare a few short notes in case you lose your place.</Rule>
        <KeyTable
          title="Two tasks side by side"
          head={["Feature", "Introducing a speaker"]}
          aria="Two tasks side by side. When: Before the talk. Main aim: Prepare the audience to listen. Content: Background and relevance. Ends with: The speaker’s name. Language: Formal, respectful, brief."
          rows={[["When", "Before the talk"], ["Main aim", "Prepare the audience to listen"], ["Content", "Background and relevance"], ["Ends with", "The speaker’s name"], ["Language", "Formal, respectful, brief"]]}
        />
        <Worked
          steps={[
            <>You prepare note cards for each task and practise them with a timer.</>,
            <>You smile, face the speaker and thank them warmly.</>,
          ]}
        />
        <Mistake>Using the same words for both tasks. An introduction looks forward; a vote of thanks looks back at the talk.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>When do you announce the speaker’s name?</>,
          <>Where do you find facts for an introduction?</>,
          <>What should a vote of thanks include?</>,
          <>How long are these tasks?</>,
        ]}
        answers={[
          <>At the end of the introduction.</>,
          <>From the speaker and their CV.</>,
          <>A specific highlight of the talk.</>,
          <>About 4 to 5 minutes.</>,
        ]}
      />,
    ),
  },
];
