import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a communicable disease?",
    options: ["An illness people can pass on", "An illness that no one can catch", "An illness that comes from the cold", "An illness that comes from a bruise"],
    answer: "An illness people can pass on",
    explanation: "A communicable disease is caused by germs and can pass from one person to another.",
  },
  {
    prompt: "What causes communicable diseases?",
    options: ["Bad weather and cold winter winds", "Germs such as viruses", "Wearing the wrong size of shoes", "Eating far too much sweet food"],
    answer: "Germs such as viruses",
    explanation: "Germs, such as viruses, bacteria and fungi, cause communicable diseases.",
  },
  {
    prompt: "How can a cold spread from one person to another?",
    options: ["By looking at a sick person", "By sharing a long walk", "By being near a very loud noise", "By coughs, sneezes and touch"],
    answer: "By coughs, sneezes and touch",
    explanation: "Cold germs spread in the air from coughs and sneezes, and on hands.",
  },
  {
    prompt: "Which is a good way to stop a cold from spreading?",
    options: ["Cover sneezes and wash hands", "Share your cup with your friends", "Sneeze straight into the open air", "Wipe your nose on your bare sleeve"],
    answer: "Cover sneezes and wash hands",
    explanation: "Covering sneezes and washing hands keeps cold germs from spreading.",
  },
  {
    prompt: "Which sign is typical of mumps?",
    options: ["Itchy spots on the hands and feet", "A long cough that comes at night", "Swollen cheeks and a sore jaw", "A wet, itchy rash between toes"],
    answer: "Swollen cheeks and a sore jaw",
    explanation: "Mumps causes swollen cheeks and a sore jaw, often with fever.",
  },
  {
    prompt: "What are the signs of chickenpox?",
    options: ["A swollen jaw", "A cough for weeks", "Cracked skin between toes", "Itchy spots with blisters"],
    answer: "Itchy spots with blisters",
    explanation: "Chickenpox causes itchy spots with blisters, and a fever.",
  },
  {
    prompt: "A child has chickenpox. What should the child do?",
    options: ["Go to school to see friends", "Scratch the spots as much as possible", "Stay at home until the spots dry up", "Share towels with the family"],
    answer: "Stay at home until the spots dry up",
    explanation: "Chickenpox spreads easily, so the child stays at home and does not scratch.",
  },
  {
    prompt: "How is tuberculosis (TB) spread?",
    options: ["Through the air in coughs", "By swimming in a cold river", "By eating a lot of sweet food", "By walking for long in the sun"],
    answer: "Through the air in coughs",
    explanation: "TB bacteria spread through the air when a person who has TB coughs.",
  },
  {
    prompt: "A cough lasts for more than two weeks. What should be done?",
    options: ["Wait until the winter has ended", "Go to the clinic for a test", "Drink cold water each hour", "Stay away from your classmates"],
    answer: "Go to the clinic for a test",
    explanation: "A cough that lasts more than two weeks is a reason to go to the clinic.",
  },
  {
    prompt: "A classmate is being treated for TB. How should you treat the classmate?",
    options: ["Tease the classmate about it", "With kindness and support", "Stay away from the classmate", "Ask the class to keep away"],
    answer: "With kindness and support",
    explanation: "Anyone can get TB, and a person on treatment needs kindness, not teasing.",
  },
  {
    prompt: "What causes athlete's foot?",
    options: ["A virus in the air", "Bacteria in the water", "Too much exercise", "A fungus"],
    answer: "A fungus",
    explanation: "Athlete's foot is caused by a fungus that grows in warm, damp places.",
  },
  {
    prompt: "How can you help to prevent athlete's foot?",
    options: ["Share your socks with friends", "Keep wet shoes on for a long day", "Dry between your toes well", "Walk barefoot in public showers"],
    answer: "Dry between your toes well",
    explanation: "Dry feet, clean socks and your own towel keep the fungus away.",
  },
];

const CommunicableDiseasesT4 = () => (
  <CapsSubjectTopic
    title="Communicable Diseases"
    subtitle="Colds, mumps, chickenpox, tuberculosis and athlete's foot: causes, signs, prevention and help"
    learnSteps={learnSteps}
    task="gr6-communicable-diseases-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CommunicableDiseasesT4;
