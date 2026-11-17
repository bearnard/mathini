import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './HardwareMobileTechnologiesContent';

const HardwareMobileTechnologies = () => (
  <CapsSubjectTopic
    title="Hardware: Mobile Technologies and Performance"
    subtitle="Mobile devices, what makes a computer fast, and matching hardware to a purpose"
    learnSteps={learnSteps}
    task="gr12-hardware-mobile-technologies-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default HardwareMobileTechnologies;
