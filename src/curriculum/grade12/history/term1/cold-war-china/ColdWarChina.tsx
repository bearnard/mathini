import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './ColdWarChinaContent';

const ColdWarChina = () => (
  <CapsSubjectTopic
    title="Case Study: China after 1949"
    subtitle="The Sino-Soviet split, the Cultural Revolution, neighbours, a superpower? and new links with the USA"
    learnSteps={learnSteps}
    task="gr12-cold-war-china-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ColdWarChina;
