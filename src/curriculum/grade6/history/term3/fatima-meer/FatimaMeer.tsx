import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 3: Fatima Meer (born Durban 1928, died 2010; activist, writer, banned and detained). Facts to confirm: docs/notes/g6-history-t3-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Who was Fatima Meer?',
    content: slide(
      <>
        <Rule>Fatima Meer was born in Durban in {h.FATIMA_MEER.born} and died in {h.FATIMA_MEER.died}. She was a teacher at a university, a writer and an activist. An activist is a person who works for change. She spoke up against apartheid and for equal rights for all people.</Rule>
        <FlowSteps
          aria="Fatima Meer's life. Born in Durban in 1928, she became a university teacher and writer, worked against apartheid, and died in 2010."
          steps={[
            { label: `${h.FATIMA_MEER.born}: born in Durban` },
            { label: 'University teacher and writer' },
            { label: 'Worked against apartheid' },
            { label: `${h.FATIMA_MEER.died}: died` },
          ]}
        />
        <Worked
          title="How long she lived"
          steps={[
            <>She was born in {h.FATIMA_MEER.born} and died in {h.FATIMA_MEER.died}.</>,
            <>{h.FATIMA_MEER.died} − {h.FATIMA_MEER.born} = {h.age(h.FATIMA_MEER)} years.</>,
            <>Much of her adult life was spent working for justice.</>,
          ]}
        />
        <Mistake>Thinking that she was only a writer. She taught, wrote and also worked with communities against apartheid.</Mistake>
      </>,
    ),
  },
  {
    title: 'Working against apartheid',
    content: slide(
      <>
        <Rule>Under apartheid, people were treated differently because of their race. Fatima Meer spoke and wrote against these unfair laws. She helped to build organisations for women and for communities, and she supported people who were affected by apartheid.</Rule>
        <InfoTable
          cols={[{ title: 'What she did', w: 50 }, { title: 'Why it mattered', w: 50 }]}
          rows={[
            ['Spoke against apartheid', 'it was unfair to people'],
            ['Wrote books and articles', 'people could learn the facts'],
            ['Helped to organise\ncommunities', 'people could act together'],
            ['Supported women', 'women had a voice'],
          ]}
          aria="A table of what Fatima Meer did and why it mattered. She spoke against apartheid because it was unfair to people. She wrote books and articles so that people could learn the facts. She helped to organise communities so that people could act together. She supported women so that women had a voice."
        />
        <Worked
          title="Speaking up has a price"
          steps={[
            <>The apartheid government did not like people who spoke against it.</>,
            <>Fatima Meer was banned and detained, which means that she was not free to speak, to meet people or to move as she wished.</>,
            <>She kept working for a fair South Africa.</>,
          ]}
        />
        <Mistake>Thinking that it was safe to speak against apartheid. Many activists were banned, detained or put in danger.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why we remember her',
    content: slide(
      <>
        <Rule>Fatima Meer is remembered as a person who used her voice, her pen and her work in communities to help to bring about a democracy. She wrote about the lives of leaders, including a book about Nelson Mandela. Her life shows that ordinary people can work for change in many ways.</Rule>
        <InfoTable
          cols={[{ title: 'Her tools', w: 40 }, { title: 'The result', w: 60 }]}
          rows={[
            ['Her voice', 'people heard the demand for rights'],
            ['Her pen', 'the story was written down'],
            ['Her teaching', 'students learned about justice'],
            ['Her community work', 'people were helped to act'],
          ]}
          aria="A table of her tools and the results. Her voice meant that people heard the demand for rights. Her pen meant that the story was written down. Her teaching meant that students learned about justice. Her community work meant that people were helped to act."
        />
        <Worked
          title="Learn from her life"
          steps={[
            <>You do not have to be a president to work for change.</>,
            <>A teacher, a writer or a community worker can make a difference too.</>,
            <>Democracy is built by many people who care about fairness.</>,
          ]}
        />
        <Mistake>Thinking that only leaders in government changed South Africa. Many people, like Fatima Meer, worked for change in their own ways.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which city was Fatima Meer born?</>,
          <>What is an activist?</>,
          <>What happened to her because she spoke against apartheid?</>,
          <>How many years did she live (1928 to 2010)?</>,
        ]}
        answers={[
          <><strong>Durban</strong>.</>,
          <>A person who <strong>works for change</strong>.</>,
          <>She was <strong>banned and detained</strong>.</>,
          <>2010 − 1928 = <strong>{h.age(h.FATIMA_MEER)} years</strong>.</>,
        ]}
      />,
    ),
  },
];

// Literal bank (the bank test recomputes every year and span independently).
export const bank: HisItem[] = [
  { prompt: "Fatima Meer's birthplace is which city?", options: ["Cape Town", "Durban", "Bloemfontein", "Polokwane"], answer: "Durban", explanation: "She was born in Durban in 1928." },
  { prompt: "What was the year of birth of Fatima Meer?", options: ["1828", "1958", "1988", "1928"], answer: "1928", explanation: "Fatima Meer was born in 1928." },
  { prompt: "In which year did Fatima Meer die?", options: ["2010", "1994", "2000", "2019"], answer: "2010", explanation: "She died in 2010." },
  { prompt: "How many years did Fatima Meer live?", options: ["28 years", "92 years", "82 years", "120 years"], answer: "82 years", explanation: "2010 − 1928 = 82 years." },
  { prompt: "What is an activist?", options: ["A person who sells goods", "A person who works for change", "A person who builds houses", "A person who flies planes"], answer: "A person who works for change", explanation: "Activists work for change, such as fair laws." },
  { prompt: "What did Fatima Meer work against?", options: ["Democracy", "Free elections", "The Constitution", "Apartheid"], answer: "Apartheid", explanation: "She worked against unfair apartheid laws." },
  { prompt: "Which job did Fatima Meer do?", options: ["University teacher and writer", "Sailor and ship builder", "Soldier and army general", "Farmer and cattle trader"], answer: "University teacher and writer", explanation: "She taught at a university and she wrote books." },
  { prompt: "Why were apartheid laws unfair?", options: ["Everyone had to pay the same tax", "All children went to one school", "People were treated differently by race", "Every adult could vote freely"], answer: "People were treated differently by race", explanation: "Apartheid laws divided people by race and gave them different rights." },
  { prompt: "What does it mean to be banned?", options: ["You win a prize for your work", "You are not free to speak or to meet", "You are given a very high job", "You travel to other countries"], answer: "You are not free to speak or to meet", explanation: "Banned people had their freedom limited by the government." },
  { prompt: "Why was it dangerous to speak against apartheid?", options: ["The government gave out some prizes", "Nobody listened to the speakers", "The speakers had to pay for it", "The government could ban or detain people"], answer: "The government could ban or detain people", explanation: "Activists were banned or detained." },
  { prompt: "Which of these did Fatima Meer help with?", options: ["Organising women and communities", "Building ships for the VOC", "Making maps for sailors", "Printing coins for a king"], answer: "Organising women and communities", explanation: "She helped people to act together." },
  { prompt: "About whom did Fatima Meer write a book?", options: ["Marco Polo", "Vasco da Gama", "Nelson Mandela", "Leonardo da Vinci"], answer: "Nelson Mandela", explanation: "She wrote about the lives of leaders, including a book about Nelson Mandela." },
  { prompt: "Why do we remember Fatima Meer?", options: ["She built the first railway", "She worked for a fair South Africa", "She sailed round the world", "She invented the telephone"], answer: "She worked for a fair South Africa", explanation: "She used her voice and her pen for fairness." },
  { prompt: "What does her life show us?", options: ["Only leaders can change a country", "Change is never possible", "Writers cannot help a country", "Ordinary people can work for change"], answer: "Ordinary people can work for change", explanation: "Many people work for democracy in their own ways." },
];

const FatimaMeer = () => (
  <HisTopic
    title="Fatima Meer"
    subtitle="A Durban teacher, writer and activist who worked against apartheid"
    learnSteps={learnSteps}
    task="gr6-fatima-meer-t3"
    bank={bank}
  />
);

export default FatimaMeer;
