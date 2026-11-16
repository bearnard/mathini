import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './MidyearExamPreparationContent';

const MidyearExamPreparation = () => (
  <CapsSubjectTopic
    title="Mid-Year Examination Preparation"
    subtitle="The three papers, their marks, time plans and the mistakes that cost marks"
    learnSteps={learnSteps}
    task="gr10-midyear-exam-preparation-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MidyearExamPreparation;
