import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ColdWarOriginsContent';

const ColdWarOrigins = () => (
  <CapsSubjectTopic
    title="The Origins of the Cold War"
    subtitle="Superpowers, containment, Berlin, brinkmanship and who was to blame"
    learnSteps={learnSteps}
    task="gr12-cold-war-origins-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ColdWarOrigins;
