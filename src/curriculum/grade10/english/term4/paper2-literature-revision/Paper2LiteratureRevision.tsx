import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './Paper2LiteratureRevisionContent';

const Paper2LiteratureRevision = () => (
  <CapsSubjectTopic
    title="Revision: Paper 2, Literature"
    subtitle="Seen and unseen poetry, contextual questions and the literary essay, with marks shown"
    learnSteps={learnSteps}
    task="gr10-paper2-literature-revision-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Paper2LiteratureRevision;
