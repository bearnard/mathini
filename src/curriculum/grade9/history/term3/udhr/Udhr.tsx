import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './UdhrContent';

const Udhr = () => (
  <CapsSubjectTopic
    title="The Universal Declaration of Human Rights"
    subtitle="Why it was written, what it says, how strong it is, and apartheid"
    learnSteps={learnSteps}
    task="gr9-udhr-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default Udhr;
