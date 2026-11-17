import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ComputerManagementContent';

const ComputerManagement = () => (
  <CapsSubjectTopic
    title="Computer Management"
    subtitle="Housekeeping, protecting the system, data integrity, and recommending tasks for a situation"
    learnSteps={learnSteps}
    task="gr12-computer-management-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default ComputerManagement;
