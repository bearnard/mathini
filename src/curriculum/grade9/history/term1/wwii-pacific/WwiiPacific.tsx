import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './WwiiPacificContent';

const WwiiPacific = () => (
  <CapsSubjectTopic
    title="World War II in the Pacific"
    subtitle="Japanese expansion, Pearl Harbor, the camps for Japanese Americans, and prisoners of war"
    learnSteps={learnSteps}
    task="gr9-wwii-pacific-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default WwiiPacific;
