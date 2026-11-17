import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './CloudComputingVirtualisationContent';

const CloudComputingVirtualisation = () => (
  <CapsSubjectTopic
    title="Cloud Computing, SaaS and Virtualisation"
    subtitle="Effect on hardware, software as a service, virtualisation of servers, and arguments for and against"
    learnSteps={learnSteps}
    task="gr12-cloud-computing-virtualisation-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default CloudComputingVirtualisation;
