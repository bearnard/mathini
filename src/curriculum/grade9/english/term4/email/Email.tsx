import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './EmailContent';

const Email = () => (
  <CapsSubjectTopic
    title="Writing an E-mail"
    subtitle="The parts of an e-mail, the address, formal and informal register, and the writing process"
    learnSteps={learnSteps}
    task="gr9-email-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Email;
