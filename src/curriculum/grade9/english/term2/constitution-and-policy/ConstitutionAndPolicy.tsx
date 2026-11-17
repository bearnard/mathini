import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ConstitutionAndPolicyContent';

const ConstitutionAndPolicy = () => (
  <CapsSubjectTopic
    title="Writing a Constitution and a Policy"
    subtitle="Features of the rules, the parts of a constitution, formal language, and how a policy differs"
    learnSteps={learnSteps}
    task="gr9-constitution-and-policy-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ConstitutionAndPolicy;
