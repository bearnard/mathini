import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A healthy, balanced lifestyle",
    content: slide(
      <>
        <Rule>A healthy lifestyle looks after all parts of you: physical, psychological, social, emotional and spiritual. Positive influences such as role models, family, your values, your belief system and a supportive community help you to make healthy choices. Poverty, low literacy and an unsafe environment make healthy choices harder.</Rule>
        <KeyTable
          title="Facets of a balanced lifestyle"
          head={["Facet", "Example of looking after it"]}
          aria="Facets of a balanced lifestyle. Physical: Exercise, sleep and a balanced diet. Psychological: Managing stress and thinking positively. Social: Spending time with supportive friends. Emotional: Talking about your feelings. Spiritual: Living by your values and beliefs."
          rows={[["Physical", "Exercise, sleep and a balanced diet"], ["Psychological", "Managing stress and thinking positively"], ["Social", "Spending time with supportive friends"], ["Emotional", "Talking about your feelings"], ["Spiritual", "Living by your values and beliefs"]]}
        />
        <Worked
          steps={[
            <>You play sport (physical), talk to a friend after a hard day (emotional) and spend time at your place of worship or in quiet reflection (spiritual).</>,
            <>A positive role model in your community shows you how to make healthy choices.</>,
          ]}
        />
        <Mistake>Thinking that health is only about your body. Your mind, feelings, relationships and values matter too.</Mistake>
      </>,
    ),
  },
  {
    title: "Why accidents happen",
    content: slide(
      <>
        <Rule>Accidents are not simply bad luck. They have causes: a lack of knowledge or skills, unsafe attitudes and behaviour, unsafe environments and emotional factors such as anger or stress. Accidents can be road accidents, accidents at home, at sport or at work, and they can have physical, emotional, social and economic effects on you and on others.</Rule>
        <KeyTable
          title="Causes of accidents"
          head={["Cause", "Example"]}
          aria="Causes of accidents. Lack of knowledge or skills: Using a machine without training. Unsafe attitude or behaviour: Walking in the road while looking at a phone. Unsafe environment: A broken stair or a badly lit road. Emotional factors: Rushing when you are angry or upset. Alcohol and drugs: Slower reactions and poor judgement."
          rows={[["Lack of knowledge or skills", "Using a machine without training"], ["Unsafe attitude or behaviour", "Walking in the road while looking at a phone"], ["Unsafe environment", "A broken stair or a badly lit road"], ["Emotional factors", "Rushing when you are angry or upset"], ["Alcohol and drugs", "Slower reactions and poor judgement"]]}
        />
        <Worked
          steps={[
            <>A learner crosses the road while looking at a phone and nearly gets hit. The cause is an unsafe behaviour.</>,
            <>A broken step at a school is an unsafe environment and should be reported.</>,
          ]}
        />
        <Mistake>Believing that accidents just happen. Most have causes that can be changed.</Mistake>
      </>,
    ),
  },
  {
    title: "Preventing accidents",
    content: slide(
      <>
        <Rule>You can reduce accidents by learning safety skills, wearing a seatbelt or a helmet, crossing roads carefully, keeping dangerous items away from children and reporting unsafe places. Staying calm when you are angry also lowers the risk. When someone is injured, call for help and stay with the person.</Rule>
        <KeyTable
          title="Prevention"
          head={["Situation", "Safe choice"]}
          aria="Prevention. Travelling in a car: Wear a seatbelt. Cycling: Wear a helmet and be visible. Walking near a road: Use crossings and keep your phone away. Using tools: Learn how and wear protection. An injury: Call for help and stay with the person."
          rows={[["Travelling in a car", "Wear a seatbelt"], ["Cycling", "Wear a helmet and be visible"], ["Walking near a road", "Use crossings and keep your phone away"], ["Using tools", "Learn how and wear protection"], ["An injury", "Call for help and stay with the person"]]}
        />
        <Worked
          steps={[
            <>At night you walk on the pavement wearing something bright so that drivers can see you.</>,
            <>You report a loose manhole cover to the school or the municipality.</>,
          ]}
        />
        <Mistake>Taking a risk because it is only a short trip. Most accidents happen on ordinary journeys.</Mistake>
      </>,
    ),
  },
  {
    title: "Nutrition and your activity",
    content: slide(
      <>
        <Rule>Food gives you energy and the nutrients to grow and to repair your body. A balanced diet includes starchy foods, vegetables and fruit, protein foods such as beans, eggs, meat or fish, dairy, and a small amount of fat, sugar and salt. Water keeps you hydrated, which matters when you are active. Eating a variety of foods supports sport, study and health.</Rule>
        <KeyTable
          title="A balanced plate"
          head={["Food group", "What it gives you"]}
          aria="A balanced plate. Starchy foods: Energy for the day and for sport. Vegetables and fruit: Vitamins, minerals and fibre. Protein foods: Growth and repair of the body. Dairy: Calcium for strong bones. Water: Hydration for body and brain."
          rows={[["Starchy foods", "Energy for the day and for sport"], ["Vegetables and fruit", "Vitamins, minerals and fibre"], ["Protein foods", "Growth and repair of the body"], ["Dairy", "Calcium for strong bones"], ["Water", "Hydration for body and brain"]]}
        />
        <Worked
          steps={[
            <>Before a match you eat a meal with starchy food, and you drink water during the game.</>,
            <>You choose fruit instead of a sugary snack in between meals.</>,
          ]}
        />
        <Mistake>Skipping breakfast to save time. A good meal gives you energy for the day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name three facets of a balanced lifestyle.</>,
          <>Give one cause of accidents.</>,
          <>What should you wear in a car?</>,
          <>Why do you drink water when you are active?</>,
        ]}
        answers={[
          <>Physical, emotional and social.</>,
          <>An unsafe attitude, an unsafe environment or lack of skills.</>,
          <>A seatbelt.</>,
          <>To stay hydrated.</>,
        ]}
      />,
    ),
  },
];
