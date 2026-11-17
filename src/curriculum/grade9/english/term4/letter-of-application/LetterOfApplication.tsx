import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './LetterOfApplicationContent';

const LetterOfApplication = () => (
  <CapsSubjectTopic
    title="Writing a Letter of Application"
    subtitle="The layout of a formal letter, what goes in each paragraph, and formal language"
    learnSteps={learnSteps}
    task="gr9-letter-of-application-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LetterOfApplication;
