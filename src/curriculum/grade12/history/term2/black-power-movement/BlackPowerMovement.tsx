import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './BlackPowerMovementContent';

const BlackPowerMovement = () => (
  <CapsSubjectTopic
    title="Case Study: the Black Power Movement"
    subtitle="Why it arose, Malcolm X and Stokely Carmichael, the Black Panthers, and its gains and limits"
    learnSteps={learnSteps}
    task="gr12-black-power-movement-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default BlackPowerMovement;
