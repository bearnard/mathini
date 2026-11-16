import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './NovelDramaStudyContent';

const NovelDramaStudy = () => (
  <CapsSubjectTopic
    title="Studying a Novel or Drama"
    subtitle="Plot structure, characterisation, stage directions, writing about literature and the literature papers"
    learnSteps={learnSteps}
    task="gr10-novel-drama-study-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default NovelDramaStudy;
