import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './Paper3Paper4RevisionContent';

const Paper3Paper4Revision = () => (
  <CapsSubjectTopic
    title="Revision: Paper 3 Writing and Paper 4 Oral"
    subtitle="Choosing the essay, transactional text signals, time plans and the oral tasks, with marks shown"
    learnSteps={learnSteps}
    task="gr10-paper3-paper4-revision-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Paper3Paper4Revision;
