import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PROJECT as P } from '../../_shared/facts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is oral history?',
    content: (
      <div className="space-y-4">
        <Rule>Oral history is history from the spoken memories of people who lived through events. It uses interviews as a source, and it is a primary source, because it comes from a person who was there.</Rule>
        <Worked
          title="Strengths and limits"
          steps={[
            <><strong>Strength:</strong> it records experiences that are not in books, especially of people whose stories were not written down.</>,
            <><strong>Limit:</strong> memories can fade or change over the years, and a person remembers from their own point of view.</>,
            <>A historian therefore compares what people say with other sources, such as documents and books.</>,
          ]}
        />
        <Mistake>Treating an interview as the whole truth. It is one person&rsquo;s memory, and it must be checked against other sources.</Mistake>
      </div>
    ),
  },
  {
    title: 'What the project asks',
    content: (
      <div className="space-y-4">
        <Rule>The CAPS project has a written research part and an oral history part. The suggested topic is how an apartheid law affected people&rsquo;s lives and how they responded.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Research:</strong> find the details of an apartheid law. Write at least {P.researchWords} words and add {P.illustrations} illustrations with captions.</li>
          <li><strong>Interview:</strong> choose a person who was affected by that law and responded to it. Write about {P.questions} questions before the interview.</li>
          <li><strong>Story:</strong> write a coherent story of {P.storyWords} words about the person you interviewed.</li>
          <li><strong>Hand in:</strong> your questions and answers, the story, and your own reflections on doing the project.</li>
        </ul>
        <Mistake>Handing in only the story. The questions, the answers and your reflections are also part of the project.</Mistake>
      </div>
    ),
  },
  {
    title: 'Asking good questions',
    content: (
      <div className="space-y-4">
        <Rule>Plan about {P.questions} questions before the interview. Open questions, which start with words such as how, why or what, draw out longer answers. Closed questions can be answered with yes or no.</Rule>
        <Worked
          title="Closed and open"
          steps={[
            <><strong>Closed:</strong> &ldquo;Did you have to move?&rdquo; The answer may be only yes or no.</>,
            <><strong>Open:</strong> &ldquo;How did the move change your family&rsquo;s life?&rdquo; The person can tell the story.</>,
            <>Start with easy questions about the person, and ask about feelings only if the person is willing to talk about them.</>,
          ]}
        />
        <Mistake>Asking only closed questions. The answers are short and tell you little about the person&rsquo;s experience.</Mistake>
      </div>
    ),
  },
  {
    title: 'Doing the interview with care',
    content: (
      <div className="space-y-4">
        <Rule>The person you interview is giving you a gift of their memories. Treat them with respect.</Rule>
        <SourceBox label="Source D" provenance="An original description written for this lesson, in the style of a learner's reflection.">
          <p>&ldquo;I was nervous at first, but my grandmother liked telling me about her old street. I took notes, and she told me when to stop writing.&rdquo;</p>
        </SourceBox>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Ask permission and explain what the interview is for.</li>
          <li>Listen carefully, and let the person finish. Write notes instead of typing out a full recording, which takes a long time.</li>
          <li>Let the person stop or skip a question that is painful.</li>
          <li>Thank the person, and show them what you wrote if they ask.</li>
        </ul>
        <Mistake>Pushing for details that the person does not want to give. The wishes of the person come first.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is oral history?</>,
          <>How many words must the story about the person be, and how many questions should you prepare?</>,
          <>Give an example of an open question.</>,
          <>Name one way to treat the person you interview with care.</>,
        ]}
        answers={[
          <>History from the spoken memories of people who lived through events.</>,
          <>About {P.storyWords} words, and about {P.questions} questions.</>,
          <>&ldquo;How did the move change your family&rsquo;s life?&rdquo;</>,
          <>Ask permission, listen, let them skip a painful question, and thank them.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is oral history?',
    options: ['History learnt only from written documents', 'History taken from old photographs', 'History from the spoken memories of people', 'History copied from a school textbook'],
    answer: 'History from the spoken memories of people',
    explanation: 'Oral history uses interviews with people who lived through events.',
  },
  {
    prompt: 'Why is an interview with a person who lived through an event a primary source?',
    options: ['It was written down many years later', 'It was copied from a textbook', 'It comes from someone who was there', 'It comes from a person who was not there'],
    answer: 'It comes from someone who was there',
    explanation: 'A primary source comes from a person who experienced the events.',
  },
  {
    prompt: 'What is one strength of oral history?',
    options: ["It gives a perfect record of events", "It needs no other sources of any kind to check it", "It records life stories absent from books", "It is free of the view of a person"],
    answer: "It records life stories absent from books",
    explanation: 'Interviews can capture the stories of people whose experiences were not written down.',
  },
  {
    prompt: 'What is one limit of oral history?',
    options: ["People cannot speak about the past", "Memories can fade or change", "Interviews cannot be written down", "Old people have no memories left"],
    answer: "Memories can fade or change",
    explanation: 'A historian checks what a person remembers against other sources.',
  },
  {
    prompt: 'What does the CAPS project suggest you research?',
    options: ["A recent election in a distant land", "An apartheid law and its effects", "The life of a famous sports player", "The history of your favourite shop"],
    answer: "An apartheid law and its effects",
    explanation: 'The suggested topic is how an apartheid law affected people\'s lives and how they responded.',
  },
  {
    prompt: 'What is the minimum length of the written research?',
    options: ['100 words', '600 words', '1 000 words', '300 words'],
    answer: '300 words',
    explanation: 'The research must contain at least 300 words and two illustrations with captions.',
  },
  {
    prompt: 'How many illustrations must the research include?',
    options: ['1', '5', '10', '2'],
    answer: '2',
    explanation: 'Two illustrations, such as maps, drawings or photographs, with captions.',
  },
  {
    prompt: 'About how many questions should you write before the interview?',
    options: ['About 3', 'About 30', 'About 100', 'About 10'],
    answer: 'About 10',
    explanation: 'The CAPS suggests a set of about ten questions.',
  },
  {
    prompt: 'How long should the story about the person you interviewed be?',
    options: ['600 words', '300 words', '60 words', '6 000 words'],
    answer: '600 words',
    explanation: 'The story must be coherent and about 600 words long.',
  },
  {
    prompt: 'Which items do you hand in with the project?',
    options: ["The story of the person written up alone", "Questions, answers, story and reflections", "A recording of the interview made alone", "The research on the law that you did alone"],
    answer: "Questions, answers, story and reflections",
    explanation: 'The CAPS lists the questions and answers, the story and your own reflections.',
  },
  {
    prompt: 'Which of these is an open question?',
    options: ["How did the move change your life?", "Did you move in the year 1955 or not?", "Was your house a large one then?", "Do you remember the date of it well?"],
    answer: "How did the move change your life?",
    explanation: 'An open question starts with how or why and invites a longer answer.',
  },
  {
    prompt: 'Which of these is a closed question?',
    options: ['How did you feel about it?', 'Why did your family leave?', 'Did you have to move?', 'What do you remember best?'],
    answer: 'Did you have to move?',
    explanation: 'A closed question can be answered with yes or no.',
  },
  {
    prompt: 'What should you do first when you want to interview someone?',
    options: ["Start recording without saying so", "Ask permission and explain why", "Ask the hardest question at the start", "Decide what the person must say"],
    answer: "Ask permission and explain why",
    explanation: 'The person has the right to know what the interview is for and to agree to it.',
  },
  {
    prompt: 'The person finds a question painful. What should you do?',
    options: ['Let them skip it', 'Ask the question again', 'Tell them they must answer', 'Write down what you think'],
    answer: 'Let them skip it',
    explanation: 'The wishes of the person come first. They may stop or skip a question.',
  },
];
