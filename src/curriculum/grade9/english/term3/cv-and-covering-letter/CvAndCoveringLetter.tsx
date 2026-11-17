import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './CvAndCoveringLetterContent';

const CvAndCoveringLetter = () => (
  <CapsSubjectTopic
    title="Writing a CV and a Covering Letter"
    subtitle="What a CV provides, how to present it, and the layout and language of a covering letter"
    learnSteps={learnSteps}
    task="gr9-cv-and-covering-letter-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default CvAndCoveringLetter;
