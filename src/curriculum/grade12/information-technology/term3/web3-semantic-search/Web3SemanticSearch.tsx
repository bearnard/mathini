import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './Web3SemanticSearchContent';

const Web3SemanticSearch = () => (
  <CapsSubjectTopic
    title="Web 3.0, Semantic Search and Online Applications"
    subtitle="Web 1.0, 2.0 and 3.0, the Semantic Web, online applications and storage, and improving searching"
    learnSteps={learnSteps}
    task="gr12-web3-semantic-search-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default Web3SemanticSearch;
