import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Diverse religions and belief systems",
    content: slide(
      <>
        <Rule>South Africa has many religions and belief systems, including Christianity, Islam, Hinduism, Judaism, African traditional religion, Buddhism and non-religious beliefs. The Bill of Rights protects freedom of religion, belief and opinion. People can practise their religion and must also respect the right of others to hold different beliefs.</Rule>
        <KeyTable
          title="Religion and belief in South Africa"
          head={["Idea", "Meaning"]}
          aria="Religion and belief in South Africa. Diversity: Many religions and beliefs live side by side. Freedom of belief: The Bill of Rights protects it. Respect: You respect others’ beliefs even when you differ. Shared values: Many religions teach compassion, honesty and service. Non-religious views: Also protected as beliefs."
          rows={[["Diversity", "Many religions and beliefs live side by side"], ["Freedom of belief", "The Bill of Rights protects it"], ["Respect", "You respect others’ beliefs even when you differ"], ["Shared values", "Many religions teach compassion, honesty and service"], ["Non-religious views", "Also protected as beliefs"]]}
        />
        <Worked
          steps={[
            <>A school lets learners of different faiths take time off for important religious days. This respects freedom of belief.</>,
            <>Neighbours of different faiths help each other during a community event.</>,
          ]}
        />
        <Mistake>Thinking that only one religion is allowed in South Africa. The Constitution protects freedom of religion, belief and opinion for everyone.</Mistake>
      </>,
    ),
  },
  {
    title: "Contributions to a harmonious society",
    content: slide(
      <>
        <Rule>Religions and belief systems contribute to society by teaching values such as respect, caring for others, honesty and forgiveness, and by running community projects, schools, food programmes and counselling. They can bring people together, as in interfaith events. When beliefs are used to exclude or harm others, harmony is damaged.</Rule>
        <KeyTable
          title="What religions can contribute"
          head={["Contribution", "Example"]}
          aria="What religions can contribute. Values: Respect, honesty and compassion. Community service: Food parcels and support for the poor. Comfort and support: Counselling during hardship. Bringing people together: Interfaith gatherings. Reconciliation: Encouraging forgiveness and peace."
          rows={[["Values", "Respect, honesty and compassion"], ["Community service", "Food parcels and support for the poor"], ["Comfort and support", "Counselling during hardship"], ["Bringing people together", "Interfaith gatherings"], ["Reconciliation", "Encouraging forgiveness and peace"]]}
        />
        <Worked
          steps={[
            <>A faith-based organisation runs a soup kitchen open to everyone in the area.</>,
            <>Leaders from different religions speak together at a community event for peace.</>,
          ]}
        />
        <Mistake>Believing that people of different religions cannot live together peacefully. Many communities do.</Mistake>
      </>,
    ),
  },
  {
    title: "Clarify your own values",
    content: slide(
      <>
        <Rule>Your own values and beliefs guide your choices. To clarify them, ask what matters most to you, where your beliefs come from, whether your actions match your values and how your beliefs affect others. You can hold your beliefs firmly and still respect people who disagree.</Rule>
        <KeyTable
          title="Questions to clarify your values"
          head={["Question", "Why it helps"]}
          aria="Questions to clarify your values. What matters most to me?: Names your core values. Where do my beliefs come from?: Family, culture, faith or experience. Do my actions match my values?: Shows where to change. How do my choices affect others?: Builds responsibility. Can I respect a different view?: Practises tolerance."
          rows={[["What matters most to me?", "Names your core values"], ["Where do my beliefs come from?", "Family, culture, faith or experience"], ["Do my actions match my values?", "Shows where to change"], ["How do my choices affect others?", "Builds responsibility"], ["Can I respect a different view?", "Practises tolerance"]]}
        />
        <Worked
          steps={[
            <>You notice that you value honesty, so you decide to own up to a mistake rather than blame someone else.</>,
            <>You listen to a friend’s different belief without trying to change it.</>,
          ]}
        />
        <Mistake>Thinking that respecting a view means that you must agree with it. You can respect a person and still disagree.</Mistake>
      </>,
    ),
  },
  {
    title: "Moral dilemmas",
    content: slide(
      <>
        <Rule>A moral dilemma is a situation in which values conflict and there is no easy answer. Examples include right to life and euthanasia, cultural practices and traditions, and economic or environmental issues. To think about a dilemma: identify the issue, list the values and rights involved, listen to different views, think about the consequences and respect others’ opinions. On euthanasia, people argue on both sides, and in South Africa assisted dying is currently not lawful.</Rule>
        <KeyTable
          title="Euthanasia: two sides of the debate"
          head={["Some people argue that", "Others argue that"]}
          aria="Euthanasia: two sides of the debate. People should be free to choose how their life ends: Life is precious and must be protected. It can relieve unbearable suffering: Good palliative care can ease pain. Dignity is part of a good death: There is a risk of pressure on vulnerable people. A person’s autonomy should be respected: Doctors are meant to heal, not to end life. Many religions are asked to weigh compassion: Many religions teach that life is sacred."
          rows={[["People should be free to choose how their life ends", "Life is precious and must be protected"], ["It can relieve unbearable suffering", "Good palliative care can ease pain"], ["Dignity is part of a good death", "There is a risk of pressure on vulnerable people"], ["A person’s autonomy should be respected", "Doctors are meant to heal, not to end life"], ["Many religions are asked to weigh compassion", "Many religions teach that life is sacred"]]}
        />
        <Worked
          steps={[
            <>A class holds a respectful debate on euthanasia in which each person listens to both sides before speaking.</>,
            <>You explain a view with reasons and acknowledge the best point of the other side.</>,
          ]}
        />
        <Mistake>Insulting people who hold a different view. In a dilemma, your task is to understand and weigh reasons, not to attack.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which right protects different religions?</>,
          <>Name one contribution of religions to society.</>,
          <>What is a moral dilemma?</>,
          <>How should you treat a view you disagree with?</>,
        ]}
        answers={[
          <>The right to freedom of religion, belief and opinion.</>,
          <>Values, community service or support.</>,
          <>A situation in which values conflict and there is no easy answer.</>,
          <>Respectfully, listening to the reasons.</>,
        ]}
      />,
    ),
  },
];
