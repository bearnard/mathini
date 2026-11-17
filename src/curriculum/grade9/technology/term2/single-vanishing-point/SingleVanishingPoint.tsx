import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What does the horizon line stand for in a perspective drawing?",
    options: ["The ground on which the objects stand", "The eye level of the person looking", "The edge of the page", "The top of the tallest object"],
    answer: "The eye level of the person looking",
    explanation: "The horizon is drawn at your eye level, and the vanishing point sits on it.",
  },
  {
    prompt: "In which place does the vanishing point lie in single vanishing point perspective?",
    options: ["On the ground line", "In the middle of the front face", "At the bottom corner of the page", "On the horizon"],
    answer: "On the horizon",
    explanation: "The one vanishing point is always on the horizon line.",
  },
  {
    prompt: "How many vanishing points are used in single vanishing point perspective?",
    options: ["One", "Two", "Three", "Four"],
    answer: "One",
    explanation: "Single vanishing point means one point where the receding lines meet.",
  },
  {
    prompt: "A box stands below the horizon. Which face of it can you see?",
    options: ["The underside", "Neither of the two", "The top", "Only the back"],
    answer: "The top",
    explanation: "A box below your eye level is looked down on, so you see its top face.",
  },
  {
    prompt: "A shelf hangs above the horizon. Which of its faces can you see?",
    options: ["The top", "Neither of the two", "The underside", "The back, only"],
    answer: "The underside",
    explanation: "A shelf above your eye level is looked up at, so you see its underside.",
  },
  {
    prompt: "A box has a front face 80 mm wide. Its back face is drawn 40% of the way to the vanishing point. How wide is the back face?",
    options: ["48 mm", "32 mm", "40 mm", "120 mm"],
    answer: "48 mm",
    explanation: "The back face is 60% of the front: 80 × 0,6 = 48 mm.",
  },
  {
    prompt: "A plank end is 120 mm wide. The far end is drawn 25% of the way to the vanishing point. How wide is the far end?",
    options: ["30 mm", "95 mm", "145 mm", "90 mm"],
    answer: "90 mm",
    explanation: "The far end is 75% of the front: 120 × 0,75 = 90 mm.",
  },
  {
    prompt: "In a perspective drawing, the back face of a box is drawn smaller than the front face. Why?",
    options: ["The back face is made of thinner material", "Things that are further away look smaller", "The light does not reach the back face", "Back faces must always be half size"],
    answer: "Things that are further away look smaller",
    explanation: "Perspective copies how things look: the further away something is, the smaller it appears.",
  },
  {
    prompt: "Light comes from above. Which face of a wooden block is the lightest?",
    options: ["The top", "The front", "The side turned from the light", "The underside"],
    answer: "The top",
    explanation: "The top faces the light most, so it is the lightest face.",
  },
  {
    prompt: "Light comes from the left. On which side does the cast shadow of a block fall?",
    options: ["On the left", "On the right", "Straight above it", "Inside the block"],
    answer: "On the right",
    explanation: "A shadow falls on the side away from the light.",
  },
  {
    prompt: "What does adding wood grain to a drawing of a block show?",
    options: ["The colour of the light", "The vanishing point", "The size of the block", "The texture of the wood"],
    answer: "The texture of the wood",
    explanation: "Grain lines show texture. Colour and shadow add to the effect.",
  },
  {
    prompt: "On the top of a plank that points away from you, which way do the grain lines run?",
    options: ["Parallel to the horizon", "Straight up the page", "Toward the vanishing point", "In small circles"],
    answer: "Toward the vanishing point",
    explanation: "Lines that run back into the picture meet at the vanishing point, so the grain follows them.",
  },
  {
    prompt: "You draw the inside of a classroom looking straight at the back wall. What shape is the back wall?",
    options: ["A true rectangle", "A slanted four-sided shape", "A triangle", "A circle"],
    answer: "A true rectangle",
    explanation: "The back wall faces you, so in one-point perspective it keeps its true shape.",
  },
  {
    prompt: "In the classroom drawing, which lines run to the vanishing point?",
    options: ["The edges of the board on the back wall", "The vertical lines in the corners of the room", "The lines along the horizon", "The edges where the walls meet the floor and ceiling"],
    answer: "The edges where the walls meet the floor and ceiling",
    explanation: "Lines that go back into the picture, like floor, ceiling and wall edges, meet at the vanishing point.",
  },
];

const SingleVanishingPoint = () => (
  <CapsSubjectTopic
    title="Single Vanishing Point Perspective"
    subtitle="Drawing a wooden block and the inside of a classroom"
    learnSteps={learnSteps}
    task="gr9-single-vanishing-point-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default SingleVanishingPoint;
