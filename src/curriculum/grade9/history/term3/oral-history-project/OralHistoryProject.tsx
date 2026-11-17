import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './OralHistoryProjectContent';

const OralHistoryProject = () => (
  <CapsSubjectTopic
    title="The Oral History and Research Project"
    subtitle="What oral history is, what the project asks, good questions, and interviewing with care"
    learnSteps={learnSteps}
    task="gr9-oral-history-project-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default OralHistoryProject;
