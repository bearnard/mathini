import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './Paper1RevisionContent';

const Paper1Revision = () => (
  <CapsSubjectTopic
    title="Revision: Paper 1, Language in Context"
    subtitle="Comprehension, summary and language structures, with marks shown"
    learnSteps={learnSteps}
    task="gr10-paper1-revision-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Paper1Revision;
