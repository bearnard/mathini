import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ComprehensionSummaryContent';

const ComprehensionSummary = () => (
  <CapsSubjectTopic
    title="Comprehension and Summary"
    subtitle="Reading strategies, inference, fact and opinion, summary writing and language in context"
    learnSteps={learnSteps}
    task="gr10-comprehension-summary-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ComprehensionSummary;
