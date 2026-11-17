import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './WomenAndPeaceMovementsContent';

const WomenAndPeaceMovements = () => (
  <CapsSubjectTopic
    title="Women's Liberation, Women in South Africa and Peace Movements"
    subtitle="Second-wave feminism, FEDSAW and the 1956 march, the Black Sash, and peace and anti-war protest"
    learnSteps={learnSteps}
    task="gr12-women-and-peace-movements-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default WomenAndPeaceMovements;
