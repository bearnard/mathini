import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './InternetServicesTechnologiesContent';

const InternetServicesTechnologies = () => (
  <CapsSubjectTopic
    title="Internet Services Technologies"
    subtitle="Cookies and databases, scripts and AJAX, PHP and JavaScript, XML, and CSS"
    learnSteps={learnSteps}
    task="gr12-internet-services-technologies-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default InternetServicesTechnologies;
