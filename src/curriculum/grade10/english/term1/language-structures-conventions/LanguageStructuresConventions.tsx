import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './LanguageStructuresConventionsContent';

const LanguageStructuresConventions = () => (
  <CapsSubjectTopic
    title="Register, Word Choice and Sentence Structure"
    subtitle="Formal and informal register, word choice, sentences, paragraphs and punctuation"
    learnSteps={learnSteps}
    task="gr10-language-structures-conventions-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageStructuresConventions;
