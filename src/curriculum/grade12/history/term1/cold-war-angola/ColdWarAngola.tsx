import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ColdWarAngolaContent';

const ColdWarAngola = () => (
  <CapsSubjectTopic
    title="Africa in the Cold War: Angola"
    subtitle="Competing influence, the civil war, outside powers, Cuito Cuanavale and after 1989"
    learnSteps={learnSteps}
    task="gr12-cold-war-angola-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ColdWarAngola;
