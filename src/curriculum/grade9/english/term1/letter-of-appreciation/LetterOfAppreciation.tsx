import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './LetterOfAppreciationContent';

const LetterOfAppreciation = () => (
  <CapsSubjectTopic
    title="Writing a Letter of Appreciation"
    subtitle="Thanking someone for help or advice: the layout, the main and supporting ideas, and a polite, warm register"
    learnSteps={learnSteps}
    task="gr9-letter-of-appreciation-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LetterOfAppreciation;
