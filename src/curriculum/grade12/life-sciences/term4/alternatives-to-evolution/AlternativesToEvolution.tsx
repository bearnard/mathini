'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';

// CAPS Grade 12 Term 4: "Alternatives to evolution: different cultural and religious explanations for the origin and development of life on Earth:
// Creationism; Intelligent Design; Literalism; Theistic evolution", with "research and discussion to share information about different explanations".
// SENSITIVE (docs/notes/g12-life-sciences-doubts.md): every idea is described as what people hold; no belief is ranked. The questions test what each
// term MEANS, never which is right.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Different explanations of where life came from',
    content: slide(
      <>
        <Rule>People have many explanations for the origin and development of life. Life Sciences teaches evolution by natural selection, a scientific theory built on evidence that can be tested, such as fossils and DNA. CAPS also asks you to know other cultural and religious explanations and to discuss them respectfully.</Rule>
        <InfoTable
          cols={[{ title: 'Explanation', w: 36 }, { title: 'What it is based on', w: 64 }]}
          rows={[
            ['Evolution by\nnatural selection', 'A scientific theory: evidence\nthat can be tested, such as\nfossils and DNA'],
            ['Cultural and\nreligious\nexplanations', 'Belief, tradition and faith,\nheld by communities and\nreligions'],
          ]}
          aria="A table with two kinds of explanation. Evolution by natural selection is a scientific theory based on evidence that can be tested, such as fossils and DNA. Cultural and religious explanations are based on belief, tradition and faith held by communities and religions."
        />
        <Worked
          title="Why learn about them?"
          steps={[
            <>Learners hold different beliefs, and South Africa has many cultures and faiths.</>,
            <>To discuss them you need to say accurately what each one holds.</>,
            <>An example of a cultural explanation: in a Zulu tradition, uNkulunkulu came out of a bed of reeds, the uthlanga, and the first people followed.</>,
          ]}
        />
        <Mistake>Mixing up a scientific theory with a belief. A scientific theory is tested against evidence. The alternatives are views people hold, and an exam question on them asks what they mean, not which is right.</Mistake>
      </>,
    ),
  },
  {
    title: 'Creationism and Literalism',
    content: slide(
      <>
        <Rule>Creationism is the belief that life was created by a creator, such as God, in a special act. Literalism is reading a holy text, such as the creation story in Genesis, as an exact account of what happened, so that its days and events are taken literally.</Rule>
        <InfoTable
          cols={[{ title: 'Term', w: 26 }, { title: 'What it holds', w: 74 }]}
          rows={[
            ['Creationism', 'Life was created by a creator,\nsuch as God, not by evolution'],
            ['Literalism', 'A holy text, such as Genesis,\nis read as an exact account\nof events'],
          ]}
          aria="A table. Creationism: life was created by a creator, such as God, rather than by evolution. Literalism: a holy text, such as the Genesis creation story, is read as an exact account of events."
        />
        <Worked
          title="How to describe them in an answer"
          steps={[
            <>Use the word &quot;belief&quot;: creationists believe that life was created by a creator.</>,
            <>Say what the text is: literalists read the creation story in their holy text word for word.</>,
            <>Do not argue that one is right or wrong: define each term accurately.</>,
          ]}
        />
        <Mistake>Using the two words as if they mean the same. Creationism says what is believed about the origin of life. Literalism describes how a text is read.</Mistake>
      </>,
    ),
  },
  {
    title: 'Intelligent Design and Theistic evolution',
    content: slide(
      <>
        <Rule>Intelligent Design claims that some complex features of living things, such as the eye, point to an intelligent designer. Theistic evolution is the belief that God used evolution as the way of bringing about life, so it accepts both the scientific evidence for evolution and belief in a creator.</Rule>
        <InfoTable
          cols={[{ title: 'Term', w: 28 }, { title: 'What it holds', w: 72 }]}
          rows={[
            ['Intelligent\nDesign', 'Some complex features of life\npoint to an intelligent designer'],
            ['Theistic\nevolution', 'God used evolution to bring\nabout life; it accepts the\nevidence for evolution'],
          ]}
          aria="A table. Intelligent Design: some complex features of life point to an intelligent designer. Theistic evolution: God used evolution to bring about life, and it accepts the evidence for evolution."
        />
        <Worked
          title="Comparing the four terms"
          steps={[
            <>Creationism and Intelligent Design both say a creator or designer is behind life.</>,
            <>Intelligent Design focuses on complex features. It does not name the designer.</>,
            <>Theistic evolution is the only one of the four that accepts evolution as the way life developed.</>,
          ]}
        />
        <Mistake>Saying that Theistic evolution rejects evolution. It accepts evolution and adds the belief that God is behind it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What does Creationism hold?</>,
            <>Which of the four terms accepts evolution?</>,
            <>What does Intelligent Design say about complex features such as the eye?</>,
            <>What does a literalist do with a creation story in a holy text?</>,
          ]}
          answers={[
            <>That life was <strong>created by a creator</strong>, such as God.</>,
            <><strong>Theistic evolution</strong>: it accepts evolution and believes God used it.</>,
            <>That they <strong>point to an intelligent designer</strong>.</>,
            <>Reads it as an <strong>exact account</strong> of what happened.</>,
          ]}
        />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  { prompt: 'What does Creationism hold?', options: ['That life was created by a creator, such as God', 'That species change by natural selection', 'That life began from non-living matter', 'That fossils show gradual change'], answer: 'That life was created by a creator, such as God', explanation: 'Creationism is the belief that life was created by a creator such as God.' },
  { prompt: 'What does Intelligent Design claim?', options: ['That complex features of life point to an intelligent designer', 'That the Earth is only a few thousand years old', 'That species never change over time', 'That all organisms share one ancestor'], answer: 'That complex features of life point to an intelligent designer', explanation: 'Intelligent Design claims that some complex features of living things point to an intelligent designer.' },
  { prompt: 'What is Literalism?', options: ['Reading a holy text as an exact account of events', 'Studying fossils to date the Earth', 'Comparing the DNA of different species', 'Choosing the strongest individuals to breed'], answer: 'Reading a holy text as an exact account of events', explanation: 'Literalists read a holy text, such as the creation story in Genesis, as an exact account of what happened.' },
  { prompt: 'What is Theistic evolution?', options: ['The belief that God used evolution to bring about life', 'The belief that evolution has never taken place', 'The idea that a designer made each species separately', 'The study of how fossils are dated'], answer: 'The belief that God used evolution to bring about life', explanation: 'Theistic evolution accepts the evidence for evolution and the belief that God used it.' },
  { prompt: 'Which one of these four explanations accepts evolution as the way life developed?', options: ['Creationism', 'Literalism', 'Theistic evolution', 'Intelligent Design'], answer: 'Theistic evolution', explanation: 'Theistic evolution accepts evolution and adds belief in a creator.' },
  { prompt: 'Which view reads the creation story in Genesis as an exact account of events?', options: ['Theistic evolution', 'Natural selection', 'Punctuated equilibrium', 'Literalism'], answer: 'Literalism', explanation: 'Literalism reads a holy text word for word as an account of what happened.' },
  { prompt: 'Which explanation says that a feature such as the eye is too complex to have a purely natural origin and points to a designer?', options: ['Natural selection', 'Intelligent Design', 'Theistic evolution', 'Punctuated equilibrium'], answer: 'Intelligent Design', explanation: 'This is what Intelligent Design claims about complex features of living things.' },
  { prompt: 'How is evolution by natural selection different from the other explanations in this topic?', options: ['It is a scientific theory built on testable evidence', 'It is a belief that learners are not allowed to discuss', 'It is a story handed down by the elders of a community', 'It is a teaching that belongs to one religion alone'], answer: 'It is a scientific theory built on testable evidence', explanation: 'Evolution by natural selection is a scientific theory, tested against evidence such as fossils and DNA.' },
  { prompt: 'Who proposed evolution by natural selection?', options: ['Charles Darwin', 'Gregor Mendel', 'Raymond Dart', 'Robert Broom'], answer: 'Charles Darwin', explanation: 'Charles Darwin proposed evolution by natural selection.' },
  { prompt: 'What do Creationism and Intelligent Design have in common?', options: ['They were proposed by Charles Darwin', 'They are based on fossil dating', 'They are tested with laboratory experiments', 'They start from a creator or designer behind life'], answer: 'They start from a creator or designer behind life', explanation: 'Both explain life by a creator or an intelligent designer.' },
  { prompt: 'A learner says: "I accept the evidence that species evolved, and I also believe that God is behind it." Which term fits this view?', options: ['Creationism', 'Literalism', 'Intelligent Design', 'Theistic evolution'], answer: 'Theistic evolution', explanation: 'Accepting evolution while believing that God is behind it is Theistic evolution.' },
  { prompt: 'Which explanation points to a designer behind complex features of life but does not say who the designer is?', options: ['Creationism', 'Intelligent Design', 'Literalism', 'Theistic evolution'], answer: 'Intelligent Design', explanation: 'Intelligent Design focuses on complex features, such as the eye, and does not name the designer.' },
  { prompt: 'Which of these is an example of a cultural explanation of where life came from?', options: ['A traditional creation story told by a community', 'A fossil skull found at Sterkfontein in a cave', 'A DNA profile read from a gel in a laboratory', 'An experiment on natural selection in a lab'], answer: 'A traditional creation story told by a community', explanation: 'Communities and cultures have creation stories that explain the origin of life and people.' },
  { prompt: 'In a Zulu tradition, from what did uNkulunkulu come?', options: ['The waters of the sea', 'A cave in the mountains', 'A bed of reeds (uthlanga)', 'A tall mountain'], answer: 'A bed of reeds (uthlanga)', explanation: 'In this Zulu tradition uNkulunkulu came from the uthlanga, a bed of reeds.' },
];

const AlternativesToEvolution = () => (
  <CapsSubjectTopic
    title="Alternatives to Evolution"
    subtitle="Creationism, Intelligent Design, Literalism and Theistic evolution as views people hold"
    learnSteps={learnSteps}
    task="gr12-alternatives-to-evolution-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default AlternativesToEvolution;
