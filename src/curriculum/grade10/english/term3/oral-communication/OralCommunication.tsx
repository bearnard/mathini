import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './OralCommunicationContent';

const OralCommunication = () => (
  <CapsSubjectTopic
    title="Oral Communication: Speeches, Meetings and Discussion"
    subtitle="Listening, delivery, debates and panels, meeting procedure, storytelling"
    learnSteps={learnSteps}
    task="gr10-oral-communication-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default OralCommunication;
