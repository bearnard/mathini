import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ColdWarVietnamContent';

const ColdWarVietnam = () => (
  <CapsSubjectTopic
    title="Case Study: Vietnam 1954 to 1975"
    subtitle="Division, three phases of the war, two perspectives, withdrawal and memory"
    learnSteps={learnSteps}
    task="gr12-cold-war-vietnam-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ColdWarVietnam;
