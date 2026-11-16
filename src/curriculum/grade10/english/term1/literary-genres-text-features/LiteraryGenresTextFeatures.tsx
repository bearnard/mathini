import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './LiteraryGenresTextFeaturesContent';

const LiteraryGenresTextFeatures = () => (
  <CapsSubjectTopic
    title="Literary Genres and Text Features"
    subtitle="Novel, drama and poetry; the parts of a book; how a story is built"
    learnSteps={learnSteps}
    task="gr10-literary-genres-text-features-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LiteraryGenresTextFeatures;
