import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ImaginativeTransactionalContent';

const ImaginativeTransactional = () => (
  <CapsSubjectTopic
    title="Imaginative and Transactional Writing"
    subtitle="Choosing the right text, register, a model letter, imaginative writing and editing"
    learnSteps={learnSteps}
    task="gr10-imaginative-transactional-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ImaginativeTransactional;
