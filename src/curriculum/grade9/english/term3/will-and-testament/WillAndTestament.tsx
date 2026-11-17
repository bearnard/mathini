import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './WillAndTestamentContent';

const WillAndTestament = () => (
  <CapsSubjectTopic
    title="Reading and Writing a Will and Testament"
    subtitle="Key words, the parts of a will, formal language, signing and witnesses, and writing one for a task"
    learnSteps={learnSteps}
    task="gr9-will-and-testament-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default WillAndTestament;
