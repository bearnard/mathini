import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './EssayWritingProcessContent';

const EssayWritingProcess = () => (
  <CapsSubjectTopic
    title="Writing an Essay: Narrative, Descriptive and Argumentative"
    subtitle="The writing process, three essay types and how an essay is marked"
    learnSteps={learnSteps}
    task="gr10-essay-writing-process-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default EssayWritingProcess;
