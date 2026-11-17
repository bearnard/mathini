import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What artificial intelligence is',
    content: slide(
      <>
        <Rule>Artificial intelligence (AI) is software that does tasks that normally need human intelligence, such as recognising a face, understanding speech or suggesting a decision. It learns patterns from large amounts of data instead of following only fixed instructions.</Rule>
        <KeyTable
          title="What AI is used for"
          head={['Use', 'Example']}
          aria="Uses of artificial intelligence. Speech: a voice assistant that understands a spoken request. Images: a phone that unlocks with your face. Recommendation: a video app that suggests what to watch next. Language: a tool that translates a sentence. Fraud detection: a bank that flags an unusual payment."
          rows={[
            ['Speech', 'A voice assistant'],
            ['Images', 'Unlocking a phone with a face'],
            ['Recommendation', 'A video app suggests the next video'],
            ['Language', 'Translating a sentence'],
            ['Fraud detection', 'A bank flags an unusual payment'],
          ]}
        />
        <Worked
          steps={[
            <>A bank&rsquo;s AI has seen millions of normal payments. It notices a payment from another country at 3 a.m. that does not fit the pattern and flags it.</>,
            <>The AI does not understand money. It finds patterns in the data it was trained on.</>,
          ]}
        />
        <Mistake>Thinking that AI thinks like a person. It matches patterns in data, and it can be wrong with great confidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Advantages, disadvantages and limitations of AI',
    content: slide(
      <>
        <Rule>AI can work fast and without tiring, but it depends on its data and it has limits.</Rule>
        <KeyTable
          title="AI weighed up"
          head={['Kind', 'Points']}
          aria="Advantages, disadvantages and limitations of AI. Advantages: works fast on huge amounts of data, works all day without tiring, and can spot patterns people miss. Disadvantages: some jobs may be lost, personal data is needed and may be misused, and it can be costly to build. Limitations: it is only as good as its training data, it can be biased, it can give wrong answers, and it does not understand meaning or have common sense."
          rows={[
            ['Advantages', 'Fast, tireless, spots patterns'],
            ['Disadvantages', 'Job losses, privacy risk, cost'],
            ['Limitations', 'Depends on data, can be biased or wrong'],
          ]}
        />
        <Worked
          steps={[
            <>If an AI is trained mostly on photos of one group of people, it may work badly for other groups. This is bias in the training data.</>,
            <>A person should check an important AI decision, such as one about a loan or a medical result.</>,
          ]}
        />
        <Mistake>Trusting an AI answer without checking it. AI can produce a wrong answer that sounds right.</Mistake>
      </>,
    ),
  },
  {
    title: 'Virtual, augmented and mixed reality',
    content: slide(
      <>
        <Rule>Virtual reality (VR) puts you inside a computer-made world. Augmented reality (AR) adds digital information on top of the real world you see. Mixed reality (MR) blends the two, so digital objects can react to the real room.</Rule>
        <KeyTable
          title="VR, AR and MR compared"
          head={['Type', 'What you see']}
          aria="VR, AR and MR compared. Virtual reality: a fully computer-made world seen through a headset, for example a flight simulator. Augmented reality: digital information added to the real view, for example a phone app that shows how a chair looks in your room. Mixed reality: digital objects that react to the real surroundings, for example a hologram that sits on a real table and can be walked around."
          rows={[
            ['VR', 'A fully computer-made world, in a headset'],
            ['AR', 'Digital information over the real view'],
            ['MR', 'Digital objects that react to the real room'],
          ]}
        />
        <Worked
          steps={[
            <>VR: a trainee pilot practises in a flight simulator without leaving the ground.</>,
            <>AR: a phone camera shows the name of a star over the night sky. MR: a hologram of an engine sits on a real table, and you can walk around it.</>,
          ]}
        />
        <Mistake>Mixing up AR and VR. In AR you still see the real world. In VR the real world is replaced.</Mistake>
      </>,
    ),
  },
  {
    title: 'Requirements, advantages and limitations of VR, AR and MR',
    content: slide(
      <>
        <Rule>These technologies need special hardware and software, and they have both benefits and limits.</Rule>
        <KeyTable
          title="Hardware, benefits and limits"
          head={['Item', 'Examples']}
          aria="Hardware, benefits and limits of VR, AR and MR. Hardware: a headset with a screen and sensors, hand controllers, a powerful processor and graphics card, and for AR a smartphone camera. Software: 3D content and tracking software. Advantages: safe practice, such as surgery or flying, learning by seeing, and entertainment. Limitations: high cost, motion sickness for some people, short battery life, and the need for good lighting and space."
          rows={[
            ['Hardware', 'Headset, sensors, controllers, strong GPU, phone camera for AR'],
            ['Software', '3D content, motion tracking'],
            ['Advantages', 'Safe practice, learning by seeing, entertainment'],
            ['Limitations', 'Cost, motion sickness, battery, space'],
          ]}
        />
        <Worked
          steps={[
            <>A medical student practises an operation in VR, so no patient is at risk.</>,
            <>A school may find that VR headsets cost too much for a whole class, so it uses AR on phones that learners already have.</>,
          ]}
        />
        <Mistake>Thinking that all of these need an expensive headset. Many AR apps run on an ordinary smartphone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two uses of AI.</>,
          <>Give one limitation of AI.</>,
          <>Which of VR and AR keeps the real world in view?</>,
          <>Give one limitation of VR.</>,
        ]}
        answers={[
          <>Any two of: speech recognition, face recognition, recommendations, translation, fraud detection.</>,
          <>For example: it is only as good as its data, it can be biased or wrong, it does not understand meaning.</>,
          <>AR. It adds information to the real view.</>,
          <>For example: high cost, motion sickness, short battery life, or the need for space.</>,
        ]}
      />,
    ),
  },
];
