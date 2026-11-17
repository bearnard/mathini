import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What artificial intelligence is",
    content: slide(
      <>
        <Rule>Artificial intelligence (AI) is software that learns from data and uses what it learned to make predictions or decisions. It is made of code and is trained on large amounts of data. It can help people to find information and make decisions.</Rule>
        <KeyTable
          title="AI in everyday use"
          head={["Use", "Example"]}
          aria="AI in everyday use. Search and discovery: A search engine ranks pages for you. Recommendations: A video app suggests what to watch. Voice and images: A phone unlocks with your face or obeys your voice. Translation: Text is translated from one language to another."
          rows={[["Search and discovery", "A search engine ranks pages for you"], ["Recommendations", "A video app suggests what to watch"], ["Voice and images", "A phone unlocks with your face or obeys your voice"], ["Translation", "Text is translated from one language to another"]]}
        />
        <Worked
          steps={[
            <>A music app notes the songs you play and suggests similar ones. It learned a pattern from data.</>,
            <>AI can aid information discovery, but a person should still check important results.</>,
          ]}
        />
        <Mistake>Thinking that AI understands like a person. It finds patterns in the data it was trained on.</Mistake>
      </>,
    ),
  },
  {
    title: "What big data is",
    content: slide(
      <>
        <Rule>Big data is data that is so large, fast and varied that normal tools cannot handle it. It comes from many sources, such as phones, sensors, shops and social media.</Rule>
        <KeyTable
          title="Big data"
          head={["Item", "Meaning"]}
          aria="Big data. Volume: A very large amount of data. Variety: Many kinds: text, numbers, pictures, sensor data. Velocity: Data arrives and changes very fast. Sources: Phones, sensors, shops, social media."
          rows={[["Volume", "A very large amount of data"], ["Variety", "Many kinds: text, numbers, pictures, sensor data"], ["Velocity", "Data arrives and changes very fast"], ["Sources", "Phones, sensors, shops, social media"]]}
        />
        <Worked
          steps={[
            <>A supermarket records millions of sales. Studying them shows which products sell best on which days.</>,
            <>A weather service combines data from many sensors to forecast rain.</>,
          ]}
        />
        <Mistake>Thinking that big data is just a big spreadsheet. It is too large or fast for ordinary tools.</Mistake>
      </>,
    ),
  },
  {
    title: "How big data relates to AI",
    content: slide(
      <>
        <Rule>AI needs data to learn, and big data supplies it. The more good data an AI system is trained on, the better its predictions can be. Poor or biased data gives poor or biased results.</Rule>
        <KeyTable
          title="The link"
          head={["Idea", "Meaning"]}
          aria="The link. Training data: Data used to teach an AI system. More data: Often better learning. Bias: Unfair or incomplete data gives unfair results. Privacy: Collecting large amounts of personal data needs care."
          rows={[["Training data", "Data used to teach an AI system"], ["More data", "Often better learning"], ["Bias", "Unfair or incomplete data gives unfair results"], ["Privacy", "Collecting large amounts of personal data needs care"]]}
        />
        <Worked
          steps={[
            <>A medical AI trained on thousands of scans learns to spot signs of disease. If the scans came from only one group of people, it may work less well for others.</>,
            <>A company must say what data it collects and protect it.</>,
          ]}
        />
        <Mistake>Trusting an AI answer without checking. A person must judge whether it makes sense.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is AI?</>,
          <>What is big data?</>,
          <>How are AI and big data linked?</>,
          <>Give one risk of AI.</>,
        ]}
        answers={[
          <>Software that learns from data to make predictions or decisions.</>,
          <>Data too large, fast or varied for ordinary tools.</>,
          <>Big data is used to train AI.</>,
          <>Bias or privacy problems.</>,
        ]}
      />,
    ),
  },
];
