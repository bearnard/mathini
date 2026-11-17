import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './NewWorldOrderContent';

const NewWorldOrder = () => (
  <CapsSubjectTopic
    title="A New World Order: Globalisation, Africa and South Africa"
    subtitle="Western capitalism and the IT revolution, North-South and BRICS, reactions to globalisation, and South Africa's unfinished liberation"
    learnSteps={learnSteps}
    task="gr12-new-world-order-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default NewWorldOrder;
