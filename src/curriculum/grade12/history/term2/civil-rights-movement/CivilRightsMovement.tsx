import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './CivilRightsMovementContent';

const CivilRightsMovement = () => (
  <CapsSubjectTopic
    title="Case Study: the US Civil Rights Movement"
    subtitle="Background, King and non-violence, forms of protest, Little Rock, and short- and long-term gains"
    learnSteps={learnSteps}
    task="gr12-civil-rights-movement-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default CivilRightsMovement;
