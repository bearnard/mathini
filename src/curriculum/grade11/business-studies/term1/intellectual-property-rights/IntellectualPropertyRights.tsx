import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is intellectual property?',
    content: slide(
      <>
        <Rule>Intellectual property is a creation of the mind, such as a song, an invention or a brand name, that the law protects. The owner has intellectual property rights, which means that other people may not use the creation without permission. The three rights in this lesson are copyright, a patent and a trade mark.</Rule>
        <FactCards
          cards={[
            { title: 'Copyright', line1: 'original books, music,', line2: 'art and software' },
            { title: 'Patent', line1: 'a new invention', line2: 'or process' },
            { title: 'Trade mark', line1: 'a name, logo or slogan', line2: 'for goods or services' },
            { title: 'Piracy', line1: 'illegal copying or', line2: 'selling of these' },
          ]}
          aria="Intellectual property rights. Copyright protects original books, music, art and software. A patent protects a new invention or process. A trade mark protects a name, logo or slogan for goods or services. Piracy is illegal copying or selling of these."
        />
        <Worked
          title="Name the creation"
          steps={[
            'A learner writes a short story: this is an original work.',
            'An engineer designs a new type of water pump: this is an invention.',
            'A bakery chooses a name and a logo: this is a brand.',
          ]}
        />
        <Mistake>Thinking that intellectual property is something you can touch. The right protects the idea or creation, not only the object that carries it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Copyright, patent and trade mark',
    content: slide(
      <>
        <Rule>Copyright protects an original creative work, and it exists as soon as the work is made. A patent protects a new invention, and the owner has the sole right to make and sell it for a limited period. A trade mark is a sign, name or logo that tells customers whose goods or services they are buying.</Rule>
        <FactCards
          cards={[
            { title: 'Copyright', line1: 'the creator decides who', line2: 'may copy the work' },
            { title: 'Patent', line1: 'sole right to make and', line2: 'sell, for a time' },
            { title: 'Trade mark', line1: 'shows who made', line2: 'the product' },
            { title: 'Owner', line1: 'may sell or licence', line2: 'the right' },
          ]}
          aria="What each right gives the owner. Copyright: the creator decides who may copy the work. A patent: the sole right to make and sell for a time. A trade mark: shows who made the product. The owner may sell or licence the right."
        />
        <Worked
          title="Choose the right"
          steps={[
            'A band records a new song: copyright.',
            'A company invents a new solar charger: a patent.',
            'A shop prints its logo on its carrier bags: a trade mark.',
          ]}
        />
        <Mistake>Mixing up a patent and a trade mark. A patent protects a new invention and a trade mark protects the name or logo of a product.</Mistake>
      </>,
    ),
  },
  {
    title: 'Piracy and what a business can do',
    content: slide(
      <>
        <Rule>Piracy is the illegal copying, selling or use of someone else's protected work, such as copied films, software and fake branded goods. Piracy takes sales away from the real owner, costs jobs and tax income, and can put unsafe goods in the market. A business can protect itself by registering its rights, by giving licences, by reporting piracy and by teaching customers to buy the real product.</Rule>
        <FactCards
          cards={[
            { title: 'Harm', line1: 'lost sales, jobs', line2: 'and tax income' },
            { title: 'Risk', line1: 'fake goods may', line2: 'be unsafe' },
            { title: 'Protect', line1: 'register the patent', line2: 'or trade mark' },
            { title: 'Act', line1: 'report copies and', line2: 'inform customers' },
          ]}
          aria="Piracy and the response. Harm: lost sales, jobs and tax income. Risk: fake goods may be unsafe. Protect: register the patent or trade mark. Act: report copies and inform customers."
        />
        <Worked
          title="Respond to piracy"
          steps={[
            'A clothing brand finds fake shirts with its logo at a market.',
            'This is piracy of its trade mark: it loses sales and its name is damaged.',
            'The brand reports the sellers and tells customers how to spot the real product.',
          ]}
        />
        <Mistake>Believing that buying a copied product only harms a big company. Piracy also costs jobs, and fake goods can be unsafe for the buyer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which right protects a new invention?</>,
          <>A shop's logo is copied onto fake goods. Which right is infringed?</>,
          <>Give one effect of piracy on a business.</>,
          <>Does copyright need to be applied for before a song is protected?</>,
        ]}
        answers={[
          <>A patent.</>,
          <>The trade mark.</>,
          <>Lost sales, lost jobs or damage to its name.</>,
          <>No. It exists as soon as the work is made.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is a form of intellectual property?",
    options: ["A delivery truck", "A shop's stock", "A new song", "A bank loan"],
    answer: "A new song",
    explanation: "A song is a creation of the mind.",
  },
  {
    prompt: "Which right protects an original novel from being copied?",
    options: ["Copyright", "A patent", "A trade mark", "A licence fee"],
    answer: "Copyright",
    explanation: "Copyright protects original creative works.",
  },
  {
    prompt: "Which right protects a newly invented water filter?",
    options: ["Copyright", "A trade mark", "A franchise", "A patent"],
    answer: "A patent",
    explanation: "A patent protects an invention.",
  },
  {
    prompt: "Which right protects the logo of a clothing brand?",
    options: ["A patent", "A trade mark", "Copyright on a novel", "A partnership"],
    answer: "A trade mark",
    explanation: "A trade mark identifies a brand.",
  },
  {
    prompt: "When does copyright in a painting begin?",
    options: ["After ten years", "When the painting is made", "Only when the work is sold", "When it is shown on television"],
    answer: "When the painting is made",
    explanation: "Copyright exists once the original work is made.",
  },
  {
    prompt: "How long does the owner of a patent hold the sole right to make and sell the invention?",
    options: ["Forever", "For one day", "Only until it is first sold", "For a limited period"],
    answer: "For a limited period",
    explanation: "A patent gives the sole right for a limited time.",
  },
  {
    prompt: "What is piracy?",
    options: ["Illegally copying or selling protected goods", "Buying stock from a registered wholesaler", "Registering a new brand with the state", "Paying a yearly licence fee to the owner"],
    answer: "Illegally copying or selling protected goods",
    explanation: "Piracy is illegal use of someone's protected work.",
  },
  {
    prompt: "A market stall sells fake branded shoes with a copied logo. Which right is infringed?",
    options: ["The patent on a pump", "The copyright on a novel", "The trade mark", "The lease on the stall"],
    answer: "The trade mark",
    explanation: "A copied logo infringes the trade mark.",
  },
  {
    prompt: "A shop sells burnt copies of a new film. Which right is infringed?",
    options: ["A trade mark", "A patent", "A lease", "Copyright"],
    answer: "Copyright",
    explanation: "A film is an original creative work protected by copyright.",
  },
  {
    prompt: "Which of these is an effect of piracy on the real owner?",
    options: ["Higher sales", "Lost sales and lost jobs", "Lower costs", "Free advertising"],
    answer: "Lost sales and lost jobs",
    explanation: "Pirated goods take sales away from the owner.",
  },
  {
    prompt: "Why can fake medicines and electrical goods be dangerous?",
    options: ["They may be unsafe for the buyer", "They always cost much more", "They are always better made", "They are taxed twice by the state"],
    answer: "They may be unsafe for the buyer",
    explanation: "Counterfeit goods are not tested like the real product, so they may be unsafe.",
  },
  {
    prompt: "A brand wants to stop others from using its name. What should it do?",
    options: ["Raise its prices", "Close down its factory", "Register its trade mark", "Sell shares to the public"],
    answer: "Register its trade mark",
    explanation: "Registering the trade mark protects the name.",
  },
  {
    prompt: "Which action helps a business deal with piracy?",
    options: ["Ignoring the copies in the market", "Selling the copies in its own shops", "Reporting copies and informing buyers", "Lowering the quality of its own goods"],
    answer: "Reporting copies and informing buyers",
    explanation: "Reporting and educating customers reduce piracy.",
  },
  {
    prompt: "May the owner of a patent allow another firm to make the invention?",
    options: ["Yes, by giving it a licence", "No, never", "Only after the patent expires", "Only to the government"],
    answer: "Yes, by giving it a licence",
    explanation: "A licence lets another party use the right with the owner's permission.",
  },
];

const IntellectualPropertyRights = () => (
  <CapsSubjectTopic
    title="Intellectual Property Rights"
    subtitle="Copyright, patents, trade marks and piracy"
    learnSteps={learnSteps}
    task="gr11-intellectual-property-rights-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default IntellectualPropertyRights;
