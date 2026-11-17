import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './SoftwareMethodologiesDesignToolsContent';

const SoftwareMethodologiesDesignTools = () => (
  <CapsSubjectTopic
    title="Software Methodologies and Design Tools"
    subtitle="Waterfall, RAD, incremental and agile; TOE, IPO, CRC and UML; noun-verb analysis and starting the PAT"
    learnSteps={learnSteps}
    task="gr12-software-methodologies-design-tools-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default SoftwareMethodologiesDesignTools;
