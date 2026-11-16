import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './PoetrySeenUnseenContent';

const PoetrySeenUnseen = () => (
  <CapsSubjectTopic
    title="Reading Poetry: Seen and Unseen"
    subtitle="Imagery, figures of speech, sound devices, tone, mood and theme, and answering poetry questions"
    learnSteps={learnSteps}
    task="gr10-poetry-seen-unseen-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoetrySeenUnseen;
